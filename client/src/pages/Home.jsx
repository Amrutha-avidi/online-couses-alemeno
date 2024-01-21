import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const Home = () => {
    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState('')
    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get('/courses/random')
            setCourses(res.data)
        }
        fetchCourses()
    }, [])

    return (
        <div>
            {currentUser
            ? <Welcome>HELLO, {currentUser.name.toUpperCase()}</Welcome> :(
                <Welcome>HELLO</Welcome>
            )}
            <Banner>
                <BannerContent>
                    <h1>Skills that drive you forward</h1>
                    <Para>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</Para>
                    <Subhead>Explore our Courses Now</Subhead>
                </BannerContent>
            </Banner>
            <SearchCon>
                <Head>Trending Courses</Head>
                <Search type='search'
                    placeholder='Search for anything'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </SearchCon>
            <CourseCon>{courses.filter((each) => {
                return search.toLowerCase === ''
                    ? each
                    : each.name.toLowerCase().includes(search);


            }).map(each => (
                <Card key={each._id} {...each} />

            ))}</CourseCon>
        </div>

    )
}

const SearchCon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:20px;
    margin:50px 150px;
`
const Head = styled.h1`
   font-size:40px

`
const Welcome = styled.h2`
font-size:40px;
margin:20px
`
const Search = styled.input`
    border: 2px solid;
    border-radius: 20px;
    font-size: 20px;
    text-align:center;
    width:500px;
    height:50px
`

const Banner = styled.div`
/* margin-top: 70px; */
    height:45vh;
    width:98vw;
    
    background-image: url('https://img-c.udemycdn.com/notices/home_carousel_slide/image/12c0830f-aa27-4843-993d-b440aa389991.jpeg');
`

const BannerContent = styled.div`
    margin-top:150px;
     position: absolute;
     top:100px;
     left:50px;
     padding:20px;
     width:500px;
    background-color: white !important;
    color: black;

`
const Para = styled.p`
    font-size:20px
`

const Subhead = styled.h2`
    color:green
`

const CourseCon = styled.div`
display: flex;
flex-wrap: wrap;
margin:20px 50px;
justify-content: center;

    /* display:grid;
    grid-template-columns: 2fr 2fr; */
`


export default Home