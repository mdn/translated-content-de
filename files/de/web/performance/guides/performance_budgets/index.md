---
title: Performance-Budgets
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Ein Performance-Budget ist ein Limit, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder ein Schwellenwert über einen bestimmten Zeitraum gelten.

## Warum benötige ich ein Performance-Budget?

Ein Budget existiert, um Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z. B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z. B. Anzahl der JS-Dateien/Gesamtbildgröße).
- Regelbasiert (z. B. PageSpeed-Index, Lighthouse-Score).

Ihr Hauptziel ist es, Rückschritte zu verhindern, aber sie können auch Einblicke geben, um Trends vorherzusagen (d.h. im September wurden 50 % des Budgets in einer Woche aufgebraucht).

Zusätzlich können sie Entwicklungsbedarfe aufdecken (d.h. Eine große Bibliothek mit kleineren Alternativen wird oft gewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Performance-Budget?

Ein Budget sollte zwei Ebenen enthalten:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu sein und technische Schulden zu planen, ohne Entwicklung oder Bereitstellungen zu blockieren.

Die Fehlerstufe ist ein oberes Limit, bei dem Änderungen einen negativen und bemerkbaren Einfluss haben werden.

Der erste Schritt besteht darin, die Geräte und Verbindungsgeschwindigkeiten zu messen, von denen Ihre Nutzer kommen (z. B. ein \~$_200_ Android-Gerät über eine 3G-Verbindung), unter Verwendung mehrerer [Tools](/de/docs/Learn_web_development/Extensions/Performance/Best_practices). Diese zeitbasierten Metriken werden in Dateigrößen-Budgets umgewandelt.

Ein Standard-Basiswert zur Reduzierung der Absprungrate besteht darin, [Time to Interactive unter 5 Sekunden in 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) zu erreichen. Abhängig von den spezifischen Zielen und Inhalten Ihrer Website könnten Sie sich jedoch dazu entscheiden, andere Metriken in den Fokus zu rücken.

Für eine textlastige Seite wie einen Blog oder eine Nachrichtenseite könnte die Metrik {{Glossary("First_contentful_paint", "First Contentful Paint")}} das Benutzerverhalten näher widerspiegeln. (d.h. Wie schnell können Nutzer mit dem Lesen beginnen), was dateispezifische Budgets (z. B. Schriftgröße) und deren Optimierungen (z. B. Verwendung von [font-display](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display) zur Verbesserung der [Wahrgenommenen Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)) beeinflussen wird.

Der ultimative Wert eines Performance-Budgets besteht darin, den Einfluss der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprung- oder Konversionsrate bestimmt, sondern auch, wie wahrscheinlich es ist, dass der Nutzer zurückkehrt.

## Wie implementiere ich ein Performance-Budget?

Während der Entwicklung gibt es einige Werkzeuge, um Überprüfungen neuer oder geänderter Ressourcen durchzuführen:

- Ein Modul-Bundler (z. B. [webpack](https://webpack.js.org/)), hat [Leistungsmerkmale](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Ressourcen festgelegte Limits überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize), ermöglicht es Ihnen, Dateigrößenprüfungen in Ihrer {{Glossary("continuous_integration", "Continuous Integration")}} (CI) Pipeline zu definieren und durchzuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschritte, aber die Übersetzung der Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise 3rd-Party-Skripte und Optimierungen, die üblicherweise von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden, fehlen können.

Der erste Schritt besteht darin, eine Entwicklungsbaseline für jeden Branch zu definieren, mit der verglichen werden kann, und die Genauigkeit des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um besser mit der Live-Umgebung übereinzustimmen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestwerten bestehen oder durchfallen.

## Wie setze ich ein Performance-Budget durch?

Je früher Sie eine potenzielle Ergänzung identifizieren können, die das Budget überschreitet, desto besser können Sie den aktuellen Zustand Ihrer Seite analysieren und Optimierungen oder unnötigen Code herausfinden.

Allerdings sollten Sie mehrere Budgets haben und dynamisch sein. Sie sollen Ihre aktuellen Ziele widerspiegeln, aber Risiken und Experimente zulassen. Beispielsweise könnten Sie eine Funktion einführen, die die Gesamtladezeit erhöht, aber versucht, das Benutzerengagement zu steigern. (d.h. wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Performance-Budget hilft Ihnen, optimales Verhalten für Ihre aktuellen Nutzer zu schützen, während Sie neue Märkte erschließen und maßgeschneiderte Erlebnisse liefern können.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
