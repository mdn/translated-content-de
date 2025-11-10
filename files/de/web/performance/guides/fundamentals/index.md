---
title: Grundlagen der Leistung
slug: Web/Performance/Guides/Fundamentals
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browserplattform zur Verbesserung beiträgt und welche Werkzeuge und Prozesse Sie verwenden können, um die Leistung zu testen und zu verbessern.

## Was ist Leistung?

Letztendlich ist die vom Benutzer wahrgenommene Leistung die einzige Leistung, die zählt. Benutzer geben dem System Eingaben über Berührungen, Bewegungen und Sprache. Im Gegenzug nehmen sie Ausgaben durch Sehen, Fühlen und Hören wahr. Leistung ist die Qualität der Systemausgaben als Antwort auf Benutzereingaben.

Unter sonst gleichen Bedingungen verliert Code, der für ein Ziel jenseits der vom Benutzer wahrgenommenen Leistung (fortan UPP) optimiert ist, im Wettbewerb mit Code, der für UPP optimiert ist. Benutzer bevorzugen beispielsweise eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer hakeligen, nicht reagierenden App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber echte UPP-Ziele stehen an erster Stelle.

In den nächsten Unterabschnitten werden wesentliche Leistungsmetriken hervorgehoben und diskutiert.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Benutzereingaben bereitstellt. Wenn ein Benutzer beispielsweise den Bildschirm berührt, erwartet er, dass sich die Pixel auf eine bestimmte Weise ändern. Für diese Interaktion ist die Reaktionsfähigkeitsmetrik die verstrichene Zeit zwischen der Berührung und der Pixeländerung.

Die Reaktionsfähigkeit beinhaltet manchmal mehrere Feedbackstufen. Der Anwendungsstart ist ein besonders wichtiger Fall, der weiter unten ausführlicher behandelt wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und verärgert werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf die Eingabe des Benutzers reagiert.

### Bildwiederholrate

Die Bildwiederholrate ist die Rate, mit der das System die für den Benutzer angezeigten Pixel ändert. Dies ist ein bekanntes Konzept: Jeder zieht Spiele vor, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, selbst wenn sie nicht erklären können, warum.

Die Bildwiederholrate ist wichtig als „Servicequalität“-Metrik. Computermonitore sind darauf ausgelegt, die Augen der Benutzer „zu täuschen“, indem sie Photonen in einer Weise liefern, die die Realität nachahmen. Zum Beispiel reflektiert Papier mit gedrucktem Text Photonen in einem bestimmten Muster in die Augen des Benutzers. Durch die Manipulation von Pixeln strahlt eine Lese-App Photonen in einem ähnlichen Muster aus, um die Augen des Benutzers zu „täuschen“.

