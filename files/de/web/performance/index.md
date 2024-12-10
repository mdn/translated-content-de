---
title: Web-Performance
slug: Web/Performance
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{QuickLinksWithSubPages}}

Web-Performance umfasst die objektiven Messungen und die wahrgenommene Benutzererfahrung von Ladezeiten und Laufzeiten. Web-Performance bezeichnet, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsschnell zu werden, und wie flüssig der Inhalt während der Benutzerinteraktionen ist – ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Laden und zeigen sich Pop-ups schnell an, und animieren sie dabei reibungslos? Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Bilder pro Sekunde und Zeit bis zur Interaktivität als auch subjektive Erfahrungen, wie lange es sich angefühlt hat, bis die Inhalte geladen waren.

Je länger eine Seite braucht, um zu reagieren, desto mehr Benutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen. Dies wird erreicht, indem die Erfahrung so verfügbar und interaktiv wie möglich gemacht wird, so schnell wie möglich, während die längeren Teile des Erlebnisses asynchron geladen werden.

Es gibt Werkzeuge, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie in diesem Abschnitt:

## Wichtige Performance-Leitfäden

{{SubpagesWithSummaries}}

## Tutorials für Anfänger

Der MDN [Lehrbereich zur Web-Performance](/de/docs/Learn/Performance) enthält moderne, aktuelle Tutorials zu den Grundlagen der Performance. Beginnen Sie hier, wenn Sie ein Neuling in der Performance sind:

- [Web-Performance: kurzer Überblick](/de/docs/Learn/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad zur Web-Performance. Starten Sie hier Ihre Reise.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Performance tatsächlich ist – dazu gehören die Tools, Metriken, APIs, Netzwerke und Gruppen von Personen, die wir bei Überlegungen zur Performance berücksichtigen müssen, und wie wir Performance zu einem Bestandteil unseres Web-Entwicklungs-Workflows machen können.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die Millisekunden, die Ihre Website tatsächlich schnell ist, ist, wie schnell Ihre Benutzer sie wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit der Seite, das Idlen, die Reaktionsfähigkeit auf Benutzerinteraktionen und die Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht sogar der tatsächlichen Zeitmessungen.
- [Grundlagen der Web-Performance](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Neben den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen verlangsamen können, und Funktionen, die sie subjektiv und objektiv beschleunigen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken im Zusammenhang mit der Web-Performance. Hier führen wir viele dieser Funktionen auf Basisebene ein und bieten Links zu tiefergehenden Vertiefungen, um die Performance für jedes Thema zu verbessern.
- [HTML-Performance-Merkmale](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Quelleinordnung Ihres Markups können die Performance Ihrer Website beeinträchtigen. Durch das Minimieren der Anzahl von DOM-Knoten und die Sicherstellung, dass die beste Reihenfolge und die besten Attribute für das Einschließen von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel untersucht im Detail, wie HTML genutzt werden kann, um maximale Performance sicherzustellen.
- [Multimedia: Bilder und Videos](/de/docs/Learn/Performance/Multimedia)
  - : Oft ist die Medienoptimierung das naheliegendste Mittel zur Verbesserung der Web-Performance. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte des Benutzer-Agents bereitzustellen. Weitere Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Performance noch weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen, die Video-, Audio- und Bildinhalte auf die Performance haben, und die Methoden, um sicherzustellen, dass diese Auswirkungen so minimal wie möglich sind.
- [CSS-Performance-Merkmale](/de/docs/Learn/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsfokus für verbesserte Performance sein, aber es gibt einige CSS-Eigenschaften, die die Performance mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance beeinflussen und schlagen Möglichkeiten vor, Stile zu handhaben, um sicherzustellen, dass die Performance nicht negativ beeinträchtigt wird.
- [JavaScript-Performance-Best-Practices](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann, wenn es ordnungsgemäß verwendet wird, interaktive und fesselnde Web-Erfahrungen ermöglichen – oder es kann die Downloadzeit, Renderzeit, In-App-Performance, Batterielaufzeit und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel umreißt einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.

## Verwendung von Performance-APIs

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : [Resource loading and timing](/de/docs/Web/API/Performance_API/Resource_timing) beim Laden dieser Ressourcen, einschließlich der Verwaltung des Ressourcenpuffers und der Bewältigung von [CORS](/de/docs/Web/HTTP/CORS).
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark"- und "measure"-Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing), die Teil der Performance-Zeitleiste des Browsers sind.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Lernen Sie, die Sichtbarkeit von Elementen mit der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) zu timen und asynchron informiert zu werden, wenn interessante Elemente sichtbar werden.

## Weitere Dokumentation

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie Sie die Performance-Features in Ihren Entwickler-Tools verwenden und verstehen, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die App-Performance mit dem integrierten Profiler von Firefox profilen können.

## Glossarbegriffe

- {{Glossary("Beacon", "Beacon")}}
- {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- {{Glossary("Code_splitting", "Code Splitting")}}
- {{Glossary("CSSOM", "CSSOM")}}
- {{Glossary("CLS", "Kumulative Layout-Verschiebungen")}}
- {{Glossary("Domain_sharding", "Domain Sharding")}}
- {{Glossary("Effective_connection_type", "Effective Connection Type")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_CPU_idle", "First CPU Idle")}}
- {{Glossary("First_Paint", "First Paint")}}
- {{Glossary("HTTP", "HTTP")}}
- {{Glossary("HTTP_2", "HTTP/2")}}
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}}
- {{Glossary("Jank", "Jank")}}
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("Latency", "Latenz")}}
- {{Glossary("Lazy_load", "Lazy Load")}}
- {{Glossary("Long_task", "Long Task")}}
- {{Glossary("Lossless_compression", "Verlustfreie Komprimierung")}}
- {{Glossary("Lossy_compression", "Verlustbehaftete Komprimierung")}}
- {{Glossary("Main_thread", "Haupt-Thread")}}
- {{Glossary("Minification", "Minifikation")}}
- {{Glossary("Network_throttling", "Netzwerk-Drosselung")}}
- {{Glossary("Packet", "Packet")}}
- {{Glossary("Page_load_time", "Seitenladezeit")}}
- {{Glossary("Page_prediction", "Seitenprädiktion")}}
- {{Glossary("Parse", "Parsen")}}
- {{Glossary("Perceived_performance", "Wahrgenommene Performance")}}
- {{Glossary("Prefetch", "Prefetch")}}
- {{Glossary("Prerender", "Prerender")}}
- {{Glossary("QUIC", "QUIC")}}
- {{Glossary("RAIL", "RAIL")}}
- {{Glossary("Real_User_Monitoring", "Echtes Benutzer-Monitoring")}}
- {{Glossary("Resource_Timing", "Ressourcen-Timing")}}
- {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
- {{Glossary("Server_Timing", "Server-Timing")}}
- {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
- {{Glossary("Speed_index", "Speed Index")}}
- {{Glossary("SSL", "SSL")}}
- {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
- {{Glossary("TCP_handshake", "TCP-Handschlag")}}
- {{Glossary("TCP_slow_start", "Langsamer TCP-Start")}}
- {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte")}}
- {{Glossary("Time_to_interactive", "Zeit zur Interaktivität")}}
- {{Glossary("TLS", "TLS")}}
- {{Glossary("TCP", "Übertragungssteuerungsprotokoll (TCP)")}}
- {{Glossary("Tree_shaking", "Baumschaukel")}}
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
- Messung des Layouts
- Best Practices für das Laden von Schriftarten

JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Speicherbereinigung")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

APIs

- [Performance API](/de/docs/Web/API/Performance_API)
- [Navigation Timing API](/de/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/de/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/de/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- [Sichtbarkeit der Seite](/de/docs/Web/API/Page_Visibility_API)
- [Kooperative Planung von Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/de/docs/Web/API/Beacon_API)
- Ressource Hints - [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}}, und prerender
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/de/docs/Web/API/PerformanceServerTiming)

Header

- [Content-Encoding](/de/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- {{Glossary("gzip_compression", "gZip")}}
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
- Content Delivery Networks (CDN)
