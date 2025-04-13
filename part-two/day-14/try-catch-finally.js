// try-catch-finally

try {
    
} catch (error) {
    
}finally{

}

function processInformation(information) {
    try {
       console.log("Processing information");
       if(!information) throw new Error("No information found")
        console.log("Information processed");
    } catch (error) {
        console.log(error.message);
    }finally{
      console.log("Closing database found");
    }
}

processInformation("Dilip is working")