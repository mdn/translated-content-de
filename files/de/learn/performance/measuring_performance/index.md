---
title: Leistung messen
slug: Learn/Performance/Measuring_performance
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

Das Messen der Leistung liefert eine wichtige Kennzahl, um den Erfolg Ihrer App, Website oder Ihres Webdienstes zu bewerten.

Zum Beispiel können Sie Leistungskennzahlen verwenden, um zu bestimmen, wie Ihre App im Vergleich zu einem Konkurrenten abschneidet oder die Leistung Ihrer App über verschiedene Veröffentlichungen hinweg vergleichen. Ihre Kennzahlen sollten für Ihre Benutzer, Ihre Website und Ihre Geschäftsziele relevant sein. Sie sollten konsistent gesammelt, gemessen und in einem Format analysiert werden, das nicht-technische Interessengruppen konsumieren und verstehen können.

Dieser Artikel stellt Werkzeuge vor, mit denen Sie auf Webleistungskennzahlen zugreifen können, die zur Messung und Optimierung der Leistung Ihrer Website verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Bereitstellung von Informationen über Webleistungskennzahlen, die Sie über verschiedene Webleistungs-APIs sammeln können, sowie Werkzeuge, die Sie zur Visualisierung dieser Daten verwenden können.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Leistungstools

Es gibt mehrere verschiedene Werkzeuge, die Ihnen helfen können, die Leistung zu messen und zu verbessern. Diese können im Allgemeinen in zwei Kategorien eingeteilt werden:

- Werkzeuge, die die Leistung anzeigen oder messen, wie [PageSpeed Insights](https://pagespeed.web.dev/) oder der Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) und [Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). Diese Werkzeuge zeigen Ihnen, wie schnell oder langsam Ihre Website lädt. Sie zeigen auch Bereiche an, die verbessert werden können, um Ihre Web-App zu optimieren.
- [Performance APIs](/de/docs/Web/API/Performance_API), die Sie zur Erstellung benutzerdefinierter Leistungstools verwenden können.

## Allgemeine Leistungsberichterstattungstools

Werkzeuge wie [PageSpeed Insights](https://pagespeed.web.dev/) können schnelle Leistungsmessungen liefern. Sie können eine URL eingeben und in Sekunden einen Leistungsbericht erhalten. Der Bericht enthält Bewertungen, die anzeigen, wie Ihre Website auf Mobilgeräten und Desktops abschneidet. Dies ist ein guter Ausgangspunkt, um zu verstehen, was Sie gut machen und was verbessert werden könnte.

Zum Zeitpunkt des Schreibens sieht die Leistungsberichtszusammenfassung von MDN in etwa wie folgt aus:

![Ein Screenshot des PageSpeed Insights Berichts für die Mozilla-Homepage.](pagespeed-insight-mozilla-homepage.png)

Ein Leistungsbericht enthält Informationen über Dinge wie die Zeit, die ein Benutzer warten muss, bevor _irgendetwas_ auf der Seite angezeigt wird, wie viele Bytes heruntergeladen werden müssen, um eine Seite anzuzeigen, und vieles mehr. Er informiert Sie auch darüber, ob die gemessenen Werte als gut oder schlecht angesehen werden.

[webpagetest.org](https://www.webpagetest.org/) ist ein weiteres Beispiel für ein Werkzeug, das Ihre Website automatisch testet und wertvolle Metriken liefert.

Sie können versuchen, Ihre Lieblingswebsite mit diesen Werkzeugen zu testen und die Bewertungen zu sehen.

## Netzwerküberwachungstools

Moderne Browser verfügen über Werkzeuge, die Sie verwenden können, um geladene Seiten zu testen und festzustellen, wie sie performen; die meisten von ihnen funktionieren ähnlich. Zum Beispiel gibt der Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) detaillierte Informationen zu allen vom Netzwerk heruntergeladenen Assets zurück, zusammen mit einem Wasserfall-Zeitdiagramm, das zeigt, wie lange jeder Download gedauert hat.

![Firefox Netzwerkmonitor zeigt eine Liste geladener Assets sowie Ladezeit pro Asset](network-monitor.png)

Sie sollten sich auch die Dokumentation zum Netzwerkmonitor von [Chrome](https://developer.chrome.com/docs/devtools/network/) ansehen.

## Leistungsmesswerkzeuge

Sie können auch Browser-Leistungstools wie den [Firefox Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) verwenden, um die Leistung der Benutzeroberfläche einer Web-App oder Website zu messen, während Sie verschiedene Aktionen durchführen. Dies gibt Aufschluss darüber, welche Funktionen Ihre Web-App oder Website verlangsamen könnten.

![Entwicklertools Leistungsfenster zeigt den Wasserfall der Aufnahme #1.](perf-monitor.png)

Siehe auch die [Dokumentation zum Leistungswerkzeug von Chrome](https://developer.chrome.com/docs/devtools/performance/).

## Performance APIs

Wenn Sie Code für das Web schreiben, stehen Ihnen viele [Web APIs](/de/docs/Web/API) zur Verfügung, um Ihre eigenen Leistungsmesswerkzeuge zu erstellen.

Sie können die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing) verwenden, um die clientseitige Webleistung zu messen, einschließlich der benötigten Zeit zum Entladen der vorherigen Seite, der Dauer von Domain-Abfragen, der gesamten Zeit, die für die Ausführung des Ladehandlers des Fensters benötigt wird, und mehr. Sie können die API für Metriken im Zusammenhang mit allen Navigationsevents im folgenden Diagramm verwenden.

![Die verschiedenen Handler, die die Navigation Timing API behandeln kann, einschließlich Navigation Timing API Metriken, Aufforderung zum Entladen, Weiterleitung, Entladen, App Cache, DNS, TCP, Anfrage, Antwort, Verarbeitung, onLoad, navigationStart, redirectStart, redirectEnd, fetchStart, domainLookupEnd, domainLookupStart, connectStart (secureConnectionStart), connectEnd, requestStart, responseStart, responseEnd, unloadStart, unloadEnd, domLoading, domInteractive, domContentLoaded, domComplete, loadEventStart, loadEventEnd](navigationtimingapi.jpg)

Die [Performance API](/de/docs/Web/API/Performance_API), die den Zugriff auf leistungsbezogene Informationen für die aktuelle Seite bietet, umfasst mehrere APIs, darunter die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing), die [User Timing API](/de/docs/Web/API/Performance_API/User_timing) und die [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing). Diese Schnittstellen ermöglichen die genaue Messung der Zeit, die für die Ausführung von JavaScript-Aufgaben benötigt wird.

Das [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) Objekt ist Teil der _Performance Timeline_. Ein _Performance Entry_ kann direkt erstellt werden, indem einen Performance _[`mark`](/de/docs/Web/API/PerformanceMark)_ oder _[`measure`](/de/docs/Web/API/PerformanceMeasure)_ gemacht wird (zum Beispiel durch Aufruf der [`mark()`](/de/docs/Web/API/Performance/mark) Methode) an einem expliziten Punkt in einer Anwendung. Performance Entries werden auch auf indirekte Weise erstellt, wie zum Beispiel beim Laden einer Ressource wie einem Bild.

Die [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver) kann verwendet werden, um Leistungsmesereignisse zu beobachten und Sie auf neue [Performance Entries](/de/docs/Web/API/PerformanceEntry) aufmerksam zu machen, sobald sie in der Performance Timeline des Browsers aufgezeichnet werden.

Auch wenn dieser Artikel nicht in die Nutzung dieser APIs eintaucht, ist es hilfreich zu wissen, dass es sie gibt. Weitere Beispiele zur Nutzung von Performance Web APIs finden Sie im Artikel [Navigation und Zeiten](/de/docs/Web/Performance/Navigation_and_resource_timings).

## Fazit

Dieser Artikel gibt einen kurzen Überblick über einige Werkzeuge, die Ihnen helfen können, die Leistung einer Web-App oder Website zu messen. Im folgenden Artikel werden wir sehen, wie Sie Bilder auf Ihrer Website optimieren können, um deren Leistung zu verbessern.

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
