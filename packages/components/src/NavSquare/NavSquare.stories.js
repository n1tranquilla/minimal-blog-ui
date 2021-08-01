import React from 'react';
import { storiesOf } from '@storybook/react';

import NavSquare from '.';

storiesOf('NavSquare', module).add('Default', () => (
    <NavSquare mode="primary">
        Home
    </NavSquare>
));
