---
title: "Befüllen der Seite: Wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer wünschen sich Web-Erlebnisse mit Inhalt, der schnell geladen wird und flüssig interagiert. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie die Leistung und die wahrgenommene Leistung verbessert werden können, ist es hilfreich, zu wissen, wie der Browser funktioniert.

## Überblick

Schnelle Websites bieten bessere Benutzererlebnisse. Benutzer wollen und erwarten Web-Erlebnisse mit Inhalten, die schnell geladen werden und flüssig zu interagieren sind.

Zwei Hauptprobleme bei der Web-Performance sind Probleme, die mit Latenz zu tun haben, und Probleme, die damit zu tun haben, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite sicherzustellen. Das Ziel der Entwickler ist es, die Seite so schnell wie möglich zu laden — oder zumindest _scheinbar_ super schnell zu laden — damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Die Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über die Luft zu Computern zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Größtenteils werden Browser als single-threaded betrachtet. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe aufnehmen. Für flüssige Interaktionen ist das Ziel des Entwicklers, performante Website-Interaktionen sicherzustellen, von flüssigem Scrollen bis hin zu reaktionsschneller Berührung. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Hauptthread alle Arbeiten, die wir ihm geben, abschließen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu bearbeiten. Die Web-Performance kann verbessert werden, indem man die single-threaded Natur des Browsers versteht und die Aufgaben des Hauptthreads, wo möglich und sinnvoll, minimiert, um sicherzustellen, dass das Rendering flüssig ist und die Reaktionen auf Interaktionen sofort erfolgen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie tritt immer dann auf, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular absendet oder andere Aktionen ausführt.

Eines der Ziele der Web-Performance ist es, die Zeit zu minimieren, die die Navigation zum Abschluss benötigt. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Website noch nie besucht haben, muss eine DNS-Abfrage erfolgen.

Ihr Browser fordert eine DNS-Abfrage an, die schließlich von einem Nameserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser anfänglichen Anfrage wird die IP wahrscheinlich für eine Weile gecacht, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Nameserver zu kontaktieren.

DNS-Abfragen müssen in der Regel nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. DNS-Abfragen müssen jedoch für jeden eindeutigen Hostnamen erfolgen, den die angeforderte Seite referenziert. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobil Anfragen gehen zuerst an den Sendemast, dann an einen zentralen Computer der Telefongesellschaft, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann für die Performance problematisch sein, insbesondere in mobilen Netzwerken. Wenn ein Benutzer in einem mobilen Netzwerk ist, muss jede DNS-Abfrage vom Telefon über den Sendemast gehen, um einen autoritativen DNS-Server zu erreichen. Die Distanz zwischen einem Telefon, einem Sendemast und dem Nameserver kann eine erhebliche Latenz hinzufügen.

### TCP-Handschlag

Sobald die IP-Adresse bekannt ist, richtet der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} ein. Dieser Mechanismus ist so konzipiert, dass zwei kommunizierende Entitäten — in diesem Fall der Browser und der Webserver — die Parameter der TCP-Netzwerksocket-Verbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die Technik des drei-Wege-Handshake von TCP wird oft als "SYN-SYN-ACK" bezeichnet — oder genauer SYN, SYN-ACK, ACK — weil TCP drei Nachrichten überträgt, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für über HTTPS hergestellte sichere Verbindungen ist eine weitere "Handshake" erforderlich. Diese Handshake, oder vielmehr die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welches Verschlüsselungsverfahren zur Verschlüsselung der Kommunikation verwendet wird, überprüft den Server und stellt sicher, dass eine sichere Verbindung vorhanden ist, bevor mit der eigentlichen Datenübertragung begonnen wird. Dies erfordert fünf weitere Rundfahrten zum Server, bevor die Anforderung nach Inhalt tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte des TLS-Handshake, einschließlich Client Hello, Server Hello und Zertifikat, Client Key und Fertigstellung sowohl für Server als auch Client.](ssl.jpg)

Obwohl es Zeit kostet, die Verbindung sicher zu machen, ist eine sichere Verbindung die Latenzbelastung wert, da die zwischen dem Browser und dem Webserver übertragenen Daten von Dritten nicht entschlüsselt werden können.

