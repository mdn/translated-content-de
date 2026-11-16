---
title: "Seitenaufbau: Wie Browser funktionieren"
short-title: Wie Browser funktionieren
slug: Web/Performance/Guides/How_browsers_work
l10n:
  sourceCommit: 82e314bf21755aeb56f79b3168f6f0cc2111c124
---

Nutzer möchten Webangebote mit schnell ladenden Inhalten und reibungslosen Interaktionen. Entwickler sollten daher darauf hinarbeiten, diese Ziele zu erreichen.

Wenn Sie Änderungen umsetzen, die die tatsächliche und die wahrgenommene Performance verbessern, ist es hilfreich zu verstehen, wie der Browser funktioniert. Dieser Artikel erklärt, wie der Browser Inhalte lädt und welche Faktoren die Performance beeinflussen.

## Überblick

Schnelle Websites bieten eine bessere Benutzererfahrung. Nutzer erwarten schnell ladende Inhalte und eine reibungslose, reaktionsschnelle Bedienung.

Zwei wesentliche Herausforderungen für die Web-Performance sind die Latenz und die Tatsache, dass Browser größtenteils nur einen Thread verwenden.

Die Latenz ist die größte Bedrohung für eine schnell ladende Seite. Das Ziel von Entwicklern ist es, eine Website so schnell wie möglich laden zu lassen – oder sie zumindest _extrem schnell erscheinen_ zu lassen –, damit Nutzer die angeforderten Informationen möglichst rasch erhalten. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über das Netzwerk an Computer zu übertragen. Bei der Web-Performance geht es darum, die Seite so schnell wie möglich laden zu lassen.

Browser gelten größtenteils als single-threaded. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie die nächste beginnen. Entwickler müssen für performante Interaktionen mit der Website sorgen – vom flüssigen Scrollen bis hin zu reaktionsschnellen Touch-Interaktionen. Die Renderzeit ist dabei entscheidend: Der Hauptthread muss sämtliche ihm zugewiesenen Aufgaben erledigen und dennoch für Nutzerinteraktionen verfügbar bleiben. Die Web-Performance lässt sich verbessern, indem Sie die Single-Thread-Natur des Browsers berücksichtigen und die Aufgaben des Hauptthreads minimieren. So ermöglichen Sie ein flüssiges Rendering und unmittelbare Reaktionen.

## Navigation

Die _Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie beginnt, wenn ein Nutzer eine Seite anfordert, etwa indem er eine URL in die Adressleiste eingibt, auf einen Link klickt oder ein Formular absendet.

Ein Ziel der Web-Performance ist es, die Zeit bis zum Abschluss der Navigation zu minimieren. Latenz und Bandbreite können dabei Verzögerungen verursachen.

### DNS-Abfrage

Der erste Schritt beim Aufrufen einer Webseite besteht darin, die Ressourcen der Seite zu finden. Wenn Sie `https://example.com` aufrufen, liegt die HTML-Seite auf einem Server mit der IP-Adresse `93.184.216.34`. Beim ersten Besuch dieser Website erfolgt eine DNS-Abfrage.

Ihr Browser fordert eine DNS-Abfrage an, die schließlich von einem Nameserver beantwortet wird. Dieser liefert eine IP-Adresse zurück. Nach dieser ersten Anfrage wird die IP-Adresse wahrscheinlich zwischengespeichert. Das beschleunigt spätere Anfragen, weil die IP-Adresse aus dem Cache statt vom Nameserver abgerufen werden kann.

DNS-Abfragen sind beim Laden einer Seite normalerweise nur einmal pro Hostname erforderlich. Allerdings muss für jeden eindeutigen Hostnamen, auf den die angeforderte Seite verweist, eine DNS-Abfrage erfolgen. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Analysedienste jeweils unterschiedliche Hostnamen verwenden, ist für jeden davon eine DNS-Abfrage nötig.

![Anfragen von Mobilgeräten gelangen zunächst zum Mobilfunkmast und dann zu einem zentralen Rechner des Mobilfunkanbieters, bevor sie an das Internet gesendet werden](latency.jpg)

