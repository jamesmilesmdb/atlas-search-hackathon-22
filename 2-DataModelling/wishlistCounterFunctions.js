//Database Scheduler triggered on update to DB User collection.

exports = function(changeEvent) {
    
    const { updateDescription, fullDocument } = changeEvent;
    
    const updatedFields = Object.keys(updateDescription.updatedFields);
    const isWishlistUpdated = updatedFields.some(field => 
    field.match(/wishlist/)
    );
    
    if (isWishlistUpdated) {
      const wishlist = fullDocument.wishlist;
      const itemId = wishlist[wishlist.length - 1].item_id;
      
      const mongodb = context.services.get("DemoCluster");
      const products = mongodb.db("mongoshop").collection("products");
      
      products.updateMany({"item_id": itemId},
        {
          $inc: {wishlist_count: 1}
        });
      
    }
};

//Scheduler trigger run once a week.
exports = async () => {
  
  const mongodb = context.services.get("DemoCluster");
  const products = mongodb.db("mongoshop").collection("products");
  
  const allItems = await products.find().toArray();

  allItems.forEach((x) => {
    products.updateOne({"item_id": x.item_id}, {$set: {"wishlist_adds_per_week": x.wishlist_count, "wishlist_count": 0}});
  });

};
