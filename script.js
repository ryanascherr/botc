let characters = [
    {
        name: "Washerwoman",
        intro: "<p>The Washerwoman learns that a specific Townsfolk character is in play, but not who is playing them.</p><ul><li>During the first night, the Washerwoman is woken, shown two players, and learns the character of one of them.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Townsfolk.',
        flavor: '"Bloodstains on a dinner jacket? No, this is cooking sherry. How careless."',
        examples: "<p>Evin is the Chef, and Amy is the Ravenkeeper. The Washerwoman learns that either Evin or Amy is the Chef.</p><p>Julian is the Imp, and Alex is the Virgin. The Washerwoman learns that either Julian or Alex is the Virgin.</p><p>Marianna is the Spy, and Sarah is the Scarlet Woman. The Washerwoman learns that one of them is the Ravenkeeper. (This happens because the Spy is registering as a Townsfolk—in this case, the Ravenkeeper)</p>",
        howToRun: `<p>While preparing the first night, put the Washerwoman's <strong>TOWNSFOLK</strong> reminder token by any Townsfolk character token, and put the Washerwoman's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Washerwoman and point to the players marked <strong>TOWNSFOLK</strong> and <strong>WRONG</strong>. Show the character token marked <strong>TOWNSFOLK</strong> to the Washerwoman. Put the Washerwoman to sleep. Remove the Washerwoman's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Librarian",
        intro: "<p>The Librarian learns that a particular Outsider character is in play, but not who is playing them.</p><ul><li>During the first night, the Librarian learns that one of two players is a specific Outsider.</li><li>They learn this only once and then learn nothing more.</li><li>The Drunk is an Outsider. If the Librarian learns that one of two players is the Drunk, they do not learn the Townsfolk that the Drunk's player thinks they are.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)',
        flavor: '"Certainly Madam, under normal circumstances, you may borrow the Codex Malificarium from the library vaults. However, you do not seem to be a member."',
        examples: "<p style='margin-top: 0;'>Benjamin is the Saint, and Filip is the Baron. The Librarian learns that either Benjamin or Filip is the Saint.</p><p>There are no Outsiders in this game. The Librarian learns a '0'.</p><p>Abdallah is the Drunk, who thinks they are the Monk, and Douglas is the Undertaker. The Librarian learns that either Abdallah or Douglas is the Drunk. (This happens because the Librarian learns the true character. The Drunk is Abdallah's true character, not the Monk.)</p>",
        howToRun: `<p>While preparing the first night, put the Librarian's <strong>OUTSIDER</strong> reminder token by any Outsider character token, and put the Librarian's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Librarian and point to the players marked <strong>OUTSIDER</strong> and <strong>WRONG</strong>. Show the character token marked <strong>OUTSIDER</strong> to the Librarian. Put the Librarian to sleep. Remove the Librarian's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Investigator",
        intro: "<p>The Investigator learns that a particular Minion character is in play, but not who is playing them.</p><ul><li>During the first night, the Investigator learns that one of two players is a specific Minion.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Minion.',
        flavor: '"It is a fine night for a stroll, wouldn\'t you say, Mister Morozov? Or should I say... BARON Morozov?"',
        examples: "<p>Amy is the Baron, and Julian is the Mayor. The Investigator learns that either Amy or Julian is the Baron.</p><p>Angelus is the Spy, and Lewis is the Poisoner. The Investigator learns that either Angelus or Lewis is the Spy.</p><p>Brianna is the Recluse, and Marianna is the Imp. The Investigator learns that either Brianna or Marianna is the Poisoner. (This happens because the Recluse is registering as a Minion—in this case, the Poisoner.)</p>",
        howToRun: `<p>While preparing the first night, put the Investigator's <strong>MINION</strong> reminder token by any Minion character token, and put the Investigator's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Investigator and point to the players marked <strong>MINION</strong> and <strong>WRONG<strong>. Show the character token marked <strong>MINION</strong> to the Investigator. Put the Investigator to sleep. Remove the Investigator's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Chef",
        intro: "<p>The Chef knows if evil players are sitting next to each other.</p><ul><li>On the first night, the Chef learns exactly how many pairs of evil players there are in total. A pair is two players, but one player may be a part of two pairs. So, two players sitting next to each other is one pair. Three players sitting next to each other is two pairs. Four players sitting next to each other is three pairs. And so on.</li><li>The Chef detects evil Travellers just like other character types, but only if those Travellers joined the game before the Chef acts.</li></ul>",
        ability: 'You start knowing how many pairs of evil players there are.',
        flavor: '"This evening\'s reservations seem odd. Never before has Mrs Mayweather kept company with that scamp from Hudson lane. Yet, tonight, they have a table for two. Strange."',
        examples: `<p>No evil players are sitting next to each other. The Chef learns a "0".</p><p>The Imp is sitting next to the Baron. Across the circle, the Poisoner is sitting next to the Scarlet Woman. The Chef learns a "2".</p><p>An evil Scapegoat is sitting between the Imp and a Minion. Across the circle, two other Minions are sitting next to each other. The Chef learns a "3".</p><p>The Recluse is sitting between the Imp and the Poisoner. The Chef learns a "1". Here, the Recluse is registering as evil for the Imp-Recluse pair, but as good for the Poisoner-Recluse pair</p>`,
        howToRun: '<p>During the first night, wake the Chef. Show the Chef fingers (0, 1, 2, etc.) equaling the number of pairs of neighboring evil players. Put the Chef to sleep.</p>',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Empath",
        intro: "<p>The Empath keeps learning if their living neighbours are good or evil.</p><ul><li>The Empath only learns how many of their neighbors are evil, not <i>which</i> one is evil.</li><li>The Empath does not detect dead players. So, if the Empath is sitting next to a dead player, they do not get info about that dead player. Instead, they get info about the closest alive player in that direction.</li><li>The Empath acts after the Demon, so if the Demon kills one of the Empath's alive neighbors, the Empath does not learn about the now-dead player. The Empath's information is accurate at dawn, not at dusk.</li></ul>",
        ability: 'Each night, you learn how many of your 2 alive neighbours are evil.',
        flavor: '"My skin prickles. Something is not right here. I can feel it."',
        examples: '<p>The Empath neighbors two good players—a Soldier and a Monk. The Empath learns a "0".</p><p>The next day, the Soldier is executed. That night, the Monk is killed by the Imp. The Empath now detects the alive players sitting next to the Soldier and the Monk, who are a Librarian and an evil Gunslinger. The Empath now learns a "1".</p><p>On a later night, there are only three players left alive: the Empath, the Imp, and the Baron. No matter who is seated where, the Empath learns a "2".</p>',
        howToRun: "Each night, wake the Empath. Show them fingers (0, 1, or 2) equaling the number of evil players neighboring the Empath. Put the Empath to sleep.",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Fortune Teller",
        intro: "<p>The Fortune Teller can detect who the Demon is, but sometimes thinks good players are Demons.</p><ul><li>Each night, the Fortune Teller chooses two players and learns if at least one of them is a Demon. They do not learn which of them is a Demon, just that one of them is. If neither is the Demon, they learn this instead.</li><li>Unfortunately, one player, called the Red Herring, will register as a Demon to the Fortune Teller if chosen. The Red Herring is the same player throughout the entire game. This player may be any good player, even the Fortune Teller themself, and the Fortune Teller does not know which player it is.</li><li>The Fortune Teller may choose any two players—alive or dead, or even themself. If they choose a dead Demon, then the Fortune Teller still receives a nod.</li>",
        ability: 'Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.',
        flavor: '"I sense great evil in your soul! But... that could just be your perfume. I am allergic to Elderberry."',
        examples: `<p>The Fortune Teller chooses the Mayor and the Undertaker, and learns a "no".</p><p>The Fortune Teller chooses the Imp and the Empath, and learns a "yes".</p><p>The Fortune Teller chooses an alive Imp and a dead Imp, and learns a "yes".</p><p>The Fortune Teller chooses themself and a Saint, who is the Red Herring. The Fortune Teller learns a "yes".</p>`,
        howToRun: `<p>While preparing the first night, put the Fortune Teller's <strong>Red Herring</strong> reminder token by any good character token, marking that player as the Red Herring.</p><p>Each night, wake the Fortune Teller. The Fortune Teller points at any two players. If either chosen player is a Demon or the Red Herring, nod your head yes. Otherwise, shake your head no. Put the Fortune Teller to sleep.</p><p class="callout-box">In smaller games, making the Fortune Teller their own Red Herring is sometimes advised, as the Fortune Teller gets more information that way.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Undertaker",
        intro: "The Undertaker learns which character was executed today.",
        ability: '"Each night*, you learn which character died by execution today."',
        flavor: '"Hmmm....what have we here? The left boot is worn down to the heel, with flint shavings under the tongue. This is the garb of a Military man."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Monk",
        intro: "The Monk protects other players from the Demon.",
        ability: '"Each night*, choose a player (not yourself): they are safe from the Demon tonight."',
        flavor: '"\'Tis an ill and deathly wind that blows tonight. Come, my brother, take shelter in the abbey while the storm rages. By my word, or by my life, you will be safe."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Ravenkeeper",
        intro: "If the Ravenkeeper dies at night, they get to learn one player's character.",
        ability: '"If you die at night, you are woken to choose a player: you learn their character."',
        flavor: '"My birds will avenge me! Fly! Fly, my sweet and dutiful pets! Take your message to those in dark corners! To the manor and to the river! Let them read of the nature of my death."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Virgin",
        intro: "The Virgin may inadvertently execute their accuser, confirming which players are Townsfolk in the process.",
        ability: '"The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately."',
        flavor: '"I am pure. Let those who are without sin cast themselves down and suffer in my stead. My reputation shall not be stained with your venomous accusations."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Slayer",
        intro: "The Slayer can kill the Demon by guessing who they are.",
        ability: '"Once per game, during the day, publicly choose a player: if they are the Demon, they die."',
        flavor: '"Die."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Soldier",
        intro: "The Soldier can not be killed by the Demon.",
        ability: '"You are safe from the Demon."',
        flavor: '"As David said to Goliath, as Theseus said to the Minotaur, as Arjuna said to Bhagadatta... No."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Mayor",
        intro: "The Mayor can win by peaceful means on the final day.",
        ability: '"If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."',
        flavor: '"We must put our differences aside, and cease this senseless killing. We are all taxpayers after all. Well, most of us."',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Butler",
        intro: "The Butler may only vote when their Master (another player) votes.",
        ability: '"Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."',
        flavor: '"Yes, sir...<br><br>No, sir...<br><br>Certainly, sir."',
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Drunk",
        intro: "The Drunk player thinks that they are a Townsfolk, and has no idea that they are actually the Drunk.",
        ability: '"You do not know you are the Drunk. You think you are a Townsfolk character, but you are not."',
        flavor: '"This is all perfectly [burp] logical. I know that Miss Dearheart is a Fortune Teller. Mrs Dearheart swears that Jenkins here is her Butler. It\'s simple [hic] deduction."',
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Recluse",
        intro: "The Recluse might appear to be an evil character, but is actually good.",
        ability: '"You might register as evil & as a Minion or Demon, even if dead."',
        flavor: '"Garn git ya darn grub ya mitts ofma lorn yasee. Grr. Natsy pikkins yonder southwise ye begittin afta ya! Git! Me harvy no so widda licks and demmons no be fightin\' hadsup ne\'er ma kin. Git, assay!"',
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Saint",
        intro: "The Saint ends the game if they are executed.",
        ability: '"If you die by execution, your team loses."',
        flavor: '"Wisdom begets peace. Patience begets wisdom. Fear not, for the time shall come when fear too shall pass. Let us pray, and may the unity of our vision make saints of us all."',
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Poisoner",
        intro: "The Poisoner secretly disrupts character abilities.",
        ability: '"Each night, choose a player: they are poisoned tonight and tomorrow day."',
        flavor: '"Add compound Alpha to compound Beta... NOT TOO MUCH!"',
        group: "Minion",
        script: "tb"
    },
    {
        name: "Spy",
        intro: "The Spy might appear to be a good character, but is actually evil. They also see the Grimoire, so they know the characters (and status) of all players.",
        ability: '"Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead."',
        flavor: '"Any brewmaster worth their liquor,<br>knows no concoction pours trouble quicker,<br>than one where spies seem double."',
        group: "Minion",
        script: "tb"
    },
    {
        name: "Scarlet Woman",
        intro: "The Scarlet Woman becomes the Demon when the Demon dies.",
        ability: '"If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don\'t count)"',
        flavor: '"You have shown me the secrets of the Council of the Purple Flame. We have lain together in fire and in lust and in beastly commune, and I am forever your servant. But tonight, my dear, I am your master."',
        group: "Minion",
        script: "tb"
    },
    {
        name: "Baron",
        intro: "The Baron changes the number of Outsiders present in the game.",
        ability: '"There are extra Outsiders in play. [+2 Outsiders]"',
        flavor: '"This town has gone to the dogs, what? Cheap foreign labor... that\'s the ticket. Stuff them in the mine, I say. A bit of hard work never hurt anyone, and a clip\'o\'the ears to any brigand who says otherwise. It\'s all about the bottom line, what?"',
        group: "Minion",
        script: "tb"
    },
    {
        name: "Imp",
        intro: "The Imp kills a player each night, and can make copies of itself... for a terrible price.",
        ability: '"Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."',
        flavor: '"We must keep our wits sharp and our sword sharper. Evil walks among us, and will stop at nothing to destroy us good, simple folk, bringing our fine town to ruin. Trust no-one. But, if you must trust someone, trust me."',
        group: "Demon",
        script: "tb"
    },
    {
        name: "Grandmother",
        intro: "The Grandmother knows who their grandchild is, but if they are killed by the Demon, the Grandmother dies too.",
        ability: '"You start knowing a good player & their character. If the Demon kills them, you die too."',
        flavor: '"Take a jacket if you go outside, dearie. And your thermos. And your scarf. I have a weak heart, you know. Whatever would I do if you caught cold...or worse?"',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Sailor",
        intro: "The Sailor is either drunk or getting somebody else drunk. While the Sailor is sober, they can't die.",
        ability: '"Each night, choose an alive player: either you or they are drunk until dusk. You can\'t die."',
        flavor: '"I\'ll drink any one of yer under the table! You! The chatterbox! Reckon you can take me? No? Howza \'bout you, Grandma? You ever tried Old McKillys Extra Spiced Rum before? Guaranteed to put hairs on yer chest! Step aboard, aye!"',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Chambermaid",
        intro: "The Chambermaid learns who woke up at night.",
        ability: '"Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability."',
        flavor: '"I aint seen nothin\' untoward, Milady. Begging your pardon, but if I did see somethin\', it certainly weren\'t the master o\' the house sneaking into the professor\'s laboratory \'round eleven o\'clock and mixing up fancy potions, just like you said, Miss."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Exorcist",
        intro: "The Exorcist prevents the Demon from waking to attack.",
        ability: '"Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn\'t wake tonight."',
        flavor: '"We cast you out, every unclean spirit, every satanic power, every onslaught of the infernal adversary, every legion, every diabolical group and sect, in the name and by the power of Our Lord Jesus Christ. We command you, begone and fly far from the Church of God, from the souls made by God in His image and redeemed by the precious blood of the divine Lamb."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Innkeeper",
        intro: "The Innkeeper protects people from death at night, but somebody gets drunk in the process.",
        ability: '"Each night*, choose 2 players: they can\'t die tonight, but 1 is drunk until dusk."',
        flavor: '"Come inside, fair traveller, and rest your weary bones. Drink and be merry, for the legions of the Dark One shall not harass thee tonight."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Gambler",
        intro: "The Gambler can guess who is who...but pays the ultimate price if they guess wrong.",
        ability: '"Each night*, choose a player & guess their character: if you guess wrong, you die."',
        flavor: '"Heads, I win. Tails, you lose."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Gossip",
        intro: "The Gossip deliberately speaks lies, in the hope of uncovering the truth.",
        ability: '"Each day, you may make a public statement. Tonight, if it was true, a player dies."',
        flavor: '"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Courtier",
        intro: "The Courtier gets a character drunk, without knowing which player it is.",
        ability: '"Once per game, at night, choose a character: they are drunk for 3 nights & 3 days."',
        flavor: '"I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Professor",
        intro: "The Professor can bring someone back from the dead.",
        ability: '"Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected."',
        flavor: '"The process is simple. Attach the hydraulic confabulator to the modified chi matrix amplifier, add 20 CCs of pseudodorafine, keep his Z levels above 20%, and your husband will be fine. Now, all we need is a lightning strike."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Minstrel",
        intro: "The Minstrel makes everybody drunk if a Minion dies.",
        ability: '"When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow."',
        flavor: '"And I shall hear, tho\' soft you tread above me... And all my dreams will warm and sweeter be... If you\'ll not fail to tell me that you love me... I simply sleep in peace until you come to me."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Tea Lady",
        intro: "The Tea Lady protects her neighbours from death...as long as they are good.",
        ability: '"If both your alive neighbors are good, they can\'t die."',
        flavor: '"If you are cold, tea will warm you. If you are too heated, tea will cool you. If you are depressed, tea will cheer you. If you are excited, tea will calm you."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Pacifist",
        intro: "The Pacifist prevents good players from dying by execution.",
        ability: '"Executed good players might not die."',
        flavor: '"Distrust all in whom the impulse to punish is powerful."',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Fool",
        intro: "The Fool escapes death... once.",
        ability: '"The first time you die, you don\'t."',
        flavor: '"...and the King said \'What?! I\'ve never even owned a pair of rubber pantaloons, let alone a custard cannon!\' Ho-ho! Jolly day!"',
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Goon",
        intro: "The Goon is immune to other characters at night, but keeps changing allegiances.",
        ability: '"Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."',
        flavor: '"Yes boss. I explained fings real good to dat geezer. He don\'t want me explain it again. Nah boss, I don\'t need no doctor—it\'s only a knife wound. Be right come mornin\'."',
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Lunatic",
        intro: "The Lunatic thinks that they are the Demon.",
        ability: '"You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night."',
        flavor: '"I am the night...I think."',
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Tinker",
        intro: "The Tinker can die at any time, for no reason.",
        ability: '"You might die at any time."',
        flavor: '"I think I see the problem. Luckily, I have an idea! This catapult will shoot twice as far with just a minor adjustment..."',
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Moonchild",
        intro: "The Moonchild curses someone upon death, killing them too.",
        ability: '"When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die."',
        flavor: '"Scorpio looks sideways at the lovers, and you have a choice to make. With silver cross my palm, and your fate shall be revealed. With steel cross my throat, and by the stars you shall regret it."',
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Godfather",
        intro: "The Godfather takes revenge when the town kills Outsiders.",
        ability: '"You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]"',
        flavor: '"Normally, it\'s just business. But when you insult my daughter, you insult me. And when you insult me, you insult my family. You really should be more careful—it would be a shame if you had an unfortunate accident."',
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Devil's Advocate",
        intro: "The Devil's Advocate saves players from execution.",
        ability: '"Each night, choose a living player (different to last night): if executed tomorrow, they don\'t die."',
        flavor: '"My client, should the objection be overruled, pleads innocent by virtue of the prosecution\'s non-observance of statute 27.B—incorrect or misleading conjugation of a verb. The fact that nine of the jury died last night is simply prima face, which is, as Wills vs Thule set precedent for, further reason to acquit."',
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Assassin",
        intro: "The Assassin kills who the Demon cannot.",
        ability: '"Once per game, at night*, choose a player: they die, even if for some reason they could not."',
        flavor: '"..."',
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Mastermind",
        intro: "The Mastermind can still win after the Demon is dead.",
        ability: '"If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses."',
        flavor: '"The tentacles of that monster are nailed to the doors of the church. Mothers and children are dancing in the street. Excellent. Everything is proceeding exactly as I have planned."',
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Zombuul",
        intro: "The Zombuul secretly remains alive while in the grave.",
        ability: '"Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead."',
        flavor: '"I do not. Understand. Your ways. Fellow human. Show me. The dirt. Where the holy. Lay. Sleeping. I too. Must sleep. Soon."',
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Pukka",
        intro: "The Pukka poisons its victims, who die at a later time.",
        ability: '"Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy."',
        flavor: '"You truly have been kind welcoming me into your beautiful home. I am so sorry I accidentally scratched you. A little thing. No matter. But please, take this golden toothpick as a humble token of my regret."',
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Shabaloth",
        intro: "The Shabaloth eats two players per night, but may vomit one of them back up the following night.",
        ability: '"Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated."',
        flavor: '"Blarg f\'taag nm mataan! No sho gumtha m\'sik na yuuu. Fluuuuuuuuurg h-sikkkh."',
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Po",
        intro: "The Po can choose to attack nobody at night, but goes on a rampage the following night.",
        ability: '"Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight."',
        flavor: '"Would you like a flower? I\'m so lonely."',
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Clockmaker",
        intro: "The Clockmaker knows the distance from the Demon to it's nearest Minion, either clockwise or anti-clockwise.",
        ability: '"You start knowing how many steps from the Demon to its nearest Minion."',
        flavor: '"Do not disturb me. The tick must continue, for the circle is a symbol of life and contains all things - all answers - in it\'s divine machinery. I must work."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Dreamer",
        intro: "The Dreamer learns player's characters, but is not sure if their information is entirely correct.",
        ability: '"Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct."',
        flavor: '"I remember the Clockmaker. The sky was red and it was raining fractal triangles. There was a smell of violets and a bubbling sound. A woman with glowing eyes and a scraggly beard was hissing at the sky. Then, I awoke ."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Snake Charmer",
        intro: "The Snake Charmer learns player after player that is not the Demon... but becomes the Demon if they get either too greedy or too bold.",
        ability: '"Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned."',
        flavor: '"Effendi... I am but a humble man, but my pipe is golden and a single tune will tame the wildest djinn, Inshallah. They say that greed hangs more men than rope. But not I, Effendi... not I."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Mathematician",
        intro: "The Mathematician knows how many things have gone wrong since dawn today.",
        ability: '"Each night, you learn how many players\' abilities worked abnormally (since dawn) due to another character\'s ability."',
        flavor: '"Any consistent formal system x, within which a certain amount of elementary arithmetic can be carried out is incomplete; that is, there are statements of the language of x which can neither be proved nor disproved in x. Ergo, you are drunk."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Flowergirl",
        intro: "The Flowergirl knows if the Demon voted or not.",
        ability: '"Each night*, you learn if a Demon voted today."',
        flavor: '"Yesterday\'s violets have withered and died, but today my poppies bloom."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Town Crier",
        intro: "The Town Crier knows when Minions nominate.",
        ability: '"Each night*, you learn if a Minion nominated today."',
        flavor: '"Hear ye! Hear ye! Witchcraft in the labyrinth! Genius savant reveals all! Town in danger! Hear Ye!"',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Oracle",
        intro: "The Oracle knows how many dead players are evil.",
        ability: '"Each night*, you learn how many dead players are evil."',
        flavor: '"Only the chosen may gaze beyond the veil. The dead are restless, and they point in silence toward the icy north."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Savant",
        intro: "The Savant gets crazy, amazing information that is different every day and every game, but exactly half of it is completely false.",
        ability: '"Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."',
        flavor: '"Seventy-two matchsticks on the floor... the sun sets early but the moon is unchanged... a torn piece of cloth... evil in the manor house... three by three... the one we trusted is not what he seems... green light means magnesium... residue, but the pattern is wrong... Seventy-two matchsticks on the floor..."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Seamstress",
        intro: "The Seamstress learns whether 2 players are on the same team as each each other.",
        ability: '"Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment."',
        flavor: '"Did you hear that stranger in the cashmere coat put the word on our young Belle? And she said yes? Well, that\'s nothing compared to what Harry and that juggler got up to at the fair! The things I could say if I was a tattletale... my, yes."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Philosopher",
        intro: "The Philosopher has no ability until they decide which character they want to emulate.",
        ability: '"Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk."',
        flavor: '"If anything is real, beer is real. Drink, for tomorrow we may die."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Artist",
        intro: "The Artist may ask any 1 question, and get an honest answer.",
        ability: '"Once per game, during the day, privately ask the Storyteller any yes/no question."',
        flavor: '"Mon Dieu! C\'est lumineux! My work, she is... how you say... Magnifique! Dieu est révélé! Oui."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Juggler",
        intro: "The Juggler takes the risk of convincing people to reveal their characters on the 1st day, in the hope of guessing as many as possible that are telling the truth.",
        ability: '"On your 1st day, publicly guess up to 5 players\' characters. That night, you learn how many you got correct."',
        flavor: '"For my next trick, as per request, I will need a flower, a bag of beans, a toy snake, a paintbrush, and a motorized gasoline-powered hedge trimming device. I warn you, this trick may be my last. Oh dear."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Sage",
        intro: "The Sage knows nothing while alive, but learns the most important information of all at the moment of their death - who killed them.",
        ability: '"If the Demon kills you, you learn that it is 1 of 2 players."',
        flavor: '"These mountainous tomes guard the secret, I am sure of it! Twixt word and word, it lies in wait. More candles, boy! More ink! These notes may look arcane, but the infernal puzzle is revealing itself."',
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Mutant",
        intro: "The Mutant is killed if they try to reveal who they are.",
        ability: '"If you are "mad" about being an Outsider, you might be executed."',
        flavor: '"I am not a freak! I am a human being! Have mercy!"',
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Sweetheart",
        intro: "The Sweetheart, when they die, causes someone to be drunk for the rest of the game.",
        ability: '"When you die, 1 player is drunk from now on."',
        flavor: 'I will never forget her. Never."',
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Barber",
        intro: "The Barber allows the Demon to swap any 2 player's characters.",
        ability: '"If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters."',
        flavor: '"Did you know that barbery and surgery were once the same profession? No? Well, now you do."',
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Klutz",
        intro: "The Klutz might accidentally lose the game for their team, unless they are clever.",
        ability: '"When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses."',
        flavor: '"Oops."',
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Evil Twin",
        intro: "The Evil Twin mirrors a good character, so that the players don't know which twin is good and which twin is evil.",
        ability: '"You & an opposing player know each other. If the good player is executed, evil wins. Good can\'t win if you both live."',
        flavor: '"I\'m not Sara! I\'m Clara! SHE is Sara! Sara is the evil one! Not me!"',
        group: "Minion",
        script: "sv"
    },
    {
        name: "Witch",
        intro: "The Witch curses players, so that they die if they nominate.",
        ability: '"Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability."',
        flavor: '"Three drops of goat\'s blood. A lock of hair, torn in anger. The name is spoken, the shadow cast. Walk left foot first down that brambled path, and don\'t look back."',
        group: "Minion",
        script: "sv"
    },
    {
        name: "Cerenovus",
        intro: "The Cerenovus encourages players to pretend to be different characters than they actually are.",
        ability: '"Each night, choose a player & a good character: they are "mad" they are this character tomorrow, or might be executed."',
        flavor: '"Reality is merely an opinion. Specifically, my opinion."',
        group: "Minion",
        script: "sv"
    },
    {
        name: "Pit-Hag",
        intro: "The Pit-Hag changes players into different characters.",
        ability: '"Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary."',
        flavor: '"Round about the cauldron go; In the poison\'d entrails throw; Toad, that under cold stone; Days and nights has thirty-one; Sweated venom sleeping got; Boil thou first in the charmed pot."',
        group: "Minion",
        script: "sv"
    },
    {
        name: "Fang Gu",
        intro: "The Fang Gu possesses Outsiders.",
        ability: '"Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]"',
        flavor: '"Your walls and your weapons are but smoke in dreams."',
        group: "Demon",
        script: "sv"
    },
    {
        name: "Vigormortis",
        intro: "The Vigormortis kills their own Minions, but those Minions keep their ability.",
        ability: '"Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]"',
        flavor: '"All doors are one door. All keys are one key. All cups are one cup, but whosoever drinketh of the water that I give shall never thirst, but the water shall be in him a well springing up into everlasting life."',
        group: "Demon",
        script: "sv"
    },
    {
        name: "No Dashii",
        intro: "The No Dashii poisons their neighbouring Townsfolk.",
        ability: '"Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned."',
        flavor: '"By the sins of Arnoch, I feel thy laden stench. By the curs-ed sun and her foul legion of tiny grinning gods, I corrupt thee. By the blessed night and the hidden depths of the horrid and unholy sea, I end thy squalid life upon this plane."',
        group: "Demon",
        script: "sv"
    },
    {
        name: "Vortox",
        intro: "The Vortox makes all information false.",
        ability: '"Each night*, choose a player; they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins."',
        flavor: '"Black is White. Right is Wrong. Left is Right. Up is Long. Down is Sight. Short is Blind. Follow me. Answers find."',
        group: "Demon",
        script: "sv"
    },
    {
        name: "Alchemist",
        intro: "The Alchemist has a Minion ability.",
        ability: '"You have a not-in-play Minion ability."',
        flavor: '"Visit the interior of the Earth. By rectification thou shalt find the hidden stone. Above the gold, lieth the red. Kether in Malkuth."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Amnesiac",
        intro: "The Amnesiac doesn't know their own ability.",
        ability: '"You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are."',
        flavor: '"Wait. What. Who? Oh, ok. Wait. What?"',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Atheist",
        intro: "The Atheist knows that all players are good and that there is no such thing as Demons.",
        ability: '"The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]"',
        flavor: '"Let us disperse with unnecessary conjecture and silly paranoia. There is a perfectly rational explanation for everything. Yes, a teacup may indeed be orbiting the planet, too small to see, but I shall drink my tea from the very real china in my very real hands."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Balloonist",
        intro: "The Balloonist knows a Townsfolk, an Outsider, a Minion, and a Demon, but gets them confused.",
        ability: '"Each night, you learn 1 player of each character type, until there are no more types to learn. [+1 Outsider]"',
        flavor: '"More heat! Higher! Higher! Più alto! Ahhh... it is so beautiful from up here, don\'t you agree? Can you see the children fishing by the river, under the willow? Can you see the glint of the sun on the circus tent-poles? What\'s this? An old man, alone, passed out in the vineyard? Less heat! Lower! Lower! Vai più in basso!"',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Bounty Hunter",
        intro: "The Bounty Hunter learns all the evil players. One. Player. At. A. Time.",
        ability: '"You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]"',
        flavor: '"Alone, I walk these streets, paved with the sick stench of corruption. Its thickness worms its way into my nostrils, unbidden, burning with revulsion. And anticipation. The illness of this wretched place grows each night. And I... I am the cure. "',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Cannibal",
        intro: "The Cannibal gains the abilities of executed players, if they're good.",
        ability: '"You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution."',
        flavor: '"I don\'t like clowns. They taste funny."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Choirboy",
        intro: "The Choirboy learns who the Demon is when the Demon kills the King.",
        ability: '"If the Demon kills the King, you learn which player is the Demon. [+the King]"',
        flavor: '"I saw it, I did. I was in the pews, tidying the hymn books, when a dreadful tune started from the pipe organ. The organist had a long cloak, and long fingers on the keys. And a hat that looked… just like… yours.”',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Cult Leader",
        intro: "The Cult Leader convinces others to join their cult to end the game. But which team will win?",
        ability: '"Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins."',
        flavor: '"Thinking themselves wise, they became fools."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Engineer",
        intro: "The Engineer manufactures the threat that the town faces.",
        ability: '"Once per game, at night, choose which Minions or which Demon is in play."',
        flavor: '"If it bends, great. If it breaks, well, it probably needed fixing anyway."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Farmer",
        intro: "The Farmer creates more farmers.",
        ability: '"If you die at night, an alive good player becomes a Farmer."',
        flavor: '“Even the high and mighty need food on the table. Without us, the city starves.”',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Fisherman",
        intro: "The Fisherman knows something that nobody else can know - what should be done.",
        ability: '"Once per game, during the day, visit the Storyteller for some advice to help your team win."',
        flavor: '"This was my favourite part of the river… see how the sunlight makes a rainbow from the monastery to the market? This was the best place for big fish. And the older I get, the bigger they were.”',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "General",
        intro: "The General knows who is winning.",
        ability: '"Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither."',
        flavor: '"I don\'t have time for quotes."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Huntsman",
        intro: "The Huntsman saves the Damsel before the Minions find her… hopefully.",
        ability: '"Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]"',
        flavor: '"My cabin is warm and sturdy. My axe by the door, my boots drying by the fire, and elk stew a-simmering… Hark! A scream echoes through the valley! The rain and the mud and the cold, cold wind mask the scent of the wolves, but I know the path and my pace is steady. I am coming."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "King",
        intro: "The King learns which characters are still alive.",
        ability: '"Each night, if the dead outnumber the living, you learn 1 alive character. The Demon knows who you are."',
        flavor: '"Betwixt the unknown strains of mortal strife<br>And morbid night, sweet with mystery and woe<br>Lies unfettered joys of fate\'s long and colored life<br>Who\'s garden blooms with each painted face to show."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Lycanthrope",
        intro: "The Lycanthrope roams the night, killing the innocent, whilst the Demon cowers indoors.",
        ability: '"Each night*, choose an alive player. If good, they die, but they are the only player that can die tonight."',
        flavor: '"Beneath the thin veneer of civilisation lies a howling madness."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Magician",
        intro: "The Magician confuses the evil players about who is evil and who isn\'t.",
        ability: '"The Demon thinks you are a Minion. Minions think you are a Demon."',
        flavor: '"1… 2… Abra… 3… 4… Cadabra… [poof!]<br>And, as you can see, ladies and gentlemen, Captain Farnsworth\'s bag of gold has disappeared! Gone! Without a trace! Thank you, and goodnight!"',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Nightwatchman",
        intro: "The Nightwatchman is known by one player.",
        ability: '"Once per game, at night, choose a player: they learn who you are."',
        flavor: '"The night is cold and lonely, but I have the moon, the stars, the crisp wind and the soft thud of leather boots on cobbled stone for company. Yonder, candlelight flickers behind a murky window..."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Noble",
        intro: "The Noble learns that one of three players is evil.",
        ability: '"You start knowing 3 players, 1 and only 1 of which is evil."',
        flavor: '"Sarcasm is indeed the lowest form of wit. But speaking in response to your criticism, Sir, it is, nevertheless, a form of wit."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Pixie",
        intro: "The Pixie pretends to be the same character as someone else.",
        ability: '"You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die."',
        flavor: '"Round and round the garden, go.<br>Little girls run to and fro.<br>Little boys climb up the tree.<br>Which of these should Pixie be?<br>Ladies smile and go to town.<br>Lords with axe chop forest down.<br>What\'s yours is mine. What\'s mine, divine.<br>Silly little Pixie, me."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Poppy Grower",
        intro: "The Poppy Grower prevents the evil players from learning who each other are.",
        ability: '"Minions & Demons do not know each other. If you die, they learn who each other are that night."',
        flavor: '"In the hidden groves of the deep forest, the black poppy dwells. To see its revelry is to be enchanted. To smell its thick aroma is to be lost forever, a slave to the gods of light and dark."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Preacher",
        intro: "The Preacher removes the Minion abilities of selected players.",
        ability: '"Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability."',
        flavor: '"It is better to be rich and healthy than poor and sick."',
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Acrobat",
        intro: "The Acrobat dies if the people they neighbour are drunk or poisoned.",
        ability: '"Each night*, if either good living neighbour is drunk or poisoned, you die."',
        flavor: '"Welcome, one and all, to the greatest show on earth."',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Damsel",
        intro: "The Damsel absolutely, positively cannot be found out by the evil team.",
        ability: '"All Minions know you are in play. If a Minion publicly guesses you (once), your team loses."',
        flavor: 'Don\'t touch the hair, honey."',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Golem",
        intro: "The Golem kills the player they nominate.",
        ability: '"You may only nominate once per game. When you do, if the nominee is not the Demon, they die."',
        flavor: '"Golem help? Golem smash! Golem help."',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Heretic",
        intro: "The Heretic turns a win into a loss, and a loss into a win.",
        ability: '"Whoever wins, loses & whoever loses, wins, even if you are dead."',
        flavor: '"After the hail has smashed the roof and splintered the glass of the Cathedral windows, it melts again into the earth, like a dying lamb in the desert sun. Such is the parable of the madman."',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Politician",
        intro: "The Politician changes teams if they are losing.",
        ability: '"If you were the player most responsible for your team losing, you change alignment & win, even if dead."',
        flavor: '"I\'m glad you asked that question. Truly, I am. But I think the REAL question here is…"',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Puzzlemaster",
        intro: "",
        ability: '"1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info."',
        flavor: '"When one begins to think that some thing is merely some other thing, one is usually on the brink of an error. Patience, patience. Don\'t confuse just and should with is and isn\'t."',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Snitch",
        intro: "The Snitch accidentally gives information to the evil team.",
        ability: '"Minions start knowing 3 not-in-play characters."',
        flavor: '"It was John."',
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Boomdandy",
        intro: "The Boomdandy explodes when executed, killing most other players.",
        ability: '"If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them, dies."',
        flavor: '"Tick... Tick... Tick... TOCK."',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Fearmonger",
        intro: "The Fearmonger creates paranoia about who nominates whom.",
        ability: '"Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player."',
        flavor: '"Beware of gazing long into the Abyss, lest the Abyss also gaze into you."',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Goblin",
        intro: "The Goblin takes revenge if the town knowingly executes them.",
        ability: '"If you publicly claim to be the Goblin when nominated & are executed that day, your team wins."',
        flavor: '"You don\'t want to insult the goblins. You really, really don\'t. On a completely different note… can I have another piece of cake?"',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Marionette",
        intro: "The Marionette doesn't know that they are a Minion.",
        ability: '"You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]"',
        flavor: '"Words, words. They\'re all we have to go on."',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Mezepheles",
        intro: "The Mezepheles offers good players a choice: to turn evil or not.",
        ability: '"You start knowing a secret word. The 1st good player to say this word becomes evil that night."',
        flavor: '"That which issues from the heart alone, will bend the hearts of others to your own."',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Psychopath",
        intro: "The Psychopath kills in broad daylight.",
        ability: '"Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo."',
        flavor: '"Surprise!"',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Widow",
        intro: "The Widow knows all characters and poisons the exact character of their choosing.",
        ability: '"On your first night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play."',
        flavor: '"More wine? Château d\'Ergot \'07 is a very special vintage. My yes, very special indeed."',
        group: "Minion",
        script: "exp"
    },
    {
        name: "Al-Hadikhia",
        intro: "The Al-Hadikhia puts three players in a dilemma - who will choose to die, so that others can live?",
        ability: '"Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die."',
        flavor: '"Alsukut min dhahab."',
        group: "Demon",
        script: "exp"
    },
    {
        name: "Legion",
        intro: "Legion is many Demons.",
        ability: '"Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]"',
        flavor: '"We are the chill wind on a winter\'s day. We are the shadow in the moonless night. We are the poison in your tea and the whisper in your ear. We are everywhere."',
        group: "Demon",
        script: "exp"
    },
    {
        name: "Leviathan",
        intro: "The Leviathan doesn't kill players, but wins after 5 days have passed.",
        ability: '"If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins."',
        flavor: '"To the last, I grapple with thee. From Hell\'s heart, I stab at thee. For hate\'s sake, I spit my last breath at thee"',
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lil' Monsta",
        intro: "Lil\' Monsta isn\'t a player, and is instead babysat by a Minion.",
        ability: '"Each night, Minions choose who babysits Lil\' Monsta\'s token & "is the Demon". A player dies each night*. [+1 Minion]"',
        flavor: '"Step 1: Be cute. Step 2: World domination. Step 3: Bweakfast."',
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lleech",
        intro: "The Lleech lives if their host lives, and dies if their host dies.",
        ability: '"Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if (& only if) they die."',
        flavor: '“Tasty, tasty, tasty, tasty, tasty, tasty, tasty, tasty brai- I mean pie! Yes. Tasty pie. That\'s what I meant to say.”',
        group: "Demon",
        script: "exp"
    },
    {
        name: "Riot",
        intro: "Riot kills everybody in a panic.",
        ability: '"Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]"',
        flavor: '"Larga vida a la revolución! Mi revolucion!"',
        group: "Demon",
        script: "exp"
    },
    {
        name: "Scapegoat",
        intro: "The Scapegoat is executed instead of an ally.",
        ability: '"If a player of your alignment is executed, you might be executed instead."',
        flavor: '"Good evening! Thank you for inviting me to the ball. I\'m not from around here, but you sure seem like a friendly bunch, by golly. I\'m sure we\'ll get along just dandy. What\'s all that rope for?"',
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Gunslinger",
        intro: "The Gunslinger kills players who vote.",
        ability: '"Each day, after the 1st vote has been tallied, you may choose a player that voted: they die."',
        flavor: '"It\'s time someone took matters into their own hands. That someone... is me."',
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Beggar",
        intro: "The Beggar can not vote unless someone gives them a token to use, but they learn if the player that does so is good or evil.",
        ability: '"You must use a vote token to vote. If a dead player gives you theirs, you learn their alignment. You are sober and healthy."',
        flavor: '"Alms for the poor, good Sir? Spare a coin, Madam? Thank you. God bless! You\'re a right kind soul and no mistake! I\'ll have some swanky nosh tonight, I will!"',
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Bureaucrat",
        intro: "The Bureaucrat gives extra votes to a player of their choice.",
        ability: '"Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow."',
        flavor: '"Sign here please. And here. And here. Aaaaaaaaand here. This should all be sorted and tallied by the end of the day, assuming everyone\'s signatures are legible. We haven\'t had a mix-up in the paperwork for ages. Yesterday noon, if memory serves..."',
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Thief",
        intro: "The Thief steals votes from a player, making their vote count negatively.",
        ability: '"Each night, choose a player (not yourself): their vote counts negatively tomorrow."',
        flavor: '"I aint done nuffink. I weren\'t even in dat alley last night! It weren\'t me what stole Mayor Bruno\'s briefcase wiv all dem fancy dockoments innit. Besides, it was too \'eavy to carry far."',
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Apprentice",
        intro: "The Apprentice has either a Townsfolk or a Minion ability.",
        ability: '"On your 1st night, you gain a Townsfolk ability (if good) or a Minion ability (if evil)."',
        flavor: '"For years have I traveled, studying the ways of The Craft. Which craft, you ask? Simply that of the simple folk. Nothing to worry about. Not yet."',
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Matron",
        intro: "The Matron chooses which players sit where.",
        ability: '"Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private."',
        flavor: '"Miss Featherbottom, be quiet. Master Rutherford, a teacup needs just the four fingers, please. I know you are a father of nine, but age, or lack there-of as the case may be, is never an excuse for poor manners."',
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Voudon",
        intro: "The Voudon gives the voting power to the dead instead of the living.",
        ability: '"Only you & the dead can vote. They don\'t need a vote token to do so. A 50% majority isn\'t required."',
        flavor: '"Bien venu. Sit down. Breathe deep. Enter the land of the dead. See with their eyes. Speak with their voice. Yon sel lang se janm ase."',
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Judge",
        intro: "The Judge can determine if an execution succeeds or not, regardless of who voted.",
        ability: '"Once per game, if another player nominated, you may choose to force the current execution to pass or fail."',
        flavor: '"I find the defendant guilty of the crimes of murder, fraud, arson, larceny, impersonating an officer of the law, practicing medicine without a license, slander, regicide, and littering."',
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Bishop",
        intro: "The Bishop prevents players from nominating at all. Instead, the Storyteller does all nominating.",
        ability: '"Only the Storyteller can nominate. At least 1 opposing player must be nominated each day."',
        flavor: '"In nomine Patris, et Filii, et Spiritus Sancti… Nos mos Dei. Deus vult de nobis."',
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Butcher",
        intro: "The Butcher allows a second execution to occur per day.",
        ability: '"Each day, after the 1st execution, you may nominate again."',
        flavor: '"It tastes like chicken. More please."',
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Bone Collector",
        intro: "The Bone Collector temporarily gives dead players their ability back.",
        ability: '"Once per game, at night*, choose a dead player: they regain their ability until dusk."',
        flavor: '"I collect many things. Hair. Teeth. Clothes. Fragments of poems. The dreams of lost lovers. My secret arts are not for you to know but my fee is a mere pittance. Bring me the blood of a noblewoman who died of heartbreak under a full moon, and you shall have your answers."',
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Harlot",
        intro: "The Harlot learns the character of whoever agrees to reveal it, but at great risk for them both.",
        ability: '"Each night*, choose a living player: if they agree, you learn their character, but you both might die."',
        flavor: '"Enchanté, Sailor. You look like you need someone to really listen to your troubles. I\'m a good listener. Very, very good."',
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Barista",
        intro: "The Barista either makes people sober & healthy, or allows them to act twice as much as normal.",
        ability: '"Each night, until dusk, 1) a player becomes sober, healthy & gets true info, or 2) their ability works twice. They learn which."',
        flavor: '"There really is no cause to worry because when you think about it we are all capable and qualified and smart enough to grab the bull by the horns and sit down and figure this out like the reasonable adults we are by the way would you like another cup it really is the most amazing beverage they say it is from the east but anyway where were we ah yes going for a jog and really nutting out this demon business which we can do with just a little teensy mental boost and some logical thinking for example Senior Hu here is a regular customer and therefore quite trustworthy and would anyone like another cup?"',
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Deviant",
        intro: "The Deviant can avoid being Exiled - as long as the Deviant player has been amusing today.",
        ability: '"If you were funny today, you can not be exiled."',
        flavor: '"Twas the lady\'s quip, forsooth."',
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Gangster",
        intro: "The Gangster lets their neighbours kill each other.",
        ability: '"Once per day, you may choose to kill a living neighbor, if your other living neighbor agrees."',
        flavor: '"I like your shoes. It would be such a shame if you had a little accident, and they got ruined. Now that you mention it, I like your cufflinks too."',
        group: "Traveller",
        script: "exp"
    },
    {
        name: "Doomsayer",
        intro: "The Doomsayer speeds up large games that are going too slowly.",
        ability: '"If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies."',
        flavor: '"And on the Seventh Day, there shall be a great flood and a pestilence upon the People of the Village of the Ravens! The dead shall rise and the living shall repent! O Woe! O Unholy day! Only by great sacrifice shall they prevail! So sayeth the Sages of Nostros and so sayeth I."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Angel",
        intro: "Use the Angel to help new players have fun when there are one or two new players in a group of veterans.",
        ability: '"Something bad might happen to whoever is most responsible for the death of a new player."',
        flavor: '"Let those who are without sin dare to raise their hand to my chosen, for I shall strike such fools down with the fury and righteousness of a thousand storms."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Buddhist",
        intro: "Use the Buddhist to help new players have fun when there are one or two veterans in a group of new players.",
        ability: '"For the first 2 minutes of each day, veteran players may not talk."',
        flavor: '"You throw thorns. Falling in my silence, they become flowers."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Hell's Librarian",
        intro: "Hell's Librarian allows a softly-spoken Storyteller to be heard when needed.",
        ability: '"Something bad might happen to whoever talks when the Storyteller has asked for silence."',
        flavor: '"Shhhhhh. Please be quiet. It is best not to disturb the Librarian. I\'ve heard it has a temper."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Revolutionary",
        intro: "The Revolutionary helps disadvantaged players participate.",
        ability: '"2 neighboring players are known to be the same alignment. Once per game, 1 of them registers falsely."',
        flavor: '"United we feigned.<br><br>Divided, we stalled."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Fiddler",
        intro: "The Fiddler decides a winner if the game must end due to time constraints, or to a stalemate. Evil wins on ties.",
        ability: '"Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win."',
        flavor: '"I\'ll wager mi lyef ye cannae best me in a fiddle contest, ye boss-eyed snook! We\'ll go out on the lash, get the pub jammers an\' have a right craic. I\'ll be layin\' ma boots into ya come mornin\' ye rumbly muppet."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Toymaker",
        intro: "The Toymaker makes Teensyville games (5 to 6 player games) longer and more exciting.",
        ability: '"The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info."',
        flavor: '"It buzzes! It walks down stairs! It keeps you warm at night! It tastes like sugar! The kiddies love it! Introducing... the brand new...Warm\'o-buzzy-wuzzy-walk\'a\'bot-thingy-contraption! Fun for all ages!"',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Storm Catcher",
        intro: "The Storm Catcher allows the Storyteller to build a game focused on a particular good character.",
        ability: '"Name a good character. If in play, they can only die by execution, but evil players learn which player it is."',
        flavor: '"At dawn, the temple\'s long shadow creeps to the fountain. At dusk, the obelisk blocks the red glare, cooling warm water under the archway. All lines converge here. A storm is coming, and this, this pebbled and lush and holy place between the apple trees, is the eye."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Fibbin",
        intro: "The Fibbin adds misinformation to a game that has no possibility of misinformation. (For Script games only)",
        ability: '"Once per game, 1 good player might get incorrect information."',
        flavor: '"Tee-hee-hee.<br><br>Tee. Hee. Hee."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Duchess",
        intro: "The Duchess adds information to a game that has little information for the good players to go on. (For Script games only)",
        ability: '"Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info."',
        flavor: '"We shall entertain between the hours of 6 and 7 precisely. Tea at 6:15. Scones at 6:45. Do not be late. Formal wear applies, as always."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Sentinel",
        intro: "Add the Sentinel to your script to keep the number of Outsiders in play mysterious. (For Script games only.)",
        ability: '"There might be 1 extra or 1 fewer Outsider in play."',
        flavor: '"Name, please.<br><br>Papers, please.<br><br>Weapons, please."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Spirit Of Ivory",
        intro: "The Spirit of Ivory prevents games from containing too many evil characters. (For Script games only)",
        ability: '"There can\'t be more than 1 extra evil player."',
        flavor: '"The Wasteland calls. Bones rise to flesh, then fall to dust. The great spirit grows. The great spirit watches. The great spirit guides. The human listens, or the human is no more."',
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Djinn",
        intro: "Add the Djinn to all games with a jinx icon on the script. The Djinn resolves jinxes by creating a unique rule. (For Script games only.)",
        ability: '"Use the Djinn\'s special rule. All players know what it is."',
        flavor: 'نحن لسنا هنا.<br><br> انت لست حقيقي<br><br>. كل شيء هو وهم.<br><br> أسئلتك هي جبل نار في يوم صافٍ.',
        group: "Fabled",
        script: "fabled"
    },
];

