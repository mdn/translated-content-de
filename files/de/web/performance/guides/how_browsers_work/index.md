---
title: "Seiteninhalt laden: wie Browser funktionieren"
short-title: Wie Browser funktionieren
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Nutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell geladen werden und flüssig zu bedienen sind. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um die Leistung und die wahrgenommene Leistung zu verbessern, ist es hilfreich zu verstehen, wie der Browser funktioniert.

## Überblick

Schnelle Webseiten bieten bessere Benutzererlebnisse. Nutzer erwarten und wünschen Web-Erlebnisse mit Inhalten, die schnell geladen werden und flüssig zu bedienen sind.

Zwei wesentliche Probleme bei der Web-Performance sind die Latenz und die Tatsache, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite sicherzustellen. Es ist das Ziel der Entwickler, die Seite so schnell wie möglich zu laden - oder sie zumindest _sehr schnell_ laden zu lassen - damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über das Netzwerk zu Computer zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Normalerweise werden Browser als single-threaded betrachtet. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe übernehmen. Für flüssige Interaktionen ist es das Ziel des Entwicklers, performante Interaktionen auf der Website zu gewährleisten, von flüssigem Scrollen bis zur Reaktionsfähigkeit auf Berührungen. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Haupt-Thread alle aufgeworfenen Aufgaben bewältigen kann und immer verfügbar bleibt, um Benutzerinteraktionen zu handhaben. Web-Performance lässt sich verbessern, indem man das Single-Threaded-Verhalten des Browsers versteht und die Aufgaben des Haupt-Threads, wo möglich und angebracht, minimiert, um ein reibungsloses Rendern und sofortige Reaktionen auf Interaktionen sicherzustellen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt, wann immer ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular absendet oder andere Aktionen ausführt.

Eines der Ziele der Web-Performance ist es, die Zeit zu minimieren, die die Navigation benötigt, um abgeschlossen zu sein. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Lookup

Der erste Schritt bei der Navigation zu einer Webseite ist das Finden des Ortes, an dem die Ressourcen für diese Seite gespeichert sind. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf einem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss ein DNS-Lookup erfolgen.

Ihr Browser fordert einen DNS-Lookup an, der letztendlich von einem Namenserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser anfänglichen Anfrage wird die IP wahrscheinlich für einige Zeit zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namenserver zu kontaktieren.

DNS-Lookups müssen normalerweise nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. Dennoch müssen für jeden eindeutigen Hostnamen, auf den die angeforderte Seite verweist, DNS-Lookups durchgeführt werden. Wenn Ihre Schriften, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden ein DNS-Lookup durchgeführt werden.

![Mobile Anfragen gehen zuerst an den Sendemast, dann an einen zentralen Computer des Telefonanbieters, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann besonders bei mobilen Netzwerken problematisch für die Performance sein. Wenn sich ein Benutzer in einem mobilen Netzwerk befindet, muss jeder DNS-Lookup vom Telefon über den Sendemast zu einem autoritativen DNS-Server erfolgen. Die Entfernung zwischen einem Telefon, einem Sendemast und dem Namenserver kann erhebliche Latenz verursachen.

### TCP Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP Three-Way-Handshake")}} her. Dieser Mechanismus ist so ausgelegt, dass zwei Einheiten, die kommunizieren möchten – in diesem Fall der Browser und der Webserver – die Parameter der TCP-Netzwerkverbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

TCPs Drei-Wege-Handshaking-Technik wird oft als "SYN-SYN-ACK" – oder genauer SYN, SYN-ACK, ACK – bezeichnet, weil drei Nachrichten von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten zwischen jedem Server hin und her, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS aufgebaut werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder eher die {{Glossary("TLS", "TLS")}}-Verhandlung, legt fest, welcher Cipher zur Verschlüsselung der Kommunikation verwendet wird, verifiziert den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Round-Trips zum Server, bevor die Anfrage für den Inhalt tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte des TLS-Handshakes, einschließlich Client Hello, Server Hello und Zertifikat, Client-Schlüssel und Abschluss für sowohl Server als auch Client.](ssl.jpg)

Obwohl das Herstellen einer sicheren Verbindung Zeit zum Seitenladen hinzufügt, ist eine sichere Verbindung die Latenz wert, da die zwischen dem Browser und dem Web-Server übertragenen Daten nicht von Dritten entschlüsselt werden können.

Nach den acht Round-Trips zum Server kann der Browser schließlich die Anforderung stellen.

