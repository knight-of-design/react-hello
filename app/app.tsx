import * as React from 'react'
import { render } from 'react-dom'
import { LandingPage } from './components/landing-page'

function main(): void {
    render(<LandingPage message="Hello World!" />, document.body)
}

main()