Das kann insbesondere in Mobilfunknetzen die Performance beeinträchtigen. Wenn sich ein Nutzer in einem Mobilfunknetz befindet, führt jede DNS-Abfrage vom Telefon über den Mobilfunkmast zu einem autoritativen DNS-Server. Die Entfernungen zwischen Telefon, Mobilfunkmast und Nameserver können die Latenz erheblich erhöhen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser über einen {{Glossary("TCP_handshake", "TCP-Three-Way-Handshake")}} eine Verbindung zum Server her. Mit diesem Mechanismus können zwei Kommunikationspartner – in diesem Fall Browser und Webserver – die Parameter der TCP-Socket-Verbindung aushandeln, bevor Daten übertragen werden, häufig über {{Glossary("HTTPS", "HTTPS")}}.

Der Three-Way-Handshake von TCP wird oft als „SYN-SYN-ACK“ bezeichnet – genauer gesagt als SYN, SYN-ACK, ACK –, weil TCP drei Nachrichten überträgt, um eine TCP-Sitzung zwischen zwei Computern auszuhandeln und zu beginnen, noch bevor die eigentliche Anfrage gestellt wird.

### TLS-Aushandlung

Für sichere Verbindungen über HTTPS ist ein weiterer „Handshake“ erforderlich. Dieser Handshake – genauer gesagt die {{Glossary("TLS", "TLS")}}-Aushandlung – legt fest, welche Cipher Suite zur Verschlüsselung der Kommunikation verwendet wird, überprüft den Server und stellt vor Beginn der Datenübertragung eine sichere Verbindung her. Ein vollständiger TLS-1.3-Handshake benötigt einen Hin- und Rückweg zum Server, bevor der Browser die Anfrage nach dem Inhalt senden kann; ein vollständiger TLS-1.2-Handshake benötigt zwei.

![Die DNS-Abfrage, der TCP-Handshake und fünf Schritte des TLS-Handshakes, darunter Client Hello, Server Hello und Zertifikat, Client Key sowie Finished für Server und Client.](ssl.jpg)

Das Absichern der Verbindung verlängert die Ladezeit der Seite. Die zusätzliche Latenz lohnt sich jedoch, da Dritte die zwischen Browser und Webserver übertragenen Daten nicht entschlüsseln können.

Sobald die DNS-Auflösung abgeschlossen ist, benötigen eine neue TCP-Verbindung und ein vollständiger TLS-Handshake zwei Hin- und Rückwege (TLS 1.3) beziehungsweise drei (TLS 1.2), bevor der Browser die Anfrage stellen kann.

## Antwort

Sobald eine Verbindung zum Webserver besteht, sendet der Browser im Namen des Nutzers eine erste [HTTP-`GET`-Anfrage](/de/docs/Web/HTTP/Reference/Methods). Bei Websites wird damit meist eine HTML-Datei angefordert. Der Server antwortet darauf mit den entsprechenden Antwort-Headern und dem HTML-Inhalt.

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

Die Antwort auf diese erste Anfrage enthält das erste empfangene Datenbyte. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) bezeichnet die Zeit zwischen der Anfrage des Nutzers – beispielsweise durch einen Klick auf einen Link – und dem Empfang dieses ersten HTML-Pakets. Der erste Teil des Inhalts umfasst normalerweise 14 KB Daten.

In unserem obigen Beispiel ist die Anfrage deutlich kleiner als 14 KB. Die verlinkten Ressourcen werden jedoch erst angefordert, wenn der Browser beim Parsen auf die Links trifft, wie weiter unten beschrieben.

### Überlastkontrolle / TCP Slow Start

TCP teilt Daten für die Übertragung in Segmente auf und gewährleistet, dass alle Segmente zuverlässig zwischen Server und Client zugestellt werden. Der Client bestätigt empfangene Segmente durch ACK-Pakete. Der Server entscheidet, wie viele Segmente er sendet, bevor er auf ein ACK wartet.

Bei dieser Anzahl muss ein Gleichgewicht gefunden werden: Wartet der Server nach jedem Segment auf ein ACK, ist die Übertragung langsam, weil er für jedes gesendete Segment einen vollständigen Hin- und Rückweg abwarten muss – selbst bei geringer Netzwerkauslastung.
Sendet er andererseits zu viele Segmente gleichzeitig in ein stark ausgelastetes Netzwerk, können einige unterwegs verloren gehen. Der Client kann Segmente, die er nie empfangen hat, nicht bestätigen. Deshalb sendet der Server sie schließlich erneut.

TCP verwendet zwei voneinander unabhängige Grenzen dafür, wie viele unbestätigte Daten der Server gleichzeitig übertragen darf:

- Das _Empfangsfenster_ (RWND) schützt den Client: Es teilt dem Server mit, wie viele eingehende Daten der Client derzeit aufnehmen kann. Diese Grenze hängt vom verfügbaren Platz im Empfangspuffer des Clients ab. Der Client teilt sie dem Server mit, um den TCP-Datenfluss zu steuern.
- Das _Überlastfenster_ (CWND) schützt das Netzwerk: Es ist die Schätzung des Servers, wie viele Daten der Übertragungsweg zum Client transportieren kann, ohne dass Segmente verloren gehen.

Der Server hat nie mehr unbestätigte Daten gleichzeitig in Übertragung, als das kleinere dieser beiden Fenster erlaubt.

Das Überlastfenster ist anfangs klein und wird während der Übertragung angepasst. Während des {{Glossary("TCP_slow_start", "TCP Slow Start")}} wächst es schnell – ungefähr um das Doppelte pro Hin- und Rückweg –, bis Segmente verloren gehen oder der TCP-Slow-Start-Schwellenwert (ssthresh) erreicht ist. Danach wächst es langsamer und wird verkleinert, sobald das Netzwerk Anzeichen einer Überlastung zeigt. Weitere Einzelheiten zur TCP-Überlastkontrolle finden Sie in [RFC 5681](https://www.rfc-editor.org/rfc/rfc5681.html).

## Parsen

Sobald der Browser den ersten Teil der Daten empfängt, kann er mit dem Parsen der empfangenen Informationen beginnen. Beim {{Glossary("parse", "Parsen")}} wandelt der Browser die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und das {{Glossary("CSSOM", "CSSOM")}} um. Der Renderer verwendet diese, um die Seite auf dem Bildschirm darzustellen.

Das DOM ist die interne Darstellung des Markups im Browser. Es ist außerdem zugänglich und kann über verschiedene JavaScript-APIs verändert werden.

Selbst wenn das HTML der angeforderten Seite größer als das erste 14-KB-Paket ist, beginnt der Browser mit dem Parsen und versucht, anhand der vorhandenen Daten Inhalte zu rendern. Für die Optimierung der Web-Performance ist es daher wichtig, alles, was der Browser zum Beginn des Renderings benötigt – oder zumindest die HTML- und CSS-Vorlage für die grundlegende Seitenstruktur –, in den ersten 14 KB unterzubringen. Bevor jedoch etwas auf dem Bildschirm dargestellt werden kann, müssen HTML, CSS und JavaScript geparst werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path).

Der erste Schritt besteht darin, das HTML-Markup zu verarbeiten und den DOM-Baum aufzubauen. Das Parsen von HTML umfasst die [Tokenisierung](/de/docs/Web/API/DOMTokenList) und den Aufbau des Baums. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und -werte. Wenn das Dokument wohlgeformt ist, lässt es sich unkompliziert und schneller parsen. Der Parser verarbeitet die tokenisierte Eingabe und baut daraus den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das Element [`<html>`](/de/docs/Web/HTML/Reference/Elements/html) ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum bildet die Beziehungen und Hierarchien zwischen den verschiedenen Elementen ab. Elemente, die in anderen Elementen verschachtelt sind, bilden Kindknoten. Je mehr DOM-Knoten es gibt, desto länger dauert der Aufbau des DOM-Baums.

![Der DOM-Baum für unseren Beispielcode mit allen Knoten, einschließlich der Textknoten.](dom.gif)

Wenn der Parser auf nicht blockierende Ressourcen wie ein Bild trifft, fordert der Browser diese Ressourcen an und setzt das Parsen fort. Auch beim Auftreten einer CSS-Datei kann das Parsen fortgesetzt werden. `<script>`-Elemente hingegen – insbesondere solche ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder `defer`-Attribut – blockieren das Rendering und unterbrechen das Parsen des HTML. Der Preload-Scanner des Browsers verringert zwar diese Renderblockierung, große Skripte können aber weiterhin einen erheblichen Engpass verursachen.

### Preload-Scanner

