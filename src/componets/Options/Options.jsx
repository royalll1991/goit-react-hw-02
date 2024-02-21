const Options = ({feedback, setFeedback}) => {
    const hendleFeedback = (option) =>{
        setFeedback({
            ...feedback,
            [option]: feedback[option] + 1
        });
    }
    return(
<>
<button onClick={() => hendleFeedback('good')}>Good</button>
<button onClick={() => hendleFeedback('neutral')}>Neutral</button>
<button onClick={() => hendleFeedback('bad')}>Bad</button>
</>
    )
};

export default Options;