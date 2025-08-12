---
title: "Die Seite füllen: Wie Browser funktionieren"
short-title: Wie Browser funktionieren
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: 947a97f360339b3aced40748bc0c43427451e5b3
---

Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu verwenden sind. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie die Leistung und die wahrgenommene Leistung verbessert werden können, ist es hilfreich zu verstehen, wie der Browser funktioniert.

## Übersicht

Schnelle Websites bieten bessere Benutzererfahrungen. Benutzer wünschen und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu verwenden sind.

Zwei Hauptprobleme bei der Web-Performance sind Probleme im Zusammenhang mit Latenz und Probleme, die mit der Tatsache zu tun haben, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine Seite schnell laden zu lassen. Es ist das Ziel der Entwickler, die Seite so schnell wie möglich laden zu lassen – oder zumindest den Anschein zu erwecken, dass sie blitzschnell lädt – damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerk-Latenz ist die Zeit, die benötigt wird, um Bytes über das Netz zu Computern zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich laden zu lassen.

Die meisten Browser werden als single-threaded betrachtet. Das heißt, sie führen eine Aufgabe von Anfang bis Ende aus, bevor sie eine andere Aufgabe übernehmen. Für reibungslose Interaktionen ist es das Ziel des Entwicklers, performante Site-Interaktionen sicherzustellen, von reibungslosem Scrollen bis hin zu responsiven Touch-Ereignissen. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Haupt-Thread alle Aufgaben ausführen kann, die wir ihm zuweisen, und dennoch immer verfügbar ist, um Benutzerinteraktionen zu bearbeiten. Die Web-Performance kann verbessert werden, indem man die single-threaded Natur des Browsers versteht und die Verantwortlichkeiten des Haupt-Threads möglichst und angemessen reduziert, um sicherzustellen, dass das Rendering reibungslos ist und die Reaktionen auf Interaktionen sofort erfolgen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular abschickt und andere Aktionen ausführt.

Eines der Ziele der Web-Performance ist es, die Zeit, die die Navigation benötigt, zu minimieren. Unter idealen Bedingungen dauert dies normalerweise nicht allzu lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Suche

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Assets für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Suche stattfinden.

Ihr Browser fordert eine DNS-Suche an, die letztlich von einem Nameserver abgewickelt wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine Zeit im Cache gespeichert, was spätere Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Nameserver zu kontaktieren.

DNS-Abfragen müssen in der Regel nur einmal pro Hostname für eine Seitenladung durchgeführt werden. Allerdings müssen DNS-Abfragen für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Anfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst an den Mobilfunkmast, dann an einen zentralen Telefonanbieter-Computer, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann für die Leistung problematisch sein, insbesondere in mobilen Netzwerken. Wenn ein Benutzer in einem mobilen Netzwerk ist, muss jede DNS-Anfrage vom Handy zum Mobilfunkmast erfolgen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Mobilfunkmast und dem Nameserver kann eine erhebliche Latenz verursachen.

### TCP Handshake

Sobald die IP-Adresse bekannt ist, richtet der Browser über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} eine Verbindung zum Server ein. Dieser Mechanismus ist so konzipiert, dass zwei kommunikative Entitäten - in diesem Fall der Browser und der Webserver - die Parameter der Netzwerk-TCP-Socket-Verbindung verhandeln können, bevor sie Daten übertragen, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die Drei-Wege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" bezeichnet – oder genauer SYN, SYN-ACK, ACK – da TCP drei Nachrichten sendet, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet noch drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage muss noch gestellt werden.

### TLS-Negotiation

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiteres "Handshake" erforderlich. Dieses Handshake, oder genauer die {{Glossary("TLS", "TLS")}} Negotiation, bestimmt, welcher Chiffre verwendet wird, um die Kommunikation zu verschlüsseln, überprüft den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Rundreisen zum Server, bevor die Anforderung für Inhalte tatsächlich gesendet wird.

![Die DNS-Suche, der TCP-Handshake und 5 Schritte des TLS-Handshake einschließlich Client Hello, Server Hello und Zertifikat, Client-Schlüssel und Abschluss für sowohl Server als auch Client.](ssl.jpg)

Während das Herstellen der sicheren Verbindung Zeit zum Seitenladevorgang hinzufügt, ist eine sichere Verbindung den Latenzaufwand wert, da die zwischen dem Browser und dem Webserver übertragenen Daten nicht von Dritten entschlüsselt werden können.

