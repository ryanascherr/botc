let characters = [
    {
        name: "Washerwoman",
        intro: "The Washerwoman learns that a particular Townsfolk character is in play, but not exactly which player it is.",
        ability: '"You start knowing that 1 of 2 players is a particular Townsfolk."',
        flavor: '"Bloodstains on a dinner jacket? No, this is cooking sherry. How careless."',
        examples: "<p>Evin is the Chef, and Amy is the Ravenkeeper. The Washerwoman learns that either Evin or Amy is the Chef.</p><p>Julian is the Imp, and Alex is the Virgin. The Washerwoman learns that either Julian or Alex is the Virgin.</p><p>Marianna is the Spy, and Sarah is the Scarlet Woman. The Washerwoman learns that one of them is the Ravenkeeper. (This happens because the Spy is registering as a Townsfolk—in this case, the Ravenkeeper)</p>",
        tips: "<ul><li>The Washerwoman is deceptively powerful. Even though you don't gain information on the evil players, you can confirm the identity of a good player. This player should be your focus for the game, because if they have great information, then you have that information too. If they have a useful ability that they choose to use, you can help them use it wisely.</li><li>When the Washerwoman is poisoned or is actually the Drunk, they will often get information that is easy to figure out is incorrect—at least compared to other characters. While the Chef has no clue as to whether their '1' is incorrect, if both of the players the Storyteller pointed at tell you they're a different character to the one the Storyteller showed you, it is likely that you are the Drunk or poisoned. You can use this information to your team's advantage: if you know you are the Drunk, you know nobody else is; if you think you were poisoned on the first night, nobody else could have been. Furthermore, if your information seems like it's correct, it probably is, because of how easy it is to tell when it's wrong.</li><li>You know that of the two players you are shown, one must be the Townsfolk you are shown. Importantly, this means that you know that the person you see is not the Drunk.</li><li>To find out which of the two players is the Townsfolk, either ask the group publicly or have a private conversation with each player individually. It is usually best to reveal what you know before the Townsfolk in question says who they are so they trust you more.</li><li>If you share your information on the first day, and speak up quickly, the good team has some solid information to begin with. This is particularly useful if you confirm another information-receiving Townsfolk like the Empath or the Fortune Teller.     </li><li>Waiting until the final day - or at least very late in the game - to share your information with the group can also be very useful. If you can keep the Townsfolk that you know alive until the final day, then you know one player who is not the Imp! This can either make the Demon player obvious to you, or at least reduce the possible Demon players down to 1 in 2 instead of 1 in 3.</li><li>Talk to the Townsfolk player that you know, and secretly let them know that you know who they are. This way, you can hopefully form an alliance, and can come to each other's defence if either of you are nominated for execution, whilst avoiding telling the group (and therefore the evil team) who the other is. This is particularly useful if you learn a character that the Demon really wants to attack, like the Fortune Teller, or even a character that the Demon wants to avoid attacking at all costs, like the Ravenkeeper or the Soldier.</li><li>After talking to the Townsfolk that you know in private, and confirming who they are, you can tell the group that they are a different character than they actually are. This strategy is useful if you want to protect a powerful Townsfolk from characters like the Poisoner, or to trick evil players into attacking a Townsfolk that has already used their ability, such as the Chef.</li><li>You can claim to be a more powerful character than you actually are. You start with all the information you're going to get, so if the demon kills you, they aren't killing the Slayer or the Fortune Teller. You may also want to consider nominating a Virgin, and confirming yourself, the Virgin, and the Townsfolk you were shown all to be good.</li><li>Sometimes the Storyteller will point to evil players as possible Townsfolk to you. If you think this might be the case, don't say directly which Townsfolk you know to be in play. You might instead state a false Townsfolk character to try and trick evil players into admitting to being a character that you didn't learn, or you can tempt good players into revealing their Townsfolk character to you before you reveal what you know to them. This allows you to trust them more... but they may trust you less!</li><li>If the 'wrong' player the Storyteller pointed to is an evil player, telling them the Townsfolk you saw may alert the Imp to the presence of the character you saw. If you saw the Empath, for example, telling the Demon that may cause the Empath to be killed in the night.</li><li>The two of you can reveal your characters publicly to the group, without having a private conversation beforehand. This goes a long way towards proving publicly that you are both telling the truth.</li><li>Publicly reveal which character is in play, but not which player it is. This way, the evil team gets little information, but the Townsfolk in question will trust you, and will look more trustworthy when they reveal who they are to the group.</li><li>You could claim to be the Washerwoman and point to a player you suspect is evil, stating that they are the Townsfolk you learned about. An opportunistic evil player may pounce on an opportunity to appear good, and claim that they are, in fact, the Townsfolk you learned about, thus outing them to you as, at the very least, a liar.</li><li>Beware of the Spy! They may register as a Townsfolk character to you. That player who you think is the Investigator may not be the Investigator after all...</li><li>Remember that while the Spy is likely to know that you've seen them as a Townsfolk, they won't know which Townsfolk you've seen them as.</li></ul>",
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Librarian",
        intro: "The Librarian learns that a particular Outsider character is in play, but not exactly which player it is.",
        ability: '"You start knowing that 1 of 2 players is a particular Outsider."',
        flavor: '"Certainly Madam, under normal circumstances, you may borrow the Codex Malificarium from the library vaults. However, you do not seem to be a member."',
        examples: "<p>Benjamin is the Saint, and Filip is the Baron. The Librarian learns that either Benjamin or Filip is the Saint.</p><p>There are no Outsiders in this game. The Librarian learns a '0'.</p><p>Abdallah is the Drunk, who thinks they are the Monk, and Douglas is the Undertaker. The Librarian learns that either Abdallah or Douglas is the Drunk. (This happens because the Librarian learns the true character. The Drunk is Abdallah's true character, not the Monk.)</p>",
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Investigator",
        intro: "The Investigator learns that a particular Minion character is in play, but not exactly which player it is.",
        ability: '"You start knowing that 1 of 2 players is a particular Minion."',
        flavor: '"It is a fine night for a stroll, wouldn\'t you say, Mister Morozov? Or should I say... BARON Morozov?"',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Chef",
        intro: "The Chef knows if evil players are sitting next to each other.",
        ability: '"You start knowing how many pairs of evil players there are."',
        flavor: '"This evening\'s reservations seem odd. Never before has Mrs Mayweather kept company with that scamp from Hudson lane. Yet, tonight, they have a table for two. Strange."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Empath",
        intro: "The Empath keeps learning if their living neighbours are good or evil.",
        ability: '"Each night, you learn how many of your 2 alive neighbours are evil."',
        flavor: '"My skin prickles. Something is not right here. I can feel it."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Fortune Teller",
        intro: "The Fortune Teller detects who the Demon is, but sometimes thinks good players are Demons.",
        ability: '"Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you."',
        flavor: '"I sense great evil in your soul! But... that could just be your perfume. I am allergic to Elderberry."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Undertaker",
        intro: "The Undertaker learns which character was executed today.",
        ability: '"Each night*, you learn which character died by execution today."',
        flavor: '"Hmmm....what have we here? The left boot is worn down to the heel, with flint shavings under the tongue. This is the garb of a Military man."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Monk",
        intro: "The Monk protects other players from the Demon.",
        ability: '"Each night*, choose a player (not yourself): they are safe from the Demon tonight."',
        flavor: '" \'Tis an ill and deathly wind that blows tonight. Come, my brother, take shelter in the abbey while the storm rages. By my word, or by my life, you will be safe."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Ravenkeeper",
        intro: "If the Ravenkeeper dies at night, they get to learn one player's character.",
        ability: '"If you die at night, you are woken to choose a player: you learn their character."',
        flavor: '"My birds will avenge me! Fly! Fly, my sweet and dutiful pets! Take your message to those in dark corners! To the manor and to the river! Let them read of the nature of my death."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Virgin",
        intro: "The Virgin may inadvertently execute their accuser, confirming which players are Townsfolk in the process.",
        ability: '"The 1st time you are nominated, if the nominator is a townsfolk, they are executed immediately."',
        flavor: '"I am pure. Let those who are without sin cast themselves down and suffer in my stead. My reputation shall not be stained with your venomous accusations."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Slayer",
        intro: "The Slayer can kill the Demon by guessing who they are.",
        ability: '"Once per game, during the day, publicly choose a player: if they are the Demon, they die."',
        flavor: '"Die."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Soldier",
        intro: "The Soldier can not be killed by the Demon.",
        ability: '"You are safe from the Demon."',
        flavor: '"As David said to Goliath, as Theseus said to the Minotaur, as Arjuna said to Bhagadatta... No."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Mayor",
        intro: "The Mayor can win by peaceful means on the final day.",
        ability: '"If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead."',
        flavor: '"We must put our differences aside, and cease this senseless killing. We are all taxpayers after all. Well, most of us."',
        group: "townsfolk",
        script: "tb"
    },
    {
        name: "Butler",
        intro: "The Butler may only vote when their Master (another player) votes.",
        ability: '"Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too."',
        flavor: '"Yes, sir...<br><br>No, sir...<br><br>Certainly, sir."',
        group: "outsider",
        script: "tb"
    },
    {
        name: "Drunk",
        intro: "The Drunk player thinks that they are a Townsfolk, and has no idea that they are actually the Drunk.",
        ability: '"You do not know you are the Drunk. You think you are a townsfolk character, but you are not."',
        flavor: '"This is all perfectly <burp> logical. I know that Miss Dearheart is a Fortune Teller. Mrs Dearheart swears that Jenkins here is her Butler. It\'s simple <hic> deduction."',
        group: "outsider",
        script: "tb"
    },
    {
        name: "Recluse",
        intro: "The Recluse might appear to be an evil character, but is actually good.",
        ability: '"You might register as evil & as a Minion or Demon, even if dead."',
        flavor: '"Garn git ya darn grub ya mitts ofma lorn yasee. Grr. Natsy pikkins yonder southwise ye begittin afta ya! Git! Me harvy no so widda licks and demmons no be fightin\' hadsup ne\'er ma kin. Git, assay!"',
        group: "outsider",
        script: "tb"
    },
    {
        name: "Saint",
        intro: "The Saint ends the game if they are executed.",
        ability: '"If you die by execution, your team loses."',
        flavor: '"Wisdom begets peace. Patience begets wisdom. Fear not, for the time shall come when fear too shall pass. Let us pray, and may the unity of our vision make saints of us all."',
        group: "outsider",
        script: "tb"
    },
    {
        name: "Poisoner",
        intro: "The Poisoner secretly disrupts character abilities.",
        ability: '"Each night, choose a player: they are poisoned tonight and tomorrow day."',
        flavor: '"Add compound Alpha to compound Beta... NOT TOO MUCH!"',
        group: "minion",
        script: "tb"
    },
    {
        name: "Spy",
        intro: "The Spy might appear to be a good character, but is actually evil. They also see the Grimoire, so they know the characters (and status) of all players.",
        ability: '"Each night, you see the Grimoire. You might register as good & as a townsfolk or Outsider, even if dead."',
        flavor: '"Any brewmaster worth their liquor,<br>knows no concoction pours trouble quicker,<br>than one where spies seem double."',
        group: "minion",
        script: "tb"
    },
    {
        name: "Scarlet Woman",
        intro: "The Scarlet Woman becomes the Demon when the Demon dies.",
        ability: '"If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don\'t count)"',
        flavor: '"You have shown me the secrets of the Council of the Purple Flame. We have lain together in fire and in lust and in beastly commune, and I am forever your servant. But tonight, my dear, I am your master."',
        group: "minion",
        script: "tb"
    },
    {
        name: "Baron",
        intro: "The Baron changes the number of Outsiders present in the game.",
        ability: '"There are extra Outsiders in play. [+2 Outsiders]"',
        flavor: '"This town has gone to the dogs, what? Cheap foreign labor... that\'s the ticket. Stuff them in the mine, I say. A bit of hard work never hurt anyone, and a clip\'o\'the ears to any brigand who says otherwise. It\'s all about the bottom line, what?"',
        group: "minion",
        script: "tb"
    },
    {
        name: "Imp",
        intro: "The Imp kills a player each night, and can make copies of itself... for a terrible price.",
        ability: '"Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp."',
        flavor: '"We must keep our wits sharp and our sword sharper. Evil walks among us, and will stop at nothing to destroy us good, simple folk, bringing our fine town to ruin. Trust no-one. But, if you must trust someone, trust me."',
        group: "demon",
        script: "tb"
    },
    {
        name: "Grandmother",
        intro: "The Grandmother knows who their grandchild is, but if they are killed by the Demon, the Grandmother dies too.",
        ability: '"You start knowing a good player & their character. If the Demon kills them, you die too."',
        flavor: '"Take a jacket if you go outside, dearie. And your thermos. And your scarf. I have a weak heart, you know. Whatever would I do if you caught cold...or worse?"',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Sailor",
        intro: "The Sailor is either drunk or getting somebody else drunk. While the Sailor is sober, they can't die.",
        ability: '"Each night, choose an alive player: either you or they are drunk until dusk. You can\'t die."',
        flavor: '"I\'ll drink any one of yer under the table! You! The chatterbox! Reckon you can take me? No? Howza \'bout you, Grandma? You ever tried Old McKillys Extra Spiced Rum before? Guaranteed to put hairs on yer chest! Step aboard, aye!"',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Chambermaid",
        intro: "The Chambermaid learns who woke up at night.",
        ability: '"Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability."',
        flavor: '"I aint seen nothin\' untoward, Milady. Begging your pardon, but if I did see somethin\', it certainly weren\'t the master o\' the house sneaking into the professor\'s laboratory \'round eleven o\'clock and mixing up fancy potions, just like you said, Miss."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Exorcist",
        intro: "The Exorcist prevents the Demon from waking to attack.",
        ability: '"Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn\'t wake tonight."',
        flavor: '"We cast you out, every unclean spirit, every satanic power, every onslaught of the infernal adversary, every legion, every diabolical group and sect, in the name and by the power of Our Lord Jesus Christ. We command you, begone and fly far from the Church of God, from the souls made by God in His image and redeemed by the precious blood of the divine Lamb."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Innkeeper",
        intro: "The Innkeeper protects people from death at night, but somebody gets drunk in the process.",
        ability: '"Each night*, choose 2 players: they can\'t die tonight, but 1 is drunk until dusk."',
        flavor: '"Come inside, fair traveller, and rest your weary bones. Drink and be merry, for the legions of the Dark One shall not harass thee tonight."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Gambler",
        intro: "The Gambler can guess who is who...but pays the ultimate price if they guess wrong.",
        ability: '"Each night*, choose a player & guess their character: if you guess wrong, you die."',
        flavor: '"Heads, I win. Tails, you lose."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Gossip",
        intro: "The Gossip deliberately speaks lies, in the hope of uncovering the truth.",
        ability: '"Each day, you may make a public statement. Tonight, if it was true, a player dies."',
        flavor: '"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Courtier",
        intro: "The Courtier gets a character drunk, without knowing which player it is.",
        ability: '"Once per game, at night, choose a character: they are drunk for 3 nights & 3 days."',
        flavor: '"I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Professor",
        intro: "The Professor can bring someone back from the dead.",
        ability: '"Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected."',
        flavor: '"The process is simple. Attach the hydraulic confabulator to the modified chi matrix amplifier, add 20 CCs of pseudodorafine, keep his Z levels above 20%, and your husband will be fine. Now, all we need is a lightning strike."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Minstrel",
        intro: "The Minstrel makes everybody drunk if a Minion dies.",
        ability: '"When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow."',
        flavor: '"And I shall hear, tho\' soft you tread above me... And all my dreams will warm and sweeter be... If you\'ll not fail to tell me that you love me... I simply sleep in peace until you come to me."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Tea Lady",
        intro: "The Tea Lady protects her neighbours from death...as long as they are good.",
        ability: '"If both your alive neighbors are good, they can\'t die."',
        flavor: '"If you are cold, tea will warm you. If you are too heated, tea will cool you. If you are depressed, tea will cheer you. If you are excited, tea will calm you."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Pacifist",
        intro: "The Pacifist prevents good players from dying by execution.",
        ability: '"Executed good players might not die."',
        flavor: '"Distrust all in whom the impulse to punish is powerful."',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Fool",
        intro: "The Fool escapes death... once.",
        ability: '"The first time you die, you don\'t."',
        flavor: '"...and the King said \'What?! I\'ve never even owned a pair of rubber pantaloons, let alone a custard cannon!\' Ho-ho! Jolly day!"',
        group: "townsfolk",
        script: "bmr"
    },
    {
        name: "Goon",
        intro: "The Goon is immune to other characters at night, but keeps changing allegiances.",
        ability: '"Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment."',
        flavor: '"Yes boss. I explained fings real good to dat geezer. He don\'t want me explain it again. Nah boss, I don\'t need no doctor—it\'s only a knife wound. Be right come mornin\'."',
        group: "outsider",
        script: "bmr"
    },
    {
        name: "Lunatic",
        intro: "The Lunatic thinks that they are the Demon.",
        ability: '"You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night."',
        flavor: '"I am the night...I think."',
        group: "outsider",
        script: "bmr"
    },
    {
        name: "Tinker",
        intro: "The Tinker can die at any time, for no reason.",
        ability: '"You might die at any time."',
        flavor: '"I think I see the problem. Luckily, I have an idea! This catapult will shoot twice as far with just a minor adjustment..."',
        group: "outsider",
        script: "bmr"
    },
    {
        name: "Moonchild",
        intro: "The Moonchild curses someone upon death, killing them too.",
        ability: '"When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die."',
        flavor: '"Scorpio looks sideways at the lovers, and you have a choice to make. With silver cross my palm, and your fate shall be revealed. With steel cross my throat, and by the stars you shall regret it."',
        group: "outsider",
        script: "bmr"
    },
    {
        name: "Godfather",
        intro: "The Godfather takes revenge when the town kills Outsiders.",
        ability: '"You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]"',
        flavor: '"Normally, it\'s just business. But when you insult my daughter, you insult me. And when you insult me, you insult my family. You really should be more careful—it would be a shame if you had an unfortunate accident."',
        group: "minion",
        script: "bmr"
    },
    {
        name: "Devil's Advocate",
        intro: "The Devil's Advocate saves players from execution.",
        ability: '"Each night, choose a living player (different to last night): if executed tomorrow, they don\'t die."',
        flavor: '"My client, should the objection be overruled, pleads innocent by virtue of the prosecution\'s non-observance of statute 27.B—incorrect or misleading conjugation of a verb. The fact that nine of the jury died last night is simply prima face, which is, as Wills vs Thule set precedent for, further reason to acquit."',
        group: "minion",
        script: "bmr"
    },
    {
        name: "Assassin",
        intro: "The Assassin kills who the Demon cannot.",
        ability: '"Once per game, at night*, choose a player: they die, even if for some reason they could not."',
        flavor: '"..."',
        group: "minion",
        script: "bmr"
    },
    {
        name: "Mastermind",
        intro: "The Mastermind can still win after the Demon is dead.",
        ability: '"If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses."',
        flavor: '"The tentacles of that monster are nailed to the doors of the church. Mothers and children are dancing in the street. Excellent. Everything is proceeding exactly as I have planned."',
        group: "minion",
        script: "bmr"
    },
    {
        name: "Zombuul",
        intro: "The Zombuul secretly remains alive while in the grave.",
        ability: '"Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead."',
        flavor: '"I do not. Understand. Your ways. Fellow human. Show me. The dirt. Where the holy. Lay. Sleeping. I too. Must sleep. Soon."',
        group: "demon",
        script: "bmr"
    },
    {
        name: "Pukka",
        intro: "The Pukka poisons its victims, who die at a later time.",
        ability: '"Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy."',
        flavor: '"You truly have been kind welcoming me into your beautiful home. I am so sorry I accidentally scratched you. A little thing. No matter. But please, take this golden toothpick as a humble token of my regret."',
        group: "demon",
        script: "bmr"
    },
    {
        name: "Shabaloth",
        intro: "The Shabaloth eats two players per night, but may vomit one of them back up the following night.",
        ability: '"Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated."',
        flavor: '"Blarg f\'taag nm mataan! No sho gumtha m\'sik na yuuu. Fluuuuuuuuurg h-sikkkh."',
        group: "demon",
        script: "bmr"
    },
    {
        name: "Po",
        intro: "The Po can choose to attack nobody at night, but goes on a rampage the following night.",
        ability: '"Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight."',
        flavor: '"Would you like a flower? I\'m so lonely."',
        group: "demon",
        script: "bmr"
    },
    {
        name: "Clockmaker",
        intro: "The Clockmaker knows the distance from the Demon to it's nearest Minion, either clockwise or anti-clockwise.",
        ability: '"You start knowing how many steps from the Demon to its nearest Minion."',
        flavor: '"Do not disturb me. The tick must continue, for the circle is a symbol of life and contains all things - all answers - in it\'s divine machinery. I must work."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Dreamer",
        intro: "The Dreamer learns player's characters, but is not sure if their information is entirely correct.",
        ability: '"Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct."',
        flavor: '"I remember the Clockmaker. The sky was red and it was raining fractal triangles. There was a smell of violets and a bubbling sound. A woman with glowing eyes and a scraggly beard was hissing at the sky. Then, I awoke ."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Snake Charmer",
        intro: "The Snake Charmer learns player after player that is not the Demon... but becomes the Demon if they get either too greedy or too bold.",
        ability: '"Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned."',
        flavor: '"Effendi... I am but a humble man, but my pipe is golden and a single tune will tame the wildest djinn, Inshallah. They say that greed hangs more men than rope. But not I, Effendi... not I."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Mathematician",
        intro: "The Mathematician knows how many things have gone wrong since dawn today.",
        ability: '"Each night, you learn how many players\' abilities worked abnormally (since dawn) due to another character\'s ability."',
        flavor: '"Any consistent formal system x, within which a certain amount of elementary arithmetic can be carried out is incomplete; that is, there are statements of the language of x which can neither be proved nor disproved in x. Ergo, you are drunk."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Flowergirl",
        intro: "The Flowergirl knows if the Demon voted or not.",
        ability: '"Each night*, you learn if a Demon voted today."',
        flavor: '"Yesterday\'s violets have withered and died, but today my poppies bloom."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Town Crier",
        intro: "The Town Crier knows when Minions nominate.",
        ability: '"Each night*, you learn if a Minion nominated today."',
        flavor: '"Hear ye! Hear ye! Witchcraft in the labyrinth! Genius savant reveals all! Town in danger! Hear Ye!"',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Oracle",
        intro: "The Oracle knows how many dead players are evil.",
        ability: '"Each night*, you learn how many dead players are evil."',
        flavor: '"Only the chosen may gaze beyond the veil. The dead are restless, and they point in silence toward the icy north."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Savant",
        intro: "The Savant gets crazy, amazing information that is different every day and every game, but exactly half of it is completely false.",
        ability: '"Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false."',
        flavor: '"Seventy-two matchsticks on the floor... the sun sets early but the moon is unchanged... a torn piece of cloth... evil in the manor house... three by three... the one we trusted is not what he seems... green light means magnesium... residue, but the pattern is wrong... Seventy-two matchsticks on the floor..."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Seamstress",
        intro: "The Seamstress learns whether 2 players are on the same team as each each other.",
        ability: '"Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment."',
        flavor: '"Did you hear that stranger in the cashmere coat put the word on our young Belle? And she said yes? Well, that\'s nothing compared to what Harry and that juggler got up to at the fair! The things I could say if I was a tattletale... my, yes."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Philosopher",
        intro: "The Philosopher has no ability until they decide which character they want to emulate.",
        ability: '"Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk."',
        flavor: '"If anything is real, beer is real. Drink, for tomorrow we may die."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Artist",
        intro: "The Artist may ask any 1 question, and get an honest answer.",
        ability: '"Once per game, during the day, privately ask the Storyteller any yes/no question."',
        flavor: '"Mon Dieu! C\'est lumineux! My work, she is... how you say... Magnifique! Dieu est révélé! Oui."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Juggler",
        intro: "The Juggler takes the risk of convincing people to reveal their characters on the 1st day, in the hope of guessing as many as possible that are telling the truth.",
        ability: '"On your 1st day, publicly guess up to 5 players\' characters. That night, you learn how many you got correct."',
        flavor: '"For my next trick, as per request, I will need a flower, a bag of beans, a toy snake, a paintbrush, and a motorized gasoline-powered hedge trimming device. I warn you, this trick may be my last. Oh dear."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Sage",
        intro: "The Sage knows nothing while alive, but learns the most important information of all at the moment of their death - who killed them.",
        ability: '"If the Demon kills you, you learn that it is 1 of 2 players."',
        flavor: '"These mountainous tomes guard the secret, I am sure of it! Twixt word and word, it lies in wait. More candles, boy! More ink! These notes may look arcane, but the infernal puzzle is revealing itself."',
        group: "townsfolk",
        script: "sv"
    },
    {
        name: "Mutant",
        intro: "The Mutant is killed if they try to reveal who they are.",
        ability: '"If you are "mad" about being an Outsider, you might be executed."',
        flavor: '"I am not a freak! I am a human being! Have mercy!"',
        group: "outsider",
        script: "sv"
    },
    {
        name: "Sweetheart",
        intro: "The Sweetheart, when they die, causes someone to be drunk for the rest of the game.",
        ability: '"When you die, 1 player is drunk from now on."',
        flavor: 'I will never forget her. Never."',
        group: "outsider",
        script: "sv"
    },
    {
        name: "Barber",
        intro: "The Barber allows the Demon to swap any 2 player's characters.",
        ability: '"If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters."',
        flavor: '"Did you know that barbery and surgery were once the same profession? No? Well, now you do."',
        group: "outsider",
        script: "sv"
    },
    {
        name: "Klutz",
        intro: "The Klutz might accidentally lose the game for their team, unless they are clever.",
        ability: '"When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses."',
        flavor: '"Oops."',
        group: "outsider",
        script: "sv"
    },
    {
        name: "Evil Twin",
        intro: "The Evil Twin mirrors a good character, so that the players don't know which twin is good and which twin is evil.",
        ability: '"You & an opposing player know each other. If the good player is executed, evil wins. Good can\'t win if you both live."',
        flavor: '"I\'m not Sara! I\'m Clara! SHE is Sara! Sara is the evil one! Not me!"',
        group: "minion",
        script: "sv"
    },
    {
        name: "Witch",
        intro: "The Witch curses players, so that they die if they nominate.",
        ability: '"Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability."',
        flavor: '"Three drops of goat\'s blood. A lock of hair, torn in anger. The name is spoken, the shadow cast. Walk left foot first down that brambled path, and don\'t look back."',
        group: "minion",
        script: "sv"
    },
    {
        name: "Cerenovus",
        intro: "The Cerenovus encourages players to pretend to be different characters than they actually are.",
        ability: '"Each night, choose a player & a good character: they are "mad" they are this character tomorrow, or might be executed."',
        flavor: '"Reality is merely an opinion. Specifically, my opinion."',
        group: "minion",
        script: "sv"
    },
    {
        name: "Pit Hag",
        intro: "The Pit-Hag changes players into different characters.",
        ability: '"Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary."',
        flavor: '"Round about the cauldron go; In the poison\'d entrails throw; Toad, that under cold stone; Days and nights has thirty-one; Sweated venom sleeping got; Boil thou first in the charmed pot."',
        group: "minion",
        script: "sv"
    },
    {
        name: "Fang Gu",
        intro: "The Fang Gu possesses Outsiders.",
        ability: '"Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]"',
        flavor: '"Your walls and your weapons are but smoke in dreams."',
        group: "demon",
        script: "sv"
    },
    {
        name: "Vigormortis",
        intro: "The Vigormortis kills their own Minions, but those Minions keep their ability.",
        ability: '"Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]"',
        flavor: '"All doors are one door. All keys are one key. All cups are one cup, but whosoever drinketh of the water that I give shall never thirst, but the water shall be in him a well springing up into everlasting life."',
        group: "demon",
        script: "sv"
    },
    {
        name: "No Dashii",
        intro: "The No Dashii poisons their neighbouring Townsfolk.",
        ability: '"Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned."',
        flavor: '"By the sins of Arnoch, I feel thy laden stench. By the curs-ed sun and her foul legion of tiny grinning gods, I corrupt thee. By the blessed night and the hidden depths of the horrid and unholy sea, I end thy squalid life upon this plane."',
        group: "demon",
        script: "sv"
    },
    {
        name: "Vortox",
        intro: "The Vortox makes all information false.",
        ability: '"Each night*, choose a player; they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins."',
        flavor: '"Black is White. Right is Wrong. Left is Right. Up is Long. Down is Sight. Short is Blind. Follow me. Answers find."',
        group: "demon",
        script: "sv"
    },
    {
        name: "Alchemist",
        intro: "The Alchemist has a Minion ability.",
        ability: '"You have a not-in-play Minion ability."',
        flavor: '"Visit the interior of the Earth. By rectification thou shalt find the hidden stone. Above the gold, lieth the red. Kether in Malkuth."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Amnesiac",
        intro: "The Amnesiac doesn't know their own ability.",
        ability: '"You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are."',
        flavor: '"Wait. What. Who? Oh, ok. Wait. What?"',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Atheist",
        intro: "The Atheist knows that all players are good and that there is no such thing as Demons.",
        ability: '"The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]"',
        flavor: '"Let us disperse with unnecessary conjecture and silly paranoia. There is a perfectly rational explanation for everything. Yes, a teacup may indeed be orbiting the planet, too small to see, but I shall drink my tea from the very real china in my very real hands."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Balloonist",
        intro: "The Balloonist knows a Townsfolk, an Outsider, a Minion, and a Demon, but gets them confused.",
        ability: '"Each night, you learn 1 player of each character type, until there are no more types to learn. [+1 Outsider]"',
        flavor: '"More heat! Higher! Higher! Più alto! Ahhh... it is so beautiful from up here, don\'t you agree? Can you see the children fishing by the river, under the willow? Can you see the glint of the sun on the circus tent-poles? What\'s this? An old man, alone, passed out in the vineyard? Less heat! Lower! Lower! Vai più in basso!"',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Bounty Hunter",
        intro: "The Bounty Hunter learns all the evil players. One. Player. At. A. Time.",
        ability: '"You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]"',
        flavor: '"Alone, I walk these streets, paved with the sick stench of corruption. Its thickness worms its way into my nostrils, unbidden, burning with revulsion. And anticipation. The illness of this wretched place grows each night. And I... I am the cure. "',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Cannibal",
        intro: "The Cannibal gains the abilities of executed players, if they're good.",
        ability: '"You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution."',
        flavor: '"I don\'t like clowns. They taste funny."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Choirboy",
        intro: "The Choirboy learns who the Demon is when the Demon kills the King.",
        ability: '"If the Demon kills the King, you learn which player is the Demon. [+the King]"',
        flavor: '"I saw it, I did. I was in the pews, tidying the hymn books, when a dreadful tune started from the pipe organ. The organist had a long cloak, and long fingers on the keys. And a hat that looked… just like… yours.”',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Cult Leader",
        intro: "The Cult Leader convinces others to join their cult to end the game. But which team will win?",
        ability: '"Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins."',
        flavor: '"Thinking themselves wise, they became fools."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Engineer",
        intro: "The Engineer manufactures the threat that the town faces.",
        ability: '"Once per game, at night, choose which Minions or which Demon is in play."',
        flavor: '"If it bends, great. If it breaks, well, it probably needed fixing anyway."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Farmer",
        intro: "The Farmer creates more farmers.",
        ability: '"If you die at night, an alive good player becomes a Farmer."',
        flavor: '“Even the high and mighty need food on the table. Without us, the city starves.”',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Fisherman",
        intro: "The Fisherman knows something that nobody else can know - what should be done.",
        ability: '"Once per game, during the day, visit the Storyteller for some advice to help your team win."',
        flavor: '"This was my favourite part of the river… see how the sunlight makes a rainbow from the monastery to the market? This was the best place for big fish. And the older I get, the bigger they were.”',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "General",
        intro: "The General knows who is winning.",
        ability: '"Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither."',
        flavor: '"I don\'t have time for quotes."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Huntsman",
        intro: "The Huntsman saves the Damsel before the Minions find her… hopefully.",
        ability: '"Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]"',
        flavor: '"My cabin is warm and sturdy. My axe by the door, my boots drying by the fire, and elk stew a-simmering… Hark! A scream echoes through the valley! The rain and the mud and the cold, cold wind mask the scent of the wolves, but I know the path and my pace is steady. I am coming."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "King",
        intro: "The King learns which characters are still alive.",
        ability: '"Each night, if the dead outnumber the living, you learn 1 alive character. The Demon knows who you are."',
        flavor: '"Betwixt the unknown strains of mortal strife<br>And morbid night, sweet with mystery and woe<br>Lies unfettered joys of fate\'s long and colored life<br>Who\'s garden blooms with each painted face to show."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Lycanthrope",
        intro: "The Lycanthrope roams the night, killing the innocent, whilst the Demon cowers indoors.",
        ability: '"Each night*, choose an alive player. If good, they die, but they are the only player that can die tonight."',
        flavor: '"Beneath the thin veneer of civilisation lies a howling madness."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Magician",
        intro: "The Magician confuses the evil players about who is evil and who isn\'t.",
        ability: '"The Demon thinks you are a Minion. Minions think you are a Demon."',
        flavor: '"1… 2… Abra… 3… 4… Cadabra… [poof!]<br>And, as you can see, ladies and gentlemen, Captain Farnsworth\'s bag of gold has disappeared! Gone! Without a trace! Thank you, and goodnight!"',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Nightwatchman",
        intro: "The Nightwatchman is known by one player.",
        ability: '"Once per game, at night, choose a player: they learn who you are."',
        flavor: '"The night is cold and lonely, but I have the moon, the stars, the crisp wind and the soft thud of leather boots on cobbled stone for company. Yonder, candlelight flickers behind a murky window..."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Noble",
        intro: "The Noble learns that one of three players is evil.",
        ability: '"You start knowing 3 players, 1 and only 1 of which is evil."',
        flavor: '"Sarcasm is indeed the lowest form of wit. But speaking in response to your criticism, Sir, it is, nevertheless, a form of wit."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Pixie",
        intro: "The Pixie pretends to be the same character as someone else.",
        ability: '"You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die."',
        flavor: '"Round and round the garden, go.<br>Little girls run to and fro.<br>Little boys climb up the tree.<br>Which of these should Pixie be?<br>Ladies smile and go to town.<br>Lords with axe chop forest down.<br>What\'s yours is mine. What\'s mine, divine.<br>Silly little Pixie, me."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Poppy Grower",
        intro: "The Poppy Grower prevents the evil players from learning who each other are.",
        ability: '"Minions & Demons do not know each other. If you die, they learn who each other are that night."',
        flavor: '"In the hidden groves of the deep forest, the black poppy dwells. To see its revelry is to be enchanted. To smell its thick aroma is to be lost forever, a slave to the gods of light and dark."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Preacher",
        intro: "The Preacher removes the Minion abilities of selected players.",
        ability: '"Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability."',
        flavor: '"It is better to be rich and healthy than poor and sick."',
        group: "townsfolk",
        script: "exp"
    },
    {
        name: "Acrobat",
        intro: "The Acrobat dies if the people they neighbour are drunk or poisoned.",
        ability: '"Each night*, if either good living neighbour is drunk or poisoned, you die."',
        flavor: '"Welcome, one and all, to the greatest show on earth."',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Damsel",
        intro: "The Damsel absolutely, positively cannot be found out by the evil team.",
        ability: '"All Minions know you are in play. If a Minion publicly guesses you (once), your team loses."',
        flavor: 'Don\'t touch the hair, honey."',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Golem",
        intro: "The Golem kills the player they nominate.",
        ability: '"You may only nominate once per game. When you do, if the nominee is not the Demon, they die."',
        flavor: '"Golem help? Golem smash! Golem help."',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Heretic",
        intro: "The Heretic turns a win into a loss, and a loss into a win.",
        ability: '"Whoever wins, loses & whoever loses, wins, even if you are dead."',
        flavor: '"After the hail has smashed the roof and splintered the glass of the Cathedral windows, it melts again into the earth, like a dying lamb in the desert sun. Such is the parable of the madman."',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Politician",
        intro: "The Politician changes teams if they are losing.",
        ability: '"If you were the player most responsible for your team losing, you change alignment & win, even if dead."',
        flavor: '"I\'m glad you asked that question. Truly, I am. But I think the REAL question here is…"',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Puzzlemaster",
        intro: "",
        ability: '"1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info."',
        flavor: '"When one begins to think that some thing is merely some other thing, one is usually on the brink of an error. Patience, patience. Don\'t confuse just and should with is and isn\'t."',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Snitch",
        intro: "The Snitch accidentally gives information to the evil team.",
        ability: '"Minions start knowing 3 not-in-play characters."',
        flavor: '"It was John."',
        group: "outsider",
        script: "exp"
    },
    {
        name: "Boomdandy",
        intro: "The Boomdandy explodes when executed, killing most other players.",
        ability: '"If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them, dies."',
        flavor: '"Tick... Tick... Tick... TOCK."',
        group: "minion",
        script: "exp"
    },
    {
        name: "Fearmonger",
        intro: "The Fearmonger creates paranoia about who nominates whom.",
        ability: '"Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player."',
        flavor: '"Beware of gazing long into the Abyss, lest the Abyss also gaze into you."',
        group: "minion",
        script: "exp"
    },
    {
        name: "Goblin",
        intro: "The Goblin takes revenge if the town knowingly executes them.",
        ability: '"If you publicly claim to be the Goblin when nominated & are executed that day, your team wins."',
        flavor: '"You don\'t want to insult the goblins. You really, really don\'t. On a completely different note… can I have another piece of cake?"',
        group: "minion",
        script: "exp"
    },
    {
        name: "Marionette",
        intro: "The Marionette doesn't know that they are a Minion.",
        ability: '"You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]"',
        flavor: '"Words, words. They\'re all we have to go on."',
        group: "minion",
        script: "exp"
    },
    {
        name: "Mezepheles",
        intro: "The Mezepheles offers good players a choice: to turn evil or not.",
        ability: '"You start knowing a secret word. The 1st good player to say this word becomes evil that night."',
        flavor: '"That which issues from the heart alone, will bend the hearts of others to your own."',
        group: "minion",
        script: "exp"
    },
    {
        name: "Psychopath",
        intro: "The Psychopath kills in broad daylight.",
        ability: '"Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo."',
        flavor: '"Surprise!"',
        group: "minion",
        script: "exp"
    },
    {
        name: "Widow",
        intro: "The Widow knows all characters and poisons the exact character of their choosing.",
        ability: '"On your first night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play."',
        flavor: '"More wine? Château d\'Ergot \'07 is a very special vintage. My yes, very special indeed."',
        group: "minion",
        script: "exp"
    },
    {
        name: "Al-Hadikhia",
        intro: "The Al-Hadikhia puts three players in a dilemma - who will choose to die, so that others can live?",
        ability: '"Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die."',
        flavor: '"Alsukut min dhahab."',
        group: "demon",
        script: "exp"
    },
    {
        name: "Legion",
        intro: "Legion is many Demons.",
        ability: '"Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]"',
        flavor: '"We are the chill wind on a winter\'s day. We are the shadow in the moonless night. We are the poison in your tea and the whisper in your ear. We are everywhere."',
        group: "demon",
        script: "exp"
    },
    {
        name: "Leviathan",
        intro: "The Leviathan doesn't kill players, but wins after 5 days have passed.",
        ability: '"If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins."',
        flavor: '"To the last, I grapple with thee. From Hell\'s heart, I stab at thee. For hate\'s sake, I spit my last breath at thee"',
        group: "demon",
        script: "exp"
    },
    {
        name: "Lil' Monsta",
        intro: "Lil\' Monsta isn\'t a player, and is instead babysat by a Minion.",
        ability: '"Each night, Minions choose who babysits Lil\' Monsta\'s token & "is the demon". A player dies each night*. [+1 Minion]"',
        flavor: '"Step 1: Be cute. Step 2: World domination. Step 3: Bweakfast."',
        group: "demon",
        script: "exp"
    },
    {
        name: "Lleech",
        intro: "The Lleech lives if their host lives, and dies if their host dies.",
        ability: '"Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if (& only if) they die."',
        flavor: '“Tasty, tasty, tasty, tasty, tasty, tasty, tasty, tasty brai- I mean pie! Yes. Tasty pie. That\'s what I meant to say.”',
        group: "demon",
        script: "exp"
    },
    {
        name: "Riot",
        intro: "Riot kills everybody in a panic.",
        ability: '"Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]"',
        flavor: '"Larga vida a la revolución! Mi revolucion!"',
        group: "demon",
        script: "exp"
    }
];

