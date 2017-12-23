import React, { Component } from 'react'
import CourseCard from './CourseCard'

class App extends Component {
  constructor(){
    super()
    this.state = {
       clicked : false
    }
    this.submitResult = this.submitResult.bind(this);
  }

  submitResult(){
    this.setState({
        clicked: true
    });
  }

  render() {
    const courses = [{
       name  : 'React',
       description : 'UI framework by Facebook',
       duration : 40
    },{
      name  : 'Redux',
      description : 'UI framework by Facebook',
      duration : 40
    },{
      name  : 'Angular',
      description : 'UI framework by Facebook',
      duration : 40
    },{
      name  : 'VueJS',
      description : 'UI framework by Facebook',
      duration : 40
    },{
      name  : 'React',
      description : 'UI framework by Facebook',
      duration : 40
   },{
     name  : 'Redux',
     description : 'UI framework by Facebook',
     duration : 40
   },{
     name  : 'Angular',
     description : 'UI framework by Facebook',
     duration : 40
   },{
     name  : 'VueJS',
     description : 'UI framework by Facebook',
     duration : 40
   }]

    if(this.state.clicked){
      return (
        <h1>Your result sumbitted!</h1>
      )
    }
    else{
      return (
        <div className="App">
          <h1 className="app-title">Courses Offered</h1>
          <div className="course-list">
            {
              courses.map( (course, idx) => {
                return (<CourseCard key={idx} course={course}/>)
              })
            }
          </div>
        </div>
      )
    }
  }
}

export default App
