---
title: "Die Seite füllen: Wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: f32c38c1245815c7f520730f0cdef54960e5cee1
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind. Daher sollte ein Entwickler danach streben, diese beiden Ziele zu erreichen.

Um die Leistung und die wahrgenommene Leistung zu verbessern, ist es hilfreich, zu verstehen, wie der Browser funktioniert.

## Übersicht

Schnelle Websites bieten bessere Benutzererfahrungen. Benutzer wünschen und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind.

Zwei große Probleme bei der Web-Leistung sind Latenzprobleme und die Tatsache, dass Browser größtenteils Single-Threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite sicherzustellen. Das Ziel der Entwickler ist es, die Seite so schnell wie möglich zu laden – oder zumindest _scheinbar_ super schnell zu laden –, damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über Funk an Computer zu übertragen. Web-Leistung ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Meistens werden Browser als Single-Threaded betrachtet. Das heißt, sie führen eine Aufgabe von Anfang bis Ende aus, bevor sie eine andere Aufgabe übernehmen. Für reibungslose Interaktionen ist das Ziel des Entwicklers sicherzustellen, dass die Interaktionen auf der Website performant sind, von reibungslosem Scrollen bis hin zu Reaktionen auf Berührungen. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Haupt-Thread die gesamte Arbeit, die wir ihm zuweisen, erledigen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu verarbeiten. Web-Leistung kann verbessert werden, indem man das Single-Threaded-Natur des Browsers versteht und die Verantwortlichkeiten des Hauptthreads, wo möglich und angemessen, minimiert, um sicherzustellen, dass das Rendering reibungslos ist und auf Interaktionen sofort reagiert wird.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie tritt auf, wann immer ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular absendet oder andere Aktionen durchführt.

Eines der Ziele der Web-Leistung ist es, die Zeit zu minimieren, die die Navigation benötigt, um abgeschlossen zu werden. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Lookup

Der erste Schritt zur Navigation zu einer Webseite besteht darin, herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss ein DNS-Lookup durchgeführt werden.

Ihr Browser fordert einen DNS-Lookup an, der schließlich von einem Nameserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich eine Zeit lang zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Nameserver zu kontaktieren.

DNS-Lookups müssen normalerweise nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. DNS-Lookups müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden ein DNS-Lookup durchgeführt werden.

