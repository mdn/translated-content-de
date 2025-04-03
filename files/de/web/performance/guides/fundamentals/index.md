---
title: Leistungsgrundlagen
slug: Web/Performance/Guides/Fundamentals
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Leistung bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Leistung ist, wie die Browser-Plattform dazu beiträgt, diese zu verbessern, und welche Werkzeuge und Prozesse Sie nutzen können, um sie zu testen und zu verbessern.

## Was ist Leistung?

Letztendlich ist die vom Benutzer wahrgenommene Leistung die einzige Leistung, die zählt. Benutzer geben dem System durch Berührungen, Bewegungen und Sprache Eingaben. Im Gegenzug nehmen sie Ausgaben durch Sehen, Berührungen und Hören wahr. Leistung ist die Qualität der Systemausgaben als Reaktion auf Benutzereingaben.

Unter sonst gleichen Bedingungen verliert Code, der für ein anderes Ziel als die vom Benutzer wahrgenommene Leistung (im Folgenden UPP) optimiert ist, im Wettbewerb mit Code, der für UPP optimiert ist. Benutzer bevorzugen beispielsweise eine reaktionsschnelle, flüssige App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckeligen, nicht reaktionsfähigen App, die 100.000.000 Transaktionen pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Metriken zu optimieren, aber echte UPP-Ziele kommen zuerst.

Die nächsten Abschnitte betonen und diskutieren wesentliche Leistungsmetriken.

### Reaktionsfähigkeit

Reaktionsfähigkeit bedeutet, wie schnell das System Ausgaben (möglicherweise mehrere) als Reaktion auf Benutzereingaben liefert. Zum Beispiel erwartet ein Benutzer, dass sich die Pixel auf eine bestimmte Weise ändern, wenn er auf den Bildschirm tippt. Für diese Interaktion ist die Reaktionsfähigkeitsmetrik die Zeit, die zwischen dem Tippen und der Pixeländerung vergeht.

Die Reaktionsfähigkeit beinhaltet manchmal mehrere Feedback-Stufen. Der Anwendungsstart ist ein besonders wichtiger Fall, der weiter unten ausführlicher besprochen wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und wütend werden, wenn sie ignoriert werden. Ihre App ignoriert den Benutzer jede Sekunde, in der sie nicht auf die Eingabe des Benutzers reagiert.

### Bildfrequenz

Bildfrequenz ist die Rate, mit der das System die dem Benutzer angezeigten Pixel ändert. Dies ist ein bekanntes Konzept: Jeder bevorzugt Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen, die 10 Bilder pro Sekunde anzeigen, selbst wenn sie nicht erklären können, warum.

Bildfrequenz ist als "Quality of Service"-Metrik wichtig. Computerdisplays sind so konzipiert, dass sie die Augen der Benutzer täuschen, indem sie ihnen Photonen liefern, die die Realität nachahmen. Zum Beispiel reflektiert Papier, das mit Text bedruckt ist, Photonen in einem bestimmten Muster in die Augen des Benutzers. Durch die Manipulation von Pixeln sendet eine Lese-App Photonen in einem ähnlichen Muster aus, um die Augen des Benutzers zu "täuschen".

Wie Ihr Gehirn schlussfolgert, ist Bewegung nicht ruckartig und diskret, sondern "aktualisiert" sich sanft und kontinuierlich. (Stroboskope machen Spaß, weil sie das umkehren und Ihr Gehirn von Eingaben verhungern lassen, um die Illusion einer diskreten Realität zu erzeugen). Auf einem Computerdisplay fördert eine höhere Bildfrequenz eine getreuere Nachahmung der Realität.

> [!NOTE]
> Menschen können in der Regel keine Unterschiede in der Bildfrequenz über 60Hz wahrnehmen. Deshalb sind die meisten modernen elektronischen Displays darauf ausgelegt, mit dieser Rate zu aktualisieren. Ein Fernseher wirkt beispielsweise wahrscheinlich ruckartig und unrealistisch für einen Kolibri.

### Speicherverbrauch

