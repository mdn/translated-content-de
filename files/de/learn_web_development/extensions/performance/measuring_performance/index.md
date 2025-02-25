---
title: Leistung messen
slug: Learn_web_development/Extensions/Performance/Measuring_performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}

Das Messen der Leistung liefert eine wichtige Kennzahl, die Ihnen hilft, den Erfolg Ihrer App, Ihrer Website oder Ihres Webdienstes zu bewerten.

Zum Beispiel können Sie Leistungskennzahlen verwenden, um zu bestimmen, wie Ihre App im Vergleich zu einem Wettbewerber abschneidet oder um die Leistung Ihrer App über verschiedene Versionen hinweg zu vergleichen. Ihre Metriken sollten für Ihre Benutzer, Ihre Website und Ihre Geschäftsziele relevant sein. Sie sollten konsistent gesammelt, gemessen und in einem Format analysiert werden, das auch nicht-technische Interessengruppen verstehen können.

Dieser Artikel stellt Werkzeuge vor, die Sie verwenden können, um Webleistungsmetriken abzurufen, die genutzt werden können, um die Leistung Ihrer Website zu messen und zu optimieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Bereitstellung von Informationen über Webleistungsmetriken, die Sie über verschiedene Webleistungs-APIs sammeln können, sowie über Werkzeuge, die Sie zur Visualisierung dieser Daten nutzen können.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Leistungswerkzeuge

Es gibt mehrere verschiedene Werkzeuge, die Ihnen helfen können, die Leistung zu messen und zu verbessern. Diese lassen sich allgemein in zwei Kategorien einteilen:

- Werkzeuge, die Leistung anzeigen oder messen, wie [PageSpeed Insights](https://pagespeed.web.dev/) oder der Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) und [Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html). Diese Werkzeuge zeigen Ihnen, wie schnell oder langsam Ihre Website geladen wird. Sie weisen auch auf Bereiche hin, die verbessert werden können, um Ihre Web-App zu optimieren.
- [Leistungs-APIs](/de/docs/Web/API/Performance_API), die Sie zum Erstellen eigener Leistungswerkzeuge verwenden können.

## Allgemeine Leistungsberichtswerkzeuge

Werkzeuge wie [PageSpeed Insights](https://pagespeed.web.dev/) können schnelle Leistungsbewertungen liefern. Sie können eine URL eingeben und in Sekundenschnelle einen Leistungsbericht erhalten. Der Bericht enthält Bewertungen, die anzeigen, wie Ihre Website für Mobilgeräte und Desktops abschneidet. Dies ist ein guter Ausgangspunkt, um zu verstehen, was Sie gut machen und was verbessert werden könnte.

Zum Zeitpunkt des Schreibens sieht die Leistungsberichterstattung von MDN in etwa wie folgt aus:

![Ein Screenshot des PageSpeed Insights-Berichts für die Mozilla-Homepage.](pagespeed-insight-mozilla-homepage.png)

Ein Leistungsbericht enthält Informationen darüber, wie lange ein Benutzer warten muss, bevor _irgendetwas_ auf der Seite angezeigt wird, wie viele Bytes heruntergeladen werden müssen, um eine Seite darzustellen, und vieles mehr. Er zeigt auch an, ob die gemessenen Werte als gut oder schlecht betrachtet werden.

[webpagetest.org](https://www.webpagetest.org/) ist ein weiteres Beispiel für ein Werkzeug, das Ihre Website automatisch testet und wertvolle Metriken zurückgibt.

Sie können versuchen, Ihre Lieblingswebsite durch diese Werkzeuge laufen zu lassen und die Bewertungen zu sehen.

## Netzwerküberwachungstools

Moderne Browser bieten Werkzeuge an, die Sie verwenden können, um geladene Seiten zu analysieren und ihre Leistung zu bestimmen; die meisten von ihnen funktionieren ähnlich. Zum Beispiel liefert der Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) detaillierte Informationen zu allen aus dem Netzwerk heruntergeladenen Assets sowie ein Wasserfall-Zeitdiagramm, das zeigt, wie lange jedes Asset zum Herunterladen benötigt hat.

![Firefox-Netzwerkmonitor zeigt eine Liste von geladenen Assets sowie die Ladezeit pro Asset](network-monitor.png)

Sie sollten auch die [Chrome-Dokumentation für den Netzwerkmonitor](https://developer.chrome.com/docs/devtools/network/) ansehen.

## Leistungsüberwachungstools

Sie können auch Browser-Leistungswerkzeuge wie den [Firefox Performance Monitor](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) verwenden, um die Leistung der Benutzeroberfläche einer Web-App oder einer Website zu messen, während Sie verschiedene Aktionen durchführen. Dies zeigt an, welche Funktionen Ihre Web-App oder Website verlangsamen könnten.

![Entwicklungstools Leistungsbereich zeigt den Wasserfall von Aufnahme #1 an.](perf-monitor.png)

Siehe auch die [Chrome-Dokumentation zum Leistungstool](https://developer.chrome.com/docs/devtools/performance/).

## Leistungs-APIs

Beim Schreiben von Code für das Web sind viele [Web-APIs](/de/docs/Web/API) verfügbar, um eigene Leistungswerkzeuge zu erstellen.

Sie können die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing) verwenden, um die clientseitige Webleistung zu messen, einschließlich der benötigten Zeit, um die vorherige Seite zu entladen, wie lange Domainabfragen dauern, der insgesamt verbrauchten Zeit zur Ausführung des Lade-Handlers des Fensters und mehr. Sie können die API für Metriken im Zusammenhang mit allen Navigationsevents im untenstehenden Diagramm verwenden.

![Die verschiedenen Handler, die die Navigation Timing API verarbeiten kann, einschließlich Metriken der Navigation Timing API, Abfrage für Entladungen, Umleitung, Entladen, App-Cache, DNS, TCP, Anfrage, Antwort, Verarbeitung, onLoad, navigationStart, redirectStart, redirectEnd, fetchStart, domainLookupEnd, domainLookupStart, connectStart (secureConnectionStart), connectEnd, requestStart, responseStart, responseEnd, unloadStart, unloadEnd, domLoading, domInteractive, domContentLoaded, domComplete, loadEventStart, loadEventEnd](navigationtimingapi.jpg)

Die [Performance API](/de/docs/Web/API/Performance_API), die Zugriff auf leistungsbezogene Informationen für die aktuelle Seite bietet, umfasst mehrere APIs, darunter die [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing), die [User Timing API](/de/docs/Web/API/Performance_API/User_timing), und die [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing). Diese Schnittstellen ermöglichen die genaue Messung der Zeit, die JavaScript-Aufgaben zur Fertigstellung benötigen.

Das [PerformanceEntry](/de/docs/Web/API/PerformanceEntry)-Objekt ist Teil der _Performance-Zeitachse_. Ein _Performance-Eintrag_ kann direkt erstellt werden, indem ein Performance _[`mark`](/de/docs/Web/API/PerformanceMark)_ oder _[`measure`](/de/docs/Web/API/PerformanceMeasure)_ (zum Beispiel durch Aufruf der [`mark()`](/de/docs/Web/API/Performance/mark)-Methode) an einem bestimmten Punkt in einer Anwendung gemacht wird. Performance-Einträge werden auch auf indirekte Weise erstellt, wie beim Laden einer Ressource wie eines Bildes.

Die [PerformanceObserver API](/de/docs/Web/API/PerformanceObserver) kann verwendet werden, um Leistungsereignisse zu beobachten und Sie über neue [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) zu informieren, während sie in der Leistungszeitachse des Browsers aufgezeichnet werden.

Obwohl dieser Artikel nicht auf die Verwendung dieser APIs eingeht, ist es hilfreich zu wissen, dass sie existieren. Weitere Beispiele zur Verwendung von Web-Performance-APIs finden Sie im Artikel [Navigation und Timings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings).

## Fazit

Dieser Artikel gibt einen kurzen Überblick über einige Werkzeuge, die Ihnen helfen können, die Leistung einer Web-App oder Website zu messen. Im folgenden Artikel werden wir sehen, wie Sie Bilder auf Ihrer Website optimieren können, um deren Leistung zu verbessern.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance/Multimedia", "Learn_web_development/Extensions/Performance")}}
