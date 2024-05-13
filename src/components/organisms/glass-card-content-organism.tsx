import { GlassCard } from "../molecules/glass-card";
import { SectionContentMolecule } from "../molecules/section-content-molecule";
import { t } from "i18next";

export function GlassCardContentOrganism() {
  return (
    <section className="grid grid-cols-1 gap-10 text-center">
      <GlassCard>
        <SectionContentMolecule
          title={t("features.continuousIntegration.title")}
          description={t("features.continuousIntegration.description")}
        />
      </GlassCard>
      <GlassCard>
        <SectionContentMolecule
          title={t("features.handsOffDeployment.title")}
          description={t("features.handsOffDeployment.description")}
        />
      </GlassCard>
      <GlassCard>
        <SectionContentMolecule
          title={t("features.trustAndControl.title")}
          description={t("features.trustAndControl.description")}
        />
      </GlassCard>
      <GlassCard>
        <SectionContentMolecule
          title={t("features.unifiedCosts.title")}
          description={t("features.unifiedCosts.description")}
        />
      </GlassCard>
    </section>
  );
}
