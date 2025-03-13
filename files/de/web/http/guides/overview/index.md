---
title: Eine Übersicht über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten. Es ist die Grundlage aller Datenaustauschvorgänge im Web und ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, in der Regel vom Webbrowser. Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengestellt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch von individuellen Nachrichten (im Gegensatz zu einem Datenstrom). Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Anwendungsprotokoll-Schicht, das auf TCP (Transportschicht) und IP (Netzwerkschicht) aufbaut und unter der Darstellungsschicht liegt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP, in den frühen 1990er Jahren entwickelt, ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat. Es ist ein Anwendungsprotokoll, das über {{Glossary("TCP", "TCP")}} oder über eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte. Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertextdokumenten, sondern auch von Bildern und Videos oder zum Übermitteln von Inhalten an Server verwendet, wie es beispielsweise bei HTML-Formularergebnissen der Fall ist. HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem User-Agent (oder einem Proxy in dessen Auftrag). Meistens ist der User-Agent ein Webbrowser, aber es kann alles sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und auf dem neuesten Stand zu halten.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort liefert, die _Response_ genannt wird. Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, zusammen als {{Glossary("Proxy_server", "Proxies")}} bekannt, die verschiedene Operationen durchführen und als Gateways oder {{Glossary("Cache", "Caches")}} agieren, zum Beispiel.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxys an einen Server weitergeleitet wird, und eine Antwort, die denselben Weg zurück zum Client nimmt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr. Dank des geschichteten Designs des Webs sind diese im Netzwerk und in den Transportschichten versteckt. HTTP befindet sich oben, in der Anwendungsschicht. Obwohl sie wichtig für die Diagnose von Netzwerkproblemen sind, sind die zugrunde liegenden Schichten für die Beschreibung von HTTP meistens irrelevant.

### Client: der User-Agent

Der _User-Agent_ ist jedes Werkzeug, das im Auftrag des Benutzers handelt. Diese Rolle wird in erster Linie vom Webbrowser ausgefüllt, kann aber auch von Programmen ausgeführt werden, die von Ingenieuren und Webentwicklern zur Debugging ihren Anwendungen verwendet werden.

Der Browser ist **immer** die Entität, die die Anfrage initiiert. Es ist nie der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt. Er analysiert dann diese Datei und stellt zusätzliche Anfragen, die den Ausführungsskripten, Layoutinformationen (CSS) zur Anzeige und den in der Seite enthaltenen Unterressourcen (in der Regel Bilder und Videos) entsprechen. Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, darzustellen. Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument. Dies bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (in der Regel durch einen Mausklick), um eine neue Webseite abzurufen, sodass der Benutzer seinen User-Agent anweisen und durch das Web navigieren kann. Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das angeforderte Dokument _serviert_. Ein Server erscheint als nur eine einzelne Maschine virtuell; aber es kann tatsächlich eine Sammlung von Servern sein, die die Last teilen (Lastverteilung) oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument vollständig oder teilweise bei Bedarf generieren.

