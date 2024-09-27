---
title: Performance-Grundlagen
slug: Web/Performance/Fundamentals
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubPages("Web/Performance")}}

Performance bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument im Allgemeinen, was Performance ist, wie die Browser-Plattform hilft, diese zu verbessern, und welche Tools und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.

## Was ist Performance?

Letztendlich ist die vom Benutzer wahrgenommene Performance die einzige, die zählt. Nutzer geben Inputs über Berührung, Bewegung und Sprache in das System ein. Im Gegenzug nehmen sie Outputs durch Sehen, Berühren und Hören wahr. Performance ist die Qualität der Systemausgaben in Reaktion auf Benutzereingaben.

Alles andere ist gleich: Code, der für ein Ziel optimiert ist, das sich von der benutzerwahrgenommenen Performance (fortan UPP) unterscheidet, verliert im Wettbewerb mit Code, der für UPP optimiert ist. Nutzer bevorzugen zum Beispiel eine reaktionsfähige und flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckeligen, nicht reagierenden App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber reale UPP-Ziele kommen zuerst.

Die nächsten Abschnitte heben wesentliche Performance-Metriken hervor und diskutieren sie.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Outputs (möglicherweise mehrere) als Antwort auf Benutzereingaben bietet. Beispielsweise erwartet ein Nutzer, dass sich die Pixel in einer bestimmten Weise ändern, wenn er den Bildschirm berührt. Für diese Interaktion ist die Reaktionsfähigkeit die Zeit, die zwischen der Berührung und der Pixeländerung vergeht.

Reaktionsfähigkeit beinhaltet manchmal mehrere Feedback-Stufen. Der App-Start ist ein besonders wichtiger Fall, der weiter unten ausführlicher diskutiert wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und verärgert werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie auf eine Eingabe des Benutzers keine Antwort gibt.

### Framerate

Framerate ist die Geschwindigkeit, mit der das System die dem Nutzer angezeigten Pixel ändert. Dies ist ein vertrautes Konzept: Jeder bevorzugt Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die nur 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Die Framerate ist als Metrik für „Dienstleistungsqualität“ wichtig. Computermonitore sind so konzipiert, dass sie die Augen der Nutzer „täuschen“, indem sie ihnen Photonen liefern, die die Realität nachahmen. Zum Beispiel reflektiert Papier, das mit Text bedruckt ist, Photonen in einem bestimmten Muster zu den Augen des Nutzers. Durch die Manipulation von Pixeln gibt eine Lese-App Photonen in einem ähnlichen Muster ab, um die Augen des Nutzers „zu täuschen“.

