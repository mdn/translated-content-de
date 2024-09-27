---
title: Ein Überblick über HTTP
slug: Web/HTTP/Overview
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

**HTTP** ist ein [Protokoll](/de/docs/Glossary/protocol) zum Abrufen von Ressourcen wie HTML-Dokumenten. Es ist das Fundament eines jeden Datenaustauschs im Web und ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, normalerweise vom Webbrowser. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsprotokollschicht über TCP (Transportschicht) und IP (Netzwerkschicht) und unter der Darstellungsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es ist ein Anwendungsprotokoll, das über [TCP](/de/docs/Glossary/TCP) oder über eine [TLS](/de/docs/Glossary/TLS)-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch für Bilder und Videos oder zum Posten von Inhalten an Server, wie z.B. bei HTML-Formularergebnissen. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen und Webseiten auf Abruf zu aktualisieren.

## Komponenten HTTP-basierter Systeme

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem User-Agent (oder einem Proxy in seinem Namen). Meistens ist der User-Agent ein Webbrowser, aber es kann alles sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort liefert, die _Antwort_ genannt wird. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die gemeinsam als [Proxies](/de/docs/Glossary/Proxy_server) bezeichnet werden und verschiedene Operationen durchführen und als Gateways oder [Caches](/de/docs/Glossary/Cache) fungieren können.

![Eine HTTP-Anfrage eines Clients, die über mehrere Proxies an einen Server weitergeleitet wird, und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es zwischen einem Browser und dem Server, der die Anfrage bearbeitet, mehr Computer: Es gibt Router, Modems und mehr. Dank des mehrschichtigen Designs des Webs sind diese in den Netzwerk- und Transportschichten verborgen. HTTP befindet sich oben, in der Anwendungsschicht. Obwohl für die Diagnose von Netzwerkproblemen wichtig, sind die zugrunde liegenden Schichten bei der Beschreibung von HTTP meistens irrelevant.

### Client: der User-Agent

Der _User-Agent_ ist jedes Tool, das im Namen des Benutzers handelt. Diese Rolle wird hauptsächlich vom Webbrowser wahrgenommen, kann aber auch von Programmen übernommen werden, die von Ingenieuren und Webentwicklern zur Fehlerbehebung ihrer Anwendungen verwendet werden.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine Ursprungsanfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Er analysiert dann diese Datei und sendet zusätzliche Anfragen, die den Ausführungsskripten, Layoutinformationen (CSS) zur Darstellung und in der Seite enthaltenen Subressourcen (meistens Bilder und Videos) entsprechen. Der Webbrowser kombiniert diese Ressourcen, um das vollständige Dokument, die Webseite, zu präsentieren. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertext-Dokument. Das bedeutet, dass einige Teile der angezeigten Inhalte Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, sodass der Benutzer seinen User-Agent steuern und durch das Web navigieren kann. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert weiter die HTTP-Antworten, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument entsprechend den Anforderungen des Clients _bereitstellt_. Ein Server erscheint virtuell als nur eine einzige Maschine; tatsächlich kann es jedoch eine Sammlung von Servern sein, die die Last teilen (Lastverteilung), oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument ganz oder teilweise auf Abruf erzeugen.

Ein Server ist nicht notwendigerweise eine einzelne Maschine, sondern mehrere Server-Softwareinstanzen können auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Web-Stacks operieren die meisten von ihnen auf den Transport-, Netzwerk- oder physischen Ebenen, indem sie auf der HTTP-Ebene transparent werden und potenziell einen erheblichen Einfluss auf die Leistung haben. Diejenigen, die auf den Anwendungsschichten operieren, werden allgemein als **Proxies** bezeichnet. Diese können transparent sein und die empfangenen Anfragen weiterleiten, ohne sie in irgendeiner Weise zu verändern, oder nicht transparent, wobei sie in diesem Fall die Anfrage in gewisser Weise ändern, bevor sie an den Server weitergeleitet wird. Proxies können zahlreiche Funktionen erfüllen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browsercache)
- Filtern (wie ein Antiviren-Scan oder Jugendschutz)
- Lastverteilung (um mehreren Servern zu erlauben, unterschiedliche Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (Ermöglichung der Speicherung historischer Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen einfach und menschenlesbar ausgelegt, selbst mit der zusätzlichen Komplexität, die in HTTP/2 durch die Kapselung von HTTP-Nachrichten in Frames eingeführt wird. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was die Tests für Entwickler erleichtert und die Komplexität für Neueinsteiger reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Headers) dieses Protokoll leicht erweiterbar und experimentierbar. Neue Funktionalitäten können sogar durch eine einfache Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sessionlos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei auf derselben Verbindung nacheinander ausgeführten Anfragen. Dies könnte für Benutzer problematisch werden, die versuchen, kohärent mit bestimmten Seiten zu interagieren, z.B. mit Einkaufswagen im E-Commerce. Aber während der Kern von HTTP selbst zustandslos ist, erlauben HTTP-Cookies die Verwendung zustandsbehafteter Sitzungen. Durch die Erweiterbarkeit der Header werden HTTP-Cookies in den Arbeitsablauf aufgenommen, wodurch Sitzungserstellung bei jeder HTTP-Anfrage im gleichen Kontext oder Zustand ermöglicht wird.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt daher grundsätzlich außerhalb des Geltungsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert lediglich, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens jedoch in solchen Fällen einen Fehler anzeigt). Unter den beiden häufigsten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht. Daher basiert HTTP auf dem verbindungsbasierten TCP-Standard.

