---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: d37026a4d0e1e3a5a2ab82d34566689aada039f7
---

Web-Performance umfasst die objektiven Messungen und die wahrgenommene Benutzererfahrung von Lade- und Laufzeit. Web-Performance beschreibt, wie lange eine Website zum Laden, zum interaktiv und reaktionsfähig werden benötigt, und wie flüssig der Inhalt während der Benutzerinteraktionen ist. Performance umfasst Fragen wie: Ist das Scrollen flüssig? Sind die Schaltflächen reaktionsschnell? Laden Pop-ups schnell und animieren sie flüssig? Die objektiven Messungen beinhalten die Ladezeit, Bilder pro Sekunde und die Zeit, um interaktiv zu werden, während die subjektive Erfahrung beschreibt, wie lange es sich anfühlt, dass Inhalte laden.

Je länger es dauert, bis eine Seite reagiert, desto mehr Benutzer werden die Seite verlassen. Es ist wichtig, Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die restlichen Teile der Erfahrung asynchron geladen werden.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Diese werden auf den folgenden Seiten behandelt.

## Web-Performance-Leitfäden

Die [Leitfäden zur Performance](/de/docs/Web/Performance/Guides) sind Ressourcen, die beschreiben, wie Browser funktionieren, was die Performance beeinflusst und wie man Performance in verschiedenen Aspekten Ihrer Anwendung messen, optimieren und überwachen kann.

