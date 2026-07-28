---
title: Übersicht über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten. Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger, normalerweise dem Webbrowser, initiiert werden. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als ein Anwendungsprotokoll, das über TCP (Transportschicht) und IP (Netzwerkschicht) liegt und unterhalb der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es ist ein Anwendungsprotokoll, das über {{Glossary("TCP", "TCP")}} oder eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch für Bilder und Videos oder um Inhalte an Server zu senden, wie es bei den Ergebnisse von HTML-Formularen der Fall ist. HTTP kann auch verwendet werden, um Teile von Dokumenten nach Bedarf abzurufen, um Webseiten zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem User-Agent (oder einem Proxy in dessen Auftrag). Meistens ist der User-Agent ein Webbrowser, aber es kann alles Mögliche sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der diese bearbeitet und eine Antwort, genannt _Antwort_, bereitstellt. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die gemeinsam als {{Glossary("Proxy_server", "Proxies")}} bekannt sind und die verschiedene Operationen ausführen und als Gateways oder {{Glossary("Cache", "Caches")}} fungieren, um nur einige zu nennen.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxies an einen Server weitergeleitet wird, und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr. Dank des geschichteten Designs des Webs sind diese in den Netz- und Transportschichten verborgen. HTTP liegt ganz oben auf der Anwendungsschicht. Obwohl sie wichtig für die Diagnose von Netzwerkproblemen sind, sind die zugrunde liegenden Schichten weitgehend irrelevant für die Beschreibung von HTTP.

### Client: der User-Agent

Der _User-Agent_ ist jedes Tool, das im Auftrag des Benutzers agiert. Diese Rolle wird in erster Linie vom Webbrowser ausgeführt, aber sie kann auch von Programmen ausgeführt werden, die von Ingenieuren und Webentwicklern zur Fehlersuche in ihren Anwendungen verwendet werden.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Anschließend analysiert er diese Datei und erstellt zusätzliche Anfragen, die den Ausführungsskripten, Layoutinformationen (CSS), die angezeigt werden, und den in der Seite enthaltenen Subressourcen (meistens Bilder und Videos) entsprechen. Der Webbrowser kombiniert diese Ressourcen dann, um das vollständige Dokument, die Webseite, zu präsentieren. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertext-Dokument. Dies bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, wodurch der Benutzer seinen User-Agent anweisen und durch das Web navigieren kann. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals steht der Server, der das Dokument wie vom Client angefordert bereitstellt. Ein Server erscheint virtuell als nur eine einzelne Maschine, kann jedoch tatsächlich eine Sammlung von Servern sein, die die Last teilen (Load-Balancing), oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument ganz oder teilweise auf Abruf generieren.

