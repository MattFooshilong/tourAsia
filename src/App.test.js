import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

//UNIT testing
test('test main page', () => {
    const { getByText, getAllByText } = render(<App />);
    getByText("Travel Asia");
    getByText("Home to the uniquely pink Sakura trees, the famous Mt Fuji and many more attractions, it is one of the must go places in Asia. Book your all-inclusive, all-planned, fuss free trip today. your all-inclusive, all-planned, fuss free trip today.");
    getByText("Directions: Exit Chinatown MRT via exit A");
})

test('test the bookNow btn in the navbar', () => {
    const { getByText, getAllByText } = render(<App />);
    const buttons = getAllByText("Book Now");
    userEvent.click(buttons[0]);

    //book now page
    getByText("Travel Asia");
    getByText("Billing Details");
    getByText("Hi");

});

//in progress
// test('user input name and displays on the right immediately', () => {
//     const { getByText, getByLabelText } = render(<App />);
//     const emailLabel = getByLabelText("Email");
//     fireEvent.change(emailLabel, { target: { value: "Matt Foo" } });
//     getByText("Matt Foo");

// })

//test fri 29