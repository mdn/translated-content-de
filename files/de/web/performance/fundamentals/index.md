---
title: Leistungsgrundlagen
slug: Web/Performance/Fundamentals
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{QuickLinksWithSubPages("Web/Performance")}}

Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browser-Plattform hilft, sie zu verbessern, und welche Werkzeuge und Prozesse Sie verwenden können, um sie zu testen und zu verbessern.

## Was ist Leistung?

Letztendlich ist die vom Benutzer wahrgenommene Leistung die einzige Leistung, die zählt. Benutzer geben dem System über Berührung, Bewegung und Spracheingaben ein und nehmen Ausgaben durch Sehen, Fühlen und Hören wahr. Leistung ist die Qualität der Systemausgaben als Reaktion auf Benutzereingaben.

Unter sonst gleichen Bedingungen verliert der Code, der für ein anderes Ziel als die vom Benutzer wahrgenommene Leistung (hiernach UPP) optimiert ist, im Wettbewerb gegen Code, der für UPP optimiert ist. Benutzer bevorzugen beispielsweise eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckeligen, nicht reagierenden App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber reale UPP-Ziele haben Vorrang.

Die nächsten Abschnitte weisen auf wesentliche Leistungsmetriken hin und diskutieren sie.

### Reaktionsgeschwindigkeit

Reaktionsgeschwindigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Benutzereingaben bereitstellt. Wenn ein Benutzer beispielsweise auf den Bildschirm tippt, erwartet er, dass sich die Pixel auf eine bestimmte Weise ändern. Für diese Interaktion ist die Reaktionsgeschwindigkeitsmetrik die Zeit, die zwischen dem Tippen und der Pixeländerung vergeht.

Reaktionsgeschwindigkeit umfasst manchmal mehrere Stadien des Feedbacks. Der Start der Anwendung ist ein besonders wichtiger Fall, der weiter unten ausführlicher erläutert wird.

Reaktionsgeschwindigkeit ist wichtig, weil Menschen frustriert und wütend werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf die Eingabe des Benutzers reagiert.

### Bildfrequenz

Die Bildfrequenz ist die Rate, mit der das System die dem Benutzer angezeigten Pixel ändert. Dies ist ein bekanntes Konzept: Jeder bevorzugt zum Beispiel Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Die Bildfrequenz ist als "Service-Qualitäts"-Metrik wichtig. Computermonitore sind darauf ausgelegt, die Augen der Benutzer zu "täuschen", indem sie ihnen Photonen liefern, die die Realität nachahmen. Zum Beispiel reflektiert Papier, das mit Text bedruckt ist, Photonen in einem bestimmten Muster zu den Augen des Benutzers. Durch die Manipulation von Pixeln emittiert eine Leser-App Photonen in einem ähnlichen Muster, um die Augen des Benutzers zu "täuschen".

Wie Ihr Gehirn vermutet, ist Bewegung nicht ruckartig und diskret, sondern "aktualisiert" sich reibungslos und kontinuierlich. (Stroboskoplichter sind lustig, weil sie das auf den Kopf stellen, indem sie Ihr Gehirn von Eingaben "aushungern", um die Illusion einer diskreten Realität zu schaffen). Auf einem Computermonitor macht eine höhere Bildfrequenz eine realitätsgetreuere Nachahmung.

> [!NOTE]
> Menschen können in der Regel keine Unterschiede in der Bildfrequenz über 60Hz wahrnehmen. Deshalb sind die meisten modernen elektronischen Bildschirme darauf ausgelegt, mit dieser Frequenz zu aktualisieren. Ein Fernseher sieht für einen Kolibri wahrscheinlich ruckelig und unrealistisch aus.

### Speicherverbrauch

**Speicherverbrauch** ist eine weitere wichtige Metrik. Im Gegensatz zur Reaktionsfähigkeit und Bildfrequenz nehmen Benutzer den Speicherverbrauch nicht direkt wahr, aber der Speicherverbrauch nähert den "Benutzerzustand" eng an. Ein ideales System würde 100% des Benutzerzustands ständig aufrechterhalten: Alle Anwendungen im System würden gleichzeitig laufen, und alle Anwendungen würden den Zustand behalten, den der Benutzer beim letzten Mal erstellt hat, als er mit der Anwendung interagierte (Anwendungszustand wird im Arbeitsspeicher des Computers gespeichert, weshalb die Näherung nah ist).

