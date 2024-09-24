---
title: Leistungsgrundlagen
slug: Web/Performance/Fundamentals
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubPages("Web/Performance")}}

Leistung bedeutet Effizienz. Im Kontext von Open-Web-Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browserplattform hilft, sie zu verbessern, und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.

## Was ist Leistung?

Letztendlich ist die vom Benutzer wahrgenommene Leistung die einzige Leistung, die wirklich zählt. Benutzer geben Eingaben durch Berührung, Bewegung und Sprache in das System ein. Im Gegenzug nehmen sie Ausgaben durch Sehen, Berühren und Hören wahr. Leistung ist die Qualität der Systemausgaben in Reaktion auf Benutzereingaben.

Alles andere ist gleich, Code, der für ein anderes Ziel als die vom Benutzer wahrgenommene Leistung (im Folgenden UPP) optimiert ist, verliert bei Konkurrenz gegen Code, der für UPP optimiert ist. Benutzer bevorzugen eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckeligen, nicht reagierenden App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber reale UPP-Ziele kommen zuerst.

Die nächsten Abschnitte heben wichtige Leistungsmetriken hervor und diskutieren sie.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Benutzereingaben bereitstellt. Beispielsweise erwartet ein Benutzer, wenn er den Bildschirm berührt, dass sich die Pixel auf eine bestimmte Weise ändern. Für diese Interaktion ist die Reaktionsmetrik die zwischen dem Tippen und der Pixeländerung verstrichene Zeit.

Reaktionsfähigkeit beinhaltet manchmal mehrere Feedback-Stufen. Der Anwendungsstart ist ein besonders wichtiger Fall, der weiter unten ausführlicher behandelt wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und wütend werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf die Eingabe des Benutzers reagiert.

### Bildrate

Die Bildrate ist die Rate, mit der das System Pixel anzeigt, die dem Benutzer angezeigt werden. Dies ist ein bekanntes Konzept: Jeder bevorzugt Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Die Bildrate ist als "Dienstqualitätsmetrik" wichtig. Computermonitore sind so konzipiert, dass sie die Augen der Benutzer "täuschen", indem sie ihnen Photonen liefern, die die Realität nachahmen. Beispielsweise reflektiert Papier, das mit bedrucktem Text bedeckt ist, Photonen in einem bestimmten Muster in die Augen des Benutzers. Durch die Manipulation von Pixeln emittiert eine Leser-Apps Photonen in einem ähnlichen Muster, um die Augen des Benutzers zu "täuschen".

Wie Ihr Gehirn schlussfolgert, ist Bewegung nicht ruckartig und diskret, sondern aktualisiert sich sanft und kontinuierlich. (Stroboskop-Lichter machen Spaß, weil sie das auf den Kopf stellen und Ihr Gehirn von Eingaben aushungern, um die Illusion einer diskreten Realität zu schaffen). Auf einem Computermonitor führt eine höhere Bildrate zu einer realitätsgetreueren Nachahmung.

> [!NOTE]
> Menschen können in der Regel keine Unterschiede in der Bildrate über 60 Hz wahrnehmen. Deshalb sind die meisten modernen elektronischen Displays darauf ausgelegt, sich mit dieser Rate zu aktualisieren. Ein Fernseher mag beispielsweise für einen Kolibri ruckartig und unrealistisch aussehen.

### Speichernutzung

**Speichernutzung** ist eine weitere wichtige Metrik. Im Gegensatz zur Reaktionsfähigkeit und Bildrate nehmen Benutzer die Speichernutzung nicht direkt wahr, aber sie nähert sich eng dem "Benutzerstatus" an. Ein ideales System würde 100 % des Benutzerstatus jederzeit aufrechterhalten: Alle Anwendungen im System würden gleichzeitig laufen und alle Anwendungen würden den vom Benutzer zuletzt erstellten Status behalten (Anwendungsstatus wird im Computerspeicher gespeichert, deshalb ist die Annäherung nah).

Daraus ergibt sich eine wichtige, aber kontraintuitive Schlussfolgerung: Ein gut gestaltetes System maximiert nicht den Anteil des **freien** Speichers. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Vielmehr wurde ein gut gestaltetes System optimiert, um so viel Speicher wie möglich zur Aufrechterhaltung des Benutzerstatus zu nutzen, während andere UPP-Ziele erreicht werden.

