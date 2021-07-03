import React from 'react'

const Header = (props) => {
return (<h1>{props.course.name}</h1>);
};

const Content = (props) => {
  return  (
    <>
  <Part part ={props.part[0] }/>
  <Part part ={props.part[1]} />
  <Part part ={props.part[2]} />
  </>
);
};

const Total = (props) => {
  return( <p>Total number of Exercises = {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
);
}; 

const Part = (props) => {
  return( <p>{props.part.name} {props.part.exercises}</p>
 
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
   part = [
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
  }
  return (
    <div>
      <Header course= {course} />
      <Content part = {part} />
      <Total part = {part} />
    </div>
  );
};

export default App