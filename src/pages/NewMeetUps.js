import { useHistory } from 'react-router-dom'; // Hooks created from react=router-dom to trigger navigation programmatically to tell the user it worked
import NewMeetupForm from '../components/meetups/NewMeetupForm';
const AllMeetUps = () => {
    const history = useHistory();
    const addMeetupHandler = (meetupData) => {
        fetch(
            'https://reactjs-project-b4ee7-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/'); // you can use async await as well
        })
    }

    return <section>
        <h1>Add New Meetup </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    
};

export default AllMeetUps;