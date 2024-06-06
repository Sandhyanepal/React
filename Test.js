import React from 'react'
import ReactDOM from 'react-dom/client'


// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h1", 
//     },
//     "Heading 1"
//   );
//   console.log(heading)
// //   React.createElement gives us object and object is converted into HTML and html is put up on the DOM


//   const heading2 = React.createElement(
//     "h2",
//     {
//       id: "title",
//       key: "h2", 
//     },
//     "Heading 2"
//   );
//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading2]
//   );
//   console.log(heading);
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   //passing a react element inside the root
//   //async defer
//   root.render(container);



// const header = React.createElement(
//   "div",
//   {className : "title"},
//   [
//     React.createElement(
//       "h1",
//       {},
//       "Heading1"
//     ),
//     React.createElement(
//       "h2",
//       {},
//       "Heading 2"
//     ),
//     React.createElement(
//       "h3",
//       {},
//       "Heading3"
//     )
//   ]
// )

// const header1 = (
//     <div>
//       <h1>Heading1</h1>
//       <h2>Heading2</h2>
//       <h3>Heading3</h3>
//     </div>
//   )

// const Header2 = () => {
//   return (
//     <div>
//       <h1 style={{color: 'red'}}>Heading1</h1>
//       <h2 style={{color: 'green'}}>Heading2</h2>
//       <h3 style={{color: 'purple'}}>Heading3</h3>
//     </div>
//   )
// }

// const Header3 = () =>{
//   return (
//     <div>
//       <Header2/>
//       <p style={{fontSize: '20px'}}>This is Component Composition.</p>
//     </div>
//   )
// }

// const Header4 = () =>{
//   return (
//     <div>
//       {header1}
//       <Header2/>
//       <Header3></Header3>
//       {/* <p style={{fontSize: '20px'}}>This is Component Composition.</p> */}
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header4 />); 



const Header = () => {
  return (
    <>
      <div className='header'>
        <h1 className='logo'>LOGO</h1>
        <div className='center'>
          <input type='text' placeholder='Search'/>
          <i className="icon fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='right'>
          <i className="icon fa-solid fa-user"></i>
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />)
