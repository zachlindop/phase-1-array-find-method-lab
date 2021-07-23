function superbowlWin(record){
  const foundSeason = record.find(season => season.result ==="W")
  return foundSeason ? foundSeason.year : undefined
}










//function superbowlWin(myArray) {
//    let yearWin = myArray.find(element => element.result === "W")
//      return yearWin.year
//  }
//  superbowlWin(record)
//
//
//function isOdd(element, index, array) {
//    return (element % 2 === 1);
//  }
// 
//  
//  function superbowlWin(bigArray){
//      let yearWin = bigArray.find(element)
//}