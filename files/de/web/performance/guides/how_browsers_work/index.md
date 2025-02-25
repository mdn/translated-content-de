---
title: "Auffüllen der Seite: Wie Browser funktionieren"
short-title: Wie Browser funktionieren
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessert, ist es hilfreich zu verstehen, wie der Browser funktioniert.

## Überblick

Schnelle Seiten bieten bessere Benutzererfahrungen. Benutzer möchten und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos zu bedienen sind.

Zwei der größten Probleme bei der Web-Performance sind Probleme im Zusammenhang mit Latenz und Probleme im Zusammenhang mit der Tatsache, dass Browser größtenteils Single-Threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, sicherzustellen, dass eine Seite schnell lädt. Das Ziel der Entwickler ist es, die Seite so schnell wie möglich zu laden – oder zumindest _scheinbar_ superschnell – damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerk-Latenz ist die Zeit, die es dauert, Bytes über den Äther zu Computern zu übertragen. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich laden zu lassen.

In den meisten Fällen werden Browser als Single-Threaded betrachtet. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe aufnehmen. Für reibungslose Interaktionen ist es das Ziel des Entwicklers, performante Seiteninteraktionen zu gewährleisten, von reibungslosem Scrollen bis hin zur Reaktionsfähigkeit auf Berührungen. Renderzeit ist der Schlüssel, um sicherzustellen, dass der Haupt-Thread alle Aufgaben, die wir ihm zuwerfen, abschließen kann und trotzdem immer verfügbar ist, um Benutzerinteraktionen zu bearbeiten. Die Web-Performance kann verbessert werden, indem man das Single-Threaded-Naturell des Browsers versteht und die Verantwortung des Haupt-Threads, wo möglich und angemessen, minimiert, um zu gewährleisten, dass das Rendering reibungslos verläuft und die Reaktionen auf Interaktionen sofort erfolgen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie tritt jedes Mal auf, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular absendet oder andere Aktionen ausführt.

Eines der Ziele der Web-Performance ist es, die Zeit zu minimieren, die die Navigation zur Durchführung benötigt. Unter idealen Bedingungen dauert dies normalerweise nicht zu lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Site noch nie besucht haben, muss eine DNS-Abfrage durchgeführt werden.

Ihr Browser fordert eine DNS-Abfrage an, die letztendlich von einem Namensserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine gewisse Zeit zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt einen Namensserver erneut zu kontaktieren.

DNS-Abfragen müssen normalerweise nur einmal pro Hostnamen für ein Seitenladen durchgeführt werden. DNS-Abfragen müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriften, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Sendemast und dann zu einem zentralen Computer des Telefonunternehmens, bevor sie in das Internet gesendet werden](latency.jpg)

Dies kann problematisch für die Leistung sein, insbesondere in Mobilfunknetzen. Wenn ein Benutzer in einem Mobilfunknetz ist, muss jede DNS-Abfrage vom Telefon zum Sendemast gehen, um einen autoritativen DNS-Server zu erreichen. Der Abstand zwischen einem Telefon, einem Sendemast und dem Namensserver kann erhebliche Latenzzeit hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} her. Dieser Mechanismus ist so konzipiert, dass zwei Einheiten, die versuchen zu kommunizieren — in diesem Fall der Browser und der Webserver — die Parameter der Netzwerk-TCP-Socket-Verbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die Drei-Wege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" bezeichnet – genauer gesagt SYN, SYN-ACK, ACK –, da es drei von TCP übertragene Nachrichten gibt, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage muss noch gestellt werden.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder besser gesagt die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welcher Verschlüsselungsalgorithmus verwendet wird, um die Kommunikation zu verschlüsseln, verifiziert den Server und stellt sicher, dass eine sichere Verbindung vorhanden ist, bevor der tatsächliche Datentransfer beginnt. Dies erfordert fünf weitere Übertragungen zum Server, bevor die Anfrage für den Inhalt tatsächlich gesendet wird.

![Die DNS-Abfrage, der TCP-Handshake und 5 Schritte des TLS-Handshakes, einschließlich Client Hello, Server Hello und Zertifikat, Client Key und abgeschlossen für sowohl Server als auch Client.](ssl.jpg)

Obwohl die Herstellung einer sicheren Verbindung die Ladezeit der Seite verlängert, ist eine sichere Verbindung den Latenzaufwand wert, da die zwischen dem Browser und dem Webserver übertragenen Daten nicht von Dritten entschlüsselt werden können.

