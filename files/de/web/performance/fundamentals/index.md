---
title: Leistungsgrundlagen
slug: Web/Performance/Fundamentals
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubPages("Web/Performance")}}

Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browserplattform zur Verbesserung beiträgt und welche Werkzeuge und Prozesse Sie zum Testen und Verbessern nutzen können.

## Was ist Leistung?

Letztendlich ist die vom Benutzer wahrgenommene Leistung die einzige, die zählt. Benutzer geben dem System über Berührung, Bewegung und Sprache Eingaben. Im Gegenzug nehmen sie Ausgaben über Sicht, Berührung und Gehör wahr. Leistung ist die Qualität der Systemausgaben als Reaktion auf Benutzereingaben.

Alles andere ist gleich, Code optimiert für ein Ziel neben der vom Benutzer wahrgenommenen Leistung (fortan UPP genannt) verliert im Vergleich zu Code, der für UPP optimiert ist. Benutzer ziehen beispielsweise eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, einer holprigen, nicht reagierenden App vor, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber echte UPP-Ziele kommen zuerst.

Die nächsten Unterabschnitte weisen auf wesentliche Leistungsmetriken hin und diskutieren diese.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Benutzereingaben liefert. Zum Beispiel erwartet ein Benutzer, dass sich die Pixel in einer bestimmten Weise ändern, wenn er den Bildschirm berührt. Für diese Interaktion ist die Reaktionsmetrik die Zeit, die zwischen der Berührung und der Pixeländerung vergeht.

Die Reaktionsfähigkeit umfasst manchmal mehrere Rückmeldestufen. Der Anwendungsstart ist ein besonders wichtiger Fall, der weiter unten detailliert besprochen wird.

Reaktionsfähigkeit ist wichtig, da Menschen frustriert und wütend werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf seine Eingabe reagiert.

### Bildrate

Bildrate ist die Geschwindigkeit, mit der das System die angezeigten Pixel für den Benutzer ändert. Dies ist ein bekanntes Konzept: Jeder zieht, sagen wir, Spiele vor, die 60 Bilder pro Sekunde darstellen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Die Bildrate ist als eine "Qualitätsmetriken" von Bedeutung. Computermonitore sind so konzipiert, dass sie die Augen des Benutzers "täuschen", indem sie Photonen liefern, die die Realität nachahmen. Beispielsweise reflektiert Papier, das mit gedrucktem Text bedeckt ist, Photonen in einem bestimmten Muster auf die Augen des Benutzers. Durch die Manipulation von Pixeln emittiert eine Lese-App Photonen in einem ähnlichen Muster, um die Augen des Benutzers zu "täuschen".

