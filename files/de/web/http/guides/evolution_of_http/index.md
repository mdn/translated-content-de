---
title: Entwicklung von HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: f9a9e52d36680ee55fb9f3f1dfc41ca3cdce046f
---

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. HTTP wurde zwischen 1989 und 1991 von Tim Berners-Lee und seinem Team entwickelt und hat seitdem viele Veränderungen durchlaufen. Dabei blieb es einfach und wurde zugleich flexibler. Im Folgenden erfahren Sie, wie sich HTTP von einem Protokoll zum Austausch von Dateien in einer Laborumgebung mit teilweise vertrauenswürdigen Beteiligten zu einem Bestandteil des modernen Internets entwickelte, über den auch hochauflösende Bilder und Videos sowie 3D-Inhalte übertragen werden.

## Erfindung des World Wide Web

1989 verfasste Tim Berners-Lee während seiner Arbeit am CERN einen Vorschlag für ein Hypertextsystem im Internet. Zunächst hieß es _Mesh_, wurde aber während seiner Umsetzung im Jahr 1990 in _World Wide Web_ umbenannt. Es baute auf den bestehenden Protokollen TCP und IP auf und bestand aus vier Bausteinen:

- Einem Textformat zur Darstellung von Hypertextdokumenten, der _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Einem Protokoll zum Austausch dieser Dokumente, dem _HyperText Transfer Protocol_ (HTTP).
- Einem Client zum Anzeigen (und Bearbeiten) dieser Dokumente, dem ersten Webbrowser namens _WorldWideWeb_.
- Einem Server, der Zugriff auf die Dokumente ermöglichte, einer frühen Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und Anfang 1991 liefen die ersten Server außerhalb des CERN. Am 6. August 1991 veröffentlichte Tim Berners-Lee einen [Beitrag](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) in der öffentlichen Newsgroup _alt.hypertext_. Dies gilt heute als offizieller Beginn des World Wide Web als öffentliches Projekt.

Das in dieser frühen Phase verwendete HTTP-Protokoll war sehr einfach. Später erhielt es die Bezeichnung HTTP/0.9 und wird manchmal als Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die erste Version von HTTP hatte keine Versionsnummer; sie wurde erst später 0.9 genannt, um sie von nachfolgenden Versionen zu unterscheiden. HTTP/0.9 war äußerst einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzig möglichen Methode {{HTTPMethod("GET")}}, gefolgt vom Pfad zur Ressource. Die vollständige URL war nicht enthalten, da Protokoll, Server und Port nach dem Verbindungsaufbau zum Server nicht mehr benötigt wurden.

```http
GET /my-page.html
```

Auch die Antwort war äußerst einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A text-only web page
</html>
```

Anders als bei späteren Versionen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Status- oder Fehlercodes gab es nicht. Trat ein Problem auf, wurde eine spezielle HTML-Datei erzeugt, die eine für Menschen verständliche Beschreibung des Problems enthielt.

## HTTP/1.0 – Grundlage für Erweiterbarkeit

HTTP/0.9 war sehr eingeschränkt, doch Browser und Server machten es rasch vielseitiger:

- Jede Anfrage enthielt eine Versionsangabe (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Am Anfang einer Antwort wurde nun auch eine Zeile mit einem Statuscode gesendet. So konnte der Browser erkennen, ob eine Anfrage erfolgreich war, und sein Verhalten entsprechend anpassen, beispielsweise seinen lokalen Cache gezielt aktualisieren oder verwenden.
- HTTP-Header wurden sowohl für Anfragen als auch für Antworten eingeführt. Dadurch konnten Metadaten übertragen werden, und das Protokoll wurde äußerst flexibel und erweiterbar.
- Dank des Headers {{HTTPHeader("Content-Type")}} konnten auch andere Dokumente als einfache HTML-Dateien übertragen werden.

Eine typische Anfrage und Antwort sahen zu diesem Zeitpunkt so aus:

```http
GET /my-page.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html

<HTML>
A page with an image
  <IMG SRC="/my-image.gif">
</HTML>
```

Darauf folgten eine zweite Verbindung und eine Anfrage zum Abrufen des Bildes (mit der entsprechenden Antwort):

```http
GET /my-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif

