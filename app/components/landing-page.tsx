import * as React from 'react';

interface LandingPageProps {
    message: string
}
export class LandingPage extends React.Component<LandingPageProps> {

    render() {
        return <main>{this.props.message}</main>
    }
}
