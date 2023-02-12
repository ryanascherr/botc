let characters = [
    {
        name: "Washerwoman",
        description: "The Washerwoman learns that a specific Townsfolk character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Washerwoman is woken, shown two players, and learns the character of one of them.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Townsfolk.',
        flavor: '"Bloodstains on a dinner jacket? No, this is cooking sherry. How careless."',
        examples: "<p>Evin is the Chef, and Amy is the Ravenkeeper. The Washerwoman learns that either Evin or Amy is the Chef.</p><p>Julian is the Imp, and Alex is the Virgin. The Washerwoman learns that either Julian or Alex is the Virgin.</p><p>Marianna is the Spy, and Sarah is the Scarlet Woman. The Washerwoman learns that one of them is the Ravenkeeper. (This happens because the Spy is registering as a Townsfolk—in this case, the Ravenkeeper)</p>",
        howToRun: `<p>While preparing the first night, put the Washerwoman's <strong>TOWNSFOLK</strong> reminder token by any Townsfolk character token, and put the Washerwoman's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Washerwoman and point to the players marked <strong>TOWNSFOLK</strong> and <strong>WRONG</strong>. Show the character token marked <strong>TOWNSFOLK</strong> to the Washerwoman. Put the Washerwoman to sleep. Remove the Washerwoman's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Librarian",
        description: "The Librarian learns that a particular Outsider character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Librarian learns that one of two players is a specific Outsider.</li><li>They learn this only once and then learn nothing more.</li><li>The Drunk is an Outsider. If the Librarian learns that one of two players is the Drunk, they do not learn the Townsfolk that the Drunk's player thinks they are.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)',
        flavor: '"Certainly Madam, under normal circumstances, you may borrow the Codex Malificarium from the library vaults. However, you do not seem to be a member."',
        examples: "<p style='margin-top: 0;'>Benjamin is the Saint, and Filip is the Baron. The Librarian learns that either Benjamin or Filip is the Saint.</p><p>There are no Outsiders in this game. The Librarian learns a '0'.</p><p>Abdallah is the Drunk, who thinks they are the Monk, and Douglas is the Undertaker. The Librarian learns that either Abdallah or Douglas is the Drunk. (This happens because the Librarian learns the true character. The Drunk is Abdallah's true character, not the Monk.)</p>",
        howToRun: `<p>While preparing the first night, put the Librarian's <strong>OUTSIDER</strong> reminder token by any Outsider character token, and put the Librarian's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Librarian and point to the players marked <strong>OUTSIDER</strong> and <strong>WRONG</strong>. Show the character token marked <strong>OUTSIDER</strong> to the Librarian. Put the Librarian to sleep. Remove the Librarian's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Investigator",
        description: "The Investigator learns that a particular Minion character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Investigator learns that one of two players is a specific Minion.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Minion.',
        flavor: '"It is a fine night for a stroll, wouldn\'t you say, Mister Morozov? Or should I say... BARON Morozov?"',
        examples: "<p>Amy is the Baron, and Julian is the Mayor. The Investigator learns that either Amy or Julian is the Baron.</p><p>Angelus is the Spy, and Lewis is the Poisoner. The Investigator learns that either Angelus or Lewis is the Spy.</p><p>Brianna is the Recluse, and Marianna is the Imp. The Investigator learns that either Brianna or Marianna is the Poisoner. (This happens because the Recluse is registering as a Minion—in this case, the Poisoner.)</p>",
        howToRun: `<p>While preparing the first night, put the Investigator's <strong>MINION</strong> reminder token by any Minion character token, and put the Investigator's <strong>WRONG</strong> reminder token by any other character token.</p><p>During the first night, wake the Investigator and point to the players marked <strong>MINION</strong> and <strong>WRONG</strong>. Show the character token marked <strong>MINION</strong> to the Investigator. Put the Investigator to sleep. Remove the Investigator's reminder tokens when convenient.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Chef",
        description: "The Chef knows if evil players are sitting next to each other.",
        intro: "<ul><li>On the first night, the Chef learns exactly how many pairs of evil players there are in total. A pair is two players, but one player may be a part of two pairs. So, two players sitting next to each other is one pair. Three players sitting next to each other is two pairs. Four players sitting next to each other is three pairs. And so on.</li><li>The Chef detects evil Travellers just like other character types, but only if those Travellers joined the game before the Chef acts.</li></ul>",
        ability: 'You start knowing how many pairs of evil players there are.',
        flavor: '"This evening\'s reservations seem odd. Never before has Mrs Mayweather kept company with that scamp from Hudson lane. Yet, tonight, they have a table for two. Strange."',
        examples: `<p>No evil players are sitting next to each other. The Chef learns a "0".</p><p>The Imp is sitting next to the Baron. Across the circle, the Poisoner is sitting next to the Scarlet Woman. The Chef learns a "2".</p><p>An evil Scapegoat is sitting between the Imp and a Minion. Across the circle, two other Minions are sitting next to each other. The Chef learns a "3".</p><p>The Recluse is sitting between the Imp and the Poisoner. The Chef learns a "1". Here, the Recluse is registering as evil for the Imp-Recluse pair, but as good for the Poisoner-Recluse pair</p>`,
        howToRun: '<p>During the first night, wake the Chef. Show the Chef fingers (0, 1, 2, etc.) equaling the number of pairs of neighboring evil players. Put the Chef to sleep.</p>',
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Empath",
        description: "The Empath keeps learning if their living neighbours are good or evil.",
        intro: "<ul><li>The Empath only learns how many of their neighbors are evil, not <i>which</i> one is evil.</li><li>The Empath does not detect dead players. So, if the Empath is sitting next to a dead player, they do not get info about that dead player. Instead, they get info about the closest alive player in that direction.</li><li>The Empath acts after the Demon, so if the Demon kills one of the Empath's alive neighbors, the Empath does not learn about the now-dead player. The Empath's information is accurate at dawn, not at dusk.</li></ul>",
        ability: 'Each night, you learn how many of your 2 alive neighbours are evil.',
        flavor: '"My skin prickles. Something is not right here. I can feel it."',
        examples: '<p>The Empath neighbors two good players—a Soldier and a Monk. The Empath learns a "0".</p><p>The next day, the Soldier is executed. That night, the Monk is killed by the Imp. The Empath now detects the alive players sitting next to the Soldier and the Monk, who are a Librarian and an evil Gunslinger. The Empath now learns a "1".</p><p>On a later night, there are only three players left alive: the Empath, the Imp, and the Baron. No matter who is seated where, the Empath learns a "2".</p>',
        howToRun: "Each night, wake the Empath. Show them fingers (0, 1, or 2) equaling the number of evil players neighboring the Empath. Put the Empath to sleep.",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Fortune Teller",
        description: "The Fortune Teller can detect who the Demon is, but sometimes thinks good players are Demons.",
        intro: "<ul><li>Each night, the Fortune Teller chooses two players and learns if at least one of them is a Demon. They do not learn which of them is a Demon, just that one of them is. If neither is the Demon, they learn this instead.</li><li>Unfortunately, one player, called the Red Herring, will register as a Demon to the Fortune Teller if chosen. The Red Herring is the same player throughout the entire game. This player may be any good player, even the Fortune Teller themself, and the Fortune Teller does not know which player it is.</li><li>The Fortune Teller may choose any two players—alive or dead, or even themself. If they choose a dead Demon, then the Fortune Teller still receives a nod.</li>",
        ability: 'Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.',
        flavor: '"I sense great evil in your soul! But... that could just be your perfume. I am allergic to Elderberry."',
        examples: `<p>The Fortune Teller chooses the Mayor and the Undertaker, and learns a "no".</p><p>The Fortune Teller chooses the Imp and the Empath, and learns a "yes".</p><p>The Fortune Teller chooses an alive Imp and a dead Imp, and learns a "yes".</p><p>The Fortune Teller chooses themself and a Saint, who is the Red Herring. The Fortune Teller learns a "yes".</p>`,
        howToRun: `<p>While preparing the first night, put the Fortune Teller's <strong>RED HERRING</strong> reminder token by any good character token, marking that player as the Red Herring.</p><p>Each night, wake the Fortune Teller. The Fortune Teller points at any two players. If either chosen player is a Demon or the Red Herring, nod your head yes. Otherwise, shake your head no. Put the Fortune Teller to sleep.</p><p class="callout-box">In smaller games, making the Fortune Teller their own Red Herring is sometimes advised, as the Fortune Teller gets more information that way.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Undertaker",
        description: "The Undertaker learns which character was executed today.",
        intro: "<ul><li>The player must have died from execution for the Undertaker to learn who they are. Deaths during the day for other reasons, such as the Gunslinger choosing a player to kill, or the exile of a Traveller, do not count.</li><li>The Undertaker wakes each night except the first, as there have been no executions yet.</li><li>If nobody died today, the Undertaker learns nothing. The Storyteller either does not wake the Undertaker at night, or wakes them but does not show a token.</li><li>If the Drunk is executed, the Undertaker is shown the Drunk character token, not the token for the Townsfolk that the Drunk player thought they were.</li></ul>",
        ability: 'Each night*, you learn which character died by execution today.',
        flavor: '"Hmmm....what have we here? The left boot is worn down to the heel, with flint shavings under the tongue. This is the garb of a Military man."',
        examples: `<p>The Mayor is executed today. That night, the Undertaker is shown the Mayor token.</p><p>The Drunk, who thinks they are the Virgin, is executed today. The Undertaker is shown the Drunk token, because the Undertaker learns the actual character of the player, not the character that the player thinks they are.</p><p>The Spy is executed. Two Travellers are exiled. That night, the Undertaker is shown the Butler token, because the Spy is registering as the Butler, and because exiles are not executions.</p><p>Nobody was executed today. That night, the Undertaker does not wake.</p>`,
        howToRun: `<p>If a player dies by execution, put the Undertaker's <strong>DIED TODAY</strong> reminder token by the dead player's character token.</p><p>Each night except the first, if any player died by execution today, wake the Undertaker. Show the character token marked <strong>DIED TODAY</strong> to the Undertaker. Put the Undertaker to sleep. Remove the Undertaker's reminder token when convenient.</p><p class="callout-box">In Trouble Brewing, there can only be one execution per day, and every execution causes a player to die. In other editions, there may be more than one execution per day (in which case the Storyteller chooses which character to show the Undertaker) or the execution does not cause a death (in which case the Undertaker learns nothing).</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Monk",
        description: "The Monk protects others from the Demon.",
        intro: "<ul><li>Each night except the first, the Monk may choose to protect any player except themself.</li><li>If the Demon attacks a player who has been protected by the Monk, then that player does not die. The Demon does not get to attack another player—there is simply no death tonight.</li><li>The Monk does not protect against the Demon nominating and executing someone.</li></ul>",
        ability: 'Each night*, choose a player (not yourself): they are safe from the Demon tonight.',
        flavor: '"\'Tis an ill and deathly wind that blows tonight. Come, my brother, take shelter in the abbey while the storm rages. By my word, or by my life, you will be safe."',
        examples: `<p>The Monk protects the Fortune Teller. The Imp attacks the Fortune Teller. Nobody dies tonight.</p><p>The Monk protects the Mayor, and the Imp attacks the Mayor. The Mayor's "another player dies" ability does not trigger, because the Mayor is safe from the Imp. Nobody dies tonight.</p><p>The Monk protects the Imp. The Imp chooses to kill themself tonight, but nothing happens. The Imp stays alive and a new Imp is not created.</p>`,
        howToRun: `<p>Each night except the first, wake the Monk. The Monk points at any player except themself. <i>(If the Monk points at themself, shake your head no and prompt them to point at another player.)</i> Put the Monk to sleep. Put the Monk's <strong>SAFE</strong> reminder token by the chosen player's character token.</p><p>If the Demon attacks the player marked <strong>SAFE</strong>, the player remains alive. <i>(Do not mark them with the Demon's <strong>DEAD</strong> reminder token or add a shroud as you normally would.)</i> At dawn, declare that no one died at night. </i>(Do not say why.)</i></p><p>At dawn, remove the <strong>SAFE</strong> reminder token.</p><p class="callout-box">In other editions, Demons may have abilities other than killing. The Monk's protection also prevents all other harmful effects of the Demon's ability, such as poisoning or turning the protected player evil.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Ravenkeeper",
        description: "The Ravenkeeper learns any player's character, but only if the Ravenkeeper dies at night.",
        intro: "<ul><li>The Ravenkeeper is woken on the night that they die, and chooses a player immediately.</li><li>The Ravenkeeper may choose a dead player if they wish.</li></ul>",
        ability: 'If you die at night, you are woken to choose a player: you learn their character.',
        flavor: '"My birds will avenge me! Fly! Fly, my sweet and dutiful pets! Take your message to those in dark corners! To the manor and to the river! Let them read of the nature of my death."',
        examples: `<p>The Ravenkeeper is killed by the Imp, and then wakes to choose a player. After some deliberation, they choose Ben. Ben is the Empath, and the Ravenkeeper learns this.</p><p>The Imp attacks the Mayor. The Mayor doesn't die, but the Ravenkeeper dies instead, due to the Mayor's ability. The Ravenkeeper is woken and chooses Doug, who is a dead Recluse. The Ravenkeeper learns that Doug is the Scarlet Woman, since the Recluse is registering as a Minion.</p>`,
        howToRun: `<p>If the Ravenkeeper died tonight, wake them. They point at any player. Show the chosen player's character token to the Ravenkeeper. Put the Ravenkeeper to sleep.</p><p class="callout-box">We advise you to discourage or even ban players from talking about what they are doing at night as they are doing it.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Virgin",
        description: "The Virgin is safe from execution…perhaps. Players that nominate the Virgin usually die.",
        intro: "<ul><li>If a Townsfolk nominates the Virgin, then that Townsfolk is executed immediately. Because there can only be one execution per day, the nomination process immediately ends, even if a player was about to die.</li><li>Only Townsfolk are executed due to the Virgin's ability. If an Outsider, Minion, or Demon nominates the Virgin, nothing happens, and voting continues.</li><li>The Virgin's ability is powerful because if a Townsfolk nominates them and dies, then both characters are almost certainly Townsfolk.</li><li>After being nominated for the first time, the Virgin loses their ability, even if the nominator did not die, and even if the Virgin was poisoned or drunk.</li></ul>",
        ability: 'The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.',
        flavor: '"I am pure. Let those who are without sin cast themselves down and suffer in my stead. My reputation shall not be stained with your venomous accusations."',
        examples: `<p>The Washerwoman nominates the Virgin. The Washerwoman dies, and voting ends.</p><p>The Drunk, who thinks they are the Chef, nominates the Virgin. The Drunk remains alive and the Virgin loses their ability, because the Drunk is an Outsider, not a Townsfolk. Players may now vote on whether or not to execute the Virgin.</p><p>A dead player nominates the Virgin. The dead, however, cannot nominate. The Storyteller declares that this nomination does not count. The Virgin does not lose their ability.</p>`,
        howToRun: `<p>If the first player to ever nominate the Virgin is a Townsfolk, immediately declare that the nominating player is executed. That player <strong>dies</strong>—put a shroud on their character token in the Grimoire. <strong>The Virgin loses their ability</strong>—put the Virgin's <strong>NO ABILITY</strong> reminder token by the Virgin token. End the nomination process and proceed to the night phase. <i>(No one else can be executed today.)</i></p><p>If the first player to ever nominate the Virgin is not a Townsfolk, continue the vote as normal. <strong>The Virgin loses their ability</strong>—put the Virgin's <strong>NO ABILITY</strong> reminder token by the Virgin token.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Slayer",
        description: "The Slayer can kill the Demon by guessing who it is.",
        intro: "<ul><li>The Slayer can choose to use their ability at any time during the day, and must declare to everyone when they're using it. If the Slayer chooses the Demon, the Demon dies immediately. Otherwise, nothing happens.</li><li>The players do not learn the identity of the dead player. After all, it may have been the Recluse!</li><li>A Slayer that uses their ability while poisoned or drunk may not use it again.</li><li>The Slayer will want to choose an alive player. Even if the Slayer chooses a dead Imp, nothing happens, because a dead player can't die again.</li><li>Players may say whatever they want at any time, so a player who's pretending to be the Slayer may pretend to use the Slayer ability.</li></ul>",
        ability: 'Once per game, during the day, publicly choose a player: if they are the Demon, they die.',
        flavor: '"Die."',
        examples: `<p>The Slayer chooses the Imp. The Imp dies, and good wins!</p><p>The Slayer chooses the Recluse. The Recluse dies, but the game continues, because the Recluse is registering as the Imp.</p><p>The Imp is bluffing as the Slayer. They declare that they use their Slayer ability on the Scarlet Woman. Nothing happens.</p>`,
        howToRun: `<p>During the day, the Slayer can declare that they wish to use their ability. If so, the Slayer points at any player. If the chosen player is an alive Demon, declare that the chosen player <strong>dies</strong>—put a shroud on their character token in the Grimoire. If the chosen player is not an alive Demon, say "Nothing happens." Either way, <strong>the Slayer loses their ability</strong>—put the Slayer's <strong>NO ABILITY</strong> reminder token by the Slayer token.</p><p class="callout-box">If a player is bluffing as the Slayer and declares they wish to use their ability, act as if they were indeed the Slayer—allow time for discussion, let them make the decision, and act like you're fiddling with tokens in your Grimoire, then say "Nothing happens."</p><p class="callout-box">When the Slayer declares that they wish to use their ability, give the group a minute or two to discuss who the Slayer should choose. This allows the group to feel responsible for the win (or the loss!), but the Slayer always makes the final choice.</p></p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Soldier",
        description: "The Soldier cannot be killed by the Demon.",
        intro: "<ul><li>The Soldier cannot die from the Demon's ability. So, if the Imp attacks the Soldier at night, nothing happens. Nobody dies. The Imp does not get to choose another player to attack instead.</li><li>The Soldier can still die by execution, even if the nominator was the Demon. The Soldier is protected from the Demon's ability to kill, not the actions of the Demon player.</li></ul>",
        ability: 'You are safe from the Demon.',
        flavor: '"As David said to Goliath, as Theseus said to the Minotaur, as Arjuna said to Bhagadatta... No."',
        examples: `<p>The Imp attacks the Soldier. The Soldier does not die, so nobody dies that night.</p><p>The Poisoner poisons the Soldier, then the Imp attacks the Soldier. The Soldier dies, because they have no ability while poisoned.</p><p>The Imp attacks the Mayor. The Storyteller chooses that the Soldier dies instead. However, because the Soldier cannot be killed by the Demon, nobody dies that night.</p>`,
        howToRun: `<p>During the night, if the Demon attacks the Soldier, the Soldier remains alive. <i>(At dawn, declare that no one died at night.)</i></p><p class="callout-box">In other editions, Demons may have abilities other than killing. The Soldier is also protected from all other harmful effects of the Demon's ability, such as poisoning or turning the Soldier evil.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Mayor",
        description: "The Mayor can win by peaceful means on the final day.",
        intro: `<ul><li>To survive, the Mayor sometimes "accidentally" gets someone else killed. If the Mayor is attacked and would die, the Storyteller may choose that a different player dies. Nobody learns how they died at night, just that they died.</li><li>If there are just three players alive at the end of the day, and no execution occurred that day, then the game ends and good wins.</li><li>Travellers count as players for the Mayor's victory, so must be exiled first. Remember that exiles are not executions.</li><li>Fabled don't count as players for the Mayor's victory, as the Storyteller isn't a player.</li><li>If the Demon attacks the Mayor, and the Storyteller instead chooses a dead player, the Soldier, or a player protected by the Monk, that player does not die tonight.</li></ul>`,
        ability: 'If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.',
        flavor: '"We must put our differences aside, and cease this senseless killing. We are all taxpayers after all. Well, most of us."',
        examples: `<p>The Imp attacks the Mayor. The Storyteller chooses that the Ravenkeeper dies instead. The next day, there are three players alive. There are no nominations for execution. Good wins.</p><p>Five players are alive, including two Travellers. Both Travellers are exiled, and the vote is tied between the remaining players. Because a tied vote means neither player is executed, good wins.</p>`,
        howToRun: `<p>During the night, if the Mayor would die, you choose if the Mayor actually dies, or if the Mayor remains alive and another character <strong>dies</strong> instead—put the Demon's <strong>DEAD</strong> reminder token by that character token instead of the Mayor, and put a shroud on that character token instead of the Mayor.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Butler",
        description: "The Butler may only vote when their Master votes.",
        intro: "<ul><li>Each night, the Butler chooses a player to be their Master. This may be the same player as last night or a different one.</li><li>If the Master has their hand raised to vote, or if the Master's vote has already been counted, the Butler may raise their hand to vote.</li><li>If the Master has their hand down, signaling that they are not voting, or if the Master lowers their hand before their vote is tallied, the Butler must lower their hand too.</li><li>It is not the Storyteller's responsibility to monitor the Butler. They're responsible for their own voting. Deliberately voting when they shouldn't is considered cheating.</li><li>Because exiles are never affected by abilities, the Butler can vote freely for an exile.</li><li>Dead players may only raise their hand to vote if they have a vote token. If the Butler chooses a dead player as their Master, this still applies.</li><li>The Butler is never forced to vote.</li><li>The Butler's vote may be tallied by the Storyteller before or after their Master's. Seating position is not important.</li></ul>",
        ability: 'Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.',
        flavor: '"Yes, sir...<br><br>No, sir...<br><br>Certainly, sir."',
        examples: `<p>The Butler chooses Abdallah to be their Master. Tomorrow, if Abdallah raises his hand to vote on an execution, then the Butler may too. If not, the Butler may not raise their hand.</p><p>A nomination is in progress. The Butler and their Master both have their hands raised to vote. As the Storyteller is counting votes, the Master lowers their hand at the last second. The Butler must lower their hand immediately.</p><p>The Butler is dead. Because dead players have no ability, the Butler may vote with their vote token at any time.</p>`,
        howToRun: `<p>Each night, wake the Butler. They point at any player. Mark this player with the <strong>MASTER</strong> reminder token. Put the Butler to sleep.</p><p>During a nomination, the Butler may only have their hand raised to vote if the Master has their hand raised to vote or if the Master's vote has already been counted.</p><p class="callout-box">If the Butler accidentally votes illegally, tally the Butler's vote anyway. If you don't, the total will be less than it should be, and all players will know which player is the Butler, which is unfair for the evil team. Mistakes happen. Just play on and have a private chat later.</p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Drunk",
        description: "The Drunk player thinks they are a Townsfolk and has no idea that they are actually the Drunk.",
        intro: "<ul><li>During setup, the Drunk's token does not go in the bag. Instead, a Townsfolk character token goes in the bag, and the player who draws that token is secretly the Drunk for the whole game. The Storyteller knows. The player does not.</li><li>The Drunk has no ability. Whenever their Townsfolk ability would affect the game in some way, it doesn't. However, the Storyteller pretends that the player is the Townsfolk they think they are. If that character would wake at night, the Drunk wakes to act as if they are that Townsfolk. If that Townsfolk would gain information, the Storyteller may give them false information instead—and the Storyteller is encouraged to do so.</li></ul>",
        ability: 'You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.',
        flavor: `"I'm only a *hic* social drinker, my dear. Admittedly, I am a heavy *burp* socializer."`,
        examples: `<p>The Drunk, who thinks they are the Soldier, is attacked by the Imp. The Drunk dies.</p><p>The Drunk, who thinks they are the Empath, wakes and learns a "0" even though they are sitting next to one evil player. The next night, they learn a "1".</p><p>The Drunk, who thinks they are the Ravenkeeper, is killed at night. They choose the Saint, but learn that this player is the Poisoner.</p><p>The Fortune Teller is executed. That night, the Drunk, who thinks they are the Undertaker, learns that the Drunk died today.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, remove the Drunk token and add a Townsfolk character token. Add the Drunk's <strong>IS THE DRUNK</strong> reminder token to the Grimoire. Put the swapped Townsfolk character token in the bag, not the Drunk character token.</p><p>While preparing the first night, put the Drunk's <strong>IS THE DRUNK</strong> reminder token by any Townsfolk character token, changing that player's character to the Drunk. They are now an Outsider, and do not have the ability of this Townsfolk character. <i>(But they think they do.)</i></p><p>During the game, act as if the Drunk is actually this Townsfolk character. <i>(If that character would wake to act at night, the Drunk wakes to act. If their ability would give them information, you can give false information to them if you wish. See "Drunkenness and Poisoning" in the rulebook.)</i></p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Recluse",
        description: "The Recluse appears evil but is actually good.",
        intro: "<ul><li>Whenever the Recluse's alignment is detected, the Storyteller chooses whether the Recluse registers as good or evil.</li><li>Whenever the Recluse is targeted by an ability that affects specific Minions or Demons, the Storyteller chooses whether the Recluse registers as that specific Minion or Demon.</li><li>The Recluse may register as either good or evil, or as an Outsider, Minion, or Demon, at different parts of the same night. The Storyteller chooses whatever is most interesting.</li><li>A Recluse that registers as a particular Minion or Demon does not have this character's ability. For example, a Recluse that registers as a Poisoner does not wake at night and cannot poison a player.</li></ul>",
        ability: 'You might register as evil & as a Minion or Demon, even if dead.',
        flavor: '"Garn git ya darn grub ya mitts ofma lorn yasee. Grr. Natsy pikkins yonder southwise ye begittin afta ya! Git! Me harvy no so widda licks and demmons no be fightin\' hadsup ne\'er ma kin. Git, assay!"',
        examples: `<p>The Slayer uses their ability on the Recluse. The Storyteller decides that the Recluse registers as the Imp, so the Recluse dies. The Slayer believes that they just killed the Imp.</p><p>The Empath, who neighbors the Recluse and the Monk, learns she is neighboring one evil player. The next night, the Empath learns she is neighboring no evil players.</p><p>The Investigator learns that either the Recluse or the Saint is the Scarlet Woman.</p><p>The Recluse is executed. The Undertaker learns that the Imp was executed.</p><p>The Recluse neighbors the Imp and an evil Traveller. Because showing a "2" to the Chef might be too revealing, the Storyteller gives the Chef true information instead—a "0".</p>`,
        howToRun: `<p>Each time the Recluse is targeted by an ability that detects or affects evil characters, choose which character and alignment the Recluse registers as. <i>(Do whatever is appropriate, such as showing an evil character token, nodding, giving finger signals, or allowing an ability to work that would normally only affect evil, Minion, or Demon players.)</i></p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Saint",
        description: "The Saint ends the game if they are executed.",
        intro: "<ul><li>If the Saint dies by execution, the game ends. Good loses and evil wins.</li><li>If the Saint dies in any way other than execution—such as the Demon killing them—then the game continues.</li></ul>",
        ability: 'If you die by execution, your team loses.',
        flavor: '"Wisdom begets peace. Patience begets wisdom. Fear not, for the time shall come when fear too shall pass. Let us pray, and may the unity of our vision make saints of us all."',
        examples: `<p>There are seven players alive and nominations are in progress. The Saint gets four votes and is about to die. Then, the Baron is nominated but only gets three votes. No more nominations occur today. The Saint is executed, and evil wins.</p><p>The Imp is nominated, and the players vote. The Gunslinger kills the Saint. The Saint dies, but the game continues.</p><p>The Saint is executed. However, the Scapegoat's ability is triggered, so the Scapegoat dies instead. The game continues, because the Saint did not die.</p>`,
        howToRun: `<p>If the Saint dies by execution, declare that the game ends and evil wins.</p><p class="callout-box">The Saint's ability has the strange phrase "your team loses." In Trouble Brewing, this will always mean "evil wins" because the Saint is always good. In other editions, it is possible for characters to change alignment. If the evil Saint is executed, good wins.</p>`,
        group: "Outsider",
        script: "tb"
    },
    {
        name: "Poisoner",
        description: "The Poisoner secretly disrupts character abilities.",
        intro: `<ul><li>Each night, the Poisoner chooses someone to poison for that night and the entire next day.</li><li>A poisoned player has no ability, but the Storyteller pretends they do. They do not affect the game in any real way. However, to keep up the illusion that the poisoned player is not poisoned, the Storyteller wakes them at the appropriate time and goes through the motions as if they were not poisoned. If their ability gives them information, the Storyteller may give them false information.</li><li>If a poisoned player uses a "once per game" ability while poisoned, they cannot use their ability again.</li></ul>`,
        ability: 'Each night, choose a player: they are poisoned tonight and tomorrow day.',
        flavor: '"Add compound Alpha to compound Beta... NOT TOO MUCH!"',
        examples: `<p>During the night, the Poisoner poisons the Slayer. The next day, the Slayer tries to slay the Imp. Nothing happens. The Slayer now has no ability.</p><p>The poisoned Empath, who neighbors two evil players, learns a "0". The next night, the Empath, no longer poisoned, learns the correct information: a "2".</p><p>The Investigator is poisoned. They learn that one of two players is the Baron, even though neither is a Minion. <i>(Or they could learn the right players, but the wrong Minion type.)</i></p><p>The Undertaker is poisoned. Even though the Imp died today, they learn that the Virgin died. A few days later, a poisoned Saint is executed and dies, and the game continues.</p><p>The Poisoner poisons the Mayor, then becomes the Imp. The Mayor is no longer poisoned because there is no Poisoner in play.</p>`,
        howToRun: `<p>Each night, wake the Poisoner. They point at any player. The chosen player becomes <strong>poisoned</strong>—put the <strong>POISONED</strong> reminder token by the chosen player's character token. Put the Poisoner to sleep. <i>(This poisoned player wakes and acts normally. They have no ability, but they think they do. If their ability would give them information, you can give false information to them if you wish. See “Drunkenness and Poisoning” in the rulebook.)</i></p><p>Each dusk, the poisoned player becomes <strong>healthy</strong>—remove their <strong>POISONED</strong> reminder.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Spy",
        description: "The Spy knows who everyone is. They appear good, but are actually evil.",
        intro: "<ul><li>If any character has an ability that would detect or affect a good player, then the Spy might register as good to that character. If any character has an ability that detects Townsfolk or Outsiders, then the Spy might register as a specific Townsfolk or Outsider to that player. It is the Storyteller's choice as to what the Spy registers as, even as many characters or both alignments during the same night.</li><li>A Spy that registers as a particular Townsfolk or Outsider does not have this character's ability. For example, a Spy that registers as a Slayer cannot slay the Demon.</li></ul>",
        ability: 'Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.',
        flavor: '"Any brewmaster worth their liquor,<br>knows no concoction pours trouble quicker,<br>than one where spies seem double."',
        examples: `<p>The Washerwoman learns that either Abdallah or Doug is the Ravenkeeper. Abdallah is the Monk, and Doug is the Spy registering as the Ravenkeeper.</p><p>The Spy neighbors the Imp and the Empath. The Chef learns a "1" because the Spy is registering as evil. Later that night, the Empath learns a "0" because the Spy is now registering as good.</p><p>The Spy nominates the Virgin and is executed by the Virgin's ability, because the Storyteller chooses that the Spy registers as a Townsfolk. That night, the Undertaker learns that the Drunk died today, because the Spy is now registering as the Drunk.</p>`,
        howToRun: `<p>Each night, wake the Spy and show them the Grimoire for as long as they need. Put the Spy to sleep.</p><p>Each time the Spy is targeted by an ability that detects or affects good characters, choose what character and alignment the Spy registers as. <i>(Do whatever is appropriate, such as showing a good character token, nodding, giving finger signals, or allowing an ability to work that would normally only affect good, Townsfolk, or Outsider players.)</i></p><p class="callout-box">Remember to keep your Grimoire tidy and show it to the Spy in the correct orientation, so the Spy can easily see who is who.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Baron",
        description: "The Baron changes the number of Outsiders in play.",
        intro: "<ul><li>This change happens during setup, and it does not revert if the Baron dies. A change in characters during setup, regardless of what happens during the game, is shown on character sheets and tokens in square brackets at the end of a character's description—like [this].</li><li>The added Outsiders always replace Townsfolk, not other character types.</li></ul",
        ability: 'There are extra Outsiders in play. [+2 Outsiders]',
        flavor: '"This town has gone to the dogs, what? Cheap foreign labor... that\'s the ticket. Stuff them in the mine, I say. A bit of hard work never hurt anyone, and a clip\'o\'the ears to any brigand who says otherwise. It\'s all about the bottom line, what?"',
        examples: `<p>The game is being set up for seven players, with five Townsfolk, one Minion, and one Demon. Because the Minion is the Baron, the Storyteller removes two Townsfolk tokens and adds a Saint and a Butler token. In total, tokens for three Townsfolk, two Outsiders, one Minion, and one Demon go in the bag for the players to draw from.</p><p>The game is being set up for fifteen players, with nine Townsfolk, two Outsiders, three Minions, and one Demon. Because the Baron is in play, the Storyteller must add a Drunk and a Recluse. So, they remove the Monk token and add a Recluse token. Then, instead of adding the Drunk character token, they add the Drunk's "Is the Drunk" reminder token to the Grimoire…because this game, one player isn't a Townsfolk—they are an Outsider: the Drunk. All these character tokens go into the bag for the players to draw from.</p>`,
        howToRun: `<p>While setting up the game, remove any two Townsfolk character tokens and add any two Outsider character tokens. <i>(If you add the Drunk, remember to follow its setup instructions as well.)</i> These Outsider tokens go into the bag instead of the Townsfolk tokens.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Scarlet Woman",
        description: "The Scarlet Woman becomes the Demon when the Demon dies.",
        intro: "<ul><li>If there are five or more players just before the Demon dies—that is, four or more players left alive after the Demon dies—then the Scarlet Woman immediately becomes the Demon, and the game continues as if nothing happened.</li><li>Travellers do not count as players when seeing if the Scarlet Woman's ability triggers.</li><li>If less than five players are alive when the Demon is executed, then the game ends and good wins.</li><li>If five or more players are alive when the Imp kills themself at night, the Scarlet Woman must become the new Imp.</li><li>If the Scarlet Woman becomes the Demon, they are that Demon in every way. Good wins if they are executed. They attack each night. They register as the Demon.</li></ul>",
        ability: 'If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don\'t count)',
        flavor: '"You have shown me the secrets of the Council of the Purple Flame. We have lain together in fire and in lust and in beastly commune, and I am forever your servant. But tonight, my dear, I am your master."',
        examples: `<p>There are seven players alive: the Imp, the Scarlet Woman, two Townsfolk, and three Travellers. The Imp is executed, so the game ends and good wins, because Travellers do not add to the player count for the Scarlet Woman's ability.</p><p>There are five players alive: the Imp, the Scarlet Woman, the Baron, and two Townsfolk. The Imp is executed. The Scarlet Woman becomes the Imp, and the game continues.</p><p>Lachlan is the Scarlet Woman. The Fortune Teller chooses Lachlan and Sarah, and learns a "no". Later, the Imp dies, so Lachlan becomes the Imp. The Fortune Teller chooses Lachlan and Sarah again, and learns a "yes".</p>`,
        howToRun: `<p>If the Demon dies and there were five or more alive players immediately before the Demon died, replace the Scarlet Woman token with a spare Imp token, changing that player's character from the Scarlet Woman into the Imp. <i>(They are now the Demon and have the Imp's ability. If they die, good wins.)</i></p><p>That night, wake the new Imp, show them the <strong>YOU ARE</strong> info token, then show them the Imp token.</p><p class="callout-box">In Trouble Brewing, there is only one Demon—the Imp. In other editions, there are multiple possible Demons. If the Scarlet Woman becomes the Demon, they become the same type of Demon that died, and they gain this Demon's ability. When this happens, mark the Scarlet Woman with the <strong>IS THE DEMON</strong> reminder and refer to that Demon's "How to Run" instructions.</p>`,
        group: "Minion",
        script: "tb"
    },
    {
        name: "Imp",
        description: "<p>The Imp kills at night and can make copies of itself…for a terrible price.</p>",
        intro: "<ul><li>On each night except the first, the Imp chooses a player to kill. Because most characters act after the Demon, that player will probably not get to use their ability tonight.</li><li>The Imp, because they're a Demon, knows which players are their Minions, and knows three not-in-play good characters that they can safely bluff as.</li><li>If the Imp dies, the game ends and good wins. However, if the Imp kills themself at night, they die and an alive Minion becomes an Imp. This new Imp does not act that same night, but is now the Imp in every other way—they kill each night, and lose if they die.</li></ul>",
        ability: 'Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.',
        flavor: '"We must keep our wits sharp and our sword sharper. Evil walks among us, and will stop at nothing to destroy us good, simple folk, bringing our fine town to ruin. Trust no-one. But, if you must trust someone, trust me."',
        examples: `<p>It is the first night. The Imp learns that Evin and Sarah are the Minions. The Imp also learns that the Monk, Chef, and Librarian are not in play. The Imp bluffs as the Chef, then bluffs as the Mayor later in the game. Eventually, the Imp is executed and good wins.</p><p>During the night, the Imp wakes and chooses a player, who dies. The next night, the Imp chooses themself to die. The Imp dies, and the Poisoner becomes the Imp.</p>`,
        howToRun: `<p>Each night except the first, wake the Imp. The Imp points at any player. Put the Imp to sleep. The chosen player <strong>dies</strong>—put the Imp's <strong>DEAD</strong> reminder by the chosen player's character token in the Grimoire and put a shroud on it.</p><p>If the Imp killed themself at night, choose an alive Minion and replace their character token with a spare Imp token, changing their character to the Imp. Wake the new Imp, show them the <strong>YOU ARE</strong> info token, then show them the Imp token. Put the new Imp to sleep.</p><p>At dawn, declare which player died at night. <i>(Do not say how they died.)</i></p><p class="callout-box">If the Imp attacks a dead player at night, let them do so. Whenever a character's ability says "choose a player," that means that any player—alive or dead—can be chosen. The Imp may be planning on bluffing as the Soldier, and this kind of thing helps their bluff look stronger.</p>`,
        group: "Demon",
        script: "tb"
    },
    {
        name: "Grandmother",
        description: "The Gandmother knows who their Grandchild is, but if they are killed by the Demon, the Grandmother dies too.",
        intro: "<ul><li>During the first night, the Grandmother learns their Grandchild—a good player who is a Townsfolk or Outsider. The Grandchild does not learn that they have a Grandmother.</li><li>If the Demon kills the Grandchild, the Grandmother dies too. If the Grandchild dies by any other means—such as execution, or another type of death at night—the Grandmother does not also die.</li></ul>",
        ability: 'You start knowing a good player & their character. If the Demon kills them, you die too.',
        flavor: '"Take a jacket if you go outside, dearie. And your thermos. And your scarf. I have a weak heart, you know. Whatever would I do if you caught cold...or worse?"',
        examples: `<p>During the first night, the Grandmother wakes and learns that Julian, their Grandchild, is the Professor. Three nights later, Julian is killed by the Demon, so the Grandmother dies too.</p><p>The Grandmother knows that Lewis, their Grandchild, is the Gambler. Lewis gambles and dies because of it. The Grandmother remains alive.</p><p>The Grandmother knows that Sarah, their Grandchild, is the Tinker. Sarah is killed by the Demon, but the Grandmother is drunk because of the Sailor, so the Grandmother remains alive.</p>`,
        howToRun: `<p>When preparing the first night, choose a Grandchild by marking any good character with the <strong>GRANDCHILD</strong> reminder.</p><p>During the first night, wake the Grandmother and show them the character token marked <strong>GRANDCHILD</strong>, then point at the Grandchild player, then put the Grandmother to sleep.</p><p>If the Demon kills the Grandchild, the Grandmother <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Sailor",
        description: "The Sailor is either drunk or getting somebody else drunk. While the Sailor is sober, they cannot die.",
        intro: `<ul><li>Each night, the Sailor chooses a player, who will probably get drunk.</li><li>If they choose themself, they lose their "cannot die" ability until they become sober.</li><li>If the Sailor chooses a dead player accidentally, the Storyteller prompts them to choose again.</li><li>If the Sailor chooses another player, the Storyteller chooses which player is drunk. If they choose a Townsfolk, the Storyteller will usually make the Townsfolk drunk, but if an Outsider, a Minion, or the Demon is chosen, then the Storyteller will usually make the Sailor the drunk one.</li><li>While sober, the Sailor cannot die, even if they have not yet woken at night to go drinking.</li></ul>`,
        ability: 'Each night, choose an alive player: either you or they are drunk until dusk. You can\'t die.',
        flavor: '"I\'ll drink any one of yer under the table! You! The chatterbox! Reckon you can take me? No? Howza \'bout you, Grandma? You ever tried Old McKillys Extra Spiced Rum before? Guaranteed to put hairs on yer chest! Step aboard, aye!"',
        examples: `<p>The Sailor chooses the Exorcist, and the Storyteller decides that the Exorcist is drunk. That night, the Sailor is attacked by the Shabaloth. The Sailor remains alive. The next day, the Sailor is executed but remains alive.</p><p>During the day, the Gossip made a public statement they thought was false but was actually true. That night, the Gossip ability kills a player. The Sailor has made themself drunk, and the Storyteller decides that the Sailor dies.</p><p>The Sailor chooses the Mastermind, but the Storyteller decides that the Sailor is drunk. The next day, the Sailor asks to be executed to “prove they are the Sailor,” but dies because they're drunk.</p>`,
        howToRun: `<p>Each night, wake the Sailor. They point at any player. Put the Sailor to sleep. Either the Sailor or this chosen player becomes <strong>drunk</strong>—mark them with the <strong>DRUNK</strong> reminder.</p><p>If the sober Sailor would die, the Sailor remains alive. If the sober Sailor is executed, declare that this player is executed but remains alive. <i>(Do not say why.)</i></p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Chambermaid",
        description: "The Chambermaid learns who woke up at night.",
        intro: "<ul><li>Each night, the Chambermaid chooses two players and learns if they woke tonight. They must choose alive players, and may not choose themself. This does not detect which of those players woke, only how many.</li><li>This ability only detects characters who woke in order to use their ability. It does not detect characters who woke for any other reason—such as if the Storyteller woke a Minion to let them know who the Demon is, woke the Demon to give them their starting Demon info, woke a player due to the ability of a different character, or woke someone accidentally.</li><li>If the character woke on a previous night but not this night, they are not detected by the Chambermaid.</li><li>Players that woke tonight due to their ability but are drunk or poisoned still count as having woke tonight.</li><li>If the Chambermaid chooses a dead player accidentally, the Storyteller prompts them to choose again.</li></ul>",
        ability: 'Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.',
        flavor: '"I aint seen nothin\' untoward, Milady. Begging your pardon, but if I did see somethin\', it certainly weren\'t the master o\' the house sneaking into the professor\'s laboratory \'round eleven o\'clock and mixing up fancy potions, just like you said, Miss."',
        examples: `<p>The Chambermaid chooses the Exorcist and the Innkeeper, and learns a "2". The next night, the Exorcist chooses the Shabaloth, which will wake the Shabaloth. Later, the Chambermaid chooses the Shabaloth and the Fool. Since the Shabaloth only woke due to the Exorcist ability, the Chambermaid learns a "0".</p><p>It is the second night. The Chambermaid chooses the Grandmother and the evil Goon, and learns a "2". The Goon will wake tonight, but the Chambermaid is drunk.</p><p>It is the first night. The Chambermaid chooses the Assassin and the Moonchild, and learns a "0" because the Assassin does not wake to use their ability on the first night. The next night, they choose the Assassin and the Gossip. The Assassin woke but did not use their ability. The Gossip ability was used, but the Gossip does not wake to use it. The Chambermaid learns a "1".</p>`,
        howToRun: `<p>Each night, wake the Chambermaid. They point at any two alive players except themself. Show the Chambermaid fingers <i>(0, 1, or 2)</i> equaling the number of chosen characters who woke tonight. Put the Chambermaid to sleep.</p><p>Do not wake the Chambermaid if there are not two players alive to be chosen <i>(due to the Mastermind, Zombuul, etc.)</i>.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Exorcist",
        description: "The Exorcist prevents the Demon from waking to attack.",
        intro: "<ul><li>Each night, the Exorcist chooses a player. If they choose a player who is not the Demon, the Demon may still attack. If they choose the Demon, the Demon does not wake tonight, so does not choose players to attack tonight. The Demon learns that they cannot attack and who the Exorcist is.</li><li>Any other Demon abilities still function—such as the Zombuul staying alive if killed, the Pukka killing a player they attacked on a previous night, or the Shabaloth regurgitating a player.</li><li>The Exorcist may not choose the same player two nights in a row.</li></ul>",
        ability: 'Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn\'t wake tonight.',
        flavor: '"We cast you out, every unclean spirit, every satanic power, every onslaught of the infernal adversary, every legion, every diabolical group and sect, in the name and by the power of Our Lord Jesus Christ. We command you, begone and fly far from the Church of God, from the souls made by God in His image and redeemed by the precious blood of the divine Lamb."',
        examples: `<p>The Exorcist chooses the Shabaloth. The Shabaloth does not kill tonight. At dawn, the Storyteller declares that nobody died that night.</p><p>The Exorcist chooses the Pukka. The Pukka does not wake to attack tonight, but a player still dies because of the Pukka's attack during the previous night.</p><p>The Po chooses to attack no one. The next night, the Exorcist chooses the Po. The Po does not wake to act tonight. The next night, the Exorcist chooses the Assassin. The Assassin can still attack tonight, and the Po chooses three players to attack, because the Po's last choice was no one.</p>`,
        howToRun: `<p>Each night except the first, wake the Exorcist. They point at any player. Mark the chosen player's character token with the <strong>CHOSEN</strong> reminder. Put the Exorcist to sleep.</p><p>If the Exorcist chose the Demon, wake the Demon. Show them the <strong>THIS CHARACTER SELECTED YOU</strong> info token and the Exorcist token, then point at the Exorcist player. Put the Demon to sleep. Later tonight, do not wake the Demon.</p><p class="callout-box">A Demon chosen by the Exorcist will not wake to use their Demon ability, but will still wake if they need to due to other characters' abilities. This may be relevant if using the Exorcist with characters from other editions.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Innkeeper",
        description: "The Innkeeper protects players from death at night, but somebody gets drunk in the process.",
        intro: "<ul><li>The Innkeeper, like the Monk, makes players safe from being killed by the Demon. They are also safe from death caused by Outsiders, Minions, Townsfolk, and Travellers.</li><li>The Innkeeper only protects players at night, not the day.</li><li>One of the two players that the Innkeeper chooses becomes drunk for tonight and the next day. This player may be good or evil, but will almost always be good, depending how your game is going. An Innkeeper that chooses themself might become drunk, which means they have no ability and may die tonight—and the other player they chose to protect isn't safe either.</li></ul>",
        ability: 'Each night*, choose 2 players: they can\'t die tonight, but 1 is drunk until dusk.',
        flavor: '"Come inside, fair traveller, and rest your weary bones. Drink and be merry, for the legions of the Dark One shall not harass thee tonight."',
        examples: `<p>The Innkeeper protects the Fool and the Chambermaid. The Storyteller chooses that the Fool becomes drunk. Tomorrow, when the Fool is executed, they die, even though they hadn't used their ability yet.</p><p>The Innkeeper protects the Assassin and the Po. The Storyteller chooses that the Assassin becomes drunk. Later that night, the Assassin uses their ability, but nothing happens.</p><p>The Innkeeper protects themself and the Pacifist. The Storyteller chooses that the Innkeeper becomes drunk. The Pacifist is attacked by the Demon tonight and dies.</p>`,
        howToRun: `<p>Each night except the first, wake the Innkeeper. They point at any two players. Put the Innkeeper to sleep. Mark the two chosen players with <strong>SAFE</strong> reminders. One of the chosen players becomes <strong>drunk</strong>—mark them with the <strong>DRUNK</strong> reminder. The players marked <strong>SAFE</strong> cannot die tonight.</p><p>At dawn, remove the <strong>SAFE</strong> reminders.</p><p>At dusk, remove the <strong>DRUNK</strong> reminder.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Gambler",
        description: "The Gambler can guess who is who…but pays the ultimate price if they guess wrong.",
        intro: "<ul><li>Each night except the first, the Gambler chooses a player and guesses their character by pointing to its icon on the character sheet. If the guess is correct, nothing happens. If the guess is incorrect, the Gambler dies.</li><li>The Gambler does not learn from the Storyteller whether their guess is correct or incorrect.</li><li>The Gambler may choose any player, dead or alive, even themself.</li></ul>",
        ability: 'Each night*, choose a player & guess their character: if you guess wrong, you die.',
        flavor: '"Heads, I win. Tails, you lose."',
        examples: `<p>The Gambler points to the Minstrel player, then to the Minstrel icon. This guess is correct, so the Gambler remains alive, but the Gambler is killed by the Demon tonight anyway.</p><p>The Devil's Advocate is bluffing as the Pacifist. That night, the Gambler points to the Devil's Advocate player, then to the Pacifist icon. This guess is wrong, so the Gambler dies.</p>`,
        howToRun: `<p>Each night except the first, wake the Gambler. They point at any player, then point at any character icon on their character sheet. Put the Gambler to sleep. If the chosen player is a different character from the chosen character icon, the Gambler <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Gossip",
        description: "The Gossip deliberately speaks lies in the hope of uncovering the truth.",
        intro: "<ul><li>Each day, the Gossip may make a public statement. If this statement is true, the Storyteller kills a player that night. If it is false, then no players die due to the Gossip.</li><li>Mumbled words, whispers, statements the Storyteller doesn't know are true or false, or statements that someone cannot hear don't count. Like the Slayer's ability, the Storyteller and every player must be able to hear and understand the Gossip and be aware that the Gossip is using their ability in order for the Storyteller to judge what happens next.</li><li>If the Gossip made a true statement during the day while drunk or poisoned, but is sober and healthy when their ability triggers that night, the Storyteller still kills a player.</li></ul>",
        ability: 'Each day, you may make a public statement. Tonight, if it was true, a player dies.',
        flavor: '"Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah. Blah."',
        examples: `<p>During the day, the Gossip says, "I am the Gossip. My public statement is: The Demon is wearing a hat.” The Demon is not wearing a hat. That night, nobody dies due to the Gossip's ability.</p><p>The Gossip neighbors a good Traveller and the Pacifist. During the day, the drunk Gossip says, "Both my neighbors are good.” At dusk, the drunk Gossip becomes sober. That night, the Chambermaid dies.</p><p>During the day, the Gossip makes a true statement. That night, the Gossip is killed by the Demon. They lose their ability, so their statement does not kill anyone tonight.</p>`,
        howToRun: `<p>Each day, if the Gossip makes a definite, true public statement, put the Gossip's <strong>DEAD</strong> reminder in the center of the left side of the Grimoire as a reminder to yourself to place it tonight.</p><p>Each night except the first, if the Gossip made a definite, true public statement today, you choose any player. The chosen player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder.</p><p class="callout-box">When choosing a player to die due to the Gossip ability, we recommend that you choose a character that will actually die, not one protected from death by an ability (like the Fool or Tea Lady). The Gossip gains knowledge when their statement caused a death. This is more helpful to the good team, and more fun for everyone.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Courtier",
        description: "The Courtier gets a character drunk, without knowing which player it is.",
        intro: "<ul><li>Once per game, the Courtier chooses a character to be drunk for three nights and three days, starting immediately.</li><li>The Courtier does not learn if they were successful or not, so they might choose a character that is not in play.</li><li>The Courtier chooses a character, <i>not</i> a player. The Courtier player may need to be reminded of this. Evil players bluffing as the Courtier may also need to be reminded.</li><li>If the drunk or poisoned Courtier chooses a character, that character is not drunk, even if the Courtier later becomes sober and healthy. If the Courtier made a character drunk, but the Courtier becomes drunk or poisoned, the player they made drunk becomes sober again. If the Courtier becomes sober and healthy again before the three nights and three days have ended, that player becomes drunk yet again.</li></ul>",
        ability: 'Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.',
        flavor: '"I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep."',
        examples: `<p>For four nights, the Courtier wakes but does not use their ability. During the fifth night, they make the Shabaloth drunk. For the next three nights, the Shabaloth acts but cannot kill anybody.</p><p>The Courtier uses their ability while drunk. Nothing happens, but they are not woken again.</p><p>The Courtier makes the Mastermind drunk. The Po is executed while the Mastermind still lives. The game ends and good wins.</p>`,
        howToRun: `<p>Each night, wake the Courtier. They either shake their head no or point at any character icon on their character sheet. Put the Courtier to sleep.</p><p>If the Courtier chose a character icon and that character is in play, the player of the chosen character becomes <strong>drunk</strong> for three nights and three days. Tonight, mark them with the Courtier's <strong>DRUNK 1</strong> reminder. The next night, replace the <strong>DRUNK 1</strong> reminder with the <strong>DRUNK 2</strong> reminder. The next night, replace the <strong>DRUNK 2</strong> reminder with the <strong>DRUNK 3</strong> reminder. At dusk on the next night, remove the <strong>DRUNK 3</strong> reminder, and <strong>the Courtier loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet.</p><p>After the Courtier chooses a character to make drunk, do not wake the Courtier for the rest of the game.</p><p class="callout-box">In other editions, there can be multiple copies of the same character in play. The Courtier only makes one of them drunk.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Professor",
        description: "The Professor can bring someone back from the dead.",
        intro: `<ul><li>Once per game, the Professor can choose a dead player. If that player is a Townsfolk, they are resurrected, becoming alive again.</li><li>If the Professor chooses an Outsider, Minion, or Demon, then nothing happens, and the Professor's ability is gone.</li><li>The resurrected player regains their ability, even a "once per game" ability they used already.</li><li>Resurrected Townsfolk may or may not get to act on the night of their resurrection, depending on whether they would act before or after the Professor. If they had a "first night only" or "you start knowing" ability, they immediately wake to use it again, as soon as the Professor goes to sleep.</li></ul>`,
        ability: 'Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.',
        flavor: '"The process is simple. Attach the hydraulic confabulator to the modified chi matrix amplifier, add 20 CCs of pseudodorafine, keep his Z levels above 20%, and your husband will be fine. Now, all we need is a lightning strike."',
        examples: `<p>The Professor chooses a dead player who is claiming to be the Tea Lady. The player is actually the Lunatic. Nobody is resurrected.</p><p>The Professor resurrects the Grandmother, who learns a good player's character. At dawn, all players learn the Grandmother player is alive, but not that the player is the Grandmother.</p><p>The drunk Professor chooses to resurrect the Minstrel. Unbeknownst to the Professor, the Minstrel was regurgitated by the Shabaloth and is now alive. The Storyteller shakes their head no, because the Professor must choose a dead player. The Professor chooses the dead Fool instead. Nothing happens because the Professor is drunk, and the Professor cannot use their ability again.</p>`,
        howToRun: `<p>Each night except the first, wake the Professor. The Professor either shakes their head no or points to a dead player. Put the Professor to sleep.</p><p>If the Professor chose a dead Townsfolk, the chosen player becomes <strong>alive</strong> again—mark them with the Professor's "Alive" reminder and remove their shroud. <i>(They wake later tonight if they normally would. If they wake on the first night only, they wake now to use their ability.)</i> At dawn, after declaring which players died, declare which player is alive again. <i>(Do not say why.)</i> <strong>The Professor loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Minstrel",
        description: "The Minstrel makes everybody drunk if a Minion dies.",
        intro: "<ul><li>If a Minion is executed and dies, all players (except the Minstrel) become drunk immediately and stay drunk all through the night and all the following day. Townsfolk, Outsiders, Minions, and even Demons become drunk, but not Travellers. This doesn't happen if a Minion died at night.</li><li>If a dead Minion is executed, the Minstrel ability does not trigger—a dead character cannot die again! If a Minion is executed but does not die, the Minstrel's ability does not trigger. If the Minstrel is drunk or poisoned when a Minion dies by execution, the Minstrel ability does not trigger.</li></ul>",
        ability: 'When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.',
        flavor: '"And I shall hear, tho\' soft you tread above me... And all my dreams will warm and sweeter be... If you\'ll not fail to tell me that you love me... I simply sleep in peace until you come to me."',
        examples: `<p>During the first day, the Pacifist dies. That night, players act as normal, because the Pacifist is not a Minion. During the second day, the Judge executes the Godfather. That night, everyone is drunk, including the Demon, so nobody dies. During the third day, a Minion who is protected by the Devil's Advocate is executed and dies, because the Devil's Advocate is drunk. Again, since a Minion died during the day, the Minstrel makes everyone drunk.</p><p>The Assassin is executed, so the Minstrel makes everyone drunk. The next day, the Godfather is executed, so the Minstrel makes everyone drunk again. The Demon could not kill on either night. The next day, the Apprentice Mastermind is exiled, so that night everyone becomes sober again, because the Minstrel ability doesn't trigger from a Traveller being exiled.</p><p>During the day, the Assassin dies, so the Minstrel makes everyone drunk. The following day, the Zombuul is executed and dies for the first time. Good wins, because the Zombuul is drunk and so has no ability.</p>`,
        howToRun: `<p>During the day, if a Minion dies by execution, all other players except Travellers become <strong>drunk</strong>—put the Minstrel's <strong>EVERYONE IS DRUNK</strong> reminder in the center of the left side of the Grimoire. At dusk tomorrow, all players made drunk by the Minstrel become <strong>sober</strong>—remove the <strong>EVERYONE IS DRUNK</strong> reminder.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Tea Lady",
        description: "The Tea Lady protects her neighbors from death…as long as they are good.",
        intro: "<ul><li>If both alive neighbors of the Tea Lady are currently good, those neighbors cannot die. The Demon cannot kill them, nor the Godfather, nor the Gossip. If they are executed, they do not die. The only exception is the Assassin, who can kill someone protected from death.</li><li>The Tea Lady's alive neighbors are the two alive players closest to the Tea Lady—one clockwise and one counterclockwise. Skip past any dead neighbors.</li><li>However, if either alive neighbor is evil, or both are, then the Tea Lady does not protect her alive neighbors. If an evil player dies and the Tea Lady is now neighboring two good players, then neither can die.</li></ul>",
        ability: 'If both your alive neighbors are good, they can\'t die.',
        flavor: '"If you are cold, tea will warm you. If you are too heated, tea will cool you. If you are depressed, tea will cheer you. If you are excited, tea will calm you."',
        examples: `<p>The Tea Lady starts the game neighboring the Mastermind and the good Goon. The Mastermind is executed and dies. Now, the Tea Lady's alive neighbors are the good Goon and the Courtier. The Demon attacks the Courtier, but the Courtier remains alive. Later, the Goon turns evil, and the Demon attacks the Courtier again. This time, the Courtier dies.</p><p>The Tea Lady's alive neighbors are a good Matron and a good Judge. The Matron is exiled but remains alive.</p>`,
        howToRun: `<p>If both alive neighbors of the Tea Lady are good, mark those neighbors' character tokens with the Tea Lady's <strong>CANNOT DIE</strong> reminders. If either alive neighbor of the Tea Lady is evil, remove these reminders. Update these reminders immediately based on this condition throughout the entire game <i>(such as if a player's alignment changes)</i>.</p><p>If a player marked <strong>CANNOT DIE</strong> would die, they remain alive. If a player marked <strong>CANNOT DIE</strong> is executed, declare that the marked player is executed but remains alive. <i>(Do not say why.)</i></p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Pacifist",
        description: "The Pacifist prevents good players from dying by execution.",
        intro: "<ul><li>When a good player is executed, the Storyteller chooses whether they die or live.</li><li>As always, when abilities like this function in obvious ways, the group is not told why something has happened, only what has happened. The group learns that an execution succeeded, but that the executed player did not die—that is all.</li><li>If a player is executed and remains alive, that still counts as the execution for today. No other nominations may happen.</li></ul>",
        ability: 'Executed good players might not die.',
        flavor: '"Distrust all in whom the impulse to punish is powerful."',
        examples: `<p>The Innkeeper is executed but remains alive because of the Pacifist.</p><p>The Pacifist is in play. Good is winning. Even after seven days, and five good players executed, the Pacifist ability has not saved anybody.</p><p>The Pacifist is in play. Evil is winning. The Lunatic is executed but remains alive. The next day, the good Professor is executed and dies, because the Pacifist is drunk. The next day, a good Bishop is exiled and dies, because the Pacifist saves players from execution, not exile. The next day, the Pacifist is executed but remains alive because of the Pacifist.</p>`,
        howToRun: `<p>If a good character is executed, declare either that they <strong>die</strong> or they remain alive. <i>(Do not say why.)</i> Then, begin the night phase. <i>(Whether the player lived or died, this was the one execution for the day.)</i></p><p class="callout-box">Triggering the Pacifist ability once per game is usually about right. You can trigger it more if you feel it is appropriate. On rare occasions, to make the Pacifist look suspicious, you can never trigger it.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Fool",
        description: "The Fool escapes death…once.",
        intro: "<ul><li>The first time the Fool dies for any reason, the Fool remains alive. They don't learn that their ability saved their life.</li><li>If another character's ability protects the Fool from death, the Fool does not use their ability. Only the time that the Fool would actually for realsy bona fide be dead does the Fool's ability trigger.</li></ul>",
        ability: 'The first time you die, you don\'t.',
        flavor: '"...and the King said \'What?! I\'ve never even owned a pair of rubber pantaloons, let alone a custard cannon!\' Ho-ho! Jolly day!"',
        examples: `<p>On the first day, the Fool is executed but remains alive. On the fourth day, the Fool is executed again. This time, they die.</p><p>The Demon attacks the Fool, who remains alive. Nobody dies that night. The next day, the Fool is executed by the Judge and dies.</p><p>The Demon attacks the Fool, who is protected by the Tea Lady. The Fool remains alive and keeps their ability. Later, after the Tea Lady has died, the Demon attacks the Fool, who is now protected by the Innkeeper. The Fool remains alive and keeps their ability. Later, after the Innkeeper has died, the Demon attacks the Fool, who remains alive again but uses their ability, so next time they will die.</p>`,
        howToRun: `<p>If the Fool would die, they remain alive. <i>(But they die if they are drunk or poisoned.)</i> If the Fool was executed, declare that the player was executed but remains alive. <i>(Do not say why.)</i></p><p>Either way, the Fool loses their ability—mark them with the <strong>NO ABILITY</strong> reminder.</p>`,
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Goon",
        description: "The Goon is immune to other characters at night, but keeps changing allegiances.",
        intro: "<ul><li>Each night, the first time a player wakes to use their ability and chooses the Goon, that player becomes drunk immediately. Their ability does not work tonight, nor the next day.</li><li>Later on the same night, if another player wakes to use their ability and chooses the Goon, their ability works as normal.</li><li>The Goon cannot make a player drunk unless the player chose the Goon. The Storyteller choosing the Goon due to an ability, such as the Grandmother's, doesn't count.</li><li>As soon as the Goon makes a player drunk, the Goon changes alignment to match theirs. The Goon still changes alignment, and makes the player drunk, if the player choosing the Goon was already drunk or poisoned.</li><li>If chosen by the Assassin, the Goon dies but still turns evil.</li></ul>",
        ability: 'Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.',
        flavor: '"Yes boss. I explained fings real good to dat geezer. He don\'t want me explain it again. Nah boss, I don\'t need no doctor—it\'s only a knife wound. Be right come mornin\'."',
        examples: `<p>The Courtier chooses the Goon. The Goon turns good, and the Courtier becomes drunk.</p><p>The Shabaloth attacks the Goon, then the Gossip. Since the Shabaloth became drunk as soon as they chose the Goon, neither player dies tonight, and the Goon turns evil. The next night, the Shabaloth attacks the Gambler, then the Goon. The Gambler dies, then the Shabaloth becomes drunk again. The Goon is still alive and still evil.</p><p>The Chambermaid chooses the Goon and the Minstrel, and learns a "1" because the Chambermaid is drunk.</p><p>The Tea Lady neighbors the good Goon and the Tinker. The Tinker is executed but does not die. The next day, the Goon is evil. The Tinker is executed again and dies.</p>`,
        howToRun: `<p>At night, if a player chooses to use their ability on the Goon and nobody is marked with the Goon's <strong>DRUNK</strong> reminder, this player immediately becomes <strong>drunk</strong>—mark them with the <strong>DRUNK</strong> reminder. Finish resolving this player's ability and put them to sleep. If this player's alignment is different from the Goon's alignment, rotate the Goon's character token—right side up for good, upside-down for evil—to match this player's alignment, then wake the Goon, give them a thumbs-up or a thumbs-down <i>(indicating their new alignment)</i>, then put the Goon to sleep.</p><p>The next dusk, the player that the Goon made drunk becomes <strong>sober</strong>—remove the Goon's <strong>DRUNK</strong> reminder.</p>`,
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Lunatic",
        description: "The Lunatic thinks that they are the Demon.",
        intro: "<ul><li>Much like the Drunk, the Lunatic does not know their real character or real alignment. They are woken each night to attack as if they were the Demon that is in play, but their choices have no effect because they have no Demon ability.</li><li>The Lunatic wakes during the first night to learn three bluffs and the appropriate number of Minions, but this information may be wrong.</li><li>The real Demon knows which players the Lunatic chose to attack each night.</li></ul>",
        ability: 'You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.',
        flavor: '"I am the night...I think."',
        examples: `<p>The Lunatic, thinking they are the Shabaloth, wakes each night to choose two players. The chosen players do not die.</p><p>The Lunatic, thinking they are the Zombuul, does not wake often at night. The real Zombuul, who is pretending to be the Lunatic's Minion, often attacks the same players the Lunatic chooses, to keep up the illusion that the Lunatic is the Demon.</p>`,
        howToRun: `<p>While setting up the game, put the Lunatic and Demon tokens in the bag. Once all tokens have been returned to you, swap the positions of the Lunatic and Demon tokens in the Grimoire.</p><p>During the first night, wake the Lunatic and act as if they are the Demon. Show them the <strong>THESE ARE YOUR MINIONS</strong> info token and point to a number of players equaling the number of Minions in play. <i>(These can be any players, whether or not they are Minions.)</i> Show any three good character tokens as bluffs. <i>(These can even be characters that are in play.)</i></p><p>During the first night, wake the Demon. Show them the <strong>YOU ARE</strong> info token, then their Demon token. <i>(This tells them they are the real Demon.)</i> Show them the <strong>THIS PLAYER IS</strong> info token, then the Lunatic token, then point at the Lunatic player.</p><p>Each night, before the Demon wakes to attack, wake the Lunatic to act as if they were that Demon. Put a <strong>CHOSEN</strong> reminder on each player they chose, then put them to sleep. Wake the real Demon, point at the Lunatic, show the Lunatic token to the real Demon, and point at the players that the Lunatic chose. Then the Demon acts as normal.</p><p class="callout-box">You can make the Lunatic think they are a different Demon than the in-play Demon by instead putting two Demon tokens in the bag, then replacing one of them with the Lunatic token once they are in the Grimoire.</p>`,
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Tinker",
        description: "The Tinker can die at any time, for no reason.",
        intro: "<ul><li>The Storyteller may kill the Tinker at any time.</li><li>The Tinker cannot die from their ability while protected from death, as normal.</li></ul>",
        ability: 'You might die at any time.',
        flavor: '"I think I see the problem. Luckily, I have an idea! This catapult will shoot twice as far with just a minor adjustment..."',
        examples: `<p>It is the third day. Suddenly, the Tinker dies.</p><p>During the night, the Tinker dies, even though the Demon attacked a different player.</p><p>The Tea Lady sits next to the Tinker and another good player, protecting the Tinker from death. The Tinker cannot die from their ability.</p><p>The Tinker is attacked by the Demon. The Tinker does not die because they are protected by the Innkeeper. Later that night, the Innkeeper dies, so the Storyteller chooses to kill the Tinker too.</p>`,
        howToRun: `<p>At any time, you may decide that the Tinker <strong>dies</strong>. If this is during the day, immediately declare that the Tinker has died. If this is during the night, mark the Tinker with the <strong>DEAD</strong> reminder and wait until dawn to declare which players died during the night. <i>(Do not say how.)</i></p><p class="callout-box">While you may kill the Tinker out of the blue during the day, it is most interesting if the Tinker dies at night, because the players will be wondering whether the Tinker died due to their ability or for some other reason.</p><p class="callout-box">You can choose to never kill the Tinker. This makes the Tinker look really suspicious.</p><p class="callout-box">We recommend that you never kill the Tinker when it would end the game. Players should win or lose by their own efforts, not Storyteller fiat.</p>`,
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Moonchild",
        description: "The Moonchild curses someone upon death, killing them too.",
        intro: "<ul><li>The Moonchild must choose a player within a minute or two of learning that they are dead, whether by an execution or at dawn when the Storyteller declares who died at night. The Moonchild can take their time and get advice from the group before making this decision.</li><li>If the Moonchild chooses a good player, that player dies tonight. If they choose an evil player, nothing happens.</li><li>As always, play along if an evil player is bluffing as the Moonchild and pretends to use their ability.</li><li>It is not the Storyteller's responsibility to prompt the Moonchild to choose a player. The Moonchild must do this shortly after they learn that they are dead. Deliberately not doing so is considered cheating.</li><li>If the Moonchild is sober and healthy at night but was drunk or poisoned when they chose a player today, that player dies. If the Moonchild is drunk or poisoned at night but was sober and healthy when they chose a player today, that player doesn't die.</li><li>The Moonchild kills the Goon if the Goon was good when the Moonchild chose them, regardless of the Goon's alignment at night.</li></ul>",
        ability: 'When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.',
        flavor: '"Scorpio looks sideways at the lovers, and you have a choice to make. With silver cross my palm, and your fate shall be revealed. With steel cross my throat, and by the stars you shall regret it."',
        examples: `<p>The Pukka kills the Moonchild. The next morning, the Moonchild chooses a player, who is the Exorcist. That night, the Exorcist dies.</p><p>The Pacifist is in play. The Moonchild is executed but remains alive. The Moonchild does not choose a player, because the Moonchild did not die.</p><p>The Shabaloth eats the Moonchild. The Moonchild chooses the Assassin, who remains alive. The Shabaloth regurgitates the Moonchild. A few nights later, the Shabaloth eats the Moonchild again. This time, the Moonchild chooses the Gossip, who dies.</p>`,
        howToRun: `<p>When you declare that the Moonchild's player has died, the Moonchild chooses any alive player. If the chosen player is good, mark their character token with the <strong>DEAD</strong> reminder. Tonight, the player marked with the Moonchild's <strong>DEAD</strong> reminder <strong>dies</strong>.</p><p class="callout-box">If the Moonchild doesn't realize that they must choose a player when they die, privately remind them. New players may not understand how their character works.</p>`,
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Godfather",
        description: "The Godfather takes revenge when the town kills Outsiders.",
        intro: "<ul><li>Whenever an Outsider is executed and dies, the Godfather chooses one player to die that night.</li><li>The Godfather only kills if an Outsider dies during the day. Outsiders that die at night don't count.</li><li>If the Godfather is in play, this adds or removes one Outsider from play.</li><li>At the start of the game, the Godfather learns which Outsiders are in play.</li><li>If two Outsiders died today, the Godfather still only kills one player tonight.</li></ul>",
        ability: 'You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]',
        flavor: '"Normally, it\'s just business. But when you insult my daughter, you insult me. And when you insult me, you insult my family. You really should be more careful—it would be a shame if you had an unfortunate accident."',
        examples: `<p>The Godfather learns that the Lunatic and the Moonchild are in play, so the Godfather bluffs as the Tinker. During the third day, the Lunatic dies by execution. That night, the Demon kills the Minstrel, and the Godfather kills the Pacifist.</p><p>The Tinker is executed but remains alive because they were protected by the Devil's Advocate. The Godfather does not act that night. The next day, the Tinker dies due to their own ability. That night, the Demon kills a player, and the Godfather kills themself to appear like a good player.</p>`,
        howToRun: `<p>While setting up the game, before putting the character tokens in the bag, either remove one Townsfolk and add one Outsider or remove one Outsider and add one Townsfolk.</p><p>During the first night, wake the Godfather. Show them the character tokens of all Outsiders in play. Put the Godfather to sleep.</p><p>If an Outsider dies during the day, mark them with the <strong>DIED TODAY</strong> reminder. That night, wake the Godfather. They point at any player. Put the Godfather to sleep. The chosen player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder.</p>`,
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Devil's Advocate",
        description: "The Devil's Advocate saves players from execution.",
        intro: "<ul><li>Each night, the Devil's Advocate chooses a player to protect from death by execution. The next day, if that player is executed, the execution succeeds but the player remains alive.</li><li>The Devil's Advocate cannot choose the same player two nights in a row, whether or not that player was saved from execution today, and they cannot choose a Zombuul that registers as dead.</li></ul>",
        ability: 'Each night, choose a living player (different to last night): if executed tomorrow, they don\'t die.',
        flavor: '"My client, should the objection be overruled, pleads innocent by virtue of the prosecution\'s non-observance of statute 27.B—incorrect or misleading conjugation of a verb. The fact that nine of the jury died last night is simply prima face, which is, as Wills vs Thule set precedent for, further reason to acquit."',
        examples: `<p>At night, the Devil's Advocate protects themself. The next day, the Devil's Advocate is executed but remains alive.</p><pThe Devil's Advocate protects the Zombuul. The Zombuul is executed but remains alive, so their life token is not flipped. The next day, the Zombuul is executed again and registers as dead.</p><p>The Devil's Advocate protects the Grandmother. The Grandmother is executed but remains alive. Later, the Devil's Advocate protects the Tinker. The Tinker is executed, but the Storyteller kills the Tinker anyway, due to the Tinker ability. Later, the Devil's Advocate protects the Moonchild, and the Judge forces the execution to succeed—the execution succeeds, but the Moonchild remains alive.</p>`,
        howToRun: `<p>Each night, wake the Devil's Advocate. They point at any player. Put the Devil's Advocate to sleep. Mark the chosen player with the <strong>SURVIVES EXECUTION</strong> reminder.</p><p>If a player marked <strong>SURVIVES EXECUTION</strong> is executed, declare that the player was executed but remains alive. <i>(Do not say why.)</i></p>`,
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Assassin",
        description: "The Assassin kills who the Demon cannot.",
        intro: "<ul><li>Once per game at night, the Assassin can kill a player. This player dies, even if they are protected from death in any way, such as from an ability.</li><li>The Assassin ability is affected by drunkenness and poisoning, as normal.</li><li>If the Assassin attacks the Goon, the Goon dies and turns evil.</li></ul>",
        ability: 'Once per game, at night*, choose a player: they die, even if for some reason they could not.',
        flavor: '"..."',
        examples: `<p>For the first three nights the Assassin wakes, but chooses not to act. During the fourth night, they choose to kill the Fool. Even though the Fool still has their ability, the Fool dies and stays dead.</p><p>The Tea Lady neighbors two good players. The Assassin chooses to kill one of the Tea Lady's neighbors, who dies even though they were protected by the Tea Lady.</p><p>The Minstrel is in play. The Mastermind dies by execution. That night, the Assassin chooses to kill the Moonchild, but they do not die, because the Assassin is drunk due to the Minstrel.</p><p>The Assassin, who was drunk due to the Courtier, chooses to kill the Goon. The Assassin has no ability, so the Goon remains alive but turns evil.</p>`,
        examples: `<p>For the first three nights the Assassin wakes, but chooses not to act. During the fourth night, they choose to kill the Fool. Even though the Fool still has their ability, the Fool dies and stays dead.</p><p>The Tea Lady neighbors two good players. The Assassin chooses to kill one of the Tea Lady's neighbors, who dies even though they were protected by the Tea Lady.</p><p>The Minstrel is in play. The Mastermind dies by execution. That night, the Assassin chooses to kill the Moonchild, but they do not die, because the Assassin is drunk due to the Minstrel.</p><p>The Assassin, who was drunk due to the Courtier, chooses to kill the Goon. The Assassin has no ability, so the Goon remains alive but turns evil.</p>`,
        howToRun: `<p>Each night except the first, wake the Assassin. They either shake their head no or point at any player. Put the Assassin to sleep.</p><p>If the Assassin chose a player, that player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder. This cannot be prevented in any way <i>(except if the Assassin doesn't have their ability, such as if they're drunk or poisoned)</i>. <strong>The Assassin loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet. <i>(The Assassin won't wake again.)</i></p>`,
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Mastermind",
        description: "The Mastermind can still win after the Demon is dead.",
        intro: `<ul><li>If the Demon dies by execution, the game continues. The players do not learn that the Demon died. The following day, if a good player is executed—whether or not they die from it—then evil wins. If an evil player is executed or nobody is executed, then the good team wins.</li><li>A dead Demon does not get to attack. They lose their ability, as normal. During this extra night and day, other characters' abilities function as normal.</li><li>If the Demon dies and just two players are left alive, the game still continues for another day—evil does not win from two players being alive, and good did not win by killing the Demon. The Mastermind ability says "play for one more day," and abilities override standard game rules.</li></ul>`,
        ability: 'If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.',
        flavor: '"The tentacles of that monster are nailed to the doors of the church. Mothers and children are dancing in the street. Excellent. Everything is proceeding exactly as I have planned."',
        examples: `<p>The Shabaloth dies. The next day, the Professor is executed and dies. Evil wins.</p><p>The Po dies. The next day, the Godfather is executed but remains alive because they were protected by the Devil's Advocate. However, since an evil player was executed, good wins.</p><p>The Zombuul is executed and appears to die. The Mastermind's ability does not trigger yet, because the Zombuul's execution did not make the game end. When the Zombuul is executed a second time and dies for real, the Mastermind's ability triggers, and the game continues for one more day.</p><p>There are three players alive. The Demon dies. The following day, with just two players alive, good decides not to execute. When night falls, just two players are left alive but the Demon is dead, so good wins.</p>`,
        howToRun: `<p>If the Demon is executed and dies, and the game would end, continue playing the game. <i>(Add a shroud as normal. Do not say that the Demon has died.)</i></p><p>Tomorrow, if a good player is executed, declare that the game ends and evil wins, but if an evil player or no player is executed, declare that the game ends and good wins.</p>`,
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Zombuul",
        description: `The Zombuul secretly remains alive while in the grave.`,
        intro: "<ul><li>When the Zombuul would die for any reason, they actually don't die, but the Storyteller acts as if they died. The second time the Zombuul dies, they die for real and good wins.</li><li>The seemingly dead Zombuul counts as a dead player in almost every way. The player's life token on the Town Square flips to indicate their death. The next time they vote, they lose their vote token. They cannot nominate, they may vote with the Voudon, they're not an alive neighbor for the Tea Lady, and so on. The only differences are that the game continues, the Zombuul still attacks, and the game continues if just two other players are alive.</li><li>The Zombuul only wakes at night to attack if nobody died that day. If a dead player is executed, the player can't die again, so the Zombuul would still wake.</li><li>If a drunk or poisoned Zombuul dies, good wins. If a “dead” Zombuul becomes drunk or poisoned, do not announce that the player is alive.</li></ul>",
        ability: 'Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.',
        flavor: '"I do not. Understand. Your ways. Fellow human. Show me. The dirt. Where the holy. Lay. Sleeping. I too. Must sleep. Soon."',
        examples: `<p>The Zombuul is executed and appears to die. They cannot attack tonight. A few days later, only two players appear alive on the Town Square. The good team is fairly certain that one of the dead players is the Zombuul, and the game continues until one more player dies.</p><p>Nobody died today. That night, the Zombuul attacks. The next day, the Tinker dies. That night, the Zombuul does not wake.</p>`,
        howToRun: `<p>The first time the Zombuul would die, they remain alive. Declare that they died, but do not add a shroud to the Zombuul. <i>(Flip the life token on the Town Square, as normal.)</i> From now on, the Zombuul registers as dead.</p><p>Each day, if a player dies, mark them with the <strong>DIED TODAY</strong> reminder. <i>(If the Zombuul "dies" by execution, they register as dead, so mark the Zombuul with the <strong>DIED TODAY</strong> reminder.)</i></p><p>Each night except the first, if any player is marked <strong>DIED TODAY</strong>, do not wake the Zombuul.</p><p>Each night except the first, if no player is marked <strong>DIED TODAY</strong>, wake the Zombuul. They point at any player. Put the Zombuul to sleep. The chosen player dies—mark them with the <strong>DEAD</strong> reminder.</p>`,
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Pukka",
        description: `The Pukka poisons its victims, who die at a later time.`,
        intro: "<ul><li>When the Pukka attacks, their victim is poisoned immediately. On the next night, just after the Pukka attacks again, that player dies.</li><li>Unlike other Demons, the Pukka acts during the first night.</li><li>The Exorcist prevents the Pukka from waking to poison a player. The Innkeeper prevents the Pukka from killing a poisoned player, then that player is no longer poisoned.</li><li>If the Pukka is drunk and chooses a player, that player does not become poisoned, so does not die the following night.</li><li>If the Pukka was sober when they chose a player the previous night, but is drunk at night, that player does not die. But when the Pukka sobers up, the poison resumes and kills the player at night.</li></ul>",
        ability: 'Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.',
        flavor: '"You truly have been kind welcoming me into your beautiful home. I am so sorry I accidentally scratched you. A little thing. No matter. But please, take this golden toothpick as a humble token of my regret."',
        examples: `<p>The Pukka poisons the Chambermaid. The Chambermaid gets false information. The next night, the Chambermaid dies.</p><p>The Pukka poisons the Fool. The next day, the Fool is executed and dies because they have no ability. The next night, nobody dies and the Pukka poisons the Gossip. The next night, the Pukka is drunk and tries to poison the Tinker, but does not. The next night, the Gossip dies because the Pukka is sober.</p><p>The Pukka poisons the Pacifist. The next night, the Exorcist chooses the Pukka to not wake tonight. The Pacifist dies, but the Pukka does not wake to attack tonight.</p><p>The Moonchild is executed, dies, and chooses the Courtier. That night, the Pukka chooses the Moonchild. The Courtier does not die, because the dead Moonchild is poisoned.</p>`,
        howToRun: `<p>Each night, wake the Pukka. They point at any player. Put the Pukka to sleep. The chosen player is <strong>poisoned</strong>—mark them with a <strong>POISONED</strong> reminder.</p><p>Each night except the first, the other player marked <strong>POISONED</strong> <strong>dies</strong>—mark them with a dead reminder, then remove their <strong>POISONED</strong> reminder.</p><p class="callout-box">Players that the Pukka kills are still poisoned at their time of death. If you are using characters from other editions, you may need to keep the <strong>POISONED</strong> reminder by the <strong>DEAD</strong> reminder until their death ability is resolved. For example, if the Pukka kills the Sage, the Sage may get false information due to being poisoned by the Pukka.</p>`,
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Shabaloth",
        description: "The Shabaloth eats two players per night, but may vomit one of them back up the following night.",
        intro: `<ul><li>Unlike most Demons, the Shabaloth attacks twice per night. The night after the attack, the Storyteller may decide that one of the players attacked by the Shabaloth comes back to life.</li><li>This can be an alive player that was killed, or a dead player that was attacked.</li><li>The regurgitated player regains their ability, even a "once per game" ability already used. If they had a "first night only" or "start knowing" ability, they may use it again.</li></ul>`,
        ability: 'Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.',
        flavor: '"Blarg f\'taag nm mataan! No sho gumtha m\'sik na yuuu. Fluuuuuuuuurg h-sikkkh."',
        examples: `<p>The Shabaloth attacks the Gossip, then the Gambler. The Gossip dies, but the Gambler, who was protected by the Innkeeper, remains alive.</p><p>The Shabaloth attacks the alive Courtier and the dead Exorcist. The Courtier dies. The next night, the Storyteller decides that the Exorcist becomes alive again. The Exorcist doesn't act tonight—they normally act before the Shabaloth.</p><p>The Shabaloth attacks the Tea Lady's neighbor, then the Tea Lady. The Tea Lady's neighbor, who is protected by the Tea Lady, doesn't die, but then the Tea Lady dies.</p>`,
        howToRun: `<p>Each night except the first, wake the Shabaloth. They point at any two players, one at a time. Put the Shabaloth to sleep. In the order chosen, each chosen player <strong>dies</strong>—mark them with <strong>DEAD</strong> reminders.</p><p>Each later night, just before waking the Shabaloth, you can choose one character marked with the Shabaloth's <strong>DEAD</strong> reminder, and the chosen player becomes alive again—replace the <strong>DEAD</strong> reminder with the Shabaloth's <strong>ALIVE</strong> reminder, and remove their shroud. They wake later tonight if they normally would. If they wake on the first night only, they wake now to use their ability. At dawn, after declaring which players died, declare which player is alive again. <i>(Do not say why.)</i></p><p class="callout-box">Since the Shabaloth cannot regurgitate themself—they have no ability when dead—it is best to only rarely make the Shabaloth regurgitate. Once per game, maybe twice, is usually sufficient.</p>`,
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Po",
        examples: `The Po can choose to attack nobody at night, but goes on a rampage the following night.`,
        intro: `<ul><li>The Po attacks one player per night, like many other Demons. However, if the Po chooses to attack nobody, then they may attack three players the following night.</li><li>If the Po was drunk or poisoned when they chose nobody last night, they still choose three players tonight.</li><li>A Po must choose three players when prompted to do so. They cannot choose no one again.</li><li>The Po only gets three attacks if they chose nobody. The Po does not get three attacks if they chose to attack someone the previous night, but that player did not die.</li><li>The Po doesn't act on the first night, but this night does not count as a night where the Po "chose no one."</li><li>If the Exorcist selects the Po, the Po does not act, but this night does not count as a night where the Po "chose no one." However, if the Po chose no one the night before the Exorcist chose the Po, the Po chooses three players the night after the Exorcist chose the Po, because their last choice was no one.</li></ul>`,
        ability: 'Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.',
        flavor: '"Would you like a flower? I\'m so lonely."',
        examples: `<p>On the second night, the Po attacks one player. On the third night, the Po chooses to attack nobody. On the fourth night, the Po attacks three players.</p><p>The Po chooses to attack nobody, but is drunk. The next night, the Po is poisoned. They choose three players, but none of them die. The following night, the Po is sober and healthy and attacks a player, who dies.</p><p>The Po attacks the Moonchild, then the Goon, then the Grandmother. Only the Moonchild dies, because the Po became drunk when they attacked the Goon.</p>`,
        howToRun: `<p>Each night except the first, wake the Po. They either shake their head no or point at any player. Put the Po to sleep. If they shook their head no, mark the Po with the <strong>3 ATTACKS</strong> reminder. If they chose a player, that player <strong>dies</strong>—mark them with a <strong>DEAD</strong> reminder.</p><p>If the Po wakes to act while marked <strong>3 ATTACKS</strong>, they point at any three players, one at a time. In the order chosen, each chosen player <strong>dies</strong>—mark them with <strong>DEAD</strong> reminders. Remove the <strong>3 ATTACKS</strong> reminder.</p>`,
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Clockmaker",
        description: `The Clockmaker learns the distance from the Demon to their nearest Minion.`,
        intro: "<ul><li>The Clockmaker only learns this on the first night.</li><li>The distance is the number of seated players, starting from the player next to the Demon and ending at the nearest Minion, either clockwise or counterclockwise.</li></ul>",
        ability: 'You start knowing how many steps from the Demon to its nearest Minion.',
        flavor: '"Do not disturb me. The tick must continue, for the circle is a symbol of life and contains all things - all answers - in it\'s divine machinery. I must work."',
        examples: `<p>The Fang Gu is sitting next to the Pit-Hag. The Clockmaker learns a "1".</p><p>Clockwise from the No Dashii sit the Dreamer, the Snake Charmer, and then the Evil Twin. Counterclockwise from the No Dashii sit the Mutant, the Sweetheart, the Philosopher, the Sage, and then the Witch. Because the Witch is five steps away from the Demon, and the Evil Twin is three steps away from the Demon, the Clockmaker learns a "3".</p><p>The Fang Gu neighbors two Travellers, one good and one evil. Neighboring one of these Travellers is a Cerenovus. During the first night, the Clockmaker learns a "2" because evil Travellers are not Minions.</p>`,
        howToRun: `<p>During the first night, wake the Clockmaker. Show fingers <i>(0, 1, 2 etc.)</i> equaling the distance in players from the Demon to the nearest Minion, starting with the player neighboring the Demon closer to that Minion. Put the Clockmaker to sleep.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Dreamer",
        description: "The Dreamer learns which player is which character, but is never sure.",
        intro: "<ul><li>Each night, the Dreamer chooses a player and learns two characters—one that the player is, and one that the player isn't.</li><li>The false character token depends on the chosen player's true character type. If the Dreamer chooses a player who is a Townsfolk or Outsider, the false character token is any Minion or Demon. If they choose a player who is a Minion or Demon, the false character token is a Townsfolk or Outsider.</li><li>The Dreamer may not choose themself, and may not choose a Traveller.</li></ul>",
        ability: 'Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.',
        flavor: '"I remember the Clockmaker. The sky was red and it was raining fractal triangles. There was a smell of violets and a bubbling sound. A woman with glowing eyes and a scraggly beard was hissing at the sky. Then, I awoke ."',
        examples: `<p>The Dreamer chooses a player who is the Mutant. The Dreamer learns that this player is either the Mutant or the Cerenovus.</p><p>The Dreamer chooses a player who is the Philosopher that has gained the Flowergirl ability. The Dreamer learns that this player is either the Philosopher or the Vigormortis.</p><p>Today, both the Evil Twin and the Artist claimed to be the Artist. That night, the Dreamer chooses the player who is the Evil Twin. If the Storyteller wanted to help the good team, they could show the Evil Twin and Sweetheart tokens to the Dreamer. But the Storyteller decides to help evil, so they show the Evil Twin and the Artist tokens to the Dreamer.</p><p>The Dreamer chooses a player who is the Vortox. The Dreamer's information must be false because the Vortox is in play, so the Dreamer learns that this player is either the Oracle or the No Dashii.</p>`,
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
        flavor: '"I will never forget her. Never."',
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

let isModalOpen = false;

let headerHeight = $("header").outerHeight();
$("html").css({'scroll-padding-top':`${headerHeight}px`});

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
                $(".tb-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Outsider") {
                $(".tb-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Minion") {
                $(".tb-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`)
            } else if (character.group == "Demon") {
                $(".tb-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            }
        }

        if (character.script == "bmr") {
            if (character.group == "Townsfolk") {
                $(".bmr-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Outsider") {
                $(".bmr-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Minion") {
                $(".bmr-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`)
            } else if (character.group == "Demon") {
                $(".bmr-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            }
        }

        if (character.script == "sv") {
            if (character.group == "Townsfolk") {
                $(".sv-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Outsider") {
                $(".sv-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Minion") {
                $(".sv-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`)
            } else if (character.group == "Demon") {
                $(".sv-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            }
        }

        if (character.script == "exp") {
            if (character.group == "Townsfolk") {
                $(".exp-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Outsider") {
                $(".exp-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.group == "Minion") {
                $(".exp-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`)
            } else if (character.group == "Demon") {
                $(".exp-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            }
        }

        if (character.group == "Traveller") {
            if (character.script == "tb") {
                $(".trav-tb").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.script == "bmr") {
                $(".trav-bmr").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.script == "sv") {
                $(".trav-sv").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            } else if (character.script == "exp") {
                $(".trav-exp").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
            }
        }

        if (character.script == "fabled") {
            $(".fabled-all").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="The icon for the ${originalName} character">`);
        }
    })
}

$(".all .token").click(function() {
    // $(".img-flavor-container .token").removeClass("reverse-spin");
    // $(".img-flavor-container .token").removeClass("spin");
    // $(".flavor").css({'opacity':'0'});

    //resets modal position
    setTimeout( () => {
        let modal = document.querySelector("#myModal");
        modal.scrollTop = 0;
    }, 1);

    //stops page scroll
    $("html").addClass("modal-open");

    let ability;
    let intro;
    let flavor;
    let examples;
    let howToRun;
    let group;
    let orignalName = $(this).attr("data-name");
    let altName = orignalName;
    characters.forEach(character => {
        if (character.name == orignalName) {
            ability = character.ability;
            intro = character.intro;
            flavor = character.flavor;
            examples = character.examples;
            howToRun = character.howToRun;
            group = character.group;
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
    $(".img-flavor-container .token").attr("src",`./img/${name}.png`);
    $(".img-flavor-container .token").attr("alt",`The icon for the ${altName} character`);

    if (group == "Townsfolk" || group == "Outsider") {
        $(".modal-content h2").css({'color':'#0365AB'});
        $(".modal-content h3").css({'color':'#0365AB'});
    } else if (group == "Minion" || group == "Demon") {
        $(".modal-content h2").css({'color':'darkred'});
        $(".modal-content h3").css({'color':'darkred'});
    } else {
        $(".modal-content h2").css({'color':'black'});
        $(".modal-content h3").css({'color':'black'});
    }

    // $(".img-flavor-container .token").attr("src",`./img/blank.png`);
    // $(".img-flavor-container .token").addClass("spin");
    // setTimeout( () =>{
    //     $(".img-flavor-container .token").removeClass("spin");
    //     $(".img-flavor-container .token").attr("src", `./img/${name}.png`);
    //     $(".img-flavor-container .token").addClass("reverse-spin");
    // }, 500);

    // setTimeout( () => {
    //     $(".flavor").css({'opacity':'100%'});
    // }, 1000);

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
// btn.onclick = function() {
//   modal.style.display = "block";
//   isModalOpen = true;
// }

$('.token').click(function(){
	modal.style.display = "block";
    isModalOpen = true;
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("html").removeClass("modal-open");
  isModalOpen = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $("html").removeClass("modal-open");
    isModalOpen = false;
  }
}

$(document).keyup(function(e) {
    if (e.key === "Escape" && isModalOpen) {
        modal.style.display = "none";
        $("html").removeClass("modal-open");
        isModalOpen = false;
    }
});