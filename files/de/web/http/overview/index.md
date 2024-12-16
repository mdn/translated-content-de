---
title: Ein Überblick über HTTP
slug: Web/HTTP/Overview
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten.
Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, normalerweise dem Webbrowser.
Ein vollständiges Dokument wird in der Regel aus Ressourcen wie Textinhalt, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren, indem sie einzelne Nachrichten austauschen (im Gegensatz zu einem Datenstrom).
Die vom Client gesendeten Nachrichten werden _Anfragen_ genannt, und die vom Server als Antwort gesendeten Nachrichten werden _Antworten_ genannt.

![HTTP als Protokoll der Anwendungsschicht, auf TCP (Transportschicht) und IP (Netzwerkschicht) aufbauend und unter der Präsentationsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde in den frühen 1990er Jahren entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit entwickelt hat.
Es ist ein Protokoll der Anwendungsschicht, das über {{Glossary("TCP", "TCP")}} oder eine {{Glossary("TLS", "TLS")}}-verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte.
Aufgrund seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten, sondern auch von Bildern und Videos oder zum Senden von Inhalten an Server, wie z.B. bei HTML-Formularergebnissen, genutzt.
HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem Benutzeragenten (oder einem Proxy in dessen Namen).
Meistens ist der Benutzeragent ein Webbrowser, aber er kann auch alles Mögliche sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort gibt, die als _Antwort_ bezeichnet wird.
Zwischen dem Client und dem Server gibt es zahlreiche Entitäten, die gemeinsam als {{Glossary("Proxy_server", "Proxys")}} bezeichnet werden und verschiedene Operationen durchführen und als Gateways oder {{Glossary("Cache", "Caches")}} fungieren.

![Eine HTTP-Anfrage von einem Client, die von mehreren Proxys an einen Server weitergeleitet und auf demselben Weg zurück an den Client gesendet wird.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In Wirklichkeit gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr.
Dank des geschichteten Aufbaus des Webs sind diese in den Netzwerk- und Transportschichten verborgen.
HTTP befindet sich oben, in der Anwendungsschicht.
Obwohl sie für die Diagnose von Netzwerkproblemen wichtig sind, sind die zugrunde liegenden Schichten für die Beschreibung von HTTP meist irrelevant.

### Client: der Benutzeragent

Der _Benutzeragent_ ist jedes Werkzeug, das im Namen des Benutzers handelt.
Diese Rolle wird hauptsächlich vom Webbrowser übernommen, kann aber auch von Programmen ausgeführt werden, die von Ingenieuren und Webentwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert.
Es ist niemals der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt.
Er analysiert dann diese Datei und stellt zusätzliche Anfragen, die Ausführungsskripte, Layoutinformationen (CSS) zum Anzeigen und Unterressourcen, die auf der Seite enthalten sind (normalerweise Bilder und Videos), betreffen.
Der Webbrowser kombiniert dann diese Ressourcen, um das vollständige Dokument, die Webseite, zu präsentieren.
Skripte, die vom Browser ausgeführt werden, können in späteren Phasen weitere Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument.
Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen und es dem Benutzer ermöglichen, seinen Benutzeragenten zu steuern und durch das Web zu navigieren.
Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der anderen Seite des Kommunikationskanals befindet sich der Server, der das Dokument gemäß den Anforderungen des Clients _bereitstellt_.
Ein Server erscheint virtuell als nur eine Maschine; es kann jedoch tatsächlich eine Sammlung von Servern sein, die die Last gemeinsam bewältigen (Lastverteilung) oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument vollständig oder teilweise nach Bedarf generieren.

Ein Server muss nicht unbedingt eine einzelne Maschine sein, aber mehrere Serverinstanzen können auf derselben Maschine gehostet werden.
Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxys

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter.
Aufgrund der geschichteten Struktur des Web-Stacks arbeiten die meisten von ihnen auf den Transport-, Netzwerk- oder physikalischen Ebenen und werden auf der HTTP-Ebene transparent, was potenziell einen erheblichen Einfluss auf die Leistung haben kann.
Diejenigen, die auf den Anwendungsebenen arbeiten, werden im Allgemeinen **Proxys** genannt.
Diese können transparent sein, indem sie die empfangenen Anfragen weiterleiten, ohne sie in irgendeiner Weise zu ändern, oder nicht transparent, in welchem Fall sie die Anfrage auf irgendeine Weise ändern, bevor sie an den Server weitergeleitet wird.
Proxys können zahlreiche Funktionen ausführen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (wie ein Virenscan oder Kindersicherung)
- Lastverteilung (um mehreren Servern unterschiedliche Anfragen zu ermöglichen)
- Authentifizierung (um den Zugang zu verschiedenen Ressourcen zu kontrollieren)
- Protokollierung (um die Speicherung historischer Informationen zu ermöglichen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist im Allgemeinen so konzipiert, dass es einfach und menschenlesbar ist, auch mit der hinzugefügten Komplexität, die in HTTP/2 durch das Einkapseln von HTTP-Nachrichten in Frames eingeführt wird.
HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern das Testen erleichtert und die Komplexität für Neulinge reduziert.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Headers) dieses Protokoll leicht erweiterbar und experimentierfähig.
Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Bedeutung eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungsfrei

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei aufeinanderfolgenden Anfragen innerhalb derselben Verbindung.
Dies könnte sich sofort als problematisch herausstellen für Benutzer, die versuchen, kohärent mit bestimmten Seiten zu interagieren, zum Beispiel mit E-Commerce-Einkaufswagen.
Aber während der Kern von HTTP selbst zustandslos ist, erlauben HTTP-Cookies die Nutzung von zustandsbehafteten Sitzungen.
Durch die Erweiterbarkeit der Header werden HTTP-Cookies in den Arbeitsablauf eingefügt, sodass bei jeder HTTP-Anfrage eine Sitzung erstellt werden kann, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt daher grundsätzlich außerhalb des Geltungsbereichs von HTTP.
HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsbasiert ist; es erfordert lediglich, dass es _zuverlässig_ ist, also keine Nachrichten verliert (zumindest sollte in solchen Fällen ein Fehler angezeigt werden).
Unter den beiden gebräuchlichsten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht.
HTTP verlässt sich daher auf den Standard TCP, der verbindungsbasiert ist.

Bevor ein Client und ein Server ein HTTP-Anfragen-/Antworten-Paar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Vorgang, der mehrere Rundreisen erfordert.
Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfragen-/Antworten-Paar eine separate TCP-Verbindung zu öffnen.
Dies ist weniger effizient als die gemeinsame Nutzung einer einzigen TCP-Verbindung, wenn mehrere Anfragen in engem zeitlichem Zusammenhang gesendet werden.

Um diesen Mangel zu mildern, hat HTTP/1.1 _Pipelining_ (was sich als schwierig zu implementieren erwiesen hat) und _persistente Verbindungen_ eingeführt: Die zugrunde liegende TCP-Verbindung kann teilweise mit dem {{HTTPHeader("Connection")}}-Header gesteuert werden.
HTTP/2 ging einen Schritt weiter, indem es Nachrichten über eine einzige Verbindung multiplexte, was hilft, die Verbindung warm und effizienter zu halten.

Experimente sind im Gange, um ein besser an HTTP angepasstes Transportprotokoll zu entwerfen.
Beispielsweise experimentiert Google mit [QUIC](https://de.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was durch HTTP gesteuert werden kann

Die erweiterbare Natur von HTTP hat im Laufe der Zeit mehr Kontrolle und Funktionalität im Web ermöglicht.
Cache- und Authentifizierungsmethoden waren Funktionen, die früh in der Geschichte von HTTP behandelt wurden.
Die Fähigkeit zur Entspannung der _Origin-Beschränkung_, im Gegensatz dazu, wurde erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste der häufigen Funktionen, die mit HTTP gesteuert werden können:

- _[Caching](/de/docs/Web/HTTP/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP gesteuert werden.
  Der Server kann Proxys und Clients anweisen, was wie lange zu cachen ist.
  Der Client kann Intermediate-Cache-Proxys anweisen, das gespeicherte Dokument zu ignorieren.
- _Entspannung der Origin-Beschränkung_:
  Um Spionage und andere Datenschutzverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten von **derselben Herkunft** können auf alle Informationen einer Webseite zugreifen.
  Obwohl eine solche Beschränkung für den Server eine Belastung darstellt, können HTTP-Header diese strikte Trennung auf Serverseite lockern und es einem Dokument ermöglichen, ein Flickenteppich von Informationen aus verschiedenen Bereichen zu werden; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_:
  Einige Seiten können geschützt sein, sodass nur bestimmte Benutzer darauf zugreifen können.
  Die grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder unter Verwendung der {{HTTPHeader("WWW-Authenticate")}}- und ähnlicher Header oder durch das Festlegen einer bestimmten Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Cookies).
- _[Proxy- und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich oft in Intranets und verbergen ihre echte IP-Adresse vor anderen Computern.
  HTTP-Anfragen gehen dann durch Proxys, um diese Netzwerkbarriere zu überwinden.
  Nicht alle Proxys sind HTTP-Proxys.
  Das SOCKS-Protokoll arbeitet beispielsweise auf einer niedrigeren Ebene.
  Andere Protokolle, wie ftp, können von diesen Proxys verarbeitet werden.
- _Sitzungen_:
  Die Verwendung von HTTP-Cookies ermöglicht es, Anfragen mit dem Zustand des Servers zu verknüpfen.
  Dies schafft Sitzungen, trotz des grundlegenden zustandslosen Protokolls von HTTP.
  Dies ist nicht nur für E-Commerce-Einkaufswagen nützlich, sondern auch für jede Website, die eine Benutzerkonfiguration der Ausgabe erlaubt.

## HTTP-Fluss

Wenn ein Client mit einem Server kommunizieren möchte, entweder mit dem Endserver oder einem Zwischenproxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird genutzt, um eine Anfrage oder mehrere Anfragen zu senden und eine Antwort zu erhalten.
   Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar.
   Bei HTTP/2 werden diese einfachen Nachrichten in Frames gekapselt, was sie unmöglich macht, direkt zu lesen, aber das Prinzip bleibt das gleiche.
   Ein Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Lesen der vom Server gesendeten Antwort, wie etwa:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne darauf zu warten, dass die erste Antwort vollständig empfangen wird.
HTTP-Pipelining hat sich als schwierig zu implementieren erwiesen in bestehenden Netzwerken, wo alte Softwarestücke mit modernen Versionen koexistieren.
HTTP-Pipelining wurde in HTTP/2 durch robusteres Multiplexen von Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früher definiert sind, sind menschlich lesbar.
In HTTP/2 werden diese Nachrichten in eine binäre Struktur, ein _Frame_, eingebettet, was Optimierungen wie Komprimierung von Headern und Multiplexing ermöglicht.
Auch wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleiben die Semantiken jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage.
Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einer HTTP-[Methode](/de/docs/Web/HTTP/Methods), üblicherweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder ein Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die vom Client gewünschte Operation definiert.
  In der Regel möchte ein Client eine Ressource abrufen (unter Verwendung von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn/Forms) senden (unter Verwendung von `POST`), obwohl in anderen Fällen weitere Operationen erforderlich sein können.
- Der Pfad der abzurufenden Ressource; die URL der Ressource, bereinigt von Elementen, die aus dem Kontext offensichtlich sind, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen an die Server übermitteln.
- Ein Body, für einige Methoden wie `POST`, ähnlich denen in Antworten, die die gesendete Ressource enthalten.

### Antworten

Ein Beispiel für eine Antwort:

![Überblick über eine '200 OK' HTTP-Antwort auf eine GET-Anfrage einschließlich Antwort-Headern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des HTTP-Protokolls, dem sie folgen.
- Ein [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht und warum.
- Eine Statusnachricht, eine nicht-autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Headers), ähnlich denen für Anfragen.
- Optional, einen Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API, die auf HTTP basiert, ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen von JavaScript aus zu stellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) API.

Eine weitere API, [server-sent events](/de/docs/Web/API/Server-sent_events), ist ein Einwegdienst, mit dem ein Server Ereignisse an den Client senden kann, wobei HTTP als Transportschicht verwendet wird.
Mit der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle öffnet der Client eine Verbindung und richtet Ereignis-Handler ein.
Der Client-Browser wandelt die Nachrichten, die auf dem HTTP-Datenstrom ankommen, automatisch in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte um. Dann werden sie an die Ereignis-Handler geliefert, die für die bekannten [`type`](/de/docs/Web/API/Event/type) der Ereignisse registriert wurden, oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignis-Handler, wenn kein typspezifischer Ereignis-Handler eingerichtet wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu verwenden ist.
Die Client-Server-Struktur, kombiniert mit der Möglichkeit, Header hinzuzufügen, erlaubt es HTTP, sich zusammen mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Frames zur Verbesserung der Leistung einige Komplexität hinzufügt, hat sich die grundlegende Struktur der Nachrichten seit HTTP/1.0 nicht geändert.
Der Sitzungsablauf bleibt einfach, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
