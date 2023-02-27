import React from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <h1>Home Page</h1>
      <Card title="Card Home" para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci laboriosam aut laudantium sapiente voluptatum earum esse cum tempore dolorem, est voluptatibus odio quaerat debitis at exercitationem molestias aperiam nisi?" />
      <Button title="Home" />
    </div>


  )
}

export default Home
