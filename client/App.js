import React from "react";
import CategoryContainer from "./CategoryContainer";
import IntroContainer from "./IntroContainer";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            bio_about: '',
            email: '',
            githubHandle: '',
            phoneNumber: '',
            projects:[],
            workExp:[],
            picture:' '
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
            name: 'Web Dev Cat',
            bio_about: 'Currently studying to be a programmer.',
            email: 'webcat@gmail.com',
            githubHandle: 'lunaf-github',
            phoneNumber: '(123)456-7890',
            projects:[
                {
                  title:"Snake Game",
                  dates:"1/1/2022",
                  tech:['react','node'],
                  bulletPoints:["Implemented react", "Used node express(I think...)", "Added Event listeners to move the snake", "There are no bugs, only features"],
                  moreinfoBtn: true,
                  previewBtn: true,                 
                }, 
                {
                   title:"Tick Tack Toe",
                   dates:"2/2/2022",
                   tech:['react','node', 'js'],
                   bulletPoints:["Implemented react", "Did some styiling using CSS"],
                   moreinfoBtn: true,
                   previewBtn: true,                
                }
               ],
            workExp:[
                {
                  title:"Senior Full-Stack Web Developer",
                  dates:"1/1/2022",
                  tech:['react','node'],
                  bulletPoints:["implemented react", "used node express"],
                  moreinfoBtn: false,
                  previewBtn: false,                  
                }, 
                {
                   title:"Software Engineer - Full-Stack",
                   dates:"2/2/2022",
                   tech:['react','node', 'js'],
                   bulletPoints:["implemented react but no redux", "used node express"],
                   moreinfoBtn: false,
                   previewBtn: false,                   
                },
                {
                    title:"Junior Software Engineer - Front-End",
                    dates:"2/2/2022",
                    tech:['react','node', 'js'],
                    bulletPoints:["implemented react but no redux", "used node express"],
                    moreinfoBtn: false,
                    previewBtn: false,
                 }
               ],
            picture:""
        })
        }, 5000); 
    }

    render(){

        return(
        <article>
          <IntroContainer name={this.state.name} bio_about={this.state.bio_about}  email={this.state.email} githubHandle={this.state.githubHandle} phoneNumber={this.state.phoneNumber} picture={this.state.picture} />
          <CategoryContainer info={this.state.projects} label='Projects'/>
          <CategoryContainer info={this.state.workExp} label='Work Experience'/>
        </article>
        );        
    }

}
export default App;