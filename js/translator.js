/**
 * Created by Syntex on 2016-03-01.
 */
$("#languageSwitcher").click(function ()
{
	console.log("Pressed");
	if ($(this).html() === "English")
	{
		selectedLanguage = "English";

		$("#peopleHeading").html("Character");
		$("#peopleDescription").html("Gives you a random generated name for a character.");
		$("#thingsHeading").html("Villages, Inns & Plants");
		$("#thingsDescription").html("Gives you a random generated name for a village, inn or plant.");

		ResetNamePeopleResultsEnglish();
		ResetNameThingsResultsEnglish();

		$("#genderFemale").get(0).nextSibling.textContent = "Woman";

		$("#mittlandare").html("Mittlander");
		$("#stormlandare").html("Stormlander");
		$("#virann").html("Viranns");
		$("#dvarg").html("Dwarves");
		$("#alf").html("Elves");
		$("#by").html("Village");
		$("#vardshus").html("Inn");
		$("#vaxt").html("Plant");

		$("#languageSwitcher").html("Svenska");
		return;
	}

	if ($(this).html() === "Svenska")
	{
		selectedLanguage = "Svenska";

		$("#peopleHeading").html("Karaktär");
		$("#peopleDescription").html("Ger dig ett slumpat namn för en karaktär.");
		$("#thingsHeading").html("Byar, Värdshus & Växter");
		$("#thingsDescription").html("Ger dig ett slumpat namn för en by, ett värdshus eller en växt.");

		ResetNamePeopleResultsSwedish();
		ResetNameThingsResultsSwedish();

		$("#mittlandare").html("Mittländare");
		$("#stormlandare").html("Stormländare");
		$("#virann").html("Virann");
		$("#dvarg").html("Dvärg");
		$("#alf").html("Alf");
		$("#by").html("By");
		$("#vardshus").html("Värdshus");
		$("#vaxt").html("Växt");

		$("#genderFemale").get(0).nextSibling.textContent = "Kvinna";
		$("#languageSwitcher").html("English");
		return;
	}

});

$("#gender input:radio").change(function ()
{
	if (selectedLanguage === "Svenska")
	{
		ResetNamePeopleResultsSwedish();
	}
	if (selectedLanguage === "English")
	{
		ResetNamePeopleResultsEnglish();
	}
});

