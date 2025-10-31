---
title: "Seite befüllen: Funktionsweise von Browsern"
short-title: Wie Browser funktionieren
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Nutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind. Ein Entwickler sollte daher bestrebt sein, diese beiden Ziele zu erreichen.

Um die Leistung und die wahrgenommene Leistung zu verbessern, ist es hilfreich, die Funktionsweise des Browsers zu verstehen.

## Überblick

Schnelle Seiten bieten bessere Benutzererfahrungen. Nutzer wünschen und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind.

Zwei Hauptprobleme bei der Web-Performance sind Fragen der Latenz und die Tatsache, dass Browser größtenteils einzeln threated sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu gewährleisten. Es ist das Ziel der Entwickler, die Seite so schnell wie möglich zu laden – oder zumindest _super schnell_ erscheinen zu lassen – damit der Nutzer die gewünschten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über den Äther zu Computern zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Größtenteils gelten Browser als einzeln threated. Das bedeutet, sie führen eine Aufgabe von Anfang bis Ende aus, bevor sie eine andere Aufgabe aufnehmen. Für reibungslose Interaktionen ist es das Ziel des Entwicklers, performante Seiteninteraktionen sicherzustellen, von reibungslosen Scrollen bis zur Reaktionsfähigkeit auf Berührungen. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Haupt-Thread alle ihm übertragenen Arbeiten erledigen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu bearbeiten. Die Web-Performance kann verbessert werden, indem die einzeleatenarbeiter-Natur des Browsers verstanden wird und die Verantwortung des Haupt-Threads minimiert wird, wo dies möglich und angemessen ist, um ein reibungsloses Rendering und sofortige Reaktionszeiten auf Interaktionen sicherzustellen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adresszeile eingibt, auf einen Link klickt, ein Formular abschickt oder andere Aktionen ausführt.

Ein Ziel der Web-Performance ist es, die Zeit zu minimieren, die die Navigation benötigt. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Assets für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage stattfinden.

Ihr Browser fordert eine DNS-Abfrage an, die schlussendlich von einem Nameserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine Weile zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Nameserver zu kontaktieren.

DNS-Abfragen müssen normalerweise nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. Allerdings müssen DNS-Abfragen für jeden eindeutigen Hostnamen, auf den die angeforderte Seite verweist, durchgeführt werden. Wenn Ihre Schriften, Bilder, Skripte, Anzeigen und Analysetools alle unterschiedliche Hostnamen haben, muss eine DNS-Abfrage für jeden erstellt werden.

