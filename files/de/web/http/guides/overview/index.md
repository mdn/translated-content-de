---
title: Übersicht über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten. Es ist die Grundlage für den Datenaustausch im Web und ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, normalerweise vom Webbrowser. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layout-Anweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren, indem sie einzelne Nachrichten austauschen (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsprotokoll, auf der TCP-Transportschicht und IP-Netzwerkschicht und unterhalb der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es ist ein Anwendungsprotokoll, das über {{Glossary("TCP", "TCP")}} oder über eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch für Bilder und Videos oder um Inhalte an Server zu senden, wie z.B. Ergebnisse von HTML-Formularen. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem User-Agent (oder einem Proxy in dessen Auftrag). Meistens ist der User-Agent ein Webbrowser, aber es kann alles Mögliche sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der diese bearbeitet und eine Antwort namens _Antwort_ liefert. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die zusammen {{Glossary("Proxy_server", "Proxies")}} genannt werden und verschiedene Operationen ausführen sowie als Gateways oder {{Glossary("Cache", "Caches")}} fungieren, zum Beispiel.

![Eine HTTP-Anfrage von einem Client wird von mehreren Proxies zu einem Server weitergeleitet und eine Antwort nimmt denselben Weg zurück zum Client.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr. Dank des geschichteten Designs des Webs sind diese im Netzwerk- und Transportlayer verborgen. HTTP ist oben, auf der Anwendungsebene. Obwohl wichtig für die Diagnose von Netzwerkproblemen, sind die zugrundeliegenden Schichten größtenteils irrelevant für die Beschreibung von HTTP.

### Client: der User-Agent

Der _User-Agent_ ist jedes Werkzeug, das im Auftrag des Benutzers handelt. Diese Rolle wird hauptsächlich vom Webbrowser ausgeführt, kann aber auch von Programmen ausgeführt werden, die von Ingenieuren und Webentwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist nie der Server (auch wenn im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Dann analysiert er diese Datei und stellt zusätzliche Anfragen an Ausführungsskripte, Layoutinformationen (CSS) zum Anzeigen und Unterressourcen, die in der Seite enthalten sind (normalerweise Bilder und Videos). Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertext-Dokument. Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen und dem Benutzer zu ermöglichen, seinen User-Agent zu dirigieren und durch das Web zu navigieren. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert weiter die HTTP-Antworten, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument _bedient_, wie vom Client angefordert. Ein Server erscheint virtuell als nur eine Maschine; er kann tatsächlich aber eine Sammlung von Servern sein, die die Last teilen (Lastenausgleich) oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument ganz oder teilweise auf Anforderung generiert.

Ein Server ist nicht unbedingt eine einzige Maschine, aber mehrere Serverinstanzen können auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Webstacks operieren die meisten von ihnen auf der Transport-, Netzwerk- oder physikalischen Ebene und werden auf der HTTP-Ebene transparent, wobei sie potenziell erhebliche Auswirkungen auf die Leistung haben. Diejenigen, die auf der Anwendungsebene arbeiten, werden im Allgemeinen **Proxies** genannt. Diese können transparent sein und die empfangenen Anfragen weiterleiten, ohne sie in irgendeiner Weise zu verändern, oder nicht transparent, in diesem Fall ändern sie die Anfrage irgendwie, bevor sie sie an den Server weiterleiten. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenscanner oder Kindersicherung)
- Lastenausgleich (um mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (ermöglicht das Speichern historischer Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist so konzipiert, dass es im Allgemeinen menschenlesbar ist, selbst mit der zusätzlichen Komplexität, die in HTTP/2 durch die Kapselung der HTTP-Nachrichten in Frames eingeführt wurde. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern einfacheres Testen ermöglicht und die Komplexität für Neueinsteiger reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) dieses Protokoll leicht erweiterbar und experimentierfreudig. Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungsfrei

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei Anfragen, die nacheinander über dieselbe Verbindung durchgeführt werden. Dies hat unmittelbar das Potenzial, problematisch für Benutzer zu sein, die versuchen, mit bestimmten Seiten kohärent zu interagieren, z.B. beim Verwenden von E-Commerce-Einkaufskörben. Aber während der Kern von HTTP selbst zustandslos ist, erlauben HTTP-Cookies die Verwendung zustandsbehafteter Sitzungen. Durch die Erweiterbarkeit von Headern werden HTTP-Cookies in den Workflow eingefügt, sodass bei jeder HTTP-Anfrage eine Sitzung erstellt werden kann, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt daher grundsätzlich außerhalb des Geltungsbereichs von HTTP. HTTP erfordert nicht, dass das zugrundeliegende Transportprotokoll verbindungsorientiert ist; es erfordert nur, dass es _zuverlässig_ ist, also keine Nachrichten verliert (mindestens ein Fehler anzeigen in solchen Fällen). Unter den beiden am häufigsten verwendeten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht. HTTP verlässt sich daher auf den TCP-Standard, der verbindungsorientiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Roundtrips erfordert. Das Standardverhalten von HTTP/1.0 ist, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als das Teilen einer einzigen TCP-Verbindung, wenn mehrere Anfragen in enger Folge gesendet werden.

Um diesen Mangel zu mindern, führte HTTP/1.1 das _Pipelining_ ein (was sich als schwierig zu implementieren erwiesen hat) und _persistente Verbindungen_: Die zugrundeliegende TCP-Verbindung kann teilweise mithilfe des {{HTTPHeader("Connection")}}-Headers gesteuert werden. HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzige Verbindung multiplexte, was hilft, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist. Google experimentiert beispielsweise mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was von HTTP gesteuert werden kann

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität des Webs ermöglicht. Methoden zum Cachen und zur Authentifizierung wurden früh in der HTTP-Geschichte behandelt. Die Möglichkeit, die _Origin-Beschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von Funktionen, die häufig von HTTP gesteuert werden können:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_: Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden. Der Server kann Proxies und Clients anweisen, was wie lange wann und was zu zwischenspeichern ist. Der Client kann zwischengeschalteten Proxy-Caches anweisen, das gespeicherte Dokument zu ignorieren.
- _Relaxing the origin constraint_: Um Lauschangriffen und anderen Eingriffen in die Privatsphäre vorzubeugen, erzwingen Webbrowser eine strikte Trennung zwischen Websites. Nur Seiten aus demselben **Ursprung** können auf alle Informationen einer Webseite zugreifen. Zwar ist eine solche Beschränkung eine Belastung für den Server, HTTP-Header können diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Flickwerk aus Informationen aus verschiedenen Domains wird; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_: Einige Seiten können so geschützt werden, dass nur bestimmte Benutzer darauf zugreifen können. Eine einfache Authentifizierung kann durch HTTP bereitgestellt werden, entweder durch die Verwendung der Header {{HTTPHeader("WWW-Authenticate")}} und ähnlicher Header oder durch das Setzen einer spezifischen Sitzung unter Verwendung von [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneln](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_: Server oder Clients befinden sich oft in Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern. HTTP-Anfragen werden dann durch Proxies geleitet, um diese Netzwerkschranke zu überqueren. Nicht alle Proxies sind HTTP-Proxies. Das SOCKS-Protokoll operiert zum Beispiel auf einer niedrigeren Ebene. Andere Protokolle, wie FTP, können von diesen Proxies gehandhabt werden.
- _Sitzungen_: Die Verwendung von HTTP-Cookies ermöglicht es Ihnen, Anfragen mit dem Zustand des Servers zu verknüpfen. Dies erzeugt Sitzungen, trotz des grundlegenden HTTP-Protokolls, das zustandslos ist. Dies ist nicht nur für E-Commerce-Einkaufskörbe nützlich, sondern auch für jede Seite, die dem Benutzer die Konfiguration der Ausgabe ermöglicht.

## HTTP-Flow

Wenn ein Client mit einem Server kommunizieren möchte, entweder mit dem Endserver oder einem zwischengeschalteten Proxy, führt er folgende Schritte aus:

1. Öffnen Sie eine TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden, oder mehrere, und eine Antwort zu empfangen. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden Sie eine HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar. Mit HTTP/2 werden diese Nachrichten in Frames gekapselt, was sie unmöglich macht, direkt zu lesen, aber das Prinzip bleibt dasselbe. Zum Beispiel:

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

4. Schließen Sie die Verbindung oder nutzen Sie sie für weitere Anfragen wieder.

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne darauf zu warten, dass die erste Antwort vollständig empfangen wird. HTTP-Pipelining hat sich in bestehenden Netzwerken, in denen alte Softwarestücke neben modernen Versionen koexistieren, als schwierig zu implementieren erwiesen. HTTP-Pipelining wurde in HTTP/2 durch robusteres Multiplexing von Anfragen innerhalb eines Frames ersetzt.

## HTTP Nachrichten

HTTP-Nachrichten, wie in HTTP/1.1 und früher definiert, sind menschenlesbar. In HTTP/2 werden diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet, was Optimierungen wie die Komprimierung von Headern und Multiplexing ermöglicht. Auch wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser HTTP-Version gesendet wird, bleiben die Semantiken jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Daher ist es nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Eine HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise möchte ein Client eine Ressource abrufen (unter Verwendung von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) posten (unter Verwendung von `POST`), obwohl in anderen Fällen möglicherweise mehr Operationen benötigt werden.
- Der Pfad der Ressource, die abgerufen werden soll; die URL der Ressource, gestripped von Elementen, die aus dem Kontext offensichtlich sind, z.B. ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domäne")}} (hier `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server übermitteln.
- Ein Body, für einige Methoden wie `POST`, ähnlich zu denen in den Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht über eine '200 OK'-HTTP-Antwort auf eine GET-Anfrage, einschließlich Antwort-Header.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, das sie befolgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusmeldung, eine nicht autoritative kurze Beschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Reference/Headers), ähnlich denen für Anfragen.
- Optional, ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API basierend auf HTTP ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen aus JavaScript herauszustellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API.

Eine andere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein einseitiger Dienst, der einem Server erlaubt, Ereignisse an den Client zu senden, wobei HTTP als Transportmechanismus verwendet wird. Unter Verwendung der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und legt Ereignishandler fest. Der Client-Browser konvertiert automatisch die Nachrichten, die im HTTP-Stream ankommen, in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte und liefert sie dann an die für den [`type`](/de/docs/Web/API/Event/type) der Ereignisse bekannten Ereignishandler oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, sofern kein spezifischer Ereignishandler festgelegt wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das leicht zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich zusammen mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 einige Komplexität hinzufügt, indem HTTP-Nachrichten in Frames eingebettet werden, um die Leistung zu verbessern, hat die grundlegende Struktur der Nachrichten seit HTTP/1.0 dieselbe geblieben. Der Sitzungsfluss bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
