---
title: "Die Seite füllen: Wie Browser arbeiten"
short-title: Wie Browser arbeiten
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos interagieren. Daher sollte ein Entwickler diese beiden Ziele anstreben.

Um die Leistung und die wahrgenommene Leistung zu verbessern, ist es hilfreich zu verstehen, wie der Browser arbeitet.

## Überblick

Schnelle Websites bieten bessere Benutzererlebnisse. Benutzer wünschen sich und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos interagieren.

Zwei große Probleme bei der Web-Performance sind Probleme mit der Latenz und Probleme damit, dass Browser größtenteils Single-Threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu gewährleisten. Das Ziel der Entwickler ist es, die Website so schnell wie möglich laden zu lassen - oder zumindest so zu wirken, als würde sie superschnell laden - damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die es kostet, Bytes über Funk zu Computern zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich laden zu lassen.

Browser werden größtenteils als Single-Threaded betrachtet. Das heißt, sie führen eine Aufgabe von Anfang bis Ende aus, bevor sie eine andere Aufgabe annehmen. Für reibungslose Interaktionen ist es das Ziel des Entwicklers, leistungsfähige Website-Interaktionen sicherzustellen, vom reibungslosen Scrollen bis zur Berührungsreaktion. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Hauptthread alle ihm übertragenen Aufgaben bewältigen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu bearbeiten. Die Web-Performance kann verbessert werden, indem die Single-Threaded-Natur des Browsers verstanden und die Verantwortlichkeiten des Hauptthreads, wo möglich und angemessen, minimiert werden, um sicherzustellen, dass das Rendering reibungslos ist und Reaktionen auf Interaktionen sofort erfolgen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie tritt immer dann auf, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular abschickt oder andere Aktionen ausführt.

Eines der Ziele der Web-Performance ist es, die Dauer der Navigation zu minimieren. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Feinde, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage erfolgen.

Ihr Browser fordert eine DNS-Abfrage an, die letztendlich von einem Nameserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine Weile zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namenserver zu kontaktieren.

DNS-Abfragen müssen in der Regel nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. Es müssen jedoch DNS-Abfragen für jeden einzigartigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Sendemast, dann zu einem zentralen Computer des Telefonunternehmens, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann problematisch für die Performance sein, insbesondere in mobilen Netzwerken. Wenn ein Benutzer in einem mobilen Netzwerk ist, muss jede DNS-Abfrage vom Telefon zum Sendemast gelangen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Sendemast und dem Namenserver kann erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, richtet der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Dreiwege-Handshake")}} ein. Dieser Mechanismus ist so konzipiert, dass zwei Entitäten, die versuchen zu kommunizieren – in diesem Fall der Browser und der Webserver – die Parameter der TCP-Netzwerkverbindung aushandeln können, bevor Daten gesendet werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die Drei-Wege-Handshake-Methode von TCP wird oft als "SYN-SYN-ACK" bezeichnet – oder genauer als SYN, SYN-ACK, ACK – weil es drei Nachrichten sind, die von TCP gesendet werden, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und zurück zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder vielmehr die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welche Verschlüsselung verwendet wird, um die Kommunikation zu verschlüsseln, verifiziert den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der tatsächliche Datentransfer beginnt. Dies erfordert fünf weitere Rundreisen zum Server, bevor die Anfrage für Inhalte tatsächlich gesendet wird.

![Die DNS-Abfrage, der TCP-Handshake und 5 Schritte des TLS-Handshakes einschließlich Client-Hello, Server-Hello und Zertifikat, Client-Schlüssel sowie Abschluss für Server und Client](ssl.jpg)

Obwohl das Herstellen der Verbindung sicher Zeit zum Seitenladen hinzufügt, ist eine sichere Verbindung die Latenz wert, da die zwischen dem Browser und dem Webserver übertragenen Daten von Dritten nicht entschlüsselt werden können.

Nach den acht Rundreisen zum Server kann der Browser endlich die Anfrage stellen.

## Antwort

Sobald wir eine etablierte Verbindung zu einem Webserver haben, sendet der Browser eine initiale [HTTP-`GET`-Anfrage](/de/docs/Web/HTTP/Reference/Methods) im Namen des Benutzers, was für Websites meist eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit relevanten Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort für die anfängliche Anfrage enthält das erste empfangene Datenbyte. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Zeitpunkt, an dem der Benutzer die Anfrage gestellt hat – sagen wir durch Klicken auf einen Link – und dem Empfang dieses ersten HTML-Pakets. Der erste Inhaltsblock ist normalerweise 14KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv weniger als 14KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser die Links während des Parsens, wie unten beschrieben, antrifft.

