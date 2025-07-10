let characters = [
    {
        name: "Washerwoman",
        description: "The Washerwoman learns that a specific Townsfolk character is in play, but not who is playing them.",
        intro: "<ul><li>During the first night, the Washerwoman is woken, shown two players, and learns the character of one of them.</li><li>They learn this only once and then learn nothing more.</li></ul>",
        ability: 'You start knowing that 1 of 2 players is a particular Townsfolk.',
        flavor: '"Bloodstains on a dinner jacket? No, this is cooking sherry. How careless."',
        examples: "<p>Evin is the Chef, and Amy is the Ravenkeeper. The Washerwoman learns that either Evin or Amy is the Chef.</p><p>Julian is the Imp, and Alex is the Virgin. The Washerwoman learns that either Julian or Alex is the Virgin.</p><p>Marianna is the Spy, and Sarah is the Scarlet Woman. The Washerwoman learns that one of them is the Ravenkeeper. <i>(This happens because the Spy is registering as a Townsfolk—in this case, the Ravenkeeper)</i></p>",
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
        examples: "<p style='margin-top: 0;'>Benjamin is the Saint, and Filip is the Baron. The Librarian learns that either Benjamin or Filip is the Saint.</p><p>There are no Outsiders in this game. The Librarian learns a '0'.</p><p>Abdallah is the Drunk, who thinks they are the Monk, and Douglas is the Undertaker. The Librarian learns that either Abdallah or Douglas is the Drunk. <i>(This happens because the Librarian learns the true character. The Drunk is Abdallah's true character, not the Monk.)</i></p>",
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
        examples: "<p>Amy is the Baron, and Julian is the Mayor. The Investigator learns that either Amy or Julian is the Baron.</p><p>Angelus is the Spy, and Lewis is the Poisoner. The Investigator learns that either Angelus or Lewis is the Spy.</p><p>Brianna is the Recluse, and Marianna is the Imp. The Investigator learns that either Brianna or Marianna is the Poisoner. <i>(This happens because the Recluse is registering as a Minion—in this case, the Poisoner.)</i></p>",
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
        howToRun: '<p>During the first night, wake the Chef. Show the Chef fingers <i>(0, 1, 2, etc.)</i> equaling the number of pairs of neighboring evil players. Put the Chef to sleep.</p>',
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
        howToRun: "Each night, wake the Empath. Show them fingers <i>(0, 1, or 2)</i> equaling the number of evil players neighboring the Empath. Put the Empath to sleep.",
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
        howToRun: `<p>While preparing the first night, put the Fortune Teller's <strong>RED HERRING</strong> reminder token by any good character token, marking that player as the Red Herring.</p><p>Each night, wake the Fortune Teller. The Fortune Teller points at any two players. If either chosen player is a Demon or the Red Herring, nod your head yes. Otherwise, shake your head no. Put the Fortune Teller to sleep.</p><p class="modal__callout-box">In smaller games, making the Fortune Teller their own Red Herring is sometimes advised, as the Fortune Teller gets more information that way.</p>`,
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
        howToRun: `<p>If a player dies by execution, put the Undertaker's <strong>DIED TODAY</strong> reminder token by the dead player's character token.</p><p>Each night except the first, if any player died by execution today, wake the Undertaker. Show the character token marked <strong>DIED TODAY</strong> to the Undertaker. Put the Undertaker to sleep. Remove the Undertaker's reminder token when convenient.</p><p class="modal__callout-box">In Trouble Brewing, there can only be one execution per day, and every execution causes a player to die. In other editions, there may be more than one execution per day (in which case the Storyteller chooses which character to show the Undertaker) or the execution does not cause a death (in which case the Undertaker learns nothing).</p>`,
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
        howToRun: `<p>Each night except the first, wake the Monk. The Monk points at any player except themself. <i>(If the Monk points at themself, shake your head no and prompt them to point at another player.)</i> Put the Monk to sleep. Put the Monk's <strong>SAFE</strong> reminder token by the chosen player's character token.</p><p>If the Demon attacks the player marked <strong>SAFE</strong>, the player remains alive. <i>(Do not mark them with the Demon's <strong>DEAD</strong> reminder token or add a shroud as you normally would.)</i> At dawn, declare that no one died at night. </i>(Do not say why.)</i></p><p>At dawn, remove the <strong>SAFE</strong> reminder token.</p><p class="modal__callout-box">In other editions, Demons may have abilities other than killing. The Monk's protection also prevents all other harmful effects of the Demon's ability, such as poisoning or turning the protected player evil.</p>`,
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
        howToRun: `<p>If the Ravenkeeper died tonight, wake them. They point at any player. Show the chosen player's character token to the Ravenkeeper. Put the Ravenkeeper to sleep.</p><p class="modal__callout-box">We advise you to discourage or even ban players from talking about what they are doing at night as they are doing it.</p>`,
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
        howToRun: `<p>During the day, the Slayer can declare that they wish to use their ability. If so, the Slayer points at any player. If the chosen player is an alive Demon, declare that the chosen player <strong>dies</strong>—put a shroud on their character token in the Grimoire. If the chosen player is not an alive Demon, say "Nothing happens." Either way, <strong>the Slayer loses their ability</strong>—put the Slayer's <strong>NO ABILITY</strong> reminder token by the Slayer token.</p><p class="modal__callout-box">If a player is bluffing as the Slayer and declares they wish to use their ability, act as if they were indeed the Slayer—allow time for discussion, let them make the decision, and act like you're fiddling with tokens in your Grimoire, then say "Nothing happens."</p><p class="modal__callout-box">When the Slayer declares that they wish to use their ability, give the group a minute or two to discuss who the Slayer should choose. This allows the group to feel responsible for the win (or the loss!), but the Slayer always makes the final choice.</p></p>`,
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
        howToRun: `<p>During the night, if the Demon attacks the Soldier, the Soldier remains alive. <i>(At dawn, declare that no one died at night.)</i></p><p class="modal__callout-box">In other editions, Demons may have abilities other than killing. The Soldier is also protected from all other harmful effects of the Demon's ability, such as poisoning or turning the Soldier evil.</p>`,
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
        howToRun: `<p>During the night, if the Mayor would die, you choose if the Mayor actually dies, or if the Mayor remains alive and another character <strong>dies</strong> instead—put the Demon's <strong>DEAD</strong> reminder token by that character token instead of the Mayor, and put a shroud on that character token instead of the Mayor.</p><p>At dawn, declare that the player marked <strong>DEAD</strong> died at night. (Do not say how they died.)</p><p>At dusk, if exactly three players are alive and no player was executed today, declare that the game ends and good wins.</p><p class="modal__callout-box">We recommend you keep the Mayor alive until the final day, since it is most fun for the players that way. On rare occasions, if the group is overwhelmingly convinced early in the game that the Mayor is the Mayor, let the Mayor die so that evil has a chance to win.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Butler",
        description: "The Butler may only vote when their Master votes.",
        intro: "<ul><li>Each night, the Butler chooses a player to be their Master. This may be the same player as last night or a different one.</li><li>If the Master has their hand raised to vote, or if the Master's vote has already been counted, the Butler may raise their hand to vote.</li><li>If the Master has their hand down, signaling that they are not voting, or if the Master lowers their hand before their vote is tallied, the Butler must lower their hand too.</li><li>It is not the Storyteller's responsibility to monitor the Butler. They're responsible for their own voting. Deliberately voting when they shouldn't is considered cheating.</li><li>Because exiles are never affected by abilities, the Butler can vote freely for an exile.</li><li>Dead players may only raise their hand to vote if they have a vote token. If the Butler chooses a dead player as their Master, this still applies.</li><li>The Butler is never forced to vote.</li><li>The Butler's vote may be tallied by the Storyteller before or after their Master's. Seating position is not important.</li></ul>",
        ability: 'Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.',
        flavor: '"Yes, sir...<br>No, sir...<br>Certainly, sir."',
        examples: `<p>The Butler chooses Abdallah to be their Master. Tomorrow, if Abdallah raises his hand to vote on an execution, then the Butler may too. If not, the Butler may not raise their hand.</p><p>A nomination is in progress. The Butler and their Master both have their hands raised to vote. As the Storyteller is counting votes, the Master lowers their hand at the last second. The Butler must lower their hand immediately.</p><p>The Butler is dead. Because dead players have no ability, the Butler may vote with their vote token at any time.</p>`,
        howToRun: `<p>Each night, wake the Butler. They point at any player. Mark this player with the <strong>MASTER</strong> reminder token. Put the Butler to sleep.</p><p>During a nomination, the Butler may only have their hand raised to vote if the Master has their hand raised to vote or if the Master's vote has already been counted.</p><p class="modal__callout-box">If the Butler accidentally votes illegally, tally the Butler's vote anyway. If you don't, the total will be less than it should be, and all players will know which player is the Butler, which is unfair for the evil team. Mistakes happen. Just play on and have a private chat later.</p>`,
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
        howToRun: `<p>If the Saint dies by execution, declare that the game ends and evil wins.</p><p class="modal__callout-box">The Saint's ability has the strange phrase "your team loses." In Trouble Brewing, this will always mean "evil wins" because the Saint is always good. In other editions, it is possible for characters to change alignment. If the evil Saint is executed, good wins.</p>`,
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
        howToRun: `<p>Each night, wake the Spy and show them the Grimoire for as long as they need. Put the Spy to sleep.</p><p>Each time the Spy is targeted by an ability that detects or affects good characters, choose what character and alignment the Spy registers as. <i>(Do whatever is appropriate, such as showing a good character token, nodding, giving finger signals, or allowing an ability to work that would normally only affect good, Townsfolk, or Outsider players.)</i></p><p class="modal__callout-box">Remember to keep your Grimoire tidy and show it to the Spy in the correct orientation, so the Spy can easily see who is who.</p>`,
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
        howToRun: `<p>If the Demon dies and there were five or more alive players immediately before the Demon died, replace the Scarlet Woman token with a spare Imp token, changing that player's character from the Scarlet Woman into the Imp. <i>(They are now the Demon and have the Imp's ability. If they die, good wins.)</i></p><p>That night, wake the new Imp, show them the <strong>YOU ARE</strong> info token, then show them the Imp token.</p><p class="modal__callout-box">In Trouble Brewing, there is only one Demon—the Imp. In other editions, there are multiple possible Demons. If the Scarlet Woman becomes the Demon, they become the same type of Demon that died, and they gain this Demon's ability. When this happens, mark the Scarlet Woman with the <strong>IS THE DEMON</strong> reminder and refer to that Demon's "How to Run" instructions.</p>`,
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
        howToRun: `<p>Each night except the first, wake the Imp. The Imp points at any player. Put the Imp to sleep. The chosen player <strong>dies</strong>—put the Imp's <strong>DEAD</strong> reminder by the chosen player's character token in the Grimoire and put a shroud on it.</p><p>If the Imp killed themself at night, choose an alive Minion and replace their character token with a spare Imp token, changing their character to the Imp. Wake the new Imp, show them the <strong>YOU ARE</strong> info token, then show them the Imp token. Put the new Imp to sleep.</p><p>At dawn, declare which player died at night. <i>(Do not say how they died.)</i></p><p class="modal__callout-box">If the Imp attacks a dead player at night, let them do so. Whenever a character's ability says "choose a player," that means that any player—alive or dead—can be chosen. The Imp may be planning on bluffing as the Soldier, and this kind of thing helps their bluff look stronger.</p>`,
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
        howToRun: `<p>Each night except the first, wake the Exorcist. They point at any player. Mark the chosen player's character token with the <strong>CHOSEN</strong> reminder. Put the Exorcist to sleep.</p><p>If the Exorcist chose the Demon, wake the Demon. Show them the <strong>THIS CHARACTER SELECTED YOU</strong> info token and the Exorcist token, then point at the Exorcist player. Put the Demon to sleep. Later tonight, do not wake the Demon.</p><p class="modal__callout-box">A Demon chosen by the Exorcist will not wake to use their Demon ability, but will still wake if they need to due to other characters' abilities. This may be relevant if using the Exorcist with characters from other editions.</p>`,
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
        howToRun: `<p>Each day, if the Gossip makes a definite, true public statement, put the Gossip's <strong>DEAD</strong> reminder in the center of the left side of the Grimoire as a reminder to yourself to place it tonight.</p><p>Each night except the first, if the Gossip made a definite, true public statement today, you choose any player. The chosen player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder.</p><p class="modal__callout-box">When choosing a player to die due to the Gossip ability, we recommend that you choose a character that will actually die, not one protected from death by an ability (like the Fool or Tea Lady). The Gossip gains knowledge when their statement caused a death. This is more helpful to the good team, and more fun for everyone.</p>`,
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
        howToRun: `<p>Each night, wake the Courtier. They either shake their head no or point at any character icon on their character sheet. Put the Courtier to sleep.</p><p>If the Courtier chose a character icon and that character is in play, the player of the chosen character becomes <strong>drunk</strong> for three nights and three days. Tonight, mark them with the Courtier's <strong>DRUNK 1</strong> reminder. The next night, replace the <strong>DRUNK 1</strong> reminder with the <strong>DRUNK 2</strong> reminder. The next night, replace the <strong>DRUNK 2</strong> reminder with the <strong>DRUNK 3</strong> reminder. At dusk on the next night, remove the <strong>DRUNK 3</strong> reminder, and <strong>the Courtier loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet.</p><p>After the Courtier chooses a character to make drunk, do not wake the Courtier for the rest of the game.</p><p class="modal__callout-box">In other editions, there can be multiple copies of the same character in play. The Courtier only makes one of them drunk.</p>`,
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
        howToRun: `<p>If a good character is executed, declare either that they <strong>die</strong> or they remain alive. <i>(Do not say why.)</i> Then, begin the night phase. <i>(Whether the player lived or died, this was the one execution for the day.)</i></p><p class="modal__callout-box">Triggering the Pacifist ability once per game is usually about right. You can trigger it more if you feel it is appropriate. On rare occasions, to make the Pacifist look suspicious, you can never trigger it.</p>`,
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
        howToRun: `<p>While setting up the game, put the Lunatic and Demon tokens in the bag. Once all tokens have been returned to you, swap the positions of the Lunatic and Demon tokens in the Grimoire.</p><p>During the first night, wake the Lunatic and act as if they are the Demon. Show them the <strong>THESE ARE YOUR MINIONS</strong> info token and point to a number of players equaling the number of Minions in play. <i>(These can be any players, whether or not they are Minions.)</i> Show any three good character tokens as bluffs. <i>(These can even be characters that are in play.)</i></p><p>During the first night, wake the Demon. Show them the <strong>YOU ARE</strong> info token, then their Demon token. <i>(This tells them they are the real Demon.)</i> Show them the <strong>THIS PLAYER IS</strong> info token, then the Lunatic token, then point at the Lunatic player.</p><p>Each night, before the Demon wakes to attack, wake the Lunatic to act as if they were that Demon. Put a <strong>CHOSEN</strong> reminder on each player they chose, then put them to sleep. Wake the real Demon, point at the Lunatic, show the Lunatic token to the real Demon, and point at the players that the Lunatic chose. Then the Demon acts as normal.</p><p class="modal__callout-box">You can make the Lunatic think they are a different Demon than the in-play Demon by instead putting two Demon tokens in the bag, then replacing one of them with the Lunatic token once they are in the Grimoire.</p>`,
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
        howToRun: `<p>At any time, you may decide that the Tinker <strong>dies</strong>. If this is during the day, immediately declare that the Tinker has died. If this is during the night, mark the Tinker with the <strong>DEAD</strong> reminder and wait until dawn to declare which players died during the night. <i>(Do not say how.)</i></p><p class="modal__callout-box">While you may kill the Tinker out of the blue during the day, it is most interesting if the Tinker dies at night, because the players will be wondering whether the Tinker died due to their ability or for some other reason.</p><p class="modal__callout-box">You can choose to never kill the Tinker. This makes the Tinker look really suspicious.</p><p class="modal__callout-box">We recommend that you never kill the Tinker when it would end the game. Players should win or lose by their own efforts, not Storyteller fiat.</p>`,
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
        howToRun: `<p>When you declare that the Moonchild's player has died, the Moonchild chooses any alive player. If the chosen player is good, mark their character token with the <strong>DEAD</strong> reminder. Tonight, the player marked with the Moonchild's <strong>DEAD</strong> reminder <strong>dies</strong>.</p><p class="modal__callout-box">If the Moonchild doesn't realize that they must choose a player when they die, privately remind them. New players may not understand how their character works.</p>`,
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
        howToRun: `<p>Each night, wake the Pukka. They point at any player. Put the Pukka to sleep. The chosen player is <strong>poisoned</strong>—mark them with a <strong>POISONED</strong> reminder.</p><p>Each night except the first, the other player marked <strong>POISONED</strong> <strong>dies</strong>—mark them with a dead reminder, then remove their <strong>POISONED</strong> reminder.</p><p class="modal__callout-box">Players that the Pukka kills are still poisoned at their time of death. If you are using characters from other editions, you may need to keep the <strong>POISONED</strong> reminder by the <strong>DEAD</strong> reminder until their death ability is resolved. For example, if the Pukka kills the Sage, the Sage may get false information due to being poisoned by the Pukka.</p>`,
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
        howToRun: `<p>Each night except the first, wake the Shabaloth. They point at any two players, one at a time. Put the Shabaloth to sleep. In the order chosen, each chosen player <strong>dies</strong>—mark them with <strong>DEAD</strong> reminders.</p><p>Each later night, just before waking the Shabaloth, you can choose one character marked with the Shabaloth's <strong>DEAD</strong> reminder, and the chosen player becomes alive again—replace the <strong>DEAD</strong> reminder with the Shabaloth's <strong>ALIVE</strong> reminder, and remove their shroud. They wake later tonight if they normally would. If they wake on the first night only, they wake now to use their ability. At dawn, after declaring which players died, declare which player is alive again. <i>(Do not say why.)</i></p><p class="modal__callout-box">Since the Shabaloth cannot regurgitate themself—they have no ability when dead—it is best to only rarely make the Shabaloth regurgitate. Once per game, maybe twice, is usually sufficient.</p>`,
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
        flavor: '"I remember the Clockmaker. The sky was red and it was raining fractal triangles. There was a smell of violets and a bubbling sound. A woman with glowing eyes and a scraggly beard was hissing at the sky. Then, I awoke."',
        examples: `<p>The Dreamer chooses a player who is the Mutant. The Dreamer learns that this player is either the Mutant or the Cerenovus.</p><p>The Dreamer chooses a player who is the Philosopher that has gained the Flowergirl ability. The Dreamer learns that this player is either the Philosopher or the Vigormortis.</p><p>Today, both the Evil Twin and the Artist claimed to be the Artist. That night, the Dreamer chooses the player who is the Evil Twin. If the Storyteller wanted to help the good team, they could show the Evil Twin and Sweetheart tokens to the Dreamer. But the Storyteller decides to help evil, so they show the Evil Twin and the Artist tokens to the Dreamer.</p><p>The Dreamer chooses a player who is the Vortox. The Dreamer's information must be false because the Vortox is in play, so the Dreamer learns that this player is either the Oracle or the No Dashii.</p>`,
        howToRun: `<p>Each night, wake the Dreamer. They point at any player. If the chosen player's character is a Townsfolk or Outsider, show their character token and any Minion or Demon token to the Dreamer. If the chosen player's character is a Minion or Demon, show their character token and any Townsfolk or Outsider token to the Dreamer. Then, put the Dreamer to sleep.</p><p class="modal__callout-box">If the Dreamer chooses an evil player, you can help the evil team if you show the Dreamer the good character that this evil player is bluffing as, or if you show a more secretive character such as the Snake Charmer, Sage, Mutant, or Klutz.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Snake Charmer",
        description: "The Snake Charmer learns which players are not the Demon…but becomes the Demon if they get too greedy or too bold.",
        intro: "<ul><li>Each night, they choose a player. If that player is not the Demon, nothing happens. If they are the Demon, the Snake Charmer becomes that Demon and turns evil, and the Demon becomes good and poisoned permanently.</li><li>If the Philosopher has the Snake Charmer ability and becomes the Demon, the Demon becomes a poisoned Philosopher.</li></ul>",
        ability: 'Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.',
        flavor: '"Effendi... I am but a humble man, but my pipe is golden and a single tune will tame the wildest djinn, Inshallah. They say that greed hangs more men than rope. But not I, Effendi... not I."',
        examples: `<p>The Snake Charmer chooses a player who is the Pit-Hag, so nothing happens. The next night, the Snake Charmer chooses themself, so nothing happens.</p><p>The Snake Charmer chooses a player who is the Vigormortis. The Snake Charmer immediately becomes the evil Vigormortis, and the Vigormortis becomes the good Snake Charmer and is poisoned.</p><p>The Pit-Hag turns themself into the Snake Charmer. Then, the Snake Charmer—formerly the Pit-Hag—chooses a player who is the Fang Gu. The Snake Charmer becomes the Fang Gu, and the Fang Gu becomes the poisoned Snake Charmer. Both remain evil.</p>`,
        howToRun: `<p>Each night, wake the Snake Charmer. They point at any player.</p><p>If that player is not the Demon, nothing happens. Put the Snake Charmer to sleep.</p><p>If that player is the Demon, the old Snake Charmer changes into the new <i>(evil)</i> Demon, and the old Demon changes into the new <i>(good)</i> Snake Charmer—swap the Snake Charmer token and the Demon's token. The new Snake Charmer is <strong>poisoned</strong>—mark them with the <strong>POISONED</strong> reminder. Wake the new Demon and show them the <strong>YOU ARE</strong> info token, a thumbs-down, the <strong>YOU ARE</strong> token, then the Demon's token. <i>(This shows they are now evil and the Demon.)</i> Put the new Demon to sleep. Wake the new Snake Charmer and show them the <strong>YOU ARE</strong> info token, a thumbs-up, the <strong>YOU ARE</strong> info token, then the Snake Charmer token. <i>(This shows they are now good and the Snake Charmer.)</i> Put the new Snake Charmer to sleep.</p><p class="modal__callout-box">In the strange situation that the Snake Charmer is evil, or the Demon good, swap their alignments as appropriate.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Mathematician",
        description: 'The Mathematician knows how many things have "gone wrong" since dawn today.',
        intro: "<ul><li>When an ability does not work in the intended way due to another character's interference, the Mathematician will learn that it happened. They'll learn that something went wrong if a piece of information was false but was supposed to be true, or if an ability should have worked but didn't, due to another character.</li><li>The Mathematician does not learn which players this happened to, only how many times it happened.</li><li>The Mathematician does not detect their own ability failing.</li><li>The Mathematician does not detect drunkenness or poisoning itself, but does detect when drunk or poisoned players' abilities did not work as intended. The Recluse registering as evil to the Chef, and the poisoned Soldier dying from the Imp's attack, would each be detected. The poisoned Empath getting true information would not.</li></ul>",
        ability: 'Each night, you learn how many players\' abilities worked abnormally (since dawn) due to another character\'s ability.',
        flavor: '"Any consistent formal system x, within which a certain amount of elementary arithmetic can be carried out is incomplete; that is, there are statements of the language of x which can neither be proved nor disproved in x. Ergo, you are drunk."',
        examples: `<p>The poisoned Oracle learns that two dead players are evil, but actually three dead players are evil. All other abilities worked normally. The Mathematician learns a "1".</p><p>The poisoned Snake Charmer chooses a Townsfolk player and nothing happens. The drunk Juggler gets correct information. The poisoned Savant learns two pieces of true information. Later that night, the Mathematician learns a "1" because the Snake Charmer's and Juggler's abilities worked as normal, while one of the Savant's facts was true when it should have been false.</p><p>A Vortox is in play. Five good players got false information. The Witch is drunk, and when the cursed player made a nomination, they did not die. Even though six abilities worked abnormally, the Mathematician learns a "3" due to the Vortox's ability.</p>`,
        howToRun: `<p>Each time a character's ability works abnormally due to another character's ability, mark them with an <strong>ABNORMAL</strong> reminder.</p><p>Each night, wake the Mathematician. Show fingers <i>(0, 1, 2, etc.)</i> equaling the number of characters with <strong>ABNORMAL</strong> reminders. Put the Mathematician to sleep. Remove all <strong>ABNORMAL</strong> reminders.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Flowergirl",
        description: "The Flowergirl knows if the Demon voted or not.",
        intro: `<ul><li>A Demon's vote counts whether or not the nominee was executed.</li><li>The Flowergirl does not detect if the Demon raised their hand for other reasons, such as when the players "vote" on what to order for dinner, or when the players raise their hand to exile a Traveller.</li><li>If the Demon changes players after the original Demon voted but before the Flowergirl wakes to learn their information, the Flowergirl detects the original Demon.</li><li>If there are two (or more!) Demons, even dead Demons, the Flowergirl detects if any of them voted. If even one Demon voted, the Flowergirl learns a "yes".</li></ul>`,
        ability: 'Each night*, you learn if a Demon voted today.',
        flavor: '"Yesterday\'s violets have withered and died, but today my poppies bloom."',
        examples: `<p>There was one nomination today. Lots of players voted and the player was executed, but the Demon did not vote. That night, the Flowergirl learns a "no".</p><p>There were three nominations today. The Demon voted during the second nomination. Nobody was executed. That night, the Flowergirl learns a "yes".</p><p>There were no nominations today. A Traveller was exiled, and all players raised their hand to support the exile. That night, the Flowergirl learns a "no" because supporting an exile is not voting.</p>`,
        howToRun: `<p>Each dawn, mark the Flowergirl with the <strong>DEMON NOT VOTED</strong> reminder, and remove the <strong>DEMON VOTED</strong> reminder, if any.</p><p>Each day, if the Demon votes for any execution, replace the <strong>DEMON NOT VOTED</strong> reminder with the <strong>DEMON VOTED</strong> reminder.</p><p>Each night except the first, wake the Flowergirl. If the Flowergirl is marked <strong>DEMON NOT VOTED</strong>, shake your head no. If the Flowergirl is marked <strong>DEMON VOTED</strong>, nod your head yes. Then, put the Flowergirl to sleep.</p><p class="modal__callout-box">If you forget whether the Demon voted or not, wake the Demon at night and ask by showing them the <strong>DID YOU VOTE TODAY?</strong> info token. They must answer honestly, then go to sleep.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Town Crier",
        description: `The Town Crier knows when Minions nominate.`,
        intro: `<ul><li>Each night, the Town Crier learns either a "yes" or a "no".</li><li>They do not learn which players are Minions or how many Minions made nominations, just whether or not any Minions made nominations today.</li></ul>`,
        ability: 'Each night*, you learn if a Minion nominated today.',
        flavor: '"Hear ye! Hear ye! Witchcraft in the labyrinth! Genius savant reveals all! Town in danger! Hear Ye!"',
        examples: `<p>Today, one Townsfolk player made a nomination. That night, the Town Crier learns a "no".</p><p>Today, four players made a nomination. Two of them were Minions. Many players voted, but there was no execution. That night, the Town Crier learns a "yes".</p><p>A Minion exiled a Traveller. That night, the Town Crier learns a "no" because supporting an exile is not a nomination.</p>`,
        howToRun: `<p>Each dawn, mark the Town Crier with the <strong>MINIONS NOT NOMINATED</strong> reminder, and remove the <strong>MINION NOMINATED</strong> reminder, if any.</p><p>Each day, if any Minion makes a nomination, replace the <strong>MINIONS NOT NOMINATED</strong> reminder with the <strong>MINION NOMINATED</strong> reminder.</p><p>Each night except the first, wake the Town Crier. If the Town Crier is marked <strong>MINIONS NOT NOMINATED</strong>, shake your head no. If the Town Crier is marked <strong>MINION NOMINATED</strong>, nod your head yes. Then, put the Town Crier to sleep. Remove the <strong>MINION NOMINATED</strong> reminder, if any.</p><p class="modal__callout-box">If you forget whether a Minion made a nomination or not, wake each Minion at night and ask by showing them the <strong>DID YOU NOMINATE TODAY?</strong> info token. They must answer honestly, then go to sleep.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Oracle",
        description: "The Oracle knows how many dead players are evil.",
        intro: "<ul><li>Because the Oracle acts after the Demon attacks each night, the Oracle's info refers to the players that are dead when dawn breaks and all players open their eyes.</li><li>The Oracle detects dead Minions and Demons, but also any other players that are evil, such as evil Travellers, or Townsfolk or Outsiders that have been turned evil.</li><li>When counting the number of dead players, remember to count Townsfolk and Outsider tokens that are upside-down, which means their alignment is the opposite of what is printed.</li></ul>",
        ability: 'Each night*, you learn how many dead players are evil.',
        flavor: '"Only the chosen may gaze beyond the veil. The dead are restless, and they point in silence toward the icy north."',
        examples: `<p>During the first day, the Flowergirl is executed. That night, the Demon kills the Juggler. The Oracle wakes and learns a "0" because all dead players are good.</p><p>Halfway through the game, seven players are dead. Five of them are good and two of them are evil. During the day, an evil Traveller is exiled. That night, the Demon kills one of their Minions. The Oracle wakes and learns a "4" because four dead players are evil.</p>`,
        howToRun: `<p>Each night except the first, wake the Oracle. Show fingers <i>(0, 1, 2, etc.)</i> equaling the number of dead evil players. Then, put the Oracle to sleep.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Savant",
        description: "The Savant gets amazing information that is different every day and every game, but half of it is false.",
        intro: "<ul><li>Each day, the Storyteller chooses two pieces of information to give the Savant...so get creative! One must be true, and one must be false, and the Savant won't know which is which.</li><li>It is up to the Savant to talk with the Storyteller, not the other way around. This isn't a public conversation, and the group can't listen in. It's private.</li><li>The Savant can choose to not visit the Storyteller if they wish.</li><li>A drunk or poisoned Savant might get two pieces of true information or two pieces of false information.</li></ul>",
        ability: 'Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.',
        flavor: '"Seventy-two matchsticks on the floor... the sun sets early but the moon is unchanged... a torn piece of cloth... evil in the manor house... three by three... the one we trusted is not what he seems... green light means magnesium... residue, but the pattern is wrong... Seventy-two matchsticks on the floor..."',
        examples: `<p>The Savant learns that "All players wearing glasses are good" and that "One player sitting on the black couch is a Minion."</p><p>The Savant learns that "A Snake Charmer is in play" and that "Everybody got true information last night."</p><p>The Savant learns that "The Demon is a woman" and that "Ben is evil."</p><p>The Savant learns that "Evin and Amy are the same alignment" and "There is one Outsider in play."</p>`,
        howToRun: `<p>Once per day, if the Savant requests a private chat with you, take them away from the circle so you cannot be overheard. Whisper two pieces of information, one true and one false, to the Savant. <i>(If you cannot think of two straight away, either take your time or ask them to come back in a few minutes.)</i></p><p class="modal__callout-box">Keep the information you give helpful and related to the game. Avoid saying who exactly the Demon is, or it could be a very short game. If you need help on choosing what to say, give information similar to what Townsfolk abilities would provide.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Seamstress",
        description: "The Seamstress learns whether two players are on the same team as each other.",
        intro: "<ul><li>They only get this information once per game, so they had best choose wisely when and who.</li><li>They may choose alive or dead players or even Travellers.</li></ul>",
        ability: 'Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.',
        flavor: '"Did you hear that stranger in the cashmere coat put the word on our young Belle? And she said yes? Well, that\'s nothing compared to what Harry and that juggler got up to at the fair! The things I could say if I was a tattletale... my, yes."',
        examples: `<p>During the first night, the Seamstress chooses two players, who are the Barber and the Clockmaker. Because they are both good, the Seamstress learns a "yes".</p><p>During the first three nights, the Seamstress chooses not to use their ability. During the fourth night, they choose two players, who are the Fang Gu and the Sweetheart. The Seamstress learns a "no".</p><p>The Pit-Hag turns the Mathematician into the Witch, who remains good. Later that night, the Seamstress chooses two players, who are the Witch and the Town Crier. The Seamstress learns a "yes" because they are both good.</p>`,
        howToRun: `<p>Each night, wake the Seamstress. They either shake their head no or point at any two players except themself.</p><p>If they shake their head no, nothing happens. Put the Seamstress to sleep.</p><p>If they point at two players, either nod your head yes <i>(to indicate these players have the same alignment)</i> or shake your head no <i>(to indicate these players do not have the same alignment)</i>. Put the Seamstress to sleep. <strong>The Seamstress loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Philosopher",
        description: "The Philosopher decides their own ability.",
        intro: "<ul><li>They can do this once per game. When they do so, they gain that character's ability. They do not become that character.</li><li>They may want to wait a while to choose. If the Philosopher chooses a character that is already in play, the player of that character becomes drunk. If the Philosopher then dies or becomes drunk or poisoned, the player they are making drunk becomes sober again.</li><li>If the Philosopher chose a character that was not in play at the time but is in play now, that character is drunk.</li><li>If the Philosopher gains an ability that works at night, they wake when that character would wake. If this ability is used on the first night only, they use it tonight.</li><li>If the Philosopher regains their ability via the Bone Collector, or uses their ability twice via the Barista, the Philosopher may choose a new ability, or the same ability as before.</li><li>If the Philosopher's ability works while dead, such as the Klutz's, it works if the Philosopher is dead.</li></ul>",
        ability: 'Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.',
        flavor: '"If anything is real, beer is real. Drink, for tomorrow we may die."',
        examples: `<p>The Philosopher chooses to gain the Dreamer ability. From now on, they act when the Dreamer normally acts.</p><p>During the third night, the Philosopher chooses to gain the Clockmaker ability. That night, they learn the distance from the Demon to the nearest Minion.</p><p>The Philosopher chooses to gain the Artist ability, but there is already an Artist in play. The Artist player becomes drunk. Later, the Philosopher dies, so the Artist player becomes sober again. <i>(They would also become sober if the Philosopher became drunk or turned into a different character.)</i></p>`,
        howToRun: `<p>Each night, wake the Philosopher. They either shake their head no or point at any Townsfolk icon or any Outsider icon on their character sheet. Put the Philosopher to sleep.</p><p>If they pointed to an icon of a character not in play, swap the Philosopher token with the chosen character token and mark them with the <strong>IS THE PHILOSOPHER</strong> reminder.</p><p>If they pointed to an icon of a character in play, the player of the chosen character becomes <strong>drunk</strong>—mark them with the <strong>DRUNK</strong> reminder. <i>(You can now use the duplicated character's reminders for the Philosopher)</i>. If the Philosopher dies, the player made drunk by the Philosopher becomes <strong>sober</strong>—remove the <strong>DRUNK</strong> reminder.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Artist",
        description: "The Artist may ask any one question of the Storyteller.",
        intro: `<ul><li>The question may deal with anything at all, phrased in any way they want. The Storyteller honestly answers "yes," "no," or "I don't know."</li><li>It is up to the Artist to talk with the Storyteller, not the other way around. This isn't a public conversation, and the group can't listen in. It's private.</li></ul>`,
        ability: 'Once per game, during the day, privately ask the Storyteller any yes/no question.',
        flavor: '"Mon Dieu! C\'est lumineux! My work, she is... how you say... Magnifique! Dieu est révélé! Oui."',
        examples: `<p>The Artist asks, "Is the Demon sitting in a brown chair?" The Storyteller answers, "No," because the Demon is in a black chair.</p><p>The Artist asks, "Is David the Evil Twin?" and the Storyteller answers, "Yes," because David is.</p><p>The Artist asks, "How many Minions are alive?" and the Storyteller says, "Please ask another question. I cannot answer that with a yes, no, or I don't know."</p><p>The Artist asks, "Are we winning?" and the Storyteller answers, "I don't know," because even though all the Minions are dead, many good players trust the Demon.</p>`,
        howToRun: `<p>During any day, the Artist can request a private chat with you. Take them away from the circle so you cannot be overheard. They will ask you a question. Whisper "Yes," "No," or "I don't know," to them, or if you cannot answer in one of these ways, prompt the Artist to ask again in a different way. <strong>The Artist loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder.</p><p class="modal__callout-box">Like the Savant, evil players bluffing as the Artist may request a private chat with you and pretend to ask a question. To help them bluff, you can pretend to give an answer by nodding or shaking your head.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Juggler",
        description: "The Juggler takes the risk of convincing people to reveal their characters during the first day, in the hope of guessing as many as possible that are telling the truth.",
        intro: "<ul><li>On the first day, they may guess which players are which characters. That night, the Juggler learns how many guesses they got right…if they are not killed beforehand.</li><li>They must make their guesses publicly, so everyone hears what is guessed. They may guess zero characters, or up to five characters, and these characters and players may be different or the same.</li><li>If the Juggler made their guesses while drunk or poisoned, but is sober and healthy when their ability triggers that night, then the Storyteller still gives them true information.</li></ul>",
        ability: 'On your 1st day, publicly guess up to 5 players\' characters. That night, you learn how many you got correct.',
        flavor: '"For my next trick, as per request, I will need a flower, a bag of beans, a toy snake, a paintbrush, and a motorized gasoline-powered hedge trimming device. I warn you, this trick may be my last. Oh dear."',
        examples: `<p>During the first day, the Juggler guesses that Marianna is the Town Crier, Lachlan is the No Dashii, and Abdallah is the Sage. That night, the Juggler learns a "2", meaning two of those guesses were correct.</p><p>During the fourth night, the Savant gets turned into the Juggler. The next day, the new Juggler guesses that Ben is the Pit-Hag, that Ben is the Witch, and that Amy is the Pit-Hag. That night, the Juggler learns a "1".</p>`,
        howToRun: `<p>During the first day, if the Juggler declares that they are using their ability, then you enter the circle, holding the Grimoire. The Juggler can make up to five guesses, each of any one player and any one character. For each correct guess, mark the Juggler with a <strong>CORRECT</strong> reminder. (Make sure the players don't see how many reminders you're placing.)</p><p>That night, wake the Juggler. Show them fingers <i>(0, 1, 2, etc.)</i> equaling the number of <strong>CORRECT</strong> reminders. Put the Juggler to sleep. Remove the <strong>CORRECT</strong> reminders and the Juggler's night token when convenient.</p><p class="modal__callout-box">If the Juggler is guessing too fast, prompt them to slow down.</p><p class="modal__callout-box">If an evil player is bluffing as the Juggler, it can help their bluff if you pretend to move tokens around the Grimoire as they make their fake guesses.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Sage",
        description: "The Sage knows nothing while alive, but if the Demon kills them, they learn who it is.",
        intro: "<ul><li>The Sage only gets this information when killed by a Demon attack. Being executed does not count.</li></ul>",
        ability: 'If the Demon kills you, you learn that it is 1 of 2 players.',
        flavor: '"These mountainous tomes guard the secret, I am sure of it! Twixt word and word, it lies in wait. More candles, boy! More ink! These notes may look arcane, but the infernal puzzle is revealing itself."',
        examples: `<p>During the second night, the Demon kills the Sage. The Storyteller points at two players, one of whom is the Demon.</p><p>During the final night, the Demon kills the Sage, who is drunk. The Storyteller points at a dead player and one of the remaining three alive players. This information is incorrect.</p><p>The Pit-Hag creates a Demon. Because of this, the Storyteller can arbitrarily kill characters tonight, so they decide that the old Demon dies and the Sage dies. Because the Sage died due to the Pit-Hag, not the Demon, the Sage does not wake to learn anything tonight.</p>`,
        howToRun: `<p>If the Sage was killed by the Demon, wake the Sage. Point at two players, one who is the Demon that killed the Sage. Put the Sage to sleep.</p><p class="modal__callout-box">If the Sage dies early, you will probably want to show the Sage two alive players, which lets the evil team still have a slim chance of winning. If the Sage dies on the final night, feel free to show one alive and one dead player.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Mutant",
        description: "The Mutant is executed if they try to reveal who they are.",
        intro: `<ul><li>"Madness" is a term that means "you are trying to convince the group of something." So, if the Mutant player is mad about being the Mutant, this means they are trying to convince people that they are the Mutant. If they are mad about being an Outsider, this means they are trying to convince people that they are an Outsider.</li><li>This can be by verbally hinting who they are, or by their silence when questioned. It is always up to the Storyteller to decide what the Mutant is doing. If you think they are trying to convince the group they are an Outsider in any way, you can execute them—even outside the nomination phase, or at night. If you do, no other executions may happen today by normal means, since there is only one execution per day.</li><li>If the Mutant hints that they are the Mutant at night, you may execute them that night. Declare they have died, and continue the night phase as normal. An execution may still happen the next day.</li></ul>`,
        ability: 'If you are "mad" about being an Outsider, you might be executed.',
        flavor: '"I am not a freak! I am a human being! Have mercy!"',
        examples: `<p>Ten seconds into the first day, the Mutant says to the group that they're the Mutant. The Storyteller declares that the Mutant is executed immediately. There is no nomination for an execution today, since there is a maximum of one execution per day.</p><p>A Witch privately talks to the Storyteller and says that Evin, who is playing the Mutant, told them he is the Klutz. The Storyteller chooses to execute the Mutant immediately.</p><p>The Mutant tells the group that they are a Townsfolk, but does not say which one. When questioned if they are the Mutant, they stay silent. After a minute or so of silence, the Storyteller executes the Mutant.</p><p>The Mutant says they are the Oracle, gives some bogus Oracle information, then says "By the way, I am definitely not the Mutant" while giving a subtle wink. The Storyteller chooses to execute the Mutant immediately.</p>`,
        howToRun: `<p>At any time <i>(even at night)</i>, if you believe that the Mutant is mad about being an Outsider, then you can decide to execute the Mutant. Declare this to the group. They <strong>die</strong>—mark them with a shroud.</p><p>If you execute them during the day before the normal execution happens, go to the night phase. <i>(There is a maximum of one execution per day.)</i></p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Barber",
        description: "The Barber allows the Demon to swap two characters.",
        intro: `<ul><li>The players' alignments stay the same when they swap characters. Each player learns which character they become.</li><li>The Demon may choose not to swap players.</li><li>If a player becomes a new character, they gain the new ability, even if it was a "you start knowing" ability or a "once per game" ability that the original character already used.</li><li>If there is more than one living Demon, the Storyteller chooses which Demon makes the swap.</li><li>The Demon may choose themself to swap.</li><li>The Demon may not choose another Demon player to swap.</li><li>If a player dies, then becomes the Barber, the Demon may not swap two players' characters tonight.</li></ul>`,
        ability: 'If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.',
        flavor: '"Did you know that barbery and surgery were once the same profession? No? Well, now you do."',
        examples: `<p>The Barber dies. The Demon considers swapping the Clockmaker and the Juggler, but then does nothing.</p><p>The Barber dies. The Demon swaps the alive Oracle with the dead Barber. Now, there is an alive Barber and a dead Oracle.</p><p>The Barber dies. The Vortox swaps themself with an alive Witch.</p><p>The Barber dies. The Vigormortis swaps themself with a dead Sweetheart. The old Vigormortis is now the evil Sweetheart. Because the Pit-Hag created a good Demon during the previous night, the game continues.</p>`,
        howToRun: `<p>If the Barber dies, mark them with the <strong>HAIRCUTS TONIGHT</strong> reminder.</p><p>During that night, wake the Demon. Show them the <strong>THIS CHARACTER SELECTED YOU</strong> info token, then the Barber token. The Demon either shakes their head no or points to two players. Put the Demon to sleep. Remove the <strong>HAIRCUTS TONIGHT</strong> reminder.</p><p>If the Demon pointed to two players, swap the character tokens of the chosen players. One at a time, wake each swapped player, show them the <strong>YOU ARE</strong> info token and their new character token, then put them to sleep. If a player's alignment does not match the color of their character token, turn it upside-down.</p><p class="modal__callout-box">If a good player becomes a Minion or Demon, or an evil player becomes a Townsfolk or Outsider, you may wish to remind them that their alignment has not changed.</p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Sweetheart",
        debugger: "The Sweetheart, when they die, makes someone drunk for the rest of the game.",
        description: "<ul><li>The Storyteller chooses which player becomes drunk.</li><li>This ability works while the Sweetheart is dead.</li></ul>",
        intro: "The Sweetheart, when they die, causes someone to be drunk for the rest of the game.",
        ability: 'When you die, 1 player is drunk from now on.',
        flavor: '"I will never forget her. Never."',
        examples: `<p>The Sweetheart dies. The Mathematician is now drunk and may get false information at night.</p><p>The Sweetheart dies. The Mutant is now drunk. The Mutant may safely say they are the Mutant, but they do not know this.</p><p>The Sweetheart dies. The Demon is now drunk, so their attack at night won't kill anyone.</p>`,
        howToRun: `<p>If the Sweetheart dies, you choose any one player to become <strong>drunk</strong>—mark this player with the <strong>DRUNK</strong> reminder. The Sweetheart does not lose this ability when dead.</p><p class="modal__callout-box">You will almost always want to make a Townsfolk drunk, which will hurt the good team, but if evil is winning quite convincingingly, you can make an Outsider, Minion, or even the Demon drunk.</p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Klutz",
        description: "The Klutz might accidentally lose the game for their team, unless they are clever.",
        intro: "<ul><li>When the Klutz dies, they must declare a player. They may take a few minutes to do so—after all, it's a big decision, and other players may give advice on who to choose, but it is always the Klutz's decision. If they choose an evil player, the game ends immediately and the good team loses. If they choose a good player, nothing happens and the game continues.</li><li>It is not the Storyteller's responsibility to prompt the Klutz to declare they are the Klutz and choose a player. The Klutz must do this shortly after they learn that they are dead. Deliberately not doing so is considered cheating.</li></ul>",
        ability: 'When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.',
        flavor: '"Oops."',
        examples: `<p>The Klutz dies by execution. After much yelling and confusion, the Klutz chooses a player, who is the Seamstress. Night falls, and the game continues.</p><p>The Demon kills Lewis, the Klutz. In the morning, when the Storyteller informs the group that Lewis is dead, Lewis says "Okay everybody, I was the Klutz," and after discussion for a few minutes, Lewis publicly chooses the player that is the Demon. The game ends immediately and evil rejoices.</p>`,
        howToRun: `<p>When the Klutz player is declared dead, they must declare that they are the Klutz and then point at any player. <i>(Give them time.)</i> If they choose an evil player, the game ends and the evil team wins. If they choose a good player, the game continues.</p><p>In the strange situation where the Klutz is evil and chooses an evil player, then the game ends and the good team wins instead.</p><p class="modal__callout-box">If the Klutz player doesn't realize that they must choose a player when they die, privately remind them. New players may not understand how their character works.</p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Witch",
        description: "The Witch curses players, so that they die if they nominate.",
        intro: "<ul><li>Each night, the Witch chooses a player to curse. That player dies if they nominate any player on the next day, although their nomination still counts.</li><li>The Witch's curse lasts only for one day, but the Witch may curse the same player again and again each night.</li><li>As soon as just three players are left alive, the Witch's curse is immediately removed, and the Witch acts no more.</li></ul>",
        ability: 'Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.',
        flavor: '"Three drops of goat\'s blood. A lock of hair, torn in anger. The name is spoken, the shadow cast. Walk left foot first down that brambled path, and don\'t look back."',
        examples: `<p>At night, the Witch curses the Sage. During the next day, the Sage nominates the Dreamer. The Storyteller immediately declares that the Sage player dies. The players still vote to execute the Dreamer, who dies too.</p><p>The Witch curses themself. During the next day, the Witch nominates the Demon and dies. The players vote on whether or not to execute the Demon, but there are not enough votes, so nominations continue.</p><p>The Witch curses the Klutz. The Fang Gu attacks the Klutz, so the Klutz becomes the Fang Gu. The new Fang Gu is now cursed by the Witch, and they nominate. The new Fang Gu dies and good wins.</p><p>The Witch curses the Savant. Later that night, after the Demon kills a player, only three players are alive, so the curse is removed. The Savant may nominate safely.</p><p>The Witch curses the Juggler. During the next day, the Juggler calls for the exile of a Traveller. The Juggler lives and may nominate again, because abilities do not affect exiles.</p>`,
        howToRun: `<p>Each night, wake the Witch. They point at any player. Put the Witch to sleep. Mark the chosen player with the <strong>CURSED</strong> reminder.</p><p>The next day, if the player marked <strong>CURSED</strong> makes a nomination, immediately declare that they <strong>die</strong>. <i>(Nominations continue as normal.)</i></p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Cerenovus",
        description: `The Cerenovus encourages players to pretend to be different characters than they actually are.`,
        intro: `<ul><li>The Cerenovus chooses Townsfolk or Outsiders that players are mad about being. They must try to convince the group that they actually are this character tomorrow, or else die.</li><li>Simply hinting is not enough to avoid death. The player must make a decent effort to convince the group. Mad players are never literally forced to say things they don't want to—but if the Storyteller doesn't hear them make an effort, they pay the price.</li><li>Mad evil players might be executed this way, but "might" means you can choose not to, to prevent evil from winning by this strategy.</li><li>Like the Mutant, an execution penalty counts as the one execution allowed per day.</li></ul>`,
        ability: 'Each night, choose a player & a good character: they are "mad" they are this character tomorrow, or might be executed.',
        flavor: '"Reality is merely an opinion. Specifically, my opinion."',
        examples: `<p>The Cerenovus makes the Barber mad about being the Savant. Tomorrow, the Barber claims to be the Savant, talks to the Storyteller, and tells the group two facts that they made up. When asked whether they are mad, the Barber says "no" emphatically, so avoids being executed.</p><p>The dead Artist is made mad about being the Sage. The next day, they say nothing about being the Sage. The Artist is executed.</p><p>The Cerenovus makes the Flowergirl mad about being the Clockmaker. The Flowergirl says to the group that they are the Clockmaker and learned that the Demon is two seats away from their nearest Minion, but hints privately to other players that they are mad. The Storyteller overhears this and executes the Flowergirl.</p>`,
        howToRun: `<p>Each night, wake the Cerenovus. They point at any player and at any Townsfolk or Outsider icon on their character sheet. Put the Cerenovus to sleep. Mark the chosen player with the <strong>MAD</strong> reminder. Wake this player, show them the <strong>THIS PLAYER SELECTED YOU</strong> info token, then the Cerenovus token, then the character token of the character they are mad about being. Put that player to sleep.</p><p>During the next day or night, if you feel that the mad player has not done their best to convince the group they are this character, you can decide to execute them. Declare this to the group. They <strong>die</strong>. If you execute them during the day before the normal execution happens, go to the night phase. <i>(There is a maximum of one execution per day.)</i></p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Pit-Hag",
        description: "The Pit-Hag changes players into different characters.",
        intro: "<ul><li>Each night, the Pit-Hag chooses a player and a character to turn that player into.</li><li>They can't create duplicate characters. If the character is already in play, nothing happens.</li></ul>",
        ability: 'Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary.',
        flavor: '"Round about the cauldron go; In the poison\'d entrails throw; Toad, that under cold stone; Days and nights has thirty-one; Sweated venom sleeping got; Boil thou first in the charmed pot."',
        examples: `<p>The Pit-Hag tries to turn the Savant into the Sage, but nothing happens because a Sage is already in play.</p><p>The Pit-Hag turns the Flowergirl into the Evil Twin. Now, there is a good Evil Twin, so the Evil Twin and an evil player are woken to learn each other's character.</p><p>During the final night, the Pit-Hag turns the Oracle into a good No Dashii. The Storyteller kills the evil Demon only, so that only one Demon is alive during the final day.</p>`,
        howToRun: `<p>Each night except the first, wake the Pit-Hag. They point at any player and any character icon on their character sheet. Put the Pit-Hag to sleep.</p><p>If the chosen character is in play, nothing happens.</p><p>If the chosen character is not in play, wake the chosen player. Show them the <strong>YOU ARE</strong> info token, then their new character token, then put them to sleep. Replace their old character token with the new character token. <i>(You may need to turn character tokens upside-down to remind you that a player's alignment is opposite to the color of the token. You may need to remind the player that their alignment is unchanged, by giving a thumbs-up or thumbs-down.)</i></p><p>If a Demon is created, you may choose any players to kill or to protect throughout the night to balance the game. Additional deaths are considered attacks from the Pit-Hag.</p><p class="modal__callout-box">If the Pit-Hag changes a Demon into a new Demon, it is best to make no death occur tonight, so the good team gets a clue that the Demon has changed. You can even wake the Demon, see who they choose to attack, and decide that no one dies. If the Pit-Hag creates a new evil Demon, it is best to kill the old Demon and some other player, to signal to the good team that the Demon has changed. If the Pit-Hag creates a good Demon, it is best to kill either Demon (if it is the final night), or to just let two Demons run amok (if it is not the final night)—but since all Demons must die for good to win, use caution.</p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Evil Twin",
        description: `The Evil Twin mirrors a good character, and the players don't know which twin is good and which twin is evil.`,
        intro: "<ul><li>The Evil Twin is paired with a good player, chosen by the Storyteller, called the Good Twin.</li><li>On the first night, the Evil Twin and Good Twin both wake, make eye contact, and learn each other's character.</li><li>If the Good Twin is executed, evil wins. If the Evil Twin is executed, the game continues. A dead Evil Twin has no ability, so evil doesn't win if the Good Twin is later executed.</li><li>Good cannot win while both twins are alive. Even if the Demon is killed, the game continues. Good will need to kill the Evil Twin as well as the Demon to win.</li><li>If a good player is turned into an Evil Twin, they are still a good player, with an evil player becoming their twin. It doesn't matter which twin is which character, what matters is their <i>alignment</i>—the good team can execute the evil <i>player</i> safely, but if they execute the good <i>player</i>, evil wins.</li><li>If both Twins are the same alignment, the Storyteller chooses a new Twin.</li></ul>",
        ability: 'You & an opposing player know each other. If the good player is executed, evil wins. Good can\'t win if you both live.',
        flavor: '"I\'m not Sara! I\'m Clara! SHE is Sara! Sara is the evil one! Not me!"',
        examples: `<p>Both twins are claiming to be the Oracle. The Evil Twin is executed. The game continues.</p><p>The Demon dies. The game continues, with no death at night from now on. Two days later, the Evil Twin dies. Good wins.</p><p>The Pit-Hag turns the good Sage into the Evil Twin. Their twin is an evil Witch. The good Evil Twin is executed. Evil wins.</p>`,
        howToRun: `<p>While setting up the game, choose a Good Twin by marking any good character with the <strong>TWIN</strong> reminder.</p><p>During the first night, wake both Twins. Let them make eye contact. Point at the Evil Twin, then show the Evil Twin token to the Good Twin. Point at the Good Twin, then show the Good Twin's character token to the Evil Twin. Put them both to sleep.</p><p>While both Twins are alive, the good team cannot win. If a good-aligned Twin is executed, the evil team wins.</p><p class="modal__callout-box">If a Pit-Hag creates an Evil Twin during the final night, either make the other Twin the Demon player or a dead player, so that the good team is still able to win.</p><p class="modal__callout-box">It is rarely a good idea to choose a Traveller to be a Twin.</p>`,
        group: "Minion",
        script: "sv"
    },

    {
        name: "Fang Gu",
        description: "The Fang Gu possesses Outsiders.",
        intro: "<ul><li>The first time a Fang Gu attacks and kills an Outsider, the Fang Gu dies, and the Outsider becomes a Fang Gu and turns evil.</li><li>This can only happen once per game. If the new Fang Gu attacks an Outsider, the Outsider dies as normal.</li><li>The new Fang Gu counts as the Demon, and good wins if they die. They do not learn which players are Minions.</li><li>There is an extra Outsider in play.</li><li>If the Fang Gu attacks an Outsider but that Outsider does not die, that Outsider does not become an evil Fang Gu and the Fang Gu does not die.</li></ul>",
        ability: 'Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]',
        flavor: '"Your walls and your weapons are but smoke in dreams."',
        examples: `<p>The Fang Gu attacks the Artist, who dies. The next night, the Fang Gu attacks the Sweetheart, who becomes the Fang Gu while the old Fang Gu dies. The Sweetheart does not make a player drunk, because they did not die. The next night, the new Fang Gu attacks the Klutz, who dies.</p><p>The Fang Gu attacks the dead Klutz. Because the Klutz is dead, they cannot die again, so the Fang Gu does not die instead. The Klutz remains good and no deaths occur tonight.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, add one extra Outsider character token and remove one Townsfolk character token.</p><p>Each night except the first, wake the Fang Gu. They point at any player. Put the Fang Gu to sleep.</p><p>If the chosen player is not an Outsider, that player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder.</p><p>If the chosen player is an Outsider and the <strong>ONCE</strong> reminder is in the center of the Grimoire, that player <strong>dies</strong>—mark them with the <strong>dies</strong> reminder.</p><p>If the chosen player is an Outsider and the <strong>ONCE</strong> reminder is not in the centre of the Grimoire, the Fang Gu <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder. Wake the chosen Outsider. Show them the <strong>YOU ARE</strong> info token, then the Fang Gu token, then the <strong>YOU ARE</strong> info token, then a thumbs-down. Change their character to a Fang Gu—swap their character token with the spare Fang Gu token. They become <strong>evil</strong>. Put the new Fang Gu to sleep. Put the <strong>ONCE</strong> reminder in the center of the Grimoire. <i>(Unlike "Once per game" abilities, this reminder stays there for the rest of the game. Don't remove it, even if the Fang Gu dies or changes character.)</i></p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "Vigormortis",
        description: "The Vigormortis kills their own Minions, who keep their ability.",
        intro: "<ul><li>Every time the Vigormortis kills a Minion, they die but keep their ability for as long as the Vigormortis remains alive. The Witch, Cerenovus, and Pit-Hag still act each night.</li><li>Somewhat like the No Dashii, the dead Minion's closest clockwise or closest counterclockwise Townsfolk becomes poisoned, even if they are dead. If the Vigormortis dies or otherwise loses their ability, then those players become healthy again. One Townsfolk per Minion will always be poisoned this way, as neighboring Outsiders, Minions, or Travellers are skipped. The Storyteller chooses which of the two Townsfolk is poisoned.</li><li>All Minions killed by the Vigormortis keep their ability and poison a Townsfolk, not just the most recent.</li><li>If a dead Minion becomes a non-Minion character, they no longer poison a Townsfolk and have no ability. If a dead Minion becomes drunk or poisoned, they lose their ability until they become sober and healthy again.</li></ul>",
        ability: 'Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]',
        flavor: '"All doors are one door. All keys are one key. All cups are one cup, but whosoever drinketh of the water that I give shall never thirst, but the water shall be in him a well springing up into everlasting life."',
        examples: `<p>The Vigormortis kills the Witch. The next day, the player cursed by the Witch makes a nomination, and dies.</p><p>The Vigormortis kills the Evil Twin. The Evil Twin neighbors a Klutz and a Flowergirl. The Sage is the next neighbor to the Klutz. The Storyteller chooses that the Sage is poisoned. The next day, the Good Twin is executed, and evil wins.</p><p>The Vigormortis kills the Pit-Hag. The Pit-Hag changes a Savant into a Witch. The Vigormortis kills the Witch, who curses and kills a player. The Pit-Hag turns the dead Witch into the Oracle, who now has no ability. The Pit-Hag turns the Vigormortis into a Vortox. The Pit-Hag now has no ability.</p>`,
        howToRun: `<p>While setting up the game, before putting the character tokens in the bag, remove one Outsider character token and add one Townsfolk character token. <i>(If there are no Outsider tokens to remove, do not add a Townsfolk token.)</i></p><p>Each night except the first, wake the Vigormortis. They point at any player. Put the Vigormortis to sleep. If the chosen player isn't a Minion, that player <strong>dies</strong>—mark them with a <strong>DEAD</strong> reminder.</p><p>If the chosen player is a Minion, that player <strong>dies</strong>—mark them with a <strong>DEAD</strong> reminder and a <strong>HAS ABILITY</strong> reminder. The closest clockwise or closest counterclockwise Townsfolk to the Minion becomes <strong>poisoned</strong>—mark them with a <strong>POISONED</strong> reminder.</p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "No Dashii",
        description: "The No Dashii poisons their neighboring Townsfolk.",
        intro: "<ul><li>The No Dashii's closest clockwise and counterclockwise Townsfolk neighbors are poisoned, regardless of whether they are alive or dead. If a No Dashii dies or otherwise loses their ability, then those two players become healthy. Two Townsfolk players will always be poisoned this way, as neighboring Outsiders, Minions, or Travellers are skipped.</li><li>If a new player becomes the No Dashii, or a poisoned Townsfolk changes into a non-Townsfolk character, the players who are poisoned may change immediately based on who the neighbors of the No Dashii are.</li></ul>",
        ability: 'Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned.',
        flavor: '"By the sins of Arnoch, I feel thy laden stench. By the curs-ed sun and her foul legion of tiny grinning gods, I corrupt thee. By the blessed night and the hidden depths of the horrid and unholy sea, I end thy squalid life upon this plane."',
        examples: `<p>At the start of the game, the No Dashii neighbors a Town Crier and a Snake Charmer. They are both poisoned. A few days later, they are both dead, and the closest alive neighbors to the No Dashii are a Clockmaker and a Barber, but they do not get poisoned by the No Dashii.</p><p>Clockwise from the No Dashii sit a Philosopher, a Mathematician, and then a Sage. Counterclockwise from the No Dashii sit a Witch, a Mutant, and then a Seamstress. The Philosopher and the Seamstress are poisoned.</p><p>The Pit-Hag changes the dead No Dashii into the Flowergirl. The next night, the Pit-Hag changes the alive Fang Gu into the No Dashii. This new, alive No Dashii is now poisoning their two neighboring Townsfolk.</p>`,
        howToRun: `<p>While preparing the first night, the two Townsfolk neighboring the No Dashii become <strong>poisoned</strong>—mark them with <strong>POISONED</strong> reminders.</p><p>If a Townsfolk poisoned by the No Dashii becomes a non-Townsfolk character, or the No Dashii turns into a different character, or if a new player becomes the No Dashii, the new neighbors of the No Dashii become <strong>poisoned</strong>, and the old neighbors become <strong>healthy</strong>—move the No Dashii's <strong>POISONED</strong> reminders immediately if needed.</p><p>Each night except the first, wake the No Dashii. They point at any player. That player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder. Put the No Dashii to sleep.</p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "Vortox",
        description: "The Vortox makes all information false.",
        intro: "<ul><li>Anytime a Townsfolk player gets information from their ability, they get false information. Even if they are drunk or poisoned, it must be false.</li><li>The Vortox does not affect information gained by other means, such as when the Storyteller explains the rules, or when a player's character or alignment changes.</li><li>When night falls, if nobody was executed today, evil wins. Exiling a Traveller does not count.</li></ul>",
        ability: 'Each night*, choose a player; they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.',
        flavor: '"Black is White. Right is Wrong. Left is Right. Up is Long. Down is Sight. Short is Blind. Follow me. Answers find."',
        examples: `<p>The Vortox kills the Sage. The Sage learns two players, both of which are not Demons.</p><p>Nobody voted or nominated today. That night, both the Flowergirl and the Town Crier learn a "yes".</p><p>During the day, the Savant learns two pieces of information. Both are false. That night, the Dreamer chooses a player who is the Savant, and learns that this player is either the Philosopher or the No Dashii.</p><p>The Pit-Hag turns the Juggler into the Witch. The Juggler learns that they are now the good Witch, because this information comes from the Pit-Hag's ability, not a Townsfolk's ability.</p><p>Today, a player died from the Witch, two Travellers were exiled, five nominations happened, but nobody was executed. Evil wins.</p>`,
        howToRun: `<p>While the Vortox is alive, you must give false information whenever a Townsfolk ability prompts you to give information.</p><p>Each night except the first, wake the Vortox. They point at any player. That player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder. Put the Vortox to sleep.</p><p>Each dusk, if no player was executed today, the game ends and the evil team wins.</p>`,
        group: "Demon",
        script: "sv"
    },
        {
        name: "Acrobat",
        description: `The Acrobat dies when they find a drunk or poisoned player.`,
        intro: "<ul><li>Each night except the first, the Acrobat chooses a player. If the chosen player is sober and healthy, nothing happens. If the player is drunk or poisoned, the Acrobat dies.</li><li>If the Acrobat is drunk or poisoned, they cannot die to their own ability.</li><li>The Acrobat may choose any player, dead or alive, even themself.</li><li>If the chosen player is sober and healthy at the time the Acrobat picks, but becomes drunk or poisoned later in the night, the Acrobat dies.</li><li>The Acrobat does not learn if the player they selected was drunk, or poisoned, or both.</li></ul>",
        ability: 'Each night*, choose a player: if they are or become drunk or poisoned tonight, you die.',
        flavor: '"Ladies and gentlemen, hold fast to your hats, for I shall defy the very laws of gravity and dance upon the air, a marvel of agility and daring, all for your delight and wonder!"',
        examples: `<p>The Sailor chooses the Assassin, and the Storyteller makes the Sailor drunk. The Acrobat chooses the Sailor, and dies because the Sailor is drunk.</p><p>The Acrobat chooses the Tinker, who is sober and healthy. Nothing happens.</p><p>The Acrobat chooses the Preacher. Later that night, the Pukka poisons the Preacher. The Acrobat dies, because the Preacher is no longer healthy.</p>`,
        howToRun: "<p>Each night except the first, wake the Acrobat. They point to a player. Put the Acrobat to sleep.</p><p>If the player the Acrobat pointed to is drunk or poisoned, or becomes drunk or poisoned at any time tonight, the Acrobat <strong>dies</strong>.</p>",
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Alchemist",
        description: "The Alchemist has a Minion ability.",
        intro: "<ul><li>The Alchemist's ability must be that of a not-in-play Minion. It cannot duplicate an in-play Minion's ability.</li><li>The Alchemist learns which ability this is on the first night.</li><li>They are still a good Townsfolk. They win when good wins, and lose when good loses. They register as good and as the Alchemist.</li><li>The Alchemist does not wake to learn who the other Minions are or who the Demon is, like Minions do.</li><li>If the Alchemist's Minion ability adds or removes characters during setup, this still occurs during setup.</li></ul>",
        ability: 'You have a Minion ability. When using this, the Storyteller may prompt you to choose differently.',
        flavor: '"Visit the interior of the Earth. By rectification thou shalt find the hidden stone. Above the gold, lieth the red. Kether in Malkuth."',
        examples: `<p>The Alchemist has the Poisoner's ability. Each night, the Alchemist wakes and chooses a player to poison.</p><p>The Alchemist has the Scarlet Woman's ability. The Imp kills themselves at night, and the Alchemist becomes the good Imp.</p><p>The Alchemist has the Assassin's ability. The Dreamer chooses the Alchemist. The Alchemist registers as the Alchemist, so the Dreamer learns that they are either the Alchemist or the Assassin.</p>`,
        howToRun: `<p>During the first night, wake the Alchemist. Show the <strong>YOU ARE</strong> info token then the character token of a not-in-play Minion. Put the Alchemist to sleep. Mark the Alchemist with the <strong>IS THE ALCHEMIST</strong> reminder. Swap the Alchemist token with this Minion token. Turn the Minion token upside-down. <i>(This shows they are still good.)</i></p><p>The Alchemist has this Minion ability. They use it as if they were a Minion, and wake at night when that Minion would normally wake to use their ability.</p><p class="modal__callout-box">Think carefully about which Minion ability you want to give to the Alchemist. This decision can dramatically influence the game.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Alsaahir",
        description: "The Alsaahir guesses the entire evil team.",
        intro: "<ul><li>The Alsaahir's guesses need to be public, and they need to be during the day. They don't have to guess every day.</li><li>Other players may pretend to be the Alsaahir and make a guess. Like the Juggler or the Gossip, the Storyteller will briefly pretend that player is the Alsaahir.</li><li>If the Alsaahir guesses the Demon player as the Demon, and the Minion players as Minions, the game ends immediately. The Alsaahir must guess all Demon and Minion players.</li><li>The Alsaahir doesn't need to guess specific minion characters, nor demon characters.</li><li>If there is more than one Demon in play, all Demons must be guessed.</li><li>If a player is a Minion and a Demon, such as Legion, the Alsaahir must guess this player as a Demon.</li><li>Once a guess is made, the Alsaahir cannot change their mind later that day and guess again.</li><li>The Alsaahir needs to guess Minions and Demons, even if they are good, but need not guess which Travellers are evil.</li><li>If the evil team has changed during the game, the Alsaahir must guess the current evil team, not the starting evil team.</li></ul>",
        ability: 'Once per day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.',
        flavor: '"I am here because of you, and you are here because of me."',
        examples: `<p>The Alsaahir guesses four good players. Nothing happens.</p><p>The Alsaahir guesses that Doug is the Demon, and Ben and Sarah are Minions. Doug is the Demon, and Ben and Sarah are Minions. Good wins immediately.</p><p>The drunk Alsaahir guesses that Doug is the Demon, and Ben and Sarah are Minions. Doug is the Demon, and Ben and Sarah are Minions. Nothing happens and the game continues. The next day, the sober Alsaahir guesses that Ben is the Demon and Doug and Sarah are Minions. Nothing happens and the game continues.</p>`,
        howToRun: `<p>Each day, once only, if the Alsaahir declares that they wish to use their ability, prompt them to guess which player is the Demon, and which player(s) are Minions. If incorrect, nothing happens, and the game continues. If correct, declare that good wins.</p><p class="modal__callout-box">Optional rule: like the Juggler and the Gossip, the Storyteller may limit the number of players that make an Alsaahir guess to three players per day. Only use this optional rule if so many players are bluffing as the Alsaahir that the game slows down and ceases to be fun.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Amnesiac",
        description: "The Amnesiac doesn't know what their ability is.",
        intro: `<ul><li>The Storyteller decides what the Amnesiac's ability is. It may be the same ability as another character in <i>Blood On The Clocktower</i>, something similar, or something original.</li><li>The Amnesiac may wake at any time during the night to learn information or to choose a player, or their ability may be passive—not requiring action from the Amnesiac player.</li><li>Each day, the Amnesiac talks to the Storyteller in private, and makes a guess as to what their ability is. The Storyteller answers "cold" if the guess is very wrong, "warm" if the guess is on the right track, "hot" if the guess is very close, and "bingo" if the guess is spot on.</li><li>Their guess may be specific, such as "Am I learning two players each night that are the same alignment?", or vague, such as "Is my ability something to do with dead players?"</li></ul>`,
        ability: 'You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.',
        flavor: '"Wait. What. Who? Oh, ok. Wait. What?"',
        examples: `<p>Each night, the Amnesiac wakes and is prompted by the Storyteller to point to two players. On the first night, the Storyteller shakes their head. On the second night, the Storyteller nods. The Amnesiac guesses "Am I learning if both players are Minions?" The Storyteller says "Hot" because their ability is that they detect if either of two players are a Minion.</p><p>Each night, the Amnesiac learns a number. The Amnesiac is learning how many of their living neighbors are Townsfolk.</p>`,
        howToRun: `<p>While setting up the game, decide what ability the Amnesiac player has. During the game, treat that player as if they had that ability, waking them when needed, prompting them to choose players when needed, or whatever else is appropriate. Use the Amnesiac's <strong>?</strong> reminders if you need to.</p><p>Each day, the Amnesiac makes a guess about their ability in private. Answer "Cold", "Warm", "Hot", or "Bingo".</p><p class="modal__callout-box">Make the Amnesiac's ability guessable, so that the Amnesiac can figure out what their ability is over time. Learning a piece of information each night, or a power that affects the game in a way that the Amnesiac notices, are both good ideas.</p><p class="modal__callout-box">If the Amnesiac guesses their ability, but the wording is different, still tell them they guessed correctly.</p><p class="modal__callout-box">You can make the Amnesiac's ability slightly better than a normal Townsfolk's ability. Not knowing what it is, the player will need to work harder to receive its full benefit.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Atheist",
        description: "The Atheist knows that all players are good and there is no such thing as Demons.",
        intro: "<ul><li>With the Atheist in play, there are no evil players—no Minions and no Demons.</li><li>Good wins if the Storyteller is executed. Any living player may nominate the Storyteller, and the Storyteller is executed if 50% or more of the living players vote.</li><li>If the Atheist is not in play and the Storyteller is executed, evil wins.</li><li>Good loses if just two players are alive.</li><li>The Storyteller may break any of the game's rules. They may kill a player who nominated to simulate a Witch curse, kill players at night to simulate a Demon attacking, give players false information to simulate drunkenness, change characters at night to simulate a Pit-Hag, or even have the wrong number of Outsiders in play.</li></ul>",
        ability: 'The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]',
        flavor: '"Let us disperse with unnecessary conjecture and silly paranoia. There is a perfectly rational explanation for everything. Yes, a teacup may indeed be orbiting the planet, too small to see, but I shall drink my tea from the very real china in my very real hands."',
        examples: `<p>The Investigator learns that either the Grandmother or the Seamstress is the Boomdandy. The Investigator nominates, and dies, even though there is no Witch in play. The Slayer uses their ability on the Gossip, who dies.</p><p>There are three Outsiders in play, when there should be two. The players execute the Storyteller. Good wins.</p>`,
        howToRun: `<p>While setting up the game, before giving the bag to the players, remove all evil character tokens and add Townsfolk or Outsider character tokens to match the player count.</p><p>Break any game rules, as you see fit. Use evil reminder tokens if you need them.</p><p class="modal__callout-box">The Atheist is a complex character, and is recommended for experienced Storytellers. In addition to rules knowledge, it requires you to have a good sense of fun and fairness. It is your job to create a fun game for all players, so only break the game rules to give false information (as much or as little as you want) or simulate the actions of evil characters that could be in play, but aren't. If you can convince the players that there is no Atheist in play, or at least get them discussing the possibility, you've done well.</p><p class="modal__callout-box">Avoid creating arbitrary rules or changing the win conditions. In order to have a good time, the players need to know how they can win the game if an Atheist is in play.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Balloonist",
        description: "The Balloonist knows a Townsfolk, an Outsider, a Minion, and a Demon, but gets them confused.",
        intro: "",
        ability: 'Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]',
        flavor: '"More heat! Higher! Higher! Più alto! Ahhh... it is so beautiful from up here, don\'t you agree? Can you see the children fishing by the river, under the willow? Can you see the glint of the sun on the circus tent-poles? What\'s this? An old man, alone, passed out in the vineyard? Less heat! Lower! Lower! Vai più in basso!"',
        examples: `<p>On the first night, the Balloonist learns Lewis (i.e. the Storyteller points to Lewis). On the second night, the Balloonist learns Doug. On the third night, the Balloonist learns Lachlan. On the fourth night, the Balloonist learns Marianna.</p><p>Ben is the Balloonist. On the first night, Ben learns Sarah. On the second night, Ben learns Abdallah. On the third night, Ben dies, so does not learn any more players. Sarah is claiming to be the Monk and Abdallah is claiming to be the Goblin. Ben assumes that he has learnt one Townsfolk player and one Minion player, but he is incorrect - Sarah is the Lunatic and Abdallah is the Leviathan. Ben has actually learnt an Outsider player and a Demon player.</p>`,
        howToRun: `<p>When putting character tokens into the bag, remove a Townsfolk and add an Outsider instead. Each night including the first, wake the Balloonist and point to a single player (alive or dead) and place the corresponding <strong>SEEN TOWNSFOLK / OUTSIDER / MINION / DEMON</strong> reminder token next to them, ensuring not to repeat the same type as has been used before <i>(i.e. don't move reminder tokens once placed)</i>. Do not show them a character token or indicate which specific type this player is, just show them a player.</p><p>On each subsequent night, therefore, you will have fewer character types to show as you only have your remaining reminder tokens to place. It is legitimate to show the same player to the Balloonist more than once, if they either have different character types when shown or register as having a different character type. Unless you have a strong reason to, it's usually recommended to not show Travellers early, as this is essentially giving the Balloonist no information at all that night as all players know which players are Travellers without needing to use any abilities.</p><p>If there are no characters of a given type in play and you have shown the Balloonist all other types, stop waking the Balloonist. Note that even if a character of this missing type comes into play on a night after you've stopped waking the Balloonist, do not wake the Balloonist again on a later night to show them this player - the Balloonist ability was complete when you stopped waking them.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Banshee",
        description: "The Banshee becomes more powerful when dead – nominating and voting twice as much.",
        intro: "<ul><li>When alive, the Banshee nominates and votes like a regular player.</li><li>When dead, they may nominate twice per day, even though dead players may <strong>normally</strong> not nominate at all.</li><li>When dead, they may vote for any nomination they wish and do not need a vote token to do so. They may vote twice for the same nomination.</li><li>The Banshee only gains these powers if they were killed by the Demon. Dying by execution or to a non-Demon ability does not count.</li><li>To vote twice, the Banshee player raises both hands when votes are counted. If the player is unable to do this due to a physical disability, the Storyteller can count their normal vote twice.</li></ul>",
        ability: 'If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.',
        flavor: `"Dearg d'fhalt, is gorm do shùil, gheibh thu bàs ro na bha thu an dùil."`,
        examples: `<p>The Kazali kills the Banshee. All players learn that the Banshee has died. Tomorrow, the Banshee nominates the Village Idiot and votes twice, then nominates the Fearmonger and votes twice, then votes twice when the Shugenja is nominated. The next day, the Banshee doesn't nominate at all, but votes twice for the Kazali.</p><p>The Banshee is poisoned. The Ojo kills the Banshee. Nobody learns that the Banshee has died, and for the rest of the game, the Banshee may not nominate, and has just one vote.</p><p>The Lycanthrope kills the Banshee. The Banshee does not gain their additional powers and is not announced.</p>`,
        howToRun: `<p>If the Banshee is killed by the Demon, place the <strong>HAS ABILITY</strong> reminder token next to the Banshee and say <strong>THE BANSHEE HAS AWOKEN</strong> or something similarly dramatic. The Banshee may nominate twice per day, but it is the player's responsibility to remember how many times they have nominated. The Banshee may raise two hands when voting. When counting the votes, count each hand as a vote.</p><p>If the Banshee is killed by the Demon but does not have their ability at that time (due to being drunk or poisoned etc.) or is killed by a non-Demon ability, then do not tell the group that the Banshee ability has been triggered. The Banshee may not nominate, and needs a vote token to vote, like a regular dead player.</p><p class="modal__callout-box">If all good players are dead, the game continues. Good can still win due to the Banshee being able to nominate.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Bounty Hunter",
        description: `The Bounty Hunter learns all the evil players. One. Player. At. A. Time.`,
        intro: "",
        ability: 'You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]',
        flavor: '"Alone, I walk these streets, paved with the sick stench of corruption. Its thickness worms its way into my nostrils, unbidden, burning with revulsion. And anticipation. The illness of this wretched place grows each night. And I... I am the cure."',
        examples: `<p>On the first night, the Bounty Hunter learns that Edd is evil. Edd is the King who has been turned evil by the Bounty Hunter. The next day, the King dies. The following night, the Bounty Hunter learns that Abdallah is evil. Abdallah is the Goblin.</p><p>On the first night, the Bounty Hunter learns that Evin is evil. Three days later, Evin dies. That night, the Bounty Hunter learns Marianna is evil. Marianna is a Minion. Three nights later, the Demon kills Marianna and the Bounty Hunter learns that Alex is evil. Alex is the Demon. The Tea Lady, who was made evil by the Bounty Hunter, is still alive.</p>`,
        howToRun: `<p>At the start of the first night, wake any player with a Townsfolk character and show them the <strong>YOU ARE</strong> card and the thumbs down hand signal to let them know they are evil. Rotate their token 180 degrees in the grimoire, mark them with an evil reminder in clocktower.online or turn their token red in the official app to remind you they are evil. They do not learn anything else other than their new alignment, they do not know who the Minions or Demon are and they continue to register as a Townsfolk to abilities, it's just their alignment that has changed.</p><p>When the Bounty Hunter wakes, point to an evil player. This can be a Minion, Demon, Traveller or the evil Townsfolk, anyone that is evil or registering as evil. If that player dies, regardless of whether they die at night or during the day, regardless of whether they're evil or not, wake the Bounty Hunter that night and show them a new evil player.</p><p>Note that the Bounty Hunter is quite late in the night order on the first night. This is the time to wake them to show them the player they are learning is evil. The player that started evil, however, should be told immediately on the first night that they are evil and you as Storyteller should also bear this in mind when doing other first night information - that player is already evil even though the Bounty Hunter has not woken yet.</p><p>If the Bounty Hunter is drunk or poisoned or in a Vortox game at any point when they would learn information, you may (must if Vortox) give them incorrect information and show a good player. If they later sober up, they do not learn any new information, even though they still think that a good player is evil. When the player they saw dies, they learn a new player that night.</p><p>If the "known" evil player turns good later, this doesn't affect the Bounty Hunter, that player still needs to die in order for the Bounty Hunter to get further information.</p><p>It's worth noting that, if you feel the Bounty Hunter has already gained a lot of information, it's possible to give a dead evil player or one they've already received. In the former case, if they're dead they cannot die again, so the Bounty Hunter will not get new information unless that player is resurrected and killed again.</p><p>For Travellers, both travelling away and being exiled result in their death - so if a Bounty Hunter has seen a Traveller, either situation would result in the Bounty Hunter getting more information that night.</p><p class="modal__callout-box">Due to the Bounty Hunter adding an extra evil player, extreme caution should be taken when adding it to a script with any other potential alignment changers - as soon as more than one player can be turned evil it's very easy to get an evil voting majority and not even the evil players particularly enjoy that. The script with Goon, Mezepheles, Fang Gu, Politician and Cult Leader has been made before and it isn't fun...</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Cannibal",
        description: "The Cannibal eats executed characters, gaining their ability.",
        intro: `<ul><li>If a good player dies by execution, the Cannibal gains that player's ability. If an evil player dies by execution, the Cannibal only thinks that they gain an ability, since the Cannibal is poisoned. The Storyteller may be lying to them.</li><li>Each time a player dies by execution, the Cannibal loses the ability of the previous player.</li><li>Executing a dead player won't grant the Cannibal an ability. Executing a living player who doesn't die won't grant the Cannibal an ability. A player must be executed and die for the Cannibal to gain their ability.</li><li>The Cannibal is not told which ability they have gained. They must figure that out for themselves.</li><li>If the Cannibal has an "even if dead" ability, such as the Recluse, or an ability that implies it works while dead, such as the Ravenkeeper or Sweetheart, the Cannibal keeps that ability when they die, but loses their Cannibal ability.</li></ul>`,
        ability: 'You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.',
        flavor: '"I don\'t like clowns. They taste funny."',
        examples: `<p>The Clockmaker is executed and dies. That night, the Cannibal learns a "2" because the Demon and Minion are two steps apart.</p><p>The Witch is executed. The Witch was bluffing as the Investigator. That night, the poisoned Cannibal learns that either the Mayor or the Juggler is the Witch.</p><p>The Soldier dies by execution. That night, the Imp attacks the Cannibal, but the Cannibal doesn't die. The Monk dies by execution. That night, the Cannibal chooses the Gossip, as does the Imp. The Gossip does not die. The next day, no one is executed. The Cannibal has the Monk's ability again tonight.</p>`,
        howToRun: `<p>If a good player dies by execution, mark them with the <strong>DIED TODAY</strong> reminder, and remove the Cannibal's <strong>POISONED</strong> reminder if necessary. The Cannibal now has this good player's ability <i>(do not say which)</i>, and will wake at night when this good character would normally wake.</p><p>If an evil player dies by execution, mark them with the <strong>DIED TODAY</strong> reminder and mark the Cannibal with the <strong>POISONED</strong> reminder. The Cannibal is <strong>poisoned</strong>. You may wake them when this evil character would normally wake, and pretend that they have a new ability.</p><p class="modal__callout-box">Pay attention to which character each evil player is bluffing as. If they are executed, then their bluffed ability is the best one to pretend that the Cannibal has gained.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Choirboy",
        description: `The Choirboy learns who the Demon is when the King is slain.`,
        intro: `<ul><li>The King can be in play without the Choirboy. During the setup phase, if the Choirboy is in play and the King isn't, the King is added. If a King is already in play, the Choirboy doesn't add a second King.</li><li>If the Demon kills the King using their ability, the Choirboy learns which player is the Demon. The Demon nominating and executing the King doesn't count. Minions that kill the King, such as the Assassin, don't count either.</li><li>If the Demon attacks the King but doesn't kill the King, the Choirboy doesn't learn who the Demon is.</li><li>The Choirboy learns which player the Demon is, but does not learn which character.</li></ul>`,
        ability: 'If the Demon kills the King, you learn which player is the Demon. [+the King]',
        flavor: '"I saw it, I did. I was in the pews, tidying the hymn books, when a dreadful tune started from the pipe organ. The organist had a long cloak, and long fingers on the keys. And a hat that looked… just like… yours.”',
        examples: `<p>The Imp attacks the Empath. The Empath dies. The next night, the Imp attacks the King, who is protected by the Monk. The King lives. The next night, the Imp attacks the King, who is not protected by the Monk. The King dies. The Choirboy learns which player is the Demon.</p><p>The Shabaloth kills the King. The drunk Choirboy wakes and learns that the Cannibal player is the Demon.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, if the King is not already in play, remove a Townsfolk character token and add the King character token.</p><p>Each night except the first, if the Demon kills the King, put the Demon to sleep then wake the Choirboy. Point to the Demon player then put the Choirboy to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Cult Leader",
        description: "The Cult Leader convinces others to join their cult to end the game. But which team will win?",
        intro: "",
        ability: 'Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.',
        flavor: '"Thinking themselves wise, they became fools."',
        examples: `<p>The Cult Leader neighbours the Farmer and the Magician. On the first night, the Cult Leader remains good. The Magician is executed, and dies, and the Cult Leader's living neighbours are now the Farmer and the Marionette. The Storyteller decides to make the Cult Leader evil. The next night, even though the Cult Leader's living neighbours are still the Farmer and the Marionette, the Storyteller decides to make the Cult Leader good again.</p><p>The Cult Leader is evil. The Cult Leader requests that all players join their cult. All evil players put their hand up to join, but only half the good players put their hand up to join. Nothing happens. That night, the Cult Leader turns good. The following day, the Cult Leader requests that all players join their cult. No evil players put their hand up to join, but all the good players put their hand up to join. The game ends and good wins, because the Cult Leader is good.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Engineer",
        description: "The Engineer manufactures the threat that the town faces.",
        intro: `<ul><li>The Engineer can choose which Minion characters are in play, or which Demon is in play, but not both.</li><li>When the Engineer creates new in-play characters, the Demon player remains the Demon, and the Minion players remain Minions. The number of evil players stays the same.</li><li>If the Engineer tries to create an in-play character, that character stays as the same player. The Engineer doesn't learn this, and may not use their ability again.</li><li>If creating Minions, the Engineer chooses the same number of Minions that should be in play for the number of players <i>(see the Traveller sheet or the setup sheet)</i>.</li><li>If the Engineer accidentally chooses too many or too few characters, the Storyteller changes as many evil players' characters as is fair and feasible.</li><li>Only characters from the current script may be chosen.</li></ul>`,
        ability: 'Once per game, at night, choose which Minions or which Demon is in play.',
        flavor: '"If it bends, great. If it breaks, well, it probably needed fixing anyway."',
        examples: `<p>On the second night, the Engineer chooses that the Demon is a Lleech. Lewis, who was the Imp, is now the Lleech.</p><p>On the first night, the Engineer changes the Baron into the Boomdandy. There are still an extra two Outsiders in play.</p><p>The Fearmonger and the Psychopath are in play, and causing havoc. The Engineer chooses that the Mezepheles and the Spy are in play. The Storyteller chooses to change the Fearmonger into the Mezepheles and the Pyschopath into the Spy.</p><p>The Spy, Assassin, and Witch are in play. The Engineer chooses that the Spy, Assassin and Mezepheles are in play. The Witch turns into the Mezepheles.</p>`,
        howToRun: `<p>Each night, wake the Engineer. They either shake their head no or point at evil characters on the character sheet.</p><p>If they shake their head no, nothing happens. Put the Engineer to sleep.</p><p>If they point to a Demon or Minions on their character sheet, put them to sleep. Swap all appropriate character tokens with new character tokens. Wake each evil player that changed character, show the <strong>YOU ARE</strong> info token, then their new character token, then put them to sleep. <strong>The Engineer loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Farmer",
        description: "The Farmer creates more Farmers.",
        intro: `<ul><li>If a Farmer dies at night, another player becomes a Farmer too.</li><li>Only players that are good can become Farmers this way.</li><li>If this new Farmer also dies at night, another Farmer is created.</li><li>Farmers that die during the day, such as by execution, do not create more Farmers.</li><li>Farmers that have turned evil, such as from the Mezepheles' ability, can create more Farmers. But Townsfolk and Outsiders that have turned evil cannot become a Farmer.</li><li>Farmers do not learn who each other are, but each player that becomes a Farmer learns that they are now a Farmer.</li><li>When a player becomes a Farmer, they are no longer their old character, and do not have that ability. Any ongoing effects of their old ability immediately end.</li></ul>`,
        ability: 'When you die at night, an alive good player becomes a Farmer.',
        flavor: '“Even the high and mighty need food on the table. Without us, the city starves.”',
        examples: `<p>Julian is the Farmer. The Demon kills him at night. Evin is the Fearmonger, and Sarah is the Alchemist. Sarah becomes the Farmer that night. Evin could not become the Farmer, because he is evil.</p><p>On the second night, the Farmer dies. The Pixie becomes the Farmer. On the third night, the new Farmer dies, and the good Heretic becomes a Farmer. There is now no Heretic and no Pixie in play, and three Farmers in play, two of which are dead.</p><p>The Farmer dies at night. The Spy registers as good and becomes a Farmer, but is still evil.</p>`,
        howToRun: `<p>If the Farmer died tonight, wake an alive good player. Show them the <strong>YOU ARE</strong> info token and a Farmer character token, then put them to sleep. Replace their previous character token with a Farmer character token.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Fisherman",
        description: "Once per game, during the day, visit the Storyteller for some advice to help your team win.",
        intro: "",
        ability: 'Once per game, during the day, visit the Storyteller for some advice to help your team win.',
        flavor: '"This was my favourite part of the river… see how the sunlight makes a rainbow from the monastery to the market? This was the best place for big fish. And the older I get, the bigger they were.”',
        examples: `<p>The Fisherman goes up to the Storyteller, and they are told "not to trust Ben", this is not because Ben is evil, but because his drunk information is leading the good team astray.</p><p>On the third day, the Fisherman learns "Keep the players claiming to be Outsiders alive". These players are secretly the Klutz and the Fearmonger. The Storyteller believes that keeping these players alive is more likely to end up with good executing the Demon.</p><p>It is the third day, and the Fisherman visits the Storyteller to ask for advice. They are told to "Execute Jeremy" because Jeremy is the Drunk, and the Undertaker would discover this if they were executed.</p><p>It is the last day, and the Fisherman visits the Storyteller to ask for advice. They are told "Don't ask Kevin too many questions" because Kevin is the Mutant, and his power activating would lose the game for good.</p>`,
        howToRun: `<p>At any time during the day, the Fisherman can approach the Storyteller privately for some advice to help them win. The Storyteller's pieces of advice are not "facts". They are strategy tips that the Storyteller believes will help the Fisherman win if they are followed.</p><p>Generally, Fisherman advice should be able to be structured as "you should" or "you should not". It doesn't need to explicitly include those words but should always follow that concept of suggestions that can be followed, rather than information about what is like a Savant would get. So "kill player X" or "find out who is the Drunk" or "you should rethink which info you're trusting" or "trust player Y" are all great Fisherman advice, for example.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "General",
        description: "The General knows who is winning.",
        intro: `<ul><li>If the good team is winning, the Storyteller gives a thumbs up. If the evil team is winning, the Storyteller gives a thumbs down. If neither team is winning, or the Storyteller isn't sure, the Storyteller gives a thumbs to the side.</li><li>The Storyteller is the judge on which team is winning. Many factors may be included, such as how many players of each team are still alive, how much information the good team has, how successful the evil team's bluffs seem to be, which players the group wants to execute next, or how experienced the Demon player is. All of these, and more, will inform the Storyteller's judgment.</li><li>The Storyteller decides who is winning at the point that the General wakes. Previous events in the night may affect their decision.</li></ul>`,
        ability: 'Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.',
        flavor: '"I don\'t have time for quotes."',
        examples: `<p>There are five good players alive and three Minions alive. Even though the Demon is very suspicious and will probably be executed next, there is a Scarlet Woman in play, who is trusted. The Storyteller gives a thumbs down.</p><p>The Good team has a lot of information, and believes that their false information is indeed false. The only Minion is dead. The Storyteller gives a thumbs up.</p><p>The Po is a very experienced player and is coordinating well with the Minions. The Monk is successfully protecting the Savant each night and the good team have correctly identified several good players. However, the Po will probably kill three times tomorrow night, so it is very uncertain who will win. The Storyteller gives a thumbs to the side.</p>`,
        howToRun: `<p>Each night, wake the General. If you believe that the good team is winning, give a thumbs up. If you believe that the evil team is winning, give a thumbs down. If you don't know which team is winning, give a thumbs to the side. Put the General to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "High Priestess",
        description: "The High Priestess acts on intuition.",
        intro: `<ul><li>The High Priestess can be shown the same player multiple times in a row, or a different player every night.</li><li>The shown player can be alive or dead.</li><li>The shown player can be good or evil.</li><li>There are no official criteria that determine which player the Storyteller must show to the High Priestess. It is up to the Storyteller's judgement as to what they think will most benefit the High Priestess and the good team in general. It could be because the player has important information that has not been revealed yet. Or because the player is evil and has a bluff that doesn't make sense. Or because the player is trustworthy and needs to be trusted more. Or because the player is good but on the wrong track and needs to be corrected. Or something new.</li></ul>`,
        ability: 'Each night, learn which player the Storyteller believes you should talk to most.',
        flavor: '"There is life behind the personality that uses personalities as masks. There are times when life puts off the mask and deep answers to deep."',
        examples: `<p>On the first night, the High Priestess learns Julian. Julian is the Chef and has useful information to share. On the second night, the High Priestess is shown Marianna. Marianna is the Goblin and the Storyteller thinks that the High Priestess would benefit most from talking to Marianna to find this out as early as possible. On the third night, the High Priestess is shown Doug. Doug is the Drunk whose information is wrong and harming the good team.</p><p>For three nights in a row, the High Priestess learns Sarah. Sarah is the Saint and the good team are trying to execute her. On the last night, the High Priestess learns Lewis. Lewis is the Imp, and his story is clashing with several good players.</p>`,
        howToRun: `<p>Each night, wake the High Priestess. Point to a player. Put the High Priestess to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Huntsman",
        description: "The Huntsman saves the Damsel before the Minions find her...hopefully.",
        intro: `<ul><li>The Damsel can be in play without the Huntsman. During the setup phase, if the Huntsman is in play and the Damsel isn't, the Damsel is added. If a Damsel is already in play, the Huntsman doesn't add a second Damsel.</li><li>If the Huntsman correctly chooses the Damsel at night, the Damsel becomes a not-in-play Townsfolk immediately. The Storyteller chooses which Townsfolk character, and the Damsel learns which one.</li><li>When the Damsel becomes a Townsfolk, they gain that Townsfolk ability and lose the Damsel ability.</li><li>The Huntsman gets one guess, and makes it at night.</li><li>The Minions get one guess in total, and make it publicly during the day. If a Minion guesses who the Damsel is, evil wins. If a Minion incorrectly guesses who the Damsel is, the guess is used, and other Minions cannot win by correctly guessing the Damsel.</li><li>If the Damsel is drunk or poisoned but the Huntsman is sober and healthy, the Damsel can still become a Townsfolk.</li></ul>`,
        ability: 'Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]',
        flavor: '"My cabin is warm and sturdy. My axe by the door, my boots drying by the fire, and elk stew a-simmering… Hark! A scream echoes through the valley! The rain and the mud and the cold, cold wind mask the scent of the wolves, but I know the path and my pace is steady. I am coming."',
        examples: `<p>The Huntsman is woken on the first night, but does not use their ability. On the second night, the Huntsman chooses the Damsel player. The Damsel becomes the Noble and learns three players <i>(one of which is evil)</i> that night.</p><p>The Huntsman chooses Lachlan. Lachlan is the Choirboy, so nothing happens. The Huntsman is no longer woken at night.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, if the Damsel is not already in play, remove a Townsfolk character token and add the Damsel character token.</p><p>Each night, wake the Huntsman.</p><p>If they shake their head no, put the Huntsman to sleep.</p><p>If they point to a player, put the Huntsman to sleep. <strong>The Huntsman loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet. If they chose the Damsel, wake the Damsel, show the <strong>YOU ARE</strong> info token, then a not-in-play Townsfolk token, then put the Damsel to sleep. The Damsel now has this Townsfolk ability, so replace the Damsel character token with this Townsfolk character token.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "King",
        description: "The King learns which characters are still alive.",
        intro: "<ul><li>The King only gains this ability after a few nights have passed—once the dead players equal or outnumber the living.</li><li>At the start of the game, the Demon learns who the King is. If a King is created mid-game, the Demon learns who the King is that night.</li><li>The King may not survive long enough to use their ability. Once the number of dead players is greater than or equal to the number of alive players, the King learns one alive character each night.</li><li>The King may learn good or evil characters, and may even learn the same character more than once.</li><li>There may not be a Choirboy in play. But if there is, and they are still alive when the Demon kills the King, the Choirboy learns who the Demon is.</li></ul>",
        ability: 'Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows you are the King.',
        flavor: '"Betwixt the unknown strains of mortal strife<br>And morbid night, sweet with mystery and woe<br>Lies unfettered joys of fate\'s long and colored life<br>Who\'s garden blooms with each painted face to show."',
        examples: `<p>Amy is the King. There are twelve players alive, and one dead player. On the second night, she learns nothing. On the third night, she learns nothing. On the fourth day, there are seven dead players and six alive players. On the fourth night, Amy learns that the Snitch is alive. On the fifth night, she learns that the Witch is still alive.</p><p>The Demon knows that Abdallah is the King. Evin is claiming to be the Choirboy, but is the Butler. The Demon takes a risk and kills Abdallah. If Evin was actually the Choirboy, Evin would have learnt which player was the Demon.</p>`,
        howToRun: `<p>During the first night, wake the Demon. Show them the <strong>THIS PLAYER IS</strong> info token, then the King token, then point at the King player. Put the Demon to sleep.</p><p>When the number of dead players equals or exceeds the number of alive players, add a night token to the King's entry on the night sheet.</p><p>Each night, if the King has a night token on the night sheet, wake the King. Show one alive character token. Put the King to sleep.</p><p class="modal__callout-box">Think carefully about what character tokens to show the King. Don't be afraid to give great information. Most Kings will die before the final day. A King that lives to the final day will usually win, and that's ok.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Knight",
        description: "The Knight knows players that are not the Demon.",
        intro: "<ul><li>On the first night, the Knight learns two players who are not the Demon.</li><li>On subsequent nights, they learn nothing more.</li><li>The Knight can learn Townsfolk, Outsiders or even Minions but does not learn which character type they are.</li></ul>",
        ability: 'You start knowing 2 players that are not the Demon.',
        flavor: '"When a man lies, he murders some part of the world."',
        examples: `<p>Lewis is the Undertaker, Doug is the Imp and Ben is the Fortune Teller. The Knight learns Lewis and Ben.</p><p>Marianna is the Vortox and Abdallah is the Alchemist. The Knight learns Marianna and Abdallah. The Knight must learn Marianna and Abdallah because the Knight's information must be false due to the Vortox ability and therefore include the Demon.</p>`,
        howToRun: `<p>During setup, mark two non-Demon players with the Knight's <strong>KNOW</strong> reminders. During the first night, wake the Knight. Point to the two players marked <strong>KNOW</strong>.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Lycanthrope",
        description: "The Lycanthrope roams at night, killing the innocent, whilst the Demon cowers indoors.",
        intro: `<ul><li>The Lycanthrope must choose an alive player each night. If the Lycanthrope chooses a dead player, the Storyteller shakes their head no and prompts the Lycanthrope to choose a different player.</li><li>If the player that the Lycanthrope chooses is good, that player dies, and the Demon can not kill tonight.</li><li>If the player the Lycanthrope attacks is evil, that player does not die, and the Demon may still kill tonight.</li><li>If the Lycanthrope attacks a good player but that good player doesn't die, the Demon may still kill tonight.</li><li>One good player registers as evil. They also register as evil to the Lycanthrope, so cannot be killed by the Lycanthrope.</li></ul>`,
        ability: "Each night*, choose an alive player. If good, they die & the Demon doesn't kill tonight. One good player registers as evil.",
        flavor: '"Beneath the thin veneer of civilisation lies a howling madness."',
        examples: `<p>The Lycanthrope attacks the General. The General dies. Later that night, the Imp attacks the Amnesiac. The Amnesiac does not die, because the Imp cannot kill tonight.</p><p>The Lycanthrope attacks the Farmer. The Farmer dies, and another good player becomes a Farmer. The Magician was poisoned by the Pukka last night but does not die tonight, because the Pukka cannot kill tonight.</p><p>The Lycanthrope attacks the Godfather. The Godfather does not die, because the Godfather is evil. The Lycanthrope attacks the Zealot, who is registering as evil due to the Lycanthrope’s ability. The Zealot does not die. The Demon attacks the Lycanthrope and the Lycanthrope dies.</p>`,
        howToRun: `<p>During setup, mark one good player with the Lycanthrope's <strong>FAUX PAW</strong> reminder.</p><p>Each night except the first, wake the Lycanthrope. They point at any player. Put the Lycanthrope to sleep. If the chosen player is good, that player <strong>dies</strong>—mark them with the Lycanthrope's <strong>DEAD</strong> reminder. Later that night, wake the Demon, as normal, but the Demon can not kill. If the chosen player is evil, nothing happens.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Magician",
        description: "The Magician confuses the evil players about who is evil and who isn't.",
        intro: `<ul><li>On the first night, instead of learning which player is the Demon, the Minions are told that both players—the Demon and the Magician—are the Demon.</li><li>On the first night, the Demon learns that the Magician player is one of its Minions.</li><li>The Magician does not wake to learn anything.</li><li>The Storyteller can point to the Magician and the evil players in any order, so that the evil players won't know which player is the Magician.</li><li>If the Poppy Grower dies and the Demon and Minions learn who each other are mid-game, the Magician ability has an effect that night, just as if it was the first night.</li></ul>`,
        ability: 'The Demon thinks you are a Minion. Minions think you are a Demon.',
        flavor: '"1... 2... Abra... 3... 4... Cadabra... *poof!*<br>And, as you can see, ladies and gentlemen, Captain Farnsworth\'s bag of gold has disappeared! Gone! Without a trace! Thank you, and goodnight!"',
        examples: `<p>Julian is the Leviathan and Sarah is the Magician. The Minions wake to learn that either Julian or Sarah is the Demon. Julian learns that the Fearmonger player, the Assassin player, and the Magician player are all Minions.</p>`,
        howToRun: `<p>During the first night, wake the Minions. Show them the <strong>THIS IS THE DEMON</strong> info token, then point to the Demon and the Magician. Put the Minions to sleep.</p><p>During the first night, wake the Demon. Show the <strong>THESE ARE YOUR MINIONS</strong> info token, then point to all Minions and the Magician. Show the <strong>THESE CHARACTERS ARE NOT IN PLAY</strong> info token and three character tokens. Put the Demon to sleep.</p><p>Do this instead of the normal Minion Info and Demon Info steps.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Nightwatchman",
        description: `The Nightwatchman is known by one player.`,
        intro: "",
        ability: 'Once per game, at night, choose a player: they learn you are the Nightwatchman.',
        flavor: '"The night is cold and lonely, but I have the moon, the stars, the crisp wind and the soft thud of leather boots on cobbled stone for company. Yonder, candlelight flickers behind a murky window..."',
        examples: `<p>Lachlan is the Nightwatchman. He chooses Abdallah. Abdallah learns that Lachlan is the Nightwatchman.</p><p>Marianna is the drunk Nightwatchman. She chooses Amy. Amy does not wake, and does not learn that Marianna is the Nightwatchman, because the Nightwatchman has no ability.</p><p>Ben is the Nightwatchman and Vortox is in play. Ben chooses Sarah. Sarah learns that Lewis is the Nightwatchman. Even though the Nightwatchman has their ability, the information is false.</p>`,
        howToRun: `<p>Each night, wake the Nightwatchman. If they shake their head, put them back to sleep. If they point at a player, put the Nightwatchman to sleep, wake the chosen player and show them the <strong>THIS CHARACTER SELECTED YOU</strong> info token and the Nightwatchman token, then point to the Nightwatchman player before putting them back to sleep. Mark the Nightwatchman with the <strong>NO ABILITY</strong> reminder token.</p><p>If the Nightwatchman is drunk or poisoned when they choose a player, put them back to sleep, do not wake the chosen player and mark that they have used their once per game ability.</p><p>If there is a Vortox in play, wake the player the Nightwatchman chose, then show that player the relevant tokens and point to any player except the Nightwatchman.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Noble",
        description: "The Noble learns that one of three players is evil.",
        intro: `<ul><li>The Noble learns their information on the first night only.</li><li>If a Noble is created mid-game, the Noble learns their information on their first night.</li><li>The Noble learns two good players and one evil player. They may not learn one good player and two evil players. They may not learn three evil players.</li></ul>`,
        ability: 'You start knowing 3 players, 1 and only 1 of which is evil.',
        flavor: '"Sarcasm is indeed the lowest form of wit. But speaking in response to your criticism, Sir, it is, nevertheless, a form of wit."',
        examples: `<p>The Noble is shown Marianna, Alex, and Abdallah. Marianna and Abdallah are good, and Alex is evil.</p><p>The Noble learns Doug, Lachlan and Ben. Doug is the Empath. Lachlan is the Saint. Ben is the Recluse, who has registered as evil to the Noble.</p><p>On the third night, the Pit-Hag turns Amy into the Noble. Amy learns that Evin, Sarah, or Julian is evil. However, Sarah is the evil Spy and has registered as good, and Julian is the Po, who is also evil.</p>`,
        howToRun: `<p>While preparing the first night, mark two good players' character tokens with Noble <strong>KNOW</strong> reminders. Mark any evil character token with the third <strong>KNOW</strong> reminder.</p><p>During the first night, wake the Noble. Point to all three players marked <strong>KNOW</strong>. Put the Noble to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Pixie",
        description: "The Pixie pretends to be the same character as someone else.",
        intro: `<ul><li>On the first night, the Pixie learns an in-play Townsfolk. The Storyteller chooses which Townsfolk this is. The Pixie does not learn which player is this character.</li><li>If the Pixie player pretends that they are this Townsfolk, they gain the ability of this Townsfolk when the Townsfolk dies. They could have spoken loudly about being the character for one day, or pretended to be the character each day this game, or accused the Townsfolk of being a liar—the Storyteller is the judge of whether or not the player was convincing, by "being mad that they are this character".</li><li>When the Townsfolk player dies, the Pixie does not learn this, and is not told that they have gained a new ability. They may learn this has happened if they wake at night and start gaining information, or are prompted to choose players.</li><li>If the player the Pixie learns about changes character then dies, the Pixie becomes the Townsfolk the Pixie learnt about, not the new character.</li></ul>`,
        ability: 'You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.',
        flavor: '"Round and round the garden, go.<br>Little girls run to and fro.<br>Little boys climb up the tree.<br>Which of these should Pixie be?<br>Ladies smile and go to town.<br>Lords with axe chop forest down.<br>What\'s yours is mine. What\'s mine, divine.<br>Silly little Pixie, me."',
        examples: `<p>Amy is the Pixie, and knows that the General is in play. For three days, Amy claims that the General player is lying, because she is the General. The General is executed. That night, Amy gains the General ability, and gains information each night from now on.</p><p>Doug is the drunk Pixie. He learns that the Lycanthrope is in play. There is no Lycanthrope in play, but the Fearmonger bluffs as the Lycanthrope. The Fearmonger dies. The Storyteller, pretending that Doug has the Lycanthrope ability, wakes Doug and Doug chooses a player to "attack" each night. They do not die because Doug does not have the Lycanthrope ability.</p><p>On the first day, the Pixie player claims to be the Soldier. The real Soldier also claims to be the Soldier. The Pixie player doesn't dispute this. When the Soldier dies, the Pixie player does not gain the Soldier ability, as the Storyteller feels that the Pixie did not convincingly pretend to be the Soldier.</p>`,
        howToRun: `<p>During the first night, mark a Townsfolk character token with the Pixie's <strong>MAD</strong> reminder. Wake the Pixie. Show the Pixie this Townsfolk character token. Put the Pixie to sleep.</p><p>If the Townsfolk marked <strong>MAD</strong> dies, and you feel that the Pixie player has been sufficiently <strong>mad</strong> that they were this character, replace the <strong>MAD</strong> reminder with the <strong>HAS ABILITY</strong> reminder. The Pixie now has this Townsfolk's ability, and will wake at night when this Townsfolk would normally wake.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Poppy Grower",
        description: "The Poppy Grower prevents the evil players learning who each other are.",
        intro: `<ul><li>The Demon still learns three not-in-play characters that are safe to bluff as.</li><li>If the Poppy Grower dies, the Demon and Minions learn who each other are, as though it were the first night again.</li><li>If the Poppy Grower becomes drunk or poisoned, Demons and Minions do not suddenly learn who each other are. If the Poppy Grower is drunk or poisoned when they die, Demons and Minions do not learn who each other are, since the Poppy Grower has no ability that night.</li><li>An evil Traveller still learns which player is the Demon when that Traveller enters play.</li></ul>`,
        ability: 'Minions & Demons do not know each other. If you die, they learn who each other are that night.',
        flavor: '"In the hidden groves of the deep forest, the black poppy dwells. To see its revelry is to be enchanted. To smell its thick aroma is to be lost forever, a slave to the gods of light and dark."',
        examples: `<p>The Imp, Poisoner and Witch are in play. On the first night, the Imp wakes to learn three not-in-play characters, but does not learn which players are Minions. The Poisoner and the Witch do not wake to learn who each other are, and do not learn who the Demon is.</p><p>The Poppy Grower is executed, and dies. That night, the Shabaloth learns which players are the Minions. The dead Godfather and the alive Baron wake, make eye contact, and learn which player is the Shabaloth.</p><p>The Poppy Grower is drunk. On the first night, the evil players learn who each other are, as normal. On the fourth night, the Demon kills the Poppy Grower. The Demons and Minions do not wake to learn who each other are again, because the Poppy Grower is drunk.</p>`,
        howToRun: `<p>During the first night, wake the Demon. Show the <strong>THESE CHARACTERS ARE NOT IN PLAY</strong> info token, then any three good character tokens that are not in play. Then, put the Demon to sleep. Do not do the Minion Info and Demon Info steps.</p><p>If the Poppy Grower dies, mark them with the <strong>EVIL WAKES</strong> reminder. That night, wake the Minions and let them make eye contact. Show the <strong>THIS IS THE DEMON</strong> info token, then point to the Demon. Put the Minions to sleep. Wake the Demon. Show the <strong>THESE ARE YOUR MINIONS</strong> info token, then point to the Minions. Put the Demon to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Preacher",
        description: `The Preacher removes the Minion abilities of selected players.`,
        intro: "",
        ability: 'Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.',
        flavor: '"It is better to be rich and healthy than poor and sick."',
        examples: `<p>Alex is the Preacher. On the first night, the Preacher chooses the Fearmonger. The Fearmonger loses their ability and learns that they have been chosen by the Preacher. On the second night, the Preacher chooses the Slayer. Nothing happens because the Slayer is not a Minion. On the third night, the Preacher chooses the Po. Nothing happens because the Po is not a Minion. On the fourth night, the Preacher chooses the Poisoner. The Poisoner loses their ability and learns that they have been chosen by the Preacher.</p><p>The Preacher has previously chosen the Spy, the Saint, the Drunk, and the Goblin. The Spy and the Goblin have no ability, so the Spy doesn't see the Grimoire each night, and the Goblin cannot win by being executed. The Preacher becomes drunk. The Spy and the Goblin regain their abilities. The Spy sees the Grimoire that night, and the Goblin will win if executed. The Preacher becomes sober, so once again the Spy and Goblin have no abilities. The Spy dies. The Preacher dies. The Goblin gets their ability back, but the Spy does not, because the Spy is dead.</p>`,
        howToRun: `<p>Each night, wake the Preacher and have them choose a player. If they choose a Minion, put a <strong>PREACHED</strong> reminder token next to that Minion. Put the Preacher to sleep. If applicable, wake the Minion the Preacher chose tonight, show them the <strong>THIS CHARACTER SELECTED YOU</strong> card and the Preacher token. Put the Minion back to sleep.</p><p>From now on, that Minion has no ability. If they would normally wake at night to make a choice, take an action or learn information due to their ability, they no longer do so. If their ability would otherwise have an effect on the game while they are marked by the <strong>PREACHED</strong> token, it does not.</p><p>If the Preacher dies, remove all <strong>PREACHED</strong> tokens from affected Minions. The Minions regain their abilities. Minions with expended once-per-game abilities do not gain another use of that ability. Affected Minions are not told that the Preacher is dead, but may be able to figure it out when they start waking up again etc.</p><p>If a Preacher is made drunk or poisoned, Minions who have lost their abilities to the Preacher regain them, but lose them again when the Preacher becomes healthy and sober.</p><p>If a Minion who has been chosen by the Preacher later becomes a different type of character (ie not a Minion), they are no longer affected by the Preacher's ability. Remove the relevant <strong>PREACHED</strong> reminder token. Also, evil players are not affected by the Preacher ability just because they're evil, they need to be explicitly a Minion character in order to be affected.</p><p>In a similar vein, a non-Minion who later becomes a Minion is not affected by having been chosen by the Preacher before they became a Minion. If the Preacher chooses them after they become a Minion, the Preacher ability works as normal.</p><p>If a preached Minion dies and is resurrected they do not regain their ability, they are still preached provided the Preacher is still alive.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Princess",
        description: `The Princess decides which player dies first.`,
        intro: "<ul><li>For the Princess ability to work, the player that the Princess nominated must be the one executed. Players executed but nominated by others don't count.</li><li>The executed player does not have to die for the Princess ability to work.</li><li>Exiles don't count for the Princess ability.</li><li>If the Princess is drunk during the day, then sober at night, they prevent the Demon from killing. If the Princess is sober during the day, but drunk at night, they do not.</li><li>At night, non-Demon kills happen as normal.</li><li>At night, the Demon still chooses a player to kill, but they do not die. Other parts of the Demon's ability, such as poisoning players, making false information, etc. happen as normal.</li><li>The Princess does not have to nominate on their 1st day.</li><li>If a Princess is created mid-game, and they nominated and executed a player on their 1st day, the Demon doesn't kill that night.</li></ul>",
        ability: 'On your 1st day, if you nominated & executed a player, the Demon doesn\'t kill tonight.',
        flavor: '"Our words are hounds, bound by silken threads, dear lords. Let kindness weave them true, lest the reigns unravel and rend our court."',
        examples: `<p>The Princess nominates the Preacher. The Preacher is executed, and dies. That night, the Vortox chooses the Pixie, who does not die. The Town Crier learns that a Minion nominated today, which is false information due to the Vortox.</p><p>On night 4, the Pit-Hag turns the Dreamer into the Princess. That day, the Princess nominates the Zealot, who is executed. That night, the Kazali chooses the Princess, who does not die.</p>`,
        howToRun: `<p>If the Princess nominates and executes a player, mark the Demon with the <strong>DOESN'T KILL</strong> reminder.</p><p>Tonight, if the Demon would wake to choose a player, wake them as normal. The Demon does not kill.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Shugenja",
        description: `The Shugenja trusts players to their left, or to their right.`,
        intro: "<ul><li>The closest evil player is the player with the smallest number of steps from the Shugenja to the evil player.</li><li>If the evil players are 'equidistant', that means that the closest evil player clockwise is the same number of steps away from the Shugenja as the closest evil player anti-clockwise.</li><li>If the evil players are equidistant, the storyteller gives 'arbitrary' information to the Shugenja. This means that the Storyteller chooses whether to tell the Shugenja that the closest evil player is clockwise or anti-clockwise.</li><li>The Shugenja doesn't know whether their information is arbitrary or not.</li><li>The Shugenja does not learn how many steps away the evil player is.</li><li>If a Shugenja is created mid-game, the Shugenja wakes that night to receive their information.</li><li>The Storyteller communicates with the Shugenja by pointing a finger in the appropriate direction, but may use other methods if they wish.</li></ul>",
        ability: 'You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary.',
        flavor: `これは夢。それも夢。すべて夢です。`,
        examples: `<p>The Organ Grinder is 2 steps away from the Shugenja in a clockwise direction. The Fearmonger is 3 steps away from the Shugenja in an anti-clockwise direction. The Shugenja wakes and learns that the closest evil player is in a clockwise direction.</p><p>The Marionette is 1 step away from the Shugenja in a clockwise direction. The Widow is 1 step away from the Shugenja in an anti-clockwise direction. The Shugenja wakes and the Storyteller chooses to tell the Shugenja that the closest evil player is in a clockwise direction.</p>`,
        howToRun: `<p>During the first night, wake the Shugenja. If the closest evil player is in a clockwise direction, point your finger horizontally in that direction. If the closest evil player is in an anti-clockwise direction, point your finger horizontally in that direction. If the two closest evil players are equidistant, point your finger horizontally in either direction. Put the Shugenja to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Steward",
        description: `The Steward knows 1 good player.`,
        intro: "<ul><li>The Steward learns a player, but not their character.</li><li>The Steward learns their information on the first night of the game.</li><li>If created mid-game, then the Steward learns their information that night instead.</li></ul>",
        ability: 'You start knowing 1 good player.',
        flavor: `"How DARE you accuse Her Ladyship of wrongdoing? I've known her my entire life! All nine years!"`,
        examples: `<p>The Steward learns that Alex is good. Alex is the Undertaker. The Pit-Hag turns the Poppy Grower into the Steward. That night, the Steward learns that Abdallah is good. Abdallah is the Spy, and is registering as good.</p>`,
        howToRun: `<p>While preparing the first night, put the <strong>KNOW</strong> reminder by any good character token. During the first night, wake the Steward. Point to the player marked <strong>KNOW</strong>. Put the Steward to sleep.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Village Idiot",
        description: `The Village Idiots are a group that learn players' alignments.`,
        intro: "<ul><li>The Village Idiot that is drunk is chosen by the Storyteller during the game setup.</li><li>There may be one, two, or three Village Idiots in play, irrespective of the number of players.</li><li>If there is only one Village Idiot in play, they are sober.</li><li>The drunk Village Idiot may get true information.</li><li>When Village Idiots are added to the game during setup, they replace other Townsfolk.</li><li>If a Village Idiot is created mid-game, only one is created.</li><li>Village Idiots act one at a time, not all together.</li><li>If all sober Village Idiots exit play, the remaining drunk Village Idiot remains drunk.</li><li>If a sober Village Idiot becomes drunk or poisoned by other means, the drunk Village Idiot remains drunk.</li></ul>",
        ability: 'Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]',
        flavor: `"Roses are blue, and violets are red, Please reverse what I just said."`,
        examples: `<p>Doug, Lewis, and Amy are all Village Idiots. Doug is drunk. At night, they all choose Evin, the Kazali. Doug learns that Evin is good. Lewis and Amy learn that Evin is evil.</p><p>Ben and Marianna are Village Idiots. Marianna is drunk. Sarah is evil, and bluffing as the Village Idiot. Ben chooses Sarah and learns that she is evil. Marianna chooses the Heretic player and learns that they are good. Sarah claims to have chosen Ben and learnt that he is evil.</p>`,
        howToRun: `<p>While setting up the game, before putting the character tokens in the bag, replace zero, one or two Townsfolk tokens with Village Idiot tokens. While preparing the first night, mark one Village Idiot with the <strong>DRUNK</strong> reminder.</p><p>During each night, wake any Village Idiot. They point to a player. Give a thumbs up or a thumbs down. Put that Village Idiot to sleep. Repeat until all Village Idiots have acted.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Damsel",
        description: "The Damsel needs to avoid being found by the Minions.",
        intro: `<ul><li>If a Minion guesses that you are the Damsel, and does so publicly <i>(so that all players know that they are a Minion)</i>, evil wins.</li><li>No matter how many Minions are in play, they only get one guess, total. If a Minion makes a guess and is wrong, future guesses by this Minion or by other Minions don't count.</li><li>If the Demon pretends to be a Minion making a guess, that doesn't count as a guess. Minions may still make a guess and win.</li><li>Minions may make a guess at any time.</li><li>If the Damsel dies, they are no longer at risk of being guessed by a Minion, since the Damsel loses their ability when dead.</li><li>There may not be a Huntsman in play. But if there is, and the Huntsman chooses the Damsel at night, the Damsel becomes a not-in-play Townsfolk, and is no longer the Damsel. The Damsel learns which Townsfolk and has that Townsfolk ability from then on.</li></ul>`,
        ability: 'All Minions know a Damsel is in play. If a Minion publicly guesses you (once), your team loses.',
        flavor: 'Don\'t touch the hair, honey."',
        examples: `<p>Marianna is the Damsel. She is bluffing as the Lycanthrope. The Witch guesses that Marianna is the Damsel. Evil wins.</p><p>Doug is the Damsel. The Boomdandy guesses that Julian is the Damsel. Nothing happens, and the game continues. The Goblin guesses that Doug is the Damsel. Nothing happens, and the game continues.</p>`,
        howToRun: `<p>During the first night, wake each Minion. Show the Damsel token. Put each Minion to sleep.</p><p>At any time during the game, if a Minion publicly guesses which player is the Damsel and is incorrect, mark the Damsel with the <strong>GUESS USED</strong> reminder. Future guesses by Minion players have no effect.</p><p>At any time during the game, if a Minion publicly guesses which player is the Damsel and is correct, the game ends. Declare that the evil team wins.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Golem",
        description: "The Golem kills the player they nominate.",
        intro: `<ul><li>When the Golem nominates a player, that player immediately dies. The nomination process continues.</li><li>If the Golem nominates the Demon, nothing happens. The Storyteller doesn't confirm or deny that the Golem nominated, and continues with the voting process as normal. The Storyteller may say "nothing happens" if clarity is asked for.</li><li>After the Golem has nominated once, whether or not the nominee dies, the Golem may not nominate again this game. It is the player's responsibility to refrain from nominating, not the Storyteller's. Deliberately nominating when they shouldn't is considered cheating.</li></ul>`,
        ability: 'You may only nominate once per game. When you do, if the nominee is not the Demon, they die.',
        flavor: '"Golem help? Golem smash! Golem help."',
        examples: `<p>The Golem nominates the Poppy Grower. The Poppy Grower dies. The Golem may not nominate again this game.</p><p>The Golem nominates the Recluse. The Storyteller decides that the Recluse registers as the Demon. Nothing happens, and the Storyteller begins counting votes for the Recluse to be executed. The Golem may not nominate again this game.</p>`,
        howToRun: `<p>If the Golem nominates a non-Demon, that player <strong>dies</strong>, then the vote continues as normal. Mark the Golem with the <strong>MAY NOT NOMINATE</strong> reminder.</p><p>If the Golem nominates the Demon, the vote continues as normal. <i>(Do not say why.)</i> Mark the Golem with the <strong>MAY NOT NOMINATE</strong> reminder.</p><p class="modal__callout-box">If the Golem accidentally nominates when they shouldn't, you can either accept or not accept the nomination. It is best to not accept the nomination—as long as you think that this won't confirm that a Golem is in play. To keep things fair, also do this for players bluffing as the Golem, reminding them that the Golem cannot nominate more that once.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Hatter",
        description: "The Hatter allows the evil players to change characters.",
        intro: `<ul><li>Each evil player may choose to become any character of the same type as their current character.</li><li>They may choose not to change characters.</li><li>If a player becomes a new character, they gain the new ability, even if it was a "you start knowing" ability or a once per game ability that had already been used.</li><li>Once a player has changed character, their previous character ability has no further effect on the game.</li><li>If a player dies then becomes the Hatter, the evil players do not change characters tonight.</li><li>Once a character has been chosen, a second player cannot choose the same character. If it is already in play, the player with that character must choose a new character.</li></ul>`,
        ability: 'If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be.',
        flavor: '"One Hat. Too Hat. Three Hat. Tea Hat. Fore Hat. Thrive Hat. Six Hat. Sticks Hat."',
        examples: `<p>The Hatter dies. The Ojo chooses to become the No Dashii and the Devil's Advocate chooses to become the Scarlet Woman.</p><p>The Vigormortis has killed their Pit-Hag, then later kills the Hatter. Both players choose to stay the same characters, so that they don't lose the effects of the Vigormortis.</p><p>The Assassin kills a player. The Hatter is executed. That night, the Assassin becomes the Mastermind and the Mastermind shakes their head no to stay the Mastermind. The Storyteller shakes their head no because the Mastermind character has been chosen already, and gestures for the Mastermind player to choose again, so they choose Assassin. The new Assassin then uses their new ability to kill a player.</p>`,
        howToRun: `<p>If the Hatter dies, mark them with the “Tea Party Tonight” reminder.</p><p>During that night, wake the Minions and Demon. Show them the “This Character Selected You” info token, then the Hatter token. Each player either shakes their head no or points to another character of the same type as their current character. If a second player would end up with the same character as another player, shake your head no and gesture for them to choose again. Put them to sleep. Remove the “Tea Party Tonight” reminder. Change each player to the character they chose.</p><p class="modal__callout-box">Optional rule: if the Hatter dies, allow the Demon to become a Minion, and a Minion to become a Demon. This may cause some chaos among the evil team as they try to communicate silently at night about who wants to be the Demon.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Heretic",
        description: "The Heretic turns a win into a loss, and a loss into a win.",
        intro: `<ul><li>If the game ends due to the good team winning, then all good players lose, and all evil players win.</li><li>If the game ends due to the evil team winning, then all evil players lose, and all good players win.</li><li>This Heretic's ability applies to all victory conditions, including the game ending due to just two players being alive, the Demon dying, or an ability ending the game.</li><li>The Heretic's ability functions even when the Heretic is dead, but not when the Heretic is drunk or poisoned.</li></ul>`,
        ability: 'Whoever wins, loses & whoever loses, wins, even if you are dead.',
        flavor: '"After the hail has smashed the roof and splintered the glass of the Cathedral windows, it melts again into the earth, like a dying lamb in the desert sun. Such is the parable of the madman."',
        examples: `<p>On the first day, the Heretic publicly claims to be the Heretic. That night, the Demon kills themselves. Evil wins.</p><p>The Heretic does not reveal their character until the final day, when three players are alive. The Heretic convinces the good team to execute a good player, leaving two players alive, one of which is the Demon. Good wins.</p><p>The Heretic is dead. The Saint is executed. Good wins.</p><p>The Heretic is poisoned. The Assassin kills the Demon. Good wins.</p><p>A Heretic is in play. There are three players alive. The Demon is executed. Evil wins.</p>`,
        howToRun: `<p>If the game ends and the evil team would have won, declare that the good team wins and the evil team loses.</p><p>If the game ends and the good team would have won, declare that the evil team wins and the good team loses.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Hermit",
        description: "The Hermit isn't really here.",
        intro: `<ul><li>The Hermit has the abilities of all the other Outsiders on the Script, all at once. They do not have the abilities of Outsiders that are not on the script.</li><li>If a custom script has more than 4 Outsiders, the Hermit has all these Outsider abilities.</li><li>If one of the Outsider abilities continues after death, such as the Recluse's, the Hermit keeps that ability when they die, but does not keep their other Outsider abilities.</li><li>A Hermit with the Drunk ability does not know that they are the Hermit, and their other Outsider abilities function as normal. A Hermit with the Recluse ability can register as a different character etc.</li><li>If an Outsider has a jinx, that jinx applies to the Hermit too.</li><li>The Hermit may remove the Hermit from play during setup, resulting in one less Outsider than normal. If this happens, the Hermit may still be a bluff given to the Demon.</li></ul>`,
        ability: 'You have all Outsider abilities. [-0 or -1 Outsiders]',
        flavor: '"In the lost and forgotten places of the earth, the soul\'s light beckons."',
        examples: `<p>Marianna is the Hermit, and has the Klutz, Butler, and Recluse abilities. Each night, she chooses a player as her master due to the Butler ability. The Ravenkeeper dies and learns that she is the Lord of Typhon, due to the Recluse ability. Marianna is executed, and chooses a player due to the Klutz ability. She chooses the Wizard. Good loses.</p><p>Lewis is the Hermit and has the Drunk, Mutant, and Sweetheart abilities. Thinking that he is the Exorcist, he chooses a player each night. Lewis says that he thinks he might be the Drunk, so the Storyteller executes him due to the Mutant ability. Due to the Sweetheart ability, the Alchemist is now drunk.</p>`,
        howToRun: `<p>During setup, you may remove an Outsider token and add a Townsfolk token.</p><p>Whenever appropriate, treat the Hermit as if they are the other Outsiders, including waking them at night, and using other Outsiders' reminder tokens. If the Hermit duplicates an in-play Outsider, use the Hermit's <strong>1</strong>, <strong>2</strong> and <strong>3</strong> reminders instead.</p><p class="modal__callout-box">If Outsider abilities clash, make up a rule to fix the clash, and tell the group. For example, for a Hermit-Butler-Zealot, you may declare that the Hermit must vote when their master votes.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Ogre",
        description: "The Ogre is someone's best friend.",
        intro: `<ul><li>The Ogre's chosen player does not change, even if the Ogre is drunk or poisoned when they chose.</li><li>The Ogre becomes the same alignment as their chosen player immediately on the first night, even if the Ogre is drunk or poisoned.</li><li>The Ogre is not told their alignment at the beginning of the game.</li><li>If the Ogre changes alignment by other means, the Ogre learns their new alignment, as normal.</li><li>If an Ogre is created mid-game, the Ogre chooses a player that night, and becomes their alignment.</li></ul>`,
        ability: "On your 1st night, choose a player (not yourself): you become their alignment (you don't know which) even if drunk or poisoned.",
        flavor: '"*grunt* *grin* *grunt*"',
        examples: `<p>On the first night, the Ogre chooses the Summoner. The Ogre becomes evil, and stays evil for the rest of the game.</p><p>On the first night, the Ogre chooses the Banshee. The Ogre stays good. On the third night, the Mezepheles turns the Banshee evil. The Ogre remains good.</p>`,
        howToRun: `<p>During the first night, wake the Ogre. The Ogre points to a player. Put the Ogre to sleep. If the Ogre pointed to an evil player, flip the Ogre's character token upside down to represent that the Ogre is evil.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Plague Doctor",
        description: "The Plague Doctor brings an extra Minion ability into play.",
        intro: `<ul><li>The Storyteller chooses which Minion ability is gained.</li><li>This ability is in effect for the rest of the game.</li><li>Nothing else changes for the Storyteller - they don't become evil, they don't become a player, they are not a legitimate player to be targeted by other abilities, and they cannot vote or nominate.</li><li>If all Minions are in play, the Storyteller can gain an in-play Minion ability.</li><li>If the Plague Doctor is drunk or poisoned when they die, the Storyteller doesn't gain a Minion ability, even when the Plague Doctor becomes sober and healthy.</li></ul>`,
        ability: 'When you die, the Storyteller gains a Minion ability.',
        flavor: '"Pleauze shtay shtill. Thinks nid tiime for hillink. Myrhh-myrhh."',
        examples: `<p>The Plague Doctor dies. The Storyteller gains the Poisoner ability and chooses a player to poison each night for the rest of the game.</p><p>The Plague Doctor is executed and the Storyteller gains the Cerenovus ability. That night, the Pit-Hag turns the Witch into the Cerenovus. There are now two Cerenovus abilities in play - the Storyteller's and the new Cerenovus'.</p><p>The Plague Doctor has died and the Storyteller has had the Organ Grinder ability for two days. The Plague Doctor is made drunk by the Minstrel. The Storyteller still has the Organ Grinder ability as they gained it when the Plague Doctor died and the Plague Doctor now being drunk does not affect that.</p>`,
        howToRun: `<p>When the Plague Doctor dies, place a not-in-play Minion character token in the centre of the left side of Grimoire. Mark this with the Plague Doctor's <strong>STORYTELLER ABILITY</strong> reminder. If applicable, add a night token to the night sheet.</p>When this Minion would normally act, the relevant choices are made by the Storyteller.<p></p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Politician",
        description: `The Politician changes teams if they are losing.`,
        intro: "",
        ability: 'If you were the player most responsible for your team losing, you change alignment & win, even if dead.',
        flavor: '"I\'m glad you asked that question. Truly, I am. But I think the REAL question here is…"',
        group: "Outsider",
        examples: `<p>The Politician has been trying to execute the Demon all game, without success. With just three players alive, the Politician convinces the group to not execute, since someone is claiming to be the Mayor. There is no execution, and evil wins because a Minion was bluffing as the Mayor. The Politician wins too.</p><p>On the final day, the Politician votes for the Empath, and tells the group that the Empath is evil. The Saint is executed instead. The Storyteller judges that the good team lost due to their own actions as a group, not just the bad advice of the Politician. Good loses, and the Politician loses.</p><p>The Politician, believing that evil is winning, bluffs as the Atheist. The Storyteller is executed. Evil wins, and the Politician wins too.</p><p>On the final day, the Politician ties the vote, forcing no execution to occur. That night, the Demon kills a player, making evil win. The Politician wins too.</p>`,
        howToRun: `<p>When the game ends, consider the influence the Politician had on the specific result of which team won. If the Politician was the major dominant force in making the opposing team win, they change alignment and win with that team. In all other situations, the Politician stays the same alignment and wins/loses accordingly.</p><p>Note that the Politician only changes alignment right at the end of the game, so even if they're playing for evil, they still register as good for any alignment-checking abilities.</p><p>If the Politician is drunk/poisoned during the game it doesn't matter, except if the game ends during that time. If so, they cannot change alignment in order to win, regardless of how significant their efforts for the opposing team might have been.</p>`,
        script: "exp"
    },
    {
        name: "Puzzlemaster",
        description: "The Puzzlemaster tries to figure out who is drunk.",
        intro: "<ul><li>A player is drunk for the whole game. It will most often be a Townsfolk, but could be an Outsider. This player does not know that they are drunk.</li><li>Once per game, the Puzzlemaster may guess which player it is. They may guess publicly, or privately. Whatever their guess, the Storyteller privately tells the Puzzlemaster the name of one player. If the Puzzlemaster guessed correctly, they learn which player the Demon is. If the Puzzlemaster guessed incorrectly, they learn a different player instead.</li><li>The Puzzlemaster isn't told if they guessed correctly or not.</li><li>Only the player made drunk by the Puzzlemaster counts as a successful guess. Players drunk by other means don't count.</li><li>If the Puzzlemaster dies, the drunk player is still drunk. A dead Puzzlemaster may not make a guess, as they don't have that part of their ability.</li></ul>",
        ability: '1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.',
        flavor: '"When one begins to think that some thing is merely some other thing, one is usually on the brink of an error. Patience, patience. Don\'t confuse just and should with is and isn\'t."',
        examples: `<p>Alex is the Demon. Sarah is the Empath who has been made drunk by the Puzzlemaster and is getting false information. The Puzzlemaster publicly guesses that Sarah is the drunk, and is told "Alex is the Demon" privately by the Storyteller.</p><p>Lewis is the Demon. Ben is dead and is drunk due to the Puzzlemaster. Marianna is alive and drunk due to the Sailor. The Puzzlemaster privately guesses Marianna, and is told "Abdallah is the Demon" privately by the Storyteller.</p>`,
        howToRun: `<p>While preparing the first night, mark any player with the Puzzlemaster's <strong>DRUNK</strong> reminder. This player is <strong>drunk</strong>.</p><p>At any time during the game, the Puzzlemaster may guess a player, either publicly or by having a private discussion with you. If their guessed player is marked by the Puzzlemaster's <strong>DRUNK</strong> reminder, privately tell the Puzzlemaster which player is the Demon. If their guessed player is not marked by the Puzzlemaster's <strong>DRUNK</strong> reminder, privately tell the Puzzlemaster the name of a non-Demon player. <i>(Do not say if they guessed correctly or not.)</i> Either way, mark the Puzzlemaster with the <strong>GUESS USED</strong> reminder.</p><p class="modal__callout-box">While you can make a Minion or the Demon drunk with the Puzzlemaster ability, only do this if you have an excellent reason in mind. It is almost always best to select a Townsfolk player.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Snitch",
        description: "The Snitch gives information to the evil team.",
        intro: `<ul><li>The Minions learn three not-in-play characters at the start of the game, just like the Demon does.</li><li>These characters may be the same three that the Demon learns, or different characters.</li><li>Each Minion may learn different characters to each other. Or they may all learn the same three characters.</li></ul>`,
        ability: 'Each Minion gets 3 bluffs.',
        flavor: '"It was John."',
        examples: `<p>On the first night, the Demon and their two Minions all learn that the Empath, Innkeeper, and Golem are not in play.</p><p>On the first night, the Demon learns that the Fool, Monk, and Saint are not in play. The Mastermind learns that the Fool, Monk, and Saint are not in play. The Witch learns that the Fool, Flowergirl, and Barber are not in play. The Fearmonger learns that the Noble, Insomniac, and Heretic are not in play.</p><p>On the fourth night, the Pit-Hag creates a Snitch. All Minions learn three not-in-play characters.</p>`,
        howToRun: `<p>During the first night, wake a Minion. Show the <strong>THESE CHARACTERS ARE NOT IN PLAY</strong> info token, then show three not-in-play character tokens. Put the Minion to sleep. Repeat this process until all Minions have learnt three not-in-play characters.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Zealot",
        description: "The Zealot votes.",
        intro: `<ul><li>If there are 5 or more players alive, the Zealot must vote for every nomination. If there are 4 or fewer players alive, the Zealot can choose whether they vote or not.</li><li>Travellers count as alive players.</li><li>The Zealot can vote like a normal dead player when dead.</li><li>The Zealot does not need to vote for exiles.</li><li>A Zealot must vote even if they think they might be drunk or poisoned.</li><li>It is not the Storyteller's responsibility to monitor the Zealot. They're responsible for their own voting. Deliberately not voting when they should is considered cheating.</li></ul>`,
        ability: 'Each day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.',
        flavor: '"I enjoy talking to you. Your mind appeals to me. It resembles my own mind except that you happen to be insane."',
        examples: `<p>There are 7 players alive. The Zealot votes for the Alsaahir, the Summoner, Ogre, and the Banshee. The next day, there are 5 players alive. The Zealot votes for the Yaggababble, and the High Priestess. The next day, there are 3 players alive. The Zealot votes for the Yaggababble, but chooses not to vote for the High Priestess.</p><p>There are 9 players alive. The Zealot is dead. The Zealot doesn't vote for 3 days, and uses their vote token when just 3 players are alive to vote for the Farmer.</p>`,
        howToRun: `<p>During each nomination, if there are 5 or more players alive, the Zealot must raise their hand to vote.</p><p class="modal__callout-box">If the Zealot accidentally forgets to vote, do not tally the Zealot's vote. If you do tally the vote, the total will be more than it should be, and all players will know which player is the Zealot, which is unfair for the evil team. Mistakes happen. Just play on and have a private chat later.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Boffin",
        description: "The Boffin replicates a good ability.",
        intro: `<ul><li>While the Boffin is alive, the Demon has a single Townsfolk ability or Outsider ability.</li><li>If the Demon is drunk or poisoned, the Demon keeps this good ability. If the Boffin is drunk or poisoned, the Demon temporarily loses this good ability.</li><li>If the Demon dies and has an ability that functions while dead, such as the Sweetheart, the Demon keeps this ability.</li><li>If a new Demon is created, such as via a Scarlet Woman or a Barber, this new Demon has an ability from the Boffin. This ability may be different to the previous Demon's ability.</li><li>If there are multiple Demons alive, only one alive Demon has an ability from the Boffin.</li><li>If the Demon has an ability that modifies the setup, such as a Choirboy, these changes are made during setup, as normal.</li><li>Both the Demon and the Boffin learn which good ability the Demon has. The Storyteller may wake these players independently, or together.</li><li>The not-in-play character may be 1 of the Demon's 3 bluffs.</li><li>The Demon also wakes at night at the time that the <strong>good</strong> character would normally wake.</li></ul>`,
        ability: "The Demon (even if drunk or poisoned) has a not-in-play good character's ability. You both know which.",
        flavor: '"Stellar hydrogen, vast, inert; carbon, oxygen, neon gases, all ruined. Molecular chaos, entropy, yields new cosmic phenomena, rebirth from atomic chaos, dense matter collapsing. All in a teeny little bottle."',
        examples: `<p>The Imp has the Virgin ability. The Alsaahir nominates the Imp, and is immediately executed.</p><p>The Lord of Typhon has the Chambermaid ability. Each night, the Lord of Typhon wakes, chooses two players, and learns how many woke tonight. On the 4th night, the Boffin is drunk, so the Demon has no Chambermaid ability, so does not wake.</p><p>The Kazali has the Banshee ability. The Kazali dies at night, and the Scarlet Woman becomes the Kazali. The dead Kazali may nominate and vote twice per day.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, make any changes that are indicated in brackets on the Demon's two character abilities. Afterwards, place this second character token by the Demon character token.</p><p>During the 1st night, wake the Boffin and the Demon. Show the <strong>THIS CHARACTER SELECTED YOU</strong> info token, then the Boffin token, then the good character token. Place this second character token by the Demon character token.</p><p>Treat the Demon player as if they had this character ability, as well as their own Demon ability.</p><p class="modal__callout-box">Good abilities that would drunk/poison themselves, such as the Sailor, only drunk/poison the Demon's good ability.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Boomdandy",
        description: "The Boomdandy explodes when executed, killing most other players.",
        intro: `<ul><li>If the Boomdandy is executed, the Storyteller kills other players, one at a time, until only three are left alive.</li><li>The Demon will be one of the remaining three players <i>(otherwise, the game would be over)</i>.</li><li>The players have a short countdown to decide who to kill next. There is no further nomination or execution today. Instead, all players point at the player they want to die. When countdown ends, the Storyteller counts the number of fingers pointed at each player. If it is a tie, then night falls <i>(and evil probably wins due to the Demon killing that night)</i>.</li><li>Even dead players who have no vote token may point.</li><li>Players may change who they are pointing at up until the countdown is over, at which point their decision is final.</li><li>The Boomdandy only explodes due to an execution. Deaths by other means, such as via a Golem or a Psychopath, don't count. If the Boomdandy is executed but doesn't die <i>(due to a Devil's Advocate etc.)</i>, they still explode.</li><li>If a character can't die, such as the Fool or the Sailor, the Storyteller may rule that four players remain alive after a Boomdandy explosion.</li></ul>`,
        ability: 'If you are executed, all but 3 players die. After a 10 to 1 countdown, the player with the most players pointing at them, dies.',
        flavor: '"Tick... Tick... Tick... TOCK."',
        examples: `<p>Amy is the Boomdandy. She is executed. She explodes, killing all players except for the Po, the Witch, and the Moonchild. Frantically, all players start pointing at each other, and talking about who should be pointed at. After the countdown, the Storyteller calls “Freeze” and the Witch has the most number of fingers pointed at them, and dies. Evil wins.</p>`,
        howToRun: `<p>If the Boomdandy is executed, declare that the Boomdandy has exploded. Enter the circle, put your hand out towards the Boomdandy, and rotate around the circle. <i>(Similar to running a vote.)</i> When your hand reaches a living player, say "You live" or say "You die" as that player <strong>dies</strong>. When you have completed the circle, three players will be alive, including the Demon. Then, begin counting down from 10. When the contdown ends, ask all players to immediately freeze <i>(to stay still)</i> while you count the number of players who are pointing at each player. The player with the most fingers pointed at them, <strong>dies</strong>. This will end the game, since just two players are alive, so declare which team has won.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Fearmonger",
        description: "The Fearmonger creates paranoia about who nominates whom.",
        intro: `<ul><li>During the first night, when the Fearmonger selects a player, all players learn this.</li><li>During other nights, each time the Fearmonger selects a new player, all players learn this. If the Fearmonger selects the same player as previously, the players learn nothing.</li><li>The players only learn that the Fearmonger has acted, not which player was selected.</li><li>If the Fearmonger nominates their chosen player, and that nomination results in their execution, the chosen player loses, their team loses, and the game ends.</li><li>Only the currently chosen player is susceptible to the Fearmonger's ability. Previously chosen players don't count.</li><li>If the chosen player is executed but does not die, the chosen player's team still loses.</li></ul>`,
        ability: 'Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player.',
        flavor: '"Beware of gazing long into the Abyss, lest the Abyss also gaze into you."',
        examples: `<p>On the first night, the Fearmonger chooses the Butler. All players learn the Fearmonger has chosen a new player. During the day, the Fearmonger nominates the Butler, and the Butler is executed. Evil wins.</p><p>At night, the Fearmonger chooses the Juggler. The Flowergirl nominates the Juggler, and the Juggler is executed. The game continues.</p><p>The Fearmonger chooses the Empath. The next night, the Fearmonger chooses the Soldier. The Fearmonger nominates and executes the Empath. The game continues because the Fearmonger has selected the Soldier, not the Empath.</p><p>The Fearmonger accidentally chooses the Baron, due to the Poppy Grower being in play. The Fearmonger nominates and executes the Baron. Good wins.</p>`,
        howToRun: `<p>Each night, wake the Fearmonger. They point at any player. Put the Fearmonger to sleep. Mark the chosen player with the <strong>FEAR</strong> reminder. If the Fearmonger chose a player who wasn't already marked with the <strong>FEAR</strong> reminder, declare that "The Fearmonger has chosen a player." <i>(This informs the group that the Fearmonger is alive and has chosen a new player.)</i></p><p>If the Fearmonger nominates the player marked <strong>FEAR</strong>, and that nomination results in their execution, declare that the game is over and which team has won.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Goblin",
        description: `The Goblin takes revenge if the town knowingly executes them.`,
        intro: "<ul><li>If the Goblin is executed, evil wins.</li><li>...but for this to happen the Goblin needs to tell the group that they are the Goblin when they are nominated, but before votes happen, and to do so in a way that everyone hears. The good players need to know the risk.</li><li>If the Goblin is executed without telling the group that they are the Goblin when nominated, the Goblin dies and the game continues as normal.</li><li>The Goblin must have claimed to be the Goblin today for their ability to work. Telling the group yesterday, or even every previous day, doesn't count.</li><li>Any player may claim to be the Goblin when nominated.</li></ul>",
        ability: 'If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.',
        flavor: '"You don\'t want to insult the goblins. You really, really don\'t. On a completely different note… can I have another piece of cake?"',
        examples: `<p>Abdallah is the Goblin. Alex nominates Abdallah, and Abdallah claims to be the Goblin. Votes are taken, and Abdallah is about to die. Other nominations occur later today, but Abdallah is executed. Evil wins.</p><p>Lewis is the Artist, and claims to be the Goblin when nominated. He is executed, and the game continues.</p><p>Doug is the Goblin. He claimed to be the Goblin yesterday and the day before, but not today. He is executed. The game continues.</p>`,
        howToRun: `<p>If the Goblin claims to be the Goblin when nominated (and before voting begins), declare that this player has claimed to be the Goblin, so that all the group hears. Put the <strong>CLAIMED</strong> reminder by the Goblin token.</p><p>If the Goblin is executed, and they are marked <strong>CLAIMED</strong>, then declare that evil wins.</p><p class="modal__callout-box">If a non-Goblin player claims to be the Goblin when nominated, act as if they are the Goblin. Delcare to the group that they have claimed to be the Goblin and pretend to move a reminder token in the Grimoire.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Harpy",
        description: `The Harpy creates discord and distrust between good players.`,
        intro: "<ul><li>At night, the Harpy player chooses one player at a time, not two at once.</li><li>A player chosen by the Harpy is affected by the ability until the next Harpy choice.</li><li>If the Storyteller decides to kill players with the Harpy ability, they must kill both. The Storyteller can not decide to kill only one.</li><li>The Harpy can choose a dead player. If so, the Storyteller can kill just the living player, since dead players can not die again.</li><li>The order of deaths due to the Harpy ability can be chosen by the Storyteller, should that be important.</li></ul>",
        ability: 'Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die.',
        flavor: '"So fair a day I never did see, nor so fowl a presence hanging over me."',
        examples: `<p>The Harpy chooses the Monk and the Engineer. The Monk claims to be the Investigator who saw the Engineer and campaigns for them to be executed. When challenged, they are emphatic in their claims that the Engineer is most likely evil due to their information, and so avoid death.</p><p>The Harpy chooses the Oracle and the dead Alchemist. The Oracle claims that they trust the Alchemist because their Oracle information indicates that they were not evil. The Storyteller declares that the Oracle dies.</p><p>The Farmer is chosen by the Harpy. As they don't have any information themselves to claim in order to imply that the other player is evil, they make a concerted effort to find information that might clear each of the other living people, leaving their target as the remaining Demon candidate and therefore evil by implication.</p>`,
        howToRun: `<p>Each night, wake the Harpy. The Harpy points to one player, then another player. Mark the first player with the <strong>MAD</strong> reminder and the second player with the <strong>2ND</strong> reminder. Put the Harpy to sleep. Wake the player marked <strong>MAD</strong>. Show the <strong>THIS CHARACTER SELECTED YOU</strong> info token then the Harpy token, then point to the player marked <strong>2ND</strong>. Put the player marked <strong>MAD</strong> to sleep.</p><p>Tomorrow, if the player marked <strong>MAD</strong> is not mad that the player marked <strong>2ND</strong> is evil, you may kill both players.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Marionette",
        description: "The Marionette doesn't know that they are a Minion.",
        intro: `<ul><li>The Marionette draws either a Townsfolk or an Outsider token from the bag, but is secretly the Marionette.</li><li>The Marionette neighbors the Demon. There are no players sitting in between the Marionette and the Demon.</li><li>The Demon knows which player is the Marionette.</li><li>On the first night, the Marionette does not wake to learn the other evil players, and the other Minions do not learn the Marionette.</li><li>The good ability that the Marionette thinks they have, doesn't work, but the Storyteller pretends it does. It is just as if this player is the Drunk.</li><li>The Marionette registers as evil, and as a Minion.</li></ul>`,
        ability: 'You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]',
        flavor: '"Words, words. They\'re all we have to go on."',
        examples: `<p>Marianna is the Marionette, but thinks she is the Undertaker. She wakes each night to learn who died that day, but her information is often wrong. Halfway through the game, the Demon tells her that she is the Marionette.</p><p>Lachlan is the Demon. He tells Sarah that she is the Marionette. Lachlan is lying. There is no Marionette.</p><p>Abdallah is the Demon. Abdallah tells Ben that he is the Marionette. Ben thinks he is the Fortune Teller, but he isn't. Ben doesn't believe Abdallah, and executes him. Good wins.</p>`,
        howToRun: `<p>While setting up the game, before putting tokens in the bag, remove the Marionette token and add any Townsfolk token.</p><p>If there are three Minions in play, remove another Minion token and add another Townsfolk token. During the first night, swap a good player's character token with a not-in-play Minion character token. Wake this player, show them the <strong>YOU ARE</strong> info token then their Minion character token, then the <strong>YOU ARE</strong> info token then a thumbs down, then put them to sleep. This player is now an evil Minion. <i>(This ensures that only one Minion token is in the bag, so at least one good player will neighbor the Demon.)</i></p><p>During the first night, mark a good player neighboring the Demon with the <strong>IS THE MARIONETTE</strong> reminder. Wake the Demon. Point to the player marked <strong>IS THE MARIONETTE</strong> and show the Marionette character token. Put the Demon to sleep.</p><p></p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Mezepheles",
        description: "The Mezepheles offers good players a choice: to turn evil or not.",
        intro: `<ul><li>On the first night, the Mezepheles learns a secret word from the Storyteller.</li><li>If a good player says this word, either publicly or privately, they turn evil that night. The Storyteller needs to hear this player actually say the word before turning them evil.</li><li>The Mezepheles does not learn if a player turns evil. The good player learns if they turn evil, but not until that night.</li><li>If the Mezepheles is sober and healthy at night, the good player turns evil even if the Mezepheles was drunk or poisoned when the good player spoke the secret word. If the Mezepheles is drunk or poisoned at night when a player would turn evil, the player stays good—the Mezepheles has "used their ability" and may not turn a player evil later on.</li></ul>`,
        ability: 'You start knowing a secret word. The 1st good player to say this word becomes evil that night.',
        flavor: '"That which issues from the heart alone, will bend the hearts of others to your own."',
        examples: `<p>The Mezepheles tells the Barber that the secret word is "Rumplestiltskin". The Barber publicly says, "This reminds me of the fairy tale where the Miller's daughter has to guess Rumplestiltskin's name." The Barber turns evil that night.</p><p>The Mezepheles tells the Mayor the secret word. The Mayor, wanting to stay good, tells the group who the Mezepheles is.</p><p>The Mezepheles privately tells the Snitch the secret word— "Constantinople". The Snitch visits the Storyteller and says "Constantinople" in private. That night, the Courtier makes the Mezepheles drunk. The Snitch stays good.</p>`,
        howToRun: `<p>While setting up the game, write a single word on a piece of paper or on a phone or other device. During the first night, wake the Mezepheles, show the written word, then put them to sleep.</p><p>The first time you hear a good player say the secret word, mark them with the <strong>TURNS EVIL</strong> reminder.</p><p>Each night, if a player is marked with the <strong>TURNS EVIL</strong> reminder, wake them. Show the <strong>YOU ARE</strong> info token then give a thumbs down. Put them to sleep. Turn their character token upside down. <i>(This shows they are now evil.)</i> <strong>The Mezepheles loses their ability</strong>—mark them with the <strong>NO ABILITY</strong> reminder and remove their night token from the night sheet.</p><p class="modal__callout-box">Choose an unusual word that would never be spoken accidentally. You can even make one up. The fun lies in the Mezepheles taking a risk to secretly convince a good player to turn evil, not in a good player unexpectedly changing teams.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Organ Grinder",
        description: "The Organ Grinder makes voting secret.",
        intro: `<ul><li>When a player is nominated, players vote with eyes closed.</li><li>The Storyteller does not count the votes out loud, and does not reveal how many players voted once voting is complete.</li><li>The Storyteller does not reveal which player is "about to die".</li><li>After nominations have closed, the Storyteller reveals which player is executed, as normal.</li><li>Dead players may vote once if they have a vote token. Their vote token is removed at the end of the day instead of after the vote.</li></ul>`,
        ability: 'All players keep their eyes closed when voting and the vote tally is secret. Each night, choose if you are drunk or not.',
        flavor: '"Round and round the handles go. The more you dance the less you know."',
        examples: `<p>There are 8 players alive. The Noble is nominated. All players close eyes to vote and the Noble gets 5 votes. The Imp is nominated. All players close eyes to vote and the Imp gets 7 votes. The Pixie is nominated. All players close eyes to vote and the Pixie gets 4 votes. After nominates close, the Storyteller declares that Doug (the Imp) is executed and dies, and that good has won.</p>`,
        howToRun: `<p>Each night, wake the Organ Grinder. The Organ Grinder either nods their head yes to be drunk, or shakes their head no to be sober. Put the Organ Grinder to sleep.</p><p>If they nod their head, mark them with the <strong>DRUNK</strong> reminder token. If they shake their head, remove the <strong>DRUNK</strong> reminder token.</p><p>When a player is nominated, if the Organ Grinder is sober, ask all players to close their eyes. If they ask why, tell them that an Organ Grinder is in play. When counting votes, do so silently. Afterwards, do not reveal how many players voted, nor if the nominee is “about to die”. If there were enough votes to execute the nominee, mark them with the <strong>ABOUT TO DIE</strong> reminder. Ask players to open their eyes, and if there are any more nominations.</p><p>When nominations are closed, declare that the player marked <strong>ABOUT TO DIE</strong>, <strong>dies</strong>.</p><p class="modal__callout-box">Players are not allowed to use other methods to determine who is voting, such as touch or sound. It is a secret.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Psychopath",
        description: "The Psychopath kills in broad daylight.",
        intro: `<ul><li>During the day, if the Psychopath declares that they are the Psychopath and publicly chooses a player, that player dies. This can only be done once per day, and only before the Storyteller has called for nominations.</li><li>The Psychopath does not need to use this ability if they don't want to.</li><li>The Psychopath can be nominated and voted for normally. If the Psychopath is executed, they might not die. They play Roshambo <i>(Paper-Rock-Scissors)</i> with the player that nominated them. The nominator needs to win for the Psychopath to die. Drawing or losing means the Psychopath lives.</li><li>If the Psychopath is executed, this still counts as the one execution for the day. No more players may be nominated or executed today.</li><li>If the Psychopath dies by other means, such as the Demon attacking them, they do not play Roshambo. They die.</li></ul>`,
        ability: 'Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.',
        flavor: '"Surprise!"',
        examples: `<p>On the first day, Amy declares that she is the Psychopath, and that she chooses Evin. Evin dies.</p><p>The Psychopath chooses to kill the Sailor. The Sailor is sober, so does not die. The Psychopath may not use their ability again today.</p><p>The Psychopath has been nominated by the Barber, and is executed. In Roshambo, the Barber has rock and the Psychopath has rock, so the Psychopath lives. The next day, the Saint nominates and executes the Psychopath. The Saint has paper and the Psychopath has scissors, so the Psychopath lives. The next day, the Barber nominates and executes the Psychopath again. The Barber has rock and the Psychopath has scissors, so the Psychopath dies.</p>`,
        howToRun: `<p>Once per day, before you have called for nominations, the Psychopath may publicly choose a player. That player <strong>dies</strong>.</p><p>If the Psychopath is executed, the Psychopath and the nominator play a game of Roshambo. If the Psychopath loses, they <strong>die</strong>. If the Psychopath draws or wins, they live. Either way, the day ends, since there is only one execution per day.</p><p>If the Psychopath is executed due to a self-nomination, then the Psychopath plays Roshambo with you instead.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Summoner",
        description: "The Summoner creates a Demon.",
        intro: `<ul><li>The Summoner may choose any player to become the Demon, even themselves.</li><li>The new Demon does not learn which players are Minions, or vice versa. The evil players will need to talk amongst themselves to figure this out.</li><li>Even though there is no Demon in play for two days, the game does not end. However, if the Summoner becomes unable to create a Demon (due to dying, becoming drunk on night 3 etc.) good wins.</li><li>The newly created Demon acts on the same night that it is created.</li></ul>`,
        ability: 'You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]',
        flavor: '"Hail the guardians of the north; by my intellect, thou art cut. Hail the guardians of the east; by my will, thou art dominated. Hail the guardians of the south; by that which lies beyond, the mystery is revealed. Hail the guardians of the west; a shield in the darkness."',
        examples: `<p>On the third night, the Summoner chooses the Snitch player, and the Lleech. The Snitch becomes the evil Lleech, and chooses a player to poison, and a player to kill.</p><p>On the first day, the Summoner is executed. Good wins.</p><p>On the third night, the Summoner turns the Alchemist into the Leviathan. At dawn, all players learn that Leviathan is in play, and that it is day three of five.</p>`,
        howToRun: `<p>During the setup phase, remove the Demon and add a Townsfolk.</p><p>When preparing the first night, put the Summoner's <strong>NIGHT 1</strong> reminder by the Summoner. When preparing the second night, put the Summoner's <strong>NIGHT 2</strong> reminder by the Summoner.</p><p>When preparing the third night, put the Summoner's <strong>NIGHT 3</strong> reminder by the Summoner.</p><p>During the first night, show the Summoner 3 not-in-play characters as bluffs.</p><p>During the night, if the Summoner has a <strong>NIGHT 3</strong> reminder, wake the Summoner. They point at a player, and to a Demon icon on the character sheet. Put the Summoner to sleep. Wake the chosen player. Show the <strong>YOU ARE</strong> info token, then the Demon token. Show the <strong>YOU ARE</strong> info token, then give a thumbs down. Replace their character token with the Demon token and put the new Demon to sleep.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Vizier",
        description: `The Vizier executes players without the town's consent.`,
        intro: "<ul><li>On the first day, all players learn that the Vizier is in play, and which player it is.</li><li>During the day, the Vizier can not die by any means.</li><li>After a vote is tallied, if the Vizier chooses to execute the nominee (and at least one good player voted), they are executed immediately. This counts as the 1 execution allowed each day.</li><li>After a vote is tallied, if the Vizier chooses to execute the nominee (and no good players voted), nothing happens.</li><li>Even if the vote tally is less than 50% of the living players, the Vizier may still execute. Even if another player has more votes than the current player, the Vizier may still execute.</li><li>The Vizier does not have to force an execution each day.</li></ul>",
        ability: 'All players know you are the Vizier. You can not die during the day. If good voted, you may choose to execute immediately.',
        flavor: `"An excellent decision, as always, sire. Such a petty crime as bumping into the Bishop indeed deserves your 'justice' and 'mercy'. Take a stroll in the gardens. Visit the gallery and peruse the sculptures of Von Strauf. Relax, sire. Leave everything... to me."`,
        examples: `<p>The King has been nominated. Five people vote, but the Vizier does not use their ability. The Boomdandy is nominated and eight people vote. The Vizier uses their ability and the Boomdandy is executed immediately.</p><p>The Demon has seven votes against them, and is "about to die". The Vizier nominates Bill, the Barber. Two evil players and one good player vote. The Vizier declares that Bill is executed. The Demon survives today. The Town nominates and executes the Vizier. The Vizier does not die. That night, The Demon kills the Vizier.</p><p>The town nominates and executes the Vizier. The Vizier does not die. That night, The Demon kills the Vizier.</p>`,
        howToRun: `<p>When the first night has ended, declare that the Vizier is in play, and which player it is.</p><p>If a vote has just been tallied, and one or more good players voted, and the Vizier declares that the nominee is executed, that player is executed and dies. No more nominations, votes, or executions occur today.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Widow",
        description: `The Widow knows all characters and poisons the exact person they think is most useful.`,
        intro: "",
        ability: 'On your first night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play.',
        flavor: '"More wine? Château d\'Ergot \'07 is a very special vintage. My yes, very special indeed."',
        examples: `<p>The Widow sees the Grimoire and points to the Sailor character token. The Sailor is poisoned this game. The Sailor is sober, but dies when executed.</p><p>On the third night, the Pit Hag turns themselves into the Widow. That night, the good Scapegoat learns that a Widow is in play.</p><p>On the first night the Widow looks at the Grimoire and poisons themself. The good player that would've learned a Widow is in play does not.</p>`,
        howToRun: `<p>On their first night, wake the Widow and show them the Grimoire for as long as they need. The Widow points to a character token in the Grimoire, or a player. Mark that player with a <strong>POISONED</strong> reminder. Put the Widow to sleep. Wake any good player. Show them the Widow character token. Put that good player to sleep.</p><p>If the Widow dies or changes character, their poison ends. Likewise, their poison vanishes while the Widow is poisoned/drunk. When a Widow poisons a player, night 1 has already begun, so it does not prevent any [setup] abilities from taking effect.</p><p>If a Widow is created mid-game, execute the first paragraph of the how to run just like you would if they were in play on night 1 - it's the Widow's first night that matters for their ability, not how many nights into the whole game you are.</p><p>If the Widow chooses to poison themselves, no-one is informed that a Widow is in play.</p><p>Only the Preacher, Sailor and Poisoner can prevent the Widow from getting to poison on night 1 and in all of these cases, a good player would be told that the Widow is in play once the preaching/drunk/poison wears off. If Sailor drunked or Poisoner poisoned, the Widow can be shown a fake grimoire. Also, their poison choice has no effect for the rest of the game, even if they become sober/healthy later. If preached, the Widow is merely shown the Preacher in play and does not see the grimoire, even if the Preacher is dead/poisoned/drunk later in the game.</p><p>If the good player who knows the Widow is in play turns evil while the Widow is alive, wake a new good player and show them the Widow character token.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Wizard",
        description: `The Wizard makes a wish.`,
        intro: "<ul><li>This wish is limited only by the player's imagination. It can be anything at all. The Wizard can write their wish on their phone and wake at night to show the Storyteller, or talk with the Storyteller in private during the day. The Wizard could even make a wish publicly if they are feeling foolish.</li><li>If the Storyteller tells the group that the Wizard has made a wish, they need not do so immediately, and can do so at any point later on.</li><li>Many wishes have a price. The price changes the game in some way, or changes the wish in some way. It can be anything at all, and is decided by the Storyteller. The Storyteller may or may not tell the Wizard what the price is. The purpose of the price is to rebalance a wish that is unfair for the good team on a mechanical level.</li><li>Many wishes leave a clue. The clue can be anything at all, is decided by the Storyteller, and is declared publicly. The purpose of a clue is to rebalance a wish that is unfair to the good team on an informational level.</li><li>When the Wizard dies, the wish may or may not still be in effect, depending on the nature of the wish and the nature of the price.</li><li>If the Wizard makes a wish that the Storyteller doesn't understand, or feels like it would be impossible to implement, the Storyteller may ask the Wizard to wish again, or cancel the wish.</li></ul>",
        ability: 'Once per game, choose to make a wish. If granted, it might have a price & leave a clue as to its nature.',
        flavor: '"Every man and every woman is a star. Love is the law, love under will."',
        examples: `<p>The Wizard wishes to see the Grimoire. The Storyteller grants this wish, and there is no price and no clue.</p><p>The Wizard wishes that all good players are drunk. The Storyteller grants the wish. Later, they declare that the Wizard has made a wish and that "Things are wrong" but provide no further context. For the rest of the game, the Storyteller makes all information false.</p><p>The Wizard wishes that they become a Demon. The Storyteller grants the wish. Later, they declare that the Wizard has made a wish, and that "The student has become the master." The Storyteller kills the Lord of Typhon and turns the Wizard into the Ojo.</p><p>The Wizard wishes to win the game. The Storyteller grants the wish, and tells the Wizard that the evil team will win the game at the end of the day. The Storyteller declares that the Wizard has made a wish, and that either Ben, Amy, or Lewis is the Demon. The group executes Ben, who is the Demon, and good wins.</p><p>The Wizard wishes that all players have 5 lives, and all reminder tokens for the script are added to characters. The Storyteller judges that this wish is too awkward, confusing and boring, declines the wish, and asks the Wizard to wish again.</p>`,
        howToRun: `<p>When the Wizard makes a wish, either verbally or via text, decide whether to accept or decline the wish. If the wish is declined, prompt the Wizard to wish again, or tell them that they have no more wishes.</p><p>If the wish is granted, say <strong>"Your wish is granted."</strong> or <strong>"Your wish is my command"</strong>, or nod, or otherwise signal that their wish is accepted. Now or later, you may make a price: make whatever mechanical adjustments to the game you feel are necessary for the wish to be balanced. Now or later, you may declare publicly that the Wizard has made a wish, then give the good team a clue about what was wished.</p><p class="modal__callout-box">Storytelling the Wizard can be tricky. The Wizard is the most fun for everybody when all wishes are granted, all wishes leave a clue, and all wishes have a price. However...<br><br>If you feel that by granting a wish, the evil team has benefitted a small amount but the good team still has all they need to figure out who the Demon is and to win the game, you may apply no clue and no price. You may even skip telling the good team that the Wizard has made a wish, or tell them but give no clue.<br><br>If you feel that by granting the wish, the good team is at a severe disadvantage in terms of balance - the game rules have changed so that it is impossible for the good team to win even if they learn who the Demon is - then change the game rules or change the wish so that it is still fair for the good team.<br><br>If you feel that by granting the wish, the good team is at a severe disadvantage in terms of knowledge - they lack the needed information to reasonably win the game - then give them a helpful clue to find out what the wish was.<br><br>If you feel that the wish is so extreme and convoluted that you can think of no clue or price to balance it, or that it would just make the game unfun, then decline the wish completely.<br><br>Overall, the wish should tip the scales in favour of the Wizard, but still allow the good team a reasonable chance of winning. Take your time in deciding how to do this.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Wraith",
        description: `The Wraith knows and shares what happens at night.`,
        intro: "<ul><li>The Wraith may open their eyes at any point during the night, for as long or as short a time as they wish.</li><li>They may open their eyes fully, or just peek.</li><li>The Storyteller wakes the Wraith when other evil players also wake, such as when the Demon kills a player, an evil Traveller uses their ability, or a Cult Leader learns that they are evil.</li><li>When several players have their eyes open at once, they may communicate if they wish.</li><li>If a good player catches the Wraith with their eyes open, there is no mechanical effect.</li><li>A dead Wraith may not open their eyes at night. A drunk or poisoned Wraith is told by the Storyteller that they may not open their eyes that night.</li></ul>",
        ability: 'You may choose to open your eyes at night. You wake when other evil players do.',
        flavor: '"Ra\'āb ina pān ṣilli ša dāri. Rigim qallu ina šūri, šītu ša šunātīka iredde, u napšutka idlul ina pān maṣṣartī dāriti."',
        examples: `<p>During the first night the Wraith peeks at other players, and notices which good players wake and which do not. During the second night, the Wraith opens their eyes more fully and notices that Doug was woken and pointed to two players tonight. During the 3rd night, when both the Wraith and the Demon wake together, the Wraith uses body language and points to the character sheet to communicate to the Demon to kill Doug, whom the Wraith believes is the Fortune Teller.</p>`,
        howToRun: `<p>Each time you wake an evil player at night, first wake the Wraith. When you put that evil player to sleep, put the Wraith to sleep.</p><p>If the Wraith loses their ability while alive, privately tell the Wraith that they may not choose to open their eyes tonight, and do not wake them when other evil players wake.</p><p class="modal__callout-box">Optional rule: Once per game, a player that is mad that you are the Wraith, dies.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Xaan",
        description: `The Xaan poisons all Townsfolk.`,
        intro: "<ul><li>The Xaan poisons all Townsfolk players for one night then one day. The night that this happens equals the number of Outsiders in play. For example, if there are 2 Outsiders, the Xaan poisons on night 2.</li><li>There can be any number of Outsiders in play, but usually 1 to 4. This can be the normal number of Outsiders if the Xaan was not in play, or something different. This overrides other characters that add or remove Outsiders, such as the Baron.</li><li>If the number of Outsiders changes during the game, the Xaan poisons on the night corresponding to the number of Outsiders during setup.</li><li>The Xaan needs to be alive in order to poison.</li></ul>",
        ability: 'On night X, all Townsfolk are poisoned until dusk. [X Outsiders]',
        flavor: '"Down they fall. One by one. By two, by three, by five."',
        examples: `<p>There are 3 Outsiders in play, due to the Xaan. On night 3, the Exorcist chooses the Demon but nothing happens, the Acrobat chooses the Drunk but nothing happens, and the Seamstress gets false information.</p><p>There is 1 Outsider in play. It is an 11 player game. On the first night, the Xaan poisons all 7 Townsfolk. On the second night, the Pit-Hag creates a Hatter. Even though there are 2 Outsiders in play, all players are healthy tonight.</p><p>There are no Outsiders in play. The Xaan never poisons anyone. The Xaan bluffs as the Zealot, and the good team believes that all Townsfolk are poisoned on night 1, but they are not.</p>`,
        howToRun: `<p>While setting up the game, before putting character tokens in the bag, add or remove any number of Outsider tokens, including zero. Remove any unnecessary Xaan reminders.</p><p>On the 1st night, add the <strong>NIGHT 1</strong> Xaan reminder to the Grimoire. On the 2nd night, add the <strong>NIGHT 2</strong> Xaan reminder to the Grimoire. On the 3rd night, add the <strong>NIGHT 3</strong> Xaan reminder to the Grimoire. On the night that equals the number of Outsiders in play when the game began, add the <strong>X</strong> reminder to the Grimoire, and remove it the following dusk.</p><p>When the <strong>X</strong> reminder is in the Grimoire, all Townsfolk players are <strong>poisoned</strong>.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Al-Hadikhia",
        description: "The Al-Hadikhia puts three players in a dilemma—who will choose to die, so that others can live?",
        intro: "<ul><li>The Al-Hadikhia chooses three players per night. Everyone learns which three were chosen. Each player makes their choice before the next player is revealed.</li><li>All players must be silent when the Al-Hadikhia acts at night. This period lasts from when the Storyteller first declares that a player has been chosen, until the Storyteller says that it ends.</li><li>At night, the Storyteller asks players out loud if they choose to live. If they nod their head, they live. If they shake their head, they die. Players may be brought back to life this way.</li><li>If all players choose to live, then they all die instead. If a player chose to die but did not die, they count as alive for this calculation.</li></ul>",
        ability: 'Each night*, you may choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.',
        flavor: '"Alsukut min dhahab."',
        examples: `<p>The Al-Hadikhia chooses Evin, Lachlan, and Sarah. Evin chooses to die. Lachlan chooses to die. Sarah chooses to live. In the morning, Evin and Lachlan are dead, and Sarah is alive.</p><p>The Al-Hadikhia chooses Alex, Lewis, and Doug, who is dead. Alex chooses life. Lewis chooses life. Doug chooses life, so is now alive. Since all players are now alive, all three players die.</p>`,
        howToRun: `<p>Each night except the first, wake the Al-Hadikhia. They point at three players. Mark these players with the <strong>1</strong>, <strong>2</strong> and <strong>3</strong> reminders, in the order the Al-Hadikhia chose. Put the Al-Hadikhia to sleep. Wake the player marked <strong>1</strong> and say "The Al-Hadikhia has chosen" then the name of the player, then "Do you choose to live?" They either nod or shake their head. Put them to sleep. If they chose to live, remove their shroud (if any), and if they choose to die, add a shroud. Repeat for players marked <strong>2</strong> then <strong>3</strong>. If all three players are alive (none of them have a shroud) then add a shroud to all three. They <strong>die</strong>. Declare that the time of silence has ended.</p><p>Each dawn, declare which players marked <strong>1</strong>, <strong>2</strong> and <strong>3</strong> are alive and which are dead. Do this even if a player's alive or dead status did not change during the night.</p><p class="modal__callout-box">You may need to remind all players to be silent as the Al-Hadikhia acts. This includes non-verbal noise. This prevents players signaling to others about whether they have chosen to live or die.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Kazali",
        description: `The Kazali chooses their own Minions.`,
        intro: "<ul><li>If a Kazali is created mid game, the Kazali does not choose new Minion players.</li><li>The Storyteller can give the Minions' original good characters as bluffs to the Demon, since they are not in play.</li><li>The Kazali acts at a time that is technically both during setup and during the first night.</li><li>The Storyteller may keep the Kazali awake, or put the Kazali to sleep, when waking the Minions to tell them which Minion that they are.</li><li>Only Minions that are on the script may be chosen. Duplicate Minion characters are not allowed.</li></ul>",
        ability: 'Each night*, choose a player: they die. [You choose which players are which Minions. -? to +? Outsiders]',
        flavor: '"Gon(z)a7les6. Take cau8tun. The mech4an4ion is iNvert10d. E99ors insy6tum. Reco{7}fig."',
        examples: `<p>There are 15 players and no Minions in play yet. The Kazali wakes and chooses that Doug becomes the evil Organ Grinder, that Amy becomes the evil Vizier, and that Lewis becomes the evil Goblin.</p>`,
        howToRun: `<p>While setting up the game, remove all Minion tokens and add Townsfolk or Outsider tokens.</p><p>During the first night, wake the Kazali. The Kazali points at a player and a Minion on the character sheet. Replace their old character token with the Minion token, show them the “You Are” info token then the Minion character token, and give a thumbs down. Repeat until the normal number of Minions exist. Put the Kazali to sleep.</p><p>Each night except the first, wake the Kazali. They point at any player. That player dies.</p><p class="modal__callout-box">Depending on the script, adding more than one Outsider can put the good team at a significant disadvantage.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Legion",
        description: "Legion is many Demons.",
        intro: `<ul><li>The recommended number of good and evil players is the reverse of the normal. For example, for a ten player game, there are roughly seven Legion and three good players.</li><li>The players that are not Legion may be Townsfolk or Outsiders, in any combination.</li><li>If at least one good player voted for the nomination, and that player is "about to die", then the execution happens as normal. If only evil players vote for a nomination, the vote tally for that nominee is zero.</li><li>Each Legion registers as a Minion as well as a Demon.</li><li>The Storyteller chooses which player dies at night.</li><li>If only one good player remains alive, the Storyteller may declare that evil wins, since good cannot win.</li><li>The Storyteller can decide not to give Legion players bluffs.</li></ul>`,
        ability: 'Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]',
        flavor: '"We are the chill wind on a winter\'s day. We are the shadow in the moonless night. We are the poison in your tea and the whisper in your ear. We are everywhere."',
        examples: `<p>The only good players are the Fortune Teller and the Slayer. Six Legion and the Slayer vote to execute the Fortune Teller. The Fortune Teller is executed, and evil wins.</p><p>Four players are alive. Three Legion and no good players vote to execute Julian. Julian is not executed. Alex, who has two votes, one of which was from a good player, is executed instead.</p>`,
        howToRun: `<p>During the first night, during the Demon Info step, let all Legion players make eye contact. <i>(You may want to point to the non-Legion players so that Legion knows who they are.)</i></p><p>Each night, you may decide that a player <strong>dies</strong>.</p><p>When counting votes, count out loud, as normal. If the vote tally is enough to make a player "about to die" but only evil players voted, declare that the vote tally is zero.</p><p class="modal__callout-box">Most nights, kill a Legion. Killing a good player is usually unfair. Your aim is to get to three players alive—two good players and one Legion player. On the final day, if the players don't execute, kill a good player that night so that evil wins.</p><p class="modal__callout-box">If the players try to force others to vote to "test whether the vote tally is zero", you may instead declare that a zero-tally vote is successful but secretly keep a record of which player is really about to die by marking them with Legion's "About To Die" reminder, then execute them when nominations are over. This keeps Legion games mysterious and challenging.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Leviathan",
        description: "The Leviathan doesn't kill.",
        intro: `<ul><li>All players know the Leviathan is in play, even if the Leviathan is created mid-game.</li><li>Any number of evil players may be executed, but if more than one good player is executed, evil wins. It doesn't matter which characters were executed, only the alignment of the player at the time they were executed.</li><li>When the fifth day ends and night begins, if the Leviathan is still alive, evil wins.</li><li>All types of execution count, even if the player doesn't die. A player executed due to the Virgin, or due to revealing that they are the Mutant, is still executed. An executed player who lives due to the Pacifist is still executed.</li></ul>`,
        ability: 'If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins.',
        flavor: '"To the last, I grapple with thee. From Hell\'s heart, I stab at thee. For hate\'s sake, I spit my last breath at thee"',
        examples: `<p>The Leviathan is in play. On the first day, the Monk nominates the Virgin, and is executed. On the second day, the Courtier is executed. Evil wins.</p><p>The Leviathan is in play. On the second day, the Scarlet Woman is executed. On the third day, the Poisoner is executed. On the fifth day, the Soldier is executed. Evil wins.</p>`,
        howToRun: `<p>Immediately after dawn on the first day, declare that the Leviathan is in play. Mark the Leviathan with the <strong>DAY 1</strong> reminder. At the beginning of each following day, mark the Leviathan with <strong>DAY 2</strong>, then <strong>DAY 3</strong>, then <strong>DAY 4</strong>, then <strong>DAY 5</strong> reminders. If a day ends and the Leviathan is marked with the <strong>DAY 5</strong> reminder, declare that evil wins.</p><p>If a good player is executed, mark them with the <strong>GOOD PLAYER EXECUTED</strong> reminder.</p><p>If a good player is executed and a player is already marked with the <strong>GOOD PLAYER EXECUTED</strong> reminder, declare that evil wins.</p><p class="modal__callout-box">For new players, it is helpful to declare that the Leviathan is in play each day, and to say what day it is. On the first day, say "The Leviathan is in play. It is day one." On the second day, say "The Leviathan is in play. It is day two." etc. This helps your players remember what Demon they are facing and avoid accidentally losing by forgetting to count the days.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lil' Monsta",
        description: `Lil' Monsta isn't a player, and is instead babysat by a Minion.`,
        intro: "",
        ability: "Each night, Minions choose who babysits Lil' Monsta & 'is the Demon'. Each night*, a player might die. [+1 Minion]",
        flavor: '"Step 1: Be cute. Step 2: World domination. Step 3: Bweakfast."',
        examples: `<p>The Poisoner and the Widow wake. They point at each other, then point at themselves, then eventually both point at the Widow, who receives Lil' Monsta's token. The next night, they both choose that the Poisoner babysits Lil' Monsta instead.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lleech",
        description: "The Lleech lives if their host lives, and dies if their host dies.",
        intro: `<ul><li>On the first night, the Lleech chooses a player, who is poisoned for the rest of the game.</li><li>If this player is alive, the Lleech cannot die. If the Lleech is executed, the Storyteller tells the group that the player lives, but not why.</li><li>If the player that the Lleech chose dies, the Lleech dies as well. If this means that only one or two players are left alive, good still wins, because the Demon is dead.</li><li>From the second night onwards, players that the Lleech attacks die but are not poisoned.</li><li>If a Lleech is created mid-game, they poison a player that night. They must choose an alive player.</li></ul>`,
        ability: 'Each night*, choose a player: they die. You start by choosing a player: they are poisoned. You die if & only if they are dead.',
        flavor: '"Tasty, tasty, tasty, tasty, tasty, tasty, tasty, tasty brai- I mean pie! Yes. Tasty pie. That\'s what I meant to say."',
        examples: `<p>The Lleech poisons the Noble. The Noble learns three good players instead of one evil and two good players. The Lleech is executed, but does not die. The next day, the Noble is executed. The Noble and the Lleech die. Good wins.</p><p>The Lleech poisons the Farmer. The Courtier poisons the Lleech. The Psychopath kills the Farmer, but the Lleech doesn't die because the Lleech has no ability. The Lleech is executed, and dies.</p>`,
        howToRun: `<p>During the first night, wake the Lleech. They point at any player. That player is <strong>poisoned</strong>—mark them with the <strong>POISONED</strong> reminder. Put the Lleech to sleep.</p><p>Each night except the first, wake the Lleech. They point at any player. That player <strong>dies</strong>—mark them with the <strong>DEAD</strong> reminder. Put the Lleech to sleep.</p><p>If the Lleech would die but the player marked with the Lleech's <strong>POISONED</strong> reminder is alive, the Lleech does not die. If the player marked with the Lleech's <strong>POISONED</strong> reminder <strong>is dead</strong>, the Lleech <strong>dies</strong> and the good team wins.</p><p class="modal__callout-box">When giving false information to a good player poisoned by the Lleech, make sure this information seems true. If the good player believes it to be false, they will quickly execute themselves and win the game.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lord of Typhon",
        description: "The Lord Of Typhon is surrounded by Minions.",
        intro: `<ul><li>All evil characters sit next to each other in a continuous line. All evil characters (including Travellers and evil Townsfolk) must be in the line at setup.</li><li>If Lord Of Typhon is on the script, the Storyteller decides where Travellers sit, even if the Lord of Typhon is not in play.</li><li>The Lord Of Typhon must have an evil character on both sides. They cannot sit at the end of the line of evil characters.</li><li>The evil team starts with one additional Minion.</li><li>Any number of Outsiders might be in play.</li><li>Like the Marionette, the Storyteller decides which players are Minions during setup. The Storyteller also decides which player is which Minion.</li><li>If a Lord Of Typhon is created mid game, the Lord Of Typhon does not need to sit in a line with the evil characters.</li></ul>`,
        ability: 'Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? to +? Outsiders]',
        flavor: '"In the shadowed and forgotten corners of the cosmos, where the stars whisper secrets to the void, lies a truth so profound that the merest glimpse of it unravels the sanity of mortal minds."',
        examples: `<p>There are two Minions: the Organ Grinder and the Mezepheles. In between them, neighboring them both, sits the Lord Of Typhon. The number of Outsiders is normal.</p><p>The Vizier neighbors the Harpy, who neighbors the Lord Of Typhon, who neighbors the Goblin. There are ten players, and two Outsiders in play, due to the Lord Of Typhon ability.</p><p>The Fearmonger neighbors the Boomdandy, who neighbors the Lord Of Typhon, who neighbors the Poisoner, who neighbors the Mastermind. There are 15 players, but zero Outsiders in play, since the Lord Of Typhon removed one Outsider, and the Puzzlemaster became the Boomdandy during the first night.</p>`,
        howToRun: `<p>While setting up the game, remove all Minion tokens and add Townsfolk or Outsider tokens.</p><p>During the first night, wake the appropriate number of players directly clockwise and counter-clockwise from the Lord Of Typhon. Show each of these players a unique Minion token, and give a thumbs down. Replace these players' good character tokens with these Minion tokens and put these players to sleep. Then, do the Minion Info and Demon Info steps as normal.</p><p>Each night except the first, wake the Lord Of Typhon. They point at any player. That player <strong>dies</strong> — mark them with the <strong>DEAD</strong> reminder. Put the Lord Of Typhon to sleep.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Ojo",
        description: "The Ojo chooses specifically which character dies.",
        intro: `<ul><li>Unlike other Demons, the Ojo must choose a character, not a player. The Storyteller may need to remind the player of this. We recommend that all players have their character sheet handy during the night phase.</li><li>The Ojo can kill evil characters, if they wish.</li><li>If there are multiple copies of a particular character in play, and the Ojo chooses that character to die, only one of those characters dies.</li><li>If the Ojo chooses a character that is not in play, the Storyteller will almost always kill a living good player. It is possible, but uncommon, for the Storyteller to choose a dead player or an evil player to die.</li></ul>`,
        ability: 'Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies.',
        flavor: '"Like a bonfire on a moonless night… I see you, mortal."',
        examples: `<p>The Ojo chooses the Plague Doctor. The Plague Doctor dies. The next night, the Ojo chooses the Poppy Grower. The Poppy Grower dies. The next night, the Ojo chooses the Empath. There is no Empath in play, so the Storyteller chooses that the Shugenja dies instead.</p>`,
        howToRun: `<p>Each night except the first, wake the Ojo. The Ojo player points to a character icon on their character sheet. If that character is in play, that player dies—mark them with the <strong>DEAD</strong> reminder. If that character is not in play, choose any player. That player dies—mark them with the <strong>DEAD</strong> reminder. Put the Ojo to sleep.</p><p class="modal__callout-box">If the Ojo is on a script with a Demon that kills multiple times per night, such as the Shabaloth, and the Ojo chooses a not-in-play character, you may choose more than one player to kill that night. This helps the Ojo player pretend that a different Demon is in play.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Riot",
        description: "Riot kills everybody in a panic.",
        intro: `<ul><li>Each player that is nominated dies immediately. Even though they are dead, they may nominate again today. This may happen multiple times per day.</li><li>The player that was nominated must nominate again immediately or lose their chance to do so. The Storyteller counts down "3... 2... 1..." to let the player know how long they have to nominate, should they wish to. If they don't, no more nominations are allowed today.</li><li>The good team wins if all Riot players are dead. If the last Riot dies and only two players are alive, they do not nominate, and the good team wins.</li><li>On the third day, each nominated player must nominate again. If they do not, the Storyteller will nominate on their behalf, or declare that that player's team loses.</li><li>If just three players are alive when the third day nominations begin, the group chooses which player nominates first. If no one nominates, the day ends and evil wins.</li></ul>`,
        ability: 'On day 3, Minions become Riot & nominees die but nominate an alive player immediately. This must happen.',
        flavor: '"Larga vida a la revolución! Mi revolucion!"',
        examples: `<p>Alex nominates Lewis. Lewis dies and nominates Ben. Ben dies and nominates Marianna. Marianna dies and nominates Lachlan. Lachlan dies and does not nominate. Four players died today.</p><p>On the third day, a Riot player is nominated. They die and nominate the Amnesiac, who dies and nominates the Knight, who dies and nominates a Riot player. The game ends immediately, as all Riot players are dead.</p>`,
        howToRun: `<p>While setting up the game, before putting the character tokens in the bag, replace all Minion tokens with Riot tokens. During the first night, skip the Minion Info step. During the Demon Info step, wake all Riot players and allow them to make eye contact. Show each Riot player three character bluffs, then put them to sleep.</p><p>Each time a player is nominated, they <strong>die</strong>. Declare that they are dead, and add a shroud immediately. Tell them that they may nominate again. Publicly count down "3... 2... 1..." and if they nominate before their time runs out, repeat this process for the new nominee <i>(they <strong>die</strong>, may nominate etc.)</i> If they do not nominate before their time runs out, the day ends.</p><p>On the third day, nominated players <strong>die</strong> and must nominate again. If the day ends with more than two players alive, evil wins.</p><p class="modal__callout-box">Optional Rule: When Riot is in play, the dead may not be nominated. (This is more fun, and is the original intent of Riot.)</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Yaggababble",
        description: "The Yaggababble kills by talking.",
        intro: `<ul><li>The phrase that the Yaggababble says can be any length, but is usually 2 to 5 words long.</li><li>If the Yaggababble says this phrase, the Storyteller may kill a player any time afterwards, until dawn.</li><li>The Yaggababble may say this phrase as a standalone sentence, or part of another sentence.</li><li>The Yaggababble may say this phrase multiple times per day. If so, the Storyteller may kill multiple players.</li><li>The Storyteller chooses which players die.</li><li>The Storyteller may choose to kill fewer players than the number of times the phrase was said.</li><li>If the Yaggababble is drunk or poisoned, players cannot die, even if the Yaggababble was sober and healthy when they said their phrase. If the Yaggababble is sober and healthy, players might die, even if the Yaggababble was drunk or poisoned when they said their phrase.</li><li>It is rare for the Yaggababble to kill during the day.</li></ul>`,
        ability: 'You start knowing a secret phrase. For each time you said it publicly today, a player might die.',
        flavor: '"Murders inside the Rue Morge? Фальшивые новости! Hounds on the Baskerville moor? Фальшивые новости! Death while sailing the Nile? Фальшивые новости!"',
        examples: `<p>The Yaggababble's phrase is "that sounds fishy". The Yaggabble says this once during the first day. That night, a player dies. The next day, the Yaggababble says "that sounds fishy" three times. That night, three players die.</p><p>The Yaggababble has said their phrase twice today. A Witch is in play. When the Heretic nominates, the Heretic dies, even though they were not cursed by the Witch. The Golem nominates the Demon, and the Golem dies. Both players died due to the Yaggababble's ability.</p>`,
        howToRun: `<p>During setup, write a phrase on a piece of paper, or on a phone.</p><p>During the first night, wake the Demon. Show this phrase, then put them to sleep.</p><p>Each time Demon says the secret phrase, put a <strong>DEAD</strong> reminder in the centre of the left side of the Grimoire, as a reminder to yourself to place it tonight.</p><p>Each night, you may mark players with these <strong>DEAD</strong> reminders, and add a shroud to each marked player. These players die.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Thief",
        description: "The thief steals votes from a player, making their vote count negatively.",
        intro: `<ul><li>When a player chosen by the Thief votes, the vote tally goes down by one instead of up by one. This happens every time that player votes that day</li><li>The player with the negative vote changes back to having a positive vote immediately if the Thief dies, including if the Thief is exiled, because the Thief loses their ability.</li><li>Exiles are never affected by abilities, so the player with the negative vote can support exiles unaffected by the Thief's ability.</li><li>Since the Storyteller counts the number of votes out loud as they move their hand around the circle, all players will know which player the Thief chose.</li></ul>`,
        ability: 'Each night, choose a player (not yourself): their vote counts negatively tomorrow.',
        flavor: '"I aint done nuffink. I weren\'t even in dat alley last night! It weren\'t me what stole Mayor Bruno\'s briefcase wiv all dem fancy dockoments innit. Besides, it was too \'eavy to carry far."',
        examples: `<p>The Thief chooses Marianna. The next day, while tallying the first vote, the Storyteller counts "1... 2... 3... 2... 3... 4... 5." The nominated player now has five votes for their execution, and the nomination process continues.</p><p>The Thief chooses Abdallah. Abdallah votes for an execution, so the tally of votes is four, instead of the tally of six if Abdallah was not affected by the Thief. Since ten players are alive, the nominee is not executed today. Later that day, the players are considering whether to exile the Gunslinger. Abdallah raises his hand to support the exile, which counts positive.</p><p>The Thief chooses Marianna. The Bureaucrat also chooses Marianna. The next day, Marianna's vote counts as negative three votes.</p>`,
        howToRun: `<p>Each night, wake the Thief. They point at any player. Mark the chosen player with the Thief's <strong>NEGATIVE VOTE</strong> reminder. Put the Thief to sleep.</p><p>Each time you tally the vote of a player marked <strong>NEGATIVE VOTE</strong>, count it as subtracting one vote instead of adding one vote. <i>(Count this out loud, as normal.)</i></p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Bureaucrat",
        description: "The Bureaucrat gives extra votes to a player of their choice.",
        intro: `<ul><li>When a player chosen by the Bureaucrat votes, that vote counts as three votes. This happens every time that player votes that day.</li><li>The player with the triple vote loses it immediately if the Bureaucrat dies, including if the Bureaucrat is exiled, because the Bureaucrat loses their ability.</li><li>Exiles are never affected by abilities, so the player with the triple vote can only support exiles once, not three times.</li><li>Since the Storyteller counts the number of votes out loud as they move their hand around the circle, all players will know which player the Bureaucrat chose.</ul>`,
        ability: 'Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow.',
        flavor: '"Sign here please. And here. And here. Aaaaaaaaand here. This should all be sorted and tallied by the end of the day, assuming everyone\'s signatures are legible. We haven\'t had a mix-up in the paperwork for ages. Yesterday noon, if memory serves..."',
        examples: `<p>The Bureaucrat chooses Evin. The next day, when the first vote
        is being tallied, the Storyteller counts "1... 2... 3... 4-5-6... 7." The nominated player now has seven votes for their execution, and the nomination process continues.</p><p>The Bureaucrat chooses Alex. The next day, Alex has a triple vote, which he uses during four nominations.</p><p>The Bureaucrat chooses Doug, who is dead. The next day, Doug uses his vote token to vote, and his vote counts as triple.</p>`,
        howToRun: `<p>Each night, wake the Bureaucrat. They point at any player.
        Mark the chosen player with the Bureaucrat's <strong>3 VOTES</strong> reminder. Put the Bureaucrat to sleep.</p><p>Each time you tally the vote of a player marked <strong>3 VOTES</strong>, count it as three votes instead of one. <i>(Count this out loud, as normal.)</i></p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Gunslinger",
        description: "The Gunslinger kills players who vote.",
        intro: `<ul><li>Each day, after the first vote for execution has been tallied,
        the Gunslinger may publicly choose a player that just voted
        to die immediately. The Gunslinger does not have to kill a
        player—it is entirely up to them. Whether they use their ability
        or not, the Gunslinger cannot kill any further players that day.</li><li>It is the Gunslinger's responsibility to speak up and let the Storyteller know that they wish to use their ability.</li><li>Since exiles are not affected by character abilities in any way, the Gunslinger cannot use their ability to kill a player that supports an exile.</li></ul>`,
        ability: 'Each day, after the 1st vote has been tallied, you may choose a player that voted: they die.',
        flavor: '"It\'s time someone took matters into their own hands. That someone... is me."',
        examples: `<p>The Imp has been nominated. There are ten players alive,
        and five votes for the Imp, so the Imp is about to die.
        The Gunslinger chooses a voting player to die. That player dies
        but the day continues, with the Imp still about to die.</p><p>The players exile the Scapegoat. Then, the Butler is nominated for execution and gets one vote. This is the first nomination for execution, since the Scapegoat's exile does not count. The Gunslinger chooses to kill the single voting player. Later that
        day, the Saint is nominated and six players vote. The Gunslinger cannot use their ability now because this is not the first vote for execution today.</p><p>The Empath voted, and their vote counted negatively due to the Thief. The Gunslinger kills the Empath.</p>`,
        howToRun: `<p>Each day, immediately after the first vote for execution is tallied, the Gunslinger can declare that they wish to use their ability. If so, the Gunslinger points at any player who voted for this
        execution. The chosen player <strong>dies</strong>.</p><p class="modal__callout-box">If the Gunslinger is a new player, you may wish to remind them that they can use their ability.</p><p class="modal__callout-box">When the Gunslinger wants to use their ability, you may need to ask all players who voted to raise their hand again, so the Gunslinger doesn't accidentally choose a player that didn't vote.</p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Scapegoat",
        description: "The Scapegoat is executed instead of an ally.",
        intro: `<ul><li>If the Scapegoat is evil, they might die instead of an evil player
        dying. If the Scapegoat is good, they might die instead of a good player dying. When exactly this happens is up to the Storyteller. This can only happen due to an execution, not death by other means such as a Demon or Slayer.</li><li>The Scapegoat being killed still counts as an execution, so no more nominations occur today.</li><li>As always, players do not learn the alignment of the Scapegoat when they die.</li></ul>`,
        ability: 'If a player of your alignment is executed, you might be executed instead.',
        flavor: '"Good evening! Thank you for inviting me to the ball. I\'m not from around here, but you sure seem like a friendly bunch, by golly. I\'m sure we\'ll get along just dandy. What\'s all that rope for?"',
        examples: `<p>The Fortune Teller is about to be executed, but the Storyteller chooses to execute the good Scapegoat instead. The Fortune Teller lives and the Scapegoat dies. That night, the Undertaker learns
        that a Scapegoat was executed today.</p><p>The Poisoner is about to be executed, but the Storyteller chooses to execute the evil Scapegoat instead. The Storyteller could have let the Poisoner die as normal, but chose not to.</p><p>The Spy is about to be executed. The good Scapegoat dies instead, because the Spy is registering as good.</p>`,
        howToRun: `<p>If a player of the same alignment as the Scapegoat would be
        executed, you may choose that the Scapegoat is executed instead. The Scapegoat <strong>dies</strong>.</p><p class="modal__callout-box">It is best to use the Scapegoat's ability before the final day, because a Scapegoat that remains alive on the final day will almost certainly be exiled. You should always use an evil Scapegoat's ability to prevent evil from losing the game.</p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Beggar",
        description: "The Beggar cannot vote unless someone gives them a token.",
        intro: `<ul><li>The Beggar cannot raise their hand to vote at all unless they
        have a vote token.</li><li>When they do vote, they lose one vote token. If they have more than one, they may only use one at a time.</li><li>Only a dead player may give their vote token to the Beggar, after which that dead player cannot vote. Each dead player decides for themself whether to give the Beggar their vote token. No one, including the Beggar, may move a player's vote token on their behalf.</li><li>When a player gives their vote token to the Beggar, the Beggar learns whether that player is good or evil.</li><li>The Beggar can still nominate freely, and can still vote for an exile freely, because exiles are not affected by abilities.</li><li>If the Beggar dies, they gain one vote token to use while dead, just like any other character would. However, the Beggar loses all their previously acquired vote tokens.</li><li>If the Beggar would become drunk or poisoned, they do not.</li><li>The ability to donate vote tokens is unique to the Beggar ability. Players may not give their vote token to a player that is
        not the Beggar, whether or not a Beggar is in play.</li></ul>`,
        ability: 'You must use a vote token to vote. If a dead player gives you theirs, you learn their alignment. You are sober and healthy.',
        flavor: '"Alms for the poor, good Sir? Spare a coin, Madam? Thank you. God bless! You\'re a right kind soul and no mistake! I\'ll have some swanky nosh tonight, I will!"',
        examples: `<p>The Beggar cannot vote. On the fourth day, Sarah gives her vote token to the Beggar. The Beggar may now vote once and learns that Sarah is good. The Beggar is evil and tells the group that
        Sarah is evil.</p><p>The good Beggar has three vote tokens. Doug gives the Beggar his vote token, and the Beggar learns that Doug is evil. That day, the Beggar dies and loses all their vote tokens except for one.</p>`,
        howToRun: `<p>The Beggar cannot vote unless they have a vote token. They lose
        one vote token each time they vote.</p><p>During the day, a dead player can declare that they give their vote token to the Beggar. Transfer the vote token to the Beggar and privately tell the Beggar the alignment of that player.</p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Apprentice",
        description: "The Apprentice has either a Townsfolk or a Minion ability.",
        intro: `<ul><li>A good Apprentice gains a Townsfolk ability. An evil Apprentice gains a Minion ability. They have this ability until they die.</li><li>The Apprentice learns their ability on their first night,
        and they may act that night if the character whose ability they gain would do so.</li><li>Only abilities listed on the character sheet may be gained.</li><li>If the Apprentice gains an ability that normally only functions on the first night of the game, such as the Grandmother's, it functions on the Apprentice's first night instead.</li><li>The Apprentice does not literally become the character whose ability they gain. They are the Apprentice, a Traveller, so they may be exiled but not executed, and they do not count toward the number of alive players to see if evil wins due to just two players being alive. Also, other characters' abilities that detect characters would detect the Apprentice as the Apprentice.</li></ul>`,
        ability: 'On your 1st night, you gain a Townsfolk ability (if good) or a Minion ability (if evil).',
        flavor: '"For years have I traveled, studying the ways of The Craft. Which craft, you ask? Simply that of the simple folk. Nothing to worry about. Not yet."',
        examples: `<p>The evil Apprentice gains the Assassin ability. That night, they kill the Fool.</p><p>The good Apprentice gains the Fool ability. They are exiled and do not die. While the exile process itself cannot be affected by abilities, the Traveller dies after the exile is decided. In this case the Fool would die, but remains alive.</p><p>The good Apprentice gains the Chambermaid ability. From now on, they learn who wakes at night. Later, the Gambler guesses that the Apprentice is the Chambermaid. The Gambler dies, because the Apprentice is not the Chambermaid.</p>`,
        howToRun: `<p>During the first night after the Apprentice enters play, wake the Apprentice. Show them the <strong>YOU ARE</strong> info token, then a Townsfolk or Minion token. In the Grimoire, replace
        the Apprentice token with that character token, and mark them with the <strong>IS THE APPRENTICE</strong> reminder. That player remains the Apprentice but gains the ability of their character token.</p><p class="modal__callout-box">You will almost certainly want to choose a not-in-play character ability, because there is only one of each character token and the Apprentice needs to use that token.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Matron",
        description: "The Matron chooses where players sit.",
        intro: `<ul><li>The Matron may swap two players' seating positions, up to three times per day. The new seating order is permanent, unless changed again by the Matron.</li><li>The same player may be moved multiple times.</li><li>Some players may find moving difficult due to a physical disability or impediment. In these cases, they are immune to the Matron's ability and can stay put.</li><li>With the Matron in play, players may not talk privately except with their immediate neighbors while sitting down.
        Players may not leave their seat to whisper something to any player, and may not even talk about the game to each other when going to the bathroom, and so on. Players should self-police this.</li><li>If the Matron swaps just one or two sets of players, they may not swap another set of players later that day.</li></ul>`,
        ability: 'Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private.',
        flavor: '"Miss Featherbottom, be quiet. Master Rutherford, a teacup needs just the four fingers, please. I know you are a father of nine, but age, or lack there-of as the case may be, is never an excuse for poor manners."',
        examples: `<p>The good Matron swaps the seating position of the player they think is the Demon, so that player is far away from the player they think is the Minion. They may not whisper to each other now.</p><p>The evil Matron swaps their seat with another player so the Matron is sitting next to the Tea Lady. This way, the two of them can whisper to each other, and the Tea Lady's ability does not work.</p>`,
        howToRun: `<p>Players who leave their seats cannot talk about the game to other
        players until they return.</p><p>Each day, the Matron may choose two players and declare that they swap seating positions. Ask them to do so. Swap their character tokens and any reminders they have in the Grimoire. The Matron may do this up to three times, but all swaps happen one after the other.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Judge",
        description: "The Judge can determine whether an execution succeeds or not, regardless of who voted.",
        intro: `<ul><li>The Judge can decide to pardon a player that they think is innocent, to condemn a player that they think is guilty, or vice versa.</li><li>If the nominee is pardoned, then they are not executed today, and none of the votes for them count. If the nominee is condemned, then they are executed immediately, regardless of how many votes they received, and regardless of whether another player was about to die by execution. Then the day ends, because there can normally only be one execution per day.</li><li>The Judge may use their ability during or after the votes are tallied. However, once a new player has been nominated, then the Judge may only use their ability on this new nominee. The Judge may only use their ability once, and only if a different player made a nomination.</li></ul>`,
        ability: 'Once per game, if another player nominated, you may choose to force the current execution to pass or fail.',
        flavor: '"I find the defendant guilty of the crimes of murder, fraud, arson, larceny, impersonating an officer of the law, practicing medicine without a license, slander, regicide, and littering."',
        examples: `<p>The Slayer was about to die, but the Po is nominated and every alive player votes, so now the Po is about to die. The evil Judge decides that the Po's execution fails. So, as before, the Slayer is
        about to die, and the nomination process continues.</p><p>The good Judge nominates the Professor. Nobody votes, but the Judge may not use their ability. Later, a Traveller is considered for exile. Once again, the Judge may not use their ability because abilities do not affect exiles. The Grandmother nominates the
        Goon for execution. The Goon gets only one vote, but the Judge decides that the Goon is executed immediately.</p>`,
        howToRun: `<p>At any time during a nomination for execution—from the moment that the nomination is declared to the moment before a new player is nominated for execution—the Judge can declare
        that this execution succeeds or fails. If the Judge declares that it succeeds, the nominated player is executed and you may proceed to the night phase <i>(as there may only be one execution per day)</i>.
        If the Judge declares that it fails, the nominated player is no longer about to die and they are treated as receiving zero votes for execution, and the nomination process continues. <strong>The Judge loses their ability</strong>—put the Judge's <strong>NO ABILITY</strong> reminder token by the Judge token.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Voudon",
        description: "The Voudon lets the dead vote as if they were alive, but prevents alive players from voting.",
        intro: `<ul><li>The dead and the Voudon may vote as many times per day as they wish. They do not need a vote token to vote, and do not lose their vote token when they do so. Alive players cannot
        vote. It is not the case that they may put their hand up but the votes don't count—their hands must stay down during voting.</li><li>The number of votes required to execute a player is no longer half or more of the alive players. The player with the most votes is executed each day, but even a single vote is enough to execute a player if no other player gets more votes.</li><li>The Voudon does not alter who can make nominations. As normal, alive players may make nominations, and dead players may not. Since Travellers are exiled, not executed, all players, alive or dead, may support exiling the Voudon or other Travellers.</li><li>If a player is about to die and then the Voudon is exiled, that player is still about to die and nominations continue, but alive players vote as normal. If a later nomination gets more votes and it tallies to half or more of the alive players, this new player is about to die instead.</li></ul>`,
        ability: 'Only you & the dead can vote. They don\'t need a vote token to do so. A 50% majority isn\'t required.',
        flavor: '"Bien venu. Sit down. Breathe deep. Enter the land of the dead. See with their eyes. Speak with their voice. Yon sel lang se janm ase."',
        examples: `<p>There are twelve players alive and three dead. An alive Innkeeper nominates the Moonchild. Of the four players that can vote—the Voudon and the three dead players—three do. All other nominees today get fewer than three votes, so the Moonchild dies.</p><p>It is the first day. Only the Voudon can vote, but does not. The players call for the Voudon to be exiled. Five players support the exile, and seven oppose. The Voudon lives.</p><p>Two dead players vote for the Mastermind to be executed. Then the Voudon, the dead Fool, and the apparently dead Zombuul all vote for the Gossip. The Gossip is executed.</p>`,
        howToRun: `<p>During votes for execution, only dead players and the Voudon may raise their hand to vote. The dead may vote even if they have no vote token, and voting does not use a vote token. If a nominee
        gets at least one vote, they are about to die by execution until a different player gets more votes.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Bishop",
        description: "The Bishop prevents players from nominating at all. Instead, the Storyteller does all nominating.",
        intro: `<ul><li>The Storyteller makes nominations during the nomination process instead of the players, and the Storyteller may nominate as few or as many players as they wish. To make things fair, they must nominate at least one player whose alignment is opposite the Bishop's alignment each day.</li><li>The Bishop does not alter who can and cannot vote. Each player may do so normally.</li><li>Since Travellers are exiled, not executed, any player may call for the Bishop or another Traveller to be exiled.</li></ul>`,
        ability: 'Only the Storyteller can nominate. At least 1 opposing player must be nominated each day.',
        flavor: '"In nomine Patris, et Filii, et Spiritus Sancti… Nos mos Dei. Deus vult de nobis."',
        examples: `<p>The Bishop is good. On the first day, the Storyteller nominates the Demon, a Minion, and two Townsfolk. On the second day, the Storyteller nominates a Minion and an Outsider.</p><p>The Bishop is evil. The Storyteller has nominated nobody. However, the Storyteller must nominate at least one good player today, so they choose the Minstrel. The next day, the Storyteller nominates four good players and the Demon. The Bishop is exiled that day, and now the players may continue the nomination process normally.</p>`,
        howToRun: `<p>Each dawn, mark the good Bishop with their <strong>NOMINATE EVIL</strong>
        reminder, or mark the evil Bishop with their <strong>NOMINATE GOOD</strong> reminder.</p><p>During the nomination process for execution, the players cannot make nominations, but you can. <i>(Voting happens as normal.)</i> When you nominate a player whose alignment is opposite the alignment of the Bishop, remove the Bishop's reminder. You cannot end the nomination process if the Bishop is marked with their reminder.</p><p class="modal__callout-box">Usually, you'll want to nominate about three to five players each day, with at least one of them being evil. You do not have to nominate the Demon each day, but you should nominate all alive players on the final day. Which players you nominate is up to you, but it's best to nominate more evil players if the Bishop is good, and to nominate fewer evil players if the Bishop is evil.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Barista",
        description: "The Barista either makes people sober and healthy, or allows them to act twice as much.",
        intro: `<ul><li>The Storyteller chooses which player the Barista affects each night, and which one of the two Barista abilities is in effect. The Barista does not know who or what the Storyteller
        chooses, but the affected player does.</li><li>If the affected player is acting twice, then they do so at the normal time. If they would normally wake at night, they act, go to sleep, then wake to act again. If they have already used a "once per game" ability, they may use that ability again. If they have a "once per game" ability but have not used it yet, they may use it twice before dusk.</li><li>If the Barista makes a player sober and healthy, their drunkenness and poisoning, if any, is removed, and they may not become drunk or poisoned until dusk. This player must get true information, even if a Vortox is in play.</li></ul>`,
        ability: 'Each night, until dusk, 1) a player becomes sober, healthy & gets true info, or 2) their ability works twice. They learn which.',
        flavor: '"There really is no cause to worry because when you think about it we are all capable and qualified and smart enough to grab the bull by the horns and sit down and figure this out like the reasonable adults we are by the way would you like another cup it really is the most amazing beverage they say it is from the east but anyway where were we ah yes going for a jog and really nutting out this demon business which we can do with just a little teensy mental boost and some logical thinking for example Senior Hu here is a regular customer and therefore quite trustworthy and would anyone like another cup?"',
        examples: `<p>The Barista makes the Sage sober and healthy.</p><p>The Klutz acts twice. They die and must choose two players. If either is evil, evil wins. The next night, the Barista makes the Witch act twice. Two players are cursed.</p>`,
        howToRun: `<p>Each night, remove previous reminders then put the Barista's <strong>SOBER AND HEALTHY</strong> reminder or their <strong>ACTS TWICE</strong> reminder by any character token. Wake that character's player and show them the <strong>THIS CHARACTER SELECTED YOU</strong> info token, the Barista token, then one finger <i>(to show they are sober and healthy)</i> or two fingers <i>(to show they act twice)</i>. Put that player to sleep.</p><p>A player marked <strong>SOBER AND HEALTHY</strong> is sober and healthy <i>(even if they're also marked <strong>DRUNK</strong> or <strong>POISONED</strong>)</i> and always gets true information <i>(even if an ability would make them drunk or poisoned)</i>.</p><p>A player marked <strong>ACTS TWICE</strong> acts twice at the appropriate time. <i>(If the ability is optional, they may use it twice. If it is mandatory, they must use it twice.)</i> Use the Barista's <strong>?</strong> reminders if needed, to substitute for the character's own reminders.</p><p class="modal__callout-box">Some characters are better off knowing they are sober and healthy, as they gain no benefit from acting twice, such as the Flowergirl, Town Crier, or Oracle.</p><p class="modal__callout-box">The Barista ensures players get true information even if an ability causes false information, such as a Fortune Teller, Spy, or Recluse.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Harlot",
        description: "The Harlot learns the character of whoever agrees to reveal it, but at great risk to them both.",
        intro: `<ul><li>Each night, the Harlot chooses a player. That player has a decision to make: do they reveal their character to the Harlot? If they do, the Storyteller may decide that both this player and
        the Harlot die tonight.</li><li>The Harlot only learns the character of the chosen player, not that player's alignment.</li><li>The Harlot may discuss during the day which character they would like to pick at night, and other players may offer to be picked, but they may go back on their word and choose differently when night comes.</li></ul>`,
        ability: 'Each night*, choose a living player: if they agree, you learn their character, but you both might die.',
        flavor: '"Enchanté, Sailor. You look like you need someone to really listen to your troubles. I\'m a good listener. Very, very good."',
        examples: `<p>The good Harlot wakes and chooses the Philosopher, who chooses to reveal. The next night, the Harlot chooses the No Dashii, who chooses not to reveal. The next night, the Harlot chooses the
        Mutant, who chooses to reveal. The Storyteller decides that the Harlot and Mutant die tonight.</p><p>The evil Harlot chooses the Sage, who reveals. The next day, the Harlot says the Sage is actually the Witch.</p>`,
        howToRun: `<p>Each night, wake the Harlot. The Harlot points at any player. Put the Harlot to sleep. Wake the chosen player, show them the <strong>THIS  CHARACTER SELECTED YOU</strong> info token, then the Harlot token. That player either nods their head yes or shakes their head no. Put that player to sleep.</p><p>If they shook their head no, then nothing happens. Continue with the night phase.</p><p>If they nodded their head yes, wake the Harlot and show them the chosen player's character token. Put the Harlot to sleep. You may decide that both players <strong>die</strong>—mark them with <strong>DEAD</strong> reminders.</p><p class="modal__callout-box">When choosing whether to kill players, do what you feel is the most
        interesting and balanced. If the Demon reveals to the Harlot, you should not end the game by killing them.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Butcher",
        description: "The Butcher allows a second execution to occur each day.",
        intro: `<ul><li>After the first executed player has died, the Butcher may nominate a second player for execution. The Butcher may nominate a player that has already been nominated today, and the Butcher may make a nomination even if the Butcher already made a nomination earlier today.</li><li>If a player is executed, even if they do not die, then the Butcher may use their ability. The players may choose to vote or not to vote, so there is no guarantee that this extra nomination will cause an execution—it still needs to get enough votes—but this second nomination does not need to exceed the vote tally of the previous nominations.</li><li>If no execution occurs today, then the Butcher may not use their ability at all today.</li></ul>`,
        ability: 'Each day, after the 1st execution, you may nominate again.',
        flavor: '"It tastes like chicken. More please."',
        examples: `<p>The Witch is executed and dies. The Butcher then nominates the Sage, who gets enough votes to be executed. The Sage dies too.</p><p>The Bone Collector is exiled, and then the Harlot is exiled.
        There are no executions today. The Butcher does not get to nominate again, because exiles are not executions.</p><p>The Butcher nominates the Town Crier, but the Town Crier is not executed. The Mathematician gets more votes and is executed today. The game continues, and the Butcher nominates the Town Crier again. This time, enough hands are raised, and the Town Crier is executed.</p>`,
        howToRun: `<p>Each day, immediately after a player is executed, the Butcher may nominate a player for execution. <i>(Remind them if needed.)</i> To succeed, this nomination must tally votes of at least half the alive players, as normal, but does not have to exceed the votes of the execution that prompted the Butcher ability. If this second execution succeeds, it does not allow the Butcher to nominate a third player.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Deviant",
        description: "The Deviant can avoid being exiled—as long as the Deviant was amusing today.",
        intro: `<ul><li>The Deviant can amuse the group in any way they choose. Generally, verbal means such as jokes, funny stories, or witty remarks will suffice.</li><li>The Storyteller is the judge of whether the Deviant was funny or not.</li></ul>`,
        ability: 'If you were funny today, you cannot die by exile.',
        flavor: '"Twas the lady\'s quip, forsooth."',
        examples: `<p>The evil Deviant cracks a few jokes and gets a few laughs, but the players nevertheless decide to exile them. Even though there are enough votes, the Storyteller decides to keep the Deviant alive.</p><p>On the third day, the Deviant was slightly funny. The players exile the Deviant, but the Deviant does not die. On the fourth day, the Deviant was not very funny, is exiled, and dies.</p>`,
        howToRun: `<p>If the Deviant would be exiled, you may declare that the Deviant
        remains alive.</p><p class="modal__callout-box">It is best to be forgiving and treat even a slightly funny Deviant as funny. It can be tough to be funny when one is expected to be, after all.</p><p class="modal__callout-box">If the player would prefer, you may determine different criteria for whether the Deviant is exiled. If being "funny" is difficult, you may reward the Deviant who "creates a positive mood" or "is helpful to others" instead. The Deviant is not a serious character, and it is meant to encourage laughter, lightheartedness, and fun, so adjust the Deviant rules to your players' needs and talents.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Bone Collector",
        description: "The Bone Collector gives dead players their ability back temporarily.",
        intro: `<ul><li>The Bone Collector must choose a dead player. The chosen player remains dead, but they get their ability to use. If their ability was a "you start knowing" or a "once per game" ability—such as the Virgin, Slayer, Clockmaker, Seamstress, or Juggler—they may use it again, even if it was already used,
        until dusk falls.</li><li>When the Bone Collector chooses a player, that player does not learn they were selected by the Bone Collector, although they find out soon enough when they are woken to use their ability.</li><li>If the Bone Collector dies, that player no longer has the ability they regained due to the Bone Collector.</li></ul>`,
        ability: 'Once per game, at night*, choose a dead player: they regain their ability until dusk.',
        flavor: '"I collect many things. Hair. Teeth. Clothes. Fragments of poems. The dreams of lost lovers. My secret arts are not for you to know but my fee is a mere pittance. Bring me the blood of a noblewoman who died of heartbreak under a full moon, and you shall have your answers."',
        examples: `<p>The Bone Collector gives the dead Flowergirl her ability back. That night, the Flowergirl learns that the Demon did indeed vote today. The following night, the Flowergirl once again has no ability.</p><p>The Bone Collector chooses the dead Witch. The Witch wakes and curses the Clockmaker. The Clockmaker nominates the following day and dies.</p><p>At night, the Bone Collector chooses the dead Butcher. The following day, after a player is executed, the Storyteller says that the Butcher may make a nomination for execution.</p><p>During the day, the dead Juggler guesses five players' characters. That night, the Bone Collector gives the Juggler their ability back. The Juggler learns a "3".</p>`,
        howToRun: `<p>Each night, wake the Bone Collector. They either shake their
        head no or point at any dead player. Put the Bone Collector
        to sleep.</p><p>If they pointed at a dead player, <strong>the chosen player regains their 
        ability</strong>—mark their character token with the Bone Collector's <strong>HAS 
        ABILITY</strong> reminder. <i>(They may need to be woken tonight to use their
        ability.)</i> <strong>The Bone Collector loses their ability</strong>—mark them with
        their <strong>NO ABILITY</strong> reminder. The next dusk, <strong>the chosen player 
        loses their ability</strong>—remove the <strong>HAS ABILITY</strong> reminder.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Gangster",
        description: "The Gangster encourages their neighbors to kill each other.",
        intro: `<ul><li>The Gangster may kill one of their two living neighbors. Their dead neighbors are skipped over, and do not count.</li><li>To use their ability, the Gangster and one of their living neighbors must agree to kill the other living neighbor. The Storyteller must hear and confirm this agreement. The Gangster cannot kill without the Storyteller present.</li><li>Each day, the Gangster may say whatever they want, and offer any encouraging words they want to either player. Once an agreement has been reached, then the Gangster may not use their ability again today, even if that player didn't die due to an ability protecting them.</li><li>The Gangster's two living neighbors are always one clockwise, and one counter-clockwise.</li><li>If both living neighbors want to kill the other, the Gangster decides who dies.</li></ul>`,
        ability: 'Once per day, you may choose to kill a living neighbor, if your other living neighbor agrees.',
        flavor: '"I like your shoes. It would be such a shame if you had a little accident, and they got ruined. Now that you mention it, I like your cufflinks too."',
        examples: `<p>The Gangster neighbors the Saint and the Baron. The Gangster asks the Baron if they want to kill the Saint. The Baron agrees and the Saint dies.</p><p>The Gangster neighbors the Chambermaid and the Poppy Grower, but they are both dead. The Gangster's two living neighbors are the Amnesiac and the Po. The Gangster talks with the Po and offers to kill the Amnesiac. The Po declines. The Gangster talks with the Amnesiac and the Amnesiac asks the Gangster to kill the Po. The Gangster agrees, and the Po dies. Good wins.</p><p>The Gangster neighbors the Fool and the Sage. The Sage and the Gangster agree to kill the Fool, but the Fool doesn't die because of the Fool's ability. The Gangster may not use their ability again today.</p>`,
        howToRun: `<p>Once per day, the Gangster can declare that they wish to use their ability. If so, ask if an alive neighbor agrees. If an alive neighbor agrees, the other alive neighbor <strong>dies</strong>. If both alive neighbors agree, the Gangster chooses which alive neighbor <strong>dies</strong>. If neither alive neighbor agrees, the Gangster may not use their ability today.</p>`,
        group: "Traveller",
        script: "exp"
    },
    {
        name: "Gnome",
        description: "The Gnome protects one player on their team.",
        intro: `<ul><li>The Gnome starts as the same alignment as one other player - their "amigo". The Storyteller publicly announces which player this is.</li><li>When their amigo is nominated, it is the Gnome's responsibility to speak up. The Storyteller may not prompt them to use their ability.</li><li>If their amigo changes alignment, the Gnome's alignment does not change.</li><li>The Gnome may use their ability any number of times over the course of the game, including zero. Their amigo may still only be nominated once per day.</li><li>When the Gnome uses their ability, and the Storyteller confirms it, the nominator dies immediately. Voting for execution still occurs.</li><li>Regardless of what the group wants, it is always the individual player's decision whether they wish to nominate or not, and always the Gnome player's decision on whether they wish to use their ability or not. If the Storyteller feels that a player is being pressured into nominating or using their ability when they don't want to, the Storyteller may not recognize that nomination or ability use.</li></ul>`,
        ability: 'All players start knowing a player of your alignment. You may choose to kill anyone who nominates them.',
        flavor: '"Four the score or seven beers, no shows are goes for me and my. A prank to crack the cranks and planks o\' the floor foundation length, so incontravertabubbilly mini. The large essays down streams of joyce, no greater than is scene, not inherdt, Ha-urrumpho."',
        examples: `<p>The Gnome starts the game at the same time as the rest of the players, and is good. Amy is the Alsaahir. Before the first night, the Storyteller announces that the Gnome is the same alignment as Amy. The Engineer nominates Amy on day 3. The Gnome does not use their ability.</p><p>The Gnome enters the game on the 2nd day, and is evil. Lewis is the Demon. At this time, the Storyteller announces that the Gnome is the same alignment as Lewis. On the 2nd day, the Boffin nominates Lewis, and is killed by the Gnome. On the 3rd day, the Zealot nominates Lewis, and is killed by the Gnome. On the 4th day, the Village Idiot nominates Lewis, and the Gnome does not use their ability.</p>`,
        howToRun: `<p>During the day, as soon as the Gnome has entered play, mark a player of the same alignment with the <strong>AMIGO</strong> reminder. Declare that this player is the same alignment as the Gnome.</p><p>If this player is nominated, but before you have started the voting process, if the Gnome player declares that they wish to use their ability, the nominator <strong>dies</strong>.</p>`,
        group: "Traveller",
        script: "exp"
    },
    {
        name: "Doomsayer",
        description: "Use the Doomsayer to make large games take less time.",
        intro: `<ul><li>The Doomsayer allows players to sacrifice their allies in order to gain information, which shortens the game.</li><li>Only alive players may use the Doomsayer ability, and each may do so only once per game. It is their responsibility to remember to not use it again.</li><li>If a player says something like "I use the Doomsayer ability," then the Storyteller chooses which player to kill, but they must kill an alive player of the same alignment as the player who used the Doomsayer ability. So, if a good player uses the ability, then a good player dies. If an evil player uses the ability, then an evil player dies.</li><li>Once three players are left alive, the Doomsayer ability may no longer be used.</li></ul>`,
        ability: 'If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies.',
        flavor: '"And on the Seventh Day, there shall be a great flood and a pestilence upon the People of the Village of the Ravens! The dead shall rise and the living shall repent! O Woe! O Unholy day! Only by great sacrifice shall they prevail! So sayeth the Sages of Nostros and so sayeth I."',
        examples: `<p>The Monk uses the Doomsayer ability, and the Washerwoman dies. Later that day, the Poisoner uses the Doomsayer ability, and the Baron dies.</p><p>An evil Thief uses the Doomsayer ability, and the Scarlet Woman dies. Later, the Spy uses the Doomsayer ability, and the good Gunslinger dies, because the Spy is registering as good. Later, the Demon uses the Doomsayer ability, and the Spy dies, because the Spy is registering as evil.</p>`,
        howToRun: `<p>At any time, declare that the Doomsayer is in play. Add the Doomsayer token to the Grimoire.</p><p>At any time during the day, if four or more players are alive, a player can declare that they wish to use the Doomsayer ability. When this happens, choose one player of the same alignment. The chosen player <strong>dies</strong>.</p><p class="modal__callout-box">You won't want to kill the Demon this way, unless the game can continue afterwards for some reason, such as if a Scarlet Woman is in play.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Toymaker",
        description: "Use the Toymaker to make small games take more time.",
        intro: `<ul><li>If you created a character list using the Teensyville option in the Script Tool, then you may want to use the Toymaker. Games set in Teensyville have only six Townsfolk, two Outsiders, two Minions, and one Demon on the list, and they specifically cater to five or six players.</li><li>With the Toymaker in play, the Demon learns three not-inplay characters at the start of the game, and the Minion(s)
        and Demon learn who each other are. Once per game, the Demon must voluntarily choose to attack nobody tonight. If the Demon is about wake to attack a player and this would end the game, but the Demon has not yet chosen to attack nobody, then the Storyteller does not wake the Demon—they are forced to attack nobody tonight.</li><li>You may use the Toymaker in games of TROUBLE BREWING with five or six players, but it is not necessary.</li></ul>`,
        ability: 'The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info.',
        flavor: '"It buzzes! It walks down stairs! It keeps you warm at night! It tastes like sugar! The kiddies love it! Introducing... the brand new...Warm\'o-buzzy-wuzzy-walk\'a\'bot-thingy-contraption! Fun for all ages!"',
        examples: `<p>On the second night, when five players are alive, the Imp chooses not to attack, which allows it to act during the final night. On the third night, when four players are alive, it attacks a player.</p><p>On the second night, the Imp attacks a player. On the third night, when just three players are alive, the Imp cannot attack because it is the final night.</p>`,
        howToRun: `<p>At the start of the game, declare that the Toymaker is in play. Add the Toymaker token to the Grimoire, and mark the Demon with the Toymaker's <strong>FINAL NIGHT: NO ATTACK</strong> reminder.</p><p>On the first night, resolve the "Minion info" and "Demon info" steps on the night sheet even though there are fewer than seven players.</p><p>Each night the Demon wakes, they may choose not to attack by
        shaking their head no. If they choose not to attack, remove the <strong>FINAL NIGHT: NO ATTACK</strong> reminder.</p><p>During any night, if the Demon would wake and their attack could end the game, but the Demon is marked <strong>FINAL NIGHT: NO ATTACK</strong>, the Demon does not wake or act tonight.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Angel",
        description: "Use the Angel to help new players have fun when there are one or two new players in a group of veterans.",
        intro: `<ul><li>Being the only new player in a group can be overwhelming. Being protected by the Angel encourages all players to keep new players alive for as long as possible, which means new players have more fun and contribute to the game more.</li><li>All players know who is protected by the Angel, but not
        their alignment or character. Whoever is the single player most responsible for killing a protected player suffers some consequence. For example, if the Demon kills a protected player, the Demon suffers a penalty. If a protected player is executed, the player who suffers a penalty will probably be the one who nominated the protected player.</li></ul>`,
        ability: 'Something bad might happen to whoever is most responsible for the death of a new player.',
        flavor: '"Let those who are without sin dare to raise their hand to my chosen, for I shall strike such fools down with the fury and righteousness of a thousand storms."',
        examples: `<p>The Angel protects Sarah. The Demon attacks and kills her. As a penalty, the Demon cannot attack on the next night.</p><p>Ben is the Demon and is protected by the Angel. The players do not execute him until the final day, at which point they may execute him without penalty.</p>`,
        howToRun: `<p>At the start of the game, declare that the Angel is in play. Declare which player or players it is protecting, with their consent. Add the Angel token and their reminders to the Grimoire,
        and mark each protected player with a <strong>PROTECTED</strong> reminder.</p><p>If a player marked <strong>PROTECTED</strong> dies, something bad happens to the player responsible for the death. You may need to mark their character token with the <strong>SOMETHING BAD</strong> reminder, to remind
        you that they are now poisoned, or mad, or can't vote today, or simply as a reminder to decide on what to do later.</p><p>Remove the Angel at any time, declaring when you do so.</p><p class="modal__callout-box">The Angel only protects a player if that player wants it to. Ask for their consent before the game begins.</p><p class="modal__callout-box">The "something bad" that happens is up to you. However, it is recommended to either make the penalty that the player dies, that the player loses their ability for a day, or that the player may not vote for a day. A light penalty works much better than a severe one.</p><p class="modal__callout-box">Remove the Angel on the final day, so that players feel free to execute players protected by the Angel.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Buddhist",
        description: "Use the Buddhist to help new players have fun when there are one or two veterans in a group of new players.",
        intro: `<ul><li>When experienced players find themselves in a game full of beginners, the veterans will often dominate the game due to their enthusiasm and knowledge.</li><li>Players affected by the Buddhist cannot talk at all for the first two minutes of each day. They may not whisper in private, and may not talk to each other. They simply listen.</li><li>This is <i>not</i> a punishment for being talkative. Being talkative is great! BLOOD ON THE CLOCKTOWER is a talking game, and the more, the merrier. That said, forcing the veterans to stay silent temporarily each day allows the new players to find their
        own voices, to come up with their own theories, and to take action on their own. It is about fun for everybody.</li><li>It is common for a player to say "I am a Buddhist" or for the Storyteller to say to them "You are a Buddhist." This doesn't mean that their character is the Buddhist. It is a pleasant
        shorthand for saying "You are affected by the Buddhist ability." This is similar to saying "You are a Revolutionary."</li></ul>`,
        ability: 'For the first 2 minutes of each day, veteran players may not talk.',
        flavor: '"You throw thorns. Falling in my silence, they become flowers."',
        examples: `<p>Lachlan and Lewis are veterans in a game of mostly new players. To encourage the new players to talk, the Storyteller puts the Buddhist in play. Lachlan and Lewis may not talk for the first two minutes each day, after which they may talk freely.</p><p>Evin is affected by the Buddhist. He is a Minion and simply listens to what people are saying for the first two minutes, allowing him to bluff as a not-in-play character later on.</p>`,
        howToRun: `<p>At the start of the game, declare that the Buddhist is in play. Add the Buddhist token to the Grimoire. Declare which players are Buddhists, with their consent. Those players must stay silent
        for the first two minutes of each day.</p><p>Remove the Buddhist at any time, declaring when you do so.</p><p class="modal__callout-box">If no device is available to set a two-minute timer, then use your best
        judgment as to what is two minutes, and inform the veterans when you feel that the time is up.</p><p class="modal__callout-box">Like the Angel and the Revolutionary, you'll want to ask for a player's consent before affecting them with the Buddhist. Something like this is best: "Do you mind if I make you a Buddhist for this game? You are really good at the game, and I want to give the new players a chance to figure things out for themselves. Is that okay?"</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Revolutionary",
        description: "Use the Revolutionary to help disadvantaged players participate.",
        intro: `<ul><li>If a player has an intellectual disability, is unable to understand the rules of the game, is blind or deaf, or is unable to communicate or participate as normal, they may still play by
        teaming up with a player that they trust.</li><li>These two players are the same alignment and sit next to each other so they can whisper or signal to each other throughout the game. The experienced player can help the disadvantaged player in whatever way is needed, talking on their behalf or suggesting what to do.</li><li>The Revolutionary is also useful for couples or good friends who wish to play, but are uncomfortable with lying to or mistrusting each other, even in a game.</li><li>Once per game, the Storyteller can make either player register as a different character, alignment, or both.</li><li>The Storyteller may wake both players at night, instead of just the player due to wake, if that helps understanding.</li><li>If an ability would change a Revolutionary's alignment, this ability has no effect or it changes both Revolutionaries' alignment, Storyteller's choice.</li></ul>`,
        ability: '2 neighboring players are known to be the same alignment. Once per game, 1 of them registers falsely.',
        flavor: '"United we feigned.<br>Divided, we stalled."',
        examples: `<p>Matt is deaf. He teams up with Julian via the Revolutionary. Matt draws the Poisoner, and Julian is given the Imp. They can scheme in private using sign language, so that Matt can participate.</p><p>Hannah is twelve years old. She is keen to play but does not understand the intricacies of how the characters work. She gets the Monk and teams up with her father, who is the Empath.</p>`,
        howToRun: `<p>When setting up the game, before giving the bag to the players, declare that the Revolutionary is in play and which two neighboring players are Revolutionaries. Add the Revolutionary
        token to the Grimoire. Mark the Revolutionaries with the <strong>REGISTER FALSELY?</strong> reminder between their character tokens.</p><p>Give the bag to one Revolutionary. They draw a token. Look at
        their token, choose a token of the same alignment from the bag, and give it to the other Revolutionary. Then, give the bag to the non-Revolutionary players to draw from.</p><p>Once per game, you can make one player marked <strong>REGISTER  FALSELY?</strong> register as a different character and alignment, then
        remove the <strong>REGISTER FALSELY?</strong> reminder.</p><p></p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Hell's Librarian",
        description: "Use the Hell's Librarian to help a soft-spoken Storyteller participate.",
        intro: `<ul><li>As the Storyteller, you'll find the Hell's Librarian useful when it is difficult to get the group's attention. Maybe you need to explain a game rule? Or get attention for a crucial final-day
        vote? It can also be used to prevent players from talking about their characters before the game begins or from narrating what they are doing at night. Players instinctively stay quieter during the pre-game period and at night, so you may never need it.</li><li>It is best to give the players fair warning before you bring the hammer down. Like the Angel, the threat of a mysterious penalty is more important than the actual penalty. The purpose of this character is to make games run smoothly, not to punish minor infringements.</li></ul>`,
        ability: 'Something bad might happen to whoever talks when the Storyteller has asked for silence.',
        flavor: '"Shhhhhh. Please be quiet. It is best not to disturb the Librarian. I\'ve heard it has a temper."',
        examples: `<p>The Storyteller is attempting to explain the voting rules to a few new players. The group is loud and is not listening to the Storyteller's requests for silence, so the Storyteller declares that
        the Hell's Librarian is in play. Two players continue to loudly talk, even though they know the possible penalty. The Storyteller decides that one dies and the other loses their vote for today. All players are silent while the rules are explained.</p>`,
        howToRun: `<p>At any time, declare that the Hell's Librarian is in play. Add the Hell's Librarian token and their <strong>SOMETHING BAD</strong> reminder to the Grimoire.</p><p>At any time, you can ask the group for silence for a particular period of time. Remind them that the Hell's Librarian is in play
        if needed. If a player talks or otherwise interrupts and makes your job difficult during that time, you can let them know that something bad happens to them. You may need to mark their character token with the <strong>SOMETHING BAD</strong> reminder, to remind you that they are now poisoned, or mad, or can't vote today, or simply as a reminder to decide on what to do later.</p><p class="modal__callout-box">Like the Angel, the "something bad" that might happen is up to you. However, it is recommended to either make the penalty that the player dies, that the player loses their ability for a day, or that the player may not vote for a day. A light penalty works much better than a severe one.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Fiddler",
        description: "Use the Fiddler to decide a winner if the game must end due to time constraints or a stalemate.",
        intro: `<ul><li>Sometimes there won't be enough time to finish a game. Maybe the venue you are playing at needs to close. Maybe some players need to leave unexpectedly and the game cannot continue without them. Maybe the Townsfolk refuse to execute and the Demon refuses to kill.</li><li>The Storyteller can add and activate the Fiddler at any time. To do so, all players close their eyes while the Demon chooses a good player to challenge to a fiddle contest. Then, after a minute or two, all players will raise their hands to vote on which of these two players wins. The game ends, and the winning player's entire team wins too.</li><li>Like an exile, this group decision on who wins the game is not affected by abilities, and the dead may vote normally. The Thief cannot steal votes, the Voudon has no effect, and so on.</li><li>Players cannot use their abilities once the Fiddler has been activated. The Slayer cannot choose to slay a player, the Artist cannot ask their question, and so on.</li><li>If this fiddle contest is a tie, evil wins.</li></ul>`,
        ability: 'Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win.',
        flavor: '"I\'ll wager mi lyef ye cannae best me in a fiddle contest, ye boss-eyed snook! We\'ll go out on the lash, get the pub jammers an\' have a right craic. I\'ll be layin\' ma boots into ya come mornin\' ye rumbly muppet."',
        examples: `<p>The game needs to end in thirty minutes due to a freak lightning storm approaching the neighborhood, so the Storyteller adds the Fiddler. After twenty-five minutes, the Fiddler activates. The
        players choose the good player to win, so good wins.</p><p>There are just four players left alive. Each day, nobody nominates. Each night, the Demon chooses a dead player to kill. Since this could go on indefinitely, the Storyteller adds the Fiddler so that the game can end.</p>`,
        howToRun: `<p>At any time, if you expect to run out of time, declare that the Fiddler is in play and declare the time when the game will end. Add the Fiddler token to the Grimoire.</p><p>When the game needs to end, declare that you are using the Fiddler ability. Put all players to sleep. Wake the Demon. They point at any good player. <i>(If the Demon is good, they must choose an evil player instead.)</i> Wake all players and declare that the Demon player and the chosen player are in a fiddle contest. <i>(Do not say what their characters are.)</i> After a minute or two, run a "vote" for each player in the fiddle contest. <i>(This is not an execution vote.)</i> All players may vote. The player with the most votes wins, their team wins, and the game ends. On a tie, the evil team wins.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Fibbin",
        description: "Add the Fibbin if your script has too much information or no possibility of misinformation.",
        intro: `<ul><li>If you create a character list and it has no characters that cause drunkenness, poisoning, or other ways for information to be false, then you may want to add the Fibbin. Whilst it is not necessary, even a minor chance of a good player's information being incorrect can drastically help the evil players bluff.</li><li>The Fibbin does not make an ability fail in the way that drunkenness and poisoning do. It only affects abilities that provide information from the Storyteller signaling to a player during the night or telling them something.</li><li>If the game ends before you have given a good player incorrect information, that's okay.</li><li>Some characters get false information due to their ability. The Fibbin can make this information true.</li></ul>`,
        ability: 'Once per game, 1 good player might get incorrect information.',
        flavor: '"Tee-hee-hee.<br><br>Tee. Hee. Hee."',
        examples: `<p>On the first night, all players get correct information. On the second night, the Empath learns they are neighboring one evil player, even though both their neighbors are actually good, because of the Fibbin. For the rest of the game, all good players get correct information.</p><p>The Virgin is nominated by a Townsfolk. This Townsfolk is executed immediately—the Fibbin can't affect the Virgin's ability since it doesn't give information. Later, the Monk protects a player. Again, the Monk's ability cannot fail due to the Fibbin's ability. Later, the Ravenkeeper dies at night and gets false information, because information from an ability can be affected by the Fibbin's ability.</p><p>The Storyteller tells the Savant that Lachlan, Ben, or Sarah is the Lunatic, and that all players who didn't vote yesterday are
        good. Both of these statements are true, even though the Savant is supposed to get one piece of true information and one piece of false information. The Fibbin's ability made the Savant's information incorrect, but also true.</p>`,
        howToRun: `<p>At the start of the game, declare that the Fibbin is in play. Add the Fibbin token to the Grimoire.</p><p>Once per game, when a good player gains information from an ability, you can give them incorrect information. <strong>The Fibbin loses their ability</strong>—put their <strong>NO ABILITY</strong> reminder token by their token.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Duchess",
        description: "Add the Duchess if your script has too little information or too much misinformation.",
        intro: `<ul><li>Sometimes, you may want to create a character list using the Script Tool that has hardly any good characters that gain information directly. Whilst having an abundance of abilities and a lack of information can be fun for some players, other players like something more. The Duchess adds regular
        information to such a game.</li><li>Each player that visits the Duchess learns how many visitors are evil, including themself. However, one visitor of the Storyteller's choice will get false information.</li><li>Players that visit the Duchess still get to use their ability normally. The Duchess does not make their ability give false information.</li><li>The players decide amongst themselves which players will be
        the three players to visit. If exactly three visitors cannot be decided upon, then the Duchess does not act tonight.</li></ul>`,
        ability: 'Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info.',
        flavor: '"We shall entertain between the hours of 6 and 7 precisely. Tea at 6:15. Scones at 6:45. Do not be late. Formal wear applies, as always."',
        examples: `<p>The Soldier, Pacifist, and Sage visit the Duchess. The Soldier and Pacifist learn a "0". The Sage learns a "1".</p><p>The Mutant, Butler, and Po visit the Duchess. The Mutant learns a "1", the Butler learns a "2", and the Po learns a "1".</p><p>The Mastermind, Imp, and Minstrel visit the Duchess. The Mastermind learns a "2", the Imp learns a "1", and the Minstrel learns a "2".</p>`,
        howToRun: `<p>At the start of the game, declare that the Duchess is in play. Add the Duchess token and their reminders to the Grimoire.</p><p>Each day, any player may volunteer to visit the Duchess tonight.
        If exactly three players volunteer to visit the Duchess tonight, then mark two of them with a <strong>VISITOR</strong> reminder and one of them with a <strong>FALSE INFO</strong> reminder. If more or less than three players volunteer to visit, do not add these reminders.</p><p>At night, wake each player marked <strong>VISITOR</strong> or <strong>FALSE INFO</strong> one at a time. Show the woken player the Duchess token. If the woken player is marked <strong>VISITOR</strong>, show them fingers <i>(0, 1, 2, or
        3)</i> equaling the number of evil players who are marked either <strong>VISITOR</strong> or <strong>FALSE INFO</strong>. If the woken player is marked <strong>FALSE  INFO</strong>, show them any number of fingers except the correct number. Put the woken player to sleep.</p><p>Remove the Duchess at any time, declaring when you do so.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Sentinel",
        description: "Add the Sentinel to your script to keep the number of Outsiders in play mysterious.",
        intro: `<ul><li>The official character lists are carefully constructed so that the number of Outsiders is never completely known, which lets evil players safely bluff as Outsiders. Many of the games you create using the Script Tool will not have this luxury. If, for one reason or another, the number of Outsiders in a game will become certain, the Storyteller can add a Sentinel. This will confuse matters and help the evil team either bluff as Outsiders or make existing Outsiders look suspicious.</li><li>Games with a Sentinel in play might have one more Outsider than normal. They may have one less. They may have the
        normal amount. It is up to the Storyteller.</li></ul>`,
        ability: 'There might be 1 extra or 1 fewer Outsider in play.',
        flavor: '"Name, please.<br>Papers, please.<br>Weapons, please."',
        examples: `<p>There are seven players in this game. There are no characters on the character list that add Outsiders. The Demon bluffs as the Saint. A Sentinel is in play, so the good players are not sure if
        there is actually a Saint or not.</p><p>There are nine players in this game. Even though a Baron is on
        the character list, the good players know no Baron is in play because the Witch just killed a player, so there should be just two Outsiders in play. However, the Outsiders cannot be trusted because a Sentinel is in play. Indeed, there is one less Outsider than normal in this game, and the Witch is bluffing as the Butler.</p>`,
        howToRun: `<p>At the start of the game, declare that the Sentinel is in play. Add the Sentinel token to the Grimoire.</p><p>While setting up the game, before putting character tokens in the bag, add an Outsider token and remove a Townsfolk token, remove an Outsider token and add a Townsfolk token, or do neither.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Spirit Of Ivory",
        description: "Add the Spirit of Ivory to your script to keep the number of evil players fair and balanced.",
        intro: `<ul><li>When creating character lists using the Script Tool, it is a good idea to include no more than one character that adds evil characters. If two or more players turn evil, then the evil team can win simply by revealing who they are and winning due to their voting majority. Adding the Spirit of Ivory prevents too many players turning evil, creating a more fun and fair game for the good players.</li><li>With a Spirit of Ivory in play, only one more player than normal can ever be evil. If a second player would become evil, they stay good instead.</li><li>The normal number of evil players is printed on the Traveller sheet and on the Setup sheet.</li></ul>`,
        ability: 'There can\'t be more than 1 extra evil player.',
        flavor: '"The Wasteland calls. Bones rise to flesh, then fall to dust. The great spirit grows. The great spirit watches. The great spirit guides. The human listens, or the human is no more."',
        examples: `<p>The Fang Gu attacks an Outsider and creates an evil player. Later, the Devil's Advocate chooses the Goon at night. Normally, the Goon would turn evil, but the Goon remains good because there is already one more evil character than normal in play.</p><p>The Goon is evil. The Snake Charmer chooses the Demon. The evil Demon becomes the good Snake Charmer, and the good Snake Charmer becomes the evil Demon. Since the number of evil players is not increased, the Spirit of Ivory's ability does not trigger.</p>`,
        howToRun: `<p>At the start of the game, declare that the Spirit of Ivory is in play. Add the Spirit of Ivory token and their reminder token to the Grimoire.</p><p>At all times, if there is an extra evil character in play, mark the Spirit of Ivory with the <strong>NO MORE EVIL</strong> reminder. <i>(If any character becomes good, remove the reminder.)</i></p><p>If a player would become evil and the Spirit of
        Ivory is marked <strong>NO MORE EVIL</strong>, that player stays good.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Storm Catcher",
        description: "Use the Storm Catcher to focus the game on a particular good character.",
        intro: `<ul><li>If you want to construct a script based around the actions or information of one particular good character, if you want to have this character in every game <i>(or at least have an evil player bluffing as this character)</i>, you can use the Storm Catcher. Your chosen character will play a big part in the game, will be the focus of a lot of group discussion, and will probably live until the final day.</li><li>The Storyteller declares that one character can't die, unless by execution. This character may be in play, or not in play. If it is in play, this good player lives as long as the good players want them to, since evil players cannot kill them. If it is not in play, all evil players learn this, so any evil player can easily bluff as this character. <i>(They don't have to, but they can.)</i></li></ul>`,
        ability: 'Name a good character. If in play, they can only die by execution, but evil players learn which player it is.',
        flavor: '"At dawn, the temple\'s long shadow creeps to the fountain. At dusk, the obelisk blocks the red glare, cooling warm water under the archway. All lines converge here. A storm is coming, and this, this pebbled and lush and holy place between the apple trees, is the eye."',
        examples: `<p>The Storyteller has built a script based on the General, so declares that "the Storm Catcher favours the General". The General is in play. At night, the Imp and the Godfather both attack the General, who does not die. After five days of information and discussion, the town decides to execute the General, who dies.</p><p>The Storyteller wants a game based around the Empath's information, so declares that "The Storm Catcher favours the Empath". There is no Empath in play. Because the evil players learn this, the Poisoner chooses to bluff as the Empath.</p>`,
        howToRun: `<p>At the start of the game, declare that the Storm Catcher is in play. Add the Storm Catcher token to the Grimoire. Declare which good character is favoured by the Storm Catcher. If the favoured character is in play, mark them with the Storm Catcher's <strong>SAFE</strong> reminder.</p><p>During the first night, wake each evil player in turn. If a good character is marked with the Storm Catcher's <strong>SAFE</strong> reminder, show the evil player the <strong>THIS PLAYER IS</strong> info token, the good character token, point to the good player, then put the evil player to sleep. If no one is marked with the Storm Catcher's <strong>SAFE</strong> reminder, show the evil player the <strong>THESE CHARACTERS ARE NOT IN PLAY</strong> info token and the good character token, then put the evil player to sleep.</p><p>If the character marked with the Storm Catcher's <strong>SAFE</strong> reminder is executed, they <strong>die</strong>. If they would die by other means, they remain <strong>alive</strong>.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Djinn",
        description: "Add the Djinn to all games with a jinx icon on the script. The Djinn resolves jinxes by creating a unique rule.",
        intro: `<ul><li>When creating a character list using the Script Tool, some character combinations will be marked as unusual. These two characters are jinxed—they have abilities that clash or contradict each other in some way. The Djinn creates a special rule that allows these characters to work well together.
        Some jinxed characters even work better with the Djinn in play!</li><li>The Djinn's special rule is described by the Script Tool online, and is printed out automatically when you create a script with
        a character combination that is jinxed.</li><li>There are many different Djinn special rules. Each is tailored to a specific pair of jinxed characters.</li><li>If there are jinxed characters on the character sheet, even if there are no jinxed characters in play, the Storyteller tells all players what the Djinn's special rule is at the start of the game.</li><li>The Djinn may have several special rules at once. If there are multiple pairs of jinxed characters on the character sheet, the players learn all the Djinn's special rules.</li></ul>`,
        ability: 'Use the Djinn\'s special rule. All players know what it is.',
        flavor: 'نحن لسنا هنا.<br>انت لست حقيقي<br>. كل شيء هو وهم.<br> أسئلتك هي جبل نار في يوم صافٍ.',
        examples: `<p>The Pit-Hag and the Heretic are jinxed. At the start of the game, the Storyteller reads out the Djinn's special rule: "A Pit-Hag cannot create a Heretic." Later in the game, the Pit-Hag tries to
        create a Heretic. The Storyteller shakes their head, and the Pit-Hag must choose another character to create.</p><p>The Spy and the Magician are jinxed. At the start of the game, the Storyteller reads out the Djinn's special rule: "When the Spy sees the Grimoire, the Demon and the Magician's character
        tokens are removed." There is no Spy and no Magician in play, but the Storyteller reads this aloud anyway so that the good team doesn't know which Minion is in play.</p>`,
        howToRun: `<p>At the start of the game, if there are jinxed characters on the character sheet, declare that the Djinn is in play and inform the group of all Djinn special rules for this game. <i>(Do this even if there are no jinxed characters in play.)</i></p><p>Follow the Djinn instructions as listed on the Script Tool printout.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Gardener",
        description: "Use the Gardener to assign characters to particular players.",
        intro: `<ul><li>After the ST has put the Gardener into play, they can manually assign and edit which characters are going to be given to which seated players before sending them out.</li><li>If a player has an issue with a particular character, you may use the Gardener to affect setup so that player doesn't draw the relevant token.</li><li>The Gardener can also be useful if a particular player has drawn evil many times over a single session of playing Clocktower.</li><li>The Gardener is designed for use in the official app only.</li></ul>`,
        ability: "The Storyteller assigns 1 or more players' characters.",
        flavor: '"Flavor text will be added eventually..."',
        examples: `<p>The Vizier is on the script and Ida doesn't like playing as outed evil. To ensure that Ida doesn't receive the Vizier token, the Storyteller puts the Gardener into play and assigns Ida directly as the Poisoner instead.</p><p>Robin has been evil every game today. The Storyteller puts the Gardener into play and assigns Robin directly as the Chef instead.</p>`,
        howToRun: `<p>At the start of the game, declare that the Gardener is in play.</p><p>Before character tokens are sent out to players, decide what characters the players affected by Gardener will have. Assign, or swap, the relevant players to the characters you have decided.</p><p>Then, send the characters to players in the game.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Bootlegger",
        description: "Add the Bootlegger to include homebrew characters or rules.",
        intro: `<ul><li>The Bootlegger allows Storytellers to use characters they, or others, have created that are not official characters or allows them to use non-standard rules in the game.</li><li>If there are homebrew characters on the character sheet, or homebrew rules in effect, the Storyteller tells all players what they are before play begins.</li><li>The Bootlegger allows for multiple characters or rules to be in effect at once.</li><li>As long as there is at least one homebrew character on the current script, this Fabled will be in play and can only be removed by switching to a script that does not contain any homebrew characters.</li><li>The Bootlegger is designed for use in the official app only.</li><li>Bootlegger, despite many claims to the contrary, defeated Homebrewy McHomebrewface, "the people's choice", in a hotly contested poll to decide the Fabled's name.</li></ul>`,
        ability: 'This script has homebrew characters or rules.',
        flavor: '"I\'ve got the latest shipment from home, a brew I\'d like to call \'Barrowfog\'. Wanna try?"',
        examples: `<p>The character sheet contains the homebrew character the Peasant. The Storyteller announces that the Bootlegger is in play and then explains how the Peasant works.</p><p>The Storyteller has a homebrew or house rule. The Storyteller announces that the Bootlegger is in play and explains what the homebrew rule is and how it will affect the game.</p>`,
        howToRun: `<p>At the start of the game, if there are homebrew characters on the character sheet or you are running homebrew rules, declare that the Bootlegger is in play and inform the group of all the homebrew characters and/or rules you are using in this game.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Deus Ex Fiasco",
        description: "Use the Deus ex Fiasco to neutralize mistakes and increase your confidence when running a difficult script.",
        intro: `<ul><li>The Deus ex Fiasco must be announced at the start of the game. It may never be added partway through the game. Hypothetically, if the Storyteller makes a mistake mid-game, and adds the Deus ex Fiasco afterwards, all players would know that the mistake was real and the Deus ex Fiasco would not work.</li><li>The Storyteller must make a mistake. This can be an accidental mistake, or a deliberate mistake. The players are not told which.</li><li>If the Storyteller has made an accidental mistake, they do not have to make additional mistakes. If the game is approaching the final day and the Storyteller has not made an accidental mistake, they must make a deliberate mistake before the game ends.</li><li>All mistakes, whether deliberate or accidental, must be corrected. The Storyteller may need to break the rules in order to fix a mistake. Any time after a mistake is made, the Storyteller must inform the group that a mistake has been made and corrected. The exact nature of the mistake is not revealed to the group, but may need to be revealed to an affected player in private.</li><li>Players are welcome to bluff that the Storyteller has made a mistake when they haven't, or to bluff that a mistake was corrected when it wasn't.</li><li>If needed, the Storyteller may make several accidental mistakes, several deliberate mistakes, or some combination of the two.</li></ul>`,
        ability: 'At least once per game, the Storyteller will make a mistake, correct it, and publicly admit to it.',
        flavor: '"It\'s not a bug, it\'s a feature. It\'s not an error, it\'s a tweak. It\'s not broken, it\'s quirky."',
        examples: "<p>During the first day, Doug talks privately with the Storyteller and says that he drew the Drunk token from the bag. The Storyteller looks in the Grimoire and notices that Doug's token is the Drunk. The Storyteller tells Doug that he is now the Mayor, replaces the Drunk token with the Mayor token in the Grimoire, and secretly makes the Ravenkeeper the Drunk instead. Later that day, the Storyteller declares that a mistake has been made.</p><p>The Empath is sitting next to the Monk and the poisoned Recluse. The Storyteller, forgetting that the Recluse is poisoned, accidentally gives the Empath a \"1\". Later that night, the Storyteller wakes the Empath again and gives a \"0\". The following day, when the Empath privately asks what happened, the Storyteller explains that the first number was a mistake, and the second number is correct. To avoid revealing too much, the Storyteller waits until the next day to inform the group that a mistake was made.</p><p>The Imp was executed today. The Storyteller wakes the sober & healthy Undertaker, and deliberately (and incorrectly) shows the Recluse token. Later that night, the Storyteller again wakes the Undertaker and shows the Imp token. In the morning, the Storyteller tells the group that a mistake was made in the night, but corrected.</p><p>The Yaggababble is executed and dies. The Storyteller accidentally declares that the game is over and good has won. However, the Scarlet Woman is still alive. The Storyteller declares that a mistake has been made, and that the game continues.</p><p>Ben is the Shabaloth. At night, Ben kills Amy and Doug. In the morning, the Storyteller deliberately declares that Ben and Lewis have died. After 30 seconds or so, the Storyteller says \"Whoops, I had my Grimoire facing the wrong way. Ben and Lewis should not have died. They are still alive. Amy and Doug died during the night. Sorry, my mistake.\"</p><p>The Storyteller forgot to wake the Poisoner last night. The Storyteller has a private chat with the Poisoner, tells them this, and tells them that every night from now on, they can choose as many players as they want, and the Storyteller will choose which of these players are poisoned.</p><p>The Chambermaid wakes and chooses a dead player, even though the Chambermaid must only choose living players. The Storyteller notices this, but does not correct the Chambermaid. Instead, the Storyteller deliberately gives false information to the Chambermaid. The next day, the Storyteller requests a private chat with the Chambermaid, tells them that they made a mistake by allowing them to choose a dead player, and prompts them to choose two living players immediately. The Storyteller gives correct information this time.</p>",
        howToRun: `<p>At the start of the game, declare that the Deus ex Fiasco is in play. Ignore any groans and complaints from players.</p><p>At any time, if you make a mistake, correct it as best you can, bending the rules if needed. Afterwards, declare that you have made a mistake. Add the <strong>WHOOPSIE</strong> reminder to the Grimoire.</p><p>At any time, you may deliberately break the rules, then correct it. Afterwards, declare that you have made a mistake. Add the <strong>WHOOPSIE</strong> reminder to the Grimoire.</p><p class="modal__callout-box">Remember: Fabled characters are not designed for extra spice. They are characters whose purpose is to help you, as the Storyteller, to run smooth and inclusive games.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Ferryman",
        description: "Use the Ferryman to create a fun and inclusive climax to the game even if new players have used their vote tokens.",
        intro: `<ul><li>If you are running a game for newer players who don't yet grasp the strategy of when to use their dead votes, or have used them when they forgot they were dead, you can add the Ferryman. This will ensure everyone gets a say in the final day's critical votes.</li><li>All dead players regain their vote tokens on the final day, regardless of alignment or when they voted.</li><li>If a dead player still has their vote token, they do not get a second one from the Ferryman.</li><li>The final day is the day that the Storyteller thinks is most likely to be the last day of the game - the day where, if the Demon is not executed, evil will win. This most likely means the day with only 3 living players remaining.</li><li>If vote tokens are used on the final day, they aren't returned.</li></ul>`,
        ability: 'On the final day, all dead players regain their vote token.',
        flavor: '"When righteous dreams come, they have the weight of truth."',
        examples: `<p>Most of the group is new. Two players, Amy and Doug, forgot they were dead in the excitement of voting. The Storyteller puts the Ferryman in play. Later in the game, when there are three players left alive, the Storyteller declares that it is the final day. Amy and Doug regain their vote tokens.</p><p>It is the start of the final day. 17 players are dead and three players are alive. 10 dead players have used their vote tokens. In order to create a more fun and engaging final day, the Storyteller adds the Ferryman and those dead players regain their vote tokens. After a riotously entertaining final day, the Storyteller is celebrated for maximizing the players' enjoyment.</p>`,
        howToRun: `<p>During the game, when you notice that it would be a good idea to add it, declare that the Ferryman is in play. Add the Ferryman token to the Grimoire.</p><p>At the start of the final day, ask the players to return vote tokens to any dead players that do not have one in the Town Square.</p>`,
        group: "Fabled",
        script: "fabled"
    }
];

let jinxes = [
    {
        character1: "Baron",
        character2: "Heretic",
        rule: "The Baron might only add 1 Outsider, not 2."
    },
    {
        character1: "Cerenovus",
        character2: "Goblin",
        rule: "The Cerenovus may choose to make a player mad as the Goblin."
    },
    {
        character1: "Godfather",
        character2: "Heretic",
        rule: "Only 1 jinxed character can be in play."
    },
    {
        character1: "Organ Grinder",
        character2: "Flowergirl",
        rule: "If the Organ Grinder is causing eyes-closed voting, the Flowergirl wakes tonight to choose a player: they learn if that player voted today. (instead of their normal ability)"
    },
    {
        character1: "Organ Grinder",
        character2: "Butler",
        rule: "If players' eyes were closed during a vote, the Butler can vote, but their vote only counts if their master voted too."
    },
    {
        character1: "Vizier",
        character2: "Alchemist",
        rule: "If the Alchemist has the Vizier ability, they may only choose to execute immediately if three or more players voted."
    },
    {
        character1: "Vizier",
        character2: "Courtier",
        rule: "If the Vizier loses their ability, they learn this. If the Vizier is executed when they have their ability, their team wins."
    },
    {
        character1: "Vizier",
        character2: "Investigator",
        rule: "If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller."
    },
    {
        character1: "Vizier",
        character2: "Magician",
        rule: "If the Vizier and Magician are both in play, the Demon does not learn the Minions."
    },
    {
        character1: "Vizier",
        character2: "Preacher",
        rule: "If the Vizier loses their ability, they learn this. If the Vizier is executed when they have their ability, their team wins."
    },
    {
        character1: "Vizier",
        character2: "Fearmonger",
        rule: "The Vizier wakes with the Fearmonger, learns who they chose, and cannot choose to execute that player."
    },
    {
        character1: "Pit-Hag",
        character2: "Cult Leader",
        rule: "If the Pit-Hag turns an evil player into the Cult Leader, they can't turn good due to their own ability."
    },
    {
        character1: "Pit-Hag",
        character2: "Damsel",
        rule: "If a Pit-Hag creates a damsel, the Storyteller chooses which player it is."
    },
    {
        character1: "Pit-Hag",
        character2: "Goon",
        rule: "If the Pit-Hag turns an evil player into the Goon, they can't turn good due to their own ability."
    },
    {
        character1: "Pit-Hag",
        character2: "Heretic",
        rule: "A Pit-hag cannot create a Heretic."
    },
    {
        character1: "Pit-Hag",
        character2: "Politician",
        rule: "If the Pit-Hag turns an evil player into the Politician, they can't turn good due to their own ability."
    },
    {
        character1: "Pit-Hag",
        character2: "Ogre",
        rule: "If the Pit-Hag turns an evil player into the Ogre, they can't turn good due to their own ability."
    },
    {
        character1: "Spy",
        character2: "Alchemist",
        rule: "The Alchemist cannot have the Spy ability."
    },
    {
        character1: "Spy",
        character2: "Magician",
        rule: "When the Spy sees the Grimoire, the Demon and Magician tokens are removed."
    },
    {
        character1: "Spy",
        character2: "Poppy Grower",
        rule: "If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies."
    },
    {
        character1: "Spy",
        character2: "Damsel",
        rule: "If the Spy is (or has been) in play, the Damsel is poisoned."
    },
    {
        character1: "Spy",
        character2: "Heretic",
        rule: "Only 1 jinxed character can be in play."
    },
    {
        character1: "Spy",
        character2: "Ogre",
        rule: "The Spy registers as evil to the Ogre."
    },
    {
        character1: "Widow",
        character2: "Alchemist",
        rule: "The Alchemist cannot have the Widow ability."
    },
    {
        character1: "Widow",
        character2: "Magician",
        rule: "When the Widow sees the Grimoire, the Demon and Magician tokens are removed."
    },
    {
        character1: "Widow",
        character2: "Poppy Grower",
        rule: "If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies."
    },
    {
        character1: "Widow",
        character2: "Damsel",
        rule: "If the Widow is (or has been) in play, the Damsel is poisoned."
    },
    {
        character1: "Widow",
        character2: "Heretic",
        rule: "Only 1 jinxed character can be in play."
    },
    {
        character1: "Al-Hadikhia",
        character2: "Mastermind",
        rule: "Only 1 jinxed character can be in play. Evil players start knowing which player and character it is."
    },
    {
        character1: "Al-Hadikhia",
        character2: "Scarlet Woman",
        rule: "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again."
    },
    {
        character1: "Fang Gu",
        character2: "Scarlet Woman",
        rule: "If the Fang Gu choose an Outsier and dies, the Scarlet Woman does not become the Fang Gu."
    },
    {
        character1: "Legion",
        character2: "Engineer",
        rule: "Legion and the Engineer cannot both be in play at the start of the game. If the Engineer creates Legion, most players (including all Evil), become Evil Legion."
    },
    {
        character1: "Legion",
        character2: "Preacher",
        rule: "Only 1 jinxed character can be in play."
    },
    {
        character1: "Leviathan",
        character2: "Exorcist",
        rule: "Evil does not win when more than 1 good player has been executed, if the Exorcist is alive and has ever successfully chosen the Leviathan."
    },
    {
        character1: "Leviathan",
        character2: "Farmer",
        rule: "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Farmer uses their ability but does not die."
    },
    {
        character1: "Leviathan",
        character2: "Grandmother",
        rule: "If Leviathan is in play and the Grandchild dies by execution, evil wins."
    },
    {
        character1: "Leviathan",
        character2: "Innkeeper",
        rule: "If the Leviathan is in play, the Innkeeper-protected-players are safe from all evil abilities."
    },
    {
        character1: "Leviathan",
        character2: "King",
        rule: "If the Leviathan is in play, and at least 1 player is dead, the King learns an alive character each night."
    },
    {
        character1: "Leviathan",
        character2: "Mayor",
        rule: "If the Leviathan is in play & no execution occurs on day 5, good wins."
    },
    {
        character1: "Leviathan",
        character2: "Monk",
        rule: "If the Leviathan is in play, the Monk-protected-player is safe from all evil abilities."
    },
    {
        character1: "Leviathan",
        character2: "Pit-Hag",
        rule: "After day 5, the Pit-Hag cannot choose Leviathan."
    },
    {
        character1: "Leviathan",
        character2: "Ravenkeeper",
        rule: "Each night*, the Leviathan chooses an alive player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die."
    },
    {
        character1: "Leviathan",
        character2: "Sage",
        rule: "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Sage uses their ability but does not die."
    },
    {
        character1: "Leviathan",
        character2: "Soldier",
        rule: "If the Leviathan is in play, the Soldier is safe from all evil abilities."
    },
    {
        character1: "Lil' Monsta",
        character2: "Magician",
        rule: "Only 1 jinxed character can be in play."
    },
    {
        character1: "Lil' Monsta",
        character2: "Poppy Grower",
        rule: "If the Poppy Grower is in play, Minions don't wake together. They are woken one by one until one of them chooses to take the Lil' Monsta token."
    },
    {
        character1: "Lil' Monsta",
        character2: "Scarlet Woman",
        rule: "If there are 5 or more players alive and the player holding the Lil' Monsta token dies, the Scarlet Woman is given the Lil' Monsta token tonight."
    },
    {
        character1: "Lil' Monsta",
        character2: "Vizier",
        rule: "The Vizier can die by execution if they are babysitting Lil' Monsta."
    },
    {
        character1: "Lleech",
        character2: "Slayer",
        rule: "If the Slayer slays the Lleech's host, the host dies."
    },
    {
        character1: "Lleech",
        character2: "Heretic",
        rule: "If the Lleech has poisoned the Heretic and the Lleech dies, the Heretic remains poisoned."
    },
    {
        character1: "Riot",
        character2: "Exorcist",
        rule: "If the Exorcist chooses Riot on the 3rd night, Minions do not become Riot."
    },
    {
        character1: "Riot",
        character2: "Farmer",
        rule: "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Farmer uses their ability but does not die."
    },
    {
        character1: "Riot",
        character2: "Grandmother",
        rule: "If Riot is in play and the Grandchild dies during the day, the Grandmother dies too."
    },
    {
        character1: "Riot",
        character2: "Innkeeper",
        rule: "If Riot is in play, the Innkeeper-protected player is safe from all evil abilities."
    },
    {
        character1: "Riot",
        character2: "King",
        rule: "If Riot is in play, and at least 1 player is dead, the King learns an alive character each night."
    },
    {
        character1: "Riot",
        character2: "Mayor",
        rule: "The Mayor may choose to stop nominations. If they do so when only 1 Riot is alive, good wins. Otherwise, evil wins."
    },
    {
        character1: "Riot",
        character2: "Monk",
        rule: "If Riot is in play, the Monk-protected player is safe from all evil abilities."
    },
    {
        character1: "Riot",
        character2: "Ravenkeeper",
        rule: "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die."
    },
    {
        character1: "Riot",
        character2: "Sage",
        rule: "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Sage uses their ability but does not die."
    },
    {
        character1: "Riot",
        character2: "Soldier",
        rule: "If Riot is in play, the Soldier is safe from all evil abilities."
    },
    {
        character1: "Cannibal",
        character2: "Butler",
        rule: "If the Cannibal gains the Butler ability, the Cannibal learns this."
    },
    {
        character1: "Cannibal",
        character2: "Juggler",
        rule: "If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct."
    },
    {
        character1: "Cannibal",
        character2: "Poppy Grower",
        rule: "If the Cannibal eats the Poppy Grower, then dies or loses the Poppy Grower ability, the Demon and Minions learn each other that night."
    },
    {
        character1: "Mathematician",
        character2: "Chambermaid",
        rule: "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first."
    },
    {
        character1: "Mathematician",
        character2: "Lunatic",
        rule: "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked."
    },
    {
        character1: "Plague Doctor",
        character2: "Baron",
        rule: "If the Storyteller gains the Baron ability, up to two players become out-of-play Outsiders."
    },
    {
        character1: "Plague Doctor",
        character2: "Boomdandy",
        rule: "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately."
    },
    {
        character1: "Plague Doctor",
        character2: "Evil Twin",
        rule: "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies."
    },
    {
        character1: "Plague Doctor",
        character2: "Fearmonger",
        rule: "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this."
    },
    {
        character1: "Plague Doctor",
        character2: "Goblin",
        rule: "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this."
    },
    {
        character1: "Plague Doctor",
        character2: "Marionette",
        rule: "If the Demon has a neighbour who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen."
    },
    {
        character1: "Plague Doctor",
        character2: "Scarlet Woman",
        rule: "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this."
    },
    {
        character1: "Plague Doctor",
        character2: "Spy",
        rule: "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this."
    },
    {
        character1: "Hatter",
        character2: "Legion",
        rule: "If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion."
    },
    {
        character1: "Hatter",
        character2: "Leviathan",
        rule: "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan."
    },
    {
        character1: "Hatter",
        character2: "Lil' Monsta",
        rule: "If a Demon chooses Lil' Monsta, they also choose a Minion to become and babysit Lil' Monsta tonight."
    },
    {
        character1: "Kazali",
        character2: "Bounty Hunter",
        rule: "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts."
    },
    {
        character1: "Kazali",
        character2: "Choirboy",
        rule: "The Kazali can not choose the King to become a Minion if a Choirboy is in play."
    },
    {
        character1: "Kazali",
        character2: "Goon",
        rule: "The Kazali can choose that the Goon player is one of their evil Minions."
    },
    {
        character1: "Kazali",
        character2: "Damsel",
        rule: "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel."
    },
    {
        character1: "Kazali",
        character2: "Marionette",
        rule: "If the Kazali chooses to create a Marionette, they must choose one of their neighbours."
    },
    {
        character1: "Village Idiot",
        character2: "Pit-Hag",
        rule: "If there is a spare token, the Pit-Hag can create a new Village Idiot. If they do, the drunk one might change."
    },
    {
        character1: "Yaggababble",
        character2: "Exorcist",
        rule: "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight."
    },
    {
        character1: "Summoner",
        character2: "Alchemist",
        rule: "If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment."
    },
    {
        character1: "Summoner",
        character2: "Clockmaker",
        rule: "If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created."
    },
    {
        character1: "Summoner",
        character2: "Legion",
        rule: "If the Summoner creates Legion, most players (including all evil players) become evil Legion."
    },
    {
        character1: "Summoner",
        character2: "Marionette",
        rule: "The Marionette neighbours the Summoner. The Summoner knows who the Marionette is."
    },
    {
        character1: "Summoner",
        character2: "Poppy Grower",
        rule: "If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player."
    },
    {
        character1: "Banshee",
        character2: "Leviathan",
        rule: "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Banshee dies & gains their ability."
    },
    {
        character1: "Banshee",
        character2: "Riot",
        rule: "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Banshee dies & gains their ability."
    },
    {
        character1: "Banshee",
        character2: "Vortox",
        rule: "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died."
    },
    {
        character1: "Summoner",
        character2: "Courtier",
        rule: "If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player."
    },
    {
        character1: "Summoner",
        character2: "Engineer",
        rule: "If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immmediately."
    },
    {
        character1: "Summoner",
        character2: "Hatter",
        rule: "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary."
    },
    {
        character1: "Summoner",
        character2: "Kazali",
        rule: "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary."
    },
    {
        character1: "Summoner",
        character2: "Pit-Hag",
        rule: "he Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary."
    },
    {
        character1: "Summoner",
        character2: "Pukka",
        rule: "The Summoner may choose a player to become the Pukka on the 2nd night."
    },
    {
        character1: "Summoner",
        character2: "Zombuul",
        rule: "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once."
    },
    {
        character1: "Politician",
        character2: "Vizier",
        rule: "The Politician might register as evil to the Vizier."
    },
    {
        character1: "Ogre",
        character2: "Recluse",
        rule: "If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil."
    },
    {
        character1: "Philosopher",
        character2: "Bounty Hunter",
        rule: "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil."
    },
    {
        character1: "Kazali",
        character2: "Soldier",
        rule: "The Kazali can choose that the Soldier player is one of their evil Minions."
    },
    {
        character1: "Legion",
        character2: "Minstrel",
        rule: "If Legion died by execution today, Legion keeps their ability, but the Minstrel might learn they are Legion."
    },
    {
        character1: "Summoner",
        character2: "Preacher",
        rule: "If the Preacher chose the Summoner on or before the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player."
    },
    {
        character1: "Alsaahir",
        character2: "Vizier",
        rule: "If the Vizier is in play, the Alsaahir must also guess which Demon(s) are in play."
    },
    {
        character1: "Zealot",
        character2: "Cannibal",
        rule: "If the Cannibal gains the Zealot ability, the Cannibal learns this."
    },
    {
        character1: "Zealot",
        character2: "Vizier",
        rule: "The Zealot might register as evil to the Vizier."
    },
    {
        character1: "Zealot",
        character2: "Legion",
        rule: "The Zealot might register as evil to Legion's ability."
    },
    {
        character1: "Lord of Typhon",
        character2: "Summoner",
        rule: "If the Summoner creates a Lord Of Typhon, the Lord Of Typhon must neighbor a Minion. The other neighbor becomes a not-in-play evil Minion."
    },
    {
        character1: "Marionette",
        character2: "Balloonist",
        rule: "If the Marionette thinks that they are the Balloonist, +1 Outsider might have been added."
    },
    {
        character1: "Boffin",
        character2: "Alchemist",
        rule: "If the Alchemist has the Boffin ability, the Alchemist does not learn what ability the Demon has."
    },
    {
        character1: "Boffin",
        character2: "Cult Leader",
        rule: "If the Demon has the Cult Leader ability, they can't turn good due to this ability."
    },
    {
        character1: "Boffin",
        character2: "Drunk",
        rule: "If the Demon would have the Drunk ability, the Boffin chooses a Townsfolk player to have this ability instead."
    },
    {
        character1: "Boffin",
        character2: "Goon",
        rule: "If the Demon has the Goon ability, they can't turn good due to this ability."
    },
    {
        character1: "Boffin",
        character2: "Heretic",
        rule: "The Demon cannot have the Heretic ability."
    },
    {
        character1: "Boffin",
        character2: "Ogre",
        rule: "The Demon cannot have the Ogre ability."
    },
    {
        character1: "Boffin",
        character2: "Politician",
        rule: "The Demon cannot have the Politician ability."
    },
    {
        character1: "Boffin",
        character2: "Village Idiot",
        rule: "If there is a spare token, the Boffin can give the Demon the Village Idiot ability."
    },
    {
        character1: "Princess",
        character2: "Cannibal",
        rule: "If the Cannibal nominated, executed, & killed the Princess today, the Demon doesn't kill tonight."
    },
    {
        character1: "Princess",
        character2: "Al-Hadikhia",
        rule: "If the Princess nominated & executed a player on their 1st day, no one dies to the Al-Hadikhia ability tonight."
    },
    {
        character1: "Wraith",
        character2: "Alchemist",
        rule: "If the Alchemist has the Wraith ability, they do not, and a Wraith is in play. Each day, after the execution phase, the living Alchemist may publicly guess a living player as the Wraith: if correct, the Demon must choose the Wraith tonight."
    },
    {
        character1: "Wraith",
        character2: "Magician",
        rule: "Each day, after the execution phase, the living Magician may publicly guess a living player as the Wraith: if correct, the Demon must choose the Wraith tonight."
    },
    {
        character1: "Wraith",
        character2: "Plague Doctor",
        rule: "If the Plague Doctor dies, a living Minion gains the Wraith ability in addition to their own ability, and learns this."
    },
    {
        character1: "Wraith",
        character2: "Marionette",
        rule: "The Wraith does not wake with the Marionette."
    },
];

let isModalOpen = false;
let modal = document.querySelector(".js_modal");
let closeBtn = document.getElementsByClassName("close")[0];
let ability;
let intro;
let flavor;
let examples;
let howToRun;
let group;
let originalName;
let altName;
let name;

initialize();
function initialize() {
    setHeaderHeight();
    populateAll();
}

function setHeaderHeight() {
    let headerHeight = $("header").outerHeight();
    $("html").css({'scroll-padding-top':`${headerHeight}px`});
}

function populateAll() {

    characters.forEach(character => {
        let originalName = character.name;
        let name = getName(originalName);
        let group = character.group;
        let script = character.script;

        if (character.script == "tb") {
            populateTB(name, originalName, group);
        }
        if (character.script == "bmr") {
            populatedBMR(name, originalName, group);
        }
        if (character.script == "sv") {
            populateSV(name, originalName, group);
        }
        if (character.script == "exp") {
            populateEXP(name, originalName, group);
        }
        if (character.group == "Traveller") {
            populateTraveller(name, originalName, script);
        }
        if (character.script == "fabled") {
            populateFabled(name, originalName);
        }
    })
}

function getName(originalName, name) {
    name = originalName.toLowerCase();
    name = name.split(" ");
    if (name[2]) {
        name = name[0] + "-" + name[1] + "-" + name[2];
        name = name.replace("'",'');
    } else if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
    return(name);
};

function populateTB(name, originalName, group) {
    if (group == "Townsfolk") {
        $(".js_tb-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Outsider") {
        $(".js_tb-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Minion") {
        $(".js_tb-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`)
    } else if (group == "Demon") {
        $(".js_tb-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populatedBMR(name, originalName, group) {
    if (group == "Townsfolk") {
        $(".js_bmr-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Outsider") {
        $(".js_bmr-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Minion") {
        $(".js_bmr-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`)
    } else if (group == "Demon") {
        $(".js_bmr-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateSV(name, originalName, group) {
    if (group == "Townsfolk") {
        $(".js_sv-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Outsider") {
        $(".js_sv-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Minion") {
        $(".js_sv-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`)
    } else if (group == "Demon") {
        $(".js_sv-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateEXP(name, originalName, group) {
    if (group == "Townsfolk") {
        $(".js_exp-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Outsider") {
        $(".js_exp-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Minion") {
        $(".js_exp-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`)
    } else if (group == "Demon") {
        $(".js_exp-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateTraveller(name, originalName, script) {
    if (script == "tb") {
        $(".js_trav-tb").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (script == "bmr") {
        $(".js_trav-bmr").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (script == "sv") {
        $(".js_trav-sv").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (script == "exp") {
        $(".js_trav-exp").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateFabled(name, originalName) {
    $(".js_fabled-all").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
}

$('.token').click(function(){
    openModal();
});

function openModal() {
    modal.style.display = "block";
    isModalOpen = true;
}

$('.js_modal-close').click(function(){
    closeModal();
});

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

$(document).keyup(function(e) {
    if (e.key === "Escape" && isModalOpen) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
    $("html").removeClass("modal-open");
    isModalOpen = false;
}

$(".all .token").click(function() {

    resetModal();

    originalName = $(this).attr("data-name");
    altName = originalName;

    getCharacterInformation(originalName);

    updateName();

    colorText(group);

    populateModal(name, altName, intro, ability, flavor, examples, howToRun, originalName);
});

function resetModal() {
    //resets modal position
    setTimeout( () => {
        modal.scrollTop = 0;
    }, 1);

    //stops page scroll
    $("html").addClass("modal-open");
}

function getCharacterInformation(originalName) {
    characters.forEach(character => {
        if (character.name == originalName) {
            ability = character.ability;
            intro = character.intro;
            flavor = character.flavor;
            examples = character.examples;
            howToRun = character.howToRun;
            group = character.group;
        }
    });
};

function updateName() {
    name = originalName.toLowerCase();
    name = name.split(" ");
    if (name[2]) {
        name = name[0] + "-" + name[1] + "-" + name[2];
        name = name.replace("'",'');
    } else if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
}

function colorText(group) {
    if (group == "Townsfolk" || group == "Outsider") {
        $(".modal__title").removeClass("modal__title--bad");
        $(".modal__title").addClass("modal__title--good");
    } else if (group == "Minion" || group == "Demon") {
        $(".modal__title").removeClass("modal__title--good");
        $(".modal__title").addClass("modal__title--bad");
    }
}

function populateModal(name, altName, intro, ability, flavor, examples, howToRun, originalName) {
    setImage(name, altName);
    setName(altName);
    setIntro(intro);
    setAbility(ability);
    setFlavor(flavor);
    setExamples(examples);
    setHowToRun(howToRun);
    setJinxes(originalName, name);
}

function setImage(name, altName) {
    $(".js_token").attr("src",`./img/${name}.png`);
    $(".js_token").attr("alt",`The icon for the ${altName} character`);
}

function setName(altName) {
    $(".js_modal-name").html(`${altName}`);
}

function setAbility(ability) {
    $(".js_modal-ability").html(`${ability}`);
}

function setIntro(intro) {
    if (intro) {
        $(".js_modal-overview").html(`${intro}`);
    } else {
        $(".js_modal-overview").html(`Extra info coming soon...`);
    }
}

function setFlavor(flavor) {
    $(".js_flavor").html(`${flavor}`);
}

function setExamples(examples) {
    if (examples) {
        $(".js_examples").html(`${examples}`);
    } else {
        $(".js_examples").html(`Examples coming soon...`);
    }
}

function setHowToRun(howToRun) {
    if (howToRun) {
        $(".js_how-to-run").html(`${howToRun}`);
    } else {
        $(".js_how-to-run").html(`How to Run coming soon...`);
    }
}

function setJinxes(originalName, name) {
    $(".js_jinxes").empty();
    let foundMatch = false;
    let otherCharacter;
    $(jinxes).each(function() {
        if (this.character1 == originalName || this.character2 == originalName) {
            if (this.character1 == originalName) {
                otherCharacter = this.character2;
            } else {
                otherCharacter = this.character1;
            }
            foundMatch = true;
            let formattedName = otherCharacter.toLowerCase();
            formattedName = formattedName.split(" ");
            if (formattedName[2]) {
                formattedName = formattedName[0] + "-" + formattedName[1] + "-" + formattedName[2];
                formattedName = formattedName.replace("'",'');
            } else if (formattedName[1]) {
                formattedName = formattedName[0] + "-" + formattedName[1];
                formattedName = formattedName.replace("'",'');
            }

            $(".js_jinxes").append(`<div class="modal__jinx" style="display: flex; align-items: center; margin: 15px"><img style="max-width: 75px; margin-right: 10px;" src="./img/${formattedName}.png"><p>${this.rule}</div>`);
        }
    })
    if (originalName == "Djinn") {
        $(".js_jinx-container span").removeClass("d-none");
        foundMatch = true;
        $(jinxes).each(function() {
            let name1 = this.character1;
            let name2 = this.character2;

            name1 = name1.toLowerCase();
            name1 = name1.split(" ");
            if (name1[2]) {
                name1 = name1[0] + "-" + name1[1] + "-" + name1[2];
                name1 = name1.replace("'",'');
            } else if (name1[1]) {
                name1 = name1[0] + "-" + name1[1];
                name1 = name1.replace("'",'');
            }

            name2 = name2.toLowerCase();
            name2 = name2.split(" ");
            if (name2[2]) {
                name2 = name2[0] + "-" + name2[1] + "-" + name2[2];
                name2 = name2.replace("'",'');
            } else if (name2[1]) {
                name2 = name2[0] + "-" + name2[1];
                name2 = name2.replace("'",'');
            }
            $(".js_jinxes").append(`<div class="jinx" style="display: flex; align-items: center; margin: 15px"><img style="max-width: 75px; margin-right: 10px;" src="./img/${name1}.png"><img style="max-width: 75px; margin-right: 10px;" src="./img/${name2}.png"><p>${this.rule}</div>`);

        })
    }
    if (foundMatch) {
        $(".js_jinx-container").removeClass("d-none");
    } else {
        $(".js_jinx-container").addClass("d-none");
    }
}



