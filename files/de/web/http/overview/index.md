---
title: Ein Überblick über HTTP
slug: Web/HTTP/Overview
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}}, um Ressourcen wie HTML-Dokumente abzurufen.
Es ist die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll, was bedeutet, dass Anfragen vom Empfänger initiiert werden, in der Regel vom Webbrowser.
Ein vollständiges Dokument wird typischerweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und mehr zusammengestellt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern besteht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren durch den Austausch einzelner Nachrichten (im Gegensatz zu einem Datenstrom).
Die Nachrichten, die vom Client gesendet werden, werden _Anfragen_ genannt, und die Nachrichten, die vom Server als Antwort gesendet werden, werden _Antworten_ genannt.

![HTTP als Anwendungsprotokoll, über TCP (Transportebene) und IP (Netzwerkebene) und unter der Präsentationsebene.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

Entworfen in den frühen 1990er Jahren, ist HTTP ein erweiterbares Protokoll, das sich im Laufe der Zeit entwickelt hat.
Es ist ein Anwendungsprotokoll, das über {{Glossary("TCP", "TCP")}} oder über eine mit {{Glossary("TLS", "TLS")}} verschlüsselte TCP-Verbindung gesendet wird, obwohl theoretisch jedes zuverlässige Transportprotokoll verwendet werden könnte.
Dank seiner Erweiterbarkeit wird es nicht nur zum Abrufen von Hypertext-Dokumenten verwendet, sondern auch zum Abrufen von Bildern und Videos oder zum Posten von Inhalten auf Servern, wie bei den Ergebnissen von HTML-Formularen.
HTTP kann auch verwendet werden, um Teile von Dokumenten abzurufen, um Webseiten auf Anfrage zu aktualisieren.

## Komponenten von HTTP-basierten Systemen

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Einheit, dem User-Agent (oder einem Proxy in seinem Namen) gesendet.
Meistens ist der User-Agent ein Webbrowser, aber es kann alles sein, zum Beispiel ein Roboter, der das Web durchsucht, um einen Suchmaschinenindex zu füllen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie bearbeitet und eine Antwort liefert, die _Antwort_ genannt wird.
Zwischen dem Client und dem Server gibt es zahlreiche Einheiten, die gemeinsam als {{Glossary("Proxy_server", "Proxies")}} bezeichnet werden und verschiedene Operationen ausführen und als Gateways oder {{Glossary("Cache", "Caches")}} agieren, zum Beispiel.

![Eine HTTP-Anfrage von einem Client wird über mehrere Proxies an einen Server weitergeleitet und eine Antwort nimmt denselben Weg zurück zum Client.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

In der Realität gibt es mehr Computer zwischen einem Browser und dem Server, der die Anfrage bearbeitet: Es gibt Router, Modems und mehr.
Dank des schichtweisen Designs des Webs sind diese im Netzwerk- und Transportlayer verborgen.
HTTP liegt obenauf, in der Anwendungsschicht.
Obwohl wichtig für die Diagnose von Netzwerkproblemen, sind die zugrunde liegenden Schichten größtenteils irrelevant für die Beschreibung von HTTP.

### Client: der User-Agent

Der _User-Agent_ ist jedes Werkzeug, das im Namen des Benutzers handelt.
Diese Rolle wird hauptsächlich vom Webbrowser ausgeführt, kann aber auch von Programmen ausgeführt werden, die von Ingenieuren und Entwicklern verwendet werden, um ihre Anwendungen zu debuggen.

Der Browser ist **immer** die Entität, die die Anfrage initiiert.
Es ist nie der Server (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, um serverinitiierte Nachrichten zu simulieren).

Um eine Webseite anzuzeigen, sendet der Browser eine ursprüngliche Anfrage, um das HTML-Dokument abzurufen, das die Seite darstellt.
Anschließend analysiert er diese Datei und stellt zusätzliche Anfragen, die den Ausführungsskripten, Layoutinformationen (CSS) zur Darstellung und in der Seite enthaltenen Unterressourcen (in der Regel Bilder und Videos) entsprechen.
Der Webbrowser kombiniert diese Ressourcen dann, um das vollständige Dokument, die Webseite, darzustellen.
Skripte, die vom Browser ausgeführt werden, können in späteren Phasen mehr Ressourcen abrufen, und der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertext-Dokument.
Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind, die aktiviert werden können (normalerweise durch einen Mausklick), um eine neue Webseite abzurufen, wodurch der Benutzer seinen User-Agent anweisen und durch das Web navigieren kann.
Der Browser übersetzt diese Anweisungen in HTTP-Anfragen und interpretiert die HTTP-Antworten weiter, um dem Benutzer eine klare Antwort zu präsentieren.

### Der Webserver

Auf der gegenüberliegenden Seite des Kommunikationskanals befindet sich der Server, der das Dokument bereitstellt, wie es vom Client angefordert wird.
Ein Server erscheint virtuell als nur eine einzige Maschine; es kann jedoch tatsächlich eine Sammlung von Servern sein, die die Last teilen (Load-Balancing), oder andere Software (wie Caches, ein Datenbankserver oder E-Commerce-Server), die das Dokument vollständig oder teilweise auf Anfrage generieren.

Ein Server muss nicht unbedingt eine einzelne Maschine sein, aber mehrere Server-Software-Instanzen können auf derselben Maschine gehostet werden.
Mit HTTP/1.1 und dem {{HTTPHeader("Host")}}-Header können sie sogar dieselbe IP-Adresse teilen.

### Proxies

Zwischen dem Webbrowser und dem Server leiten zahlreiche Computer und Maschinen die HTTP-Nachrichten weiter.
Aufgrund der geschichteten Struktur des Web-Stacks arbeiten die meisten auf der Transport-, Netzwerk- oder physikalischen Ebene und werden auf der HTTP-Ebene transparent, was möglicherweise einen erheblichen Einfluss auf die Leistung hat.
Diejenigen, die auf den Anwendungsschichten arbeiten, werden allgemein als **Proxies** bezeichnet.
Diese können transparent sein und die Empfangen weiterleiten, ohne sie in irgendeiner Weise zu ändern, oder nicht transparent, in welchem Fall sie die Anfrage in irgendeiner Weise ändern, bevor sie sie an den Server weiterleiten.
Proxies können zahlreiche Funktionen erfüllen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browsercache)
- Filterung (wie ein Virenschutz-Scan oder Kinderschutz)
- Lastverteilung (um es mehreren Servern zu ermöglichen, verschiedene Anfragen zu bedienen)
- Authentifizierung (um den Zugriff auf verschiedene Ressourcen zu kontrollieren)
- Protokollierung (Ermöglicht das Speichern von historischen Informationen)

## Grundlegende Aspekte von HTTP

### HTTP ist einfach

HTTP ist generell so konzipiert, dass es einfach und für Menschen lesbar ist, selbst mit der zusätzlichen Komplexität, die in HTTP/2 durch die Einkapselung von HTTP-Nachrichten in Frames eingeführt wurde.
HTTP-Nachrichten können von Menschen gelesen und verstanden werden, was Entwicklern ein einfacheres Testen und Neulingen eine reduzierte Komplexität ermöglicht.

### HTTP ist erweiterbar

Eingeführt in HTTP/1.0, machen [HTTP-Header](/de/docs/Web/HTTP/Headers) dieses Protokoll leicht erweiterbar und experimentierbar.
Neue Funktionalitäten können sogar durch eine Vereinbarung zwischen einem Client und einem Server über die Semantik eines neuen Headers eingeführt werden.

### HTTP ist zustandslos, aber nicht sitzungslos

HTTP ist zustandslos: Es gibt keine Verbindung zwischen zwei Anfragen, die nacheinander in derselben Verbindung durchgeführt werden.
Dies hat sofort das Potenzial, problematisch für Benutzer zu sein, die versuchen, mit bestimmten Seiten konsistent zu interagieren, zum Beispiel bei E-Commerce-Warenkörben.
Aber obwohl der Kern von HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies die Nutzung sitzungsorientierter Sitzungen.
Durch die Erweiterbarkeit der Header werden HTTP-Cookies dem Workflow hinzugefügt, wodurch die Erstellung von Sitzungen bei jeder HTTP-Anfrage ermöglicht wird, um denselben Kontext oder denselben Zustand zu teilen.

### HTTP und Verbindungen

Eine Verbindung wird in der Transportschicht gesteuert und ist daher grundsätzlich außerhalb des Anwendungsbereichs von HTTP.
HTTP erfordert nicht, dass das zugrunde liegende Transportprotokoll verbindungsorientiert ist; es erfordert nur, dass es _zuverlässig_ ist, oder keine Nachrichten verliert (mindestens jedoch in solchen Fällen einen Fehler anzeigt).
Unter den beiden häufigsten Transportprotokollen im Internet ist TCP zuverlässig und UDP nicht.
HTTP basiert daher auf dem TCP-Standard, der verbindungsorientiert ist.

Bevor ein Client und ein Server ein HTTP-Anfrage-/Antwortpaar austauschen können, müssen sie eine TCP-Verbindung herstellen, ein Prozess, der mehrere Round-Trips erfordert.
Das Standardverhalten von HTTP/1.0 besteht darin, für jedes HTTP-Anfrage-/Antwortpaar eine separate TCP-Verbindung zu öffnen.
Dies ist weniger effizient als die gemeinsame Nutzung einer einzigen TCP-Verbindung, wenn mehrere Anfragen in kurzer Abfolge gesendet werden.

Um diesen Mangel zu mildern, führte HTTP/1.1 _Pipelining_ (das sich als schwierig zu implementieren erwies) und _persistente Verbindungen_ ein: Die zugrunde liegende TCP-Verbindung kann teilweise mithilfe des {{HTTPHeader("Connection")}}-Headers gesteuert werden.
HTTP/2 ging noch einen Schritt weiter und multiplexierte Nachrichten über eine einzige Verbindung, um die Verbindung warm und effizienter zu halten.

Experiment wird an einem besseren Transportprotokoll experimentiert, das besser zu HTTP passt.
Zum Beispiel experimentiert Google mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut, um ein zuverlässigeres und effizienteres Transportprotokoll bereitzustellen.

## Was mit HTTP kontrolliert werden kann

Diese erweiterbare Natur von HTTP hat es im Laufe der Zeit erlaubt, mehr Kontrolle und Funktionalität des Webs zu bieten.
Cache- und Authentifizierungsmethoden wurden früh in der HTTP-Geschichte eingeführt.
Die Fähigkeit, die _Origin-Beschränkung_ zu lockern, wurde hingegen erst in den 2010er Jahren hinzugefügt.

Hier ist eine Liste von häufigen Funktionen, die mit HTTP kontrollierbar sind:

- _[Caching](/de/docs/Web/HTTP/Caching)_:
  Wie Dokumente zwischengespeichert werden, kann durch HTTP kontrolliert werden.
  Der Server kann Proxies und Clients anweisen, was zwischengespeichert werden soll und wie lange.
  Der Client kann Zwischen-Caches anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockerung der Origin-Beschränkung_:
  Um Abhörversuche und andere Datenschutzverletzungen zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten mit demselben **Ursprung** können auf alle Informationen einer Webseite zugreifen.
  Obwohl eine solche Beschränkung eine Belastung für den Server darstellt, können HTTP-Header diese strikte Trennung auf der Serverseite lockern, sodass ein Dokument zu einem Flickwerk von Informationen aus verschiedenen Domains werden kann; es könnte sogar sicherheitsrelevante Gründe dafür geben.
- _Authentifizierung_:
  Einige Seiten können geschützt sein, sodass nur bestimmte Benutzer auf sie zugreifen können.
  Grundlegende Authentifizierung kann durch HTTP bereitgestellt werden, entweder unter Verwendung der {{HTTPHeader("WWW-Authenticate")}} und ähnlichen Headern oder durch Festlegung einer spezifischen Sitzung mit [HTTP-Cookies](/de/docs/Web/HTTP/Cookies).
- _[Proxy und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich häufig in Intranets und verstecken ihre wahre IP-Adresse vor anderen Computern.
  HTTP-Anfragen gehen dann durch Proxies, um diese Netzwerkbarriere zu überwinden.
  Nicht alle Proxies sind HTTP-Proxies.
  Das SOCKS-Protokoll beispielsweise arbeitet auf einer niedrigeren Ebene.
  Andere Protokolle, wie ftp, können von diesen Proxies gehandhabt werden.
- _Sitzungen_:
  Durch die Verwendung von HTTP-Cookies können Anfragen mit dem Zustand des Servers verknüpft werden.
  Dies erstellt Sitzungen, obwohl das grundlegende HTTP-Protokoll zustandslos ist.
  Dies ist nicht nur nützlich für E-Commerce-Warenkörbe, sondern auch für jede Website, die dem Benutzer eine Anpassung der Ausgabe ermöglicht.

## HTTP-Ablauf

Wenn ein Client mit einem Server kommunizieren möchte, entweder dem endgültigen Server oder einem Zwischenproxy, führt er die folgenden Schritte aus:

1. Öffnen einer TCP-Verbindung: Die TCP-Verbindung wird verwendet, um eine Anfrage oder mehrere zu senden und eine Antwort zu erhalten.
   Der Client kann eine neue Verbindung öffnen, eine bestehende Verbindung wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Senden einer HTTP-Nachricht: HTTP-Nachrichten (vor HTTP/2) sind menschenlesbar.
   Mit HTTP/2 werden diese einfachen Nachrichten in Frames gekapselt, was sie unmöglich direkt lesbar macht, aber das Prinzip bleibt das gleiche.
   Zum Beispiel:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne auf die vollständige Empfangsbestätigung der ersten Antwort zu warten.
Das HTTP-Pipelining hat sich in bestehenden Netzwerken, in denen alte Softwareteile mit modernen Versionen koexistieren, als schwer zu implementieren erwiesen.
Das HTTP-Pipelining wurde in HTTP/2 durch robustere Multiplexing-Anfragen innerhalb eines Frames ersetzt.

## HTTP-Nachrichten

HTTP-Nachrichten, wie in HTTP/1.1 und früher definiert, sind menschenlesbar.
In HTTP/2 sind diese Nachrichten in einer binären Struktur, einem _Frame_, eingebettet, was Optimierungen wie Kompression von Headern und Multiplexing ermöglicht.
Auch wenn nur ein Teil der ursprünglichen HTTP-Nachricht in dieser Version von HTTP gesendet wird, bleibt die Semantik jeder Nachricht unverändert und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage.
Es ist daher nützlich, HTTP/2-Nachrichten im HTTP/1.1-Format zu verstehen.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jede mit ihrem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Übersicht über eine HTTP GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Ein [HTTP-Methoden](/de/docs/Web/HTTP/Methods), normalerweise ein Verb wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder ein Nomen wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die Operation definiert, die der Client ausführen möchte.
  Typischerweise möchte ein Client eine Ressource abrufen (mithilfe von `GET`) oder den Wert eines [HTML-Formulars](/de/docs/Learn_web_development/Erweiterungen/Forms) übermitteln (mithilfe von `POST`), obwohl in anderen Fällen mehr Operationen erforderlich sein können.
- Der Pfad der Ressource, die abgerufen werden soll; Die URL der Ressource ohne offensichtliche Elemente des Kontexts, zum Beispiel ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier, `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier, `80`).
- Die Version des HTTP-Protokolls.
- Optionale [Header](/de/docs/Web/HTTP/Headers), die zusätzliche Informationen für die Server übermitteln.
- Ein Body, für einige Methoden wie `POST`, ähnlich wie in Antworten, die die gesendete Ressource enthält.

### Antworten

Ein Beispiel für eine Antwort:

![Übersicht über eine '200 OK' HTTP-Antwort auf eine GET-Anfrage einschließlich Antwort-Headern.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Die Version des von ihnen verwendeten HTTP-Protokolls.
- Ein [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder nicht, und warum.
- Eine Statusmeldung, eine nicht autoritative Kurzbeschreibung des Statuscodes.
- HTTP-[Header](/de/docs/Web/HTTP/Headers), ähnlich wie bei Anfragen.
- Optional ein Body, der die abgerufene Ressource enthält.

## APIs basierend auf HTTP

Die am häufigsten verwendete API basierend auf HTTP ist die [Fetch API](/de/docs/Web/API/Fetch_API), die verwendet werden kann, um HTTP-Anfragen von JavaScript aus zu stellen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API.

Eine andere API, [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, der es einem Server ermöglicht, Ereignisse an den Client zu senden, wobei HTTP als Transportmechanismus verwendet wird.
Mit der Verwendung der Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) öffnet der Client eine Verbindung und stellt Ereignishandler her.
Der Clientbrowser konvertiert die Nachrichten, die im HTTP-Stream ankommen, automatisch in entsprechende [`Event`](/de/docs/Web/API/Event)-Objekte. Dann liefert er sie an die registrierten Ereignishandler für den vom Ereignis bekannten [`typ`](/de/docs/Web/API/Event/type), oder an den [`onmessage`](/de/docs/Web/API/EventSource/message_event)-Ereignishandler, falls kein typenspezifischer Ereignishandler erstellt wurde.

## Fazit

HTTP ist ein erweiterbares Protokoll, das einfach zu bedienen ist.
Die Client-Server-Struktur in Kombination mit der Möglichkeit, Header hinzuzufügen, erlaubt es HTTP, sich zusammen mit den erweiterten Fähigkeiten des Webs weiterzuentwickeln.

Obwohl HTTP/2 durch das Einbetten von HTTP-Nachrichten in Frames zur Verbesserung der Leistung einige Komplexität hinzufügt, ist die grundlegende Struktur von Nachrichten seit HTTP/1.0 gleich geblieben.
Der Sitzungsablauf bleibt grundlegend, was es ermöglicht, ihn mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zu untersuchen und zu debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
