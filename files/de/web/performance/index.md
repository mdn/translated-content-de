---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Web-Performance bezeichnet die objektiven Messungen und die wahrgenommene Benutzererfahrung der Ladezeit und Laufzeit.
Web-Performance ist, wie lange eine Webseite benötigt, um zu laden, interaktiv und reaktionsfähig zu werden und wie flüssig der Inhalt während der Benutzerinteraktionen ist.
Leistungsfragen umfassen Fragen wie: Ist das Scrollen flüssig? Reagieren die Schaltflächen? Laden Pop-ups schnell und animiert flüssig?
Die objektiven Messungen umfassen die Ladezeit, Bilder pro Sekunde und die Zeit bis zur Interaktivität, und die subjektive Erfahrung bedeutet, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger es dauert, bis eine Website reagiert, desto mehr Benutzer werden die Website verlassen. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verschleiern, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während der längere Teil der Erfahrung asynchron geladen wird.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie auf den folgenden Seiten.

## Web-Performance-Leitfäden

- [Performance-Grundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Performance bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Performance ist, wie die Browserplattform hilft, sie zu verbessern, und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Seitenaufbau: Funktionsweise von Browsern](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Benutzer möchten Web-Erlebnisse mit Inhalten, die schnell zu laden und flüssig zu interagieren sind. Daher sollte ein Entwickler danach streben, diese beiden Ziele zu erreichen.
    Um zu verstehen, wie man die Performance und die wahrgenommene Performance verbessert, hilft es zu verstehen, wie der Browser funktioniert.
- [Verständnis von Latenz](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zu einem Ziel zu gelangen. Bei der Performance-Optimierung ist es wichtig, die Ursachen der Latenz zu reduzieren und die Website-Leistung zu testen, um hohe Latenz für Benutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performanzzeiten: Wie lang ist zu lang?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren festen Regeln dafür, was eine langsame Ladezeit für Seiten darstellt, aber es gibt spezifische Richtlinien, die anzeigen, dass der Inhalt geladen wird (1 Sekunde), im Leerlauf ist (50ms), animiert (16,7ms) und auf Benutzereingaben reagiert (50 bis 200ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, das ein Benutzer zu erreichen versucht.
- [Navigations- und Ressourcenzeiten](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationszeiten** sind Metriken, die die Dokumentnavigationsereignisse eines Browsers messen. **Ressourcenzeiten** sind detaillierte Netzwerkmessungen bezüglich des Ladens von Anwendungsressourcen. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber die Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcentiming die Zeiten für alle vom Hauptdokument aufgerufenen und die angeforderten Ressourcen liefert.
- [Optimierung der Startperformance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung Ihrer Startperformance ist oft eine der wertvollsten Performance-Optimierungen, die vorgenommen werden können.
    Eine gute Benutzererfahrung umfasst sicherzustellen, dass Ihre App schnell lädt. Dieser Artikel bietet Performance-Tipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen auf das Web von anderen Plattformen.
- [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Rendering-Pfades verbessert die Renderperformance.
    Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Rendertree und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht-kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfades](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was in reduzierte Seitenladezeiten übersetzt wird.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abrufe, Ressourcendownloads oder Dokumentrendering) auszuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes wahrscheinlich besuchen wird.
- [Performance Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist eine Grenze zur Vermeidung von Regressionen. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Zeit für Hero-Element) oder einen Schwellenwert über einen bestimmten Zeitraum angewendet werden.
- [Performance Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zum Überwachen und Bereitstellen von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Perspektiven auf die Performance und haben Vorteile, gute Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen am besten zum Verstehen langfristiger Trends, während synthetisches Monitoring sehr gut für Regressionstests und die Minderung kurzfristiger Performance-Probleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Performance-Überwachung.
- [CSS- und JavaScript-Animationsperformance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für ein angenehmes Benutzererlebnis in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Performance-Unterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsleistung und Bildrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen durchgeführt werden.
    Die Leistungskosten beim Animieren einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, während der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Anleitungen für Anfänger

Der MDN [Web-Performance-Lernbereich](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials zu Performance-Grundlagen. Beginnen Sie hier, wenn Sie neu im Bereich Performance sind:

- [Web-Performance: Kurzer Überblick](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Überblick über den Web-Performance-Lernpfad. Starten Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Performance tatsächlich ist — dies umfasst die Tools, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir über Performance nachdenken, und wie wir Performance in unseren Webentwicklungs-Workflow integrieren können.
- [Wie nehmen Benutzer die Leistung wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Seite wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit der Seite, das Verweilen, die Reaktionsfähigkeit auf Benutzereingaben und die Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel besprechen wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht der tatsächlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen verlangsamen können, und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken in Bezug auf Web-Performance. Hier führen wir viele dieser Funktionen auf Basisebene ein und bieten Links zu tiefergehenden Informationen zur Verbesserung der Performance für jedes Thema.
- [HTML-Performance-Features](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten, Sicherstellung der besten Reihenfolge und Attribute für das Einbinden von Inhalten wie Stylesheets, Skripten, Medien und Third-Party-Skripten können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Performance zu gewährleisten.
- [Multimedia: Bilder und Videos](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die am einfachsten erreichbaren Optimierungen der Web-Performance sind oft Medienoptimierungen. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes Benutzeragenten bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Performance weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen von Video-, Audio- und Bildinhalten auf die Performance und die Methoden, um sicherzustellen, dass diese Auswirkungen so gering wie möglich sind.
- [CSS-Performance-Features](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS ist möglicherweise weniger im Fokus der Optimierung für verbesserte Performance, aber es gibt einige CSS-Funktionen, die die Performance mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance beeinflussen und schlagen Möglichkeiten zur Behandlung von Styles vor, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [JavaScript-Performance-Best-Practices](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann bei richtiger Verwendung interaktive und eindringliche Web-Erlebnisse ermöglichen — oder es kann die Downloadzeit, Renderzeit, In-App-Leistung, Akkulaufzeit und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.

## Performance APIs

Die [Performance API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards, die verwendet werden, um die Performance von Web-Anwendungen zu messen.
Die folgenden Seiten bieten Überblicke über die Performance APIs sowie Informationen zur Verwendung:

- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance API ermöglicht hochpräzise Messungen basierend auf der Zeit in potenzieller Sub-Millisekunden-Auflösung und einer stabilen, monotonen Uhr, die nicht anfällig für Systemuhrverzerrungen oder Anpassungen ist.
    Die hochauflösenden Timer werden für präzises Benchmarking benötigt, anstelle der weniger präzisen und nicht monotonen {{jsxref("Date")}} Timestamps.
- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsrahmen** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen.
    Sie können langsame Updates der Benutzeroberfläche (UI) verursachen, was zu scheinbar nicht reagierenden Steuerelementen und {{Glossary("Jank", "ruckelnden")}} (oder nicht-flüssigen) Animationseffekten und Scrollen führt, was zur Benutzerfrustration führt.
    Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsrahmen zu erhalten und ihre Ursachen besser zu verstehen. Dieser Artikel zeigt, wie die Long Animation Frames API verwendet wird.
- [Monitoring bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) Eigenschaft berichtet Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen.
    Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um bfcache-kompatibel zu sein und so die Website-Performance zu verbessern.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigation Timing bietet Metriken, die mit dem Navigieren von einer Seite zu einer anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API verbunden sind.
    Zum Beispiel können Sie bestimmen, wie lange es dauert, ein Dokument zu laden oder zu entladen, oder die Zeit bis zum Abschluss der {{Glossary("DOM", "DOM")}}-Konstruktion aufzeichnen und die Interaktion mit dem DOM ermöglichen.
- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance API bietet keine Leistungsdatenanalyse oder Visualisierungen.
    Die Performance API ist jedoch gut in Entwickler-Tools integriert, und ihre Daten werden oft an Analyseendpunkte und Bibliotheken gesendet, um Leistungsmetriken aufzuzeichnen, die Ihnen helfen, die Daten zu bewerten, um Leistungsengpässe zu identifizieren, die Ihre Benutzer betreffen.
    Diese Seite bietet einen Überblick darüber, welche Arten von Performance API-Daten existieren, wie sie gesammelt werden und wie darauf zugegriffen werden kann.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeiten für das Laden von Anwendungsressourcen.
    Eine Anwendung kann die Zeitmessungen verwenden, um beispielsweise zu bestimmen, wie lange es dauert, eine bestimmte Ressource zu laden (wie ein Bild oder ein Skript), entweder implizit als Teil des Seitenladens oder explizit von JavaScript, zum Beispiel unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing ermöglicht es Servern, Metriken über den Anforderungs-Antwort-Zyklus an den Benutzeragenten zu kommunizieren.
    Sie können diese Informationen sammeln und auf serverseitige Metriken in der gleichen Weise wie alle anderen Metriken, die mit der Performance API verarbeitet werden, reagieren.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "Mark"- und "Measure"-Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing) unter Verwendung von [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Performance-Zeitleiste des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich für das Messen und Beeinflussen der Seitenperformance:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Stellt Ereignisse bereit, die Sie beobachten können, um zu wissen, wann ein Dokument sichtbar oder unsichtbar wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu betrachten.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Kooperative Zeitplanung von Hintergrundaufgaben API** (auch bekannt als die Background Tasks API oder die [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API) bietet die Möglichkeit, Aufgaben automatisch vom Benutzeragenten ausführen zu lassen, wenn dieser feststellt, dass freie Zeit vorhanden ist.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit zur asynchronen Beobachtung von Änderungen im Schnittpunkt eines Zielelements mit einem Vorfahrenelement oder mit dem Viewport eines Dokuments auf oberster Ebene.
    Dies ermöglicht Anwendungsfälle wie [Timing der Sichtbarkeit eines Elements](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Gibt die Dekodierungs- und Codierungsfähigkeiten eines Clientgeräts an, z.B. ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte, mit Echtzeit-Feedback zur Wiedergabe, um besser adaptives Streaming zu ermöglichen, und Zugang zu Anzeigeeigenschaften zu gewähren.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. "WiFi", "Mobilfunk" usw.).
    Dies kann verwendet werden, um basierend auf der Verbindung des Benutzers Inhalte in hoher oder niedriger Auflösung auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API** bietet Informationen über den Batterieladezustand des Systems und ermöglicht die Benachrichtigung durch Ereignisse, die gesendet werden, wenn sich der Batteriestand oder der Ladezustand ändert.
    Dies kann dazu verwendet werden, die Ressourcennutzung Ihrer App anzupassen, um den Batterieentladungszustand zu reduzieren, wenn der Batteriestand niedrig ist, oder um Änderungen zu speichern, bevor die Batterie leer ist, um Datenverlust zu verhindern.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt den ungefähren Speicherplatz des Geräts in Gigabyte an.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`**-Eigenschaft der [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich auf die Navigationsvorausladung [`Response`](/de/docs/Web/API/Response) auflöst, wenn die [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder andernfalls `undefined`.

## Profiling und Werkzeuge

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie Sie die Leistungsmerkmale in Ihren Entwicklerwerkzeugen nutzen und verstehen, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Erfahren Sie, wie Sie die Performance von Apps mit dem integrierten Profiler in Firefox analysieren.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture)-Element
- [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element
- [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element
- [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#attributes)-Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Attribut zum Vorladen von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage Collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-Encoding](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Ressourcenhinweise über [dns-prefetch](/de/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [HTTP/2](/de/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)

## Siehe auch

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Kumulative Layoutverschiebungen (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Spliting")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "Erste inhaltsbezogene Darstellung (FCP)")}}
  - {{Glossary("First_CPU_idle", "Erster CPU-Leerlauf")}}
  - {{Glossary("First_paint", "Erste Darstellung")}}
  - {{Glossary("gzip_compression", "gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaktion bis zur nächsten Darstellung (INP)")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Größte inhaltsbezogene Darstellung (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy loading")}}
  - {{Glossary("Long_task", "Lange Task")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Hauptthread")}}
  - {{Glossary("Minification", "Minifizierung")}}
  - {{Glossary("Network_throttling", "Netzwerk-Drosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenvorhersage")}}
  - {{Glossary("Parse", "Parsen")}}
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
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Wahrnehmungs-Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "TCP-Langsamer Start")}}
  - {{Glossary("TCP", "Übertragungssteuerungsprotokoll (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Zeit bis zur Interaktivität (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Baum Schütteln")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in den Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
