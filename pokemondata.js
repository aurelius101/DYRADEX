$(".card").css({"backgroundColor":"#D22B2B"});
$(".data").css({"backgroundColor":"whitesmoke"});
$(".entry").css({"backgroundColor":"white"});
$(".evofrom").css({"backgroundColor": "lightgrey"});
$(".evoto").css({"backgroundColor": "paleturquoise"});
$(".info").attr("id", "nameball").append('<img id = "nb" src = "pokeball1.png"/>')
$(".HT").append("HT");
$(".WT").append("WT");
$(".na").css({"backgroundColor":"gray"});
$(".numname").css({"color":"white"});



//$(".hunit").append(``);
//$(".wunit").append("lbs");
//constructor function for Pokémon
class poke{
constructor(num, name, type1, type2)
{
     this.num = num
     this.name = name
     this.type1 = type1
     this.type2 = type2
}}

function leftFillNum(num, targetLength) {
     return num.toString().padStart(targetLength, "0");}

const type1 =  ["GRASS"," ROCK", "FIRE", "UNKNOWN", "WATER", "DRAGON", "POISON", "FLYING", "FIGHTING", "BUG", "GROUND", "GHOST", "ELECTRIC", "STEEL", "PSYCHIC", "ICE", "DARK", "FAIRY"];
const type2 =  ["GRASS"," ROCK", "FIRE", "UNKNOWN", "WATER", "DRAGON", "POISON", "FLYING", "FIGHTING", "BUG", "GROUND", "GHOST", "ELECTRIC", "STEEL", "PSYCHIC", "ICE", "DARK", "FAIRY"];


//const PKMNNAME = new poke ((leftFillNum(NUM, 3)), "NAME", "TYPE");

//JQUERY
// You can select all <p> elements on a page like this: $("p")

//To find an element with a specific id, write a hash character, followed by the id of the HTML element:
//$("#IDNAME")

//To find elements with a specific class, write a period character, followed by the name of the class:
//$(".CLASSNAME")


const chpt = new poke ((leftFillNum(1, 3)), "CHEEPIT", "GRASS", null, );
$('.card')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','chpt')
     $("#chpt div").remove(".evofrom, .type2");
     $("#chpt .evoto").prepend('<img id = "evo" src = "raptanin-truesize.png"/>')
     $("#chpt .pic").prepend('<img class = "sprite" src = "sprites/cheepit-export.png"/>')
                      $("#chpt .sprite").addClass("bounce");
     $("#chpt .category").prepend("Seedling");
     $("#chpt .num").append(chpt.num);
     $("#chpt .name").append(chpt.name);
     $("#chpt .hunit").prepend(`1'8"`)
     $("#chpt .wunit").prepend(`???`)
     $("#chpt .type1").append(chpt.type1)
          .addClass("grass");
     $("#chpt .footprint").append('<img src = "cheepitfoot1.png"/>');
     $("#chpt .entry")
          .html(`It uses its rock-hard head to crush nuts and seeds.
               Insatiably curious, Cheepit will investigate anything that catches its fancy, often destroying it in the process. 
               Its head is heavier than its body, so when it gets too excited, it’s prone to tipping over.`);

const rptn = new poke ((leftFillNum(2, 3)), "RAPTANIN", "GRASS", null);
$('.card:first')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','rptn')
     $("#rptn .evofrom").prepend('<img id = "evo" src = "cheepit-truesize.png"/>')
     $("#rptn .evoto").prepend('<img id = "evo" src = "kotylodon-truesize.png"/>')
     
     $("#rptn .pic").prepend('<img class = "sprite" src = "sprites/raptanin-export.png"/>')
               $("#rptn .sprite").addClass("bounce");
     $("#rptn .category").prepend("Sprout Fowl");
     $("#rptn .num").append(rptn.num);
     $("#rptn .name").append(rptn.name);
     $("#rptn .hunit").prepend(`3'4"`)
     $("#rptn .wunit").prepend(`???`)
     $("#rptn .type1").append(rptn.type1)
          .addClass("grass");
     $("#rptn .footprint").append('<img src = "raptanin foot.png"/>');
     $("#rptn .entry")
          .html(`These Pokémon have a rebellious streak and will challenge their own trainer to a battle if riled up. 
               <br>In the wild, flock hierarchy is determined by whichever individual has the most impressive crest.`);

