import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const BearList = (props) => (
    <List title="All bears" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);