Wie Ihr Gehirn folgert, ist Bewegung nicht ruckartig und diskret, sondern wird "sanft" und kontinuierlich aktualisiert. (Stroboskope machen Spaß, weil sie das umdrehen, indem sie Ihrem Gehirn Eingaben entziehen, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computermonitor sorgt eine höhere Bildrate für eine glaubwürdigere Nachahmung der Realität.

> [!NOTE]
> Menschen können normalerweise Unterschiede in der Bildrate über 60Hz nicht wahrnehmen. Daher sind die meisten modernen elektronischen Displays so konzipiert, dass sie sich mit dieser Rate aktualisieren. Ein Fernseher wirkt zum Beispiel ruckartig und unrealistisch für einen Kolibri.

### Speicherverbrauch

**Speicherverbrauch** ist eine weitere wichtige Metrik. Anders als bei der Reaktionsfähigkeit und der Bildrate nehmen Benutzer den Speicherverbrauch nicht direkt wahr, aber der Speicherverbrauch nähert sich dem "Benutzerzustand" an. Ein ideales System würde jederzeit 100% des Benutzerzustands beibehalten: alle Anwendungen im System würden gleichzeitig laufen und alle Anwendungen würden den Zustand behalten, den der Benutzer beim letzten Mal erzeugt hat, als er mit der Anwendung interagiert hat (der Anwendungszustand wird im Computer gespeichert Speicher, weshalb die Annäherung nahe ist).

Daraus folgt eine wichtige, aber kontraintuitive Folgerung: Ein gut gestaltetes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine nicht genutzte Ressource. Ein gut gestaltetes System wurde eher so optimiert, dass es so viel Speicher wie möglich nutzt, um den Benutzerzustand zu erhalten, während andere UPP-Ziele erreicht werden.

Das bedeutet nicht, dass das System **verschwendet** Speicher. Wenn ein System mehr Speicher als nötig verwendet, um einen bestimmten Benutzerzustand aufrechtzuerhalten, verschwendet das System eine Ressource, die es verwenden könnte, um einen anderen Benutzerzustand beizubehalten. In der Praxis kann kein System alle Benutzerzustände aufrechterhalten. Eine intelligente Speicherzuteilung an den Benutzerzustand ist ein wichtiges Anliegen, das weiter unten näher erläutert wird.

### Energieverbrauch

Die letzte hier besprochene Metrik ist der **Energieverbrauch**. Wie der Speicherverbrauch wird der Energieverbrauch nur indirekt wahrgenommen, indem er ermittelt, wie lange ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um die UPP-Ziele zu erreichen, muss das System nur die minimale Energie verwenden, die erforderlich ist.

Der Rest dieses Dokuments wird die Leistung anhand dieser Metriken diskutieren.

## Plattformleistungsoptimierungen

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie Firefox/Gecko im Allgemeinen unterhalb der Ebene aller Anwendungen zur Leistung beiträgt. Aus der Sicht eines Entwicklers oder Nutzers beantwortet dies die Frage: „Was tut die Plattform für Sie?“

### Webtechnologien

Die Webplattform bietet viele Werkzeuge, von denen einige besser für bestimmte Aufgaben geeignet sind als andere. Alle Anwendungslogik wird in JavaScript geschrieben. Um Grafiken darzustellen, können Entwickler HTML oder CSS (d. h. hochentwickelte deklarative Sprachen) oder niedrigstufige imperative Schnittstellen, die vom `<canvas>`-Element angeboten werden (das [WebGL](/de/docs/Web/API/WebGL_API) umfasst), nutzen. Irgendwo "zwischen" HTML/CSS und `<canvas>` liegt [SVG](/de/docs/Web/SVG), das einige Vorteile beider bietet.

HTML und CSS erhöhen die Produktivität erheblich, manchmal auf Kosten der Bildrate oder der Pixelebene über die Darstellung. Text und Bilder fließen automatisch um, UI-Elemente erhalten automatisch das Systemthema, und das System bietet "integrierte" Unterstützung für einige Anwendungsfälle, an die die Entwickler möglicherweise nicht sofort denken, wie etwa Anzeigen mit unterschiedlicher Auflösung oder Sprachen von rechts nach links.

Das `<canvas>`-Element bietet Entwicklern einen Pixelpuffer, auf den sie direkt zeichnen können. Dies gibt Entwicklern die Kontrolle auf Pixelebene über die Darstellung und die genaue Kontrolle der Bildrate, aber jetzt müssen sich die Entwickler mit mehreren Auflösungen und Ausrichtungen, Sprachen von rechts nach links und so weiter auseinandersetzen. Entwickler zeichnen in Canvas entweder mit einer vertrauten 2D-Zeichnungs-API oder mit WebGL, einer "nah am Metall" Bindung, die im Wesentlichen OpenGL ES 2.0 folgt.

### Gecko Rendering

Die JavaScript-Engine von Gecko unterstützt die just-in-time (JIT) Kompilierung. Dadurch kann die Anwendungslogik vergleichbar mit anderen virtuellen Maschinen – wie Java-Virtual-Maschinen – und in einigen Fällen sogar nahe "nativem Code" ausgeführt werden.

Die Grafik-Pipeline in Gecko, die HTML, CSS und Canvas untermauert, ist in vielerlei Hinsicht optimiert. Der HTML/CSS-Layout- und Grafikcode in Gecko reduziert bei gängigen Fällen wie dem Scrollen die Ungültigkeitserklärung und das Neuzeichnen; Entwickler erhalten diese Unterstützung "kostenlos". Pixelpuffer, die sowohl von Gecko "automatisch" als auch von Anwendungen in `<canvas>` "manuell" gezeichnet werden, minimieren Kopien beim Zeichnen auf den Anzeige-Framebuffer. Dies geschieht durch Vermeidung von Zwischensurfaces, wo sie Overhead verursachen würden (wie etwa "Back Buffers" pro Anwendung in vielen anderen Betriebssystemen) und durch Verwendung von speziellem Speicher für Grafikpuffer, auf den von der Kompositor-Hardware direkt zugegriffen werden kann. Komplexe Szenen werden mit der GPU des Geräts für maximale Leistung gerendert. Um den Energieverbrauch zu verbessern, werden einfache Szenen mit spezieller dedizierter Kompositions-Hardware gerendert, während die GPU im Leerlauf ist oder abgeschaltet wird.

Vollständig statische Inhalte sind bei reichhaltigen Anwendungen eher die Ausnahme als die Regel. Reichhaltige Anwendungen verwenden dynamische Inhalte mit `animation` und `transition` Effekten. Übergänge und Animationen sind besonders wichtig für Anwendungen: Entwickler können CSS verwenden, um kompliziertes Verhalten mit einer einfachen, hochentwickelten Syntax zu deklarieren. Im Gegenzug ist die Grafik-Pipeline von Gecko stark optimiert, um gebräuchliche Animationen effizient zu rendern. Häufige Animationen werden an den Systemkompositor "ausgelagert", der sie in performanter und energieeffizienter Weise rendern kann.

Die Startleistung einer App ist ebenso wichtig wie ihre Laufzeitleistung. Gecko ist darauf optimiert, eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre der Verbesserung, die sich auf diesen Inhalt konzentrieren, wie paralleles HTML-Parsing, intelligentes Scheduling von Reflows und Bilddecodierung, clevere Layout-Algorithmen usw., tragen ebenso zur Verbesserung von Webanwendungen in Firefox bei.

## Anwendungsleistung

Dieser Abschnitt richtet sich an Entwickler, die die Frage stellen: "Wie kann ich meine App schnell machen?"

### Startleistung

Der Anwendungsstart wird im Allgemeinen durch drei vom Benutzer wahrgenommene Ereignisse unterbrochen:

- Das erste ist das **erste Rendering** der Anwendung — der Punkt, an dem genügend Anwendungsressourcen geladen wurden, um einen initialen Frame zu zeichnen
- Das zweite ist, wenn die Anwendung **interaktiv** wird — zum Beispiel können Benutzer auf eine Schaltfläche tippen und die Anwendung reagiert
- Das letzte Ereignis ist das **vollständige Laden** — zum Beispiel, wenn alle Alben des Benutzers in einem Musikplayer aufgelistet sind

Der Schlüssel zu einem schnellen Start besteht darin, zwei Dinge im Kopf zu behalten: UPP ist alles, was zählt, und es gibt einen "kritischen Pfad" zu jedem der oben genannten vom Benutzer wahrgenommenen Ereignisse. Der kritische Pfad ist genau und nur der Code, der ausgeführt werden muss, um das Ereignis zu erzeugen.

Zum Beispiel, um den ersten Frame einer Anwendung anzuzeigen, der aus HTML und CSS besteht, benötigt man:

1. Das HTML muss geparst werden
2. Der DOM für dieses HTML muss erstellt werden
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und decodiert werden
4. Die CSS-Stile müssen auf diesen DOM angewendet werden
5. Das gestylte Dokument muss reflowed werden

Nirgends in dieser Liste steht „Laden der JS-Datei, die für ein seltenes Menü benötigt wird“; „Abrufen und Decodieren des Bildes für die Highscore-Liste“ usw. Diese Arbeitsaufgaben befinden sich nicht auf dem kritischen Pfad zur Anzeige des ersten Frames.

Es scheint offensichtlich, aber um ein vom Benutzer wahrgenommenes Startevent schneller zu erreichen, besteht der Haupttrick darin, „nur den Code auf dem kritischen Pfad auszuführen“. Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Web-Plattform ist hochdynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Web-Plattform ermöglicht das dynamische Laden von Code, HTML, CSS, Bildern und anderen Ressourcen. Diese Funktionen können genutzt werden, um Arbeit zu verzögern, die sich außerhalb des kritischen Pfads befindet, indem unnötige Inhalte "faul" geladen werden, einige Zeit nach dem Start.

Ein weiteres Problem, das den Start verzögern kann, ist Leerlaufzeit, die durch Warten auf Antworten auf Anfragen (wie Datenbankladungen) verursacht wird. Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich im Startprozess stellen (dies wird "Front-Loading" genannt). Dann, wenn die Daten später benötigt werden, sind sie hoffentlich bereits verfügbar und die Anwendung muss nicht warten.

> [!NOTE]
> Für ausführlichere Informationen zur Verbesserung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Optimizing_startup_performance).

