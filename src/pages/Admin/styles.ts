import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        height: '100%',
        backgroundColorL: '#343e48'
    },
    tablePanel: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '10px 0'
    },
    tableContainer: {
        width: '80%',
        padding: '10px'
    }
});

export default useStyles;