Das bedeutet nicht, dass das System Speicher **verschwenden** sollte. Wenn ein System mehr Speicher verwendet als notwendig, um einen bestimmten Benutzerstatus aufrechtzuerhalten, verschwendet das System eine Ressource, die es nutzen könnte, um einen anderen Benutzerstatus zu behalten. In der Praxis kann kein System alle Benutzerzustände aufrechterhalten. Die intelligente Zuordnung von Speicher zu Benutzerzuständen ist ein wichtiges Anliegen, das wir weiter unten genauer besprechen werden.

### Stromverbrauch

Die letzte hier besprochene Metrik ist der **Stromverbrauch**. Wie die Speichernutzung nehmen Benutzer den Stromverbrauch nur indirekt wahr, nämlich anhand der Zeitspanne, in der ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um die UPP-Ziele zu erreichen, muss das System nur die minimale, erforderliche Energiemenge verbrauchen.

Der Rest dieses Dokuments wird die Leistung im Hinblick auf diese Metriken diskutieren.

## Plattformleistungsoptimierungen

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie Firefox/Gecko zur Leistung im Allgemeinen beiträgt, unterhalb der Ebene aller Anwendungen. Aus der Sicht eines Entwicklers oder Benutzers beantwortet dies die Frage: "Was tut die Plattform für Sie?"

### Web-Technologien

Die Webplattform bietet viele Werkzeuge, von denen einige besser für bestimmte Aufgaben geeignet sind als andere. Sämtliche Anwendungslogik ist in JavaScript geschrieben. Um Grafiken darzustellen, können Entwickler HTML oder CSS verwenden (d. h. hochstufige deklarative Sprachen), oder sie nutzen die niedrigstufigen imperative Schnittstellen, die vom {{ htmlelement("canvas") }}-Element angeboten werden (welches {{ WebGL }} beinhaltet). Irgendwo "zwischen" HTML/CSS und Canvas befindet sich {{ SVG }}, das einige Vorteile von beiden bietet.

HTML und CSS erhöhen die Produktivität erheblich, manchmal auf Kosten der Bildrate oder der Kontrolle über das Rendering auf Pixelebene. Text und Bilder fügen sich automatisch ein, UI-Elemente erhalten automatisch das Systemthema, und das System bietet eine "eingebaute" Unterstützung für einige Anwendungsfälle, die Entwickler möglicherweise zunächst nicht in Betracht ziehen, wie Anzeigen mit unterschiedlicher Auflösung oder von rechts nach links verlaufende Sprachen.

Das `canvas`-Element bietet Entwicklern einen Pixelpuffer, auf dem sie direkt Zeichnen können. Dies gibt Entwicklern eine Kontrolle auf Pixelebene über das Rendering und eine präzise Kontrolle über die Bildrate, aber jetzt müssen sich die Entwickler mit verschiedenen Auflösungen und Ausrichtungen, von rechts nach links verlaufenden Sprachen usw. auseinandersetzen. Entwickler zeichnen auf die Canvas mit entweder einer vertrauten 2D-Zeichen-API oder WebGL, einer "nah am Metall" Bindung, die größtenteils OpenGL ES 2.0 folgt.

### Gecko-Rendering

Die Gecko JavaScript-Engine unterstützt Just-in-Time (JIT) Kompilierung. Dies ermöglicht es, dass Anwendungslogik vergleichbar mit anderen virtuellen Maschinen - wie Java-VMs - und in einigen Fällen sogar nahe am "nativen Code" performt.