Ebenso beachten Sie, dass lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über hochlatente, netzwerkschwache mobile Netzwerke abgerufen werden. Netzwerk-Anfragen sollten niemals auf dem kritischen Pfad zum frühen Start einer Anwendung stehen. Lokales Caching/Offline-Apps können über [Service Workers](/de/docs/Web/API/Service_Worker_API) erreicht werden. Siehe [Offline and background operation](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Nutzung von Service-Arbeitern für Offline- und Hintergrundsynchronisationsfähigkeiten.

### Bildrate

Das Erste, was für eine hohe Bildrate wichtig ist, ist das richtige Werkzeug zu wählen. Verwenden Sie HTML und CSS, um Inhalte zu implementieren, die hauptsächlich statisch sind, gescrollt und selten animiert. Verwenden Sie `<canvas>`, um hochdynamische Inhalte zu implementieren, wie zum Beispiel Spiele, die eine enge Kontrolle über die Darstellung benötigen und keine Thematisierung erfordern.

Für Inhalte, die mit `<canvas>` gezeichnet werden, liegt es in der Verantwortung des Entwicklers, die Bildziele zu erreichen: Sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte ist der Weg zur hohen Bildrate die Verwendung der richtigen Primitiven. Firefox ist hochoptimiert, um beliebige Inhalte zu scrollen; dies ist normalerweise kein Problem. Aber oft kann der Handel einiger Allgemeinheit und Qualität für Geschwindigkeit, wie die Verwendung einer statischen Darstellung anstelle eines CSS-Radialverlaufs, die Scroll-Bildrate über ein Ziel schieben. CSS [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglichen es, diese Kompromisse nur auf Geräte zu beschränken, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch "Seiten" oder "Paneele". Beispielsweise tippt der Benutzer auf eine "Einstellungen"-Schaltfläche, um auf einen Anwendungskonfigurationsbildschirm zu wechseln, oder ein Einstellungsmenü "poppt" auf. Firefox ist stark optimiert, um Szenen zu übergeben und zu animieren, die:

- Seiten/Panels ungefähr in der Größe des Geräts oder kleiner verwenden
- die `transform`- und `opacity`-Eigenschaften animieren

Übergänge und Animationen, die diesen Richtlinien entsprechen, können an den Systemkompositor ausgelagert und maximal effizient ausgeführt werden.

### Speicher- und Energieverbrauch

Die Verbesserung des Speicher- und Energieverbrauchs ist ein ähnliches Problem wie die Beschleunigung des Starts: Tun Sie keine unnötige Arbeit oder laden Sie selten verwendete UI-Ressourcen faul. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen energiesparenden Modus wechseln, wenn sie größtenteils im Leerlauf sind. Anwendungen, die ständig Timer abfeuern oder unnötige Animationen ausführen, verhindern, dass CPUs in den Energiesparmodus übergehen. Energieeffiziente Anwendungen sollten dies vermeiden.

Wenn Anwendungen in den Hintergrund geschoben werden, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Event bei ihren Dokumenten ausgelöst. Dieses Event ist der Freund eines Entwicklers; Anwendungen sollten es überwachen.

### Spezifische Codierungstipps für Anwendungsleistung

Die folgenden praktischen Tipps helfen, einen oder mehrere der oben besprochenen Anwendungsleistungsfaktoren zu verbessern.

#### Verwenden Sie CSS-Animationen und Übergänge

Verwenden Sie anstelle der `animate()`-Funktion einer Bibliothek, die wahrscheinlich viele schlecht performende Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/SetTimeout) oder `top`/`left`-Positionierung, zum Beispiel), [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie sogar [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um die Aufgabe zu erledigen. Dies funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu verwenden, um sie mit minimalem Einfluss auf die Prozessorleistung reibungslos zu handhaben. Ein weiterer Vorteil ist, dass Sie diese Effekte im CSS zusammen mit dem Rest des Aussehens Ihrer App mit einer standardisierten Syntax definieren können.

CSS-Animationen bieten Ihnen sehr präzise Kontrolle über Ihre Effekte unter Verwendung von [Keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar Ereignisse, die während des Animationsprozesses ausgelöst werden, überwachen, um andere Aufgaben zu behandeln, die zu bestimmten Punkten im Animationsprozess ausgeführt werden müssen. Sie können diese Animationen einfach mit {{cssxref(":hover")}}, {{cssxref(":focus")}} oder {{cssxref(":target")}} auslösen, oder indem Sie dynamisch Klassen auf übergeordnete Elemente hinzufügen und entfernen.

Wenn Sie Animationen im Handumdrehen erstellen oder sie in [JavaScript](/de/docs/Web/JavaScript) modifizieren möchten, hat James Long eine einfache Bibliothek dafür geschrieben, die sich [CSS-animations.js](https://github.com/jlongster/css-animations.js/) nennt.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierung zu optimieren und sich mit all dieser Mathematik selbst herumzuschlagen, verwenden Sie die CSS-Eigenschaft {{cssxref("transform")}}, um die Position, die Skalierung usw. Ihrer Inhalte anzupassen. Alternativ können Sie die einzelnen Transformations-Eigenschaften von {{cssxref("translate")}}, {{cssxref("scale")}} und {{cssxref("rotate")}} verwenden. Der Grund ist erneut die Hardwarebeschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU ausführen und so der CPU andere Aufgaben überlassen.

Zusätzlich bieten Transformationen Ihnen Fähigkeiten, die Sie sonst möglicherweise nicht hätten. Sie können Elemente nicht nur im 2D-Raum übersetzen, sondern auch in drei Dimensionen transformieren, schrägen und rotieren usw. Paul Irish hat eine [umfassende Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus Sicht der Leistung. Im Allgemeinen haben Sie jedoch die gleichen Vorteile, die Sie durch die Verwendung von CSS-Animationen erzielen: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine leicht erweiterbare Methode, um Elemente zu positionieren – etwas, das viel zusätzlichen Code erfordert, wenn Sie die Übersetzung mit `top` und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass dies genauso ist, wie im `canvas`-Element zu arbeiten.

> [!NOTE]
> Sie müssen möglicherweise eine `translateZ(0.1)`-Transformation anfügen, wenn Sie Hardwarebeschleunigung für Ihre CSS-Animationen erhalten möchten, je nach Plattform. Wie oben angemerkt, kann dies die Leistung verbessern. Bei übermäßigem Gebrauch kann es zu Problemen beim Speicherverbrauch kommen. Was Sie in dieser Hinsicht tun, liegt bei Ihnen – testen Sie es und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/SetInterval) führen Code mit einer angenommenen Bildrate aus, die unter den aktuellen Umständen vielleicht nicht möglich ist. Es weist den Browser an, Ergebnisse zu rendern, selbst wenn der Browser tatsächlich nicht zeichnet; das heißt, wenn die Videohardware den nächsten Anzeigecyklus noch nicht erreicht hat. Dies verschwendet Prozessorzeit und kann sogar die Batterielebensdauer des Benutzergeräts verringern.

Stattdessen sollten Sie versuchen, [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zu verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu starten, und wird es nicht probieren, wenn die Hardware tatsächlich nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht ausgeführt werden, während Ihre App nicht auf dem Bildschirm sichtbar ist (zum Beispiel, wenn sie im Hintergrund läuft und eine andere Aufgabe ausgeführt wird). Dies spart Batterielebensdauer und verhindert, dass Benutzer Ihren Namen in den Nachthimmel verfluchen.

#### Machen Sie Ereignisse sofort

Als altmodische, barrierefreiheitsbewusste Webentwickler lieben wir Klick-Ereignisse, da sie auch Tastatureingaben unterstützen. Auf mobilen Geräten sind diese zu langsam. Sie sollten stattdessen [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund ist, dass diese keinen Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) zu diesem Zweck, die Ihnen zur Verfügung steht.

#### Halten Sie Ihre Benutzeroberfläche einfach

Ein großes Leistungsproblem, das wir bei HTML-Apps festgestellt haben, war, dass das Bewegen vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge macht – insbesondere, wenn sie viele Verläufe und Schatten werfen. Es hilft sehr, Ihr Aussehen und das Gefühl zu vereinfachen und ein Proxy-Element zu verschieben, wenn Sie ziehen und ablegen.

Wenn Sie zum Beispiel eine lange Liste von Elementen haben (sagen wir Tweets), bewegen Sie nicht alle. Behalten Sie stattdessen nur diejenigen im DOM-Baum, die sichtbar sind und ein paar auf jeder Seite des derzeit sichtbaren Tweet-Sets. Blenden Sie den Rest aus oder entfernen Sie ihn. Das Speichern der Daten in einem JavaScript-Objekt anstelle des Zugriffs auf den DOM kann die Leistung Ihrer App erheblich verbessern. Betrachten Sie die Darstellung eher als eine Darstellung Ihrer Daten als die Daten selbst. Das bedeutet nicht, dass Sie nicht direktes HTML als Quelle verwenden können; lesen Sie es einfach einmal ein und scrollen Sie dann 10 Elemente weiter, indem Sie den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnisliste ändern, anstelle von 100 nicht sichtbaren Elementen zu bewegen. Der gleiche Trick gilt in Spielen für Sprites: Wenn sie sich nicht auf dem Bildschirm befinden, gibt es keinen Grund, sie abzufragen. Verwenden Sie stattdessen Elemente, die vom Bildschirm scrollen, als neue Elemente, die hereinbrechen.

## Allgemeine Analyse der Anwendungsleistung

Firefox, Chrome und andere Browser enthalten integrierte Tools, die Ihnen helfen können, langsame Seitendarstellung zu diagnostizieren. Insbesondere wird der [Firefox Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) eine genaue Zeitleiste anzeigen, wann jede Netzwerkanfrage auf Ihrer Seite passiert, wie groß sie ist und wie lange sie dauert.

![Der Firefox-Network-Monitor zeigt get-Anfragen, mehrere Dateien und verschiedene Ladezeiten jedes Ressourcen auf einem Graphen.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der eine lange Ausführungszeit in Anspruch nimmt, kann der [JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen genau bestimmen:

![Der Firefox JavaScript Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [integrierte Gecko Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Tool, das noch detailliertere Informationen darüber liefert, welche Teile des Browsercodes während der Profiler-Ausführung langsam laufen. Dies ist etwas komplexer zu verwenden, bietet jedoch viele nützliche Details.

![Ein eingebautes Gecko Profiler-Fenster zeigt viele Netzwerkinformationen.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Tools mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere das Senden von Dutzenden oder Hunderten von Netzwerkanfragen dauert in mobilen Browsern länger. Das Rendering großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann selbst über ein schnelles Netzwerk länger dauern, da mobile Hardware manchmal zu langsam ist, um von der gesamten verfügbaren Bandbreite zu profitieren. Für nützliche allgemeine Tipps zur mobilen Web-Performance werfen Sie einen Blick auf Maximiliano Firtmans Vortrag [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance).

### Testfälle und Fehlerberichte

Wenn Ihnen die Entwickler-Tools von Firefox und Chrome nicht helfen, ein Problem zu finden, oder wenn sie scheinbar darauf hinweisen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem maximal isoliert. Das hilft oft bei der Diagnose von Problemen.

Sehen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite speichern und laden (einschließlich eingebetteter Bilder/Stylesheets/Skripte). Wenn ja, bearbeiten Sie die statischen Dateien, um alle privaten Informationen zu entfernen, und senden Sie sie dann anderen zur Hilfe (reichen Sie zum Beispiel einen [Bugzilla-Bericht](https://bugzilla.mozilla.org/) ein oder hosten Sie es auf einem Server und teilen Sie den URL). Sie sollten auch alle Profilergebnisse teilen, die Sie mit den oben aufgeführten Tools gesammelt haben.
