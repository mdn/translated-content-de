---
title: Synthetisches Monitoring
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Synthetisches Monitoring** beinhaltet die Überwachung der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungswerkzeugen in einer so konsistenten Umgebung wie möglich.

Mit einer konsistenten Basislinie eignet sich synthetisches Monitoring gut, um die Auswirkungen von Codeänderungen auf die Leistung zu messen. Es spiegelt jedoch nicht unbedingt wider, was die Benutzer erleben.

Synthetisches Monitoring beinhaltet das Bereitstellen von Skripten, um den Pfad zu simulieren, den ein Endbenutzer durch eine Webanwendung nehmen könnte, und die Leistungserfahrungen des Simulators zurückzumelden. Beispiele für beliebte synthetische Monitoring-Tools sind [WebPageTest](https://www.webpagetest.org/) und [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern ist synthetisch erzeugter Datenverkehr, der Leistungsdaten der Seite sammelt.

Im Gegensatz zum {{Glossary("Real_User_Monitoring", "RUM")}} bietet synthetisches Monitoring einen eingeschränkten Blick auf die Leistung, der Benutzerdifferenzen nicht berücksichtigt, was es nützlich macht, um grundlegende Daten über die Leistung einer Anwendung zu erhalten und Leistung in Entwicklungsumgebungen punktuell zu überprüfen. In Kombination mit anderen Werkzeugen, wie zum Beispiel Netzwerkdrosselung, kann es hervorragende Einblicke in potenzielle Problemzonen bieten.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring")}} (RUM)
  - {{Glossary("Beacon", "Beacon")}}
- [Real User Monitoring (RUM) versus Synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
