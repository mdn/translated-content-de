---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: bf4475f3ca689796977ddf27f4ec8623d35b4db5
---

Web-Performance sind die objektiven Messungen und die wahrgenommene Benutzererfahrung von Ladezeit und Laufzeit.
Web-Performance beschreibt, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsschnell zu werden, und wie flüssig der Inhalt während der Benutzerinteraktionen ist.
Leistungsfragen beinhalten Aspekte wie: Ist das Scrollen flüssig? Sind Buttons reaktionsschnell? Laden Pop-ups schnell und animieren sie flüssig?
Zu den objektiven Messungen gehören die Ladezeit, Bilder pro Sekunde und die Zeit, bis die Interaktivität erreicht wird, während die subjektive Erfahrung beschreibt, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger es dauert, bis eine Seite reagiert, desto mehr Benutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gestaltet wird, während die längeren Teile der Erfahrung asynchron geladen werden.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln diese auf den folgenden Seiten.

## Leitfäden zur Web-Performance

Die [Performance-Leitfäden](/de/docs/Web/Performance/Guides) sind Ressourcen, die beschreiben, wie Browser funktionieren, was die Leistung beeinflusst und wie man die Leistung in verschiedenen Aspekten Ihrer Anwendung misst, optimiert und überwacht.

- [Grundlagen der Performance](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Leistung steht für Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument im Allgemeinen, was Leistung ist, wie die Browserplattform hilft, sie zu verbessern und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Seiteninhalte laden: Wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell geladen werden und mit denen sie flüssig interagieren können. Daher sollte ein Entwickler diese beiden Ziele anstreben.
    Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessert, hilft es zu verstehen, wie der Browser funktioniert.
- [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, die Ursachen der Latenz zu reduzieren und die Leistung der Seite zu testen, indem man hohe Latenz simuliert, um sie für Benutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Timings: Wie lange ist zu lang?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln dafür, was als langsames Tempo beim Laden von Seiten gilt, aber es gibt spezifische Richtlinien dafür, dass Inhalte in (1 Sekunde) laden, untätig (50 ms), animierend (16,7 ms) und auf Benutzereingaben reagieren (50 bis 200 ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist ein Versuch, Domainnamen zu lösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, das ein Benutzer zu folgen versucht.
- [Navigations- und Ressourcentimings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationstiming** sind Metriken, die die Navigationsereignisse eines Dokuments im Browser messen. **Ressourcentimings** sind detaillierte Netzwerkzeitmessungen bezüglich des Ladens von Anwendungsressourcen. Beide enthalten dieselben nur lesbaren Eigenschaften, aber Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcentiming die Zeiten für alle Ressourcen oder Ressourcen misst, die durch dieses Hauptdokument und die angeforderten Ressourcen geladen wurden.
- [Optimierung der Startleistung](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung Ihrer Startleistung ist oft eine der wertvollsten Leistungsoptimierungen, die vorgenommen werden kann.
    Eine gute Benutzererfahrung beinhaltet sicherzustellen, dass Ihre App schnell geladen wird. Dieser Artikel bietet Performance-Tipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen von anderen Plattformen ins Web.
- [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu konvertieren. Die Optimierung des kritischen Rendering-Pfads verbessert die Renderleistung.
    Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), Renderbaum und Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Methode, um die Länge des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu kürzeren Seitenladezeiten führt.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Lookups, das Laden von Ressourcen oder das Rendern von Dokumenten) auszuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer am wahrscheinlichsten als nächstes besucht.
- [Performance Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist eine Grenze, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle Dateien, die auf einer Seite geladen werden, eine spezifische Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Zeit bis zum Hero-Element) oder einen Schwellenwert über einen Zeitraum gelten.
- [Performance-Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Blickwinkel auf die Leistung und haben Vorzüge, gute Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen am besten, um langfristige Trends zu verstehen, während synthetisches Monitoring sehr gut für Regressionstests und die Milderung kurzfristiger Leistungsprobleme während der Entwicklung geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze des Performance-Monitorings.
- [CSS- und JavaScript-Animationsleistung](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsleistung und Bildfrequenz](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animation im Web kann über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen.
    Die Leistungskosten zur Animation einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und die Animation aufwendiger CSS-Eigenschaften kann zu {{Glossary("Jank", "Ruckeln")}} führen, da der Browser Probleme hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Tutorials für Anfänger

Der MDN [Web-Performance-Lernbereich](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials zu Performance-Grundlagen. Beginnen Sie hier, wenn Sie neu im Thema Performance sind:

- [Das "Warum" der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel diskutiert, warum Web-Performance wichtig für Zugänglichkeit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber welche Faktoren beeinflussen die Web-Performance und wie wird sie gemessen? Dieser Artikel führt die Komponenten der Performance ein, vom Laden und Rendern von Webseiten, einschließlich der Art und Weise, wie Ihre Inhalte in den Browser Ihrer Nutzer gelangen, um angezeigt zu werden, bis hin zu den Gruppen von Menschen, die wir bei der Betrachtung der Performance berücksichtigen müssen.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als wie schnell Ihre Website in Millisekunden ist, ist, wie schnell Ihre Benutzer Ihre Seite wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Seitenladezeit, Untätigkeit, Reaktionsfähigkeit auf Benutzereingaben und die Flüssigkeit von Scrolling und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-Metriken, Animations- und Reaktionsfähigkeitsmetriken sowie Best Practices, um die Benutzerwahrnehmung zu verbessern, wenn nicht sogar die tatsächlichen Zeiten.
- [Leistungsmessung](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Nachdem Sie nun einige Leistungsmetriken verstanden haben, gehen wir tiefer auf Leistungswerkzeuge, Metriken und APIs ein und wie wir die Leistung zum Teil des Web-Entwicklungs-Workflows machen können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Der niedrig hängende Früchte im Bereich Web-Performance ist oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf der Kapazität, Größe und Pixeldichte jedes Benutzeragenten bereitzustellen. In diesem Artikel diskutieren wir den Einfluss von Bildern auf die Performance und die Methoden, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Der niedrig hängende Früchte im Bereich Web-Performance ist oft die Medienoptimierung. In diesem Artikel diskutieren wir den Einfluss von Videoinhalten auf die Performance und geben Tipps, wie das Entfernen von Audiotracks aus Hintergrundvideos die Performance verbessern kann.
- [JavaScript-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann, richtig eingesetzt, interaktive und immersive Web-Erfahrungen ermöglichen – oder es kann die Download-Zeit, die Renderzeit, die In-App-Leistung, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel umreißt einige JavaScript-Best-Practices, die in Betracht gezogen werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.
- [HTML-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Indem die Anzahl der DOM-Knoten minimiert wird und sichergestellt wird, dass die beste Reihenfolge und Attribute verwendet werden, um Inhalte wie Stile, Skripte, Medien und Drittanbieter-Skripte einzubinden, können Sie die Benutzererfahrung drastisch verbessern. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [CSS-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsfokus für verbesserte Leistung sein, aber es gibt einige CSS-Eigenschaften, die die Leistung mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen, und vorgeschlagene Methoden zur Handhabung von Stilen, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [Der geschäftliche Nutzen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Leistung zu verbessern, aber wie schnell ist schnell genug? Wie können Sie Entscheidungsträger von der Wichtigkeit dieser Bemühungen überzeugen? Einmal optimiert, wie können Sie sicherstellen, dass keine Aufblähung zurückkehrt? In diesem Artikel betrachten wir das Überzeugen des Managements, die Entwicklung einer Leistungskultur und eines Leistungsbudgets und führen Wege ein, um sicherzustellen, dass Rückschritte nicht in Ihren Code-Bestand schleichen.
- [Web-Performance-Best-Practices und -Tipps](/de/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : Dieser Artikel behandelt mehrere Themen auf einfachem Niveau und bietet Links zu tiefergehenden Analysen, um die Leistung für jedes Thema zu verbessern. Zusätzlich zu Front-End-Themen wie HTML, CSS, JavaScript und Mediendateien werden auch APIs, Entwicklertools, Best Practices und schlechte Praktiken im Hinblick auf Web-Performance behandelt.

## Performance-APIs

Die [Performance API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards, die zur Messung der Leistung von Webanwendungen verwendet werden.
Die folgenden Seiten bieten Übersichten über die Performance-APIs inklusive Informationen zur Verwendung:

- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance API ermöglicht hochpräzise Messungen, die auf Sub-Millisekunden-Auflösung und einer stabilen, monotonen Uhr basieren, die nicht durch Systemuhrabweichungen oder -anpassungen beeinflusst wird.
    Die hochauflösenden Timer werden für präzises Benchmarking benötigt anstatt der weniger präzisen und nicht-monotonen {{jsxref("Date")}}-Zeitstempel.
- [Zeitmessung für lange Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsrahmen** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen.
    Sie können zu langsamen Benutzeroberflächen- (UI-) Aktualisierungen führen und scheinbar unresponsive Steuerelemente sowie {{Glossary("Jank", "ruckelnde")}} (oder nicht flüssige) Animationseffekte und Scrollen verursachen, was zu Benutzerfrustration führen kann.
    Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsrahmen zu erhalten und ihre Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.
- [Überwachen der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft liefert Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu nutzen.
    Entwickler können diese Informationen verwenden, um Seiten zu identifizieren, die aktualisiert werden müssen, um bfcache-kompatibel zu sein und so die Leistung der Seite zu verbessern.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigationstiming bietet Metriken, die mit dem Navigieren von einer Seite zur anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API verbunden sind.
    Zum Beispiel können Sie feststellen, wie lange es dauert, ein Dokument zu laden oder zu entladen oder die Zeit protokollieren, die vergangen ist, bis die {{Glossary("DOM", "DOM")}}-Konstruktion abgeschlossen ist und eine Interaktion mit dem DOM möglich ist.
- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance API liefert keine Leistungsdatenanalysen oder Visualisierungen.
    Sie ist jedoch gut in Entwicklertools integriert und ihre Daten werden häufig an Analyseendpunkte und Bibliotheken gesendet, um Leistungsmetriken aufzuzeichnen, die Ihnen helfen, die Daten zu bewerten, um Leistungsengpässe zu identifizieren, die Ihre Benutzer betreffen.
    Diese Seite gibt einen Überblick darüber, welche Arten von Performance-API-Daten existieren, wie sie gesammelt werden und wie sie abgerufen werden können.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten für das Laden der Ressourcen einer Anwendung.
    Eine Anwendung kann die Zeitmetriken verwenden, um z. B. die Dauer zu bestimmen, die erforderlich ist, um eine bestimmte Ressource zu laden (wie ein Bild oder ein Skript), entweder implizit als Teil des Seitenladens oder explizit aus JavaScript, beispielsweise unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server-Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing ermöglicht es Servern, Metriken über den Anforderungs-Antwort-Zyklus an den Benutzeragenten zu kommunizieren.
    Sie können diese Informationen sammeln und serverseitige Metriken auf die gleiche Weise verarbeiten wie alle anderen mit der Performance API verarbeiteten Metriken.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mit den "mark"- und "measure"-Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing) unter Verwendung von [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Leistungstimeline des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich, um die Seitenleistung zu messen und zu beeinflussen:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Stellt Ereignisse bereit, die Sie beobachten können, um zu wissen, wann ein Dokument sichtbar oder ausgeblendet wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu betrachten.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Kooperative Planung von Hintergrundaufgaben API** (auch bekannt als Background Tasks API oder [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API) bietet die Möglichkeit, Aufgaben in eine Warteschlange einzureihen, die automatisch vom Benutzeragenten ausgeführt werden, wenn er feststellt, dass es freie Zeit dafür gibt.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet einen Weg, um asynchron Änderungen bei der Schnittmenge eines Zielelements mit einem Vorfahrenelement oder mit einem Dokument auf hoher Ebene {{Glossary("Viewport", "Viewport")}} zu beobachten.
    Dies ermöglicht Anwendungsfälle wie [Zeitmessung der Element-Sichtbarkeit](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Bietet Zugriff auf die Dekodier- und Kodierfähigkeiten eines Client-Geräts, zum Beispiel, ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte, mit Echtzeit-Feedback über die Wiedergabe, um besseres adaptives Streaming zu ermöglichen, und Zugriff auf Informationen zu Anzeigeeigenschaften.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z. B. 'WiFi', 'Mobil', usw.).
    Dies kann verwendet werden, um hochauflösende Inhalte oder niedrigauflösende Inhalte basierend auf der Verbindung des Benutzers auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API** bietet Informationen über den Ladezustand des Systems und lässt Sie durch Ereignisse benachrichtigen, die gesendet werden, wenn sich der Batteriestatus oder Ladezustand ändert.
    Dies kann verwendet werden, um den Ressourcenverbrauch Ihrer App anzupassen, um den Batterieabfluss zu reduzieren, wenn der Akku schwach ist, oder Änderungen zu speichern, bevor der Akku leer ist, um Datenverlust zu verhindern.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge des Gerätespeichers in Gigabyte aus.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`**-Eigenschaft der [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das bei der Navigation preload [`Response`](/de/docs/Web/API/Response) aufgelöst wird, wenn das [Navigation Preload Manager](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` andernfalls.

## Profiling und Werkzeuge

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen darüber, wie man die Leistungsmerkmale in Ihren Entwicklertools nutzt und versteht, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem eingebauten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Erfahren Sie, wie Sie die Leistung Ihrer App mit dem integrierten Profiler von Firefox analysieren.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture) Element
- [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) Element
- [`<source>`](/de/docs/Web/HTML/Reference/Elements/source) Element
- [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#attributes) Attribute (wie `srcset`) für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) Attribut zum Vorladen von Inhalten über HTML

### CSS

- {{cssxref("will-change")}}

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

- [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Kumulative Layoutverschiebungen (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Splitting")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain-Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "Erster Contentful Paint (FCP)")}}
  - {{Glossary("First_CPU_idle", "Erste CPU-Inaktivität")}}
  - {{Glossary("First_paint", "Erster Paint")}}
  - {{Glossary("gzip_compression", "gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaktion bis zum nächsten Paint (INP)")}}
  - {{Glossary("Jank", "Ruckeln")}}
  - {{Glossary("Largest_contentful_paint", "Größtes Contentful Paint (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Load")}}
  - {{Glossary("Long_task", "Lange Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Hauptthread")}}
  - {{Glossary("Minification", "Minifizierung")}}
  - {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenvorhersage")}}
  - {{Glossary("Parse", "Parsen")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}
  - {{Glossary("Prefetch", "Vorladen")}}
  - {{Glossary("Prerender", "Prerendern")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Ressourcen-Timing")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server-Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Wahrnehmungs-Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "Langsamer Start von TCP")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Time to First Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Time to Interactive (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
