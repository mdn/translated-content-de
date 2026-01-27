---
title: Überblick über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: 58b10ef2aeaee2f8faae2626f13e18e40d199061
---

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten. Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, üblicherweise vom Webbrowser. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Protokoll der Anwendungsschicht, oberhalb von TCP (Transportschicht) und IP (Netzwerkschicht) und unterhalb der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entworfen und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit entwickelt hat. Es ist ein Protokoll der Anwendungsschicht, das über {{Glossary("TCP", "TCP")}} oder über eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch von Bildern und Videos oder zum Posten von Inhalten auf Servern, wie z.B. bei HTML-Formularergebnissen. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität, dem Benutzeragenten (oder einem Proxy in dessen Auftrag), gesendet. Meistens ist der Benutzeragent ein Webbrowser, aber es kann auch alles andere sein, z. B. ein Roboter, der das Web durchforstet, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und mit einer Antwort, der _Response_, darauf antwortet. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die zusammen als {{Glossary("Proxy_server", "Proxies")}} bezeichnet werden, die verschiedene Operationen durchführen und als Gateways oder {{Glossary("Cache", "Caches")}} fungieren, beispielsweise.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxies an einen Server weitergeleitet wird und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit sind mehr Computer zwischen einem Browser und dem den Request bearbeitenden Server beteiligt: Es gibt Router, Modems und mehr. Dank des schichtartigen Designs des Webs sind diese im Netzwerk- und Transportprotokoll versteckt. HTTP befindet sich ganz oben, in der Anwendungsschicht. Obwohl sie wichtig sind, um Netzwerkprobleme zu diagnostizieren, sind die darunterliegenden Schichten in Bezug auf die Beschreibung von HTTP größtenteils irrelevant.

### Client: der Benutzeragent

