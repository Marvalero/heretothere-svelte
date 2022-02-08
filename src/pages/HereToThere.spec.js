/**
 * @jest-environment jsdom
 */
import HereToThere from './HereToThere.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

it('has header', () => {
    render(HereToThere);
    const header = screen.getByRole('heading', { name: 'Here To There' });
    expect(header).toBeInTheDocument();
})