Nach den acht Rundreisen zum Server kann der Browser endlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser im Namen des Benutzers eine erste [HTTP-`GET`-Anfrage](/de/docs/Web/HTTP/Reference/Methods), die bei Websites meist eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit den relevanten Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort für diese erste Anfrage enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem, als der Benutzer die Anfrage gestellt hat – z. B. durch Klicken auf einen Link – und dem Empfang dieses ersten HTML-Pakets. Das erste Content-Chunk besteht normalerweise aus 14 KB an Daten.

In unserem obigen Beispiel liegt die Anfrage definitiv unter 14 KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser beim Parsen auf die Links stößt, wie unten beschrieben.

### Überlastkontrolle / TCP Slow Start

TCP-Pakete werden beim Übertragen in Segmente unterteilt. Da TCP die Reihenfolge von Paketen garantiert, muss der Server vom Client in Form eines ACK-Pakets eine Bestätigung nach dem Senden einer bestimmten Anzahl von Segmenten erhalten.

Wenn der Server nach jedem Segment auf ein ACK wartet, führt das zu häufigen ACKs vom Client und kann die Übertragungszeit erhöhen, selbst bei einer niedrigen Netzwerk-Auslastung.

Andererseits kann das gleichzeitige Senden von zu vielen Segmenten zu dem Problem führen, dass bei einem ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und nur weiterhin ACKs sendet, und der Server die Segmente erneut senden muss.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}}-Algorithmus verwendet, um die Menge der übertragenen Daten schrittweise zu erhöhen, bis die maximale Netzwerk-Bandbreite bestimmt werden kann, und um die Menge an übertragenen Daten im Falle einer hohen Netzwerk-Auslastung zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Congestion Window (CWND) gesteuert, der mit 1, 2, 4 oder 10 MSS (MSS ist 1500 Bytes über das Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl an Bytes, die gesendet werden sollen, deren Erhalt der Client mit einem ACK bestätigen muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann beim nächsten Mal mehr Segmente senden. Wenn stattdessen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieses Verfahren erreicht somit ein Gleichgewicht zwischen dem Senden von zu vielen und zu wenigen Segmenten.

## Parsen

Sobald der Browser das erste Datenstück empfängt, kann er beginnen, die empfangenen Informationen zu parsen. {{Glossary("parse", "Parsing")}} ist der Schritt, den der Browser unternimmt, um die über das Netzwerk empfangenen Daten in den {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} umzuwandeln, die vom Renderer zum Zeichnen einer Seite auf dem Bildschirm verwendet werden.

Der DOM ist die interne Darstellung des Markups für den Browser. Der DOM ist auch verfügbar und kann über verschiedene APIs in JavaScript manipuliert werden.

Auch wenn das angeforderte HTML der Seite größer als das anfängliche 14 KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, ein Erlebnis basierend auf den vorhandenen Daten zu rendern. Daher ist es wichtig, dass die Web-Performance-Optimierung alles einschließt, was der Browser benötigt, um eine Seite zu rendern oder zumindest eine Vorlage der Seite – das CSS und HTML, das für das erste Rendering benötigt wird – in den ersten 14 KB einzuschließen. Aber bevor irgendetwas auf dem Bildschirm gerendert wird, müssen HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. HTML Parsen beinhaltet [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumstrukturierung. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument wohlgeformt ist, ist das Parsen einfach und schneller. Der Parser parst die tokenisierte Eingabe in das Dokument, baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)-Element ist das erste Element und der Stammknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Elemente, die innerhalb anderer Elemente verschachtelt sind, sind Kindknoten. Je größer die Anzahl der DOM-Knoten, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten einschließlich Textknoten zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen, wie ein Bild, findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente – insbesondere ohne das [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut – blockieren das Rendering und pausieren das Parsen von HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte dennoch ein erhebliches Nadelöhr sein.

### Preload Scanner

Während der Browser den DOM-Baum erstellt, besetzt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ durch den verfügbaren Inhalt parsen und hochpriorisierte Ressourcen anfordern, wie CSS, JavaScript und Web-Schriften. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser einen Verweis auf eine externe Ressource findet, um diese anzufordern. Er ruft Ressourcen im Hintergrund ab, so dass, wenn der Haupt-HTML-Parser die angeforderten Assets erreicht, sie möglicherweise bereits in der Übertragung oder heruntergeladen sind. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel, während der Haupt-Thread das HTML und CSS parst, wird der Preload-Scanner die Skripte und das Bild finden und sie ebenfalls herunterladen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die JavaScript-Parsierung und Ausführungsreihenfolge wichtig sind.

Das Warten auf das Herunterladen von CSS blockiert das HTML-Parsen oder Herunterladen nicht, aber es blockiert JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. Der DOM und der CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte von Stilen, die er verstehen und verwenden kann. Der Browser geht jede Regelgruppe im CSS durch und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie beim HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum enthält Stile aus dem User-Agent-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten angewendet werden kann, und verfeinert die berechneten Stile rekursiv, indem spezifischere Regeln angewendet werden. Anders ausgedrückt: Er kaskadiert die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Bauzeitinformationen werden in den Entwicklertools nicht angezeigt. Vielmehr zeigt das "Stilberechnung" in den Entwicklertools die Gesamtzeit an, die zum Parsen von CSS, zum Erstellen des CSSOM-Baums und zur rekursiven Berechnung berechneter Stile benötigt wird. In Bezug auf die Web-Performance gibt es viele bessere Wege, Optimierungsaufwand zu investieren, da die Gesamtzeit, um den CSSOM zu erstellen, im Allgemeinen geringer ist als die Zeit, die eine DNS-Abfrage benötigt.

### Andere Prozesse

#### JavaScript Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://de.wikipedia.org/wiki/Abstract_Syntax_Tree) und geben sie an einen Compiler weiter, der Bytecode ausgibt. Dies wird als JavaScript-Kompilierung bezeichnet. Der Großteil des Codes wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen, wie Code, der in [Web-Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Barrierefreiheitsbaums

Der Browser erstellt auch einen [barrierefreien](/de/docs/Learn_web_development/Core/Accessibility) Baum, den Hilfstechnologien verwenden, um Inhalte zu parsen und zu interpretieren. Das barrierefreie Objektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Barrierefreiheitsbaum, wenn der DOM aktualisiert wird. Der Barrierefreiheitsbaum kann nicht von den Hilfstechnologien selbst modifiziert werden.

Bis der AOM erstellt ist, sind die Inhalte für [Screenreader](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) nicht zugänglich.

## Rendern

Rendering-Schritte umfassen Stil, Layout, Malen und in einigen Fällen Komposition. Die im Parsing-Schritt erstellten CSSOM- und DOM-Bäume werden zu einem Rendering-Baum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das anschließend auf dem Bildschirm gemalt wird. In einigen Fällen kann Inhalt in seine eigene Ebene hochgestuft und zusammengesetzt werden, wodurch die Leistung verbessert wird, indem Teile des Bildschirms auf der GPU statt auf der CPU gemalt werden, wodurch der Haupt-Thread frei wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren von DOM und CSSOM zu einem Renderbaum. Der berechnete Stilbaum, oder Renderbaum, beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden sollen, wie das [`<head>`](/de/docs/Web/HTML/Reference/Elements/head)-Element und dessen Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in User-Agent-Stylesheets finden, sind nicht im Renderbaum enthalten, da sie nicht im gerenderten Ausgabebild erscheinen werden. Knoten, bei denen `visibility: hidden` angewendet wurde, sind im Renderbaum enthalten, da sie Platz beanspruchen. Da wir keine Direktiven gegeben haben, um den User-Agent-Standard zu überschreiben, wird der `script`-Knoten in unserem obigen Codebeispiel nicht im Renderbaum enthalten sein.

Auf jeden sichtbaren Knoten werden die CSSOM-Regeln angewendet. Der Renderbaum enthält alle sichtbaren Knoten mit Inhalt und berechneten Stilen – er stimmt alle relevanten Stile mit jedem sichtbaren Knoten im DOM-Baum ab und bestimmt basierend auf dem [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und der Standort aller Knoten im Renderbaum bestimmt werden, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größe und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum erstellt ist, beginnt das Layout. Der Renderbaum identifiziert, welche Knoten angezeigt werden (auch wenn sie nicht sichtbar sind) und ihre berechneten Stile, jedoch nicht die Dimensionen oder den Standort jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser am Stamm des Renderbaums und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und verschiedene Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl von unterschiedlichen Viewport-Größen. In dieser Phase bestimmt der Browser unter Berücksichtigung der Viewportgröße, wie die Größen all der verschiedenen Boxen auf dem Bildschirm sein werden. Er beginnt im Allgemeinen mit dem Body, legt die Größen aller Nachfolger-Elemente des Bodys fest, mit den Box-Modell-Eigenschaften jedes Elements und bietet Platz für ersetzte Elemente, deren Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, wenn die Größe und Position jedes Knotens bestimmt werden, nennt man _Layout_. Nachfolgende Neukalkulationen des _Layouts_ nennt man _Reflows_. In unserem Beispiel nehmen wir an, dass das anfängliche Layout geschieht, bevor das Bild zurückgegeben wird. Da wir die Abmessungen unseres Bildes nicht deklariert haben, wird ein Reflow stattfinden, sobald die Bilddimensionen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, die erste Instanz davon wird {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} genannt. In der Mal- oder Rasterisierungsphase konvertiert der Browser jede Kiste, die in der Layoutphase berechnet wurde, in tatsächliche Pixel auf dem Bildschirm. Malen beinhaltet das Zeichnen jedes visuellen Teils eines Elements auf dem Bildschirm, einschließlich Text, Farben, Rändern, Schatten und ersetzten Elementen wie Knöpfen und Bildern. Der Browser muss dies sehr schnell tun.

Um ein reibungsloses Scrollen und Animationen sicherzustellen, muss alles, was den Haupt-Thread beschäftigt, einschließlich der Stilberechnung, zusammen mit Reflow und Malen, dem Browser weniger als 16,67 ms abverlangen. Mit einer Auflösung von 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass Neuzeichnungen noch schneller als die ursprüngliche Zeichnung durchgeführt werden können, wird das Zeichnen auf dem Bildschirm in der Regel in mehrere Ebenen unterteilt. Sollte dies auftreten, ist eine Komposition notwendig.

Malen kann die Elemente im Layout-Baum in Ebenen unterteilen. Das Hochstufen von Inhalten in Ebenen auf der GPU (statt dem Haupt-Thread auf der CPU) verbessert die Mal- und Neumalleistung. Es gibt spezifische Eigenschaften und Elemente, die eine Ebene schaffen, darunter [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas), und jedes Element, das die CSS-Eigenschaften [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-`transform`-Eigenschaft, [`will-change`](/de/docs/Web/CSS/will-change) und einige andere hat. Diese Knoten werden auf ihre eigene Ebene gemalt, zusammen mit ihren Abkömmlingen, es sei denn, ein Nachkomme benötigt seine eigene Ebene aus einem (oder mehreren) der oben genannten Gründe.

Ebenen verbessern die Leistung, sind jedoch teuer, was das Speichermanagement betrifft, und sollten daher nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien genutzt werden.

### Komposition

Wenn Abschnitte des Dokuments in verschiedenen Ebenen gezeichnet werden, die sich überschneiden, ist eine Komposition notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf dem Bildschirm angezeigt werden und der Inhalt korrekt gerendert wird.

Wird die Seite weiterhin mit Assets beladen, können Reflows auftreten (erinnern Sie sich an unser Beispielbild, das verspätet ankam). Ein Reflow löst ein Neumalen und eine Neuzusammensetzung aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Ebene, die neu gemalt werden musste, würde neu gemalt und bei Bedarf neu zusammengesetzt. Aber wir haben die Bilddimensionen nicht angegeben! Wenn das Bild vom Server abgerufen wird, kehrt der Rendering-Prozess zu den Layout-Schritten zurück und beginnt von dort an neu.

## Interaktivität

Wenn der Haupt-Thread die Seite gemalt hat, könnte man denken, dass wir "alle fertig" sind. Das ist nicht unbedingt der Fall. Wenn die Ladezeit JavaScript umfasst, das korrekt verschoben wurde und erst ausgeführt wird, nachdem das [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wird, könnte der Haupt-Thread beschäftigt sein und nicht für Scrollen, Berührungen und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist die Messung, wie lange es von der ersten Anfrage, die zur DNS-Suche und zur TCP-Verbindung führte, dauerte, bis die Seite interaktiv wurde – interaktiv bedeutet der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, wenn die Seite innerhalb von 50 ms auf Benutzerinteraktionen reagiert. Ist der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt, ist er nicht verfügbar und kann daher nicht rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen reagieren.

In unserem Beispiel hat das Bild möglicherweise schnell geladen, aber womöglich war die `another-script.js`-Datei 2 MB groß und die Netzwerkverbindung unseres Benutzers war langsam. In diesem Fall würde der Benutzer die Seite sehr schnell sehen, aber nicht ohne Ruckelei scrollen können, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Haupt-Thread zu blockieren, wie in diesem WebPageTest-Beispiel gezeigt:

![Der Haupt-Thread wird durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei - über eine schnelle Verbindung - blockiert](visa_network.png)

In diesem Beispiel dauerte die Ausführung von JavaScript über 1,5 Sekunden und der Haupt-Thread war die gesamte Zeit voll belegt und nicht reaktionsfähig auf Klickereignisse oder Bildschirmberührungen.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
