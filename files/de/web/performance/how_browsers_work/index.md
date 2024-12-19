---
title: "Seitenerstellung: Wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer wünschen sich Web-Erfahrungen mit Inhalten, die schnell geladen werden und reibungslos interagierbar sind. Daher sollte ein Entwickler bestrebt sein, diese beiden Ziele zu erreichen.

Um die Leistung und die wahrgenommene Leistung zu verbessern, ist es hilfreich, zu verstehen, wie der Browser funktioniert.

## Übersicht

Schnelle Websites bieten bessere Benutzererfahrungen. Benutzer möchten und erwarten Web-Erfahrungen mit Inhalten, die schnell geladen werden und reibungslos interagierbar sind.

Zwei Hauptprobleme bei der Web-Leistung betreffen die Latenz und die Tatsache, dass Browser größtenteils single-threaded sind.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite zu gewährleisten. Das Ziel der Entwickler ist es, die Seite so schnell wie möglich laden zu lassen — oder zumindest _den Anschein_ zu erwecken, super schnell zu laden — damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerk-Latenz ist die Zeit, die benötigt wird, um Bytes über die Luft zu Computern zu übertragen. Web-Leistung ist das, was wir tun müssen, um die Seite so schnell wie möglich zu laden.

Größtenteils werden Browser als single-threaded angesehen. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe aufnehmen. Für reibungslose Interaktionen ist das Ziel des Entwicklers sicherzustellen, dass Seiteninteraktionen leistungsfähig sind, von flüssigem Scrollen bis hin zu reaktionsschnellen Berührungen. Renderzeit ist entscheidend, um sicherzustellen, dass der Haupt-Thread alle Aufgaben, die wir ihm auftragen, erledigen kann und dennoch immer verfügbar ist, um Benutzerinteraktionen zu bearbeiten. Die Web-Leistung kann verbessert werden, indem die single-threaded Natur des Browsers verstanden und die Aufgaben des Haupt-Threads, wo möglich und sinnvoll, minimiert werden, um sicherzustellen, dass das Rendering reibungslos ist und die Antworten auf Interaktionen sofort erfolgen.

## Navigation

_Navigation_ ist der erste Schritt beim Laden einer Webseite. Sie erfolgt immer dann, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt, ein Formular absendet oder andere Aktionen durchführt.

Eines der Ziele der Web-Leistung ist es, die Zeit zu minimieren, die die Navigation benötigt, um abgeschlossen zu werden. Unter idealen Bedingungen dauert dies normalerweise nicht lange, aber Latenz und Bandbreite sind Gegner, die Verzögerungen verursachen können.

### DNS-Namensauflösung

Der erste Schritt beim Navigieren zu einer Webseite besteht darin, herauszufinden, wo die Assets für diese Seite sich befinden. Wenn Sie zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage stattfinden.

Ihr Browser fordert eine DNS-Abfrage an, die schließlich von einem Nameserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird die IP wahrscheinlich für eine gewisse Zeit zwischengespeichert, wodurch nachfolgende Anfragen schneller durchgeführt werden können, indem die IP-Adresse aus dem Cache abgerufen wird, anstatt erneut einen Nameserver zu kontaktieren.

DNS-Abfragen müssen normalerweise nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. Allerdings müssen DNS-Abfragen für jeden eindeutigen Hostnamen, auf den die angeforderte Seite verweist, durchgeführt werden. Wenn Ihre Schriftarten, Bilder, Scripts, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage durchgeführt werden.

![Mobile Anfragen gehen zuerst zum Sendeturm und dann zu einem zentralen Computer des Telefonunternehmens, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann problematisch für die Leistung sein, insbesondere in mobilen Netzwerken. Wenn ein Benutzer in einem mobilen Netzwerk ist, muss jede DNS-Anfrage vom Telefon zum Sendeturm erfolgen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Sendeturm und dem Nameserver kann eine erhebliche Latenz hinzufügen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser eine Verbindung zum Server über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} her. Dieser Mechanismus ist so konzipiert, dass zwei Entitäten, die kommunizieren möchten — in diesem Fall der Browser und der Webserver — die Parameter der Netzwerk-TCP-Socket-Verbindung aushandeln können, bevor Daten übertragen werden, oft über {{Glossary("HTTPS", "HTTPS")}}.