Daraus ergibt sich eine wichtige, aber kontraintuitive Folgerung: Ein gut gestaltetes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Vielmehr wurde ein gut gestaltetes System optimiert, um möglichst viel Speicher zu **verwenden**, um den Benutzerzustand aufrechtzuerhalten und gleichzeitig andere UPP-Ziele zu erreichen.

Das bedeutet nicht, dass das System Speicher **verschwenden** sollte. Wenn ein System mehr Speicher verwendet als nötig, um einen bestimmten Benutzerzustand beizubehalten, verschwendet das System eine Ressource, die es verwenden könnte, um einen anderen Benutzerzustand zu halten. In der Praxis kann kein System alle Benutzerzustände aufrechterhalten. Die intelligente Zuweisung von Speicher an den Benutzerzustand ist ein wichtiges Anliegen, das wir weiter unten ausführlicher behandeln.

### Stromverbrauch

Die letzte hier besprochene Metrik ist der **Stromverbrauch**. Wie beim Speicherverbrauch nehmen die Benutzer den Stromverbrauch nur indirekt wahr, durch die Frage, wie lange ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Im Dienst der Erreichung von UPP-Zielen muss das System nur die minimale erforderliche Leistung verwenden.

Der Rest dieses Dokuments wird die Leistung im Hinblick auf diese Metriken diskutieren.

## Optimierungen der Plattformleistung

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie Firefox/Gecko allgemein zur Leistung beiträgt, unterhalb der Ebene aller Anwendungen. Aus der Sicht eines Entwicklers oder Benutzers beantwortet dies die Frage: „Was tut die Plattform für Sie?“

### Webtechnologien

Die Webplattform bietet viele Werkzeuge, von denen einige besser für bestimmte Aufgaben geeignet sind als andere. Alle Anwendungslogiken sind in JavaScript geschrieben. Um Grafiken anzuzeigen, können Entwickler HTML oder CSS (d. h. hochgradige deklarative Sprachen) verwenden oder Schnittstellen auf niedriger Ebene nutzen, die durch das {{ htmlelement("canvas") }}-Element angeboten werden (welches [WebGL](/de/docs/Web/API/WebGL_API) umfasst). Irgendwo "zwischen" HTML/CSS und Canvas liegt [SVG](/de/docs/Web/SVG), das einige Vorteile beider bietet.

HTML und CSS erhöhen die Produktivität erheblich, manchmal auf Kosten der Bildfrequenz oder der Kontrolle auf Pixelniveau über das Rendering. Text und Bilder layouten sich automatisch neu, UI-Elemente erhalten automatisch das System-Thema, und das System bietet "eingebaute" Unterstützung für einige Anwendungsfälle, an die Entwickler möglicherweise nicht von Anfang an denken, wie Displays mit unterschiedlichen Auflösungen oder Sprachen, die von rechts nach links lesen.

Das `canvas`-Element bietet Entwicklern einen Pixelpuffer zum direkten Zeichnen. Dies gibt Entwicklern eine Kontrolle auf Pixelniveau über das Rendering und eine genaue Kontrolle über die Bildfrequenz, aber jetzt müssen die Entwickler mit mehreren Auflösungen und Ausrichtungen, Sprachen von rechts nach links usw. umgehen. Entwickler zeichnen auf Leinwände entweder mit einer vertrauten 2D-Zeichen-API oder mit WebGL, einer „nah am Metall“ Bindung, die größtenteils OpenGL ES 2.0 folgt.

### Gecko-Rendering

Die Gecko JavaScript-Engine unterstützt Just-in-Time (JIT)-Kompilierung. Dies ermöglicht Anwendungslogiken, vergleichbar mit anderen virtuellen Maschinen wie Java-VMs zu arbeiten — und in einigen Fällen sogar nahe an „nativem Code“.

