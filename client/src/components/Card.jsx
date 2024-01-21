import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({ _id, name, instructor, description, location, enrollmentStatus, duration, thumbnailUrl }) => {
    // const {name} = course.course
    return (
        <Link to={`/course/${_id}`} style={{ textDecoration: "none" }}>
            <CardCon>
                <Image src={thumbnailUrl} alt={name} />
                <Content>
                    <Head>{name}</Head>
                    <DurationStatus>
                        <Instructor>By {instructor}</Instructor>
                        <Location>{location}</Location>
                    </DurationStatus>
                    <Para>{description}</Para>
                    <DurationStatus>
                        <Duration>Duration : {duration}</Duration>
                        <Status>Enrollment Status : {enrollmentStatus}</Status>
                    </DurationStatus>

                </Content>
            </CardCon></Link>

    )
}

const CardCon = styled.div`
    display:flex;
    flex-direction: column;
    max-width:450px;
    max-height: 500px;
    margin:0px 20px; 
`
const Location = styled.h3`
color:green;
border:1px solid green;
border-radius: 10px;
padding: 5px;
margin: 0;

`
const DurationStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0;
`

const Head = styled.h2`
color:black;
margin-bottom:0;
`
const Image = styled.img`
max-width: 450px;
max-height:250px;
`
const Content = styled.div`
    display: inline;
    flex-direction: column;
`
const Instructor = styled.h3`
    color:gray;
    display: inline;
`


const Status = styled.h3`
    color:red;
    display: flex;
`
const Duration = styled.h3`
    color:blue;
    display: flex;
  
`
const Para = styled.p`
font-size:22px;
color:black;
margin: 0;
`
export default Card