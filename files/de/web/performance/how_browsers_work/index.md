---
title: "Die Seite wird geladen: Wie Browser funktionieren"
slug: Web/Performance/How_browsers_work
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{QuickLinksWithSubPages("Web/Performance")}}

Benutzer möchten Web-Erlebnisse, die schnell laden und reibungslose Interaktionen ermöglichen. Daher sollte ein Entwickler bemüht sein, diese beiden Ziele zu erreichen.

Um die Leistung und die wahrgenommene Leistung zu verbessern, ist es hilfreich zu verstehen, wie der Browser funktioniert.

## Übersicht

Schnelle Websites bieten bessere Benutzererfahrungen. Nutzer wollen und erwarten Web-Erlebnisse mit Inhalten, die schnell laden und flüssig interaktiv sind.

Zwei große Herausforderungen im Bereich der Web-Performance sind Probleme im Zusammenhang mit Latenz und die Tatsache, dass Browser größtenteils als Einzelprozess (Single-Thread) betrachtet werden können.

Latenz ist die größte Bedrohung für unsere Fähigkeit, eine schnell ladende Seite sicherzustellen. Es ist das Ziel von Entwicklern, die Seite so schnell wie möglich zu laden – oder zumindest _scheinbar_ superschnell zu laden – damit der Benutzer die angeforderten Informationen so schnell wie möglich erhält. Netzwerklatenz ist die Zeit, die benötigt wird, um Bytes über das Netzwerk an Computer zu übertragen. Web-Performance bedeutet, was wir tun müssen, damit die Seite so schnell wie möglich lädt.

Für den größten Teil werden Browser als Einzelprozess betrachtet. Das bedeutet, dass sie eine Aufgabe von Anfang bis Ende ausführen, bevor sie eine andere Aufgabe übernehmen. Für reibungslose Interaktionen ist es das Ziel des Entwicklers, performante Seiteninteraktionen sicherzustellen, von reibungslosem Scrollen bis hin zur schnellen Reaktion auf Berührungen. Die Renderzeit ist entscheidend – Hauptsächlich muss gewährleistet sein, dass der Hauptprozessor alle ihm zugewiesenen Arbeiten erledigen kann und dennoch immer zur Verfügung steht, um Benutzerinteraktionen zu verarbeiten. Die Web-Performance kann durch Verstehen der Single-Threaded-Natur des Browsers und durch Minimierung der Aufgaben des Hauptprozessors, wo möglich und angemessen, verbessert werden, um ein reibungsloses Rendering und sofortige Reaktionen auf Interaktionen zu gewährleisten.

## Navigation

Die _Navigation_ ist der erste Schritt beim Laden einer Webseite. Diese erfolgt, wenn ein Benutzer eine Seite anfordert, indem er eine URL in die Adressleiste eingibt, auf einen Link klickt oder ein Formular abschickt, sowie durch andere Aktionen.

Eines der Ziele der Web-Performance ist es, die Zeit zu minimieren, die für die Navigation benötigt wird. Unter idealen Bedingungen dauert dies in der Regel nicht lange, doch Latenz und Bandbreite können Verzögerungen verursachen.

### DNS-Abfrage

Der erste Schritt beim Navigieren zu einer Webseite ist das Herausfinden, wo die Ressourcen für diese Seite lokalisiert sind. Wenn Sie beispielsweise zu `https://example.com` navigieren, befindet sich die HTML-Seite auf dem Server mit der IP-Adresse `93.184.216.34`. Wenn Sie diese Seite noch nie besucht haben, muss eine DNS-Abfrage stattfinden.

Ihr Browser fordert eine DNS-Abfrage an, die schließlich von einem Namensserver bearbeitet wird, der wiederum mit einer IP-Adresse antwortet. Nach dieser ersten Anfrage wird diese IP wahrscheinlich für eine Weile zwischengespeichert, was nachfolgende Anfragen beschleunigt, da die IP-Adresse aus dem Cache abgerufen wird, anstatt den Namensserver erneut zu kontaktieren.

DNS-Abfragen müssen in der Regel nur einmal pro Hostname für einen Seitenaufruf durchgeführt werden. Allerdings müssen DNS-Abfragen für jeden eindeutigen Hostnamen, auf den die angeforderte Seite verweist, durchgeführt werden. Wenn Ihre Schriftarten, Bilder, Skripte, Anzeigen und Metriken alle unterschiedliche Hostnamen haben, muss für jeden eine DNS-Abfrage erfolgen.

![Mobile Anforderungen gehen zuerst zum Mobilfunkmast, dann zu einem zentralen Rechner des Telefonunternehmens, bevor sie ins Internet gesendet werden](latency.jpg)

Dies kann problematisch für die Performance sein, insbesondere bei mobilen Netzwerken. Befindet sich ein Benutzer in einem mobilen Netzwerk, muss jede DNS-Abfrage vom Telefon zum Mobilfunkmast gehen, um einen autoritativen DNS-Server zu erreichen. Die Entfernung zwischen einem Telefon, einem Mobilfunkmast und dem Namensserver kann zu erheblichen Latenzen führen.

