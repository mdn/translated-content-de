---
title: Grundlagen der Performance
slug: Web/Performance/Guides/Fundamentals
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

Performance bedeutet Effizienz. Im Kontext von Open Web Apps erklärt dieses Dokument allgemein, was Performance ist, wie die Browser-Plattform zu ihrer Verbesserung beiträgt und welche Werkzeuge und Verfahren Sie verwenden können, um sie zu testen und zu verbessern.

## Was ist Performance?

Letztlich zählt nur die von Nutzern wahrgenommene Performance. Nutzer geben Eingaben durch Berührung, Bewegung und Sprache in das System ein. Im Gegenzug nehmen sie Ausgaben über Sehen, Tasten und Hören wahr. Performance beschreibt die Qualität der Systemausgaben als Reaktion auf Nutzereingaben.

Unter sonst gleichen Bedingungen ist Code, der für ein anderes Ziel als die von Nutzern wahrgenommene Performance optimiert ist (im Folgenden UPP, von „user-perceived performance“), gegenüber Code im Nachteil, der für UPP optimiert ist. Nutzer bevorzugen beispielsweise eine reaktionsschnelle, flüssig laufende App, die nur 1.000 Datenbanktransaktionen pro Sekunde verarbeitet, gegenüber einer ruckelnden, kaum reagierenden App, die 100.000.000 Transaktionen pro Sekunde verarbeitet. Natürlich ist es keineswegs sinnlos, andere Kennzahlen zu optimieren, doch konkrete UPP-Ziele haben Vorrang.

In den nächsten Abschnitten werden wesentliche Performance-Kennzahlen vorgestellt und erläutert.

### Reaktionsfähigkeit

Reaktionsfähigkeit beschreibt, wie schnell das System auf Nutzereingaben mit Ausgaben reagiert – möglicherweise mit mehreren. Wenn ein Nutzer beispielsweise auf den Bildschirm tippt, erwartet er, dass sich die Pixel auf eine bestimmte Weise ändern. Die Kennzahl für die Reaktionsfähigkeit bei dieser Interaktion ist die Zeit zwischen dem Tippen und der Änderung der Pixel.

Reaktionsfähigkeit umfasst mitunter mehrere Stufen der Rückmeldung. Der Start einer Anwendung ist ein besonders wichtiger Fall, der weiter unten ausführlicher behandelt wird.

Reaktionsfähigkeit ist wichtig, weil Menschen frustriert und verärgert reagieren, wenn sie ignoriert werden. Ihre App ignoriert den Nutzer in jeder Sekunde, in der sie nicht auf seine Eingabe reagiert.

### Bildrate

Die Bildrate gibt an, wie häufig das System die für den Nutzer angezeigten Pixel ändert. Das ist ein vertrautes Konzept: Jeder bevorzugt beispielsweise Spiele, die 60 Bilder pro Sekunde anzeigen, gegenüber solchen mit 10 Bildern pro Sekunde – selbst wenn er nicht erklären kann, warum.

Die Bildrate ist eine wichtige Kennzahl für die „Dienstqualität“. Computerbildschirme sind darauf ausgelegt, die Augen der Nutzer zu „täuschen“, indem sie ihnen Lichtteilchen liefern, die die Wirklichkeit nachahmen. Beispielsweise reflektiert mit Text bedrucktes Papier Lichtteilchen in einem bestimmten Muster in die Augen des Nutzers. Durch die Steuerung von Pixeln erzeugt eine Lese-App Lichtteilchen in einem ähnlichen Muster und „täuscht“ so die Augen des Nutzers.

Wie Ihr Gehirn erkennt, ist Bewegung nicht ruckartig und in einzelne Schritte unterteilt, sondern verändert sich gleichmäßig und kontinuierlich. (Stroboskoplichter machen Spaß, weil sie dieses Prinzip umkehren: Sie entziehen dem Gehirn Eingaben und erzeugen so die Illusion einer in Einzelschritte unterteilten Wirklichkeit.) Auf einem Computerbildschirm sorgt eine höhere Bildrate für eine wirklichkeitsgetreuere Darstellung.

