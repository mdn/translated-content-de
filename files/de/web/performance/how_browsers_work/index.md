---
title: "Seite befüllen: Wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: 110f8c92671e410dce810906b49b5befbf32092f
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos interagieren. Daher sollte ein Entwickler danach streben, diese beiden Ziele zu erreichen.

Um zu verstehen, wie man die Leistung und die wahrgenommene Leistung verbessert, ist es hilfreich, zu verstehen, wie der Browser funktioniert.

## Übersicht

Schnelle Websites bieten bessere Benutzererfahrungen. Nutzer möchten und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und reibungslos interagieren.

Zwei Hauptprobleme bei der Web-Performance betreffen Latenzprobleme und die Tatsache, dass Browser größtenteils einspurig sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite sicherzustellen. Das Ziel der Entwickler ist es, die Seite so schnell wie möglich zu laden - oder zumindest so erscheinen zu lassen, dass sie super schnell lädt -, damit der Benutzer die gewünschten Informationen so schnell wie möglich erhält. Netzwerk-Latenz ist die Zeit, die es dauert, Bytes über die Luft an Computer zu senden. Web-Performance ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Browser werden größtenteils als einspurig betrachtet. Das heißt, sie führen eine Aufgabe von Anfang bis Ende aus, bevor sie eine andere Aufgabe übernehmen. Für reibungslose Interaktionen besteht das Ziel des Entwicklers darin, leistungsstarke Site-Interaktionen sicherzustellen, von reibungslosem Scrollen bis hin zur Reaktionsfähigkeit auf Berührungen. Renderzeit ist dabei entscheidend. Sie stellt sicher, dass der Hauptthread alle Arbeiten, die wir ihm zuwerfen, erledigen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu verarbeiten. Die Web-Performance kann verbessert werden, indem man die einspurige Natur des Browsers versteht und, wo möglich und angemessen, die Verantwortlichkeiten des Hauptthreads minimiert, um sicherzustellen, dass das Rendering reibungslos verläuft und die Reaktionen auf Interaktionen sofort erfolgen.

## Navigation

Die _Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Benutzer eine Seite durch Eingabe einer URL in die Adressleiste, durch Klicken auf einen Link, Absenden eines Formulars sowie durch andere Aktionen anfordert.

Eines der Ziele der Web-Performance ist es, die Dauer der Navigation zu minimieren. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage erfolgen.

Ihr Browser fordert eine DNS-Abfrage an, die schließlich von einem Namensserver bearbeitet wird, der seinerseits mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine Weile zwischengespeichert, was nachfolgende Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namensserver zu kontaktieren.

DNS-Abfragen müssen in der Regel nur einmal pro Hostname für eine Seitenladung durchgeführt werden. DNS-Abfragen müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Handyturm, dann zu einem zentralen Computer des Telefonanbieters, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann insbesondere bei mobilen Netzwerken problematisch für die Leistung sein. Wenn sich ein Benutzer in einem mobilen Netzwerk befindet, muss jede DNS-Abfrage vom Telefon zum Handyturm gehen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Handyturm und dem Namensserver kann erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser über einen {{Glossary("TCP_handshake", "TCP-Dreifach-Handshake")}} eine Verbindung zum Server her. Dieser Mechanismus ist so konzipiert, dass zwei kommunikationswillige Entitäten – in diesem Fall der Browser und der Webserver – die Parameter der TCP-Netzwerkverbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

Die TCP-Dreifach-Handshaking-Technik wird oft als "SYN-SYN-ACK" – oder genauer SYN, SYN-ACK, ACK – bezeichnet, weil es drei Nachrichten gibt, die von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und her zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder genauer die {{Glossary("TLS", "TLS")}} Verhandlung, bestimmt, welcher Chiffre zur Verschlüsselung der Kommunikation verwendet wird, überprüft den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Rundreisen zum Server, bevor die Anfrage tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte des TLS-Handshake einschließlich clienthello, serverhello und Zertifikat, clientkey und abgeschlossen sowohl für Server als auch für Client.](ssl.jpg)

Obwohl die Herstellung der Verbindung sicher Zeit zur Seitenladung hinzufügt, ist eine sichere Verbindung die Latenzkosten wert, da die zwischen Browser und Webserver übertragenen Daten nicht von einem Dritten entschlüsselt werden können.

Nach den acht Rundreisen zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser im Namen des Benutzers eine erste [HTTP `GET` Anfrage](/de/docs/Web/HTTP/Methods), die bei Websites meist eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit relevanten Antwortheadern und dem Inhalt des HTML.

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