let script = "tb";

populateCharacters();

function populateCharacters() {
    //$(".characters").empty();
    // characters.forEach(character => {
    //     if (character.script == script) {
    //         $(".characters").append(`<div class="character ${character.group}" data-name="${character.name}">${character.name}</div>`);
    //     }
    // });
    characters.forEach(character => {
        // $(".tb-select").empty();
        if (character.script == "tb") {
            // $(".tb-characters").append(`<div class="character ${character.group}" data-name="${character.name}">${character.name}</div>`);
            $(".tb-select").append(`<option value="${character.name}">${character.name}</option>`);
        } else if (character.script == "bmr") {
            // $(".bmr-characters").append(`<div class="character ${character.group}" data-name="${character.name}">${character.name}</div>`);
            $(".bmr-select").append(`<option value="${character.name}">${character.name}</option>`);
        } else if (character.script == "sv") {
            // $(".sv-characters").append(`<div class="character ${character.group}" data-name="${character.name}">${character.name}</div>`);
            $(".sv-select").append(`<option value="${character.name}">${character.name}</option>`);
        } else if (character.script == "exp") {
            // $(".exp-characters").append(`<div class="character ${character.group}" data-name="${character.name}">${character.name}</div>`)
            $(".exp-select").append(`<option value="${character.name}">${character.name}</option>`);
        }
    })
}

