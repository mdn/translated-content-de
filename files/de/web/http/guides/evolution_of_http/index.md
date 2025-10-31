---
title: Entwicklung des HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**HTTP** (HyperText Transfer Protocol) ist das zugrundeliegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu formen. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll zur Dateiübertragung in einer semivertrauten Laborumgebung zu einem modernen Internet-Dschungel entwickelt hat, der Bilder und Videos in hoher Auflösung und 3D transportiert.

## Erfindung des World Wide Web

1989, während er bei CERN arbeitete, schrieb Tim Berners-Lee einen Vorschlag zur Entwicklung eines Hypertext-Systems über das Internet. Zunächst _Mesh_ genannt, wurde es während der Implementierung 1990 in _World Wide Web_ umbenannt. Es basierte auf den bestehenden TCP- und IP-Protokollen und bestand aus vier Bausteinen:

- Einem Textformat zur Darstellung von Hypertext-Dokumenten, dem _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Einem Protokoll zum Austausch dieser Dokumente, dem _HyperText Transfer Protocol_ (HTTP).
- Einem Client zur Anzeige (und Bearbeitung) dieser Dokumente, dem ersten Webbrowser namens _WorldWideWeb_.
- Einem Server, der den Zugriff auf das Dokument ermöglicht, einer frühen Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server liefen außerhalb von CERN Anfang 1991. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies gilt nun als offizieller Beginn des World Wide Web als öffentliches Projekt.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war äußerst einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt von dem Pfad zur Ressource. Die vollständige URL wurde nicht eingeschlossen, da Protokoll, Server und Port, sobald zum Server verbunden, nicht notwendig waren.

```http
GET /my-page.html
```

Die Antwort war ebenfalls äußerst einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A text-only web page
</html>
```

Im Gegensatz zu den späteren Entwicklungen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn es ein Problem gab, wurde eine spezifische HTML-Datei generiert, die eine Beschreibung des Problems für den Menschen enthielt.

## HTTP/1.0 – Aufbau von Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden in jeder Anfrage gesendet (`HTTP/1.0` wurde der `GET`-Zeile hinzugefügt).
- Eine Status-Code-Zeile wurde ebenfalls zu Beginn einer Antwort gesendet. Dies ermöglichte es dem Browser selbst, den Erfolg oder das Scheitern einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen. Zum Beispiel, indem er seinen lokalen Cache auf eine spezifische Art und Weise aktualisiert oder verwendet.
- Das Konzept der HTTP-Header wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten Dokumente, die nicht nur einfache HTML-Dateien sind, übertragen werden.

Zu diesem Zeitpunkt sah eine typische Anfrage und Antwort so aus:

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

Es folgte eine zweite Verbindung und eine Anfrage, um das Bild abzurufen (mit der entsprechenden Antwort):

```http
GET /my-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

Zwischen 1991-1995 wurden diese mit einem Versuch-und-sehen-Ansatz eingeführt. Ein Server und ein Browser fügten ein Feature hinzu und schauten, ob es Anklang fand. Interoperabilitätsprobleme waren häufig. In einem Versuch, diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die üblichen Praktiken beschrieb. Dies war bekannt als {{RFC(1945)}} und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den verschiedenen Implementierungen von HTTP/1.0. Die erste standardisierte Version des HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Mehrdeutigkeiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Es war nicht mehr notwendig, sie mehrmals zu öffnen, um die in das einzelne Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies erlaubte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen wurde. Dadurch verringerte sich die Latenz der Kommunikation.
- Chunked-Antworten wurden ebenfalls unterstützt.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Inhaltsaushandlung, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten sich nun darauf einigen, welchen Inhalt sie austauschen.
- Dank des {{HTTPHeader("Host")}} Headers ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, die Server-Zusammenlegung.

Das folgende Beispiel veranschaulicht eine typische Sequenz von HTTP/1.1-Anfragen, die über eine einzige persistente TCP-Verbindung gesendet werden. Es zeigt, wie Clients Verbindungen wiederverwenden können, um Ressourcen effizienter zu laden.
Die erste Anfrage ruft eine Webseite ab, und der Server antwortet mit einem HTML-Dokument.
Der Client sendet dann zusätzliche Anfragen nacheinander, wenn er in dem HTML auf CSS- und JavaScript-Ressourcen stößt:

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

Das Einrichten einer TCP-Verbindung ist ein teurer Teil des Client-Server-Austauschs, und {{Glossary("TCP_slow_start", "TCP Slow Start")}} bedeutet, dass längerlebige Verbindungen schneller sind als neu erstellte.
HTTP/1.1 ermöglicht es, eine TCP-Verbindung für mehrere Anfragen und Antworten wiederzuverwenden, sodass Sie vermeiden, für jede Anfrage eine neue Verbindung erstellen zu müssen.
Jedoch mussten Clients immer noch warten, bis jede Ressource heruntergeladen war, bevor sie die nächste anforderten ({{Glossary("Head_of_line_blocking", "Head-of-line blocking")}}).
Um dies zu umgehen, erlauben die meisten Browser bis zu sechs TCP-Verbindungen pro Website (oder {{Glossary("origin", "Origin")}}).
Mit sechs parallelen Verbindungen können Browser mehrere Ressourcen gleichzeitig im HTTP/1.1-Modell abrufen, was erhebliche Leistungsverbesserungen gebracht hat.

