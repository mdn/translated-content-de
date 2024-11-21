---
title: Ein Überblick über HTTP
slug: Web/HTTP/Overview
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten.
Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, in der Regel dem Webbrowser.
Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Web-Dokument, das aus mehreren Ressourcen von verschiedenen Servern besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren, indem sie einzelne Nachrichten austauschen (im Gegensatz zu einem Datenstrom).
Die vom Client gesendeten Nachrichten werden als _Anfragen_ bezeichnet, und die als Antwort vom Server gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsprotokoll auf TCP (Transportebene) und IP (Netzwerkebene) und unterhalb der Präsentationsebene.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entworfen und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat.
Es ist ein Anwendungsprotokoll, das über {{Glossary("TCP", "TCP")}} oder über eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte.
Durch seine Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten, sondern auch von Bildern und Videos oder zum Senden von Inhalten an Server verwendet, wie etwa bei HTML-Formularergebnissen.
HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten HTTP-basierter Systeme

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem Benutzer-Agent (oder einem Proxy stellvertretend für diesen).
Meistens ist der Benutzer-Agent ein Webbrowser, aber es kann alles sein, zum Beispiel ein Roboter, der das Web durchforstet, um einen Suchmaschinenindex zu befüllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der diese bearbeitet und eine Antwort liefert, die als _Antwort_ bezeichnet wird.
Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die kollektiv als {{Glossary("Proxy_server", "Proxies")}} bezeichnet werden und verschiedene Operationen ausführen sowie als Gateways oder {{Glossary("Cache", "Caches")}} fungieren, zum Beispiel.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxies zu einem Server weitergeleitet wird, und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr.
Dank des schichtartigen Designs des Webs sind diese im Netzwerk und den Transporteinheiten verborgen.
HTTP ist oben, auf der Anwendungsebene.
Obwohl wichtig für die Diagnose von Netzwerkproblemen, sind die darunter liegenden Schichten für die Beschreibung von HTTP weitgehend irrelevant.

### Client: der Benutzer-Agent

Der _Benutzer-Agent_ ist jedes Tool, das im Namen des Benutzers handelt.
Diese Rolle wird hauptsächlich vom Webbrowser übernommen, kann aber auch von Programmen erfüllt werden, die von Ingenieuren und Webentwicklern zum Debuggen ihrer Anwendungen verwendet werden.

Der Browser ist **immer** die Entität, die die Anfrage initiiert.
Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um vom Server initiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine Originalanfrage, um das HTML-Dokument abzurufen, das die Seite darstellt.
Er parst dann diese Datei und stellt zusätzliche Anfragen für Ausführungsskripte, Layoutinformationen (CSS) zur Darstellung und Unterressourcen innerhalb der Seite (normalerweise Bilder und Videos).
Der Webbrowser kombiniert diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen.
Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertext-Dokument.
Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, wodurch der Benutzer seinen Benutzer-Agenten lenken und durch das Web navigieren kann.
Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert weiter die HTTP-Antworten, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Am gegenüberliegenden Ende des Kommunikationskanals steht der Server, der das Dokument bereitstellt, wie es der Client angefordert hat.
Ein Server erscheint virtuell als eine einzige Maschine; tatsächlich kann er jedoch eine Sammlung von Servern sein, die sich die Last teilen (Lastenausgleich) oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument ganz oder teilweise auf Abruf generieren.

