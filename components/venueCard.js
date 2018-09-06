import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class VenueCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              C
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Sân bóng đá mini Chuyên Việt Đà Nẵng"
          subheader="September 14, 2018"
        />
        <CardMedia
          className={classes.media}
          image="/static/img/chuyenviet.jpg"
          title="San Chuyen Viet"
        />
        <CardContent>
          <Typography component="p">
            Sân bóng đá mini Chuyên Việt Đà Nẵng nằm trong trung tâm thể dục thể thao Quốc Phòng 3, Tiểu La, Quận Hải Châu, Thành phố Đà Nẵng. Số lượng sân nhiều chất lượng mặt sân và đèn chiếu sáng khá tốt. Nhân viên phục vụ khá nhiệt tình.
            Là một địa điểm được nhiều anh em chơi bóng tại Đà Nẵng lựa chọn để tổ chức các giải đấu phong trào.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>

            <Typography paragraph variant="body2">
              Địa chỉ:
            </Typography>
            <Typography paragraph>
              98 Tiểu La, Hải Châu, Đà Nẵng
            </Typography>
            <Typography paragraph>
            + Liên hệ đặt sân: 0511. 363 8555.
            + Giá thuê sân từ 150k – 250k/h (tùy theo thời gian bạn đặt sân) đặt tháng rẻ hơn.
            + Thời gian mỡ cửa từ 6h00 – 23h00 tất cả các ngày trong tuần.
            + Có cho thuê giày và áo tập.
            + Có dịch vụ nước uống giải khác.
            + Khu vệ sinh và thay đồ khá sạch sẽ.
            + Bãi gửi xe an toàn.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

VenueCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VenueCard);