Der Aufbau des DOM-Baums beansprucht den Hauptthread. Der _Preload-Scanner_ parst die verfügbaren Inhalte und fordert Ressourcen mit hoher Priorität an, etwa CSS, JavaScript und Webfonts. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser auf einen Verweis auf eine externe Ressource trifft, um diese anzufordern. Er lädt Ressourcen im Hintergrund. Wenn der eigentliche HTML-Parser die entsprechenden Ressourcen erreicht, werden sie möglicherweise bereits übertragen oder sind schon heruntergeladen. Dadurch entstehen weniger Blockierungen.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel parst der Hauptthread HTML und CSS, während der Preload-Scanner die Skripte und das Bild findet und ebenfalls mit dem Herunterladen beginnt. Das Attribut `async` sorgt dafür, dass das Skript den Ablauf nicht blockiert. Falls die Reihenfolge beim Parsen und Ausführen von JavaScript wichtig ist, kann stattdessen das Attribut `defer` verwendet werden.

Das Warten auf CSS blockiert weder das Parsen von HTML noch Downloads, wohl aber JavaScript: Skripte werden häufig verwendet, um abzufragen, wie sich CSS-Eigenschaften auf Elemente auswirken.

### Aufbau des CSSOM-Baums

Der zweite Schritt des kritischen Rendering-Pfads besteht darin, CSS zu verarbeiten und den CSSOM-Baum aufzubauen. Das CSS-Objektmodell ähnelt dem DOM. DOM und CSSOM sind jeweils Bäume, aber voneinander unabhängige Datenstrukturen. Der Browser wandelt CSS-Regeln in eine Zuordnung von Styles um. Dazu gehört ein Baum aus Knoten, deren Beziehungen als Eltern-, Kind- und Geschwisterknoten auf den CSS-Selektoren beruhen.

Wie bei HTML wandelt der Browser die empfangenen CSS-Regeln in eine Form um, mit der er arbeiten kann. Er wiederholt also den Prozess der Umwandlung in Objekte, diesmal für CSS statt HTML.

Der CSSOM-Baum enthält auch Styles aus dem User-Agent-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die für einen Knoten gilt, und verfeinert die berechneten Styles rekursiv durch Anwendung spezifischerer Regeln. Mit anderen Worten: Er führt die Kaskadierung der Eigenschaftswerte durch.

Der Aufbau des CSSOM geht schnell und wird in den Entwicklertools nicht separat angezeigt.
Stattdessen zeigt die Metrik „Recalculate Style“ in den Entwicklertools die gesamte Zeit an, die zum Parsen von CSS, zum Aufbau des CSSOM-Baums und zur rekursiven Berechnung der Styles benötigt wird. Bei der Performance-Optimierung lässt sich Ihre Zeit sinnvoller einsetzen: Der Aufbau des CSSOM dauert im Allgemeinen kürzer als eine einzige DNS-Abfrage.

### Weitere Prozesse

#### JavaScript-Kompilierung

Während CSS geparst und das CSSOM erstellt wird, werden weitere Ressourcen – darunter JavaScript-Dateien – heruntergeladen (dank des Preload-Scanners). JavaScript wird geparst, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume umgewandelt. Einige Browser-Engines übergeben diese [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) an einen Compiler, der daraus Bytecode erzeugt. Dieser Vorgang wird als JavaScript-Kompilierung bezeichnet. Der Großteil des Codes wird auf dem Hauptthread interpretiert; Ausnahmen sind beispielsweise Codeausführungen in [Web Workern](/de/docs/Web/API/Web_Workers_API).

#### Aufbau des Barrierefreiheitsbaums

Der Browser baut außerdem einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility) auf, den unterstützende Technologien zum Parsen und Interpretieren von Inhalten verwenden. Das Accessibility Object Model (AOM) ähnelt einer semantischen Version des DOM. Der Browser aktualisiert den Barrierefreiheitsbaum und das DOM gleichzeitig. Unterstützende Technologien können den Barrierefreiheitsbaum nicht direkt verändern.

Bis das AOM aufgebaut ist, sind die Inhalte für [Screenreader](/de/docs/Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors) nicht zugänglich.

## Rendering

Zu den Rendering-Schritten gehören die Berechnung der Styles, das Layout, das Zeichnen und in manchen Fällen das Compositing. Der beim Parsen erstellte CSSOM- und der DOM-Baum werden zu einem Renderbaum zusammengeführt. Anhand dieses Baums wird das Layout aller sichtbaren Elemente berechnet, die auf dem Bildschirm gezeichnet werden. In manchen Fällen können Inhalte auf eine eigene Ebene verschoben und durch Compositing zusammengesetzt werden. Das verbessert die Performance, weil Teile des Bildschirms auf der GPU statt auf der CPU gezeichnet werden und der Hauptthread dadurch entlastet wird.

