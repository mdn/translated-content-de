---
title: Performance-Budgets
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Ein Performance-Budget ist ein Limit, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder einen Schwellenwert über einen bestimmten Zeitraum gelten.

## Warum benötige ich ein Performance-Budget?

Ein Budget existiert, um Ihre erreichbaren Ziele zu reflektieren. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z. B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z. B. Anzahl der JS-Dateien/insgesamt Bildgröße).
- Regelbasiert (z. B. PageSpeed-Index, Lighthouse-Score).

Ihr Hauptziel ist es, Rückschritte zu verhindern, aber sie können auch Einblicke bieten, um Trends zu prognostizieren (z. B. Im September wurden 50 % des Budgets in einer Woche verbraucht).

Zusätzlich kann es Entwicklungsbedürfnisse aufdecken (z. B. Eine große Bibliothek mit kleineren Alternativen wird oft gewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Performance-Budget?

Ein Budget sollte zwei Ebenen umfassen:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu sein und technischen Schulden zu planen, ohne die Entwicklung oder Bereitstellungen zu blockieren.

Die Fehlerstufe ist ein oberes Grenzlimit, bei dem Änderungen negative und bemerkbare Auswirkungen haben werden.

Um zu beginnen, müssen Sie zuerst die Geräte und Verbindungsgeschwindigkeiten messen, von denen Ihre Benutzer kommen (z. B. Ein \~$_200_ Android-Gerät über eine 3G-Verbindung), indem Sie mehrere [Werkzeuge](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics) verwenden. Diese zeitbasierten Metriken werden in Dateigrößen-Budgets übersetzt.

Ein Standardbasiswert zur Reduzierung der Absprungrate ist, [Time to Interactive unter 5 Sekunden in 3G/4G und unter 2 Sekunden für nachfolgende Ladezeiten](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) zu erreichen. Basierend auf den spezifischen Zielen und Inhalten Ihrer Website könnten Sie jedoch andere Metriken in den Fokus rücken.

Für eine textlastige Website wie einen Blog oder eine Nachrichten-Website könnte die {{Glossary("First_contentful_paint", "First Contentful Paint")}} Metrik das Benutzerverhalten genauer widerspiegeln. (z. B. Wie schnell können Benutzer mit dem Lesen beginnen), was Dateispezifische Budgets informiert (z. B. Schriftgröße) und deren Optimierungen. (z. B. Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display), um die [wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) zu verbessern).

Der ultimative Wert eines Performance-Budgets besteht darin, die Auswirkungen der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprungs- oder Konversionsrate bestimmen wird, sondern auch, wie wahrscheinlich es ist, dass der Benutzer zurückkehren wird.

## Wie implementiere ich ein Performance-Budget?

Während der Entwicklung gibt es einige Tools, um Überprüfungen an neuen oder geänderten Assets durchzuführen:

- Ein Modul-Bundler (z. B. [webpack](https://webpack.js.org/)) hat [Leistungsmerkmale](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Assets festgelegte Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) ermöglicht es Ihnen, Dateigrößenprüfungen in Ihrer kontinuierlichen Integrationspipeline (CI) zu definieren und auszuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschritte, aber die Größe zurück in Zeitmetriken zu übertragen kann schwierig sein, da Entwicklungsumgebungen möglicherweise 3rd-Party-Skripte und Optimierungen, die üblicherweise von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden, fehlen.

Der erste Schritt besteht darin, eine Entwicklungsbasislinie für jeden Branch zu definieren, um diese zu vergleichen, und die Präzision des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser anzupassen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestwerten bestanden oder fehlschlagen.

## Wie wird ein Performance-Budget durchgesetzt?

Je früher Sie eine mögliche Ergänzung, die das Budget überschreitet, identifizieren können, desto besser können Sie den aktuellen Zustand Ihrer Website analysieren und Optimierungen oder unnötigen Code erkennen.

Jedoch sollten Sie mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele reflektieren, aber Risiken und Experimente zulassen. Zum Beispiel könnten Sie ein Feature einführen, das die gesamte Ladezeit erhöht, aber versucht, das Benutzerengagement zu steigern. (z. B. Wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Performance-Budget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während es Ihnen ermöglicht, neue Märkte zu erschließen und maßgeschneiderte Erlebnisse zu liefern.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
