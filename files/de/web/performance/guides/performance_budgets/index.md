---
title: Leistungsbudgets
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Ein Leistungsbudget ist ein Limit, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine bestimmte Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder ein Schwellenwert über einen bestimmten Zeitraum gelten.

## Warum benötige ich ein Leistungsbudget?

Ein Budget existiert, um Ihre erreichbaren Ziele zu reflektieren. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z. B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z. B. Anzahl der JS-Dateien/gesamte Bildgröße).
- Regelbasiert (z. B. PageSpeed-Index, Lighthouse-Score).

Ihr Hauptziel ist es, Rückschritte zu verhindern, sie können aber auch Einblicke liefern, um Trends vorherzusagen (d. h. Im September wurden 50 % des Budgets in einer Woche verbraucht).

Zusätzlich kann es Entwicklungsbedürfnisse aufdecken (d. h. Eine große Bibliothek mit kleineren Alternativen wird oft gewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Leistungsbudget?

Ein Budget sollte zwei Ebenen umfassen:

- Warnung.
- Fehler.

Das Warnlevel ermöglicht es Ihnen, proaktiv zu sein und technische Schulden zu planen, ohne die Entwicklung oder Deployments zu blockieren.

Das Fehlerlevel ist eine obere Grenze, bei der Änderungen eine negative und spürbare Auswirkung haben werden.

Um zu beginnen, müssen Sie zunächst die Geräte und Verbindungsgeschwindigkeiten messen, von denen Ihre Benutzer kommen (z.B. Ein \~$_200_ Android-Gerät über eine 3G-Verbindung), indem Sie mehrere [Werkzeuge](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics) verwenden. Diese zeitbasierten Metriken werden in Dateigrößenbudgets übersetzt.

Ein Standardbaseline zur Reduzierung der Absprungrate ist es, [Time to Interactive unter 5 Sekunden in 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) zu erreichen. Basierend auf den spezifischen Zielen und Inhalten Ihrer Seite könnten Sie jedoch entscheiden, sich auf andere Metriken zu konzentrieren.

Für eine textintensive Seite wie einen Blog oder eine Nachrichtenseite könnte die {{Glossary("First_contentful_paint", "First Contentful Paint")}} Metrik das Benutzerverhalten genauer widerspiegeln (d. h. Wie schnell können Benutzer mit dem Lesen beginnen), was Dateispezifische Budgets (z. B. Schriftgröße) und deren Optimierungen informiert. (z. B. Verwenden von [font-display](/de/docs/Web/CSS/@font-face/font-display), um die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) zu verbessern).

Der letztendliche Wert eines Leistungsbudgets liegt darin, die Auswirkungen der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprung- oder Konversionsrate bestimmt, sondern auch, wie wahrscheinlich es ist, dass ein Benutzer zurückkehrt.

## Wie implementiere ich ein Leistungsbudget?

Während der Entwicklung gibt es einige Tools, um Überprüfungen gegen neue oder geänderte Assets durchzuführen:

- Ein Modul-Bundler (z. B. [webpack](https://webpack.js.org/)), hat [Leistungsmerkmale](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Assets festgelegte Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize), ermöglicht es Ihnen, Dateigrößenprüfungen in Ihrer Continuous Integration (CI) Pipeline zu definieren und auszuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschritte, aber die Rückübersetzung der Größe in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise 3rd-Party-Skripte und Optimierungen, die gewöhnlich von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden, fehlen.

Der erste Schritt besteht darin, eine Entwicklungsbaseline für jeden Branch zu definieren, mit der verglichen werden kann. Die Präzision des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser abzugleichen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestwerten bestanden oder nicht bestanden.

## Wie setze ich ein Leistungsbudget durch?

Je früher Sie eine potenzielle Ergänzung identifizieren können, die das Budget überschreitet, desto besser können Sie den aktuellen Zustand Ihrer Seite analysieren und Optimierungen oder unnötigen Code identifizieren.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, aber Risiken und Experimente zulassen. Zum Beispiel könnten Sie eine Funktion einführen, die die Gesamt-Ladezeit erhöht, aber versucht, die Benutzerbindung zu erhöhen. (d. h. Wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Leistungsbudget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während Sie in neue Märkte vordringen und maßgeschneiderte Erlebnisse liefern können.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