### Styles

Der dritte Schritt des kritischen Rendering-Pfads besteht darin, DOM und CSSOM zu einem Renderbaum zusammenzuführen. Der Aufbau des Baums berechneter Styles – des Renderbaums – beginnt an der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, etwa das Element [`<head>`](/de/docs/Web/HTML/Reference/Elements/head) und seine Kindknoten sowie alle Knoten mit `display: none`, werden nicht in den Renderbaum aufgenommen. Ein Beispiel dafür ist `script { display: none; }` in User-Agent-Stylesheets. Diese Elemente erscheinen nicht in der gerenderten Ausgabe. Knoten mit `visibility: hidden` werden dagegen in den Renderbaum aufgenommen, weil sie Platz beanspruchen. Da wir keine Anweisungen angegeben haben, die die Standardeinstellung des User-Agents überschreiben, wird der Knoten `script` aus unserem obigen Codebeispiel nicht in den Renderbaum aufgenommen.

Auf jeden sichtbaren Knoten werden die entsprechenden CSSOM-Regeln angewendet. Der Renderbaum enthält alle sichtbaren Knoten mit ihren Inhalten und berechneten Styles. Dazu werden jedem sichtbaren Knoten des DOM-Baums die relevanten Styles zugeordnet und anhand der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) die berechneten Styles für jeden Knoten bestimmt.

### Layout

Der vierte Schritt des kritischen Rendering-Pfads besteht darin, anhand des Renderbaums das Layout auszuführen und die Geometrie jedes Knotens zu berechnen. Beim _Layout_ werden die Abmessungen und die Position aller Knoten im Renderbaum sowie Größe und Position jedes Objekts auf der Seite bestimmt. Ein _Reflow_ ist jede spätere Neuberechnung von Größen und Positionen für einen Teil der Seite oder für das gesamte Dokument.

Sobald der Renderbaum aufgebaut ist, beginnt die Layout-Berechnung. Der Renderbaum gibt an, welche Knoten angezeigt werden (auch wenn sie unsichtbar sind), und enthält deren berechnete Styles, aber weder ihre Abmessungen noch ihre Positionen. Um Größe und Position jedes Objekts genau zu bestimmen, durchläuft der Browser den Renderbaum von der Wurzel aus.

Auf einer Webseite ist fast alles eine Box. Unterschiedliche Geräte und Desktop-Einstellungen führen zu einer unbegrenzten Vielfalt an Viewport-Größen. In dieser Phase bestimmt der Browser unter Berücksichtigung der Viewport-Größe die Abmessungen aller Boxen auf dem Bildschirm. Das Layout beginnt im Allgemeinen beim Body: Die Größen aller untergeordneten Elemente werden festgelegt und für ersetzte Elemente mit unbekannten Abmessungen – wie unser Bild – wird Platz freigehalten.

Die erstmalige Bestimmung von Größe und Position jedes Knotens wird _Layout_ genannt. Spätere Neuberechnungen des _Layouts_ heißen _Reflows_. Nehmen wir in unserem Beispiel an, dass das erste Layout berechnet wird, bevor das Bild eintrifft. Da wir die Abmessungen des Bildes nicht angegeben haben, kommt es zu einem Reflow, sobald sie bekannt sind.

### Zeichnen

Der letzte Schritt des kritischen Rendering-Pfads besteht darin, die einzelnen Knoten auf dem Bildschirm zu zeichnen. Das erste solche Zeichnen wird als {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} bezeichnet. In der Zeichen- oder Rasterisierungsphase wandelt der Browser jede in der Layout-Phase berechnete Box in tatsächliche Pixel auf dem Bildschirm um. Dabei zeichnet er sämtliche sichtbaren Bestandteile eines Elements, darunter Text, Farben, Rahmen, Schatten und ersetzte Elemente wie Schaltflächen und Bilder. Dies muss sehr schnell geschehen.

Damit Scrollen und Animationen flüssig bleiben, dürfen sämtliche Vorgänge auf dem Hauptthread – einschließlich der Style-Berechnung, Reflow und Zeichnen – den Browser weniger als 16,67 ms kosten. Bei einer Auflösung von 2048 × 1536 muss das iPad mehr als 3.145.000 Pixel auf dem Bildschirm darstellen. Sehr viele Pixel müssen also in kürzester Zeit gezeichnet werden. Damit ein erneutes Zeichnen schneller ist als das erstmalige, wird die Darstellung auf dem Bildschirm im Allgemeinen in mehrere Ebenen aufgeteilt. Das erfordert Compositing.

