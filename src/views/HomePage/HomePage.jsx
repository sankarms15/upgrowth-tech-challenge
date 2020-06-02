import './HomePage.scss';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  debounce,
  InputBase,
} from '@material-ui/core';
import {
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { getUnSplashActions } from '../../store/actions/unSplash.actions';
import { ImageGridList } from '../ImageGridList/ImageGridList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    border: '1px solid #eee'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100vh',
    },
  }
}));

function HomePage() {
  const classes = useStyles();
  const unSplashData = useSelector(state => state.unSplashData.data);
  const excuteQuery = debounce((query) => dispatch(getUnSplashActions.getUnSplash(query), 500));
  const dispatch = useDispatch();

  const handleOnInputChange = ( event ) => {
    const query = event.target.value;    
		if (query) {
      excuteQuery(query);
		} 
  };
  return (
    <section className="container">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
        placeholder="Search…"
        onChange={handleOnInputChange}
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <ImageGridList data={unSplashData} />
    </section>
  );
}
export { HomePage };