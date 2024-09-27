---
title: "Seite füllen: Wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: f32c38c1245815c7f520730f0cdef54960e5cee1
---

{{QuickLinksWithSubPages("Web/Performance")}}

Nutzer möchten Web-Erlebnisse, deren Inhalte schnell geladen werden und die reibungslos zu bedienen sind. Daher sollte ein Entwickler bemüht sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie die Leistung und die wahrgenommene Leistung verbessert werden können, ist es hilfreich zu verstehen, wie der Browser funktioniert.

## Überblick

Schnelle Seiten bieten eine bessere Benutzererfahrung. Nutzer möchten und erwarten Web-Erlebnisse mit Inhalten, die schnell geladen werden und mit denen eine reibungslose Interaktion möglich ist.

Zwei Hauptprobleme bei der Web-Performance sind solche, die mit Latenz zusammenhängen, und solche, die damit zu tun haben, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu gewährleisten. Das Ziel der Entwickler ist es, die Website so schnell wie möglich zu laden — oder zumindest super schnell _erscheinen zu lassen_, sodass der Nutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerk-Latenz ist die Zeit, die benötigt wird, um Bytes über Funk an Computer zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Browser werden größtenteils als single-threaded angesehen. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe übernehmen. Für eine reibungslose Interaktion besteht das Ziel des Entwicklers darin, performante Site-Interaktionen sicherzustellen, vom reibungslosen Scrollen bis zur Reaktion auf Berührungen. Renderzeit ist der Schlüssel, um sicherzustellen, dass der Haupt-Thread all die Arbeit, die wir ihm zuwerfen, abschließen kann und dennoch immer verfügbar ist, um auf Benutzerinteraktionen zu reagieren. Die Web-Performance kann verbessert werden, indem das single-threaded Verhalten des Browsers verstanden und die Verantwortlichkeiten des Haupt-Threads minimiert werden, wo immer möglich und angebracht, um sicherzustellen, dass das Rendern reibungslos ist und auf Interaktionen sofort reagiert wird.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Nutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, einen Link anklickt, ein Formular absendet oder andere Aktionen ausführt.

Eines der Ziele der Web-Performance ist es, die Zeit zu minimieren, die die Navigation zum Abschluss benötigt. Unter idealen Bedingungen dauert das normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite ist das Auffinden, wo sich die Assets für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage stattfinden.

Ihr Browser fordert eine DNS-Abfrage an, die letztendlich von einem Nameserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP-Adresse wahrscheinlich eine Zeit lang zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Nameserver zu kontaktieren.

DNS-Abfragen müssen normalerweise nur einmal pro Hostname für eine Seitenladung durchgeführt werden. DNS-Abfragen müssen jedoch für jeden eindeutigen Hostname durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Sendemast, dann zu einem zentralen Computer der Telefongesellschaft, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann ein Problem für die Performance sein, insbesondere in Mobilfunknetzen. Wenn ein Nutzer in einem Mobilfunknetzwerk ist, muss jede DNS-Abfrage vom Telefon zum Sendemast gehen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Sendemast und dem Nameserver kann erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser eine Verbindung zum Server über einen [TCP-Dreiwege-Handshake](/de/docs/Glossary/TCP_handshake) her. Dieser Mechanismus ist so konstruiert, dass zwei Entitäten, die zu kommunizieren versuchen — in diesem Fall der Browser und der Webserver — die Parameter der Netzwerk-TCP-Socket-Verbindung verhandeln können, bevor Daten übertragen werden, oft über [HTTPS](/de/docs/Glossary/HTTPS).

Die Technik des TCP-Dreiwege-Handshake wird oft als "SYN-SYN-ACK" bezeichnet — oder genauer gesagt SYN, SYN-ACK, ACK — da drei Nachrichten von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage ist noch nicht gestellt worden.

