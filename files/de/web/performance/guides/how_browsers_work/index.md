---
title: "Das Befüllen der Seite: wie Browser arbeiten"
short-title: Wie Browser arbeiten
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Benutzer möchten Web-Erlebnisse mit Inhalten, die schnell geladen werden und sich flüssig bedienen lassen. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessern kann, hilft es zu verstehen, wie der Browser funktioniert.

## Überblick

Schnelle Websites bieten bessere Benutzererlebnisse. Benutzer möchten und erwarten Web-Erlebnisse mit Inhalten, die schnell geladen werden und sich flüssig bedienen lassen.

Zwei Hauptprobleme der Web-Performance sind Probleme in Bezug auf Latenz und die Tatsache, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu sichern. Es ist das Ziel der Entwickler, die Seite so schnell wie möglich laden zu lassen — oder zumindest _erscheinen_ zu lassen, dass sie superschnell lädt — damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes drahtlos zu Computern zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Im Allgemeinen werden Browser als single-threaded angesehen. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe übernehmen. Für flüssige Interaktionen ist es das Ziel der Entwickler, performante Seiteninteraktionen sicherzustellen, vom flüssigen Scrollen bis hin zur Reaktionsfähigkeit auf Berührungen. Die Renderzeit ist der Schlüssel, um sicherzustellen, dass der Haupt-Thread alle ihm gestellten Arbeiten abschließen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu verarbeiten. Web-Performance kann verbessert werden, indem man die single-threaded Natur des Browsers versteht und die Verantwortlichkeiten des Haupt-Threads minimiert, wo möglich und angebracht, um sicherzustellen, dass das Rendering flüssig ist und die Antworten auf Interaktionen sofort erfolgen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular einreicht oder andere Aktionen ausführt.

Ein Ziel der Web-Performance ist es, die Zeit zu minimieren, die die Navigation zur Fertigstellung benötigt. Unter idealen Bedingungen dauert das normalerweise nicht zu lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo die Ressourcen für diese Seite sich befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage durchgeführt werden.

Ihr Browser fordert eine DNS-Abfrage an, die letztendlich von einem Namensserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser Erstanfrage wird die IP-Adresse wahrscheinlich eine Zeit lang zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namensserver zu kontaktieren.

DNS-Abfragen müssen normalerweise nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. DNS-Abfragen müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Funkmast, dann zu einem zentralen Computer des Telefonanbieters, bevor sie ins Internet geschickt werden](latency.jpg)

Dies kann insbesondere bei mobilen Netzwerken problematisch für die Leistung sein. Wenn ein Benutzer in einem Mobilfunknetz ist, muss jede DNS-Abfrage vom Telefon zum Funkmast und dann zu einem autoritativen DNS-Server gehen. Die Entfernung zwischen einem Telefon, einem Funkmast und dem Namensserver kann erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser über einen {{Glossary("TCP_handshake", "dreiwege TCP-Handshake")}} eine Verbindung zum Server her. Dieser Mechanismus ist so konzipiert, dass zwei Entitäten, die versuchen zu kommunizieren — in diesem Fall der Browser und der Webserver — die Parameter der TCP-Netzwerksocket-Verbindung aushandeln können, bevor sie Daten übertragen, häufig über {{Glossary("HTTPS", "HTTPS")}}.

Die Technik des dreiwege TCP-Handshake wird oft als "SYN-SYN-ACK" bezeichnet — oder genauer gesagt SYN, SYN-ACK, ACK —, weil TCP drei Nachrichten überträgt, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, genauer gesagt die {{Glossary("TLS", "TLS")}}-Verhandlung, legt fest, welcher Cipher zur Verschlüsselung der Kommunikation verwendet wird, überprüft den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor die eigentliche Datenübertragung beginnt. Dafür sind fünf weitere Hin- und Rückfahrten zum Server notwendig, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Die DNS-Abfrage, der TCP-Handshake und 5 Schritte des TLS-Handshakes einschließlich Client Hello, Server Hello und Zertifikat, Client-Schlüssel und Abschluss für Server und Client.](ssl.jpg)

Obwohl die Herstellung der sicheren Verbindung Zeit zum Laden der Seite hinzufügt, ist eine sichere Verbindung den Latenzaufwand wert, da die zwischen dem Browser und dem Webserver übertragenen Daten von Dritten nicht entschlüsselt werden können.

Nach den acht Hin- und Rückfahrten zum Server kann der Browser endlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser eine anfängliche [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Reference/Methods) im Namen des Benutzers, bei Websites handelt es sich dabei meist um eine HTML-Datei. Sobald der Server die Anfrage erhält, antwortet er mit den relevanten Antwort-Headern und dem Inhalt der HTML.

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

