---
title: Ein Überblick über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten.
Es ist die Grundlage für jeden Datenaustausch im Web und ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, in der Regel dem Webbrowser.
Ein vollständiges Dokument wird normalerweise aus verschiedenen Ressourcen wie Textinhalt, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom).
Die vom Client gesendeten Nachrichten werden als _Anfragen_ bezeichnet, und die Antworten des Servers als _Antworten_.

![HTTP als Protokoll auf Anwendungsebene, auf TCP (Transportschicht) und IP (Netzwerkschicht) aufgebaut und unterhalb der Darstellungsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP ist ein in den frühen 1990er Jahren entwickeltes, erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat.
Es ist ein Protokoll auf Anwendungsebene, das über {{Glossary("TCP", "TCP")}} oder eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte.
Dank seiner Erweiterbarkeit kann es nicht nur für den Abruf von Hypertext-Dokumenten, sondern auch von Bildern und Videos oder zum Versenden von Inhalten an Server, wie z. B. HTML-Formulare, verwendet werden.
HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einem Entity gesendet, dem User-Agent (oder einem Proxy in dessen Namen).
Meistens ist der User-Agent ein Webbrowser, es kann jedoch alles mögliche sein, z. B. ein Roboter, der das Web durchforstet, um den Index einer Suchmaschine zu füllen und zu pflegen.

Jede individuelle Anfrage wird an einen Server gesendet, der sie bearbeitet und eine als _Antwort_ bezeichnete Antwort bereitstellt.
Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die kollektiv {{Glossary("Proxy_server", "Proxies")}} genannt werden und verschiedene Operationen ausführen und als Gateways oder {{Glossary("Cache", "Caches")}} fungieren können.

![Eine HTTP-Anfrage eines Clients, die von mehreren Proxies an einen Server weitergeleitet wird und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

Tatsächlich gibt es zwischen einem Browser und dem Server, der die Anfrage bearbeitet, mehr Computer: Es gibt Router, Modems und mehr.
Dank des geschichteten Designs des Webs sind diese im Netzwerk- und Transportlayer verborgen.
HTTP befindet sich oben, auf der Anwendungsebene.
Obwohl wichtig zur Diagnose von Netzwerkproblemen, sind die zugrunde liegenden Ebenen für die Beschreibung von HTTP größtenteils irrelevant.

### Client: der User-Agent

Der _User-Agent_ ist jedes Tool, das im Namen des Benutzers handelt.
Diese Rolle wird hauptsächlich vom Webbrowser ausgeführt, kann jedoch auch von Programmen ausgeführt werden, die von Ingenieuren und Webentwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert.
Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen eingeführt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt.
Dann analysiert er diese Datei, stellt zusätzliche Anfragen, die Ausführungsskripten, Layoutinformationen (CSS) und darin enthaltenen Unterressourcen (normalerweise Bilder und Videos) entsprechen.
Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen.
Vom Browser ausgeführte Skripte können in späteren Phasen mehr Ressourcen abrufen und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument.
Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch Klicken mit der Maus), um eine neue Webseite abzurufen und dem Benutzer zu ermöglichen, seinen User-Agent zu steuern und durch das Web zu navigieren.
Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Web-Server

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument wie vom Client angefordert _bereitstellt_.
Ein Server erscheint praktisch nur als einzelne Maschine; tatsächlich kann es sich aber um eine Sammlung von Servern handeln, die die Last gemeinsam tragen (Lastenausgleich), oder andere Software (wie Caches, einen Datenbankserver oder E-Commerce-Server), die das Dokument auf Anforderung ganz oder teilweise generiert.

Ein Server ist nicht unbedingt eine einzelne Maschine, aber mehrere Instanzen von Serversoftware können auf derselben Maschine gehostet werden.
Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter.
Aufgrund der geschichteten Struktur des Web-Stacks arbeiten die meisten von ihnen auf der Transport-, Netzwerk- oder physischen Ebene, sodass sie auf der HTTP-Ebene transparent werden und potenziell einen erheblichen Einfluss auf die Leistung haben können.
Diejenigen, die auf den Anwendungsebenen arbeiten, werden allgemein als **Proxies** bezeichnet.
Diese können transparent sein und die erhaltenen Anfragen weiterleiten, ohne sie in irgendeiner Weise zu verändern, oder nicht transparent sein, in welchem Fall sie die Anfrage in irgendeiner Weise ändern, bevor sie sie an den Server weiterleiten.
Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browsercache)
- Filterung (wie ein Virenscan oder Elternkontrolle)
- Lastenausgleich (um mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (Speichern historischer Informationen ermöglichen)

## Grundaspekte von HTTP

### HTTP ist einfach

HTTP ist allgemein so konzipiert, dass es menschenlesbar ist, sogar mit der zusätzlichen Komplexität, die durch das Kapseln von HTTP-Nachrichten in Frames in HTTP/2 eingeführt wurde.
HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern einfachere Tests und Neulingen eine reduzierte Komplexität bietet.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) dieses Protokoll einfach erweiterbar und experimentierbar.
Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keinen Zusammenhang zwischen zwei aufeinanderfolgenden Anfragen auf derselben Verbindung.
Dies hat sofort das Potenzial, für Benutzer, die versuchen, mit bestimmten Seiten kohärent zu interagieren, problematisch zu sein, z. B. bei der Verwendung von E-Commerce-Warenkörben.
Aber während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Verwendung von zustandsbehafteten Sitzungen.
Mithilfe der Erweiterbarkeit von Headern werden HTTP-Cookies dem Ablauf hinzugefügt, wodurch bei jeder HTTP-Anfrage eine Sitzung erstellt werden kann, die denselben Kontext oder denselben Zustand teilt.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht kontrolliert und liegt daher grundsätzlich außerhalb des Bereichs von HTTP.
HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert lediglich, dass es _zuverlässig_ ist oder keine Nachrichten verliert (mindestens jedoch in solchen Fällen einen Fehler anzeigt).
Unter den beiden am häufigsten verwendeten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht.
HTTP verlässt sich daher auf den verbindungsbasierten TCP-Standard.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Rundreisen erfordert.
Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen.
Dies ist weniger effizient als das Teilen einer einzigen TCP-Verbindung, wenn mehrere Anfragen in schneller Folge gesendet werden.