Beim Zeichnen können die Elemente des Layout-Baums auf mehrere Ebenen verteilt werden. Wenn Inhalte auf Ebenen der GPU statt auf dem Hauptthread der CPU gezeichnet werden, verbessert das die Performance beim Zeichnen und erneuten Zeichnen. Bestimmte Eigenschaften und Elemente erzeugen eine Ebene, darunter [`<video>`](/de/docs/Web/HTML/Reference/Elements/video) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) sowie Elemente mit den CSS-Eigenschaften {{cssxref("opacity")}}, einem 3D-{{cssxref("transform")}}, {{cssxref("will-change")}} und einigen weiteren. Diese Knoten und ihre Nachkommen werden auf ihrer eigenen Ebene gezeichnet, sofern nicht ein Nachkomme aus einem oder mehreren der genannten Gründe eine eigene Ebene erhält.

Ebenen verbessern die Performance, verursachen aber Aufwand bei der Speicherverwaltung. Im Rahmen der Web-Performance-Optimierung sollten sie daher nicht übermäßig eingesetzt werden.

### Compositing

Wenn Abschnitte des Dokuments auf unterschiedlichen, sich überlappenden Ebenen gezeichnet werden, ist Compositing erforderlich. So wird sichergestellt, dass sie in der richtigen Reihenfolge auf dem Bildschirm erscheinen und die Inhalte korrekt gerendert werden.

Während die Seite weitere Ressourcen lädt, können Reflows auftreten (denken Sie an unser Beispielbild, das erst spät eintraf). Ein Reflow löst ein erneutes Zeichnen und anschließendes Compositing aus. Hätten wir die Abmessungen unseres Bildes festgelegt, wäre kein Reflow nötig gewesen. Stattdessen wäre nur die betroffene Ebene erneut gezeichnet und bei Bedarf durch Compositing zusammengesetzt worden. Wir haben die Bildabmessungen jedoch nicht angegeben! Sobald das Bild vom Server empfangen wird, kehrt der Rendering-Prozess zu den Layout-Schritten zurück und setzt von dort aus erneut an.

## Interaktivität

Nachdem der Hauptthread die Seite gezeichnet hat, könnte man meinen, der Vorgang sei abgeschlossen. Das ist nicht unbedingt der Fall. Wenn beim Laden JavaScript eingebunden ist, dessen Ausführung korrekt aufgeschoben wurde und das erst nach Auslösung des [`onload`](/de/docs/Web/API/Window/load_event)-Ereignisses ausgeführt wird, ist der Hauptthread möglicherweise beschäftigt und steht für Scrollen, Touch-Eingaben und andere Interaktionen nicht zur Verfügung.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) misst die Zeit von der ersten Anfrage – die zur DNS-Abfrage und TCP-Verbindung führte – bis zu dem Zeitpunkt, an dem die Seite interaktiv ist. Eine Seite gilt als interaktiv, wenn sie nach dem {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} innerhalb von 50 ms auf Nutzerinteraktionen reagiert. Wenn der Hauptthread JavaScript parst, kompiliert und ausführt, ist er nicht verfügbar und kann nicht rechtzeitig – also in weniger als 50 ms – auf Nutzerinteraktionen reagieren.

Nehmen wir in unserem Beispiel an, das Bild wurde schnell geladen, die Datei `another-script.js` war jedoch 2 MB groß und die Netzwerkverbindung des Nutzers langsam. In diesem Fall würde der Nutzer die Seite zwar schnell sehen, könnte aber erst dann ruckelfrei scrollen, wenn das Skript heruntergeladen, geparst und ausgeführt wurde. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Hauptthread zu blockieren, wie dieses WebPageTest-Beispiel zeigt:

![Der Hauptthread ist durch das Herunterladen, Parsen und Ausführen einer JavaScript-Datei ausgelastet – selbst bei einer schnellen Verbindung](visa_network.png)

In diesem Beispiel dauerte die Ausführung des JavaScript mehr als 1,5 Sekunden. Während dieser gesamten Zeit war der Hauptthread vollständig ausgelastet und reagierte weder auf Klicks noch auf Berührungen des Bildschirms.

## Siehe auch

- [Web-Performance](/de/docs/Web/Performance)
