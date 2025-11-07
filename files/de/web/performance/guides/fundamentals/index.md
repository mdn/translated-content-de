---
title: Grundlagen der Performance
slug: Web/Performance/Guides/Fundamentals
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Performance bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument im Allgemeinen, was Performance ist, wie die Browserplattform hilft, diese zu verbessern, und welche Tools und Prozesse Sie nutzen können, um diese zu testen und zu verbessern.

## Was ist Performance?

Letztlich ist die vom Benutzer wahrgenommene Performance die einzige Performance, die zählt. Benutzer geben Eingaben in das System über Berührung, Bewegung und Sprache. Im Gegenzug nehmen sie Ausgaben durch Sehen, Berühren und Hören wahr. Performance ist die Qualität der Systemausgaben als Reaktion auf Benutzereingaben.

Alles andere ist gleich, Code, der für ein Ziel optimiert ist, das nicht die vom Benutzer wahrgenommene Performance (im Folgenden UPP) ist, verliert, wenn er gegen Code konkurriert, der für UPP optimiert ist. Benutzer bevorzugen zum Beispiel eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckeligen, nicht reagierenden App, die 100.000.000 pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber echte UPP-Ziele stehen an erster Stelle.

Die nächsten Abschnitte beleuchten und diskutieren essentielle Performance-Metriken.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Antwort auf Benutzereingaben bereitstellt. Zum Beispiel, wenn ein Benutzer den Bildschirm berührt, erwartet er, dass sich die Pixel auf eine bestimmte Weise ändern. Für diese Interaktion ist die Reaktionsfähigkeitsmetrik die Zeitspanne zwischen der Berührung und der Pixeländerung.

Reaktionsfähigkeit umfasst manchmal mehrere Feedback-Stufen. Das Starten von Anwendungen ist ein besonders wichtiger Fall, der weiter unten im Detail besprochen wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und wütend werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf die Eingabe des Benutzers reagiert.

### Bildwiederholrate

Die Bildwiederholrate ist die Rate, mit der das System die vom Benutzer angezeigten Pixel ändert. Dies ist ein bekanntes Konzept: Jeder bevorzugt zum Beispiel Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, auch wenn sie nicht erklären können, warum.

Bildwiederholrate ist wichtig als „Dienstqualitäts“-Metrik. Computermonitore sind darauf ausgelegt, die Augen der Benutzer zu „täuschen“, indem sie Photonenzu ihnen liefern, die die Realität nachahmen. Zum Beispiel reflektiert Papier, das mit gedrucktem Text bedeckt ist, Photonen in einem Muster an die Augen des Benutzers. Durch die Manipulation von Pixeln gibt eine Lese-App Photonen in einem ähnlichen Muster ab, um die Augen des Benutzers zu „täuschen“.