$( document ).ready(function() {
    $(".special").addClass("spin");
});

setTimeout( () =>{
    $(".special").removeClass("spin");
    $(".special").attr("src", "./img/washerwoman.png");
    $(".special").addClass("reverse-spin");
}, 1000);

populateAll();

function populateAll() {

    characters.forEach(character => {
        let originalName = character.name;
        let name = originalName.toLowerCase();
        name = name.split(" ");
        if (name[2]) {
            name = name[0] + "-" + name[1] + "-" + name[2];
            name = name.replace("'",'');
        } else if (name[1]) {
            name = name[0] + "-" + name[1];
            name = name.replace("'",'');
        }

        if (character.script == "tb") {
            if (character.group == "Townsfolk") {
                $(".tb-townsfolk").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Outsider") {
                $(".tb-outsiders").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Minion") {
                $(".tb-minions").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`)
            } else if (character.group == "Demon") {
                $(".tb-demons").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            }
        }

        if (character.script == "bmr") {
            if (character.group == "Townsfolk") {
                $(".bmr-townsfolk").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Outsider") {
                $(".bmr-outsiders").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Minion") {
                $(".bmr-minions").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`)
            } else if (character.group == "Demon") {
                $(".bmr-demons").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            }
        }

        if (character.script == "sv") {
            if (character.group == "Townsfolk") {
                $(".sv-townsfolk").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Outsider") {
                $(".sv-outsiders").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Minion") {
                $(".sv-minions").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`)
            } else if (character.group == "Demon") {
                $(".sv-demons").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            }
        }

        if (character.script == "exp") {
            if (character.group == "Townsfolk") {
                $(".exp-townsfolk").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Outsider") {
                $(".exp-outsiders").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.group == "Minion") {
                $(".exp-minions").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`)
            } else if (character.group == "Demon") {
                $(".exp-demons").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            }
        }

        if (character.group == "Traveller") {
            if (character.script == "tb") {
                $(".trav-tb").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.script == "bmr") {
                $(".trav-bmr").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.script == "sv") {
                $(".trav-sv").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            } else if (character.script == "exp") {
                $(".trav-exp").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
            }
        }

        if (character.script == "fabled") {
            $(".fabled-all").append(`<img class="token" src="./img/${name}.png" data-name="${originalName}">`);
        }
    })
}

