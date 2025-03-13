---
title: "Auffüllen der Seite: wie Browser funktionieren"
short-title: Wie Browser funktionieren
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Nutzer wünschen sich Web-Erlebnisse mit Inhalten, die schnell laden und flüssig zu bedienen sind. Daher sollte ein Entwickler danach streben, diese beiden Ziele zu erreichen.

Um die Leistung und die wahrgenommene Leistung zu verbessern, hilft es, zu verstehen, wie der Browser funktioniert.

## Übersicht

Schnelle Websites bieten bessere Nutzererlebnisse. Nutzer wünschen und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und flüssig zu bedienen sind.

Zwei Hauptprobleme bei der Web-Performance sind Probleme in Bezug auf Latenz und die Tatsache, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu gewährleisten. Das Ziel der Entwickler ist es, die Seite so schnell wie möglich zu laden — oder zumindest _erscheinen_ zu lassen, als ob sie super schnell lädt — damit der Nutzer die angeforderte Information so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die es dauert, um Bytes über den Luftweg zu Computern zu übertragen. Web-Performance beschreibt, was wir tun müssen, um die Seite so schnell wie möglich laden zu lassen.

Browser werden größtenteils als single-threaded angesehen. Das bedeutet, sie führen eine Aufgabe von Anfang bis Ende aus, bevor sie eine andere Aufgabe übernehmen. Für flüssige Interaktionen besteht das Ziel des Entwicklers darin, performante Seiteninteraktionen sicherzustellen, vom flüssigen Scrollen bis hin zur Reaktionsfähigkeit auf Berührungen. Die Renderzeit ist entscheidend, um sicherzustellen, dass der Hauptthread all die Arbeit erledigen kann, die wir ihm zuweisen, und dennoch immer bereit ist, Benutzerinteraktionen zu handhaben. Die Web-Performance kann verbessert werden, indem man die single-threaded Natur des Browsers versteht und die Verantwortlichkeiten des Hauptthreads minimiert, wo immer möglich und angemessen, um ein flüssiges Rendering und sofortige Reaktionen auf Interaktionen zu gewährleisten.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt, wann immer ein Nutzer eine Seite durch Eingabe einer URL in die Adressleiste, Anklicken eines Links, Absenden eines Formulars oder durch andere Aktionen anfordert.

Eines der Ziele der Web-Performance ist es, die Zeit zu minimieren, die für die Navigation benötigt wird, um abgeschlossen zu werden. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Suche

Der erste Schritt beim Navigieren zu einer Webseite besteht darin herauszufinden, wo sich die Ressourcen für diese Seite befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Suche stattfinden.

Ihr Browser fordert eine DNS-Suche an, die schließlich von einem Namensserver behandelt wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine Zeit im Cache gespeichert, was spätere Anfragen beschleunigt, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Namensserver zu kontaktieren.

DNS-Anfragen müssen normalerweise nur einmal pro Hostname für einen Seitenaufruf gemacht werden. DNS-Anfragen müssen jedoch für jeden eindeutigen Hostnamen durchgeführt werden, auf den die angeforderte Seite verweist. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Handyturm, dann zu einem zentralen Rechner der Telefongesellschaft, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann insbesondere auf mobilen Netzwerken problematisch für die Leistung sein. Wenn ein Nutzer in einem mobilen Netz ist, muss jede DNS-Anfrage vom Telefon zum Handyturm gehen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Handyturm und dem Namensserver kann erhebliche Latenzen addieren.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, richtet der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} ein. Dieser Mechanismus ist so konzipiert, dass zwei kommunikationswillige Entitäten – in diesem Fall der Browser und der Webserver – die Parameter der Netzwerkverbindung des TCP-Sockets aushandeln können, bevor Daten übertragen werden. Dies geschieht häufig über {{Glossary("HTTPS", "HTTPS")}}.

Die Drei-Wege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" bezeichnet – oder genauer SYN, SYN-ACK, ACK – weil TCP drei Nachrichten überträgt, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu starten. Ja, das bedeutet drei zusätzliche Nachrichten hin und her zwischen den Servern, wobei die Anfrage noch nicht gestellt wurde.

