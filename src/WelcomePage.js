import React from 'react';
import './App.css';

class Welcome extends React.Component{
    constructor(){
        super();
        
        this.state={
            func:[{id: 1, matric:'041810', name:"Jean", site:'Pasteur', manager:"Abel", endContract:'05/06/2018'}],
            valueMatricInput: '',
            funcSelected: [],
            nameFunc: "",
        }

        this.Teste = this.GetName.bind(this)
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
        if(this.state.funcSelected.length === 0){
            alert('Matricula não encontrada')
        }
    }

    GetName (){
        const{funcSelected}=this.state;
        return funcSelected.map((i)=>i.name)
    }

    render() {
        return (
            <div className="Welcome">
            <h1 className="ibm-h1 ibm-plex-sans-semibold">BEM VINDO</h1>
            <h4 className="ibm-h4"> Olá, ficamos felizes por sua chegada, neste documento passaremos para você algumas observações, informações e dicas importantes. </h4>
            <h3 className="ibm-h3"> Para começarmos, por favor, insira sua matricula abaixo: </h3>
            <input onChange={this.NewValueInput}/>
            <button onClick={this.filterFunc} type="button" className="ibm-btn-pri ibm-btn-gray-50">COMEÇAR</button> 
            <h1>Olá {this.GetName()}</h1>

            </div>
        )
    }
}

export default Welcome;