Diese Antwort für diese erste Anfrage enthält das erste empfangene Datenbyte. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Zeitpunkt, an dem der Benutzer die Anfrage gestellt hat – sagen wir, indem er auf einen Link geklickt hat – und dem Empfang dieses ersten HTML-Pakets. Das erste Datenstück umfasst normalerweise 14 KB an Daten.

In unserem obigen Beispiel ist die Anfrage auf jeden Fall weniger als 14 KB, aber die verknüpften Ressourcen werden erst angefordert, wenn der Browser während des Parsens auf die Links stößt, wie unten beschrieben.

### Staukontrolle / TCP Slow Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Bestätigung vom Client in Form eines ACK-Pakets erhalten.

Wenn der Server nach jedem Segment auf ein ACK wartet, führt das zu häufigen ACKs vom Client und kann die Übertragungszeit erhöhen, selbst bei einem Netzwerk mit geringer Last.

Andererseits kann das Senden zu vieler Segmente auf einmal zu dem Problem führen, dass in einem stark ausgelasteten Netzwerk der Client nicht in der Lage sein wird, die Segmente zu empfangen, und einfach lange Zeit mit ACKs antwortet, und der Server wird die Segmente immer wieder senden müssen.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}} Algorithmus verwendet, um die Menge der übertragenen Daten schrittweise zu erhöhen, bis die maximale Netzwerk-Bandbreite bestimmt werden kann, und die Menge der übertragenen Daten im Falle einer hohen Netzwerklast zu verringern.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Staufensters (CWND) gesteuert, das mit 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS sind 1500 Bytes über das Ethernet-Protokoll). Dieser Wert ist die Anzahl der zu sendenden Bytes, bei deren Empfang der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, und der Server kann beim nächsten Mal mehr Segmente senden. Wenn stattdessen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht somit ein Gleichgewicht zwischen dem Senden von zu vielen Segmenten und dem Senden von zu wenigen.

## Parsen

Sobald der Browser das erste Datenstück erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsen")}} ist der Schritt, den der Browser unternimmt, um die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} zu verwandeln, die vom Renderer verwendet werden, um eine Seite auf den Bildschirm zu malen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM wird ebenfalls freigegeben und kann durch verschiedene APIs in JavaScript manipuliert werden.

Selbst wenn das HTML der angeforderten Seite größer als das anfängliche 14-KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, basierend auf den verfügbaren Daten eine Erfahrung zu rendern. Daher ist es wichtig, dass die Web-Performance-Optimierung alles beinhaltet, was der Browser benötigt, um mit dem Rendern einer Seite zu beginnen, oder zumindest eine Vorlage der Seite - das CSS und HTML, das für das erste Rendern benötigt wird - in den ersten 14 KB. Bevor jedoch irgendetwas auf den Bildschirm gerendert wird, müssen HTML, CSS und JavaScript geparst werden.

### Erstellen des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. Das Parsen von HTML umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Token umfassen Start- und Endtags sowie Attributnamen und -werte. Wenn das Dokument gut gestaltet ist, ist das Parsen einfach und schneller. Der Parser parst den tokenisierten Input in das Dokument und erstellt so den Dokumentbaum.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html) Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. In anderen Elementen eingebettete Elemente sind Kindknoten. Je größer die Anzahl der DOM-Knoten ist, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unser Beispielcode, der alle Knoten einschließlich Textknoten zeigt.](dom.gif)

Wenn der Parser nicht-blockierende Ressourcen, wie ein Bild, findet, wird der Browser diese Ressourcen anfordern und mit dem Parsen fortfahren. Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>` Elemente – insbesondere diejenigen ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer` Attribut – blockieren das Rendering und pausieren das Parsen von HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte dennoch ein beträchtliches Nadelöhr darstellen.

### Preload-Scanner

Während der Browser den DOM-Baum erstellt, belegt dieser Prozess den Hauptthread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt durchsuchen und Ressourcen mit hoher Priorität wie CSS, JavaScript und Web-Schriftarten anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser auf einen Verweis auf eine externe Ressource stößt, um sie anzufordern. Er wird Ressourcen im Hintergrund abrufen, sodass sie möglicherweise bereits in Bearbeitung sind oder heruntergeladen wurden, wenn der Haupt-HTML-Parser die angeforderten Ressourcen erreicht. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="myscript.js" async></script>
<img src="myimage.jpg" alt="image description" />
<script src="anotherscript.js" async></script>
```

In diesem Beispiel, während der Hauptthread das HTML und CSS parst, wird der Preload-Scanner die Skripte und Bilder finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async` Attribut hinzu oder das `defer` Attribut, wenn die Reihenfolge des JavaScript-Parsens und der Ausführung wichtig ist.

