import React from 'react';
import './App.css';

class Welcome extends React.Component{
    constructor(){
        super();
        
        this.state={
            func:[{id: 1, matric:'041810', name:"Jean", site:'Pasteur', manager:"Abel", endContract:'05/06/2018', coworks:[{id:10,name:'jean'}, {id:13, name:'jojo'}]}],
            valueMatricInput: '',
            coWorks: [],
            funcSelected: [],
            nameFunc: [],
        }

        this.GetWorksTeste= this.GetWorksTeste.bind(this)
        this.GetManager = this.GetManager.bind(this)
        this.GetName = this.GetName.bind(this)
        this.NewValueInput = this.NewValueInput.bind(this);
        this.filterFunc = this.filterFunc.bind(this);
    }

    NewValueInput (value){
        this.setState({
            valueMatricInput: value.target.value
            });
    }

    filterFunc (){
        const {func} = this.state
        this.setState({
            funcSelected: func.filter(name => name.matric.includes(this.state.valueMatricInput))   
        }); 
            
        this.setState({coWorks: this.state.funcSelected.map(name=>name.coworks)})
        console.log(this.state.coWorks)
    }

    GetName (){
        const{funcSelected}=this.state;
        return funcSelected.map((i)=>i.name)

    }

    GetManager (){
        const{funcSelected}=this.state;
        return funcSelected.map((i)=>i.manager);
    }

    GetWorksTeste (){
        const {coWorks} = this.state;
            coWorks.map(function(cw){
                return (<ul>{cw.name}</ul>)
            })
        
    }


    render() {
        return (
            <div className="Welcome">
            <h1 className="ibm-h1 ibm-plex-sans-semibold">BEM VINDO</h1>
            <h4 className="ibm-h4"> Olá, ficamos felizes por sua chegada, neste documento passaremos para você algumas observações, informações e dicas importantes. </h4>
            <h3 className="ibm-h3"> Para começarmos, por favor, insira sua matricula abaixo: </h3>
            <input onChange={this.NewValueInput}/>
            <button onClick={this.filterFunc} type="button" className="ibm-btn-pri ibm-btn-gray-50">COMEÇAR</button> 
            <br/> <br/>
            Pagina 2
            <h1>Olá <b>{this.GetName()}</b>, estamos felizes por ter você na nossa companhia, abaixo segue algumas informações úteis para você usar no dia a dia:</h1>
            <h1> Em caso de alguma dúvida com relação aos afazeres do dia a dia, ou conversar sobre algo do trabalho, fique avontade para conversar com o seu gerente.
                O seu gerente é o <b>{this.GetManager()}</b></h1>
            <button onClick={this.GetWorksTeste}> oi </button>
            <h1> Você está iniciando a jornada agora e por isso você não sabe muitas coisas sobre suas tarefas diárias, por isso, fique acvontade para perguntar para seus colegas de trabalho, são eles:{this.GetWorksTeste()}</h1>
            </div>
        )
    }
}

export default Welcome;