Die Grafikpipeline in Gecko, die HTML, CSS und Canvas untermauert, ist in mehreren Hinsichten optimiert. Der HTML/CSS-Layout- und Grafikcode in Gecko reduziert Ungültigmachung und Neuzeichnung in gängigen Fällen wie dem Scrollen; Entwickler erhalten diese Unterstützung "kostenlos". Von beiden, von Gecko "automatisch" und von Anwendungen "manuell" auf `canvas` gemalte Pixelpuffer minimieren Kopien, wenn sie an den Anzeigeframepuffer gezeichnet werden. Dies wird durch das Vermeiden von Zwischenschichten erreicht, wo sie Overhead erzeugen würden (wie anwendungsspezifische "Rückpuffer" in vielen anderen Betriebssystemen), und durch die Verwendung spezieller Speicher für Grafikpuffer, die direkt von der Kompositor-Hardware zugänglich sind. Komplexe Szenen werden unter Verwendung der Grafikkarte des Gerätes für maximale Leistung gerendert. Um den Stromverbrauch zu verbessern, werden einfache Szenen mit spezieller dedizierter Kompositionshardware gerendert, während die GPU im Leerlauf ist oder ausgeschaltet wird.

Vollständig statischer Inhalt ist die Ausnahme, nicht die Regel, für reichhaltige Anwendungen. Reichhaltige Anwendungen verwenden dynamischen Inhalt mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind besonders wichtig für Anwendungen: Entwickler können CSS verwenden, um kompliziertes Verhalten mit einer einfachen, hochstufigen Syntax zu deklarieren. Im Gegenzug ist Geckos Grafikpipeline hochgradig optimiert, um gängige Animationen effizient zu rendern. Alltägliche Animationen werden an den Systemkompositor ausgelagert, der sie performant und stromsparend rendern kann.

Die Startleistung einer App ist genauso wichtig wie ihre Laufzeitleistung. Gecko ist optimiert, um eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre von Verbesserungen, die auf diesen Inhalt abzielen, wie paralleles HTML-Parsen, intelligente Planung von Neuflüssen und Bilddekodierung, clevere Layoutalgorithmen usw., sind gleichermaßen darauf ausgerichtet, Webanwendungen auf Firefox zu verbessern.

## Anwendungsleistung

Dieser Abschnitt ist für Entwickler gedacht, die sich die Frage stellen: "Wie kann ich meine App schnell machen?"

### Startleistung

Der Anwendungsstart wird im Allgemeinen von drei benutzerwahrgenommenen Ereignissen geprägt:

- Das erste ist das **erste Malen** der Anwendung – der Punkt, an dem genügend Anwendungsressourcen geladen wurden, um einen ersten Frame zu malen.
- Das zweite ist, wenn die Anwendung **interaktiv** wird – zum Beispiel, wenn Benutzer einen Knopf drücken können und die Anwendung reagiert.
- Das letzte Ereignis ist die **vollständige Ladung** – zum Beispiel, wenn alle Alben des Benutzers in einem Musikplayer aufgelistet wurden.

Der Schlüssel zu einem schnellen Start liegt darin, zwei Dinge im Auge zu behalten: UPP ist das Einzige, was zählt, und es gibt einen "kritischen Pfad" zu jedem der oben genannten benutzerwahrgenommenen Ereignisse. Der kritische Pfad ist genau der und nur der Code, der ausgeführt werden muss, um das Ereignis zu erzeugen.

Beispielsweise, um den ersten Frame einer Anwendung zu malen, die visuell einige HTML- und CSS-Styles für das HTML umfasst:

1. Das HTML muss geparst werden.
2. Das DOM für dieses HTML muss konstruiert werden.
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und dekodiert werden.
4. Die CSS-Styles müssen auf das DOM angewendet werden.
5. Das gestylte Dokument muss neu angeordnet werden.

In dieser Liste ist nirgends "die JS-Datei laden, die für ein selten genutztes Menü benötigt wird"; "das Bild für die Bestenliste laden und dekodieren" usw. Diese Arbeitsaufgaben sind nicht auf dem kritischen Pfad zur Malung des ersten Frames.

Es scheint offensichtlich, aber um ein benutzerwahrgenommenes Startereignis schneller zu erreichen, lautet der Haupt-"Trick", _nur den Code auf dem kritischen Pfad auszuführen._ Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist äußerst dynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Webplattform erlaubt das Laden von Code, HTML, CSS, Bildern und anderen Ressourcen dynamisch. Diese Funktionen können verwendet werden, um Arbeit, die sich nicht auf dem kritischen Pfad befindet, durch die "faule" Nachladung unnötigen Inhalts zu einem späteren Zeitpunkt nach dem Start zu verzögern.