Nach den acht Übertragungen zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser im Namen des Benutzers eine erste [HTTP-`GET`-Anfrage](/de/docs/Web/HTTP/Methods), bei der es sich bei Websites am häufigsten um eine HTML-Datei handelt. Sobald der Server die Anfrage erhält, wird er mit relevanten Antwort-Headern und den Inhalten der HTML antworten.

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

Diese Antwort für diese erste Anfrage enthält das erste empfangene Byte Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Moment, in dem der Benutzer die Anfrage stellte – sagen wir durch Klicken auf einen Link – und dem Erhalt dieses ersten Pakets HTML. Der erste Inhaltsteil ist normalerweise 14 KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv kleiner als 14 KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser die Links während des Parsens antrifft, wie unten beschrieben.

### Staukontrolle / TCP-Slow-Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Bestätigung vom Client in Form eines ACK-Pakets erhalten.

Wenn der Server nach jedem Segment auf ein ACK wartet, wird dies zu häufigen ACKs vom Client führen und möglicherweise die Übertragungszeit verlängern, selbst im Fall eines Netzwerks mit geringer Auslastung.

Auf der anderen Seite kann das gleichzeitige Senden von zu vielen Segmenten dazu führen, dass ein Client in einem ausgelasteten Netzwerk die Segmente nicht empfangen kann und nur lange Zeit mit ACKs reagieren wird, und der Server wird die Segmente erneut senden müssen.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP-Slow-Start")}}-Algorithmus verwendet, um die Menge der übertragenen Daten schrittweise zu erhöhen, bis die maximale Netzwerkbandbreite ermittelt werden kann, und um die Menge der übertragenen Daten zu reduzieren, falls eine hohe Netzwerklast vorliegt.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Staukontrollfensters (CWND) gesteuert, das mit 1, 2, 4 oder 10 MSS (MSS sind 1500 Bytes über das Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl der Bytes, die gesendet werden sollen, nach deren Erhalt der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, sodass der Server beim nächsten Mal mehr Segmente senden kann. Wenn stattdessen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht so ein Gleichgewicht zwischen dem Senden von zu vielen Segmenten und dem Senden von zu wenigen.

## Parsen

Sobald der Browser das erste Datenpaket erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsen")}} ist der Schritt, den der Browser unternimmt, um die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} zu verwandeln, das der Renderer verwendet, um eine Seite auf den Bildschirm zu zeichnen.

Das DOM ist die interne Darstellung des Markup für den Browser. Das DOM ist auch zugänglich und kann über verschiedene APIs in JavaScript manipuliert werden.

Selbst wenn das HTML der angeforderten Seite größer als das anfängliche 14-KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, basierend auf den Daten, die er hat, ein Erlebnis darzustellen. Daher ist es wichtig, für die Web-Performance-Optimierung sicherzustellen, dass alles, was der Browser benötigt, um eine Seite zu rendern, oder zumindest eine Vorlage der Seite – das CSS und HTML, das für das erste Rendern erforderlich ist – in den ersten 14 KB enthalten ist. Aber bevor irgendetwas auf den Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. Das Parsen von HTML umfasst die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Baumaufbau. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut formatiert ist, ist das Parsen einfach und schneller. Der Parser parst das tokenisierte Eingabedokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Elemente, die in anderen Elementen enthalten sind, sind Kindknoten. Je größer die Anzahl der DOM-Knoten, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten einschließlich Textknoten zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, wird der Browser diese Ressourcen anfordern und mit dem Parsen fortfahren. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente – insbesondere solche ohne `async` oder `defer` Attribut – blockieren das Rendering und unterbrechen das Parsen von HTML. Obwohl der Vorladescanner diesen Prozess beschleunigt, können übermäßige Skripts dennoch ein erhebliches Nadelöhr darstellen.

### Vorladescanner

Während der Browser den DOM-Baum erstellt, belegt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Vorladescanner_ den verfügbaren Inhalt durchgehen und hochpriorisierte Ressourcen wie CSS, JavaScript und Web-Schriften anfordern. Dank des Vorladescanners müssen wir nicht warten, bis der Parser einen Verweis auf eine externe Ressource findet, um sie anzufordern. Er ruft Ressourcen im Hintergrund ab, sodass sie möglicherweise bereits im Flug sind oder heruntergeladen wurden, bis der Haupt-HTML-Parser die angeforderten Ressourcen erreicht. Die Optimierungen, die der Vorladescanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel, während der Haupt-Thread HTML und CSS parst, findet der Vorladescanner die Skripts und das Bild und beginnt diese ebenfalls herunterzuladen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut oder das `defer`-Attribut hinzu, wenn die Reihenfolge des JavaScript-Parsens und der Ausführung wichtig ist.

