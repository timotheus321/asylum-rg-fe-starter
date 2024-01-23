import React from 'react';
import TableInnerSquare from './TableInnerSquare';
import SubTable from './SubTable';

function TableRow(props) {
  const { columns, row, tableWidth, rowHeight } = props;
  // row should be an object with keys for each column here;
  // columns should be an array
  return (
    <div
      className="table-row"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: tableWidth,
        overflow: 'hidden',
      }}
    >
      {columns.map((property, idx) => {
        if (row) {
          if (typeof row[property] === 'object') {
            return (
              <SubTable
                dataObject={row[property]}
                rowHeight={rowHeight} // so for the SubTablesTable the row should be an object of objects
                key={idx}
              />
            );
          } else {
            return (
              <div key={idx} style={{ overflow: 'hidden', flex: '1' }}>
                <TableInnerSquare
                  innerData={row[property]}
                  rowHeight={rowHeight}
                />
              </div>
            );
          }
        } else {
          return <></>;
        }
      })}
    </div>
  );
}

export default TableRow;
// import React from 'react';
// import TableInnerSquare from './TableInnerSquare';
// import SubTable from './SubTable';

// function TableRow(props) {
//   const { columns, row, tableWidth, rowHeight } = props;

//   if (!row) {
//     return null; // or some fallback UI
//   }

//   return (
//     <div
//       className="table-row"
//       style={{
//         display: 'flex',
//         justifyContent: 'space-evenly',
//         width: tableWidth,
//         overflow: 'hidden',
//       }}
//     >
//       {columns.map((property, idx) => {
//         const key = `${property}-${idx}`; // Improved key
//         const cellData = row[property];

//         if (typeof cellData === 'object') {
//           return (
//             <SubTable
//               dataObject={cellData}
//               rowHeight={rowHeight}
//               key={key}
//             />
//           );
//         } else {
//           return (
//             <div key={key} style={{ overflow: 'hidden', flex: '1' }}>
//               <TableInnerSquare
//                 innerData={cellData}
//                 rowHeight={rowHeight}
//               />
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// }

// export default TableRow;