Ein weiteres Problem, das den Start verzögern kann, ist Leerlaufzeit, verursacht durch das Warten auf Antworten auf Anfragen (wie Datenbankladungen). Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich im Startprozess ausführen (dies wird "Front-Loading" genannt). Wenn die Daten dann später benötigt werden, sind sie hoffentlich bereits verfügbar, und die Anwendung muss nicht warten.

> [!NOTE]
> Lesen Sie für viel mehr Informationen zur Verbesserung der Startleistung [Optimieren der Startleistung](/de/docs/Web/Performance/Optimizing_startup_performance).

Ebenso beachten Sie, dass lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über hochlatente, bandbreitenschwache mobile Netzwerke abgerufen werden. Netzwerk-Anfragen sollten niemals auf dem kritischen Pfad zum frühen App-Start sein. Lokales Caching/offline Apps können über [Service Worker](/de/docs/Web/API/Service_Worker_API) erreicht werden. Siehe [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Verwendung von Service Workern für Offline- und Hintergrundsynchronisierungsfähigkeiten.

### Bildrate

Das erste wichtige für eine hohe Bildrate ist die Wahl des richtigen Werkzeugs. Verwenden Sie HTML und CSS, um Inhalte zu implementieren, die größtenteils statisch sind, gescrollt werden und selten animiert sind. Verwenden Sie Canvas, um hochdynamische Inhalte zu implementieren, wie Spiele, die eine enge Kontrolle über das Rendering benötigen und kein Thema erfordern.

Für Inhalte, die mit Canvas gezeichnet werden, liegt es am Entwickler, die Bildrate-Ziele zu erreichen: sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte besteht der Weg zu einer hohen Bildrate darin, die richtigen Primitiven zu verwenden. Firefox ist hochgradig optimiert, um beliebige Inhalte zu scrollen; dies ist normalerweise kein Anliegen. Aber oft kann das Eintauschen von etwas Allgemeingültigkeit und Qualität gegen Geschwindigkeit, wie z. B. die Verwendung einer statischen Darstellung anstelle eines CSS-Radialgradienten, dazu führen, dass die Scrolling-Bildrate über ein Ziel hinausgeht. CSS-[Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es, dass diese Kompromisse nur auf Geräte beschränkt sind, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch "Seiten" oder "Panels". Beispielsweise tippt der Benutzer auf einen "Einstellungen"-Knopf, um in ein App-Konfigurationsfenster zu wechseln, oder ein Einstellungsmenü "springt auf". Firefox ist hochgradig optimiert, um Szenen zu überblenden und zu animieren, die:

- Seiten/Panels verwenden, die ungefähr die Größe des Gerätebildschirms haben oder kleiner sind
- Die CSS-Eigenschaften `transform` und `opacity` überblenden/animieren

Übergänge und Animationen, die diesen Richtlinien entsprechen, können an den Systemkompositor ausgelagert und maximal effizient ausgeführt werden.

### Speicher- und Stromverbrauch

Verbesserungen der Speicher- und des Stromverbrauchs sind ein ähnliches Problem wie die Beschleunigung des Starts: unnötige Arbeit unterlassen oder unregelmäßig verwendete UI-Ressourcen faul nachladen. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen Energiesparmodus wechseln, wenn sie größtenteils im Leerlauf sind. Anwendungen, die ständig Timer feuern oder unnötige Animationen laufen lassen, verhindern, dass CPUs in den Energiesparmodus wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund geschickt werden, wird ein {{domxref("document.visibilitychange_event", "visibilitychange")}}-Ereignis auf ihren Dokumenten ausgelöst. Dieses Ereignis ist ein Freund des Entwicklers; Anwendungen sollten darauf achten.

### Konkrete Codierungstipps für die Anwendungsleistung

Die folgenden praktischen Tipps helfen, einen oder mehrere der oben diskutierten Anwendungsleistungsfaktoren zu verbessern.

#### Verwenden Sie CSS-Animationen und -Übergänge

Anstatt eine `animate()`-Funktion aus einer Bibliothek zu verwenden, die wahrscheinlich viele schlecht performende Technologien verwendet ({{domxref("setTimeout()")}} oder `top`/`left`-Positionierung zum Beispiel), verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie tatsächlich [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um dies zu erreichen. Dies funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu verwenden, um sie reibungslos mit minimalem Einfluss auf die Prozessorleistung zu verarbeiten. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS zusammen mit dem Rest des Aussehens und der Benutzererfahrung Ihrer App definieren können, unter Verwendung einer standardisierten Syntax.

CSS-Animationen geben Ihnen eine sehr granulare Kontrolle über Ihre Effekte mithilfe von [Keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar Ereignisse überwachen, die während des Animationsprozesses ausgelöst werden, um andere Aufgaben zu erledigen, die an festgelegten Punkten im Animationsprozess ausgeführt werden müssen. Sie können diese Animationen einfach mithilfe des {{cssxref(":hover")}}, {{cssxref(":focus")}}, oder {{cssxref(":target")}} auslösen oder durch das dynamische Hinzufügen und Entfernen von Klassen auf Elternelementen.

Wenn Sie Animationen spontan erstellen oder in [JavaScript](/de/docs/Web/JavaScript) modifizieren möchten, hat James Long eine einfache Bibliothek dafür geschrieben, die [CSS-animations.js](https://github.com/jlongster/css-animations.js/) genannt wird.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierung zu optimieren und all diese Mathematik selbst zu bearbeiten, verwenden Sie die {{cssxref("transform")}}-CSS-Eigenschaft, um die Position, Skalierung usw. Ihrer Inhalte anzupassen. Alternativ können Sie die einzelnen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}} verwenden. Der Grund dafür ist, einmal mehr, Hardware-Beschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU erledigen, sodass die CPU andere Dinge verarbeiten kann.

Darüber hinaus geben Ihnen Transformationen Fähigkeiten, die Sie möglicherweise sonst nicht haben. Sie können nicht nur Elemente im 2D-Raum übersetzen, sondern auch in drei Dimensionen transformieren, neigen und rotieren usw. Paul Irish hat eine [gründliche Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus Leistungssicht verfasst. Im Allgemeinen jedoch haben Sie die gleichen Vorteile wie bei der Verwendung von CSS-Animationen: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine problemlos erweiterbare Möglichkeit, Elemente zu positionieren - etwas, das viel zusätzlichen Code benötigen würde, wenn Sie die Übersetzung mit `top` und `left`-Positionierung simulieren würden. Ein weiterer Bonus ist, dass dies genauso funktioniert wie bei einem `canvas`-Element.

> [!NOTE]
> Möglicherweise müssen Sie eine `translateZ(0.1)`-Transformation anhängen, wenn Sie Hardware-Beschleunigung für Ihre CSS-Animationen wünschen, je nach Plattform. Wie oben erwähnt, kann dies die Leistung verbessern. Bei übermäßigem Gebrauch kann es jedoch zu erhöhtem Speicherverbrauch führen. Was Sie in dieser Hinsicht tun, liegt bei Ihnen - testen Sie und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Aufrufe von {{domxref("setInterval()")}} führen Code in einer vermuteten Bildrate aus, die unter den aktuellen Umständen möglicherweise nicht möglich ist. Es weist den Browser an, Ergebnisse zu rendern, selbst während der Browser nicht tatsächlich zeichnet; das heißt, während die Videohardware den nächsten Bildzyklus noch nicht erreicht hat. Dies verschwendet Prozessorzeit und kann sogar die Akkulaufzeit des Geräts des Benutzers verringern.

Stattdessen sollten Sie versuchen, {{domxref("window.requestAnimationFrame()")}} zu verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, mit dem Aufbau des nächsten Frames Ihrer Animation zu beginnen, und wird es nicht tun, wenn die Hardware nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht ausgeführt werden, während Ihre App nicht auf dem Bildschirm sichtbar ist (z. B. wenn sie im Hintergrund ist und eine andere Aufgabe läuft). Dies spart Akkulaufzeit und verhindert, dass Benutzer Ihren Namen in den Nachthimmel fluchen.

#### Machen Sie Ereignisse sofortig

Als altmodische, barrierefreiheitsbewusste Webentwickler lieben wir Klick-Ereignisse, da sie auch die Tastatureingabe unterstützen. Auf mobilen Geräten sind diese jedoch zu langsam. Sie sollten {{domxref("Element/touchstart_event", "touchstart")}} und {{domxref("Element/touchend_event", "touchend")}} stattdessen verwenden. Der Grund ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch keine Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) zu diesem Zweck, die für Sie verfügbar ist.

#### Halten Sie Ihr Interface einfach

Ein großes Leistungsproblem, das wir in HTML-Apps festgestellt haben, war, dass das Verschieben vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge macht - besonders, wenn sie viele Verläufe und Schlagschatten haben. Es hilft viel, Ihr Aussehen und Verhalten zu vereinfachen und ein Proxy-Element zu bewegen, wenn Sie ziehen und ablegen.

Wenn Sie beispielsweise eine lange Liste von Elementen haben (sagen wir Tweets), verschieben Sie nicht alle. Halten Sie in Ihrem DOM-Baum nur diejenigen, die sichtbar sind, und einige auf beiden Seiten des derzeit sichtbaren Satzes von Tweets. Verbergen oder entfernen Sie die restlichen. Das Halten von Daten in einem JavaScript-Objekt anstelle des Zugriffs auf das DOM kann die Leistung Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als Darstellung Ihrer Daten, nicht als die Daten selbst. Das bedeutet nicht, dass Sie nicht reines HTML als Quelle verwenden können; lesen Sie es einfach einmal und scrollen Sie dann 10 Elemente, indem Sie den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnisliste ändern, anstelle von 100 Elementen, die nicht sichtbar sind, zu verschieben. Der gleiche Trick gilt in Spielen für Sprites: Wenn sie nicht auf dem Bildschirm sind, gibt es keinen Grund, sie abzufragen. Verwenden Sie stattdessen Elemente, die nicht mehr auf dem Bildschirm sind, wieder.

## Allgemeine Anwendungsleistungsanalyse

Firefox, Chrome und andere Browser enthalten integrierte Werkzeuge, die Ihnen helfen können, langsames Rendering von Seiten zu diagnostizieren. Insbesondere zeigt der [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) eine genaue Zeitleiste, wann jede Netzwerk-Anfrage auf Ihrer Seite erfolgt, wie groß sie ist und wie lange sie dauert.

![Der Firefox-Netzwerkmonitor zeigt GET-Anfragen, mehrere Dateien und unterschiedliche Ladezeiten für jede Ressource in einem Diagramm.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der lange zur Ausführung benötigt, wird der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen hervorheben:

![Der Firefox JavaScript-Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [eingebaute Gecko-Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Werkzeug, das noch detailliertere Informationen darüber liefert, welche Teile des Browser-Codes langsam laufen, während der Profiler läuft. Dies ist etwas komplexer in der Anwendung, bietet aber viele nützliche Details.

![Ein eingebautes Gecko-Profilerfenster zeigt viele Netzwerk-Informationen.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Werkzeuge mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere dauert es in mobilen Browsern länger, dutzende oder hunderte von Netzwerk-Anfragen zu erstellen. Das Rendern großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, da mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite zu nutzen. Für nützliche allgemeine Tipps zur mobilen Webleistung, schauen Sie sich Maximiliano Firtmans [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance)-Vortrag an.

### Testfälle und Fehlerberichte

Wenn die Entwicklerwerkzeuge von Firefox und Chrome Ihnen nicht helfen, ein Problem zu finden, oder wenn sie darauf hindeuten, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem bestmöglich isoliert. Dies hilft oft bei der Diagnose von Problemen.

Sehen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite (einschließlich eingebetteter Bilder/Stylesheets/Skripte) speichern und laden. Wenn ja, bearbeiten Sie die statischen Dateien, um private Informationen zu entfernen, und senden Sie sie an andere zur Unterstützung (reichen Sie zum Beispiel einen [Bugzilla](https://bugzilla.mozilla.org/) Bericht ein oder hosten Sie sie auf einem Server und teilen Sie die URL). Sie sollten auch alle von Ihnen gesammelten Profilerstellungsinformationen mit den oben aufgeführten Werkzeugen teilen.
