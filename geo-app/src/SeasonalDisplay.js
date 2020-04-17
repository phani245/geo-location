import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Blur its Chilly',
        iconName: 'snowflake'
    },
    winter: {
        text: 'Lets hit the bleach',
        iconName: 'sun'
    }
};
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }else {
        return lat > 0 ? 'winter': 'summer';
    }
}
const SeasonalDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    
    return(
    <div>
        <i className ={`${iconName} icon`} />
            <h1>{text}</h1>
        <i className ={`${iconName} icon`} />
    </div>
    );
}

export default SeasonalDisplay;