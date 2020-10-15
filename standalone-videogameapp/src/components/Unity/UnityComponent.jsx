import React from 'react';
import './UnityComponent.css'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

// Component used to render an iframe using React bootstrap.
class UnityComponent extends React.Component {
    render = () => {
        return (
            <ResponsiveEmbed aspectRatio='16by9' frameBorder='false'>
                <iframe
                    src='https://itch.io/embed-upload/2717928?color=32b8ec'
                    frameBorder='0'
                    height='600px'
                />
            </ResponsiveEmbed>
        )
    }
}
export default UnityComponent;