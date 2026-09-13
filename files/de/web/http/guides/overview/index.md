---
title: Überblick über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten.
Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger, normalerweise dem Webbrowser, initiiert werden.
Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch individueller Nachrichten (im Gegensatz zu einem Datenstrom).
Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsschichtprotokoll, oberhalb von TCP (Transportschicht) und IP (Netzwerkschicht) und unterhalb der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entworfen und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat.
Es ist ein Anwendungsschichtprotokoll, das über {{Glossary("TCP", "TCP")}} oder über eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte.
Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch für Bilder und Videos oder um Inhalte auf Server zu posten, wie z. B. mit den Ergebnissen von HTML-Formularen.
HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten auf Abruf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität, dem User-Agent (oder einem Proxy in ihrem Namen), gesendet.
Meistens ist der User-Agent ein Webbrowser, aber es kann alles sein, zum Beispiel ein Roboter, der das Web durchforstet, um einen Suchmaschinenindex zu befüllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort, genannt _Antwort_, bereitstellt.
Zwischen dem Client und dem Server befinden sich zahlreiche Entitäten, gemeinsam {{Glossary("Proxy_server", "Proxys")}} genannt, die verschiedene Operationen ausführen und als Gateways oder {{Glossary("Cache", "Caches")}} fungieren, beispielsweise.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxys an einen Server weitergeleitet wird, und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr.
Dank des geschichteten Designs des Webs sind diese in den Netzwerk- und Transportschichten verborgen.
HTTP ist ganz oben, in der Anwendungsschicht.
Obwohl diese für die Diagnose von Netzwerkproblemen wichtig sind, sind die zugrunde liegenden Schichten größtenteils irrelevant für die Beschreibung von HTTP.

### Client: der User-Agent

Der _User-Agent_ ist jedes Werkzeug, das im Namen des Benutzers handelt.
Diese Rolle wird hauptsächlich vom Webbrowser ausgeführt, kann aber auch von Programmen ausgeführt werden, die Ingenieure und Webentwickler zur Debugging ihrer Anwendungen verwenden.