TCPs Drei-Wege-Handshake-Technik wird oft als "SYN-SYN-ACK" bezeichnet — oder genauer SYN, SYN-ACK, ACK — weil es drei Nachrichten gibt, die von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet, dass noch drei Nachrichten zwischen jedem Server hin und her gesendet werden müssen, und die Anfrage wurde noch nicht gestellt.

### TLS-Aushandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist ein weiterer "Handshake" erforderlich. Dieser Handshake oder genauer die {{Glossary("TLS", "TLS")}}-Aushandlung bestimmt, welcher Algorithmus zur Verschlüsselung der Kommunikation verwendet wird, überprüft den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der eigentliche Datentransfer beginnt. Dies erfordert fünf weitere Rundreisen zum Server, bevor die Anfrage nach Inhalten tatsächlich gesendet wird.

![Die DNS-Abfrage, der TCP-Handshake und 5 Schritte des TLS-Handshake inklusive client hello, server hello und Zertifikat, Client-Schlüssel und Fertigstellung für sowohl Server als auch Client.](ssl.jpg)

Während das Herstellen einer sicheren Verbindung Zeit zum Seitenladen hinzufügt, ist eine sichere Verbindung den Latenzaufwand wert, da die zwischen dem Browser und dem Webserver übertragenen Daten nicht von Dritten entschlüsselt werden können.

Nach den acht Rundreisen zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald wir eine etablierte Verbindung zu einem Webserver haben, sendet der Browser im Namen des Benutzers eine initiale [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods), bei Webseiten meistens eine HTML-Datei. Sobald der Server die Anfrage erhält, antwortet er mit den relevanten Antwort-Headern und dem Inhalt des HTML.

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

Diese Antwort auf diese erste Anfrage enthält das erste empfangene Datenbyte. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeitspanne zwischen dem Zeitpunkt, zu dem der Benutzer die Anfrage gestellt hat — zum Beispiel durch Klicken auf einen Link — und dem Erhalt dieses ersten HTML-Pakets. Der erste Inhaltsblock ist normalerweise 14 KB Daten.

In unserem obigen Beispiel ist die Anfrage definitiv kleiner als 14 KB, aber die verlinkten Ressourcen werden erst angefordert, wenn der Browser die Links während der unten beschriebenen Analyse entdeckt.

### Staukontrolle / TCP Slow Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Sequenz der Pakete garantiert, muss der Server eine Bestätigung vom Client in Form eines ACK-Pakets nach dem Senden einer bestimmten Anzahl von Segmenten erhalten.

Wartet der Server nach jedem Segment auf ein ACK, führt dies zu häufigen ACKs des Clients und kann die Übertragungszeit verlängern, selbst bei einem Netzwerk mit niedriger Last.

Andererseits kann das gleichzeitige Senden zu vieler Segmente dazu führen, dass bei einem ausgelasteten Netzwerk der Client die Segmente nicht empfangen kann und nur lange Zeit mit ACKs antwortet, und der Server muss die Segmente erneut senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "TCP Slow Start")}}-Algorithmus verwendet, um die Menge der übertragenen Daten schrittweise zu erhöhen, bis die maximale Netzwerkbandbreite bestimmt werden kann, und die Menge der übertragenen Daten im Falle einer hohen Netzwerklast zu reduzieren.

Die Anzahl der zu übertragenden Segmente wird durch den Wert des Stau-Fensters (CWND) gesteuert, das mit 1, 2, 4 oder 10 MSS initialisiert werden kann (MSS beträgt 1500 Byte im Ethernet-Protokoll). Dieser Wert ist die Anzahl der zu sendenden Bytes, bei deren Erhalt der Client ein ACK senden muss.

Wenn ein ACK eingeht, wird der CWND-Wert verdoppelt, und so kann der Server beim nächsten Mal mehr Segmente senden. Wenn stattdessen kein ACK empfangen wird, wird der CWND-Wert halbiert. Dieser Mechanismus erreicht ein Gleichgewicht zwischen dem Senden zu vieler Segmente und dem Senden zu weniger.

## Analyse

Sobald der Browser das erste Datenpaket empfängt, kann er mit der Analyse der empfangenen Informationen beginnen. {{Glossary("parse", "Analyse")}} ist der Schritt, bei dem der Browser die über das Netzwerk empfangenen Daten in das {{Glossary("DOM", "DOM")}} und {{Glossary("CSSOM", "CSSOM")}} umwandelt, die vom Renderer verwendet werden, um eine Seite auf dem Bildschirm darzustellen.