Das Warten auf die Beschaffung von CSS blockiert das Parsen oder Herunterladen von HTML nicht, blockiert jedoch JavaScript, da JavaScript häufig verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Erstellen des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ähnelt dem DOM. DOM und CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser wandelt die CSS Regeln in eine Karte von Stilen um, die er verstehen und verwenden kann. Der Browser durchläuft jede Regel im CSS, wobei er einen Baum von Knoten mit Eltern-, Kinder- und Geschwisterbeziehungen basierend auf den CSS-Selektoren erstellt.

Wie beim HTML muss der Browser die empfangenen CSS Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den Prozess von HTML zu Objekt, jedoch für CSS.

Der CSSOM-Baum umfasst Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten auf einen Knoten anwendbaren Regel und verfeinert rekursiv die berechneten Stile, indem spezifischere Regeln angewandt werden. Mit anderen Worten, er bringt die Eigenschaftswerte in Einklang.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Bauzeit-Informationen werden in den Entwicklertools nicht angezeigt. Vielmehr zeigt "Recalculate Style" in den Entwicklertools die Gesamtzeit, die benötigt wird, um CSS zu parsen, den CSSOM-Baum zu konstruieren und rekursiv berechnete Stile zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Wege, in die Optimierung zu investieren, da die Gesamtzeit zur Erstellung des CSSOM im Allgemeinen weniger als die Zeit beträgt, die für einen DNS-Lookup benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilierung

Während CSS geparst und der CSSOM erstellt wird, werden dank des Preload-Scanners andere Ressourcen, einschließlich JavaScript-Dateien, heruntergeladen. JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://de.wikipedia.org/wiki/Abstrakter_Syntaxbaum) und geben sie an einen Compiler weiter, der Bytecode ausgibt. Dies ist als JavaScript-Kompilierung bekannt. Die meiste Zeit wird der Code im Hauptthread interpretiert, mit Ausnahmen wie zum Beispiel Code, der in [Web Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Accessibility-Baums

