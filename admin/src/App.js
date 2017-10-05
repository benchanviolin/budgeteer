import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { PostList, PostEdit, PostCreate } from './views/posts';
import Dashboard from './views/dashboard';
import AuthClient from './clients/authClient';
import RestClient from './clients/restClient';
import { UserList } from './views/users';
import { BearList } from './views/bears';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin dashboard={Dashboard} authClient={AuthClient} restClient={RestClient}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="bears" list={BearList} />
    </Admin>
);

export default App;
