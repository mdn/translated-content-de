---
title: "Die Seite befüllen: wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: f32c38c1245815c7f520730f0cdef54960e5cee1
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer erwarten Web-Erfahrungen, deren Inhalte schnell geladen und flüssig zu interagieren sind. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessert, hilft es zu verstehen, wie der Browser funktioniert.

## Überblick

Schnelle Websites bieten bessere Benutzererfahrungen. Benutzer möchten und erwarten Web-Erfahrungen, deren Inhalte schnell geladen und flüssig zu interagieren sind.

Zwei Hauptprobleme bei der Web-Leistung hängen mit Latenzzeiten und der Tatsache zusammen, dass Browser größtenteils Single-Threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite sicherzustellen. Es ist das Ziel der Entwickler, die Seite so schnell wie möglich laden zu lassen – oder zumindest den Anschein zu erwecken, dass sie sehr schnell lädt – damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über das Netz an Computer zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Größtenteils gelten Browser als Single-Threaded. Das heißt, sie führen eine Aufgabe vom Anfang bis zum Ende aus, bevor sie eine andere Aufgabe in Angriff nehmen. Für flüssige Interaktionen ist es das Ziel des Entwicklers, performante Interaktionen der Website zu gewährleisten, von reibungslosem Scrollen bis hin zur Reaktionsfähigkeit auf Berührungen. Renderzeit ist entscheidend, um sicherzustellen, dass der Haupt-Thread alle Arbeiten erledigen kann, die wir ihm auftragen, und immer noch verfügbar ist, um Benutzerinteraktionen zu verarbeiten. Die Web-Performance kann verbessert werden, indem man das Single-Threaded-Verhalten des Browsers versteht und die Verantwortlichkeiten des Haupt-Threads, soweit möglich und sinnvoll, minimiert, um eine reibungslose Wiedergabe und sofortige Reaktionen auf Interaktionen sicherzustellen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular absendet oder andere Aktionen ausführt.

