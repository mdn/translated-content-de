---
title: Leistungsgrundlagen
slug: Web/Performance/Guides/Fundamentals
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browserplattform hilft, diese zu verbessern, und welche Werkzeuge und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.

## Was ist Leistung?

Letztendlich ist die vom Benutzer wahrgenommene Leistung die einzige, die wirklich zählt. Benutzer geben dem System Eingaben durch Berührung, Bewegung und Sprache. Im Gegenzug nehmen sie Ausgaben durch Sehen, Tasten und Hören wahr. Leistung ist die Qualität der Systemausgaben als Reaktion auf Benutzereingaben.

Alles andere gleichgültig, verliert Code, der für ein anderes Ziel als die vom Benutzer wahrgenommene Leistung (im Folgenden UPP) optimiert ist, im Wettbewerb mit Code, der für UPP optimiert ist. Benutzer bevorzugen z. B. eine reaktionsfähige, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckeligen, unreaktiven App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber reale UPP-Ziele stehen an erster Stelle.

Die nächsten Abschnitte heben wesentliche Leistungsmetriken hervor und diskutieren diese.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Benutzereingaben liefert. Beispielsweise erwartet ein Benutzer, wenn er auf den Bildschirm tippt, dass sich die Pixel in einer bestimmten Weise ändern. Bei dieser Interaktion ist die Reaktionsfähigkeitsmetrik die Zeit, die zwischen dem Tippen und der Pixeländerung verstreicht.

Reaktionsfähigkeit umfasst manchmal mehrere Phasen des Feedbacks. Der Start einer Anwendung ist ein besonders wichtiger Fall, der weiter unten ausführlicher behandelt wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und verärgert werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf seine Eingabe reagiert.

### Bildfrequenz

Bildfrequenz ist die Rate, mit der das System die dem Benutzer angezeigten Pixel ändert. Dies ist ein bekanntes Konzept: Jeder bevorzugt z. B. Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Bildfrequenz ist wichtig als eine "Quality of Service"-Metrik. Computerdarstellungen sind so konzipiert, dass sie die Augen der Benutzer "täuschen", indem sie ihnen Photonen liefern, die die Realität nachahmen. Zum Beispiel reflektiert Papier, das mit gedrucktem Text bedeckt ist, Photonen zu den Augen des Benutzers in einem bestimmten Muster. Durch die Manipulation von Pixeln emittiert eine Lese-App Photonen in einem ähnlichen Muster, um die Augen des Benutzers zu "täuschen".

