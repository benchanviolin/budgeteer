import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import { PostList, PostEdit, PostCreate } from './views/posts';
import Dashboard from './views/dashboard';
import AuthClient from './auth/authClient';
import { UserList } from './views/users';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin dashboard={Dashboard} authClient={AuthClient} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
