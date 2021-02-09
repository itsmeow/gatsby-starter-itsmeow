import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useExchangeRate from "../hooks/useExchangeRate"

const IndexPage = () => {
  const { loading, rates } = useExchangeRate()

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`starter`, `information`]} />
      <main>
        <section style={{ padding: "5%", textAlign: "left" }}>
          <h1>Exhange Rate Data</h1>
          <hr />
          {loading ? (
            <p>Currently loading rates...</p>
          ) : (
            <code style={{ whiteSpace: "pre-wrap" }}>
              {JSON.stringify(rates, null, 2)}
            </code>
          )}
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
