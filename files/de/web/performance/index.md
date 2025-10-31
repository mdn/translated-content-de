---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

Web-Performance bezieht sich auf die objektiven Messungen und die wahrgenommene Benutzererfahrung von Ladezeiten und Laufzeiten.
Web-Performance beschreibt, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsfähig zu werden, und wie flüssig der Inhalt während der Benutzerinteraktionen ist.
Performance befasst sich mit Fragen wie: Ist das Scrollen flüssig? Reagieren die Schaltflächen? Werden Pop-ups schnell geladen und flüssig animiert?
Zu den objektiven Messungen gehören Ladezeiten, Bilder pro Sekunde und die Zeit, bis die Seite interaktiv wird. Die subjektive Erfahrung beschreibt, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger eine Website benötigt, um zu reagieren, desto mehr Benutzer werden die Seite verlassen. Es ist wichtig, Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem das Erlebnis so schnell wie möglich verfügbar und interaktiv gemacht wird, während die weiteren Teile des Erlebnisses asynchron geladen werden.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Wir behandeln diese auf den folgenden Seiten.

## Web-Performance-Leitfäden

Die [Performance-Leitfäden](/de/docs/Web/Performance/Guides) sind Ressourcen, die beschreiben, wie Browser funktionieren, was die Performance beeinflusst und wie Sie die Performance in verschiedenen Aspekten Ihrer Anwendung messen, optimieren und überwachen können.

