/*//  Initialize variables
let query = ""
let req = {}
let netID = "dmk88050"
let pw = "Dmk!22099"
let results = []

//  Textaread shows customer names upon loading

customerSelect.onshow=function(){

//  SELECT CODE Cleaned up
  query = "SELECT * FROM customer375"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    console.log(`The results are \n ${results}`)
    if (results.length == 0)
      lblMessage.value = "There are no pets in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"  
      txtaCustomer.value = message
    } // end else

  } else // the transit didn't work - bad wifi? server turned off?
    lblMessage.value = "Error code: " + req.status
}*/