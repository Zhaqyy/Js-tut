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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course= {course} />
      <Content
        part1={partname1} exercises1={exercises1} 
        />
      <Content
        part2={partname2} exercises2={exercises2}
      />
      <Content
        part3={partname3} exercises3={exercises3}
      />
      <Total> total exercises = {exercises1 + exercises2 + exercises3} </Total>
    </div>
  );
};

export default App