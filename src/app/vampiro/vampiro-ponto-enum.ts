export class VampiroPontoEnum{

    public static PADRAO:VampiroPontoEnum = new VampiroPontoEnum ([],true,'');
    
    public static PADRAO1:VampiroPontoEnum = new VampiroPontoEnum (['Armas Brancas', 'Armas de Fogo', 'Atletismo'],false,'');
    
    public static PADRAO2:VampiroPontoEnum = new VampiroPontoEnum (['Briga', 'Condução', 'Furtividade'],false,'');
    
    public static PADRAO3:VampiroPontoEnum = new VampiroPontoEnum (['Ladroagem', 'Ofícios', 'Sobrevivência'],false,'');
    
    public static PADRAO4:VampiroPontoEnum = new VampiroPontoEnum (['Empatia com Animais', 'Etiqueta', 'Intimidação'],false,'');
    
    public static PADRAO5:VampiroPontoEnum = new VampiroPontoEnum (['Liderança', 'Manha', 'Performance'],false,'');
    
    public static PADRAO6:VampiroPontoEnum = new VampiroPontoEnum (['Persuasão', 'Sagacidade', 'Subterfúgio'],false,'');
    
    public static PADRAO7:VampiroPontoEnum = new VampiroPontoEnum (['Ciência', 'Erudição', 'Finanças'],false,'');
    
    public static PADRAO8:VampiroPontoEnum = new VampiroPontoEnum (['Investigação', 'Medicina', 'Ocultismo'],false,'');
    
    public static PADRAO9:VampiroPontoEnum = new VampiroPontoEnum (['Percepção', 'Política', 'Tecnologia'],false,'');
    

    public static FISICO:VampiroPontoEnum = new VampiroPontoEnum(['Força','Destreza','Vigor'],true, 'Físicos');

    public static SOCIAL:VampiroPontoEnum = new VampiroPontoEnum(['Carisma','Manipulação','Autocontrole'],true ,'Sociais');

    public static MENTAL:VampiroPontoEnum = new VampiroPontoEnum(['Inteligência','Raciocínio','Determinação'],true, 'Mentais');

    constructor (private _atributos:Array<string>,private _ehDeAtributo:boolean, private _titulo:string) {} 

    public get titulo():string{
        return this._titulo;
    }

    public get atributos():Array<string>{
        return this._atributos;
    }

    public get ehDeAtributo():boolean{
        return this._ehDeAtributo;
    }

}