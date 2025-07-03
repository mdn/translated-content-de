---
title: Evolution of HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: f623be069a640ac6df1a76796e4dcb39d4c7174b
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Änderungen durchlaufen, die geholfen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll entwickelt hat, das dafür konzipiert war, Dateien in einer halbvertrauenswürdigen Laborumgebung auszutauschen, hin zu einem modernen Internet-Labyrinth, das Bilder und Videos in hoher Auflösung und 3D transportiert.

## Erfindung des World Wide Web

1989, während seiner Arbeit am CERN, schrieb Tim Berners-Lee einen Vorschlag zur Entwicklung eines Hypertext-Systems über das Internet. Ursprünglich als _Mesh_ bezeichnet, wurde es später während der Implementierung 1990 in _World Wide Web_ umbenannt. Es basierte auf den bestehenden TCP- und IP-Protokollen und bestand aus 4 Bausteinen:

- Einem textuellen Format zur Darstellung von Hypertext-Dokumenten, dem _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Einem Protokoll zum Austausch dieser Dokumente, dem _HyperText Transfer Protocol_ (HTTP).
- Einem Client zum Anzeigen (und Bearbeiten) dieser Dokumente, dem ersten Webbrowser namens _WorldWideWeb_.
- Einem Server zum Zugriff auf die Dokumente, einer frühen Version von _httpd_.

Diese vier Bausteine wurden bis Ende 1990 vervollständigt, und die ersten Server liefen außerhalb von CERN Anfang 1991. Am 6. August 1991 hat Tim Berners-Lee [im öffentlichen Newsgroup _alt.hypertext_ gepostet](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt). Dies wird nun als offizieller Start des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war äußerst einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt vom Pfad zur Ressource. Die vollständige URL wurde nicht angegeben, da das Protokoll, der Server und der Port nicht mehr benötigt wurden, sobald die Verbindung zum Server hergestellt war.

```http
GET /my-page.html
```

