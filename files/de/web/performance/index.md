---
title: Web-Performance
short-title: Performance
slug: Web/Performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Web-Performance bezieht sich auf die objektiven Messungen und die wahrgenommene Benutzererfahrung hinsichtlich Ladezeit und Laufzeit. Web-Performance beschreibt, wie lange eine Website benötigt, um zu laden, interaktiv und reaktionsfähig zu werden, und wie flüssig der Inhalt während der Benutzerinteraktionen ist. Performance-Fragen beinhalten: Ist das Scrollen flüssig? Reagieren die Schaltflächen schnell? Laden Pop-ups schnell und animieren flüssig? Zu den objektiven Messungen gehören die Ladezeit, Bilder pro Sekunde und die Zeit bis zur Interaktivität, während die subjektive Erfahrung beschreibt, wie lange es sich anfühlt, bis der Inhalt geladen ist.

Je länger eine Seite benötigt, um zu reagieren, desto mehr Nutzer werden die Seite verlassen. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz durch eine möglichst verfügbare und interaktive Erfahrung zu verbergen, während die längeren Teile der Erfahrung asynchron geladen werden.

Es gibt Tools, APIs und Best Practices, die uns helfen, die Web-Performance zu messen und zu verbessern. Diese behandeln wir auf den folgenden Seiten.

## Web-Performance-Leitfäden

- [Performance-Grundlagen](/de/docs/Web/Performance/Guides/Fundamentals)
  - : Performance bedeutet Effizienz. Im Kontext von Open-Web-Apps erklärt dieses Dokument im Allgemeinen, was Performance ist, wie die Browserplattform dazu beiträgt, sie zu verbessern, und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.
- [Seitenaufbau: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
  - : Benutzer möchten Web-Erfahrungen mit schnell ladendem Inhalt und flüssiger Interaktion. Daher sollte ein Entwickler diese beiden Ziele anstreben. Um zu verstehen, wie man die Performance und die wahrgenommene Performance verbessern kann, ist es hilfreich zu wissen, wie der Browser funktioniert.
- [Verständnis der Latenz](/de/docs/Web/Performance/Guides/Understanding_latency)
  - : **Latenz** ist die Zeit, die ein Datenpaket benötigt, um vom Quell- zum Zielsystem zu reisen. Im Hinblick auf die Performance-Optimierung ist es wichtig, Maßnahmen zur Reduzierung der Ursachen von Latenz zu ergreifen und die Performance der Website zu testen, indem man hohe Latenz simuliert, um für Benutzer mit langsamen oder unzuverlässigen Verbindungen zu optimieren.
- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lang?](/de/docs/Web/Performance/Guides/How_long_is_too_long)
  - : Es gibt keine klaren Regeln, was ein langsames Laden von Seiten konstituiert, aber es gibt spezifische Richtlinien, um anzuzeigen, dass Inhalte laden (1 Sekunde), Leerlaufen (50ms), Animieren (16.7ms) und auf Benutzereingaben reagieren (50 bis 200ms).
