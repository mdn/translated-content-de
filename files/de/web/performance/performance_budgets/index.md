---
title: Performance-Budgets
slug: Web/Performance/Performance_budgets
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("Web/Performance")}}

Ein Performance-Budget ist ein Limit, um Rückschläge zu verhindern. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z. B. [Time to Interactive](/de/docs/Glossary/Time_to_interactive)), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder einen Schwellenwert über einen bestimmten Zeitraum angewendet werden.

## Warum benötige ich ein Performance-Budget?

Ein Budget existiert, um Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z. B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z. B. [Time to Interactive](/de/docs/Glossary/Time_to_interactive), [First Contentful Paint](/de/docs/Glossary/First_contentful_paint)).
- Mengenbasiert (z. B. Menge der JS-Dateien/gesamt Bildgröße).
- Regelbasiert (z. B. PageSpeed Index, Lighthouse Score).

Ihr primäres Ziel ist es, Rückschläge zu verhindern, aber sie können auch Einblicke geben, um Trends vorherzusagen (d. h. im September wurden 50 % des Budgets in einer Woche verbraucht).

Zusätzlich kann es Entwicklungsbedarfe aufdecken (d. h. Eine große Bibliothek mit kleineren Alternativen wird oft gewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Performance-Budget?

Ein Budget sollte 2 Ebenen enthalten:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu sein und technische Schulden zu planen, während die Entwicklung oder das Deployment nicht blockiert wird.

Die Fehlerstufe ist eine obere Grenze, wo Veränderungen einen negativen und spürbaren Einfluss haben werden.

Um zu beginnen, müssen Sie zunächst die Geräte und Verbindungsgeschwindigkeiten messen, von denen Ihre Benutzer kommen (z. B. ein Android-Gerät für ~$_200_ über eine 3G-Verbindung), mit mehreren [Werkzeugen](/de/docs/Learn/Performance/Web_Performance_Basics). Diese zeitbasierten Metriken werden in Budgetierungen der Dateigröße übersetzt.

Ein Standardeinstiegswert zur Reduzierung der Absprungrate ist das Erreichen von [Time to Interactive unter 5 Sekunden in 3G/4G, und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/). Basierend auf den spezifischen Zielen und Inhalten Ihrer Webseite könnten Sie jedoch entscheiden, sich auf andere Metriken zu konzentrieren.

Für eine textlastige Seite wie ein Blog oder eine Nachrichtenseite könnte die Metrik [First Contentful Paint](/de/docs/Glossary/First_contentful_paint) das Benutzerverhalten genauer widerspiegeln. (z. B. Wie schnell Benutzer mit dem Lesen beginnen können), was spezifische Dateibudgets (z. B. Schriftgröße) und deren Optimierungen informieren wird. (z. B. Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display) zur Verbesserung der [Wahrgenommenen Leistung](/de/docs/Learn/Performance/Perceived_performance)).

Der ultimative Wert eines Performance-Budgets besteht darin, die Auswirkungen der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprungrate oder Konversionsrate beeinflusst, sondern auch, wie wahrscheinlich es ist, dass der Benutzer zurückkehrt.

## Wie setze ich ein Performance-Budget um?

Während der Entwicklung gibt es ein paar Werkzeuge, um neue oder geänderte Ressourcen zu überprüfen:

- Ein Modul-Bundler (z. B. [webpack](https://webpack.js.org/)) hat [Leistungsmerkmale](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Ressourcen die angegebenen Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) ermöglicht es Ihnen, Dateigrößenprüfungen in Ihrer Continuous Integration (CI) Pipeline zu definieren und auszuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschläge, aber die Umwandlung von Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise Drittanbieter-Skripte und Optimierungen, die üblicherweise von einem [CDN](/de/docs/Glossary/CDN) bereitgestellt werden, fehlen.

Der erste Schritt ist, eine Entwicklungsgrundlage für jeden Branch zu definieren, mit der verglichen werden kann, und die Genauigkeit der Abweichung zwischen Entwicklung und Produktion kann als Ziel genutzt werden, um die Live-Umgebung besser zu simulieren.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot besteht oder fällt basierend auf den bereitgestellten Mindestwerten.

## Wie setze ich ein Performance-Budget durch?

Je früher Sie eine potenzielle Ergänzung identifizieren können, die das Budget sprengt, desto besser können Sie den aktuellen Zustand Ihrer Seite analysieren und Optimierungen oder unnötigen Code ermitteln.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, aber Risiken und Experimente zulassen. Zum Beispiel könnten Sie ein Feature einführen, das die Gesamtladezeit erhöht, aber versucht, das Benutzerengagement zu steigern. (z. B. Wie lange ein Benutzer auf einer Seite oder Webseite bleibt).

Ein Performance-Budget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während es Ihnen ermöglicht, neue Märkte zu erschließen und maßgeschneiderte Erlebnisse zu liefern.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
