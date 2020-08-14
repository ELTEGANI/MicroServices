import React from 'react';


export default ({comments}) =>{
    const renderedComments = comments.map(comment =>{
        let content;
        switch(comment.status){
            case 'approved':
                content = comment.content;
            break;
        
            case 'pending':
                content = 'This Comment is awaiting Moderation';
            break;
    
            case 'rejected':
                content = 'This Comment has been Rejected';
            break;
        }
    return <li key={comment.id}>{content}</li>
    });

    return <ul>
        {renderedComments}
    </ul>
};