Diese Antwort auf diese anfängliche Anfrage enthält das erste empfangene Datenbyte. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Zeitpunkt, zu dem der Benutzer die Anfrage gestellt hat — z.B. durch Klicken auf einen Link — und dem Empfang dieses ersten Pakets von HTML. Das erste Inhaltsstück sind in der Regel 14KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv weniger als 14KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser die Links während der Analyse gefunden hat, die unten beschrieben wird.

### Staukontrolle / TCP Slow Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Quittung vom Client in Form eines ACK-Pakets erhalten.

Wenn der Server nach jedem Segment auf ein ACK wartet, resultiert dies in häufigen ACKs vom Client und kann die Übertragungszeit erhöhen, selbst bei einem Netzwerk mit geringer Belastung.

Andererseits kann das Senden zu vieler Segmente auf einmal zu dem Problem führen, dass in einem ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und nur weiterhin mit ACKs antwortet, und der Server die Segmente immer wieder neu senden muss.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}} Algorithmus verwendet, um die Menge an übertragenen Daten schrittweise zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und die Menge an übertragenen Daten bei hoher Netzwerklast zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Stau-Fensters (CWND) kontrolliert, das mit 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS sind 1500 Bytes über das Ethernet-Protokoll). Dieser Wert ist die Anzahl an Bytes, die gesendet werden sollen, deren Empfang der Client mit einem ACK quittieren muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann bei der nächsten Übertragung mehr Segmente senden. Wird hingegen kein ACK empfangen, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht somit ein Gleichgewicht zwischen dem Senden zu vieler und zu weniger Segmente.

## Parsing

Sobald der Browser das erste Datenstück erhalten hat, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsing")}} ist der Schritt, bei dem der Browser die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} umwandelt, die vom Renderer verwendet werden, um eine Seite auf den Bildschirm zu malen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM ist auch zugänglich und kann über verschiedene APIs in JavaScript manipuliert werden.

Auch wenn das HTML der angeforderten Seite größer ist als das anfängliche 14KB-Paket, wird der Browser mit dem Parsen beginnen und versuchen, auf Basis der Daten, die er hat, ein Erlebnis zu rendern. Deshalb ist es wichtig, bei der Web-Performance-Optimierung alles einzubeziehen, was der Browser benötigt, um mit dem Rendern einer Seite zu beginnen, oder zumindest eine Vorlage der Seite — das CSS und HTML, das für das erste Rendering erforderlich ist — in den ersten 14 KB. Aber bevor etwas auf dem Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt ist das Verarbeiten des HTML-Markups und der Aufbau des DOM-Baums. Das Parsen von HTML umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Token umfassen Anfangs- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut geformt ist, ist das Parsen einfach und schneller. Der Parser analysiert die tokenisierten Eingaben in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Innerhalb anderer Elemente verschachtelte Elemente sind Kindknoten. Je höher die Anzahl der DOM-Knoten, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten, einschließlich Textknoten, zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen findet, wie z.B. ein Bild, fordert der Browser diese Ressourcen an und setzt das Parsing fort. Das Parsing kann fortgesetzt werden, wenn eine CSS-Datei angetroffen wird, aber `<script>`-Elemente — insbesondere solche ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut — blockieren das Rendering und unterbrechen das Parsen von HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte dennoch eine erhebliche Engstelle darstellen.

### Preload-Scanner

Während der Browser den DOM-Baum aufbaut, beschäftigt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt durchforsten und Ressourcen mit hoher Priorität wie CSS, JavaScript und Web-Schriftarten anfordern. Dank des Preload-Scanners müssen wir nicht darauf warten, dass der Parser einen Verweis auf eine externe Ressource findet, um diese anzufordern. Er ruft Ressourcen im Hintergrund ab, sodass sie bereits auf dem Weg oder heruntergeladen sein könnten, wenn der Haupt-HTML-Parser die angeforderten Ressourcen erreicht. Die Optimierungen, die der Preload-Scanner bietet, verringern Blockierungen.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel, während der Haupt-Thread das HTML und CSS parst, wird der Preload-Scanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die JavaScript-Analyse und Ausführungsreihenfolge wichtig ist.