Das DOM ist die interne Darstellung des Markups für den Browser. Das DOM wird auch offengelegt und kann über verschiedene APIs in JavaScript manipuliert werden.

Selbst wenn das HTML der angeforderten Seite größer als das anfängliche 14-KB-Paket ist, beginnt der Browser mit der Analyse und versucht, eine Erfahrung basierend auf den Daten, die er hat, darzustellen. Aus diesem Grund ist es wichtig für die Optimierung der Webleistung, alles, was der Browser benötigt, um eine Seite zu rendern, oder zumindest eine Vorlage der Seite — das CSS und HTML, das für das erste Rendering benötigt wird — in den ersten 14 KB einzuschließen. Bevor jedoch etwas auf den Bildschirm gerendert wird, müssen das HTML, CSS und JavaScript analysiert werden.

### Aufbau des DOM-Baums

Wir beschreiben fünf Schritte im [kritischen Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path).

Der erste Schritt ist die Verarbeitung des HTML-Markups und der Aufbau des DOM-Baums. HTML-Analyse beinhaltet [Tokenisierung](/de/docs/Web/API/DOMTokenList) und Baumerstellung. HTML-Token umfassen Start- und End-Tags sowie Attributnamen und Werte. Wenn das Dokument gut formatiert ist, ist das Parsen einfach und schneller. Der Parser analysiert tokenisierten Input im Dokument und baut dabei den Dokumentbaum auf.

Der DOM-Baum beschreibt den Inhalt des Dokuments. Das [`<html>`](/de/docs/Web/HTML/Element/html)-Element ist das erste Element und der Wurzelknoten des Dokumentbaums. Der Baum spiegelt die Beziehungen und Hierarchien zwischen verschiedenen Elementen wider. Elemente, die in andere Elemente verschachtelt sind, sind untergeordnete Knoten. Je mehr DOM-Knoten vorhanden sind, desto länger dauert es, den DOM-Baum zu konstruieren.

![Der DOM-Baum für unseren Beispielcode, der alle Knoten einschließlich Textknoten zeigt.](dom.gif)

