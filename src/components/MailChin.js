import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewLetter from './NewLetter';

const MailChin = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
            {/* <MailchimpSubscribe
                url={postUrl}
                render={({subscribe, status, message} ) => (
                    <NewLetter 
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    />
                )}
            /> */}
        </>
    );
}

export default MailChin;