### TCP-Handshake

Sobald die IP-Adresse bekannt ist, stellt der Browser über einen {{Glossary("TCP_handshake", "TCP-Drei-Wege-Handshake")}} eine Verbindung zum Server her. Dieser Mechanismus ist so konzipiert, dass zwei Kommunikationspartner – in diesem Fall der Browser und der Webserver – die Parameter der TCP-Netzwerkverbindung verhandeln können, bevor Daten übertragen werden, häufig über {{Glossary("HTTPS", "HTTPS")}}.

Die Drei-Wege-Handshake-Technik von TCP wird oft als "SYN-SYN-ACK" – oder genauer SYN, SYN-ACK, ACK – bezeichnet, da drei Nachrichten von TCP übertragen werden, um eine TCP-Sitzung zwischen zwei Computern zu verhandeln und zu starten. Ja, das bedeutet drei weitere Nachrichten hin und zurück zwischen jedem Server, und die Anfrage wurde noch nicht gestellt.

### TLS-Aushandlung

Für sichere Verbindungen, die über HTTPS hergestellt werden, ist eine weitere "Handshake"-Prozedur erforderlich. Diese Aushandlung, oder genauer die {{Glossary("TLS", "TLS")}}-Verhandlung, bestimmt, welcher Verschlüsselungsalgorithmus verwendet wird, um die Kommunikation zu verschlüsseln, überprüft den Server und stellt sicher, dass eine sichere Verbindung besteht, bevor der tatsächliche Datentransfer beginnt. Diese Aushandlung erfordert fünf weitere Runde-Trip-Zeiten zum Server, bevor die Inhaltsanfrage tatsächlich gesendet wird.

![Die DNS-Abfrage, der TCP-Handshake und 5 Schritte der TLS-Aushandlung einschließlich Client-Hello, Server-Hello und Zertifikat, Client-Schlüssel und "Fertig" sowohl für Server als auch Client.](ssl.jpg)

Das Herstellen einer sicheren Verbindung erhöht zwar die Ladezeiten der Seite, aber eine sichere Verbindung ist die zusätzlichen Latenzkosten wert, da die zwischen Browser und Webserver übertragenen Daten nicht von Dritten entschlüsselt werden können.

Erst nach den acht Runden zum Server kann der Browser schließlich die Anfrage stellen.

## Antwort

Sobald eine Verbindung zu einem Webserver hergestellt ist, sendet der Browser eine initiale [HTTP `GET`-Anfrage](/de/docs/Web/HTTP/Methods) im Namen des Benutzers, bei Websites ist dies meist eine HTML-Datei. Sobald der Server die Anfrage erhält, antwortet er mit den entsprechenden Antwort-Headers sowie mit dem HTML-Inhalt.

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

Diese Antwort enthält das erste Byte der empfangenen Daten. {{Glossary("Time_to_First_Byte", "Time to First Byte")}} (TTFB) ist die Zeit zwischen der Nutzeranfrage – beispielsweise durch Klicken auf einen Link – und dem Empfang dieses ersten Datenpakets. Das erste Datenpaket ist normalerweise 14 KB groß.

In unserem oben dargestellten Beispiel ist die Anfrage definitiv kleiner als 14 KB, jedoch werden die verlinkten Ressourcen erst angefordert, wenn der Browser auf diese Links während der Analyse stößt.

### Staukontrolle / Langsamer TCP-Start

TCP-Pakete werden während der Übertragung in Segmente aufgeteilt. Da TCP die Reihenfolge der Pakete garantiert, muss der Server nach dem Senden einer bestimmten Anzahl von Segmenten eine Bestätigung vom Client in Form eines ACK-Pakets erhalten.

Falls der Server nach jedem Segment auf ein ACK wartet, würde dies häufige ACKs vom Client zur Folge haben und die Übertragungszeit verlängern, selbst bei geringer Netzwerkauslastung.

Andererseits kann das gleichzeitige Senden zu vieler Segmente zu Problemen führen: In einem stark ausgelasteten Netzwerk könnte der Client nicht in der Lage sein, die Segmente zu empfangen und weiterhin ACKs senden, ohne den vollständigen Paketinhalt zu erhalten. Der Server müsste den Inhalt wiederholt senden.

Um die Anzahl der übertragenen Segmente auszugleichen, wird der {{Glossary("TCP_slow_start", "Langsame TCP-Start")}}-Algorithmus verwendet. Dieser erhöht allmählich die Datenmenge, bis die maximale Netzbandbreite ermittelt werden kann, und reduziert die Datenmenge bei starker Netzwerkauslastung. 

Der Wert des Staukontrollfensters (CWND) reguliert die zu übertragenden Segmente. Wenn ACKs empfangen werden, verdoppelt sich der CWND-Wert, andernfalls wird dieser halbiert.

(Der Text wird bei Bedarf auf den verbleibenden Abschnitten verbessert und erneut eingefügt, falls erforderlich.)
