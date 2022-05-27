// import React from "react";
// import MUIDataTable from "mui-datatables";
// import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";

// class Muitable extends React.Component {
//   getMuiTheme = () =>
//     createTheme({
//       overrides: {
//         MUIDataTableBodyCell: {
//           root: {
//             backgroundColor: "black",
//           },
//         },
//         MUIDataTablePagination: {
//           root: {
//             backgroundColor: "#000",
//             color: "#fff",
//           },
//         },
//       },
//     });

   
//   render() {
    // const columns = ["Name", "Title", "Location", "Age", "Salary"];

    // const data = [
    //   ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
    //   ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    //   ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    //   ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    //   ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    //   [
    //     "Blake Duncan",
    //     "Business Management Analyst",
    //     "San Diego",
    //     65,
    //     "$94,000"
    //   ],
    //   ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
    //   ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
    //   ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
    //   ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
    //   ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
    //   ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
    //   ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
    //   ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
    //   ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
    //   [
    //     "Addison Navarro",
    //     "Business Management Analyst",
    //     "New York",
    //     50,
    //     "$295,000"
    //   ],
    //   ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
    //   ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
    //   ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
    //   ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
    //   ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
    //   ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
    //   ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
    //   ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
    //   ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
    //   ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
    //   ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
    //   ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
    //   [
    //     "Gabby Strickland",
    //     "Business Process Consultant",
    //     "Scottsdale",
    //     26,
    //     "$45,000"
    //   ],
    //   ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
    // ];

    
    // const options = {
    //   filterType: "checkbox",
    //   rowsPerPage: [5],
    //   rowsPerPageOptions: [1, 3, 5, 6],
    //   jumpToPage: true,
    //   textLabels: {
    //     pagination: {
    //       next: "Next >",
    //       previous: "< Previous",
    //       rowsPerPage: "Total items Per Page",
    //       displayRows: "OF",
    //     },
    //   },
    //   onChangePage(currentPage) {
    //     console.log({ currentPage });
    //   },
    //   onChangeRowsPerPage(numberOfRows) {
    //     console.log({ numberOfRows });
    //   },
    // };


//     return (

//       <MuiThemeProvider theme={this.getMuiTheme()}>
//       <MUIDataTable
//         title="React Table "
//         data={data}
//         columns={columns}
//         options={options}
//         responsive='stacked'
        
//       />

//       </MuiThemeProvider>
//     );
//   }
// }

// export default Muitable


import React, { useState } from "react";


// other mui-tables library
import MUIDataTable from "mui-datatables";


 export default  function MuiTable() {
  const [status, setStatus] = useState("all");

  const handleStatus = (event, newValue) => {
    setStatus(newValue);
  };

  
 
  
  
  // data 
  const columns = ["Name", "Title", "Location", "Age", "Salary","age","country"];

    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000","23","USA"],
      ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000","34","RSA"],
      ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000","56","Pakistan"],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000","44","India"],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000","20","Iran"],
      [
        "Blake Duncan",
        "Business Management Analyst",
        "San Diego",
        65,
        "$94,000"
      ],
      ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
      ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
      ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
      ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
      ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
      ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
      ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
      ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
      ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
      [
        "Addison Navarro",
        "Business Management Analyst",
        "New York",
        50,
        "$295,000"
      ],
      ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
      ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
      ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
      ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
      ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
      ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
      ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
      ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
      ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
      ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
      ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
      ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
      [
        "Gabby Strickland",
        "Business Process Consultant",
        "Scottsdale",
        26,
        "$45,000"
      ],
      ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
    ];
    const options = {
      filterType: "checkbox",
      rowsPerPage: [5],
      rowsPerPageOptions: [1, 3, 5, 6],
      jumpToPage: true,
      textLabels: {
        pagination: {
          next: "Next >",
          previous: "< Previous",
          rowsPerPage: "Total items Per Page",
          displayRows: "OF",
        },
      },
      onChangePage(currentPage) {
        console.log({ currentPage });
      },
      onChangeRowsPerPage(numberOfRows) {
        console.log({ numberOfRows });
      },
    };

  return (
    <div className="container">
    
      
            
              <MUIDataTable
                title={"Posted"}
                data={data}
                columns={columns}
                options={options}
                
             
              />
          
          
    </div>
  );
}