Ihr Gehirn leitet ab, dass Bewegung nicht ruckartig und diskret, sondern vielmehr „glatt“ und kontinuierlich aktualisiert wird. (Stroboskoplichter machen Spaß, weil sie dies umkehren und das Gehirn von Eingaben aushungern, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computerdisplay sorgt eine höhere Bildwiederholrate für eine getreuere Nachahmung der Realität.

> [!NOTE]
> Menschen können normalerweise keine Unterschiede in der Bildwiederholrate über 60 Hz wahrnehmen. Aus diesem Grund sind die meisten modernen elektronischen Displays darauf ausgelegt, mit dieser Rate zu aktualisieren. Ein Fernseher sieht zum Beispiel für einen Kolibri wahrscheinlich ruckelig und unrealistisch aus.

### Speichernutzung

**Speichernutzung** ist eine weitere wichtige Metrik. Im Gegensatz zur Reaktionsfähigkeit und Bildwiederholrate nehmen Benutzer die Speichernutzung nicht direkt wahr, aber die Speichernutzung nähert den „Benutzerstatus“ an. Ein ideales System würde 100 % des Benutzerstatus jederzeit aufrechterhalten: Alle Anwendungen im System würden gleichzeitig laufen, und alle Anwendungen würden den Zustand beibehalten, den der Benutzer das letzte Mal bei der Interaktion mit der Anwendung erstellt hat (Anwendungsstatus wird im Computerspeicher gespeichert, weshalb die Annäherung nahe ist).

Daraus ergibt sich ein wichtiges, aber kontraintuitives Korollar: Ein gut gestaltetes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Vielmehr wurde ein gut gestaltetes System optimiert, um so viel Speicher wie möglich zu **nutzen**, um den Benutzerstatus aufrechtzuerhalten, während andere UPP-Ziele erfüllt werden.

Das bedeutet nicht, dass das System **Speicher verschwenden** sollte. Wenn ein System mehr Speicher verwendet, als notwendig ist, um einen bestimmten Benutzerstatus beizubehalten, verschwendet das System eine Ressource, die es verwenden könnte, um einen anderen Benutzerstatus beizubehalten. In der Praxis kann kein System alle Benutzerstatus beibehalten. Eine intelligente Zuweisung von Speicher an den Benutzerstatus ist ein wichtiges Anliegen, das weiter unten ausführlicher behandelt wird.

### Energieverbrauch

Die letzte hier diskutierte Metrik ist der **Energieverbrauch**. Wie die Speichernutzung nehmen Benutzer den Energieverbrauch nur indirekt wahr, indem sie beobachten, wie lange ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um die UPP-Ziele zu erreichen, muss das System nur die Mindestleistung verwenden, die erforderlich ist.

Der Rest dieses Dokuments wird die Leistung im Hinblick auf diese Metriken diskutieren.

## Plattformleistungsoptimierungen

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie Firefox/Gecko allgemein zur Leistung beitragen, unterhalb der Ebene aller Anwendungen. Aus der Perspektive eines Entwicklers oder Benutzers beantwortet dies die Frage: „Was tut die Plattform für Sie?“

### Webtechnologien

Das Web-Ökosystem bietet viele Werkzeuge, die für bestimmte Aufgaben besser geeignet sind als andere. Die gesamte Anwendungslogik wird in `JavaScript` geschrieben. Zum Darstellen von Grafiken können Entwickler `HTML` oder `CSS` (d.h. hochstufige deklarative Sprachen) verwenden oder niedrige imperative Schnittstellen verwenden, die durch das {{ htmlelement("canvas") }}-Element (das [WebGL](/de/docs/Web/API/WebGL_API) umfasst) angeboten werden. Irgendwo zwischen `HTML/CSS` und `Canvas` liegt [SVG](/de/docs/Web/SVG), das einige Vorteile beider bietet.

`HTML` und `CSS` erhöhen die Produktivität erheblich, manchmal auf Kosten der Bildwiederholrate oder Pixelkontrolle über das Rendering. Text und Bilder fließen automatisch, UI-Elemente übernehmen automatisch das Systemthema, und das System bietet „eingebaute“ Unterstützung für Anwendungsfälle, die Entwicklern möglicherweise nicht sofort einfallen, wie Displays mit verschiedenen Auflösungen oder Recht-nach-links-Sprachen.

Das `canvas`-Element bietet Entwicklern einen direkten Zugriff auf den Pixelpuffer zum Zeichnen. Dies gibt Entwicklern Kontrolle auf Pixelebene über das Rendering und präzise Kontrolle über die Bildwiederholrate, aber nun müssen sich die Entwickler mit mehreren Auflösungen und Orientierungen, Recht-nach-links-Sprachen und so weiter auseinandersetzen. Entwickler zeichnen auf Leinwände, indem sie entweder eine vertraute 2D-Zeichen-API verwenden oder WebGL, eine „nah am Metall“-Bindung, die größtenteils OpenGL ES 2.0 folgt.

### Gecko-Rendering

Geckos JavaScript-Engine unterstützt eine just-in-time (JIT) Kompilierung. Dies ermöglicht es, dass Anwendungslogik vergleichbar mit anderen virtuellen Maschinen — wie Java virtuellen Maschinen — und in einigen Fällen sogar nahe an „nativen Code“ betrieben werden kann.

Die Grafikpipeline in Gecko, die `HTML`, `CSS` und `Canvas` unterstützt, ist auf mehrere Arten optimiert. Der `HTML/CSS`-Layout- und Grafikcode in Gecko reduziert die Entwertung und Neumalung für gängige Fälle wie das Scrollen; Entwickler erhalten diese Unterstützung „gratis“. Pixelpuffer, die sowohl von Gecko „automatisch“ als auch von Anwendungen „manuell“ auf `canvas` gemalt werden, minimieren Kopien beim Zeichnen auf den Anzeigepuffer. Dies wird durch die Vermeidung von Zwischenschichten erreicht, wo sie einen Aufwand verursachen würden (wie etwa pro-Anwendung „Back-Buffers“ in vielen anderen Betriebssystemen), und durch die Verwendung von speziellem Speicher für Grafikpuffer, die direkt vom Compositor-Hardware zugegriffen werden können. Komplexe Szenen werden mit der GPU des Geräts für maximale Leistung gerendert. Um den Energieverbrauch zu verbessern, werden einfache Szenarien mit spezieller dedizierter Kompositionshardware gerendert, während die GPU im Leerlauf ist oder abgeschaltet wird.

Vollständig statischer Inhalt ist die Ausnahme und nicht die Regel für reichhaltige Anwendungen. Reichhaltige Anwendungen verwenden dynamische Inhalte mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind besonders wichtig für Anwendungen: Entwickler können `CSS` verwenden, um kompliziertes Verhalten mit einer einfachen, hochstufigen Syntax zu deklarieren. Im Gegenzug ist Geckos Grafikpipeline hochgradig optimiert, um gängige Animationen effizient zu rendern. Häufige Animationen werden „ausgelagert“ an den Systemkompositor, der sie in einer leistungsfähigen, energieeffizienten Art rendern kann.

Die Startleistung einer App ist ebenso wichtig wie ihre Laufzeitleistung. Gecko ist optimiert, um eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre der Verbesserungen, die auf diesen Inhalt abzielen, wie etwa paralleles `HTML`-Parsing, intelligente Planung von Reflows und Bilddekodierung, clevere Layout-Algorithmen usw., tragen ebenso zur Verbesserung von Webanwendungen in `Firefox` bei.

## Anwendungsleistung

Dieser Abschnitt richtet sich an Entwickler, die sich fragen: „Wie kann ich meine App schnell machen?“

### Startleistung

Der Anwendungsstart wird im Allgemeinen durch drei vom Benutzer wahrgenommene Ereignisse unterbrochen:

- Das erste ist das **erste Malen** der Anwendung — der Punkt, an dem ausreichende Anwendungsressourcen geladen wurden, um einen ersten Rahmen zu malen
- Das zweite ist, wenn die Anwendung **interaktiv** wird — zum Beispiel können Benutzer eine Schaltfläche antippen und die Anwendung reagiert
- Das letzte Ereignis ist das **volle Laden** — zum Beispiel wenn alle Alben eines Benutzers in einem Musikplayer aufgelistet sind

Der Schlüssel zu einem schnellen Start ist, zwei Dinge im Auge zu behalten: UPP ist alles, was zählt, und es gibt einen „kritischen Pfad“ zu jedem oben genannten, von Benutzern wahrgenommenen Ereignis. Der kritische Pfad ist genau und nur der Code, der ausgeführt werden muss, um das Ereignis zu produzieren.

Um beispielsweise den ersten Rahmen einer Anwendung zu malen, der visuell aus einigem `HTML` und `CSS` besteht, um dieses `HTML` zu gestalten:

1. Das `HTML` muss geparst werden
2. Das DOM für dieses `HTML` muss erstellt werden
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und dekodiert werden
4. Die `CSS`-Stile müssen auf dieses DOM angewendet werden
5. Das gestylte Dokument muss neu durchflossen werden

In dieser Liste sind nirgendwo „das JS-Datei laden, das für ein ungewöhnliches Menü benötigt wird“, „das Bild für die Bestenliste abrufen und dekodieren“ usw. Diese Arbeitsaufgaben befinden sich nicht auf dem kritischen Pfad, um den ersten Rahmen zu malen.

Es scheint offensichtlich, aber um ein vom Benutzer wahrgenommenes Startereignis schneller zu erreichen, besteht der Haupttrick darin, _nur den Code auf dem kritischen Pfad_ auszuführen. Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist hochdynamisch. `JavaScript` ist eine dynamisch typisierte Sprache, und die Webplattform erlaubt das dynamische Laden von Code, `HTML`, `CSS`, Bildern und anderen Ressourcen. Diese Funktionen können verwendet werden, um Arbeit abseits des kritischen Pfades zu verzögern, indem unnötiger Inhalt „faul“ irgendwann nach dem Start geladen wird.

Ein weiteres Problem, das den Start verzögern kann, ist die Leerlaufzeit, die durch das Warten auf Antworten auf Anfragen (wie Datenbankladungen) verursacht wird. Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich im Startprozess stellen (dies wird als „Front-Loading“ bezeichnet). Wenn die Daten dann später benötigt werden, sind sie hoffentlich bereits verfügbar und die Anwendung muss nicht warten.

> [!NOTE]
> Für viel mehr Informationen zur Verbesserung der Startleistung lesen Sie [Optimierung der Startleistung](/de/docs/Web/Performance/Guides/Optimizing_startup_performance).

In diesem Kontext beachten Sie, dass lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über mobile Netzwerke mit hoher Latenz und niedriger Bandbreite abgerufen werden. Netzwerk-Anfragen sollten niemals auf dem kritischen Pfad zum frühen Anwendungsstart sein. Lokales Caching/offline Apps können über [Service Workers](/de/docs/Web/API/Service_Worker_API) erreicht werden. Siehe [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Verwendung von Service Workern für Offline- und Hintergrundsynchronisationsfunktionen.

### Bildwiederholrate

Das erste, was für eine hohe Bildrate wichtig ist, ist, das richtige Werkzeug zu wählen. Verwenden Sie `HTML` und `CSS`, um Inhalte zu implementieren, die größtenteils statisch, gescrollt und selten animiert sind. Verwenden Sie `Canvas`, um hochdynamische Inhalte zu implementieren, wie Spiele, die eine enge Kontrolle über das Rendering benötigen und kein Thema benötigen.

Für Inhalte, die mit `Canvas` gezeichnet werden, liegt es am Entwickler, die Bildwiederholungsziele zu erreichen: Sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für `HTML`- und `CSS`-Inhalte ist der Weg zu einer hohen Bildrate, die richtigen Primitiven zu verwenden. `Firefox` ist hochoptimiert, um beliebige Inhalte zu scrollen; dies ist normalerweise kein Anliegen. Aber oft kann der Verzicht auf etwas Allgemeinheit und Qualität zugunsten der Geschwindigkeit, wie die Verwendung einer statischen Darstellung anstelle eines `CSS`-Radialgradienten, die Bildwiederholungsrate des Scrollens über ein Ziel hinweg treiben. `CSS` [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) ermöglichen es, diese Kompromisse nur auf Geräte zu beschränken, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch „Seiten“ oder „Panels“. Zum Beispiel tippt der Benutzer auf eine „Einstellungen“-Schaltfläche, um in einen Anwendungs-Konfigurationsbildschirm zu wechseln, oder ein Einstellungsmenü „poppt auf“. `Firefox` ist hochoptimiert, um Szenen zu übergehen und zu animieren, die:

- ungefähr die Größe des Gerätscreens oder kleiner nutzen
- die CSS-`transform`- und `opacity`-Eigenschaften übergehen/animieren

Übergänge und Animationen, die diese Richtlinien einhalten, können an den Systemkompositor ausgelagert und maximal effizient durchgeführt werden.

### Speicher- und Energieverbrauch

Verbesserung der Speicher- und Energieverbrauchsnutzung ist ein ähnliches Problem wie der schnellere Start: keine unnötige Arbeit verrichten oder selten genutzte UI-Ressourcen verzögert laden. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen Stromsparmodus gehen, wenn sie überwiegend im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen laufen lassen, verhindern, dass CPUs in den Stromsparmodus wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund geschickt werden, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis auf ihren Dokumenten ausgelöst. Dieses Ereignis ist der Freund des Entwicklers; Anwendungen sollten darauf hören.

### Spezielle Codierungstipps für die Anwendungsleistung

Die folgenden praktischen Tipps helfen dabei, einen oder mehrere der oben diskutierten Faktoren der Anwendungsleistung zu verbessern.

#### Verwenden Sie CSS-Animationen und Übergänge

Anstelle der Verwendung der `animate()`-Funktion einer Bibliothek, die wahrscheinlich viele schlecht performende Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder `top`/`left`-Positionierung zum Beispiel), verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using). In vielen Fällen können Sie tatsächlich [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions/Using) verwenden, um die Arbeit zu erledigen. Dies funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu nutzen, um sie reibungslos mit minimalem Einfluss auf die Prozessorleistung zu verarbeiten. Ein weiterer Vorteil ist, dass Sie diese Effekte in `CSS` zusammen mit dem restlichen Erscheinungsbild Ihrer App definieren können, indem Sie eine standardisierte Syntax verwenden.