Ihr Gehirn folgert, dass Bewegung nicht ruckartig und diskret ist, sondern sich eher fließend und kontinuierlich "aktualisiert". (Stroboskoplichter machen Spaß, weil sie das auf den Kopf stellen und Ihrem Gehirn Inputs vorenthalten, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computermonitor macht eine höhere Bildfrequenz eine getreuere Nachahmung der Realität aus.

> [!NOTE]
> Menschen können in der Regel keinen Unterschied bei Bildfrequenzen über 60Hz wahrnehmen. Deshalb sind die meisten modernen elektronischen Displays so konzipiert, dass sie mit dieser Frequenz aktualisieren. Ein Fernseher sieht für ein Kolibri wahrscheinlich ruckartig und unrealistisch aus.

### Speicherverbrauch

**Speicherverbrauch** ist eine weitere wichtige Metrik. Im Gegensatz zu Reaktionsfähigkeit und Bildfrequenz nehmen Benutzer den Speicherverbrauch nicht direkt wahr, aber der Speicherverbrauch nähert sich eng dem "Benutzerzustand" an. Ein ideales System würde 100% des Benutzerzustands zu jeder Zeit aufrechterhalten: Alle Anwendungen im System würden gleichzeitig laufen, und alle Anwendungen würden den Zustand behalten, den der Benutzer beim letzten Mal erstellt hat, als er mit der Anwendung interagiert hat (Anwendungszustand wird im Computerspeicher gespeichert, was die Annäherung nahelegt).

Aus diesem Grund ergibt sich ein wichtiger, aber kontraintuitiver Schluss: Ein gut gestaltetes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Vielmehr wurde ein gut gestaltetes System so optimiert, dass es so viel Speicher wie möglich nutzt, um den Benutzerzustand aufrechtzuerhalten, während es andere UPP-Ziele erfüllt.

Das bedeutet nicht, dass das System Speicher **verschwenden** sollte. Wenn ein System mehr Speicher verwendet, als notwendig ist, um einen bestimmten Benutzerzustand aufrechtzuerhalten, verschwendet das System eine Ressource, die es verwenden könnte, um einen anderen Benutzerzustand zu behalten. In der Praxis kann kein System alle Benutzerzustände aufrechterhalten. Intelligente Speicherzuweisung für Benutzerzustände ist ein wichtiges Anliegen, das wir weiter unten ausführlicher behandeln.

### Stromverbrauch

Die letzte hier besprochene Metrik ist der **Stromverbrauch**. Wie beim Speicherverbrauch nehmen Benutzer den Stromverbrauch nur indirekt wahr, durch die Dauer, wie lange ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um UPP-Ziele zu erreichen, muss das System nur die minimale erforderliche Leistung verwenden.

Der Rest dieses Dokuments wird die Leistung im Hinblick auf diese Metriken diskutieren.

## Leistungsoptimierungen auf Plattformebene

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie Firefox/Gecko zur allgemeinen Leistung unterhalb der Ebene aller Anwendungen beiträgt. Aus der Perspektive eines Entwicklers oder Benutzers beantwortet dies die Frage: "Was tut die Plattform für Sie?"

### Webtechnologien

Die Webplattform bietet viele Werkzeuge, einige sind besser für bestimmte Aufgaben geeignet als andere. Die gesamte Anwendungslogik wird in JavaScript geschrieben. Um Grafiken anzuzeigen, können Entwickler HTML oder CSS (d.h. hochgradige deklarative Sprachen) verwenden oder niedriggradige imperative Schnittstellen, die durch das {{ htmlelement("canvas") }}-Element angeboten werden (das auch [WebGL](/de/docs/Web/API/WebGL_API) umfasst), nutzen. Irgendwo "zwischen" HTML/CSS und Canvas liegt [SVG](/de/docs/Web/SVG), das einige Vorteile von beiden bietet.

HTML und CSS erhöhen die Produktivität erheblich, manchmal auf Kosten der Bildfrequenz oder der Kontrolle auf Pixelebene über das Rendering. Text und Bilder fließen automatisch um, UI-Elemente erhalten automatisch das Systemthema und das System bietet "eingebaute" Unterstützung für einige Anwendungsfälle, an die Entwickler möglicherweise nicht sofort denken, wie z. B. Bildschirme mit unterschiedlicher Auflösung oder von rechts nach links gelesene Sprachen.

Das `canvas`-Element bietet Entwicklern einen Pixelpuffer, auf dem sie direkt zeichnen können. Dadurch haben Entwickler die Kontrolle auf Pixelebene über das Rendering und den genauen Einfluss auf die Bildfrequenz, aber nun müssen sich die Entwickler mit mehreren Auflösungen und Ausrichtungen, von rechts nach links gelesenen Sprachen und so weiter beschäftigen. Entwickler zeichnen auf Leinwände mit entweder einer vertrauten 2D-Zeichen-API oder WebGL, einer "nah an der Hardware"-Bindung, die größtenteils OpenGL ES 2.0 folgt.

### Gecko-Rendering

Die Gecko-JavaScript-Engine unterstützt Just-in-Time (JIT)-Kompilierung. Dies ermöglicht Anwendungslogik eine Leistung, die mit anderen virtuellen Maschinen — wie Java-Virtual-Maschinen — vergleichbar ist und in manchen Fällen sogar nahe an "nativem Code".

Die Grafikkette in Gecko, die HTML, CSS und Canvas unterstützt, ist in mehreren Aspekten optimiert. Der HTML/CSS-Layoutcode und die Grafiken in Gecko reduzieren Invalidation und Neuzeichnungen bei allgemeinen Fällen wie dem Scrollen; Entwickler erhalten diese Unterstützung "kostenlos". Pixelpuffer, die sowohl automatisch von Gecko als auch manuell von Anwendungen auf `canvas` gezeichnet werden, minimieren Kopien, wenn sie auf den Anzeige-Framebuffer gezeichnet werden. Dies geschieht, indem Zwischenflächen vermieden werden, die Overhead verursachen würden (wie pro Anwendungs-"Backpuffer" in vielen anderen Betriebssystemen), und indem spezieller Speicher für Grafikspeicher genutzt wird, der direkt vom Kompositor-Hardwarezugänglich ist. Komplexe Szenen werden zur maximalen Leistung mit der GPU des Geräts gerendert. Um den Stromverbrauch zu verbessern, werden einfache Szenen mit spezieller dedizierter Kompositionshardware gerendert, während die GPU im Leerlauf ist oder sich ausschaltet.

Vollständig statischer Inhalt ist eher die Ausnahme als die Regel für reichhaltige Anwendungen. Reichhaltige Anwendungen verwenden dynamische Inhalte mit {{ cssxref("animation") }}- und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind für Anwendungen besonders wichtig: Entwickler können mit CSS kompliziertes Verhalten mit einfacher, hochstufiger Syntax deklarieren. In der Folge ist Geckos Grafikkette stark optimiert, um gängige Animationen effizient zu rendern. Häufige Animationen werden an den Systemkompositor ausgelagert, der sie in einer leistungsfähigen, energieeffizienten Weise rendern kann.

Die Startleistung einer App ist genauso wichtig wie ihre Laufzeitleistung. Gecko ist darauf optimiert, eine breite Palette von Inhalten effizient zu laden: das gesamte Web! Viele Jahre Verbesserungen, die genau auf diesen Inhalt abzielen, wie paralleles HTML-Parsing, intelligente Planung von Neuflüssten und Bilddecodierungen, clevere Layoutalgorithmen usw., tragen ebenso zur Verbesserung von Webanwendungen in Firefox bei.

## Anwendungsleistung

Dieser Abschnitt ist für Entwickler gedacht, die fragen: "Wie kann ich meine App schneller machen?"

### Startleistung

Der Start einer Anwendung wird im Allgemeinen durch drei vom Benutzer wahrgenommene Ereignisse unterbrochen:

- Das erste ist der **erste Anstrich** der Anwendung — der Punkt, an dem ausreichende Anwendungsressourcen geladen wurden, um einen ersten Frame zu zeichnen
- Das zweite ist, wenn die Anwendung **interaktiv** wird — beispielsweise können Benutzer auf eine Schaltfläche tippen und die Anwendung reagiert
- Das letzte Ereignis ist das **vollständige Laden** — zum Beispiel, wenn alle Alben des Benutzers in einem Musikplayer aufgelistet wurden

Der Schlüssel zu einem schnellen Start ist, zwei Dinge im Auge zu behalten: UPP ist alles, was zählt, und es gibt einen "kritischen Pfad" zu jedem der oben genannten vom Benutzer wahrgenommenen Ereignisse. Der kritische Pfad ist genau und nur der Code, der ausgeführt werden muss, um das Ereignis zu erzeugen.

Zum Beispiel, um den ersten Frame einer Anwendung zu zeichnen, der visuell aus etwas HTML und CSS besteht, das dieses HTML stylt:

1. Das HTML muss analysiert werden
2. Der DOM für dieses HTML muss aufgebaut werden
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und decodiert werden
4. Die CSS-Stile müssen auf dieses DOM angewendet werden
5. Das gestylte Dokument muss umfließen

Nirgendwo in dieser Liste steht "die JS-Datei laden, die für ein selten verwendetes Menü benötigt wird"; "das Bild für die Bestenliste abrufen und decodieren" usw. Diese Arbeitsaufgaben sind nicht auf dem kritischen Pfad zum Zeichnen des ersten Frames.

Es scheint offensichtlich, aber um ein vom Benutzer wahrgenommenes Startereignis schneller zu erreichen, ist der Haupttrick, _nur den Code auf dem kritischen Pfad_ auszuführen. Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist hochdynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Webplattform ermöglicht das dynamische Laden von Code, HTML, CSS, Bildern und anderen Ressourcen. Diese Funktionen können verwendet werden, um Arbeit zu verzögern, die nicht auf dem kritischen Pfad liegt, indem unnötiger Inhalt "faul" zu einem späteren Zeitpunkt nach dem Start geladen wird.

Ein weiteres Problem, das den Start verzögern kann, ist die Leerlaufzeit, die durch Warten auf Antworten auf Anfragen (wie das Laden von Datenbanken) verursacht wird. Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich beim Start stellen (dies wird "Front-Loading" genannt). Dann, wenn die Daten später benötigt werden, sind sie hoffentlich bereits verfügbar und die Anwendung muss nicht warten.

> [!NOTE]
> Für viel detailliertere Informationen zur Verbesserung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance).

