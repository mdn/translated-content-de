---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Web-Performance sind die objektiven Messungen und die wahrgenommene Benutzererfahrung von Ladezeit und Laufzeit. Web-Performance beschreibt, wie lange eine Seite zum Laden benötigt, bis sie interaktiv und reaktionsfähig wird und wie reibungslos der Inhalt während der Benutzerinteraktionen ist. Leistungsfragen umfassen: Ist das Scrollen flüssig? Reagieren die Schaltflächen? Laden Pop-ups schnell und animiert flüssig? Die objektiven Messungen umfassen die Ladezeit, Bilder pro Sekunde und die Zeit, um interaktiv zu werden, und die subjektive Erfahrung bedeutet, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger eine Seite zum Reagieren benötigt, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während asynchron die länger dauernden Teile der Erfahrung geladen werden.

Es gibt Werkzeuge, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie auf den folgenden Seiten.

## Web-Performance-Leitfäden

Die [Performance-Leitfäden](/de/docs/Web/Performance/Guides) sind Ressourcen, die beschreiben, wie Browser funktionieren, was die Leistung beeinflusst und wie man die Leistung über verschiedene Aspekte Ihrer Anwendung misst, optimiert und überwacht.

- [Leistungsgrundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument im Allgemeinen, was Leistung ist, wie die Browser-Plattform hilft, sie zu verbessern, und welche Werkzeuge und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Seitenfüllen: wie Browser arbeiten](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Nutzer wollen Web-Erfahrungen mit Inhalten, die schnell laden und sich flüssig bedienen lassen. Daher sollte ein Entwickler danach streben, diese beiden Ziele zu erreichen. Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessern kann, hilft es, zu verstehen, wie der Browser funktioniert.
- [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zu einem Ziel zu gelangen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, Ursachen der Latenz zu reduzieren und die Seitenleistung unter der Simulation hoher Latenz zu testen, um für Nutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lange?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln dafür, was als langsame Geschwindigkeit beim Laden von Seiten gilt, aber es gibt spezifische Richtlinien, um anzuzeigen, dass Inhalte geladen werden (1 Sekunde), im Leerlauf (50 ms), animierend (16,7 ms) und auf Benutzereingaben reagieren (50 bis 200 ms).
- [DNS-Prefetch verwenden](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist der Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, dem ein Benutzer zu folgen versucht.
- [Navigations- und Ressourcenzeiten](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationstiming** sind Messwerte, die Navigationsereignisse eines Browsers dokumentieren. **Ressourcentiming** sind detaillierte Netzwerkzeit-Messungen bezüglich des Ladens von Anwendungsressourcen. Beide bieten dieselben nur-lesbaren Eigenschaften, aber Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcentiming die Zeiten aller vom Hauptdokument aufgerufenen Ressourcen und deren angeforderten Ressourcen bereitstellt.
- [Startleistungsoptimierung](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung der Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Eine gute Benutzererfahrung umfasst die Gewährleistung, dass Ihre App schnell geladen wird. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen von anderen Plattformen ins Web.
- [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Rendering-Pfads verbessert die Rendering-Leistung. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Seitenladezeiten führt.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abfragen, das Abrufen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes höchstwahrscheinlich besuchen wird.
- [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist ein Limit, um Regressionen zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder ein Schwellenwert über einen Zeitraum gelten.
- [Performance Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Ansichten der Leistung und haben Vorteile sowie gute Einsatzmöglichkeiten und Mängel. RUM eignet sich im Allgemeinen besser zum Verständnis von langfristigen Trends, während synthetisches Monitoring sehr gut für Regressionstests und die Minderung kurzfristiger Leistungsprobleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese zwei Ansätze zur Leistungsüberwachung.
- [CSS- und JavaScript-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie zum Beispiel CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} oder JavaScript-basierte Animationen (mittels [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsleistung und Bildrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animation im Web kann über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), inklusive {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Leistungskosten der Animation einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, da der Browser Schwierigkeiten hat, eine glatte {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Anleitungen für Anfänger

Der MDN-Bereich [Lernbereich für Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials, die die grundlegenden Aspekte der Performance abdecken. Beginnen Sie hier, wenn Sie neu im Thema Performance sind:

- [Das "Warum" der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel behandelt, warum Web-Performance wichtig für die Zugänglichkeit, Benutzererfahrung und Ihre geschäftlichen Ziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber welche Faktoren beeinflussen die Web-Performance und wie wird sie gemessen? Dieser Artikel führt in die Komponenten der Performance ein, von der Lade- und Rendering-Zeit der Webseite, einschließlich wie Ihr Inhalt in den Browser der Benutzer gelangt, um betrachtet zu werden, bis hin zu den Gruppen von Menschen, die wir in Betrach ziehen müssen, wenn wir über Performance nachdenken.
- [Wie nehmen Benutzer die Leistung wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Webseite in Millisekunden ist, wie schnell Ihre Benutzer Ihre Webseite wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Ladezeit der Seite, Leerlauf, Reaktionsfähigkeit auf Benutzerinteraktionen und der Geschmeidigkeit von Scrollen und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lademetriken, Animations- und Reaktionsmetriken sowie Best Practices, um die Benutzerwahrnehmung zu verbessern, wenn nicht sogar die tatsächlichen Zeitmessungen.
- [Leistung messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Nachdem Sie nun ein paar Leistungsmetriken verstanden haben, tauchen wir tiefer in Leistungstools, Metriken und APIs ein und wie wir Performance zum Teil des Webentwicklungs-Workflows machen können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die einfachsten Früchte der Web-Performance sind oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte des Benutzergeräts zu bedienen. In diesem Artikel diskutieren wir den Einfluss von Bildern auf die Leistung und die Methoden, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Die einfachsten Früchte der Web-Performance sind oft die Medienoptimierung. In diesem Artikel diskutieren wir den Einfluss von Videoinhalten auf die Leistung und geben Tipps, wie das Entfernen von Audiotracks aus Hintergrundvideos die Leistung verbessern kann.
- [JavaScript-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann, wenn es richtig verwendet wird, interaktive und immersive Web-Erfahrungen ermöglichen – oder es kann die Downloadzeit, Renderzeit, In-App-Leistung, Batterielebensdauer und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.
- [HTML-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl von DOM-Knoten, Sicherstellung der besten Reihenfolge und Attribute für das Einbinden von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten, können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS kann ein weniger wichtiger Fokus für Leistungsverbesserungen sein, aber es gibt einige CSS-Features, die die Leistung mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen und schlagen Wege vor, wie Stile gehandhabt werden sollten, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [Der geschäftliche Nutzen von Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Leistung zu verbessern, aber wie schnell ist schnell genug? Wie können Sie Entscheidungsbefugte von der Bedeutung dieser Maßnahmen überzeugen? Einmal optimiert, wie können Sie sicherstellen, dass die Entwicklungsüberlastung nicht zurückkehrt? In diesem Artikel betrachten wir das Überzeugen des Managements, die Entwicklung einer Leistungskultur und eines Leistungsbudgets und führen Möglichkeiten ein, wie Regressionen nicht in Ihrem Code-Bestand eingeschlichen werden.
- [Web-Performance Best Practices & Tipps](/de/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : Dieser Artikel behandelt mehrere Themen auf einem grundlegenden Niveau und bietet Links zu tiefer gehenden Themen, um die Leistung für jedes Thema zu verbessern. Neben Frontend-Themen wie HTML, CSS, JavaScript und Mediendateien werden auch APIs, Entwicklerwerkzeuge, Best Practices und schlechte Praktiken im Zusammenhang mit Web-Performance behandelt.

## Performance-APIs

Die [Performance-API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden. Die folgenden Seiten bieten Übersichten über die Performance-APIs, einschließlich Informationen zur Verwendung:

- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance-API ermöglicht hochpräzise Messungen, die auf Zeit in einer potenziellen Sub-Millisekundenauflösung basieren und eine stabile monotone Uhr, die nicht systembedingten Uhrverschiebungen oder Anpassungen unterliegt.
    Die hochauflösenden Timer sind für genaues Benchmarking erforderlich, anstelle der weniger präzisen und nicht-monotonen {{jsxref("Date")}} Zeitstempel.
- [Lange Animationszeit](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen.
    Sie können langsame Benutzeroberflächen-Updates verursachen, was zu scheinbar unempfindlichen Steuerelementen und ruckeligen (oder nicht glatten) Animations- und Scroll-Effekten führt, was zu Benutzerfrustration führt.
    Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsframes zu erhalten und ihre Ursachen besser zu verstehen. Dieser Artikel zeigt, wie die Long Animation Frames API verwendet wird.
- [Überwachung von bfcache blockierenden Gründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) Eigenschaft berichtet Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um sie bfcache-kompatibel zu machen, und so die Site-Performance zu verbessern.
- [Navigation Timing](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigation Timing bietet Metriken im Zusammenhang mit der Navigation von einer Seite zur anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API. Zum Beispiel können Sie bestimmen, wie viel Zeit das Laden oder Entladen eines Dokuments benötigt oder die Zeit loggen, die es dauerte, bis der {{Glossary("DOM", "DOM")}}-Aufbau abgeschlossen ist und die Interaktion mit dem DOM möglich ist.
- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance-API bietet keine Performance-Datenanalyse oder Visualisierungen. Sie ist jedoch gut in Entwicklerwerkzeuge integriert und ihre Daten werden oft zu Analyseendpunkten und Bibliotheken gesendet, um Leistungsmetriken zu speichern, die Ihnen helfen, die Daten auszuwerten, um Leistungsengpässe zu finden, die Ihre Nutzer beeinträchtigen. Diese Seite bietet einen Überblick über die vorhandenen Performance-API-Daten, wie sie gesammelt werden und wie sie zugänglich sind.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerktiming-Daten für das Laden von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um zu bestimmen, wie lange es zum Beispiel dauert, eine bestimmte Ressource zu laden (wie ein Bild oder ein Skript), entweder implizit als Teil des Seitenladevorgangs oder explizit von JavaScript, zum Beispiel unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing erlaubt es Servern, Metriken über den Anfrage-Antwort-Zyklus an den Benutzeragenten zu kommunizieren. Sie können diese Informationen sammeln und Server-seitige Metriken auf dieselbe Weise verarbeiten wie alle anderen Metriken, die mit der Performance-API verarbeitet werden.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitmarken unter Verwendung der [User Timing API](/de/docs/Web/API/Performance_API/User_timing)'s "Mark" und "Measure" Einträge mit [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Performance-Zeitlinie des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind auch nützlich für das Messen und Beeinflussen der Seitenleistung:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Ereignisse, die Sie beobachten können, um zu erfahren, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu betrachten.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Kooperative Planung von Hintergrundaufgaben-API** (auch als die Background Tasks API oder die [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API bezeichnet) bietet die Möglichkeit, Aufgaben in die Warteschlange zu stellen, die vom Benutzeragenten automatisch ausgeführt werden, wenn dieser feststellt, dass es freie Zeit gibt.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht-blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Kreuzung eines Zielelements mit einem Vorfahr-Element oder einem Top-Level-Dokument zu beobachten. Dies ermöglicht Anwendungsfälle wie das [Timing der Element-Sichtbarkeit](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Gibt die Dekodier- und Kodierfähigkeiten eines Clientgeräts frei, z.B. ob Medien unterstützt werden und ob die Wiedergabe reibungslos und energieeffizient sein sollte, mit Echtzeit-Feedback über die Wiedergabe, um besser adaptives Streaming zu ermöglichen, und hat Zugriff auf Anzeigebildschirmeigenschafteninformationen.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems im Hinblick auf den allgemeinen Verbindungstyp (z.B. 'WLAN', 'Mobil', usw.). Dies kann verwendet werden, um basierend auf der Verbindung des Benutzers hochauflösende Inhalte oder niedrigauflösende Inhalte auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Batterie API** bietet Informationen über den Ladezustand der Batterie des Systems und lässt Sie durch Ereignisse benachrichtigen, die gesendet werden, wenn sich der Batteriestand oder der Ladezustand ändert. Dies kann verwendet werden, um die Ressourcennutzung Ihrer App anzupassen, um den Batterieverbrauch zu reduzieren, wenn die Batterie schwach ist, oder Änderungen zu speichern, bevor die Batterie leer ist, um Datenverlust zu verhindern.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`** schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge an Gerätespeicher in Gigabytes zurück.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`** schreibgeschützte Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich zur Navigations-Vorladungs-`Response` [`Response`](/de/docs/Web/API/Response) auflöst, wenn [navigation preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` andernfalls.

## Profiling und Werkzeuge

- [Firefox Profiler Performance Funktionen](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie man die Leistungsfunktionen in Ihren Entwicklerwerkzeugen verwendet und versteht, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem eingebauten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie man die App-Leistung mit dem eingebauten Profiler von Firefox profiliert.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture) Element
- [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) Element
- [`<source>`](/de/docs/Web/HTML/Reference/Elements/source) Element
- [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#attributes) Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) Attribut zum Vorladen von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/Reference/Properties/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-encoding](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Ressourcentipps via [dns-prefetch](/de/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}}, und prerender
- [HTTP/2](/de/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)

## Siehe auch

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), inklusive [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Kumulative Layoutverschiebungen (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Splitting")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain-Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "Erster inhaltlicher Farbauftrag (FCP)")}}
  - {{Glossary("First_CPU_idle", "Erste CPU-Leerlaufzeit")}}
  - {{Glossary("First_paint", "Erster Farbauftrag")}}
  - {{Glossary("gzip_compression", "gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaktion bis zum nächsten Farbauftrag (INP)")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Größter inhaltlicher Farbauftrag (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Load")}}
  - {{Glossary("Long_task", "Lange Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Haupt-Thread")}}
  - {{Glossary("Minification", "Minifizierung")}}
  - {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenvorhersage")}}
  - {{Glossary("Parse", "Parsieren")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}
  - {{Glossary("Prefetch", "Prefetch")}}
  - {{Glossary("Prerender", "Prerender")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Ressourcentiming")}}
  - {{Glossary("Round_Trip_Time", "Round-Trip-Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server-Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Speed-Index")}} (und Perzeptueller Speed-Index)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "TCP-Slow Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Time to First Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Time to Interactive (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in den Firefox-Entwicklerwerkzeugen](https://profiler.firefox.com/docs/#/)