Ein Ziel der Web-Performance ist es, die für die Navigation benötigte Zeit zu minimieren. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Lookup

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo die Ressourcen für diese Seite liegen. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse von `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss ein DNS-Lookup erfolgen.

Ihr Browser fordert einen DNS-Lookup an, der schließlich von einem Namensserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich eine Zeit lang zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namensserver zu kontaktieren.

DNS-Lookups müssen in der Regel nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. DNS-Lookups müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Werbung und Metriken alle unterschiedliche Hostnamen haben, muss für jeden ein DNS-Lookup durchgeführt werden.

![Mobile Anfragen gehen zuerst an den Sendemast, dann an einen zentralen Computer der Telefonfirma bevor sie ins Internet gesendet werden.](latency.jpg)

Dies kann besonders in mobilen Netzwerken problematisch für die Leistung sein. Wenn sich ein Benutzer in einem mobilen Netzwerk befindet, muss jede DNS-Abfrage vom Telefon zum Sendemast gehen, um einen autoritativen DNS-Server zu erreichen. Der Abstand zwischen einem Telefon, einem Sendemast und dem Namensserver kann zu erheblicher Latenz führen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, richtet der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} ein. Dieser Mechanismus ist so ausgelegt, dass zwei kommunizierende Entitäten – in diesem Fall der Browser und der Webserver – die Parameter der Netzwerk-TCP-Socket-Verbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die dreifache Transaktionsmethode von TCP wird oft als "SYN-SYN-ACK" – oder genauer SYN, SYN-ACK, ACK – bezeichnet, da drei Nachrichten von TCP gesendet werden, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten, die hin und her zwischen jedem Server gehen, und die Anfrage ist noch nicht gestellt worden.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder vielmehr die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welches Verschlüsselungsverfahren verwendet wird, um die Kommunikation zu verschlüsseln, verifiziert den Server und stellt sicher, dass eine sichere Verbindung vorhanden ist, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Hin- und Herwege zum Server, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte der TLS-Aushandlung, einschließlich clienthello, serverhello und Zertifikat, clientkey und beendet für sowohl Server als auch Client.](ssl.jpg)

Auch wenn die Verbindungssicherung die Ladezeit der Seite verlängert, ist eine sichere Verbindung die Latenzkosten wert, da die zwischen dem Browser und dem Webserver übertragenen Daten von Dritten nicht entschlüsselt werden können.

Nach den acht Hin- und Herrunden zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser eine anfängliche [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods) im Namen des Benutzers, die für Webseites meist eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit relevanten Antwort-Headern und dem Inhalt der HTML.

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

Diese Antwort für diese erste Anfrage enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Zeit bis zum ersten Byte")}} (TTFB) ist die Zeit zwischen dem Zeitpunkt, an dem der Benutzer die Anfrage gestellt hat – beispielsweise durch Klicken auf einen Link – und dem Empfang dieses ersten HTML-Pakets. Das erste Inhaltspaket umfasst normalerweise 14 KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv weniger als 14 KB, aber die verlinkten Ressourcen werden nicht angefordert, bis der Browser beim Parsen auf die Verweise stößt, wie unten beschrieben.

### Überlastkontrolle / TCP-Langsamer Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server eine Bestätigung (ACK-Paket) vom Client erhalten, nachdem er eine bestimmte Anzahl von Segmenten gesendet hat.

Wenn der Server nach jedem Segment auf ein ACK wartet, kommt es zu häufigen ACKs vom Client und kann die Übertragungszeit verlängern, selbst bei geringer Netzwerkauslastung.

Andererseits kann das gleichzeitige Senden von zu vielen Segmenten dazu führen, dass in einem stark ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und über einen längeren Zeitraum ACKs zurücksendet, und der Server muss die Segmente erneut senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP-Langsamer Start")}}-Algorithmus verwendet, um die Menge der übertragenen Daten allmählich zu erhöhen, bis die maximale Netzwerkkapazität bestimmt werden kann, und um die Menge der übertragenen Daten bei hoher Netzwerklast zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Überlastungsfensters (CWND) gesteuert, das auf 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS beträgt 1500 Bytes im Ethernet-Protokoll). Dieser Wert ist die Anzahl der zu sendenden Bytes, mit deren Empfang der Client ein ACK senden muss.

Erhält der Client ein ACK, wird der CWND-Wert verdoppelt, sodass der Server das nächste Mal mehr Segmente senden kann. Wird anstelle eines ACKs keins empfangen, wird der CWND-Wert halbiert. Auf diese Weise wird ein Gleichgewicht zwischen zu vielen und zu wenigen gesendeten Segmenten erreicht.

## Parsen

Sobald der Browser das erste Datenpaket erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsen")}} ist der Schritt, den der Browser durchführt, um die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und das {{Glossary("CSSOM", "CSSOM")}} zu verwandeln, welches vom Renderer verwendet wird, um eine Seite auf dem Bildschirm anzuzeigen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM wird auch freigelegt und kann über verschiedene APIs in JavaScript manipuliert werden.

Auch wenn das angeforderte HTML der Seite größer als das anfängliche 14-KB-Paket ist, beginnt der Browser mit dem Parsen und dem Versuch, eine Erfahrung basierend auf den vorhandenen Daten zu rendern. Aus diesem Grund ist es wichtig, bei der Web-Performance-Optimierung alles einzubeziehen, was der Browser zum Starten des Renderns einer Seite benötigt, oder zumindest eine Vorlage der Seite – das CSS und HTML für das erste Rendern – in den ersten 14 KB. Bevor jedoch etwas auf dem Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript geparst werden.

### Erstellung des DOM-Baumes

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt besteht darin, das HTML-Markup zu verarbeiten und den DOM-Baum zu erstellen. Das Parsen von HTML umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Aufbau eines Baumes. HTML-Tokens enthalten Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut geformt ist, ist das Parsen simpel und schneller. Der Parser parst die tokenisierte Eingabe in das Dokument und baut den Dokumentenbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentenbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen den verschiedenen Elementen wider. Elemente, die in anderen Elementen verschachtelt sind, sind Kindknoten. Je größer die Anzahl der DOM-Knoten, desto länger dauert es, den DOM-Baum zu erstellen.

![Der DOM-Baum für unseren Beispielcode, zeigt alle Knoten inklusive Textknoten.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen findet, wie ein Bild, wird der Browser diese Ressourcen anfordern und mit dem Parsen fortfahren. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente — insbesondere solche ohne `async` oder `defer`-Attribut — blockieren das Rendern und pausieren das Parsen von HTML. Zwar beschleunigt der Preload-Scanner diesen Prozess, aber übermäßige Skripte können immer noch eine erhebliche Engstelle sein.

### Preload-Scanner

Während der Browser den DOM-Baum aufbaut, belegt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt durchsehen und hochpriorisierte Ressourcen wie CSS, JavaScript und Web-Schriftarten anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser eine Referenz zu einer externen Ressource findet, um sie anzufordern. Er wird Ressourcen im Hintergrund abholen, sodass sie, wenn der Haupt-HTML-Parser die angeforderten Ressourcen erreicht, bereits in Übertragung sein können oder heruntergeladen wurden. Die Optimierungen, die der Preload-Scanner bietet, verringern Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="myscript.js" async></script>
<img src="myimage.jpg" alt="image description" />
<script src="anotherscript.js" async></script>
```

In diesem Beispiel, während der Haupt-Thread das HTML und CSS parst, wird der Preload-Scanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die Reihenfolge der JavaScript-Verarbeitung und -Ausführung wichtig ist.

