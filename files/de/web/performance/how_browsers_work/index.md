---
title: "Die Seite füllen: wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell geladen werden und nahtlos zu bedienen sind. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessern kann, ist es hilfreich zu verstehen, wie der Browser funktioniert.

## Überblick

Schnelle Websites bieten bessere Benutzererfahrungen. Benutzer wünschen und erwarten Web-Erlebnisse mit Inhalten, die schnell geladen werden und nahtlos zu bedienen sind.

Zwei Hauptprobleme in der Web-Leistung sind Probleme mit Latenz und die Tatsache, dass Browser im Allgemeinen einsträngig sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu gewährleisten. Es ist das Ziel der Entwickler, die Seite so schnell wie möglich zu laden — oder zumindest _sehr_ schnell wirken zu lassen — damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über die Luft zu den Computern zu übertragen. Web-Leistung ist das, was wir tun müssen, um die Seite so schnell wie möglich laden zu lassen.

Im Allgemeinen werden Browser als einsträngig betrachtet. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe in Angriff nehmen. Für reibungslose Interaktionen ist es das Ziel des Entwicklers, leistungsstarke Website-Interaktionen zu gewährleisten, von reibungslosem Scrollen bis hin zur Reaktionsfähigkeit auf Berührungen. Die Renderzeit ist entscheidend: Der Hauptthread muss alle Aufgaben, die wir ihm zuweisen, erledigen können und dennoch immer verfügbar sein, um auf Benutzerinteraktionen zu reagieren. Die Web-Performance kann verbessert werden, indem man das einsträngige Wesen des Browsers versteht und die Verantwortlichkeiten des Hauptthreads minimiert, wo immer möglich und sinnvoll, um sicherzustellen, dass das Rendering reibungslos erfolgt und die Interaktionen sofort beantwortet werden.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Es geschieht jedes Mal, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular übermittelt oder andere Aktionen durchführt.

Eines der Ziele der Web-Leistung ist es, die Zeit zu minimieren, die die Navigation benötigt, um abgeschlossen zu werden. Unter idealen Bedingungen dauert das normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Suche

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Suche erfolgen.

Ihr Browser fordert eine DNS-Suche an, die letztendlich von einem Namensserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für einige Zeit zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namensserver zu kontaktieren.

DNS-Suchen müssen normalerweise nur einmal pro Hostname für ein Seitenladen durchgeführt werden. DNS-Suchen müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Suche durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Sendemast, dann zu einem zentralen Computer des Telefonanbieters, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann bei der Leistung problematisch sein, insbesondere in Mobilfunknetzen. Wenn ein Benutzer in einem Mobilfunknetz ist, muss jede DNS-Suche vom Telefon zum Sendemast gehen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Sendemast und dem Namensserver kann erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} her. Dieser Mechanismus ist so konzipiert, dass zwei Entitäten, die kommunizieren möchten — in diesem Fall der Browser und der Webserver — die Parameter der Netzwerk-TCP-Socket-Verbindung verhandeln können, bevor Daten übertragen werden, häufig über {{Glossary("HTTPS", "HTTPS")}}.

Die Drei-Wege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" bezeichnet — oder genauer SYN, SYN-ACK, ACK — weil drei Nachrichten von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage muss noch gestellt werden.

### TLS-Verhandlung

Für über HTTPS hergestellte sichere Verbindungen ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder eher die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welches Verschlüsselungsverfahren zur Verschlüsselung der Kommunikation verwendet wird, verifiziert den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Hin- und Rückfahrten zum Server, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte des TLS-Handshakes, einschließlich Client-Hallo, Server-Hallo und Zertifikat, Client-Schlüssel und fertig für Server und Client.](ssl.jpg)

Auch wenn das Herstellen der sicheren Verbindung zusätzliche Zeit beim Laden der Seite verursacht, ist eine sichere Verbindung die Latenzkosten wert, da die Daten, die zwischen dem Browser und dem Webserver übertragen werden, von Dritten nicht entschlüsselt werden können.

Nach den acht Hin- und Rückfahrten zum Server kann der Browser endlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser im Namen des Benutzers eine erste [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods), die bei Websites meist eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit relevanten Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort für die anfängliche Anfrage enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Moment, in dem der Benutzer die Anfrage gestellt hat — beispielsweise durch Klicken auf einen Link — und dem Empfang dieses ersten Pakets HTML. Das erste Datenstück ist normalerweise 14 KB.

