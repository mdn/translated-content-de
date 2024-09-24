---
title: Synthetisches Monitoring
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GlossarySidebar}}

**Synthetisches Monitoring** umfasst das Überwachen der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungswerkzeugen, in einer Umgebung, die so konsistent wie möglich ist.

Mit einer konsistenten Basislinie eignet sich das synthetische Monitoring gut, um die Auswirkungen von Codeänderungen auf die Leistung zu messen. Es spiegelt jedoch nicht unbedingt das wider, was Benutzer erleben.

Synthetisches Monitoring beinhaltet das Bereitstellen von Skripten, um den Pfad zu simulieren, den ein Endbenutzer durch eine Webanwendung nehmen könnte, und die Leistungserfahrungen des Simulators zu melden. Beispiele für beliebte synthetische Monitoring-Tools sind [WebPageTest](https://www.webpagetest.org/) und [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern von synthetisch generiertem Verkehr, der Daten zur Seitenleistung sammelt.

Im Gegensatz zu {{Glossary("Real User Monitoring", "RUM")}} bietet das synthetische Monitoring eine eingeschränkte Sicht auf die Leistung, die keine Benutzervariationen berücksichtigt. Es ist nützlich, um grundlegende Daten über die Leistung einer Anwendung zu erhalten und die Leistung in Entwicklungsumgebungen zu überprüfen. In Kombination mit anderen Tools, wie Netzwerkdrosselung, kann es hervorragende Einblicke in potenzielle Problemfelder bieten.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Real User Monitoring")}} (RUM)
  - {{Glossary("Beacon")}}
- [Real User Monitoring (RUM) versus Synthetisches Monitoring](/de/docs/Web/Performance/Rum-vs-Synthetic)
