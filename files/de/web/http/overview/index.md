---
title: Ein Überblick über HTTP
slug: Web/HTTP/Overview
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

**HTTP** ist ein [Protokoll](/de/docs/Glossary/protocol) zum Abrufen von Ressourcen wie HTML-Dokumenten. Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, normalerweise dem Webbrowser. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Gestaltungsvorschriften, Bildern, Videos, Skripten und mehr zusammengestellt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsprotokollschicht, über TCP (Transportschicht) und IP (Netzwerkschicht) und unterhalb der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es ist ein Anwendungsprotokoll, das über [TCP](/de/docs/Glossary/TCP) oder über eine [TLS](/de/docs/Glossary/TLS)-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch von Bildern und Videos oder zum Posten von Inhalten auf Servern, wie z.B. bei HTML-Formularergebnissen. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität, dem Benutzeragenten (oder einem Proxy in dessen Namen), gesendet. Meistens ist der Benutzeragent ein Webbrowser, aber er kann auch etwas anderes sein, z.B. ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort, die _Antwort_ genannt wird, bereitstellt. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die zusammen [Proxies](/de/docs/Glossary/Proxy_server) genannt werden, die verschiedene Operationen durchführen und als Gateways oder [Caches](/de/docs/Glossary/Cache) fungieren, zum Beispiel.

![Eine HTTP-Anfrage von einem Client wird von mehreren Proxies zu einem Server weitergeleitet und eine Antwort nimmt denselben Weg zurück zum Client.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr. Dank des geschichteten Aufbaus des Webs sind diese Netz- und Transportschichten verborgen. HTTP ist oben angesiedelt, auf der Anwendungsschicht. Obwohl wichtig zur Diagnose von Netzwerkproblemen, sind die zugrundeliegenden Schichten für die Beschreibung von HTTP größtenteils irrelevant.

### Client: der Benutzeragent

Der _Benutzeragent_ ist jedes Tool, das im Namen des Nutzers handelt. Diese Rolle wird in erster Linie vom Webbrowser ausgeführt, kann aber auch von Programmen ausgeführt werden, die von Ingenieuren und Webentwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Er analysiert dann diese Datei, macht zusätzliche Anfragen, die entsprechenden Ausführungsskripten, Layoutinformationen (CSS) zum Anzeigen und Unterressourcen innerhalb der Seite entsprechen (normalerweise Bilder und Videos). Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, zu präsentieren. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen mehr Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertext-Dokument. Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Klick der Maus), um eine neue Webseite abzurufen, wodurch der Benutzer seinen Benutzeragenten dirigieren und durch das Web navigieren kann. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das vom Client angeforderte Dokument _serviert_. Ein Server erscheint als nur eine einzige Maschine virtuell; er kann jedoch tatsächlich eine Sammlung von Servern sein, die die Last teilen (Lastverteilung), oder andere Software (wie Caches, ein Datenbankserver oder e-Commerce-Server), die das Dokument vollständig oder teilweise bei Bedarf generieren.

Ein Server muss nicht unbedingt eine einzelne Maschine sein, es können mehrere Server-Software-Instanzen auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Web-Stacks arbeiten die meisten von ihnen auf den Transport-, Netzwerk- oder physischen Ebenen, werden auf der HTTP-Schicht transparent und können potenziell einen erheblichen Einfluss auf die Leistung haben. Diejenigen, die auf den Anwendungsebenen arbeiten, werden im Allgemeinen **Proxies** genannt. Diese können transparent sein, indem sie die Anfragen, die sie erhalten, weiterleiten, ohne sie in irgendeiner Weise zu verändern, oder sie sind nicht transparent, in welchem Fall sie die Anfrage in irgendeiner Weise ändern, bevor sie sie an den Server weiterleiten. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenschutz oder Jugendschutz)
- Lastverteilung (um es mehreren Servern zu ermöglichen, unterschiedliche Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf unterschiedliche Ressourcen zu steuern)
- Protokollierung (ermöglicht die Speicherung historischer Informationen)

## Grundaspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen darauf ausgelegt, einfach und für Menschen lesbar zu sein, selbst mit der zusätzlichen Komplexität, die durch das Einkapseln von HTTP-Nachrichten in Rahmen in HTTP/2 eingeführt wurde. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern die Prüfung erleichtert und die Komplexität für Neueinsteiger reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Headers) dieses Protokoll leicht erweiterbar und experimentierfreudig. Neue Funktionalitäten können sogar durch eine einfache Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei Anfragen, die auf derselben Verbindung nacheinander ausgeführt werden. Dies könnte sofort problematisch für Benutzer werden, die versuchen, mit bestimmten Seiten kohärent zu interagieren, zum Beispiel beim Einsatz von e-Commerce-Einkaufswagen. Aber während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Verwendung von zustandsbehafteten Sitzungen. Mithilfe der Header-Erweiterbarkeit werden HTTP-Cookies in den Workflow aufgenommen, wodurch die Erstellung von Sitzungen bei jeder HTTP-Anfrage ermöglicht wird, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht kontrolliert und liegt somit grundsätzlich nicht im Zuständigkeitsbereich von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert sein muss; es erfordert lediglich, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens unter Anzeige eines Fehlers in solchen Fällen). Unter den beiden am häufigsten im Internet verwendeten Transportprotokollen ist TCP zuverlässig und UDP nicht. HTTP verlässt sich daher auf den verbindungsbasierten TCP-Standard.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Round-Trips erfordert. Das Standardverhalten von HTTP/1.0 ist es, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als das Teilen einer einzigen TCP-Verbindung, wenn mehrere Anfragen in schneller Reihenfolge gesendet werden.

Um diesen Mangel abzumildern, führte HTTP/1.1 _Pipelining_ (was sich als schwierig zu implementieren erwies) und _Persistente Verbindungen_ ein: Die zugrunde liegende TCP-Verbindung kann teilweise über den {{HTTPHeader("Connection")}}-Header gesteuert werden. HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzige Verbindung multiplexte, was hilft, die Verbindung warm und effizienter zu halten.

Es werden Experimente durchgeführt, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist. Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP kontrolliert werden kann

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit eine stärkere Kontrolle und Funktionalität des Webs ermöglicht. Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der HTTP-Geschichte behandelt wurden. Die Fähigkeit, die _Origin-Beschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von gängigen Funktionen, die mit HTTP kontrolliert werden können:

- _[Caching](/de/docs/Web/HTTP/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden. Der Server kann Proxies und Clients Anweisungen geben, was wie lange zwischengespeichert werden soll. Der Client kann Zwischen-Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockern der Origin-Beschränkung_:
  Um Schnüffeln und andere Eingriffe in die Privatsphäre zu verhindern, erzwingen Webbrowser strikte Trennung zwischen Websites. Nur Seiten aus dem **selben Ursprung** können auf alle Informationen einer Webseite zugreifen. Obwohl eine solche Beschränkung eine Belastung für den Server darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern und es einem Dokument ermöglichen, ein Flickenteppich aus Informationen zu werden, die aus verschiedenen Domains stammen; es könnte sogar sicherheitsbezogene Gründe dafür geben.
- _Authentifizierung_:
  Einige Seiten können geschützt sein, so dass nur bestimmte Benutzer darauf zugreifen können. Eine einfache Authentifizierung kann durch HTTP bereitgestellt werden, entweder durch Verwendung der {{HTTPHeader("WWW-Authenticate")}}- und ähnlichen Header oder durch Setzen einer bestimmten Sitzung mithilfe von [HTTP-Cookies](/de/docs/Web/HTTP/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich häufig auf Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern. HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überwinden. Nicht alle Proxies sind HTTP-Proxies. Das SOCKS-Protokoll arbeitet zum Beispiel auf einer niedrigeren Ebene. Andere Protokolle wie ftp können von diesen Proxies verarbeitet werden.
- _Sitzungen_:
  Durch die Verwendung von HTTP-Cookies können Sie Anfragen mit dem Zustand des Servers verknüpfen. Dies erzeugt Sitzungen, obwohl das grundlegende HTTP ein zustandsloses Protokoll ist. Dies ist nicht nur nützlich für e-Commerce-Einkaufswagen, sondern auch für jede Seite, die Benutzern die Konfiguration des Outputs ermöglicht.

## HTTP-Fluss

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem Endserver oder einem Zwischenproxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden, oder mehrere, und eine Antwort zu erhalten. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind für Menschen lesbar. Mit HTTP/2 werden diese einfachen Nachrichten in Rahmen gekapselt, was sie unmöglich macht, direkt zu lesen, aber das Prinzip bleibt dasselbe. Zum Beispiel:

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

4. Schließen oder erneutes Verwenden der Verbindung für weitere Anfragen.

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne darauf zu warten, dass die erste Antwort vollständig empfangen wird. HTTP-Pipelining hat sich in bestehenden Netzwerken, in denen ältere Softwareversionen mit modernen Versionen koexistieren, als schwierig zu implementieren erwiesen. HTTP-Pipelining wurde in HTTP/2 durch robustere Multiplexing-Anfragen innerhalb eines Rahmens abgelöst.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert wurden, sind für Menschen lesbar. In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Rahmen_, eingebettet, die Optimierungen wie die Komprimierung von Headern und das Multiplexing ermöglicht. Auch wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleiben die Semantik jeder Nachricht unverändert, und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Es ist deshalb nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel einer HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einer HTTP-[Methode](/de/docs/Web/HTTP/Methods), normalerweise einem Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder einem Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise möchte ein Client eine Ressource abrufen (mit `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn/Forms) übermitteln (mit `POST`), obwohl in anderen Fällen mehr Operationen erforderlich sein können.
- Dem Pfad der Ressource, die abgerufen werden soll; die URL der Ressource ohne die Punkte, die aus dem Kontext offensichtlich sind, zum Beispiel ohne das [Protokoll](/de/docs/Glossary/protocol) (`http://`), die [Domain](/de/docs/Glossary/domain) (hier, `developer.mozilla.org`) oder den TCP-[Port](/de/docs/Glossary/port) (hier, `80`).
- Der Version des HTTP-Protokolls.
- Optionalen [Headern](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen für die Server übermitteln.
- Einem Body, für einige Methoden wie `POST`, ähnlich denen in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel einer Antwort:

![Überblick über eine '200 OK' HTTP-Antwort auf eine GET-Anfrage mit Antwort-Headern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Der Version des HTTP-Protokolls, dem sie folgen.
- Einem [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Einer Statusmeldung, einer nicht-autoritativen kurzen Beschreibung des Statuscodes.
- HTTP-[Headern](/de/docs/Web/HTTP/Headers), ähnlich denen der Anfragen.
- Optional einem Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen mittels JavaScript zu machen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API.

Eine weitere API, [Server-Sent Events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server erlaubt, Ereignisse an den Client zu senden und HTTP als Transportmechanismus zu verwenden. Mithilfe der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und legt Ereignishandler fest. Der Client-Browser wandelt die Nachrichten, die im HTTP-Stream eintreffen, automatisch in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte um. Dann liefert er sie an die Ereignishandler, die für den `type` der Ereignisse registriert wurden, sofern bekannt, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Handler, wenn kein spezifischer Ereignishandler festgelegt wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich zusammen mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 etwas Komplexität hinzufügt, indem es HTTP-Nachrichten in Rahmen einbettet, um die Leistung zu verbessern, ist die Grundstruktur der Nachrichten seit HTTP/1.0 gleich geblieben. Der Sitzungsfluss bleibt einfach und ermöglicht es, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.