In unserem obigen Beispiel ist die Anfrage definitiv kleiner als 14 KB, aber die verknüpften Ressourcen werden erst angefordert, wenn der Browser die Links beim Parsen antrifft, wie unten beschrieben.

### Stausteuerung / TCP Slow Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Sequenz der Pakete garantiert, muss der Server eine Bestätigung vom Client in Form eines ACK-Pakets erhalten, nachdem er eine bestimmte Anzahl von Segmenten gesendet hat.

Wenn der Server nach jedem Segment auf ein ACK wartet, resultiert dies in häufigen ACKs vom Client und kann die Übertragungszeit verlängern, selbst im Fall eines Netzwerks mit niedriger Auslastung.

Andererseits kann das Senden zu vieler Segmente auf einmal dazu führen, dass in einem stark ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und nur für lange Zeit mit ACKs antwortet, und der Server muss die Segmente immer wieder neu senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}}-Algorithmus verwendet, um die Menge der übertragenen Daten schrittweise zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und um die Menge der übertragenen Daten bei hoher Netzwerklast zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Stau-Fensters (CWND) gesteuert, das auf 1, 2, 4 oder 10 MSS (MSS sind 1500 Bytes im Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl der zu sendenden Bytes, bei deren Empfang der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann beim nächsten Mal mehr Segmente senden. Wenn stattdessen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus schafft somit ein Gleichgewicht zwischen dem Senden zu vieler und zu weniger Segmente.

## Parsen

Sobald der Browser das erste Datenstück erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsen")}} ist der Schritt, den der Browser unternimmt, um die Daten, die er über das Netzwerk erhält, in den {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} umzuwandeln, die vom Renderer verwendet werden, um eine Seite auf den Bildschirm zu zeichnen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM wird auch exponiert und kann über verschiedene APIs in JavaScript manipuliert werden.

Selbst wenn das angeforderte HTML der Seite größer ist als das anfängliche 14 KB-Paket, wird der Browser mit dem Parsen und dem Versuch beginnen, eine Erfahrung basierend auf den ihm vorliegenden Daten zu rendern. Deshalb ist es wichtig, bei der Optimierung der Web-Performance alles einzuschließen, was der Browser benötigt, um eine Seite anzuzeigen, oder zumindest eine Vorlage der Seite — die CSS und HTML, die für das erste Rendering benötigt werden — in den ersten 14 KB. Doch bevor irgendetwas auf dem Bildschirm gerendert wird, müssen HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. Das Parsen von HTML umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. Zu den HTML-Token gehören Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument wohlgeformt ist, ist das Parsen davon unkompliziert und schneller. Der Parser analysiert die tokenisierten Eingaben in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. In anderen Elementen eingebettete Elemente sind untergeordnete Knoten. Je mehr DOM-Knoten es gibt, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten einschließlich der Textknoten zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen findet, wie ein Bild, wird der Browser diese Ressourcen anfordern und mit dem Parsen fortfahren. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente — insbesondere solche ohne `async` oder `defer`-Attribut — blockieren das Rendering und pausieren das Parsen von HTML. Trotz des Vorladungs-Scanners, der diesen Prozess beschleunigt, können übermäßige Skripte immer noch ein signifikanter Engpass sein.

### Preload-Scanner

Während der Browser den DOM-Baum aufbaut, belegt dieser Prozess den Hauptthread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt durchsuchen und Ressourcen mit hoher Priorität wie CSS, JavaScript und Web-Schriften anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser auf einen Verweis auf eine externe Ressource stößt, um sie anzufordern. Er wird Ressourcen im Hintergrund abrufen, sodass sie möglicherweise bereits im Flug sind oder heruntergeladen wurden, wenn der Haupt-HTML-Parser die angeforderten Ressourcen erreicht. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockierungen.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel wird während der Hauptthread das HTML und CSS parst, der Preload-Scanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die Reihenfolge der JavaScript-Analyse und -Ausführung wichtig ist.

Das Warten auf den Erhalt von CSS blockiert das Parsen von HTML oder das Herunterladen nicht, blockiert aber JavaScript, da JavaScript häufig verwendet wird, um den Einfluss von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung der CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. DOM und CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Stilkarten, die er versteht und mit denen er arbeiten kann. Der Browser durchläuft jedes Regelset im CSS und erstellt einen Baum von Knoten mit Eltern-, Kinder- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie bei HTML muss der Browser die empfangenen CSS-Regeln in etwas konvertieren, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum umfasst Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile, indem spezifischere Regeln angewendet werden. Mit anderen Worten, er kaskadiert die Eigenschaftswerte.

Das Erstellen des CSSOM ist sehr, sehr schnell, und diese Bauzeitinformationen werden in den Entwicklertools nicht angezeigt.
Vielmehr zeigt das "Stil neu berechnen" in den Entwicklertools die Gesamtzeit, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu konstruieren und rekursiv berechnete Stile zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, Optimierungsbemühungen zu investieren, da die Gesamtzeit zur Erstellung des CSSOM im Allgemeinen kürzer ist als die Zeit, die für einen DNS-Abfrage benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilierung

Während die CSS analysiert wird und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und geben sie an einen Compiler weiter, der Bytecode ausgibt. Dies ist als JavaScript-Kompilierung bekannt. Der Großteil des Codes wird im Hauptthread interpretiert, es gibt jedoch Ausnahmen wie Code, der in [Web-Arbeitern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Barrierefreiheitsbaums

Der Browser erstellt auch einen [Barrierefreiheit](/de/docs/Learn/Accessibility)-Baum, den Hilfstechnologien verwenden, um Inhalte zu analysieren und zu interpretieren. Das Barrierefreiheits-Objektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Barrierefreiheitsbaum, wenn das DOM aktualisiert wird. Der Barrierefreiheitsbaum ist nicht von den Hilfstechnologien selbst änderbar.

Bis der AOM gebaut ist, sind die Inhalte nicht für [Bildschirmleser](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide) zugänglich.

## Rendern

Die Schritte beim Rendern umfassen Stil, Layout, Malen und in einigen Fällen Komposition. Die beim Parsen erstellten CSSOM- und DOM-Bäume werden zu einem Renderbaum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gemalt wird. In einigen Fällen kann der Inhalt auf seine eigene Ebene befördert und zusammengesetzt werden, was die Leistung verbessert, indem Bildschirminhalte auf der GPU statt auf der CPU gerendert werden, wodurch der Hauptthread entlastet wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist die Kombination von DOM und CSSOM zu einem Renderbaum. Der berechnete Stilbaum oder Renderbaumaufbau beginnt mit dem Wurzelknoten des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder und alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in den Benutzeragenten-Stylesheets finden, werden nicht in den Renderbaum aufgenommen, da sie nicht in der gerenderten Ausgabe angezeigt werden. Knoten mit `visibility: hidden` sind im Renderbaum enthalten, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, um den Standard des Benutzeragenten zu überschreiben, wird der `script`-Knoten in unserem obigen Beispielcode nicht in den Renderbaum aufgenommen.

Jeder sichtbare Knoten hat seine CSSOM-Regeln, die darauf angewendet werden. Der Renderbaum enthält alle sichtbaren Knoten mit Inhalten und berechneten Stilen — ordnet alle relevanten Stile jedem sichtbaren Knoten im DOM-Baum zu und bestimmt basierend auf der [CSS-Kaskade](/de/docs/Web/CSS/Cascade), welche die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, durch den die Größe und Position aller Knoten im Renderbaum bestimmt wird, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ sind alle nachfolgenden Größen- und Positionsbestimmungen eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum gebaut ist, beginnt das Layout. Der Renderbaum identifizierte, welche Knoten angezeigt werden (auch wenn sie unsichtbar sind) zusammen mit ihren berechneten Stilen, nicht aber die Dimensionen oder Position jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser am Wurzelknoten des Renderbaums und durchläuft diesen.

Auf der Webseite ist fast alles eine Box. Verschiedene Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl unterschiedlicher Viewport-Größen. In dieser Phase, unter Berücksichtigung der Viewport-Größe, bestimmt der Browser, wie die Größen aller verschiedenen Boxen auf dem Bildschirm sein werden. Unter Verwendung der Viewport-Größe als Basis beginnt das Layout im Allgemeinen mit dem Körper, indem es die Größen aller Nachkommen des Körpers anordnet, wobei die Box-Modell-Eigenschaften jedes Elements Platzhalterraum für ersetzte Elemente bereitstellen, deren Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, dass die Größe und Position jedes Knotens bestimmt wird, nennt man _Layout_. Nachfolgende Neuberechnungen werden als _Reflows_ bezeichnet. In unserem Beispiel nehmen wir an, das erste Layout erfolgt bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird es einen Reflow geben, sobald die Bilddimensionen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, dessen erstes Auftreten als {{Glossary("First_meaningful_paint", "erstes bedeutungsvolles Malen")}} bezeichnet wird. In der Mal- oder Rasterisierungsphase konvertiert der Browser jede Box, die in der Layoutphase berechnet wurde, in tatsächliche Pixel auf dem Bildschirm. Das Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Ränder, Schatten und ersetzter Elemente wie Knöpfe und Bildern. Der Browser muss dies sehr schnell tun.

Um ein reibungsloses Scrollen und Animationen zu gewährleisten, muss alles, was den Hauptthread beschäftigt, einschließlich der Berechnung von Stilen, zusammen mit Reflow und Malen, beim Browser in weniger als 16,67 ms erledigt sein. Bei 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neumalen noch schneller als das erste Malen erfolgt, wird das Zeichnen auf den Bildschirm im Allgemeinen in mehrere Ebenen aufgeteilt. Wenn dies geschieht, ist Komposition notwendig.

Das Malen kann die Elemente im Layoutbaum in Ebenen aufteilen. Das Fördern von Inhalten in Ebenen auf der GPU (anstatt auf dem Hauptthread auf der CPU) verbessert die Mal- und Neumal-Leistung. Es gibt spezifische Eigenschaften und Elemente, die eine Ebene initiieren, darunter [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) sowie jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-[`transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und einige andere hat. Diese Knoten werden zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert aus einem (oder mehreren) der oben genannten Gründe seine eigene Ebene.

Ebenen verbessern die Leistung, sind jedoch kostspielig in Bezug auf die Speicherverwaltung, sodass sie nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden sollten.

### Komposition

Wenn Abschnitte des Dokuments in verschiedenen Ebenen gezeichnet werden, die übereinanderliegen, ist Komposition notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können Reflows passieren (erinnern Sie sich an das Beispielbild, das spät ankam). Ein Reflow löst ein Neumalen und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow nötig gewesen und nur die Ebene, die neu gemalt werden musste, würde neu gemalt und bei Bedarf zusammengesetzt. Aber wir haben die Bilddimensionen nicht eingefügt! Wenn das Bild vom Server abgerufen wird, geht der Renderprozess zurück zu den Layoutschritten und beginnt von dort neu.

## Interaktivität

Sobald der Hauptthread mit dem Malen der Seite fertig ist, könnten Sie denken, wir wären "startklar." Das ist nicht unbedingt der Fall. Wenn die Ladung JavaScript enthält, das korrekt verzögert wurde und nur ausgeführt wird, nachdem das [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wurde, könnte der Hauptthread beschäftigt sein, und nicht verfügbar für das Scrollen, das Berühren und andere Interaktionen.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß für die Dauer von der ersten Anfrage, die zur DNS-Abfrage und TCP-Verbindung führte, bis die Seite interaktiv ist — interaktiv ist der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, an dem die Seite innerhalb von 50 ms auf Benutzerinteraktionen reagiert. Wenn der Hauptthread mit Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, ist er nicht verfügbar und daher nicht in der Lage, rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen zu reagieren.

In unserem Beispiel könnte das Bild schnell geladen sein, aber vielleicht war die Datei `another-script.js` 2 MB groß und die Netzwerkverbindung unseres Benutzers war langsam. In diesem Fall würde der Benutzer die Seite sehr schnell sehen, aber nicht ohne Ruckeln scrollen können, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Hauptthread zu beschäftigen, wie in diesem WebPageTest-Beispiel demonstriert:

![Der Hauptthread ist durch Herunterladen, Parsen und Ausführen einer JavaScript-Datei über eine schnelle Verbindung beschäftigt](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden, und der Hauptthread war während dieser gesamten Zeit vollständig beschäftigt und nicht in der Lage, auf Klickereignisse oder Bildschirmtipps zu reagieren.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