Bevor ein Client und ein Server ein HTTP-Anfragen/Antwort-Paar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Round-Trips erfordert. Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfragen/Antwort-Paar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als das Teilen einer einzigen TCP-Verbindung, wenn mehrere Anfragen in kurzer Abfolge gesendet werden.

Um diesen Mangel zu mindern, führte HTTP/1.1 das _Pipelining_ (das sich als schwierig zu implementieren erwies) und _persistente Verbindungen_ ein: Die zugrunde liegende TCP-Verbindung kann teilweise mit dem {{HTTPHeader("Connection")}}-Header gesteuert werden. HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzige Verbindung multiplexierte, was dazu beitrug, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besser geeignetes Transportprotokoll für HTTP zu entwerfen. Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP basiert, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP gesteuert werden kann

Die erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität des Webs ermöglicht. Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der HTTP-Geschichte behandelt wurden. Die Möglichkeit, die _Origin-Beschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste der gemeinsamen Funktionen, die mit HTTP gesteuert werden können:

- _[Caching](/de/docs/Web/HTTP/Caching)_: Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden. Der Server kann Proxies und Clients darüber informieren, was zwischengespeichert werden soll und wie lange. Der Client kann zwischengeschaltete Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockern der Origin-Beschränkung_: Zum Schutz vor Abhören und anderen Eingriffen in die Privatsphäre erzwingen Webbrowser eine strikte Trennung zwischen Websites. Nur Seiten derselben **Herkunft** können auf alle Informationen einer Webseite zugreifen. Obwohl eine solche Beschränkung eine Last für den Server darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Flickwerk von Informationen aus verschiedenen Domänen werden kann; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_: Einige Seiten können geschützt werden, sodass nur bestimmte Benutzer auf sie zugreifen können. Grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder unter Verwendung der {{HTTPHeader("WWW-Authenticate")}} und ähnlicher Header, oder durch das Einrichten einer bestimmten Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)_: Server oder Clients befinden sich oft in Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern. HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überqueren. Nicht alle Proxies sind HTTP-Proxies. Das SOCKS-Protokoll, zum Beispiel, arbeitet auf einer niedrigeren Ebene. Andere Protokolle, wie FTP, können von diesen Proxies behandelt werden.
- _Sitzungen_: Durch die Verwendung von HTTP-Cookies können Sie Anfragen mit dem Zustand des Servers verknüpfen. Dies schafft Sitzungen, obwohl HTTP grundsätzlich ein zustandsloses Protokoll ist. Dies ist nicht nur für Einkaufswagen im E-Commerce nützlich, sondern auch für jede Seite, die dem Benutzer die Konfiguration der Ausgabe ermöglicht.

## HTTP-Flow

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem endgültigen Server oder einem Zwischenproxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage oder mehrere zu senden und eine Antwort zu erhalten. Der Client kann eine neue Verbindung eröffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar. Mit HTTP/2 werden diese einfachen Nachrichten in Frames gekapselt, was es unmöglich macht, sie direkt zu lesen, aber das Prinzip bleibt dasselbe. Beispielsweise:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Lesen der vom Server gesendeten Antwort, wie zum Beispiel:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne darauf zu warten, dass die erste Antwort vollständig empfangen wird. HTTP-Pipelining hat sich in bestehenden Netzwerken, bei denen alte Softwareteile mit modernen Versionen koexistieren, als schwierig zu implementieren erwiesen. HTTP-Pipelining wurde in HTTP/2 durch robusteres Multiplexen von Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie in HTTP/1.1 und früher definiert, sind menschenlesbar. In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet, was Optimierungen wie die Komprimierung von Headern und Multiplexing ermöglicht. Selbst wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleiben die Semantiken der einzelnen Nachrichten unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Es ist deshalb nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einer HTTP-[Methode](/de/docs/Web/HTTP/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise will ein Client eine Ressource abrufen (mit `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn/Forms) senden (mit `POST`), obwohl in anderen Fällen mehr Operationen erforderlich sein können.
- Der Pfad der Ressource, die abgerufen werden soll; die URL der Ressource abzüglich der Elemente, die aus dem Kontext offensichtlich sind, beispielsweise ohne das [Protokoll](/de/docs/Glossary/protocol) (`http://`), die [Domäne](/de/docs/Glossary/domain) (hier, `developer.mozilla.org`) oder den TCP-[Port](/de/docs/Glossary/port) (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen für die Server übertragen.
- Ein Body, für einige Methoden wie `POST`, ähnlich wie in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Überblick über eine '200 OK'-HTTP-Antwort auf eine GET-Anfrage einschließlich Antwortheadern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, das sie befolgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusmeldung, eine nicht-autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Headers), ähnlich wie in Anfragen.
- Optional, ein Body, der die abgerufene Ressource enthält.

## APIs, die auf HTTP basieren

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen aus JavaScript zu machen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine andere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein einseitiger Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, wobei HTTP als Transportmechanismus verwendet wird. Unter Verwendung der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und stellt Ereignis-Handler auf. Der Client-Browser konvertiert die Nachrichten, die im HTTP-Stream ankommen, automatisch in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte. Anschließend gibt er sie an die Ereignis-Handler, die für den [`type`](/de/docs/Web/API/Event/type) der Ereignisse registriert sind, weiter, wenn bekannt, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignis-Handler, wenn kein spezifischer Ereignis-Handler für den Typ festgelegt wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Frames zur Leistungsverbesserung eine gewisse Komplexität hinzufügt, ist die grundlegende Struktur der Nachrichten seit HTTP/1.0 gleich geblieben. Der Sitzungsfluss bleibt einfach, sodass er mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) untersucht und debuggt werden kann.
