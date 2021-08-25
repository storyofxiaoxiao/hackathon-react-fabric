import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import Layout from "../../../components/layout";
import Loading from '../../../components/loading';
import routeConfigs from "../../../route";
import Routes from "../../../route/routes";

export default function App() {
  return (
    <HashRouter forceRefresh={true} basename="/">
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes routes={routeConfigs} />
        </Suspense>
      </Layout>
    </HashRouter>
  );
}