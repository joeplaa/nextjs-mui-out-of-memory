export const styles = (theme) => ({
    root: {
        flexGrow: 1
    },
    mb1: {
        marginBottom: theme.spacing(1)
    },
    ml1: {
        marginLeft: theme.spacing(1)
    },
    mr1: {
        marginRight: theme.spacing(1)
    },
    mt1: {
        marginTop: theme.spacing(1)
    },
    paper: {
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0,
            padding: theme.spacing(0.5)
        },
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },
    textRightHideMobile: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        textAlign: 'right'
    },
});
