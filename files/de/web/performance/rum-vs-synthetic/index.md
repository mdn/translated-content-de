---
title: "Leistungsüberwachung: RUM vs. synthetische Überwachung"
slug: Web/Performance/Rum-vs-Synthetic
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Synthetische Überwachung** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Erkennung der Web-Performance. RUM und synthetische Überwachung bieten unterschiedliche Ansichten der Leistung und haben jeweils Vorteile, gute Anwendungsfälle und Schwächen. RUM ist im Allgemeinen am besten geeignet, um langfristige Trends zu verstehen, während synthetische Überwachung sich sehr gut für Regressionstests und die Minderung kurzfristiger Leistungsprobleme während der Entwicklung eignet. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Leistungsüberwachung.

## Synthetische Überwachung

Synthetische Überwachung umfasst die Überwachung der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungstools in einer möglichst konsistenten Umgebung. Die synthetische Überwachung beinhaltet das Bereitstellen von Skripten, um den Pfad zu simulieren, den ein Endnutzer möglicherweise durch eine Webanwendung nehmen würde, und die Leistung zurückzumelden, die der Simulator erfährt. Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Nutzern, sondern ist synthetisch generierter Datenverkehr, der Daten zur Seitenleistung sammelt.

Ein Beispiel für synthetische Überwachung ist [WebPageTest.org](https://www.webpagetest.org/). Es wird in einer kontrollierten Umgebung durchgeführt, in der Variablen wie Geografie, Netzwerk, Gerät, Browser und Cache-Status vorbestimmt sind. Es bietet Wasserfalldiagramme für jedes vom Host und [CDN](/de/docs/Glossary/CDN) bediente Asset sowie jedes Drittanbieter-Asset und alle durch Drittanbieter-Skripte generierten Anforderungen, wie z.B. Werbung und Analysedienste.

Die Kontrolle über Umweltvariablen hilft, zu verstehen, wo Leistungsengpässe auftreten und die Ursache von Leistungsproblemen zu identifizieren. Dies spiegelt jedoch nicht die tatsächliche Erfahrung der Nutzer wider, insbesondere den Long Tail.

Synthetische Überwachung kann ein wichtiger Bestandteil von Regressionstests und der Überwachung von Produktionswebseiten sein. Testen Sie die Seite in jeder Entwicklungsphase und regelmäßig in der Produktion. Änderungen gegenüber der Basisleistung sollten als Teil der kontinuierlichen Integration ein Push fehlschlagen lassen. Wenn ein Problem in der Produktion auftritt, kann synthetische Überwachung Einblicke bieten, die bei der Identifizierung, Isolierung und Behebung von Problemen helfen, bevor sie das Benutzererlebnis negativ beeinflussen.

## Real User Monitoring

**Real User Monitoring** oder RUM misst die Leistung einer Seite von den Maschinen echter Benutzer. Im Allgemeinen injiziert ein Drittanbieter ein Skript auf jeder Seite, um die Ladezeiten der Seite für jede Anfrage zu messen und zu berichten. Diese Technik überwacht die tatsächlichen Benutzerinteraktionen einer Anwendung. Bei der Real User Überwachung melden die Browser der echten Nutzer die erfahrenen Leistungsmetriken zurück. RUM hilft, zu erkennen, wie eine Anwendung genutzt wird, einschließlich der geografischen Verteilung der Nutzer und der Auswirkungen dieser Verteilung auf das Benutzererlebnis.

Im Gegensatz zur synthetischen Überwachung erfasst RUM die Leistung tatsächlicher Nutzer unabhängig von Gerät, Browser, Netzwerk oder geografischem Standort. Während Nutzer mit einer Anwendung interagieren, werden alle Leistungszeiten erfasst, unabhängig davon, welche Aktionen ausgeführt oder welche Seiten angesehen werden. RUM überwacht tatsächliche Anwendungsfälle, nicht die synthetischen, angenommenen Anwendungsfälle, die von einem Ingenieur, PM oder Marketingteam vorgegeben sind. Dies ist besonders wichtig für große Seiten oder komplexe Apps, bei denen die Funktionalität oder der Inhalt ständig geändert wird und die Nutzer stark in ihren Lebenserfahrungen von den Erstellern der Anwendung abweichen können.

Durch die Nutzung von RUM kann ein Unternehmen seine Nutzer besser verstehen und die Bereiche auf seiner Website identifizieren, die die meiste Aufmerksamkeit erfordern. Darüber hinaus kann RUM helfen, die geografischen oder kanalabgeleiteten Trends Ihrer Nutzer zu verstehen. Das Wissen um Ihre Nutzertrends hilft Ihnen, Ihren Geschäftsplan besser zu definieren und ermöglicht es aus einer Überwachungsperspektive, wichtige Zielbereiche für Optimierungen und Leistungsverbesserungen zu identifizieren.

## RUM vs. Synthetische Überwachung

Die synthetische Überwachung eignet sich gut zum Erkennen von Regressionen während der Entwicklungszyklen, insbesondere mit {{glossary('network throttling')}}. Sie ist relativ einfach, kostengünstig und hervorragend geeignet, um die Leistung während der Entwicklung punktuell zu überprüfen, um die Auswirkung von Codeänderungen zu messen, spiegelt jedoch nicht wider, was echte Nutzer erleben, und bietet nur eine begrenzte Sicht auf die Leistung.

RUM hingegen liefert echte Metriken von echten Nutzern, die die Seite oder Anwendung verwenden. Obwohl dies teurer und wahrscheinlich weniger bequem ist, liefert es wichtige Daten zur Benutzererfahrung.

## Performance-APIs

Es gibt viele Überwachungsdienste. Wenn Sie Ihr eigenes Überwachungssystem aufbauen möchten, werfen Sie einen Blick auf die Performance-APIs, hauptsächlich {{domxref("PerformanceNavigationTiming")}} und {{domxref("PerformanceResourceTiming")}}, aber auch {{domxref("PerformanceMark")}}, {{domxref("PerformanceMeasure")}} und {{domxref("PerformancePaintTiming")}}.
