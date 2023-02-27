import React from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <h1>About Page</h1>
      <Card title="Card About" para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci laboriosam aut laudantium sapiente voluptatum earum esse cum tempore dolorem, est voluptatibus odio quaerat debitis at exercitationem molestias aperiam nisi?" />
      <Button title="About" />
    </div>
  )
}

export default About