Warten auf den Erhalt von CSS blockiert zwar nicht das Parsen oder Herunterladen von HTML, blockiert jedoch JavaScript, da JavaScript oft verwendet wird, um den Einfluss von CSS-Eigenschaften auf Elemente abzufragen.

### Erstellung des CSSOM-Baumes

Der zweite Schritt im kritischen Rendering-Pfad besteht darin, CSS zu verarbeiten und den CSSOM-Baum zu erstellen. Das CSS-Objektmodell ist dem DOM ähnlich. Sowohl DOM als auch CSSOM sind Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte von Stilen, die er versteht und mit denen er arbeiten kann. Der Browser durchläuft jede Regel im CSS und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Ähnlich wie HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zum-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum enthält Stile aus dem Benutzeragenten-Stilblatt. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile, indem er spezifischere Regeln anwendet. Mit anderen Worten, er lässt die Eigenschaftswerte durchlaufen.

Der Aufbau des CSSOM ist sehr schnell und wird nicht in einer einzigartigen Farbe in aktuellen Entwicklerwerkzeugen angezeigt. Vielmehr zeigt das "Recalculate Style" in den Entwicklerwerkzeugen die Gesamtzeit an, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu erstellen und rekursiv berechnete Stile zu berechnen. In Bezug auf die Optimierung der Web-Performance gibt es weniger dringende Probleme, da die Gesamtzeit zur Erstellung des CSSOM im Allgemeinen weniger als die Zeit für einen DNS-Lookup benötigt.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Ressourcen, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und leiten sie an einen Compiler weiter, der Bytecode ausgibt. Dies ist als JavaScript-Kompilierung bekannt. Der größte Teil des Codes wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web-Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Zugänglichkeitsbaums