![Mobilfunkanfragen gehen zuerst zum Mobilfunkturm, dann zu einem zentralen Rechner des Telefonunternehmens, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann für die Performance problematisch sein, insbesondere in mobilen Netzwerken. Wenn ein Nutzer in einem mobilen Netzwerk ist, muss jede DNS-Abfrage vom Telefon zum Mobilfunkturm erfolgen, um einen autoritativen DNS-Server zu erreichen. Der Abstand zwischen einem Telefon, einem Mobilfunkturm und dem Nameserver kann erhebliche Latenzzeiten hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, richtet der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Dreiwege-Handshake")}} ein. Dieser Mechanismus ist so konzipiert, dass zwei Einrichtungen, die kommunizieren möchten – in diesem Fall der Browser und der Webserver – die Parameter der Netzwerk-TCP-Socket-Verbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die Dreiwege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" bezeichnet – oder genauer als SYN, SYN-ACK, ACK – weil es drei Nachrichten gibt, die von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für über HTTPS hergestellte sichere Verbindungen ist ein weiteres "Handshake" erforderlich. Diese Handshake, genauer gesagt die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welcher Verschlüsselungsalgorithmus verwendet wird, um die Kommunikation zu verschlüsseln, verifiziert den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der tatsächliche Datentransfer beginnt. Dies erfordert fünf weitere Hin- und Rückfahrten zum Server, bevor die Anfrage für den Inhalt tatsächlich gesendet wird.

![Die DNS-Abfrage, der TCP-Handshake und 5 Schritte des TLS-Handshakes inklusive Client Hello, Server Hello und Zertifikat, Client-Schlüssel und Abschluss für sowohl Server als auch Client.](ssl.jpg)

Obwohl die Herstellung der sicheren Verbindung die Ladezeit der Seite verlängert, ist eine sichere Verbindung den Latenzaufwand wert, da die zwischen dem Browser und dem Webserver übertragenen Daten nicht von Dritten entschlüsselt werden können.

Nach den acht Roundtrips zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser einen initialen [HTTP `GET` request](/de/docs/Web/HTTP/Reference/Methods) im Namen des Benutzers, der bei Websites meistens eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit entsprechenden Antwort-Headern und den Inhalten der HTML.

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

Diese Antwort für diese erste Anfrage enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeitspanne zwischen dem Moment, in dem der Benutzer die Anfrage gestellt hat – zum Beispiel durch Klicken auf einen Link – und dem Empfang dieses ersten Pakets HTML. Das erste Inhaltspaket besteht normalerweise aus 14KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv kleiner als 14KB, aber die verknüpften Ressourcen werden erst angefordert, wenn der Browser während des Parsens auf die Links stößt, wie im Folgenden beschrieben.

### Staukontrolle / TCP Slow Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Abfolge der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Bestätigung vom Client in Form eines ACK-Pakets erhalten.

Wartet der Server nach jedem Segment auf ein ACK, führt das zu häufigen ACKs vom Client und kann die Übertragungszeit verlängern, selbst bei einem Netz mit geringer Auslastung.

Andererseits kann das Senden zu vieler Segmente auf einmal dazu führen, dass der Client in einem ausgelasteten Netz die Segmente nicht empfangen kann und nur lange Zeit mit ACKs antworten wird, und der Server muss die Segmente erneut senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}} Algorithmus verwendet, um die Menge der übertragenen Daten allmählich zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und um die Menge der übertragenen Daten zu verringern, wenn das Netzwerk stark ausgelastet ist.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Stau-Fensters (CWND) gesteuert, das auf 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS beträgt 1500 Byte über das Ethernet-Protokoll). Dieser Wert ist die Anzahl der zu sendenden Bytes, bei deren Empfang der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann beim nächsten Mal mehr Segmente senden. Wenn hingegen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht so ein Gleichgewicht zwischen dem Senden zu vieler Segmente und dem Senden zu weniger.

## Parsen

Sobald der Browser den ersten Datenblock erhält, kann er beginnen, die empfangenen Informationen zu parsen. {{Glossary("parse", "Parsing")}} ist der Schritt, den der Browser unternimmt, um die über das Netzwerk empfangenen Daten in den {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} umzuwandeln, die der Renderer verwendet, um eine Seite auf dem Bildschirm darzustellen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM ist auch zugänglich und kann über verschiedene APIs in JavaScript manipuliert werden.