Wenn der Parser nicht blockierende Ressourcen wie ein Bild findet, fordert der Browser diese Ressourcen an und setzt die Analyse fort. Die Analyse kann fortgesetzt werden, wenn eine CSS-Datei entdeckt wird, aber `<script>`-Elemente — insbesondere solche ohne [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder `defer`-Attribut — blockieren das Rendering und pausieren die Analyse des HTML. Obwohl der Preload-Scanner diesen Prozess beschleunigt, können übermäßige Skripte immer noch ein wesentlicher Engpass sein.

### Preload-Scanner

Während der Browser den DOM-Bauma erstellt, belegt dieser Prozess den Haupt-Thread. Während dies geschieht, wird der _Preload-Scanner_ den verfügbaren Inhalt analysieren und hochpriorisierte Ressourcen wie CSS, JavaScript und Web-Schriftarten anfordern. Dank des Preload-Scanners müssen wir nicht warten, bis der Parser eine Referenz zu einer externen Ressource findet, um sie anzufordern. Er ruft Ressourcen im Hintergrund ab, sodass sie, wenn der Haupt-HTML-Parser die angeforderten Assets erreicht, möglicherweise bereits unterwegs oder heruntergeladen sind. Die Optimierungen, die der Preload-Scanner bietet, reduzieren Blockaden.

```html
<link rel="stylesheet" href="styles.css" />
<script src="my-script.js" async></script>
<img src="my-image.jpg" alt="image description" />
<script src="another-script.js" async></script>
```

In diesem Beispiel wird der Preload-Scanner, während der Haupt-Thread das HTML und CSS analysiert, die Skripte und das Bild finden und ebenfalls mit dem Herunterladen beginnen. Um sicherzustellen, dass das Skript den Prozess nicht blockiert, fügen Sie das `async`-Attribut hinzu oder das `defer`-Attribut, wenn die Reihenfolge der JavaScript-Analyse und -Ausführung wichtig ist.

Das Warten auf das CSS blockiert nicht die HTML-Analyse oder das Herunterladen, blockiert jedoch JavaScript, da JavaScript häufig verwendet wird, um den Einfluss von CSS-Eigenschaften auf Elemente abzufragen.

### Aufbau des CSSOM-Baums

Der zweite Schritt im kritischen Rendering-Pfad ist die Verarbeitung von CSS und der Aufbau des CSSOM-Baums. Das CSS-Objektmodell ist dem DOM ähnlich. Sowohl DOM als auch CSSOM sind Bäume. Sie sind unabhängige Datenstrukturen. Der Browser konvertiert die CSS-Regeln in eine Karte von Stilen, die er verstehen und bearbeiten kann. Der Browser geht durch jeden Regel-Satz im CSS und erstellt einen Baumaus Knoten mit Eltern-, Kind- und Geschwisterbeziehungen basierend auf den CSS-Selektoren.

Wie bei HTML muss der Browser die empfangenen CSS-Regeln in etwas umwandeln, mit dem er arbeiten kann. Daher wiederholt er den HTML-zu-Objekt-Prozess, aber für das CSS.

Der CSSOM-Baum umfasst Stile aus dem Benutzeragenten-Stylesheet. Der Browser beginnt mit der allgemeinsten Regel, die auf einen Knoten anwendbar ist, und verfeinert die berechneten Stile rekursiv, indem er spezifischere Regeln anwendet. Mit anderen Worten, er bringt die Eigenschaftswerte in eine bestimmte Reihenfolge (Cascading).

Der Aufbau des CSSOM ist sehr, sehr schnell und diese Aufbauzeit wird nicht in den Entwicklerwerkzeugen angezeigt. Vielmehr zeigt das "Recalculate Style" in den Entwicklerwerkzeugen die Gesamtzeit an, die zum Analysieren von CSS, zum Erstellen des CSSOM-Baums und zum rekursiven Berechnen der berechneten Stile benötigt wird. In Bezug auf die Web-Leistung gibt es viele bessere Möglichkeiten, Optimierungsaufwand zu investieren, da die Gesamtzeit, um den CSSOM zu erstellen, im Allgemeinen kürzer ist als die Zeit, die für eine DNS-Abfrage benötigt wird.

### Andere Prozesse

#### JavaScript-Kompilation

Während das CSS analysiert und der CSSOM erstellt wird, werden andere Assets, einschließlich JavaScript-Dateien, heruntergeladen (dank des Preload-Scanners). JavaScript wird analysiert, kompiliert und interpretiert. Die Skripte werden in abstrakte Syntaxbäume geparst. Einige Browser-Engines nehmen die [abstrakten Syntaxbäume](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) und leiten sie an einen Compiler weiter, der Bytcode ausgibt. Dies wird als JavaScript-Kompilation bezeichnet. Der größte Teil des Codes wird auf dem Haupt-Thread interpretiert, aber es gibt Ausnahmen wie Code, der in [Web-Workern](/de/docs/Web/API/Web_Workers_API) ausgeführt wird.

#### Aufbau des Zugänglichkeitsbaums

Der Browser baut auch einen [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility) auf, den unterstützende Geräte verwenden, um Inhalte zu interpretieren. Das Accessibility Object Model (AOM) ist wie eine semantische Version des DOM. Der Browser aktualisiert den Zugänglichkeitsbaum, wenn das DOM aktualisiert wird. Der Zugänglichkeitsbaum ist von den unterstützenden Technologien selbst nicht veränderbar.

Bis das AOM gebaut ist, sind die Inhalte nicht zugänglich für [Bildschirmlesegeräte](/de/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide).

## Rendern

Renderingschritte umfassen Stil, Layout, Malen und in einigen Fällen Komposition. Die in der Analysephase erstellten CSSOM- und DOM-Bäume werden zu einem Rendertree kombiniert, der dann verwendet wird, um das Layout jedes sichtbaren Elements zu berechnen, das dann auf den Bildschirm gezeichnet wird. In einigen Fällen kann der Inhalt in seine eigene Ebene gehoben und komponiert werden, was die Leistung verbessert, indem Teile des Bildschirms auf der GPU anstelle der CPU gezeichnet werden, wodurch der Haupt-Thread frei bleibt.

### Stil

Der dritte Schritt im kritischen Rendering-Pfad ist die Kombination von DOM und CSSOM zu einem Rendertree. Der berechnete Stilbaum oder Rendertree-Aufbau beginnt mit der Wurzel des DOM-Baums und durchläuft jeden sichtbaren Knoten.

Elemente, die nicht angezeigt werden, wie das [`<head>`](/de/docs/Web/HTML/Element/head)-Element und seine Kinder sowie alle Knoten mit `display: none`, wie das `script { display: none; }`, das Sie in Benutzeragenten-Stylesheets finden, sind im Rendertree nicht enthalten, da sie nicht im gerenderten Output erscheinen werden. Knoten mit `visibility: hidden` werden im Rendertree enthalten, da sie Platz beanspruchen. Da wir keine Anweisungen gegeben haben, um die Benutzervorgabe außer Kraft zu setzen, wird der `script`-Knoten in unserem obigen Beispielcode nicht im Rendertree enthalten sein.

Jedem sichtbaren Knoten werden seine CSSOM-Regeln zugewiesen. Der Rendertree hält alle sichtbaren Knoten mit Inhalten und berechneten Stilen — ordnet alle relevanten Stile jedem sichtbaren Knoten im DOM-Baum zu und ermittelt anhand der [CSS-Kaskade](/de/docs/Web/CSS/Cascade), was die berechneten Stile für jeden Knoten sind.

### Layout

Der vierte Schritt im kritischen Rendering-Pfad ist das Ausführen von Layout im Rendertree, um die Geometrie jedes Knotens zu berechnen. _Layout_ ist der Prozess, durch den die Abmessungen und der Standort aller Knoten im Rendertree bestimmt werden, sowie die Bestimmung der Größe und Position jedes Objekts auf der Seite. _Reflow_ ist jede nachfolgende Größen- und Positionsbestimmung eines Teils der Seite oder des gesamten Dokuments.

Sobald der Rendertree erstellt ist, beginnt das Layout. Der Rendertree hat identifiziert, welche Knoten angezeigt werden (auch wenn unsichtbar), zusammen mit ihren berechneten Stilen, aber nicht die Abmessungen oder der Standort jedes Knotens. Um die genaue Größe und Position jedes Objekts zu bestimmen, beginnt der Browser bei der Wurzel des Rendertrees und durchläuft ihn.

Auf der Webseite ist fast alles ein Kasten. Verschiedene Geräte und verschiedene Benutzeroberflächenpräferenzen bedeuten eine unbegrenzte Anzahl unterschiedlicher Ansichtsgrößen. In dieser Phase bestimmt der Browser unter Berücksichtigung der Ansichtsgröße, welche Größen alle verschiedenen Kästen auf dem Bildschirm haben werden. Unter Berücksichtigung der Größe der Ansicht als Basis, beginnt das Layout generell mit dem Körper, legt die Größen aller Nachkommen des Körpers fest, wobei jedes Element Boxmodell-Eigenschaften besitzt und Platzhalterraum für ersetzte Elemente bereitstellt, deren Dimensionen er nicht kennt, wie unser Bild.

Das erste Mal, dass die Größe und Position jedes Knotens bestimmt wird, nennt man _Layout_. Nachfolgende Neuberechnungen werden _Reflows_ genannt. In unserem Beispiel, nehmen wir an, dass das anfängliche Layout vor dem Bild zurückgerufen wird. Da wir nicht die Dimensionen unseres Bildes angegeben haben, wird ein Reflow notwendig, sobald die Bilddimensionen bekannt sind.

### Malen

Der letzte Schritt im kritischen Rendering-Pfad ist das Malen der einzelnen Knoten auf dem Bildschirm, das erste Vorkommen, das als {{Glossary("First_meaningful_paint", "erster bedeutungsvoller Anstrich")}} bezeichnet wird. In der Mal- oder Rasterisierungsphase konvertiert der Browser jede im Layout berechnete Box zu tatsächlichen Pixeln auf dem Bildschirm. Malen beinhaltet das Zeichnen jedes visuellen Teils eines Elements auf den Bildschirm, einschließlich Text, Farben, Grenzen, Schatten und ersetzte Elemente wie Schaltflächen und Bilder. Der Browser muss dies sehr schnell tun.

Um flüssiges Scrollen und Animationen sicherzustellen, muss alles, was den Haupt-Thread belegt, einschließlich der Berechnung von Stilen, zusammen mit Reflow und Paint, dem Browser weniger als 16,67 ms in Anspruch nehmen. Mit 2048 x 1536 hat das iPad über 3.145.000 Pixel, die auf den Bildschirm gemalt werden müssen. Das sind viele Pixel, die sehr schnell gemalt werden müssen. Um sicherzustellen, dass das Neumalen sogar noch schneller als das initiale Malen erfolgen kann, wird das Zeichnen auf dem Bildschirm in der Regel in mehrere Schichten unterteilt. Wenn dies geschieht, wird eine Komposition notwendig.

Das Malen kann die Elemente im Layoutbaum in Schichten aufteilen. Das Heben von Inhalten in Schichten auf der GPU (anstelle des Haupt-Threads auf der CPU) verbessert die Mal- und Neumal-Performance. Es gibt spezielle Eigenschaften und Elemente, die eine Schicht erzeugen, einschließlich [`<video>`](/de/docs/Web/HTML/Element/video) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas), sowie jedes Element, das die CSS-Eigenschaft [`opacity`](/de/docs/Web/CSS/opacity), eine 3D-`transform`, [`will-change`](/de/docs/Web/CSS/will-change), und einige andere besitzt. Diese Knoten werden auf ihre eigene Schicht gemalt, zusammen mit ihren Nachkommen, es sei denn, ein Nachkomme erfordert aus einem der oben genannten Gründe seine eigene Schicht.