Wie Ihr Gehirn schlussfolgert, ist Bewegung nicht ruckartig und diskret, sondern "aktualisiert" sich reibungslos und kontinuierlich. (Stroboskoplichter machen Spaß, weil sie das auf den Kopf stellen und Ihrem Gehirn die Eingaben entziehen, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computermonitor sorgt eine höhere Bildwiederholrate für eine originalgetreuere Nachahmung der Realität.

> [!NOTE]
> Menschen können in der Regel keine Unterschiede in der Bildwiederholrate über 60 Hz wahrnehmen. Deshalb sind die meisten modernen elektronischen Displays so konzipiert, dass sie sich mit dieser Rate aktualisieren. Ein Fernseher sieht für einen Kolibri zum Beispiel wahrscheinlich ruckelig und unrealistisch aus.

### Speicherverbrauch

**Speicherverbrauch** ist eine weitere Schlüsselmetrik. Im Gegensatz zur Reaktionsfähigkeit und Bildwiederholrate nehmen Benutzer den Speicherverbrauch nicht direkt wahr, aber der Speicherverbrauch approximiert den „Benutzerzustand“ sehr genau. Ein ideales System würde 100 % des Benutzerzustands jederzeit aufrechterhalten: Alle Anwendungen im System würden gleichzeitig laufen, und alle Anwendungen würden den vom Benutzer zuletzt erstellten Zustand beibehalten, als der Benutzer zuletzt mit der Anwendung interagierte (Anwendungszustand wird im Computergedächtnis gespeichert, weshalb die Approximation nahe ist).

Daraus ergibt sich ein wichtiger, aber kontraintuitiver Schluss: Ein gut entworfenes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Ein gut entworfenes System wurde stattdessen optimiert, um so viel Speicher wie möglich zu **nutzen**, um den Benutzerzustand aufrechtzuerhalten, während es andere UPP-Ziele erreicht.

Das bedeutet nicht, dass das System **Speicher verschwenden** sollte. Wenn ein System mehr Speicher als nötig verwendet, um einen bestimmten Benutzerzustand aufrechtzuerhalten, verschwendet das System eine Ressource, die es nutzen könnte, um einen anderen Benutzerzustand beizubehalten. Tatsächlich kann kein System alle Benutzerzustände beibehalten. Die intelligente Zuweisung von Speicher zum Benutzerzustand ist ein wichtiges Anliegen, das wir weiter unten im Detail behandeln.

### Energieverbrauch

Die letzte hier diskutierte Metrik ist der **Energieverbrauch**. Wie der Speicherverbrauch wird der Energieverbrauch von Benutzern nur indirekt wahrgenommen, je nachdem, wie lange ihre Geräte in der Lage sind, alle anderen UPP-Ziele aufrechtzuerhalten. Um UPP-Ziele zu erreichen, muss das System nur die minimale Leistung verwenden, die benötigt wird.

Der Rest dieses Dokuments wird die Performance in Bezug auf diese Metriken diskutieren.

## Plattformleistungsoptimierungen

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie Firefox/Gecko im Allgemeinen zur Leistung beiträgt, unterhalb der Ebene aller Anwendungen. Aus der Perspektive eines Entwicklers oder Benutzers beantwortet dies die Frage: "Was macht die Plattform für Sie?"

### Webtechnologien

Die Webplattform bietet viele Werkzeuge, einige besser für bestimmte Jobs geeignet als andere. Die gesamte Anwendungslogik wird in JavaScript geschrieben. Um Grafiken darzustellen, können Entwickler HTML oder CSS verwenden (d.h. hochstufige deklarative Sprachen) oder die imperativen Low-Level-Schnittstellen verwenden, die das {{ htmlelement("canvas") }}-Element bietet (welches [WebGL](/de/docs/Web/API/WebGL_API) beinhaltet). Irgendwo "zwischen" HTML/CSS und Canvas befindet sich [SVG](/de/docs/Web/SVG), das einige Vorteile beider bietet.

HTML und CSS erhöhen stark die Produktivität, manchmal auf Kosten der Bildwiederholrate oder der Pixelsteuerung über die Darstellung. Text und Bilder fließen automatisch um, UI-Elemente erhalten automatisch das Systemthema, und das System bietet "eingebauten" Support für einige Use Cases, an die Entwickler möglicherweise nicht zuerst denken, wie Displays mit unterschiedlichen Auflösungen oder rechts-nach-links-Sprachen.

Das `canvas`-Element bietet Entwicklern einen Pixelpuffer zum direkten Zeichnen. Dies gibt Entwicklern die Kontrolle über die Pixeldarstellung und die präzise Kontrolle über die Bildwiederholrate, aber jetzt müssen sich die Entwickler mit mehreren Auflösungen und Ausrichtungen, rechts-nach-links-Sprachen usw. auseinander setzen. Entwickler zeichnen auf Leinwände entweder mithilfe einer vertrauten 2D-Zeichen-API oder WebGL, einer "nah-ans-Metall"-Bindung, die größtenteils OpenGL ES 2.0 folgt.

### Gecko Rendering

Geckos JavaScript-Engine unterstützt Just-In-Time (JIT) Compilation. Dies ermöglicht es, dass Anwendungslogik vergleichbar mit anderen virtuellen Maschinen — wie Java-Virtualmaschinen — ausgeführt wird und in einigen Fällen sogar nahe an "nativem Code".

Die Grafikpipeline in Gecko, die HTML, CSS und Canvas unterliegt, ist in mehreren Bereichen optimiert. Der HTML/CSS-Layout- und Grafikcode in Gecko reduziert die Invalidierung und das Neuzeichnen für häufige Fälle wie das Scrollen; Entwickler erhalten diese Unterstützung "kostenlos". Pixelpuffer, die sowohl von Gecko "automatisch" als auch von Anwendungen auf `canvas` "manuell" gezeichnet werden, minimieren Kopien, wenn sie zum Anzeigeframebuffer gezeichnet werden. Dies wird durch Vermeidung von Zwischenoberflächen erreicht, wo sie Overhead erzeugen würden (wie z.B. Per-Anwendungs-"Rückpuffer" in vielen anderen Betriebssystemen), und durch die Verwendung spezieller Speicher für Grafikpuffer, die direkt vom Compositor-Hardware zugegriffen werden können. Komplexe Szenen werden mit der GPU des Geräts für maximale Leistung gerendert. Um den Energieverbrauch zu verbessern, werden einfache Szenen unter Verwendung spezieller dedizierter Composite-Hardware gerendert, während die GPU im Leerlauf läuft oder ausschaltet.

Vollständig statische Inhalte sind die Ausnahme und nicht die Regel für reichhaltige Anwendungen. Reichhaltige Anwendungen verwenden dynamische Inhalte mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind für Anwendungen besonders wichtig: Entwickler können CSS verwenden, um komplexes Verhalten mit einer einfachen, hochstufigen Syntax zu deklarieren. Im Gegenzug ist Geckos Grafikpipeline hochoptimiert, um häufige Animationen effizient zu rendern. Animationen für häufige Fälle werden zum Systemkompositor "ausgelagert", der sie in einer performanten, energieeffizienten Weise rendern kann.

Die Startleistung einer App ist genauso wichtig wie ihre Laufzeitleistung. Gecko ist darauf optimiert, eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre der Verbesserungen, die auf diese Inhalte abzielten, wie paralleles HTML-Parsing, intelligentes Scheduling von Refloxes und Bilddecodierung, clevere Layout-Algorithmen usw., tragen genauso dazu bei, Webanwendungen auf Firefox zu verbessern.

## Anwendungsleistung

Dieser Abschnitt ist für Entwickler gedacht, die sich die Frage stellen: "Wie kann ich meine App schnell machen?"

### Startleistung

Der Start einer Anwendung wird allgemein durch drei vom Benutzer wahrgenommene Ereignisse unterbrochen:

- Das erste ist die **erste Darstellung** der Anwendung – der Punkt, an dem genügend Anwendungsressourcen geladen wurden, um einen ersten Frame zu rendern.
- Das zweite ist, wenn die Anwendung **interaktiv** wird – zum Beispiel können Benutzer einen Button antippen und die Anwendung reagiert.
- Das letzte Ereignis ist das **vollständige Laden** – zum Beispiel, wenn alle Alben des Benutzers in einem Musikplayer aufgelistet wurden.

Der Schlüssel zu einem schnellen Start ist, zwei Dinge im Kopf zu behalten: UPP ist alles, was zählt, und es gibt einen „kritischen Pfad“ für jedes der oben erwähnten, vom Benutzer wahrgenommenen Ereignisse. Der kritische Pfad ist genau und nur der Code, der laufen muss, um das Ereignis zu erzeugen.

Zum Beispiel, um einen ersten Frame einer Anwendung zu rendern, der visuell aus etwas HTML und CSS besteht, um dieses HTML zu stylen:

1. Das HTML muss geparst werden.
2. DOM für dieses HTML muss konstruiert werden.
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und decodiert werden.
4. Die CSS-Stile müssen auf das DOM angewendet werden.
5. Das gestylte Dokument muss refloyed werden.

Nirgends auf dieser Liste steht "Das JS-File für das selten verwendete Menü laden"; "Das Bild für die Bestenliste abrufen und dekodieren", usw. Diese Arbeitselemente sind nicht auf dem kritischen Pfad, um den ersten Frame zu rendern.

Es mag offensichtlich erscheinen, aber um ein vom Benutzer wahrgenommenes Startevent schneller zu erreichen, ist der Haupt"Trick", _nur den Code auf dem kritischen Pfad auszuführen._ Kürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist hochdynamisch. JavaScript ist eine dynamisch typisierte Sprache und die Webplattform erlaubt das dynamische Laden von Code, HTML, CSS, Bildern und anderen Ressourcen. Diese Funktionen können verwendet werden, um Arbeit zu verzögern, die nicht zum kritischen Pfad gehört, indem unnötige Inhalte „faul“ einige Zeit nach dem Start geladen werden.

Ein weiteres Problem, das den Start verzögern kann, ist Leerlaufzeit, verursacht durch das Warten auf Antworten auf Anfragen (wie Datenbankladevorgänge). Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich im Startprozess ausgeben (dies wird als "Vorbelastung" bezeichnet). Wenn die Daten dann später benötigt werden, sind sie hoffentlich schon verfügbar und die Anwendung muss nicht warten.

> [!NOTE]
> Für viel mehr Informationen zur Verbesserung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance).