HTTP/1.1 wurde erstmals als {{rfc(2068)}} im Januar 1997 veröffentlicht.

## Mehr als zwei Jahrzehnte der Entwicklung

Die Erweiterbarkeit des HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} im Juni 2014 vor der Veröffentlichung von HTTP/2, blieb es mehr als 15 Jahre extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur wurde HTTP/1.1 aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist nun in folgende Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), anwendbar für alle HTTP-Versionen, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation schließlich den Status eines Internet-Standards (STD 97), während sie vorher immer ein vorgeschlagener/Entwurfsstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Veränderung am HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Dienstleistungsunternehmen Netscape Communications eine zusätzliche verschlüsselte Transportschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit freigegeben, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Um dies zu tun, verschlüsselten sie die Nachrichten und garantierten deren Authentizität beim Austausch zwischen Server und Client. SSL wurde schließlich standardisiert und wurde zu TLS.

Zur gleichen Zeit wurde klar, dass eine verschlüsselte Transportschicht erforderlich war. Das Web war nicht mehr ein überwiegend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, beliebige Individuen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die Anwendungen, die über HTTP entwickelt wurden, leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mail und Benutzerstandort erforderten, wurde TLS außerhalb des E-Commerce-Use-Cases notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als reines Lese-Medium konzipiert. Er wollte ein Netz schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben konnten – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Erstellen zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Es wuchs, um spezifische Anwendungen wie CardDAV für den Umgang mit Adressbucheinträgen und CalDAV für die Handhabung von Kalendern einzuschließen. Aber all diese \*DAV-Erweiterungen hatten einen Mangel: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster zur Nutzung von HTTP entworfen: {{Glossary("REST", "Representational State Transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern stützte sich auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API ihre Daten abrufen und ändern zu lassen, ohne dass Browser oder Server aktualisiert werden mussten. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites durch standardmäßiges HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful-API definierte und sie vollständig kontrollierte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful-APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Einige dieser APIs erzeugen Erweiterungen für das HTTP-Protokoll für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch Hochstufung einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Websicherheitsmodell, bekannt als die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Websicherheitsmodell nach der Erstellung von HTTP entwickelt! Über die Jahre hat es sich als nützlich erwiesen, einige Einschränkungen dieser Policy unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wie viel und wann solche Einschränkungen aufgehoben werden sollten, unter Verwendung einer neuen Reihe von HTTP-Handlern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}} aber viele andere existieren.

## HTTP/2 – Ein Protokoll für mehr Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe von Skripten, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über deutlich mehr HTTP-Anfragen übertragen, und dies führte zu mehr Komplexität und Overhead für HTTP/1.1-Verbindungen. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Diese alternative Methode des Datenaustauschs zwischen Client und Server weckte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine höhere Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstelle eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexes Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese oft bei einer Reihe von Anfragen ähnlich sind, entfernt dies die Duplikation und den Overhead der übertragenen Daten.

Im Mai 2015 offiziell standardisiert, erreichte die Nutzung von HTTP/2 ihren Höhepunkt im Januar 2022 mit 46,9% aller Websites (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Webseiten mit hohem Datenverkehr zeigten die schnellste Übernahme, um die Datenübertragungsoverhead und damit verbundene Budgets zu sparen.

Diese schnelle Übernahme war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Es war nur ein aktualisierter Server, der mit einem aktuellen Browser kommunizierte, notwendig. Nur eine begrenzte Gruppe von Gruppen war notwendig, um die Übernahme auszulösen, und als alte Browser- und Serverversionen erneuert wurden, stieg die Nutzung auf natürliche Weise, ohne signifikante Arbeit für Webentwickler.

## Entwicklung nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere können wir neue Erweiterungen des HTTP-Protokolls nennen, die 2016 erschienen:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) erlaubte es dem Browser oder Client, dem Server proaktiv Informationen über seine Anforderungen und Hardwareeinschränkungen mitzuteilen.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half, sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat die gleichen Semantiken wie frühere Versionen von HTTP, verwendet aber {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für den Transport Layer. Bis Oktober 2022 [verwendeten 26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC wurde entwickelt, um eine wesentlich niedrigere Latenz für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexes Protokoll, aber HTTP/2 läuft über eine einzige TCP-Verbindung, sodass Paketverlusterkennung und -wiederholung auf der TCP-Schicht alle Ströme blockieren kann. QUIC betreibt mehrere Ströme über {{Glossary("UDP", "UDP")}} und implementiert die Paketverlusterkennung und -wiederholung unabhängig für jeden Stream, sodass, wenn ein Fehler auftritt, nur der Stream mit Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.

## Siehe auch

- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
