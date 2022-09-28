import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
     <h1>Day-2</h1>
     <h2>1.What is the Difference between react and react native? Which one is library or framework?</h2>
     <h3>React :-</h3>
     <ul>
      <li>React and React Native are developed by Facebook and have gained a huge fan base in a short time. React is known as ReactJs, which is a JavaScript library to build single-page web applications.</li>
      <li>React is a JavaScript library of reusable components designed to create skeletons of the apps.</li>
      <li>React is an open-source JS library for building the UIs for web applications</li>
      <li>React, originally developed by and still maintained by Facebook and supported by an active open source community, is in fact a JS 'library'. </li>
     </ul>
     <h3>React Native :-</h3>
     <ul>
      <li> React Native is a React JS-based framework to design mobile apps. Moreover, with reusable components, you can develop native mobile applications.</li>
      <li> React Native is designed to build native mobile apps with reusable components.</li>
      <li>React Native is used to build rich mobile UI from declarative components using only JavaScript.</li>
      <li>React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. </li>
     </ul>
     <h2>2.What is the package name you are using for routing?</h2>
     <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.In this Browser Router as Router, Routes and Route and NavLink get imported from react-router-dom. React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.</p>
     <h2>3.Routing Implementation?</h2>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
       
      </Routes>
     </BrowserRouter>
     <h2>4.How do you pass data from parent to child?</h2>
     <h3>Class Component :-</h3>
     <p>When users pass the data from parent to child using the class components, they can access inside the child component using ‘this.props.property_name‘. </p>
     <h4>Steps:-</h4>
     <ul>
      <li>Embed the child component to the parent component.</li>
      <li>Pass the data variable (props) with an assigned value to the child component as an argument while embedding it to the parent component.</li>
      <li>If a user wants to pass multiple data variables (props), all variable names should be unique.</li>
      <li>In the child component, access the data variable value using ‘this.props.variable_name’.</li>
     </ul>
     <h3>Function Component :-</h3>
     <p>To access properties from parent to child using a functional component, users don’t need to use ‘this.props‘ like class components. Users can access props value by writing variable names only.</p>
     <h4>Steps:-</h4>
     <ul>
      <li>Embed the child component to the parent component.</li>
      <li>Pass the props to the child component as an argument while embedding it to the parent component.</li>
      <li>In the child component, access the data variable value by writing the name or variable only.</li>
     </ul>
     <h2>5.What is lazy loading in react ?</h2>
     <p>In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.</p>
     <p>Benefits: The benefits of lazy loading include: Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it's requested.</p>
     <h2>6.Difference b/w Stateful and stateless Component?</h2>
     <h3>Stateful Component:-</h3>
     <p>If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor.</p>
     <h3>stateless Component:-</h3>
     <p>If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless we need to use a lifecycle hook in your components, we should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.</p>
     <h2>7.How do you switch one component to another, Conditional Rendering?</h2>
     <p>Way to Switch/Navigate from one page to another page</p>
     <ul>
      <li>Link</li>
      <li>NavLink</li>
      <li>Redirect Component</li>
      <li>history.push</li>
      <li>history.replace</li>
     </ul>
     <h3>Conditional Rendering :-</h3>
     <p>Rendering the components in react can be conditional. There are many ways to achieve this as : </p>
     <ul>
      <li>Logical && Operator      =     a>b  &&   b>c   </li>
      <li>If-else</li>
      <li>Ternary Operator     =      a>b  ?   a  :   b</li>
      <li>Switch-case</li>
     </ul>
     
    </div>
  );
}

export default App;
