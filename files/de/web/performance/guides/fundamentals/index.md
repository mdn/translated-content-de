---
title: Grundlagen der Leistung
slug: Web/Performance/Guides/Fundamentals
l10n:
  sourceCommit: 4e9f69e682bab7fc25f9bac699b8802feb6e1cf2
---

Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browserplattform hilft, diese zu verbessern, und welche Werkzeuge und Prozesse Sie zum Testen und Verbessern nutzen können.

## Was ist Leistung?

Letztendlich ist die vom Nutzer wahrgenommene Leistung die einzige, die zählt. Nutzer geben Eingaben über Berührungen, Bewegungen und Sprache in das System ein. Im Gegenzug nehmen sie Ausgaben durch Sehen, Berühren und Hören wahr. Leistung ist die Qualität der Systemausgaben als Reaktion auf Nutzereingaben.

Alles andere bleibt gleich, Code, der für ein anderes Ziel als die vom Nutzer wahrgenommene Leistung (fortan UPP) optimiert wurde, verliert im Vergleich zu Code, der für UPP optimiert wurde. Nutzer bevorzugen beispielsweise eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckelnden, nicht reagierenden App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber echte UPP-Ziele stehen an erster Stelle.

Die nächsten Unterabschnitte weisen auf wesentliche Leistungsmetriken hin und diskutieren diese.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Nutzereingaben liefert. Zum Beispiel erwartet ein Nutzer, wenn er den Bildschirm berührt, dass sich die Pixel auf eine bestimmte Weise ändern. Für diese Interaktion ist die Reaktionsfähigkeits-Metrik die Zeit zwischen der Berührung und der Pixeländerung.

Reaktionsfähigkeit umfasst manchmal mehrere Feedback-Phasen. Der Start einer Anwendung ist ein besonders wichtiger Fall, der im Folgenden ausführlicher behandelt wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und verärgert werden, wenn sie ignoriert werden. Ihre App ignoriert den Nutzer jede Sekunde, in der sie nicht auf die Nutzereingabe reagiert.

### Bildfrequenz

Die Bildfrequenz ist die Rate, mit der das System die dem Nutzer angezeigten Pixel ändert. Dieses Konzept ist geläufig: Jeder bevorzugt beispielsweise Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Die Bildfrequenz ist wichtig als "Servicequalität"-Metrik. Computermonitore sind so konzipiert, dass sie die Augen der Nutzer "täuschen", indem sie ihnen Photonen liefern, die die Realität nachahmen. Beispielsweise reflektiert Papier mit aufgedrucktem Text Photonen auf eine bestimmte Weise in die Augen des Nutzers. Eine Lese-App kann Photonen in einem ähnlichen Muster emittieren, um die Augen des Nutzers zu "täuschen".

