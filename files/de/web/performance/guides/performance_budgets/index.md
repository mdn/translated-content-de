---
title: Leistungsbudgets
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Ein Leistungsbudget ist eine Grenze, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, ein bestimmtes Maß (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), ein benutzerdefiniertes Maß (z.B. Time to Hero Element) oder ein Schwellenwert über einen bestimmten Zeitraum gelten.

## Warum brauche ich ein Leistungsbudget?

Ein Budget existiert, um Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen Benutzererlebnis und anderen Leistungsindikatoren (z.B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z.B. Anzahl der JS-Dateien/gesamt Bildgröße).
- Regelbasiert (z.B. PageSpeed-Index, Lighthouse-Score).

Ihr Hauptziel ist es, Rückschritte zu verhindern, aber sie können auch Einblicke geben, um Trends vorherzusagen (z.B. im September wurden 50% des Budgets in einer Woche ausgegeben).

Zusätzlich kann es Entwicklungsbedarfe aufdecken (z.B. Eine große Bibliothek mit kleineren Alternativen wird oft gewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Leistungsbudget?

Ein Budget sollte zwei Ebenen umfassen:

- Warnung.
- Fehler.

Die Warnebene ermöglicht es Ihnen, proaktiv zu sein und technische Schulden zu planen, ohne die Entwicklung oder das Deployment zu blockieren.

Die Fehlerstufe ist eine obere Grenze, bei der Änderungen einen negativen und spürbaren Effekt haben.

Der erste Schritt besteht darin, die Geräte und Verbindungsgeschwindigkeiten zu messen, von denen Ihre Nutzer kommen (z.B. Ein \~$_200_ Android-Gerät über eine 3G-Verbindung), unter Verwendung mehrerer [Tools](/de/docs/Learn_web_development/Extensions/Performance/Best_practices). Diese zeitbasierten Metriken werden in Dateigrößen-Budgets übersetzt.

Ein Standard-Baseline zur Reduzierung der Absprungrate ist die Erreichung von [Time to Interactive unter 5 Sekunden bei 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/). Abhängig von den spezifischen Zielen und dem Inhalt Ihrer Seite können Sie sich jedoch auf andere Metriken konzentrieren.

Für eine textlastige Seite wie ein Blog oder eine Nachrichtenseite könnte die {{Glossary("First_contentful_paint", "First Contentful Paint")}}-Metrik das Benutzerverhalten genauer widerspiegeln. (z.B., Wie schnell können die Benutzer mit dem Lesen beginnen), was dateispezifische Budgets informiert (z.B. Schriftgröße) und deren Optimierungen. (z.B. Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display), um die [Perceived Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) zu verbessern).

Der ultimative Wert eines Leistungsbudgets besteht darin, die Auswirkungen der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [User Experience](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprung- oder Konversionsrate bestimmt, sondern auch wie wahrscheinlich es ist, dass Nutzer zurückkehren.

## Wie implementiere ich ein Leistungsbudget?

Während der Entwicklung gibt es einige Tools, um Überprüfungen für neue oder geänderte Assets durchzuführen:

- Ein Modulpaketierer (z.B. [webpack](https://webpack.js.org/)), hat [Leistungsmerkmale](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Assets festgelegte Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize), ermöglicht es, Dateigrößenprüfungen in Ihrer {{Glossary("continuous_integration", "Continuous Integration")}} (CI)-Pipeline zu definieren und auszuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschritte, aber die Übersetzung von Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise fehlende Drittanbieter-Skripte und Optimierungen, die üblicherweise von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden, enthalten.

Der erste Schritt besteht darin, eine Entwicklungsbaseline für jeden Branch zu definieren, mit der man vergleichen kann, und die Genauigkeit des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser anzupassen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestpunkten bestehen oder durchfallen.

## Wie setze ich ein Leistungsbudget durch?

Je früher Sie eine potenzielle Ergänzung, die das Budget überschreitet, identifizieren können, desto besser können Sie den aktuellen Zustand Ihrer Site analysieren und Optimierungen oder unnötigen Code lokalisieren.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, aber Risiken und Experimente zulassen. Beispielsweise können Sie eine Funktion einführen, die die Gesamtladedauer erhöht, aber versucht, das Benutzerengagement zu steigern. (z.B. Wie lange bleibt ein Nutzer auf einer Seite oder Site).

Ein Leistungsbudget hilft Ihnen, optimales Verhalten für Ihre aktuellen Nutzer zu schützen, während es Ihnen ermöglicht, neue Märkte zu erschließen und maßgeschneiderte Erfahrungen zu liefern.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
