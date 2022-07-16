const profile = require("./template_profile.js");
const card = require("./template_card.js");

class teamProfile {
   constructor(teamArray) {
      this.createProfile(teamArray)
   }

   createCards(teamArray) {
      var cards = ""

      for (let i = 0; i < teamArray.length; i++) {
         let currentCard = card;
            currentCard = currentCard.replace("{{NAME}}", teamArray[i].name);
            currentCard = currentCard.replace("{{ROLE}}", teamArray[i].role);
            currentCard = currentCard.replace("{{ID}}", teamArray[i].id);
            currentCard = currentCard.replace("{{EMAIL}}", teamArray[i].email)
               .replace("{{EMAIL}}", teamArray[i].email);
            if (teamArray[i].github)
               currentCard = currentCard.replace("{{GITHUB}}", teamArray[i].github)
                  .replace("{{GITHUB}}", teamArray[i].github);
            if (teamArray[i].school)
               currentCard = currentCard.replace("{{SCHOOL}}", teamArray[i].school);
         cards += currentCard;
      }

      return cards;
   }
   
   createProfile(teamArray) {
      this.html = profile.replace("{{CARDS}}", this.createCards(teamArray));
   }
}

//var e = new teamProfile([{name: "LUNA", id: "23423", email: "LSDKJFS", 
//   github: "github.com/snowlune"}]);
//console.log(e.html)

module.exports = { teamProfile }