Das Warten auf den Erhalt von CSS blockiert nicht das Parsen oder Herunterladen von HTML, aber es blockiert JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen der CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. Sowohl das DOM als auch das CSSOM sind Bäume. Es sind unabhängige Datenstrukturen. Der Browser wandelt die CSS-Regeln in eine Stilkartierung um, die er versteht und mit der er arbeiten kann. Der Browser geht jedes Regelset im CSS durch und erstellt einen Baum von Knoten mit Eltern-, Kinder- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie beim HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum enthält Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist und verfeinert rekursiv die berechneten Stile, indem spezifischere Regeln angewendet werden. Mit anderen Worten, er kaskadiert die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Zeitinformation wird nicht in den Entwicklerwerkzeugen angezeigt. Vielmehr zeigt das "Recalculate Style" in den Entwicklerwerkzeugen die Gesamtzeit an, die benötigt wird, um CSS zu analysieren, den CSSOM-Baum zu konstruieren und rekursiv die berechneten Stile zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, Optimierungsaufwand zu investieren, da die Gesamtzeit für die Erstellung des CSSOM im Allgemeinen weniger als die Zeit für eine DNS-Abfrage beträgt.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und das CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und übergeben sie an einen Compiler, der Bytecode ausgibt. Dies ist bekannt als JavaScript-Kompilierung. Der Großteil des Codes wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web-Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Barrierefreiheitsbaums

Der Browser baut auch einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility) auf, den Hilfsgeräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Accessibility-Objektmodell (AOM) ist eine Art semantische Version des DOM. Der Browser aktualisiert den Barrierefreiheitsbaum, wenn der DOM aktualisiert wird. Der Barrierefreiheitsbaum kann von Hilfstechnologien selbst nicht modifiziert werden.

Bis das AOM aufgebaut ist, sind die Inhalte für [Screenreader](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) nicht zugänglich.

## Rendering

Rendering-Schritte umfassen Stil, Layout, Malen und in einigen Fällen Kompositing. Die im Parsing-Schritt erstellten CSSOM- und DOM-Bäume werden zu einem Render-Baum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, welches dann auf den Bildschirm gemalt wird. In einigen Fällen kann Inhalt in seine eigene Ebene befördert und zusammengestellt werden, was die Performance verbessert, indem Teile des Bildschirms auf der GPU anstelle der CPU gemalt werden, wodurch der Haupt-Thread entlastet wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und des CSSOM zu einem Render-Baum. Der errechnete Stilbaum, oder Render-Baum, Aufbau beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Reference/Elements/head)-Element und seine Kinder sowie beliebige Knoten mit `display: none`, wie das `script { display: none; }` aus den Benutzeragenten-Stylesheets, werden nicht im Render-Baum aufgenommen, da sie nicht im gerenderten Ergebnis erscheinen. Knoten, auf die `visibility: hidden` angewendet wird, werden im Render-Baum aufgenommen, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, die Benutzeragenten-Standardeinstellungen zu überschreiben, wird der `script` Knoten in unserem obigen Codebeispiel nicht im Render-Baum aufgenommen.

Auf jeden sichtbaren Knoten werden seine CSSOM-Regeln angewendet. Der Render-Baum enthält alle sichtbaren Knoten mit Inhalt und berechneten Stilen — es werden alle relevanten Stile jedem sichtbaren Knoten im DOM-Baum zugeordnet, und anhand der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) werden die berechneten Stile für jeden Knoten bestimmt.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad läuft im Render-Baum ab, um die Geometrie jedes Knotens zu berechnen. _Layout_ bezeichnet den Prozess, durch den die Dimensionen und Position aller Knoten im Render-Baum bestimmt werden, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ beschreibt jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Render-Baum aufgebaut ist, beginnt das Layout. Der Render-Baum bestimmte, welche Knoten angezeigt werden (auch wenn sie unsichtbar sind) zusammen mit ihren berechneten Stilen, aber nicht die Dimensionen oder Positionen der einzelnen Knoten. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser bei der Wurzel des Render-Baums und durchläuft diesen.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Zahl unterschiedlicher Viewport-Größen. In dieser Phase, unter Berücksichtigung der Viewport-Größe, bestimmt der Browser, welche Größe all die verschiedenen Boxen auf dem Bildschirm haben werden. Das Layout beginnt in der Regel mit dem Body, indem es die Größen aller Nachkommen des Bodys berechnet, wobei es Platzhalterräume für ersetzte Elemente bereitstellt, deren Dimensionen es nicht kennt, wie z.B. unser Bild.

