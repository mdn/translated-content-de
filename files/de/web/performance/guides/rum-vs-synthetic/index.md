---
title: "Leistungsüberwachung: RUM vs. synthetisches Monitoring"
short-title: RUM vs. synthetisches Monitoring
slug: Web/Performance/Guides/Rum-vs-Synthetic
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

**Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Analyse der Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Perspektiven auf die Performance und haben jeweils Vorteile, gute Anwendungsfälle und Schwächen. RUM eignet sich im Allgemeinen am besten für das Verständnis von langfristigen Trends, während synthetisches Monitoring sehr gut für Regressionstests und die Minderung kurzfristiger Leistungsprobleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Leistungsüberwachung.

## Synthetisches Monitoring

Synthetisches Monitoring beinhaltet die Überwachung der Leistungsfähigkeit einer Seite in einer 'Laborumgebung', typischerweise mit Automatisierungstools in einer so konsistent wie möglichen Umgebung. Synthetisches Monitoring umfasst das Bereitstellen von Skripten, die den Pfad simulieren, den ein Endbenutzer möglicherweise durch eine Webanwendung nehmen könnte, und die Performance berichten, die der Simulator erlebt. Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern ist synthetisch erzeugter Datenverkehr, der Daten zur Seitenleistung sammelt.

Ein Beispiel für synthetisches Monitoring ist [WebPageTest.org](https://www.webpagetest.org/). Es erfolgt in einer kontrollierten Umgebung, in der Variablen wie Geografie, Netzwerk, Gerät, Browser und Zwischenspeicherstatus vordefiniert sind. Es bietet Wasserfalldiagramme für jedes vom Host und {{Glossary("CDN", "CDN")}} bereitgestellte Asset sowie für jedes von Drittanbietern stammende Asset und Assetanforderungen, die durch alle Drittanbieterskripte, wie Anzeigen und Analysedienste, generiert werden.

Die Kontrolle über Umweltvariablen ist hilfreich, um zu verstehen, wo Engpässe in der Leistung aufgetreten sind, und um die Quelle von Leistungsproblemen zu identifizieren. Es spiegelt jedoch nicht die tatsächliche Erfahrung der Benutzer wider, insbesondere den langen Schwanz.

Synthetisches Monitoring kann ein wichtiger Bestandteil von Regressionstests und der Produktionsüberwachung sein. Testen Sie die Seite in jeder Entwicklungsphase und regelmäßig in der Produktion. Änderungen gegenüber der Basisleistung im Rahmen der {{Glossary("continuous_integration", "kontinuierlichen Integration")}} sollten einen Push fehlschlagen lassen. Wenn in der Produktion ein Problem auftritt, kann synthetisches Monitoring Einblicke geben und dabei helfen, Probleme zu identifizieren, zu isolieren und zu lösen, bevor sie die Benutzererfahrung negativ beeinflussen.

## Real User Monitoring

**Real User Monitoring** oder RUM misst die Leistung einer Seite von den Rechnern der tatsächlichen Benutzer. Im Allgemeinen injiziert ein Drittanbieterskript ein Skript auf jeder Seite, um die Ladezeiten der Seite für jede Anfrage zu messen und zurückzumelden. Diese Technik überwacht die tatsächlichen Benutzerinteraktionen mit einer Anwendung. Beim Real User Monitoring berichten die Browser der realen Benutzer über die erlebten Leistungskennzahlen. RUM hilft dabei zu erkennen, wie eine Anwendung genutzt wird, einschließlich der geografischen Verteilung der Benutzer und deren Einfluss auf die Endbenutzererfahrung.

Im Gegensatz zum Synthetischen Monitoring erfasst RUM die Leistung der tatsächlichen Benutzer, unabhängig von Gerät, Browser, Netzwerk oder geografischem Standort. Während Benutzer mit einer Anwendung interagieren, werden alle Leistungszeiten erfasst, unabhängig von den durchgeführten Aktionen oder angezeigten Seiten. RUM überwacht tatsächliche Anwendungsfälle, nicht die synthetischen, vorab definierten Anwendungsfälle, die von einem Ingenieur, PM oder Marketing-Team festgelegt wurden. Dies ist besonders wichtig für große Websites oder komplexe Anwendungen, bei denen sich die Funktionalität oder der Inhalt ständig ändert und bei denen die Population, die die Anwendung nutzt, sich stark in den Lebenserfahrungen von denen unterscheidet, die sie erstellen.

Durch die Nutzung von RUM kann ein Unternehmen seine Benutzer besser verstehen und die Bereiche auf seiner Website identifizieren, die am meisten Aufmerksamkeit erfordern. Darüber hinaus kann RUM helfen, die geografischen oder kanalbezogenen Verteilungstrends Ihrer Benutzer zu verstehen. Das Wissen über Ihre Benutzertrends hilft Ihnen, Ihren Geschäftsplan besser zu definieren, und ermöglicht es Ihnen aus einer Überwachungsperspektive, Schlüsselbereiche für Optimierung und Leistungsverbesserungen zu identifizieren.

## RUM vs. Synthetisch

Synthetisches Monitoring eignet sich gut, um Regressionen während der Entwicklungszyklen zu erfassen, insbesondere mit {{Glossary("network_throttling", "Netzwerk-Drosselung")}}. Es ist relativ einfach, kostengünstig und hervorragend für Spot-Checks der Performance während der Entwicklung geeignet, als eine effektive Möglichkeit, die Auswirkungen von Codeänderungen zu messen, aber es spiegelt nicht wider, was echte Benutzer erleben und bietet nur einen engen Überblick über die Leistung.

RUM hingegen liefert echte Metriken von echten Benutzern, die die Website oder Anwendung nutzen. Auch wenn dies teurer und wahrscheinlich weniger bequem ist, liefert es wichtige Daten zur Benutzererfahrung.

## Performance APIs

Es gibt viele Überwachungsdienste. Wenn Sie Ihr eigenes Überwachungssystem erstellen möchten, werfen Sie einen Blick auf die Performance-APIs, hauptsächlich [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), aber auch [`PerformanceMark`](/de/docs/Web/API/PerformanceMark), [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) und [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming).