**Speicherverbrauch** ist eine weitere wichtige Metrik. Im Gegensatz zur Reaktionsfähigkeit und Bildfrequenz nehmen Benutzer den Speicherverbrauch nicht direkt wahr, aber der Speicherverbrauch approximiert den "Benutzerzustand" nah. Ein ideales System würde zu jeder Zeit 100% des Benutzerzustands beibehalten: Alle Anwendungen im System würden gleichzeitig laufen und alle Anwendungen würden den vom Benutzer erzeugten Zustand beim letzten Mal, als der Benutzer mit der Anwendung interagierte, beibehalten (Anwendungszustand wird im Computerspeicher gespeichert, weshalb die Annäherung nah ist).

Daraus ergibt sich eine wichtige, aber kontraintuitive Folgerung: Ein gut gestaltetes System maximiert nicht die Menge an **freiem** Speicher. Speicher ist eine Ressource, und freier Speicher ist eine ungenutzte Ressource. Vielmehr ist ein gut gestaltetes System darauf optimiert, so viel Speicher wie möglich zu **nutzen**, um den Benutzerzustand aufrechtzuerhalten, während andere UPP-Ziele erreicht werden.

Das bedeutet nicht, dass das System Speicher **verschwenden** sollte. Wenn ein System mehr Speicher als nötig verwendet, um einen bestimmten Benutzerzustand aufrechtzuerhalten, verschwendet es eine Ressource, die es verwenden könnte, um einen anderen Benutzerzustand zu bewahren. In der Praxis kann kein System alle Benutzerzustände aufrechterhalten. Intelligente Zuordnung von Speicher an den Benutzerzustand ist ein wichtiges Anliegen, auf das wir weiter unten näher eingehen werden.

### Energieverbrauch

Die letzte hier besprochene Metrik ist der **Energieverbrauch**. Wie der Speicherverbrauch wird der Energieverbrauch von Benutzern nur indirekt wahrgenommen, nämlich durch die Frage, wie lange ihre Geräte alle anderen UPP-Ziele aufrechterhalten können. Um UPP-Ziele zu erreichen, muss das System nur die minimale erforderliche Energie verwenden.

Der verbleibende Teil dieses Dokuments wird die Leistung im Hinblick auf diese Metriken diskutieren.

## Plattformoptimierungen zur Leistungssteigerung

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie Firefox/Gecko im Allgemeinen zur Leistung beiträgt, unterhalb der Ebene aller Anwendungen. Aus der Perspektive eines Entwicklers oder Benutzers beantwortet dies die Frage: "Was leistet die Plattform für Sie?"

### Web-Technologien

Die Web-Plattform bietet viele Werkzeuge, einige davon besser für bestimmte Aufgaben geeignet als andere. Die gesamte Anwendungslogik wird in JavaScript geschrieben. Um Grafiken anzuzeigen, können Entwickler HTML oder CSS (d.h. hochstufige deklarative Sprachen) verwenden oder die von dem {{ htmlelement("canvas") }}-Element angebotenen niedrigstufigen imperativen Schnittstellen (einschließlich [WebGL](/de/docs/Web/API/WebGL_API)) nutzen. Irgendwo "zwischen" HTML/CSS und Canvas befindet sich [SVG](/de/docs/Web/SVG), das einige Vorteile von beidem bietet.

HTML und CSS steigern die Produktivität erheblich, manchmal auf Kosten der Bildfrequenz oder der Pixelkontrolle über das Rendering. Text und Bilder fügen sich automatisch neu, UI-Elemente erhalten automatisch das Systemthema und das System bietet "eingebaute" Unterstützung für einige Anwendungsfälle, an die Entwickler möglicherweise zunächst nicht denken, wie Displays mit unterschiedlicher Auflösung oder von rechts nach links geschriebene Sprachen.

Das `canvas`-Element bietet Entwicklern direkt einen Pixelpuffer, auf dem sie zeichnen können. Dies gibt Entwicklern die Pixelkontrolle über das Rendering und die präzise Kontrolle über die Bildfrequenz, aber jetzt müssen die Entwickler mit mehreren Auflösungen und Ausrichtungen, von rechts nach links geschriebene Sprachen und so weiter umgehen. Entwickler zeichnen auf Leinwände entweder mit einer vertrauten 2D-Zeichen-API oder mit WebGL, einer "nahe an der Hardware" Bindung, die größtenteils OpenGL ES 2.0 folgt.