Der erste Zeitpunkt, an dem die Größe und Position jedes Knotens bestimmt wird, wird als _Layout_ bezeichnet. Zukünftige Neuberechnungen werden als _Reflows_ bezeichnet. In unserem Beispiel, nehmen wir an, dass das anfängliche Layout stattfindet, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird ein Reflow stattfinden, sobald die Bildmaße bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, das erste Vorkommen davon wird als {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} bezeichnet. In der Phase des Malens oder der Rasterisierung konvertiert der Browser jede in der Layout-Phase berechnete Box in tatsächliche Pixel auf dem Bildschirm. Das Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Rahmen, Schatten und ersetzten Elementen wie Schaltflächen und Bildern. Der Browser muss dies sehr schnell tun.

Um flüssiges Scrollen und Animation zu gewährleisten, muss alles, was den Haupt-Thread beansprucht, einschließlich des Berechnens von Stilen, zusammen mit Reflow und Paint, dem Browser weniger als 16,67 ms in Anspruch nehmen. Bei einer Auflösung von 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das ist eine Menge an Pixeln, die sehr schnell gezeichnet werden müssen. Um sicherzustellen, dass das Neumalen noch schneller als das initiale Malen erfolgen kann, wird das Zeichnen auf den Bildschirm in der Regel in mehrere Schichten unterteilt. Wenn dies der Fall ist, dann ist Kompositing notwendig.

Das Malen kann die Elemente im Layout-Baum in Schichten aufteilen. Das Fördern von Inhalten in Schichten auf der GPU (anstelle des Haupt-Threads auf der CPU) verbessert die Mal- und Neumal-Performance. Es gibt spezifische Eigenschaften und Elemente, die eine Schicht instanziieren, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) sowie jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-[`transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und einige andere aufweist. Diese Knoten werden zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme benötigt aufgrund eines (oder mehrerer) der oben genannten Gründe seine eigene Schicht, auf ihrer eigenen Schicht gemalt.

Schichten verbessern die Performance, sind jedoch in Bezug auf die Speicherverwaltung kostspielig und sollten daher nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden.

### Kompositing

Wenn Abschnitte des Dokuments in verschiedenen, einander überlappenden Schichten gezeichnet werden, ist ein Kompositing notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können Reflows auftreten (erinnern Sie sich an unser Beispielbild, das zu spät kam). Ein Reflow löst ein Neumalen und ein Neukompositing aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Schicht, die neu bemalt werden musste, wäre neu bemalt worden und vermutlich neu zusammengesetzt worden. Aber wir haben die Bildabmessungen nicht angegeben! Wenn das Bild vom Server abgerufen wird, kehrt der Rendering-Prozess zu den Layout-Schritten zurück und beginnt von dort neu.

## Interaktivität

Sobald der Haupt-Thread mit dem Malen der Seite fertig ist, denken Sie vielleicht, wir wären "alle bereit". Das ist jedoch nicht unbedingt der Fall. Wenn das Laden JavaScript beinhaltet, das korrekt zurückgestellt und erst ausgeführt wurde, nachdem das [`onload`](/de/docs/Web/API/Window/load_event) Ereignis ausgelöst wurde, könnte der Haupt-Thread beschäftigt sein und nicht für das Scrollen, Berühren und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist die Messung, wie lange es von dieser ersten Anfrage gedauert hat, die zur DNS-Abfrage und TCP-Verbindung führte, bis die Seite interaktiv ist – interaktiv bedeutet der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, wenn die Seite auf Benutzerinteraktionen innerhalb von 50ms reagiert. Wenn der Haupt-Thread beschäftigt ist, JavaScript zu parsen, zu kompilieren und auszuführen, ist er nicht verfügbar und kann daher nicht in rechtzeitiger (weniger als 50ms) Weise auf Benutzerinteraktionen reagieren.

In unserem Beispiel könnte das Bild schnell geladen worden sein, aber vielleicht war die `another-script.js` Datei 2MB groß und die Netzwerkverbindung unseres Benutzers langsam. In diesem Fall würde der Benutzer die Seite super schnell sehen, aber erst scrollen können, wenn das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist kein gutes Benutzererlebnis. Vermeiden Sie es, den Haupt-Thread in Anspruch zu nehmen, wie in diesem WebPageTest-Beispiel demonstriert:

![Der Haupt-Thread ist vom Herunterladen, Parsen und Ausführen einer JavaScript-Datei – über eine schnelle Verbindung – in Anspruch genommen](visa_network.png)

In diesem Beispiel dauerte die Ausführung von JavaScript über 1,5 Sekunden, und der Haupt-Thread war die gesamte Zeit vollständig belegt, also unempfänglich für Klick-Ereignisse oder Bildschirmberührungen.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
