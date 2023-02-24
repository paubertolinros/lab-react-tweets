import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  //QUESTION: pel destructuring, què és millor la primera opció (línia 9) o la segona (línia 10)?. 
  //Amb la primera opció li havia de passar al User (línia 20) dos props (name i handle), perquè al
  //fer destructuring perdia el user (i el codi no quedava igual que el que s'esperava
  //al lab), però per l'altre cantó, en la segona opció del destructuring no sé si 
  //utilitzar dues vegades user està bé. M'agradaria saber quina és la bona pràctica. Gràcies!!!
  //PRIMERA OPCIÓ: const { tweet: { user: { name, image, handle }, timestamp, message } } = props;
  /*SEGONA OPCIÓ*/const { tweet: { user: {image}, user, timestamp, message } } = props;
  return (
    <div className="tweet">
      <ProfileImage image={image} />
      <div className="body">
        <div className="top">
          <User userdata={user} />
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
