import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import likeImg from '../assests/likeImg.png'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchSuccess, like } from '../redux/videoSlice'
import { enrolled } from '../redux/userSlice'

const CoursePage = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { currentVideo } = useSelector((state) => state.video)
  // console.log(currentVideo)
  const dispatch = useDispatch()

  const path = useLocation().pathname.split('/')[2]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await axios.get(`/courses/find/${path}`)
        dispatch(fetchSuccess(courseRes.data))
      } catch (err) { }
    }
    fetchData()
  }, [path, dispatch])

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`)
    dispatch(like())
  }

  const handleEnroll = async () => {
    await axios.put(`/users/enroll/${currentVideo._id}`)
    // console.log(currentVideo)
    dispatch(enrolled(currentVideo._id))
  }


  return (
    <CourseCon>
      <Content>
        <div>
          <Head>{currentVideo.name}</Head>
          <DurationStatus>
            <Instructor>Instructor : {currentVideo.instructor}</Instructor>
            <Location>{currentVideo.location}</Location>
          </DurationStatus>

          <Para>{currentVideo.description}</Para>
          <DurationStatus>
            <Duration>Duration : {currentVideo.duration}</Duration>
            <Status>Enrollment Status : {currentVideo.enrollmentStatus}</Status>
          </DurationStatus>
          <Schedule>{currentVideo.schedule}</Schedule>
          <LikeButton onClick={handleLike} >
            {currentVideo.likes?.includes(currentUser?._id) ? (
              <img style={{ width: '50px', height: '50px' }} src={likeImg} alt='like' />
            ) : (
              <img style={{ width: '50px', height: '50px' }} src={likeImg} alt='like' />
            )}{" "}
            <Count> {currentVideo.likes?.length}</Count>

          </LikeButton>


        </div>
        <div>
          <Image src={currentVideo.thumbnailUrl} alt={currentVideo.name} />
          {currentUser.enrolledCourses?.includes(currentVideo._id)
            ? ( <Enroll onClick={handleEnroll} >Enrolled</Enroll>
            ) : (
               <Enroll onClick={handleEnroll}  >Enroll Now</Enroll>

            )

          }
        </div>
      </Content>
      <Content>
        <div>
          <h1>Pre-requisities</h1>
          <ul>{currentVideo.prerequisities.map(each => (
            <Items key={each}>{each}</Items>
          ))}</ul>
        </div>
        <div>
          <h1>What you'll learn</h1>
          <ul>{currentVideo.details.map(each => (
            <Items key={each}>{each}</Items>
          ))}</ul>
        </div>
      </Content>
    </CourseCon>
  )
}
const CourseCon = styled.div`
  margin: 30px 50px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const Image = styled.img`
  width: 800px;
  height: 450px;
`
const Enroll = styled.button`
margin-top: 20px;
  width: 750px;
  height: 50px;
  font-size:20px;
  border-radius: 20px;
  color:white;
  background-color: green;
  border:none;
  cursor: pointer;
  padding: 5px;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  justify-content: space-between;
  gap:50px;

`
const Status = styled.p`
    color:#f00cb3;
    font-weight: 400;
    font-size:20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Duration = styled.p`
    color:blue;
    font-weight: 400;
    font-size:20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
`
const Instructor = styled.p`
  font-size:20px;
  font-weight: normal;
  margin: 0;
  color:orangered;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const Head = styled.h1`
 color:black;
  font-size: 55px;
  margin: 0;
`
const Para = styled.p`
color:#23422a;
font-size: 30px;
margin: 10px 0;

`
const Location = styled.h3`
color:green;
border:1px solid green;
border-radius: 10px;
padding: 5px;

`
const DurationStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    padding: 0;
`
const Schedule = styled.h3`
  color:purple;
  font-size: 30px;
`
const Items = styled.li`
  list-style: inside;
  font-size: 22px;
  color: #5e5959;
  line-height: 30px
`
const LikeButton = styled.button`
background-color: transparent;
border:none;
cursor: pointer;
display: flex;
align-items: center;
margin-top: 20px;
`
const Count = styled.p`
font-weight: bold;
background-color: gray;
color:black;
font-size:20px;
border-radius: 20px;
padding: 5px 10px;

`


export default CoursePage