$(".all .token").click(function() {
    $(".img-flavor-container .token").removeClass("reverse-spin");
    $(".img-flavor-container .token").removeClass("spin");
    $(".flavor").css({'opacity':'0'});
    let ability;
    let intro;
    let flavor;
    let examples;
    let howToRun;
    let orignalName = $(this).attr("data-name");
    characters.forEach(character => {
        if (character.name == orignalName) {
            ability = character.ability;
            intro = character.intro;
            flavor = character.flavor;
            examples = character.examples;
            howToRun = character.howToRun;
        }
    });
    let name = orignalName.toLowerCase();
    name = name.split(" ");
    if (name[2]) {
        name = name[0] + "-" + name[1] + "-" + name[2];
        name = name.replace("'",'');
    } else if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
    // $(".img-flavor-container .token").attr("src",`./img/${name}.png`);

    $(".img-flavor-container .token").attr("src",`./img/blank.png`);
    $(".img-flavor-container .token").addClass("spin");
    setTimeout( () =>{
        $(".img-flavor-container .token").removeClass("spin");
        $(".img-flavor-container .token").attr("src", `./img/${name}.png`);
        $(".img-flavor-container .token").addClass("reverse-spin");
    }, 500);

    setTimeout( () => {
        $(".flavor").css({'opacity':'100%'});
    }, 1000);

    $(".name").html(`${orignalName}`)
    $(".intro").html(`${intro}`);
    $(".ability").html(`${ability}`);
    $(".flavor").html(`${flavor}`);
    $(".examples").html(`${examples}`);
    $(".how-to-run").html(`${howToRun}`);
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = $(".token");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

$('.token').click(function(){
	modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}