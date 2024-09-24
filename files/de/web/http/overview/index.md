---
title: Ein Überblick über HTTP
slug: Web/HTTP/Overview
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten. Es ist die Grundlage für jeden Datenaustausch im Web und ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger, in der Regel dem Webbrowser, initiiert werden. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengestellt.

![Ein einzelnes Webdokument aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch individueller Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsschichtprotokoll, über TCP (Transportschicht) und IP (Netzwerkschicht) und unter der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entworfen und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es ist ein Protokoll der Anwendungsschicht, das über {{Glossary("TCP")}} oder über eine {{Glossary("TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur verwendet, um Hypertext-Dokumente abzurufen, sondern auch Bilder und Videos abzurufen oder Inhalte auf Server zu übertragen, wie beispielsweise HTML-Formularergebnisse. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Einheit, dem Benutzeragenten (oder einem Proxy in seinem Auftrag) gesendet. Meistens ist der Benutzeragent ein Webbrowser, aber es kann auch alles andere sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu befüllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort bereitstellt, die als _Response_ bezeichnet wird. Zwischen dem Client und dem Server gibt es zahlreiche Einheiten, die kollektiv als {{Glossary("Proxy_server", "Proxies")}} bezeichnet werden und verschiedene Operationen durchführen und als Gateways oder {{Glossary("Cache", "Caches")}} fungieren, zum Beispiel.

![Eine HTTP-Anfrage von einem Client, die über mehrere Proxies an einen Server weitergeleitet wird, und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In der Realität gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr. Dank des geschichteten Designs des Webs sind diese im Netzwerk und den Transportschichten verborgen. HTTP ist ganz oben, auf der Anwendungsschicht. Obwohl sie wichtig sind für die Diagnose von Netzwerkproblemen, sind die zugrundeliegenden Schichten für die Beschreibung von HTTP größtenteils irrelevant.

### Client: der Benutzeragent

Der _Benutzeragent_ ist jedes Tool, das im Auftrag des Benutzers handelt. Diese Rolle wird hauptsächlich vom Webbrowser wahrgenommen, kann aber auch von Programmen wahrgenommen werden, die von Ingenieuren und Webentwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Einheit, die die Anfrage initiiert. Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine Originalanfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Er parst dann diese Datei und stellt zusätzliche Anfragen, die den Ausführungsskripten, den Layoutinformationen (CSS) zur Darstellung und den in der Seite enthaltenen Teilressourcen entsprechen (üblicherweise Bilder und Videos). Der Webbrowser kombiniert diese Ressourcen dann, um das vollständige Dokument, die Webseite, darzustellen. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen mehr Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument. Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, wodurch der Benutzer seinen Benutzeragenten steuern und durch das Web navigieren kann. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument serviert, wie es der Client angefordert hat. Ein Server erscheint nur virtuell als einzelne Maschine; tatsächlich kann es sich um eine Sammlung von Servern handeln, die die Last teilen (Lastverteilung), oder um andere Software (wie Caches, einen Datenbankserver oder E-Commerce-Server), die das Dokument ganz oder teilweise bei Bedarf generieren.

Ein Server ist nicht unbedingt eine einzelne Maschine, sondern es können mehrere Server-Softwareinstanzen auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Webstapels arbeiten die meisten von ihnen auf den Transport-, Netzwerk- oder physikalischen Ebenen, werden auf der HTTP-Schicht transparent und können einen erheblichen Einfluss auf die Leistung haben. Diejenigen, die auf den Anwendungsschichten arbeiten, werden allgemein als **Proxies** bezeichnet. Diese können transparent sein, die empfangenen Anfragen weiterleiten, ohne sie in irgendeiner Weise zu ändern, oder nicht transparent, in welchem Fall sie die Anfrage in irgendeiner Weise ändern, bevor sie sie an den Server weiterleiten. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenscan oder Kindersicherungen)
- Lastverteilung (um es mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (um die Speicherung historischer Informationen zu ermöglichen)

## Grundaspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so konzipiert, dass es einfach und für Menschen lesbar ist, selbst wenn in HTTP/2 durch die Kapselung von HTTP-Nachrichten in Frames zusätzliche Komplexität eingeführt wurde. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was das Testen für Entwickler erleichtert und die Komplexität für Neulinge reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0 machen [HTTP-Header](/de/docs/Web/HTTP/Headers) dieses Protokoll leicht erweiterbar und experimentiert. Neue Funktionalität kann sogar durch eine einfache Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei aufeinanderfolgenden Anfragen, die über dieselbe Verbindung ausgeführt werden. Dies hat sofort das Potenzial, problematisch zu sein für Benutzer, die versuchen, mit bestimmten Seiten schlüssig zu interagieren, beispielsweise durch die Nutzung von E-Commerce-Warenkörben. Aber obwohl der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Verwendung von zustandsbehafteten Sitzungen. Mit der Erweiterbarkeit der Header werden HTTP-Cookies in den Workflow aufgenommen, wodurch Sitzungen erstellt werden können, bei denen jede HTTP-Anfrage denselben Kontext oder denselben Zustand teilt.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt daher grundsätzlich außerhalb des Geltungsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert nur, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens soll in solchen Fällen ein Fehler angezeigt werden). Unter den beiden häufigsten Transportprotokollen im Internet ist TCP zuverlässig und UDP ist es nicht. Daher basiert HTTP auf dem TCP-Standard, der verbindungsbasiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Rundfahrten erfordert. Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient, als wenn mehrere Anfragen in kurzer Folge gesendet werden, eine einzelne TCP-Verbindung zu teilen.

Um diesen Mangel zu mildern, führten HTTP/1.1 _Pipelining_ ein (was sich als schwierig zu implementieren erwies) und _persistente Verbindungen_: die zugrunde liegende TCP-Verbindung kann teilweise mit dem {{HTTPHeader("Connection")}}-Header gesteuert werden. HTTP/2 ging noch einen Schritt weiter, indem es Nachrichten über eine einzige Verbindung multiplexte, was hilft, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besser geeignetes Transportprotokoll für HTTP zu entwerfen. Beispielsweise experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP gesteuert werden kann

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit eine größere Kontrolle und Funktionalität im Web ermöglicht. Methoden für Cache und Authentifizierung waren Funktionen, die früh in der Geschichte von HTTP gehandhabt wurden. Die Fähigkeit, die _Ursprungsbeschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von häufigen Merkmalen, die mit HTTP steuerbar sind:

- _[Caching](/de/docs/Web/HTTP/Caching)_: Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden. Der Server kann Proxies und Clients anweisen, was zu cachen ist und wie lange. Der Client kann Zwischen-Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Ursprungsbeschränkung lockern_: Um Lauschangriffe und andere Verletzungen der Privatsphäre zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites. Nur Seiten aus demselben **Ursprung** können auf alle Informationen einer Webseite zugreifen. Obwohl eine solche Beschränkung eine Belastung für den Server darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Patchwork von Informationen aus verschiedenen Domains werden kann; es könnte sogar sicherheitsbezogene Gründe geben, dies zu tun.
- _Authentifizierung_: Einige Seiten können geschützt sein, sodass nur bestimmte Benutzer darauf zugreifen können. Grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder durch die Verwendung des {{HTTPHeader("WWW-Authenticate")}} und ähnlicher Header, oder durch das Setzen einer speziellen Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)_: Server oder Clients befinden sich häufig in Intranets und verbergen ihre echte IP-Adresse vor anderen Computern. HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überwinden. Nicht alle Proxies sind HTTP-Proxies. Das SOCKS-Protokoll, zum Beispiel, operiert auf einer niedrigeren Ebene. Andere Protokolle, wie ftp, können von diesen Proxies gehandhabt werden.
- _Sitzungen_: Die Verwendung von HTTP-Cookies ermöglicht es, Anfragen mit dem Zustand des Servers zu verknüpfen. Dies schafft Sitzungen, obwohl grundlegendes HTTP ein zustandsloses Protokoll ist. Dies ist nicht nur für E-Commerce-Warenkörbe nützlich, sondern auch für jede Seite, die eine Benutzerkonfiguration der Ausgabe ermöglicht.

## HTTP-Ablauf

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem Endserver oder einem Zwischenproxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden, oder mehrere, und eine Antwort zu erhalten. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind für Menschen lesbar. Mit HTTP/2 werden diese einfachen Nachrichten in Frames gekapselt, was sie direkt lesbar unmöglich macht, aber das Prinzip bleibt das gleiche.
   Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Lesen der vom Server gesendeten Antwort, wie:

   ```http
   HTTP/1.1 200 OK
   Date: Sat, 09 Oct 2010 14:28:02 GMT
   Server: Apache
   Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
   ETag: "51142bc1-7449-479b075b2891b"
   Accept-Ranges: bytes
   Content-Length: 29769
   Content-Type: text/html

   <!doctype html>… (hier kommen die 29769 Bytes der angeforderten Webseite)
   ```

4. Schließen oder Wiederverwendung der Verbindung für weitere Anfragen.

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne dass auf den vollständigen Empfang der ersten Antwort gewartet wird. Das HTTP-Pipelining hat sich als schwierig zu implementieren erwiesen in bestehenden Netzwerken, in denen alte Softwareteile mit modernen Versionen koexistieren. Das HTTP-Pipelining wurde in HTTP/2 durch ein robusteres Multiplexen von Anfragen innerhalb eines Frames abgelöst.

## HTTP-Nachrichten

HTTP-Nachrichten, wie in HTTP/1.1 und früher definiert, sind für Menschen lesbar. In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet, die Optimierungen wie Komprimierung von Headern und Multiplexing ermöglicht. Selbst wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleibt die Semantik jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Daher ist es nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Eine HTTP-[Methode](/de/docs/Web/HTTP/Methods), üblicherweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise möchte ein Client eine Ressource abrufen (unter Verwendung von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn/Forms) senden (unter Verwendung von `POST`), obwohl in anderen Fällen mehr Operationen erforderlich sein können.
- Der Pfad der abzurufenden Ressource; die URL der Ressource, die von Elementen, die aus dem Kontext offensichtlich sind, bereinigt wurde, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen für die Server übermitteln.
- Ein Body, bei einigen Methoden wie `POST`, ähnlich denjenigen in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Überblick über eine '200 OK'-HTTP-Antwort auf eine GET-Anfrage einschließlich Antwort-Header.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusnachricht, eine nicht autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Headers), ähnlich wie bei Anfragen.
- Optional, ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen aus JavaScript zu machen. Die Fetch API ersetzt die {{domxref("XMLHttpRequest")}} API.

Eine andere API, [Server-Sent Events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden und dabei HTTP als Transportmechanismus zu verwenden. Mithilfe der {{domxref("EventSource")}}-Schnittstelle öffnet der Client eine Verbindung und stellt Ereignishandler bereit. Der Client-Browser konvertiert die Nachrichten, die auf dem HTTP-Stream ankommen, automatisch in entsprechende {{domxref("Event")}}-Objekte. Dann liefert er sie den Ereignishandlern aus, die für den {{domxref("Event.type", "Typ")}} der Ereignisse registriert wurden, falls bekannt, oder an den {{domxref("EventSource.message_event", "onmessage")}}-Ereignishandler, falls kein typenspezifischer Ereignishandler eingerichtet wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Frames für eine bessere Leistung sorgt und einige Komplexität hinzufügt, ist die grundlegende Struktur der Nachrichten seit HTTP/1.0 gleich geblieben. Der Sitzungsablauf bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.
