import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
function NewMeetupForm() {
    function submitHandeler(event) {
        event.preventDefault();

    }
    return (
        <Card>

            <form className={classes.form} onSubmit={submitHandeler}>
                <div className={classes.control}>
                    <label htmlFor='title'>
                        Meetup Title
                    </label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='Image'>
                        Meetup Image (url)
                    </label>
                    <input type="url" required id="Image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='Address'>
                        Meetup Address
                    </label>
                    <input type="text" required id="Address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>
                        Meetup Description
                    </label>
                    <textarea id="description" required rows="5"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>)
}
export default NewMeetupForm;