$(".script-select").change(function(){
    script = $('select').val();
    $(".list").addClass("hidden");
    // $(".list").removeClass("flex");
    // $(`.list.${script}-characters`).addClass("flex");
    $(`.list.${script}-select`).removeClass("hidden");
    // populateCharacters();
    // $(".script").removeClass("selected");
    // $(this).addClass("selected");
 });

 $(".characters select").change(function(e){
    // script = $('select').val();
    $(".flavor").removeClass("hidden");
    $(".examples-container").removeClass("hidden");
    $(".bluffing").removeClass("hidden");
    // let ability;
    // let name = $(".tb-select").val();
    let name = $(this).val();
    // console.log(name);
    // $(".bluffing h2").html(`Bluffing as the ${name} &#8595;`);
    characters.forEach(character => {
        if (character.name == name) {
            ability = character.ability;
            intro = character.intro;
            flavor = character.flavor;
            examples = character.examples;
            tips = character.tips;
        }
    });
    name = name.toLowerCase();
    name = name.split(" ");
    if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
    $(".token").attr("src",`./img/${name}.png`);
    $(".intro").html(`${intro}`);
    $(".ability").html(`<h2>Character Text</h2><p>${ability}</p><hr>`);
    $(".flavor").html(`${flavor}`);
    $(".examples").html(`${examples}`);
    $(".tips").html(`${tips}`);
    // $(".info-container").empty();
    // $(".info-container").append(`<img class="token" src="./img/${name}.png">
    // <p>${ability}</p>`);
 });

