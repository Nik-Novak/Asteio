import { databaseConfig, mikroORMConfig } from "@config"
import { EntityName, MikroORM, Options } from "@mikro-orm/core"
import fastFolderSizeSync from "fast-folder-size/sync"
import fs from "fs"
import { delay, inject, singleton } from "tsyringe"

import { Schedule } from "@decorators"
import * as entities from "@entities"
import { Logger, PluginsManager } from "@services"
import { resolveDependency } from "@utils/functions"
import { backup, restore } from "saveqlite"
import { ChatGPTAPI as StaticImport } from "chatgpt" //STATIC IMPORT

@singleton()
export class AI {

    // private ai_client: ChatGPTAPI

    constructor(
        @inject(delay(() => Logger)) private logger: Logger
    ) { }

    async initialize(ai_user:string|undefined = process.env.AI_USER, ai_password:string|undefined = process.env.AI_PASSWORD){
      StaticImport //STATIC IMPORT FAILURE
      const {ChatGPTAPI, getOpenAIAuth} = await import('chatgpt'); //OR DYNAMIC IMPORT FAILURE
      // const openAIAuth = await getOpenAIAuth({
      //   email: ai_user,
      //   password: ai_password
      // });
      // const api = new ChatGPTAPI({ ...openAIAuth })
      // await api.initSession()
      // this.ai_client = api;
      // return new AI(api);
    }

    async query(msg: string): Promise<string> {
      // let result = await this.ai_client.sendMessage(msg);
      return ''//result.response;
  }

}