> [!NOTE]
> Menschen können Unterschiede bei Bildraten über 60 Hz normalerweise nicht wahrnehmen. Deshalb sind die meisten modernen elektronischen Bildschirme auf eine Bildwiederholfrequenz von 60 Hz ausgelegt. Einem Kolibri würde das Bild eines Fernsehers beispielsweise wahrscheinlich ruckelig und unrealistisch erscheinen.

### Speichernutzung

Die **Speichernutzung** ist eine weitere wichtige Kennzahl. Anders als Reaktionsfähigkeit und Bildrate nehmen Nutzer die Speichernutzung nicht unmittelbar wahr. Sie steht aber in engem Zusammenhang damit, wie viel vom Zustand ihrer Anwendungen erhalten bleibt. Ein ideales System würde jederzeit den gesamten Zustand aller Nutzeranwendungen bewahren: Alle Anwendungen im System würden gleichzeitig laufen und jeweils den Zustand behalten, der bei der letzten Interaktion des Nutzers mit ihnen entstanden ist. Dieser Anwendungszustand wird im Arbeitsspeicher gespeichert – daher besteht der enge Zusammenhang.

Daraus folgt eine wichtige, aber zunächst kontraintuitive Erkenntnis: Ein gut konzipiertes System maximiert nicht die Menge an **freiem** Arbeitsspeicher. Arbeitsspeicher ist eine Ressource, und freier Arbeitsspeicher ist eine ungenutzte Ressource. Stattdessen ist ein gut konzipiertes System darauf optimiert, **so viel Arbeitsspeicher wie möglich zu nutzen**, um den Anwendungszustand der Nutzer zu erhalten und zugleich andere UPP-Ziele zu erfüllen.

Das bedeutet nicht, dass das System Arbeitsspeicher **verschwenden** sollte. Wenn ein System mehr Arbeitsspeicher als nötig verwendet, um einen bestimmten Zustand zu erhalten, verschwendet es eine Ressource, mit der es einen anderen Zustand erhalten könnte. In der Praxis kann kein System sämtliche Zustände aller Nutzeranwendungen erhalten. Arbeitsspeicher intelligent dafür zuzuweisen, ist ein wichtiges Thema, auf das wir weiter unten ausführlicher eingehen.

### Energieverbrauch

Die letzte hier behandelte Kennzahl ist der **Energieverbrauch**. Wie die Speichernutzung nehmen Nutzer auch den Energieverbrauch nur indirekt wahr: daran, wie lange ihre Geräte alle anderen UPP-Ziele erfüllen können. Um diese Ziele zu erreichen, darf das System nur so viel Energie verbrauchen wie nötig.

Im weiteren Verlauf dieses Dokuments wird Performance anhand dieser Kennzahlen betrachtet.

## Performance-Optimierungen der Plattform

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie Firefox/Gecko allgemein zur Performance beiträgt – unterhalb der Ebene einzelner Anwendungen. Aus Sicht von Entwicklern oder Nutzern beantwortet er die Frage: „Was übernimmt die Plattform für Sie?“

### Webtechnologien

Die Webplattform stellt viele Werkzeuge bereit, von denen einige für bestimmte Aufgaben besser geeignet sind als andere. Die gesamte Anwendungslogik wird in JavaScript geschrieben. Für die Darstellung von Grafiken können Entwickler HTML oder CSS verwenden – also deklarative Sprachen auf hoher Abstraktionsebene – oder auf die imperativen Schnittstellen auf niedriger Abstraktionsebene zurückgreifen, die das Element {{ htmlelement("canvas") }} bereitstellt (einschließlich [WebGL](/de/docs/Web/API/WebGL_API)). Etwa „zwischen“ HTML/CSS und Canvas liegt [SVG](/de/docs/Web/SVG), das einige Vorteile beider Ansätze bietet.

HTML und CSS steigern die Produktivität erheblich, manchmal jedoch zulasten der Bildrate oder der pixelgenauen Kontrolle über das Rendering. Text und Bilder werden automatisch neu angeordnet, UI-Elemente übernehmen automatisch das Systemdesign, und das System bietet „integrierte“ Unterstützung für Anwendungsfälle, an die Entwickler anfangs möglicherweise nicht denken, etwa Bildschirme mit unterschiedlichen Auflösungen oder Sprachen mit Schreibrichtung von rechts nach links.

