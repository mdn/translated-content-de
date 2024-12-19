---
title: Web-Performance
slug: Web/Performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages}}

Web-Performance bezieht sich auf die objektiven Messungen und die wahrgenommene Benutzererfahrung von Ladezeiten und Laufzeiten. Web-Performance umfasst, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsfähig zu werden, und wie flüssig der Inhalt während der Benutzerinteraktion ist - ist das Scrollen flüssig? Sind Schaltflächen klickbar? Laden Pop-ups schnell und werden angezeigt, und animieren sie währenddessen reibungslos? Web-Performance beinhaltet sowohl objektive Messungen wie Ladezeiten, Frames pro Sekunde und die Zeit bis zur Interaktivität als auch subjektive Erfahrungen, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger es dauert, bis eine Website reagiert, desto mehr Benutzer werden sie verlassen. Es ist wichtig, die Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während zeitkritischere Teile der Erfahrung asynchron geladen werden.

Es gibt Tools, APIs und bewährte Praktiken, die uns helfen, die Web-Performance zu messen und zu verbessern. Diese behandeln wir in diesem Abschnitt:

## Wichtige Leitfäden zur Leistung

{{SubpagesWithSummaries}}

## Einsteiger-Tutorials

Der MDN [Web Performance Learning Area](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials zu den Grundlagen der Performance. Beginnen Sie hier, wenn Sie neu im Bereich der Performance sind:

- [Web-Performance: kurzer Überblick](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad zur Web-Performance. Beginnen Sie hier Ihre Reise.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Leistung tatsächlich ist – dazu gehören die Tools, Metriken, APIs, Netzwerke und Personen, die wir berücksichtigen müssen, wenn wir über Leistung nachdenken und wie wir Performance in unseren Workflow zur Webentwicklung integrieren können.
- [Wie nehmen Benutzer die Leistung wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit der Seite, Inaktivität, Reaktionsfähigkeit auf Benutzerinteraktionen und die Glätte des Scrollens und anderer Animationen beeinflusst. In diesem Artikel erörtern wir die verschiedenen Lade- und Animationsmetriken sowie die Metriken zur Reaktionsfähigkeit und geben bewährte Methoden an, um die Benutzerwahrnehmung zu verbessern, selbst wenn die tatsächlichen Zeiten nicht verbessert werden können.
- [Grundlagen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten aus HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklertools, bewährte Praktiken und schlechte Praktiken in Bezug auf Web-Performance. Hier stellen wir viele dieser Funktionen auf der Basisebene vor und bieten Links zu tiefergehenden Informationen zur Leistungsverbesserung für jedes Thema.
- [HTML-Leistungsfunktionen](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten und Sicherstellung, dass die beste Reihenfolge und die besten Attribute für das Einfügen von Inhalten wie Styles, Skripten, Medien und Drittanbieterskripten verwendet werden, können Sie die Benutzererfahrung erheblich verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [Multimedia: Bilder und Video](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die Optimierung von Medien ist oft der einfachste Weg zur Verbesserung der Web-Performance. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes Benutzergeräts bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiotracks von Hintergrundvideos können die Leistung weiter verbessern. In diesem Artikel besprechen wir den Einfluss von Video-, Audio- und Bildinhalten auf die Performance und die Methoden, um sicherzustellen, dass dieser Einfluss so gering wie möglich ist.
- [CSS-Leistungsfunktionen](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsschwerpunkt für die verbesserte Leistung sein, aber es gibt einige CSS-Funktionen, die die Performance stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen, und schlagen Möglichkeiten vor, mit Stilen umzugehen, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [JavaScript-Leistungspraktiken](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript, wenn es richtig eingesetzt wird, kann interaktive und immersive Web-Erfahrungen ermöglichen – oder es kann die Downloadzeit, die Renderzeit, die Leistung innerhalb der Anwendung, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige bewährte JavaScript-Verfahren, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.

## Nutzung von Performance-APIs

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : [Ressourcen laden und zeitlich erfassen](/de/docs/Web/API/Performance_API/Resource_timing) das Laden dieser Ressourcen, einschließlich der Verwaltung des Ressourcenpuffers und des Umgangs mit [CORS](/de/docs/Web/HTTP/CORS).
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark" und "measure" Eintrittstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing) – die Teil der Leistungstimeline des Browsers sind.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Lernen Sie, die Sichtbarkeit von Elementen mit der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) zu timen und asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.

## Andere Dokumentationen

- [Firefox Profiler Leistungsfunktionen](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen zur Nutzung und zum Verständnis der Leistungsmerkmale in Ihren Entwicklerwerkzeugen, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die App-Leistung mit Firefoxs integriertem Profiler profilieren können.

## Glossarbegriffe

- {{Glossary("Beacon", "Beacon")}}
- {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- {{Glossary("Code_splitting", "Code-Splitting")}}
- {{Glossary("CSSOM", "CSSOM")}}
- {{Glossary("CLS", "Kumulative Layout-Verschiebungen")}}
- {{Glossary("Domain_sharding", "Domain Sharding")}}
- {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_CPU_idle", "First CPU idle")}}
- {{Glossary("First_Paint", "First Paint")}}
- {{Glossary("HTTP", "HTTP")}}
- {{Glossary("HTTP_2", "HTTP/2")}}
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}}
- {{Glossary("Jank", "Stottern")}}
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("Latency", "Latenz")}}
- {{Glossary("Lazy_load", "Lazy Load")}}
- {{Glossary("Long_task", "Langwierige Aufgabe")}}
- {{Glossary("Lossless_compression", "Verlustfreie Komprimierung")}}
- {{Glossary("Lossy_compression", "Verlustbehaftete Komprimierung")}}
- {{Glossary("Main_thread", "Haupt-Thread")}}
- {{Glossary("Minification", "Minifizierung")}}
- {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
- {{Glossary("Packet", "Paket")}}
- {{Glossary("Page_load_time", "Seitenladezeit")}}
- {{Glossary("Page_prediction", "Seitenvorhersage")}}
- {{Glossary("Parse", "Parsen")}}
- {{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}
- {{Glossary("Prefetch", "Vorabrufen")}}
- {{Glossary("Prerender", "Vorabdarstellen")}}
- {{Glossary("QUIC", "QUIC")}}
- {{Glossary("RAIL", "RAIL")}}
- {{Glossary("Real_User_Monitoring", "Real User Monitoring")}}
- {{Glossary("Resource_Timing", "Ressourcen-Timing")}}
- {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
- {{Glossary("Server_Timing", "Server-Timing")}}
- {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
- {{Glossary("Speed_index", "Geschwindigkeitsindex")}}
- {{Glossary("SSL", "SSL")}}
- {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
- {{Glossary("TCP_handshake", "TCP-Handshake")}}
- {{Glossary("TCP_slow_start", "Langsamer Start von TCP")}}
- {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte")}}
- {{Glossary("Time_to_interactive", "Zeit bis zur Interaktivität")}}
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

  - [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)

- [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/de/docs/Web/CSS/will-change)
- GPU vs. CPU
- Layout messen
- Best Practices für das Laden von Schriften

JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Speicherbereinigung")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

APIs

- [Performance API](/de/docs/Web/API/Performance_API)
- [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
- [Batteriestatus-API](/de/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API)
- [Nutzung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
- [Hochauflösende Zeit-API](/de/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- [Seiten-Sichtbarkeit](/de/docs/Web/API/Page_Visibility_API)
- [Kooperatives Scheduling von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/de/docs/Web/API/Beacon_API)
- Ressourcenhinweise - [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/de/docs/Web/API/PerformanceServerTiming)

Header

- [Inhalt-Codierung](/de/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- {{Glossary("gzip_compression", "gZip")}}
- Client Hints

Tools

- [Performance in den Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

Zusätzliche Metriken

- Geschwindigkeitsindex und Wahrnehmungsgeschwindigkeitsindex

Best Practices

- [Nutzung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Nutzung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/de/docs/Web/API/Web_Workers_API)

- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