### TLS-Aushandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Diese Aushandlung, genauer gesagt die [TLS](/de/docs/Glossary/TLS) Verhandlung, bestimmt, welcher Verschlüsselungsalgorithmus zur Verschlüsselung der Kommunikation verwendet wird, überprüft den Server und stellt sicher, dass eine sichere Verbindung hergestellt ist, bevor der tatsächliche Datentransfer beginnt. Dies erfordert fünf weitere Rundreisen zum Server, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake, und 5 Schritte der TLS-Verhandlung einschließlich clienthello, serverhello und certificate, clientkey und fertig für sowohl Server als auch Client.](ssl.jpg)

Während eine sichere Verbindung die Ladezeit der Seite verlängert, ist die Sicherheit die Latenzkosten wert, da die zwischen dem Browser und dem Webserver übertragenen Daten von Dritten nicht entschlüsselt werden können.

Nach den acht Rundreisen zum Server kann der Browser endlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser eine anfängliche [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods) im Auftrag des Benutzers, die bei Websites meistens eine HTML-Datei ist. Sobald der Server die Anfrage erhält, wird er mit relevanten Antwort-Headern und den Inhalten des HTML antworten.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>My simple page</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="myscript.js"></script>
  </head>
  <body>
    <h1 class="heading">My Page</h1>
    <p>A paragraph with a <a href="https://example.com/about">link</a></p>
    <div>
      <img src="myimage.jpg" alt="image description" />
    </div>
    <script src="anotherscript.js"></script>
  </body>
</html>
```

Diese Antwort für diese erste Anfrage enthält das erste empfangene Byte der Daten. [Time to First Byte](/de/docs/Glossary/Time_to_First_Byte) (TTFB) ist die Zeit zwischen dem Moment, in dem der Nutzer die Anfrage gestellt hat — etwa durch Klicken auf einen Link — und dem Erhalt des ersten Datenpakets mit HTML. Die erste Inhaltschunk ist normalerweise 14 KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv kleiner als 14 KB, aber die verlinkten Ressourcen werden erst angefragt, wenn der Browser während des Parsings auf die Links stößt, wie unten beschrieben.

### Staukontrolle / TCP-Slow-Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Weil TCP die Reihenfolge der Pakete garantiert, muss der Server eine Bestätigung vom Client erhalten in Form eines ACK-Pakets, nachdem eine bestimmte Anzahl von Segmenten gesendet wurde.

Wenn der Server nach jedem Segment auf ein ACK wartet, resultiert das in häufigen ACKs vom Client und könnte die Übertragungszeit verlängern, selbst bei einem Netzwerk mit geringer Auslastung.

Andererseits kann das Versenden von zu vielen Segmenten auf einmal das Problem verursachen, dass in einem ausgelasteten Netzwerk der Client die Segmente nicht erhalten kann und nur lange mit ACKs antworten wird, und der Server muss die Segmente immer wieder senden.

Um die Anzahl gesendeter Segmente auszubalancieren, wird der Algorithmus [TCP-Slow-Start](/de/docs/Glossary/TCP_slow_start) verwendet, um die Menge der gesendeten Daten allmählich zu erhöhen, bis die maximale Netzwerkbandbreite ermittelt werden kann, und um die Menge der gesendeten Daten im Fall von hoher Netzwerklast zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Stau-Fensters (CWND) gesteuert, das auf 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS ist 1500 Bytes über das Ethernet-Protokoll). Dieser Wert ist die Anzahl der Bytes, die gesendet werden sollen, bei deren Erhalt der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, sodass der Server beim nächsten Mal mehr Segmente senden kann. Wenn kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht so ein Gleichgewicht zwischen dem Versenden von zu vielen und zu wenigen Segmenten.

## Parsen

Sobald der Browser den ersten Datenchunk erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. [Parsen](/de/docs/Glossary/parse) ist der Schritt, bei dem der Browser die über das Netzwerk empfangenen Daten in das [DOM](/de/docs/Glossary/DOM) und [CSSOM](/de/docs/Glossary/CSSOM) umwandelt, die vom Renderer verwendet werden, um eine Seite auf den Bildschirm zu malen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM wird ebenfalls offengelegt und kann über verschiedene APIs in JavaScript manipuliert werden.

Auch wenn das angeforderte HTML einer Seite größer als das anfängliche 14-KB-Paket ist, wird der Browser mit dem Parsen und dem Versuch, eine Erfahrung basierend auf den vorliegenden Daten zu rendern, beginnen. Deshalb ist es notwendig, dass die Optimierung der Web-Performance alles enthält, was der Browser benötigt, um mit dem Rendern einer Seite zu beginnen, oder zumindest eine Vorlage der Seite — das CSS und HTML, die für das erste Rendern erforderlich sind — in den ersten 14 KB. Aber bevor irgendetwas auf dem Bildschirm gerendert wird, müssen HTML, CSS und JavaScript geparst werden.

### Das DOM-Baum erstellen

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und das Erstellen des DOM-Baums. HTML-Parsing umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Tokens beinhalten Start- und Endtags sowie Attributnamen und -werte. Wenn das Dokument wohlgeformt ist, ist das Parsen unkompliziert und schneller. Der Parser parst das tokenisierte Input in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Elemente, die innerhalb anderer Elemente verschachtelt sind, sind Kindknoten. Je mehr DOM-Knoten vorhanden sind, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unser Beispielcode, der alle Knoten zeigt, einschließlich Textknoten.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann weitergehen, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente — besonders die ohne das [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut — blockieren das Rendern und pausieren das Parsen von HTML. Obwohl die Preload-Scanner diesen Prozess beschleunigen, können übermäßige Skripte immer noch ein erheblicher Engpass sein.

### Preload-Scanner

Während der Browser den DOM-Baum erstellt, belegt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ durch den verfügbaren Inhalt parsen und hochpriorisierte Ressourcen wie CSS, JavaScript und Web-Fonts anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser auf eine Referenz zu einer externen Ressource trifft, um sie anzufordern. Er wird Ressourcen im Hintergrund abrufen, sodass sie, wenn der Haupt-HTML-Parser die angeforderten Assets erreicht, möglicherweise bereits in der Übertragung sind oder heruntergeladen wurden. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="myscript.js" async></script>
<img src="myimage.jpg" alt="image description" />
<script src="anotherscript.js" async></script>
```