### TLS-Verhandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake, oder genauer gesagt die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welches Verschlüsselungsverfahren zur Verschlüsselung der Kommunikation verwendet wird, verifiziert den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Hin- und Herfahrten zum Server, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Der DNS-Lookup, der TCP-Handshake und 5 Schritte des TLS-Handshakes, einschließlich Client-Hallo, Server-Hallo und Zertifikat, Client-Schlüssel und abgeschlossen für sowohl Server als auch Client.](ssl.jpg)

Während das Herstellen der sicheren Verbindung die Ladezeit der Seite verlängert, ist eine sichere Verbindung den Latenzaufwand wert, da die zwischen Browser und Webserver übertragenen Daten nicht von Dritten entschlüsselt werden können.

Nach den acht Fahrten zum Server ist der Browser schließlich in der Lage, die Anfrage zu stellen.

## Antwort

Sobald wir eine Verbindung zu einem Webserver hergestellt haben, sendet der Browser eine anfängliche [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Reference/Methods) im Namen des Nutzers, die für Websites meist eine HTML-Datei ist. Sobald der Server die Anfrage erhält, antwortet er mit den relevanten Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort auf diese anfängliche Anfrage enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen dem Zeitpunkt, zu dem der Nutzer die Anfrage gestellt hat — zum Beispiel durch Klicken auf einen Link — und dem Erhalt dieses ersten HTML-Pakets. Das erste Datenstück ist normalerweise 14 KB groß.

In unserem obigen Beispiel ist die Anfrage definitiv weniger als 14 KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser die Links während des Parsens trifft, wie unten beschrieben.

### Überlastungskontrolle / TCP-Slow-Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server ein ACK-Paket vom Client erhalten, nachdem er eine bestimmte Anzahl von Segmenten gesendet hat.

Wenn der Server nach jedem Segment auf ein ACK wartet, führt dies zu häufigen ACKs vom Client und kann die Übertragungszeit erhöhen, selbst im Fall eines Netzwerks mit niedriger Auslastung.

Auf der anderen Seite kann das gleichzeitige Senden zu vieler Segmente zu dem Problem führen, dass in einem überlasteten Netzwerk der Client die Segmente nicht empfangen kann und nur lange Zeit mit ACKs reagiert. Der Server muss die Segmente dann erneut senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP-Slow-Start-Algorithmus")}} verwendet, um die übertragene Datenmenge schrittweise zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und um die übertragene Datenmenge bei hoher Netzwerklast zu reduzieren.

Die Anzahl der übertragenen Segmente wird durch den Wert des Überlastungsfensters (CWND) gesteuert, der auf 1, 2, 4 oder 10 MSS (MSS beträgt 1500 Bytes über das Ethernet-Protokoll) initialisiert werden kann. Dieser Wert ist die Anzahl der Bytes, die gesendet werden sollen, bei deren Empfang der Client ein ACK senden muss.

Wenn ein ACK empfangen wird, wird der CWND-Wert verdoppelt, sodass der Server beim nächsten Mal mehr Segmente senden kann. Wenn dagegen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht so ein Gleichgewicht zwischen dem Senden zu vieler Segmente und dem Senden zu weniger.

## Parsen

Sobald der Browser das erste Datenstück erhält, kann er mit dem Parsen der empfangenen Informationen beginnen. {{Glossary("parse", "Parsen")}} ist der Schritt, den der Browser durchführt, um die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} zu verwandeln, das vom Renderer verwendet wird, um eine Seite auf den Bildschirm zu zeichnen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM wird ebenfalls freigelegt und kann über verschiedene JavaScript-APIs manipuliert werden.

