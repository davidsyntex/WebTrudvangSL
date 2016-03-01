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

		$("#peopleHeading").html("Karakt�r");
		$("#peopleDescription").html("Ger dig ett slumpat namn f�r en karakt�r.");
		$("#thingsHeading").html("Byar, V�rdshus & V�xter");
		$("#thingsDescription").html("Ger dig ett slumpat namn f�r en by, ett v�rdshus eller en v�xt.");

		ResetNamePeopleResultsSwedish();
		ResetNameThingsResultsSwedish();

		$("#mittlandare").html("Mittl�ndare");
		$("#stormlandare").html("Storml�ndare");
		$("#virann").html("Virann");
		$("#dvarg").html("Dv�rg");
		$("#alf").html("Alf");
		$("#by").html("By");
		$("#vardshus").html("V�rdshus");
		$("#vaxt").html("V�xt");

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
		prefix = ["a", "nak", "gnak", "v�rt", "v�rta", "�rt", "dy", "dry", "dryg", "e", "fis", "fisk", "ful", "full", "furm", "gri", "grik", "grinn", "gris", "hog", "ke", "klo", "knorr", "lill", "knott"];
	}

	if (value === "by")
	{
		prefix = ["Alder", "Elf", "Ash", "Atla", "Aud", "Audur", "Bjalfe", "Bjorn", "Birch", "Placid", "Blut", "Buck", "Borke", "Brage", "Brase", "Bronja", "Bale", "Egil", "Ejl�g", "Oak", "Ese", "Fair", "Falcon", "Frost", "Gad", "Boar", "Gaute", "Gerd", "Gisle", "Toil", "Gorm", "Grim", "Pig", "Mine", "Grey", "Gyda", "Hammer", "Sanctify", "Hall", "Hrim", "Hall", "Jon", "Jorna", "Jot", "Iron", "J�kull", "J�t", "Bleak", "kjole", "Copper", "Raven", "Raven", "Twig", "Laupe", "Small", "Lynx", "Laud", "Marsk", "Mead", "Earth", "Cloud", "Nid", "Njal", "Odd", "snake", "east", "Oster", "Rafner", "Rauk", "Runic", "R�nne", "Silver", "Scour", "Smith", "Sun", "Soot", "Stron", "Stone", "Path", "Great", "Storm", "strait", "Pine", "Twinkle", "Troll", "Luck", "Ulf", "Ulm", "Unn", "Willow", "Wild", "Winter", "wise", "Vhite", "Vret", "West", "field", "ridge", "�lg", "�st"];
	}

	if (value === "vardshus")
	{
		prefix = ["troll", "rot", "snake", "hugg", "skald", "pig", "robber", "mead", "hero", "raven", "storme's", "bronje", "trough", "forest", "ale", "twin", "ravage", "garm", "starving", "listening", "broken", "prancing", "frozen", "brook", "gave", "saga", "beard", "moss", "lichen", "mountain", "fir needle", "dragon", "tender", "frothy", "crazy", "enraged", "slaughtered", "lagade", "cooked", "red", "green", "yellow", "white", "black", "brown", "drunken "];
		return "The " + (prefix[randomNumber(prefix.length) - 1]);
	}

	if (value === "vaxt")
	{
		prefix = ["Evening", "Fairy", "mountainous", "Bjark", "bear", "leaf", "Blood", "Bloody", "Bronze", "Dew", "Dis", "Drak", "Dv�rg", "Dy", "Eld", "Fackel", "Fager", "Finger", "Garna", "Gave", "Grim", "Gr�", "Gr�e", "Gul", "Gull", "Har", "Hingst", "Himla", "Hird", "Hjort", "Humle", "Hv�le", "H�st", "H�x", "Igel", "Jarla", "Jord", "Jorn", "Jotun", "J�rn", "J�tte", "Kalder", "Knytt", "Kol", "Koppar", "Korp", "Kungs", "K�rr", "K�rr", "Lom", "Lund", "Mal", "Manna", "Marsk", "Mist", "Mork", "M�rk", "Myr", "M�n", "Natt", "N�t", "Orm", "Ox", "Pil", "Puder", "Rafner", "Ros", "R�d", "Silver", "Sj�", "Skarp", "Skav", "Skogs", "Skv�tt", "Sn�", "Sol", "Sten", "Stj�rn", "Stj�rne", "Storme", "Svart", "Svin", "Tagg", "Talg", "Tistel", "Tok", "Troll", "Tr�d", "T�rn", "Vall", "Varg", "Vatten", "Vild", "Vinter", "Vit", "Vitner", "V�r", "V�tte", "�lg", "�lv", "�lva", "�lve", "�ng", "�nga", "�ngs"];
	}

	return (prefix[randomNumber(prefix.length) - 1]);
}