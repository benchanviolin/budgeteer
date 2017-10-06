import React from 'react';
import { Edit, List, Responsive, SimpleList, Datagrid, Filter, TextField, EditButton, TextInput, SimpleForm, DisabledInput } from 'admin-on-rest';

export const BearList = (props) => (
  <List {...props} filters={<BearFilter />}>
    <Responsive
      small={
          <SimpleList
              primaryText={record => record.name}
              secondaryText={record => record.id}
              tertiaryText={record => `yo`}
          />
      }
      medium={
          <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <EditButton />
          </Datagrid>
      }
    />
  </List>
);

const BearFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const BearTitle = ({ record }) => {
    return <span>Bear {record ? `"${record.name}"` : ''}</span>;
};

export const BearEdit = (props) => (
    <Edit title={<BearTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);
