---
title: "Leistungsüberwachung: RUM vs. synthetische Überwachung"
slug: Web/Performance/Rum-vs-Synthetic
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Synthetische Überwachung** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Erkenntnissen zur Web-Performance. RUM und synthetische Überwachung bieten unterschiedliche Einblicke in die Leistung und haben jeweils ihre Vorteile, geeignete Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen besser für das Verständnis langfristiger Trends, während die synthetische Überwachung sehr gut für Regressionstests und die Minderung kurzfristiger Performance-Probleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Leistungsüberwachung.

## Synthetische Überwachung

Die synthetische Überwachung umfasst die Überwachung der Leistung einer Seite in einer 'Laborumgebung', typischerweise mit Automatisierungstools in einer möglichst konsistenten Umgebung. Die synthetische Überwachung beinhaltet das Bereitstellen von Skripten, die den Weg simulieren, den ein Endbenutzer durch eine Webanwendung nehmen könnte, und die Leistung berichten, die der Simulator erfährt. Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Benutzern, sondern vielmehr von synthetisch generiertem Datenverkehr, der Daten zur Seitenleistung sammelt.

Ein Beispiel für synthetische Überwachung ist [WebPageTest.org](https://www.webpagetest.org/). Es wird in einer kontrollierten Umgebung durchgeführt, in der Variablen wie Geografie, Netzwerk, Gerät, Browser und Cache-Status vorbestimmt sind. Es liefert Wasserfalldiagramme für alle vom Host und [CDN](/de/docs/Glossary/CDN) bereitgestellten Ressourcen sowie für alle von Drittanbietern generierten Ressourcen und Ressourcenanforderungen, wie z.B. Anzeigen und Analysedienste.

Die Kontrolle von Umweltvariablen hilft dabei, zu verstehen, wo Leistungsengpässe aufgetreten sind und die Quelle von Leistungsproblemen zu identifizieren. Dies ist jedoch nicht repräsentativ für das tatsächliche Nutzererlebnis, insbesondere nicht für die breite Nutzerschaft.

Die synthetische Überwachung kann ein wichtiger Bestandteil von Regressionstests und der Überwachung von Produktionsseiten sein. Testen Sie die Seite in jeder Entwicklungsphase und regelmäßig in der Produktion. Abweichungen von der Basisleistung sollten als Teil der kontinuierlichen Integration einen Push fehlschlagen lassen. Wenn ein Problem in der Produktion auftritt, kann die synthetische Überwachung Einblicke gewähren und helfen, Probleme zu identifizieren, zu isolieren und zu lösen, bevor sie das Nutzererlebnis negativ beeinflussen.

## Real User Monitoring

**Real User Monitoring** oder RUM misst die Leistung einer Seite von den Maschinen echter Benutzer. Im Allgemeinen injiziert ein Drittanbieterskript ein Skript in jede Seite, um Daten zum Seitenaufruf für jede gestellte Anfrage zu messen und zu melden. Diese Technik überwacht die tatsächlichen Benutzerinteraktionen einer Anwendung. Beim Real User Monitoring berichten die Browser realer Benutzer die erlebten Leistungsmetriken zurück. RUM hilft zu identifizieren, wie eine Anwendung genutzt wird, einschließlich der geografischen Verteilung der Benutzer und der Auswirkungen dieser Verteilung auf das Endbenutzererlebnis.

Im Gegensatz zur synthetischen Überwachung erfasst RUM die Leistung tatsächlicher Benutzer, unabhängig von Gerät, Browser, Netzwerk oder geografischem Standort. Während die Benutzer mit einer Anwendung interagieren, werden alle Leistungsmessungen erfasst, unabhängig von den ausgeführten Aktionen oder aufgerufenen Seiten. RUM überwacht tatsächliche Anwendungsfälle, nicht die synthetischen, angenommenen Anwendungsfälle, die von einem Ingenieur, PM oder Marketingteam vorgegeben werden. Dies ist besonders wichtig für große Sites oder komplexe Apps, bei denen die Funktionalität oder der Inhalt ständig verändert wird und bei denen die Bevölkerung, die auf die Anwendung zugreift, sich stark in den Lebenserfahrungen von denen unterscheiden kann, die sie erstellen.

Durch den Einsatz von RUM kann ein Unternehmen seine Benutzer besser verstehen und die Bereiche auf seiner Seite identifizieren, die die meiste Aufmerksamkeit erfordern. Darüber hinaus kann RUM helfen, die geografischen oder kanalspezifischen Verteilungstrends Ihrer Benutzer zu verstehen. Zu wissen, wie Ihre Benutzertrends verlaufen, hilft Ihnen, Ihren Geschäftsplan besser zu definieren und ermöglicht es Ihnen aus einer Überwachungsperspektive, Schlüsselbereiche zu identifizieren, die auf Optimierung und Leistungsverbesserungen abzielen müssen.

## RUM vs Synthetisch

Synthetische Überwachung eignet sich hervorragend zum Erkennen von Regressionen während der Entwicklungszyklen, insbesondere mit [Netzwerkdrosselung](/de/docs/Glossary/network_throttling). Es ist relativ einfach, kostengünstig und ideal zur punktuellen Überprüfung der Leistung während der Entwicklung als effektive Möglichkeit, die Auswirkungen von Codeänderungen zu messen, spiegelt jedoch nicht wider, was echte Benutzer erleben, und bietet nur einen begrenzten Überblick über die Leistung.

RUM hingegen liefert echte Metriken von echten Benutzern, die die Seite oder Anwendung nutzen. Auch wenn dies teurer und wahrscheinlich weniger bequem ist, liefert es entscheidende Daten zum Benutzererlebnis.

## Performance APIs

Es gibt viele Überwachungsdienste. Wenn Sie Ihr eigenes Überwachungssystem erstellen möchten, werfen Sie einen Blick auf die Leistungs-APIs, hauptsächlich [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), aber auch [`PerformanceMark`](/de/docs/Web/API/PerformanceMark), [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure), und [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming).
