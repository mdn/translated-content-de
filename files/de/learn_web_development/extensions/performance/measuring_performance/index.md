---
title: Leistungsmessung
slug: Learn_web_development/Extensions/Performance/Measuring_performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}

Die Leistungsmessung liefert einen wichtigen Indikator, der Ihnen hilft, den Erfolg Ihrer App, Website oder Ihres Webdienstes zu bewerten.

Zum Beispiel können Sie Leistungsmetriken verwenden, um zu bestimmen, wie Ihre App im Vergleich zu einem Wettbewerber abschneidet oder um die Leistung Ihrer App über verschiedene Versionen hinweg zu vergleichen. Ihre Metriken sollten für Ihre Benutzer, Ihre Website und Ihre Geschäftsziele relevant sein. Sie sollten konsistent erfasst, gemessen und in einem Format analysiert werden, das auch für nicht-technische Stakeholder verständlich ist.

Dieser Artikel stellt Werkzeuge vor, die Sie verwenden können, um auf Webleistungsmetriken zuzugreifen, die zur Messung und Optimierung der Leistung Ihrer Website verwendet werden können.

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
          Bereitstellung von Informationen über Webleistungsmetriken, die Sie
          über verschiedene Webleistungs-APIs und Tools sammeln können, mit denen Sie diese Daten visualisieren können.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Leistungswerkzeuge

Es gibt mehrere verschiedene Werkzeuge, mit denen Sie Leistung messen und verbessern können. Diese können im Allgemeinen in zwei Kategorien eingeteilt werden:

- Werkzeuge, die Leistung anzeigen oder messen, wie [PageSpeed Insights](https://pagespeed.web.dev/) oder der Firefox [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) und [Leistungsmonitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). Diese Werkzeuge zeigen, wie schnell oder langsam Ihre Webseite lädt. Sie weisen auch auf Bereiche hin, die verbessert werden können, um Ihre Web-App zu optimieren.
- [Performance APIs](/de/docs/Web/API/Performance_API), die Sie verwenden können, um benutzerdefinierte Leistungswerkzeuge zu erstellen.

## Allgemeine Werkzeuge zur Leistungsberichterstattung

Werkzeuge wie [PageSpeed Insights](https://pagespeed.web.dev/) können schnelle Leistungsbewertungen liefern. Sie können eine URL eingeben und in Sekunden einen Leistungsbericht erhalten. Der Bericht enthält Bewertungen, die zeigen, wie Ihre Webseite auf Mobilgeräten und Desktops abschneidet. Dies ist ein guter Ausgangspunkt, um zu verstehen, was Sie gut machen und was verbessert werden könnte.

Zum Zeitpunkt des Schreibens sieht die Leistungszusammenfassung von MDN ähnlich aus wie im Folgenden:

![Ein Screenshot des PageSpeed Insights-Berichts für die Mozilla-Homepage.](pagespeed-insight-mozilla-homepage.png)

Ein Leistungsbericht enthält Informationen darüber, wie lange ein Benutzer warten muss, bevor _irgendetwas_ auf der Seite angezeigt wird, wie viele Bytes heruntergeladen werden müssen, um eine Seite anzuzeigen, und vieles mehr. Er informiert Sie auch darüber, ob die gemessenen Werte als gut oder schlecht gelten.

[webpagetest.org](https://www.webpagetest.org/) ist ein weiteres Beispiel für ein Tool, das Ihre Website automatisch testet und wertvolle Metriken liefert.

Sie können versuchen, Ihre Lieblingswebsite mit diesen Werkzeugen zu testen und die Bewertungen zu sehen.

## Netzwerkmonitorwerkzeuge

Moderne Browser verfügen über Werkzeuge, mit denen Sie geladene Seiten analysieren können, um festzustellen, wie sie funktionieren; die meisten funktionieren ähnlich. Zum Beispiel liefert der Firefox [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) detaillierte Informationen über alle vom Netzwerk heruntergeladenen Assets, zusammen mit einem Wasserfall-Diagramm, das zeigt, wie lange das Herunterladen jedes Assets gedauert hat.

![Firefox-Netzwerkmonitor zeigt eine Liste von geladenen Assets sowie die Ladezeit pro Asset](network-monitor.png)

Sie sollten sich auch die [Chrome-Network-Monitor-Dokumentation](https://developer.chrome.com/docs/devtools/network/) ansehen.

## Leistungsmonitorwerkzeuge

Sie können auch Browser-Leistungswerkzeuge wie den [Firefox-Leistungsmonitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) verwenden, um die Leistung der Benutzeroberfläche einer Web-App oder Website zu messen, während Sie verschiedene Aktionen durchführen. Dies zeigt Funktionen an, die Ihre Web-App oder Website verlangsamen könnten.

![Entwicklerwerkzeuge Leistungsbereich zeigt den Wasserfall der Aufnahme #1.](perf-monitor.png)

Siehe auch die [Chrome-Leistungswerkzeugdokumentation](https://developer.chrome.com/docs/devtools/performance/).

## Performance APIs

Beim Schreiben von Code für das Web stehen viele [Web APIs](/de/docs/Web/API) zur Verfügung, um eigene Leistungsmesstools zu erstellen.

Sie können die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing) verwenden, um die clientseitige Webleistung zu messen, einschließlich der Zeit, die benötigt wird, um die vorherige Seite zu entladen, der Dauer von Domain-Lookups, der gesamten Ausführungszeit des `window load`-Handlers und mehr. Sie können die API für Metriken in Bezug auf alle Navigationsereignisse im untenstehenden Diagramm verwenden.

![Die verschiedenen Handler, die die Navigation Timing API behandeln kann, einschließlich Navigation Timing API-Metriken Aufforderung zum Entladen Umleitung Entladen App-Cache DNS TCP Anfrage Antwort Verarbeitung onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

Die [Performance API](/de/docs/Web/API/Performance_API), die Zugang zu leistungsbezogenen Informationen für die aktuelle Seite bietet, umfasst mehrere APIs, darunter die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing), die [User Timing API](/de/docs/Web/API/Performance_API/User_timing) und die [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing). Diese Schnittstellen ermöglichen die genaue Messung der Zeit, die JavaScript-Aufgaben benötigen, um abgeschlossen zu werden.

Das [PerformanceEntry](/de/docs/Web/API/PerformanceEntry) Objekt ist Teil der _Performance-Zeitleiste_. Ein _Performance-Eintrag_ kann direkt erstellt werden, indem ein Leistungs-_[`mark`](/de/docs/Web/API/PerformanceMark)_ oder _[`measure`](/de/docs/Web/API/PerformanceMeasure)_ (zum Beispiel durch Aufrufen der [`mark()`](/de/docs/Web/API/Performance/mark)-Methode) an einem expliziten Punkt in einer Anwendung gesetzt wird. Performance-Einträge werden auch auf indirekte Weise erstellt, wie das Laden einer Ressource wie eines Bildes.

Die [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver) kann verwendet werden, um Leistungsmesereignisse zu beobachten und Sie über neue [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) zu benachrichtigen, sobald diese in der Performance-Zeitleiste des Browsers aufgezeichnet werden.

Auch wenn dieser Artikel nicht auf die Verwendung dieser APIs eingeht, ist es hilfreich, zu wissen, dass sie existieren. Verweisen Sie auf den Artikel [Navigation und Timings](/de/docs/Web/Performance/Navigation_and_resource_timings) für weitere Beispiele zur Nutzung von Performance-Web-APIs.

## Fazit

Dieser Artikel bietet einen kurzen Überblick über einige Werkzeuge, die Ihnen helfen können, die Leistung einer Web-App oder Website zu messen. Im folgenden Artikel werden wir sehen, wie Sie Bilder auf Ihrer Website optimieren können, um ihre Leistung zu verbessern.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}
