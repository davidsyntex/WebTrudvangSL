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


	return (prefix[randomNumber(prefix.length) - 1]);
}


function ResetNamePeopleResultsEnglish() {
	$("#namePeopleResults").html('<br><ul class="list-group"><li class="list-group-item">Press a button to generate a name.</li></ul>');
}

function ResetNameThingsResultsEnglish() {
	$("#nameThingsResults").html('<br><ul class="list-group"><li class="list-group-item">Press a button to generate a name. You may have to fix the names after generation.</li></ul>');
}

if (selectedLanguage === "English") {
	if (value === "by") {
		suffix = ["Alder", "anger", "back", "mount", "blut", "shed ", "sheddy ", "castle", "bottom", "steep", "bridge", "mill", "well", "village", "brook", "valley", "haze ", "oath", "fjord ", "mountain ", "rapids", "frost ", "field", "gang", "mouth ", "gard ", "gold", "farm ", "haga ", "hall", "hammer ", "port ", "harg ", "heath", "home", "holm ", "holt ", "hult", "hall", "high ", "lodge ", "rock", "cliff ", "hill ", "mill", "spring ", "market", "live ", "lid ", "ling ", "grove ", "luck ", "leaf ", "ground ", "bog", "monje ", "clime", "isthmus ", "om", "pass", "row", "room ", "rup ", "ryd ", "grubbed ", "sala ", "skog ", "forest ", "sorrow ", "sta", "stein", "stone ", "way", "log ", "strait", "tegn ", "thing", "tarn ", "thwart ", "top", "croft ", "swamp ", "tun", "tune ", "um ", "calf", "ley", "vi ", "bay", "wind ", "virja ", "view ", "a", "field ", "ridge ", "river", "Meadow"];
	}
	if (value === "vardshus") {
		suffix = [" hall", "burrow", "den", "sty", "tavern", "hash house", "pig", "bear", "cottage", " home", "hole", "ice hole", "gulf", "tarn", "croft", "mountain", "head", "tower", "crossing", "realm", "place", "point", "boar", "wanderer", "ponny", "buck", "rabbit", "pint", "head", "house", "cat", "snake", "tailor"];
	}

	if (value === "vaxt") {
		suffix = ["anise", "apple", "spike", "bark", "beet", "brightly", "leaf", "bloom", "flower", "bracken", "Bush", "berry", "bean", "chicory", "dill", "oak", "cade", "thistle", "elder berry", "seed", "Joy", "pine", "elusive", "raspberry", "hazel", "hat", "oat", "millet", "cloudberry", "club", "clover", "tuber", "choke", "coriander", "barley", "cone", "cone", "gooseberry", "spice", "cumin", "cabbage", "chervil", "lichen", "Lily", "flax", "lingon", "onion", "leaf", "melisma", "Carrot", "moss", "morel", "mint", "orache", "straw", "nate", "nettle", "pepper", "pear", "rhubarb", "rain", "root", "rye", "rake", "radish", "salad", "anemone", "stalk", "gleam", "agaric", "cocklebur", "beauty", "sloe", "strawberry", "thicket", "bovinus", "Spur", "sting", "star", "storm", "fungus", "thyme", "thorn", "truffle", "tongue", "tuft", "wool", "poppy", "reed", "wheat", "willow", "viva", "weave", "pea", "herb"];
	}
}
