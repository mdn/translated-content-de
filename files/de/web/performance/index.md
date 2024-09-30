---
title: Web Performance
slug: Web/Performance
l10n:
  sourceCommit: 035dd5ef748061d1997c1c79f972781dd680dfa4
---

{{QuickLinksWithSubPages}}

Web-Performance bezieht sich auf die objektiven Messungen und die wahrgenommene Benutzererfahrung der Ladezeit und der Laufzeit. Web-Performance ist, wie lange eine Seite benötigt, um zu laden, interaktiv und reaktionsfähig zu werden, und wie flüssig der Inhalt während der Benutzerinteraktionen ist – ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Laden und zeigen sich Pop-ups schnell und animiert sie sich dabei flüssig? Die Web-Performance umfasst sowohl objektive Messungen wie die Ladezeit, Frames pro Sekunde und die Zeit bis zur Interaktivität, als auch subjektive Erlebnisse, wie lange es sich angefühlt hat, bis der Inhalt geladen war.

Je länger es dauert, bis eine Seite reagiert, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich so verfügbar und interaktiv wie möglich gemacht wird, während die längeren Teile des Erlebnisses asynchron geladen werden.

Es gibt Werkzeuge, APIs und bewährte Vorgehensweisen, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln diese in diesem Abschnitt:

## Wichtige Leistungs-Leitfäden

{{LandingPageListSubpages}}

## Anfängertutorials

Das MDN [Web-Performance-Lernbereich](/de/docs/Learn/Performance) enthält moderne, aktuelle Tutorials zu den Performance-Grundlagen. Beginnen Sie hier, wenn Sie neu im Bereich Performance sind:

- [Web-Performance: kurze Übersicht](/de/docs/Learn/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad zur Web-Performance. Starten Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Performance eigentlich ist – dazu gehören die Werkzeuge, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir über Performance nachdenken, und wie wir Performance in unseren Webentwicklungsworkflow integrieren können.
- [Wie nehmen Nutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Nutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit der Seite, das Verweilen, die Reaktionsfähigkeit auf Benutzerinteraktionen und die Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel besprechen wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie bewährte Methoden, um die Benutzerwahrnehmung zu verbessern, wenn nicht sogar die eigentlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten aus HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen verlangsamen und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklertools, bewährte Vorgehensweisen und schlechte Praktiken in Bezug auf Web-Performance. Hier führen wir viele dieser Funktionen auf Basisebene ein und bieten Links zu ausführlicheren Informationen, um die Performance für jedes Thema zu verbessern.
- [HTML-Leistungsmerkmale](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Reihenfolge der Quellen in Ihrem Markup können die Performance Ihrer Website beeinflussen. Indem Sie die Anzahl der DOM-Knoten minimieren und sicherstellen, dass die beste Reihenfolge und die besten Attribute für die Einbindung von Inhalten wie Styles, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel befasst sich detailliert damit, wie HTML verwendet werden kann, um maximale Performance sicherzustellen.
- [Multimedia: Bilder und Videos](/de/docs/Learn/Performance/Multimedia)
  - : Das niedrig hängende Obst der Web-Performance ist oft die Medienoptimierung. Es ist möglich, basierend auf den Fähigkeiten, der Größe und der Pixeldichte des User-Agents unterschiedliche Mediendateien zu servieren. Zusätzliche Tipps wie das Entfernen von Audiospuren aus Hintergrundvideos können die Performance noch weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen von Video-, Audio- und Bildinhalten auf die Performance und die Methoden, um sicherzustellen, dass diese Auswirkungen so gering wie möglich sind.
- [CSS-Leistungsmerkmale](/de/docs/Learn/Performance/CSS)
  - : Obwohl CSS eine weniger wichtige Optimierungsfokus für verbesserte Performance sein kann, gibt es einige CSS-Eigenschaften, die Performance mehr beeinflussen als andere. In diesem Artikel werfen wir einen Blick auf einige CSS-Eigenschaften, die die Performance beeinflussen, und schlagen Möglichkeiten vor, wie Stile gehandhabt werden können, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [JavaScript-Performance bewährte Praktiken](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann, wenn richtig verwendet, interaktive und mitreißende Web-Erfahrungen ermöglichen – oder es kann die Downloadzeit, die Renderzeit, die App-Performance, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel beschreibt einige JavaScript-Praktiken, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so leistungsfähig wie möglich sind.

## Verwendung von Performance-APIs

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : [Ressourcen laden und Timing](/de/docs/Web/API/Performance_API/Resource_timing) des Ladens dieser Ressourcen, einschließlich der Verwaltung des Ressourcenpuffers und der Bewältigung von [CORS](/de/docs/Web/HTTP/CORS).
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark"- und "measure"-Eingangstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing), die Teil der Performance-Zeitleiste des Browsers sind.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Lernen Sie, die Sichtbarkeit von Elementen mit der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) zu messen und asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.

## Weitere Dokumentationen

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen zur Nutzung und zum Verständnis der Leistungsfunktionen in Ihren Entwicklertools, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die Performance von Apps mit dem integrierten Profiler von Firefox profilieren.

## Glossarbegriffe

- [Beacon](/de/docs/Glossary/Beacon)
- [Brotli-Komprimierung](/de/docs/Glossary/Brotli_compression)
- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [Code Splitting](/de/docs/Glossary/Code_splitting)
- [CSSOM](/de/docs/Glossary/CSSOM)
- [Domain Sharding](/de/docs/Glossary/Domain_sharding)
- [Effektiver Verbindungstyp](/de/docs/Glossary/Effective_connection_type)
- [First Contentful Paint](/de/docs/Glossary/First_contentful_paint)
- [First CPU Idle](/de/docs/Glossary/First_CPU_idle)
- [First Input Delay](/de/docs/Glossary/First_input_delay)
- [First Meaningful Paint](/de/docs/Glossary/First_meaningful_paint)
- [First Paint](/de/docs/Glossary/First_paint)
- [HTTP](/de/docs/Glossary/HTTP)
- [HTTP/2](/de/docs/Glossary/HTTP_2)
- [Jank](/de/docs/Glossary/Jank)
- [Latenz](/de/docs/Glossary/Latency)
- [Lazy Load](/de/docs/Glossary/Lazy_load)
- [Lang Aufgabe](/de/docs/Glossary/Long_task)
- [Lossless Compression](/de/docs/Glossary/Lossless_compression)
- [Lossy Compression](/de/docs/Glossary/Lossy_compression)
- [Hauptthread](/de/docs/Glossary/Main_thread)
- [Minification](/de/docs/Glossary/Minification)
- [Netzwerk-Drosselung](/de/docs/Glossary/Network_throttling)
- [Paket](/de/docs/Glossary/Packet)
- [Ladezeit der Seite](/de/docs/Glossary/Page_load_time)
- [Page Prediction](/de/docs/Glossary/Page_prediction)
- [Parsen](/de/docs/Glossary/Parse)
- [Wahrgenommene Leistung](/de/docs/Glossary/Perceived_performance)
- [Prefetch](/de/docs/Glossary/Prefetch)
- [Prerendern](/de/docs/Glossary/Prerender)
- [QUIC](/de/docs/Glossary/QUIC)
- [RAIL](/de/docs/Glossary/RAIL)
- [Real User Monitoring](/de/docs/Glossary/Real_User_Monitoring)
- [Resource Timing](/de/docs/Glossary/Resource_Timing)
- [Round Trip Time (RTT)](/de/docs/Glossary/Round_Trip_Time)
- [Server Timing](/de/docs/Glossary/Server_Timing)
- [Speculative Parsing](/de/docs/Glossary/Speculative_parsing)
- [Speed Index](/de/docs/Glossary/Speed_index)
- [SSL](/de/docs/Glossary/SSL)
- [Synthetische Überwachung](/de/docs/Glossary/Synthetic_monitoring)
- [TCP-Handschlag](/de/docs/Glossary/TCP_handshake)
- [Langsamer Start bei TCP](/de/docs/Glossary/TCP_slow_start)
- [Time to First Byte](/de/docs/Glossary/Time_to_first_byte)
- [Time to Interactive](/de/docs/Glossary/Time_to_interactive)
- [TLS](/de/docs/Glossary/TLS)
- [Transmission Control Protocol (TCP)](/de/docs/Glossary/TCP)
- [Tree Shaking](/de/docs/Glossary/Tree_shaking)
- [Web-Performance](/de/docs/Glossary/Web_performance)

## Siehe auch

HTML

- [Das `<picture>`-Element](/de/docs/Web/HTML/Element/picture)
- [Das `<video>`-Element](/de/docs/Web/HTML/Element/video)
- [Das `<source>`-Element](/de/docs/Web/HTML/Element/source)
- [Das `<img>`-Attribut `srcset`](/de/docs/Web/HTML/Element/img#attributes)

  - [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Inhalte mit `rel="preload"` vorkladen](/de/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/de/docs/Web/CSS/will-change)
- GPU vs. CPU
- Layout messen
- Best Practices für das Laden von Schriftarten

JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- [Garbage Collection](/de/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

APIs

- [Performance API](/de/docs/Web/API/Performance_API)
- [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/de/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- [Page Visibility](/de/docs/Web/API/Page_Visibility_API)
- [Kooperatives Scheduling von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/de/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), [prefetch](/de/docs/Glossary/Prefetch) und Prerender
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/de/docs/Web/API/PerformanceServerTiming)

Header

- [Content-encoding](/de/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/de/docs/Glossary/gzip_compression)
- Client Hints

Werkzeuge

- [Performance in den Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

Zusätzliche Metriken

- Speed Index und Perceptual Speed Index

Best Practices

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/de/docs/Web/API/Web_Workers_API)

- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- Content-Delivery-Netzwerke (CDN)
