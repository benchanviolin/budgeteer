import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { PostList, PostEdit, PostCreate } from './views/posts';
import Dashboard from './views/dashboard';
import AuthClient from './clients/authClient';
import RestClient from './clients/restClient';
import { UserList } from './views/users';
import { BearList, BearEdit, BearCreate } from './views/bears';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import LoginPage from './views/login';
import LogoutButton from './components/logInOut/logoutButton';

const App = () => (
    <Admin dashboard={Dashboard} authClient={AuthClient} restClient={RestClient} loginPage={LoginPage} logoutButton={LogoutButton}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="bears" list={BearList} edit={BearEdit} create={BearCreate} remove={Delete} />
    </Admin>
);

export default App;