- [Performance-Grundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Performance bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Performance ist, wie die Browserplattform bei der Verbesserung hilft und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Die Seite befüllen: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Benutzer wünschen sich Web-Erfahrungen, die schnell laden und reibungslos zu interagieren sind. Deshalb sollte ein Entwickler danach streben, diese beiden Ziele zu erreichen. Um die Performance und die wahrgenommene Performance zu verbessern, ist es hilfreich, zu verstehen, wie der Browser funktioniert.
- [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu reisen. Bei der Performance-Optimierung ist es wichtig, Ursachen für Latenz zu reduzieren und die Site-Performance unter Nachahmung hoher Latenz zu testen, um für Benutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Timings: Wie lang ist zu lang?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln dafür, was ein langsames Tempo beim Laden von Seiten ausmacht, aber es gibt spezifische Richtlinien für die Anzeige, dass Inhalte laden (1 Sekunde), Leerlauf (50ms), Animation (16,7ms) und die Reaktion auf Benutzereingaben (50 bis 200ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist ein Versuch, Domain-Namen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, dem ein Benutzer zu folgen versucht.
- [Navigations- und Ressourcentimings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationstiming** sind Metriken, die die Dokumentnavigationsereignisse eines Browsers messen. **Ressourcentimings** sind detaillierte Netzwerkzeitmessungen in Bezug auf das Laden von Ressourcen einer Anwendung. Beides bietet dieselben schreibgeschützten Eigenschaften, aber das Navigationstiming misst die Timings des Hauptdokuments, während das Ressourcentiming die Zeiten für alle von diesem Hauptdokument aufgerufenen Assets oder Ressourcen und deren angeforderte Ressourcen bereitstellt.
- [Startzeit-Performance optimieren](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung der Startzeit-Performance ist oft eine der wertvollsten Performance-Optimierungen, die durchgeführt werden können. Eine gute Benutzererfahrung schließt ein, sicherzustellen, dass Ihre App schnell lädt. Dieser Artikel bietet Performance-Tipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen aus anderen Plattformen ins Web.
- [Kritischer Pfad der Darstellung](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der Kritische Pfad der Darstellung ist die Abfolge von Schritten, die der Browser durchläuft, um HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Darstellungspfads verbessert die Renderleistung. Der kritische Darstellungspfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht-blockierend (nicht-kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Darstellungspfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Seitenladezeiten führt.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abruf, Abruf von Ressourcen oder Rendern von Dokumenten) bevor die zugehörigen Seiten tatsächlich besucht werden, auszuführen, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes wahrscheinlich besucht.
- [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist ein Limit zur Vermeidung von Regressionen. Es kann auf eine Datei, einen Dateityp, alle auf einer Seite geladene Dateien, eine spezifische Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Zeit bis zum Hero-Element) oder einen Schwellenwert über einen Zeitraum angewendet werden.
- [Performance-Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Blickwinkel auf die Performance und haben Vorteile, gute Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen am besten, um langfristige Trends zu verstehen, während sich synthetisches Monitoring sehr gut für Regressionstests und die Minderung kurzfristiger Performance-Probleme während der Entwicklung eignet. In diesem Artikel definieren und vergleichen wir diese beiden Performance-Monitoring-Ansätze.
- [CSS- und JavaScript-Animationsperformance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für ein angenehmes Benutzererlebnis in vielen Anwendungen. Es gibt viele Möglichkeiten, Webanimationen zu implementieren, wie etwa CSS {{cssxref("transition","Transitionen")}}/{{cssxref("animation","Animationen")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Performance-Unterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsperformance und Bildrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}}, [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}} und {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Performancekosten bei der Animation einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und die Animation teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, da der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Tutorials für Anfänger

Der MDN [Web-Performance-Lernbereich](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials, die die Grundlagen der Performance abdecken. Beginnen Sie hier, wenn Sie neu in der Performance sind:

- [Web-Performance: kurze Übersicht](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Eine Übersicht über den Lernpfad zur Web-Performance. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Einblick in das, was Performance tatsächlich ist — hierzu gehören die Tools, Metriken, APIs, Netzwerke und Personengruppen, die in Betracht gezogen werden müssen, wenn man über Performance nachdenkt, und wie man Performance in den Workflow der Webentwicklung einbinden kann.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit, Leerlauf, Reaktionsfähigkeit auf Benutzerinteraktionen und die Flüssigkeit des Scrollings und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht der tatsächlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten wie HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können, und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken in Bezug auf Web-Performance. Hier werden wir viele dieser Funktionen auf grundlegender Ebene vorstellen und Verweise zu tieferen Einblicken bereitstellen, um die Performance für jedes Thema zu verbessern.
- [HTML-Performance-Funktionen](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellanordnung Ihres Markups können die Performance Ihrer Website beeinflussen. Durch die Minimierung der Anzahl der DOM-Knoten und die Sicherstellung, dass die beste Ordnung und die besten Attribute für das Einfügen von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Performance zu gewährleisten.
- [Multimedia: Bilder und Video](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Das einfachste Optimierungspotenzial der Web-Performance ist oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes User-Agents bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Performance noch weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen, die Video-, Audio- und Bildinhalte auf die Performance haben, und die Methoden, um sicherzustellen, dass diese Auswirkungen so gering wie möglich sind.
- [CSS-Performance-Funktionen](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Fokus für die Optimierung der Performance sein, aber es gibt einige CSS-Funktionen, die die Performance stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die sich auf die Performance auswirken, und schlagen Möglichkeiten vor, mit Stilen umzugehen, um sicherzustellen, dass die Performance nicht negativ beeinträchtigt wird.
- [Best Practices für JavaScript-Performance](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript, wenn es richtig verwendet wird, kann interaktive und immersive Web-Erfahrungen ermöglichen — oder es kann die Download-Zeit, Renderzeit, In-App-Performance, Akkulaufzeit und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige bewährte JavaScript-Verfahren, die in Betracht gezogen werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.

## Performance-APIs

Die [Performance API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards zur Messung der Performance von Webanwendungen. Die folgenden Seiten bieten Übersichten über die Performance-APIs, einschließlich Informationen über ihre Verwendung:

- [Hochpräzises Timing](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance API erlaubt hochpräzise Messungen, die auf Zeit in potenzieller Sub-Millisekunden-Auflösung und einer stabilen monotopen Uhr basieren, die nicht durch Systemuhr-Abweichungen oder Anpassungen betroffen ist. Die hochauflösenden Timer sind für genaues Benchmarking erforderlich, anstelle der weniger präzisen und nicht monotonen {{jsxref("Date")}}-Zeitstempel.
- [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Webseite beeinträchtigen. Sie können langsame Benutzeroberflächen-Updates (UI) verursachen, was zu scheinbar nicht reagierenden Steuerelementen und {{Glossary("Jank", "ruckelnden")}} (oder nicht flüssigen) animierten Effekten und Scrollen führt, was zu Benutzerfrustration führt. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie die Long Animation Frames API verwendet wird.
- [Überwachen der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) berichtet Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen. Entwickler können diese Informationen verwenden, um Seiten zu identifizieren, die Aktualisierungen benötigen, um bfcache-kompatibel zu werden, was die Website-Performance verbessern kann.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigationstiming bietet Metriken, die mit der Navigation von einer Seite zu einer anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API verbunden sind. Zum Beispiel können Sie bestimmen, wie viel Zeit es dauert, ein Dokument zu laden oder zu entladen, oder die Zeit bis zur Fertigstellung der {{Glossary("DOM", "DOM")}}-Konstruktion und mögliche Interaktion mit dem DOM protokollieren.
- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance API bietet keine Performance-Datenanalyse oder Visualisierungen. Sie ist jedoch gut in Entwickler-Tools integriert, und ihre Daten werden häufig an Analyseendpunkte und -bibliotheken gesendet, um Performance-Metriken aufzuzeichnen, die helfen, die Daten zu evaluieren, um Performance-Engpässe zu identifizieren, die Ihre Benutzer betreffen. Diese Seite bietet einen Überblick darüber, welche Arten von Performance-API-Daten vorhanden sind, wie sie gesammelt werden und wie auf sie zugegriffen werden kann.
- [Ressourcen-Timing-API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten für das Laden der Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken nutzen, um beispielsweise die Zeit zu bestimmen, die zum Laden einer bestimmten Ressource (wie einem Bild oder Skript) erforderlich ist, sei es implizit als Teil des Seitenladevorgangs oder explizit aus JavaScript, beispielsweise unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing erlaubt es Servern, Metriken über den Anfrage-Antwort-Zyklus an den User-Agent zu kommunizieren. Sie können diese Informationen sammeln und auf serverseitige Metriken auf dieselbe Weise reagieren wie auf alle anderen Metriken, die mit der Performance-API verarbeitet werden.
- [User-Timing-API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark"- und "measure"-Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing) unter Verwendung der [Hochpräzisions-Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Performance-Zeitleiste des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich zur Messung und Beeinflussung der Seiten-Performance:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Ereignisse, auf die Sie achten können, um zu wissen, wann ein Dokument sichtbar oder versteckt wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu überprüfen.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Kooperative Planung von Hintergrundaufgaben-API** (auch als Hintergrundaufgaben-API oder [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API bekannt) ermöglicht es, Aufgaben in die Warteschlange zu stellen, die automatisch vom User-Agent ausgeführt werden, wenn er feststellt, dass es freie Zeit dafür gibt.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Das [Beacon](/de/docs/Web/API/Beacon_API)-Interface plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, Änderungen im Schnittpunkt eines Zielelements mit einem Vorfahr-Element oder mit einem Dokument auf oberster Ebene {{Glossary("Viewport", "Viewport")}} asynchron zu beobachten. Dies ermöglichte Anwendungsfälle wie [Timing der Element-Sichtbarkeit](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Macht die Dekodierungs- und Codierungsfähigkeiten eines Client-Geräts zugänglich, etwa ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein soll, mit Echtzeit-Feedback über die Wiedergabe, um adaptives Streaming besser zu ermöglichen, und Zugriff auf Display-Eigenschaftsinformationen.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems im Hinblick auf den allgemeinen Verbindungstyp (z.B. 'wifi', 'cellular', etc.). Diese können verwendet werden, um hochauflösende Inhalte oder niedrigauflösende Inhalte basierend auf der Verbindung des Benutzers auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API** bietet Informationen über den Ladezustand der Batterie des Systems und lässt Sie durch Ereignisse benachrichtigen, die gesendet werden, wenn sich der Batteriestand oder der Ladezustand ändern. Dies kann verwendet werden, um den Ressourcenverbrauch Ihrer App anzupassen, um den Batterieverbrauch zu reduzieren, wenn der Akku fast leer ist, oder um Änderungen zu speichern, bevor der Akku leer ist, um Datenverluste zu verhindern.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`**-Eigenschaft des schreibgeschützten [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`**-Eigenschaft des schreibgeschützten [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das zur Antwort für die Navigation präloadt wird, wenn das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde oder wenn nicht, `undefined`.

## Profiling und Tools

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen zur Nutzung und zum Verständnis der Performance-Funktionen in Ihren Entwickler-Tools, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem eingebauten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die Performance von Apps mit dem eingebauten Profiler von Firefox profilieren.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture)-Element
- [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)-Element
- [`<source>`](/de/docs/Web/HTML/Reference/Elements/source)-Element
- [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#attributes)-Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)-Attribut zum Preloaden von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage Collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-Encoding](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Ressourcenhinweise via [dns-prefetch](/de/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}}, und Prerender
- [HTTP/2](/de/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)

## Siehe auch

- [HTML-Leitfaden für Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Kumulative Layout-Verschiebungen (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Splitting")}}
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
  - {{Glossary("Long_task", "Langsame Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Hauptthread")}}
  - {{Glossary("Minification", "Minifizierung")}}
  - {{Glossary("Network_throttling", "Netzwerk-Drosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenvorhersage")}}
  - {{Glossary("Parse", "Parsen")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Performance")}}
  - {{Glossary("Prefetch", "Prefetch")}}
  - {{Glossary("Prerender", "Prerender")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Resource Timing")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server-Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Perceptual Speed Index)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "TCP langsamer Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Zeit bis zur Interaktivität (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in den Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