Auch wenn das angeforderte HTML der Seite größer als das initiale 14KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, ein Erlebnis basierend auf den verfügbaren Daten zu rendern. Daher ist es wichtig, dass die Web-Performance optimiert wird, um alles, was der Browser zur Darstellung einer Seite benötigt, oder zumindest eine Vorlage der Seite – das CSS und HTML, das für die erste Darstellung benötigt wird – in den ersten 14KB aufzunehmen. Bevor jedoch irgendetwas auf dem Bildschirm angezeigt wird, müssen HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. HTML-Parsen umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut formatiert ist, ist das Parsen einfach und schneller. Der Parser parst das tokenisierte Eingabeformat in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html) Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen den verschiedenen Elementen wider. In andere Elemente verschachtelte Elemente sind untergeordnete Knoten. Je mehr DOM-Knoten es gibt, desto länger dauert es, den DOM-Baum zu erstellen.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten, einschließlich Textknoten, zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, wird der Browser diese Ressourcen anfordern und mit dem Parsen fortfahren. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente – insbesondere solche ohne das [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer` Attribut – blockieren das Rendering und unterbrechen das Parsen von HTML. Auch wenn der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte dennoch ein signifikanter Engpass sein.

### Preload-Scanner

Während der Browser den DOM-Baum aufbaut, belegt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt durchsuchen und Ressourcen mit hoher Priorität wie CSS, JavaScript und Webschriftarten anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser eine Referenz zu einer externen Ressource findet, um sie anzufordern. Er wird Ressourcen im Hintergrund abrufen, sodass sie möglicherweise bereits heruntergeladen wurden oder im Flug sind, wenn der Haupt-HTML-Parser die angeforderten Assets erreicht. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockierungen.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel wird der Preload-Scanner die Skripte und das Bild finden und ebenso mit dem Herunterladen beginnen, während der Haupt-Thread das HTML und CSS parst. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async` Attribut hinzu, oder das `defer` Attribut, wenn die Reihenfolge der JavaScript-Ausführung wichtig ist.

Das Herunterladen von CSS blockiert nicht das HTML-Parsen oder das Herunterladen, aber es blockiert JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist das Verarbeiten von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. Sowohl DOM als auch CSSOM sind Bäume. Sie sind unabhängige Datenstrukturen. Der Browser wandelt die CSS-Regeln in eine Formenkarte um, die er verstehen und verwenden kann. Der Browser durchläuft jede Regel im CSS und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie beim HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, aber für CSS.

Der CSSOM-Baum enthält Stile aus dem Benutzer-Agent-Stile-Bogen. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile, indem er spezifischere Regeln anwendet. Mit anderen Worten, es kaskadiert die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell und diese Aufbauzeitinformation wird nicht in den Entwicklertools angezeigt. Stattdessen zeigt das "Recalculate Style" in den Entwicklertools die gesamte Zeit an, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu erstellen und die berechneten Stile rekursiv zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, Optimierungsaufwand zu investieren, da die Gesamtzeit, um den CSSOM zu erstellen, im Allgemeinen kürzer ist, als die Zeit, die für eine DNS-Abfrage benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und geben sie an einen Compiler weiter, der Bytecode ausgibt. Dies wird als JavaScript-Kompilierung bezeichnet. Der meiste Code wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web Workers](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Barrierefreiheit-Baums

Der Browser erstellt auch einen [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)-Baum, den Assistenzgeräte verwenden, um den Inhalt zu parsen und zu interpretieren. Das Barrierefreiheit-Objektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Barrierefreiheit-Baum, wenn das DOM aktualisiert wird. Der Barrierefreiheit-Baum ist nicht durch Assistenztechnologien selbst modifizierbar.

Bis das AOM aufgebaut ist, ist der Inhalt für [Screenreader](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) nicht zugänglich.

## Rendern

Rendering-Schritte umfassen Stil, Layout, Malen und in einigen Fällen Zusammensetzen. Die im Parsen-Schrit erstellten CSSOM- und DOM-Bäume werden zu einem Render-Baum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gemalt wird. In einigen Fällen können Inhalte in eine eigene Ebene befördert und zusammengesetzt werden, wodurch die Leistung verbessert wird, indem Teile des Bildschirms auf der GPU statt auf der CPU gemalt werden, wodurch der Haupt-Thread entlastet wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und CSSOM zu einem Render-Baum. Das berechnete Stilbaum oder Render-Baum-Konstruktion beginnt mit der Wurzel des DOM-Baumes und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden sollen, wie das [`<head>`](/de/docs/Web/HTML/Reference/Elements/head) Element und seine Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragentstilen finden, werden nicht im Render-Baum aufgenommen, da sie in der gerenderten Ausgabe nicht erscheinen werden. Knoten mit `visibility: hidden` werden im Render-Baum aufgenommen, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, um die Benutzeragent-Standardwerte zu überschreiben, wird der Skriptknoten in unserem obigen Codebeispiel nicht im Render-Baum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln angewendet. Der Rendererbaum hält alle sichtbaren Knoten mit Inhalt und berechnete Stile – ordnet alle relevanten Stile jedem sichtbaren Knoten im DOM-Baum zu und bestimmt basierend auf der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Render-Baum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, durch den die Dimensionen und der Standort aller Knoten im Render-Baum bestimmt werden, plus die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Render-Baum aufgebaut ist, beginnt das Layout. Der Render-Baum identifiziert, welche Knoten angezeigt werden (auch wenn unsichtbar) zusammen mit ihren berechneten Stilen, aber nicht die Dimensionen oder der Standort jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Render-Baums und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Verschiedene Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl sich unterscheidender Viewport-Größen. In dieser Phase bestimmt der Browser unter Berücksichtigung der Viewport-Größe, wie groß alle verschiedenen Kästen auf dem Bildschirm sein werden. Der Browser startet in der Regel mit dem Body und legt die Größen aller Nachkommen des Bodys fest, wobei die Box-Modell-Eigenschaften jedes Elements als Platzhalter für ersetzte Elemente dienen, deren Dimensionen noch unbekannt sind, wie unser Bild.

Die erste Bestimmung der Größe und Position jedes Knotens wird als _Layout_ bezeichnet. Nachfolgende Neuberechnungen von _Layout_ werden als _Reflows_ bezeichnet. In unserem Beispiel nehmen wir an, dass das anfängliche Layout stattfindet, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird ein Reflow stattfinden, sobald die Bilddimensionen bekannt sind.

### Paint

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf dem Bildschirm, der erste Vorgang wird als {{Glossary("First_meaningful_paint", "erster bedeutungsvoller Paint")}} bezeichnet. In der Mal- oder Rasterisierungsphase wandelt der Browser jedes in der Layout-Phase berechnete Kästchen in tatsächliche Pixel auf dem Bildschirm um. Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf dem Bildschirm, einschließlich Text, Farben, Ränder, Schatten und ersetzter Elemente wie Buttons und Bilder. Der Browser muss dies super schnell tun.

Um reibungsloses Scrollen und Animationen zu gewährleisten, muss alles, was den Haupt-Thread belegt, einschließlich der Berechnung von Stilen sowie Reflow und Paint, dem Browser weniger als 16,67 ms Zeit kosten. Bei einer Auflösung von 2048 x 1536 hat das iPad mehr als 3.145.000 Pixel, die auf dem Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neuladen noch schneller als das erstmalige Malen erfolgen kann, wird das Zeichnen auf dem Bildschirm in der Regel in mehrere Ebenen unterteilt. Wenn dies geschieht, ist eine Komposition erforderlich.

Das Malen kann die Elemente im Layout-Baum in Schichten unterbrechen. Das Fördern von Inhalten in Schichten auf der GPU (anstelle des Haupt-Threads auf der CPU) verbessert die Performance des Malens und Neumalens. Es gibt bestimmte Eigenschaften und Elemente, die eine Schicht instantiieren, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) sowie jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity), einen 3D-[`transform`](/de/docs/Web/CSS/Reference/Properties/transform), [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) und einige andere hat. Diese Knoten werden zusammen mit ihren Nachkommen auf ihrer eigenen Ebene gemalt, es sei denn, ein Nachfolger erfordert aus einem (oder mehreren) der oben genannten Gründe eine eigene Ebene.