Die Grafikpipeline in Gecko, die HTML, CSS und Canvas unterstützt, ist in mehreren Punkten optimiert. Der HTML/CSS-Layout- und Grafikcode in Gecko reduziert die Invalidation und das Neuzeichnen für häufige Fälle wie Scrollen; Entwickler erhalten diese Unterstützung „kostenlos“. Die Pixelpuffer, die sowohl von Gecko „automatisch“ als auch von Anwendungen „manuell“ auf `canvas` gemalt werden, minimieren Kopien beim Zeichnen auf den Display-Framebuffer. Dies geschieht durch Vermeidung von Zwischensurfaces, wo sie Overhead verursachen würden (wie z. B. anwendungsspezifischen „Back-Buffern“ in vielen anderen Betriebssystemen), und durch die Verwendung spezieller Speicher für Grafikpuffer, die direkt durch die Compositor-Hardware zugänglich sind. Komplexe Szenen werden zur maximalen Leistungserzielung mit der GPU des Geräts gerendert. Um den Stromverbrauch zu verbessern, werden einfache Szenen unter Verwendung spezieller dedizierter Kompositionshardware gerendert, während die GPU im Leerlauf ist oder sich ausschaltet.

Völlig statischer Inhalt ist eher die Ausnahme als die Regel bei reichhaltigen Anwendungen. Reichhaltige Anwendungen nutzen dynamischen Inhalt mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind besonders wichtig für Anwendungen: Entwickler können CSS verwenden, um kompliziertes Verhalten mit einer einfachen, hochgradigen Syntax zu deklarieren. Im Gegenzug ist Geckos Grafikpipeline hochoptimiert, um gängige Animationen effizient zu rendern. Animationen von häufig vorkommenden Fällen werden an den Systemkompositor „ausgelagert“, der sie in leistungsfähiger und energieeffizienter Weise rendern kann.

Die Startleistung einer App ist ebenso wichtig wie ihre Laufzeitleistung. Gecko ist optimiert, um eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre Verbesserungen, die auf diesen Inhalt abzielen, wie paralleles HTML-Parsing, intelligentes Ansteuern des Neu-Layoutens und Dekodierens von Bildern, clevere Layout-Algorithmen usw., tragen gleichermaßen zur Verbesserung von Webanwendungen auf Firefox bei.

## Anwendungsleistung

Dieser Abschnitt richtet sich an Entwickler, die fragen: "Wie kann ich meine App schnell machen?"

### Startleistung

Der Anwendungsstart wird im Allgemeinen durch drei vom Benutzer wahrgenommene Ereignisse unterteilt:

- Das erste ist das **erste Bild** der Anwendung — der Punkt, an dem genügend Anwendungsressourcen geladen wurden, um einen ersten Frame zu malen
- Das zweite ist, wenn die Anwendung **interaktiv** wird — zum Beispiel sind Benutzer in der Lage, einen Knopf zu drücken, und die Anwendung reagiert
- Das letzte Ereignis ist das **volle Laden** — zum Beispiel, wenn alle Alben des Benutzers in einem Musikplayer aufgelistet sind

Der Schlüssel zu einem schnellen Start besteht darin, zwei Dinge im Auge zu behalten: UPP ist das einzige, was zählt, und es gibt einen "kritischen Pfad" zu jedem der oben genannten vom Benutzer wahrgenommenen Ereignisse. Der kritische Pfad ist genau und nur der Code, der laufen muss, um das Ereignis zu erzeugen.

Zum Beispiel, um den ersten Frame einer Anwendung zu malen, der visuell aus etwas HTML und CSS zu dessen Stil besteht:

1. Das HTML muss geparst werden
2. Der DOM für dieses HTML muss konstruiert werden
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und dekodiert werden
4. Die CSS-Stile müssen auf diesen DOM angewendet werden
5. Das gestylte Dokument muss neu layoutet werden

In dieser Liste ist nirgendwo "die JS-Datei laden, die für ein selten genutztes Menü benötigt wird", "das Bild für die Highscore-Liste abrufen und dekodieren" usw. Diese Arbeitsgegenstände befinden sich nicht auf dem kritischen Pfad zum Malen des ersten Frames.

