// you are + your companion
var aa = [
	"skilled",
	"obese",
	"schizofrenic",
	"dumped",
	"zombified",
	"dead",
	"wise",
	"pretty",
	"ugly",
	"gifted",
	"polar",
	"highborn",
	"bloodthirsty",
	"wicked",
	"heartless",
	"dumb",
	"monstrous",
	"helpful",
	"brave",
	"magical",
	"lowborn",
	"lazy",
	"depressed",
	"ambitious",
	"divine",
	"holy",
	"great",
	"anorectic",
	"pacifist",
]
var ab = [
	"half-man",
	"hobbit",
	"abomination",
	"rat",
	"dinosaur",
	"ghost",
	"specter",
	"robot",
	"monk",
	"jedi",
	"yeti",
	"monster",
	"tentancle",
	"zombie",
	"elf",
	"cyborg",
	"helix fossil",
	"dragonborn",
	"elder",
	"zombie",
	"ogre",
	"king",
	"prince",
	"peasant",
	"minotaur",
	"centaur",
	"will'o'wisp",
	"god",
	"fairy",
	"crocodile",
]
// the
var ba = [
	"homeless",
	"gifted",
	"powerful",
	"lame",
	"hot",
	"soulless",
	"adopted",
	"great",
	"wicked",
	"shady",
	"perverted",
	"trainer",
	"strong",
	"unneeded",
	"ancient",
	"incompetent",
	"aristocratic",
	"satanic",
	"trollish",
	"famous",
	"neutral",
	"deadly",
	"hideous",
	"outstanding",
	"annoying",
	"friendly",
	"furious",
	"badass",
	"exiled",
]
var bb = [
	"blacksmith",
	"paladin",
	"trader",
	"tribal chief",
	"peasant",
	"ruler",
	"trickster",
	"mage",
	"heretic",
	"anarchist",
	"terrorist",
	"swagger",
	"worker",
	"teacher",
	"slayer",
	"miner",
	"archer",
	"adventurer",
	"priest",
	"usurper",
	"sniper",
	"guard",
	"beastmaster",
	"necromancer",
	"lord",
	"predator",
	"stalker",
	"clerk",
	"taxi driver",
	"postman",
]
// destined to
var ca = [
	"unite",
	"adventure in",
	"steal from",
	"burn",
	"nuke",
	"bomb",
	"conquer",
	"usurp",
	"die in",
	"learn about",
	"start war in",
	"create",
	"divide",
	"reconquest",
	"dinner in",
	"party in",
	"revolutionize",
	"move out of",
	"invade",
	"recreate",
	"save",
	"excomunicate",
	"resuscitate in",
	"rebel in",
	"help",
	"stop war in",
	"destroy",
	"fight with",
	"satisfy",
]
var cb = [
	"hell",
	"brazil",
	"heaven",
	"purgatory",
	"limbo",
	"humannity",
	"your pepole",
	"religion",
	"anarchy",
	"goverment",
	"third reich",
	"capitalism",
	"communism",
	"democracy",
	"germany",
	"russia",
	"nothing",
	"metalheads",
	"usa",
	"virtual reality",
	"facebook",
	"poland",
	"africa",
	"australia",
	"china",
	"ussr",
	"switzerland",
	"hospital",
	"school",
	"hogwart",
	"office",
	"taxes",
]
// your weapon
var da = [
	"eight",
	"rusty",
	"wooden",
	"papercraft",
	"iron",
	"steel",
	"crystal",
	"titanium",
	"modern",
	"medieval",
	"ancient",
	"small",
	"large",
	"pointy",
	"radioactive",
	"unpredictable",
	"unreliable",
	"enchanted",
	"magic",
	"masterwork",
	"epic",
	"sharp",
	"selfmade",
	"living",
	"void",
	"mithril",
	"obsidian",
	"rare",
	"adamantium",
	"broken",
]
var db = [
	"banana",
	"flamethrower",
	"dagger",
	"knife",
	"fork",
	"spoon",
	"stick",
	"rod",
	"shortsword",
	"shovel",
	"pickaxe",
	"longsword",
	"bastard sword",
	"two-handed sword",
	"greataxe",
	"battleaxe",
	"axe",
	"maul",
	"hammer",
	"mace",
	"javelin",
	"spear",
	"longspear",
	"halberd",
	"kunai",
	"morning star",
	"flail",
	"saber",
	"shotgun",
	"handgun",
	"deagle",
	"ak-47",
	"m4a1",
	"bazooka",
	"minigun",
	"sword launcher",
	"crossbow",
	"longbow",
	"shortbow",
	"compound bow",
	"throwing axe",
	"throwing knifes",
]
// special ability
var ea = [
	"wind",
	"fire",
	"elemental",
	"hydro",
	"aggresive",
	"soul",
	"demonic",
	"divine",
	"healing",
	"frost",
	"random",
	"radioactive",
	"telekinetic",
	"nuclear",
	"hyper",
	"ineffective",
	"weather",
	"dark",
	"enchaced",
	"physical",
	"insane",
	"overpowered",
	"annoying",
	"beast",
	"explosive",
	"useless",
	"great",
	"disastrous",
	"double",
	"triple",
	"mass",
]
var eb = [
	"vortex",
	"orb",
	"ball",
	"beam",
	"touch",
	"hands",
	"drain",
	"kiss",
	"magic",
	"speed",
	"sphere",
	"shield",
	"strength",
	"muscles",
	"transform",
	"mind",
	"jump",
	"walk",
	"invisibility",
	"change",
	"aura",
	"creation",
	"disortion",
	"sense",
	"levitation",
	"ball",
]
//onclick function
function newhero() {
	$("#a").text(aa[Math.floor(Math.random()*aa.length)] + " " + ab[Math.floor(Math.random()*ab.length)])
	$("#b").text(ba[Math.floor(Math.random()*ba.length)] + " " + bb[Math.floor(Math.random()*bb.length)])
	$("#c").text(ca[Math.floor(Math.random()*ca.length)] + " " + cb[Math.floor(Math.random()*cb.length)])
	$("#d").text(da[Math.floor(Math.random()*da.length)] + " " + db[Math.floor(Math.random()*db.length)])
	$("#e").text(ea[Math.floor(Math.random()*ea.length)] + " " + eb[Math.floor(Math.random()*eb.length)])
	$("#f").text(aa[Math.floor(Math.random()*aa.length)] + " " + ab[Math.floor(Math.random()*ab.length)])
}
