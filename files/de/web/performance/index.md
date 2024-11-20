---
title: Web-Performance
slug: Web/Performance
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{QuickLinksWithSubPages}}

Web-Performance umfasst die objektiven Messungen und die wahrgenommene Benutzererfahrung hinsichtlich der Ladezeiten und Laufzeiten. Web-Performance bezieht sich darauf, wie lange eine Website zum Laden, zum interaktiv und responsiv Werden benötigt und wie flüssig die Inhalte während der Benutzerinteraktionen sind - ist das Scrollen flüssig? Sind Buttons anklickbar? Laden und Anzeigen sich Pop-ups schnell und animieren diese dabei flüssig? Die Web-Performance umfasst sowohl objektive Messungen wie die Ladezeit, Bilder pro Sekunde und die Zeit, bis sie interaktiv wird, als auch subjektive Erfahrungen, wie lange es sich gefühlt hat, bis die Inhalte geladen waren.

Je länger es dauert, dass eine Website reagiert, desto mehr Benutzer werden die Seite verlassen. Es ist wichtig, Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu kaschieren, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während im Hintergrund asynchron die längeren Teile der Erfahrung geladen werden.

Es gibt Werkzeuge, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie in diesem Abschnitt:

## Wichtige Leistungsleitfäden

{{LandingPageListSubpages}}

## Einsteiger-Tutorials

Der MDN [Web Performance Learning Area](/de/docs/Learn/Performance) enthält moderne, aktuelle Tutorials, die die wesentlichen Aspekte der Performance abdecken. Beginnen Sie hier, wenn Sie ein Neuling in Sachen Performance sind:

- [Web-Performance: kurze Übersicht](/de/docs/Learn/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad zur Web-Performance. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Einblick in das, was Performance tatsächlich ist — das umfasst die Werkzeuge, Metriken, APIs, Netzwerke und Personengruppen, die wir in Betracht ziehen müssen, wenn wir über Performance nachdenken, und wie wir Performance in unseren Webentwicklungs-Workflow integrieren können.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Seite wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Seitenladezeit, Inaktivität, Reaktionsfähigkeit auf Benutzerinteraktionen und die Flüssigkeit von Scrolling und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsfähigkeit-Metriken sowie Best Practices, um die Benutzerwahrnehmung zu verbessern, wenn nicht die tatsächlichen Zeiten.
- [Web-Performance-Grundlagen](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Front-End-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können, und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklertools, Best Practices und schlechte Praktiken im Zusammenhang mit der Web-Performance. Hier werden wir viele dieser Funktionen auf der grundlegenden Ebene einführen und Links zu vertiefenden Informationen bereitstellen, um die Performance für jedes Thema zu verbessern.
- [HTML-Leistungsmerkmale](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Durch die Minimierung der Anzahl von DOM-Knoten und die Sicherstellung der besten Reihenfolge und Attribute für die Einbindung von Inhalten wie Styles, Skripten, Medien und Drittanbieter-Skripten können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel betrachtet im Detail, wie HTML genutzt werden kann, um maximale Performance sicherzustellen.
- [Multimedia: Bilder und Videos](/de/docs/Learn/Performance/Multimedia)
  - : Die einfachste Möglichkeit zur Web-Performance-Steigerung ist oft die Medienoptimierung. Es ist möglich, unterschiedliche Mediendateien entsprechend den Fähigkeiten, der Größe und der Pixeldichte jedes User-Agents bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiospuren aus Hintergrundvideos können die Performance weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen von Video-, Audio- und Bildinhalten auf die Performance und die Methoden, um diesen Einfluss so minimal wie möglich zu halten.
- [CSS-Leistungsmerkmale](/de/docs/Learn/Performance/CSS)
  - : CSS kann zwar in Bezug auf die Performance-Optimierung weniger im Fokus stehen, aber es gibt einige CSS-Funktionen, die die Performance mehr als andere beeinflussen. In diesem Artikel schauen wir uns einige CSS-Eigenschaften an, die die Performance beeinflussen und schlagen Wege vor, wie Sie Stile handhaben können, um eine negative Beeinflussung der Performance zu vermeiden.
- [JavaScript-Performance-Best-Practices](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann, richtig eingesetzt, interaktive und fesselnde Web-Erfahrungen ermöglichen – oder es kann die Downloadzeit, die Renderzeit, die In-App-Performance, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-Best-Practices, die in Betracht gezogen werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.

## Verwenden von Performance-APIs

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : [Ressourcen laden und timen](/de/docs/Web/API/Performance_API/Resource_timing), einschließlich Verwaltung des Ressourcenpuffers und Umgang mit [CORS](/de/docs/Web/HTTP/CORS).
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark" und "measure" Einträgen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing) - die Teil der Performance-Zeitleiste des Browsers sind.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Das [Beacon](/de/docs/Web/API/Beacon_API) Interface plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Lernen Sie, die Sichtbarkeit von Elementen mit der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) zu timen und werden Sie asynchron benachrichtigt, wenn interessante Elemente sichtbar werden.

## Weitere Dokumentation

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie Sie die Leistungsmerkmale in Ihren Entwicklerwerkzeugen nutzen und verstehen, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem eingebauten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die App-Performance mit dem eingebauten Profiler von Firefox profilieren.

## Glossarbegriffe

- {{Glossary("Beacon", "Beacon")}}
- {{Glossary("Brotli_compression", "Brotli-Kompression")}}
- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- {{Glossary("Code_splitting", "Code-Splitting")}}
- {{Glossary("CSSOM", "CSSOM")}}
- {{Glossary("CLS", "Cumulative Layout Shifts")}}
- {{Glossary("Domain_sharding", "Domain Sharding")}}
- {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_CPU_idle", "First CPU idle")}}
- {{Glossary("First_Paint", "First Paint")}}
- {{Glossary("HTTP", "HTTP")}}
- {{Glossary("HTTP_2", "HTTP/2")}}
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}}
- {{Glossary("Jank", "Jank")}}
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("Latency", "Latenz")}}
- {{Glossary("Lazy_load", "Lazy Load")}}
- {{Glossary("Long_task", "Lange Aufgabe")}}
- {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
- {{Glossary("Lossy_compression", "Verlustreiche Kompression")}}
- {{Glossary("Main_thread", "Haupt-Thread")}}
- {{Glossary("Minification", "Minifikation")}}
- {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
- {{Glossary("Packet", "Paket")}}
- {{Glossary("Page_load_time", "Seitenladezeit")}}
- {{Glossary("Page_prediction", "Seitenauswahl")}}
- {{Glossary("Parse", "Parsen")}}
- {{Glossary("Perceived_performance", "Wahrgenommene Performance")}}
- {{Glossary("Prefetch", "Prefetch")}}
- {{Glossary("Prerender", "Prerender")}}
- {{Glossary("QUIC", "QUIC")}}
- {{Glossary("RAIL", "RAIL")}}
- {{Glossary("Real_User_Monitoring", "Real User Monitoring")}}
- {{Glossary("Resource_Timing", "Resource Timing")}}
- {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
- {{Glossary("Server_Timing", "Server Timing")}}
- {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
- {{Glossary("Speed_index", "Geschwindigkeitsindex")}}
- {{Glossary("SSL", "SSL")}}
- {{Glossary("Synthetic_monitoring", "Synthetische Überwachung")}}
- {{Glossary("TCP_handshake", "TCP-Handschlag")}}
- {{Glossary("TCP_slow_start", "TCP Langsamer Start")}}
- {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte")}}
- {{Glossary("Time_to_interactive", "Zeit bis interaktiv")}}
- {{Glossary("TLS", "TLS")}}
- {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
- {{Glossary("Tree_shaking", "Tree Shaking")}}
- {{Glossary("Web_performance", "Web-Performance")}}

## Siehe auch

HTML

- [Das `<picture>`-Element](/de/docs/Web/HTML/Element/picture)
- [Das `<video>`-Element](/de/docs/Web/HTML/Element/video)
- [Das `<source>`-Element](/de/docs/Web/HTML/Element/source)
- [Das `<img> srcset`-Attribut](/de/docs/Web/HTML/Element/img#attributes)

  - [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Vorladen von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/de/docs/Web/CSS/will-change)
- GPU vs CPU
- Layout-Messung
- Best Practices für Schriftenladen

JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage Collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

APIs

- [Performance API](/de/docs/Web/API/Performance_API)
- [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Netzwerkinformationen API](/de/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/de/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- [Seiten-Sichtbarkeit](/de/docs/Web/API/Page_Visibility_API)
- [Kooperatives Scheduling von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/de/docs/Web/API/Beacon_API)
- Ressourcenhinweise - [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/de/docs/Web/API/PerformanceServerTiming)

Header

- [Content-Encoding](/de/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- {{Glossary("gzip_compression", "gZip")}}
- Client-Hinweise

Tools

- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

Zusätzliche Metriken

- Geschwindigkeitsindex und Wahrnehmungsgeschwindigkeitsindex

Best Practices

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/de/docs/Web/API/Web_Workers_API)

- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