### Überlastungskontrolle / TCP-Slow-Start

TCP-Pakete werden während der Übertragung in Segmente zerlegt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server vom Client eine Bestätigung in Form eines ACK-Pakets erhalten, nachdem eine bestimmte Anzahl von Segmenten gesendet wurde.

Wenn der Server für jedes Segment auf ein ACK wartet, führt dies auf dem Client zu häufigen ACKs und kann die Übertragungszeit erhöhen, sogar bei einer Netzwerk mit niedriger Last.

Andererseits, wenn zu viele Segmente auf einmal gesendet werden, kann es zu dem Problem kommen, dass der Client bei einem stark ausgelasteten Netzwerk die Segmente nicht empfangen und daher lange Zeit nur mit ACKs antworten wird, und der Server muss die Segmente immer wieder senden.

Um die Anzahl der übertragenen Segmente auszubalancieren, wird der Algorithmus des {{Glossary("TCP_slow_start", "TCP-Slow-Starts")}} verwendet, um die Menge der übertragenen Daten allmählich zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und um die Menge der übertragenen Daten bei hoher Netzwerkauslastung zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Staufensters (CWND) kontrolliert, der auf 1, 2, 4 oder 10 MSS (MSS ist 1500 Bytes über das Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl der Bytes zu senden, bei deren Empfang der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann beim nächsten Mal mehr Segmente senden. Wird stattdessen kein ACK empfangen, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht somit ein Gleichgewicht zwischen dem Versenden von zu vielen und zu wenigen Segmenten.

## Parsing

Sobald der Browser den ersten Datenblock empfängt, kann er beginnen, die empfangenen Informationen zu parsen. {{Glossary("parse", "Parsing")}} ist der Schritt, den der Browser unternimmt, um die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} umzuwandeln, die von der Rendering-Engine zum Rendern einer Seite auf dem Bildschirm verwendet werden.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM ist auch über verschiedene APIs in JavaScript zugänglich und manipulierbar.

Selbst wenn das HTML der angeforderten Seite größer als das anfängliche 14KB-Paket ist, beginnt der Browser mit dem Parsen und dem Versuch, eine Benutzererfahrung auf der Grundlage der ihm vorliegenden Daten bereitzustellen. Daher ist es wichtig, bei der Web-Performance-Optimierung alles zu berücksichtigen, was der Browser für das Starten des Renderings einer Seite benötigt, oder zumindest eine Vorlage der Seite – die CSS und HTML, die für das erste Rendern benötigt werden – in den ersten 14KB. Aber bevor irgendetwas auf den Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. Das Parsen von HTML umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument wohlgeformt ist, ist das Parsen einfach und schneller. Der Parser parst das tokenisierte Eingabedokument und baut den Dokumentenbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Reference/Elements/html)-Element ist das erste Element und die Wurzelknoten des Dokumentenbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Die innerhalb anderer Elemente verschachtelten Elemente sind Kindknoten. Je mehr DOM-Knoten vorhanden sind, desto länger dauert es, den DOM-Baum zu erstellen.

