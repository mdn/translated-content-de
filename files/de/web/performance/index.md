---
title: Web-Performance
slug: Web/Performance
l10n:
  sourceCommit: 035dd5ef748061d1997c1c79f972781dd680dfa4
---

{{QuickLinksWithSubPages}}

Web-Performance sind die objektiven Messungen und die wahrgenommene Benutzererfahrung der Ladezeit und Laufzeit. Web-Performance beschreibt, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsfähig zu werden und wie flüssig der Inhalt bei Benutzerinteraktionen ist – ist das Scrollen flüssig? Sind Buttons anklickbar? Laden und zeigen sich Pop-ups schnell und animieren sie sich dabei flüssig? Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Bilder pro Sekunde und Zeit bis zur Interaktivität als auch subjektive Erfahrungen darüber, wie lange es sich angefühlt hat, bis der Inhalt geladen wurde.

Je länger eine Website benötigt, um zu reagieren, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu kaschieren, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gestaltet wird, während die Teile der Erfahrung, die länger laden, asynchron geladen werden.

Es gibt Werkzeuge, APIs und Best Practices, die uns dabei helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie in diesem Abschnitt:

## Wichtige Performance-Anleitungen

{{LandingPageListSubpages}}

## Einsteiger-Tutorials

Der MDN [Web Performance Lernbereich](/de/docs/Learn/Performance) enthält moderne, aktuelle Tutorials zu den Performance-Grundlagen. Beginnen Sie hier, wenn Sie neu im Bereich Performance sind:

- [Web-Performance: kurzer Überblick](/de/docs/Learn/Performance/What_is_web_performance)
  - : Überblick über den Web-Performance-Lernpfad. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Performance tatsächlich ist – dies umfasst die Tools, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir über Performance nachdenken, und wie wir Performance in unseren Webentwicklungs-Workflow integrieren können.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger, als wie schnell Ihre Website in Millisekunden ist, ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit der Seite, das Nichtstun, die Reaktionsfähigkeit auf Benutzeraktionen und die Flüssigkeit von Scrollen und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht der tatsächlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können und Funktionen, die sie subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklertools, Best Practices und schlechte Praktiken in Bezug auf Web-Performance. Hier werden viele dieser Funktionen auf einer grundlegenden Ebene eingeführt und Links zu vertiefenden Themen bereitgestellt, um die Performance für jedes Thema zu verbessern.
- [HTML-Performance-Funktionen](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Indem Sie die Anzahl der DOM-Knoten minimieren und sicherstellen, dass die beste Reihenfolge und die besten Attribute verwendet werden, um Inhalte wie Styles, Skripte, Medien und Drittanbieterskripte einzubinden, können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel beleuchtet im Detail, wie HTML verwendet werden kann, um maximale Performance sicherzustellen.
- [Multimedia: Bilder und Videos](/de/docs/Learn/Performance/Multimedia)
  - : Die einfachste Maßnahme zur Verbesserung der Web-Performance ist oft die Medienoptimierung. Es ist möglich, je nach den Fähigkeiten, der Größe und der Pixeldichte des Benutzergeräts unterschiedliche Mediendateien bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Performance noch weiter verbessern. In diesem Artikel diskutieren wir, welchen Einfluss Video-, Audio- und Bildinhalte auf die Performance haben und Methoden, um diesen Einfluss so gering wie möglich zu halten.
- [CSS-Performance-Funktionen](/de/docs/Learn/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsschwerpunkt für verbessertes Performance sein, aber es gibt einige CSS-Funktionen, die die Performance mehr beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance beeinflussen, und vorgeschlagene Wege, um Stile so zu handhaben, dass die Performance nicht negativ beeinflusst wird.
- [Best Practices für JavaScript-Performance](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann, wenn es richtig eingesetzt wird, interaktive und fesselnde Web-Erlebnisse ermöglichen – oder es kann die Downloadzeit, Renderzeit, In-App-Performance, Akkulaufzeit und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel beschreibt einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.

## Verwendung von Performance-APIs

- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : [Ressourcenladung und Timing](/de/docs/Web/API/Performance_API/Resource_timing) der Ladezeiten dieser Ressourcen, einschließlich der Verwaltung des Ressourcenpuffers und des Umgangs mit [CORS](/de/docs/Web/HTTP/CORS).
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark" und "measure" Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing), die Teil der Performance-Timeline des Browsers sind.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Web-Server.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Lernen Sie, die Sichtbarkeit von Elementen mit der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) zu timen und benachrichtigt zu werden, wenn Elemente von Interesse sichtbar werden.

## Andere Dokumentationen

- [Firefox Profiler Performance-Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie Sie die Performance-Funktionen in Ihren Entwicklerwerkzeugen nutzen und verstehen können, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Erfahren Sie, wie Sie die Performance von Apps mit Firefoxs integriertem Profiler untersuchen können.

## Glossareinträge

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- [Client Hinweise](/de/docs/Web/HTTP/Client_hints)
- {{glossary('Code splitting')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency')}}
- {{glossary('Lazy load')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression')}}
- {{glossary('Lossy compression')}}
- {{glossary('Main thread')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling')}}
- {{glossary('Packet')}}
- {{glossary('Page load time')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse')}}
- {{glossary('Perceived performance')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time', 'Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring')}}
- {{glossary('TCP handshake')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte')}}
- {{glossary('Time to interactive')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance')}}

## Siehe auch

HTML

- [Das `<picture>`-Element](/de/docs/Web/HTML/Element/picture)
- [Das `<video>`-Element](/de/docs/Web/HTML/Element/video)
- [Das `<source>`-Element](/de/docs/Web/HTML/Element/source)
- [Das `<img> srcset`-Attribut](/de/docs/Web/HTML/Element/img#attributes)

  - [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/de/docs/Web/CSS/will-change)
- GPU versus CPU
- Layout-Messung
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
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
- [High Resolution Timing API](/de/docs/Web/API/DOMHighResTimeStamp) (<https://w3c.github.io/hr-time/>)
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
- [Seiten-Sichtbarkeit](/de/docs/Web/API/Page_Visibility_API)
- [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/de/docs/Web/API/Beacon_API)
- Ressourcenhinweise - [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), [prefetch](/de/docs/Glossary/Prefetch) und prerender
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/de/docs/Web/API/PerformanceServerTiming)

Kopfzeilen

- [Inhaltskodierung](/de/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/de/docs/Glossary/gzip_compression)
- Client-Hinweise

Werkzeuge

- [Performance in den Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

Zusätzliche Messwerte

- Speed Index und Perceptual Speed Index

Best Practices

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/de/docs/Web/API/Web_Workers_API)

- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