Ein Server ist nicht notwendigerweise eine einzelne Maschine, aber mehrere Server-Softwareinstanzen können auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Web-Stacks arbeiten die meisten auf der Transport-, Netzwerk- oder physikalischen Ebene und werden auf der HTTP-Ebene transparent, was möglicherweise erheblichen Einfluss auf die Leistung hat. Diejenigen, die auf den Anwendungsschichten arbeiten, werden im Allgemeinen als **Proxies** bezeichnet. Diese können transparent sein und die empfangenen Anfragen ohne Änderung weiterleiten, oder nicht transparent, in welchem Fall sie die Anfrage irgendwie ändern, bevor sie an den Server weitergeleitet wird. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenscan oder Kinderschutz)
- Load-Balancing (um mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (ermöglicht die Speicherung historischer Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so konzipiert, dass es für Menschen lesbar ist, selbst mit der in HTTP/2 eingeführten Komplexität durch Einkapselung von HTTP-Nachrichten in Frames. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was das Testen für Entwickler erleichtert und die Komplexität für Neueinsteiger reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) dieses Protokoll einfach erweiterbar und experimentierbar. Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik neuer Header eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei aufeinanderfolgenden Anfragen, die über dieselbe Verbindung ausgeführt werden. Dies hat sofort das Potenzial, für Benutzer problematisch zu sein, die versuchen, mit bestimmten Seiten kohärent zu interagieren, zum Beispiel mit Einkaufswagen im E-Commerce. Aber während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies den Einsatz von zustandsbehafteten Sitzungen. Mit der Erweiterbarkeit der Header werden HTTP-Cookies dem Workflow hinzugefügt, was die Erstellung von Sitzungen bei jeder HTTP-Anfrage ermöglicht, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht kontrolliert und liegt daher grundsätzlich außerhalb des Geltungsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert lediglich, dass es _zuverlässig_ ist, also keine Nachrichten verliert (mindestens ein Fehler sollte in solchen Fällen angezeigt werden). Unter den beiden häufigsten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht. HTTP verlässt sich daher auf den TCP-Standard, der verbindungsbasiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Round-Trips erfordert. Das Standardverhalten von HTTP/1.0 besteht darin, eine separate TCP-Verbindung für jedes HTTP-Anfrage-/Antwortpaar zu öffnen. Dies ist weniger effizient als die gemeinsame Nutzung einer einzelnen TCP-Verbindung, wenn mehrere Anfragen in schneller Folge gesendet werden.

Um diesen Mangel zu mildern, hat HTTP/1.1 _Pipelining_ (das sich als schwierig zu implementieren erwiesen hat) und _persistente Verbindungen_ eingeführt: Die zugrunde liegende TCP-Verbindung kann unter Verwendung des {{HTTPHeader("Connection")}}-Headers teilweise kontrolliert werden. HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzelne Verbindung multiplexierte, was die Verbindung warm und effizienter hält.

Experimente sind im Gange, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist. Google experimentiert zum Beispiel mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP kontrolliert werden kann

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität im Web ermöglicht. Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der HTTP-Geschichte gehandhabt wurden. Die Möglichkeit, die _Origin-Einschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste häufiger Funktionen, die mit HTTP kontrollierbar sind:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP kontrolliert werden.
  Der Server kann Proxies und Clients darüber informieren, was zu cachen ist und wie lange.
  Der Client kann Zwischen-Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockern der Origin-Einschränkung_:
  Um Abhören und andere Datenschutzverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten desselben **Ursprungs** können auf alle Informationen einer Webseite zugreifen.
  Auch wenn eine solche Einschränkung für den Server eine Belastung darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Flickenteppich aus Informationen werden kann, die aus verschiedenen Domains stammen; es könnte sogar sicherheitsrelevante Gründe geben, dies zu tun.
- _Authentifizierung_:
  Einige Seiten dürfen nur von bestimmten Benutzern aufgerufen werden.
  Eine einfache Authentifizierung kann durch HTTP bereitgestellt werden, entweder mit den Headern {{HTTPHeader("WWW-Authenticate")}} und ähnlichen, oder durch das Setzen einer spezifischen Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich oft in Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern.
  HTTP-Anfragen gehen daher durch Proxies, um diese Netzbarriere zu überwinden.
  Nicht alle Proxies sind HTTP-Proxies.
  Das SOCKS-Protokoll arbeitet zum Beispiel auf einer niedrigeren Ebene.
  Andere Protokolle, wie FTP, können von diesen Proxies gehandhabt werden.
- _Sitzungen_:
  Mithilfe von HTTP-Cookies können Anfragen mit dem Zustand des Servers verknüpft werden.
  Dies schafft Sitzungen, obwohl das grundlegende HTTP ein zustandsloses Protokoll ist.
  Dies ist nicht nur für E-Commerce-Einkaufswagen nützlich, sondern auch für jede Website, die Benutzern die Konfiguration der Ausgabe ermöglicht.

## HTTP-Fluss

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem endgültigen Server oder einem Zwischenproxy, führt er die folgenden Schritte aus:

1. Öffnen Sie eine TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden oder mehrere Anfragen zu senden und eine Antwort zu erhalten.
   Der Client kann eine neue Verbindung öffnen, eine vorhandene Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden Sie eine HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar.
   Bei HTTP/2 werden diese Nachrichten in Frames gekapselt, wodurch sie nicht direkt gelesen werden können, aber das Prinzip bleibt dasselbe.
   Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Lesen Sie die vom Server gesendete Antwort, wie zum Beispiel:

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

4. Schließen oder wiederverwenden Sie die Verbindung für weitere Anfragen.

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne darauf zu warten, dass die erste Antwort vollständig empfangen wurde. HTTP-Pipelining hat sich als schwierig in bestehenden Netzwerken zu implementieren erwiesen, in denen alte Softwarestücke mit modernen Versionen koexistieren. HTTP-Pipelining wurde in HTTP/2 durch robusteres Multiplexing von Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert sind, sind menschenlesbar. In HTTP/2 sind diese Nachrichten in einer binären Struktur, einem _Frame_, eingebettet, die Optimierungen wie die Komprimierung von Headern und Multiplexing ermöglicht. Auch wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser HTTP-Version gesendet wird, bleibt die Semantik jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Eine HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte.
  Typischerweise möchte ein Client eine Ressource abrufen (unter Verwendung von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) senden (mit `POST`), obwohl in anderen Fällen möglicherweise weitere Operationen erforderlich sind.
- Der Pfad der abzurufenden Ressource; die URL der Ressource, ohne Elemente, die aus dem Kontext offensichtlich sind, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server übermitteln.
- Ein Body, für einige Methoden wie `POST`, ähnlich wie bei Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht über eine '200 OK' HTTP-Antwort auf eine GET-Anfrage mit Antwort-Headern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht, und warum.
- Eine Statusmeldung, eine nicht-autorisierende Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Reference/Headers), ähnlich wie bei Anfragen.
- Optional ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen von JavaScript auszustellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine andere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, indem HTTP als Transportmechanismus genutzt wird. Mit der Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) öffnet der Client eine Verbindung und richtet Ereignishandler ein. Der Clientbrowser wandelt die Nachrichten, die im HTTP-Stream ankommen, automatisch in entsprechende [`Event`](/de/docs/Web/API/Event) Objekte um. Anschließend liefert er sie an die Ereignishandler, die für den [Ereignistyp](/de/docs/Web/API/Event/type) registriert wurden, falls bekannt, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, falls kein ereignistyp-spezifischer Ereignishandler eingerichtet wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das leicht zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es, dass HTTP mit den erweiterten Fähigkeiten des Webs fortschreitet.

Obwohl HTTP/2 einige Komplexität hinzufügt, indem es HTTP-Nachrichten in Frames einbettet, um die Leistung zu verbessern, hat sich die grundlegende Struktur der Nachrichten seit HTTP/1.0 nicht geändert. Der Sitzungsverlauf bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