In diesem Zusammenhang sollten lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über Netzwerke mit hoher Latenz, aber geringer Bandbreite abgerufen werden. Netzwerk-Anfragen sollten niemals auf dem kritischen Pfad für den frühen Anwendungsstart stehen. Lokale Caching-Offline-Apps können über [Service Workers](/de/docs/Web/API/Service_Worker_API) erreicht werden. Sehen Sie [Offline und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) für einen Leitfaden zur Verwendung von Service-Workern für Offline- und Hintergrund-Sync-Fähigkeiten.

### Bildwiederholrate

Das erste Wichtige für eine hohe Bildwiederholrate ist die Wahl des richtigen Tools. Verwenden Sie HTML und CSS für die Umsetzung von Inhalten, die hauptsächlich statisch, gescrollt und selten animiert sind. Verwenden Sie Canvas für sehr dynamische Inhalte, wie Spiele, die eine genaue Kontrolle über die Darstellung erfordern und kein Thematisieren benötigen.

Für auf Canvas gezeichnete Inhalte liegt es am Entwickler, die Bildwiederholungsziele zu erreichen: sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte ist der Weg zu einer hohen Bildwiederholrate, die richtigen Primitives zu verwenden. Firefox ist hochoptimiert, willkürliche Inhalte zu scrollen; dies ist in der Regel kein Anliegen. Doch oft kann der Tausch von etwas Allgemeinheit und Qualität gegen Geschwindigkeit, wie die Verwendung einer statischen Darstellung anstelle eines CSS-Radialgradients, die Scrolling-Bildwiederholungsrate über ein Ziel schieben. CSS [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es, diese Kompromisse nur auf Geräte einzuschränken, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch „Seiten“ oder „Panels“. Zum Beispiel tippt der Benutzer auf eine „Einstellungen“-Taste, um zu einem Anwendungskonfigurationsbildschirm überzugehen, oder ein Einstellungsmenü „poppt auf“. Firefox ist hochoptimiert, um Szenen zu übergehen und zu animieren, die:

- etwa die Größe des Bildschirms des Geräts oder kleiner haben
- die CSS-`transform`- und `opacity`-Eigenschaften übergehen/animieren

Übergänge und Animationen, die sich an diese Richtlinien halten, können zum Systemkompositor ausgelagert und maximal effizient ausgeführt werden.

### Speicher- und Energieverbrauch

Die Verbesserung des Speicher- und Energieverbrauchs ist ein ähnliches Problem wie das Beschleunigen des Starts: vermeiden Sie unnötige Arbeit oder laden Sie selten verwendete UI-Ressourcen „faul“ nach. Verwenden Sie effiziente Datenstrukturen und sorgen Sie dafür, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen Energiesparmodus wechseln, wenn sie größtenteils im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen laufen lassen, verhindern, dass CPUs in den Energiesparmodus wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund geschickt werden, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis auf ihren Dokumenten ausgelöst. Dieses Ereignis ist ein Freund der Entwickler; Anwendungen sollten darauf achten.

### Spezifische Kodierungstipps für Anwendungsleistung

Die folgenden praktischen Tipps helfen, eine oder mehrere der oben diskutierten Anwendungsleistungsfaktoren zu verbessern.

#### Verwenden Sie CSS-Animationen und -Übergänge

Statt die `animate()`-Funktion einer Bibliothek zu verwenden, die wahrscheinlich viele schlecht performende Technologien (wie zum Beispiel [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder `top`/`left`-Positionierung) benutzt, verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie sogar [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um Ihre Aufgabe zu erledigen. Das funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu nutzen, um sie reibungslos mit minimalem Einfluss auf die Prozessorleistung zu handhaben. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS zusammen mit dem restlichen Aussehen Ihrer App unter Verwendung einer standardisierten Syntax definieren können.

CSS-Animationen geben Ihnen sehr granularen Kontrolle über Ihre Effekte mit Hilfe von [Keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) und Sie können sogar Ereignisse überwachen, die während des Animationsprozesses ausgelöst werden, um andere Aufgaben zu bearbeiten, die zu bestimmten Punkten im Animationsprozess durchgeführt werden müssen. Sie können diese Animationen leicht mit {{ cssxref(":hover") }}, {{ cssxref(":focus") }} oder {{ cssxref(":target") }} auslösen oder dynamisch Klassen auf Elternelementen hinzufügen und entfernen.

Wenn Sie Animationen im Handumdrehen erstellen oder in [JavaScript](/de/docs/Web/JavaScript) modifizieren möchten, hat James Long eine einfache Bibliothek dafür geschrieben, die [CSS-animations.js](https://github.com/jlongster/css-animations.js/) heißt.

#### Verwenden Sie CSS-Transforms

Anstatt absolute Positionierung zu optimieren und selbst mit all der Mathematik zu hantieren, verwenden Sie in CSS die {{ cssxref("transform") }}-Eigenschaft, um die Position, Skala und so weiter Ihres Inhalts anzupassen. Alternativ können Sie die individuellen Transformations-Eigenschaften {{ cssxref("translate") }}, {{ cssxref("scale") }} und {{ cssxref("rotate") }} verwenden. Der Grund ist, erneut, Hardwarebeschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU ausführen lassen, wodurch die CPU für andere Dinge frei wird.

Zusätzlich bieten Ihnen Transforms Möglichkeiten, die Sie sonst nicht hätten. Nicht nur können Sie Elemente im 2D-Raum verschieben, sondern Sie können sie auch in drei Dimensionen transformieren, schräg stellen und drehen, und so weiter. Paul Irish hat eine [tiefergehende Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus Leistungssicht. Im Allgemeinen jedoch haben Sie die gleichen Vorteile, die Sie von CSS-Animationen haben: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine leicht erweiterbare Methode, um Elemente zu positionieren — etwas, das viel zusätzlichen Code erfordert, wenn Sie die Verschiebung mit `top`- und `left`-Positionierung simulieren. Ein weiteres Plus ist, dass dies ähnlich ist wie die Arbeit in einem `canvas`-Element.

> [!NOTE]
> Möglicherweise müssen Sie einen `translateZ(0.1)`-Transform anhängen, wenn Sie eine Hardwarebeschleunigung für Ihre CSS-Animationen wünschen, abhängig von der Plattform. Wie oben erwähnt, kann dies die Leistung verbessern. Bei übermäßiger Nutzung kann es zu Speicherverbrauchsproblemen kommen. Was Sie in dieser Hinsicht tun, bleibt Ihnen überlassen — testen Sie ein wenig und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` statt `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code in einer angenommenen Bildwiederholungsrate aus, die unter den aktuellen Umständen möglicherweise nicht möglich ist. Es weist den Browser an, Ergebnisse zu rendern, selbst wenn der Browser nicht tatsächlich etwas anzeigt, also wenn die Video-Hardware den nächsten Anzeigedurchlauf noch nicht erreicht hat. Das verschwendet Prozessorzeit und kann sogar zu einem reduzierten Akku auf dem Gerät des Benutzers führen.

Stattdessen sollten Sie versuchen, [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) zu verwenden. Dies wartet darauf, dass der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu erstellen, und wird es nicht tun, wenn die Hardware nichts tatsächlich anzeigen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht laufen, während Ihre App nicht auf dem Bildschirm sichtbar ist (wie wenn sie im Hintergrund ist und eine andere Aufgabe durchgeführt wird). Dies wird Akkulaufzeit sparen und Nutzer davon abhalten, Ihren Namen in den Nachthimmel zu fluchen.

#### Machen Sie Ereignisse sofort

Als alteingesessene, auf Barrierefreiheit achtende Webentwickler lieben wir Klickereignisse, da sie auch Tastatureingaben unterstützen. Auf mobilen Geräten sind diese jedoch zu langsam. Sie sollten stattdessen [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) zu diesem Zweck, die für Sie verfügbar ist.

#### Halten Sie die Benutzeroberfläche einfach

Ein großes Performance-Problem, das wir in HTML-Apps festgestellt haben, war, dass das Bewegen vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles schleppend macht — insbesondere, wenn sie viele Verläufe und Schlagschatten haben. Es hilft sehr, Ihr Design zu vereinfachen und ein Proxy-Element zu verwenden, das Sie bei Ziehen und Ablegen bewegen.

Wenn Sie zum Beispiel eine lange Liste an Elementen haben (sagen wir Tweets), verschieben Sie nicht alle. Halten Sie in Ihrem DOM-Baum nur die, die sichtbar sind und ein paar auf beiden Seiten der derzeit sichtbaren Tweetgruppe. Verbergen oder entfernen Sie den Rest. Das Speichern der Daten in einem JavaScript-Objekt statt auf das DOM zuzugreifen, kann die Performance Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als Präsentation Ihrer Daten, nicht als die Daten selbst. Das bedeutet nicht, dass Sie nicht einfach HTML als Quelle verwenden können; lesen Sie es nur einmal und scrollen 10 Elemente, ändern Sie den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnismeldung, anstatt 100 Elemente zu verschieben, die nicht sichtbar sind. Der gleiche Trick gilt für Spiele mit Sprites: Wenn sie nicht auf dem Bildschirm sind, besteht keine Notwendigkeit, sie zu pollieren. Stattdessen verwenden Sie die Offscreen-Elemente erneut als neue, die hereinkommen.

## Allgemeine Anwendungleistungsanalyse

Firefox, Chrome und andere Browser verfügen über eingebaute Tools, die Ihnen helfen können, das langsame Rendern einer Seite zu diagnostizieren. Insbesondere wird der [Firefox Net Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) eine präzise Timeline anzeigen, wann jede Netzwerk-Anfrage auf Ihrer Seite geschieht, wie groß sie ist und wie lange sie dauert.

![Das Firefox-Netzwerk-Monitor zeigt Abrufanfragen, mehrere Dateien und verschiedene Ladezeiten jedes Ressourcen auf einem Graphen an.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der lange Zeit zum Ausführen benötigt, wird der [JavaScript-Profilierer](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen anzeigen:

![Der Firefox-JavaScript-Profilierer zeigt ein abgeschlossenes Profil 1 an.](javascript-profiler.png)

Der [Eingebauter Gecko-Profilierer](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Tool, das noch detailliertere Informationen darüber bietet, welche Teile des Browser-Codes während des Profilens langsam laufen. Dies ist etwas komplizierter zu verwenden, bietet jedoch viele nützliche Details.

![Ein eingebautes Gecko-Profilierfenster zeigt viele Netzwerkinformationen.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Tools mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere dauern Dutzende oder Hunderte von Netzwerk-Anfragen länger in mobilen Browsern. Das Rendern von großen Bildern und CSS-Verläufen kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, da die mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite zu nutzen. Für nützliche allgemeine Tipps zur Leistung von mobilen Webanwendungen, sehen Sie sich Maximiliano Firtman's [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance) Vortrag an.

### Testfälle und das Einreichen von Fehlern

Wenn Ihnen die Entwicklerwerkzeuge von Firefox und Chrome nicht helfen, ein Problem zu finden, oder wenn sie scheinbar darauf hinweisen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall zu erzeugen, der das Problem maximal isoliert. Das hilft oft bei der Diagnose von Problemen.

Überprüfen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite (einschließlich aller darauf eingebetteten Bilder/Stylesheets/Skripte) speichern und laden. Entfernen Sie ggf. private Informationen aus den statischen Dateien und senden Sie sie dann zur Hilfe an andere weiter (zum Beispiel durch eine [Bugzilla](https://bugzilla.mozilla.org/) Meldung, oder hosten Sie es auf einem Server und teilen die URL). Sie sollten auch alle Profilinformationen teilen, die Sie mit den oben genannten Tools gesammelt haben.