Die Antwort war ebenfalls äußerst einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  An text-only web page
</html>
```

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn es ein Problem gab, wurde eine spezifische HTML-Datei generiert und beinhaltete eine Beschreibung des Problems für den menschlichen Gebrauch.

## HTTP/1.0 – Aufbau der Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden in jeder Anfrage gesendet (`HTTP/1.0` wurde der `GET`-Zeile hinzugefügt).
- Eine Statuszeile wurde ebenfalls zu Beginn einer Antwort gesendet. Dies erlaubte es dem Browser, selbst den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen. Zum Beispiel, indem er den lokalen Cache in einer bestimmten Weise aktualisiert oder nutzt.
- Das Konzept der HTTP-Header wurde für Anfragen und Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde äußerst flexibel und erweiterbar.
- Andere Dokumente als einfache HTML-Dateien konnten dank des {{HTTPHeader("Content-Type")}}-Headers übertragen werden.

Zu dieser Zeit sahen eine typische Anfrage und Antwort so aus:

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

Zwischen 1991-1995 wurden diese mit einem Ausprobieren-und-Sehen-Ansatz eingeführt. Ein Server und ein Browser fügten ein Feature hinzu und sahen, ob es Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies war als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung in Arbeit. Dies geschah parallel zu den verschiedenen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Es musste nicht mehr mehrfach geöffnet werden, um die eingebetteten Ressourcen im ursprünglichen Dokument anzuzeigen.
- Pipelining wurde hinzugefügt. Dies erlaubte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Chunked-Responses wurden ebenfalls unterstützt.
- Zusätzliche Mechanismen zur Cache-Kontrolle wurden eingeführt.
- Inhaltsverhandlungen, einschließlich Sprache, Codierung und Typ, wurden eingeführt. Ein Client und ein Server konnten sich nun darauf einigen, welche Inhalte ausgetauscht werden sollen.
- Dank des {{HTTPHeader("Host")}}-Headers ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, die Server-Kollokation.

Das folgende Beispiel zeigt eine typische Sequenz von HTTP/1.1-Anfragen, die über eine einzelne anhaltende TCP-Verbindung gesendet werden, und demonstriert, wie Clients Verbindungen erneut nutzen können, um Ressourcen effizienter zu laden.
Die erste Anfrage ruft eine Webseite ab, und der Server antwortet mit einem HTML-Dokument.
Der Client sendet dann weitere Anfragen sequentiell, wenn er CSS- und JavaScript-Ressourcen im HTML findet:

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

Das Einrichten einer TCP-Verbindung ist ein teurer Teil des Client-Server-Austauschs, und {{Glossary("TCP_slow_start", "TCP Slow Start")}} bedeutet, dass längerlebige Verbindungen schneller sind als gerade erstellte. HTTP/1.1 ermöglicht es Ihnen, eine TCP-Verbindung für mehrere Anfragen und Antworten wiederzuverwenden, sodass Sie vermeiden, für jede Anfrage eine neue Verbindung zu erstellen. Allerdings mussten Clients noch warten, bis jede Ressource heruntergeladen war, bevor sie die nächste anforderten ({{Glossary("Head_of_line_blocking", "Head-of-line Blocking")}}). Um dies zu umgehen, erlauben die meisten Browser bis zu sechs TCP-Verbindungen pro Website (oder {{Glossary("origin", "Origin")}}). Mit sechs parallelen Verbindungen können Browser mehrere Ressourcen gleichzeitig im HTTP/1.1-Modell abrufen, was bedeutende Leistungsverbesserungen gebracht hat.

HTTP/1.1 wurde erstmals im Januar 1997 als {{rfc(2068)}} veröffentlicht.

## Mehr als zwei Jahrzehnte der Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor dem Erscheinen von HTTP/2, blieb es mehr als 15 Jahre äußerst stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern ganz HTTP wurde überarbeitet und ist jetzt in die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), die auf alle HTTP-Versionen anwendbar sind, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation schließlich den Status eines Internet-Standards (STD 97), während sie zuvor immer nur ein vorgeschlagener/Entwurf-Standard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Statt HTTP über einem einfachen TCP/IP-Stack zu senden, schuf Netscape Communications, ein Computer-Dienstleistungsunternehmen, eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Zu diesem Zweck verschlüsselten und garantierten sie die Authentizität der zwischen dem Server und den Clients ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und zu TLS.

In derselben Zeit wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr ein überwiegend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Einzelpersonen und Kriminelle so viele private Daten wie möglich sammelten. Da die über HTTP erstellten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandorte benötigten, wurde TLS außerhalb des E-Commerce-Einsatzes notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee sah HTTP ursprünglich nicht als reines Lese-Medium vor. Er wollte ein Web schaffen, in dem Menschen Dokumente remote hinzufügen und verschieben konnten - eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Verfassen zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Es wuchs zu spezifischen Anwendungen wie CardDAV für die Verwaltung von Adressbucheinträgen und CalDAV für die Behandlung von Kalendern. Aber alle diese \*DAV-Erweiterungen hatten einen Nachteil: Sie waren nur verwendbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Verwendung von HTTP entworfen: {{Glossary("REST", "Representational State Transfer")}} (oder REST). Die API basierte nicht auf neuen HTTP-Methoden, sondern stützte sich auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API zu erstellen, um Daten ohne Aktualisierung der Browser oder der Server abzurufen und zu ändern. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites über Standard-HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful-API definierte und vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful-APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Einige dieser APIs schaffen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentliche Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch Hochstufen einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Web-Sicherheitsmodell, bekannt als [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Policy unter bestimmten Bedingungen zu lockern. Der Server übermittelte, wie viel und wann solche Einschränkungen zu lockern sind, an den Client mit einem neuen Satz von HTTP-Headers. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Steuerung der Privatsphäre, {{HTTPHeader("X-Frame-Options")}} und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber viele mehr existieren.

## HTTP/2 – Ein Protokoll für bessere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar eigenständige Anwendungen. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Skripte, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über erheblich mehr HTTP-Anfragen übertragen, was zu einer höheren Komplexität und einem höheren Overhead für HTTP/1.1-Verbindungen führte. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Dieser alternative Weg zum Datenaustausch zwischen Client und Server weckte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte einen Anstieg der Reaktionsgeschwindigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Aspekten von HTTP/1.1:

- Es ist ein binäres Protokoll anstatt eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Obwohl dies ein Hindernis darstellt, ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexes Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert die Header. Da diese oft ähnlich unter einer Gruppe von Anfragen sind, entfernt dies die Duplizierung und den Overhead der übertragenen Daten.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 ihren Höhepunkt bei 46,9% aller Websites (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Webseiten mit hohem Datenverkehr zeigten die schnellste Anpassung in einem Bestreben, den Overhead bei der Datenübertragung und die damit verbundenen Budgets zu reduzieren.

Diese schnelle Anpassung war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war lediglich ein aktueller Server erforderlich, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Gruppe war nötig, um eine Anpassung auszulösen, und während veraltete Browser- und Server-Versionen erneuert wurden, stieg die Nutzung natürlich, ohne dass bedeutende Arbeiten für Webentwickler erforderlich waren.

## Entwicklung nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Besonders erwähnenswert sind die neuen Erweiterungen des HTTP-Protokolls, die 2016 erschienen sind:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} erlaubte die Trennung der Identifizierung und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints) erlaubte es dem Browser oder Client, Informationen über seine Anforderungen und Hardware-Beschränkungen proaktiv an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}}-Header half zu garantieren, dass sichere Cookies nicht verändert werden können.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3 hat die gleichen Semantiken wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für die Transportschicht. Im Oktober 2022 verwendeten [26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, eine wesentlich geringere Latenz für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexes Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass Paketverlust-Erkennung und -Übertragung auf der TCP-Ebene alle Streams blockieren kann. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} aus und implementiert die Paketverlust-Erkennung und -Übertragung unabhängig für jeden Stream, sodass bei einem Fehler nur der Stream mit Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.

## Siehe auch

- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
- Glossareinträge:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
