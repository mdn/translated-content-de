---
title: Überblick über HTTP
slug: Web/HTTP/Guides/Overview
l10n:
  sourceCommit: a3400c39a245e0404c621c2cdbe75ad0a3eb8672
---

**HTTP** ist ein {{Glossary("protocol", "Protokoll")}} zum Abrufen von Ressourcen wie HTML-Dokumenten.
Es bildet die Grundlage für jeden Datenaustausch im Web und ist ein Client-Server-Protokoll. Das bedeutet, dass Anfragen vom Empfänger der Daten initiiert werden, in der Regel vom Webbrowser.
Ein vollständiges Dokument wird üblicherweise aus Ressourcen wie Textinhalten, Layoutanweisungen, Bildern, Videos, Skripten und weiteren Bestandteilen zusammengesetzt.

![Ein einzelnes Webdokument, das aus mehreren Ressourcen von verschiedenen Servern zusammengesetzt ist.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)

Clients und Server kommunizieren, indem sie einzelne Nachrichten austauschen (im Gegensatz zu einem kontinuierlichen Datenstrom).
Die vom Client gesendeten Nachrichten heißen _Anfragen_ und die vom Server als Antwort gesendeten Nachrichten _Antworten_.

![HTTP als Protokoll der Anwendungsschicht, oberhalb von TCP (Transportschicht) und IP (Netzwerkschicht) und unterhalb der Darstellungsschicht.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-layers.svg)

HTTP wurde Anfang der 1990er-Jahre entwickelt und ist ein erweiterbares Protokoll, das sich im Laufe der Zeit weiterentwickelt hat.
Es ist ein Protokoll der Anwendungsschicht, das über {{Glossary("TCP", "TCP")}} oder über eine mit {{Glossary("TLS", "TLS")}} verschlüsselte TCP-Verbindung übertragen wird. Theoretisch könnte jedoch jedes zuverlässige Transportprotokoll verwendet werden.
Dank seiner Erweiterbarkeit dient es nicht nur zum Abrufen von Hypertextdokumenten, sondern auch von Bildern und Videos sowie zum Übermitteln von Inhalten an Server, etwa von Ergebnissen aus HTML-Formularen.
Mit HTTP lassen sich außerdem Teile von Dokumenten abrufen, um Webseiten bei Bedarf zu aktualisieren.

## Komponenten HTTP-basierter Systeme

HTTP ist ein Client-Server-Protokoll: Anfragen werden von einer Entität gesendet, dem User-Agent (oder einem Proxy, der in dessen Auftrag handelt).
Meistens ist der User-Agent ein Webbrowser. Es kann sich aber auch um ein anderes Programm handeln, beispielsweise einen Crawler, der das Web durchsucht, um den Index einer Suchmaschine aufzubauen und zu pflegen.

Jede einzelne Anfrage wird an einen Server gesendet, der sie verarbeitet und eine _Antwort_ bereitstellt.
Zwischen Client und Server befinden sich zahlreiche Entitäten, die zusammenfassend als {{Glossary("Proxy_server", "Proxys")}} bezeichnet werden. Sie führen verschiedene Aufgaben aus und fungieren beispielsweise als Gateways oder {{Glossary("Cache", "Caches")}}.

![Eine HTTP-Anfrage eines Clients, die von mehreren Proxys an einen Server weitergeleitet wird, und eine Antwort, die auf demselben Weg zum Client zurückkehrt.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/client-server-chain.svg)

Tatsächlich befinden sich zwischen einem Browser und dem Server, der die Anfrage verarbeitet, noch weitere Geräte, darunter Router und Modems.
Dank des Schichtenmodells des Webs bleiben diese in der Netzwerk- und Transportschicht verborgen.
HTTP befindet sich darüber, in der Anwendungsschicht.
Die darunterliegenden Schichten sind zwar für die Diagnose von Netzwerkproblemen wichtig, für die Beschreibung von HTTP aber größtenteils unerheblich.

### Client: der User-Agent

