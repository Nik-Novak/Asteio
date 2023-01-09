import { Category } from "@discordx/utilities"
import type { CommandInteraction, Message } from "discord.js"
import { Client } from "discordx"

import { Discord, Slash } from "@decorators"
// import { AI } from "src/services/AI"
import { resolveDependency } from "@utils/functions"

@Discord()
@Category('General')
export default class JokeCommand {

	@Slash({ 
		name: 'joke'
	})
	async joke(
		interaction: CommandInteraction,
		client: Client,
		{ localize }: InteractionData
	) {

		const msg = (await interaction.followUp({ content: "Thinking...", fetchReply: true })) as Message

		
		
		let response = ''//await ai.query('Say hello as a cowboy');

		const content = localize["COMMANDS"]["JOKE"]["MESSAGE"]({
			member: msg.inGuild() ? `${interaction.member},` : "",
			content: response
		});

    await msg.edit(content)
	}

}
