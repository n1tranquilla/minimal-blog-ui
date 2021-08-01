import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '.';

storiesOf('Layout', module).add('Default', () => (
    <Layout links={[
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
    ]}>
        Test test Test
    </Layout>
));
