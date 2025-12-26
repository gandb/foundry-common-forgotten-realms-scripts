// Declara o valor global que o Foundry injeta em runtime
declare const Hooks: {
  on(event: string, callback: (...args: unknown[]) => void): number;
  once(event: string, callback: (...args: unknown[]) => void): number;
  off(event: string, callback: (...args: unknown[]) => void): number;
  call(event: string, ...args: unknown[]): unknown;
  callAll(event:string, ...args: unknown[]): unknown;
};
 
declare const CONFIG = {
    debug:{
        hooks:boolean
    }
};

namespace CONST{
    namespace KEYBINDING_PRECEDENCE{
        var NORMAL:any;
    }
};

namespace foundry {
      namespace utils {
        function mergeObject(options:any,options2:any);
      }

    namespace applications {
      namespace api {
        class DialogV2 {
          constructor(options?: DialogV2Options);
          public render(options:any);
        
        }
        interface DialogV2Options {
          // tipos das opções
        }
      }
    }
  }

declare const ChatMessage:{
    create( chatInfo: any,options:any|undefined=undefined);
    getSpeaker( speakerInfo:SpeakerInfo):any;
};

declare const game:any|Game = new Game();

declare const ui:any|Ui = new Ui();

declare const AudioHelper:{
    preloadSound(path:string):Promise<void>;
    play(playInfo:PlayInfo,autoplay:boolean):void;
};

private class Game{
}
private class Ui{
}
 
private class SpeakerInfo{
    alias:string;
};

private class Speaker{
    
};

private  class PlayInfo{
    src:string;
    autoplay:boolean;
}

   
 
declare const AudioHelper:{
    preloadSound(path:string):Promise<void>;
    play(playInfo:PlayInfo,autoplay:boolean):void;
}; 

declare class FoundryDocument extends Document{
    COMMON_MODULE:CommonModule;

}




declare class Application{
    static get defaultOptions():any;
    activateListeners(html: any): void ;
    close();
    render(value:boolean);
}


declare class NPCDialog {

    npcSelected:NPC|any;
    activeNPC:NPC|any;
    npcs:Map<string,NPC>=new Map();
    buttonloaded:boolean;


    async addNPCButtons (controls:any) ;

    async showNPCChooseDialog ();

    async callMinsc (frmModule:Module);

    async warnAboutUpdate  (lastVersion:any);

}  



declare const docs:any|FoundryDocument ;

declare class Module{}
  
 
private class Screen{
    public name:string;
    public type:string;
    public callback:any;
}

private class DialogUtils{
    public helpSubmit:string;
    public createDialog(title:string,style:string,content:string,buttons:Array<any>, callback:any=undefined);
    public createButton (action:string,label:string,defaultValue:boolean,type:"screen"|"screen-context"|"action",callback:any=undefined);

}
 
 


 /**COMMON MODULE GLOBAL */

declare class CommonModule{
    public readonly name:string;
	public readonly version; 
    public NPC_DIALOG:NPCDialog;
    public DIALOG_UTILS:DialogUtils; 
    public REGION_UTILS:RegionUtils; 
    public debug(...msg:any):void;
    public info(...msg:any):void;
    public log(...msg:any):void;
    public warn(...msg:any):void;
    public error(...msg:any):void;
    public logPrefix(moduleName:string):string; 
    public whaitFor(test:()=>boolean):Promise<void>;  
}


 declare class RegionUtils {
			public  sendMessageToChat (senderid:string,message:string);
            public  stop (event:any);
			public  async toggleVisibilityRegions(); 
 }
