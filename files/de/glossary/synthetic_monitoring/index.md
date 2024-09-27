---
title: Synthetic monitoring
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GlossarySidebar}}

**Synthetic Monitoring** beinhaltet das Überwachen der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungswerkzeugen in einer möglichst konsistenten Umgebung.

Mit einer konsistenten Basislinie eignet sich Synthetic Monitoring gut, um die Auswirkungen von Codeänderungen auf die Leistung zu messen. Es spiegelt jedoch nicht unbedingt wider, was die Benutzer erleben.

Synthetic Monitoring beinhaltet das Bereitstellen von Skripten, um den Weg zu simulieren, den ein Endbenutzer durch eine Webanwendung nehmen könnte, und die Leistungserfahrungen des Simulators zurückzumelden. Beispiele für beliebte Tools zur synthetischen Überwachung sind [WebPageTest](https://www.webpagetest.org/) und [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern ist synthetisch generierter Traffic, der Daten über die Seitenleistung sammelt.

Im Gegensatz zu [RUM](/de/docs/Glossary/Real_User_Monitoring) bietet Synthetic Monitoring einen eingeschränkten Blick auf die Leistung, der Benutzerunterschiede nicht berücksichtigt. Es ist nützlich, um grundlegende Daten über die Leistung einer Anwendung zu erhalten und die Leistung in Entwicklungsumgebungen stichprobenartig zu überprüfen. Kombiniert mit anderen Tools, wie z. B. der Netzwerkdrosselung, kann es hervorragende Einblicke in potenzielle Problemfelder bieten.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Real User Monitoring](/de/docs/Glossary/Real_User_Monitoring) (RUM)
  - [Beacon](/de/docs/Glossary/Beacon)
- [Real User Monitoring (RUM) versus Synthetic Monitoring](/de/docs/Web/Performance/Rum-vs-Synthetic)