## Antwort

Sobald eine Verbindung zu einem Web-Server hergestellt wurde, sendet der Browser auf Benutzeranfrage eine anfängliche [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods), die bei Websites am häufigsten eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit den relevanten Antwort-Headern und dem Inhalt des HTML.

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
      <img src="my-image.jpg" alt="image description" />
    </div>
    <script src="another-script.js"></script>
  </body>
</html>
```

Diese Antwort für diese anfängliche Anfrage enthält das erste empfangene Datenbyte. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Moment, in dem der Benutzer die Anfrage gestellt hat – zum Beispiel durch Klicken auf einen Link – und dem Empfang dieses ersten HTML-Pakets. Das erste Inhaltsstück ist normalerweise 14KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv weniger als 14KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser die Links während des Parsens findet, wie unten beschrieben.

### Überlastungskontrolle / TCP Slow Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Sequenz der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Bestätigung vom Client in Form eines ACK-Pakets erhalten.

Wenn der Server nach jedem Segment auf ein ACK wartet, führt dies zu häufigen ACKs vom Client und kann die Übertragungszeit verlängern, selbst bei einem Netzwerk mit geringer Belastung.

Auf der anderen Seite kann das gleichzeitige Senden zu vieler Segmente zu dem Problem führen, dass in einem ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und nur lange mit ACKs antwortet, wodurch der Server die Segmente immer wieder senden muss.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}} Algorithmus verwendet, um die Menge der übertragenen Daten allmählich zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und um die Menge der übertragenen Daten bei hoher Netzauslastung zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Überlastungsfensters (CWND) gesteuert, das auf 1, 2, 4 oder 10 MSS (MSS entspricht 1500 Bytes über das Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl von Bytes, die gesendet werden sollen, bei deren Empfang der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann beim nächsten Mal mehr Segmente senden. Wenn hingegen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht so ein Gleichgewicht zwischen dem Senden zu vieler und zu weniger Segmente.

## Parsen

Sobald der Browser das erste Datenpaket erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsen")}} ist der Schritt, in dem der Browser die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und das {{Glossary("CSSOM", "CSSOM")}} umwandelt, die vom Renderer verwendet werden, um eine Seite auf den Bildschirm zu malen.

Das DOM ist die interne Repräsentation des Markups für den Browser. Das DOM wird außerdem über verschiedene APIs in JavaScript exponiert und kann darüber manipuliert werden.

Selbst wenn das angeforderte HTML der Seite größer als das anfängliche 14KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, ein Erlebnis basierend auf den bereits vorhandenen Daten zu rendern. Aus diesem Grund ist es wichtig, bei der Optimierung der Web-Performance alles einzubeziehen, was der Browser benötigt, um eine Seite oder zumindest eine Vorlage der Seite zu rendern - das CSS und HTML, das für das erste Rendern benötigt wird - in den ersten 14KB. Aber bevor etwas auf dem Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript geparst werden.

### Erstellen des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt ist das Verarbeiten des HTML-Markups und das Erstellen des DOM-Baums. Das Parsen von HTML umfasst die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und die Baumkonstruktion. HTML-Tokens umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut formatiert ist, ist das Parsen einfach und schneller. Der Parser parsiert das tokenisierte Eingabematerial in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum reflektiert die Beziehungen und Hierarchien zwischen verschiedenen Elementen. Elemente, die in andere Elemente eingebettet sind, sind untergeordnete Knoten. Je mehr DOM-Knoten vorhanden sind, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten, einschließlich Textknoten, zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente - insbesondere solche ohne ein [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut - blockieren das Rendern und pausieren das Parsen von HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte dennoch ein erhebliches Nadelöhr darstellen.

### Preload-Scanner

Während der Browser den DOM-Baum erstellt, beansprucht dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ den bereits vorhandenen Inhalt durchgehen und hochpriorisierte Ressourcen wie CSS, JavaScript und Webfonts anfordern. Dank des Preload-Scanners müssen wir nicht darauf warten, dass der Parser eine Referenz zu einer externen Ressource findet, um sie anzufordern. Er ruft Ressourcen im Hintergrund ab, sodass der Haupt-HTML-Parser, wenn er die angeforderten Assets erreicht, diese möglicherweise bereits im Flug oder heruntergeladen sind. Die Optimierungen, die der Preload-Scanner bietet, verringern Blockierungen.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel wird, während der Haupt-Thread das HTML und CSS parst, der Preload-Scanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die Reihenfolge des JavaScript-Parsens und Ausführens wichtig ist.

Das Warten auf das Abrufen von CSS blockiert das Parsen oder Herunterladen von HTML nicht, aber es blockiert JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Erstellen des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist das Verarbeiten von CSS und das Erstellen des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. Das DOM und das CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte von Stilen, die er verstehen und mit denen er arbeiten kann. Der Browser geht jede Regelmenge im CSS durch und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie beim HTML benötigt der Browser die Konvertierung der empfangenen CSS-Regeln in etwas, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, diesmal für das CSS.

Der CSSOM-Baum umfasst Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile, indem spezifischere Regeln angewendet werden. Mit anderen Worten, er kaskadiert die Eigenschaftswerte.

Das Erstellen des CSSOM ist sehr, sehr schnell, und diese Build-Zeit-Informationen werden nicht in den Entwicklertools angezeigt. Stattdessen zeigt die Funktion "Stil neu berechnen" in den Entwicklertools die Gesamtzeit an, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu konstruieren und rekursiv berechnete Stile zu berechnen. In Bezug auf Web-Performance gibt es viele bessere Wege, um Optimierungsaufwand zu investieren, da die Gesamtzeit, um den CSSOM zu erstellen, in der Regel weniger beträgt als die Zeit, die für einen DNS-Lookup benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilation

Während das CSS geparst und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und übergeben sie an einen Compiler, der Bytecode ausgibt. Dies wird als JavaScript-Kompilation bezeichnet. Der Großteil des Codes wird im Haupt-Thread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web Workers](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Accessibility-Baums

Der Browser erstellt auch einen [Accessibility](/de/docs/Learn_web_development/Core/Accessibility)-Baum, den assistive Geräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Accessibility Object Model (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Accessibility-Baum, wenn das DOM aktualisiert wird. Der Accessibility-Baum kann nicht von unterstützenden Technologien selbst modifiziert werden.

Bevor das AOM erstellt ist, sind die Inhalte nicht für [Bildschirmausleser](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) zugänglich.

## Rendern

Zu den Rendering-Schritten gehören Stil, Layout, Malen und in einigen Fällen Komposition. Die im Parsing-Schritt erstellten CSSOM- und DOM-Bäume werden in einen Renderbaum kombiniert, das dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das anschließend auf den Bildschirm gemalt wird. In einigen Fällen kann Inhalt in eine eigene Ebene befördert und zusammengesetzt werden, um die Leistung zu verbessern, indem Teile des Bildschirms auf der GPU anstelle der CPU gemalt werden, sodass der Haupt-Thread entlastet wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren von DOM und CSSOM in einen Renderbaum. Die Konstruktion des berechneten Stilbaums oder des Renderbaums beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden sollen, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder sowie Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragenten-Stylesheets finden, werden nicht in den Renderbaum aufgenommen, da sie nicht im gerenderten Ergebnis erscheinen. Knoten, auf die `visibility: hidden` angewendet wird, werden in den Renderbaum aufgenommen, da sie Platz beanspruchen. Da wir keine Anweisungen gegeben haben, um den Benutzeragentenstandard zu überschreiben, wird der `script`-Knoten in unserem obigen Codebeispiel nicht in den Renderbaum aufgenommen.

Jeder sichtbare Knoten hat seine CSSOM-Regeln auf sich angewendet. Der Renderbaum hält alle sichtbaren Knoten mit Inhalt und berechneten Stilen – ordnet alle relevanten Stile jedem sichtbaren Knoten im DOM-Baum zu und bestimmt basierend auf der [CSS-Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, durch den die Dimensionen und Positionen aller Knoten im Renderbaum bestimmt werden, plus die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum aufgebaut ist, beginnt das Layout. Der Renderbaum identifizierte, welche Knoten angezeigt werden (selbst wenn unsichtbar) zusammen mit ihren berechneten Stilen, jedoch nicht die Dimensionen oder Positionen jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser am Wurzelpunkt des Renderbaums und durchläuft diesen.

Auf der Webseite ist fast alles ein Rechteck. Unterschiedliche Geräte und unterschiedliche Desktoppraxis bedeuten eine unbegrenzte Anzahl unterschiedlicher Ansichtsgrößen. In dieser Phase bestimmt der Browser, unter Berücksichtigung der Ansichtsgröße, welche Größen alle verschiedenen Rechtecke auf dem Bildschirm haben werden. Unter Berücksichtigung der Ansichtsgröße beginnt das Layout im Allgemeinen mit dem Hauptteil, legt die Größen aller Nachfahren des Hauptteils fest, wobei er den Platzhalterplatz für Ersetztelemente bereitstellt, deren Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, dass die Größe und Position jedes Knotens bestimmt wird, wird _Layout_ genannt. Nachfolgende Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel nehmen wir an, das anfängliche Layout erfolgt, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird es zu einem Reflow kommen, sobald die Bilddimensionen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, dessen erste Auftreten {{Glossary("First_meaningful_paint", "erste bedeutungsvolle Darstellung")}} genannt wird. In der Mal- oder Rasterisierungsphase konvertiert der Browser jedes im Layout berechnete Rechteck in tatsächliche Pixel auf dem Bildschirm. Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Ränder, Schatten und Ersetztelemente wie Schaltflächen und Bilder. Der Browser muss dies superschnell tun.

Um reibungsloses Scrollen und Animation zu gewährleisten, muss alles, was den Haupt-Thread beansprucht, einschließlich Styliierung, Reflow und Malen, vom Browser in weniger als 16,67ms durchgeführt werden. Mit 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das bedeutet, dass viele Pixel sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neumalen noch schneller als das ursprüngliche Malen erfolgen kann, wird das Zeichnen auf den Bildschirm im Allgemeinen in mehrere Ebenen unterteilt. Wenn dies auftritt, ist eine Komposition notwendig.

Malen kann die Elemente im Layoutbaum in Ebenen aufteilen. Die Förderung von Inhalten in Ebenen auf der GPU (anstelle des Haupt-Threads auf der CPU) verbessert die Mal- und Neumal-Performance. Es gibt bestimmte Eigenschaften und Elemente, die eine Ebene einführen, darunter [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und jedes Element, das die CSS-Eigenschaften [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-[`transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und einige andere hat. Diese Knoten werden auf ihre eigene Ebene gemalt, zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert aus einem oder mehreren dieser genannten Gründe seine eigene Ebene.