Wie Ihr Gehirn es annimmt, ist Bewegung nicht ruckartig und diskret, sondern „aktualisiert“ sich sanft und kontinuierlich. (Stroboskoplichteffekte machen Spaß, weil sie dies umkehren, indem sie Ihr Gehirn von Eingaben aushungern, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computermonitor sorgt eine höhere Framerate für eine getreuere Nachahmung der Realität.

> [!NOTE]
> Menschen können normalerweise keine Unterschiede in der Framerate über 60Hz wahrnehmen. Deshalb sind die meisten modernen elektronischen Displays darauf ausgelegt, mit dieser Rate zu aktualisieren. Ein Fernseher sieht vermutlich für einen Kolibri ruckelig und unrealistisch aus.

### Speichernutzung

**Speichernutzung** ist eine weitere wichtige Metrik. Im Gegensatz zu Reaktionsfähigkeit und Framerate nehmen Benutzer die Speichernutzung nicht direkt wahr, aber die Speichernutzung stellt eine genaue Annäherung an den „Nutzerzustand“ dar. Ein ideales System würde 100 % des Nutzerzustands jederzeit beibehalten: Alle Anwendungen im System würden gleichzeitig laufen und all die vom Nutzer erstellten Zustände behalten, wenn der Nutzer das letzte Mal mit der Anwendung interagierte (Anwendungszustand wird im Computerspeicher gespeichert, was die Annäherung nahelegt).

Daraus resultiert ein wichtiges, aber kontraintuitives Korollar: Ein gut konzipiertes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Ein gut konzipiertes System wurde optimiert, um **so viel Speicher wie möglich zu nutzen**, um den Nutzerzustand zu erhalten und gleichzeitig andere UPP-Ziele zu erreichen.

Das bedeutet nicht, dass das System Speicher **verschwendet**. Wenn ein System mehr Speicher als nötig verwendet, um einen bestimmten Nutzerzustand zu erhalten, verschwendet das System eine Ressource, die es nutzen könnte, um einen anderen Nutzerzustand zu bewahren. In der Praxis kann kein System alle Nutzerzustände beibehalten. Eine intelligente Zuweisung von Speicher zum Nutzerzustand ist ein wichtiges Anliegen, das wir weiter unten ausführlicher behandeln.

### Stromverbrauch

Die letzte hier diskutierte Metrik ist der **Stromverbrauch**. Wie die Speichernutzung nehmen Benutzer den Stromverbrauch nur indirekt wahr, durch die Dauer, die ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um UPP-Ziele zu erreichen, muss das System nur den minimal erforderlichen Strom verwenden.

Der Rest dieses Dokuments wird die Performance anhand dieser Metriken diskutieren.

## Plattformbezogene Performance-Optimierungen

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie Firefox/Gecko zur Performance im Allgemeinen beiträgt, unterhalb der Ebene aller Anwendungen. Aus der Perspektive eines Entwicklers oder Benutzers beantwortet dies die Frage: „Was tut die Plattform für Sie?“

### Webtechnologien

Die Webplattform bietet viele Werkzeuge, von denen einige besser für bestimmte Aufgaben geeignet sind als andere. Sämtliche Anwendungslogik ist in JavaScript geschrieben. Um Grafiken darzustellen, können Entwickler `HTML` oder `CSS` (d.h. hochgradig deklarative Sprachen) verwenden oder die niedrigstufigen imperativen Schnittstellen des `{{ htmlelement("canvas") }}`-Elements (welches [WebGL](/de/docs/Web/API/WebGL_API) umfasst) nutzen. Irgendwo „zwischen“ `HTML`/`CSS` und `Canvas` liegt [SVG](/de/docs/Web/SVG), welches einige Vorteile beider bietet.

`HTML` und `CSS` steigern die Produktivität erheblich, manchmal auf Kosten der Framerate oder der Kontrolle auf Pixelebene über das Rendering. Text und Bilder fließen automatisch um, UI-Elemente erhalten automatisch das Systemthema, und das System bietet „eingebaute“ Unterstützung für einige Anwendungsfälle, an die Entwickler möglicherweise nicht sofort denken, wie Displays mit unterschiedlichen Auflösungen oder von rechts nach links laufende Sprachen.

Das `canvas`-Element bietet Entwicklern einen Pixelpuffer, auf den sie direkt zeichnen können. Dies gibt den Entwicklern die Kontrolle über das Rendering auf Pixelebene und die genaue Kontrolle der Framerate. Jetzt müssen die Entwickler jedoch mit mehreren Auflösungen und Ausrichtungen, von rechts nach links laufenden Sprachen und so weiter umgehen. Entwickler zeichnen auf Canvas mittels einer vertrauten 2D-Zeichnungs-API oder WebGL, einer „nah an der Hardware“-Bindung, die hauptsächlich OpenGL ES 2.0 folgt.

### Gecko-Rendering

Die Gecko JavaScript-Engine unterstützt Just-in-Time (JIT)-Kompilierung. Dies ermöglicht es, dass die Anwendungslogik vergleichbar mit anderen virtuellen Maschinen – wie Java-VMs – ausgeführt wird und in einigen Fällen sogar nahe an „nativen Code“ heranreicht.

Die Grafikpipeline in Gecko, die `HTML`, `CSS` und `Canvas` untermauert, ist auf verschiedene Weise optimiert. Der `HTML`/`CSS`-Layout- und Grafikcode in Gecko reduziert die Invalidierung und das erneute Zeichnen von gängigen Fällen wie Scrollen; Entwickler erhalten diese Unterstützung „kostenlos“. Pixelpuffer, die sowohl von Gecko „automatisch“ als auch von Anwendungen auf ein `canvas` „manuell“ bemalt werden, minimieren Kopien, wenn sie in den Display-Framebuffer gezeichnet werden. Dies geschieht durch das Vermeiden von Zwischenschichten, wo sie Überkopfarbeit erzeugen würden (wie etwa anwendungsspezifische „Back Buffers“ in vielen anderen Betriebssystemen), und durch die Verwendung von speziellem Speicher für Grafikpuffer, die direkt vom Compositor-Hardware zugänglich sind. Komplexe Szenen werden mit der Geräte-GPU für maximale Performance gerendert. Um den Stromverbrauch zu verbessern, werden einfache Szenen mit spezieller, dedizierter Kompositionshardware gerendert, während die GPU untätig bleibt oder abgeschaltet wird.

Vollständig statischer Content ist die Ausnahme und nicht die Regel für reichhaltige Anwendungen. Diese verwenden dynamischen Content mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Transitionen und Animationen sind für Anwendungen besonders wichtig: Entwickler können mit `CSS` komplexes Verhalten mit einer einfachen, hochgradigen Syntax deklarieren. Im Gegenzug ist die Grafikpipeline von Gecko hochgradig optimiert, um häufige Animationen effizient zu rendern. Häufige Animationen werden an den Systemkompositor ausgelagert, der sie auf performante und stromsparende Weise rendern kann.

Die Startleistung einer App ist genauso wichtig wie ihre Laufzeitleistung. Gecko ist optimiert, um eine Vielzahl breiten Inhalts effizient zu laden: das gesamte Web! Viele Jahre Verbesserungen, die auf diesen Content abzielen, wie paralleles HTML-Parsing, intelligentes Scheduling von Reflows und Bild-Decodierung, clevere Layout-Algorithmen etc., führen ebenso zu Verbesserungen bei Webanwendungen in Firefox.

## Anwendungsperformance

Dieser Abschnitt ist für Entwickler gedacht, die sich fragen: „Wie kann ich meine App schnell machen?“

### Startleistung

Der Anwendungsstart wird allgemein durch drei vom Benutzer wahrgenommene Ereignisse geprägt:

- Das erste ist die **erste Darstellung** der Anwendung — der Punkt, an dem genügend Anwendungsressourcen geladen wurden, um einen ersten Frame darzustellen
- Das zweite ist, wenn die Anwendung **interaktiv** wird — beispielsweise können Benutzer einen Button antippen, und die Anwendung reagiert
- Das letzte Ereignis ist der **vollständige Ladevorgang** — z. B. wenn alle Alben des Benutzers in einem Musikplayer aufgelistet sind

Der Schlüssel zu einem schnellen Start ist, zwei Dinge im Hinterkopf zu behalten: UPP ist das Einzige, das zählt, und es gibt einen „kritischen Pfad“ zu jedem der oben genannten benutzerwahrgenommenen Ereignisse. Der kritische Pfad ist genau und nur der Code, der ausgeführt werden muss, um das Ereignis zu erzeugen.

Beispielsweise erfordert das Darstellen des ersten Frames einer Anwendung, die visuell aus ein wenig `HTML` und `CSS` zur Gestaltung dieses `HTML` besteht:

1. Das `HTML` muss geparst werden
2. Das `DOM` für dieses `HTML` muss konstruiert werden
3. Ressourcen wie Bilder in diesem Teil des `DOM` müssen geladen und dekodiert werden
4. Die `CSS`-Stile müssen auf dieses `DOM` angewendet werden
5. Das gestaltete Dokument muss neu umbrochen werden

Nirgends in dieser Liste findet sich „Die JS-Datei, die für ein seltenes Menü benötigt wird, laden“; „Das Bild für die Highscore-Liste abrufen und dekodieren“; etc. Diese Arbeitspunkte befinden sich nicht auf dem kritischen Pfad zum Darstellen des ersten Frames.

Es scheint offensichtlich, aber um ein benutzerwahrgenommenes Startevent schneller zu erreichen, besteht der Haupt„Trick“ darin, _nur den Code auf dem kritischen Pfad auszuführen._ Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist hochgradig dynamisch. `JavaScript` ist eine dynamisch typisierte Sprache, und die Webplattform ermöglicht das dynamische Laden von Code, `HTML`, `CSS`, Bildern und anderen Ressourcen. Diese Funktionen können genutzt werden, um Arbeit vom kritischen Pfad fernzuhalten, indem unnötiger Inhalt „lazy“ nach dem Start geladen wird.

Ein weiteres Problem, das den Start verzögern kann, ist die Leerlaufzeit, die durch das Warten auf Antworten auf Anfragen (wie Datenbankladungen) verursacht wird. Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich im Startprozess stellen (dies wird „Front-Loading“ genannt). Wenn die Daten später benötigt werden, stehen sie hoffentlich bereits zur Verfügung, und die Anwendung muss nicht warten.

> [!NOTE]
> Für viel mehr Informationen zur Optimierung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Optimizing_startup_performance).

