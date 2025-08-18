import { Trans, useTranslation } from 'react-i18next';
import { CatalogController, CatalogServiceProvider } from '@console/shared/src/components/catalog';
import { useActiveNamespace } from '@console/shared/src/hooks/useActiveNamespace';
import { useExtensionCatalogCategories } from '../hooks/useCatalogCategories';

const Catalog = () => {
  const { t } = useTranslation('olm-v1');
  const [namespace] = useActiveNamespace();
  const [categories, loading, error] = useExtensionCatalogCategories();

  return (
    <CatalogServiceProvider
      catalogType="OLMv1CatalogItem"
      namespace={namespace}
      catalogId="olm-v1-catalog"
    >
      {(service) => (
        <CatalogController
          {...service}
          enableDetailsPanel
          categories={categories}
          title={t('OLM v1 Operators')}
          type="OLMv1CatalogItem"
          loaded={!loading}
          loadError={error}
          description={
            <Trans ns="olm-v1">
              Discover Operators from the Kubernetes community and Red Hat partners, curated by Red
              Hat. You can install Operators on your clusters to provide optional add-ons and shared
              services to your developers.
            </Trans>
          }
        />
      )}
    </CatalogServiceProvider>
  );
};

export default Catalog;
