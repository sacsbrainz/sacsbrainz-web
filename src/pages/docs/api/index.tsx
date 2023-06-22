import DocsLayout from "@/layouts/DocsLayout";
import Layout from "@/layouts/Layout";
import React from "react";

function Index() {
  return (
    <Layout>
      <DocsLayout defaultCode={""}>
        <p>Api</p>
      </DocsLayout>
    </Layout>
  );
}

export default Index;
