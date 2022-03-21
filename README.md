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

[![Product Name Screen Shot][product-screenshot]](https://www.mongodb.com/atlas/search)

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
    - [ ] Build a search pipeline that uses $search to query for products across the name field and returns the top 12 matches
    - [ ] Expand your search pipeline to search across multiple fields allowing for misspelled words
    - [ ] Build a search pipeline that combines 2 or more search operators
    - [ ] There are 16 *sponsored* products in the data set. Build a compound search query to find these items and increase their score so they are returned first
    - [ ] Create a new search index to allow for the autocomplete data type on only the product’s name field
    - [ ] Create autocompletion for product names and an aggregation pipeline which returns 10 products based on a partial product name
    - [ ] Searching the store for “carpet” brings limited results, unlike “rugs.” Create a Synonym source collection to allow “carpet” to be matched to “rug”
    - [ ] Build a search pipeline that will return a “rug” when looking for “carpet.”

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
4. (Optional) Install the MongoDB Visual Studio Code extension from [https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)
   [![Vscode Screen Shot][vscode-screenshot]](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)

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
[vscode-screenshot]: https://github.com/mongodb-js/vscode/raw/main/resources/screenshots/query-translator.png
