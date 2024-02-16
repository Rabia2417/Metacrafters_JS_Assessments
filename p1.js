/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, studentID, rollNo, spe) {
    var nft = {
        "name": name, 
        "ID": studentID, 
        "Roll_No": rollNo, 
        "Course": spe
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: \t\t\t" + nfts[i].name);
        console.log("Student ID: \t" + nfts[i].ID);
        console.log("Roll Number: \t" + nfts[i].Roll_No);
        console.log("Specialisation: " + nfts[i].Course + "\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of nfts: " + nfts.length);
}

// call your functions below this line

mintNFT("Rabia", 1234, 1, "CSE");
mintNFT("Sakshi", 1235, 2, "CSE");
mintNFT("Rakesh", 1236, 3, "AI & DS");
mintNFT("Rajeev", 1237, 4, "AI & DS");
console.log("Minted NFTs are: \n");
listNFTs();
getTotalSupply();