Das Warten auf den Erhalt von CSS blockiert nicht das HTML-Parsen oder das Herunterladen, aber es blockiert JavaScript, da JavaScript häufig dazu verwendet wird, die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist das Verarbeiten von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ist dem DOM ähnlich. Sowohl das DOM als auch das CSSOM sind Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte von Stilen, die er verstehen und mit denen er arbeiten kann. Der Browser geht durch jedes Regelset im CSS und erstellt einen Baum von Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie bei HTML muss der Browser die empfangenen CSS-Regeln in etwas konvertieren, mit dem er arbeiten kann. Daher wiederholt er den HTML-zum-Objekt-Prozess, jedoch für das CSS.

Der CSSOM-Baum umfasst Stile aus dem User-Agent-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile, indem spezifischere Regeln angewendet werden. Mit anderen Worten, er überträgt die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Bauzeitinformationen werden nicht in den Entwicklertools angezeigt. Stattdessen zeigt "Stile neu berechnen" in den Entwicklertools die Gesamtzeit an, die es braucht, um CSS zu parsen, den CSSOM-Baum zu konstruieren und rekursiv berechnete Stile zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, Optimierungsmaßnahmen zu investieren, da die Gesamtzeit zum Erstellen des CSSOM in der Regel kürzer ist als die Zeit, die für eine DNS-Abfrage benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Vorladescanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://de.wikipedia.org/wiki/Abstrakter_Syntaxbaum) und geben sie an einen Compiler weiter, der Bytecode ausgibt. Dies wird als JavaScript-Kompilierung bezeichnet. Der größte Teil des Codes wird im Haupt-Thread interpretiert, aber es gibt Ausnahmen, wie Code, der in [Web-Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Barrierefreiheitsbaums

Der Browser erstellt auch einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility), den unterstützende Geräte verwenden, um den Inhalt zu parsen und zu interpretieren. Das Barrierefreiheitsobjektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Barrierefreiheitsbaum, wenn das DOM aktualisiert wird. Der Barrierefreiheitsbaum kann von unterstützenden Technologien selbst nicht modifiziert werden.

Bis der AOM erstellt ist, ist der Inhalt für [Bildschirmleser](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide) nicht zugänglich.

## Rendering

Rendering-Schritte umfassen Stil, Layout, Malen und in einigen Fällen Komposition. Die in der Parse-Phase erstellten CSSOM- und DOM-Bäume werden zu einem Rendering-Baum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gemalt wird. In einigen Fällen kann der Inhalt auf seine eigene Ebene befördert und zusammengesetzt werden, was die Leistung verbessert, indem Teile des Bildschirms auf der GPU anstelle der CPU gemalt werden und der Haupt-Thread freigemacht wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und CSSOM zu einem Rendering-Baum. Der berechnete Stilbaum oder der Rendering-Baum Aufbau beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden sollen, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder sowie alle Knoten mit `display: none`, wie `script { display: none; }` in User-Agent-Stylesheets, werden nicht im Rendering-Baum enthalten, da sie nicht im gerenderten Ausgabebild erscheinen. Knoten mit `visibility: hidden` werden im Rendering-Baum enthalten, da sie Platz beanspruchen. Da wir keine Direktiven gegeben haben, die den User-Agent-Standard überstimmen, wird der `script`-Knoten in unserem obigen Codebeispiel nicht im Rendering-Baum enthalten sein.