Schichten verbessern die Leistung, sind jedoch teuer, wenn es um Speicherverwaltung geht und sollten daher nicht übermäßig als Teil von Webleistungsoptimierungsstrategien verwendet werden.

### Komposition

Wenn Bereiche des Dokuments in verschiedenen Schichten gezeichnet werden, die sich gegenseitig überlappen, wird eine Komposition benötigt, um sicherzustellen, dass sie in der richtigen Reihenfolge auf den Bildschirm gezeichnet werden und der Inhalt korrekt gerendert wird.

Während die Seite weiterhin Assets lädt, können sich Reflows ereignen (erinnern Sie sich an unser Beispielbild, das verspätet angekommen ist). Ein Reflow löst ein Neumalen und eine Neukomposition aus. Hätten wir die Dimensionen unseres Bildes definiert, wäre kein Reflow notwendig gewesen, und nur die Schicht, die neu gemalt werden musste, wäre neu gemalt worden, und bei Bedarf neu komponiert worden. Aber wir haben die Bilddimensionen nicht angegeben! Wenn das Bild vom Server abgerufen wird, kehrt der Rendering-Prozess zu den Layout-Schritten zurück und beginnt von dort erneut.

## Interaktivität

Sobald der Haupt-Thread mit dem Malen der Seite fertig ist, könnte man denken, dass wir "fertig" sind. Das ist jedoch nicht unbedingt der Fall. Wenn die Ladezeit JavaScript umfasst, das korrekt verschoben wurde und erst ausgeführt wird, nachdem das [`onload`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wurde, könnte der Haupt-Thread beschäftigt sein und nicht für Scrollen, Berühren und andere Interaktionen zur Verfügung stehen.

{{Glossary("Time_to_Interactive", "Time to Interactive")}} (TTI) ist das Maß dafür, wie lange es gedauert hat, von der ersten Anfrage, die zur DNS-Abfrage und TCP-Verbindung führte, bis zu dem Zeitpunkt, zu dem die Seite interaktiv war — interaktiv bedeutet, der Punkt in der Zeit nach dem {{Glossary("First_Contentful_Paint", "erstem inhaltlichen Anstrich")}}, wenn die Seite innerhalb von 50 ms auf Benutzerinteraktionen reagiert. Wenn der Haupt-Thread mit dem Parsen, Kompilieren und Ausführen von JavaScript beschäftigt ist, steht er nicht zur Verfügung und kann daher nicht rechtzeitig (unter 50 ms) auf Benutzerinteraktionen reagieren.

In unserem Beispiel könnte das Bild schnell geladen worden sein, aber möglicherweise war die Datei `another-script.js` 2 MB groß und die Netzwerkverbindung unseres Benutzers war langsam. In diesem Fall würde der Benutzer die Seite sehr schnell sehen, könnte jedoch erst dann scrollen, wenn das Skript heruntergeladen, geparst und ausgeführt wurde, ohne Ruckeln. Das ist keine gute Benutzererfahrung. Vermeiden Sie es, den Haupt-Thread zu belegen, wie in diesem WebPageTest-Beispiel demonstriert:

![Der Haupt-Thread wird durch das Herunterladen, Parsen und die Ausführung einer JavaScript-Datei - über eine schnelle Verbindung - belegt](visa_network.png)

In diesem Beispiel dauerte die JavaScript-Ausführung über 1,5 Sekunden und der Haupt-Thread war die ganze Zeit über vollständig belegt, unempfänglich für Klickereignisse oder Bildschirmberührungen.

## Siehe auch

- [Webleistung](/de/docs/Web/Performance)
