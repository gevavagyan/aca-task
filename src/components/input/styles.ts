import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '6px'
    },
    input: {
        width: '80%',
        height: '60px',
        borderRadius: '8pxa',
        border: '1px solid',
        padding: '4px 12px'
    },
    errorMassage: {
        color: 'red',
        paddingLeft: '14px'
    }
});

export default useStyles;