### Gecko-Rendering

Die JavaScript-Engine von Gecko unterstützt die Just-in-Time (JIT) Kompilierung. Dies ermöglicht Anwendungslogik eine vergleichbare Leistung zu anderen virtuellen Maschinen - wie Java-virtuellen Maschinen - zu erbringen und in einigen Fällen sogar nahe an "nativem Code".

Die Grafikpipeline in Gecko, die HTML, CSS und Canvas untermauert, ist auf mehrere Arten optimiert. Der HTML/CSS-Layout- und Grafikcode in Gecko reduziert die Ungültigmachung und Neulackierung für gängige Fälle wie das Scrollen; Entwickler erhalten diese Unterstützung "kostenlos". Von Gecko sowohl "automatisch" als auch von Anwendungen manuell gezeichnete Pixelpuffer minimieren Kopien, wenn sie in den Anzeigepuffer gezeichnet werden. Dies geschieht durch das Vermeiden von Zwischenspeichern, da sie einen Overhead erzeugen würden (wie beispielsweise pro Anwendung "Back Buffers" in vielen anderen Betriebssystemen), und durch die Verwendung von speziellem Speicher für Grafikpuffer, der direkt von der Kompositionshardware genutzt werden kann. Komplexe Szenen werden zur Maximierung der Leistung mit der GPU des Geräts gerendert. Um den Energieverbrauch zu verbessern, werden einfache Szenen mit spezieller dedizierter Kompositionshardware gerendert, während die GPU im Leerlauf bleibt oder abgeschaltet wird.

Vollständig statische Inhalte sind die Ausnahme und nicht die Regel für umfangreiche Anwendungen. Umfangreiche Anwendungen verwenden dynamische Inhalte mit {{ cssxref("animation") }} und {{ cssxref("transition") }}-Effekten. Übergänge und Animationen sind für Anwendungen besonders wichtig: Entwickler können CSS verwenden, um kompliziertes Verhalten mit einer einfachen, hochstufigen Syntax zu deklarieren. Im Gegenzug ist die Grafik-Pipeline von Gecko stark optimiert, um häufige Animationen effizient zu rendern. Häufige Animationen werden an die Systemkomposition weitergegeben, die sie performant und energieeffizient rendern kann.

Die Startleistung einer App ist genauso wichtig wie ihre Laufzeitleistung. Gecko ist optimiert, um eine Vielzahl von Inhalten effizient zu laden: das gesamte Web! Viele Jahre Verbesserungen, die auf diesen Inhalt abzielen, wie paralleles HTML-Parsing, intelligente Planung von Umbrüchen und Bilddecodierung, intelligente Layoutalgorithmen usw., führen zu Verbesserungen von Webanwendungen in Firefox.

## Anwendungsleistung

Dieser Abschnitt richtet sich an Entwickler, die die Frage stellen: "Wie kann ich meine App schnell machen?"

### Startleistung

Der Start einer Anwendung wird im Allgemeinen durch drei vom Benutzer wahrgenommene Ereignisse unterbrochen:

- Das erste ist das **Erstemalige Zeichnen** der Anwendung — der Zeitpunkt, an dem genügend Anwendungsressourcen geladen wurden, um einen ersten Frame zu zeichnen.
- Das zweite ist, wenn die Anwendung **interaktiv** wird — zum Beispiel, wenn Benutzer in der Lage sind, auf eine Schaltfläche zu tippen und die Anwendung darauf reagiert.
- Das letzte Ereignis ist das **komplette Laden** — zum Beispiel, wenn alle Alben des Benutzers in einem Musikplayer aufgelistet sind.

Der Schlüssel zu einem schnellen Start ist, sich zwei Dinge zu merken: UPP ist alles, was zählt, und es gibt einen "kritischen Pfad" zu jedem oben genannten, vom Benutzer wahrgenommenen Ereignis. Der kritische Pfad ist genau und nur der Code, der ausgeführt werden muss, um das Ereignis zu erzeugen.

