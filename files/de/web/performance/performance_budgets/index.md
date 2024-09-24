---
title: Leistungsbudgets
slug: Web/Performance/Performance_budgets
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("Web/Performance")}}

Ein Leistungsbudget ist ein Limit, das Regressions verhindert. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z.B. [Time to Interactive](/de/docs/Glossary/Time_to_interactive)), eine benutzerdefinierte Metrik (z.B. Zeit zum Hero-Element) oder eine Schwelle über einen bestimmten Zeitraum angewendet werden.

## Warum benötige ich ein Leistungsbudget?

Ein Budget existiert, um Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z.B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z.B. [Time to Interactive](/de/docs/Glossary/Time_to_interactive), [First Contentful Paint](/de/docs/Glossary/First_contentful_paint)).
- Mengenbasiert (z.B. Anzahl der JS-Dateien/gesamt Bildgröße).
- Regelbasiert (z.B. PageSpeed-Index, Lighthouse-Score).

Ihr Hauptziel ist es, Regressions zu verhindern, aber sie können Einblicke bieten, um Trends vorherzusagen (d.h. Im September wurden 50% des Budgets in einer Woche ausgegeben).

Zusätzlich kann es Entwicklungsbedarfe aufdecken (d.h. Eine große Bibliothek wird häufig gewählt, obwohl es kleinere Alternativen gibt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Leistungsbudget?

Ein Budget sollte zwei Ebenen umfassen:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu sein und technische Schulden zu planen, ohne Entwicklung oder Bereitstellungen zu blockieren.

Die Fehlerebene ist ein oberes Grenzlimit, bei dem Änderungen eine negative und spürbare Auswirkung haben.

Um zu beginnen, müssen Sie zuerst die Geräte und Verbindungsgeschwindigkeiten messen, von denen Ihre Benutzer kommen (z.B. Ein \~$_200_ Android-Gerät über eine 3G-Verbindung), unter Verwendung mehrerer [Tools](/de/docs/Learn/Performance/Web_Performance_Basics). Diese zeitbasierten Metriken werden in Datei-Größen-Budgets umgewandelt.

Ein Standard-Benchmark, um die Absprungrate zu reduzieren, ist die Erreichung von [Time to Interactive unter 5 Sekunden in 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/). Je nach spezifischen Zielen und Inhalten Ihrer Website können Sie jedoch andere Metriken in den Fokus rücken.

Für eine textintensive Seite wie ein Blog oder eine Nachrichten-Website könnte die Metrik [First Contentful Paint](/de/docs/Glossary/First_contentful_paint) das Benutzerverhalten besser widerspiegeln. (d.h. Wie schnell können Benutzer anfangen zu lesen), was dateispezifische Budgets (z.B. Schriftgröße) und deren Optimierungen informiert. (z.B. Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display) zur Verbesserung der [Wahrgenommenen Leistung](/de/docs/Learn/Performance/Perceived_performance)).

Der ultimative Wert eines Leistungsbudgets besteht darin, die Auswirkungen der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Abbruch- oder Konversionsrate, sondern auch die Wahrscheinlichkeit beeinflusst, dass ein Benutzer zurückkehrt.

## Wie implementiere ich ein Leistungsbudget?

Während der Entwicklung gibt es einige Tools, um Überprüfungen neuer oder geänderter Ressourcen durchzuführen:

- Ein Modulpaketierer (z.B. [webpack](https://webpack.js.org/)), verfügt über [Leistungsfunktionen](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Ressourcen festgelegte Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) ermöglicht es Ihnen, Datei-Größen-Überprüfungen in Ihre kontinuierliche Integration (CI) Pipeline zu definieren und auszuführen.

Datei-Größen-Überprüfungen sind die erste Verteidigungslinie gegen Regressions, aber die Rückübersetzung von Größe in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise Drittanbieterskripte und Optimierungen, die normalerweise von einem [CDN](/de/docs/Glossary/CDN) bereitgestellt werden, fehlen.

Der erste Schritt besteht darin, eine Entwicklungsbasislinie für jeden Branch zu definieren, mit der verglichen werden kann, und die Präzision des Unterschieds zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser anzupassen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich in [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestwerten bestehen oder fehlschlagen.

## Wie erzwinge ich ein Leistungsbudget?

Je früher Sie eine potenzielle Ergänzung, die das Budget überschreitet, identifizieren können, desto besser können Sie den aktuellen Stand Ihrer Website analysieren und Optimierungen oder unnötigen Code lokalisieren.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, erlauben jedoch Risiken und Experimente. Beispielsweise können Sie eine Funktion einführen, die die gesamte Ladezeit erhöht, aber versucht, die Benutzerbindung zu steigern. (d.h. Wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Leistungsbudget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während Sie neue Märkte erschließen und maßgeschneiderte Erlebnisse bieten können.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
