---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

Web-Performance bezieht sich sowohl auf die objektiven Messungen als auch auf die wahrgenommene Benutzererfahrung bezüglich Ladezeit und Laufzeit. Web-Performance beschreibt, wie lange eine Seite braucht, um zu laden, interaktiv und reaktionsfähig zu werden, und wie glatt der Inhalt während Benutzerinteraktionen ist. Leistungsfragen beinhalten Aspekte wie: Ist das Scrollen flüssig? Reagieren die Tasten schnell? Laden Pop-ups schnell und animieren sie flüssig? Zu den objektiven Messungen gehören Ladezeit, Bilder pro Sekunde und die Zeit, um interaktiv zu werden, und die subjektive Erfahrung bezieht sich darauf, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger es dauert, bis eine Seite reagiert, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verschleiern, indem die Erfahrung so schnell wie möglich so verfügbar und interaktiv wie möglich gemacht wird, während die länger andauernden Teile der Erfahrung asynchron geladen werden.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie auf den folgenden Seiten.

## Web-Performance-Leitfäden

- [Leistungsgrundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browser-Plattform hilft, diese zu verbessern, und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Seite befüllen: wie Browser arbeiten](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Nutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind. Daher sollte ein Entwickler versuchen, diese beiden Ziele zu erreichen.
    Um zu verstehen, wie die Leistung und die wahrgenommene Leistung verbessert werden können, ist es hilfreich zu wissen, wie der Browser funktioniert.
- [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu reisen. Bei der Leistungsoptimierung ist es wichtig, die Ursachen der Latenz zu reduzieren und die Leistung der Seite zu testen, indem man eine hohe Latenz emuliert, um für Nutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Zeitpunkte: Wie lange ist zu lang?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln dafür, was als langsame Geschwindigkeit beim Laden von Seiten gilt, aber es gibt spezifische Richtlinien für das Anzeigen, dass Inhalte geladen werden (1 Sekunde), Ruhezeiten (50 ms), Animationen (16,7 ms) und das Reagieren auf Benutzereingaben (50 bis 200 ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist ein Versuch, Domänennamen zu lösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, das ein Benutzer zu folgen versucht.
- [Navigations- und Ressourcenzeiten](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationstiming** sind Metriken, die die Dokumentnavigationsevents eines Browsers messen. **Ressourcentiming** sind detaillierte Netzwerkzeitmessungen hinsichtlich des Ladens von Anwendungsressourcen. Beide bieten dieselben schreibgeschützten Attribute, aber das Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcentiming die Zeiten für alle im Hauptdokument aufgerufenen Ressourcen und deren abgerufenen Ressourcen liefert.
- [Optimierung der Startleistung](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung der Startleistung ist oft eine der leistungsstärksten Optimierungen, die durchgeführt werden können.
    Eine gute Benutzererfahrung setzt voraus, dass Ihre Anwendung schnell lädt. Dieser Artikel bietet Leistungstipps und Vorschläge sowohl zum Schreiben neuer Anwendungen als auch zum Portieren von Anwendungen ins Web von anderen Plattformen.
- [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu konvertieren. Die Optimierung des kritischen Rendering-Pfads verbessert die Renderleistung.
    Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist ein Weg, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was in verkürzten Seitenladezeiten resultiert.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie das Abrufen von DNS, das Abrufen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes besuchen wird.
- [Leistungsbudgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Leistungsbudget ist ein Limit, um Rückschritte zu verhindern. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Time to Hero Element) oder einen Schwellenwert über einen bestimmten Zeitraum hinweg angewendet werden.
- [Leistungsüberwachung: RUM vs. synthetische Überwachung](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetische Überwachung** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und zur Analyse der Web-Performance. RUM und synthetische Überwachung bieten verschiedene Perspektiven der Leistung und haben Vorteile, gute Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen am besten für das Verständnis langfristiger Trends, während die synthetische Überwachung sich sehr gut für Regressionstests und zur Minderung kurzfristiger Leistungsprobleme während der Entwicklung eignet. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Leistungsüberwachung.
- [CSS- und JavaScript-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für ein angenehmes Benutzererlebnis in vielen Anwendungen. Es gibt viele Möglichkeiten, Webanimationen zu implementieren, wie CSS {{cssxref("transition","Übergänge")}}/{{cssxref("animation","Animationen")}} oder JavaScript-basierte Animationen (mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsleistung und Bildrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können mit [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierten GIFs und sogar animierten PNGs und anderen Bildtypen durchgeführt werden.
    Die Leistungskosten für das Animieren einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teuerer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, wenn der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Tutorials für Anfänger

Der MDN [Web Performance Lernbereich](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials zu Performance-Grundlagen. Beginnen Sie hier, wenn Sie ein Neuling in Sachen Leistung sind:

- [Web-Performance: kurzer Überblick](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad für Web-Performance. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Leistung tatsächlich ist — dazu gehören die Tools, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir an Leistung denken und wie wir die Leistung in unseren Webentwicklungs-Workflow integrieren können.
- [Wie nehmen Benutzer die Leistung wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden, ist, wie schnell Ihre Benutzer Ihre Webseite wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Ladezeit der Seite, dem Ruhezustand, der Reaktionsfähigkeit auf Benutzereingaben und der Glätte des Scrollens und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lademetriken, Animationen- und Reaktionsfähigkeitsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht der tatsächlichen Zeitvorgaben.
- [Web-Performance-Grundlagen](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Neben den Front-End-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können, und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken in Bezug auf Web-Performance. Hier stellen wir viele dieser Funktionen auf der grundlegenden Ebene vor und bieten Links zu tiefergehenden Einblicken, um die Leistung für jedes Thema zu verbessern.
- [HTML-Leistungsmerkmale](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Reihenfolge des Quelltextes Ihres Markups können die Leistung Ihrer Website beeinflussen. Indem Sie die Anzahl der DOM-Knoten minimieren und sicherstellen, dass die beste Reihenfolge und die Attribute für das Einfügen von Inhalten wie Styles, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie die Benutzererfahrung erheblich verbessern. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [Multimedia: Bilder und Videos](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die am einfachsten zu erreichenden Früchte in der Web-Performance sind oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes Benutzeragenten zu bedienen. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Leistung noch weiter verbessern. In diesem Artikel diskutieren wir den Einfluss von Video-, Audio- und Bildinhalten auf die Leistung und die Methoden, um sicherzustellen, dass dieser Einfluss so minimal wie möglich ist.
- [CSS-Leistungsmerkmale](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsfokus zur Verbesserung der Leistung sein, aber es gibt einige CSS-Funktionen, die die Leistung stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen, und schlagen Möglichkeiten zum Umgang mit Styles vor, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [JavaScript-Performance-Best Practices](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript, richtig eingesetzt, kann interaktive und immersive Web-Erlebnisse ermöglichen — oder es kann erheblich die Downloadzeit, die Renderzeit, die In-App-Performance, die Akkulaufzeit und die Benutzererfahrung beeinträchtigen. Dieser Artikel beschreibt einige JavaScript-Best-Practices, die in Betracht gezogen werden sollten, um sicherzustellen, dass auch komplexe Inhalte so leistungsstark wie möglich sind.

## Performance-APIs

Die [Performance-API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden.
Die folgenden Seiten bieten Übersichten über die Performance-APIs einschließlich Informationen zur Nutzung:

- [Präzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance-API ermöglicht hochpräzise Messungen, die auf Zeit in einer möglichen Sub-Millisekunden-Auflösung und einer stabilen monotonischen Uhr basieren, die nicht von Systemuhr-Fehlern oder Anpassungen betroffen ist.
    Die hochauflösenden Timer sind für genaue Benchmarking notwendig anstelle der weniger präzisen und nicht monotonischen {{jsxref("Date")}}-Zeitstempel.
- [Lange Animations-Frame-Zeitmessung](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen.
    Sie können langsame Benutzeroberflächen-Aktualisierungen verursachen, was zu scheinbar unempfindlichen Steuerelementen und {{Glossary("Jank", "holprigen")}} (oder nicht-glatten) animierten Effekten und Scrollen führt, was zu Benutzerunzufriedenheit führt.
    Die [Long-Animation-Frames-API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long-Animation-Frames-API verwendet.
- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) Eigenschaft berichtet über Informationen, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu verwenden.
    Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um bfcache-kompatibel zu sein und so die Leistung der Website zu verbessern.
- [Navigationszeitmessung](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigationszeitmessung liefert Metriken, die mit der Navigation von einer Seite zur anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming)-API verbunden sind.
    Zum Beispiel können Sie bestimmen, wie viel Zeit es benötigt, um ein Dokument zu laden oder zu entladen, oder die Zeit zu protokollieren, die benötigt wurde, bis die {{Glossary("DOM", "DOM")}}-Konstruktion abgeschlossen ist und die Interaktion mit dem DOM möglich ist.
- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance-API bietet keine Analyse von Leistungsdaten oder Visualisierungen.
    Allerdings ist die Performance-API gut mit Entwickler-Tools integriert und ihre Daten werden oft an Analyse-Endpunkte und Bibliotheken gesendet, um Leistungsmetriken zu protokollieren, die Ihnen helfen, die Daten zu bewerten, um Leistungsengpässe zu finden, die Ihre Nutzer beeinträchtigen.
    Diese Seite bietet einen Überblick darüber, welche Arten von Performance-API-Daten existieren, wie sie gesammelt werden und wie sie zugänglich sind.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten für das Laden von Anwendungsressourcen.
    Eine Anwendung kann die Zeitmetriken verwenden, um beispielsweise die Länge der Zeit zu bestimmen, die es dauert, um eine spezifische Ressource (wie ein Bild oder ein Skript) entweder implizit als Teil des Seitenladens oder explizit aus JavaScript, z.B. unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch)-API zu laden.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing ermöglicht es Servern, Metriken über den Anfrage-Antwort-Zyklus an den Benutzeragenten zu kommunizieren.
    Sie können diese Informationen sammeln und serverseitige Metriken auf dieselbe Weise verarbeiten, wie alle anderen mit der Performance-API verarbeiteten Metriken.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit Hilfe der Eintragstypen "mark" und "measure" der [User Timing API](/de/docs/Web/API/Performance_API/User_timing), die [hochpräzise Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) verwenden, die Teil der Leistungschronologie des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind auch nützlich zur Messung und Einflussnahme auf die Seitenleistung:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Events, auf die Sie achten können, um zu wissen, wann ein Dokument sichtbar oder versteckt wird, sowie Funktionen, um den aktuellen Sichtbarkeitszustand der Seite zu betrachten.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **kooperative Planung von Hintergrundaufgaben-API** (auch als Background Tasks API oder die [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API bezeichnet) bietet die Möglichkeit, Aufgaben in die Warteschlange zu stellen, die automatisch vom Benutzeragenten ausgeführt werden, wenn festgestellt wird, dass freie Zeit dafür verfügbar ist.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht-blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, Änderungen der Überschneidung eines Zielelements mit einem Vorfahrenelement oder mit einem Dokument auf oberster Ebene asynchron zu beobachten.
    Dies ermöglichte Anwendungsfälle wie [Zeitmessung der Element Sichtbarkeit](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessierte Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Gibt Dekodierungs- und Kodierungsfähigkeiten eines Clientgeräts an, z.B. ob Medien unterstützt werden und ob die Wiedergabe flüssig und stromsparend sein sollte, mit Echtzeitrückmeldungen über die Wiedergabe, um adaptives Streaming besser zu ermöglichen, und Informationen zu Anzeigeeigenschaften.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems hinsichtlich des allgemeinen Verbindungstyps (z. B. 'WLAN', 'Mobilfunk' usw.).
    Dies kann verwendet werden, um hochauflösende Inhalte oder niedrigauflösende Inhalte basierend auf der Nutzerverbindung auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API**, bietet Informationen über den Ladezustand der Batterie des Systems und lässt Sie über Events benachrichtigt werden, die gesendet werden, wenn sich der Ladezustand oder der Ladestatus ändern.
    Dies kann verwendet werden, um die Ressourcennutzung Ihrer App anzupassen, um den Batterieverbrauch zu reduzieren, wenn der Akku schwach ist, oder um Änderungen zu speichern, bevor der Akku leer wird, um Datenverlust zu verhindern.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`**-Eigenschaft der [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf die Navigation Preload [`Response`](/de/docs/Web/API/Response) auflöst, falls [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` andernfalls.

## Profilerstellung und Tooling

- [Firefox Profiler-Leistungsmerkmale](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie die Leistungsmerkmale in Ihren Entwicklertools genutzt und verstanden werden können, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profilieren mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die Leistung Ihrer App mit dem integrierten Profiler von Firefox profilieren.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Element/picture)-Element
- [`<video>`](/de/docs/Web/HTML/Element/video)-Element
- [`<source>`](/de/docs/Web/HTML/Element/source)-Element
- [`<img>`](/de/docs/Web/HTML/Element/img#attributes)-Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)-Attribut zum Vorladen von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-Encoding](/de/docs/Web/HTTP/Headers/Content-Encoding)
- Ressourcentipps über [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [HTTP/2](/de/docs/Web/HTTP/Messages#http2_messages)
- [Client Hints](/de/docs/Web/HTTP/Client_hints)

## Siehe auch

- [Responsive Images](/de/docs/Web/HTML/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Cumulative Layout Shifts (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Splitting")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain-Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}}
  - {{Glossary("First_CPU_idle", "First CPU Idle")}}
  - {{Glossary("First_paint", "First Paint")}}
  - {{Glossary("gzip_compression", "gzip-Komprimierung")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Load")}}
  - {{Glossary("Long_task", "Lange Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Komprimierung")}}
  - {{Glossary("Lossy_compression", "Verlustreiche Komprimierung")}}
  - {{Glossary("Main_thread", "Main Thread")}}
  - {{Glossary("Minification", "Minifikation")}}
  - {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenvorhersage")}}
  - {{Glossary("Parse", "Parse")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}
  - {{Glossary("Prefetch", "Prefetch")}}
  - {{Glossary("Prerender", "Prerender")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Resource Timing")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server-Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Perzeptueller Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetische Überwachung")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "TCP-Slow-Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Time to First Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Time to Interactive (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Webperformance")}}
- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