Zum Beispiel, um den ersten Frame einer Anwendung zu zeichnen, der visuell einige HTML- und CSS-Styles für dieses HTML umfasst:

1. Das HTML muss analysiert werden.
2. Das DOM für dieses HTML muss konstruiert werden.
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und decodiert werden.
4. Die CSS-Styles müssen auf dieses DOM angewendet werden.
5. Das gestylte Dokument muss neu umbrochen werden.

Nirgendwo in dieser Liste steht "die JS-Datei laden, die für ein selten verwendetes Menü benötigt wird", "das Bild für die Bestenliste abrufen und decodieren", usw. Diese Arbeitspunkte stehen nicht auf dem kritischen Pfad, um den ersten Frame zu zeichnen.

Es scheint offensichtlich, aber um ein vom Benutzer wahrgenommenes Startereignis schneller zu erreichen, besteht der Haupt-"Trick" darin, _nur den Code auf dem kritischen Pfad_ auszuführen. Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Web-Plattform ist hochdynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Web-Plattform erlaubt das dynamische Laden von Code, HTML, CSS, Bildern und anderen Ressourcen. Diese Funktionen können genutzt werden, um Arbeiten, die außerhalb des kritischen Pfades liegen, zu verzögern, indem unnötige Inhalte "faul" einige Zeit nach dem Start geladen werden.

Ein weiteres Problem, das den Start verzögern kann, ist die Leerlaufzeit, die durch das Warten auf Antworten auf Anfragen (wie zum Beispiel Datenbankladevorgänge) verursacht wird. Um dieses Problem zu vermeiden, sollten Anwendungen Anfragen so früh wie möglich beim Start ausführen (das nennt man "Front-Loading"). Wenn dann später die Daten benötigt werden, sind sie hoffentlich bereits verfügbar und die Anwendung muss nicht warten.

> [!NOTE]
> Für viel mehr Informationen zur Verbesserung der Startleistung lesen Sie [Optimizing startup performance](/de/docs/Web/Performance/Guides/Optimizing_startup_performance).

In der gleichen Richtung gilt, dass lokal zwischengespeicherte, statische Ressourcen viel schneller geladen werden können als dynamische Daten, die über hochgradig verzögerungsanfällige, bandbreitenarme Mobilfunknetze abgerufen werden. Netzwerkabfragen sollten niemals auf dem kritischen Pfad zu einem frühen Anwendungssstart sein. Lokale Zwischenspeicherung/offline Apps können über [Service Workers](/de/docs/Web/API/Service_Worker_API) erreicht werden. Siehe [Offline läuft und im Hintergrund](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation), um einen Leitfaden zur Verwendung von Service Workers für Offline- und Hintergrund-Synchronisationsfunktionen zu erhalten.

### Bildfrequenz

Das erste wichtige für eine hohe Bildfrequenz ist, das richtige Werkzeug zu wählen. Verwenden Sie HTML und CSS, um hauptsächlich statische, gescrollte und selten animierte Inhalte umzusetzen. Verwenden Sie Canvas, um hochdynamische Inhalte zu implementieren, wie Spiele, die eine enge Kontrolle über das Rendering benötigen und kein Thema benötigen.

Für Inhalte, die mit Canvas gezeichnet werden, liegt es am Entwickler, die Ziele für die Bildfrequenz zu erreichen: Sie haben direkte Kontrolle darüber, was gezeichnet wird.

Für HTML- und CSS-Inhalte besteht der Weg zu einer hohen Bildfrequenz darin, die richtigen Primitiven zu verwenden. Firefox ist hoch optimiert, um beliebige Inhalte zu scrollen; das ist in der Regel kein Problem. Aber oft führt der Kompromiss einiger Allgemeingültigkeit und Qualität für Geschwindigkeit, wie die Verwendung einer statischen Wiedergabe anstelle eines CSS-Radialverlaufs, dazu, dass die Scroll-Bildfrequenz ein Ziel überschreitet. CSS [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) erlauben es, diese Kompromisse nur auf Geräte zu beschränken, die sie benötigen.

