---
title: Überblick über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten. Es ist die Grundlage für jeden Datenaustausch im Web und ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, in der Regel dem Webbrowser. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Protokoll auf Anwendungsebene, auf TCP (Transportschicht) und IP (Netzwerkschicht) und unterhalb der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es handelt sich um ein Anwendungsprotokoll, das über {{Glossary("TCP", "TCP")}} oder eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch zum Abrufen von Bildern und Videos oder zum Posten von Inhalten auf Servern, wie zum Beispiel mit HTML-Formularergebnissen. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten auf Abruf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem Benutzeragenten (oder einem Proxy im Namen davon). Meistens ist der Benutzeragent ein Webbrowser, aber es kann alles Mögliche sein, zum Beispiel ein Roboter, der das Web durchforstet, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort liefert, die _Antwort_ genannt wird. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die zusammenfassend als {{Glossary("Proxy_server", "Proxies")}} bezeichnet werden. Diese führen verschiedene Operationen durch und fungieren als Gateways oder {{Glossary("Cache", "Caches")}}, zum Beispiel.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxies an einen Server weitergeleitet wird und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es zwischen einem Browser und dem Server, der die Anfrage bearbeitet, mehr Computer: Es gibt Router, Modems und mehr. Dank des geschichteten Designs des Webs sind diese in den Netzwerk- und Transportschichten versteckt. HTTP befindet sich oben, in der Anwendungsschicht. Obwohl sie wichtig für die Diagnose von Netzwerkproblemen sind, sind die zugrunde liegenden Schichten in der Regel irrelevant für die Beschreibung von HTTP.

### Client: der Benutzeragent

Der _Benutzeragent_ ist jedes Werkzeug, das im Namen des Benutzers handelt. Diese Rolle wird hauptsächlich vom Webbrowser ausgeführt, kann aber auch von Programmen übernommen werden, die von Ingenieuren und Webentwicklern genutzt werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist nie der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Anschließend parst er diese Datei und stellt zusätzliche Anfragen an auszuführende Skripte, Layoutinformationen (CSS) zur Anzeige und Unterressourcen innerhalb der Seite (normalerweise Bilder und Videos). Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen. Von Skripten, die vom Browser ausgeführt werden, können in späteren Phasen mehr Ressourcen abgerufen werden, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument. Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (in der Regel durch einen Mausklick), um eine neue Webseite abzurufen, was es dem Benutzer ermöglicht, seinen Benutzeragenten zu leiten und durch das Web zu navigieren. Der Browser übersetzt diese Richtungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument wie vom Client gewünscht _serviert_. Ein Server erscheint lediglich als eine einzige Maschine virtuell; es kann jedoch tatsächlich eine Sammlung von Servern sein, die die Last teilen (Lastenausgleich) oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument ganz oder teilweise auf Anfrage generieren.

Ein Server muss nicht unbedingt eine einzelne Maschine sein, aber mehrere Server-Software-Instanzen können auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Webstacks operieren die meisten dieser Elemente auf den Transport-, Netzwerk- oder physikalischen Ebenen und werden auf der HTTP-Schicht transparent, wobei sie möglicherweise einen erheblichen Einfluss auf die Leistung haben. Diese, die auf den Anwendungsschichten arbeiten, werden im Allgemeinen als **Proxies** bezeichnet. Sie können transparent sein und die Anfragen, die sie erhalten, ohne Änderung weiterleiten, oder nicht transparent, in diesem Fall ändern sie die Anforderung auf irgendeine Weise, bevor sie sie an den Server weiterleiten. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenschutz-Scan oder elterliche Kontrolle)
- Lastenausgleich (um mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (Ermöglichung der Speicherung historischer Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so konzipiert, dass es für Menschen lesbar ist, auch mit der zusätzlichen Komplexität, die in HTTP/2 eingeführt wurde, indem HTTP-Nachrichten in Rahmen gekapselt werden. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was erleichtertes Testen für Entwickler und reduzierte Komplexität für Neueinsteiger bietet.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) dieses Protokoll leicht erweiterbar und experimentierbar. Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungsfrei

HTTP ist zustandslos: Es besteht keine Verbindung zwischen zwei auf derselben Verbindung hintereinander ausgeführten Anfragen. Dies könnte sofort problematisch für Benutzer sein, die versuchen, mit bestimmten Seiten kohärent zu interagieren, z. B. mit E-Commerce-Warenkörben. Während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Verwendung von zustandsbehafteten Sitzungen. Unter Verwendung der Header-Erweiterbarkeit werden HTTP-Cookies zum Arbeitsablauf hinzugefügt, wodurch die Sitzungserstellung bei jeder HTTP-Anforderung ermöglicht wird, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt daher grundsätzlich außerhalb des Zuständigkeitsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert nur, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens, dass es in solchen Fällen einen Fehler anzeigt). Unter den beiden am häufigsten verwendeten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht. HTTP stützt sich daher auf den TCP-Standard, der verbindungsbasiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, eine Prozedur, die mehrere Rundreisen erfordert. Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als das Teilen einer einzigen TCP-Verbindung, wenn mehrere Anfragen schnell aufeinanderfolgen.