Jeder sichtbare Knoten hat seine CSSOM-Regeln angewendet. Der Rendering-Baum hält alle sichtbaren Knoten mit Inhalt und berechneten Stilen – die alle relevanten Stile mit jedem sichtbaren Knoten im DOM-Baum abgleichen und aufgrund des [CSS-Cascades](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmen, welche die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Rendering-Baum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Abmessungen und Positionen aller Knoten im Rendering-Baum bestimmt werden, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Rendering-Baum erstellt ist, beginnt das Layout. Der Rendering-Baum gibt an, welche Knoten angezeigt werden (auch wenn unsichtbar) zusammen mit ihren berechneten Stilen, aber nicht die Abmessungen oder Positionen jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Rendering-Baums und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl verschiedener Viewport-Größen. In dieser Phase, unter Berücksichtigung der Viewport-Größe, bestimmt der Browser, wie groß all die verschiedenen Kästen auf dem Bildschirm sein werden. Wenn der Viewport als Basisgröße genommen wird, beginnt das Layout im Allgemeinen mit dem Body, indem es die Größen aller Nachkommen des Bodys layoutet, mit den Box-Modell-Eigenschaften jedes Elements, die Platzhalterraum für ersetzte Elemente bieten, deren Abmessungen er nicht kennt, wie unser Bild.

Die erste Berechnung der Größe und Position jedes Knotens wird _Layout_ genannt. Nachfolgende Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel nehmen wir an, dass das anfängliche Layout stattfindet, bevor das Bild zurückgegeben wird. Da wir die Abmessungen unseres Bildes nicht deklariert haben, wird ein Reflow stattfinden, sobald die Bildabmessungen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf den Bildschirm, das erste Auftreten davon wird als der {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} bezeichnet. In der Mal- oder Rasterisierungsphase konvertiert der Browser jeden im Layout hervorgerufenen Kasten in echte Pixel auf dem Bildschirm. Das Malen beinhaltet das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Rändern, Schatten und ersetzten Elementen wie Schaltflächen und Bilder. Der Browser muss dies sehr schnell tun.

Um reibungsloses Scrollen und Animationen zu gewährleisten, muss alles, was den Haupt-Thread beansprucht, einschließlich der Berechnung von Stilen sowie Reflow und Malen, in weniger als 16,67 ms abgeschlossen sein. Bei 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neumalen noch schneller als das anfängliche Malen erfolgen kann, wird das Zeichnen auf den Bildschirm im Allgemeinen in mehrere Schichten unterteilt. Wenn dies auftritt, ist Komposition notwendig.

Malen kann die Elemente im Layoutbaum in Schichten aufteilen. Das Promovieren von Inhalten in Schichten auf der GPU (anstelle des Haupt-Threads auf der CPU) verbessert die Malleistung und die Neumalleistung. Es gibt bestimmte Eigenschaften und Elemente, die eine Schicht instanziieren, darunter [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und jedes Element, das die CSS-Eigenschaften [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-`transform`-Eigenschaft, [`will-change`](/de/docs/Web/CSS/will-change) hat, und einige andere. Diese Knoten werden mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert seine eigene Schicht aus einem (oder mehreren) der oben genannten Gründe, auf ihrer eigenen Schicht gemalt.

Schichten verbessern die Leistung, sind jedoch in Bezug auf das Speicher-Management teuer, sollten also nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden.

### Komposition

Wenn Abschnitte eines Dokuments in verschiedenen, sich überlappenden Schichten gezeichnet werden, ist Komposition notwendig, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können Reflows passieren (denken Sie an unser Beispielsbild, das spät kam). Ein Reflow löst ein Neumal- und ein Neukompositions-Ereignis aus. Hätten wir die Abmessungen unseres Bildes definiert, wäre kein Reflow notwendig gewesen und nur die Schicht, die neu gemalt werden musste, würde neu gemalt und, wenn nötig, neu komponiert. Aber wir haben die Bildabmessungen nicht angegeben! Wenn das Bild vom Server abgerufen wird, geht der Rendering-Prozess wieder zu den Layout-Schritten zurück und beginnt von dort aus erneut.

## Interaktivität

Sobald der Haupt-Thread mit dem Malen der Seite fertig ist, könnten Sie denken, wir wären "fertig." Das ist nicht unbedingt der Fall. Wenn das Laden JavaScript umfasst, das korrekt verzögert wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wurde, könnte der Haupt-Thread beschäftigt sein und nicht für Scrolling, Berührung und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß dafür, wie lange es von dieser ersten Anfrage, die zur DNS-Abfrage und zur TCP-Verbindung führte, bis zur Interaktivität der Seite gedauert hat – Interaktivität bedeutet der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, an dem die Seite auf Benutzerinteraktionen innerhalb von 50 ms reagiert. Wenn der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, steht er nicht zur Verfügung und kann daher nicht rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen reagieren.

In unserem Beispiel wurde das Bild vielleicht schnell geladen, aber die `another-script.js` Datei war 2 MB groß und die Netzwerkverbindung unseres Benutzers war langsam. In diesem Fall würde der Benutzer die Seite sehr schnell sehen, könnte jedoch nicht ohne Ruckeln scrollen, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Haupt-Thread zu blockieren, wie in diesem WebPageTest-Beispiel gezeigt:

![Der Haupt-Thread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei besetzt - bei einer schnellen Verbindung](visa_network.png)

In diesem Beispiel dauerte die Ausführung von JavaScript über 1,5 Sekunden und der Haupt-Thread war die gesamte Zeit über voll in Anspruch genommen und reagierte nicht auf Klickereignisse oder Bildschirmeingaben.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
