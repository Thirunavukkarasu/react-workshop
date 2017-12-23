import React from 'react'

class CourseCard extends React.Component{
    render(){
        const {course } = this.props

        return(
            <div className="course-card">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
            </div>
        )
    }
}

export default CourseCard