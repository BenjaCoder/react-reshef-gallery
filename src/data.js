const data = [
    {
        id: 1,
        name: "Blue-Eyes White Dragon",
        frame: "Normal",
        level: 8,
        attribute: "LIGHT",
        type: "Dragon",
        atk: 3000,
        def: 2500,
        cost: 95,
        passcode: "89631139",
        lore: [
            "A legendary dragon that takes pride in its enormous power.",
            "Its powers of destruction far exceed comprehension."
        ],
        imageUrl: "https://ms.yugipedia.com//1/1d/BlueEyesWhiteDragon-MADU-EN-VG-artwork.png"
    },
    {
        id: 2,
        name: "Mystical Elf",
        frame: "Effect",
        level: 4,
        attribute: "LIGHT",
        type: "Spellcaster",
        atk: 800,
        def: 2000,
        cost: 319,
        passcode: "15025844",
        lore: [
            "An elf with blue skin, yellow hair, and light of element.",
            "It can power up Blue-Eyes White Dragons on the own field."
        ],
        imageUrl: "https://ms.yugipedia.com//3/33/MysticalElf-MADU-EN-VG-artwork.png"
    },
    {
        id: 3,
        name: "Hitotsu-Me Giant",
        frame: "Normal",
        level: 4,
        attribute: "FIEND",
        type: "Beast-Warrior",
        atk: 1200,
        def: 1000,
        cost: 121,
        passcode: "76184692",
        lore: [
            "A one-eyed giant that pummels foes with its thick arms.",
            "It must be treated with wary respect."
        ],
        imageUrl: "https://ms.yugipedia.com//f/f6/HitotsuMeGiant-MADU-EN-VG-artwork.png"
    },
    {
        id: 4,
        name: "Baby Dragon",
        frame: "Normal",
        level: 3,
        attribute: "EARTH",
        type: "Dragon",
        atk: 1200,
        def: 700,
        cost: 121,
        passcode: "88819587",
        lore: [
            "Despite its infancy, this dragon must not be taken lightly.",
            "The power it embodies is unimaginable."
        ],
        imageUrl: "https://ms.yugipedia.com//b/b7/BabyDragon-MADU-EN-VG-artwork.png"
    },
    {
        id: 5,
        name: "Ryu-Kishin",
        frame: "Normal",
        level: 3,
        attribute: "WIND",
        type: "Fiend",
        atk: 1000,
        def: 500,
        cost: 87,
        passcode: "15303296",
        lore: [
            "It disguises itself as a statue and strikes from the shadows.",
            "It is also fleet of foot and adept at fleeing."
        ],
        imageUrl: "https://ms.yugipedia.com//5/51/RyuKishin-MADU-EN-VG-artwork.png"
    },
    {
        id: 6,
        name: "Feral Imp",
        frame: "Normal",
        level: 4,
        attribute: "FIEND",
        type: "Fiend",
        atk: 1300,
        def: 1400,
        cost: 161,
        passcode: "41392891",
        lore: [
            "A small but fierce fiend known for its mischievous ways.",
            "Beware - it uses the cover of darkness to attack the unwary."
        ],
        imageUrl: "https://ms.yugipedia.com//7/7a/FeralImp-MADU-EN-VG-artwork.png"
    },
    {
        id: 7,
        name: "Winged Dragon, Guardian of the Fortress #1",
        frame: "Normal",
        level: 4,
        attribute: "WIND",
        type: "Dragon",
        atk: 1400,
        def: 1200,
        cost: 161,
        passcode: "87796900",
        lore: [
            "A winged dragon that stands guard at a mountain fortress.",
            "It attacks by plummeting down from the sky in a steep dive."
        ],
        imageUrl: "https://ms.yugipedia.com//8/82/WingedDragonGuardianoftheFortress1-MADU-EN-VG-artwork.png"
    },
    {
        id: 8,
        name: "Mushroom Man",
        frame: "Normal",
        level: 2,
        attribute: "FOREST",
        type: "Plant",
        atk: 800,
        def: 600,
        cost: 59,
        passcode: "14181608",
        lore: [
            "A monster that is at its best in chilly and damp locations.",
            "It attacks by releasing clouds of spores from its cap."
        ],
        imageUrl: "https://ms.yugipedia.com//c/cc/MushroomMan-MADU-EN-VG-artwork.png"
    },
    {
        id: 9,
        name: "Shadow Specter",
        frame: "Normal",
        level: 1,
        attribute: "FIEND",
        type: "Zombie",
        atk: 500,
        def: 200,
        cost: 29,
        passcode: "40575313",
        lore: [
            "A ghostly spirit of a wild animal that roams in wastelands.",
            "This card could become troublesome if encountered in number."
        ],
        imageUrl: "https://ms.yugipedia.com//4/43/ShadowSpecter-MADU-EN-VG-artwork.png"
    },
    {
        id: 10,
        name: "Blackland Fire Dragon",
        frame: "Normal",
        level: 4,
        attribute: "DARK",
        type: "Dragon",
        atk: 1500,
        def: 800,
        cost: 183,
        passcode: "87564352",
        lore: [
            "A dragon that makes its lair deep in impenetrable darkness.",
            "Its power of vision is not very good."
        ],
        imageUrl: "https://ms.yugipedia.com//3/3f/BlacklandFireDragon-MADU-EN-VG-artwork.png"
    },
    {
        id: 11,
        name: "Sword Arm of Dragon",
        frame: "Normal",
        level: 6,
        attribute: "EARTH",
        type: "Dinosaur",
        atk: 1750,
        def: 2030,
        cost: 95,
        passcode: "13069066",
        lore: [
            "A dinosaur that bristles with swordlike spikes all over.",
            "It attacks by recklessly ramming its foe."
        ],
        imageUrl: "https://ms.yugipedia.com//f/f0/SwordArmofDragon-MADU-EN-VG-artwork.png"
    },
    {
        id: 12,
        name: "Swamp Battleguard",
        frame: "Effect",
        level: 5,
        attribute: "DARK",
        type: "Warrior",
        atk: 1800,
        def: 1500,
        cost: 41,
        passcode: "40453765",
        lore: [
            "A loutish, troll-like warrior with thick muscles and build.",
            "It powers up for every Lava Battleguard on the own field."
        ],
        imageUrl: "https://ms.yugipedia.com//e/ec/SwampBattleguard-MADU-EN-VG-artwork.png"
    },
    {
        id: 13,
        name: "The Stern Mystic",
        frame: "Normal",
        level: 4,
        attribute: "LIGHT",
        type: "Spellcaster",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "87557188",
        lore: [
            "A wise old magician whose stern demeanor reflect his high morals.",
            "Before him, no lie can go unnoticed."
        ],
        imageUrl: "https://ms.yugipedia.com//4/46/TheSternMystic-MADU-EN-VG-artwork.png"
    },
    {
        id: 14,
        name: "Battle Steer",
        frame: "Normal",
        level: 5,
        attribute: "FIEND",
        type: "Beast-Warrior",
        atk: 1800,
        def: 1300,
        cost: 41,
        passcode: "18246479",
        lore: [
            "A forest-dwelling fiend that is part man and part ox.",
            "It attacks by lowering its head and ramming with its horn."
        ],
        imageUrl: "https://ms.yugipedia.com//f/f1/BattleSteer-MADU-EN-VG-artwork.png"
    },
    {
        id: 15,
        name: "Flame Swordsman",
        frame: "Effect",
        level: 5,
        attribute: "FIRE",
        type: "Warrior",
        atk: 1800,
        def: 1600,
        cost: 41,
        passcode: "45231177",
        lore: [
            "A swordsman that bears a fiery sword deadly to all dinosaurs.",
            "It has the power to wipe out all dinosaurs on the foe's field."
        ],
        imageUrl: "https://ms.yugipedia.com//d/da/FlameSwordsman-TF04-JP-VG.jpg"
    },
    {
        id: 16,
        name: "Time Wizard",
        frame: "Effect",
        level: 2,
        attribute: "DREAMS",
        type: "Spellcaster",
        atk: 500,
        def: 400,
        cost: 41,
        passcode: "71625222",
        lore: [
            "An enchanted clock that has the power to transform Baby Dragons and",
            "Dark Magicians on the player's own field."
        ],
        imageUrl: "https://ms.yugipedia.com//9/95/TimeWizard-MADU-EN-VG-artwork.png"
    },
    {
        id: 17,
        name: "Right Leg of the Forbidden One",
        frame: "Normal",
        level: 1,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 200,
        def: 300,
        cost: 66,
        passcode: "08124921",
        lore: [
            "One of the five limbs of Exodia, the forbidden monster.",
            "If all five cards gather in the hand of the player, he wins."
        ],
        imageUrl: "https://ms.yugipedia.com//f/f9/RightLegoftheForbiddenOne-TF04-EN-VG.jpg"
    },
    {
        id: 18,
        name: "Left Leg of the Forbidden One",
        frame: "Normal",
        level: 1,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 200,
        def: 300,
        cost: 66,
        passcode: "44519536",
        lore: [
            "One of the five limbs of Exodia, the forbidden monster.",
            "If all five cards gather in the hand of the player, he wins."
        ],
        imageUrl: "https://ms.yugipedia.com//d/dc/LeftLegoftheForbiddenOne-MADU-EN-VG-artwork.png"
    },
    {
        id: 19,
        name: "Right Arm of the Forbidden One",
        frame: "Normal",
        level: 1,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 200,
        def: 300,
        cost: 66,
        passcode: "70903634",
        lore: [
            "One of the five limbs of Exodia, the forbidden monster.",
            "If all five cards gather in the hand of the player, he wins."
        ],
        imageUrl: "https://ms.yugipedia.com//f/f7/RightArmoftheForbiddenOne-MADU-EN-VG-artwork.png"
    },
    {
        id: 20,
        name: "Left Arm of the Forbidden One",
        frame: "Normal",
        level: 1,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 200,
        def: 300,
        cost: 66,
        passcode: "07902349",
        lore: [
            "One of the five limbs of Exodia, the forbidden monster.",
            "If all five cards gather in the hand of the player, he wins."
        ],
        imageUrl: "https://ms.yugipedia.com//a/a3/LeftArmoftheForbiddenOne-TF04-EN-VG.jpg"
    },
    {
        id: 21,
        name: "Exodia the Forbidden One",
        frame: "Normal",
        level: 3,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 1000,
        def: 1000,
        cost: 137,
        passcode: "33396948",
        lore: [
            "One of the five limbs of Exodia, the forbidden monster.",
            "If all five cards gather in the hand of the player, he wins."
        ],
        imageUrl: "https://ms.yugipedia.com//3/32/ExodiatheForbiddenOne-MADU-EN-VG-artwork.png"
    },
    {
        id: 22,
        name: "Summoned Skull",
        frame: "Normal",
        level: 6,
        attribute: "FIEND",
        type: "Fiend",
        atk: 2500,
        def: 1200,
        cost: 279,
        passcode: "70781052",
        lore: [
            "A skeletal fiend that fools people with the power of darkness.",
            "It is among the stronger of the fiend types."
        ],
        imageUrl: "https://ms.yugipedia.com//7/71/SummonedSkull-OW.png"
        //get better artwork url
    },
    {
        id: 23,
        name: "The Wicked Worm Beast",
        frame: "Normal",
        level: 3,
        attribute: "EARTH",
        type: "Beast",
        atk: 1400,
        def: 700,
        cost: 161,
        passcode: "06285791",
        lore: [
            "An earthworm that became a monster from the power of darkness.",
            "It burrows underground and attacks suddenly without warning."
        ],
        imageUrl: "https://ms.yugipedia.com//5/5f/TheWickedWormBeast-MADU-EN-VG-artwork.png"
    },
    {
        id: 24,
        name: "Skull Servant",
        frame: "Normal",
        level: 1,
        attribute: "FIEND",
        type: "Zombie",
        atk: 300,
        def: 200,
        cost: 16,
        passcode: "32274490",
        lore: [
            "A skeletal specter that can appear virtually anywhere.",
            "Though its power is weak, it can be a threat in a swarm."
        ],
        imageUrl: "https://ms.yugipedia.com//3/35/SkullServant-MADU-EN-VG-artwork.png"
    },
    {
        id: 25,
        name: "Horn Imp",
        frame: "Normal",
        level: 4,
        attribute: "FIEND",
        type: "Fiend",
        atk: 1300,
        def: 1000,
        cost: 140,
        passcode: "69669405",
        lore: [
            "A small fiend that dwells among shadows and darkness.",
            "Despite its stature, it is surprisingly strong. Beware of its horn."
        ],
        imageUrl: "https://ms.yugipedia.com//0/0a/HornImp-MADU-EN-VG-artwork.png"
    },
    {
        id: 26,
        name: "Battle Ox",
        frame: "Effect",
        level: 4,
        attribute: "FOREST",
        type: "Beast-Warrior",
        atk: 1700,
        def: 1000,
        cost: 233,
        passcode: "05053103",
        lore: [
            "A fearsome ox monster that wields the power of Axe Crusher.",
            "When used, it eliminates all fire types from the enemy field."
        ],
        imageUrl: "https://ms.yugipedia.com//9/95/BattleOx-MADU-EN-VG-artwork.png"
    },
    {
        id: 27,
        name: "Beaver Warrior",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Beast-Warrior",
        atk: 1200,
        def: 1500,
        cost: 183,
        passcode: "32452818",
        lore: [
            "A small and furry warrior that is fully armored and armed.",
            "Though it is small, it has high defense in grasslands."
        ],
        imageUrl: "https://ms.yugipedia.com//e/ee/BeaverWarrior-MADU-EN-VG-artwork.png"
    },
    {
        id: 28,
        name: "Rock Ogre Grotto #1",
        frame: "Normal",
        level: 3,
        attribute: "EARTH",
        type: "Rock",
        atk: 800,
        def: 1200,
        cost: 121,
        passcode: "68846917",
        lore: [
            "With a body made of stone, it is strongly protected from damage.",
            "Beware - it swings its thick arms to devastating effect."
        ],
        imageUrl: "https://ms.yugipedia.com//2/22/RockOgreGrotto1-MADU-EN-VG-artwork.png"
    },
    {
        id: 29,
        name: "Mountain Warrior",
        frame: "Normal",
        level: 3,
        attribute: "EARTH",
        type: "Beast-Warrior",
        atk: 600,
        def: 1000,
        cost: 87,
        passcode: "04931562",
        lore: [
            "A muscular warrior built to withstand harsh elements and terrain.",
            "It has no trouble getting about on even terrible ground."
        ],
        imageUrl: "https://ms.yugipedia.com//0/03/MountainWarrior-MADU-EN-VG-artwork.png"
    },
    {
        id: 30,
        name: "Zombie Warrior",
        frame: "Normal",
        level: 3,
        attribute: "FIEND",
        type: "Zombie",
        atk: 1200,
        def: 900,
        cost: 121,
        passcode: "31339260",
        lore: [
            "A skeletal warrior that is equipped with a sword and shield.",
            "It appears weak, but it strikes with quick, sharp stabs."
        ],
        imageUrl: "https://ms.yugipedia.com//5/5e/ZombieWarrior-MADU-EN-VG-artwork.png"
    },
    {
        id: 31,
        name: "Koumori Dragon",
        frame: "Normal",
        level: 4,
        attribute: "FIEND",
        type: "Dragon",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "67724379",
        lore: [
            "A vicious, batlike dragon with wings, long tail, and sharp teeth.",
            "It spews a black and fiery breath that turns souls dark."
        ],
        imageUrl: "https://ms.yugipedia.com//e/e9/KoumoriDragon-MADU-EN-VG-artwork.png"
    },
    {
        id: 32,
        name: "Two-Headed King Rex",
        frame: "Normal",
        level: 4,
        attribute: "EARTH",
        type: "Dinosaur",
        atk: 1600,
        def: 1200,
        cost: 207,
        passcode: "94119974",
        lore: [
            "A two-headed dinosaur that can attack in two directions at once.",
            "It is among the stronger of the dinosaur cards."
        ],
        imageUrl: "https://ms.yugipedia.com//d/d1/TwoHeadedKingRex-MADU-EN-VG-artwork.png"
    },
    {
        id: 33,
        name: "Judge Man",
        frame: "Normal",
        level: 6,
        attribute: "LIGHT",
        type: "Warrior",
        atk: 2200,
        def: 1500,
        cost: 150,
        passcode: "30113682",
        lore: [
            "A warrior that detests battles without a clear outcome.",
            "A blow from its huge club is extremely powerful."
        ],
        imageUrl: "https://ms.yugipedia.com//1/17/JudgeMan-MADU-EN-VG-artwork.png"
    },
    {
        id: 34,
        name: "Saggi the Dark Clown",
        frame: "Normal",
        level: 3,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 600,
        def: 1500,
        cost: 183,
        passcode: "66602787",
        lore: [
            "A sinister clown that appears as if from nowhere silently.",
            "It deftly evades attacks using strange motions."
        ],
        imageUrl: "https://ms.yugipedia.com//4/40/SaggitheDarkClown-MADU-EN-VG-artwork.png"
    },
    {
        id: 35,
        name: "Dark Magician",
        frame: "Normal",
        level: 7,
        attribute: "DARK",
        type: "Spellcaster",
        atk: 2500,
        def: 2100,
        cost: 20,
        passcode: "46986414",
        lore: [
            "A sinister spell caster that possesses both power and defense.",
            "It is among the best of all magicians."
        ],
        imageUrl: "https://ms.yugipedia.com//5/53/DarkMagician-MADU-EN-VG-artwork.png"
    },
    {
        id: 36,
        name: "The Snake Hair",
        frame: "Normal",
        level: 4,
        attribute: "FIEND",
        type: "Zombie",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "29491031",
        lore: [
            "A dangerous female monster with the head of a venomous snake.",
            "Anyone that sees her eyes is instantly turned into stone."
        ],
        imageUrl: "https://ms.yugipedia.com//a/a9/TheSnakeHair-MADU-EN-VG-artwork.png"
    },
    {
        id: 37,
        name: "Gaia the Dragon Champion",
        frame: "Normal",
        level: 7,
        attribute: "WIND",
        type: "Dragon",
        atk: 2600,
        def: 2100,
        cost: 30,
        passcode: "66889139",
        lore: [
            "A powerful knight that sits astride its dragon steer.",
            "The knight's power and the dragon's speed combine for best effect."
        ],
        imageUrl: "https://ms.yugipedia.com//4/45/GaiatheDragonChampion-MADU-EN-VG-artwork.png"
    },
    {
        id: 38,
        name: "Gaia the Fierce Knight",
        frame: "Normal",
        level: 7,
        attribute: "DARK",
        type: "Warrior",
        atk: 2300,
        def: 2100,
        cost: 6,
        passcode: "06368038",
        lore: [
            "A powerful knight that rides a horse faster than the wind.",
            "Beware of its charging attack."
        ],
        imageUrl: "https://ms.yugipedia.com//3/3d/GaiaTheFierceKnight-TF05-JP-VG-2-artwork.png"
    },
    {
        id: 39,
        name: "Curse of Dragon",
        frame: "Effect",
        level: 5,
        attribute: "WIND",
        type: "Dragon",
        atk: 2000,
        def: 1500,
        cost: 86,
        passcode: "28279543",
        lore: [
            "A yellow dragon that breathes the very flames of hell.",
            "Its fiery breath can turn the field into a wasteland."
        ],
        imageUrl: "https://ms.yugipedia.com//5/59/CurseofDragon-MADU-EN-VG-artwork.png"
    },
    {
        id: 40,
        name: "Dragon Piper",
        frame: "Normal",
        level: 3,
        attribute: "FIRE",
        type: "Pyro",
        atk: 200,
        def: 1800,
        cost: 260,
        passcode: "55763552",
        lore: [
            "A being that dwells inside a curiously decorated vase.",
            "Its defense rating is very high."
        ],
        imageUrl: "https://ms.yugipedia.com//6/64/DragonPiper-MADU-EN-VG-artwork.png"
    },
    {
        id: 41,
        name: "Celtic Guardian",
        frame: "Normal",
        level: 4,
        attribute: "LIGHT",
        type: "Warrior",
        atk: 1400,
        def: 1200,
        cost: 161,
        passcode: "91152256",
        lore: [
            "An elf that has been given training in the ways of the sword.",
            "It befuddles the foe with its lightning-quick attacks."
        ],
        imageUrl: "https://ms.yugipedia.com//a/a1/CelticGuardian-TF05-JP-VG-2-artwork.png"
    },
    {
        id: 42,
        name: "Illusionist Faceless Mage",
        frame: "Effect",
        level: 5,
        attribute: "DREAMS",
        type: "Spellcaster",
        atk: 1200,
        def: 2400,
        cost: 150,
        passcode: "28546905",
        lore: [
            "An odd being without a face but with heads on both its shoulders.",
            "It can stop all enemies on the field from moving the next turn."
        ],
        imageUrl: "https://ms.yugipedia.com//0/0d/IllusionistFacelessMage-MADU-EN-VG-artwork.png"
    },
    {
        id: 43,
        name: "Karbonala Warrior",
        frame: "Normal",
        level: 4,
        attribute: "EARTH",
        type: "Warrior",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "54541900",
        lore: [
            "A deceptive card of what appears to be an ordinary swordsman.",
            "However, it has a notably high attack power."
        ],
        imageUrl: "https://ms.yugipedia.com//0/01/KarbonalaWarrior-MADU-EN-VG-artwork.png"
    },
    {
        id: 44,
        name: "Rogue Doll",
        frame: "Normal",
        level: 4,
        attribute: "LIGHT",
        type: "Spellcaster",
        atk: 1600,
        def: 1000,
        cost: 207,
        passcode: "91939608",
        lore: [
            "A possessed doll that wields sacred power as its weapon.",
            "Its attacks become more powerful in darkness."
        ],
        imageUrl: "https://ms.yugipedia.com//4/4c/RogueDoll-MADU-EN-VG-artwork.png"
    },
    {
        id: 45,
        name: "Oscillo Hero #2",
        frame: "Normal",
        level: 3,
        attribute: "THUNDER",
        type: "Thunder",
        atk: 1000,
        def: 500,
        cost: 87,
        passcode: "27324313",
        lore: [
            "A small but tough robot with a strong thunderbolt attack.",
            "Treating it lightly could come as a nasty shock."
        ],
        imageUrl: "https://ms.yugipedia.com//5/54/Wattkid-MADU-EN-VG-artwork.png"
    },
    {
        id: 46,
        name: "Griffore",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Beast",
        atk: 1200,
        def: 1500,
        cost: 183,
        passcode: "53829412",
        lore: [
            "A hulking beast that is well protected by its hard body.",
            "Weak attacks simply bounce right off its rugged hide."
        ],
        imageUrl: "https://ms.yugipedia.com//c/cc/Griffore-MADU-EN-VG-artwork.png"
    },
    {
        id: 47,
        name: "Torike",
        frame: "Normal",
        level: 3,
        attribute: "EARTH",
        type: "Beast",
        atk: 1200,
        def: 600,
        cost: 121,
        passcode: "80813021",
        lore: [
            "A smaller creature that is much more fragile than it appears.",
            "However, its long horns make its ramming charges powerful."
        ],
        imageUrl: "https://ms.yugipedia.com//1/18/Torike-MADU-EN-VG-artwork.png"
    },
    {
        id: 48,
        name: "Sangan",
        frame: "Normal",
        level: 3,
        attribute: "FIEND",
        type: "Fiend",
        atk: 1000,
        def: 600,
        cost: 87,
        passcode: "26202165",
        lore: [
            "A smaller fiend with a set of three malevolent eyes.",
            "It becomes more powerful in darkness."
        ],
        imageUrl: "https://ms.yugipedia.com//d/de/Sangan-MADU-EN-VG-artwork.png"
    },
    {
        id: 49,
        name: "Big Insect",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Insect",
        atk: 1200,
        def: 1500,
        cost: 183,
        passcode: "53606874",
        lore: [
            "A gigantic ant that makes its home in deep forests and jungles.",
            "Its attack and defense stats are surprisingly high."
        ],
        imageUrl: "https://ms.yugipedia.com//5/5d/BigInsect-MADU-EN-VG-artwork.png"
    },
    {
        id: 50,
        name: "Basic Insect",
        frame: "Normal",
        level: 2,
        attribute: "FOREST",
        type: "Insect",
        atk: 500,
        def: 700,
        cost: 47,
        passcode: "89091579",
        lore: [
            "An insect with oversized front legs that lives in a swarm.",
            "Forests are paradise to them."
        ],
        imageUrl: "https://ms.yugipedia.com//d/d0/BasicInsect-MADU-EN-VG-artwork.png"
    },
    {
        id: 51,
        name: "Armored Lizard",
        frame: "Normal",
        level: 4,
        attribute: "WATER",
        type: "Reptile",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "15480588",
        lore: [
            "As its name implies, this lizard is clad in an armorlike hide.",
            "A bite of its cavernous mouth can be deadly."
        ],
        imageUrl: "https://ms.yugipedia.com//a/a9/ArmoredLizard-MADU-EN-VG-artwork.png"
    },
    {
        id: 52,
        name: "Hercules Beetle",
        frame: "Normal",
        level: 5,
        attribute: "FOREST",
        type: "Insect",
        atk: 1500,
        def: 2000,
        cost: 86,
        passcode: "52584282",
        lore: [
            "A gigantic stag beetle with imposing horns and a hard shell.",
            "Its horn attack and rugged defense make it very tough."
        ],
        imageUrl: "https://ms.yugipedia.com//9/96/HerculesBeetle-MADU-EN-VG-artwork.png"
    },
    {
        id: 53,
        name: "Keiller Needle",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Insect",
        atk: 1200,
        def: 1000,
        cost: 121,
        passcode: "88979991",
        lore: [
            "An enormous bee that has more strength than it first appears.",
            "It can be a serious threat if it were to swarm with others."
        ],
        imageUrl: "https://ms.yugipedia.com//0/02/KillerNeedle-MADU-EN-VG-artwork.png"
    },
    {
        id: 54,
        name: "Gokibore",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Insect",
        atk: 1200,
        def: 1400,
        cost: 161,
        passcode: "15367030",
        lore: [
            "A cockroach that curls up into a ball and rolls to attack.",
            "Its defense rating is much higher than it first appears."
        ],
        imageUrl: "https://ms.yugipedia.com//d/d8/Gokibore-MADU-EN-VG-artwork.png"
    },
    {
        id: 55,
        name: "Giant Flea",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Insect",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "41762634",
        lore: [
            "An enormous, blood-sucking flea that is surprisingly strong.",
            "Don't let the fact of it being a flea fool you into complacency."
        ],
        imageUrl: "https://ms.yugipedia.com//6/64/GiantFlea-MADU-EN-VG-artwork.png"
    },
    {
        id: 56,
        name: "Larvae Moth",
        frame: "Normal",
        level: 2,
        attribute: "FOREST",
        type: "Insect",
        atk: 500,
        def: 400,
        cost: 255,
        passcode: "87756343",
        lore: [
            "Because it is only an undeveloped larva, it is very weak.",
            "However, it grows into an enormous moth."
        ],
        imageUrl: "https://ms.yugipedia.com//7/74/LarvaeMoth-MADU-EN-VG-artwork.png"
    },
    {
        id: 57,
        name: "Great Moth",
        frame: "Normal",
        level: 8,
        attribute: "FOREST",
        type: "Insect",
        atk: 2600,
        def: 2500,
        cost: 255,
        passcode: "14141448",
        lore: [
            "A huge moth that attacks by scattering flurries of toxic dust.",
            "It is quite powerful when encountered in a forest."
        ],
        imageUrl: "https://ms.yugipedia.com//0/0e/GreatMoth-MADU-EN-VG-artwork.png"
    },
    {
        id: 58,
        name: "Kuriboh",
        frame: "Normal",
        level: 1,
        attribute: "DARK",
        type: "Fiend",
        atk: 300,
        def: 200,
        cost: 16,
        passcode: "40640057",
        lore: [
            "A small and furry fiend that is not much of a threat.",
            "However, it can be a pain if they appear in numbers in darkness."
        ],
        imageUrl: "https://ms.yugipedia.com//b/b7/Kuriboh-MADU-EN-VG-artwork.png"
    },
    {
        id: 59,
        name: "Mammoth Graveyard",
        frame: "Effect",
        level: 3,
        attribute: "DARK",
        type: "Dinosaur",
        atk: 1200,
        def: 800,
        cost: 121,
        passcode: "40374923",
        lore: [
            "An animated skeleton of a mammoth with a debilitating power.",
            "It can power down every monster on the enemy's field."
        ],
        imageUrl: "https://ms.yugipedia.com//3/3f/MammothGraveyard-MADU-EN-VG-artwork.png"
    },
    {
        id: 60,
        name: "Great White",
        frame: "Normal",
        level: 4,
        attribute: "WATER",
        type: "Fish",
        atk: 1600,
        def: 800,
        cost: 207,
        passcode: "13429800",
        lore: [
            "An enormous great white shark of fearsome ferocity and speed.",
            "There is no escape if it were to clamp down with its huge jaws."
        ],
        imageUrl: "https://ms.yugipedia.com//5/54/GreatWhite-MADU-EN-VG-artwork.png"
    },
    {
        id: 61,
        name: "Wolf",
        frame: "Normal",
        level: 3,
        attribute: "FOREST",
        type: "Beast",
        atk: 1200,
        def: 800,
        cost: 121,
        passcode: "49417509",
        lore: [
            "A predatory beast that has become rarely seen in recent times.",
            "It searches for prey using its excellent sense of smell."
        ],
        imageUrl: "https://ms.yugipedia.com//6/6b/Wolf-MADU-EN-VG-artwork.png"
    },
    {
        id: 62,
        name: "Harpie Lady",
        frame: "Effect",
        level: 4,
        attribute: "WIND",
        type: "Winged Beast",
        atk: 1300,
        def: 1400,
        cost: 161,
        passcode: "76812113",
        lore: [
            "A female monster that is half bird and half human.",
            "It can power up Harpie's Pet Dragons on the own field."
        ],
        imageUrl: "https://ms.yugipedia.com//5/59/HarpieLady-MADU-EN-VG-artwork.png"
    },
    {
        id: 63,
        name: "Harpie Lady Sisters",
        frame: "Effect",
        level: 6,
        attribute: "WIND",
        type: "Winged Beast",
        atk: 1950,
        def: 2100,
        cost: 116,
        passcode: "12206212",
        lore: [
            "A trio of Harpie Ladies, sisters half bird and half human.",
            "It can power up Harpie's Pet Dragons on the own field two levels."
        ],
        imageUrl: "https://ms.yugipedia.com//e/e5/HarpieLadySisters-MADU-EN-VG-artwork.png"
    },
    {
        id: 64,
        name: "Tiger Axe",
        frame: "Normal",
        level: 4,
        attribute: "FOREST",
        type: "Beast-Warrior",
        atk: 1300,
        def: 1100,
        cost: 140,
        passcode: "49791927",
        lore: [
            "A tigerlike beast warrior that is armed with a hefty axe.",
            "It doles out powerful blows with lightning quickness."
        ],
        imageUrl: "https://ms.yugipedia.com//a/ad/TigerAxe-TF04-JP-VG-2.jpg"
    },
    {
        id: 65,
        name: "Silver Fang",
        frame: "Normal",
        level: 3,
        attribute: "FOREST",
        type: "Beast",
        atk: 1200,
        def: 800,
        cost: 121,
        passcode: "90357090",
        lore: [
            "A strikingly gorgeous wolf that glows in a whitish silver.",
            "Despite its beautiful look, it is extremely vicious."
        ],
        imageUrl: "https://ms.yugipedia.com//1/1a/SilverFang-MADU-EN-VG-artwork.png"
    },
    {
        id: 66,
        name: "Kojikocy",
        frame: "Normal",
        level: 4,
        attribute: "EARTH",
        type: "Warrior",
        atk: 1500,
        def: 1200,
        cost: 183,
        passcode: "01184620",
        lore: [
            "A thoroughly evil hunter that considers humans fair game.",
            "Its brute strength lets it crush rocks into shards."
        ],
        imageUrl: "https://ms.yugipedia.com//6/64/Kojikocy-MADU-EN-VG-artwork.png"
    },
]

export default data;

/**

{
    id: ,
    name: "",
    frame: "",
    level: ,
    attribute: "",
    type: "",
    atk: ,
    def: ,
    cost: ,
    passcode: "",
    lore: [
        ""
    ],
    imageUrl: ""
},

 */