Ebenen verbessern die Performance, sind aber in Bezug auf das Speichermanagement kostspielig und sollten daher nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden.

### Zusammensetzen

Wenn Abschnitte des Dokuments in verschiedenen Schichten gezeichnet werden, die sich überlappen, ist eine Zusammensetzung erforderlich, um sicherzustellen, dass sie in der richtigen Reihenfolge auf dem Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Wenn die Seite weiterhin Assets lädt, können Reflows auftreten (denken Sie an unser Beispielbild, das spät ankam). Ein Reflow löst ein Neuladen und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow erforderlich gewesen, und nur die Schicht, die neu bemalt werden musste, würde neu bemalt und, falls erforderlich, neu zusammengesetzt. Aber wir haben die Bilddimensionen nicht angegeben! Wenn das Bild vom Server abgerufen wird, geht der Rendervorgang zurück zu den Layout-Schritten und beginnt von dort erneut.

## Interaktivität

Sobald der Haupt-Thread das Malen der Seite beendet hat, würde man denken, dass wir "fertig" wären. Das ist nicht unbedingt der Fall. Wenn die Seite JavaScript lädt, das korrekt aufgeschoben wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wurde, könnte der Haupt-Thread beschäftigt sein und nicht verfügbar für Scrollen, Berührungen und andere Interaktionen.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) misst, wie lange es vom ersten Anfrage, die zur DNS-Abfrage und TCP-Verbindung führte, bis zur Interaktivität der Seite dauerte – interaktiv bedeutet, ab dem Punkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, an dem die Seite innerhalb von 50 ms auf Benutzeraktionen reagiert. Ist der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt, ist er nicht verfügbar und daher nicht in der Lage, rechtzeitig (unter 50ms) auf Benutzeraktionen zu reagieren.

In unserem Beispiel könnte das Bild schnell geladen haben, aber vielleicht war die `another-script.js` Datei 2MB groß und die Netzwerkverbindung unseres Benutzers langsam. In diesem Fall würde der Benutzer die Seite sehr schnell sehen, aber könnte nicht ohne Ruckeln scrollen, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie, den Haupt-Thread zu blockieren, wie in diesem WebPageTest-Beispiel gezeigt:

![Der Haupt-Thread ist mit dem Herunterladen, Parsen und Ausführen einer JavaScript-Datei - über eine schnelle Verbindung - ausgelastet](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden und der Haupt-Thread war die ganze Zeit voll belegt und nicht in der Lage, auf Klicks oder Bildschirmberührungen zu reagieren.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
