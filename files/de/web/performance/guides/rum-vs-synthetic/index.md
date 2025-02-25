---
title: "Leistungsüberwachung: RUM vs synthetische Überwachung"
short-title: RUM vs synthetische Überwachung
slug: Web/Performance/Guides/Rum-vs-Synthetic
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

**Synthetische Überwachung** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetische Überwachung bieten unterschiedliche Ansichten der Performance und haben jeweils ihre Vorteile, Anwendungsfälle und Schwächen. RUM eignet sich im Allgemeinen am besten zum Verständnis langfristiger Trends, während die synthetische Überwachung sich hervorragend für Regressionstests und das Abmildern kurzfristiger Performanceprobleme während der Entwicklung eignet. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Leistungsüberwachung.

## Synthetische Überwachung

Die synthetische Überwachung umfasst die Überwachung der Leistung einer Seite in einer 'Labor'-Umgebung, typischerweise mit Automatisierungstools in einer möglichst konsistenten Umgebung. Synthetische Überwachung umfasst den Einsatz von Skripten, um den Weg zu simulieren, den ein Endbenutzer möglicherweise durch eine Webanwendung nimmt, und die Leistung zurückzumelden, die der Simulator erfährt. Der gemessene Datenverkehr stammt nicht von Ihren tatsächlichen Nutzern, sondern besteht aus synthetisch erzeugtem Datenverkehr, der Daten zur Seitenleistung sammelt.

Ein Beispiel für synthetische Überwachung ist [WebPageTest.org](https://www.webpagetest.org/). Es wird in einer kontrollierten Umgebung durchgeführt, in der Variablen wie Geografie, Netzwerk, Gerät, Browser und Cache-Status festgelegt sind. Es bietet Wasserfalldiagramme für jedes vom Host und {{Glossary("CDN", "CDN")}} bereitgestellte Asset sowie für jedes Drittanbieter-Asset und Anfragen, die durch alle Drittanbieter-Skripte wie Anzeigen und Analysedienste generiert werden.

Das Kontrollieren von Umweltvariablen ist hilfreich, um zu verstehen, wo sich Performance-Engpässe ereignet haben, und um die Ursache von Performance-Problemen zu identifizieren. Dies spiegelt jedoch nicht die tatsächliche Erfahrung der Benutzer wider, insbesondere nicht den langen Rattenschwanz.

Synthetische Überwachung kann ein wichtiger Bestandteil der Regressionstests und der Produktionsüberwachung der Seite sein. Testen Sie die Seite in jeder Entwicklungsstufe und regelmäßig in der Produktion. Änderungen der Basisleistung im Rahmen der kontinuierlichen Integration sollten einen Push scheitern lassen. Wenn ein Problem in der Produktion auftritt, kann die synthetische Überwachung Einblicke liefern, die helfen, Probleme zu identifizieren, zu isolieren und zu lösen, bevor sie die Benutzererfahrung negativ beeinflussen.

## Real User Monitoring

**Real User Monitoring** oder RUM misst die Leistung einer Seite von den Maschinen der echten Benutzer. Im Allgemeinen injiziert ein Drittanbieter-Skript ein Skript auf jeder Seite, um die Daten zur Seitenladezeit für jede Anforderung zu messen und zurückzumelden. Diese Technik überwacht die tatsächlichen Benutzerinteraktionen einer Anwendung. Im Real User Monitoring berichten die Browser echter Benutzer über erlebte Leistungskennzahlen. RUM hilft dabei zu erkennen, wie eine Anwendung verwendet wird, einschließlich der geografischen Verteilung der Benutzer und der Auswirkungen dieser Verteilung auf die Endbenutzererfahrung.

Im Gegensatz zur synthetischen Überwachung erfasst RUM die Leistung echter Benutzer unabhängig von Gerät, Browser, Netzwerk oder geografischem Standort. Während die Benutzer mit einer Anwendung interagieren, werden alle Leistungstiming erfasst, unabhängig davon, welche Aktionen durchgeführt oder welche Seiten angesehen werden. RUM überwacht tatsächliche Anwendungsfälle, nicht die synthetischen, angenommenen Anwendungsfälle, die von einem Ingenieur, PM oder Marketing-Team im Voraus definiert wurden. Dies ist besonders wichtig für große Websites oder komplexe Anwendungen, bei denen die Funktionalität oder der Inhalt sich ständig ändert und wo die Population, die auf die Anwendung zugreift, sich erheblich in den Lebenserfahrungen von denen unterscheiden kann, die sie erstellen.

Durch die Nutzung von RUM kann ein Unternehmen seine Benutzer besser verstehen und die Bereiche auf seiner Seite identifizieren, die die meiste Aufmerksamkeit erfordern. Darüber hinaus kann RUM dabei helfen, die geografischen oder kanalbezogenen Verteilungstrends Ihrer Nutzer zu verstehen. Das Wissen über Ihre Nutzertrends hilft Ihnen, Ihren Geschäftsplan besser zu definieren und, aus Sicht der Überwachung, die Schlüsselfelder für Optimierung und Leistungsverbesserungen zu identifizieren.

## RUM vs Synthetisch

Synthetische Überwachung eignet sich hervorragend, um Regressionen im Entwicklungszyklus zu erfassen, insbesondere mit {{Glossary("network_throttling", "Netzwerkdrosselung")}}. Es ist recht einfach, kostengünstig und hervorragend für die Stichprobenprüfung der Leistung während der Entwicklung geeignet, als effektiver Weg, um die Auswirkungen von Codeänderungen zu messen, spiegelt jedoch nicht wider, was echte Benutzer erleben und bietet nur einen begrenzten Leistungsüberblick.

RUM hingegen liefert echte Messwerte von echten Benutzern, die die Seite oder Anwendung nutzen. Obwohl dies teurer und wahrscheinlich weniger bequem ist, liefert es entscheidende Daten zur Benutzererfahrung.

## Performance-APIs

Es gibt viele Überwachungsdienste. Wenn Sie Ihr eigenes Überwachungssystem entwickeln möchten, werfen Sie einen Blick auf die Performance-APIs, hauptsächlich [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) und [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), aber auch [`PerformanceMark`](/de/docs/Web/API/PerformanceMark), [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) und [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming).
