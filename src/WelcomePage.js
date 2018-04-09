import React from 'react';
import './App.css';

class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      func: [{ id: 1, matric: '041810', idInt: 'jcsouz', name: "Jean", site: 'Pasteur', manager: "Abel", endContract: '05/06/2018', coworks: [{ id: 10, name: 'Leticia' }, { id: 13, name: 'Tamyres' }, { id: 13, name: 'Ricardo' }] }],
      valueMatricInput: '',
      coWorksFi: [],
      funcSelected: [],
      nameFunc: [],
    }
    this.GetID = this.GetID.bind(this)
    this.GetWorksTeste = this.GetWorksTeste.bind(this)
    this.GetManager = this.GetManager.bind(this)
    this.GetName = this.GetName.bind(this)
    this.NewValueInput = this.NewValueInput.bind(this);
    this.filterFunc = this.filterFunc.bind(this);
  }

  NewValueInput(value) {
    this.setState({
      valueMatricInput: value.target.value
    });
  }

  filterFunc() {
    const { func } = this.state
    if (this.state.valueMatricInput === '' || this.state.valueMatricInput === false) {
      alert('Insira sua matricula')
    }

    else {
      this.setState({
        funcSelected: func.filter(name => name.matric.includes(this.state.valueMatricInput))
      });
    }

    this.setState({
      coWorksFi: this.state.func[0].coworks.map((obj) => {
        return obj.name
      })
    });
  }

  GetName() {
    const { funcSelected } = this.state;
    return funcSelected.map((i) => i.name)

  }

  GetID() {
    const { funcSelected } = this.state;
    return funcSelected.map((i) => i.idInt);
  }

  GetSite() {
    const { funcSelected } = this.state;
    return funcSelected.map((i) => i.site);
  }


  GetManager() {
    const { funcSelected } = this.state;
    return funcSelected.map((i) => i.manager);
  }

  GetWorksTeste() {
    const { coWorksFi } = this.state;
    return coWorksFi.map(i => <li>{i}</li>)
  }


  render() {
    return (
      <div className="Welcome">
        <h1 className="ibm-h1 ibm-plex-sans-semibold">BEM VINDO</h1>
        <h4 className="ibm-h4 ibm-plex-sans-medium "> Ficamos felizes por sua chegada, neste pequeno documento passaremos algumas <i>informações, observações e dicas</i> importantes. </h4>
        <h3 className="ibm-h3 ibm-plex-sans-regular"> Para começarmos, insira sua matricula abaixo: </h3>
        <input onChange={this.NewValueInput} /> <span/>
        <button onClick={this.filterFunc} type="button" className="ibm-btn-pri ibm-btn-gray-50">COMEÇAR</button>
        <br /> <br />
        Pagina 2
            <h1 >Olá <b>{this.GetName()}</b>, abaixo segue algumas informações úteis para você usar no dia a dia:</h1>
        <h1> Em caso de alguma dúvida com relação aos afazeres do dia a dia, ou conversar sobre algo do trabalho, fique avontade para conversar com o seu gerente. </h1>
        <h1>   O seu gerente é o <b>{this.GetManager()}</b>.</h1>
        <h1> Você está iniciando a jornada agora e por isso você não sabe muitas coisas sobre suas tarefas diárias, por isso, fique acvontade para perguntar para seus colegas de trabalho, são eles:{this.GetWorksTeste()}</h1>
        Pagina 3
            <h1> Agora iremos para as observações</h1>
        <h1> Anote seu ID: <b>{this.GetID()}</b></h1>
        <h1> O seu ID é único e é uma forma que facilitam as pessoas de te encontrar nos canais de comunicação. </h1>
        <h1> Mantenha-se conectado: </h1>
        <h1> Voce é importante para nós e precisamos te encontrar, para isso, é recomendado que sempre que vocë abra seu TP faça login nos canais de comunicaçao, entre eles:
              <li> SameTime: Plataforma mais usada e mais fácil de te encontrar </li>
          <li> Slack: Plataforma onde é possível a criação de canais para que o time se reúna </li>
          <li> E-mail Verse: Plataforma de e-mail, onde voce recebe e-mails semanais sobre o que acontece na IBM, convites para reuniões e etc </li> </h1>
        Pagina 4
        <h1> Umas dicas tambem fazem bem: </h1>
        <h4 className="ibm-h4">Aqui na IBM nós temos uma lingua exclusiva que apelidamos de IBMES, e voce como colaborador novo vai ficar perdido, mas nós vamos te ajudar.</h4>
        <div class="ibm-pull-quote ibm-h2">
          <blockquote>
            <p><em><span class="ibm-pullquote-open ibm-textcolor-magenta-50">“</span>Caso tenha dúvida me <i>pinga</i>.<span class="ibm-pullquote-close ibm-textcolor-magenta-50">”</span></em></p>
          </blockquote>
          <h4 className="ibm-h5">Uma das coisas que voce vai ouvir bastante é o <i>"me pinga, pinga ele(a)"</i>, que significa <i>"me chama, chama ele(a)"</i>. <h7 className="obs">SameTime ou Slack</h7></h4>
        </div>
        <div class="ibm-pull-quote ibm-h2">
          <blockquote>
            <p><em><span class="ibm-pullquote-open ibm-textcolor-magenta-50">“</span>Pode me mandar por <i>nota</i>.<span class="ibm-pullquote-close ibm-textcolor-magenta-50">”</span></em></p>
          </blockquote>
          <h5 className="ibm-h5">Outra coisa que voce vai ouvir muito é <i>"me manda por nota"</i>, que significa <i>"me manda por e-mail"</i>. <h7 className="obs"><i>E-mail Notes Verse</i></h7> </h5>
        </div>
        <div class="ibm-pull-quote ibm-h2">
          <blockquote>
            <p><em><span class="ibm-pullquote-open ibm-textcolor-magenta-50">“</span>Ele(a) está aqui <i>site</i>.<span class="ibm-pullquote-close ibm-textcolor-magenta-50">”</span></em></p>
          </blockquote>
          <h4 className="ibm-h5"><i>Site</i> aqui na IBM quer dizer a localidade. Entao se alguem perguntar, o site é: <b>{this.GetSite()}</b></h4>
        </div>
        <h1 className="ibm-h3"> Entao se alguem dizer para voce: </h1>
        <div class="ibm-pull-quote ibm-h2">
          <blockquote>
            <p><em><span class="ibm-pullquote-open ibm-textcolor-magenta-50">“</span>Procure ele(a) aqui no <i>site</i>, se voce nao acha-lo <i>pinga</i> ele mas se ele estiver off manda uma <i>nota</i> <span class="ibm-pullquote-close ibm-textcolor-magenta-50">”</span></em></p>
          </blockquote>
          <h4 className="ibm-h5">Voce já sabe o que fazer ;)</h4>
        </div>
      </div>
    )
  }
}

export default Welcome;