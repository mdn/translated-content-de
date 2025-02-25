---
title: Synthetisches Monitoring
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

**Synthetisches Monitoring** beinhaltet die Überwachung der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungswerkzeugen in einer möglichst konsistenten Umgebung.

Mit einem konsistenten Ausgangspunkt ist synthetisches Monitoring gut geeignet, um die Auswirkungen von Codeänderungen auf die Leistung zu messen. Es spiegelt jedoch nicht unbedingt wider, was die Benutzer erleben.

Synthetisches Monitoring umfasst das Bereitstellen von Skripten, um den Pfad zu simulieren, den ein Endbenutzer durch eine Webanwendung nehmen könnte, und berichtet über die Leistung, die der Simulator erlebt. Beispiele für beliebte synthetische Monitoring-Tools sind [WebPageTest](https://www.webpagetest.org/) und [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern ist vielmehr synthetisch generierter Datenverkehr, der Daten zur Seitenleistung sammelt.

Im Gegensatz zu {{Glossary("Real_User_Monitoring", "RUM")}} bietet synthetisches Monitoring einen engen Blickwinkel auf die Leistung, der keine Benutzerunterschiede berücksichtigt, was es nützlich macht, um grundlegende Daten über die Leistung einer Anwendung zu erhalten und eine Stichprobenprüfung der Leistung in Entwicklungsumgebungen durchzuführen. In Kombination mit anderen Tools, wie zum Beispiel Netzwerklimitierung, kann es hervorragende Einblicke in potenzielle Problembereiche geben.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring")}} (RUM)
  - {{Glossary("Beacon", "Beacon")}}
- [Real User Monitoring (RUM) versus Synthetic Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