(image content)
```

Zwischen 1991 und 1995 wurden diese Neuerungen nach dem Prinzip „ausprobieren und beobachten“ eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und warteten ab, ob sie sich durchsetzte. Probleme mit der Interoperabilität waren häufig. Um sie zu beheben, wurde im November 1996 ein informatives Dokument veröffentlicht, das die gängige Praxis beschrieb. Es wurde als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

Inzwischen war eine formelle Standardisierung im Gange, parallel zu den unterschiedlichen Implementierungen von HTTP/1.0. Die erste standardisierte HTTP-Version, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 beseitigte Unklarheiten und brachte zahlreiche Verbesserungen:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr für jede Ressource, die in das ursprüngliche Dokument eingebettet war, erneut aufgebaut werden.
- Pipelining wurde hinzugefügt. Damit konnte eine zweite Anfrage gesendet werden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Auch Antworten mit Chunked-Übertragung wurden unterstützt.
- Zusätzliche Mechanismen zur Cache-Steuerung wurden eingeführt.
- Content Negotiation wurde eingeführt, unter anderem für Sprache, Kodierung und Typ. Client und Server konnten sich nun darauf verständigen, welche Inhalte sie austauschten.
- Dank des Headers {{HTTPHeader("Host")}} konnten verschiedene Domains unter derselben IP-Adresse gehostet und Server gemeinsam betrieben werden.

Das folgende Beispiel zeigt eine typische Abfolge von HTTP/1.1-Anfragen über eine einzige dauerhafte TCP-Verbindung. Es veranschaulicht, wie Clients Verbindungen wiederverwenden können, um Ressourcen effizienter zu laden.
Mit der ersten Anfrage wird eine Webseite abgerufen; der Server antwortet mit einem HTML-Dokument.
Anschließend sendet der Client nacheinander weitere Anfragen, wenn er im HTML auf CSS- und JavaScript-Ressourcen stößt:

```http
GET /en-US/docs/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:141.0) Gecko/20100101 Firefox/141.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd
Connection: keep-alive

HTTP/1.1 200 OK
accept-ranges: none
content-encoding: br
date: Tue, 01 Jul 2025 08:32:50 GMT
expires: Tue, 01 Jul 2025 09:26:50 GMT
cache-control: public, max-age=3600
age: 1926
last-modified: Sat, 28 Jun 2025 00:47:12 GMT
etag: W/"b55394ed2f274eea5d528cf6c91e1dcf"
content-type: text/html
vary: Accept-Encoding
content-length: 26178

[26178 bytes of HTML]

