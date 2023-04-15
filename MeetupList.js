import MeetupItem from './MeeteupItem';
import classes from './MeetupList.module.css';
function MeetupList(props) {
    return <ul className={classes.list}>
        {props.Meetups.map(meetup => <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image}
            title={meetup.title} address={meetup.address} discrption={meetup.discrption} />)}
    </ul>
};
export default MeetupList;