import React from 'react'

const Header = (props) => {
return (<h1>{props.course.name}</h1>);
};

const Content = (props) => {
  return  (
    <>
  <Part part ={props.partname1} exercise={props.exercises1} />
  <Part part ={props.partname2} exercise={props.exercises2} />
  <Part part ={props.partname3} exercise={props.exercise3s} />
  </>
);
};

const Total = (props) => {
  return( <p>Total number of Exercises = {props.exercises1 + props.exercises2 + props.exercises3}</p>
);
}; 

const Part = (props) => {
  return( <p>{props.partname} {props.exercises}</p>
 
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }
  ]

  return (
    <div>
      <Header course= {course} />
      <Content part = {part} />
      <Total part = {part} />
    </div>
  );
};

export default App