Ein Server ist nicht unbedingt eine einzelne Maschine, aber mehrere Server-Software-Instanzen können auf derselben Maschine gehostet werden. Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter. Aufgrund der geschichteten Struktur des Web-Stapels arbeiten die meisten dieser auf den Transport-, Netzwerk- oder physischen Ebenen, werden auf der HTTP-Ebene transparent und können einen erheblichen Einfluss auf die Leistung haben. Diejenigen, die auf den Anwendungsebenen arbeiten, werden im Allgemeinen **Proxies** genannt. Diese können transparent sein, indem sie die Anfragen, die sie erhalten, weiterleiten, ohne sie in irgendeiner Weise zu ändern, oder nicht transparent, wobei sie in diesem Fall die Anfrage in irgendeiner Weise ändern, bevor sie sie an den Server weiterleiten. Proxies können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenscanner oder Kindersicherungen)
- Lastverteilung (um es mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (zur Kontrolle des Zugriffs auf verschiedene Ressourcen)
- Protokollierung (Ermöglichung der Speicherung historischer Informationen)

## Wichtige Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen als einfach und menschenlesbar konzipiert, selbst mit der zusätzlichen Komplexität, die durch das Einkapseln von HTTP-Nachrichten in Rahmen in HTTP/2 eingeführt wurde. HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern einfachere Tests ermöglicht und die Komplexität für Neulinge reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0 machen [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) dieses Protokoll leicht erweiterbar und experimentierfreudig. Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei Anfragen, die nacheinander über dieselbe Verbindung durchgeführt werden. Das hat sofort das Potenzial, problematisch für Benutzer zu sein, die versuchen, mit bestimmten Seiten kohärent zu interagieren, zum Beispiel unter Verwendung von E-Commerce-Warenkörben. Aber während der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Verwendung von zustandsbehafteten Sitzungen. Durch die Erweiterung der Header werden HTTP-Cookies zum Arbeitsablauf hinzugefügt, wodurch das Erstellen von Sitzungen bei jeder HTTP-Anfrage ermöglicht wird, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und ist daher grundsätzlich außerhalb des Geltungsbereichs von HTTP. HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert nur, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens, indem es in solchen Fällen einen Fehler anzeigt). Unter den beiden am häufigsten verwendeten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht. Daher verlässt sich HTTP auf den TCP-Standard, der verbindungsorientiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Runden-Trips erfordert. Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen. Dies ist weniger effizient als das Teilen einer einzelnen TCP-Verbindung, wenn mehrere Anfragen in kurzer Folge gesendet werden.

Um diesen Mangel abzumildern, hat HTTP/1.1 _Pipelining_ eingeführt (was sich als schwierig umzusetzen erwies) und _persistente Verbindungen_: Die zugrunde liegende TCP-Verbindung kann teilweise kontrolliert werden, indem der {{HTTPHeader("Connection")}}-Header verwendet wird. HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzelne Verbindung multiplexte, was dazu beiträgt, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besseres Transportprotokoll zu entwerfen, das besser für HTTP geeignet ist. Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was von HTTP gesteuert werden kann

Die erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität des Webs ermöglicht. Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der HTTP-Geschichte behandelt wurden. Die Fähigkeit, die _Origin-Beschränkung_ zu lockern, wurde dagegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von gängigen Features, die mit HTTP steuerbar sind:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_: Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden. Der Server kann Proxys und Clients anweisen, was zu cachen ist und wie lange. Der Client kann Zwischen-Cache-Proxys anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockern der Origin-Beschränkung_: Um das Ausspähen und andere Datenschutzverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites. Nur Seiten von derselben **Origin** können auf alle Informationen einer Webseite zugreifen. Obwohl eine solche Beschränkung eine Belastung für den Server darstellt, können HTTP-Header diese strenge Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Flickenteppich aus Informationen werden kann, die aus verschiedenen Domains stammen; es könnte sogar sicherheitsbezogene Gründe dafür geben.
- _Authentifizierung_: Einige Seiten können geschützt sein, sodass nur bestimmte Benutzer auf sie zugreifen können. Die grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder mit dem {{HTTPHeader("WWW-Authenticate")}}-Header und ähnlichen Headern oder durch das Festlegen einer bestimmten Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_: Server oder Clients befinden sich oft in Intranets und verbergen ihre wahre IP-Adresse vor anderen Computern. HTTP-Anfragen gehen dann durch Proxys, um diese Netzwerkschranke zu überwinden. Nicht alle Proxys sind HTTP-Proxys. Das SOCKS-Protokoll, zum Beispiel, operiert auf einer niedrigeren Ebene. Auch andere Protokolle, wie ftp, können von diesen Proxys behandelt werden.
- _Sitzungen_: Mit HTTP-Cookies können Sie Anfragen mit dem Zustand des Servers verknüpfen. Dadurch werden Sitzungen erstellt, obwohl das grundlegende HTTP ein zustandsloses Protokoll ist. Dies ist nicht nur für E-Commerce-Warenkörbe nützlich, sondern auch für jede Website, die es Benutzern ermöglicht, die Ausgabe zu konfigurieren.

## HTTP-Fluss

Wenn ein Client mit einem Server, entweder dem End-Server oder einem Zwischenproxy, kommunizieren möchte, führt er die folgenden Schritte aus:

1. Eine TCP-Verbindung öffnen: Die TCP-Verbindung wird verwendet, um eine Anfrage zu senden oder mehrere und eine Antwort zu erhalten. Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung erneut verwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Eine HTTP-Nachricht senden: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar. Mit HTTP/2 werden diese einfachen Nachrichten in Rahmen gekapselt, wodurch sie unmöglich direkt zu lesen sind, aber das Prinzip bleibt dasselbe. Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Die vom Server gesendete Antwort lesen, beispielsweise:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne auf die vollständige Antwort zu warten. HTTP-Pipelining hat sich in bestehenden Netzwerken, in denen alte Softwarestücke mit modernen Versionen koexistieren, als schwer umsetzbar erwiesen. HTTP-Pipelining wurde in HTTP/2 durch ein robusteres Multiplexing von Anfragen innerhalb eines Rahmens ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie in HTTP/1.1 und früher definiert, sind menschenlesbar. In HTTP/2 sind diese Nachrichten in eine binäre Struktur, einen _Rahmen_, eingebettet, was Optimierungen wie die Komprimierung von Headern und Multiplexing ermöglicht. Selbst wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleiben die Semantiken jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage. Daher ist es hilfreich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einer HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte. Typischerweise möchte ein Client eine Ressource abrufen (mit `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) senden (mit `POST`), obwohl in anderen Fällen mehr Operationen erforderlich sein können.
- Der Pfad der abzurufenden Ressource; die URL der Ressource, bereinigt von Elementen, die aus dem Kontext offensichtlich sind, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für die Server übermitteln.
- Einen Rumpf für einige Methoden wie `POST`, ähnlich wie bei den Antworten, der die gesendete Ressource enthält.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht über eine "200 OK" HTTP-Antwort auf eine GET-Anfrage einschließlich Antwort-Header.] (https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder nicht, und warum.
- Eine Statusnachricht, eine nicht autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Reference/Headers), ähnlich wie bei Anfragen.
- Optional einen Rumpf mit der abgerufenen Ressource.

## APIs basierend auf HTTP

Die am häufigsten verwendete API basierend auf HTTP ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen von JavaScript aus zu stellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine andere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, indem HTTP als Transportmechanismus verwendet wird. Mit der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und etabliert Ereignishandler. Der Clientbrowser konvertiert automatisch die Nachrichten, die im HTTP-Stream ankommen, in passende [`Event`](/de/docs/Web/API/Event)-Objekte. Anschließend übermittelt er sie an die Ereignishandler, die für den bekannten [`type`](/de/docs/Web/API/Event/type) der Ereignisse registriert wurden, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, wenn kein typspezifischer Ereignishandler eingerichtet wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist. Die Client-Server-Struktur, kombiniert mit der Fähigkeit, Header hinzuzufügen, ermöglicht es HTTP, sich mit den erweiterten Fähigkeiten des Webs fortzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Rahmen, um die Leistung zu verbessern, einige Komplexität hinzufügt, hat sich die grundlegende Struktur der Nachrichten seit HTTP/1.0 nicht geändert. Der Sitzungsfluss bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
