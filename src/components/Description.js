import React, { Component } from 'react';
export default class ProfessionalBackground extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Description */}
                <section id="description" className="wrapper style1 special">
                    <div className="inner">
                        <header className="major">
                            <h2>Who am I?</h2>
                            <p>I am a positive, driven, and solution-oriented individual.</p>
                            <p>I've been fascinated by engineering right from the start and hence pursued a Bachelor's degree in Computer Engineering from Xavier Institue of Engineering, after which I worked as a Software Engineer in Mumbai, India.</p>
                            <p>To expand my outlook into the business domain, I then pursued a Master's degree in Information Systems Management with a specialization in Data Analytics at WP Carey - Arizona State University.</p>
                            <p>Beyond engineering, I am immensely passionate about automobiles / motorsports and have raced in national Karting and Formula 4 Championships.</p>
                        </header>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}