Ebenen verbessern die Leistung, aber sie sind teuer, was die Speicherverwaltung angeht, sollten daher nicht übermäßig als Teil der Web-Performance-Optimierungsstrategien verwendet werden.

### Komposition

Wenn Abschnitte des Dokuments in unterschiedlichen Ebenen gezeichnet werden, die sich gegenseitig überlappen, ist eine Komposition notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Wenn die Seite weiterhin Assets lädt, kann es zu Reflows kommen (denken Sie an unser Beispielbild, das zu spät ankommt). Ein Reflow löst ein Neumal und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Ebene, die neu gemalt werden musste, würde erneut gemalt und benötigte gegebenenfalls eine Komposition. Aber wir haben die Bilddimensionen nicht angegeben! Wenn das Bild vom Server abgerufen wird, geht der Rendering-Prozess zurück zu den Layout-Schritten und startet von dort aus erneut.

## Interaktivität

Sobald der Haupt-Thread mit dem Malen der Seite fertig ist, könnte man meinen, dass wir "all set" wären. Das ist jedoch nicht unbedingt der Fall. Wenn der Ladevorgang JavaScript beinhaltet, das korrekt verzögert und nur nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wurde, könnte der Haupt-Thread beschäftigt sein und nicht für das Scrollen, Berühren und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß dafür, wie lange es von der ersten Anforderung, die zum DNS-Lookup und zur TCP-Verbindung führte, bis zur Interaktivität der Seite dauert - interaktiv bedeutet der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, an dem die Seite innerhalb von 50ms auf Benutzerinteraktionen reagiert. Wenn der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, ist er nicht verfügbar und kann daher nicht rechtzeitig (weniger als 50ms) auf Benutzerinteraktionen reagieren.

In unserem Beispiel wurde das Bild vielleicht schnell geladen, aber vielleicht war die Datei `another-script.js` 2MB groß und die Netzwerkverbindung unseres Benutzers war langsam. In diesem Fall würde der Benutzer die Seite sehr schnell sehen, aber nicht scrollen können, ohne dass es ruckelt, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist kein gutes Benutzererlebnis. Vermeiden Sie es, den Haupt-Thread zu belegen, wie in diesem WebPageTest-Beispiel gezeigt:

![Der Haupt-Thread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei über eine schnelle Verbindung zeitlich belegt](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden, und der Haupt-Thread war die ganze Zeit voll belegt, unempfindlich gegenüber Klickereignissen oder Bildschirmberührungen.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
