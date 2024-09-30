---
title: Performance budgets
slug: Web/Performance/Performance_budgets
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("Web/Performance")}}

Ein Performance-Budget ist eine Begrenzung, um Rückschritte zu vermeiden. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine bestimmte Metrik (z.B. [Time to Interactive](/de/docs/Glossary/Time_to_interactive)), eine benutzerdefinierte Metrik (z.B. Zeit zum Hero-Element) oder einen Schwellenwert über einen Zeitraum gelten.

## Warum brauche ich ein Performance-Budget?

Ein Budget existiert, um Ihre erreichbaren Ziele zu reflektieren. Es ist ein Kompromiss zwischen Benutzererfahrung und anderen Leistungsindikatoren (z.B. Konversionsrate).

Diese Ziele können sein:

- Zeitbasiert (z.B. [Time to Interactive](/de/docs/Glossary/Time_to_interactive), [First Contentful Paint](/de/docs/Glossary/First_contentful_paint)).
- Mengenbasiert (z.B. Anzahl der JS-Dateien / Gesamtgröße der Bilder).
- Regelbasiert (z.B. PageSpeed-Index, Lighthouse-Score).

Ihr Hauptziel ist es, Rückschritte zu vermeiden, aber sie können Einblicke geben, um Trends vorherzusagen (d.h. Im September wurden 50% des Budgets in einer Woche ausgegeben).

Zusätzlich können sie Entwicklungsbedarfe aufdecken (d.h. Eine große Bibliothek wird oft gewählt, um ein häufiges Problem zu lösen, obwohl es kleinere Alternativen gibt).

## Wie lege ich ein Performance-Budget fest?

Ein Budget sollte 2 Ebenen enthalten:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu sein und technischen Schulden zu planen, ohne die Entwicklung oder Bereitstellungen zu blockieren.

Die Fehlerstufe ist eine obere Grenze, bei der Änderungen negative und spürbare Auswirkungen haben.

Um zu beginnen, müssen Sie zunächst die Geräte und Verbindungsgeschwindigkeiten messen, von denen Ihre Benutzer kommen (z.B. Ein \~$200_ Android-Gerät über eine 3G-Verbindung), wobei Sie mehrere [Werkzeuge](/de/docs/Learn/Performance/Web_Performance_Basics) verwenden. Diese zeitbasierten Metriken werden in Dateigrößen-Budgets übersetzt.

Ein Standard-Baseline zur Reduzierung der Absprungrate besteht darin, [Time to Interactive unter 5 Sekunden bei 3G/4G und unter 2 Sekunden für nachfolgende Ladevorgänge](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/) zu erreichen. Abhängig von den spezifischen Zielen und dem Inhalt Ihrer Website können Sie sich jedoch auf andere Metriken konzentrieren.

Für eine textlastige Website wie einen Blog oder eine Nachrichtenseite könnte die Metrik [First Contentful Paint](/de/docs/Glossary/First_contentful_paint) das Benutzerverhalten genauer widerspiegeln. (d.h. Wie schnell können Benutzer mit dem Lesen beginnen), was dateispezifische Budgets (z.B. Schriftgröße) und deren Optimierungen informiert. (z.B. Verwendung von [font-display](/de/docs/Web/CSS/@font-face/font-display) zur Verbesserung der [Wahrgenommenen Leistung](/de/docs/Learn/Performance/Perceived_performance)).

Der ultimative Wert eines Performance-Budgets besteht darin, den Einfluss der Leistung auf Geschäfts- oder Produktziele zu korrelieren. Bei der Definition von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprungs- oder Konversionsrate, sondern auch die Wahrscheinlichkeit, dass Benutzer zurückkehren, bestimmen wird.

## Wie implementiere ich ein Performance-Budget?

Während der Entwicklung gibt es einige Werkzeuge, um Prüfungen gegen neue oder geänderte Ressourcen durchzuführen:

- Ein Modul-Bundler (z.B. [webpack](https://webpack.js.org/)), verfügt über [Performance-Features](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Ressourcen bestimmte Grenzen überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) erlaubt es Ihnen, Dateigrößenprüfungen in Ihrer Continuous Integration (CI) Pipeline zu definieren und durchzuführen.

Dateigrößenprüfungen sind die erste Verteidigungslinie gegen Rückschritte, aber die Übersetzung der Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise 3rd-Party-Skripte und Optimierungen, die normalerweise von einem [CDN](/de/docs/Glossary/CDN) bereitgestellt werden, fehlen.

Der erste Schritt ist es, eine Entwicklungsbaseline für jeden Branch zu definieren, um darauf zu vergleichen. Die Präzision der Differenz zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser anzugleichen.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integriert sich mit [Travis CI](https://www.travis-ci.com/) und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) und [Webpage Test](https://www.webpagetest.org/) Metriken von einer Entwicklungs-URL zu sammeln. Der Bot wird basierend auf den bereitgestellten Mindestwerten bestehen oder durchfallen.

## Wie setze ich ein Performance-Budget durch?

Je früher Sie eine potenzielle Erweiterung identifizieren können, die das Budget übersteigt, desto besser können Sie den aktuellen Zustand Ihrer Website analysieren und Optimierungen oder unnötigen Code lokalisieren.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre laufenden Ziele widerspiegeln, aber Risiken und Experimente zulassen. Zum Beispiel können Sie eine Funktion einführen, die die gesamte Ladezeit erhöht, aber versucht, das Benutzerengagement zu steigern. (d.h. Wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Performance-Budget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während es Ihnen ermöglicht, neue Märkte zu erschließen und maßgeschneiderte Erlebnisse zu liefern.

## Siehe auch

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