const ktld = new poke ((leftFillNum(3, 3)), "KOTYLODON", "GRASS", "ROCK");

$('.card:first')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','ktld')
     $("#ktld div").remove(".evoto");
     $("#ktld .evofrom").prepend('<img id = "evo" src = "raptanin-truesize.png"/>')
     $("#ktld .pic").prepend('<img class = "sprite" src = "sprites/kotylodon-export.png"/>')
               $("#ktld .sprite").addClass("bounce");
     $("#ktld .category").prepend("Tyrant");
     $("#ktld .num").append(ktld.num);
     $("#ktld .name").append(ktld.name);
     $("#ktld .hunit").prepend(`6'2"`)
     $("#ktld .wunit").prepend(`???`)
     $("#ktld .type1").append(ktld.type1).addClass("grass");
     $("#ktld .type2").append(ktld.type2).addClass("rock");
     $("#ktld .footprint").append('<img src = "kotylodon foot.png"/>');
     $("#ktld .entry")
          .html(`It uses its bright warning plumage in threat display. It frequently picks fights. 
               It is fiercely territorial <br>and will rip up plants and trees that it perceives to be invading its habitat.
`);

const inkl = new poke ((leftFillNum(4, 3)), "INKLE", "WATER", null, );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','inkl')
     $("#inkl .footprint").addClass(".na");
     $("#inkl div").remove(".evofrom, .type2");
     $("#inkl .evoto").prepend('<img id = "evo" src = "jellink-truesize.png"/>')
     $("#inkl .pic").prepend('<img class = "sprite" src = "sprites/inkle-export.png"/>')
                      $("#inkl .sprite").addClass("float");
     $("#inkl .category").prepend("Ink");
     $("#inkl .num").append(inkl.num);
     $("#inkl .name").append(inkl.name);
     $("#inkl .hunit").prepend(`1'5"`)
     $("#inkl .wunit").prepend(`4.5lbs`)
     $("#inkl .type1").append(inkl.type1)
          .addClass("water");
     $("#inkl .entry")
          .html(`These Pokémon used to be often seen floating in water in large groups. 
               Large group sightings of Inkle may often signify an incoming storm. 
               <br>Inkle are social and bond very quickly with others.`);

const jlnk = new poke ((leftFillNum(5, 3)), "JELLINK", "WATER", null, );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','jlnk')
     $("#jlnk .footprint").addClass("na");
     $("#jlnk div").remove(".type2");
     $("#jlnk .evofrom").prepend('<img id = "evo" src = "inkle-truesize.png"/>')
     $("#jlnk .evoto").prepend('<img id = "evo" src = "medumbra-truesize.png"/>')
     $("#jlnk .pic").prepend('<img class = "sprite" src = "sprites/jellink-export.png"/>')
                      $("#jlnk .sprite").addClass("float");
     $("#jlnk .category").prepend("Jellyfish");
     $("#jlnk .num").append(jlnk.num);
     $("#jlnk .name").append(jlnk.name);
     $("#jlnk .hunit").prepend(`2~4ft`)
     $("#jlnk .wunit").prepend(`5lbs`)
     $("#jlnk .type1").append(jlnk.type1)
          .addClass("water");
     $("#jlnk .entry")
          .html(`The evolved form of Inkle, these Pokémon are seen much more solitary than the former and separate from their groups. 
               They walk on their powerful tentacles to seem bigger and more intimidating.`);


