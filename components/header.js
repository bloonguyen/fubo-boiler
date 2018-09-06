import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    searchInput: {
        fullWidth: true,
    }
});

class MenuAppBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                    Fubo.vn
                    </Typography>
                    <Input type="search" placeholder="Tìm kiếm..."/>

                    <Tooltip title="Dành cho chủ sân">
                        <Button color="inherit">
                            đăng thông tin
                            <CloudUploadIcon className={classes.rightIcon}/>
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(MenuAppBar);