- [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, dem ein Benutzer zu folgen versucht.
- [Navigations- und Ressourcetimings](/de/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **Navigations-Timings** sind Metriken, die Ereignisse der Dokumentennavigation eines Browsers messen. **Ressourcetimings** sind detaillierte Netzwerktimings, die das Laden von Anwendungsressourcen betreffen. Beide bieten die gleichen schreibgeschützten Eigenschaften, aber das Navigationstiming misst die Zeiten des Hauptdokuments, während das Ressourcetiming die Zeiten für alle Ressourcen liefert, die von diesem Hauptdokument und den angeforderten Ressourcen dieser Ressourcen aufgerufen werden.
- [Optimierung der Start-Performance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : Die Verbesserung Ihrer Start-Performance ist oft eine der wertvollsten Performance-Optimierungen, die vorgenommen werden kann. Eine gute Benutzererfahrung beinhaltet sicherzustellen, dass Ihre App schnell lädt. Dieser Artikel bietet Performance-Tipps und Anregungen für das Schreiben neuer Anwendungen und das Portieren von Anwendungen auf das Web von anderen Plattformen.
- [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path)
  - : Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Rendering-Pfades verbessert die Render-Performance. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)
  - : **Lazy Loading** ist eine Strategie, um Ressourcen als nicht blockierend (nicht kritisch) zu identifizieren und diese nur bei Bedarf zu laden. Es ist eine Möglichkeit, die Länge des [kritischen Rendering-Pfades](/de/docs/Web/Performance/Guides/Critical_rendering_path) zu verkürzen, was zu reduzierten Seitenladezeiten führt.
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
  - : **Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abruf, Abrufen von Ressourcen oder Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes höchstwahrscheinlich besuchen wird.
- [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)
  - : Ein Performance-Budget ist ein Limit, um Rückschritte zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine spezielle Metrik (z.B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z.B. Time to Hero Element) oder ein Schwellenwert über einen bestimmten Zeitraum angewendet werden.
- [Performance-Monitoring: RUM vs. synthetisches Monitoring](/de/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **Synthetisches Monitoring** und **Real User Monitoring (RUM)** sind zwei Ansätze zur Überwachung und Gewährleistung von Einblicken in die Web-Performance. RUM und synthetisches Monitoring bieten verschiedene Perspektiven auf die Performance und haben Vorteile, gute Anwendungsfälle und Nachteile. RUM eignet sich im Allgemeinen am besten zum Verständnis von Langzeittrends, während synthetisches Monitoring für Regressionstests und die Minderung kurzfristiger Performance-Probleme während der Entwicklung sehr geeignet ist. In diesem Artikel definieren und vergleichen wir diese beiden Ansätze zur Performance-Überwachung.
- [CSS- und JavaScript-Animations-Performance](/de/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Webanimationen zu implementieren, wie z.B. CSS {{cssxref("transition","Übergänge")}}/{{cssxref("animation","Animationen")}} oder JavaScript-basierte Animationen (mithilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Performance-Unterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.
- [Animations-Performance und Bildrate](/de/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : Animationen im Web können über [`SVG`](/de/docs/Web/API/SVGAnimationElement), [`JavaScript`](/de/docs/Web/API/Window/requestAnimationFrame), einschließlich {{htmlelement('canvas')}} und [`WebGL`](/de/docs/Web/API/WebGL_API), CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animierte GIFs und sogar animierte PNGs und andere Bildtypen erfolgen. Die Performance-Kosten der Animation einer CSS-Eigenschaft können je nach Eigenschaft variieren, und das Animieren teurer CSS-Eigenschaften kann zu {{Glossary("Jank", "Ruckeln")}} führen, da der Browser Schwierigkeiten hat, eine flüssige {{Glossary("FPS", "Bildrate")}} zu erreichen.

## Tutorials für Anfänger

Der MDN [Web Performance Learning Bereich](/de/docs/Learn_web_development/Extensions/Performance) enthält moderne, aktualisierte Tutorials, die die wesentlichen Grundlagen der Performance abdecken. Starten Sie hier, wenn Sie neu in der Performance sind:

- [Web-Performance: kurze Übersicht](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Überblick über den Lernpfad zur Web-Performance. Starten Sie Ihre Reise hier.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Dieser Artikel startet das Modul mit einem guten Blick darauf, was Performance tatsächlich ist — dies umfasst die Tools, Metriken, APIs, Netzwerke und Personengruppen, die wir berücksichtigen müssen, wenn wir über Performance nachdenken, und wie wir Performance in unseren Webentwicklungs-Workflow integrieren können.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Seitenladezeit, dem Leerlauf, der Reaktionsfähigkeit auf Benutzereingaben und der Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel besprechen wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices zur Verbesserung der Benutzerwahrnehmung, wenn nicht sogar der tatsächlichen Zeiten.
- [Grundlagen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Front-End-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können, und solche, die sie subjektiv und objektiv schneller machen. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken im Zusammenhang mit Web-Performance. Hier führen wir viele dieser Funktionen auf grundlegender Ebene ein und bieten Links zu tiefergehenden Erkundungen, um die Performance zu jedem Thema zu verbessern.
- [HTML-Performance-Funktionen](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten, Sicherstellung der besten Reihenfolge und Attribute für die Einbindung von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten, können Sie das Benutzererlebnis erheblich verbessern. Dieser Artikel betrachtet im Detail, wie HTML verwendet werden kann, um maximale Performance sicherzustellen.
- [Multimedia: Bilder und Videos](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die leichtesten Veränderungen bei der Web-Performance sind oft Medienoptimierungen. Es ist möglich, verschiedene Mediendateien basierend auf der Fähigkeit, Größe und Pixeldichte jedes Benutzergeräts bereitzustellen. Zusätzliche Tipps wie das Entfernen von Audiotracks aus Hintergrundvideos können die Leistung weiter verbessern. In diesem Artikel diskutieren wir den Einfluss von Video-, Audio- und Bildinhalten auf die Performance und die Methoden, um sicherzustellen, dass dieser Einfluss so gering wie möglich ist.
- [CSS-Performance-Funktionen](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag weniger im Fokus der Optimierung für verbesserte Leistung stehen, aber es gibt einige CSS-Funktionen, die die Performance stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen, und schlagen Möglichkeiten vor, den Umgang mit Stilen zu optimieren, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [JavaScript Performance Best Practices](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann, wenn es richtig verwendet wird, interaktive und eindrucksvolle Web-Erlebnisse ermöglichen — oder es kann die Downloadzeit, die Renderzeit, die In-App-Performance, die Batterielebensdauer und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige Best Practices im Umgang mit JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.

## Performance-APIs

Die [Performance API](/de/docs/Web/API/Performance_API) ist eine Gruppe von Standards zur Messung der Leistung von Webanwendungen. Die folgenden Seiten bieten Übersichten zu den Performance-APIs einschließlich Informationen zur Nutzung:

- [Hochpräzise Zeitmessung](/de/docs/Web/API/Performance_API/High_precision_timing)
  - : Die Performance API ermöglicht hochpräzise Messungen, die auf Zeit in potenzieller Submillisekundenauflösung und einer stabilen monotonen Uhr basieren, die weder durch Systemuhrenverzerrungen noch durch Anpassungen beeinflusst wird. Die hochauflösenden Timer sind für genaue Benchmarks notwendig, anstatt die ungenaueren und nicht monotonen {{jsxref("Date")}}-Zeitstempel zu verwenden.
- [Lange Animationsrahmen-Timings](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **Lange Animationsrahmen** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzerschnittstellenaktualisierungen verursachen, was zu scheinbar nicht reagierenden Steuerelementen und {{Glossary("Jank", "ruckelnden")}} (oder nicht flüssigen) animierten Effekten und Bildläufen führt, wodurch Frustration bei den Benutzern entsteht. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht Entwicklern, Informationen über die langen Animationsrahmen zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie die Long Animation Frames API genutzt werden kann.
- [Überwachung der Bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : Die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft meldet Informationen darüber, warum das aktuelle Dokument beim Navigieren nicht im {{Glossary("bfcache", "bfcache")}} verwendet werden konnte. Entwickler können diese Informationen nutzen, um Seiten zu identifizieren, die aktualisiert werden müssen, um mit dem bfcache kompatibel zu sein und so die Performance der Seite zu verbessern.
- [Navigationstiming](/de/docs/Web/API/Performance_API/Navigation_timing)
  - : Navigation Timing bietet Metriken, die mit dem Wechsel von einer Seite zu einer anderen über die [PerformanceNavigationTiming](/de/docs/Web/API/PerformanceNavigationTiming) API verbunden sind. Beispielsweise kann man bestimmen, wie viel Zeit das Laden oder Entladen eines Dokuments benötigt oder die Zeit bis zur Fertigstellung der {{Glossary("DOM", "DOM")}}-Konstruktion und das mögliche Interagieren mit dem DOM protokollieren.
- [Performance-Daten](/de/docs/Web/API/Performance_API/Performance_data)
  - : Die Performance API bietet keine Datenanalyse oder Visualisierungen zur Performance. Sie ist jedoch gut in Entwickler-Tools integriert und ihre Daten werden häufig an Analyse-Endpunkte und Bibliotheken gesendet, um Performance-Metriken aufzuzeichnen, die Ihnen helfen, die Daten zu evaluieren und Performance-Engpässe zu identifizieren, die Ihre Benutzer betreffen. Diese Seite bietet einen Überblick darüber, welche Performance-API-Daten existieren, wie sie gesammelt und aufgerufen werden können.
- [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing)
  - : Die Resource Timing API ermöglicht das Abrufen und Analysieren detaillierter Netzwerktimings für das Laden von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu bestimmen, die benötigt wird, um eine bestimmte Ressource (wie ein Bild oder ein Skript) entweder implizit als Teil des Seitenladevorgangs oder explizit aus JavaScript heraus zu laden, beispielsweise mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API.
- [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)
  - : Die Server-Timing API ermöglicht es Servern, Metriken über den Anfragereaktionszyklus an das Benutzergerät zu kommunizieren. Sie können diese Informationen sammeln und serverseitige Metriken auf dieselbe Weise auswerten wie alle anderen Metriken, die mit der Performance API verarbeitet werden.
- [User Timing API](/de/docs/Web/API/Performance_API/User_timing)
  - : Erstellen Sie anwendungsspezifische Zeitstempel mithilfe der "mark" und "measure" Eintragstypen der [User Timing API](/de/docs/Web/API/Performance_API/User_timing), die Teil der Zeitachse der Browser-Performance sind, unter Verwendung von [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp).

### Verwandte APIs

Die folgenden APIs sind ebenfalls nützlich für die Messung und Beeinflussung der Seitenleistung:

- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
  - : Bietet Ereignisse, die Sie überwachen können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitszustand der Seite zu betrachten.
- [Background Tasks API](/de/docs/Web/API/Background_Tasks_API)
  - : Die **Kooperative Aufgabenplanung der Hintergrund-Tasks API** (auch als Background Tasks API oder die [`requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) API bezeichnet) bietet die Möglichkeit, Aufgaben in eine Warteschlange zu stellen, die automatisch vom Benutzergerät ausgeführt werden, sobald festgestellt wird, dass es freie Zeit dafür gibt.
- [Beacon API](/de/docs/Web/API/Beacon_API)
  - : Die [Beacon](/de/docs/Web/API/Beacon_API)-Schnittstelle plant eine asynchrone und nicht blockierende Anfrage an einen Webserver.
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
  - : Die Intersection Observer API bietet eine Möglichkeit, die Änderungen des Schnittpunkts eines Zielelements mit einem Vorfahrenelement oder mit dem Viewport eines Top-Level-Dokuments asynchron zu beobachten. Dies ermöglicht Anwendungsfälle wie [Timing der Sichtbarkeit von Elementen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), um asynchron benachrichtigt zu werden, wenn interessante Elemente sichtbar werden.
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : Gibt die Dekodierungs- und Kodierungsfähigkeiten eines Client-Geräts an, zum Beispiel ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte, mit Echtzeitrückmeldungen zur Wiedergabe, um besser adaptives Streaming zu ermöglichen und Zugriff auf Displayeigensinformationen.
- [Network Information API](/de/docs/Web/API/Network_Information_API)
  - : Informationen über die Netzwerkverbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. 'WiFi', 'Mobil', etc.). Das kann genutzt werden, um Inhalte in hoher oder niedriger Auflösung basierend auf der Verbindung des Benutzers auszuwählen.
- [Battery Status API](/de/docs/Web/API/Battery_Status_API)
  - : Die **Battery API** liefert Informationen über den Ladezustand des Systems und ermöglicht es, durch Ereignisse benachrichtigt zu werden, wenn sich der Batteriestand oder der Ladezustand ändert. Dies kann genutzt werden, um den Ressourcenverbrauch Ihrer App anzupassen, um den Batterieverbrauch zu reduzieren, wenn die Batterie schwach ist, oder Änderungen zu speichern, bevor die Batterie sich entlädt, um Datenverluste zu vermeiden.
- [Navigator.deviceMemory](/de/docs/Web/API/Navigator/deviceMemory)
  - : Die schreibgeschützte Eigenschaft **`deviceMemory`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge des Gerätespeichers in Gigabyte an.
- [FetchEvent.preloadResponse](/de/docs/Web/API/FetchEvent/preloadResponse)
  - : Die schreibgeschützte Eigenschaft **`preloadResponse`** der [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf die Navigationsvorlade-[`Response`](/de/docs/Web/API/Response) aufgelöst wird, falls die [navigation preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder andernfalls `undefined`.

## Profilierung und Werkzeugnutzung

- [Firefox Profiler Performance Features](https://profiler.firefox.com/docs/#/)
  - : Diese Website bietet Informationen zur Nutzung und zum Verständnis der Performance-Features in Ihren Entwickler-Tools, einschließlich [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart) und [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart).
- [Profiling mit dem eingebauten Profiler](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Erfahren Sie, wie Sie die Performance Ihrer App mit dem eingebauten Profiler von Firefox profilieren.

## Referenzen

### HTML

- [`<picture>`](/de/docs/Web/HTML/Element/picture)-Element
- [`<video>`](/de/docs/Web/HTML/Element/video)-Element
- [`<source>`](/de/docs/Web/HTML/Element/source)-Element
- [`<img> srcset`](/de/docs/Web/HTML/Element/img#attributes)-Attribut für responsive Bilder
- [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload)-Attribut zum Vorladen von Inhalten über HTML

### CSS

- [will-change](/de/docs/Web/CSS/will-change)

### JavaScript

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
- {{Glossary("Garbage_collection", "Garbage collection")}}
- [requestAnimationFrame](/de/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-encoding](/de/docs/Web/HTTP/Headers/Content-Encoding)
- Ressourcentipps über [dns-prefetch](/de/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), [preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect), {{Glossary("Prefetch", "prefetch")}} und prerender
- [HTTP/2](/de/docs/Web/HTTP/Messages#http2_messages)
- [Client Hints](/de/docs/Web/HTTP/Client_hints)

## Siehe auch

- [Responsive Images](/de/docs/Web/HTML/Responsive_images) HTML-Leitfaden
- [Web Workers API](/de/docs/Web/API/Web_Workers_API), einschließlich [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) und [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [Caching](/de/docs/Web/HTTP/Caching)
- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- Glossarbegriffe:
  - {{Glossary("Beacon", "Beacon")}}
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("CDN", "Content Delivery Networks (CDN)")}}
  - {{Glossary("CLS", "Kumulative Layoutverschiebungen (CLS)")}}
  - {{Glossary("Code_splitting", "Code-Splitting")}}
  - {{Glossary("CSSOM", "CSSOM")}}
  - {{Glossary("Domain_sharding", "Domain-Sharding")}}
  - {{Glossary("Effective_connection_type", "Effektiver Verbindungstyp")}}
  - {{Glossary("First_contentful_paint", "Erster inhaltsvoller Bildschirmzeichnung (FCP)")}}
  - {{Glossary("First_CPU_idle", "Erster CPU-Leerlauf")}}
  - {{Glossary("First_paint", "Erste Bildschirmzeichnung")}}
  - {{Glossary("gzip_compression", "gzip-Kompression")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("Interaction_to_next_paint", "Interaktion mit dem nächsten Bild")}}
  - {{Glossary("Jank", "Jank")}}
  - {{Glossary("Largest_contentful_paint", "Größte Inhaltsvolle Bildschirmzeichnung (LCP)")}}
  - {{Glossary("Latency", "Latenz")}}
  - {{Glossary("Lazy_load", "Lazy Load")}}
  - {{Glossary("Long_task", "Lange Aufgabe")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Main_thread", "Hauptthread")}}
  - {{Glossary("Minification", "Minifikation")}}
  - {{Glossary("Network_throttling", "Netzwerk-Drosselung")}}
  - {{Glossary("Packet", "Paket")}}
  - {{Glossary("Page_load_time", "Seitenladezeit")}}
  - {{Glossary("Page_prediction", "Seitenvorhersage")}}
  - {{Glossary("Parse", "Parse")}}
  - {{Glossary("Perceived_performance", "Wahrgenommene Performance")}}
  - {{Glossary("Prefetch", "Prefetch")}}
  - {{Glossary("Prerender", "Prerender")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("RAIL", "RAIL")}}
  - {{Glossary("Real_User_Monitoring", "Real User Monitoring (RUM)")}}
  - {{Glossary("Resource_Timing", "Ressourcentiming")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("Server_Timing", "Server-Timing")}}
  - {{Glossary("Speculative_parsing", "Spekulatives Parsen")}}
  - {{Glossary("Speed_index", "Geschwindigkeitsindex")}} (und Wahrnehmbarer Geschwindigkeitsindex)
  - {{Glossary("SSL", "SSL")}}
  - {{Glossary("Synthetic_monitoring", "Synthetisches Monitoring")}}
  - {{Glossary("TCP_handshake", "TCP-Handshake")}}
  - {{Glossary("TCP_slow_start", "Langsamer TCP-Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
  - {{Glossary("Time_to_first_byte", "Zeit bis zum ersten Byte (TTFB)")}}
  - {{Glossary("Time_to_interactive", "Zeit bis zur Interaktivität (TTI)")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("Tree_shaking", "Tree Shaking")}}
  - {{Glossary("Web_performance", "Web-Performance")}}
- [Performance in den Firefox-Entwicklerwerkzeugen](https://profiler.firefox.com/docs/#/)