$(".script").click(function() {
    script = $(this).attr("data-script");
    $(".list").addClass("hidden");
    $(".list").removeClass("flex");
    $(`.list.${script}-characters`).addClass("flex");
    $(`.list.${script}-characters`).removeClass("hidden");
    // populateCharacters();
    $(".script").removeClass("selected");
    $(this).addClass("selected");
})

$(".character").click(function() {
    $(".flavor").removeClass("hidden");
    $(".examples-container").removeClass("hidden");
    $(".bluffing").removeClass("hidden");
    // let ability;
    let name = $(this).attr("data-name");
    // console.log(name);
    // $(".bluffing h2").html(`Bluffing as the ${name} &#8595;`);
    characters.forEach(character => {
        if (character.name == name) {
            ability = character.ability;
            intro = character.intro;
            flavor = character.flavor;
            examples = character.examples;
            tips = character.tips;
        }
    });
    name = name.toLowerCase();
    name = name.split(" ");
    if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
    $(".token").attr("src",`./img/${name}.png`);
    $(".intro").html(`${intro}`);
    $(".ability").html(`<h2>Character Text</h2><p>${ability}</p><hr>`);
    $(".flavor").html(`${flavor}`);
    $(".examples").html(`${examples}`);
    $(".tips").html(`${tips}`);
    // $(".info-container").empty();
    // $(".info-container").append(`<img class="token" src="./img/${name}.png">
    // <p>${ability}</p>`);
})

$(".examples-container").click(function() {
    $(".examples").slideToggle();
})

$(".tips-container").click(function() {
    $(".tips").slideToggle();
})

$(".bluffing-container").click(function() {
    $(".bluffing").slideToggle();
})