In der gleichen Richtung sollten Sie beachten, dass lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über mobile Netzwerke mit hoher Latenz und niedriger Bandbreite abgerufen werden. Netzwerk-Anfragen sollten nie auf dem kritischen Pfad zum frühen Start einer Anwendung stehen. Lokale Zwischenspeicherung/offline-fähige Apps können durch [Service Worker](/de/docs/Web/API/Service_Worker_API) erreicht werden. Siehe [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Verwendung von Service Workern für Offline- und Hintergrund-Synchronisationsfähigkeiten.

### Bildfrequenz

Das erste wichtige für eine hohe Bildfrequenz ist die Auswahl des richtigen Werkzeugs. Verwenden Sie HTML und CSS, um Inhalte zu implementieren, die hauptsächlich statisch sind, gescrollt werden und nur selten animiert sind. Verwenden Sie Canvas, um hochdynamische Inhalte zu implementieren, wie Spiele, die eine enge Kontrolle über das Rendering benötigen und kein Thema benötigen.

Für mit Canvas gezeichnete Inhalte liegt es am Entwickler, die Zielbildfrequenz zu erreichen: Sie haben die direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte besteht der Weg zu einer hohen Bildfrequenz darin, die richtigen Grundlagen zu verwenden. Firefox ist stark darauf optimiert, beliebige Inhalte zu scrollen; dies ist normalerweise kein Problem. Aber oft kann der Tausch von etwas Allgemeinheit und Qualität für Geschwindigkeit, wie die Verwendung eines statischen Renderings anstelle eines CSS-Radialgradients, die Bildfrequenz über ein Ziel hinweg schieben. CSS [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es, diese Kompromisse nur auf Geräte zu beschränken, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch "Seiten" oder "Paneele". Beispielsweise tippt der Benutzer auf eine "Einstellungen"-Schaltfläche, um zu einer Anwendungskonfigurationsseite zu wechseln, oder ein Einstellungsmenü "poppt auf". Firefox ist stark darauf optimiert, Szenen zu überführen und zu animieren, die:

- Seiten/Paneele in etwa der Größe des Geräts oder kleiner verwenden
- die CSS `transform`- und `opacity`-Eigenschaften überführen/animieren

Übergänge und Animationen, die diesen Richtlinien folgen, können dem Systemkompositor ausgelagert werden und maximal effizient ausgeführt werden.

### Speicher- und Stromverbrauch

Die Verbesserung des Speicher- und Stromverbrauchs ist ein ähnliches Problem wie das Beschleunigen des Starts: keine unnötige Arbeit machen oder weniger häufig verwendete UI-Ressourcen faul laden. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen niedrigeren Stromverbrauchsmodus wechseln, wenn sie hauptsächlich im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen laufen lassen, verhindern, dass CPUs in den Energiesparmodus gehen. Energieeffiziente Anwendungen sollten das nicht tun.

Wenn Anwendungen in den Hintergrund gesendet werden, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis auf ihren Dokumenten ausgelöst. Dieses Ereignis ist ein Freund der Entwickler; Anwendungen sollten darauf hören.

### Spezifische Programmierhinweise für Anwendungsleistung

Die folgenden praktischen Tipps helfen dabei, einen oder mehrere der oben besprochenen Anwendungsleistungsfaktoren zu verbessern.

#### Verwenden Sie CSS-Animationen und -Übergänge

Anstelle der `animate()`-Funktion einer Bibliothek, die wahrscheinlich viele schlecht performante Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder `top`/`left` Positionierung, zum Beispiel), verwenden Sie besser [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie tatsächlich [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um die Aufgabe zu erledigen. Das funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu nutzen, um sie reibungslos mit minimaler Auswirkung auf die Prozessorleistung zu handhaben. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS zusammen mit dem Rest des Aussehens und Gefühls Ihrer App mit einer standardisierten Syntax definieren können.

CSS-Animationen geben Ihnen sehr detaillierte Kontrolle über Ihre Effekte mithilfe von [Keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar während des Animationsprozesses ausgelöste Ereignisse beobachten, um andere Aufgaben zu erledigen, die an festgelegten Punkten im Animationsprozess durchgeführt werden müssen. Sie können diese Animationen einfach mit {{cssxref(":hover")}}, {{cssxref(":focus")}}, oder {{cssxref(":target")}} auslösen oder durch dynamisches Hinzufügen und Entfernen von Klassen bei Elternelementen.

Wenn Sie Animationen spontan erstellen oder in [JavaScript](/de/docs/Web/JavaScript) modifizieren möchten, hat James Long eine einfache Bibliothek dafür erstellt, die [CSS-animations.js](https://github.com/jlongster/css-animations.js/) genannt wird.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierung anzupassen und sich selbst mit all der Mathematik herumzuschlagen, verwenden Sie die {{cssxref("transform")}} CSS-Eigenschaft, um die Position, Skalierung usw. Ihrer Inhalte anzupassen. Alternativ können Sie die einzelnen Transformationseigenschaften von {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}} verwenden. Der Grund ist erneut die Hardwarebeschleunigung. Der Browser kann diese Aufgaben mit Ihrer GPU ausführen und damit die CPU für andere Dinge freimachen.

Darüber hinaus geben Ihnen Transformationen Fähigkeiten, die Sie möglicherweise sonst nicht hätten. Nicht nur, dass Sie Elemente im 2D-Raum übersetzen können, sondern Sie können sie in drei Dimensionen transformieren, schrägstellen und rotieren usw. Paul Irish hat eine [detaillierte Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus einer Leistungsperspektive geschrieben. Im Allgemeinen haben Sie jedoch dieselben Vorteile wie bei der Verwendung von CSS-Animationen: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine einfach erweiterbare Möglichkeit, Elemente zu positionieren - etwas, das viel zusätzlichen Code erfordert, wenn Sie die Übersetzung mit `top` und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass dies genauso ist wie die Arbeit in einem `canvas`-Element.

> [!NOTE]
> Sie müssen möglicherweise eine `translateZ(0.1)`-Transformation anhängen, wenn Sie Hardwarebeschleunigung für Ihre CSS-Animationen wünschen, abhängig von der Plattform. Wie oben erwähnt, kann dies die Leistung verbessern. Bei übermäßiger Verwendung kann es zu einem hohen Speicherverbrauch kommen. Was Sie in dieser Hinsicht tun, liegt bei Ihnen - führen Sie Tests durch und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Anrufe an [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code mit einer angenommenen Bildfrequenz aus, die unter aktuellen Umständen möglicherweise nicht möglich ist. Es weist den Browser an, Ergebnisse zu rendern, auch wenn der Browser nicht tatsächlich zeichnet; das heißt, während die Video-Hardware den nächsten Anzeigezyklus noch nicht erreicht hat. Dies verschwendet Prozessorzeit und kann sogar zu einer verringerten Akkulaufzeit auf dem Gerät des Benutzers führen.

Stattdessen sollten Sie versuchen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zu verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu beginnen, und wird es nicht versuchen, wenn die Hardware tatsächlich nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht ausgeführt werden, während Ihre App nicht auf dem Bildschirm sichtbar ist (z. B. wenn sie im Hintergrund ist und einige andere Aufgaben ausgeführt werden). Dies spart Akku und verhindert, dass Benutzer Ihren Namen in den Nachthimmel fluchen.

#### Ereignisse sofort ausführen

Als altmodische, barrierefreiheitsbewusste Webentwickler lieben wir Klick-Ereignisse, da sie auch Tastatureingaben unterstützen. Auf mobilen Geräten sind diese jedoch zu langsam. Sie sollten stattdessen [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Zugänglichkeit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) für diesen Zweck, die Sie verwenden können.

#### Halten Sie Ihre Benutzeroberfläche einfach

Ein großes Leistungsproblem, das wir in HTML-Apps gefunden haben, war, dass das Verschieben vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge machte - besonders wenn sie viele Verläufe und Schlagschatten aufwiesen. Es hilft sehr, Ihr Aussehen und Ihr Gefühl zu vereinfachen und ein Proxy-Element zu verschieben, wenn Sie ziehen und ablegen.

Wenn Sie beispielsweise eine lange Liste von Elementen haben (sagen wir Tweets), verschieben Sie nicht alle. Behalten Sie stattdessen nur die im Baum, die sichtbar sind, und einige auf beiden Seiten des derzeit sichtbaren Satzes von Tweets. Verstecken oder entfernen Sie den Rest. Das Behalten der Daten in einem JavaScript-Objekt anstatt des Zugriffs auf das DOM kann die Leistung Ihrer App erheblich verbessern. Betrachten Sie die Darstellung als eine Präsentation Ihrer Daten anstatt der eigentlicher Daten. Das bedeutet nicht, dass Sie nicht reines HTML als Quelle verwenden können; lesen Sie es nur einmal und scrollen Sie 10 Elemente unter Änderung des Inhalts des ersten und letzten entsprechend Ihrer Position in der Ergebnisliste anstelle des Verschiebens von 100 nicht sichtbaren Elementen. Der gleiche Trick gilt in Spielen für Sprites: Wenn sie derzeit nicht auf dem Bildschirm sind, gibt es keinen Grund, sie abzufragen. Verwenden Sie stattdessen Elemente, die vom Bildschirm rollen, als neue, die hereinkommen.

## Allgemeine Analyse der Anwendungsleistung

Firefox, Chrome und andere Browser enthalten integrierte Tools, die Ihnen helfen können, langsames Rendern von Seiten zu diagnostizieren. Insbesondere zeigt Ihnen [Firefox's Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) eine genaue Zeitleiste, wann jede Netzwerk-Anfrage auf Ihrer Seite passiert, wie groß sie ist und wie lange sie dauert.

![Der Firefox-Netzwerkmonitor zeigt GET-Anfragen, mehrere Dateien und unterschiedliche Ladezeiten jedes Ressource auf einem Diagramm an.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der lange zum Ausführen braucht, wird der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen hervorheben:

![Der Firefox-JavaScript-Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [eingebaute Gecko-Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Tool, das noch detailliertere Informationen darüber bereitstellt, welche Teile des Browsercodes langsam laufen, während der Profiler läuft. Dies ist etwas komplexer zu verwenden, liefert jedoch viele nützliche Details.

![Ein eingebautes Gecko-Profilfenster zeigt viele Netzwerk-Informationen.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Tools mit dem Android-Browser verwenden, indem Sie Firefox starten und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere dauert das Ausführen von Dutzenden oder Hunderten von Netzwerk-Anfragen länger in mobilen Browsern. Das Rendern großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, weil mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite voll auszunutzen. Für nützliche allgemeine Tipps zur mobilen Web-Performance, werfen Sie einen Blick auf Maximiliano Firtmans [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance) Vortrag.

### Testfälle und Bugmeldungen

Wenn Ihnen die Firefox- und Chrome-Entwicklertools nicht helfen, ein Problem zu finden, oder wenn sie darauf hinweisen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem maximal isoliert. Das hilft oft bei der Diagnose von Problemen.

Sehen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite (einschließlich aller Bilder/Stylesheets/Skripte, die sie einbettet) speichern und laden. Wenn das der Fall ist, bearbeiten Sie die statischen Dateien, um private Informationen zu entfernen, und schicken Sie sie an andere, um Hilfe zu erhalten (reichen Sie einen [Bugzilla](https://bugzilla.mozilla.org/)-Bericht ein, oder hosten Sie sie auf einem Server und teilen Sie die URL). Sie sollten auch alle Profilinformationen teilen, die Sie mit den oben aufgeführten Tools gesammelt haben.
