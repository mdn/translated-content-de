---
title: Leistungsbudgets
slug: Web/Performance/Performance_budgets
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("Web/Performance")}}

Ein Leistungsbudget ist ein Limit, um Regressionen zu verhindern. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder einen Schwellwert über einen bestimmten Zeitraum angewendet werden.

## Warum benötige ich ein Leistungsbudget?

Ein Budget existiert, um Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z. B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z. B. Anzahl der JS-Dateien / Gesamtgröße der Bilder).
- Regelbasiert (z. B. PageSpeed Index, Lighthouse-Score).

Ihr Hauptziel ist es, Regressionen zu verhindern, aber sie können auch Einblicke geben, um Trends vorherzusagen (d. h. im September wurden 50% des Budgets in einer Woche verbraucht).

Zusätzlich kann es Entwicklungsbedarfe aufdecken (d. h. Eine große Bibliothek mit kleineren Alternativen wird oft zur Lösung eines häufigen Problems gewählt).

## Wie definiere ich ein Leistungsbudget?

Ein Budget sollte zwei Ebenen beinhalten:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu handeln und technische Schulden zu planen, während die Entwicklung oder das Deployment nicht blockiert werden.

Die Fehlerstufe ist eine obere Grenze, bei der Änderungen negative und spürbare Auswirkungen haben werden.

Um zu beginnen, müssen Sie zunächst die Geräte und Verbindungsgeschwindigkeiten messen, von denen Ihre Benutzer kommen (z. B. ein \~$_200_ Android-Gerät über eine 3G-Verbindung), unter Verwendung mehrerer [Werkzeuge](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics). Diese zeitbasierten Metriken werden in Dateigrößenbudgets übersetzt.

Eine Standardbasislinie zur Reduzierung der Absprungrate ist, [Time to Interactive unter 5 Sekunden bei 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) zu erreichen. Abhängig von den spezifischen Zielen und Inhalten Ihrer Website könnten Sie jedoch entscheiden, sich auf andere Metriken zu konzentrieren.

Für eine textlastige Website wie ein Blog oder eine Nachrichtenseite könnte die {{Glossary("First_contentful_paint", "First Contentful Paint")}}-Metrik das Benutzerverhalten genauer widerspiegeln. (d. h. Wie schnell können Benutzer mit dem Lesen beginnen), was die spezifischen Dateibudgets (z. B. Schriftgröße) und ihre Optimierungen informiert. (z. B. Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display), um die [Wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) zu verbessern).

Der letztendliche Wert eines Leistungsbudgets besteht darin, den Einfluss der Leistung auf die Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprungs- oder Konversionsrate vorschreibt, sondern auch, wie wahrscheinlich es ist, dass ein Benutzer zurückkehrt.

## Wie implementiere ich ein Leistungsbudget?

Während der Entwicklung gibt es einige Werkzeuge, um Kontrollen gegen neue oder geänderte Assets durchzuführen:

- Ein Modulbündler (z. B. [webpack](https://webpack.js.org/)), verfügt über [Leistungsmerkmale](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Assets festgelegte Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) erlaubt es, Dateigrößenprüfungen in Ihrer Continuous Integration (CI)-Pipeline zu definieren und durchzuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Regressionen, doch die Übersetzung der Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise 3rd-Party-Skripte und Optimierungen, die üblicherweise von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden, fehlen.

Der erste Schritt besteht darin, eine Entwicklungsbasislinie für jeden Branch zu definieren, mit der verglichen werden kann, und die Präzision des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser abzugleichen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)- und [Webseite Test](https://www.webpagetest.org/)-Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestpunkten bestehen oder durchfallen.

## Wie erzwinge ich ein Leistungsbudget?

Je früher Sie eine potenzielle Ergänzung erkennen, die das Budget überschreitet, desto besser können Sie den aktuellen Zustand Ihrer Website analysieren und Optimierungen oder unnötigen Code erkennen.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, aber auch Risiken und Experimente zulassen. Beispielsweise können Sie eine Funktion einführen, die die Gesamtladezeit erhöht, aber versucht, die Benutzerbindung zu steigern (d. h. wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Leistungsbudget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während es Ihnen ermöglicht, in neue Märkte vorzudringen und maßgeschneiderte Erlebnisse zu bieten.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
