import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientOnly from "../components/clientonly"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`starter`, `information`]} />
      <main>
        <section style={{ padding: "5%", textAlign: "center" }}>
          <h1>itsmeowdev Starter</h1>
          <p>Yeah, we started a site! Go you! Get workin!</p>
          <hr />
          <h2>Client Only Example</h2>
          <ClientOnly>
            <p>{window.location.href}</p>
          </ClientOnly>
          <hr />
          <Link to="/exchange">Exchange Rates Page</Link>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
