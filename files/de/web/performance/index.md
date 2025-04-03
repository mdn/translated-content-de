---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Web-Performance umfasst die objektiven Messungen und die wahrgenommene Benutzererfahrung in Bezug auf Ladezeit und Laufzeit. Web-Performance beschreibt, wie lange eine Website zum Laden, zur Interaktivität und zur Reaktionsfähigkeit benötigt und wie flüssig der Inhalt bei Benutzerinteraktionen ist. Zu den Performance-Fragen gehören: Ist das Scrollen flüssig? Reagieren Buttons schnell? Laden Pop-ups schnell und animieren flüssig? Die objektiven Messungen umfassen Ladezeit, Bilder pro Sekunde und die Zeit, um interaktiv zu werden, während die subjektive Erfahrung beinhaltet, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger eine Seite benötigt, um zu reagieren, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem das Erlebnis so schnell wie möglich verfügbar und interaktiv gemacht wird, während im Hintergrund die länger dauernden Teile des Erlebnisses asynchron geladen werden.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Diese werden auf den folgenden Seiten behandelt.

## Leitfäden zur Web-Performance

- [Performance-Grundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Performance bedeutet Effizienz. In Bezug auf Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browser-Plattform dabei hilft, sie zu verbessern, und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Seiteninhalt: wie Browser arbeiten](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Nutzer wollen Web-Erlebnisse mit Inhalten, die schnell geladen werden und flüssig zu interagieren sind. Deshalb sollte ein Entwickler versuchen, diese beiden Ziele zu erreichen. Um zu verstehen, wie die Leistung und die wahrgenommene Leistung verbessert werden können, hilft es zu verstehen, wie der Browser funktioniert.
- [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu reisen. Hinsichtlich der Performance-Optimierung ist es wichtig, die Ursachen der Latenz zu reduzieren und die Leistung der Website zu testen, indem eine hohe Latenz emuliert wird, um für Nutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Zeiten: Wie lang ist zu lang?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln, was ein langsames Tempo beim Laden von Seiten ausmacht, aber es gibt spezifische Richtlinien für die Anzeige, dass Inhalte geladen werden (1 Sekunde), Leerlauf (50ms), Animation (16,7ms) und die Reaktion auf Benutzereingaben (50 bis 200ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist der Versuch, Domain-Namen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird oder ein Linkziel, dem ein Benutzer zu folgen versucht.
- [Navigations- und Ressource-Zeiten](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationszeiten** sind Metriken, die die Dokument-Navigationsevents eines Browsers messen. **Ressourcenzeiten** sind detaillierte Netzwerkzeitmessungen zum Laden der Ressourcen einer Anwendung. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber Navigationstiming misst die Zeiten des Hauptdokuments, während die Ressourcentiming die Zeiten für alle vom Hauptdokument aufgerufenen Assets oder Ressourcen und die angeforderten Ressourcen der Ressourcen bereitstellt.
- [Optimierung der Startleistung](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung Ihrer Startleistung ist oft eine der wertvollsten Performance-Optimierungen, die vorgenommen werden können. Eine gute Benutzererfahrung beinhaltet die Sicherstellung, dass Ihre App schnell geladen wird. Dieser Artikel bietet Leistungs-Tipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen auf das Web von anderen Plattformen.
- [Kritischer Renderpfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Renderpfad ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu konvertieren. Die Optimierung des kritischen Renderpfades verbessert die Renderleistung. Der kritische Renderpfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Dies ist eine Möglichkeit, die Länge des [kritischen Renderpfades](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was in reduzierten Seitenladezeiten resultiert.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abruf, Ressourcenabruf oder Dokument-Rendering) auszuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen darüber, welche Seiten der Benutzer als Nächstes besuchen wird.
- [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist ein Limit, um Rückschritte zu verhindern. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Time to Hero Element) oder ein Schwellenwert über einen Zeitraum angewendet werden.
- [Performance Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Perspektiven der Leistung und haben Vorteile, gute Anwendungsfälle und Nachteile. RUM ist generell am besten geeignet, um langfristige Trends zu verstehen, während synthetisches Monitoring sehr gut für Regressionstests und die Minderung kurzfristiger Performance-Probleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Performance-Überwachung.
- [CSS- und JavaScript-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} oder JavaScript-basierte Animationen (mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsleistung und Bildrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Leistungskosten der Animation einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, da der Browser Schwierigkeiten hat, eine glatte {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Anleitungen für Anfänger

Der MDN [Web Performance Learning Area](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktualisierte Tutorials, die die Performance-Grundlagen abdecken. Beginnen Sie hier, wenn Sie neu im Bereich Performance sind:

- [Web-Performance: kurze Übersicht](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad zur Web-Performance. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Performance tatsächlich ist — dies beinhaltet die Tools, Metriken, APIs, Netzwerke und Gruppen von Menschen, die wir in Betracht ziehen müssen, wenn wir über Performance nachdenken und wie wir die Performance in unseren Webentwicklungs-Workflow integrieren können.
- [Wie nehmen Benutzer Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Nutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Seitenladezeit, Leerlaufsituationen, Reaktionsfähigkeit auf Benutzerinteraktionen sowie der Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetrikken sowie Best Practices zur Verbesserung der Nutzerwahrnehmung, wenn nicht der tatsächlichen Zeiten.
- [Web-Performance-Grundlagen](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Neben den Front-End-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken in Bezug auf die Web-Performance. Hier werden wir viele dieser Funktionen auf grundlegender Ebene einführen und Links zu tieferen Einblicken bieten, um die Performance für jedes Thema zu verbessern.
- [HTML-Performance-Funktionen](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellenreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Indem Sie die Anzahl der DOM-Knoten minimieren und sicherstellen, dass die beste Reihenfolge und die besten Attribute verwendet werden, um Inhalte wie Styles, Skripte, Medien und Drittanbieter-Skripte einzuschließen, können Sie das Benutzererlebnis erheblich verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [Multimedia: Bilder und Video](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die am einfachsten zu optimierenden Medieninhalte bei der Web-Performance sind oft Medien. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten des Benutzers, der Größe und der Pixel-Dichte auszuliefern. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Leistung weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen von Video-, Audio- und Bildinhalten auf die Leistung und die Methoden, um sicherzustellen, dass die Auswirkungen so gering wie möglich sind.
- [CSS-Performance-Funktionen](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Fokus für die Leistungsoptimierung sein, aber einige CSS-Funktionen haben größeren Einfluss auf die Leistung als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die sich auf die Leistung auswirken, und empfehlen Möglichkeiten zum Umgang mit Styles, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [JavaScript-Performance-Best-Practices](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann bei richtiger Verwendung interaktive und immersive Web-Erlebnisse ermöglichen — oder es kann die Download-Zeit, die Renderzeit, die in-App-Leistung, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte möglichst performant sind.

## Performance-APIs

Die [Performance API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards zur Messung der Performance von Webanwendungen. Die folgenden Seiten bieten einen Überblick über die Performance-APIs, einschließlich Informationen zur Nutzung:

- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance API erlaubt hochpräzise Messungen, die auf Zeit in potenzieller Sub-Millisekunden-Auflösung und einer stabilen monotonen Uhr basieren, die nicht anfällig für Systemuhrfehler oder Anpassungen ist. Die hochauflösenden Timer werden benötigt für genaues Benchmarking, anstelle der weniger präzisen und nicht monotorischen {{jsxref("Date")}}-Zeitstempel.
- [Timing von langen Animations-Frames](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animations-Frames** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzeroberflächenaktualisierungen verursachen, die scheinbar unempfindliche Steuerungen und {{Glossary("Jank", "ruckelige")}} (oder nicht glatte) animierte Effekte und Scrollvorgänge erzeugen, was zu Benutzerfrustration führt. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animations-Frames zu erhalten und ihre Ursachen besser zu verstehen. Dieser Artikel zeigt, wie die Long Animation Frames API verwendet werden kann.
- [Überwachen der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) liefert Informationen darüber, warum das aktuelle Dokument bei der Navigation von der Nutzung des {{Glossary("bfcache", "bfcache")}} blockiert wurde. Entwickler können diese Informationen verwenden, um Seiten zu identifizieren, die Aktualisierungen benötigen, um bfcache-kompatibel zu werden und dadurch die Website-Performance zu verbessern.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigationstiming bietet Metriken, die mit der Navigation von einer Seite zu einer anderen in Verbindung stehen, über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API. Sie können beispielsweise ermitteln, wie viel Zeit das Laden oder Entladen eines Dokuments benötigt oder die Zeit loggen, die bis zur Fertigstellung der {{Glossary("DOM", "DOM")}}-Konstruktion und der möglichen Interaktion mit dem DOM benötigt wurde.
- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance API bietet keine Performance-Datenanalyse oder Visualisierungen. Sie ist jedoch gut in Entwickler-Tools integriert und ihre Daten werden oft an Analyse-Endpunkte und Bibliotheken gesendet, um Leistungsmetriken aufzuzeichnen, die Ihnen helfen, die Daten zu bewerten, um Engpässe zu identifizieren, die Ihre Nutzer betreffen. Diese Seite bietet einen Überblick darüber, welche Arten von Performance-API-Daten existieren, wie sie gesammelt werden und wie sie zugänglich sind.
- [Ressourcen-Timing-API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Ressourcen-Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerktimingdaten für das Laden von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu bestimmen, die es dauert, um eine bestimmte Ressource (wie ein Bild oder ein Skript) zu laden, entweder implizit als Teil des Seitenladevorgangs oder explizit aus JavaScript, beispielsweise unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing erlaubt es den Servern, Metriken über den Anfrage-Antwort-Zyklus an den Benutzer-Agenten zu kommunizieren. Sie können diese Informationen sammeln und auf Server-seitige Metriken in der gleichen Weise reagieren wie auf alle anderen Metriken, die mit der Performance API verarbeitet werden.
- [Benutzer-Timing-API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "Mark"- und "Measure"-Eintragstypen der [user timing API](/de/docs/Web/API/Performance_API/User_timing) unter Verwendung von [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Performance-Zeitleiste des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich, um die Seiten-Performance zu messen und zu beeinflussen:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Ereignisse, die Sie beobachten können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu prüfen.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Cooperative Scheduling of Background Tasks API** (auch bekannt als Background Tasks API oder die [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API) bietet die Möglichkeit, Aufgaben zu planen, die vom Benutzeragenten automatisch ausgeführt werden, wenn er feststellt, dass es freie Zeit gibt, um dies zu tun.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API) Schnittstelle plant eine asynchrone und nicht blockierende Anforderung an einen Web-Server.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, Änderungen in der Schnittmenge eines Zielelements mit einem Vorfahr-Element oder mit dem {{Glossary("Viewport", "Viewport")}} eines top-level Dokuments asynchron zu beobachten. Dadurch werden Anwendungsfälle wie [Timing der Sichtbarkeit von Elementen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) ermöglicht, um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Gibt die Dekodier- und Kodierfähigkeiten eines Client-Geräts preis, beispielsweise ob Medien unterstützt werden und ob die Wiedergabe glatt und energieeffizient sein soll, mit Echtzeit-Feedback über die Wiedergabe, um adaptives Streaming besser zu ermöglichen, und Zugang zu den Anzeigeeigenschaften zu verschaffen.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. 'wifi', 'mobil', usw.). Dies kann verwendet werden, um basierend auf der Verbindung des Benutzers entweder hochauflösende Inhalte oder niedrigauflösende Inhalte auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API** bietet Informationen über den Ladestand des Akkus des Systems und ermöglicht es Ihnen, durch Ereignisse benachrichtigt zu werden, die gesendet werden, wenn sich der Akkustand oder der Ladezustand ändern. Dies kann verwendet werden, um den Ressourcenverbrauch Ihrer App zu reduzieren, um den Akkuverbrauch zu minimieren, wenn der Akkustand niedrig ist, oder um Änderungen zu speichern, bevor der Akku leer ist, um Datenverlust zu verhindern.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`**-schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`**-schreibgeschützte Eigenschaft der [`FetchEvent`](/de/docs/Web/API/FetchEvent) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich entweder zur Navigation preload [`Response`](/de/docs/Web/API/Response) auflöst, wenn [Navigation preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` ansonsten.

## Profilerstellung und Werkzeuge

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie Sie die Performance-Features in Ihren Entwickler-Tools verwenden und verstehen können, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Erfahren Sie, wie Sie die Leistung Ihrer App mit dem integrierten Profiler von Firefox überwachen können.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Element/picture) Element
- [`<video>`](/de/docs/Web/HTML/Element/video) Element
- [`<source>`](/de/docs/Web/HTML/Element/source) Element
- [`<img>`](/de/docs/Web/HTML/Element/img#attributes) Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) Attribut zum Vorladen von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-Encoding](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Ressourcenhinweise über [dns-prefetch](/de/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [HTTP/2](/de/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)

## Siehe auch

- [Responsive Images](/de/docs/Web/HTML/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- Glossary terms:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Cumulative Layout Shifts (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Splitten")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain-Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}}
  - {{Glossary("First_CPU_idle", "First CPU Idle")}}
  - {{Glossary("First_paint", "First Paint")}}
  - {{Glossary("gzip_compression", "gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Load")}}
  - {{Glossary("Long_task", "Lange Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Main Thread")}}
  - {{Glossary("Minification", "Minifikation")}}
  - {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenerkennung")}}
  - {{Glossary("Parse", "Parse")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}
  - {{Glossary("Prefetch", "Prefetch")}}
  - {{Glossary("Prerender", "Vorrendern")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Resource Timing")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server-Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Wahrnehmbarer Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handschlag")}}
  - {{Glossary("TCP_slow_start", "TCP-Slow Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Time to First Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Time to Interactive (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