Um diesen Fehler zu mildern, führte HTTP/1.1 _Pipelining_ (was sich als schwierig zu implementieren erwies) und _Persistente Verbindungen_ ein: Die zugrunde liegende TCP-Verbindung kann teilweise mithilfe des {{HTTPHeader("Connection")}}-Headers gesteuert werden.
HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzige Verbindung multiplexte, was dazu beitrug, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist.
Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), welches auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP gesteuert werden kann

Diese erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität im Web ermöglicht.
Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der Geschichte von HTTP gehandhabt wurden.
Die Möglichkeit, die _Origin-Einschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von häufigen Funktionen, die mit HTTP gesteuert werden können:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden.
  Der Server kann Proxies und Clients anweisen, was zu cachen ist und wie lange.
  Der Client kann zwischengeschaltete Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockerung der Origin-Einschränkung_:
  Um Ausspähung und andere Datenschutzverstöße zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten desselben **Origins** können auf alle Informationen einer Webseite zugreifen.
  Obwohl eine solche Einschränkung für den Server eine Belastung darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern und einem Dokument erlauben, ein Flickenteppich aus Informationen von verschiedenen Domains zu werden; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_:
  Einige Seiten können so geschützt sein, dass nur bestimmte Benutzer darauf zugreifen können.
  Grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder durch die Verwendung der {{HTTPHeader("WWW-Authenticate")}} und ähnliche Header oder durch das Setzen einer bestimmten Sitzung mithilfe von [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich oft in Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern.
  HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überwinden.
  Nicht alle Proxies sind HTTP-Proxies.
  Das SOCKS-Protokoll, zum Beispiel, arbeitet auf einer niedrigeren Ebene.
  Andere Protokolle, wie FTP, können von diesen Proxies verarbeitet werden.
- _Sitzungen_:
  Durch die Verwendung von HTTP-Cookies können Anfragen mit dem Zustand des Servers verknüpft werden.
  Dies erstellt Sitzungen, obwohl das grundlegende HTTP ein zustandsloses Protokoll ist.
  Dies ist nicht nur nützlich für E-Commerce-Warenkörbe, sondern auch für jede Website, die eine Benutzerkonfiguration der Ausgabe ermöglicht.

## HTTP-Ablauf

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem Endserver oder einem zwischengeschalteten Proxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden, oder mehrere, und eine Antwort zu erhalten.
   Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar.
   Bei HTTP/2 werden diese Nachrichten in Frames gekapselt, was sie unmöglich direkt lesbar macht, aber das Prinzip bleibt dasselbe.
   Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Lesen der vom Server gesendeten Antwort, wie z. B.:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne auf den vollständigen Erhalt der ersten Antwort zu warten.
HTTP-Pipelining hat sich in bestehenden Netzwerken, in denen alte Softwarestücke mit modernen Versionen koexistieren, als schwierig zu implementieren erwiesen.
HTTP-Pipelining wurde in HTTP/2 durch ein robusteres Multiplexing von Anfragen innerhalb eines Frames abgelöst.

## HTTP-Nachrichten

HTTP-Nachrichten, wie in HTTP/1.1 und früher definiert, sind menschenlesbar.
In HTTP/2 werden diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet, die Optimierungen wie die Komprimierung von Headern und das Multiplexing ermöglicht.
Selbst wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleibt die Semantik jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage.
Es ist daher nützlich, HTTP/2-Nachrichten im Format von HTTP/1.1 zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einem HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), in der Regel ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Nomen wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte.
  Typischerweise möchte ein Client eine Ressource abrufen (unter Verwendung von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) senden (unter Verwendung von `POST`), obwohl in anderen Fällen weitere Operationen erforderlich sein können.
- Der Pfad der abzurufenden Ressource; die URL der Ressource, die von Elementen, die aus dem Kontext offensichtlich sind, bereinigt wurde, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server enthalten.
- Ein Body, für einige Methoden wie `POST`, ähnlich denen in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht über eine '200 OK'-HTTP-Antwort auf eine GET-Anfrage einschließlich der Antwortheader.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war oder nicht, und warum.
- Eine Statusmeldung, eine nicht-autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Headers](/de/docs/Web/HTTP/Reference/Headers), ähnlich denen für Anfragen.
- Optional ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API basierend auf HTTP ist die [Fetch API](/de/docs/Web/API/Fetch_API), die zur Durchführung von HTTP-Anfragen aus JavaScript verwendet werden kann. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API.

Eine andere API, [Server-sent Events](/de/docs/Web/API/Server-sent_events), ist ein einseitiger Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden und HTTP als Transportmechanismus zu nutzen.
Mit der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und stellt Ereignishandler bereit.
Der Client-Browser konvertiert die auf dem HTTP-Stream eintreffenden Nachrichten automatisch in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte. Anschließend liefert er sie an die registrierten Ereignishandler des entsprechenden [`type`](/de/docs/Web/API/Event/type), falls bekannt, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, wenn kein typspezifischer Ereignishandler festgelegt wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist.
Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, ermöglicht es HTTP, sich mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Frames zur Leistungssteigerung etwas Komplexität hinzufügt, ist die Grundstruktur der Nachrichten seit HTTP/1.0 gleich geblieben.
Der Sitzungsfluss bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
