import { useState } from "react";

export const About = () => {
 const [ click, setClick ] = useState('not clicked');   

    const handleOnclickSubmit = (e) => {
        e.preventDefault();
        console.log('I submitted');
        setClick('clicked');
    }

    console.log(click);

    return (
        <>
            <h1>About</h1>
            <form>
                <input type="text" placeholder="tell me what you want to enquire"/>
                <input type="text" placeholder="feedback"/>
                <button type="submit" onClick={handleOnclickSubmit}>Submit</button>
                <button type="submit" onClick={handleOnclickSubmit}>Submit New Button</button>
            </form>
        </>
    )
}