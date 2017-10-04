import React from 'react';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default () => (
  <div>
    <ViewTitle title="Dashboard" />
    <Card style={{ margin: '2em' }}>
        <CardHeader title="Welcome to the administration" />
        <CardText>Lorem ipsum sic dolor amet...</CardText>
    </Card>
  </div>
);
