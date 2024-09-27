---
title: Web Performance
slug: Web/Performance
l10n:
  sourceCommit: 035dd5ef748061d1997c1c79f972781dd680dfa4
---

{{QuickLinksWithSubPages}}

Web-Performance bezieht sich auf die objektive Messung und die wahrgenommene Benutzererfahrung von Ladezeit und Laufzeit. Web-Performance umfasst, wie lange eine Website zum Laden benötigt, wann sie interaktiv und reaktionsschnell wird und wie flüssig der Inhalt während der Benutzerinteraktionen ist - ist das Scrollen flüssig? Sind die Schaltflächen anklickbar? Laden und zeigen sich Pop-ups schnell und werden sie dabei flüssig animiert? Web-Performance umfasst sowohl objektive Messungen wie die Ladezeit, Frames pro Sekunde und die Zeit bis zur Interaktivität, als auch subjektive Erfahrungen, wie lange es sich angefühlt hat, bis der Inhalt geladen wurde.

Je länger eine Website benötigt, um zu reagieren, desto mehr Benutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die weiteren Teile der Erfahrung asynchron geladen werden.

Es gibt Werkzeuge, APIs und bewährte Praktiken, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie in diesem Abschnitt:

## Wichtige Leistungsleitfäden

{{LandingPageListSubpages}}

## Anfängertutorials

Der MDN [Web Performance Lernbereich](/de/docs/Learn/Performance) enthält moderne, aktuelle Tutorials, die die Grundlagen der Performance abdecken. Beginnen Sie hier, wenn Sie neu im Bereich der Performance sind:

- [Web-Performance: Kurzer Überblick](/de/docs/Learn/Performance/What_is_web_performance)
  - : Überblick über den Web-Performance-Lernpfad. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Dieser Artikel startet das Modul mit einem guten Blick darauf, was Performance eigentlich ist — dazu gehören die Werkzeuge, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir über Performance nachdenken und wie wir Performance zu einem Teil unseres Webentwicklungs-Workflows machen können.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Seitenladezeit, Leerlaufzeiten, Reaktionsfähigkeit auf Benutzerinteraktionen und der Flüssigkeit von Scrollen und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie bewährte Praktiken, um die Benutzerwahrnehmung zu verbessern, wenn nicht sogar die tatsächlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Neben den Front-End-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können, und solche, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklertools, bewährte Praktiken und schlechte Praktiken im Zusammenhang mit der Web-Performance. Hier stellen wir viele dieser Funktionen auf grundlegender Ebene vor und bieten Links zu tieferen Einblicken, um die Performance für jedes Thema zu verbessern.