Selbst wenn das HTML der angeforderten Seite größer als das anfängliche 14 KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, basierend auf den verfügbaren Daten ein Erlebnis zu rendern. Aus diesem Grund ist es wichtig, dass die Web-Performance-Optimierung alles einschließt, was der Browser benötigt, um mit dem Rendern einer Seite zu beginnen, oder zumindest eine Vorlage der Seite — das CSS und HTML, das für das erste Rendern benötigt wird — in den ersten 14 KB. Aber bevor etwas auf den Bildschirm gerendert wird, müssen HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt besteht darin, das HTML-Markup zu verarbeiten und den DOM-Baum zu erstellen. HTML-Parsen umfasst [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumkonstruktion. HTML-Tokens umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument gut geformt ist, ist das Parsen einfach und schneller. Der Parser parst den tokenisierten Input in das Dokument und baut den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen den verschiedenen Elementen wider. In andere Elemente verschachtelte Elemente sind Kindknoten. Je mehr DOM-Knoten vorhanden sind, desto länger dauert es, den DOM-Baum zu erstellen.

![Der DOM-Baum für unser Beispielcode, der alle Knoten zeigt, einschließlich Textknoten.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Das Parsen kann fortgesetzt werden, wenn eine CSS-Datei gefunden wird, aber `<script>`-Elemente — insbesondere solche ohne das [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut — blockieren das Rendern und pausieren das Parsen von HTML. Obwohl der Browser-Vorladescanner diesen Prozess beschleunigt, können übermäßige Skripte dennoch einen wesentlichen Engpass darstellen.

### Vorladescanner

Während der Browser den DOM-Baum aufbaut, belegt dieser Prozess den Hauptthread. Während dies geschieht, wird der _Vorladescanner_ den verfügbaren Inhalt durchforsten und Ressourcen mit hoher Priorität wie CSS, JavaScript und Web-Schriften anfordern. Dank des Vorladescanners müssen wir nicht warten, bis der Parser einen Verweis auf eine externe Ressource findet, um sie anzufordern. Er wird Ressourcen im Hintergrund abrufen, sodass sie möglicherweise bereits in der Übertragung sind oder heruntergeladen wurden, wenn der Haupt-HTML-Parser die angeforderten Ressourcen erreicht. Die Optimierungen, die der Vorladescanner bietet, reduzieren Engpässe.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel wird der Vorladescanner, während der Hauptthread das HTML und CSS parst, die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut oder das `defer`-Attribut hinzu, wenn die Reihenfolge des JavaScript-Parsings und der Ausführung wichtig ist.

Das Warten auf den Erhalt von CSS blockiert das Parsen oder Herunterladen von HTML nicht, blockiert jedoch JavaScript, da JavaScript oft verwendet wird, um die Auswirkungen von CSS-Eigenschaften auf Elemente abzufragen.

### Erstellen des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad besteht darin, CSS zu verarbeiten und den CSSOM-Baum zu erstellen. Das CSS-Objektmodell ist dem DOM ähnlich. Das DOM und CSSOM sind beide Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Stilkartierung, die er verstehen und verwenden kann. Der Browser geht jede Regel im CSS durch und erstellt einen Knotenbaum mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie bei HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, aber für CSS.

Der CSSOM-Baum beinhaltet Stile aus dem User-Agent-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert rekursiv die berechneten Stile durch Anwendung spezifischerer Regeln. Mit anderen Worten, er kaskadiert die Eigenschaftswerte.

Der Aufbau des CSSOM ist sehr, sehr schnell, und diese Aufbauzeiten werden nicht in den Entwickler-Tools angezeigt. Vielmehr zeigt das "Stile neu berechnen" in den Entwickler-Tools die gesamte Zeit an, die es dauert, um CSS zu parsen, den CSSOM-Baum zu konstruieren und die berechneten Stile rekursiv zu berechnen. In Bezug auf die Web-Performance gibt es viele bessere Möglichkeiten, um Optimierungsbemühungen zu investieren, da die gesamte Zeit, um das CSSOM zu erstellen, in der Regel kürzer ist als die Dauer eines DNS-Lookups.

### Weitere Prozesse

#### JavaScript-Kompilierung

Während das CSS geparst und der CSSOM erstellt wird, werden andere Ressourcen, einschließlich JavaScript-Dateien, heruntergeladen (dank des Vorladescanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://de.wikipedia.org/wiki/Abstrakter_Syntaxbaum) und leiten sie in einen Compiler, der Bytecode ausgibt. Dies wird als JavaScript-Kompilierung bezeichnet. Der größte Teil des Codes wird auf dem Hauptthread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web-Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Zugänglichkeitsbaums

Der Browser erstellt auch einen [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility), den unterstützende Geräte verwenden, um Inhalte zu parsen und zu interpretieren. Das Accessibility Object Model (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Zugänglichkeitsbaum, wenn das DOM aktualisiert wird. Der Zugänglichkeitsbaum kann nicht von den unterstützenden Technologien selbst modifiziert werden.

Bis das AOM erstellt ist, sind die Inhalte nicht für [Screenreader](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) zugänglich.

## Rendern

Die Rendering-Schritte umfassen Stil, Layout, Malen und in einigen Fällen Komposition. Die im Parsing-Schritt erstellten CSSOM- und DOM-Bäume werden zu einem Renderbaum kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gezeichnet wird. In einigen Fällen kann der Inhalt in eine eigene Schicht verschoben und zusammengesetzt werden, wodurch die Leistung verbessert wird, indem Teile des Bildschirms auf der GPU statt auf der CPU gemalt werden, wodurch der Hauptthread freigegeben wird.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad besteht darin, den DOM und CSSOM zu einem Renderbaum zu kombinieren. Der Stilbaum oder Renderbaum beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder sowie Knoten mit `display: none`, wie `script { display: none; }`, die Sie in User-Agent-Stylesheets finden, sind nicht im Renderbaum enthalten, da sie nicht im gerenderten Ergebnis erscheinen. Knoten mit `visibility: hidden` sind im Renderbaum enthalten, da sie Platz einnehmen. Da wir keine Direktiven angegeben haben, um den User-Agent-Standard zu überschreiben, ist der `script`-Knoten in unserem obigen Beispiel nicht im Renderbaum enthalten.

Jeder sichtbare Knoten hat die entsprechenden CSSOM-Regeln, die auf ihn angewendet werden. Der Renderbaum hält alle sichtbaren Knoten mit Inhalten und berechneten Stilen — alle relevanten Stile werden jedem sichtbaren Knoten im DOM-Baum zugeordnet, und basierend auf der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) wird bestimmt, welche berechneten Stile für jeden Knoten gelten.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist, Layout auf dem Renderbaum auszuführen, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, bei dem die Dimensionen und der Standort aller Knoten im Renderbaum bestimmt werden, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jeder nachfolgende Größen- und Positionsbestimmungsprozess für einen Teil der Seite oder das gesamte Dokument.

Sobald der Renderbaum aufgebaut ist, beginnt das Layout. Der Renderbaum identifiziert, welche Knoten angezeigt werden (auch wenn sie unsichtbar sind) zusammen mit ihren berechneten Stilen, nicht jedoch die Dimensionen oder der Standort jedes Knotens. Um die exakte Größe und Position jedes Objektes zu bestimmen, startet der Browser an der Wurzel des Renderbaums und durchläuft diesen.

Auf der Webseite ist fast alles ein Kasten. Verschiedene Geräte und unterschiedliche Desktop-Einstellungen bedeuten eine unbegrenzte Anzahl unterschiedlicher Ansichtsfenstergrößen. In dieser Phase, ausgehend von der Größe des Ansichtsfensters, bestimmt der Browser, welche Größe alle unterschiedlichen Kästen auf dem Bildschirm haben werden. Rückgreifend auf die Größe des Ansichtsfensters ab, beginnt das Layout im Allgemeinen mit dem Body und legt die Größen aller Nachkommen im Body fest, wobei jede Komponente des Boxmodels des Elements, indem Platzhalter für ersetzte Elemente bereitgestellt werden, deren Dimensionen der Browser noch nicht kennt, beispielsweise unser Bild.

Die erste Berechnung der Größe und Position jedes Knotens wird _Layout_ genannt. Nachfolgende Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel nehmen wir an, dass das erste Layout erfolgt, bevor das Bild zurückgegeben wird. Da wir die Dimensionen unseres Bildes nicht deklariert haben, wird es eine Neuberechnung geben, sobald die Bildmaße bekannt sind.

### Paint

Der letzte Schritt im kritischen Rendering-Pfad ist das Zeichnen der einzelnen Knoten auf den Bildschirm, wobei der erste Vorgang davon als {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} bezeichnet wird. In der Painting- oder Rasterisierungsphase konvertiert der Browser jedes Kästchen, das in der Layout-Phase berechnet wurde, in reale Pixel auf dem Bildschirm. Malen umfasst das Zeichnen jedes visuellen Teils eines Elements auf dem Bildschirm, einschließlich Text, Farben, Rahmen, Schatten und ersetzte Elemente wie Schaltflächen und Bilder. Der Browser muss dies sehr schnell tun.

Um ein sanftes Scrollen und Animationen zu gewährleisten, muss alles, was den Hauptthread besetzt, einschließlich der Berechnung von Stilen, zusammen mit Reflow und Paint, der Browser in weniger als 16,67ms schaffen. Bei einer Auflösung von 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gezeichnet werden müssen. Das ist eine Menge Pixel, die sehr schnell gezeichnet werden müssen. Um sicherzustellen, dass das Nachzeichnen sogar schneller als das erste Mal erfolgt, wird das Zeichnen auf den Bildschirm in der Regel in mehrere Schichten unterteilt. Wenn dies der Fall ist, ist das Kompositionieren notwendig.

Das Malen kann die Elemente im Layoutbaum in Schichten zerbrechen. Das Fördern von Inhalten in Schichten auf der GPU (anstatt auf dem Hauptthread auf der CPU) verbessert die Leistung beim Malen und Nachzeichnen. Es gibt bestimmte Eigenschaften und Elemente, die eine Schicht instanziieren, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) und jedes Element, das die CSS-Eigenschaften von [`opacity`](/de/docs/Web/CSS/opacity), einer 3D-[`transform`](/de/docs/Web/CSS/transform), [`will-change`](/de/docs/Web/CSS/will-change) und einigen anderen. Diese Knoten werden zusammen mit ihren Nachkommen auf ihrer eigenen Schicht gemalt, es sei denn, ein Nachkomme erfordert aus einem oder mehreren der oben genannten Gründe eine eigene Schicht.

Schichten verbessern die Leistung, sind aber teuer, wenn es um das Speichermanagement geht, und sollten nicht übermäßig als Teil von Web-Performance-Optimierungsstrategien verwendet werden.

### Komposition

Wenn Teile des Dokuments in verschiedenen Schichten gezeichnet werden, die sich überlappen, ist eine Komposition erforderlich, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden, und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können Neuberechnungen auftreten (erinnern wir uns an unser Beispielbild, das spät ankommt). Eine Neuberechnung führt zum Neuzeichnen und einer erneuten Komposition. Hätten wir die Dimensionen unseres Bildes definiert, wäre keine Neuberechnung notwendig gewesen, und nur die Schicht, die neu gezeichnet werden muss, würde neu gezeichnet und bei Bedarf komponiert. Aber wir haben die Bilddimensionen nicht angegeben! Wenn das Bild vom Server abgerufen wird, geht der Rendering-Prozess zurück zu den Layout-Schritten und startet von dort neu.

## Interaktivität

Sobald der Hauptthread mit dem Zeichnen der Seite fertig ist, könnte man denken, dass wir "alles erledigt" seien. Das ist nicht unbedingt der Fall. Wenn die Ladung JavaScript beinhaltet, das korrekt verzögert wurde und erst nach dem [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt wird, könnte der Hauptthread beschäftigt sein und nicht für Scrollen, Touch und andere Interaktionen zur Verfügung stehen.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß dafür, wie lange es von der ersten Anfrage, die zum DNS-Lookup und der TCP-Verbindung führte, bis zur Interaktivität der Seite dauerte — interaktiv bedeutet der Zeitpunkt nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}, wenn die Seite auf Benutzerinteraktionen innerhalb von 50ms reagiert. Wenn der Hauptthread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, steht er nicht zur Verfügung und kann daher nicht rechtzeitig (weniger als 50 ms) auf Benutzerinteraktionen reagieren.

In unserem Beispiel hat das Bild vielleicht schnell geladen, aber vielleicht war die Datei `another-script.js` 2MB groß und die Netzwerkverbindung unseres Nutzers war langsam. In diesem Fall würde der Nutzer die Seite sehr schnell sehen, aber er könnte nicht ohne Ruckeln scrollen, bis das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist kein gutes Nutzererlebnis. Vermeiden Sie, den Hauptthread zu blockieren, wie in diesem WebPageTest-Beispiel demonstriert:

![Der Hauptthread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei über eine schnelle Verbindung besetzt](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung mehr als 1,5 Sekunden, und der Hauptthread war die gesamte Zeit vollständig besetzt und reagierte nicht auf Klickereignisse oder Bildschirmberührungen.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