In diesem Beispiel, während der Haupt-Thread das HTML und CSS parst, wird der Preload-Scanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das Attribut `async` hinzu, oder das Attribut `defer`, wenn die Reihenfolge der JavaScript-Analyse und -Ausführung wichtig ist.

Das Warten auf den Erhalt von CSS blockiert nicht das Parsen oder Herunterladen von HTML, blockiert jedoch JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Den CSSOM-Baum erstellen

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und das Erstellen des CSSOM-Baums. Das CSS-Objektmodell ist ähnlich dem DOM. Das DOM und CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser wandelt die CSS-Regeln in eine Karte von Stilen um, die er verstehen und damit arbeiten kann. Der Browser geht durch jede Regelmenge im CSS und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie beim HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum beinhaltet Stile aus dem Nutzeragent-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert die berechneten Stile rekursiv, indem spezifischere Regeln angewendet werden. Mit anderen Worten, es kaskadiert die Eigenschaftswerte.

Das Erstellen des CSSOM ist sehr, sehr schnell und wird in aktuellen Entwickler-Tools nicht in einer einzigartigen Farbe dargestellt. Stattdessen zeigt das "Recalculate Style" in Entwickler-Tools die Gesamtzeit an, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu konstruieren und berechnete Stile rekursiv zu bestimmen. In Bezug auf die Web-Performance-Optimierung gibt es einfachere Möglichkeiten, da die Gesamtzeit, um den CSSOM zu erstellen, im Allgemeinen kürzer ist als die Zeit für einen einzigen DNS-Lookup.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst wird und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und leiten sie in einen Compiler, der Bytecode erzeugt. Dies ist bekannt als JavaScript-Kompilierung. Der größte Teil des Codes wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Erstellen des Zugänglichkeitsbaums