Viele Anwendungen verwenden Übergänge oder Animationen durch "Seiten" oder "Panels". Zum Beispiel, wenn der Benutzer auf eine "Einstellungen"-Schaltfläche tippt, um zu einem Konfigurationsscreen der Anwendung zu wechseln, oder ein Einstellungsmenü "aufpoppt". Firefox ist stark optimiert, um Szenen zu übergehen und zu animieren, die:

- Seiten/Panels verwenden, die ungefähr die Größe des Gerätebildschirms oder kleiner sind.
- Die CSS `transform` und `opacity` Eigenschaften übergehen/animieren.

Übergänge und Animationen, die diesen Richtlinien entsprechen, können an die Systemkomposition übergeben und maximal effizient ausgeführt werden.

### Speicher- und Energieverbrauch

Die Verbesserung des Speicher- und Energieverbrauchs ist ein ähnliches Problem wie die Beschleunigung des Starts: keine unnötige Arbeit erledigen oder selten genutzte UI-Ressourcen faul laden. Verwenden Sie effiziente Datenstrukturen und stellen Sie sicher, dass Ressourcen wie Bilder gut optimiert sind.

Moderne Prozessoren können in einen niedrigeren Energiemodus wechseln, wenn sie größtenteils im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen laufen lassen, verhindern, dass Prozessoren in den Energiesparmodus wechseln. Energieeffiziente Anwendungen sollten dies nicht tun.

Wenn Anwendungen in den Hintergrund wechseln, wird ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis auf ihren Dokumenten ausgelöst. Dieses Ereignis ist ein Freund des Entwicklers; Anwendungen sollten darauf achten.

### Spezifische Codierungstipps zur Anwendungsleistung

Die folgenden praktischen Tipps helfen, einen oder mehrere der oben diskutierten Faktoren der Anwendungsleistung zu verbessern.

#### Verwenden Sie CSS-Animationen und -Übergänge