Wie Ihr Gehirn folgert, ist Bewegung nicht ruckartig und diskret, sondern „aktualisiert“ sich glatt und kontinuierlich. (Stroboskoplichter machen Spaß, weil sie das auf den Kopf stellen und Ihr Gehirn von Eingaben hungern lassen, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computermonitor sorgt eine höhere Bildfrequenz für eine getreuere Nachahmung der Realität.

> [!NOTE]
> Menschen können in der Regel keine Unterschiede in der Bildfrequenz über 60Hz wahrnehmen. Aus diesem Grund sind die meisten modernen elektronischen Bildschirme darauf ausgelegt, mit dieser Rate zu aktualisieren. Ein Fernseher sieht für ein Kolibri wahrscheinlich ruckelig und unwirklich aus, zum Beispiel.

### Speichernutzung

**Speichernutzung** ist eine weitere wichtige Metrik. Im Gegensatz zur Reaktionsfähigkeit und Bildfrequenz nehmen Nutzer die Speichernutzung nicht direkt wahr, aber die Speichernutzung nähert sich dem "Nutzerzustand" an. Ein ideales System würde zu jedem Zeitpunkt 100 % des Nutzerzustands beibehalten: Alle Anwendungen im System würden gleichzeitig laufen und alle Anwendungen würden den Zustand beibehalten, den der Nutzer beim letzten Mal erstellt hat, als er mit der Anwendung interagiert hat (Anwendungszustand wird im Computergedächtnis gespeichert, weshalb die Annäherung nah ist).

Daraus ergibt sich eine wichtige, aber kontraintuitive Folgerung: Ein gut gestaltetes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Stattdessen wurde ein gut gestaltetes System darauf optimiert, so viel Speicher wie möglich zu **nutzen**, um den Nutzerzustand zu erhalten und gleichzeitig andere UPP-Ziele zu erreichen.

Das bedeutet nicht, dass das System Speicher **verschwenden** sollte. Wenn ein System mehr Speicher als nötig verwendet, um einen bestimmten Nutzerzustand aufrechtzuerhalten, verschwendet das System eine Ressource, die es verwenden könnte, um einen anderen Nutzerzustand zu beibehalten. In der Praxis kann kein System alle Nutzerzustände aufrechterhalten. Eine intelligente Zuweisung von Speicher zu Nutzerzuständen ist eine wichtige Aufgabe, die weiter unten ausführlicher behandelt wird.

### Stromverbrauch

Der letzte hier diskutierte Leistungsindikator ist der **Stromverbrauch**. Ähnlich wie bei der Speichernutzung nehmen Nutzer den Stromverbrauch nur indirekt wahr, nämlich daran, wie lange ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um die UPP-Ziele zu erreichen, muss das System nur die Mindestleistung verwenden, die erforderlich ist.

Der Rest dieses Dokuments wird die Leistung im Hinblick auf diese Metriken diskutieren.

## Plattformleistungsoptimierungen

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie Firefox/Gecko allgemein zur Leistung unterhalb der Ebene aller Anwendungen beiträgt. Aus der Perspektive eines Entwicklers oder Nutzers beantwortet dies die Frage: "Was tut die Plattform für Sie?"

### Web-Technologien

Die Webplattform bietet viele Werkzeuge, von denen einige für bestimmte Aufgaben besser geeignet sind als andere. Die gesamte Anwendungslogik wird in JavaScript geschrieben. Um Grafiken anzuzeigen, können Entwickler HTML oder CSS verwenden (d.h. hochgradig deklarative Sprachen) oder die niedrigstufigen imperative Schnittstellen verwenden, die durch das {{ htmlelement("canvas") }}-Element angeboten werden (das [WebGL](/de/docs/Web/API/WebGL_API) umfasst). Irgendwo "zwischen" HTML/CSS und Canvas befindet sich [SVG](/de/docs/Web/SVG), das einige Vorteile von beiden bietet.

HTML und CSS erhöhen die Produktivität erheblich, manchmal auf Kosten der Bildfrequenz oder der pixelgenauen Kontrolle über das Rendering. Text und Bilder fließen automatisch neu, UI-Elemente erhalten automatisch das Systemthema, und das System bietet "eingebaute" Unterstützung für einige Anwendungsfälle, an die Entwickler möglicherweise nicht von vornherein denken, wie Bildschirme mit unterschiedlichen Auflösungen oder von rechts nach links verlaufende Sprachen.

Das `canvas`-Element bietet einen Pixelpuffer direkt für Entwickler zum Zeichnen an. Dies gibt den Entwicklern eine pixelgenaue Kontrolle über das Rendering und eine präzise Kontrolle über die Bildfrequenz, aber jetzt müssen die Entwickler sich mit mehreren Auflösungen und Ausrichtungen, von rechts nach links verlaufenden Sprachen usw. beschäftigen. Entwickler zeichnen auf Leinwände entweder mit einer vertrauten 2D-Zeichen-API oder WebGL, einer "nah an der Maschine" Anbindung, die größtenteils den Spezifikationen von OpenGL ES 2.0 folgt.

### Gecko-Rendering

Der JavaScript-Motor von Gecko unterstützt Just-in-Time (JIT)-Kompilierung. Dies ermöglicht Anwendungslogik, vergleichbare Leistung zu anderen virtuellen Maschinen — wie Java-Virtual-Maschinen — zu erbringen und in einigen Fällen sogar der "nativen Code" nahe zu kommen.

Die Grafikpipeline von Gecko, auf der HTML, CSS und Canvas basieren, ist auf mehrere Weise optimiert. Der HTML/CSS-Layout- und Grafikcode in Gecko reduziert Ungültigmachungen und Neuzeichnungen für häufige Fälle wie das Scrollen; Entwickler erhalten diese Unterstützung "kostenlos". Pixelpuffer, die sowohl von Gecko "automatisch" als auch von Anwendungen zum `canvas` "manuell" angelegt wurden, minimieren Kopien beim Zeichnen im Display-Framebuffer. Dies wird dadurch erreicht, dass Zwischenoberflächen vermieden werden, wo sie Overhead verursachen würden (wie etwa pro Anwendung "Back-Buffers" in vielen anderen Betriebssystemen), und indem spezieller Speicher für Grafikpuffer verwendet wird, der vom Kompositor-Hardware direkt zugänglich ist. Komplexe Szenen werden mit der GPU des Geräts für maximale Leistung gerendert. Um den Stromverbrauch zu verbessern, werden einfache Szenen mit spezieller dedizierter Kompositionshardware gerendert, während die GPU im Leerlauf ist oder abgeschaltet wird.

Vollständig statische Inhalte sind eher die Ausnahme als die Regel bei reichhaltigen Anwendungen. Reichhaltige Anwendungen verwenden dynamische Inhalte mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind besonders wichtig für Anwendungen: Entwickler können CSS verwenden, um kompliziertes Verhalten mit einer einfachen, hochgradigen Syntax zu deklarieren. Die Grafikpipeline von Gecko ist wiederum hochgradig optimiert, um gängige Animationen effizient zu rendern. Häufige Fälle von Animationen werden an den Systemkompositor "ausgelagert", der sie auf performante, stromsparende Weise rendern kann.

Die Startleistung einer App ist genauso wichtig wie ihre Laufzeitleistung. Gecko ist darauf optimiert, eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre der Verbesserung, die auf diesen Inhalt abzielen, wie etwa paralleles Parsen von HTML, intelligente Planung von Reflows und Bilddecodierung, clevere Layout-Algorithmen usw., tragen genauso gut dazu bei, die Leistung von Webanwendungen auf Firefox zu verbessern.

## Anwendungsleistung

Dieser Abschnitt richtet sich an Entwickler, die sich die Frage stellen: "Wie kann ich meine App schneller machen?"

### Startleistung

Der Start von Anwendungen wird im Allgemeinen durch drei vom Nutzer wahrgenommene Ereignisse geprägt:

- Das erste ist das **erste Bild** der Anwendung – der Punkt, an dem ausreichend Anwendungsressourcen geladen wurden, um ein erstes Bild zu malen
- Das zweite ist, wenn die Anwendung interaktiv wird – zum Beispiel können Nutzer auf eine Schaltfläche tippen und die Anwendung reagiert
- Das letzte Ereignis ist das **vollständige Laden** – zum Beispiel, wenn alle Alben eines Nutzers in einem Musikplayer aufgelistet wurden

Der Schlüssel zum schnellen Start ist, sich zwei Dinge zu merken: UPP ist das Einzige, was zählt, und es gibt einen "kritischen Pfad" zu jedem der oben genannten vom Nutzer wahrgenommenen Ereignisse. Der kritische Pfad ist genau und nur der Code, der ausgeführt werden muss, um das Ereignis zu erzeugen.

Zum Beispiel, um den ersten Frame einer Anwendung zu malen, die visuell aus etwas HTML und CSS besteht, um dieses HTML zu gestalten:

1. Das HTML muss geparst werden
2. Das DOM für dieses HTML muss konstruiert werden
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und decodiert werden
4. Die CSS-Stile müssen auf dieses DOM angewendet werden
5. Das gestaltete Dokument muss reflowed werden

Nirgends in dieser Liste steht "die JS-Datei laden, die für ein ungewöhnliches Menü benötigt wird"; "das Bild für die Bestenliste abrufen und decodieren", usw. Diese Arbeitsaufgaben sind nicht auf dem kritischen Pfad, um den ersten Frame zu malen.

Es scheint offensichtlich, aber um ein vom Nutzer wahrgenommenes Startereignis schneller zu erreichen, ist der Haupt"trick", _nur den Code auf dem kritischen Pfad auszuführen._ Verkürzen Sie den kritischen Pfad, indem Sie die Szenerie vereinfachen.

Die Webplattform ist hochdynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Webplattform ermöglicht das dynamische Laden von Code, HTML, CSS, Bildern und anderen Ressourcen. Diese Funktionen können verwendet werden, um Arbeit zu verschieben, die sich nicht auf dem kritischen Pfad befindet, indem unnötiger Inhalt "faule" eine Weile nach dem Start geladen wird.

Ein weiteres Problem, das den Start verzögern kann, ist Leerlaufzeit, verursacht durch Warten auf Antworten zu Anfragen (wie Datenbankläufe). Um dieses Problem zu vermeiden, sollten Anwendungen so früh wie möglich im Startprozess Anfragen stellen (dies wird als "Vorladen" bezeichnet). Dann, wenn die Daten später benötigt werden, sind sie hoffentlich bereits verfügbar, und die Anwendung muss nicht warten.

> [!NOTE]
> Für viel mehr Informationen zur Verbesserung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance).