Der Browser ist **immer** die Entität, die die Anfrage initiiert.
Es ist niemals der Server (obwohl einige Mechanismen im Laufe der Jahre hinzugefügt wurden, um server-initiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt.
Er parst dann diese Datei und stellt zusätzliche Anfragen, die Ausführungsskripte, Layoutinformationen (CSS) und Unterressourcen enthalten, die auf der Seite angezeigt werden (in der Regel Bilder und Videos).
Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen.
Von dem Browser ausgeführte Skripte können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument.
Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, wodurch der Benutzer seinen User-Agent leiten und durch das Web navigieren kann.
Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert weiter die HTTP-Antworten, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das vom Client angeforderte Dokument _serviert_.
Ein Server erscheint virtuell als nur eine einzelne Maschine, aber es könnte tatsächlich eine Sammlung von Servern sein, die die Last teilen (Lastverteilung) oder andere Software (wie Caches, Datenbankserver oder E-Commerce-Server), die das Dokument vollständig oder teilweise auf Abruf generieren.

Ein Server ist nicht unbedingt eine einzige Maschine, aber mehrere Server-Softwareinstanzen können auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxys

Zwischen dem Webbrowser und dem Server führen zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Web-Stacks arbeiten die meisten dieser auf den Transport-, Netzwerk- oder physikalischen Schichten und werden auf der HTTP-Schicht transparent, können jedoch einen erheblichen Einfluss auf die Leistung haben. Diejenigen, die auf den Anwendungsschichten arbeiten, werden allgemein **Proxys** genannt. Diese können transparent sein, indem sie die Anfragen, die sie erhalten, weiterleiten, ohne sie in irgendeiner Weise zu ändern, oder nicht transparent, in diesem Fall ändern sie die Anfrage auf irgendeine Weise, bevor sie sie an den Server weitergeben. Proxys können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filtern (wie ein Virenscanner oder Kindersicherung)
- Lastverteilung (um mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (Ermöglichen der Speicherung historischer Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so gestaltet, dass es für Menschen lesbar ist, selbst mit der zusätzlichen Komplexität, die in HTTP/2 eingeführt wurde, indem HTTP-Nachrichten in Frames gekapselt werden.
HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklertests erleichtert und die Komplexität für Neueinsteiger reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, ermöglichen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), dass dieses Protokoll leicht erweitert und experimentiert werden kann. Neue Funktionen können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungsfrei

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei aufeinanderfolgenden Anfragen auf derselben Verbindung.
Dies könnte sofort problematisch werden für Benutzer, die versuchen, auf bestimmte Seiten konsistent zu interagieren, wie zum Beispiel mit Einkaufswagen im E-Commerce.
Aber während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Nutzung von zustandsbehafteten Sitzungen.
Durch die Erweiterbarkeit der Header werden HTTP-Cookies dem Arbeitsablauf hinzugefügt, was ermöglicht, Sitzungen bei jeder HTTP-Anfrage zu erzeugen, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt daher grundsätzlich außerhalb des Zuständigkeitsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert lediglich, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens sollte im Fehlerfall ein Fehler angezeigt werden).
Unter den beiden am häufigsten verwendeten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht.
HTTP basiert daher auf dem TCP-Standard, der verbindungsbasiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwort-Paar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Rundgänge erfordert. Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwort-Paar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als eine einzelne TCP-Verbindung zu teilen, wenn mehrere Anfragen in kurzer Folge gesendet werden.

Um diesen Mangel zu lindern, führte HTTP/1.1 _Pipelining_ ein (was sich als schwierig zu implementieren erwies) und _persistente Verbindungen_: Die zugrunde liegende TCP-Verbindung kann teilweise mithilfe des {{HTTPHeader("Connection")}}-Headers gesteuert werden.
HTTP/2 ging noch einen Schritt weiter, indem Nachrichten über eine einzelne Verbindung multipliziert werden, was hilft, die Verbindung warm zu halten und effizienter zu gestalten.

Experimente sind im Gange, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist.
Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was kann mit HTTP gesteuert werden

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität des Webs ermöglicht.
Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der HTTP-Geschichte gehandhabt wurden.
Die Möglichkeit, die _Origin-Beschränkung_ zu lockern, wurde dagegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste gängiger Funktionen, die mit HTTP steuerbar sind:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden.
  Der Server kann Proxys und Clients anweisen, was wie lange zwischengespeichert werden soll.
  Der Client kann zwischengeschaltete Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Origin-Beschränkung lockern_:
  Um Abhören und andere Privatsphäreverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten vom **selben Ursprung** können auf alle Informationen einer Webseite zugreifen.
  Auch wenn eine solche Einschränkung eine Belastung für den Server darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Mosaik aus Informationen aus verschiedenen Domains werden kann; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_:
  Einige Seiten können geschützt sein, sodass nur bestimmte Benutzer auf sie zugreifen können.
  Grundlegende Authentifizierung kann entweder durch HTTP bereitgestellt werden, indem der {{HTTPHeader("WWW-Authenticate")}} und ähnliche Header verwendet werden, oder durch das Setzen einer spezifischen Sitzung mithilfe von [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich häufig in Intranets und verbergen ihre tatsächliche IP-Adresse vor anderen Computern.
  HTTP-Anfragen durchlaufen dann Proxys, um diese Netzwerkbarrieren zu überwinden.
  Nicht alle Proxys sind HTTP-Proxys.
  Das SOCKS-Protokoll arbeitet beispielsweise auf einer niedrigeren Ebene.
  Auch andere Protokolle wie FTP können durch diese Proxys gehandhabt werden.
- _Sitzungen_:
  Die Verwendung von HTTP-Cookies ermöglicht es, Anfragen mit dem Zustand des Servers zu verknüpfen.
  Dies schafft Sitzungen, trotz dass HTTP eigentlich ein zustandsloses Protokoll ist. Dies ist nicht nur für Einkaufswagen im E-Commerce nützlich, sondern auch für jede Seite, die es ermöglicht, die Ausgabe für den Benutzer zu konfigurieren.

## HTTP-Fluss

Wenn ein Client mit einem Server kommunizieren möchte, entweder der endgültige Server oder ein zwischenliegender Proxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage oder mehrere zu senden und eine Antwort zu empfangen. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschlich lesbar. Mit HTTP/2 sind diese Nachrichten in Frames gekapselt, was es unmöglich macht, sie direkt zu lesen, aber das Prinzip bleibt dasselbe. Zum Beispiel:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne auf den vollständigen Empfang der ersten Antwort zu warten. HTTP-Pipelining hat sich in bestehenden Netzwerken, wo alte Softwareversionen mit modernen Versionen koexistieren, als schwierig umzusetzen erwiesen. HTTP-Pipelining wurde in HTTP/2 durch stabileres Multiplexing von Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert sind, sind menschenlesbar.
In HTTP/2 sind diese Nachrichten in einer binären Struktur, einem _Frame_, eingebettet, was Optimierungen wie Headerkompression und Multiplexing ermöglicht.
Selbst wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleiben die Semantiken jeder Nachricht unverändert, und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage.
Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jeweils mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einer HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise möchte ein Client eine Ressource abrufen (mit `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) senden (mit `POST`), obwohl in anderen Fällen möglicherweise weitere Operationen erforderlich sind.
- Der Pfad der Ressource, die abgerufen werden soll; die URL der Ressource bereinigt von Elementen, die aus dem Kontext offensichtlich sind, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server übermitteln.
- Einen Körper, für einige Methoden wie `POST`, ähnlich wie bei Antworten, der die gesendete Ressource enthält.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht einer '200 OK' HTTP-Antwort auf eine GET-Anfrage inklusive Antwortheadern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, der sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusmeldung, eine nicht autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Reference/Headers), ähnlich wie bei Anfragen.
- Optional, ein Körper, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API basierend auf HTTP ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen von JavaScript auszustellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine andere API, [Server-Sent Events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, wobei HTTP als Transportmechanismus verwendet wird.
Durch die Verwendung der [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle öffnet der Client eine Verbindung und etabliert Ereignishandler.
Der Client-Browser konvertiert automatisch die Nachrichten, die im HTTP-Strom ankommen, in entsprechende [`Event`](/de/docs/Web/API/Event) Objekte. Dann liefert er sie an die Ereignishandler, die für die [`type`](/de/docs/Web/API/Event/type) dieser Ereignisse registriert sind, wenn bekannt, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, falls kein typspezifischer Ereignishandler etabliert wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist.
Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch die Einbettung von HTTP-Nachrichten in Frames zur Leistungsverbesserung etwas Komplexität hinzufügt, bleibt die Basisstruktur der Nachrichten seit HTTP/1.0 unverändert.
Der Sitzungsfluss bleibt grundlegend, was es ermöglicht, mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) untersucht und debuggt zu werden.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