Beachten Sie auch, dass lokal gecachte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über hochlatenz-, niedrigbandbreitige mobile Netzwerke abgerufen werden. Netzwerkabfragen sollten niemals auf dem kritischen Pfad zu einem frühen Anwendungsstart sein. Lokales Caching/offlinefähige Apps können über [Service Workers](/de/docs/Web/API/Service_Worker_API) erreicht werden. Siehe [Offline and background operation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Verwendung von Servicearbeitern für Offline- und Hintergrundsynchronisationsfähigkeiten.

### Framerate

Das erste Wichtige für eine hohe Framerate ist, das richtige Werkzeug zu wählen. Verwenden Sie `HTML` und `CSS` für die Implementierung von Content, der meist statisch ist, gescrollt wird und selten animiert ist. Verwenden Sie Canvas, um hochdynamischen Content zu implementieren, wie Spiele, die enge Kontrolle über das Rendering benötigen und keine Themen erfordern.

Für Content, der über Canvas gezeichnet wird, liegt es am Entwickler, die Framerate-Ziele zu erreichen: sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für `HTML` und `CSS`-Content ist der Weg zu einer hohen Framerate die Verwendung der richtigen Primitiven. Firefox ist hochgradig optimiert, um beliebigen Content zu scrollen; dies ist meistens kein Problem. Aber oft kann ein Austausch von etwas Allgemeingültigkeit und Qualität für Geschwindigkeit, wie die Verwendung einer statischen Darstellung anstelle eines CSS-Radialverlaufs, die Scroll-Framerate über ein Ziel hinaus optimieren. `CSS`-[Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben, dass diese Kompromisse nur auf Geräte beschränkt werden können, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch „Seiten“ oder „Panels“. Beispielsweise tippt der Nutzer auf einen „Einstellungen“-Button, um in einen Anwendungskonfigurationsbildschirm zu wechseln, oder ein Einstellungsmenü „ploppt auf“. Firefox ist hochgradig optimiert, um Szenen zu überblenden und zu animieren, die:

- Seiten/Panels ungefähr in der Größe des Gerätdisplays oder kleiner verwenden
- die CSS-`transform`- und `opacity`-Eigenschaften überblenden/animieren

Übergänge und Animationen, die diesen Richtlinien folgen, können an den Systemkompositor ausgelagert und hoch effizient ausgeführt werden.

### Speicher- und Stromverbrauch

Die Verbesserung des Speicher- und Stromverbrauchs ist ein ähnliches Problem wie das Beschleunigen des Starts: keine unnötige Arbeit leisten oder selten genutzte UI-Ressourcen lazy laden. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen stromsparenden Modus wechseln, wenn sie meist im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen laufen lassen, verhindern, dass CPUs in den stromsparenden Modus wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund gestellt werden, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis auf ihren Dokumenten ausgelöst. Dieses Ereignis ist ein Freund des Entwicklers; Anwendungen sollten ihm zuhören.

### Spezifische Codierungstipps für die Anwendungsperformance

Die folgenden praktischen Tipps helfen, einen oder mehrere der oben besprochenen Anwendungsperformancefaktoren zu verbessern.

#### Verwenden Sie CSS-Animationen und -Übergänge

Verwenden Sie anstelle der `animate()`-Funktion einer Bibliothek, die wahrscheinlich viele schlecht performante Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/SetTimeout) oder `top`/`left`-Positionierung, z.B.), [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie tatsächlich [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um die Arbeit zu erledigen. Dies funktioniert gut, da der Browser so konzipiert ist, diese Effekte zu optimieren und die GPU zu verwenden, um sie reibungslos mit minimaler Auswirkung auf die Prozessorleistung zu bewältigen. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS neben dem restlichen Look-and-Feel Ihrer App mit einem standardisierten Syntax definieren können.

CSS-Animationen geben Ihnen eine sehr granulare Kontrolle über Ihre Effekte durch [keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar Ereignisse, die während des Animationsprozesses ausgelöst werden, beobachten, um andere Aufgaben zu behandeln, die zu bestimmten Zeitpunkten im Animationsprozess ausgeführt werden müssen. Sie können diese Animationen einfach durch die {{cssxref(":hover")}}, {{cssxref(":focus")}}, oder {{cssxref(":target")}} auslösen oder durch das dynamische Hinzufügen und Entfernen von Klassen auf Elternelementen.

Wenn Sie Animationen spontan erstellen oder in [JavaScript](/de/docs/Web/JavaScript) modifizieren möchten, hat James Long eine einfache Bibliothek dafür geschrieben, die [CSS-animations.js](https://github.com/jlongster/css-animations.js/) genannt wird.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierung zu optimieren und mit all der Mathematik selbst zu spielen, verwenden Sie die {{cssxref("transform")}}-CSS-Eigenschaft, um Position, Skalierung und so weiter Ihres Contents anzupassen. Alternativ können Sie die individuellen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}} verwenden. Der Grund ist erneut, die Hardwarebeschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU ausführen und die CPU für andere Dinge freigeben.

Zusätzlich bieten Transformationen Ihnen Fähigkeiten, die Sie vielleicht sonst nicht hätten. Sie können nicht nur Elemente im 2D-Raum verschieben, sondern auch in drei Dimensionen transformieren, schiefstellen und drehen usw. Paul Irish bietet eine [eingehende Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus einer Performance-Sicht. Allgemein haben Sie jedoch dieselben Vorteile, die Sie durch die Verwendung von CSS-Animationen erhalten: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie benutzen auch eine leicht erweiterbare Art, Elemente zu positionieren — etwas, das viel zusätzlichen Code benötigt, wenn Sie die Übersetzung mit `top`- und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass dies so ist, als ob man in einem `canvas`-Element arbeitet.

> [!NOTE]
> Sie müssen möglicherweise eine `translateZ(0.1)`-Transformation hinzufügen, wenn Sie in Ihren CSS-Animationen Hardwarebeschleunigung erreichen möchten, abhängig von der Plattform. Wie oben erwähnt, kann dies die Performance verbessern. Bei übermäßiger Nutzung kann es zu Speicherverbrauchsproblemen kommen. Was Sie in Bezug darauf machen, ist Ihnen überlassen — machen Sie einige Tests und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/SetInterval) führen Code mit einer angenommenen Framerate aus, die unter den aktuellen Umständen möglicherweise nicht möglich ist. Es weist den Browser an, Ergebnisse darzustellen, selbst wenn der Browser nicht tatsächlich zeichnet; d.h. während die Video-Hardware den nächsten Display-Zyklus noch nicht erreicht hat. Dies verschwendet Prozesszeit und kann sogar zu einer verkürzten Batterielebensdauer auf dem Gerät des Benutzers führen.

Stattdessen sollten Sie [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu erstellen, und stört nicht, wenn die Hardware tatsächlich nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht laufen, während Ihre App nicht auf dem Bildschirm sichtbar ist (z. B. wenn sie im Hintergrund ist und eine andere Aufgabe ausgeführt wird). Dies schont den Akku und verhindert, dass Benutzer Ihren Namen in den Nachthimmel fluchen.

#### Machen Sie Ereignisse unmittelbar

Als altmodische, barrierefreiheitsbewusste Webentwickler lieben wir Klickereignisse, da sie auch Tastatureingaben unterstützen. Auf Mobilgeräten sind diese jedoch zu langsam. Sie sollten [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst nach Unterstützung für Touch testen, opfern Sie auch keine Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) dafür, die Ihnen zur Verfügung steht.

#### Halten Sie Ihr Interface einfach

Ein großes Performanceproblem, das wir in HTML-Apps fanden, war, dass das Bewegen vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge macht — besonders, wenn sie viele Verläufe und Schatten enthalten. Es hilft sehr, Ihr Look-and-Feel zu vereinfachen und ein Proxy-Element zu verschieben, wenn Sie ziehen und ablegen.

Wenn Sie zum Beispiel eine lange Liste von Elementen haben (nehmen wir an Tweets), bewegen Sie nicht alle. Stattdessen halten Sie in Ihrem DOM-Baum nur die, die sichtbar sind, und einige auf beiden Seiten des derzeit sichtbaren Twitter-Sets. Verstecken oder entfernen Sie den Rest. Die Daten in einem JavaScript-Objekt zu halten anstelle des Zugriffs auf das DOM kann die Performance Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als Präsentation Ihrer Daten und nicht als die Daten selbst. Das bedeutet nicht, dass Sie nicht direktes HTML als Quelle verwenden können; lesen Sie es nur einmal und scrollen Sie dann 10 Elemente, indem Sie den Inhalt des ersten und letzten gemäß Ihrer Position in der Ergebnisliste ändern, anstatt 100 unsichtbare Elemente zu bewegen. Der gleiche Trick gilt in Spielen für Sprites: Wenn sie sich nicht auf dem Bildschirm befinden, gibt es keinen Grund, sie zu überprüfen. Verwenden Sie stattdessen Elemente, die aus dem Bildschirm scrollen, als neue, die in den Bildschirm kommen.

## Allgemeine Performanceanalyse für Anwendungen

Firefox, Chrome und andere Browser enthalten integrierte Tools, die Ihnen helfen können, langsame Seiten-Darstellungen zu diagnostizieren. Insbesondere zeigt der [Netzwerkmonitor von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) eine präzise Zeitleiste, wann jede Netzwerkabfrage auf Ihrer Seite passiert, wie groß sie ist und wie lange es dauert.

![Der Firefox-Netzwerkmonitor zeigt GET-Anfragen, mehrere Dateien und unterschiedliche Ladezeiten für jede Ressource auf einem Graphen.](network-monitor.jpg)

Wenn Ihre Seite `JavaScript`-Code enthält, der lange zum Ausführen benötigt, wird der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen genau auffinden:

![Der Firefox-JavaScript-Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [Integrierte Gecko-Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Tool, das noch detailliertere Informationen darüber bietet, welche Teile des Browsercodes während der Profiler-Ausführung langsam laufen. Dies ist etwas komplexer zu verwenden, bietet aber viele nützliche Details.

![Ein integriertes Gecko-Profiler-Fenster zeigt viele Netzwerkinformationen an.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Tools mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Besonders das Stellen von Dutzenden oder Hunderten von Netzwerkabfragen dauert in mobilen Browsern länger. Das Rendern großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, da mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite zu nutzen. Für nützliche allgemeine Tipps zur mobilen Webperformance werfen Sie einen Blick auf Maximiliano Firtmans Vortrag [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance).

### Testfälle und das Einreichen von Bugs

Wenn die Firefox- und Chrome-Entwicklertools Ihnen nicht helfen, ein Problem zu finden, oder wenn sie scheinen, darauf hinzuweisen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem maximal isoliert. Das hilft oft bei der Diagnose von Problemen.

Sehen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite (einschließlich eingebetteter Bilder/Stylesheets/Skripte) speichern und laden. Wenn ja, bearbeiten Sie die statischen Dateien, um private Informationen zu entfernen, und senden Sie diese dann zur Hilfe an andere (z.B. ein [Bugzilla-Bericht](https://bugzilla.mozilla.org/) einreichen, oder es auf einem Server hosten und die URL teilen). Sie sollten auch alle Profildaten, die Sie mit den oben aufgeführten Tools gesammelt haben, teilen.