if (selectedLanguage === "English")
{
	if (value === "mittlandare")
	{
		prefix = ["Bren", "Bran", "Edel", "Edil", "Eid", "Eo", "Gul", "Gal", "Guld", "Gul", "Hedel", "Her", "Log", "Mau", "Maug", "Mor", "Mord"];
	}

	if (value === "stormlandare")
	{
		prefix = ["as", "bod", "bryn", "hall", "hraf", "ing", "jor", "tor", "vig", "vret"];
	}

	if (value === "virann")
	{
		prefix = ["Ber", "Beor", "Bur", "Buor", "Bewr", "Bewor", "Brun", "Bruni", "Bran", "Brani", "Bron", "Broni", "Donni", "Dunni", "Ed", "Edel", "Ev", "Evel", "Fri", "Fride", "Fra", "Frade", "Fru", "Frude", "Gal", "Gals", "Gol", "Gols", "Hun", "Huni", "Hen", "Heni", "Klod", "Klodi", "Klud", "Kludi", "Mer", "Mero", "Mor", "Moro", "Ro", "Rode", "Ru", "Rude", "Sor", "Sork", "Sar", "Sark", "Sul", "Suli", "Sol", "Soli", "Sal", "Sali", "Tryn", "Tryni", "Tron", "Troni"];
	}

	if (value === "dvarg")
	{
		prefix = ["Bor", "Brok", "Dvor", "Fifun", "Glo", "Gly", "Jo", "Jor", "Niful", "Ru", "Ruk", "Tjeb", "Tor", "Zvor"];
	}

	if (value === "alf")
	{
		prefix = ["Harp", "Jep", "Jeppi", "Kyll", "Lep", "Lepo", "Norma", "Normo", "Pojh", "Pojha", "Sirp", "Sirpa", "Syll", "Vaj", "Vajne", "Val", "Vali"];
	}

	if (value === "troll")
	{
		prefix = ["a", "nak", "gnak", "vårt", "vårta", "årt", "dy", "dry", "dryg", "e", "fis", "fisk", "ful", "full", "furm", "gri", "grik", "grinn", "gris", "hog", "ke", "klo", "knorr", "lill", "knott"];
	}

	if (value === "by")
	{
		prefix = ["Alder", "Elf", "Ash", "Atla", "Aud", "Audur", "Bjalfe", "Bjorn", "Birch", "Placid", "Blut", "Buck", "Borke", "Brage", "Brase", "Bronja", "Bale", "Egil", "Ejlög", "Oak", "Ese", "Fair", "Falcon", "Frost", "Gad", "Boar", "Gaute", "Gerd", "Gisle", "Toil", "Gorm", "Grim", "Pig", "Mine", "Grey", "Gyda", "Hammer", "Sanctify", "Hall", "Hrim", "Hall", "Jon", "Jorna", "Jot", "Iron", "Jökull", "Jöt", "Bleak", "kjole", "Copper", "Raven", "Raven", "Twig", "Laupe", "Small", "Lynx", "Laud", "Marsk", "Mead", "Earth", "Cloud", "Nid", "Njal", "Odd", "snake", "east", "Oster", "Rafner", "Rauk", "Runic", "Ränne", "Silver", "Scour", "Smith", "Sun", "Soot", "Stron", "Stone", "Path", "Great", "Storm", "strait", "Pine", "Twinkle", "Troll", "Luck", "Ulf", "Ulm", "Unn", "Willow", "Wild", "Winter", "wise", "Vhite", "Vret", "West", "field", "ridge", "Älg", "Öst"];
	}

	if (value === "vardshus")
	{
		prefix = ["troll", "rot", "snake", "hugg", "skald", "pig", "robber", "mead", "hero", "raven", "storme's", "bronje", "trough", "forest", "ale", "twin", "ravage", "garm", "starving", "listening", "broken", "prancing", "frozen", "brook", "gave", "saga", "beard", "moss", "lichen", "mountain", "fir needle", "dragon", "tender", "frothy", "crazy", "enraged", "slaughtered", "lagade", "cooked", "red", "green", "yellow", "white", "black", "brown", "drunken "];
		return "The " + (prefix[randomNumber(prefix.length) - 1]);
	}

	if (value === "vaxt")
	{
		prefix = ["Evening", "Fairy", "mountainous", "Bjark", "bear", "leaf", "Blood", "Bloody", "Bronze", "Dew", "Dis", "Drak", "Dvärg", "Dy", "Eld", "Fackel", "Fager", "Finger", "Garna", "Gave", "Grim", "Grå", "Gråe", "Gul", "Gull", "Har", "Hingst", "Himla", "Hird", "Hjort", "Humle", "Hväle", "Häst", "Häx", "Igel", "Jarla", "Jord", "Jorn", "Jotun", "Järn", "Jätte", "Kalder", "Knytt", "Kol", "Koppar", "Korp", "Kungs", "Kärr", "Kärr", "Lom", "Lund", "Mal", "Manna", "Marsk", "Mist", "Mork", "Mörk", "Myr", "Mån", "Natt", "Nät", "Orm", "Ox", "Pil", "Puder", "Rafner", "Ros", "Röd", "Silver", "Sjö", "Skarp", "Skav", "Skogs", "Skvätt", "Snö", "Sol", "Sten", "Stjärn", "Stjärne", "Storme", "Svart", "Svin", "Tagg", "Talg", "Tistel", "Tok", "Troll", "Tråd", "Törn", "Vall", "Varg", "Vatten", "Vild", "Vinter", "Vit", "Vitner", "Vår", "Vätte", "Älg", "Älv", "Älva", "Älve", "Äng", "Änga", "Ängs"];
	}

	return (prefix[randomNumber(prefix.length) - 1]);
}