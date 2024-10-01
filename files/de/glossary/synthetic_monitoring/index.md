---
title: Synthetic monitoring
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GlossarySidebar}}

**Synthetic Monitoring** beinhaltet die Überwachung der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungswerkzeugen in einer Umgebung, die so konsistent wie möglich ist.

Mit einer konsistenten Ausgangsbasis ist das Synthetic Monitoring gut geeignet, um die Auswirkungen von Codeänderungen auf die Leistung zu messen. Allerdings spiegelt es nicht unbedingt wider, was Benutzer tatsächlich erleben.

Synthetic Monitoring setzt Skripte ein, um den Pfad zu simulieren, den ein Endbenutzer möglicherweise durch eine Webanwendung nimmt, und berichtet über die Leistung der simulierten Erfahrungen. Beispiele für beliebte Synthetic-Monitoring-Tools sind [WebPageTest](https://www.webpagetest.org/) und [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern ist synthetisch generierter Datenverkehr, der Daten zur Seitenleistung sammelt.

Im Gegensatz zum {{Glossary("Real_User_Monitoring", "RUM")}} bietet Synthetic Monitoring einen eingeschränkten Überblick über die Leistung, der keine Benutzerunterschiede berücksichtigt, was es nützlich macht, um grundlegende Daten über die Leistung einer Anwendung zu erhalten und die Leistung in Entwicklungsumgebungen stichprobenartig zu überprüfen. In Kombination mit anderen Tools, wie z.B. Netzwerkdrosselung, kann es hervorragende Einblicke in potenzielle Problemfelder bieten.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring")}} (RUM)
  - {{Glossary("Beacon", "Beacon")}}
- [Real User Monitoring (RUM) versus Synthetic Monitoring](/de/docs/Web/Performance/Rum-vs-Synthetic)
