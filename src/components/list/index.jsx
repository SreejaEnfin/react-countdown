// import { useEffect, useState } from "react";

// const ListItems = () => {
//   const [search, setSearch] = useState("");

//   const [limit, setLimit] = useState("");
//   const [skip, setSkip] = useState("");

//   const [items, setItems] = useState([]);

//   const inputChange = (ev) => {
//     setSearch(ev.target.value);
//   };

//   const skipChange = (ev) => {
//     setSkip(ev.target.value);
//   };

//   const limitChange = (ev) => {
//     setLimit(ev.target.value);
//   };

//   const callAPi = () => {
//     let url = `https://jsonplaceholder.typicode.com/posts`;
//     if (search !== "") url += "?title=" + search;

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle the data here, e.g., log it to the console
//         console.log(data);
//         // {status: }
//         setItems([...data]);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   useEffect(() => {
//     console.log("call when skip and limit, not call when search change");
//   }, [limit, skip]);

//   useEffect(() => {
//     console.log("only excute one time");
//     callAPi();
//   }, []);

//   useEffect(() => {
//     console.log("only excute one time");
//     callAPi();
//   }, [search]);

//   // useEffect(() => {
//   //   console.log("this is called in everytime");
//   // });

//   return (
//     <div>
//       <div className="tool-bar">
//         <input type="text" placeholder="search" onChange={inputChange} />
//         <input type="text" placeholder="skip" onChange={skipChange} />
//         <input type="text" placeholder="limit" onChange={limitChange} />
//       </div>

//       <table className="table" style={{ width: "100%", padding: "10px" }}>
//         <thead>
//           <tr>
//             <th>No:</th>
//             <th>Title:</th>
//             <th>UserId:</th>
//             <th>body:</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.title}</td>
//                 <td>{item.userId}</td>
//                 <td>{item.body.slice(0, 20) + "..."}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export { ListItems };