![Der DOM-Baum für unser Beispielcode, der alle Knoten einschließlich Textknoten zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei erkannt wird, aber `<script>`-Elemente – insbesondere solche ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut – blockieren das Rendering und pausieren das Parsen von HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte immer noch einen erheblichen Flaschenhals darstellen.

### Vorladescanner

Während der Browser den DOM-Baum erstellt, belegt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Vorladescanner_ den verfügbaren Inhalt durchsuchen und Ressourcen mit hoher Priorität wie CSS, JavaScript und Web-Schriften anfordern. Dank des Vorladescanners müssen wir nicht warten, bis der Parser einen Verweis auf eine externe Ressource findet, um sie anzufordern. Er ruft Ressourcen im Hintergrund ab, sodass die angeforderten Ressourcen bereits in der Übertragung oder heruntergeladen sind, sobald der Haupt-HTML-Parser die angeforderten Assets erreicht. Die Optimierungen, die der Vorladescanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel wird, während der Haupt-Thread das HTML und CSS parst, der Vorladescanner die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die Reihenfolge von JavaScript-Parsen und -Ausführen wichtig ist.

Das Warten auf CSS blockiert nicht das Parsen oder Herunterladen von HTML, aber es blockiert JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. Sowohl das DOM als auch das CSSOM sind Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte der Stile, die er verstehen und damit arbeiten kann. Der Browser geht durch jeden Regelset in der CSS und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie auch beim HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum enthält Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert die berechneten Stile rekursiv durch Anwendung spezifischerer Regeln. Mit anderen Worten, es kaskadiert die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Bauzeitinformationen werden nicht in den Entwicklerwerkzeugen angezeigt. Vielmehr zeigt das "Recalculate Style" in den Entwicklerwerkzeugen die Gesamtzeit an, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu konstruieren und die berechneten Stile rekursiv zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, Optimierungsbemühungen zu investieren, da die Gesamtzeit zum Erstellen des CSSOM im Allgemeinen weniger als die Zeit für eine DNS-Anfrage dauert.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Vorladescanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://de.wikipedia.org/wiki/Abstrakter_Syntaxbaum) und leiten sie an einen Compiler weiter, der Bytecode ausgibt. Dies wird als JavaScript-Kompilierung bezeichnet. Die meiste Code wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen, wie z. B. Code, der in [Web Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Barrierefreiheitsbaums

Der Browser erstellt auch einen [Barrierefreiheits](/de/docs/Learn_web_development/Core/Accessibility)-Baum, den unterstützende Technologien verwenden, um Inhalte zu parsen und zu interpretieren. Das Barrierefreiheitsobjektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Barrierefreiheitsbaum, wenn das DOM aktualisiert wird. Der Barrierefreiheitsbaum kann von unterstützenden Technologien selbst nicht modifiziert werden.

Bis das AOM aufgebaut ist, sind die Inhalte nicht für [Bildschirmeinleseprogramme](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) zugänglich.

## Rendering

Die Rendering-Schritte umfassen Style, Layout, Paint und in einigen Fällen Compositing. Die in der Parsing-Phase erstellten CSSOM- und DOM-Bäume werden in einem Renderbaum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gezeichnet wird. In einigen Fällen kann Inhalt zu einer eigenen Ebene gefördert und kombiniert werden, was die Performance verbessert, indem Teile des Bildschirms auf der GPU anstelle der CPU gezeichnet werden, wodurch der Haupt-Thread freigegeben wird.

### Style

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und CSSOM zu einem Renderbaum. Der Bausteinbaum oder der Renderbaum beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden sollen, wie das [`<head>`](/de/docs/Web/HTML/Reference/Elements/head)-Element und seine Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in den Benutzeragenten-Stylesheets finden, sind nicht im Renderbaum enthalten, da sie nicht in der gerenderten Ausgabe erscheinen werden. Knoten mit angewendetem `visibility: hidden` sind im Renderbaum enthalten, da sie Platz beanspruchen. Da wir keine Direktiven zum Überschreiben des Standard-Benutzeragenten angegeben haben, wird der `script`-Knoten in unserem obigen Codebeispiel nicht im Renderbaum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln auf ihn angewendet. Der Renderbaum enthält alle sichtbaren Knoten mit Inhalten und berechneten Stilen - und ordnet jedem sichtbaren Knoten im DOM-Baum die relevanten Stile zu und bestimmt anhand der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) die berechneten Stile für jeden Knoten.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und Position aller Knoten im Renderbaum bestimmt werden sowie die Festlegung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum erstellt ist, beginnt das Layout. Der Renderbaum hat identifiziert, welche Knoten angezeigt werden (auch wenn sie unsichtbar sind) zusammen mit ihren berechneten Stilen, aber nicht die Dimensionen oder die Position jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Renderbaums und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl von unterschiedlichen Viewport-Größen. In dieser Phase, unter Berücksichtigung der Viewport-Größe, bestimmt der Browser, welche Größen all die verschiedenen Kästen auf dem Bildschirm haben werden. Unter Berücksichtigung der Größe des Viewports als Basis beginnt das Layout allgemein mit dem Body und legt die Größen aller Nachfahren des Bodys fest, wobei die Boxmodelleigenschaften jedes Elements berücksichtigt werden, und Platz für ersetzte Elemente bereitstellt, dessen Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, dass die Größe und Position jedes Knotens bestimmt werden, wird als _Layout_ bezeichnet. Nachfolgende Neuberechnungen des _Layouts_ werden als _Reflows_ bezeichnet. In unserem Beispiel nehmen wir an, dass das anfängliche Layout auftritt, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht angegeben haben, erfolgt ein Reflow, sobald die Bilddimensionen bekannt sind.

