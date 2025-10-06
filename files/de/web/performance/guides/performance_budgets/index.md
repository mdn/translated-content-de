---
title: Leistungsbudgets
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

Ein Leistungsbudget ist ein Limit, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladene Dateien, eine spezifische Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder ein Schwellenwert über einen bestimmten Zeitraum gelten.

## Warum benötige ich ein Leistungsbudget?

Ein Budget existiert, um Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z. B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z. B. Anzahl der JS-Dateien/gesamt Bildgröße).
- Regelbasiert (z. B. PageSpeed-Index, Lighthouse-Bewertung).

Ihr Hauptziel ist es, Rückschritte zu verhindern, aber sie können auch Einblicke bieten, um Trends vorherzusagen (d.h. im September wurden 50 % des Budgets in einer Woche ausgegeben).

Darüber hinaus kann es Entwicklungsbedarfe aufdecken (d.h. Eine große Bibliothek mit kleineren Alternativen wird oft gewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Leistungsbudget?

Ein Budget sollte 2 Ebenen beinhalten:

- Warnung.
- Fehler.

Das Warnniveau ermöglicht es Ihnen, proaktiv zu sein und technische Schulden zu planen, ohne die Entwicklung oder Bereitstellung zu blockieren.

Das Fehlniveau ist ein oberes Grenzlimit, bei dem Änderungen negative und merkbare Auswirkungen haben werden.

Der erste Schritt ist, die Geräte und Verbindungsgeschwindigkeiten zu messen, von denen Ihre Nutzer kommen (z. B. Ein \~$_200_ Android-Gerät über eine 3G-Verbindung), indem Sie mehrere [Tools](/de/docs/Learn_web_development/Extensions/Performance/Best_practices) verwenden. Diese zeitbasierten Metriken werden in Dateigrößenbudgets übersetzt.

Ein standardmäßiger Basiswert zur Reduzierung der Absprungrate besteht darin, [die Time to Interactive unter 5 Sekunden bei 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) zu erreichen. Je nach den spezifischen Zielen und dem Inhalt Ihrer Website können Sie sich jedoch auf andere Metriken konzentrieren.

Für eine textlastige Seite wie einen Blog oder eine Nachrichten-Website könnte die {{Glossary("First_contentful_paint", "First Contentful Paint")}} Metrik das Nutzerverhalten genauer widerspiegeln. (d.h. wie schnell können Nutzer mit dem Lesen beginnen), was über spezifische Dateibudgets (z. B. Schriftgröße) und deren Optimierungen informiert. (z. B. die Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display), um die [Empfundene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) zu verbessern).

Der ultimative Wert eines Leistungsbudgets liegt darin, die Auswirkungen der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [User Experience](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprungs- oder Konversionsrate bestimmt, sondern auch, wie wahrscheinlich es ist, dass der Nutzer zurückkehrt.

## Wie implementiere ich ein Leistungsbudget?

Während der Entwicklung gibt es einige Tools, um neue oder geänderte Assets zu überprüfen:

- Ein Modul-Bundler (z. B. [webpack](https://webpack.js.org/)), hat [Leistungsfunktionen](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Assets die festgelegten Limits überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) ermöglicht es Ihnen, Dateigrößenprüfungen in Ihrer kontinuierlichen Integration (CI) Pipeline zu definieren und auszuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschritte, aber die Übersetzung von Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise Drittanbieter-Skripte und Optimierungen, die normalerweise von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden, fehlen.

Der erste Schritt besteht darin, eine Entwicklungsgrundlinie für jeden Branch zu definieren, mit der verglichen werden kann, und die Präzision des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser abzugleichen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestbewertungen bestehen oder fehlschlagen.

## Wie erzwinge ich ein Leistungsbudget?

Je eher Sie eine potenzielle Ergänzung identifizieren können, die das Budget überschreitet, desto besser können Sie den aktuellen Zustand Ihrer Website analysieren und Optimierungen oder unnötigen Code identifizieren.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, aber Risiken und Experimente zulassen. Beispielsweise könnten Sie eine Funktion einführen, die die Gesamt-Ladezeit erhöht, aber versucht, die Benutzerbindung zu erhöhen. (d.h. wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Leistungsbudget hilft Ihnen, ein optimales Verhalten für Ihre aktuellen Nutzer zu schützen und gleichzeitig neue Märkte zu erschließen und maßgeschneiderte Erlebnisse zu liefern.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