Der Browser erstellt auch einen [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility), den Hilfsgeräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Accessibility-Object-Model (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Zugänglichkeitsbaum, wenn das DOM aktualisiert wird. Der Zugänglichkeitsbaum kann nicht von den Hilfstechnologien selbst modifiziert werden.

Bis das AOM erstellt ist, sind Inhalte für [Screenreader](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide) nicht zugänglich.

## Rendern

Render-Schritte umfassen Stil, Layout, Malen und in manchen Fällen Komposition. Die im Parsing-Schritt erstellten CSSOM- und DOM-Bäume werden zu einem Renderbaum kombiniert, der dann zur Berechnung des Layouts jedes sichtbaren Elements verwendet wird, das anschließend auf den Bildschirm gemalt wird. In einigen Fällen kann Inhalt zu einer eigenen Ebene gefördert und zusammengestellt werden, was die Performance verbessert, indem Teile des Bildschirms auf der GPU statt auf der CPU gemalt werden, wodurch der Haupt-Thread frei wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und CSSOM in einen Renderbaum. Der berechnete Stilbaum oder Renderbaum beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in User-Agent-Stylesheets finden, sind nicht im Renderbaum enthalten, da sie nicht im gerenderten Output erscheinen. Knoten, auf die `visibility: hidden` angewendet wird, sind im Renderbaum enthalten, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, um die Standardeinstellungen des Nutzeragenten zu überschreiben, wird der `script`-Knoten in unserem oben genannten Codebeispiel nicht im Renderbaum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln auf ihn angewendet. Der Renderbaum hält alle sichtbaren Knoten mit Inhalt und berechneten Stilen — es werden alle relevanten Styles mit jedem sichtbaren Knoten im DOM-Baum abgeglichen und, basierend auf der [CSS-Kaskade](/de/docs/Web/CSS/Cascade), die berechneten Stile für jeden Knoten bestimmt.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und die Position aller Knoten im Renderbaum bestimmt werden, plus die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum aufgebaut ist, beginnt das Layout. Der Renderbaum identifizierte, welche Knoten angezeigt werden (auch wenn nicht sichtbar) zusammen mit ihren berechneten Stilen, jedoch nicht die Dimensionen oder die Position jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Renderbaums und durchläuft diesen.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl unterschiedlicher Viewport-Größen. In dieser Phase, unter Berücksichtigung der Viewport-Größe, bestimmt der Browser, welche Größen alle verschiedenen Boxen auf dem Bildschirm haben werden. Ausgehend von der Größe des Viewports als Basis beginnt das Layout im Allgemeinen mit dem Body und legt die Größen aller Nachfahren des Bodys fest, wobei die Box-Model-Eigenschaften jedes Elements berücksichtigt werden, und bietet Platzhalter für Ersetzelemente, deren Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, dass die Größe und Position jedes Knotens bestimmt wird, wird _Layout_ genannt. Nachfolgende Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel nehmen wir an, dass das anfängliche Layout stattfindet, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird es ein Reflow geben, sobald die Bildabmessungen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, was bei der ersten Ausführung als [First Meaningful Paint](/de/docs/Glossary/First_meaningful_paint) bezeichnet wird. In der Mal- oder Rasterisierungsphase wandelt der Browser jede Box, die in der Layout-Phase berechnet wurde, in tatsächliche Pixel auf dem Bildschirm um. Das Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Ränder, Schatten und Ersetzelemente wie Buttons und Bilder. Der Browser muss dies sehr schnell tun.

Um reibungsloses Scrollen und Animation zu gewährleisten, muss alles, was den Haupt-Thread beansprucht, einschließlich der Stile, zusammen mit Reflow und Malen, in weniger als 16,67 ms geschehen. Bei 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass Neumalen noch schneller als das anfängliche Malen erfolgen kann, wird das Zeichnen auf den Bildschirm im Allgemeinen in mehrere Schichten unterteilt. Wenn dies geschieht, ist dann Komposition erforderlich.

Das Malen kann die Elemente im Layoutbaum in Schichten unterteilen. Das Fördern von Inhalten in Schichten auf die GPU (anstatt auf dem Haupt-Thread auf die CPU) verbessert die Mal- und Neumal-Performance. Es gibt spezifische Eigenschaften und Elemente, die eine Schicht instanziieren, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas), und jedes Element, das CSS-Eigenschaften wie [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-[`transform`](/de/docs/Web/CSS/transform) hat, [`will-change`](/de/docs/Web/CSS/will-change), und einige andere. Diese Knoten werden auf ihre eigene Schicht gemalt, zusammen mit ihren Nachfahren, es sei denn, ein Nachfahre benötigt aus einem (oder mehreren) der oben genannten Gründe eine eigene Schicht.

Schichten verbessern die Performance, sind aber teuer in Bezug auf das Speichermanagement und sollten nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden.

### Komposition

Wenn Teile des Dokuments in unterschiedlichen Schichten gezeichnet werden und sich überlappen, ist Komposition notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf dem Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können Reflows auftreten (denken Sie an unser Beispielbild, das spät ankam). Ein Reflow löst ein Neumalen und eine Neu-Zusammenstellung aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Schicht, die neu gemalt werden musste, hätte neu gemalt und, falls notwendig, zusammengesetzt werden müssen. Aber wir haben die Bildabmessungen nicht angegeben! Wenn das Bild vom Server abgerufen wird, springt der Rendering-Prozess zurück zu den Layoutschritten und beginnt dort von Neuem.

## Interaktivität

Sobald der Haupt-Thread damit fertig ist, die Seite zu malen, könnten Sie denken, dass wir "bereit" wären. Das ist jedoch nicht unbedingt der Fall. Wenn der Ladevorgang JavaScript umfasst, das korrekt verzögert wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wird, könnte der Haupt-Thread beschäftigt und nicht verfügbar für das Scrollen, Berühren und andere Interaktionen sein.

[Time to Interactive](/de/docs/Glossary/Time_to_Interactive) (TTI) ist das Maß dafür, wie lange es von der ersten Anfrage dauerte, die zum DNS-Lookup und zur TCP-Verbindung führte, bis die Seite interaktiv wurde — interaktiv bedeutet der Zeitpunkt nach dem [First Contentful Paint](/de/docs/Glossary/First_Contentful_Paint), wenn die Seite auf Benutzerinteraktionen innerhalb von 50 ms reagiert. Wenn der Haupt-Thread damit beschäftigt ist, JavaScript zu parsen, zu kompilieren und auszuführen, ist er nicht verfügbar und daher nicht in der Lage, rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen zu reagieren.

In unserem Beispiel, vielleicht wurde das Bild schnell geladen, aber möglicherweise war die `anotherscript.js`-Datei 2 MB groß und die Netzwerkverbindung unseres Nutzers war langsam. In diesem Fall würde der Nutzer die Seite super schnell sehen, könnte jedoch aufgrund von Ruckeln nicht scrollen, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie das Belegen des Haupt-Threads, wie in diesem WebPageTest-Beispiel dargestellt:

![Der Haupt-Thread ist durch das Herunterladen, Parsen und die Ausführung einer JavaScript-Datei - über eine schnelle Verbindung belegt](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden, und der Haupt-Thread war während dieser gesamten Zeit vollständig belegt, nicht reaktionsfähig auf Klickereignisse oder Bildschirmberührungen.

## Siehe auch

- [Web Performance](/de/docs/Web/Performance)