GET /static/css/main.9e7d1ce5.css HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:141.0) Gecko/20100101 Firefox/141.0
Accept: text/css,*/*;q=0.1
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd

HTTP/1.1 200 OK
content-encoding: br
content-length: 43694
date: Mon, 30 Jun 2025 21:13:12 GMT
expires: Mon, 30 Jun 2025 21:47:29 GMT
cache-control: public, max-age=31536000
age: 42704
last-modified: Mon, 30 Jun 2025 00:33:45 GMT
etag: W/"d4f4d0955482844ad842986a9bcb7e8a"
content-type: text/css
vary: Accept-Encoding

[43694 bytes of CSS]

GET /static/js/main.a918a4e7.js HTTP/1.1
Host: developer.mozilla.org
…
```

Der Aufbau einer TCP-Verbindung ist ein aufwendiger Teil des Austauschs zwischen Client und Server. Wegen {{Glossary("TCP_slow_start", "TCP Slow Start")}} sind länger bestehende Verbindungen zudem schneller als neu aufgebaute.
HTTP/1.1 ermöglicht es Ihnen, eine TCP-Verbindung für mehrere Anfragen und Antworten wiederzuverwenden. So müssen Sie nicht für jede Anfrage eine neue Verbindung aufbauen.
Allerdings mussten Clients weiterhin warten, bis eine Ressource vollständig heruntergeladen war, bevor sie die nächste anfordern konnten ({{Glossary("Head_of_line_blocking", "Head-of-Line-Blocking")}}).
Als Abhilfe erlauben die meisten Browser bis zu sechs TCP-Verbindungen pro Website (oder {{Glossary("origin", "Origin")}}).
Mit sechs parallelen Verbindungen können Browser im HTTP/1.1-Modell mehrere Ressourcen gleichzeitig abrufen. Das brachte erhebliche Leistungsverbesserungen.

HTTP/1.1 wurde erstmals im Januar 1997 als {{rfc(2068)}} veröffentlicht.

## Mehr als zwei Jahrzehnte Entwicklung

Dank der Erweiterbarkeit von HTTP ließen sich neue Header und Methoden leicht hinzufügen. Obwohl das HTTP/1.1-Protokoll vor der Veröffentlichung von HTTP/2 zweimal überarbeitet wurde – mit {{RFC("2616")}} im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} im Juni 2014 –, blieb es über mehr als 15 Jahre äußerst stabil. HTTP/1.1 wurde 2022 mit {{RFC("9110")}} erneut aktualisiert. Dabei wurde nicht nur HTTP/1.1 aktualisiert, sondern HTTP insgesamt überarbeitet. Es ist nun auf folgende Dokumente aufgeteilt: Semantik ({{RFC("9110")}}) und Caching ({{RFC("9111")}}), die für alle HTTP-Versionen gelten, sowie HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Außerdem erhielt die Spezifikation schließlich den Status eines Internetstandards (STD 97); zuvor war sie stets nur ein vorgeschlagener Standard oder ein Standardentwurf gewesen.

### HTTP für sichere Übertragungen verwenden

Die größte Änderung an HTTP erfolgte Ende 1994. Statt HTTP direkt über einen einfachen TCP/IP-Stack zu übertragen, fügte das IT-Unternehmen Netscape Communications eine verschlüsselte Übertragungsschicht hinzu: SSL. SSL 1.0 wurde nie öffentlich veröffentlicht, doch SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Entstehung von E-Commerce-Websites. Dazu verschlüsselten sie die zwischen Server und Client ausgetauschten Nachrichten und gewährleisteten deren Authentizität. SSL wurde später standardisiert und zu TLS.

Im selben Zeitraum wurde deutlich, dass eine verschlüsselte Transportschicht notwendig war. Das Web war nicht mehr überwiegend ein akademisches Netzwerk, sondern wurde zu einem Umfeld, in dem Werbetreibende, Einzelpersonen und Kriminelle um möglichst viele private Daten konkurrierten. Da Anwendungen auf HTTP-Basis immer leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und den Standort von Nutzern benötigten, wurde TLS auch außerhalb des E-Commerce erforderlich.

### HTTP für komplexe Anwendungen verwenden

Tim Berners-Lee hatte HTTP ursprünglich nicht als reines Lesemedium vorgesehen. Er wollte ein Web schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben konnten – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP um Möglichkeiten zur Bearbeitung von Inhalten erweitert, und ein Standard namens WebDAV entstand. Daraus entwickelten sich spezielle Anwendungen wie CardDAV für Adressbucheinträge und CalDAV für Kalender. All diese \*DAV-Erweiterungen hatten jedoch einen Nachteil: Sie waren nur nutzbar, wenn die Server sie implementierten.

Im Jahr 2000 wurde ein neues Konzept für die Verwendung von HTTP entwickelt: {{Glossary("REST", "Representational State Transfer")}} (kurz REST). Die API beruhte nicht auf neuen HTTP-Methoden, sondern auf dem Zugriff auf bestimmte URIs mit den grundlegenden Methoden von HTTP/1.1. So konnte jede Webanwendung eine API bereitstellen, über die ihre Daten abgerufen und verändert werden konnten, ohne dass Browser oder Server aktualisiert werden mussten. Alle notwendigen Informationen waren in den Dateien enthalten, die die Websites über das standardmäßige HTTP/1.1 bereitstellten. Ein Nachteil des REST-Modells war, dass jede Website ihre eigene, nicht standardisierte RESTful API definierte und vollständig kontrollierte. Das unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er-Jahren sehr verbreitet.

Seit 2005 stehen Webseiten immer mehr APIs zur Verfügung. Einige davon erweitern das HTTP-Protokoll für bestimmte Zwecke:

- [Server-Sent Events](/de/docs/Web/API/Server-sent_events), mit denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch ein Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Lockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, der sogenannten [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Tatsächlich wurde das heutige Sicherheitsmodell des Webs erst nach HTTP entwickelt! Im Lauf der Jahre erwies es sich als sinnvoll, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen zu lockern. Der Server teilte dem Client über neue HTTP-Header mit, welche Einschränkungen wann und in welchem Umfang gelockert werden durften. Diese Header wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Neben diesen größeren Erweiterungen kamen viele weitere Header hinzu, manche davon nur experimentell. Beispiele sind der Do-Not-Track-Header ({{HTTPHeader("DNT")}}) zur Steuerung des Datenschutzes, {{HTTPHeader("X-Frame-Options")}} und {{HTTPHeader('Upgrade-Insecure-Requests')}}. Es gibt jedoch noch viele weitere.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige waren sogar eigenständige Anwendungen. Es wurden mehr visuelle Medien angezeigt, und auch Anzahl und Größe der Skripte für interaktive Funktionen nahmen zu. Dadurch wurden bei deutlich mehr HTTP-Anfragen wesentlich mehr Daten übertragen, was HTTP/1.1-Verbindungen komplexer machte und ihren Overhead erhöhte. Als Reaktion darauf implementierte Google Anfang der 2010er-Jahre das experimentelle Protokoll SPDY. Diese alternative Art des Datenaustauschs zwischen Client und Server stieß bei Entwicklern von Browsern und Servern auf Interesse. SPDY verbesserte die Reaktionsfähigkeit und löste das Problem mehrfach übertragener Daten. Damit bildete es die Grundlage für HTTP/2.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll statt eines Textprotokolls. Es lässt sich nicht manuell lesen und erstellen. Trotz dieser Hürde ermöglicht es bessere Optimierungstechniken.
- Es ist ein gemultiplextes Protokoll. Parallele Anfragen können über dieselbe Verbindung erfolgen, wodurch die Beschränkungen von HTTP/1.x entfallen.
- Es komprimiert Header. Da diese innerhalb einer Reihe von Anfragen oft ähnlich sind, verringert das die doppelte Übertragung von Daten und den Overhead.

HTTP/2 wurde im Mai 2015 offiziell standardisiert. Im Januar 2022 erreichte seine Nutzung mit 46,9 % aller Websites ihren Höchststand (siehe [diese Statistik](https://w3techs.com/technologies/details/ce-http2)). Websites mit hohem Datenverkehr führten es besonders schnell ein, um den Overhead der Datenübertragung und die damit verbundenen Kosten zu senken.

Diese schnelle Verbreitung lag wahrscheinlich daran, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Nötig war lediglich ein aktueller Server, der mit einem neueren Browser kommunizierte. Damit hing die Einführung nur von wenigen Beteiligten ab. Als ältere Browser- und Serverversionen ersetzt wurden, nahm die Nutzung ohne nennenswerten Aufwand für Webentwickler von selbst zu.

## Entwicklung nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Zu den 2016 eingeführten Erweiterungen des HTTP-Protokolls gehören insbesondere:

- Die Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte es, die Identität einer Ressource von ihrem Speicherort zu entkoppeln. Dadurch wurden intelligentere Caching-Mechanismen für {{Glossary("CDN", "CDNs")}} möglich.
- Mit der Einführung von [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) konnten Browser oder andere Clients dem Server proaktiv Informationen über ihre Anforderungen und Hardwarebeschränkungen mitteilen.
- Sicherheitsbezogene Präfixe im Header {{HTTPHeader("Cookie")}} halfen sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 – HTTP über QUIC

Die nächste Hauptversion, HTTP/3, hat dieselbe Semantik wie frühere HTTP-Versionen, verwendet für die Transportschicht jedoch {{Glossary("QUIC", "QUIC")}} statt {{Glossary("TCP", "TCP")}}. Im Oktober 2022 [nutzten 26 % aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC wurde entwickelt, um die Latenz von HTTP-Verbindungen deutlich zu verringern. Wie HTTP/2 ist es ein gemultiplextes Protokoll. HTTP/2 läuft jedoch über eine einzige TCP-Verbindung. Deshalb können die Erkennung von Paketverlusten und die erneute Übertragung auf TCP-Ebene alle Streams blockieren. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} und behandelt Paketverluste und erneute Übertragungen für jeden Stream unabhängig. Tritt ein Fehler auf, wird daher nur der Stream blockiert, zu dem die Daten des betroffenen Pakets gehören.

HTTP/3 ist in {{RFC("9114")}} definiert und [wird von den meisten großen Browsern unterstützt](https://caniuse.com/http3), darunter Chromium (und darauf basierende Browser wie Chrome und Edge) sowie Firefox.

## Siehe auch

- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Mechanismus für Protokoll-Upgrades](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