Das Element `canvas` stellt Entwicklern direkt einen Pixelpuffer zum Zeichnen zur Verfügung. Dadurch können sie das Rendering pixelgenau steuern und die Bildrate präzise kontrollieren. Allerdings müssen sie sich nun selbst um unterschiedliche Auflösungen und Ausrichtungen, Sprachen mit Schreibrichtung von rechts nach links und Ähnliches kümmern. Entwickler zeichnen auf Canvases entweder mit einer vertrauten 2D-Zeichen-API oder mit WebGL, einer hardwarenahen Schnittstelle, die sich weitgehend an OpenGL ES 2.0 orientiert.

### Rendering in Gecko

Die JavaScript-Engine von Gecko unterstützt Just-in-Time-Kompilierung (JIT). Dadurch kann die Anwendungslogik eine Performance erreichen, die mit anderen virtuellen Maschinen – etwa Java Virtual Machines – vergleichbar ist und in manchen Fällen sogar an „nativen Code“ heranreicht.

Die Grafik-Pipeline von Gecko, auf der HTML, CSS und Canvas aufbauen, ist auf verschiedene Weise optimiert. Der Layout- und Grafikcode für HTML/CSS in Gecko reduziert die Invalidierung und das erneute Zeichnen in häufigen Fällen wie dem Scrollen; Entwickler profitieren davon ohne zusätzlichen Aufwand. Sowohl von Gecko „automatisch“ gezeichnete Pixelpuffer als auch solche, die Anwendungen „manuell“ auf `canvas` zeichnen, werden beim Übertragen in den Display-Framebuffer möglichst selten kopiert. Dazu werden Zwischenflächen vermieden, wenn sie zusätzlichen Aufwand verursachen würden – etwa anwendungsspezifische „Backbuffer“ in vielen anderen Betriebssystemen. Außerdem werden spezielle Speicherbereiche für Grafikpuffer verwendet, auf die die Compositor-Hardware direkt zugreifen kann. Komplexe Szenen werden für maximale Performance mit der GPU des Geräts gerendert. Um den Energieverbrauch zu senken, werden einfache Szenen mit spezieller, dedizierter Compositor-Hardware gerendert, während die GPU im Leerlauf bleibt oder abgeschaltet wird.

Bei funktionsreichen Anwendungen sind vollständig statische Inhalte eher die Ausnahme als die Regel. Solche Anwendungen verwenden dynamische Inhalte mit Effekten auf Basis von {{ cssxref("animation") }} und {{ cssxref("transition") }}. Transitions und Animationen sind für Anwendungen besonders wichtig: Entwickler können mit CSS komplexes Verhalten in einer einfachen Syntax auf hoher Abstraktionsebene festlegen. Die Grafik-Pipeline von Gecko ist wiederum stark darauf optimiert, gängige Animationen effizient zu rendern. Häufige Animationen werden an den System-Compositor ausgelagert, der sie performant und energieeffizient rendern kann.

Die Performance beim Start einer App ist genauso wichtig wie ihre Performance während der Laufzeit. Gecko ist darauf optimiert, ganz unterschiedliche Inhalte effizient zu laden: das gesamte Web! Viele Jahre an Verbesserungen für diese Inhalte – etwa paralleles HTML-Parsing, die intelligente Planung von Reflows und Bilddecodierung sowie ausgefeilte Layout-Algorithmen – kommen ebenso Webanwendungen in Firefox zugute.

## Performance von Anwendungen

Dieser Abschnitt richtet sich an Entwickler, die sich fragen: „Wie kann ich meine App schneller machen?“

### Performance beim Start

Beim Start einer Anwendung gibt es im Allgemeinen drei Ereignisse, die Nutzer wahrnehmen:

- Das erste ist die **erste Darstellung** der Anwendung – der Zeitpunkt, zu dem genügend Anwendungsressourcen geladen wurden, um ein erstes Bild zu zeichnen.
- Das zweite ist der Zeitpunkt, an dem die Anwendung **interaktiv** wird – Nutzer können beispielsweise auf eine Schaltfläche tippen und die Anwendung reagiert.
- Das letzte Ereignis ist das **vollständige Laden** – beispielsweise, wenn in einem Musikplayer alle Alben des Nutzers aufgelistet sind.