Der _User-Agent_ ist ein beliebiges Werkzeug, das im Auftrag der Benutzerin oder des Benutzers handelt.
Diese Rolle übernimmt hauptsächlich der Webbrowser, aber auch Programme, mit denen Fachleute und Webentwickler ihre Anwendungen debuggen, können sie erfüllen.

Der Browser ist **immer** die Entität, die eine Anfrage initiiert.
Der Server tut dies nie (obwohl im Laufe der Jahre einige Mechanismen hinzugefügt wurden, die vom Server initiierte Nachrichten simulieren).

Um eine Webseite anzuzeigen, sendet der Browser zunächst eine Anfrage zum Abrufen des HTML-Dokuments, das die Seite repräsentiert.
Anschließend analysiert er diese Datei und sendet weitere Anfragen für auszuführende Skripte, Layoutinformationen (CSS) und in der Seite enthaltene Unterressourcen (meist Bilder und Videos).
Der Webbrowser setzt diese Ressourcen dann zum vollständigen Dokument, der Webseite, zusammen.
Vom Browser ausgeführte Skripte können später weitere Ressourcen abrufen; der Browser aktualisiert die Webseite entsprechend.

Eine Webseite ist ein Hypertextdokument.
Das bedeutet, dass einige Teile des angezeigten Inhalts Links sind. Diese können aktiviert werden (üblicherweise durch einen Mausklick), um eine neue Webseite abzurufen. So können Benutzer ihren User-Agent steuern und durch das Web navigieren.
Der Browser übersetzt diese Aktionen in HTTP-Anfragen und interpretiert die HTTP-Antworten, um den Benutzern ein verständliches Ergebnis zu präsentieren.

### Der Webserver

Auf der anderen Seite des Kommunikationskanals steht der Server, der das vom Client angeforderte Dokument _bereitstellt_.
Nach außen erscheint ein Server als einzelner Rechner. Tatsächlich kann er aber aus mehreren Servern bestehen, die sich die Last teilen (Load Balancing), oder weitere Software umfassen, etwa Caches, einen Datenbankserver oder E-Commerce-Server, die das Dokument bei Bedarf ganz oder teilweise erzeugen.

Ein Server ist nicht unbedingt ein einzelner Rechner: Auf demselben Rechner können mehrere Instanzen von Serversoftware laufen.
Mit HTTP/1.1 und dem Header {{HTTPHeader("Host")}} können sie sogar dieselbe IP-Adresse verwenden.

### Proxys

Zwischen dem Webbrowser und dem Server leiten zahlreiche Rechner und Geräte HTTP-Nachrichten weiter.
Aufgrund der Schichtenarchitektur des Web-Stacks arbeiten die meisten davon auf der Transport-, Netzwerk- oder physischen Ebene. Auf der HTTP-Ebene sind sie daher nicht sichtbar, können die Leistung aber erheblich beeinflussen.
Komponenten, die auf der Anwendungsschicht arbeiten, werden allgemein als **Proxys** bezeichnet.
Sie können transparent sein und empfangene Anfragen unverändert weiterleiten. Nicht transparente Proxys hingegen verändern eine Anfrage, bevor sie sie an den Server weitergeben.
Proxys können zahlreiche Funktionen erfüllen:

- Caching (der Cache kann öffentlich oder privat sein, wie der Browser-Cache)
- Filterung (etwa durch einen Virenscan oder eine Kindersicherung)
- Load Balancing (damit mehrere Server unterschiedliche Anfragen bearbeiten können)
- Authentifizierung (zur Kontrolle des Zugriffs auf verschiedene Ressourcen)
- Protokollierung (zur Speicherung historischer Informationen)

## Grundlegende Eigenschaften von HTTP

### HTTP ist einfach

HTTP ist grundsätzlich so konzipiert, dass es für Menschen lesbar ist – selbst mit der zusätzlichen Komplexität, die HTTP/2 durch die Kapselung von HTTP-Nachrichten in Frames eingeführt hat.
Menschen können HTTP-Nachrichten lesen und verstehen. Das erleichtert Entwicklern das Testen und verringert die Komplexität für Einsteiger.

### HTTP ist erweiterbar