- [HTML-Performance-Funktionen](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Reihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Indem Sie die Anzahl der DOM-Knoten minimieren und sicherstellen, dass die beste Reihenfolge und Attribute für die Einbindung von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel untersucht detailliert, wie HTML verwendet werden kann, um maximale Performance zu gewährleisten.
- [Multimedia: Bilder und Video](/de/docs/Learn/Performance/Multimedia)
  - : Das am einfachsten zu optimierende Element der Web-Performance ist oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte des jeweiligen User-Agents bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Performance noch weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen von Video-, Audio- und Bildinhalten auf die Performance und die Methoden, um sicherzustellen, dass diese Auswirkungen minimal sind.
- [CSS-Performance-Funktionen](/de/docs/Learn/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsfokus zur Verbesserung der Performance sein, aber es gibt einige CSS-Funktionen, die die Performance stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance beeinflussen, und schlagen Möglichkeiten für den Umgang mit Stilen vor, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [Best Practices für JavaScript-Performance](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann, wenn es richtig eingesetzt wird, interaktive und eindringende Web-Erfahrungen ermöglichen - oder es kann die Downloadzeit, die Renderzeit, die In-App-Performance, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel beschreibt einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so leistungsfähig wie möglich sind.

## Nutzung der Performance-APIs

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Die [Ressourcenladung und zeitliche Abstimmung](/de/docs/Web/API/Performance_API/Resource_timing) der Ladezeiten dieser Ressourcen, einschließlich des Managements des Ressourcenpuffers und des Umgangs mit [CORS](/de/docs/Web/HTTP/CORS).
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark"- und "measure"-Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing), die Teil der Leistungstimeline des Browsers sind.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Lernen Sie, die Sichtbarkeit von Elementen mit der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) zu überwachen und asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.

## Weitere Dokumentation

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen zur Nutzung und zum Verständnis der Leistungsmerkmale in Ihren Entwicklertools, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profilierung mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die Anwendungs-Performance mit dem integrierten Profiler von Firefox profilieren.

## Glossarbegriffe

- [Beacon](/de/docs/Glossary/Beacon)
- [Brotli-Kompression](/de/docs/Glossary/Brotli_compression)
- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [Code-Splitting](/de/docs/Glossary/Code_splitting)
- [CSSOM](/de/docs/Glossary/CSSOM)
- [Domänen-Sharding](/de/docs/Glossary/Domain_sharding)
- [Effektiver Verbindungstyp](/de/docs/Glossary/Effective_connection_type)
- [Erstes inhaltsreiches Zeichnen](/de/docs/Glossary/First_contentful_paint)
- [Erstes CPU-Leerlauf](/de/docs/Glossary/First_CPU_idle)
- [Erste Eingabeverzögerung](/de/docs/Glossary/First_input_delay)
- [Erstes sinnhaftes Zeichnen](/de/docs/Glossary/First_meaningful_paint)
- [Erstes Zeichnen](/de/docs/Glossary/First_paint)
- [HTTP](/de/docs/Glossary/HTTP)
- [HTTP/2](/de/docs/Glossary/HTTP_2)
- [Ruckeln](/de/docs/Glossary/Jank)
- [Latenz](/de/docs/Glossary/Latency)
- [Lazy Load](/de/docs/Glossary/Lazy_load)
- [Langandauernde Aufgabe](/de/docs/Glossary/Long_task)
- [Verlustfreie Kompression](/de/docs/Glossary/Lossless_compression)
- [Verlustbehaftete Kompression](/de/docs/Glossary/Lossy_compression)
- [Hauptthread](/de/docs/Glossary/Main_thread)
- [Minifikation](/de/docs/Glossary/Minification)
- [Netzwerk-Drosselung](/de/docs/Glossary/Network_throttling)
- [Pakete](/de/docs/Glossary/Packet)
- [Seitenladezeit](/de/docs/Glossary/Page_load_time)
- [Seitenvorhersage](/de/docs/Glossary/Page_prediction)
- [Parsen](/de/docs/Glossary/Parse)
- [Wahrgenommene Leistung](/de/docs/Glossary/Perceived_performance)
- [Vorabrufen](/de/docs/Glossary/Prefetch)
- [Vorrendern](/de/docs/Glossary/Prerender)
- [QUIC](/de/docs/Glossary/QUIC)
- [RAIL](/de/docs/Glossary/RAIL)
- [Echtes Benutzer-Monitoring](/de/docs/Glossary/Real_User_Monitoring)
- [Ressourcen-Timing](/de/docs/Glossary/Resource_Timing)
- [Round Trip Time (RTT)](/de/docs/Glossary/Round_Trip_Time)
- [Server-Timing](/de/docs/Glossary/Server_Timing)
- [Spekulatives Parsen](/de/docs/Glossary/Speculative_parsing)
- [Geschwindigkeitsindex](/de/docs/Glossary/Speed_index)
- [SSL](/de/docs/Glossary/SSL)
- [Synthetisches Monitoring](/de/docs/Glossary/Synthetic_monitoring)
- [TCP-Handshake](/de/docs/Glossary/TCP_handshake)
- [TCP Slow Start](/de/docs/Glossary/TCP_slow_start)
- [Time to First Byte](/de/docs/Glossary/Time_to_first_byte)
- [Time to Interactive](/de/docs/Glossary/Time_to_interactive)
- [TLS](/de/docs/Glossary/TLS)
- [Transmission Control Protocol (TCP)](/de/docs/Glossary/TCP)
- [Tree Shaking](/de/docs/Glossary/Tree_shaking)
- [Web-Performance](/de/docs/Glossary/Web_performance)

## Siehe auch

HTML

- [Das `<picture>` Element](/de/docs/Web/HTML/Element/picture)
- [Das `<video>` Element](/de/docs/Web/HTML/Element/video)
- [Das `<source>` Element](/de/docs/Web/HTML/Element/source)
- [Das `<img> srcset` Attribut](/de/docs/Web/HTML/Element/img#attributes)

  - [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Vorladung von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/de/docs/Web/CSS/will-change)
- GPU vs CPU
- Layout messen
- Best Practices für Schriftarten-Laden

JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- [Garbage Collection](/de/docs/Glossary/Garbage_collection)
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
- [Nutzung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/de/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- [Seiten-Sichtbarkeit](/de/docs/Web/API/Page_Visibility_API)
- [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/de/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), [prefetch](/de/docs/Glossary/Prefetch), und prerender
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/de/docs/Web/API/PerformanceServerTiming)

Header

- [Content-Encoding](/de/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/de/docs/Glossary/gzip_compression)
- Client-Hinweise

Werkzeuge

- [Performance in den Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

Zusätzliche Metriken

- Geschwindigkeitsindex und Wahrnehmungsgeschwindigkeitsindex

Best Practices

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/de/docs/Web/API/Web_Workers_API)

- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