Für einen schnellen Start sind zwei Dinge entscheidend: Nur UPP zählt, und zu jedem der oben genannten, für Nutzer wahrnehmbaren Ereignisse führt ein „kritischer Pfad“. Der kritische Pfad umfasst genau den Code, der ausgeführt werden muss, damit das jeweilige Ereignis eintritt – und keinen anderen.

Um beispielsweise das erste Bild einer Anwendung zu zeichnen, das aus HTML und CSS zur Gestaltung dieses HTML besteht, sind folgende Schritte nötig:

1. Das HTML muss geparst werden.
2. Das DOM für dieses HTML muss aufgebaut werden.
3. Ressourcen wie Bilder in diesem Teil des DOM müssen geladen und decodiert werden.
4. Die CSS-Stile müssen auf dieses DOM angewendet werden.
5. Für das gestaltete Dokument muss ein Reflow durchgeführt werden.

„Die JS-Datei für ein selten verwendetes Menü laden“ oder „das Bild für die Highscore-Liste abrufen und decodieren“ steht nicht auf dieser Liste. Diese Aufgaben gehören nicht zum kritischen Pfad für die erste Darstellung.

Es klingt offensichtlich, aber der wichtigste „Trick“, um ein für Nutzer wahrnehmbares Startereignis schneller zu erreichen, besteht darin, _nur den Code auf dem kritischen Pfad auszuführen_. Verkürzen Sie den kritischen Pfad, indem Sie die Szene vereinfachen.

Die Webplattform ist hochgradig dynamisch. JavaScript ist eine dynamisch typisierte Sprache, und die Webplattform ermöglicht es, Code, HTML, CSS, Bilder und andere Ressourcen dynamisch zu laden. Mit diesen Möglichkeiten lässt sich Arbeit außerhalb des kritischen Pfads aufschieben, indem nicht benötigte Inhalte erst einige Zeit nach dem Start bei Bedarf geladen werden.

Ein weiteres Problem, das den Start verzögern kann, sind Leerlaufzeiten durch das Warten auf Antworten auf Anfragen, etwa beim Laden aus einer Datenbank. Um das zu vermeiden, sollten Anwendungen Anfragen möglichst früh beim Start stellen. So sind die Daten, wenn sie später benötigt werden, hoffentlich bereits verfügbar und die Anwendung muss nicht warten.

> [!NOTE]
> Weitere Informationen zur Verbesserung der Performance beim Start finden Sie unter [Performance beim Start optimieren](/de/docs/Web/Performance/Guides/Optimizing_startup_performance).

