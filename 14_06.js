// task 1/

// async function updateProfile(data){
//      try {
//         const user = await verifyToken(data.token);
//         const result = await updateDB(user.id, data);

//         console.log("Profile updated:", result);
//     } catch (err) {
//         console.error("Error updating profile:", err.message);
//     }
// }

/////////////////////////////

// task 2 /

// async function getAuthorLastPost(authorId) {
//     try{
//         const author = await fetchAuthor(authorId)
//         const posts = await fetchPosts(authorId)

//         return posts[posts.length - 1];
//     }catch{
//         console.log(error);
//     }
// }

// ///////////////////////


// task 3 /

// async function fetchAllCategoriesDetalis() {
//     try{
//         const categories = await getCategories()
//         const promise = await categories.map(cat =>
//         fetchCategoryDetail(cat.id)
//     )
//     const details = await Promise.all(promise);

//     console.log("All details: ", details);
//     }catch (err){
//         console.log(err);
//     }
    
// }

///////////////


// task 4 /

// function fetchConfig(){
//     return readConfigFile()
//     .then(port => { console.log(port);
//     })
//     .catch(err => {
//         console.log("Using default port 3000");
//         return 3000;
//     }
//     )
// }

///////////////////

// task 5 /

// function initializeServer(){
//     connectToDatabase()
//     .then(connection => {
//         console.log(connection);
        
//     })

//     .then(connection => {
//         const serverParams = loadParams(connection)
//         return serverParams;
//     })
// }


///////////////////////

// task 6 /

function processFilesSequentially(files) {
    return files.reduce((promiseChain, file) => {
        return promiseChain
            .then(() => uploadFile(file))
            .then(() => {
                console.log(`${file} uploaded`);
            });
    }, Promise.resolve())
    .then(() => {
        console.log("All done!");
    });
}