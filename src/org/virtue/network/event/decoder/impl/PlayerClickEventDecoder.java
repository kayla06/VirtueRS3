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
package org.virtue.network.event.decoder.impl;

import org.virtue.game.entity.player.Player;
import org.virtue.network.event.buffer.InboundBuffer;
import org.virtue.network.event.context.impl.in.PlayerClickEventContext;
import org.virtue.network.event.decoder.EventDecoder;
import org.virtue.network.event.decoder.IncomingEventType;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 14/01/2015
 */
public class PlayerClickEventDecoder implements EventDecoder<PlayerClickEventContext> {

	/* (non-Javadoc)
	 * @see org.virtue.network.event.decoder.EventDecoder#createContext(org.virtue.game.entity.player.Player, int, org.virtue.network.event.buffer.InboundBuffer)
	 */
	@Override
	public PlayerClickEventContext createContext(Player player, int opcode, InboundBuffer buffer) {
		boolean forceRun = buffer.getByte() == 1;
		int index = buffer.getShortA();
		return new PlayerClickEventContext(index, forceRun, opcode);
	}

	/* (non-Javadoc)
	 * @see org.virtue.network.event.decoder.EventDecoder#getTypes()
	 */
	@Override
	public IncomingEventType[] getTypes() {		
		return new IncomingEventType[] { 
				IncomingEventType.PLAYER_OPTION_1, IncomingEventType.PLAYER_OPTION_2,
				IncomingEventType.PLAYER_OPTION_3, IncomingEventType.PLAYER_OPTION_4,
				IncomingEventType.PLAYER_OPTION_5, IncomingEventType.PLAYER_OPTION_6,
				IncomingEventType.PLAYER_OPTION_7, IncomingEventType.PLAYER_OPTION_8,
				IncomingEventType.PLAYER_OPTION_9, IncomingEventType.PLAYER_OPTION_10
		};
	}

}