Ein Server muss nicht unbedingt eine einzelne Maschine sein, aber mehrere Server-Softwareinstanzen können auf derselben Maschine gehostet werden.
Mit HTTP/1.1 und dem {{HTTPHeader("Host")}} Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter.
Aufgrund der schichtartigen Struktur des Web-Stacks arbeiten die meisten auf der Transport-, Netzwerk- oder physikalischen Ebene und werden auf der HTTP-Ebene transparent, was potenziell einen erheblichen Einfluss auf die Leistung haben kann.
Diejenigen, die auf der Anwendungsebene arbeiten, werden im Allgemeinen als **Proxies** bezeichnet.
Diese können transparent sein und leiten die Anfragen, die sie erhalten, weiter, ohne sie in irgendeiner Weise zu verändern, oder nicht transparent, in welchem Fall sie die Anfrage auf irgendeine Weise ändern, bevor sie sie an den Server weiterleiten.
Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filtern (wie ein Virenscan oder eine Kindersicherung)
- Lastenausgleich (um mehrere Server verschiedene Anfragen bedienen zu lassen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu steuern)
- Protokollierung (um das Speichern historischer Informationen zu ermöglichen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so konzipiert, dass es einfach und für Menschen lesbar ist, selbst mit der in HTTP/2 eingeführten Komplexität durch die Kapselung von HTTP-Nachrichten in Frames.
HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern das Testen erleichtert und die Komplexität für Neueinsteiger reduziert.

### HTTP ist erweiterbar

Mit der Einführung in HTTP/1.0 ermöglichen [HTTP-Header](/de/docs/Web/HTTP/Headers) das einfache Erweiteren und Experimentieren mit dem Protokoll.
Neue Funktionen können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keinen Zusammenhang zwischen zwei auf demselben Verbindungsequenz umgesetzten Anfragen.
Dies hat sofort die Möglichkeit, für Benutzer problematisch zu sein, die versuchen, mit bestimmten Seiten kohärent zu interagieren, zum Beispiel beim Einkaufswagen im E-Commerce.
Aber obwohl der Kern von HTTP selbst zustandslos ist, erlauben HTTP-Cookies die Verwendung zustandsbehafteter Sitzungen.
Durch die Erweiterbarkeit der Header werden HTTP-Cookies in den Workflow eingeführt, sodass bei jeder HTTP-Anfrage Sitzungen erstellt werden können, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportebene gesteuert und liegt daher grundsätzlich außerhalb des Geltungsbereichs von HTTP.
HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert lediglich, dass es _zuverlässig_ ist, also keine Nachrichten verliert (mindestens durch Ausgabe eines Fehlers in solchen Fällen).
Unter den beiden häufigsten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht.
HTTP basiert daher auf dem Verbindung basierten TCP-Standard.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Round-Trips erfordert.
Die Standardverhalten von HTTP/1.0 ist es, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen.
Dies ist weniger effizient als das Teilen einer einzelnen TCP-Verbindung, wenn mehrere Anfragen in kurzer Folge gesendet werden.

Um diesen Mangel abzumildern, führte HTTP/1.1 _Pipelining_ ein (was sich als schwierig umzusetzen erwiesen hat) und _persistente Verbindungen_: Die zugrunde liegende TCP-Verbindung kann teilweise über den {{HTTPHeader("Connection")}} Header gesteuert werden.
HTTP/2 ging noch einen Schritt weiter, indem es Nachrichten über eine einzelne Verbindung multiplexierte, was dazu beiträgt, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besser zu HTTP passendes Transportprotokoll zu entwerfen.
Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP basiert, um ein zuverlässigeres und effizienteres Transportprotokoll zu bieten.

## Was durch HTTP gesteuert werden kann

Die erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität des Webs ermöglicht.
Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der HTTP-Geschichte behandelt wurden.
Die Fähigkeit, die _Origin-Beschränkung_ zu lockern, wurde dagegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste gängiger Funktionen, die durch HTTP gesteuert werden können:

- _[Caching](/de/docs/Web/HTTP/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden.
  Der Server kann Proxies und Clients anweisen, was und wie lange zwischengespeichert werden soll.
  Der Client kann zwischengeschaltete Cache-Proxies anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockerung der Origin-Beschränkung_:
  Um Ausspähung und andere Datenschutzverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten aus dem **gleichen Ursprung** können auf alle Informationen einer Webseite zugreifen.
  Obwohl eine solche Beschränkung eine Last für den Server ist, können HTTP-Header diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Flickenteppich aus Informationen von verschiedenen Domains wird; es könnte sogar sicherheitsbezogene Gründe dafür geben.
- _Authentifizierung_:
  Einige Seiten können geschützt sein, sodass nur bestimmte Benutzer darauf zugreifen können.
  Grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder durch die Verwendung der {{HTTPHeader("WWW-Authenticate")}} und ähnlicher Header oder durch das Festlegen einer spezifischen Sitzung unter Verwendung von [HTTP-Cookies](/de/docs/Web/HTTP/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich oft in Intranets und verstecken ihre wahre IP-Adresse vor anderen Computern.
  HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überwinden.
  Nicht alle Proxies sind HTTP-Proxies.
  Das SOCKS-Protokoll, zum Beispiel, arbeitet auf einer niedrigeren Ebene.
  Andere Protokolle, wie FTP, können durch diese Proxies gehandhabt werden.
- _Sitzungen_:
  Der Einsatz von HTTP-Cookies ermöglicht es Ihnen, Anfragen mit dem Zustand des Servers zu verknüpfen.
  Dies schafft Sitzungen, obwohl grundlegendes HTTP ein zustandsloses Protokoll ist.
  Dies ist nicht nur für E-Commerce-Einkaufswagen nützlich, sondern auch für jede Webseite, die die Benutzerkonfiguration des Ausgabes ermöglicht.

## HTTP-Fluss

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem endgültigen Server oder einem zwischengeschalteten Proxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden, oder mehrere, und eine Antwort zu erhalten.
   Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar.
   Mit HTTP/2 sind diese einfachen Nachrichten in Frames gekapselt, was sie unmöglich direkt lesbar macht, aber das Prinzip bleibt dasselbe.
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

   <!doctype html>… (here come the 29769 bytes of the requested web page)
   ```

4. Schließen oder Wiederverwenden der Verbindung für weitere Anfragen.

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne dass auf den vollständigen Empfang der ersten Antwort gewartet werden muss.
Das HTTP-Pipelining hat sich in vorhandenen Netzwerken, in denen alte Softwarestücke mit modernen Versionen koexistieren, als schwierig zu implementieren erwiesen.
Das HTTP-Pipelining wurde in HTTP/2 durch robusteres Multiplexing von Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert sind, sind menschenlesbar.
In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet, was Optimierungen wie die Komprimierung von Headern und Multiplexing ermöglicht.
Selbst wenn nur ein Teil der ursprünglichen HTTP Nachricht in dieser Version von HTTP gesendet wird, bleibt die Semantik jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage.
Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Typen von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Eine HTTP-[Methode](/de/docs/Web/HTTP/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Nomen wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte.
  Typischerweise möchte ein Client eine Ressource abrufen (mittels `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn/Forms) senden (mittels `POST`), obwohl in anderen Fällen möglicherweise zusätzliche Operationen erforderlich sind.
- Der Pfad zur abzurufenden Ressource; die URL der Ressource, ohne Elemente, die aus dem Kontext offensichtlich sind, beispielsweise ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen für die Server enthalten.
- Ein Body, für einige Methoden wie `POST`, ähnlich wie in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Überblick über eine '200 OK' HTTP-Antwort auf eine GET-Anfrage einschließlich Antwortheader.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht, und warum.
- Eine Statusnachricht, eine nicht autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Headers) wie bei Anfragen.
- Optional ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die zum Erstellen von HTTP-Anfragen aus JavaScript genutzt werden kann. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine weitere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, mit dem ein Server Ereignisse an den Client senden kann, wobei HTTP als Transportmechanismus fungiert.
Unter Verwendung der [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle öffnet der Client eine Verbindung und erstellt Ereignis-Handler.
Der Clientbrowser konvertiert automatisch die auf dem HTTP-Stream eingehenden Nachrichten in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte. Anschließend übermittelt er sie den für die Ereignisse registrierten [`type`](/de/docs/Web/API/Event/type) Handlern, falls bekannt, oder dem [`onmessage`](/de/docs/Web/API/EventSource/message_event) Ereignis-Handler, wenn kein typenspezifischer Ereignis-Handler eingerichtet wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist.
Die Client-Server-Struktur, kombiniert mit der Fähigkeit, Header hinzuzufügen, ermöglicht es HTTP, sich zusammen mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Frames zur Leistungsverbesserung einige Komplexität hinzufügt, ist die Grundstruktur der Nachrichten seit HTTP/1.0 gleich geblieben.
Der Sitzungsverlauf bleibt einfach, sodass er mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) untersucht und debuggt werden kann.