Der Browser erstellt auch einen [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility), den unterstützende Geräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Accessibility-Objektmodell (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Accessibility-Baum, wenn das DOM aktualisiert wird. Der Accessibility-Baum kann nicht von unterstützenden Technologien selbst modifiziert werden.

Bis der AOM gebaut ist, sind die Inhalte für [Bildschirmschoner](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide) nicht zugänglich.

## Rendern

Rendering-Schritte umfassen Stil, Layout, Malen und in einigen Fällen Komposition. Die im Parsenschritt erstellten CSSOM- und DOM-Bäume werden zu einem Renderbaum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, welches dann auf den Bildschirm gezeichnet wird. In einigen Fällen kann Inhalt in seiner eigenen Ebene gefördert und zusammengesetzt werden, was die Leistung verbessert, indem Teile des Bildschirms auf der GPU anstatt der CPU gemalt werden, wodurch der Hauptthread entlastet wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist das Kombinieren des DOM und CSSOM in einen Renderbaum. Die Erstellung des berechneten Stilbaums oder des Renderbaums beginnt mit der Wurzel des DOM-Baums, wobei jeder sichtbare Knoten durchlaufen wird.

Elemente, die nicht angezeigt werden sollen, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragenten-Stylesheets finden, werden nicht in den Renderbaum aufgenommen, da sie nicht in der gerenderten Ausgabe erscheinen werden. Knoten mit `visibility: hidden` werden im Renderbaum aufgenommen, da sie Platz einnehmen. Da wir keine Anweisungen gegeben haben, um die Voreinstellung des Benutzeragenten zu überschreiben, wird der Skriptknoten in unserem Codebeispiel oben nicht in den Renderbaum aufgenommen.

Jeder sichtbare Knoten hat seine CSSOM-Regeln auf sich angewandt. Der Renderbaum hält alle sichtbaren Knoten mit Inhalt und berechneten Stilen - er ordnet allen relevanten Stilen jeden sichtbaren Knoten im DOM-Baum zu und bestimmt basierend auf der [CSS-Kaskade](/de/docs/Web/CSS/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen des Layouts auf dem Renderbaum, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und der Standort aller Knoten im Renderbaum bestimmt werden, plus die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Renderbaum erstellt ist, beginnt das Layout. Der Renderbaum hat identifiziert, welche Knoten angezeigt werden (auch wenn unsichtbar) zusammen mit ihren berechneten Stilen, nicht jedoch die Dimensionen oder Lage jedes Knotens. Um die exakte Größe und Lage jedes Objekts zu bestimmen, beginnt der Browser an der Wurzel des Renderbaums und parcouriert diesen.

Auf der Webseite ist fast alles ein Kasten. Unterschiedliche Geräte und unterschiedliche Desktop-Präferenzen bedeuten eine unbegrenzte Anzahl unterschiedlicher Ansichtsgrößen. In dieser Phase ermittelt der Browser unter Berücksichtigung der Ansichtsgröße, welche Größen all der verschiedenen Kästen auf dem Bildschirm haben werden. Indem die Größe der Ansicht als Basis genommen wird, startet das Layout in der Regel mit dem Body und legt die Größen aller Nachkommen des Bodys aus, wobei die Box-Model-Eigenschaften jedes Elements berücksichtigt werden und Platz für ersetzte Elemente bereitgestellt wird, deren Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, dass die Größe und Position jedes Knotens bestimmt wird, wird _Layout_ genannt. Nachträgliche Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel nehmen wir an, dass das erste Layout stattfindet, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird es einen Reflow geben, sobald die Bilddimensionen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf dem Bildschirm, das erste Vorkommen davon wird als {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} bezeichnet. Im Malen- oder Rasterisierungsphase konvertiert der Browser jede im Layout-Phase berechnete Box in tatsächliche Pixel auf dem Bildschirm. Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Rahmen, Schatten und ersetzter Elemente wie Buttons und Bilder. Der Browser muss dies super schnell tun.

Um reibungsloses Scrollen und Animationen sicherzustellen, muss alles, was den Hauptthread beschäftigt, einschließlich Stilberechnungen, zusammen mit Reflow und Malen, dem Browser weniger als 16,67 ms in Anspruch nehmen. Bei 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neumalen noch schneller als das ursprüngliche Malen erfolgen kann, wird das Zeichnen auf den Bildschirm in der Regel in mehrere Schichten aufgeteilt. Wenn dies der Fall ist, ist eine Zusammensetzung erforderlich.

Das Malen kann die Elemente im Layoutbaum in Schichten aufteilen. Inhalte in Schichten auf der GPU (anstatt im Hauptthread auf der CPU) zu fördern, verbessert die Mal- und Neumal-Performance. Es gibt spezifische Eigenschaften und Elemente, die eine Schicht instanziieren, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas), und jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-[`transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und noch ein paar weitere hat. Diese Knoten werden in ihrer eigenen Schicht zusammen mit ihren Nachkommen gemalt, es sei denn, ein Nachkomme erfordert aus einem (oder mehreren) der oben genannten Gründe seine eigene Schicht.

Schichten verbessern die Leistung, sind jedoch teuer, wenn es um das Speichermanagement geht, und sollten daher nicht überfordert als Teil von Web-Performance-Optimierungsstrategien eingesetzt werden.

### Zusammensetzen

Wenn Abschnitte des Dokuments in verschiedenen Schichten gezeichnet werden, die sich überschneiden, ist das Zusammensetzen erforderlich, um sicherzustellen, dass sie in der richtigen Reihenfolge auf dem Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Da die Seite weiterhin Assets lädt, können Reflows auftreten (denken Sie an unser Beispielbild, das spät eintrifft). Ein Reflow löst eine Neumalung und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow erforderlich gewesen, und nur die Schicht, die neu bemalt werden musste, würde neu bemalt und gegebenenfalls zusammengesetzt. Aber wir haben die Bilddimensionen nicht eingeschlossen! Wenn das Bild vom Server abgerufen wird, geht der Renderprozess zurück zu den Layoutschritten und startet von dort neu.

## Interaktivität

Sobald der Hauptthread mit dem Malen der Seite fertig ist, könnte man denken, dass wir "alles erledigt" haben. Das ist nicht unbedingt der Fall. Wenn die Ladung JavaScript umfasst, das korrekt aufgeschoben wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wird, könnte der Hauptthread beschäftigt sein und nicht für das Scrollen, Berühren und andere Interaktionen verfügbar sein.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß dafür, wie lange es ab der ersten Anfrage gedauert hat, die zum DNS-Lookup und zur TCP-Verbindung führte, bis die Seite interaktiv war — wobei interaktiv der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} ist, an dem die Seite auf Benutzerinteraktionen innerhalb von 50 ms reagiert. Wenn der Hauptthread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, ist er nicht verfügbar und kann daher nicht rechtzeitig (unter 50 ms) auf Benutzerinteraktionen reagieren.

In unserem Beispiel kann das Bild vielleicht schnell geladen wurden, aber vielleicht war die `anotherscript.js` Datei 2 MB groß und die Netzwerkverbindung unseres Nutzers war langsam. In diesem Fall würde der Nutzer die Seite super schnell sehen, könnte jedoch nicht ohne Ruckeln scrollen, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie, den Hauptthread zu belegen, wie in diesem Beispiel von WebPageTest demonstriert:

![Der Hauptthread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei - über eine schnelle Verbindung - beschäftigt](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden, und der Hauptthread war die ganze Zeit über voll ausgelastet, nicht in der Lage, auf Klickereignisse oder Bildschirmberührungen zu reagieren.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
