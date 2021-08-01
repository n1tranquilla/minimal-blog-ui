import React from 'react';
import { storiesOf } from '@storybook/react';

import NavCorner from '.';

storiesOf('NavCorner', module).add('Default', () => (
    <NavCorner links={[
        { link: 'Home' },
        {},
        {},
        {},
        {},
        { link: 'Posts' },
        {},
        {},
        {},
        {},
        { link: 'About Me' },
        {},
        {},
        {},
        {},
        { link: 'Contact Us' },
    ]} />
));