Statt die `animate()`-Funktion einer Bibliothek zu verwenden, die wahrscheinlich viele schlecht performante Technologien verwendet ([`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder `top`/`left` Positionierung, zum Beispiel), verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations). In vielen Fällen können Sie sogar [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) verwenden, um die Aufgabe zu erledigen. Dies funktioniert gut, da der Browser darauf ausgelegt ist, diese Effekte zu optimieren und die GPU zu verwenden, um sie fließend mit minimalen Auswirkungen auf die Prozessorleistung zu bearbeiten. Ein weiterer Vorteil ist, dass Sie diese Effekte in CSS zusammen mit dem Rest des Erscheinungsbilds Ihrer App definieren können, unter Verwendung einer standardisierten Syntax.

CSS-Animationen geben Ihnen eine sehr feingliedrige Kontrolle über Ihre Effekte unter Verwendung von [keyframes](/de/docs/Web/CSS/@keyframes), und Sie können sogar während des Animationsprozesses ausgelöste Ereignisse beobachten, um andere Aufgaben zu handhaben, die zu bestimmten Punkten im Animationsprozess durchgeführt werden müssen. Sie können diese Animationen problemlos mit {{cssxref(":hover")}}, {{cssxref(":focus")}}, oder {{cssxref(":target")}} auslösen, oder durch dynamisches Hinzufügen und Entfernen von Klassen an Elternelementen.

Wollen Sie Animationen spontan erstellen oder sie in [JavaScript](/de/docs/Web/JavaScript) modifizieren, hat James Long eine einfache Bibliothek dafür geschrieben, die [CSS-animations.js](https://github.com/jlongster/css-animations.js/) heißt.

#### Verwenden Sie CSS-Transformationen

Anstatt absolute Positionierung zu optimieren und all die Mathematik selbst zu ändern, verwenden Sie die {{cssxref("transform")}} CSS-Eigenschaft, um die Position, Skalierung usw. Ihrer Inhalte anzupassen. Alternativ können Sie die individuellen Transformationseigenschaften von {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}} verwenden. Der Grund ist, einmal mehr, Hardware-Beschleunigung. Der Browser kann diese Aufgaben auf Ihrer GPU erledigen, während die CPU andere Aufgaben übernimmt.

Darüber hinaus geben Ihnen Transformationen Fähigkeiten, die Sie möglicherweise sonst nicht hätten. Sie können nicht nur Elemente im 2D-Raum verschieben, sondern auch in drei Dimensionen transformieren, schräg stellen und rotieren usw. Paul Irish hat eine [gründliche Analyse der Vorteile von `translate()`](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012) aus Leistungssicht vorgelegt. Im Allgemeinen haben Sie jedoch die gleichen Vorteile wie bei der Verwendung von CSS-Animationen: Sie verwenden das richtige Tool für die Aufgabe und überlassen die Optimierung dem Browser. Sie verwenden auch eine leicht erweiterbare Methode zur Positionierung von Elementen – etwas, das viel zusätzlichen Code benötigt, wenn Sie Translations mit `top` und `left`-Positionierung simulieren. Ein weiterer Bonus ist, dass es wie die Arbeit in einem `canvas`-Element ist.

> [!NOTE]
> Sie müssen möglicherweise eine `translateZ(0.1)`-Transformation anhängen, wenn Sie hardwarebeschleunigte CSS-Animationen erzielen möchten, je nach Plattform. Wie oben erwähnt, kann dies die Leistung verbessern. Bei übermäßigem Gebrauch können jedoch Probleme beim Speicherverbrauch auftreten. Was Sie in dieser Hinsicht tun, bleibt Ihnen überlassen – führen Sie einige Tests durch und finden Sie heraus, was für Ihre spezielle App am besten ist.

#### Verwenden Sie `requestAnimationFrame()` statt `setInterval()`

Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code mit einer angenommenen Bildrate aus, die unter den aktuellen Umständen möglicherweise nicht möglich ist. Es sagt dem Browser, die Ergebnisse zu rendern, selbst wenn der Browser nichts tatsächlich zeichnet; das heißt, während die Video-Hardware den nächsten Anzeigedurchlauf noch nicht erreicht hat. Dies vergeudet Prozessorzeit und kann sogar die Batterielebensdauer des Geräts des Benutzers verkürzen.

Stattdessen sollten Sie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden. Dies wartet, bis der Browser tatsächlich bereit ist, den nächsten Frame Ihrer Animation zu erstellen, und stört nicht, wenn die Hardware tatsächlich nichts zeichnen wird. Ein weiterer Vorteil dieser API ist, dass Animationen nicht laufen, während Ihre App nicht auf dem Bildschirm sichtbar ist (zum Beispiel, wenn sie im Hintergrund und eine andere Aufgabe aktiv ist). Dies wird die Batterielebensdauer verlängern und verhindern, dass Benutzer Ihren Namen in den Nachthimmel fluchen.

#### Machen Sie Ereignisse sofort

Als alte, barrierefreiheitsbewusste Webentwickler lieben wir Klick-Ereignisse, da sie auch die Tastatureingabe unterstützen. Auf mobilen Geräten sind diese zu langsam. Sie sollten [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchend`](/de/docs/Web/API/Element/touchend_event) verwenden. Der Grund dafür ist, dass diese keine Verzögerung haben, die die Interaktion mit der App träge erscheinen lässt. Wenn Sie zuerst auf Touch-Unterstützung testen, opfern Sie auch nicht die Barrierefreiheit. Zum Beispiel verwendet die Financial Times eine Bibliothek namens [fastclick](https://github.com/ftlabs/fastclick) für diesen Zweck, die Ihnen zur Verfügung steht.

#### Halten Sie Ihre Benutzeroberfläche einfach

Ein großes Leistungsproblem, das wir bei HTML-Apps gefunden haben, war, dass das Bewegen vieler [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente alles träge macht – besonders, wenn sie viele Verläufe und Schlagschatten enthalten. Es hilft sehr, Ihr Aussehen und Ihre Funktionalität zu vereinfachen und ein Proxy-Element zu bewegen, wenn Sie ziehen und ablegen.

Wenn Sie zum Beispiel eine lange Liste von Elementen haben (nehmen wir an, Tweets), bewegen Sie sie nicht alle. Behalten Sie stattdessen in Ihrem DOM-Baum nur die sichtbaren und einige auf jeder Seite der derzeit sichtbaren Tweets. Verbergen oder entfernen Sie den Rest. Wenn Sie die Daten in einem JavaScript-Objekt anstelle des Zugriffs auf das DOM halten, kann dies die Leistung Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als Darstellung Ihrer Daten, nicht als die Daten selbst. Das bedeutet nicht, dass Sie nicht direktes HTML als Quelle verwenden können; lesen Sie es einfach ein einmal und scrollen Sie dann 10 Elemente, indem Sie den Inhalt des ersten und letzten entsprechend Ihrer Position in der Ergebnisliste ändern, anstatt 100 Elemente zu bewegen, die nicht sichtbar sind. Der gleiche Trick gilt für Sprites in Spielen: Wenn sie nicht auf dem Bildschirm sind, besteht keine Notwendigkeit, sie abzufragen. Verwenden Sie stattdessen Elemente, die vom Bildschirm scrollen, als neue, die hereinkommen.

## Allgemeine Leistungsanalyse der Anwendung

Firefox, Chrome und andere Browser enthalten integrierte Tools, die Ihnen helfen können, langsames Seiten-Rendering zu diagnostizieren. Insbesondere zeigt der [Netzwerkmonitor von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) eine genaue Zeitleiste an, wann jede Netzwerkanfrage auf Ihrer Seite geschieht, wie groß sie ist und wie lange es dauert.

![Der Firefox-Netzwerkmonitor zeigt GET-Anfragen, mehrere Dateien und unterschiedliche Zeiten an, die zum Laden jeder Ressource auf einem Diagramm benötigt werden.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, der lange zum Ausführen benötigt, wird das [JavaScript-Profiling-Tool](/de/docs/Web/Performance/Optimizing_JavaScript_performance) die langsamsten Codezeilen identifizieren:

![Das Firefox JavaScript-Profiling-Tool zeigt ein vollständiges Profil 1.](javascript-profiler.png)

Das [eingebaute Gecko-Profiling-Tool](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Werkzeug, das noch detailliertere Informationen darüber liefert, welche Teile des Browsercodes langsam laufen, während das Profiling-Tool läuft. Dies ist etwas komplexer zu verwenden, liefert jedoch viele nützliche Details.

![Ein eingebautes Gecko-Profiling-Fenster zeigt viele Netzwerkinformationen an.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Tools mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Besonders das Ausführen von Dutzenden oder Hunderten von Netzwerkanfragen dauert in mobilen Browsern länger. Das Rendern großer Bilder und CSS-Verläufe kann ebenfalls länger dauern. Das Herunterladen großer Dateien kann länger dauern, selbst über ein schnelles Netzwerk, da die mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite zu nutzen. Für nützliche allgemeine Tipps zur mobilen Webleistung werfen Sie einen Blick auf Maximiliano Firtmans [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance).

### Testfälle und Fehlerberichte einreichen

Wenn die Firefox- und Chrome-Entwicklertools Ihnen nicht helfen, ein Problem zu finden, oder sie scheinen anzuzeigen, dass der Webbrowser das Problem verursacht hat, versuchen Sie, einen reduzierten Testfall bereitzustellen, der das Problem maximiert isoliert. Dies hilft oft bei der Diagnostizierung von Problemen.

Überprüfen Sie, ob Sie das Problem durch Speichern und Laden einer statischen Kopie einer HTML-Seite (einschließlich aller eingebetteten Bilder/Stylesheets/Skripte) reproduzieren können. Wenn ja, bearbeiten Sie die statischen Dateien, um private Informationen zu entfernen, und senden Sie sie dann an andere zur Hilfe (zum Beispiel einen [Bugzilla](https://bugzilla.mozilla.org/)-Bericht einreichen oder die URL auf einem Server bereitstellen und teilen). Sie sollten auch alle mit den oben aufgeführten Tools gesammelten Profilinformationen teilen.
