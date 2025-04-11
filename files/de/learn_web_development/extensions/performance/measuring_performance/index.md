---
title: Leistungsmessung
slug: Learn_web_development/Extensions/Performance/Measuring_performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}

Die Messung der Leistung bietet eine wichtige Metrik, die Ihnen hilft, den Erfolg Ihrer App, Ihrer Website oder Ihres Webdienstes zu bewerten.

Sie können beispielsweise Leistungsmetriken nutzen, um zu bestimmen, wie Ihre App im Vergleich zu einem Mitbewerber abschneidet oder um die Leistung Ihrer App über verschiedene Versionen hinweg zu vergleichen. Ihre Metriken sollten für Ihre Nutzer, Ihre Website und Ihre Unternehmensziele relevant sein. Sie sollten konsistent gesammelt, gemessen und in einem Format analysiert werden, das auch von nicht-technischen Stakeholdern verstanden werden kann.

Dieser Artikel stellt Werkzeuge vor, die Sie nutzen können, um Web-Leistungsmetriken zu ermitteln, die zur Messung und Optimierung der Leistung Ihrer Website verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Bereitstellung von Informationen über Web-Leistungsmetriken, die Sie
          über verschiedene Web-Performance-APIs erfassen und mit Werkzeugen
          visualisieren können, die Sie zur Verfügung haben.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Performance-Tools

Es stehen mehrere verschiedene Werkzeuge zur Verfügung, die Ihnen helfen, die Leistung zu messen und zu verbessern. Diese können im Allgemeinen in zwei Kategorien eingeteilt werden:

- Werkzeuge, die die Leistung anzeigen oder messen, wie [PageSpeed Insights](https://pagespeed.web.dev/) oder der Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) und der [Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). Diese Werkzeuge zeigen Ihnen, wie schnell oder langsam Ihre Website lädt. Sie weisen auch auf Bereiche hin, die verbessert werden können, um Ihre Web-App zu optimieren.
- [Performance-APIs](/de/docs/Web/API/Performance_API), mit denen Sie benutzerdefinierte Performance-Tools erstellen können.

## Allgemeine Performance-Reporting-Tools

Tools wie [PageSpeed Insights](https://pagespeed.web.dev/) können schnelle Leistungsbewertungen liefern. Sie können eine URL eingeben und erhalten in Sekundenschnelle einen Leistungsbericht. Der Bericht enthält Bewertungen, die anzeigen, wie Ihre Website für Mobilgeräte und Desktop funktioniert. Dies ist ein guter Anfang, um zu verstehen, was Sie gut machen und was verbessert werden könnte.

Zum Zeitpunkt des Schreibens sieht die Leistungszusammenfassung von MDN folgendermaßen aus:

![Ein Screenshot des PageSpeed Insights-Berichts für die Mozilla-Startseite.](pagespeed-insight-mozilla-homepage.png)

Ein Leistungsbericht enthält Informationen über Dinge wie die Dauer, die ein Benutzer warten muss, bevor _irgendetwas_ auf der Seite angezeigt wird, wie viele Bytes heruntergeladen werden müssen, um eine Seite anzuzeigen, und vieles mehr. Er zeigt auch, ob die gemessenen Werte als gut oder schlecht gelten.

[webpagetest.org](https://www.webpagetest.org/) ist ein weiteres Beispiel für ein Tool, das Ihre Seite automatisch testet und wertvolle Metriken liefert.

Sie können versuchen, Ihre Lieblingswebsite durch diese Tools zu testen und die Bewertungen zu sehen.

## Netzwerk-Monitoring-Tools

Moderne Browser verfügen über Tools, die Sie für geladene Seiten verwenden können, um deren Leistung zu bestimmen; die meisten funktionieren ähnlich. Der Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) liefert beispielsweise detaillierte Informationen zu allen vom Netzwerk heruntergeladenen Ressourcen, zusammen mit einem Wasserfallzeitdiagramm, das zeigt, wie lange der Download jeder einzelnen dauerte.

![Firefox Netzwerk-Monitor, der eine Liste der geladenen Ressourcen sowie die Ladezeit pro Ressource zeigt](network-monitor.png)

Sie sollten auch die [Chrome Network Monitor-Dokumentation](https://developer.chrome.com/docs/devtools/network/) überprüfen.

## Performance-Monitoring-Tools

Sie können auch Performance-Tools des Browsers wie den [Firefox Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) verwenden, um die Leistung der Benutzeroberfläche einer Webanwendung oder Website zu messen, während Sie verschiedene Aktionen ausführen. Dies zeigt die Features an, die Ihre Web-App oder Website verlangsamen könnten.

![Entwicklerwerkzeuge Performance-Panel, das den Wasserfall von Aufnahme #1 zeigt.](perf-monitor.png)

Siehe auch [Chrome's Performance-Tool-Dokumentation](https://developer.chrome.com/docs/devtools/performance/).

## Performance-APIs

Beim Schreiben von Code für das Web stehen viele [Web APIs](/de/docs/Web/API) zur Verfügung, um Ihre eigenen Performance-Messwerkzeuge zu erstellen.

Sie können die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing) verwenden, um die clientseitige Web-Performance zu messen, einschließlich der Zeit, die zum Entladen der vorherigen Seite benötigt wird, wie lange Domain-Lookups dauern, der Gesamtzeit, die für die Ausführung des `window`-Ladehandlers benötigt wird, und mehr. Sie können die API für Metriken im Zusammenhang mit allen Navigationsereignissen im unten stehenden Diagramm verwenden.

![Die verschiedenen Handler, die die Navigation Timing-API handhaben kann, einschließlich Navigation Timing-API-Metriken Aufforderung zum Entladen, Weiterleitung, Entladen App-Cache DNS TCP Anforderung Antwort Verarbeitung onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

Die [Performance API](/de/docs/Web/API/Performance_API), die den Zugriff auf leistungsbezogene Informationen für die aktuelle Seite bietet, umfasst mehrere APIs, darunter die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing), die [User Timing API](/de/docs/Web/API/Performance_API/User_timing) und die [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing). Diese Schnittstellen ermöglichen die genaue Messung der Zeit, die JavaScript-Aufgaben benötigen, um abzuschließen.

Das [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekt ist Teil der _Performance-Timeline_. Ein _Performance-Eintrag_ kann direkt erstellt werden, indem eine Performance- _[`mark`](/de/docs/Web/API/PerformanceMark)_ oder _[`measure`](/de/docs/Web/API/PerformanceMeasure)_ (zum Beispiel durch Aufruf der [`mark()`](/de/docs/Web/API/Performance/mark)-Methode) zu einem expliziten Punkt in einer Anwendung erstellt wird. Performance-Einträge werden auch auf indirekte Weise erstellt, etwa durch das Laden einer Ressource wie eines Bildes.

Die [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver) kann verwendet werden, um Performance-Messereignisse zu beobachten und Sie über neue [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) zu benachrichtigen, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden.

Dieser Artikel erklärt zwar nicht die Nutzung dieser APIs, aber es ist hilfreich zu wissen, dass sie existieren. Lesen Sie den Artikel [Navigation und Timings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings) für weitere Beispiele zur Verwendung von Performance-Web-APIs.

## Fazit

Dieser Artikel gibt einen kurzen Überblick über einige Tools, die Ihnen helfen können, die Leistung einer Webanwendung oder Website zu messen. Im nächsten Artikel werden wir sehen, wie Sie Bilder auf Ihrer Website optimieren können, um deren Leistung zu verbessern.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}
