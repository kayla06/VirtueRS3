/**
 * Copyright (c) 2014 Virtue Studios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions\:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 5/02/2015
 */
var NpcListener = Java.extend(Java.type('org.virtue.engine.script.listeners.NpcListener'), {

	/* The npc ids to bind to */
	getIDs: function() {
		return [546, 551, 522, 523, 5913, 550, 549, 519, 520, 521, 8864, 526, 527];
	},

	/* The first option on an npc */
	handleInteraction: function(player, npc, option) {
		switch (npc.getID()) {
		case 551://Varrock Sword Shop
			if (option == 3) {
				api.setVarp(player, 304, 6);
				api.setVarp(player, 305, 555);
				api.setVarc(player, 2360, "Varrock Sword Shop");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 522:
		case 523://General store assistant
			if (option == 3) {
				api.setVarp(player, 304, 3);
				api.setVarp(player, 305, 553);//NOTE: Make sure you add the stock information in ContainerState.java
				api.setVarc(player, 2360, "Varrock General Store");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 546://Zaff Staff Shop
			if (option == 3) {
				api.setVarp(player, 304, 9);
				api.setVarc(player, 2360, "Zaff's Superior Staves");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 549://Horviks Armour Shop
			if (option == 3) {
				api.setVarp(player, 304, 2);
				api.setVarc(player, 2360, "Horvik's Armour Shop");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 550://Lowe's Archery Emporium
			if (option == 3) {
				api.setVarp(player, 304, 7);
				api.setVarp(player, 305, 556);
				api.setVarc(player, 2360, "Lowe's Archery Emporium");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 5913://Aubury's Rune Shop
			if (option == 4) {
				api.setVarp(player, 304, 5);
				api.setVarp(player, 305, 557);
				api.setVarc(player, 2360, "Aubury's Rune Shop");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 519://Bob
			if (option == 3) {
				api.setVarp(player, 304, 1);
				api.setVarp(player, 305, 554);
				api.setVarc(player, 2360, "Bob's Brilliant Axes");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 520:
		case 521://General store assistant
			if (option == 3) {
				api.setVarp(player, 304, 3);
				api.setVarp(player, 305, 553);//NOTE: Make sure you add the stock information in ContainerState.java
				api.setVarc(player, 2360, "Lumbridge General Store");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 8864://Hank (Fishing shop)
			if (option == 3) {
				api.setVarp(player, 304, 562);
				api.setVarp(player, 305, 561);
				api.setVarc(player, 2360, "Lumbridge Fishing Supplies");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		case 526://General store assistant
		case 527://General store assistant
			if (option == 3) {
				api.setVarp(player, 304, 3);
				api.setVarp(player, 305, 553);//NOTE: Make sure you add the stock information in ContainerState.java
				api.setVarc(player, 2360, "Falador General Store");
				api.openCentralWidget(player, 1265, false);
				return true;
			}
			return false;
		default:
			return false;
		}
	},
	
	getInteractRange : function (npc, option) {
		return 1;
	}

});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var ids = [ 546, 551, 522, 523, 5913, 550, 549, 519, 520, 521, 8864, 526, 527 ];
	var npcListener = new NpcListener();
	scriptManager.registerNpcListener(npcListener, npcListener.getIDs());
};