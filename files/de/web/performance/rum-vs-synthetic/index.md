---
title: "Performance Monitoring: RUM vs. synthetisches Monitoring"
slug: Web/Performance/Rum-vs-Synthetic
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und zur Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Perspektiven zur Performance-Betrachtung und haben jeweils Vorteile, geeignete Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen am besten, um langfristige Trends zu verstehen, während synthetisches Monitoring sehr gut für Regressionstests und zur Minderung kurzfristiger Performance-Probleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze des Performance-Monitorings.

## Synthetisches Monitoring

Synthetisches Monitoring beinhaltet die Überwachung der Performance einer Seite in einer 'Labor'-Umgebung, typischerweise mit automatisierten Werkzeugen in einer so konsistent wie möglichen Umgebung. Beim synthetischen Monitoring werden Skripte bereitgestellt, um den Weg zu simulieren, den ein Endbenutzer durch eine Webanwendung nehmen könnte, und es wird die vom Simulator erfahrene Performance zurückgemeldet. Der gemessene Traffic stammt nicht von Ihren tatsächlichen Benutzern, sondern von synthetisch erzeugtem Traffic, der Daten zur Seitenperformance sammelt.

Ein Beispiel für synthetisches Monitoring ist [WebPageTest.org](https://www.webpagetest.org/). Es erfolgt in einer kontrollierten Umgebung, in der Variablen wie Geografie, Netzwerk, Gerät, Browser und Cache-Status vorgegeben sind. Es liefert Wasserfalldiagramme für jedes vom Host und [CDN](/de/docs/Glossary/CDN) bereitgestellte Asset sowie für alle Drittanbieter-Assets und Asset-Anfragen, die von allen Drittanbieter-Skripten, wie Anzeigen und Analysediensten, generiert werden.

Die Kontrolle über Umgebungsvariablen ist hilfreich, um zu verstehen, wo Performance-Engpässe aufgetreten sind, und die Quelle möglicher Performance-Probleme zu identifizieren. Es spiegelt jedoch nicht die tatsächliche Erfahrung der Nutzer wider, insbesondere nicht den Long Tail.

Synthetisches Monitoring kann eine wichtige Komponente von Regressionstests und der Überwachung von Produktionssites sein. Testen Sie die Site in jeder Entwicklungsphase und regelmäßig in der Produktion. Veränderungen gegenüber der Basis-Performance sollten Teil der kontinuierlichen Integration sein und einen Push fehlschlagen lassen. Wenn ein Problem in der Produktion auftritt, kann synthetisches Monitoring Einblicke liefern und helfen, Probleme zu identifizieren, zu isolieren und zu lösen, bevor sie die Benutzererfahrung negativ beeinflussen.

## Real User Monitoring

**Real User Monitoring** oder RUM misst die Performance einer Seite von den Maschinen der tatsächlichen Benutzer. Im Allgemeinen injiziert ein Drittanbieterdienst ein Skript auf jeder Seite, um Daten zur Seitennutzung bei jeder Anfrage zu messen und zurückzumelden. Diese Technik überwacht die tatsächlichen Benutzerinteraktionen einer Anwendung. Beim Real User Monitoring melden die Browser der echten Benutzer die erlebten Performance-Metriken zurück. RUM hilft dabei zu identifizieren, wie eine Anwendung genutzt wird, einschließlich der geografischen Verteilung der Nutzer und der Auswirkungen dieser Verteilung auf die Endbenutzererfahrung.

Im Gegensatz zum synthetischen Monitoring erfasst RUM die Performance der tatsächlichen Benutzer unabhängig von Gerät, Browser, Netzwerk oder geografischem Standort. Während die Nutzer mit einer Anwendung interagieren, werden alle Performance-Zeiten erfasst, unabhängig davon, welche Aktionen ausgeführt oder Seiten angesehen werden. RUM überwacht die tatsächlichen Anwendungsfälle, nicht die synthetischen, angenommenen Anwendungsfälle, die von einem Ingenieur, PM oder Marketingteam vordefiniert wurden. Dies ist besonders wichtig für große Sites oder komplexe Apps, bei denen die Funktionalität oder der Inhalt ständig im Wandel ist und wo die Benutzerpopulation möglicherweise stark von denen abweicht, die sie erstellt haben.

Durch den Einsatz von RUM kann ein Unternehmen seine Nutzer besser verstehen und die Bereiche auf seiner Site identifizieren, die besondere Aufmerksamkeit erfordern. Darüber hinaus kann RUM helfen, die geografischen oder kanalspezifischen Verteilungstrends Ihrer Nutzer zu verstehen. Das Wissen über Ihre Nutzertrends hilft Ihnen, Ihren Geschäftsplan besser zu definieren und aus Monitoring-Perspektive Schlüsselbereiche zu identifizieren, die für Optimierungen und Performance-Verbesserungen angestrebt werden sollten.

## RUM vs. Synthetisch

Synthetisches Monitoring eignet sich gut, um Regressionen während der Entwicklungszyklen zu identifizieren, insbesondere mit [Netzwerk-Drosselung](/de/docs/Glossary/network_throttling). Es ist relativ einfach, kostengünstig und hervorragend zum Spot-Checken der Performance während der Entwicklung als wirkungsvolle Methode zur Messung der Auswirkung von Code-Änderungen geeignet, bietet jedoch nicht das, was echte Nutzer erleben, und liefert nur eine eingeschränkte Sicht auf die Performance.

RUM hingegen liefert echte Metriken von echten Nutzern, die die Site oder Anwendung nutzen. Auch wenn dies teurer und wahrscheinlich weniger bequem ist, liefert es wesentliche Daten zur Benutzererfahrung.

## Performance-APIs

Es gibt viele Überwachungsdienste. Wenn Sie Ihr eigenes Überwachungssystem erstellen möchten, sollten Sie sich die Performance-APIs ansehen, hauptsächlich [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), aber auch [`PerformanceMark`](/de/docs/Web/API/PerformanceMark), [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) und [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming).