![Mobile Anfragen gehen zuerst an den Mobilfunkmast und dann zu einem zentralen Computer des Telefonunternehmens, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann problematisch für die Leistung sein, insbesondere in Mobilfunknetzen. Wenn ein Benutzer sich in einem Mobilfunknetz befindet, muss jeder DNS-Lookup vom Telefon zum Mobilfunkmast gehen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Mobilfunkmast und dem Nameserver kann erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser eine Verbindung zum Server über einen {{glossary('TCP handshake','TCP three-way handshake')}} her. Dieser Mechanismus ist so konzipiert, dass zwei Einheiten, die versuchen zu kommunizieren – in diesem Fall der Browser und der Webserver – die Parameter der Netzwerk-TCP-Socket-Verbindung aushandeln können, bevor sie Daten übertragen, häufig über {{glossary('HTTPS')}}.

Die Dreiwege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" – oder genauer SYN, SYN-ACK, ACK – bezeichnet, weil TCP drei Nachrichten überträgt, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Diese Verhandlung, oder genauer die {{glossary('TLS')}}-Verhandlung, bestimmt, welcher Cipher zur Verschlüsselung der Kommunikation verwendet wird, verifiziert den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Rundreisen zum Server, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte des TLS-Handshakes, einschließlich clienthello, serverhello und Zertifikat, clientkey und abgeschlossen sowohl für Server als auch Client.](ssl.jpg)

Während das Herstellen einer sicheren Verbindung Zeit zum Laden der Seite hinzufügt, ist eine sichere Verbindung die Latenzaufwand wert, da die zwischen dem Browser und dem Webserver übertragenen Daten von Dritten nicht entschlüsselt werden können.

Nach den acht Rundreisen zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser im Auftrag des Benutzers einen ersten [HTTP-`GET`-Anfrage](/de/docs/Web/HTTP/Methods), die bei Websites meistens eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit relevanten Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort bei dieser ersten Anfrage enthält das erste Byte der empfangenen Daten. {{glossary('Time to First Byte')}} (TTFB) ist die Zeitspanne zwischen dem Zeitpunkt, an dem der Benutzer die Anfrage gestellt hat – z. B. durch Klicken auf einen Link – und dem Erhalt dieses ersten Pakets an HTML. Das erste Inhaltsstück ist normalerweise 14KB an Daten.

In unserem obigen Beispiel ist die Anfrage definitiv kleiner als 14KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser auf die Links während des Parsens stößt, wie unten beschrieben.

### Überlastungssteuerung / TCP slow start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Bestätigung vom Client in Form eines ACK-Pakets erhalten.

Wenn der Server nach jedem Segment auf ein ACK wartet, führt das zu häufigen ACKs vom Client und kann die Übertragungszeit erhöhen, auch bei gering ausgelasteten Netzwerken.

Andererseits kann das Senden zu vieler Segmente auf einmal dazu führen, dass der Client in einem stark ausgelasteten Netzwerk die Segmente nicht empfangen kann und nur lange Zeit mit ACKs antwortet, und der Server muss die Segmente neu senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{glossary('TCP slow start')}}-Algorithmus verwendet, um die Menge der übertragenen Daten allmählich zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und um die Menge der übertragenen Daten im Falle hoher Netzwerkauslastung zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Überlastfensters (CWND) gesteuert, das auf 1, 2, 4 oder 10 MSS (MSS sind 1500 Bytes über das Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl der Bytes, die gesendet werden sollen, deren Erhalt der Client mit einem ACK bestätigen muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, sodass der Server das nächste Mal mehr Segmente senden kann. Wenn stattdessen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieses Mechanismus erreicht somit ein Gleichgewicht zwischen dem Senden zu vieler Segmente und dem Senden zu weniger.

## Parsen

Sobald der Browser das erste Datenstück empfängt, kann er mit dem Parsen der empfangenen Informationen beginnen. {{glossary('Parse', 'Parsen')}} ist der Schritt, den der Browser unternimmt, um die Daten, die er über das Netzwerk erhält, in den {{glossary('DOM')}} und {{glossary('CSSOM')}} umzuwandeln, die vom Renderer verwendet werden, um eine Seite auf dem Bildschirm zu zeichnen.

Der DOM ist die interne Darstellung des Markups für den Browser. Der DOM ist auch freigelegt und kann über verschiedene APIs in JavaScript manipuliert werden.

Selbst wenn das angeforderte HTML der Seite größer als das erste 14KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, basierend auf den ihm vorliegenden Daten eine Erfahrung zu rendern. Dies ist der Grund, warum es für die Web-Optimierung wichtig ist, alles einzubeziehen, was der Browser benötigt, um mit dem Rendern einer Seite zu beginnen, oder zumindest eine Vorlage der Seite – das CSS und HTML, das für das erste Rendern benötigt wird – in den ersten 14KB. Aber bevor irgendetwas auf den Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt ist das Verarbeiten des HTML-Markups und der Aufbau des DOM-Baums. Das Parsen von HTML beinhaltet [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Token umfassen Start- und End-Tags, sowie Attributnamen und -werte. Wenn das Dokument gut geformt ist, ist das Parsen einfach und schneller. Der Parser analysiert magnetisieren die Eingabe und fügt das Dokument hinzu, indem es den Dokumentbaum aufbaut.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und die Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. In andere Elemente verschachtelte Elemente sind untergeordnete Knoten. Je mehr DOM-Knoten es gibt, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten einschließlich Textknoten zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente – insbesondere solche ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut – blockieren das Rendern und unterbrechen das Parsen von HTML. Obwohl der Vorlade-Scanner diesen Prozess beschleunigt, können übermäßige Skripte immer noch ein erheblicher Engpass sein.

### Vorlade-Scanner

Während der Browser den DOM-Baum aufbaut, beansprucht dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Vorlade-Scanner_ durch den verfügbaren Inhalt parsen und wichtige Ressourcen wie CSS, JavaScript und Web-Schriftarten anfordern. Dank des Vorladescanners müssen wir nicht warten, bis der Parser einen Verweis auf eine externe Ressource findet, um ihn anzufordern. Er ruft Ressourcen im Hintergrund ab, sodass sie, wenn der Haupt-HTML-Parser die angeforderten Ressourcen erreicht, möglicherweise bereits in Bearbeitung oder heruntergeladen sind. Die Optimierungen, die der Vorladescanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="myscript.js" async></script>
<img src="myimage.jpg" alt="image description" />
<script src="anotherscript.js" async></script>
```

In diesem Beispiel wird der Vorladescanner beim Parsen des HTML und CSS durch den Hauptthread die Skripte und das Bild finden und diese ebenfalls herunterladen. Um sicherzustellen, dass das Skript den Vorgang nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die Parsing-Reihenfolge von JavaScript wichtig ist.

Das Warten auf CSS blockiert nicht das Parsen oder Herunterladen von HTML, blockiert jedoch JavaScript, da JavaScript häufig verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ist ähnlich wie der DOM. Der DOM und CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser wandelt die CSS-Regeln in eine Karte von Stilen um, die er verstehen und mit denen er arbeiten kann. Der Browser führt jeden Regelbestand im CSS durch und erstellt einen Baum von Knoten mit Eltern-, Kinder- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie bei HTML, muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den Prozess der HTML-zu-Objekt-Umwandlung, jedoch für das CSS.

Der CSSOM-Baum enthält Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert die berechneten Stile rekursiv, indem spezifischere Regeln angewendet werden. Mit anderen Worten, er kaskadiert die Eigenschaftenwerte.

Das Erstellen des CSSOM ist sehr, sehr schnell und wird in den aktuellen Entwicklerwerkzeugen nicht in einer einzigartigen Farbe angezeigt. Vielmehr zeigt das "Neuberechnen von Stil" in den Entwicklerwerkzeugen die gesamte Zeit an, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu konstruieren und rekursiv berechnete Stile zu berechnen. In Bezug auf die Web-Leistungsoptimierung gibt es niedrig hängende Früchte, da die Gesamtzeit zur Erstellung des CSSOM im Allgemeinen kürzer ist als die Zeit, die für einen DNS-Lookup benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Assets einschließlich JavaScript-Dateien heruntergeladen (dank des Vorladescanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und übergeben sie einem Compiler, der Bytecode ausgibt. Dies ist als JavaScript-Kompilierung bekannt. Der größte Teil des Codes wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen, wie der in [Web-Arbeitern](/de/docs/Web/API/Web_Workers_API) ausgeführte Code.

#### Aufbau des Zugänglichkeitsbaums

Der Browser erstellt auch einen [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility), der von unterstützenden Geräten verwendet wird, um Inhalte zu parsen und zu interpretieren. Das Accessibility Object Model (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Zugänglichkeitsbaum, wenn der DOM aktualisiert wird. Der Zugänglichkeitsbaum kann von unterstützenden Technologien selbst nicht geändert werden.

Bis zum Aufbau des AOM ist der Inhalt nicht für [Screenreader](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide) zugänglich.

## Rendern

Rendering-Schritte umfassen Stil, Layout, Lack und in einigen Fällen Komposition. Die im Parsen-Schritt erstellten CSSOM- und DOM-Bäume werden zu einem Renderbaum kombiniert, der verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf dem Bildschirm dargestellt wird. In einigen Fällen kann der Inhalt zu einer eigenen Ebene gefördert und zusammengesetzt werden, was die Leistung verbessert, indem Teile des Bildschirms auf der GPU anstelle der CPU gezeichnet werden, was den Haupt-Thread entlastet.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist die Kombination von DOM und CSSOM in einen Renderbaum. Der berechnete Stilbaum oder Renderbaum beginnt mit der Wurzel des DOM-Baums und geht durch jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und dessen Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragenten-Stylesheets finden, sind nicht im Renderbaum enthalten, da sie nicht im gerenderten Output erscheinen. Knoten, die `visibility: hidden` zugewiesen sind, sind im Renderbaum enthalten, da sie Platz beanspruchen. Da wir keine Anweisungen gegeben haben, die Standardeinstellungen des Benutzeragenten zu überschreiben, wird der `script`-Knoten in unserem obigen Codebeispiel nicht im Renderbaum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln darauf angewendet. Der Renderbaum enthält alle sichtbaren Knoten mit Inhalt und berechnete Stile – passt alle relevanten Stile zu jedem sichtbaren Knoten im DOM-Baum an und bestimmt, basierend auf der [CSS-Cascade](/de/docs/Web/CSS/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen von Layout auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und Position aller Knoten im Renderbaum bestimmt werden, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum aufgebaut ist, beginnt das Layout. Der Renderbaum identifizierte, welche Knoten angezeigt werden (auch wenn unsichtbar) zusammen mit ihren berechneten Stilen, aber nicht die Dimensionen oder die Position jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Renderbaums und durchläuft diesen.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Präferenzen bedeuten eine unendliche Anzahl unterschiedlicher Viewport-Größen. In dieser Phase bestimmt der Browser, unter Berücksichtigung der Größe des Viewports, wie die Größen aller verschiedenen Kästen auf dem Bildschirm sein werden. Basierend auf der Größe des Viewports startet das Layout im Allgemeinen mit dem Body, legt die Größen aller Nachkommen des Bodys fest, wobei jedes Box-Modell-Eigenschaften des Elements bereitstellt Platzhalterraum für ersetzte Elemente, deren Dimensionen er nicht kennt, wie unser Bild.

Zum ersten Mal, dass die Größe und Position jedes Knotens bestimmt werden, wird es _Layout_ genannt. Nachfolgende Neuberechnungen werden als _Reflows_ bezeichnet. In unserem Beispiel nehmen wir an, dass das erste Layout auftritt, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht angegeben haben, erfolgt ein Reflow, sobald die Bilddimensionen bekannt sind.

### Lack

Der letzte Schritt im kritischen Rendering-Pfad ist das Darstellen der einzelnen Knoten auf dem Bildschirm, das erste Vorkommen davon wird als [erste bedeutungsvolle Farbe](/de/docs/Glossary/First_meaningful_paint) bezeichnet. In der Lack- oder Rasterisierungsphase konvertiert der Browser jedes Kästchen, das in der Layoutphase berechnet wurde, in tatsächliche Pixel auf dem Bildschirm. Das Lackieren umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Rändern, Schatten und ersetzten Elementen wie Tasten und Bildern. Der Browser muss dies super schnell tun.

Um ein reibungsloses Scrollen und Animationen zu gewährleisten, muss alles, was den Haupt-Thread besetzt, einschließlich des Stils, zusammen mit Reflow und Lack, dem Browser weniger als 16,67 ms in Anspruch nehmen. Bei 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf dem Bildschirm dargestellt werden müssen. Das sind eine Menge Pixel, die sehr schnell lackiert werden müssen. Um sicherzustellen, dass Neulackierungen noch schneller als die erste Lackierung erfolgen können, wird das Zeichnen auf den Bildschirm in der Regel in mehrere Ebenen unterteilt. Wenn dies geschieht, ist Komposition notwendig.

Das Lackieren kann die Elemente im Layoutbaum in Ebenen unterteilen. Der Content in Ebenen auf der GPU (anstatt im Haupt-Thread auf der CPU) zu promoten, verbessert die Lack-und Neulack-Leistung. Es gibt spezifische Eigenschaften und Elemente, die eine Ebene initiieren, darunter [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas), und jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-`[transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und ein paar andere hat. Diese Knoten werden auf ihre eigene Ebene lackiert, zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert aus einem (oder mehreren) der oben genannten Gründe eine eigene Ebene.

Ebenen verbessern die Leistung, sind aber teuer, wenn es um das Speichermanagement geht, und sollten daher nicht übermäßig als Teil von Web-Optimierungsstrategien verwendet werden.

### Komposition

Wenn Abschnitte des Dokuments in verschiedenen Ebenen gezeichnet werden, die sich überlappen, ist eine Komposition notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezogen werden und der Inhalt korrekt dargestellt wird.

Da die Seite weiterhin Assets lädt, können Reflows auftreten (denken Sie an unser Beispielbild, das spät eingetroffen ist). Ein Reflow löst einen Neulack und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Ebene, die neu lackiert werden musste, würde neu lackiert und gegebenenfalls zusammengesetzt werden. Aber wir haben die Bilddimensionen nicht angegeben! Wenn das Bild vom Server abgerufen wird, beginnt der Rendering-Prozess erneut bei den Layout-Schritten.

## Interaktivität

Sobald der Haupt-Thread mit dem Lackieren der Seite fertig ist, könnte man denken, wir wären "fertig". Das ist nicht unbedingt der Fall. Wenn die Ladung JavaScript enthält, das korrekt verzögert wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wird, könnte der Haupt-Thread beschäftigt sein und nicht verfügbar für Scrollen, Berührung und andere Interaktionen sein.

{{glossary('Time to Interactive')}} (TTI) ist die Messung, wie lange es von dieser ersten Anfrage, die zum DNS-Lookup und zur TCP-Verbindung geführt hat, gedauert hat, bis die Seite interaktiv ist – interaktiv ist der Zeitpunkt nach der {{glossary('First Contentful Paint')}} wenn die Seite auf Benutzerinteraktionen innerhalb von 50 ms antwortet. Wenn der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, steht er nicht zur Verfügung und kann somit nicht rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen antworten.

In unserem Beispiel hat sich das Bild vielleicht schnell geladen, aber vielleicht war die `anotherscript.js`-Datei 2MB groß und die Netzwerkverbindung unseres Benutzers war langsam. In diesem Fall würde der Benutzer die Seite super schnell sehen, aber nicht ohne Ruckeln scrollen können, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Haupt-Thread zu besetzen, wie in diesem Beispiel von WebPageTest demonstriert:

![Der Haupt-Thread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei beschäftigt – über eine schnelle Verbindung](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden, und der Haupt-Thread war die gesamte Zeit vollständig besetzt und reagierte nicht auf Klickereignisse oder Bildschirmberührungen.

## Siehe auch

- [Web-Leistung](/de/docs/Web/Performance)