Nach den acht Rundfahrten zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver aufgebaut haben, sendet der Browser im Namen des Benutzers eine anfängliche [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods), die bei Websites meistens eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit den entsprechenden Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort für diese erste Anfrage enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Zeitpunkt, zu dem der Benutzer die Anfrage gestellt hat — zum Beispiel durch Klicken auf einen Link — und dem Empfang dieses ersten Pakets von HTML. Der erste Datenblock ist in der Regel 14 KB groß.

In unserem obigen Beispiel ist die Anfrage definitiv weniger als 14 KB groß, aber die verlinkten Ressourcen werden nicht angefordert, bis der Browser die Links während des Parsens entdeckt, wie unten beschrieben.

### Überlastkontrolle / TCP-Langsamer Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server eine Bestätigung vom Client in Form eines ACK-Pakets erhalten, nachdem er eine bestimmte Anzahl von Segmenten gesendet hat.

Wenn der Server nach jedem Segment auf ein ACK wartet, führt dies zu häufigen ACKs vom Client und kann die Übertragungszeit erhöhen, selbst im Fall eines Netzwerks mit niedriger Auslastung.

Andererseits kann das Senden zu vieler Segmente auf einmal zu dem Problem führen, dass in einem stark ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und nur lange Zeit mit ACKS antwortet, und der Server die Segmente erneut senden muss.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP-Langsamer Start")}}-Algorithmus verwendet, um die Menge der übertragenen Daten allmählich zu erhöhen, bis die maximale Netzwerkbandbreite ermittelt werden kann, und um die Menge der übertragenen Daten bei hoher Netzauslastung zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Überlastungsfensters (CWND) kontrolliert, das auf 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS beträgt 1500 Bytes über das Ethernet-Protokoll). Dieser Wert ist die Anzahl von Bytes, die gesendet werden, bei deren Erhalt der Client ein ACK senden muss.

Wird ein ACK empfangen, verdoppelt sich der CWND-Wert, sodass der Server beim nächsten Mal mehr Segmente senden kann. Wird stattdessen kein ACK empfangen, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht so ein Gleichgewicht zwischen dem Senden zu vieler Segmente und dem Senden zu weniger.

## Parsen

Sobald der Browser den ersten Datenblock erhält, kann er beginnen, die empfangenen Informationen zu parsen. {{Glossary("parse", "Parsen")}} ist der Schritt, den der Browser unternimmt, um die über das Netzwerk empfangenen Daten in den {{Glossary("DOM", "DOM")}} und die {{Glossary("CSSOM", "CSSOM")}} zu verwandeln, die vom Renderer verwendet werden, um eine Seite auf dem Bildschirm zu zeichnen.

Der DOM ist die interne Darstellungsform des Markups für den Browser. Der DOM ist auch verfügbar und kann über verschiedene APIs in JavaScript manipuliert werden.