Gleichzeitig sollten lokal gecachte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über Mobilfunknetze mit hoher Latenz und niedriger Bandbreite abgerufen werden. Netzwerk-Anfragen sollten niemals auf dem kritischen Pfad zum frühen Start einer Anwendung sein. Lokales Caching/offline Apps kann über [Service Workers](/de/docs/Web/API/Service_Worker_API) erzielt werden. Sehen Sie [Offline und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Verwendung von Service-Workern für Offline-Fähigkeiten und die Synchronisation im Hintergrund.

### Bildfrequenz

Das Wichtigste für eine hohe Bildfrequenz ist, das richtige Werkzeug zu wählen. Verwenden Sie HTML und CSS, um Inhalte zu implementieren, die überwiegend statisch sind, gescrollt werden und selten animiert sind. Verwenden Sie Canvas zur Implementierung hochdynamischer Inhalte, wie Spiele, die eine enge Kontrolle über das Rendering erfordern und keine Thematisierung benötigen.

Für Inhalte, die mit Canvas gezeichnet werden, liegt es an den Entwicklern, die Bildfrequenzziele zu erreichen: Sie haben die direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte führt der Weg zu einer hohen Bildfrequenz über die Verwendung der richtigen Primitiven. Firefox ist hochoptimiert, um beliebige Inhalte zu scrollen; das ist in der Regel kein Problem. Oft kann jedoch ein Kompromiss in Bezug auf Allgemeinheit und Qualität für Geschwindigkeit, wie die Verwendung eines statischen Renders anstelle eines CSS-Radialverlaufs, die Bildscrollrate über ein Ziel hinweg verbessern. CSS [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es, dass diese Kompromisse nur auf Geräte beschränkt werden, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch "Seiten" oder "Panels". Zum Beispiel tippt der Nutzer auf eine "Einstellungen"-Schaltfläche, um zu einem Konfigurationsbildschirm einer Anwendung zu wechseln, oder ein Einstellungsmenü "erscheint". Firefox ist darauf optimiert, Szenen zu wechseln und zu animieren, die:

- Seiten/Panels verwenden, die ungefähr die Größe des Geräts oder kleiner haben
- die CSS-Eigenschaften `transform` und `opacity` transitionieren/animieren

Übergänge und Animationen, die diesen Richtlinien entsprechen, können an den Systemkomposter ausgelagert und maximal effizient ausgeführt werden.

### Speichernutzung und Stromverbrauch

Die Verbesserung der Speicher- und Energieeffizienz ist ein ähnliches Problem wie die Beschleunigung des Startvorgangs: keine unnötige Arbeit erledigen oder selten verwendete UI-Ressourcen verzögert laden. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen niedrigeren Energiemodus wechseln, wenn sie überwiegend im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen fortsetzen, verhindern, dass CPUs in den Energiesparmodus wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund geschickt werden, wird auf ihren Dokumenten ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ausgelöst. Dieses Ereignis ist der Freund des Entwicklers; Anwendungen sollten darauf hören.

### Spezifische Kodierungstipps für die Anwendungsleistung

Die folgenden praktischen Tipps werden dazu beitragen, einen oder mehrere der oben diskutierten Faktoren der Anwendungsleistung zu verbessern.

#### Verwenden Sie CSS-Animationen und -Übergänge

Anstatt die `animate()`-Funktion einer Bibliothek zu verwenden, die wahrscheinlich viele schlecht performante Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder `top`/`left` Positionierung zum Beispiel), verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie tatsächlich [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um die Aufgabe zu erledigen. Dies funktioniert gut, da der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu verwenden, um sie reibungslos mit minimaler Auswirkung auf die Prozessorleistung zu handhaben. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS zusammen mit dem Rest des Erscheinungsbildes Ihrer App mit einer standardisierten Syntax definieren können.

CSS-Animationen geben Ihnen sehr granularen Kontrolle über Ihre Effekte unter Verwendung von [Keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar auf während des Animationsprozesses ausgelöste Ereignisse achten, um andere Aufgaben zu erledigen, die zu bestimmten Zeitpunkten im Animationsprozess durchgeführt werden müssen. Sie können diese Animationen leicht mit {{cssxref(":hover")}}, {{cssxref(":focus")}}, oder {{cssxref(":target")}} auslösen oder durch dynamisches Hinzufügen und Entfernen von Klassen auf Elternelementen.

Wenn Sie Animationen im laufenden Betrieb erstellen oder in [JavaScript](/de/docs/Web/JavaScript) ändern möchten, hat James Long eine einfache Bibliothek dafür geschrieben namens [CSS-animations.js](https://github.com/jlongster/css-animations.js/).

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierung zu verfeinern und selbst mit all dieser Mathematik herumzuspielen, verwenden Sie die {{cssxref("transform")}} CSS-Eigenschaft, um die Position, Skalierung usw. Ihrer Inhalte anzupassen. Alternativ können Sie die einzelnen Transformationseigenschaften von {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}} nutzen. Der Grund dafür ist erneut die Hardwarebeschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU ausführen, sodass sich die CPU um andere Dinge kümmern kann.

Darüber hinaus bieten Transformationen Fähigkeiten, die Sie vielleicht sonst nicht hätten. Doch nicht nur können Sie Elemente im 2D-Raum verschieben, sondern Sie können auch in drei Dimensionen transformieren, verzerren und drehen usw. Paul Irish hat eine [detaillierte Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus Leistungssicht. Im Allgemeinen haben Sie jedoch die gleichen Vorteile, die Sie durch die Verwendung von CSS-Animationen erhalten: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie nutzen auch eine leicht erweiterbare Möglichkeit zur Positionierung von Elementen - etwas, das viel zusätzlichen Code erfordern würde, wenn Sie die Übersetzung mit `top` und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass das Arbeiten in einem `canvas`-Element ähnlich ist.

> [!NOTE]
> Möglicherweise müssen Sie einen `translateZ(0.1)`-Transform anhängen, wenn Sie auf Ihrer CSS-Animation Hardwarebeschleunigung wünschen, abhängig von der Plattform. Wie bereits erwähnt, kann dies die Leistung verbessern. Wenn es übermäßig verwendet wird, kann es zu Problemen mit dem Speicherverbrauch führen. Was Sie diesbezüglich tun, bleibt Ihnen überlassen — machen Sie einige Tests und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code mit einer angenommenen Bildfrequenz aus, die unter den aktuellen Umständen möglicherweise nicht erreichbar ist. Es weist den Browser an, Ergebnisse zu rendern, auch wenn der Browser gerade nicht zeichnet; das heißt, während die Videohardware den nächsten Anzeigedurchlauf nicht erreicht hat. Dies verschwendet Prozessorzeit und kann sogar zu einer Verringerung der Akkulaufzeit des Geräts des Nutzers führen.

Stattdessen sollten Sie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden. Dieses wartet, bis der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu erstellen, und wird sich nicht darum bemühen, wenn die Hardware tatsächlich nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht ausgeführt werden, während Ihre App nicht auf dem Bildschirm sichtbar ist (wie wenn sie im Hintergrund ist und eine andere Aufgabe läuft). Dies spart Akkulaufzeit und verhindert, dass Nutzer Ihren Namen in den Nachthimmel fluchen.

#### Machen Sie Ereignisse sofort

Als Entwickler der alten Schule, die sich der Barrierefreiheit bewusst sind, lieben wir Click-Ereignisse, da sie auch Tastatureingaben unterstützen. Auf Mobilgeräten sind diese jedoch zu langsam. Sie sollten [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) für diesen Zweck, die Ihnen zur Verfügung steht.

#### Halten Sie Ihr Interface einfach

Ein großes Leistungsproblem, das wir in HTML-Apps gefunden haben, war, dass das Verschieben einer großen Anzahl von [DOM](/de/docs/Web/API/Document_Object_Model)-Elementen alles träge macht — besonders wenn sie viele Verläufe und Schatten enthalten. Es hilft sehr, Ihr Erscheinungsbild zu vereinfachen und ein Proxy-Element zu verschieben, wenn Sie drag-and-drop ausführen.

Wenn Sie zum Beispiel eine lange Liste von Elementen haben (nehmen wir an, Tweets), bewegen Sie sie nicht alle. Behalten Sie stattdessen nur die sichtbar und einige daneben im DOM-Baum der aktuell sichtbaren Tweets. Verstecken oder entfernen Sie den Rest. Das Behalten der Daten in einem JavaScript-Objekt anstelle des Zugriffs auf das DOM kann die Leistung Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als eine Darstellung Ihrer Daten und nicht als die Daten selbst. Das bedeutet nicht, dass Sie nicht direkt HTML als Quelle verwenden können; lesen Sie es einmal und blättern Sie dann 10 Elemente und ändern den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnisliste, anstatt 100 nicht sichtbare Elemente zu verschieben. Der gleiche Trick gilt in Spielen für Sprites: Wenn sie sich nicht auf dem Bildschirm befinden, gibt es keinen Grund, sie zu überwachen. Stattdessen verwenden Sie Elemente, die vom Bildschirm scrollen, als neue, die hereinkommen.

## Allgemeine Anwendungsleistungsanalyse

Firefox, Chrome und andere Browser enthalten eingebaute Tools, die Ihnen helfen können, langsames Rendern von Seiten zu diagnostizieren. Insbesondere der [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt eine genaue Zeitleiste an, wann jede Netzwerkanfrage auf Ihrer Seite erfolgt, wie groß sie ist und wie lange sie dauert.

![Der Firefox-Netzwerkmonitor zeigt Get-Anfragen, mehrere Dateien und unterschiedliche Ladezeiten für jede Ressource in einem Diagramm an.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der lange benötigt, um ausgeführt zu werden, wird der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen anzeigen:

![Der Firefox-JavaScript-Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [eingebaute Gecko-Profilierer](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Tool, das noch detailliertere Informationen darüber bietet, welche Teile des Browsercodes langsam laufen, während der Profilierer läuft. Dies ist etwas komplexer zu verwenden, bietet aber viele nützliche Details.

![Ein eingebautes Gecko-Profilfenster zeigt viele Netzwerkinformationen an.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Tools mit dem Android-Browser verwenden, indem Sie Firefox starten und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere dauert es in mobilen Browsern länger, Dutzende oder Hunderte von Netzwerkanfragen zu stellen. Das Rendern großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, da mobile Hardware manchmal nicht schnell genug ist, um alle verfügbaren Bandbreitenressourcen zu nutzen. Für nützliche allgemeine Tipps zur Leistung von mobilen Webseiten, werfen Sie einen Blick auf Maximiliano Firtmans [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance) Vortrag.

### Testfälle und Fehlerberichterstattung

Wenn die Entwicklerwerkzeuge von Firefox und Chrome Ihnen nicht helfen ein Problem zu finden, oder wenn sie darauf hindeuten, dass der Webbrowser das Problem verursacht, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem maximal isoliert. Das hilft oft bei der Problemfindung.

Sehen Sie nach, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite speichern und laden (einschließlich aller eingebetteten Bilder/Stylesheets/Skripte). Wenn dies der Fall ist, bearbeiten Sie die statischen Dateien, um private Informationen zu entfernen, und senden Sie diese dann an andere zur Unterstützung (reichen Sie einen [Bugzilla](https://bugzilla.mozilla.org/)-Bericht ein, zum Beispiel, oder hosten Sie es auf einem Server und teilen die URL). Teilen Sie auch alle Profildaten, die Sie mit den oben aufgeführten Tools gesammelt haben.
