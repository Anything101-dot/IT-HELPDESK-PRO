// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// const TaskdesComponent = () => {
//     const [taskdesc, setTaskdesc] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch data from the API
//         axios.get('https://localhost:7228/api/Task')
//             .then(response => {
//                 setTaskdesc(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <Typography variant="h4" component="h1" gutterBottom> Admin View </Typography>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell style={{ fontWeight: 'bold' }}>Task ID</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Task Name</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Task Description</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>User ID</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Task Status</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Assignee</TableCell>
//                             <TableCell style={{ fontWeight: 'bold' }}>Dept</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {taskdesc.map(taskde => (
//                             <TableRow key={taskde.taskId}>
//                                 <TableCell>{taskde.taskId}</TableCell>
//                                 <TableCell>{taskde.taskName}</TableCell>
//                                 <TableCell>{taskde.taskDescription}</TableCell>
//                                 <TableCell>{taskde.userId}</TableCell>
//                                 <TableCell>{taskde.taskStatus}</TableCell>
//                                 <TableCell>{taskde.assignee}</TableCell>
//                                 <TableCell>{taskde.department}</TableCell>

//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default TaskdesComponent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const TaskdesComponent = () => {
    const [taskdesc, setTaskdesc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7228/api/Task')
            .then(response => {
                setTaskdesc(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // CSS styles as JavaScript objects
    const styles = {
        root: {
            padding: '20px',
        },
        table: {
            minWidth: 650,
        },
        tableHeaderCell: {
            fontWeight: 'bold',
            backgroundColor: '#f5f5f5',
            color: '#333',
        },
        tableCell: {
            color: '#666',
        },
        title: {
            marginBottom: '20px',
            color: '#3f51b5',
        }
    };

    return (
        <div style={styles.root}>
            <Typography variant="h4" component="h1" gutterBottom style={styles.title}> Admin View </Typography>
            <TableContainer component={Paper}>
                <Table style={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.tableHeaderCell}>Task ID</TableCell>
                            <TableCell style={styles.tableHeaderCell}>Task Name</TableCell>
                            <TableCell style={styles.tableHeaderCell}>Task Description</TableCell>
                            <TableCell style={styles.tableHeaderCell}>User ID</TableCell>
                            <TableCell style={styles.tableHeaderCell}>Task Status</TableCell>
                            <TableCell style={styles.tableHeaderCell}>Assignee</TableCell>
                            <TableCell style={styles.tableHeaderCell}>Dept</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskdesc.map(taskde => (
                            <TableRow key={taskde.taskId}>
                                <TableCell style={styles.tableCell}>{taskde.taskId}</TableCell>
                                <TableCell style={styles.tableCell}>{taskde.taskName}</TableCell>
                                <TableCell style={styles.tableCell}>{taskde.taskDescription}</TableCell>
                                <TableCell style={styles.tableCell}>{taskde.userId}</TableCell>
                                <TableCell style={styles.tableCell}>{taskde.taskStatus}</TableCell>
                                <TableCell style={styles.tableCell}>{taskde.assignee}</TableCell>
                                <TableCell style={styles.tableCell}>{taskde.department}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TaskdesComponent;

