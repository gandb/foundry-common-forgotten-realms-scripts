// Declara o valor global que o Foundry injeta em runtime
declare const Hooks: {
  on(event: string, callback: (...args: unknown[]) => void): number;
  once(event: string, callback: (...args: unknown[]) => void): number;
  off(event: string, callback: (...args: unknown[]) => void): number;
  call(event: string, ...args: unknown[]): unknown;
};

declare const ChatMessage:{
    create( chatInfo: ChatInfo);
    getSpeaker( speakerInfo:SpeakerInfo):any;
};

declare const game:any|Game = new Game();



declare const ui:any|Ui = new Ui();

declare const AudioHelper:{
    preloadSound(path:string):Promise<void>;
    play(playInfo:PlayInfo,autoplay:boolean):void;
}; 

declare class FoundryDocument extends Document{
    COMMON_MODULE:CommonModule;

}


declare const docs:any|FoundryDocument ;

declare class NPC{
    public groups:Set<string>;
    public screens:Set<Screen>;
    public DEFAULT_STYLE:string;
}


private class CommonModule{
    public NPC_DIALOG:NpcDialog;
    public DIALOG_UTILS:DialogUtils;
    public debug(...msg:any):void;
    public info(...msg:any):void;
    public warn(...msg:any):void;
    public error(...msg:any):void;
    public logPrefix(moduleName:string):string; 
}

private class Screen{
    public name:string;
    public type:string;
    public callback:any;
}

private class DialogUtils{
    public helpSubmit:string;
    public createDialog(title:string,style:string,content:string,buttons:Array<any>, callback:any);
    public createButton (action:string,label:string,defaultValue:boolean,type:"screen"|"screen-context"|"action",callback:any);

}

private class NpcDialog{
    public activeNpc:NPC|any;
    public npcs:Map<string,NPC|any>;
    public async showNPCChooseDialog();
    

}



private class Game{
}

p
private class Ui{
}

private class ChatInfo{
    content:string;
    speaker:Speaker;
};

private class SpeakerInfo{
    alias:string;
};

private class Speaker{
    
};

private  class PlayInfo{
    src:string;
    autoplay:boolean;
}
