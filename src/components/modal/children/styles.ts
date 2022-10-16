import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '8px',
        width: '100%',
        padding: '10px',
    },
    modalTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'gray'
    },
    modalMassage: {
        color: 'darkgray'
    },
    btn: {
        fontWeight: 'bold',
        fontSize: '24px',
    }
});

export default useStyles;