`CSS`-Animationen geben Ihnen eine sehr fein abgestufte Kontrolle über Ihre Effekte mithilfe von [Keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes), und Sie können sogar Ereignisse überwachen, die während des Animationsprozesses ausgelöst werden, um andere Aufgaben zu erledigen, die zu bestimmten Zeitpunkten im Animationsprozess durchgeführt werden müssen. Sie können diese Animationen leicht mit der {{cssxref(":hover")}}, {{cssxref(":focus")}} oder {{cssxref(":target")}}-Pseudoklasse auslösen oder indem Sie Klassen dynamisch hinzufügen und entfernen.

Wenn Sie Animationen im laufenden Betrieb erstellen oder in [JavaScript](/de/docs/Web/JavaScript) ändern möchten, hat James Long eine einfache Bibliothek namens [CSS-animations.js](https://github.com/jlongster/css-animations.js/) dafür geschrieben.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierungen zu optimieren und selbst mit der ganzen Mathematik zu spielen, verwenden Sie die {{cssxref("transform")}}-CSS-Eigenschaft, um die Position, Skalierung usw. Ihrer Inhalte anzupassen. Alternativ können Sie die individuellen Transformationseigenschaften von {{cssxref("translate")}}, {{cssxref("scale")}} und {{cssxref("rotate")}} verwenden. Der Grund ist, wieder einmal, die Hardwarebeschleunigung. Der Browser kann diese Aufgaben auf Ihrer `GPU` durchführen, sodass die `CPU` andere Dinge erledigen kann.

Zusätzlich geben Ihnen Transformationen Möglichkeiten, die Sie ansonsten vielleicht nicht hätten. Sie können nicht nur Elemente im 2D-Raum verschieben, sondern auch in drei Dimensionen transformieren, schräg stellen und drehen usw. Paul Irish hat eine [eingehende Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus Leistungssicht. Im Allgemeinen haben Sie jedoch die gleichen Vorteile wie bei der Verwendung von `CSS`-Animationen: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine leicht erweiterbare Möglichkeit, Elemente zu platzieren – etwas, das viel zusätzlichen Code erfordert, wenn Sie die Übersetzung mit `top`- und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass dies genauso ist wie das Arbeiten in einem `canvas`-Element.

> [!NOTE]
> Möglicherweise müssen Sie eine `translateZ(0.1)`-Transformation anhängen, wenn Sie Hardwarebeschleunigung für Ihre `CSS`-Animationen wünschen, abhängig von der Plattform. Wie oben erwähnt, kann dies die Leistung verbessern. Wenn es übermäßig verwendet wird, kann dies zu Speicherkonsumproblemen führen. Was Sie in dieser Hinsicht tun, liegt bei Ihnen – führen Sie einige Tests durch und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code mit einer angenommenen Bildwiederholrate aus, die unter den aktuellen Umständen möglicherweise oder möglicherweise nicht möglich ist. Es teilt dem Browser mit, Ergebnisse zu rendern, auch wenn der Browser sie nicht tatsächlich zeichnen wird; das heißt, solange die Video-Hardware nicht den nächsten Anzeige-Zyklus erreicht hat. Dies verschwendet Prozessorzeit und kann sogar die Akkulaufzeit des Geräts des Benutzers reduzieren.

Stattdessen sollten Sie versuchen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zu verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, den nächsten Rahmen Ihrer Animation zu erstellen, und wird sich nicht abmühen, wenn die Hardware nichts wirklich zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht ausgeführt werden, während Ihre App nicht auf dem Bildschirm sichtbar ist (z. B. wenn sie im Hintergrund läuft und eine andere Aufgabe läuft). Dies spart Akku und verhindert, dass Benutzer Ihren Namen in den Nachthimmel fluchen.

#### Machen Sie Ereignisse sofort

Als klassische, barrierefreiheitsbewusste Webentwickler lieben wir Klickereignisse, da sie auch Tastatureingaben unterstützen. Auf mobilen Geräten sind diese zu langsam. Sie sollten [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund dafür ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) zu diesem Zweck, die Ihnen zur Verfügung steht.

#### Halten Sie Ihre Benutzeroberfläche einfach

Ein großes Leistungsproblem, das wir in `HTML`-Apps fanden, war, dass das Verschieben vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge macht — insbesondere, wenn sie viele Farbverläufe und Schlagschatten aufweisen. Es hilft enorm, das Erscheinungsbild zu vereinfachen und beim Ziehen und Ablegen ein Proxy-Element zu verschieben.

Wenn Sie beispielsweise eine lange Liste von Elementen haben (sagen wir, Tweets), verschieben Sie nicht alles. Halten Sie in Ihrem DOM-Baum nur die sichtbaren und ein paar auf beiden Seiten des aktuell sichtbaren Satzes von Tweets. Blenden Sie den Rest aus oder entfernen Sie ihn. Das Beibehalten der Daten in einem `JavaScript`-Objekt statt des Zugriffs auf das DOM kann die Leistung Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als eine Präsentation Ihrer Daten und nicht als die Daten selbst. Das bedeutet nicht, dass Sie kein reines `HTML` als Quelle verwenden können; lesen Sie es einfach einmal und scrollen Sie dann 10 Elemente, ändern Sie den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnisliste, anstatt 100 nicht sichtbare Elemente zu verschieben. Der gleiche Trick gilt für Spiele mit Sprites: Wenn sie sich nicht im Moment auf dem Bildschirm befinden, besteht keine Notwendigkeit, sie abzufragen. Stattdessen sollten Sie Elemente, die aus dem Bildschirm scrollen, als neue verwenden, die hineinkommen.

## Allgemeine Leistungsanalyse von Anwendungen

`Firefox`, `Chrome` und andere Browser beinhalten integrierte Werkzeuge, die Ihnen helfen können, eine langsame Seitendarstellung zu diagnostizieren. Insbesondere der [Firefox-Network-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt eine genaue Zeitleiste, wann jede Netzwerkanfrage auf Ihrer Seite auftritt, wie groß sie ist und wie lange es dauert.

![Der Firefox-Netzwerk-Monitor zeigt GET-Anfragen, mehrere Dateien und unterschiedliche Ladezeiten für jede Ressource in einem Diagramm.](network-monitor.jpg)

Wenn Ihre Seite `JavaScript`-Code enthält, der lange ausgeführt wird, zeigt Ihnen der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen:

![Der Firefox-JavaScript-Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [integrierte Gecko-Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Werkzeug, das noch detailliertere Informationen darüber liefert, welche Teile des Browser-Codes während des Profilierens langsam laufen. Dies ist etwas komplexer in der Anwendung, bietet aber viele nützliche Details.

![Ein eingebettetes Gecko-Profiler-Fenster zeigt viele Netzwerkinformationen.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Werkzeuge mit dem Android-Browser verwenden, indem Sie `Firefox` ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere dauert es in mobilen Browsern länger, Dutzende oder Hunderte von Netzwerkanfragen zu stellen. Das Rendern großer Bilder und `CSS`-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, da die mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite zu nutzen. Für nützliche allgemeine Tipps zur mobilen Webleistung lesen Sie den Vortrag von Maximiliano Firtman [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance).

### Testfälle und das Einreichen von Fehlern

Wenn die Entwicklerwerkzeuge von `Firefox` und `Chrome` Ihnen nicht helfen, ein Problem zu finden, oder falls sie anzeigen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall zu erstellen, der das Problem maximal isoliert. Das hilft oft bei der Diagnose von Problemen.

Versuchen Sie, das Problem zu reproduzieren, indem Sie eine statische Kopie einer `HTML`-Seite speichern und laden (einschließlich jeglicher eingebundener Bilder/Stilblätter/Skripte). Schneiden Sie dann private Informationen aus den statischen Dateien aus und senden Sie sie an andere zur Hilfe (reichen Sie z.B. einen [Bugzilla](https://bugzilla.mozilla.org/) Bericht ein, oder hosten Sie es auf einem Server und teilen Sie die `URL`). Sie sollten auch die mit den oben genannten Tools gesammelten Profildaten teilen.