Die mit HTTP/1.0 eingeführten [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) machen es einfach, dieses Protokoll zu erweitern und mit ihm zu experimentieren.
Neue Funktionen können sogar eingeführt werden, indem sich ein Client und ein Server auf die Semantik eines neuen Headers einigen.

### HTTP ist zustandslos, ermöglicht aber Sitzungen

HTTP ist zustandslos: Zwischen zwei aufeinanderfolgenden Anfragen über dieselbe Verbindung besteht kein Zusammenhang.
Das kann für Benutzer problematisch sein, die mit bestimmten Seiten zusammenhängend interagieren möchten, beispielsweise mit Warenkörben in Onlineshops.
Obwohl HTTP selbst zustandslos ist, ermöglichen HTTP-Cookies zustandsbehaftete Sitzungen.
Dank der Erweiterbarkeit durch Header lassen sich HTTP-Cookies in den Ablauf integrieren. So kann bei HTTP-Anfragen eine Sitzung eingerichtet werden, über die Anfragen denselben Kontext beziehungsweise Zustand teilen.

### HTTP und Verbindungen

Eine Verbindung wird auf der Transportschicht gesteuert und liegt damit grundsätzlich außerhalb des Zuständigkeitsbereichs von HTTP.
HTTP setzt nicht voraus, dass das zugrunde liegende Transportprotokoll verbindungsorientiert ist. Es muss lediglich _zuverlässig_ sein, also keine Nachrichten verlieren (oder in einem solchen Fall zumindest einen Fehler melden).
Von den beiden gängigsten Transportprotokollen im Internet ist TCP zuverlässig, UDP hingegen nicht.
HTTP stützt sich daher auf den verbindungsorientierten TCP-Standard.

Bevor ein Client und ein Server ein HTTP-Anfrage-Antwort-Paar austauschen können, müssen sie eine TCP-Verbindung herstellen. Dieser Vorgang erfordert mehrere Hin- und Rückübertragungen.
Standardmäßig öffnet HTTP/1.0 für jedes HTTP-Anfrage-Antwort-Paar eine eigene TCP-Verbindung.
Das ist weniger effizient, als eine einzige TCP-Verbindung gemeinsam zu nutzen, wenn mehrere Anfragen kurz nacheinander gesendet werden.

Um diesen Nachteil abzumildern, führte HTTP/1.1 _Pipelining_ (das sich als schwierig zu implementieren erwies) und _persistente Verbindungen_ ein: Die zugrunde liegende TCP-Verbindung lässt sich teilweise über den Header {{HTTPHeader("Connection")}} steuern.
HTTP/2 ging noch einen Schritt weiter und ermöglichte es, Nachrichten über eine einzige Verbindung zu multiplexen. Dadurch kann die Verbindung aufrechterhalten und effizienter genutzt werden.