Um diesen Mangel zu mindern, führte HTTP/1.1 _Pipelining_ ein (das sich als schwierig umsetzbar erwies) und _persistente Verbindungen_: Die zugrunde liegende TCP-Verbindung kann teilweise mit dem {{HTTPHeader("Connection")}}-Header gesteuert werden. HTTP/2 ging noch einen Schritt weiter, indem es Nachrichten über eine einzelne Verbindung multiplexte, was dazu beitrug, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besser geeigneteres Transportprotokoll für HTTP zu entwickeln. Google experimentiert zum Beispiel mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP kontrolliert werden kann

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit eine größere Kontrolle und Funktionalität des Webs ermöglicht. Methoden zur Cache- und Authentifizierungsverwaltung wurden früh in der Geschichte von HTTP behandelt. Die Möglichkeit, die _Origin-Beschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von Funktionen, die durch HTTP kontrollierbar sind:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_: Wie Dokumente zwischengespeichert werden, kann durch HTTP kontrolliert werden. Der Server kann Proxies und Clients anweisen, was zu cachen ist und wie lange. Der Client kann zwischengeschaltete Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockern der Origin-Beschränkung_: Um Abhörversuche und andere Datenschutzverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites. Nur Seiten von demselben **Ursprung** können auf alle Informationen einer Webseite zugreifen. Obwohl eine solche Einschränkung eine Belastung für den Server darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern und es einem Dokument ermöglichen, zu einem Flickenteppich von Informationen zu werden, die von verschiedenen Domains stammen; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_: Einige Seiten können geschützt werden, damit nur bestimmte Benutzer darauf zugreifen können. Eine grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder unter Verwendung der {{HTTPHeader("WWW-Authenticate")}} und ähnlichen Headern oder durch das Setzen einer bestimmten Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_: Server oder Clients befinden sich oft in Intranets und verbergen ihre echte IP-Adresse vor anderen Computern. HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkschranke zu überwinden. Nicht alle Proxies sind HTTP-Proxies. Das SOCKS-Protokoll arbeitet beispielsweise auf einer niedrigeren Ebene. Andere Protokolle, wie ftp, können von diesen Proxies behandelt werden.
- _Sitzungen_: Mit Hilfe von HTTP-Cookies kann man Anfragen mit dem Zustand des Servers verknüpfen. Dies schafft Sitzungen, trotz dass grundlegendes HTTP ein zustandsloses Protokoll ist. Dies ist nicht nur für E-Commerce-Warenkörbe nützlich, sondern auch für jede Seite, die dem Benutzer die Konfiguration der Ausgabe erlaubt.

## HTTP-Fluss

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem End-Server oder einem zwischenliegenden Proxy, führt er die folgenden Schritte aus:

1. Eine TCP-Verbindung öffnen: Die TCP-Verbindung wird genutzt, um eine Anfrage zu senden oder mehrere und eine Antwort zu erhalten. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Eine HTTP-Nachricht senden: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar. Mit HTTP/2 sind diese Nachrichten in Rahmen gekapselt, was sie unleserlich macht, aber das Prinzip bleibt dasselbe. Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Die vom Server gesendete Antwort lesen, wie zum Beispiel:

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

4. Die Verbindung schließen oder für weitere Anfragen wiederverwenden.

Wenn das HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne auf den vollständigen Empfang der ersten Antwort zu warten. Das HTTP-Pipelining hat sich als schwierig zu implementieren in bestehenden Netzwerken herausgestellt, in denen alte Softwarestücke mit modernen Versionen koexistieren. Das HTTP-Pipelining wurde in HTTP/2 mit robusterem Multiplexing von Anfragen innerhalb eines Rahmens ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert sind, sind menschenlesbar. In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Rahmen_, eingebettet, was Optimierungen wie Komprimierung von Headern und Multiplexing ermöglicht. Auch wenn in dieser HTTP-Version nur ein Teil der ursprünglichen HTTP-Nachricht gesendet wird, bleibt die Semantik jeder Nachricht unverändert, und der Client stellt (virtuell) die ursprüngliche HTTP/1.1-Anforderung wieder her. Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Eine HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), in der Regel ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die vom Client durchzuführende Operation definiert. Typischerweise möchte ein Client eine Ressource abrufen (mithilfe von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) posten (mithilfe von `POST`), obwohl in anderen Fällen möglicherweise mehr Operationen erforderlich sind.
- Der Pfad der abzurufenden Ressource; die URL der Ressource, die von Elementen bereinigt ist, die aus dem Kontext offensichtlich sind, beispielsweise ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-[Port](/en-US/docs/Glossary/Port) (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server übertragen.
- Ein Body, für einige Methoden wie `POST`, ähnlich denjenigen in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht über eine "200 OK"-HTTP-Antwort auf eine GET-Anfrage mit Antwort-Headern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Einen [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusnachricht, eine nicht autoritative kurze Beschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Reference/Headers), ähnlich wie bei Anfragen.
- Optional ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen über JavaScript zu stellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine weitere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein Einwegdienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, wobei HTTP als Transportmechanismus verwendet wird. Mit der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und etabliert Ereignis-Handler. Der Client-Browser konvertiert die Nachrichten, die auf dem HTTP-Stream ankommen, automatisch in geeignete [`Event`](/de/docs/Web/API/Event)-Objekte. Diese werden dann an die Ereignis-Handler geliefert, die für den [`type`](/de/docs/Web/API/Event/type) der Ereignisse bekannt sind, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event) Ereignis-Handler, wenn kein spezifischer Ereignis-Handler festgelegt wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu bedienen ist. Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Rahmen etwas Komplexität einführt, um die Leistung zu verbessern, hat sich die Grundstruktur der Nachrichten seit HTTP/1.0 nicht geändert. Der Sitzungsfluss bleibt einfach und erlaubt es, mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) untersucht und debugging zu werden.

## Siehe auch

- [Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