Der Browser erstellt auch einen [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility), den unterstützende Geräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Accessibility Object Model (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Zugänglichkeitsbaum, wenn das DOM aktualisiert wird. Der Zugänglichkeitsbaum ist von unterstützenden Technologien selbst nicht änderbar.

Bis das AOM aufgebaut ist, sind die Inhalte für [Screenreader](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide) nicht zugänglich.

## Rendern

Zu den Rendering-Schritten gehören Stil, Layout, Malen und in einigen Fällen Komposition. Die in der Parsing-Stufe erstellten CSSOM- und DOM-Bäume werden zu einem Renderbaum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gezeichnet wird. In einigen Fällen kann Inhalt in seine eigene Ebene befördert und zusammengesetzt werden, was die Leistung verbessert, indem Teile des Bildschirms auf der GPU statt auf der CPU gemalt werden, was den Haupt-Thread entlastet.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad besteht darin, das DOM und CSSOM zu einem Renderbaum zu kombinieren. Die Erstellung des Berechneten-Stil-Baums oder Renderbaums beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder und alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragenten-Stilblättern finden, sind im Renderbaum nicht enthalten, da sie nicht im gerenderten Output erscheinen. Knoten, auf die `visibility: hidden` angewendet wurde, sind im Renderbaum enthalten, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, um den Standard des Benutzeragenten zu überschreiben, wird der `script`-Knoten in unserem oben genannten Codebeispiel nicht im Renderbaum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln auf sich angewendet. Der Renderbaum enthält alle sichtbaren Knoten mit Inhalten und berechneten Stilen — er stimmt alle relevanten Stile auf jeden sichtbaren Knoten im DOM-Baum ab und bestimmt basierend auf dem [CSS-Cascade](/de/docs/Web/CSS/Cascade), welche die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad besteht darin, das Layout auf dem Render-Baum auszuführen, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, durch den die Abmessungen und der Standort aller Knoten im Renderbaum bestimmt werden, plus die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ sind alle nachfolgenden Größen- und Positionsbestimmungen eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum aufgebaut ist, beginnt das Layout. Der Renderbaum identifizierte, welche Knoten angezeigt werden (auch wenn unsichtbar) zusammen mit ihren berechneten Stilen, jedoch nicht die Abmessungen oder die Position jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Render-Baums und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl unterschiedlicher Viewport-Größen. In dieser Phase, unter Berücksichtigung der Viewport-Größe, bestimmt der Browser, welche Größen all die verschiedenen Boxen auf dem Bildschirm haben werden. Ausgehend von der Viewport-Größe beginnt das Layout im Allgemeinen mit dem Body, das die Größen all seiner Nachkommen festlegt, mit den Boxmodell-Eigenschaften jedes Elements, einen Platzhalter für ersetzte Elemente bereitstellen, deren Abmessungen unbekannt sind, wie unser Bild.

Die erste Bestimmung der Größe und Position jedes Knotens wird als _Layout_ bezeichnet. Nachfolgende Neuberechnungen werden als _Reflows_ bezeichnet. In unserem Beispiel, nehmen wir an, dass das anfängliche Layout bevor das Bild zurückgegeben wurde erfolgt ist. Da wir die Abmessungen unseres Bildes nicht deklariert haben, wird es einen Reflow geben, sobald die Bildabmessungen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf dem Bildschirm, das zum ersten Mal als {{Glossary("First_meaningful_paint", "erste bedeutungsvolle Malung")}} bezeichnet wird. In der Mal- oder Rasterisierungsphase konvertiert der Browser jeden im Layout berechneten Kasten in tatsächliche Pixel auf dem Bildschirm. Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf dem Bildschirm, einschließlich Text, Farben, Ränder, Schatten und ersetzter Elemente wie Schaltflächen und Bilder. Der Browser muss dies super schnell machen.

Um ein reibungsloses Scrollen und Animationen zu gewährleisten, muss alles, was den Haupt-Thread beansprucht, einschließlich der Berechnung von Stilen, zusammen mit Reflow und Malung, dem Browser weniger als 16,67 ms in Anspruch nehmen. Bei einer Auflösung von 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass Neumalen noch schneller als das erste Malen abgeschlossen werden kann, wird das Zeichnen auf dem Bildschirm im Allgemeinen in mehrere Schichten unterteilt. Wenn dies geschieht, ist eine Komposition erforderlich.

Das Malen kann die Elemente im Layoutraster in Schichten aufteilen. Das Fördern von Inhalten in Schichten auf der GPU (anstatt auf dem Haupt-Thread auf der CPU) verbessert die Mal- und Neumalleistung. Bestimmte Eigenschaften und Elemente instanziieren eine Schicht, einschließlich `<video>` und `<canvas>`, und jedes Element, das die CSS-Eigenschaften von `opacity`, eine 3D-`transform`, `will-change` und ein paar andere hat. Diese Knoten werden zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert seine eigene Schicht aus einem (oder mehreren) der oben genannten Gründe, in ihrer eigenen Schicht gemalt.

Schichten verbessern die Leistung, sind jedoch teuer, was das Speichermanagement betrifft, und sollten daher als Teil von Web-Performance-Optimierungsstrategien nicht überbeansprucht werden.

### Kompostierung

Wenn Teile des Dokuments in unterschiedlichen Schichten gezeichnet werden, die sich überschneiden, ist Kompostierung erforderlich, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt richtig dargestellt wird.

Da die Seite weiterhin Ressourcen lädt, können Reflows passieren (erinnern wir uns an unser Beispielbild, das spät eingetroffen ist). Ein Reflow löst ein Neumal und eine Neukomposition aus. Hätten wir die Abmessungen unseres Bildes definiert, wäre kein Reflow erforderlich gewesen, und nur die Schicht, die neu gemalt werden musste, würde neu gemalt werden, und kompostiert, wenn nötig. Aber wir haben die Bildabmessungen nicht eingeschlossen! Wenn das Bild vom Server abgerufen wird, kehrt der Rendering-Prozess zu den Layout-Schritten zurück und beginnt von dort aus neu.

## Interaktivität

Sobald der Haupt-Thread die Seite gemalt hat, denken Sie vielleicht, wir wären "fertig". Das ist nicht notwendigerweise der Fall. Wenn die Ladezeit JavaScript einschließt, das richtig verschoben wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wird, könnte der Haupt-Thread beschäftigt sein und nicht für Scrollen, Berührung und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Zeit bis zur Interaktivität")}} (TTI) ist die Messung der Zeit, die es von dieser ersten Anfrage, die zum DNS-Lookup und der TCP-Verbindung führte, dauerte, bis zur Interaktivität der Seite — interaktiv bedeutet den Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, wenn die Seite innerhalb von 50 ms auf Benutzerinteraktionen antwortet. Wenn der Haupt-Thread damit beschäftigt ist, JavaScript zu parsen, kompilieren und auszuführen, steht er nicht zur Verfügung und ist daher nicht in der Lage, rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen zu reagieren.

In unserem Beispiel lud das Bild vielleicht schnell, aber vielleicht war die `anotherscript.js`-Datei 2 MB groß und die Netzwerkverbindung des Benutzers langsam. In diesem Fall würde der Benutzer die Seite super schnell sehen, aber nicht ohne Ruckeln scrollen können, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Haupt-Thread zu beanspruchen, wie in diesem WebPageTest-Beispiel gezeigt:

![Der Haupt-Thread ist vom Herunterladen, Parsen und Ausführen einer JavaScript-Datei – über eine schnelle Verbindung – beansprucht.](visa_network.png)

In diesem Beispiel beanspruchte die JavaScript-Ausführung länger als 1,5 Sekunden, und der Haupt-Thread war die gesamte Zeit vollständig beansprucht, ohne auf Klickevents oder Bildschirmberührungen reagieren zu können.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
