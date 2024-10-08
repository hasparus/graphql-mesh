/* eslint sort-keys: error */
import { useRouter } from 'next/router';
import { defineConfig, Giscus, PRODUCTS, useTheme } from '@theguild/components';

const HiveLogo = PRODUCTS.HIVE.logo;

export default defineConfig({
  docsRepositoryBase: 'https://github.com/ardatan/graphql-mesh/tree/master/website',
  main: function Main({ children }) {
    const { resolvedTheme } = useTheme();
    const { route } = useRouter();

    const comments = route !== '/' && (
      <Giscus
        // ensure giscus is reloaded when client side route is changed
        key={route}
        repo="ardatan/graphql-mesh"
        repoId="MDEwOlJlcG9zaXRvcnkyMzM1OTc1MTc="
        category="Docs Discussions"
        categoryId="DIC_kwDODexqTc4CSDDQ"
        mapping="pathname"
        theme={resolvedTheme}
      />
    );

    return (
      <>
        {children}
        {comments}
      </>
    );
  },
  description: 'GraphQL Gateway Framework and anything-to-GraphQL',
  websiteName: 'GraphQL Mesh',
  logo: <HiveLogo className="text-green-1000" />,
});