- [Grundlagen der Performance](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Performance bedeutet Effizienz. Im Kontext von Open-Web-Apps erklärt dieses Dokument allgemein, was Performance ist, wie die Browserplattform hilft, sie zu verbessern, und welche Werkzeuge und Prozesse Sie zum Testen und Verbessern verwenden können.
- [Seitenbefüllung: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Benutzer wünschen sich Web-Erlebnisse mit schnell ladendem und flüssig interaktivem Inhalt. Daher sollte ein Entwickler versuchen, diese beiden Ziele zu erreichen.
    Um zu verstehen, wie Performance und wahrgenommene Performance verbessert werden können, hilft es zu verstehen, wie der Browser funktioniert.
- [Verständnis für Latenz](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen. Im Hinblick auf die Performance-Optimierung ist es wichtig, die Ursachen der Latenz zu reduzieren und die Website-Performance zu testen, indem man hohe Latenz emuliert, um für Benutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lange?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln dafür, was ein langsames Tempo beim Laden von Seiten ausmacht, aber es gibt spezifische Richtlinien, die darauf hinweisen, dass der Inhalt laden wird (1 Sekunde), Leerlauf (50 ms), Animation (16,7 ms) und Reaktion auf Benutzereingaben (50 bis 200 ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist der Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, dem ein Benutzer zu folgen versucht.
- [Navigations- und Ressourcentimings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigationstiming** sind Metriken, die die Dokumentnavigationsereignisse eines Browsers messen. **Ressourcen-Timings** sind detaillierte Netzwerk-Zeitmessungen zum Laden der Ressourcen einer Anwendung. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber Navigationstiming misst die Timings des Hauptdokuments, während das Ressourcen-Timing die Zeiten für alle Ressourcen oder Ressourcen liefert, die von diesem Hauptdokument und den angeforderten Ressourcen der Ressourcen aufgerufen werden.
- [Optimierung der Startperformance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung der Startperformance ist oft eine der wertvollsten Performance-Optimierungen, die vorgenommen werden können.
    Eine gute Benutzererfahrung beinhaltet, dass Ihre App schnell lädt. Dieser Artikel bietet Performance-Tipps und Vorschläge sowohl für das Schreiben neuer Anwendungen als auch für das Portieren von Anwendungen auf das Web von anderen Plattformen.
- [Kritischer Renderingpfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Renderingpfad ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Renderingpfads verbessert die Render-Performance.
    Der kritische Renderingpfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Rendertree und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und nur dann zu laden, wenn sie benötigt werden. Es ist eine Methode, um die Länge des [kritischen Renderingpfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was in verkürzten Seitenladezeiten resultiert.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abruf, Ressourcenabruf oder das Rendern von Dokumenten) auszuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen darüber, welche Seiten der Benutzer als nächstes am wahrscheinlichsten besuchen wird.
- [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist eine Begrenzung, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezifische Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Zeit zum Hauptelement) oder eine Schwelle über einen bestimmten Zeitraum gelten.
- [Performance-Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **real user monitoring (RUM)** sind zwei Ansätze zur Überwachung und Bereitstellung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten unterschiedliche Ansichten zur Performance und haben Vorteile, gute Anwendungsfälle und Schwächen. RUM eignet sich im Allgemeinen am besten für das Verständnis langfristiger Trends, während sich synthetisches Monitoring sehr gut für Regressionstests und zur Minderung kurzfristiger Performanceprobleme während der Entwicklung eignet. In diesem Artikel definieren und vergleichen wir diese beiden Performance-Monitoring-Ansätze.
- [CSS- und JavaScript-Animationsperformance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für ein angenehmes Benutzererlebnis bei vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS {{cssxref("transition","transitions")}}/{{cssxref("animation","animations")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animationsperformance und Bildwiederholrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen.
    Die Leistungskosten für das Animieren einer CSS-Eigenschaft können von einer Eigenschaft zur anderen variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Jank")}} führen, wenn der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildwiederholrate")}} zu erreichen.

## Tutorials für Anfänger

Der MDN [Web Performance Learning Area](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktuelle Tutorials, die die Grundlagen der Performance abdecken. Beginnen Sie hier, wenn Sie neu in der Performance sind:

- [Das "Warum" der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel thematisiert, warum Web-Performance wichtig für Zugänglichkeit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber welche Faktoren beeinflussen die Web-Performance und wie wird sie gemessen? Dieser Artikel führt in die Komponenten der Performance ein, vom Laden und Rendern von Webseiten, einschließlich wie Ihr Inhalt in den Browsern Ihrer Nutzer angezeigt wird, bis hin zu den Personengruppen, die wir berücksichtigen müssen, wenn wir über Performance nachdenken.
- [Wie nehmen Benutzer Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden durch die tatsächliche Seitenladezeit, Leerlaufzeiten, Reaktionsfähigkeit auf Benutzerinteraktionen und die Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht der tatsächlichen Zeiten.
- [Performance-Messung](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Jetzt, da Sie einige Performance-Kennzahlen verstehen, tauchen wir tiefer in Performance-Tools, Metriken und APIs ein und wie wir die Performance in den Entwicklungsworkflow integrieren können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die einfachsten Maßnahmen zur Verbesserung der Web-Performance sind oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes Benutzeragenten zu servieren. In diesem Artikel besprechen wir den Einfluss von Bildern auf die Performance und die Methoden, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Die einfachsten Maßnahmen zur Verbesserung der Web-Performance sind oft die Medienoptimierung. In diesem Artikel diskutieren wir den Einfluss von Videoinhalten auf die Performance und geben Tipps, wie das Entfernen von Audiospuren aus Hintergrundvideos die Performance verbessern kann.
- [JavaScript-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann bei richtiger Verwendung interaktive und immersive Web-Erlebnisse ermöglichen – oder es kann die Downloadzeit, Renderzeit, In-App-Performance, die Batterielebensdauer und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.
- [HTML-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Durch die Minimierung der Anzahl der DOM-Knoten, die sicherstellen, dass die beste Reihenfolge und die besten Attribute für das Einschließen von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Performance sicherzustellen.
- [CSS-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsfokus für verbesserte Performance sein, aber es gibt einige CSS-Funktionen, die die Performance mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die sich auf die Performance auswirken und schlagen Möglichkeiten vor, wie Stile gehandhabt werden können, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [Das Geschäftsszenario für Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Performance zu verbessern, aber wie schnell ist schnell genug? Wie können Sie die Verantwortlichen von der Bedeutung dieser Bemühungen überzeugen? Einmal optimiert, wie können Sie sicherstellen, dass sich keine Aufblähung zurückschleicht? In diesem Artikel untersuchen wir, wie man das Management überzeugt, eine Performance-Kultur und ein Performance-Budget entwickelt und Möglichkeiten einführt, Rückschritten in Ihrem Code zu verhindern.
- [Web-Performance Best Practices & Tipps](/de/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : Dieser Artikel behandelt mehrere Themen auf einer grundlegenden Ebene und bietet Links zu tiefergehenden Informationen, um die Performance für jedes Thema zu verbessern. Neben Front-End-Themen wie HTML, CSS, JavaScript und Mediendateien werden auch APIs, Entwicklertools, Best Practices und schlechte Praktiken im Zusammenhang mit der Web-Performance behandelt.

## Performance-APIs

Die [Performance-API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards, die zur Messung der Performance von Webanwendungen verwendet werden.
Die folgenden Seiten bieten Übersichten über die Performance-APIs und Informationen zur Nutzung derselben:

- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance-API ermöglicht hochpräzise Messungen, die auf der Zeit in potenzieller Sub-Millisekunden-Auflösung und einer stabilen monotonen Uhr basieren, die nicht von Systemuhrverstimmungen oder Anpassungen betroffen ist.
    Die hochauflösenden Timer sind für genaues Benchmarking erforderlich, anstelle der weniger präzisen und nicht-monotonischen {{jsxref("Date")}}-Zeitstempel.
- [Timing langer Animations-Frames](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animations-Frames** (LoAFs) können die Benutzererfahrung einer Website beeinflussen.
    Sie können langsame Benutzeroberflächenaktualisierungen verursachen, was zu scheinbar unempfindlichen Steuerelementen und {{Glossary("Jank", "ruckeligen")}} (oder nicht glatten) Animationseffekten und Scrollbewegungen führen kann, was zu Frustrationen bei den Benutzern führt.
    Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animations-Frames zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.
- [Überwachen von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft gibt Informationen darüber, warum das aktuelle Dokument daran gehindert wurde, den {{Glossary("bfcache", "bfcache")}} bei der Navigation zu verwenden.
    Entwickler können diese Informationen verwenden, um Seiten zu identifizieren, die Aktualisierungen benötigen, um bfcache-kompatibel zu werden und damit die Performance der Seite zu verbessern.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigationstiming bietet Metriken, die mit der Navigation von einer Seite zu einer anderen in Verbindung stehen, über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API.
    Zum Beispiel können Sie feststellen, wie viel Zeit es dauert, ein Dokument zu laden oder zu entladen, oder die Zeit erfassen, die bis zur Fertigstellung der {{Glossary("DOM", "DOM")}}-Konstruktion benötigt wird und Interaktionen mit dem DOM möglich sind.
- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance-API bietet keine Leistungsdatenanalyse oder -visualisierungen.
    Die Performance-API ist jedoch gut in Entwicklertools integriert und ihre Daten werden oft an Analyse-Endpunkte und Bibliotheken gesendet, um Leistungsmetriken aufzuzeichnen und Ihnen zu helfen, die Daten zu evaluieren, um Performance-Engpässe zu finden, die Ihre Benutzer betreffen.
    Diese Seite bietet eine Übersicht darüber, welche Arten von Performance-API-Daten existieren, wie sie gesammelt werden und wie darauf zugegriffen werden kann.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Resource Timing ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Zeitmessdaten zum Laden von Anwendungsressourcen.
    Eine Anwendung kann die Timing-Metriken nutzen, um zum Beispiel die Zeit zu bestimmen, die das Laden einer bestimmten Ressource (wie eines Bildes oder eines Skripts) dauert, entweder implizit als Teil des Seitenladens oder explizit aus JavaScript, zum Beispiel unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Server-Timing ermöglicht es Servern, Metriken über den Request-Response-Zyklus an den Benutzeragenten zu übermitteln.
    Sie können diese Informationen sammeln und auf serverseitige Metriken auf dieselbe Weise reagieren wie auf alle anderen Metriken, die mit der Performance-API verarbeitet werden.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel unter Verwendung der [User Timing API](/de/docs/Web/API/Performance_API/User_timing)'s "Mark"- und "Measure"-Eintragstypen mit [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp), die Teil der Leistungslinie des Browsers sind.

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich, um die Seitenperformance zu messen und zu beeinflussen:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Ereignisse, die überwacht werden können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu betrachten.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Cooperative Scheduling of Background Tasks API** (auch als Background Tasks API oder [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API bezeichnet) bietet die Möglichkeit, Aufgaben automatisch in die Warteschlange zu stellen, die vom Benutzeragenten ausgeführt werden, wenn er feststellt, dass es freie Zeit dafür gibt.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, um Änderungen im Schnittpunkt eines Zielelements mit einem übergeordneten Element oder mit einem Dokument auf oberster Ebene {{Glossary("Viewport", "Viewport")}} asynchron zu beobachten.
    Dies ermöglichte Anwendungsfälle wie [Timing der Element-Sichtbarkeit](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessierende Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Exponiert die Dekodier- und Kodierfähigkeiten eines Clientgeräts, wie etwa, ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte, mit Echtzeit-Feedback über die Wiedergabe, um adaptives Streaming besser zu ermöglichen und Zugriff auf Anzeigeinformationen zu erhalten.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Verbindung des Systems hinsichtlich des allgemeinen Verbindungstyps (z.B. "WLAN", "mobil", etc.).
    Dies kann verwendet werden, um hochauflösende oder niedrigauflösende Inhalte basierend auf der Verbindung des Benutzers auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API** stellt Informationen über den Batterieladestand des Systems bereit und lässt zu, Benachrichtigungen bei Änderungen des Batterieladestands oder -status zu empfangen.
    Dies kann verwendet werden, um den Ressourcenverbrauch Ihrer App anzupassen, um den Batterieverbrauch zu reduzieren, wenn der Batteriestand niedrig ist, oder um Änderungen vor dem Ausfall der Batterie zu speichern, um Datenverluste zu vermeiden.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die **`deviceMemory`** schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die **`preloadResponse`** schreibgeschützte Eigenschaft der [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf die Navigationsvorlade-[`Response`](/de/docs/Web/API/Response) aufgelöst wird, wenn das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` andernfalls.

## Profiling und Tools

- [Firefox Profiler Leistungsmerkmale](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen dazu, wie man die Leistungsmerkmale in Ihren Entwicklertools nutzt und versteht, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem integrierten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Lernen Sie, wie man die App-Performance mit dem integrierten Profiler von Firefox analysiert.

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
  - {{Glossary("First_contentful_paint", "Erster inhaltlicher Anstrich (FCP)")}}
  - {{Glossary("First_CPU_idle", "Erste CPU-Leerlaufzeit")}}
  - {{Glossary("First_paint", "Erster Anstrich")}}
  - {{Glossary("gzip_compression", "gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaktion bis zum nächsten Anstrich (INP)")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Größter inhaltlicher Anstrich (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Loading")}}
  - {{Glossary("Long_task", "Lange Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Hauptthread")}}
  - {{Glossary("Minification", "Minifizierung")}}
  - {{Glossary("Network_throttling", "Netzwerkdrosselung")}}
  - {{Glossary("Packet", "Packet")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenerkennung")}}
  - {{Glossary("Parse", "Parsen")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Performance")}}
  - {{Glossary("Prefetch", "Prefetch")}}
  - {{Glossary("Prerender", "Prerender")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Resource Timing")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Wahrnehmungs-Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "TCP-Langsamstart")}}
  - {{Glossary("TCP", "Übertragungssteuerungsprotokoll (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Zeit bis zur Interaktivität (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree-Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)
