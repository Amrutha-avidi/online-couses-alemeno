import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import error from '../assests/error.jpg'
import styled from 'styled-components'
import tick from '../assests/tick.png'

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const { currentUser } = useSelector(state => state.user)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get('/courses/random')
      const filtering = res.data.filter(each => (
        (currentUser.enrolledCourses.includes(each._id))))
      setEnrolledCourses(filtering)

    }
    fetchCourses()
  }, [currentUser])




  return (
    <div>
      <h1>Enrolled Courses</h1>
      <div>{enrolledCourses.length === 0 ? (
        <ErrorCon>
          <ErrorImg src={error} alt='empty' />
          <h1>You haven't enrolled to any courses </h1>
        </ErrorCon>
      ) : enrolledCourses.map(each => (
        <Content key={each._id}>
          <Image src={each.thumbnailUrl} alt={each.name} />
          <Text>
            <Name>{each.name}</Name>
            <Instructor>Instructor : {each.instructor}</Instructor>

            <Desc>{each.description}</Desc>
            <Schedule>Do attend to the courses on every {each.schedule}</Schedule>
            <Enrolled><h2>Enrolled</h2>
              <img style={{width:"50px", height:"50px"}} src={tick} alt='tick' />
            </Enrolled>
          </Text>

        </Content>
      ))}</div>
    </div>
  )
}

const ErrorCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ErrorImg = styled.img`
  width:500px;
  height:500px;
`

const Content = styled.div`
display:flex
`
const Instructor = styled.p`
  font-size:20px;
  font-weight: normal;
  margin: 0;
  color:orange;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Image = styled.img`
  max-width:450px
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.h1`
  font-size: 35px;
`
const Desc = styled.p`
  font-size:25px;
  color:#353434;
  letter-spacing: 1px;
`
const Schedule = styled.h2`
  color:purple
`
const Enrolled = styled.div`
color:green;
  display: flex;
  align-items: center;
`

export default EnrolledCourses