Der _Benutzeragent_ ist jedes Werkzeug, das im Auftrag des Benutzers agiert. Diese Rolle wird hauptsächlich durch den Webbrowser ausgefüllt, kann aber auch durch Programme ausgefüllt werden, die von Ingenieuren und Webentwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist nie der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite repräsentiert. Dann parst er diese Datei, indem er zusätzliche Anfragen stellt, die den Ausführungsskripten, Layoutinformationen (CSS) und eingebetteten Ressourcen auf der Seite (normalerweise Bilder und Videos) entsprechen. Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument. Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, sodass der Benutzer seinen Benutzeragenten anleiten und durch das Web navigieren kann. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument wie vom Client angefordert _serviert_. Ein Server erscheint virtuell als einzelne Maschine, kann tatsächlich aber eine Sammlung von Servern sein, die die Last teilen (Load Balancing) oder andere Software (z. B. Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument komplett oder teilweise bei Bedarf generieren.

Ein Server ist nicht notwendigerweise eine einzelne Maschine, sondern es können mehrere Server-Softwareinstanzen auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Web-Stacks operieren die meisten von ihnen auf Transport-, Netzwerk- oder physikalischen Ebenen und werden auf der HTTP-Schicht transparent, wobei sie potenziell einen erheblichen Einfluss auf die Leistung haben. Diejenigen, die auf Anwendungsschichten operieren, werden im Allgemeinen **Proxies** genannt. Diese können transparent sein und die Anfragen, die sie erhalten, ohne Änderungen weiterleiten, oder nicht transparent, wobei sie die Anfrage in irgendeiner Weise ändern, bevor sie sie an den Server weitergeben. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filtern (wie ein Virenscan oder Kindersicherung)
- Lastverteilung (um mehreren Servern zu ermöglichen, verschiedene Anfragen zu bearbeiten)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (Ermöglichen der Speicherung von historischen Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so gestaltet, dass es für Menschen lesbar ist, selbst mit der zusätzlichen Komplexität, die bei HTTP/2 durch das Kapseln von HTTP-Nachrichten in Frames eingeführt wird. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern das Testen erleichtert und die Komplexität für Neueinsteiger verringert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) dieses Protokoll leicht erweiterbar und experimentierbar. Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei Anfragen, die auf derselben Verbindung nacheinander durchgeführt werden. Dies hat sofort das Potenzial, für Benutzer problematisch zu sein, die versuchen, mit bestimmten Seiten kohärent zu interagieren, beispielsweise beim Verwenden von E-Commerce-Warenkörben. Aber während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Nutzung von sitzungsgebundenen Sitzungen. Durch die Erweiterbarkeit der Header werden HTTP-Cookies zum Workflow hinzugefügt, sodass bei jeder HTTP-Anfrage ein Sitzungskontext oder derselbe Zustand geteilt werden kann.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und ist daher grundsätzlich außerhalb des Geltungsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert nur, dass es _zuverlässig_ ist, also keine Nachrichten verliert (mindestens einen Fehler in solchen Fällen darstellt). Unter den zwei häufigsten Transportprotokollen im Internet ist TCP zuverlässig und UDP ist es nicht. Daher stützt sich HTTP auf den TCP-Standard, der verbindungsbasiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen. Dies erfordert mehrere Round-Trips. Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als das Teilen einer einzigen TCP-Verbindung, wenn mehrere Anfragen in kurzem Abstand gesendet werden.

Um diesen Fehler zu mildern, führte HTTP/1.1 _Pipelining_ ein (was sich als schwierig zu implementieren erwies) und _persistente Verbindungen_: Die zugrunde liegende TCP-Verbindung kann teilweise mit dem {{HTTPHeader("Connection")}}-Header gesteuert werden. HTTP/2 ging einen Schritt weiter, indem Nachrichten über eine einzige Verbindung multiplexiert wurden, was dazu beiträgt, die Verbindung wärmer und effizienter zu halten.

Experimente sind im Gange, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist. Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP gesteuert werden kann

Die erweiterbare Natur von HTTP hat es im Laufe der Zeit ermöglicht, mehr Kontrolle und Funktionalität im Web zu haben. Cache- und Authentifizierungsmethoden wurden bereits früh in der HTTP-Geschichte behandelt. Im Gegensatz dazu wurde die Möglichkeit, die _Herkunftsbeschränkung_ zu lockern, erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von Funktionen, die mit HTTP steuerbar sind:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_: Wie Dokumente im Cache gespeichert werden, kann durch HTTP gesteuert werden. Der Server kann Proxies und Clients anweisen, was und wie lange gecacht werden soll. Der Client kann intermediäre Proxy-Caches anweisen, das gespeicherte Dokument zu ignorieren.
- _Entspannung der Herkunftsbeschränkung_: Um Schnüffeln und andere Verletzungen der Privatsphäre zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites. Nur Seiten mit derselben **Herkunft** können auf alle Informationen einer Webseite zugreifen. Während eine solche Beschränkung für den Server eine Bürde darstellt, können HTTP-Header diese strikte Trennung auf Serverseite lockern, sodass ein Dokument zu einem Flickenteppich von Informationen aus verschiedenen Domains werden kann; es könnte sogar sicherheitsrelevante Gründe geben, dies zu tun.
- _Authentifizierung_: Einige Seiten können so geschützt sein, dass nur bestimmte Benutzer darauf zugreifen können. HTTP kann eine Basisauthentifizierung bereitstellen, entweder durch die Verwendung des {{HTTPHeader("WWW-Authenticate")}}-Headers und ähnlicher Header oder durch das Festlegen einer spezifischen Sitzung mithilfe von [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_: Server oder Clients befinden sich oft in Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern. HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überwinden. Nicht alle Proxies sind HTTP-Proxies. Das SOCKS-Protokoll zum Beispiel operiert auf einer niedrigeren Ebene. Andere Protokolle, wie FTP, können ebenfalls von diesen Proxies behandelt werden.
- _Sitzungen_: Mit HTTP-Cookies können Sie Anfragen mit dem Zustand des Servers verknüpfen. Dadurch werden Sitzungen erstellt, obwohl HTTP grundsätzlich ein zustandsloses Protokoll ist. Dies ist nicht nur für E-Commerce-Warenkörbe nützlich, sondern auch für jede Website, die dem Benutzer eine Konfiguration der Ausgabe ermöglicht.

## HTTP-Flow

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem Endserver oder einem Zwischenproxy, führt er folgende Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage oder mehrere zu senden und eine Antwort zu erhalten. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar. Mit HTTP/2 werden diese Nachrichten in Frames kapsuliert, was sie unmöglich macht, direkt zu lesen, aber das Prinzip bleibt dasselbe. Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Lesen der Antwort, die vom Server gesendet wird, wie etwa:

   ```http
   HTTP/1.1 200 OK
   Date: Sat, 09 Oct 2010 14:28:02 GMT
   Server: Apache
   Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
   ETag: "51142bc1-7449-479b075b2891b"
   Accept-Ranges: bytes
   Content-Length: 29769
   Content-Type: text/html

   <!doctype html>… (here come the 29769 bytes of the requested web page)
   ```

4. Schließen oder Wiederverwenden der Verbindung für weitere Anfragen.

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne darauf zu warten, dass die erste Antwort vollständig empfangen wurde. HTTP-Pipelining hat sich als schwer zu implementieren in bestehenden Netzwerken erwiesen, in denen alte Softwareteile mit modernen Versionen koexistieren. HTTP-Pipelining wurde in HTTP/2 durch robusteres Multiplexing von Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert sind, sind menschenlesbar. In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet, was Optimierungen wie die Komprimierung von Headern und Multiplexing ermöglicht. Selbst wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleiben die Semantiken jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headers](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Eine HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), in der Regel ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise möchte ein Client eine Ressource abrufen (durch `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) posten (durch `POST`), obwohl in anderen Fällen mehr Operationen erforderlich sein können.
- Der Pfad der abzurufenden Ressource; die URL der Ressource ohne offensichtliche Elemente aus dem Kontext, z.B. ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server vermitteln.
- Ein Body, für einige Methoden wie `POST`, ähnlich denjenigen in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht einer '200 OK' HTTP-Antwort auf eine GET-Anfrage mit Antwort-Headern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des von ihnen befolgten HTTP-Protokolls.
- Ein [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusnachricht, eine nicht-autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Reference/Headers), ähnlich denen bei Anfragen.
- Optional ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen von JavaScript auszuführen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine andere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, wobei HTTP als Transportmechanismus verwendet wird. Mit der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und etabliert Ereignishandler. Der Client-Browser konvertiert die Nachrichten, die auf dem HTTP-Stream ankommen, automatisch in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte. Danach übermittelt er sie an die Ereignishandler, die für die bestimmten [`type`](/de/docs/Web/API/Event/type) der Ereignisse registriert wurden, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, wenn kein typenspezifischer Ereignishandler festgelegt wurde.

## Schlussfolgerung

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Fähigkeit, Header hinzuzufügen, ermöglicht es HTTP, sich zusammen mit den erweiterten Funktionen des Webs weiterzuentwickeln.

Obwohl HTTP/2 einige Komplexität hinzufügt, indem es HTTP-Nachrichten in Frames einbettet, um die Leistung zu verbessern, ist die Grundstruktur der Nachrichten seit HTTP/1.0 dieselbe geblieben. Der Sitzungsfluss bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
