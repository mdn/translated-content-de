---
title: Leistung messen
slug: Learn/Performance/Measuring_performance
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

Das Messen der Leistung bietet eine wichtige Kennzahl, die Ihnen hilft, den Erfolg Ihrer App, Website oder Ihres Webdienstes zu beurteilen.

Zum Beispiel können Sie Leistungskennzahlen nutzen, um zu bestimmen, wie Ihre App im Vergleich zu einem Mitbewerber abschneidet oder die Leistung Ihrer App über verschiedene Versionen hinweg vergleichen. Ihre Kennzahlen sollten für Ihre Benutzer, Ihre Website und Ihre geschäftlichen Ziele relevant sein. Sie sollten kontinuierlich gesammelt, gemessen und in einem Format analysiert werden, das auch nicht-technische Beteiligte verstehen können.

Dieser Artikel stellt Tools vor, die Sie verwenden können, um Leistungskennzahlen des Webs zu erfassen, die zur Messung und Optimierung der Leistung Ihrer Website verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Bereitstellung von Informationen zu Leistungskennzahlen des Webs, die Sie über verschiedene Web-Performance-APIs erfassen können, und Tools, mit denen Sie diese Daten visualisieren können.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Performance-Tools

Es gibt verschiedene Tools, die Ihnen helfen, Leistung zu messen und zu verbessern. Diese können im Allgemeinen in zwei Kategorien eingeteilt werden:

- Tools, die Leistung anzeigen oder messen, wie [PageSpeed Insights](https://pagespeed.web.dev/) oder der Firefox [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) und [Leistungsmonitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). Diese Tools zeigen Ihnen, wie schnell oder langsam Ihre Website lädt. Sie zeigen auch Bereiche auf, die verbessert werden können, um Ihre Web-App zu optimieren.
- [Performance-APIs](/de/docs/Web/API/Performance_API), die Sie zur Erstellung benutzerdefinierter Performance-Tools verwenden können.

## Allgemeine Performance-Bericht-Tools

Tools wie [PageSpeed Insights](https://pagespeed.web.dev/) bieten schnelle Leistungsbewertungen. Sie können eine URL eingeben und erhalten innerhalb von Sekunden einen Leistungsbericht. Der Bericht enthält Bewertungen, die zeigen, wie Ihre Website auf mobilen Geräten und Desktop-Computern abschneidet. Dies ist ein guter Ausgangspunkt, um zu verstehen, was gut funktioniert und was verbessert werden könnte.

Zum Zeitpunkt des Schreibens sieht die Leistungszusammenfassung von MDN etwa wie folgt aus:

![Ein Screenshot des PageSpeed Insights-Berichts für die Mozilla-Homepage.](pagespeed-insight-mozilla-homepage.png)

Ein Leistungsbericht enthält Informationen darüber, wie lange ein Benutzer warten muss, bis _irgendetwas_ auf der Seite angezeigt wird, wie viele Bytes heruntergeladen werden müssen, um eine Seite anzuzeigen, und vieles mehr. Es informiert Sie auch darüber, ob die gemessenen Werte als gut oder schlecht angesehen werden.

[webpagetest.org](https://www.webpagetest.org/) ist ein weiteres Beispiel für ein Tool, das Ihre Website automatisch testet und wertvolle Metriken zurückgibt.

Versuchen Sie, Ihre Lieblingswebsite mit diesen Tools zu analysieren und die Bewertungen zu überprüfen.

## Netzwerkmonitor-Tools

Moderne Browser bieten Tools an, die Sie auf geladene Seiten anwenden können, um deren Leistung zu bestimmen; die meisten funktionieren ähnlich. Zum Beispiel liefert der Firefox [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) detaillierte Informationen über alle aus dem Netzwerk heruntergeladenen Assets sowie ein Wasserfalldiagramm, das zeigt, wie lange jedes davon zum Herunterladen benötigt hat.

![Firefox-Netzwerkmonitor zeigt eine Liste von geladenen Assets sowie die Ladezeit pro Asset](network-monitor.png)

Sie sollten sich auch die [Chrome Netzwerkmonitor-Dokumentation](https://developer.chrome.com/docs/devtools/network/) ansehen.

## Leistungsmonitor-Tools

Sie können auch Browser-Leistungstools wie den [Firefox Leistungsmonitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) verwenden, um die Leistung der Benutzeroberfläche einer Web-App oder Website zu messen, während Sie verschiedene Aktionen ausführen. Dies zeigt die Funktionen an, die Ihre Web-App oder Website verlangsamen könnten.

![Entwickler-Tools-Leistungspanel zeigt den Wasserfall der Aufnahme #1.](perf-monitor.png)

Siehe auch [Chrome Leistungs-Tool-Dokumentation](https://developer.chrome.com/docs/devtools/performance/).

## Performance-APIs

Beim Schreiben von Code für das Web stehen viele [Web-APIs](/de/docs/Web/API) zur Verfügung, um eigene Leistungsmessungs-Tools zu erstellen.

Sie können die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing) verwenden, um die client-seitige Leistung des Webs zu messen, einschließlich der Zeit, die benötigt wird, um die vorherige Seite zu entladen, wie lange Domain-Lookups dauern, die Gesamtzeit, die für die Ausführung des Load-Handlers des Fensters benötigt wird, und mehr. Sie können die API für Metriken im Zusammenhang mit allen Navigationsereignissen im untenstehenden Diagramm verwenden.

![Die verschiedenen Handler, die von der Navigation Timing API verwaltet werden können, einschließlich Navigation Timing API Metriken Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

Die [Performance API](/de/docs/Web/API/Performance_API), die Zugang zu leistungsbezogenen Informationen für die aktuelle Seite bietet, umfasst mehrere APIs, darunter die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing), die [User Timing API](/de/docs/Web/API/Performance_API/User_timing) und die [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing). Diese Schnittstellen ermöglichen die genaue Messung der Zeit, die JavaScript-Aufgaben zur Ausführung benötigen.

Das Objekt [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) ist Teil der _Performance-Zeitleiste_. Ein _Performance-Eintrag_ kann direkt erstellt werden, indem eine Leistungsmarkierung (_{{domxref("PerformanceMark","mark")}}_) oder eine Messung (_{{domxref("PerformanceMeasure","measure")}}_) erstellt wird (zum Beispiel durch Aufruf der Methode {{domxref("Performance.mark","mark()")}}) zu einem expliziten Zeitpunkt in einer Anwendung. Performance-Einträge werden auch auf indirekte Weise erstellt, wie zum Beispiel beim Laden einer Ressource wie eines Bildes.

Die [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver) kann verwendet werden, um Leistungsmesseinträge zu beobachten und Sie über neue [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) zu informieren, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden.

Während dieser Artikel nicht darauf eingeht, wie diese APIs genutzt werden, ist es dennoch hilfreich zu wissen, dass sie existieren. Weitere Beispiele zur Nutzung von Performance-Web-APIs finden Sie im Artikel [Navigation and timings](/de/docs/Web/Performance/Navigation_and_resource_timings).

## Fazit

Dieser Artikel gibt einen kurzen Überblick über einige Tools, die Ihnen helfen können, die Leistung einer Web-App oder Website zu messen. Im folgenden Artikel werden wir sehen, wie Sie Bilder auf Ihrer Website optimieren können, um ihre Leistung zu verbessern.

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