Es erscheint offensichtlich, aber um ein vom Benutzer wahrgenommenes Startevent schneller zu erreichen, besteht der Haupttrick darin, _nur den Code auf dem kritischen Pfad zu laufen._ Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist äußerst dynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Webplattform ermöglicht das dynamische Laden von Code, HTML, CSS, Bildern und anderen Ressourcen. Diese Funktionen können verwendet werden, um Arbeit außerhalb des kritischen Pfades zu verschieben, indem unnötige Inhalte „faul“ zu einem späteren Zeitpunkt nach dem Start geladen werden.

Ein weiteres Problem, das den Start verzögern kann, ist Leerlaufzeit, verursacht durch das Warten auf Antworten auf Anfragen (wie Datenbankladevorgänge). Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich während des Starts stellen (das nennt man "Front-Loading"). Dann, wenn die Daten später benötigt werden, stehen sie hoffentlich bereits zur Verfügung und die Anwendung muss nicht warten.

> [!NOTE]
> Für deutlich mehr Informationen zur Verbesserung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Optimizing_startup_performance).

Ebenso sollten lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über Netzwerke mit hoher Latenz und geringer Bandbreite abgerufen werden. Netzwerkanfragen sollten niemals auf dem kritischen Pfad für einen frühen Anwendungsstart liegen. Lokales Caching/offline Apps können über [Service Workers](/de/docs/Web/API/Service_Worker_API) erreicht werden. Sehen Sie [Offline und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Nutzung von Service Workern für Offline- und Hintergrundsynchronisationsfunktionen.

### Bildfrequenz

Das Wichtigste für eine hohe Bildfrequenz ist es, das richtige Werkzeug zu wählen. Verwenden Sie HTML und CSS, um Inhalte zu implementieren, die meist statisch sind, gescrollt werden und selten animiert sind. Verwenden Sie Canvas für hochdynamische Inhalte, wie Spiele, die enge Kontrolle über das Rendering benötigen und kein Thema benötigen.

Für Inhalte, die mit Canvas gezeichnet werden, hängt es vom Entwickler ab, die Ziele der Bildfrequenz zu erreichen: sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte besteht der Weg zu einer hohen Bildfrequenz darin, die richtigen Primitiven zu verwenden. Firefox ist hochoptimiert, um beliebige Inhalte zu scrollen; das ist normalerweise kein Thema. Aber oft kann der Austausch von etwas Allgemeinheit und Qualität gegen Geschwindigkeit, wie z.B. die Verwendung einer statischen Rendering anstelle eines CSS-Radialgradienten, die Scroll-Bildfrequenz über ein Ziel hinausbringen. CSS [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es, diese Kompromisse nur auf Geräte zu beschränken, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch "Seiten" oder "Panels". Zum Beispiel tippt der Benutzer auf einen "Einstellungen"-Knopf, um in einen Anwendungsoptionen-Bildschirm zu wechseln, oder ein Einstellungsmenü "erscheint". Firefox ist hochoptimiert, um Szenen zu wechseln und zu animieren, die:

- Seiten/Panels verwenden, die ungefähr so groß sind wie der Geräteschirm oder kleiner
- Die CSS `transform` und `opacity` Eigenschaften ändern

Übergänge und Animationen, die diesen Richtlinien entsprechen, können an den Systemkompositor ausgelagert und maximal effizient ausgeführt werden.

### Speicher- und Stromverbrauch

Die Verbesserung des Speicher- und Stromverbrauchs ist ein ähnliches Problem wie die Beschleunigung des Starts: Keine unnötige Arbeit tun oder UI-Ressourcen, die selten benutzt werden, faul laden. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen Energiesparmodus wechseln, wenn sie größtenteils im Leerlauf sind. Anwendungen, die ständig Timer feuern oder unnötige Animationen laufen lassen, hindern CPUs daran, in den Energiesparmodus zu wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund gestellt werden, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Event auf ihren Dokumenten abgefeuert. Dieses Event ist ein Freund des Entwicklers; Anwendungen sollten darauf hören.

### Spezifische Codiertipps für Anwendungsleistung

Die folgenden praktischen Tipps helfen, einen oder mehrere der oben diskutierten Faktoren zur Anwendungsleistung zu verbessern.

#### Verwenden Sie CSS-Animationen und Übergänge

Anstelle der `animate()`-Funktion einer Bibliothek, die wahrscheinlich viele leistungsschwache Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder `top`/`left` Positionierung, zum Beispiel), verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie tatsächlich [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um die Arbeit zu erledigen. Dies funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu verwenden, um sie reibungslos mit minimalem Einfluss auf die Prozessorleistung zu handhaben. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS zusammen mit dem Rest des Erscheinungsbilds Ihrer App unter Verwendung einer standardisierten Syntax definieren können.

CSS-Animationen geben Ihnen sehr granulare Kontrolle über Ihre Effekte mithilfe von [keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar Events, die während des Animationsprozesses gefeuert werden, überwachen, um andere Aufgaben zu handhaben, die zu gegebenen Zeitpunkten im Animationsprozess durchgeführt werden müssen. Sie können diese Animationen leicht mit {{cssxref(":hover")}}, {{cssxref(":focus")}}, oder {{cssxref(":target")}} auslösen, oder indem Sie Klassen auf Elternelementen dynamisch hinzufügen und entfernen.

Wenn Sie Animationen spontan erstellen oder in [JavaScript](/de/docs/Web/JavaScript) ändern möchten, hat James Long eine einfache Bibliothek namens [CSS-animations.js](https://github.com/jlongster/css-animations.js/) geschrieben.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierungen zu verfeinern und all die Mathematik selbst zu erledigen, verwenden Sie die {{cssxref("transform")}}-CSS-Eigenschaft, um die Position, Skalierung usw. Ihres Inhalts anzupassen. Alternativ können Sie die individuellen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}} verwenden. Der Grund ist einmal mehr die Hardwarebeschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU ausführen lassen, damit die CPU andere Dinge erledigen kann.

Zusätzlich geben Ihnen Transformationen Fähigkeiten, die Sie sonst möglicherweise nicht hätten. Sie können nicht nur Elemente im 2D-Raum übersetzen, sondern auch in drei Dimensionen transformieren, schief ziehen und rotieren, usw. Paul Irish hat eine [eingehende Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus einer Leistungsperspektive erstellt. Im Allgemeinen haben Sie jedoch die gleichen Vorteile wie bei der Verwendung von CSS-Animationen: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine leicht erweiterbare Methode zum Positionieren von Elementen – etwas, das eine Menge zusätzlicher Code erfordert, wenn Sie die Übersetzung mit `top` und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass dies wie die Arbeit in einem `canvas`-Element ist.

> [!NOTE]
> Möglicherweise müssen Sie eine `translateZ(0.1)`-Transformation anhängen, wenn Sie Hardwarebeschleunigung bei Ihren CSS-Animationen wünschen, abhängig von der Plattform. Wie oben erwähnt, kann dies die Leistung verbessern. Wenn es übermäßig verwendet wird, kann es Probleme bei der Speichernutzung verursachen. Was Sie hierbei tun, liegt bei Ihnen – führen Sie einige Tests durch und finden Sie heraus, was das Beste für Ihre spezielle App ist.

#### Verwenden Sie `requestAnimationFrame()` anstelle von `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code mit einer vermuteten Bildfrequenz aus, die unter aktuellen Umständen möglicherweise nicht möglich ist. Es veranlasst den Browser, Ergebnisse zu rendern, selbst wenn der Browser tatsächlich nichts zeichnen wird; das heißt, während der Hauptspeicher die nächste Anzeigezyklen noch nicht erreicht hat. Dies verschwendet Prozessorzeit und kann sogar die Batterielebensdauer auf dem Gerät des Benutzers reduzieren.

Stattdessen sollten Sie versuchen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zu verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu erstellen, und es wird keine Mühe machen, wenn die Hardware tatsächlich nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht ausgeführt werden, während Ihre App nicht auf dem Bildschirm sichtbar ist (z. B., wenn sie im Hintergrund ist und eine andere Aufgabe ausgeführt wird). Dies spart Batterieleistung und verhindert, dass Benutzer Ihren Namen hasserfüllt in den Nachthimmel brüllen.

#### Machen Sie Ereignisse sofort

Als altmodische, barrierefreie Webentwickler lieben wir Klickereignisse, da sie auch Tastatureingaben unterstützen. Auf mobilen Geräten sind diese zu langsam. Sie sollten [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) stattdessen verwenden. Der Grund ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) zu diesem Zweck, die auch Ihnen zur Verfügung steht.

#### Halten Sie Ihre Benutzeroberfläche einfach

Ein großes Leistungsproblem, das wir in HTML-Apps festgestellt haben, ist, dass das Bewegen vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge macht – insbesondere, wenn sie viele Verläufe und Schlagschatten haben. Es hilft sehr, das Aussehen und Verhalten zu vereinfachen und ein Proxy-Element zu bewegen, wenn Sie ziehen und ablegen.

Wenn Sie beispielsweise eine lange Liste von Elementen haben (nehmen wir an, Tweets), bewegen Sie nicht alle. Halten Sie in Ihrem DOM-Baum nur die sichtbaren und einige auf beiden Seiten der derzeit sichtbaren Tweet-Liste. Verbergen oder entfernen Sie den Rest. Das Behalten der Daten in einem JavaScript-Objekt, anstatt auf das DOM zuzugreifen, kann die Leistung Ihrer App erheblich verbessern. Betrachten Sie das Display als eine Präsentation Ihrer Daten anstatt der Daten selbst. Das bedeutet nicht, dass Sie nicht direktes HTML als Quelle verwenden können; lesen Sie es einfach einmal ein und scrollen Sie dann 10 Elemente, indem Sie den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnismenge ändern, anstatt 100 Elemente zu bewegen, die nicht sichtbar sind. Der gleiche Trick gilt in Spielen für Sprites: Wenn sie sich nicht auf dem Bildschirm befinden, gibt es keinen Grund, sie abzufragen. Verwenden Sie stattdessen Elemente, die aus dem Bildschirm scrollen, wieder als neue, die eintreten.

## Allgemeine Anwendungsleistungsanalyse

Firefox, Chrome und andere Browser enthalten integrierte Werkzeuge, die Ihnen helfen können, langsame Seitendarstellungen zu diagnostizieren. Besonders der [Firefox-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt eine präzise Zeitleiste, wann jede Netzwerk-Anfrage auf Ihrer Seite passiert, wie groß sie ist, und wie lange sie dauert.

![Der Firefox-Netzwerkmonitor, der Get-Anfragen, mehrere Dateien und unterschiedliche Ladezeiten für Ressourcen auf einem Diagramm zeigt.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der lange braucht, um auszuführen, zeigt der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen an:

![Der Firefox-JavaScript-Profiler zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [eingebaute Gecko-Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Werkzeug, das noch detailliertere Informationen darüber liefert, welche Teile des Browser-Codes langsam laufen, während der Profiler läuft. Dies ist etwas komplizierter zu verwenden, liefert aber viele nützliche Details.

![Ein eingebautes Gecko-Profiler-Fenster zeigt viele Netzwerkinformationen an.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Werkzeuge mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Besonders das Erstellen von Dutzenden oder Hunderten von Netzwerk-Anfragen dauert in mobilen Browsern länger. Das Rendern großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann auch über ein schnelles Netzwerk länger dauern, weil mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite auszunutzen. Für nützliche allgemeine Tipps zur Leistung mobiler Webseiten, sehen Sie sich Maximiliano Firtmans [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance) Vortrag an.

### Testfälle und Fehlerberichterstattung

Wenn Ihnen die Entwicklerwerkzeuge von Firefox und Chrome nicht helfen, ein Problem zu finden, oder wenn sie scheinen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem maximal isoliert. Das hilft oft bei der Diagnose von Problemen.

Sehen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite (einschließlich aller eingebetteten Bilder/Stylesheets/Skripte) speichern und laden. Wenn ja, bearbeiten Sie die statischen Dateien, um alle privaten Informationen zu entfernen, und senden Sie sie dann an andere zur Hilfe (übermitteln Sie einen [Bugzilla](https://bugzilla.mozilla.org/) Bericht, zum Beispiel, oder hosten Sie sie auf einem Server und teilen Sie die URL). Teilen Sie auch alle Profilerstellung, die Sie mit den oben aufgeführten Tools gesammelt haben.