### Paint

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, das erste Auftreten wird als {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} bezeichnet. In der Mal- oder Rasterisierungsphase konvertiert der Browser jeden im Layout-Phase berechneten Kasten in tatsächliche Pixel auf dem Bildschirm. Das Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Ränder, Schatten und ersetzte Elemente wie Schaltflächen und Bilder. Der Browser muss dies sehr schnell tun.

Um ein reibungsloses Scrollen und Animationen zu gewährleisten, muss alles, was den Hauptthread belegt, einschließlich des Styles, sowie Reflow und Paint, im Browser weniger als 16,67ms in Anspruch nehmen. Bei einer Auflösung von 2048 x 1536 hat das iPad mehr als 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neumalen noch schneller als das erste Malen erfolgen kann, wird das Zeichnen auf den Bildschirm in der Regel in mehrere Schichten unterteilt. Wenn dies geschieht, ist eine Komposition erforderlich.

Das Malen kann die Elemente im Layout-Baum in Schichten aufbrechen. Das Promoten von Inhalten in Schichten auf der GPU (anstatt auf dem Haupt-Thread auf der CPU) verbessert die Mal- und Neumalleistung. Es gibt bestimmte Eigenschaften und Elemente, die eine Instanziierung einer Schicht veranlassen, einschließlich [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) sowie jedes Element, das die CSS-Eigenschaften [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity), ein 3D-[`transform`](/de/docs/Web/CSS/Reference/Properties/transform), [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) und einige andere hat. Diese Knoten werden auf ihrer eigenen Schicht gemalt, zusammen mit ihren Nachfahren, es sei denn, ein Nachfahre erfordert für einen (oder mehrere) der oben genannten Gründe seine eigene Schicht.

Schichten verbessern die Performance, sind jedoch teuer, wenn es um die Speicherverwaltung geht, und sollten daher nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden.

### Komposition

Wenn Abschnitte des Dokuments in verschiedenen Schichten gezeichnet werden, die sich gegenseitig überlagern, ist eine Komposition erforderlich, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Da die Seite weiterhin Assets lädt, können Reflows auftreten (erinnern wir uns an das Beispielbild, das spät kam). Ein Reflow löst ein Neumalen und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow erforderlich gewesen, und nur die Schicht, die neu gemalt werden musste, hätte neu gemalt und, wenn nötig, komponiert werden müssen. Aber wir haben die Bilddimensionen nicht eingeschlossen! Wenn das Bild vom Server geholt wird, kehrt der Rendering-Prozess zu den Layout-Schritten zurück und beginnt von dort aus neu.

## Interaktivität

Sobald der Haupt-Thread das Malen der Seite abgeschlossen hat, könnte man denken, dass wir "fertig" sind. Das ist nicht unbedingt der Fall. Wenn der Ladevorgang JavaScript beinhaltet, das korrekt verschoben wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wird, könnte der Haupt-Thread beschäftigt sein und nicht für Scrollen, Berühren und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist die Messung, wie lange es von der ersten Anfrage, die zur DNS-Abfrage und TCP-Verbindung führte, bis zur Interaktivität der Seite dauerte - Interaktivität im Sinne des Punktes nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, an dem die Seite auf Benutzerinteraktionen innerhalb von 50ms reagiert. Wenn der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, ist er nicht verfügbar und daher nicht in der Lage, in einem rechtzeitigen (weniger als 50ms) Modus auf Benutzerinteraktionen zu reagieren.

In unserem Beispiel könnte das Bild schnell geladen worden sein, aber vielleicht war die Datei `another-script.js` 2MB groß und die Netzwerkverbindung unseres Benutzers langsam. In diesem Fall würde der Benutzer die Seite superschnell sehen, könnte aber nicht ohne Ruckler scrollen, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Meiden Sie es, den Haupt-Thread zu besetzen, wie in diesem Beispiel von WebPageTest gezeigt:

![Der Haupt-Thread wird durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei über eine schnelle Verbindung belegt](visa_network.png)

In diesem Beispiel dauerte die Ausführung von JavaScript über 1,5 Sekunden, und der Haupt-Thread war die ganze Zeit voll besetzt und nicht in der Lage, auf Klickereignisse oder Bildschirmeingaben zu reagieren.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
