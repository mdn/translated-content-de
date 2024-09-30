---
title: Messung der Performance
slug: Learn/Performance/Measuring_performance
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

Die Messung der Performance liefert eine wichtige Kennzahl, um den Erfolg Ihrer App, Ihrer Website oder Ihres Webdienstes zu bewerten.

Zum Beispiel können Sie Performance-Metriken verwenden, um zu bestimmen, wie Ihre App im Vergleich zu einem Konkurrenten abschneidet oder um die Performance Ihrer App über verschiedene Versionen hinweg zu vergleichen. Ihre Metriken sollten für Ihre Nutzer, Ihre Website und Ihre Geschäftsziele relevant sein. Sie sollten konsistent gesammelt, gemessen und in einem Format analysiert werden, das nicht-technische Stakeholder konsumieren und verstehen können.

Dieser Artikel stellt Werkzeuge vor, mit denen Sie auf Web-Performance-Metriken zugreifen können, die zur Messung und Optimierung der Performance Ihrer Website verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Bereitstellung von Informationen über Web-Performance-Metriken, die Sie über verschiedene Web-Performance-APIs sammeln können, und Tools, die Sie verwenden können, um diese Daten zu visualisieren.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Performance-Tools

Es gibt mehrere verschiedene Werkzeuge, die Ihnen helfen können, die Performance zu messen und zu verbessern. Diese können im Allgemeinen in zwei Kategorien eingeteilt werden:

- Werkzeuge, die die Performance anzeigen oder messen, wie [PageSpeed Insights](https://pagespeed.web.dev/) oder der Firefox [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) und [Performance-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). Diese Werkzeuge zeigen Ihnen, wie schnell oder langsam Ihre Website lädt. Sie zeigen auch Bereiche an, die verbessert werden können, um Ihre Web-App zu optimieren.
- [Performance-APIs](/de/docs/Web/API/Performance_API), die Sie verwenden können, um benutzerdefinierte Performance-Tools zu erstellen.

## Allgemeine Performance-Berichterstattung Tools

Tools wie [PageSpeed Insights](https://pagespeed.web.dev/) können schnelle Performance-Messungen liefern. Sie können eine URL eingeben und in Sekunden einen Performance-Bericht erhalten. Der Bericht enthält Bewertungen, die angeben, wie Ihre Website auf mobilen Geräten und Desktops abschneidet. Dies ist ein guter Ausgangspunkt, um zu verstehen, was Sie gut machen und was verbessert werden könnte.

Zum Zeitpunkt des Schreibens sieht die Performance-Berichtsübersicht von MDN ähnlich wie folgt aus:

![Ein Screenshot des PageSpeed Insights Berichts für die Mozilla-Homepage.](pagespeed-insight-mozilla-homepage.png)

Ein Performance-Bericht enthält Informationen zu Dingen wie der Wartezeit, bevor _irgendetwas_ auf der Seite angezeigt wird, der Anzahl der zu ladenden Bytes, um eine Seite anzuzeigen, und vieles mehr. Er informiert auch darüber, ob die gemessenen Werte als gut oder schlecht angesehen werden.

[webpagetest.org](https://www.webpagetest.org/) ist ein weiteres Beispiel für ein Tool, das Ihre Website automatisch testet und wertvolle Metriken zurückgibt.

Sie können versuchen, Ihre Lieblingswebsite durch diese Tools zu laufen lassen und die Bewertungen sehen.

## Netzwerk-Monitor Tools

Moderne Browser verfügen über Tools, die Sie verwenden können, um geladene Seiten zu testen und deren Performance zu bestimmen; die meisten funktionieren ähnlich. Zum Beispiel liefert der Firefox [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) detaillierte Informationen über alle aus dem Netzwerk heruntergeladenen Assets, zusammen mit einem Zeitdiagramm, das zeigt, wie lange das Herunterladen jedes einzelnen gedauert hat.

![Firefox Netzwerk-Monitor, der eine Liste von geladenen Assets sowie Ladezeit pro Asset anzeigt](network-monitor.png)

Sehen Sie sich auch die [Chrome-Dokumentation zum Netzwerk-Monitor](https://developer.chrome.com/docs/devtools/network/) an.

## Performance-Monitor Tools

Sie können auch Browser-Performance-Tools wie den [Firefox Performance-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) verwenden, um die Performance der Benutzeroberfläche einer Web-App oder Website zu messen, während Sie verschiedene Aktionen ausführen. Dies zeigt an, welche Funktionen Ihre Web-App oder Website verlangsamen könnten.

![Entwicklertools Performance-Panel zeigt das Wasserfalldiagramm von Aufnahme #1 an.](perf-monitor.png)

Siehe auch die [Chrome-Dokumentation zum Performance-Tool](https://developer.chrome.com/docs/devtools/performance/).

## Performance-APIs

Beim Schreiben von Code für das Web stehen viele [Web-APIs](/de/docs/Web/API) zur Verfügung, um eigene Performance-Messungstools zu erstellen.

Sie können die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing) verwenden, um die clientseitige Web-Performance zu messen, einschließlich der benötigten Zeit zum Entladen der vorherigen Seite, der Dauer von Domain-Lookups, der gesamten Zeit, die für die Ausführung des Lade-Handlers des Fensters aufgewendet wird, und mehr. Sie können die API für Metriken im Zusammenhang mit allen Navigationsevents im folgenden Diagramm verwenden.

![Die verschiedenen Handler, die die Navigation Timing API verarbeiten kann, einschließlich der Navigation Timing API Metriken Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

Die [Performance API](/de/docs/Web/API/Performance_API), die Zugriff auf performancebezogene Informationen für die aktuelle Seite bietet, umfasst mehrere APIs, darunter die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing), die [User Timing API](/de/docs/Web/API/Performance_API/User_timing) und die [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing). Diese Schnittstellen ermöglichen die genaue Messung der Zeit, die für die Fertigstellung von JavaScript-Aufgaben benötigt wird.

Das [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) Objekt ist Teil der _Performance-Zeitleiste_. Ein _Performance-Eintrag_ kann direkt erstellt werden, indem an einem expliziten Punkt in einer Anwendung eine Performance _[`mark`](/de/docs/Web/API/PerformanceMark)_ oder _[`measure`](/de/docs/Web/API/PerformanceMeasure)_ (zum Beispiel durch Aufrufen der [`mark()`](/de/docs/Web/API/Performance/mark)-Methode) erstellt wird. Performance-Einträge werden auch auf indirekte Weise erstellt, wie zum Beispiel durch das Laden einer Ressource wie eines Bildes.

Die [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver) kann verwendet werden, um Performance-Messungsereignisse zu beobachten und Sie über neue [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) zu benachrichtigen, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden.

Obwohl dieser Artikel nicht auf die Verwendung dieser APIs eingeht, ist es hilfreich zu wissen, dass sie existieren. Weitere Beispiele für die Verwendung von Performance-Web-APIs finden Sie im Artikel zu [Navigation und Timings](/de/docs/Web/Performance/Navigation_and_resource_timings).

## Schlussfolgerung

Dieser Artikel gibt einen kurzen Überblick über einige Werkzeuge, die Ihnen helfen können, die Performance einer Web-App oder Website zu messen. Im folgenden Artikel werden wir sehen, wie Sie Bilder auf Ihrer Website optimieren können, um deren Performance zu verbessern.

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