Es wird daran gearbeitet, ein besseres Transportprotokoll zu entwickeln, das besser für HTTP geeignet ist.
So experimentiert Google beispielsweise mit [QUIC](https://en.wikipedia.org/wiki/QUIC), das auf UDP aufbaut und ein zuverlässigeres und effizienteres Transportprotokoll bereitstellen soll.

## Was sich mit HTTP steuern lässt

Die Erweiterbarkeit von HTTP hat im Laufe der Zeit mehr Steuerungsmöglichkeiten und Funktionen für das Web ermöglicht.
Caching- und Authentifizierungsmethoden gehörten schon früh zur Funktionalität von HTTP.
Die Möglichkeit, die _Same-Origin-Beschränkung_ zu lockern, kam dagegen erst in den 2010er-Jahren hinzu.

Im Folgenden sind verbreitete Funktionen aufgeführt, die sich mit HTTP steuern lassen:

- _[Caching](/de/docs/Web/HTTP/Guides/Caching)_:
  HTTP kann steuern, wie Dokumente zwischengespeichert werden.
  Der Server kann Proxys und Clients anweisen, was sie wie lange zwischenspeichern sollen.
  Der Client kann zwischengeschaltete Cache-Proxys anweisen, das gespeicherte Dokument zu ignorieren.
- _Lockerung der Same-Origin-Beschränkung_:
  Um das Ausspähen und andere Eingriffe in die Privatsphäre zu verhindern, erzwingen Webbrowser eine strikte Trennung zwischen Websites.
  Nur Seiten mit **derselben Origin** können auf sämtliche Informationen einer Webseite zugreifen.
  Obwohl diese Beschränkung für den Server hinderlich sein kann, lässt sich die strikte Trennung serverseitig durch HTTP-Header lockern. Dadurch kann ein Dokument Informationen aus verschiedenen Domains zusammenführen; dafür kann es sogar sicherheitsbezogene Gründe geben.
- _Authentifizierung_:
  Manche Seiten sind möglicherweise geschützt, sodass nur bestimmte Benutzer darauf zugreifen können.
  HTTP kann eine einfache Authentifizierung bereitstellen, entweder über {{HTTPHeader("WWW-Authenticate")}} und ähnliche Header oder durch das Einrichten einer bestimmten Sitzung mithilfe von [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).
- _[Proxys und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)_:
  Server oder Clients befinden sich häufig in Intranets und verbergen ihre tatsächliche IP-Adresse vor anderen Rechnern.
  HTTP-Anfragen werden dann über Proxys geleitet, um diese Netzwerkgrenze zu überwinden.
  Nicht alle Proxys sind HTTP-Proxys.
  Das SOCKS-Protokoll arbeitet beispielsweise auf einer tieferen Ebene.
  Diese Proxys können auch andere Protokolle wie FTP verarbeiten.
- _Sitzungen_:
  Mit HTTP-Cookies können Sie Anfragen mit dem Zustand des Servers verknüpfen.
  So entstehen Sitzungen, obwohl HTTP grundsätzlich ein zustandsloses Protokoll ist.
  Das ist nicht nur für Warenkörbe in Onlineshops nützlich, sondern auch für jede Website, auf der Benutzer die Ausgabe konfigurieren können.

## Ablauf einer HTTP-Kommunikation

Wenn ein Client mit einem Server kommunizieren möchte – sei es mit dem Zielserver oder einem zwischengeschalteten Proxy –, führt er die folgenden Schritte aus:

1. Eine TCP-Verbindung öffnen: Über die TCP-Verbindung werden eine oder mehrere Anfragen gesendet und Antworten empfangen.
   Der Client kann eine neue Verbindung öffnen, eine bestehende wiederverwenden oder mehrere TCP-Verbindungen zu den Servern öffnen.

2. Eine HTTP-Nachricht senden: HTTP-Nachrichten (vor HTTP/2) sind für Menschen lesbar.
   Bei HTTP/2 sind diese Nachrichten in Frames gekapselt und dadurch nicht mehr direkt lesbar. Das Prinzip bleibt jedoch gleich.
   Zum Beispiel:

   ```http
   GET / HTTP/1.1
   Host: developer.mozilla.org
   Accept-Language: fr
   ```

3. Die vom Server gesendete Antwort lesen, zum Beispiel:

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

Wenn HTTP-Pipelining aktiviert ist, können mehrere Anfragen gesendet werden, ohne auf den vollständigen Empfang der ersten Antwort zu warten.
HTTP-Pipelining hat sich in bestehenden Netzwerken, in denen ältere Software neben modernen Versionen eingesetzt wird, als schwierig zu implementieren erwiesen.
In HTTP/2 wurde HTTP-Pipelining durch ein robusteres Multiplexing von Anfragen innerhalb von Frames abgelöst.

## HTTP-Nachrichten

HTTP-Nachrichten, wie sie in HTTP/1.1 und früheren Versionen definiert sind, sind für Menschen lesbar.
In HTTP/2 werden diese Nachrichten in eine binäre Struktur, einen _Frame_, eingebettet. Das ermöglicht Optimierungen wie die Komprimierung von Headern und Multiplexing.
Auch wenn bei dieser HTTP-Version nur ein Teil der ursprünglichen HTTP-Nachricht gesendet wird, bleibt die Semantik jeder Nachricht unverändert, und der Client rekonstruiert (virtuell) die ursprüngliche HTTP/1.1-Anfrage.
Daher ist es hilfreich, HTTP/2-Nachrichten im HTTP/1.1-Format zu betrachten.

Es gibt zwei Arten von HTTP-Nachrichten, Anfragen und Antworten, jeweils mit einem eigenen Format.

### Anfragen

Ein Beispiel für eine HTTP-Anfrage:

![Überblick über eine HTTP-GET-Anfrage mit Headern](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

Anfragen bestehen aus den folgenden Elementen:

- Einer HTTP-[Methode](/de/docs/Web/HTTP/Reference/Methods), meist einem Verb wie {{HTTPMethod("GET")}} oder {{HTTPMethod("POST")}} oder einem Substantiv wie {{HTTPMethod("OPTIONS")}} oder {{HTTPMethod("HEAD")}}, das die vom Client gewünschte Operation festlegt.
  Üblicherweise möchte ein Client eine Ressource abrufen (mit `GET`) oder die Werte eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) übermitteln (mit `POST`). In anderen Fällen können weitere Operationen erforderlich sein.
- Dem Pfad der abzurufenden Ressource, also der URL der Ressource ohne die aus dem Kontext ersichtlichen Bestandteile, beispielsweise ohne das {{Glossary("protocol", "Protokoll")}} (`http://`), die {{Glossary("domain", "Domain")}} (hier `developer.mozilla.org`) oder den TCP-{{Glossary("port", "Port")}} (hier `80`).
- Der Version des HTTP-Protokolls.
- Optionalen [Headern](/de/docs/Web/HTTP/Reference/Headers), die zusätzliche Informationen für den Server übermitteln.
- Bei einigen Methoden wie `POST` einem Body, ähnlich dem einer Antwort, der die gesendete Ressource enthält.

### Antworten

Ein Beispiel für eine Antwort:

![Überblick über eine HTTP-Antwort „200 OK“ auf eine GET-Anfrage, einschließlich der Antwort-Header.](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

Antworten bestehen aus den folgenden Elementen:

- Der verwendeten Version des HTTP-Protokolls.
- Einem [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war und warum beziehungsweise warum nicht.
- Einer Statusmeldung, einer unverbindlichen kurzen Beschreibung des Statuscodes.
- HTTP-[Headern](/de/docs/Web/HTTP/Reference/Headers), wie bei Anfragen.
- Optional einem Body, der die abgerufene Ressource enthält.

## Auf HTTP basierende APIs

Die am häufigsten verwendete HTTP-basierte API ist die [Fetch API](/de/docs/Web/API/Fetch_API), mit der sich HTTP-Anfragen aus JavaScript heraus stellen lassen. Die Fetch API ersetzt die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-API.

Eine weitere API, [Server-sent events](/de/docs/Web/API/Server-sent_events), ist ein unidirektionaler Dienst, mit dem ein Server Ereignisse an den Client senden kann. Dabei dient HTTP als Transportmechanismus.
Über das Interface [`EventSource`](/de/docs/Web/API/EventSource) öffnet der Client eine Verbindung und richtet Event-Handler ein.
Der Browser des Clients wandelt die über den HTTP-Stream eingehenden Nachrichten automatisch in passende [`Event`](/de/docs/Web/API/Event)-Objekte um. Anschließend übergibt er sie an die für den jeweiligen [`type`](/de/docs/Web/API/Event/type) registrierten Event-Handler, sofern dieser bekannt ist. Andernfalls übergibt er sie an den Event-Handler [`onmessage`](/de/docs/Web/API/EventSource/message_event), wenn kein typspezifischer Event-Handler eingerichtet wurde.

## Fazit

HTTP ist ein erweiterbares und einfach zu verwendendes Protokoll.
Die Client-Server-Struktur und die Möglichkeit, Header hinzuzufügen, erlauben es HTTP, sich mit den wachsenden Möglichkeiten des Webs weiterzuentwickeln.

HTTP/2 erhöht zwar die Komplexität etwas, indem es HTTP-Nachrichten zur Leistungsverbesserung in Frames einbettet. Die grundlegende Struktur der Nachrichten ist jedoch seit HTTP/1.0 gleich geblieben.
Der Ablauf einer Sitzung ist weiterhin einfach und lässt sich mit einem [HTTP-Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) untersuchen und debuggen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossareinträge:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
