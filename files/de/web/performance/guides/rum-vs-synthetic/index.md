---
title: "Leistungsüberwachung: RUM vs. synthetisches Monitoring"
short-title: RUM vs. synthetisches Monitoring
slug: Web/Performance/Guides/Rum-vs-Synthetic
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

**Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Analyse der Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Perspektiven auf die Performance und haben jeweils Vorteile, sinnvolle Einsatzszenarien und Nachteile. RUM eignet sich im Allgemeinen am besten für das Verständnis langfristiger Trends, während synthetisches Monitoring sehr gut für Regressionstests und zur Minderung kurzfristiger Performanceprobleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze der Leistungsüberwachung.

## Synthetisches Monitoring

Synthetisches Monitoring umfasst die Überwachung der Leistung einer Seite in einer 'Laborumgebung', typischerweise mit Automatisierungswerkzeugen in einer möglichst konsistenten Umgebung. Synthetisches Monitoring beinhaltet das Bereitstellen von Skripten, um den Weg zu simulieren, den ein Endbenutzer möglicherweise durch eine Webanwendung nimmt, und die vom Simulator erlebte Leistung zurückzumelden. Der gemessene Traffic stammt nicht von Ihren tatsächlichen Nutzern, sondern ist synthetisch generierter Traffic, der Daten zur Seitenperformance sammelt.

Ein Beispiel für synthetisches Monitoring ist [WebPageTest.org](https://www.webpagetest.org/). Es wird in einer kontrollierten Umgebung durchgeführt, in der Variablen wie Geografie, Netzwerk, Gerät, Browser und Cache-Status vorab festgelegt sind. Es bietet Wasserfalldiagramme für jedes vom Host und {{Glossary("CDN", "CDN")}} bereitgestellte Asset sowie für alle von Drittanbieterskripten generierten Assets und Anfragen, wie zum Beispiel Werbung und Analysedienste.

Kontrollierte Umweltvariablen helfen dabei, zu verstehen, wo Leistungsengpässe aufgetreten sind und die Quelle etwaiger Performanceprobleme zu identifizieren. Es ist jedoch nicht repräsentativ für das tatsächliche Benutzererlebnis, insbesondere den langen Verlauf.

Synthetisches Monitoring kann ein wichtiger Bestandteil von Regressionstests und Produktionssite-Monitoring sein. Testen Sie die Seite in jeder Phase der Entwicklung und regelmäßig in der Produktion. Änderungen gegenüber der Basisleistung im Rahmen der {{Glossary("continuous_integration", "Continuous Integration")}} sollten einen Push fehlschlagen lassen. Wenn ein Problem in der Produktion auftritt, kann synthetisches Monitoring Einblicke gewähren und helfen, Probleme zu identifizieren, zu isolieren und zu beheben, bevor sie das Benutzererlebnis negativ beeinflussen.

## Real User Monitoring

**Real User Monitoring** oder RUM misst die Leistung einer Seite von echten Benutzergeräten aus. In der Regel injiziert ein Drittanbieterskript ein Skript auf jeder Seite, um die Ladezeitdaten jeder Anforderung zu messen und zurückzumelden. Diese Technik überwacht die tatsächlichen Benutzerinteraktionen mit einer Anwendung. Beim Real User Monitoring berichten die Browser der tatsächlichen Benutzer über die erlebten Performance-Metriken. RUM hilft dabei, zu erkennen, wie eine Anwendung genutzt wird, einschließlich der geografischen Verteilung der Benutzer und des Einflusses dieser Verteilung auf das Benutzererlebnis.

Im Gegensatz zum synthetischen Monitoring erfasst RUM die Leistung echter Benutzer unabhängig von Gerät, Browser, Netzwerk oder geografischem Standort. Während Benutzer mit einer Anwendung interagieren, werden alle Leistungszeiten erfasst, unabhängig davon, welche Aktionen ausgeführt oder welche Seiten betrachtet werden. RUM überwacht echte Anwendungsfälle, nicht die synthetischen, von einem Ingenieur, PM oder Marketingteam vorgegebenen Anwendungsfälle. Dies ist besonders wichtig für große Websites oder komplexe Apps, bei denen Funktionalität oder Inhalt ständig geändert werden und bei denen die Population, die auf die Anwendung zugreift, sich stark von derjenigen unterscheiden kann, die sie erstellt.

Durch den Einsatz von RUM kann ein Unternehmen seine Benutzer besser verstehen und die Bereiche auf seiner Website identifizieren, die die meiste Aufmerksamkeit erfordern. Darüber hinaus kann RUM dabei helfen, die geografischen oder kanalspezifischen Verteilungstrends Ihrer Benutzer zu verstehen. Das Wissen um die Benutzertendenzen hilft Ihnen, Ihren Geschäftsplan besser zu definieren und ermöglicht es Ihnen aus monitoringtechnischer Sicht, Schlüsselbereiche für Optimierung und Leistungsverbesserungen zu identifizieren.

## RUM vs. Synthetisch

Das synthetische Monitoring eignet sich hervorragend, um Regressionen während des Entwicklungszyklus zu erkennen, insbesondere mit {{Glossary("network_throttling", "Network Throttling")}}. Es ist relativ einfach, kostengünstig und hervorragend zur schnellen Überprüfung der Leistung während der Entwicklung als effektive Möglichkeit zur Messung der Auswirkungen von Code-Änderungen, aber es spiegelt nicht wider, was echte Benutzer erleben, und bietet nur einen engen Blick auf die Leistung.

RUM hingegen liefert echte Metriken von tatsächlichen Benutzern, die die Website oder Anwendung verwenden. Obwohl dies teurer und wahrscheinlich weniger bequem ist, liefert es entscheidende Daten zur Benutzererfahrung.

## Performance APIs

Es gibt viele Überwachungsdienste. Wenn Sie Ihr eigenes Überwachungssystem aufbauen möchten, werfen Sie einen Blick auf die Performance-APIs, hauptsächlich [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), aber auch [`PerformanceMark`](/de/docs/Web/API/PerformanceMark), [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) und [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming).
