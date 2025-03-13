---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Web-Performance bezieht sich auf die objektive Messung und die wahrgenommene Benutzererfahrung hinsichtlich der Ladezeit und Laufzeit. Web-Performance beschreibt, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsfähig zu werden, und wie flüssig der Inhalt während der Benutzerinteraktionen ist. Leistungsfragen umfassen: Ist das Scrollen flüssig? Reagieren Buttons schnell? Laden Pop-ups schnell und animieren reibungslos? Die objektiven Messungen umfassen die Ladezeit, die Frames pro Sekunde und die Zeit bis zur Interaktivität, und die subjektive Erfahrung bezieht sich darauf, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger es dauert, bis eine Website reagiert, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Features hinzuzufügen, um die Latenz zu kaschieren, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die weniger kritischen Teile der Erfahrung asynchron nachgeladen werden.

Es gibt Tools, APIs und Best Practices, die dabei helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln sie auf den folgenden Seiten.

## Leitfäden zur Web-Performance

- [Performance-Grundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Leistung bedeutet Effizienz. In diesem Dokument wird im Kontext von Open Web Apps allgemein erklärt, was Leistung ist, wie die Browserplattform dabei hilft, sie zu verbessern, und welche Tools und Verfahren Sie verwenden können, um sie zu testen und zu verbessern.
- [Seiten füllen: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Nutzer wünschen sich Web-Erfahrungen mit schnell ladenden und reibungslos interagierenden Inhalten. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen. Um zu verstehen, wie man Leistung und wahrgenommene Leistung verbessern kann, ist es hilfreich zu verstehen, wie der Browser funktioniert.
- [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zu einem Ziel zu reisen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, die Ursachen von Latenz zu optimieren und die Website-Performance zu testen, indem man hohe Latenzen emuliert, um für Nutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Timings: Wie lange ist zu lange?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln dafür, was als langsames Tempo beim Laden von Seiten gilt, aber es gibt spezifische Richtlinien, die anzeigen, dass Inhalte geladen werden (1 Sekunde), im Leerlauf sind (50ms), animieren (16,7ms) und auf Benutzereingaben reagieren (50 bis 200ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, dem ein Nutzer folgen möchte.
- [Navigation und Ressourcentimings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationstimings** sind Metriken, die die Navigationsereignisse eines Browsers messen. **Ressourcentimings** sind detaillierte Netzwerkzeitmessungen bezüglich des Ladens von Anwendungsressourcen. Beide bieten die gleichen nur-lesbaren Eigenschaften, aber Navigationstiming misst die Zeiten des Hauptdokuments, während Ressourcentiming die Zeiten für alle vom Hauptdokument aufgerufenen Ressourcen und die von diesen angeforderten Ressourcen angibt.
- [Startup-Performance optimieren](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Verbesserungen der Startup-Performance sind oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden können. Eine gute Benutzererfahrung beinhaltet, dass Ihre App schnell lädt. Dieser Artikel bietet Performance-Tipps und Vorschläge sowohl für die Erstellung neuer Anwendungen als auch für die Portierung von Anwendungen auf das Web von anderen Plattformen.
- [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Rendering-Pfad ist die Abfolge der Schritte, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu konvertieren. Die Optimierung des kritischen Rendering-Pfads verbessert die Renderleistung. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Rendertree und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Seitenladezeiten führt.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abruf, Ressourcenabruf oder Dokumentenrendering) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen darüber, welche Seiten der Nutzer als nächstes wahrscheinlich besuchen wird.
- [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist ein Limit, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Time to Hero Element) oder einen Schwellenwert über einen bestimmten Zeitraum gelten.
- [Performance-Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Monitoring realer Nutzer (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Ansichten zur Leistung und haben Vorteile, gute Anwendungsfälle und Schwächen. RUM eignet sich in der Regel am besten, um langfristige Trends zu verstehen, während synthetisches Monitoring sehr gut für Regressionstests und die Minderung kurzfristiger Leistungsprobleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze für die Leistungsüberwachung.
- [CSS- und JavaScript-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsleistung und Bildwiederholrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Leistungskosten für die Animation einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, da der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildwiederholrate")}} zu erreichen.

## Anleitungen für Einsteiger

Der MDN [Leitfaden zum Lernen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials, die die Grundlagen zur Performance abdecken. Beginnen Sie hier, wenn Sie neu im Bereich der Performance sind:

- [Web-Performance: Kurzer Überblick](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Überblick über die Lernpfade zur Web-Performance. Beginnen Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel beginnt das Modul mit einem guten Einblick in das, was Leistung tatsächlich ist — dies umfasst die Tools, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir über Leistung nachdenken, und wie wir Leistung in unseren Web-Entwicklungsworkflow integrieren können.
- [Wie nehmen Nutzer die Leistung wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Nutzer Ihre Website zu sein glauben. Diese Wahrnehmungen werden durch die tatsächliche Seitenladezeit, das Leerlaufen, die Reaktionsfähigkeit auf Benutzerinteraktionen und die Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade- und Animationsmetriken sowie die Reaktionsfähigkeitsmetriken und die besten Praktiken, um die Wahrnehmung der Nutzer zu verbessern, wenn nicht die tatsächlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Front-End-Komponenten HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken im Zusammenhang mit Web-Performance. Hier werden wir viele dieser Funktionen auf grundlegender Ebene vorstellen und Links zu tiefergehenden Erklärungen zur Verbesserung der Leistung für jedes Thema bereitstellen.
- [HTML-Leistungsmerkmale](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Reihenfolge Ihrer Markup-Quelle können die Leistung Ihrer Website beeinflussen. Durch Minimieren der Anzahl von DOM-Knoten und Sicherstellen, dass die beste Reihenfolge und Attribute für das Einfügen von Inhalten wie Styles, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Leistung zu gewährleisten.
- [Multimedia: Bilder und Videos](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die leichtesten Verbesserungen der Web-Performance sind oft Medienoptimierungen. Das Bereitstellen verschiedener Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes User-Agents ist möglich. Zusätzliche Tipps wie das Entfernen von Audio-Tracks aus Hintergrundvideos können die Leistung weiter verbessern. In diesem Artikel diskutieren wir die Auswirkungen von Video-, Audio- und Bildinhalten auf die Leistung und die Methoden, um sicherzustellen, dass diese Auswirkungen so minimal wie möglich sind.
- [CSS-Leistungsmerkmale](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag im Hinblick auf Leistungsoptimierung weniger wichtig erscheinen, aber es gibt einige CSS-Merkmale, die die Leistung stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen, und schlagen Möglichkeiten vor, wie mit Styles umzugehen ist, damit die Leistung nicht negativ beeinflusst wird.
- [JavaScript-Leistungsbest-Praktiken](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann, wenn es richtig verwendet wird, interaktive und immersive Web-Erfahrungen ermöglichen – oder es kann die Downloadzeit, die Renderzeit, die In-App-Performance, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-best-practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.

## Performance-APIs

Die [Performance-API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards, die zur Messung der Leistung von Web-Anwendungen verwendet werden. Die folgenden Seiten bieten eine Übersicht über die Performance-APIs sowie Informationen zu deren Verwendung:

- [Präzisionszeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance-API ermöglicht hochpräzise Messungen, die auf Zeit in potenzieller Sub-Millisekunden-Auflösung basieren und eine stabile monotone Uhr verwenden, die nicht für Systemuhrenverschiebung oder -anpassungen anfällig ist. Die hochauflösenden Timer sind notwendig für präzise Benchmarking anstelle der weniger präzisen und nicht-monotonen {{jsxref("Date")}}-Zeitstempel.
- [Timing für lange Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Website beeinflussen. Sie können langsame Benutzeroberflächen (UI) und scheinbar unresponsive Steuerelemente verursachen sowie {{Glossary("Jank", "ruckelnde")}} (oder nicht-glatte) animierte Effekte und Scrollings, was zu Frustration bei den Nutzern führt. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.
- [Überwachung der bfcache-Sperrgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) liefert Informationen darüber, warum das aktuelle Dokument beim Navigieren nicht den {{Glossary("bfcache", "bfcache")}} nutzen konnte. Entwickler können diese Information verwenden, um Seiten zu identifizieren, die Updates benötigen, um mit bfcache kompatibel zu sein, wodurch die Site-Performance verbessert wird.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigation Timing bietet Metriken im Zusammenhang mit der Navigation von einer Seite zur anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API. Zum Beispiel können Sie bestimmen, wie viel Zeit es braucht, um ein Dokument zu laden oder zu entladen, oder die Zeit protokollieren, bis der {{Glossary("DOM", "DOM")}}-Aufbau abgeschlossen ist und die Interaktion mit dem DOM möglich ist.
- [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance-API bietet keine Leistungsdatenanalyse oder -visualisierungen. Sie ist jedoch gut in Entwickler-Tools integriert und ihre Daten werden häufig an Analysepunkte und Bibliotheken gesendet, um Leistungskennzahlen aufzuzeichnen, die Ihnen helfen, die Daten zu bewerten, um Leistungsengpässe zu finden, die Ihre Nutzer betreffen. Diese Seite liefert einen Überblick darüber, welche Arten von Leistungs-API-Daten existieren, wie sie gesammelt werden und wie sie abgerufen werden können.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten für das Laden von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu bestimmen, die das Laden einer bestimmten Ressource (wie ein Bild oder ein Skript) dauert, entweder implizit als Teil des Seitenladens oder explizit von JavaScript, beispielsweise unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing ermöglicht es Servern, dem User-Agent Metriken über den Anfrage-Antwort-Zyklus mitzuteilen. Sie können diese Informationen sammeln und auf Server-seitige Metriken in der gleichen Weise reagieren, wie alle anderen Metriken, die mit der Performance-API verarbeitet werden.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel unter Verwendung der [User Timing API](/de/docs/Web/API/Performance_API/User_timing) Typen "mark" und "measure" mit [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Leistungszeitleiste des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich zur Messung und Beeinflussung der Seitenleistung:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Ereignisse, auf die Sie achten können, um zu wissen, wann ein Dokument sichtbar oder ausgeblendet wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu überprüfen.
- [API für Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
  - : Die **"Kooperative Planung von Hintergrundaufgaben API"** (auch bezeichnet als API für Hintergrundaufgaben oder die [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API) bietet die Möglichkeit, Aufgaben zu planen, die automatisch vom User Agent ausgeführt werden, wenn er feststellt, dass freie Zeit dafür vorhanden ist.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Das [Beacon](/de/docs/Web/API/Beacon_API)-Interface plant eine asynchrone und nicht blockierende Anfrage an einen Web-Server.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, Änderungen im Schnittbereich eines Ziel Elements mit einem Vorfahr Element oder dem Viewport eines Dokuments asynchron zu beobachten.
    Dies ermöglicht Anwendungsfälle wie das [Timing der Sichtbarkeit von Elementen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Exponiert die Dekodierungs- und Kodierungsfähigkeiten eines Client-Geräts, wie z.B., ob Medien unterstützt werden und ob die Wiedergabe flüssig und energetisch effizient sein sollte, mit Echtzeit-Feedback zur Wiedergabe, um adaptives Streaming besser zu ermöglichen, sowie den Zugriff auf Informationen zu Anzeigeeigenschaften.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. 'WLAN, 'mobil', etc.). Dies kann verwendet werden, um hochauflösende Inhalte oder niedrigauflösende Inhalte basierend auf der Verbindung des Benutzers auszuwählen.
- [Batteriestatus-API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Batterie-API** stellt Informationen über den Akkuladestand des Systems bereit und lässt Sie mit Ereignissen benachrichtigt werden, die gesendet werden, wenn sich der Akkuladestand oder der Ladezustand ändert. Dies kann verwendet werden, um den Ressourcenverbrauch Ihrer App anzupassen, um den Batterieverbrauch zu verringern, wenn der Akku schwach ist, oder um Änderungen zu speichern, bevor der Akku leer ist, um Datenverluste zu vermeiden.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces gibt die ungefähre Menge an Gerätespeicher in Gigabytes zurück.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`**-Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent) Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf die Navigationspreload-[`Response`](/de/docs/Web/API/Response) aufgelöst wird, wenn [Navigationspreload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` andernfalls.

## Profilerstellung und Tools

- [Firefox Profiler Leistungsmerkmale](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie Sie die Leistungsmerkmale in Ihren Entwickler-Tools verwenden und verstehen können, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem eingebauten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie Sie die App-Performance mit dem eingebauten Profiler von Firefox profilieren können.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Element/picture) Element
- [`<video>`](/de/docs/Web/HTML/Element/video) Element
- [`<source>`](/de/docs/Web/HTML/Element/source) Element
- [`<img>`](/de/docs/Web/HTML/Element/img#attributes) Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) Attribut für das Vorladen von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage Collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-Encoding](/de/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- Ressource-Hinweise über [dns-prefetch](/de/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [HTTP/2](/de/docs/Web/HTTP/Guides/Messages#http2_messages)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)

## Siehe auch

- [Responsive Images](/de/docs/Web/HTML/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Kumulative Layout-Änderungen (CLS)")}}
  - {{Glossary("Code_splitting", "Code Splitting")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}}
  - {{Glossary("First_CPU_idle", "First CPU idle")}}
  - {{Glossary("First_paint", "First Paint")}}
  - {{Glossary("gzip_compression", "Gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaction to next paint (INP)")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Load")}}
  - {{Glossary("Long_task", "Langsame Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Main Thread")}}
  - {{Glossary("Minification", "Minimierung")}}
  - {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenerkennung")}}
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
  - {{Glossary("Speculative_parsing", "Spekulatives Parsing")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Wahrnehmbarer Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetische Überwachung")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "Langsamstart von TCP")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Time to First Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Time to Interactive (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
