import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import routeConfigs from '.';
export default function Routes(props) {
  const renderRoutes = (data) => {
    return (
      data.map((route, index) => {
        const { path, exact, Component } = route;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
          >
            <Component></Component>
          </Route>
        );
      })
    );
  };
  return (
    <Switch>
      {renderRoutes(props.routes)}
    </Switch>
  );
}
Routes.propTypes = {
  routes: PropTypes.array,
};