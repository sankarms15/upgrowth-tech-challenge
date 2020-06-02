import React, {
  useEffect,
  useState,
} from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
  },
}));

function ImageGridList(props) {
    const classes = useStyles();
    const [results, setResults] = useState(null);
    useEffect(() => {
        if(props.data) {
          console.log('props data :: ', props.data)
          setResults(props.data.results);
        }
    }, [props.data]);
    return (
      results && <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                { results.map((result) => (
                    <GridListTile key={result.id}>
                        <img src={result.urls.small} alt={results.alt_description} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export { ImageGridList };