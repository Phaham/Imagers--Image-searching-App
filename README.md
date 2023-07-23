# Image Search


### Features
- Search Images
- Download Images

### Technology Used
* **React**
    * **Material-UI** - Icons and Prebuilt Components
     * **react-router-dom** - To manage routing between different pages
* **Netlify** (Hosting service)


### Preview
<img src="./public/preview.gif" />


### To run this on Local machine
* Clone the repo, install all the dependcies from package.json by typing `npm install`
* Create a API KEY from [unsplash](https://unsplash.com/oauth/applications)
* Create a file with name `secrets.js` inside `src` and place your api key as shown below
```javascript 
        export const API_KEY = 'PLACE YOUR API KEY HERE'   
```
* Run app by typing `npm start`