Beachten Sie außerdem, dass lokal zwischengespeicherte, statische Ressourcen wesentlich schneller geladen werden können als dynamische Daten, die über mobile Netze mit hoher Latenz und geringer Bandbreite abgerufen werden. Netzwerkanfragen sollten niemals auf dem kritischen Pfad der frühen Startphase einer Anwendung liegen. Lokales Caching und offlinefähige Apps lassen sich mit [Service Workers](/de/docs/Web/API/Service_Worker_API) umsetzen. Eine Anleitung zur Verwendung von Service Workers für Offlinefunktionen und die Synchronisierung im Hintergrund finden Sie unter [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

### Bildrate

Der erste wichtige Schritt zu einer hohen Bildrate ist die Wahl des richtigen Werkzeugs. Verwenden Sie HTML und CSS für Inhalte, die überwiegend statisch sind, gescrollt werden und nur selten animiert sind. Verwenden Sie Canvas für sehr dynamische Inhalte, etwa Spiele, die eine präzise Kontrolle über das Rendering benötigen und kein Systemdesign übernehmen müssen.

Bei Inhalten, die mit Canvas gezeichnet werden, liegt es an den Entwicklern, die angestrebte Bildrate zu erreichen: Sie haben direkte Kontrolle darüber, was gezeichnet wird.

Bei HTML- und CSS-Inhalten führt der Weg zu einer hohen Bildrate über die richtigen Grundbausteine. Firefox ist stark für das Scrollen beliebiger Inhalte optimiert; normalerweise ist das kein Problem. Wenn man jedoch einen Teil der Allgemeingültigkeit und Qualität zugunsten der Geschwindigkeit aufgibt – beispielsweise eine statische Darstellung statt eines radialen CSS-Verlaufs verwendet –, kann die Bildrate beim Scrollen über einen Zielwert steigen. Mit CSS-[Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) lassen sich solche Kompromisse auf Geräte beschränken, die sie benötigen.

Viele Anwendungen verwenden Transitions oder Animationen beim Wechsel zwischen „Seiten“ oder „Panels“. Beispielsweise tippt ein Nutzer auf eine „Einstellungen“-Schaltfläche, um zu einem Konfigurationsbildschirm zu wechseln, oder ein Einstellungsmenü „klappt auf“. Firefox ist stark darauf optimiert, Szenen zu wechseln und zu animieren, die:

- Seiten/Panels verwenden, die ungefähr so groß wie der Gerätebildschirm oder kleiner sind,
- die CSS-Properties `transform` und `opacity` verändern beziehungsweise animieren.

Transitions und Animationen, die diese Richtlinien einhalten, können an den System-Compositor ausgelagert und besonders effizient ausgeführt werden.

### Speicher- und Energieverbrauch

Die Verbesserung des Speicher- und Energieverbrauchs ähnelt der Beschleunigung des Starts: Führen Sie keine unnötigen Arbeiten aus und laden Sie selten genutzte UI-Ressourcen erst bei Bedarf. Verwenden Sie effiziente Datenstrukturen und sorgen Sie dafür, dass Ressourcen wie Bilder gut optimiert sind.

Moderne CPUs können in einen Energiesparmodus wechseln, wenn sie größtenteils im Leerlauf sind. Anwendungen, die ständig Timer auslösen oder unnötige Animationen weiterlaufen lassen, verhindern diesen Wechsel. Energieeffiziente Anwendungen sollten das vermeiden.

Wenn Anwendungen in den Hintergrund wechseln, wird auf ihren Dokumenten ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis ausgelöst. Dieses Ereignis ist für Entwickler sehr nützlich; Anwendungen sollten darauf reagieren.

### Konkrete Programmiertipps für die Performance von Anwendungen

Die folgenden praktischen Tipps helfen Ihnen, einen oder mehrere der oben erläuterten Faktoren für die Performance von Anwendungen zu verbessern.

#### CSS-Animationen und -Transitions verwenden

Statt die `animate()`-Funktion einer Bibliothek zu verwenden, die möglicherweise mehrere wenig performante Techniken nutzt – beispielsweise [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder die Positionierung mit `top`/`left` –, verwenden Sie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using). In vielen Fällen können Sie die Aufgabe auch mit [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions/Using) lösen. Das funktioniert gut, weil der Browser darauf ausgelegt ist, diese Effekte zu optimieren und sie mithilfe der GPU flüssig und mit minimalen Auswirkungen auf die Prozessorleistung auszuführen. Ein weiterer Vorteil ist, dass Sie diese Effekte zusammen mit dem übrigen Erscheinungsbild Ihrer App in CSS definieren können – mit einer standardisierten Syntax.

CSS-Animationen ermöglichen Ihnen mithilfe von [Keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) eine sehr genaue Kontrolle über Ihre Effekte. Sie können sogar auf Ereignisse reagieren, die während der Animation ausgelöst werden, um weitere Aufgaben zu bestimmten Zeitpunkten im Animationsablauf auszuführen. Sie können diese Animationen einfach mit {{cssxref(":hover")}}, {{cssxref(":focus")}} oder {{cssxref(":target")}} auslösen oder indem Sie Klassen auf übergeordneten Elementen dynamisch hinzufügen und entfernen.

Wenn Sie Animationen dynamisch erstellen oder in [JavaScript](/de/docs/Web/JavaScript) ändern möchten, hat James Long dafür eine einfache Bibliothek namens [CSS-animations.js](https://github.com/jlongster/css-animations.js/) geschrieben.

#### CSS-Transformationen verwenden

Statt die absolute Positionierung anzupassen und alle nötigen Berechnungen selbst vorzunehmen, verwenden Sie die CSS-Property {{cssxref("transform")}}, um Position, Skalierung und weitere Eigenschaften Ihrer Inhalte zu verändern. Alternativ können Sie die einzelnen Transformations-Properties {{cssxref("translate")}}, {{cssxref("scale")}} und {{cssxref("rotate")}} verwenden. Der Grund ist erneut die Hardwarebeschleunigung: Der Browser kann diese Aufgaben auf der GPU ausführen, sodass die CPU für andere Aufgaben frei bleibt.

Transformationen bieten Ihnen außerdem Möglichkeiten, die Sie sonst möglicherweise nicht hätten. Sie können Elemente nicht nur im zweidimensionalen Raum verschieben, sondern sie auch dreidimensional transformieren, scheren, drehen und vieles mehr. Paul Irish hat die [Vorteile von `translate()` ausführlich analysiert](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) (2012), insbesondere im Hinblick auf die Performance. Im Allgemeinen profitieren Sie jedoch von denselben Vorteilen wie bei CSS-Animationen: Sie verwenden das richtige Werkzeug für die Aufgabe und überlassen die Optimierung dem Browser. Außerdem positionieren Sie Elemente auf eine leicht erweiterbare Weise. Wenn Sie die Verschiebung stattdessen mit `top` und `left` nachbilden, benötigen Sie dafür viel zusätzlichen Code. Ein weiterer Vorteil: Die Arbeitsweise ähnelt der in einem `canvas`-Element.

> [!NOTE]
> Je nach Plattform müssen Sie möglicherweise eine `translateZ(0.1)`-Transformation hinzufügen, um Hardwarebeschleunigung für Ihre CSS-Animationen zu erhalten. Wie oben erwähnt, kann das die Performance verbessern. Bei übermäßigem Einsatz kann es jedoch zu Problemen mit dem Speicherverbrauch führen. Wie Sie damit umgehen, hängt von Ihrer Anwendung ab – testen Sie verschiedene Möglichkeiten und finden Sie heraus, was für Ihre App am besten funktioniert.

#### `requestAnimationFrame()` statt `setInterval()` verwenden

Aufrufe von [`setInterval()`](/de/docs/Web/API/Window/setInterval) führen Code mit einer angenommenen Bildrate aus, die unter den aktuellen Bedingungen möglicherweise gar nicht erreichbar ist. Dadurch wird der Browser angewiesen, Ergebnisse zu rendern, selbst wenn er gerade kein Bild zeichnet – also bevor die Grafikhardware den nächsten Anzeigezyklus erreicht hat. Das verschwendet Prozessorzeit und kann sogar die Akkulaufzeit des Geräts verkürzen.

Verwenden Sie stattdessen möglichst [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Diese API wartet, bis der Browser tatsächlich bereit ist, das nächste Bild Ihrer Animation aufzubauen, und führt keine unnötige Arbeit aus, wenn die Hardware ohnehin nichts zeichnet. Ein weiterer Vorteil: Animationen laufen nicht, während Ihre App auf dem Bildschirm nicht sichtbar ist – etwa wenn sie im Hintergrund liegt und eine andere Aufgabe ausgeführt wird. Das schont den Akku und erspart Ihren Nutzern Frust.

#### Benutzeroberfläche einfach halten

Ein erhebliches Performance-Problem, das wir bei HTML-Apps festgestellt haben: Wenn viele [DOM](/de/docs/Web/API/Document_Object_Model)-Elemente bewegt werden, wird alles träge – insbesondere, wenn die Elemente viele Verläufe und Schlagschatten enthalten. Es hilft sehr, das Erscheinungsbild zu vereinfachen und beim Ziehen und Ablegen stattdessen ein Stellvertreterelement zu bewegen.

Wenn Sie beispielsweise eine lange Liste von Elementen haben – etwa Tweets –, bewegen Sie nicht alle Elemente. Halten Sie stattdessen nur die sichtbaren Tweets und einige davor und danach in Ihrem DOM-Baum. Blenden Sie den Rest aus oder entfernen Sie ihn. Wenn Sie die Daten in einem JavaScript-Objekt halten, statt dafür auf das DOM zuzugreifen, kann sich die Performance Ihrer App erheblich verbessern. Betrachten Sie die Anzeige als Darstellung Ihrer Daten und nicht als die Daten selbst. Das bedeutet nicht, dass Sie einfaches HTML nicht als Quelle verwenden können: Lesen Sie es einmal ein und scrollen Sie dann durch zehn Elemente, wobei Sie den Inhalt des ersten und letzten Elements entsprechend Ihrer Position in der Ergebnisliste ändern. So vermeiden Sie es, 100 nicht sichtbare Elemente zu bewegen. Derselbe Trick funktioniert in Spielen mit Sprites: Wenn sie gerade nicht auf dem Bildschirm sind, müssen sie nicht abgefragt werden. Verwenden Sie stattdessen Elemente, die aus dem Bildschirm herausgescrollt sind, für neu hinzukommende Elemente wieder.

## Allgemeine Analyse der Anwendungsperformance

Firefox, Chrome und andere Browser enthalten integrierte Werkzeuge, mit denen Sie Ursachen für ein langsames Rendering von Seiten finden können. Der [Netzwerkmonitor von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt insbesondere einen genauen Zeitverlauf: wann jede Netzwerkanfrage Ihrer Seite erfolgt, wie groß sie ist und wie lange sie dauert.

![Der Netzwerkmonitor von Firefox zeigt GET-Anfragen, mehrere Dateien und die unterschiedlichen Ladezeiten der einzelnen Ressourcen in einem Diagramm.](network-monitor.jpg)

Wenn Ihre Seite JavaScript-Code enthält, dessen Ausführung lange dauert, zeigt Ihnen der [JavaScript-Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) die langsamsten Codezeilen:

![Der JavaScript-Profiler von Firefox zeigt ein abgeschlossenes Profil 1.](javascript-profiler.png)

Der [integrierte Gecko-Profiler](https://firefox-source-docs.mozilla.org/tools/profiler/index.html) ist ein sehr nützliches Werkzeug, das noch detailliertere Informationen darüber liefert, welche Teile des Browsercodes während der Profiler-Ausführung langsam sind. Seine Verwendung ist etwas komplexer, dafür liefert er viele nützliche Details.

![Ein Fenster des integrierten Gecko-Profilers mit zahlreichen Netzwerkinformationen.](gecko-profiler.png)

> [!NOTE]
> Sie können diese Werkzeuge auch mit dem Android-Browser verwenden, indem Sie Firefox ausführen und [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) aktivieren.

Insbesondere Dutzende oder Hunderte von Netzwerkanfragen benötigen in mobilen Browsern mehr Zeit. Auch das Rendern großer Bilder und CSS-Verläufe kann länger dauern. Selbst über ein schnelles Netzwerk kann das Herunterladen großer Dateien länger dauern, weil mobile Hardware manchmal zu langsam ist, um die gesamte verfügbare Bandbreite zu nutzen. Nützliche allgemeine Tipps zur Performance mobiler Webanwendungen finden Sie in Maximiliano Firtmans Vortrag [Mobile Web High Performance](https://www.slideshare.net/firt/mobile-web-high-performance).

### Testfälle und Fehlermeldungen einreichen

Wenn Ihnen die Entwicklerwerkzeuge von Firefox und Chrome nicht helfen, ein Problem zu finden, oder wenn sie darauf hindeuten, dass der Webbrowser das Problem verursacht, erstellen Sie nach Möglichkeit einen reduzierten Testfall, der das Problem so weit wie möglich isoliert. Das hilft häufig bei der Diagnose.

Prüfen Sie, ob Sie das Problem reproduzieren können, indem Sie eine statische Kopie einer HTML-Seite speichern und laden – einschließlich aller eingebundenen Bilder, Stylesheets und Skripte. Wenn das funktioniert, entfernen Sie alle privaten Informationen aus den statischen Dateien und geben Sie sie an andere weiter, um Hilfe zu erhalten. Sie können beispielsweise einen Bericht in [Bugzilla](https://bugzilla.mozilla.org/) einreichen oder die Dateien auf einem Server bereitstellen und die URL teilen. Geben Sie auch alle Profiling-Informationen weiter, die Sie mit den oben genannten Werkzeugen gesammelt haben.