Selbst wenn das HTML der angeforderten Seite größer als das anfängliche 14-KB-Paket ist, wird der Browser beginnen zu parsen und basierend auf den Daten, die er hat, eine Erfahrung zu rendern. Deshalb ist es wichtig, dass die Web-Performance-Optimierung alles einschließt, was der Browser benötigt, um eine Seite zu rendern, oder zumindest eine Vorlage der Seite — das CSS und HTML, das für die erste Darstellung benötigt wird — in den ersten 14 KB. Bevor jedoch etwas auf dem Bildschirm gerendert wird, müssen HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt ist das Verarbeiten des HTML-Markups und der Aufbau des DOM-Baums. HTML-Parsen umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Tokens umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut strukturiert ist, ist das Parsen einfach und schneller. Der Parser parst den tokenisierten Input in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Elemente, die in andere Elemente eingebettet sind, sind Kindknoten. Je größer die Anzahl der DOM-Knoten, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten zeigt, einschließlich Textknoten.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, wird der Browser diese Ressourcen anfordern und weiterhin parsen. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente — insbesondere solche ohne ein [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer` Attribut — blockieren das Rendering und pausieren das Parsen von HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte immer noch ein erhebliches Nadelöhr darstellen.

### Preload-Scanner

Während der Browser den DOM-Baum aufbaut, belegt dieser Prozess den Hauptthread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt parsen und Ressourcen mit hoher Priorität wie CSS, JavaScript und Web-Schriftarten anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser einen Verweis auf eine externe Ressource findet, um sie anzufordern. Er wird Ressourcen im Hintergrund abrufen, sodass sie möglicherweise bereits im Flug sind oder heruntergeladen wurden, sobald der Haupt-HTML-Parser die angeforderten Assets erreicht. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockierungen.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel, während der Hauptthread das HTML und CSS parst, wird der Preload-Scanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu, oder das `defer`-Attribut, wenn die Reihenfolge des JavaScript-Parsens und -Ausführens wichtig ist.

Das Warten auf das Abrufen von CSS blockiert nicht das Parsen oder Herunterladen von HTML, aber es blockiert JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist das Verarbeiten von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. Der DOM und der CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte von Stilen, die er verstehen und bearbeiten kann. Der Browser geht jedes Regelset im CSS durch und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie auch beim HTML muss der Browser die empfangenen CSS-Regeln in etwas konvertieren, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, aber für das CSS.

Der CSSOM-Baum umfasst Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile, indem er spezifischere Regeln anwendet. Mit anderen Worten, es kaskadiert die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Bauzeitinformationen werden nicht in den Entwicklertools angezeigt. Vielmehr zeigt der "Stil neu berechnen" in den Entwicklertools die gesamte Zeit, die zum Parsen von CSS, zum Konstruieren des CSSOM-Baums und zum rekursiven Berechnen der berechneten Stile benötigt wird. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, Optimierungsbemühungen zu investieren, da die Gesamtzeit zum Erstellen des CSSOM im Allgemeinen weniger Zeit in Anspruch nimmt als eine DNS-Abfrage.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und das CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume parsiert. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und geben sie an einen Compiler weiter, der Bytecode ausgibt. Dies ist als JavaScript-Kompilierung bekannt. Der größte Teil des Codes wird im Hauptthread interpretiert, aber es gibt Ausnahmen wie Code, der in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Zugänglichkeitsbaums

Der Browser baut auch einen [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility) auf, den unterstützende Geräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Zugänglichkeitsobjektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Zugänglichkeitsbaum, wenn der DOM aktualisiert wird. Der Zugänglichkeitsbaum kann von unterstützenden Technologien selbst nicht verändert werden.

Bis das AOM aufgebaut ist, sind die Inhalte nicht zugänglich für [Bildschirmleser](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide).

## Rendern

Zu den Rendering-Schritten gehören Stil, Layout, Malen und in einigen Fällen Kompositing. Die im Parsen-Schritt erstellten CSSOM- und DOM-Bäume werden in einen Renderbaum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gemalt wird. In einigen Fällen kann Inhalt in seine eigene Schicht befördert und zusammengesetzt werden, was die Leistung verbessert, indem Teile des Bildschirms auf der GPU statt auf der CPU gemalt werden, wodurch der Hauptthread entlastet wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und CSSOM in einen Renderbaum. Der Baum der berechneten Stile, oder Renderbaum, beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und dessen Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragenten-Stylesheets finden, sind nicht im Renderbaum enthalten, da sie nicht im gerenderten Ausgabe erscheinen werden. Knoten mit `visibility: hidden` angewendet sind im Renderbaum enthalten, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, um die Benutzeragentvorgabe zu überschreiben, wird der `script`-Knoten in unserem obigen Codebeispiel nicht im Renderbaum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln angewendet. Der Renderbaum enthält alle sichtbaren Knoten mit Inhalten und berechneten Stilen — ordnet alle relevanten Stile jedem sichtbaren Knoten im DOM-Baum zu und bestimmt basierend auf der [CSS-Cascade](/de/docs/Web/CSS/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und Positionen aller Knoten im Renderbaum ermittelt werden, plus die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum gebaut ist, beginnt das Layout. Der Renderbaum hat identifiziert, welche Knoten angezeigt werden (auch wenn sie unsichtbar sind) und ihre berechneten Stile, aber nicht die Dimensionen oder Positionen jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, startet der Browser an der Wurzel des Renderbaums und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und verschiedene Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl unterschiedlicher Ansichtsgrößen. In dieser Phase, unter Berücksichtigung der Größe des Ansichtsfensters, ermittelt der Browser, welche Größen alle unterschiedlichen Kästen auf dem Bildschirm haben werden. Ausgehend von der Größe des Ansichtsfensters als Basis, beginnt das Layout normalerweise mit dem Body, der die Größen aller Nachkommen des Bodys bestimmt, mit den Boxmodell-Eigenschaften jedes Elements, die Platzhalterplatz für ersetzte Elemente bieten, deren Dimensionen er nicht kennt, wie unser Bild.

Die erste Bestimmung der Größe und Position jedes Knotens wird _Layout_ genannt. Nachfolgende Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel nehmen wir an, dass das anfängliche Layout stattfindet, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird es einen Reflow geben, sobald die Bilddimensionen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf dem Bildschirm, das erste Malen wird als {{Glossary("First_meaningful_paint", "First meaningful paint")}} bezeichnet. In der Malphase oder Rasterisierungsphase konvertiert der Browser jeden im Layoutschritt berechneten Kasten in tatsächliche Pixel auf dem Bildschirm. Malen beinhaltet das Zeichnen jedes visuellen Teils eines Elements auf dem Bildschirm, einschließlich Text, Farben, Rändern, Schatten und ersetzten Elementen wie Schaltflächen und Bildern. Der Browser muss dies super schnell tun.

Um flüssiges Scrollen und Animationen sicherzustellen, muss alles, was den Hauptthread belegt, einschließlich Berechnen von Stilen, zusammen mit Reflow und Malen, innerhalb von weniger als 16,67 ms abgeschlossen sein. Bei 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixels, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Übermalen noch schneller als das ursprüngliche Malen erfolgen kann, wird das Zeichnen auf dem Bildschirm im Allgemeinen in mehrere Schichten aufgeteilt. Wenn dies geschieht, ist ein Kompositing erforderlich.

Malen kann die Elemente im Layoutbaum in Schichten aufteilen. Das Hochstufen von Inhalten in Schichten auf der GPU (statt auf dem Haupt-Thread auf der CPU) verbessert die Mal- und Übermal-Performance. Es gibt spezifische Eigenschaften und Elemente, die eine Schicht instanziieren, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas), und jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/opacity), eine 3D- [`transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und einige andere benötigt. Diese Knoten werden auf ihre eigene Schicht gemalt, zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert aus einem (oder mehreren) der obigen Gründe eine eigene Schicht.

Schichten verbessern die Performance, sind jedoch teuer in Bezug auf das Speichermanagement, daher sollten sie als Teil von Web-Performance-Optimierungsstrategien nicht übermäßig verwendet werden.

### Kompositing

Wenn Abschnitte des Dokuments in verschiedenen Schichten gezeichnet wurden, die sich gegenseitig überlappen, ist ein Kompositing erforderlich, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können Reflows auftreten (erinnern Sie sich an unser Beispielbild, das spät angekommen ist). Ein Reflow löst eine Übermalung und ein erneutes Kompositing aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Schicht, die übermalen werden musste, würde übermalt, und falls notwendig komponiert. Aber wir haben die Bilddimensionen nicht deklariert! Wenn das Bild vom Server erhalten wird, geht der Rendering-Prozess zurück zu den Layoutschritten und startet von dort neu.

## Interaktivität

Sobald der Hauptthread die Seite gemalt hat, würden Sie denken, dass wir "bereit" wären. Das ist nicht unbedingt der Fall. Wenn das Laden JavaScript umfasst, das korrekt verzögert wurde und nur nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wurde, könnte der Hauptthread beschäftigt sein und nicht für Scrollen, Berührung und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß dafür, wie lange es vom ersten Anfrage bis zur DNS-Abfrage und TCP-Verbindung dauerte, bis die Seite interaktiv wurde — interaktiv bedeutet der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, an dem die Seite auf Benutzerinteraktionen innerhalb von 50 ms reagiert. Wenn der Hauptthread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, ist er nicht verfügbar und daher nicht in der Lage, innerhalb eines angemessenen (weniger als 50 ms) Zeitrahmens auf Benutzerinteraktionen zu reagieren.

In unserem Beispiel wurde das Bild möglicherweise schnell geladen, aber vielleicht war die `another-script.js`-Datei 2 MB groß und die Netzverbindung unseres Benutzers langsam. In diesem Fall würde der Benutzer die Seite superschnell sehen, aber nicht scrollen können, ohne dass es ruckelt, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist kein gutes Benutzererlebnis. Vermeiden Sie es, den Hauptthread zu belegen, wie in diesem WebPageTest-Beispiel demonstriert:

![Der Hauptthread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei über eine schnelle Verbindung belegt](visa_network.png)

In diesem Beispiel nahm die JavaScript-Ausführung über 1,5 Sekunden in Anspruch, und der Hauptthread war die gesamte Zeit voll ausgelastet und reagierte nicht auf Klickereignisse oder Bildschirmberührungen.

## Siehe auch

- [Web Performance](/de/docs/Web/Performance)