const mdbr = new poke ((leftFillNum(6, 3)), "MEDUMBRA", "WATER", "DRAGON", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','mdbr')
     $("#mdbr .footprint").addClass("na");
     $("#mdbr div").remove(".evoto");
     $("#mdbr .evofrom").prepend('<img id = "evo" src = "jellink-truesize.png"/>')
     $("#mdbr .pic").prepend('<img class = "sprite" src = "sprites/medumbra-export.png"/>')
                      $("#mdbr .sprite").addClass("float");
     $("#mdbr .category").prepend("Aggressor");
     $("#mdbr .num").append(mdbr.num);
     $("#mdbr .name").append(mdbr.name);
     $("#mdbr .hunit").prepend(`5ft`)
     $("#mdbr .wunit").prepend(`8lbs`)
     $("#mdbr .type1").append(mdbr.type1).addClass("water");
     $("#mdbr .type2").append(mdbr.type2).addClass("dragon");
     $("#mdbr .entry")
          .html(`Medumbra are known as aggressive, volatile Pokémon, with their aggression deemed territorial. 
               They are solitary, much like Jellinks, and pack a powerful punch. These Pokémon can "float" for small periods of time.`);



const mngrl = new poke ((leftFillNum(7, 3)), "MONGROWL", "FIRE", null, );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','mngrl')
     $("#mngrl div").remove(".evofrom, .type2");
     $("#mngrl .evoto").prepend('<img id = "evo" src = "scorchound-truesize.png"/>')
     $("#mngrl .pic").prepend('<img class = "sprite" src = "sprites/mongrowl-export.png"/>')
                      $("#mngrl .sprite").addClass("bounce");
     $("#mngrl .category").prepend("Fire Puppy");
     $("#mngrl .num").append(mngrl.num);
     $("#mngrl .name").append(mngrl.name);
     $("#mngrl .hunit").prepend(`1'6"`)
     $("#mngrl .wunit").prepend(`10kg`)
     $("#mngrl .type1").append(mngrl.type1)
          .addClass("fire");
     $("#mngrl .footprint").append('<img src = "Mongrowl pawprint.png"/>');
     $("#mngrl .entry")
          .html(`It disperses heat through its large ears. <br>The intensity and heat of the flames indicate Mongrowl’s emotions. 
               Its flames never goes out, <br>just like its loyalty.`);

const scrhnd = new poke ((leftFillNum(8, 3)), "SCORCHOUND", "FIRE", null, );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','scrhnd')
     $("#scrhnd div").remove(".type2");
     $("#scrhnd .evofrom").prepend('<img id = "evo" src = "mongrowl-truesize.png"/>')
     $("#scrhnd .evoto").prepend('<img id = "evo" src = "howlfire-truesize.png"/>')
     $("#scrhnd .pic").prepend('<img class = "sprite" src = "sprites/scorchound-export.png"/>')
                      $("#scrhnd .sprite").addClass("bounce");
     $("#scrhnd .category").prepend("Blaze");
     $("#scrhnd .num").append(scrhnd.num);
     $("#scrhnd .name").append(scrhnd.name);
     $("#scrhnd .hunit").prepend(`3'0"`)
     $("#scrhnd .wunit").prepend(`20kg`)
     $("#scrhnd .type1").append(scrhnd.type1)
          .addClass("fire");
     $("#scrhnd .footprint").append('<img src = "Scorchound paw.png"/>');
     $("#scrhnd .entry")
          .html(`Its flames are often blazing of its own control.
               <br>It displays erratic and aggressive behaviour, and will often seek solitude, afraid of accidentally harming its Trainer.`);

const hwlfr = new poke ((leftFillNum(9, 3)), "HOWLFIRE", "FIRE", "POISON", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','hwlfr')
     $("#hwlfr div").remove(".evoto");
     $("#hwlfr .evofrom").prepend('<img id = "evo" src = "scorchound-truesize.png"/>')
     $("#hwlfr .pic").prepend('<img class = "sprite" src = "sprites/howlfire-export.png"/>')
                      $("#hwlfr .sprite").addClass("bounce");
     $("#hwlfr .category").prepend("Inferno");
     $("#hwlfr .num").append(hwlfr.num);
     $("#hwlfr .name").append(hwlfr.name);
     $("#hwlfr .hunit").prepend(`4'8"`)
     $("#hwlfr .wunit").prepend(`35kg`)
     $("#hwlfr .type1").append(hwlfr.type1).addClass("fire");
     $("#hwlfr .type2").append(hwlfr.type2).addClass("poison");
     $("#hwlfr .footprint").append('<img src = "Howlfire paw.png"/>');
     $("#hwlfr .entry")
          .html(`  When enraged, its flames become so hot that it renders anything it consumes into ash.
                    <br>Its fiery breath is toxic, and if burned by the toxic flames it spits out, the pain lasts forever.`);

const srpnt = new poke ((leftFillNum(10, 3)), "SEARPENT", "FIRE", "POISON", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','srpnt')
     $("#srpnt div").remove(".evoto");
     $("#srpnt .footprint").addClass("na");
     $("#srpnt .evofrom").prepend('<img id = "evo" src = "howlfire-truesize.png"/>')
     $("#srpnt .pic").prepend('<img class = "sprite" src = "sprites/searpent-export.png"/>')
                      $("#srpnt .sprite").addClass("bounce");
     $("#srpnt .category").prepend("Flame Serpent");
     $("#srpnt .num").append(srpnt.num);
     $("#srpnt .name").append(srpnt.name);
     $("#srpnt .hunit").prepend(`3'4"`)
     $("#srpnt .wunit").prepend(`???`)
     $("#srpnt .type1").append(srpnt.type1).addClass("fire");
     $("#srpnt .type2").append(srpnt.type2).addClass("poison");
     $("#srpnt .entry")
          .html(`The serpentine tail once a part of Howlfire, with a mind of its own.
                  Wherever it goes, it leaves a charred trail behind. 
               Possessing venomous fangs and a flaming tongue, Searpent’s bite inflicts excruciating pain.`);

const wblr = new poke ((leftFillNum(11, 3)), "WEEBLER", "BUG", "FLYING", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','wblr')
     $("#wblr div").remove(".evofrom");
     $("#wblr .evoto").prepend('<img id = "evo" src = "puffabug-truesize.png"/>')
     $("#wblr .pic").prepend('<img class = "sprite" src = "sprites/weebler-export.png"/>')
                      $("#wblr .sprite").addClass("swing");
     $("#wblr .category").prepend("Diffuser");
     $("#wblr .num").append(wblr.num);
     $("#wblr .name").append(wblr.name);
     $("#wblr .hunit").prepend(`???`)
     $("#wblr .wunit").prepend(`???`)
     $("#wblr .type1").append(wblr.type1).addClass("bug");
     $("#wblr .type2").append(wblr.type2).addClass("flying");
     $("#wblr .footprint").append('<img src = "weebler foot.png"/>');
     $("#wblr .entry")
          .html(`It gives off the scent of whatever berries it has eaten through the vent on its back. 
               <br>When it feels threatened, it will expel a great gust of wind to blow itself away from danger.`);

const pfbg = new poke ((leftFillNum(12, 3)), "PUFFABUG", "BUG", "FLYING", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','pfbg')
     $("#pfbg div").remove(".evoto");
     $("#pfbg .evofrom").prepend('<img id = "evo" src = "weebler-truesize.png"/>')
     $("#pfbg #evo").css({"transform":"scale(50%"});
     $("#pfbg .pic").prepend('<img class = "sprite" src = "sprites/puffabug-export.png"/>')
                      $("#pfbg .sprite").addClass("bounce");
     $("#pfbg .category").prepend("Purifier");
     $("#pfbg .num").append(pfbg.num);
     $("#pfbg .name").append(pfbg.name);
     $("#pfbg .hunit").prepend(`???`)
     $("#pfbg .wunit").prepend(`???`)
     $("#pfbg .type1").append(pfbg.type1).addClass("bug");
     $("#pfbg .type2").append(pfbg.type2).addClass("flying");
     $("#pfbg .footprint").append('<img src = "puffabug foot.png"/>');
     $("#pfbg .entry")
          .html(`By expanding their bodies, they can take in vast amounts of air at once. 
               They feed off of pollutant particles and expel filtered air from their thoracic tubes.
               They're popular in urban environments. `);

const crbl = new poke ((leftFillNum(13, 3)), "CORBILLASH", "FLYING", "FIRE", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','crbl')
     $("#crbl div").remove(".evofrom");
     $("#crbl .evoto").prepend('<img id = "evo" src = "magpyre-truesize.png"/>')
     $("#crbl #evo").css({"transform":"scale(70%)"});
     $("#crbl .pic").prepend('<img class = "sprite" src = "sprites/corbillash-export.png"/>')
                      $("#crbl .sprite").addClass("bounce");
     $("#crbl .category").prepend("Soot Fledgling");
     $("#crbl .num").append(crbl.num);
     $("#crbl .name").append(crbl.name);
     $("#crbl .hunit").prepend(`???`)
     $("#crbl .wunit").prepend(`???`)
     $("#crbl .type1").append(crbl.type1).addClass("flying");
     $("#crbl .type2").append(crbl.type2).addClass("fire");
     $("#crbl .footprint").append('<img src = "corbillash foot.png"/>');
     $("#crbl .entry")
          .html(`Its eyes glow in the dark, making an unsettling sight for late night travellers through the forests.
                    However, this Pokémon is merely a curious fledgling eager to start exploring beyond its nest.`);

const mgpr = new poke ((leftFillNum(14, 3)), "MAGPYRE", "FLYING", "FIRE", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','mgpr')
     //$("#mgpr div").remove(".evoto");
     $("#mgpr .evofrom").prepend('<img id = "evo" src = "corbillash-truesize.png"/>')
        $("#mgpr #evo").css({"transform":"scale(70%)"});
     $("#mgpr .evoto").prepend('<img id = "evo" src = "sprites/charcrow-export.png"/>')
     $("#mgpr #evo").css({"transform":"scale(50%)"});
     $("#mgpr .pic").prepend('<img class = "sprite" src = "sprites/magpyre-export.png"/>')
                      $("#mgpr .sprite").addClass("bounce");
     $("#mgpr .category").prepend("Kindling Corvid");
     $("#mgpr .num").append(mgpr.num);
     $("#mgpr .name").append(mgpr.name);
     $("#mgpr .hunit").prepend(`???`)
     $("#mgpr .wunit").prepend(`???`)
     $("#mgpr .type1").append(mgpr.type1).addClass("flying");
     $("#mgpr .type2").append(mgpr.type2).addClass("fire");
     $("#mgpr .footprint").append('<img src = "magpyre foot.png"/>');
     $("#mgpr .entry")
          .html(`Young Magpyres are known to form small flocks.
               <br>When this Pokémon calls nearby, it's considered an omen, whether good or bad.
               It's also known to be able to mimic the calls of other Pokémon.
               `);

const chrcr = new poke ((leftFillNum(15, 3)), "CHARCROW", "FLYING", "FIRE", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','chrcr')
     $("#chrcr div").remove(".evoto");
     $("#chrcr .evofrom").prepend('<img id = "evo" src = "sprites/magpyre-export.png"/>')
        $("#chrcr #evo").css({"transform":"scale(50%)"});
     $("#chrcr .pic").prepend('<img class = "sprite" src = "sprites/charcrow-export.png"/>')
                      $("#chrcr .sprite").addClass("bounce");
     $("#chrcr .category").prepend("Flaming Crow");
     $("#chrcr .num").append(chrcr.num);
     $("#chrcr .name").append(chrcr.name);
     $("#chrcr .hunit").prepend(`???`)
     $("#chrcr .wunit").prepend(`???`)
     $("#chrcr .type1").append(chrcr.type1).addClass("flying");
     $("#chrcr .type2").append(chrcr.type2).addClass("fire");
     $("#chrcr .footprint").append('<img src = "charcrow foot.png"/>');
     $("#chrcr .entry")
          .html(`Though its rugged apppearance is intimidating, Charcrow is social towards humans.
                It can remember faces and debts, as such, its presence can be a oomforting flame or a 
                 merciless firestorm.
               <br>Charcrows form communal flocks in winter.`);


const lvbr = new poke ((leftFillNum(16, 3)), "LOVIBARA", "???", "???", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','lvbr')
     $("#lvbr div").remove(".evofrom");
     $("#lvbr .evoto").prepend('<img id = "evo" src = "cupibara.png"/>')
     $("#lvbr #evo").css({"transform":"scale(50%)"});
     $("#lvbr .pic").prepend('<img class = "sprite" src = "sprites/lovibara-export.png"/>')
                      $("#lvbr .sprite").addClass("bounce");
     $("#lvbr .category").prepend("Lovely");
     $("#lvbr .num").append(lvbr.num);
     $("#lvbr .name").append(lvbr.name);
     $("#lvbr .hunit").prepend(`???`)
     $("#lvbr .wunit").prepend(`???`)
     $("#lvbr .type1").append(lvbr.type1).addClass("unknown");
     ///$("#lvbr .type2").append(lvbr.type2).addClass("fire");
     $("#lvbr .footprint").addClass("na");
     $("#lvbr .entry")
          .html(`There is more to be discovered about this Pokémon.`);


const cpbr = new poke ((leftFillNum(17, 3)), "CUPIBARA", "???", "???", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','cpbr')
     $("#cpbr div").remove(".evoto");
     $("#cpbr .evofrom").prepend('<img id = "evo" src = "lovibara.png"/>')
     $("#cpbr #evo").css({"transform":"scale(50%)"});
     $("#cpbr .pic").prepend('<img class = "sprite" src = "sprites/cupibara-export.png"/>')
                      $("#cpbr .sprite").addClass("bounce");
     $("#cpbr .category").prepend("Cuddly");
     $("#cpbr .num").append(cpbr.num);
     $("#cpbr .name").append(cpbr.name);
     $("#cpbr .hunit").prepend(`???`)
     $("#cpbr .wunit").prepend(`???`)
     $("#cpbr .type1").append(cpbr.type1).addClass("unknown");
     ///$("#cpbr .type2").append(cpbr.type2).addClass("fire");
     $("#cpbr .footprint").addClass("na");
     $("#cpbr .entry")
          .html(`There is more to be discovered about this Pokémon.`);


const pmz = new poke ((leftFillNum('20', 3)), "PIMIZUE", "ELECTRIC", "GROUND", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','pmz')
     $("#pmz div").remove(".evoto, .evofrom");
     $("#pmz .pic").prepend('<img class = "sprite" src = "sprites/pimizue-export.png"/>')
                      $("#pmz .sprite").addClass("bounce");
     $("#pmz .category").prepend("Mole Shrew");
     $("#pmz .num").append(pmz.num);
     $("#pmz .name").append(pmz.name);
     $("#pmz .hunit").prepend(`???`)
     $("#pmz .wunit").prepend(`???`)
     $("#pmz .type1").append(pmz.type1).addClass("electric");
     $("#pmz .type2").append(pmz.type2).addClass("ground");
     $("#pmz .footprint").prepend('<img src = "pimizue foot.png"/>')
     $("#pmz .entry")
          .html(`There is more to be discovered about this Pokémon.`);


const fntsm = new poke ((leftFillNum(25, 3)), "FINTASM", "WATER", "GHOST", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','fntsm')
     $("#fntsm div").remove(".evofrom");
     $("#fntsm .evoto").prepend('<img id = "evo" src = "sprites/phantolm-export.png"/>')
     $("#fntsm #evo").css({"transform":"scale(50%)"});
     $("#fntsm .pic").prepend('<img class = "sprite" src = "sprites/fintasm-export.png"/>')
                      $("#fntsm .sprite").addClass("float");
     $("#fntsm .category").prepend("Cavefish");
     $("#fntsm .num").append(fntsm.num);
     $("#fntsm .name").append(fntsm.name);
     $("#fntsm .hunit").prepend(`1'6"`)
     $("#fntsm .wunit").prepend(`???`)
     $("#fntsm .type1").append(fntsm.type1).addClass("water");
     $("#fntsm .type2").append(fntsm.type2).addClass("ghost");
     $("#fntsm .footprint").addClass("na");
     $("#fntsm .entry")
          .html(`It is said that the first Fintasm was reborn from a young child who lost their life to the underground Chamomillian lakes. 
               Its other senses have developed to compensate for its lack of sight. It can sense a pin drop from miles away.`);

const phntlm = new poke ((leftFillNum(26, 3)), "PHANTOLM", "WATER", "GHOST", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','phntlm')
     $("#phntlm div").remove(".evoto");
     $("#phntlm .evofrom").prepend('<img id = "evo" src = "sprites/fintasm-export.png"/>');
     $("#phntlm #evo").css({"transform":"scale(50%)"});
     $("#phntlm .pic").prepend('<img class = "sprite" src = "sprites/phantolm-export.png"/>')
                      $("#phntlm .sprite").addClass("float");
     $("#phntlm .category").prepend("Blind Newt");
     $("#phntlm .num").append(phntlm.num);
     $("#phntlm .name").append(phntlm.name);
     $("#phntlm .hunit").prepend(`4'4"`)
     $("#phntlm .wunit").prepend(`???`)
     $("#phntlm .type1").append(phntlm.type1).addClass("water");
     $("#phntlm .type2").append(phntlm.type2).addClass("ghost");
     $("#phntlm .footprint").addClass("na");
     $("#phntlm .entry")
          .html(`It lives within the depths of deep dark lakes.
               <br> When it emerges it does so without disturbing the waves, as if they pass right through it. 
               There are tales of this Pokémon emitting a horrible shrieking from deep within the lakes within which it presides. 
               In lieu of sight, this Pokémon uses haunting screeches to echolocate within its surroundings. `);

const bbt = new poke ((leftFillNum(27, 3)), "BOOBAT", "DARK", "FLYING", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','bbt')
     $("#bbt div").remove(".evofrom");
     $("#bbt .evoto").prepend('<img id = "evo" src = "batrify-truesize.png"/>')
     //$("#bbt #evo").css({"transform":"scale(50%)"});
     $("#bbt .pic").prepend('<img class = "sprite" src = "sprites/boobat-export.png"/>')
                      $("#bbt .sprite").addClass("bounce");
     $("#bbt .category").prepend("Cute Bat");
     $("#bbt .num").append(bbt.num);
     $("#bbt .name").append(bbt.name);
     $("#bbt .hunit").prepend(`1.5-2ft"`)
     $("#bbt .wunit").prepend(`4-5lbs`)
     $("#bbt .type1").append(bbt.type1).addClass("dark");
     $("#bbt .type2").append(bbt.type2).addClass("flying");
     $("#bbt .footprint").addClass("na");
     $("#bbt .entry")
          .html(`A cute bat Pokémon, Boobat can be found in various caves. 
               These friendly Pokémon happily guide cave divers and lost explorers.`);

const btfr = new poke ((leftFillNum(28, 3)), "BATRIFY", "DARK", "FLYING", );
$('.card:First')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','btfr')
     $("#btfr div").remove(".evoto");
     $("#btfr .evofrom").prepend('<img id = "evo" src = "boobat-truesize.png"/>')
     $("#btfr #evo").css({"transform":"scale(50%)"});
     $("#btfr .pic").prepend('<img class = "sprite" src = "sprites/batrify-export.png"/>')
                      $("#btfr .sprite").addClass("bounce");
     $("#btfr .category").prepend("Terrifying");
     $("#btfr .num").append(btfr.num);
     $("#btfr .name").append(btfr.name);
     $("#btfr .hunit").prepend(`5'5"`)
     $("#btfr .wunit").prepend(`150lbs`)
     $("#btfr .type1").append(btfr.type1).addClass("dark");
     $("#btfr .type2").append(btfr.type2).addClass("flying");
     $("#btfr .footprint").addClass("na");
     $("#btfr .entry")
          .html(`This Pokémon may look scary, but it is incredibly friendly and only wishes to make friends with those it meets.
                Batrify’s eyes glow in the dark lighting of caves.`);

const klb = new poke ((leftFillNum("???", 3)), "KILIBYE", "WATER", null, );
$('.card:first')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','klb')
     $("#klb div").remove(".evofrom, .type2");
     $("#klb .evoto").prepend('<img id = "evo" src = "sprites/orcallous-export.png"/>')
     $("#klb #evo").css({"transform":"scale(50%)"});
     $("#klb .pic").prepend('<img class = "sprite" src = "sprites/kilibye-export.png"/>')
                      $("#klb .sprite").addClass("bounce");
     $("#klb .category").prepend("Lure");
     $("#klb .num").append(klb.num);
     $("#klb .name").append(klb.name);
     $("#klb .hunit").prepend(`???`)
     $("#klb .wunit").prepend(`???`)
     $("#klb .type1").append(klb.type1).addClass("water");
     $("#klb .footprint").addClass("na");
     $("#klb .entry")
          .html(`It draws in would-be predators with faux tears, then fiercely attacks. 
               Wherever this Pokémon dwells, there are sure to be Orvakil nearby. 
               It often acts as bait to attract large prey to its pod.`);

const orcls = new poke ((leftFillNum("???", 3)), "ORCALLOUS", "WATER", "DARK", );
$('.card:first')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','orcls')
     $("#orcls .evofrom").prepend('<img id = "evo" src = "sprites/kilibye-export.png"/>')
     $("#orcls .evoto").prepend('<img id = "evo" src = "sprites/orvakil-export.png"/>')
     $("#orcls #evo").css({"transform":"scale(50%)"});
     $("#orcls .pic").prepend('<img class = "sprite" src = "sprites/orcallous-export.png"/>')
                      $("#orcls .sprite").addClass("bounce");
     $("#orcls .category").prepend("Spite");
     $("#orcls .num").append(orcls.num);
     $("#orcls .name").append(orcls.name);
     $("#orcls .hunit").prepend(`???`)
     $("#orcls .wunit").prepend(`???`)
     $("#orcls .type1").append(orcls.type1).addClass("water");
     $("#orcls .type2").append(orcls.type2).addClass("dark");
     $("#orcls .footprint").append('<img src = "orcallous foot.png"/>')
     $("#orcls .entry")
          .html(`It’s small but spiteful. It picks fights against larger opponents that would hassle it, and what it lacks in strength, 
               it makes up for in tenacity. 
               <br>It’s grown agile and aggressive.`);

const orvkl = new poke ((leftFillNum("???", 3)), "ORVAKIL", "WATER", "DARK", );
$('.card:first')
     .clone()
     .insertAfter('.card:Last')
     .attr('id','orvkl')
     $("#orvkl div").remove(".evoto");
     $("#orvkl .evofrom").prepend('<img id = "evo" src = "sprites/orcallous-export.png"/>')
          $("#orvkl #evo").css({"transform":"scale(50%)"});
     $("#orvkl .pic").prepend('<img class = "sprite" src = "sprites/orvakil-export.png"/>')
                      $("#orvkl .sprite").addClass("bounce");
     $("#orvkl .category").prepend("Vengeance");
     $("#orvkl .num").append(orvkl.num);
     $("#orvkl .name").append(orvkl.name);
     $("#orvkl .hunit").prepend(`???`)
     $("#orvkl .wunit").prepend(`???`)
     $("#orvkl .type1").append(orvkl.type1).addClass("water");
     $("#orvkl .type2").append(orvkl.type2).addClass("dark");
     $("#orvkl .footprint").append('<img src = "orvakil foot.png"/>')
     $("#orvkl .entry")
          .html(`Its body is covered in scars from wars waged at sea. 
               It is ruthless and vengeful, targeting those that had picked on it in its younger days. 
               Despite appearances, it is an honourable Pokémon that only attacks those it has sworn vengeance upon.`);


//const unknown = new poke ((leftFillNum('???', 3)), "???", "???", "???", );
//$('.card:First')
     //.clone()
     //.insertAfter('.card:Last')
     //.attr('id','unknown')
     //$("#unknown div").remove(".evoto, .evofrom");
     //$("#unknown .pic").prepend('<img class = "sprite" src = "mystery.png"/>')
          // $("#unknown .sprite").addClass("heartbeat");
     //$("#unknown .category").prepend("???");
    // $("#unknown .num").append(unknown.num);
     //$("#unknown .name").append(unknown.name);
     //$("#unknown .hunit").prepend(`???`)
     //$("#unknown .wunit").prepend(`???`)
     //$("#unknown .type1").append(unknown.type1).addClass("unknown");
     //$("#unknown .type2").append(phsphnt.type2).addClass("unknown");
     //$("#unknown .footprint").addClass("na");
    // $("#unknown .entry")
          //.html(`There is more to be discovered about this Pokémon.`);
         
//$("#unknown").clone()
   //  .insertAfter('.card:Last')

//const card = document.querySelector("card")
$(".card:First").remove();