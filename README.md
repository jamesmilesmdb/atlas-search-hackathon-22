<div id="top"></div>

# Atlas Search Hackathon

This is a solution template for the Atlas Search Hackaton. 

You can clone this repository to easily track each of the tasks and to simplify the submission of your solutions.

   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```

<!-- ABOUT THE PROJECT -->
## About The Project

Link to the presented deck with included instructions [here](https://docs.google.com/presentation/d/19pNnkgaQd7z3RDX9f71KL2ZodbzogZzNoWGGbjBPrDs/edit#slide=id.g118e2757ad8_0_2560)

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Hackathon Challenges

- Analytics (Aggregation Framework, MQL)
    - [ ] List top 10 products based on score and number of reviews
    - [ ] List 10 products where most questions have a no answer
    - [ ] List top 10 most polarising products with highest numbers of negative and positive scores while having the least scores in the middle
- Data Modelling (Users, Orders, Wishlist)
    - [ ] Create a schema and data model to represent users, their orders and their wishlist
    - [ ] Add a field for each document representing how often it was added to a wishlist
    - [ ] Create a function which adds a product to the users wishlist and updates the count how often it was added to a wishlist (demonstrate triggers usage)
- Atlas Search (Autocomplete, Compound, Facets, Multi)
    - [ ] Create an index for autocompletion on product names and an aggregation pipeline which returns 10 products based on a partial product name (bonus support multiple languages)
    - [ ] Calculate the number of products for each category with search facets
    - [ ] Search for products based on multiple fields
- Expose the created features as secure APIs for Frontend Apps (REST API, Realm Functions, GraphQL)
    - [ ] Create an API to query for products using the autocomplete aggregation
    - [ ] Create an API to add and remove products to the users wishlist
    - [ ] Create an API to query for products by multiple fields (cross collection search, product score threshold)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Below are the steps needed to get started with the Atlas Search Hackathon.

1. Create a free Atlas account at [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Load the provided dataset
   ```sh
   mongorestore --uri "mongodb+srv://username:password@your-atlas-uri.net/" /dump-directory
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Submission

1. Fork the Project
2. Create your Branch (`git checkout -b solution/TeamX`)
3. Commit your Changes (`git commit -m 'Added solution to challenge X'`)
4. Push to the Branch (`git push origin solution/TeamX`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Artem Adams - [artem.adams@mongodb.com](mailto:artem.adams@mongodb.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: https://webimages.mongodb.com/_com_assets/cms/ktxaqsnnbqbx3o876-search_Slalom2.svg?ixlib=js-3.5.1&auto=format%2Ccompress&w=594
