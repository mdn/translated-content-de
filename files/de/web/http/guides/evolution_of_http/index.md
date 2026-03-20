---
title: Evolution von HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: f9a9e52d36680ee55fb9f3f1dfc41ca3cdce046f
---

**HTTP** (HyperText Transfer Protocol) ist das zugrundeliegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die seine Einfachheit bewahrt und dennoch seine Flexibilität geformt haben. Lesen Sie weiter, um zu erfahren, wie HTTP sich von einem Protokoll, das zum Austausch von Dateien in einer semi-vertrauten Laborumgebung entwickelt wurde, zu einem modernen Internet-Labyrinth entwickelt hat, das hochauflösende Bilder und Videos in 3D transportiert.

## Erfindung des World Wide Web

1989, während seiner Arbeit am CERN, schrieb Tim Berners-Lee einen Vorschlag, ein Hypertext-System über das Internet zu bauen. Ursprünglich _Mesh_ genannt, wurde es während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Es wurde über die bestehenden TCP- und IP-Protokolle aufgebaut und bestand aus vier Grundbausteinen:

- Ein Textformat zur Darstellung von Hypertext-Dokumenten, die _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, der den Zugang zum Dokument ermöglicht, eine frühe Version von _httpd_.

Diese vier Grundbausteine waren Ende 1990 abgeschlossen, und die ersten Server liefen bereits Anfang 1991 außerhalb von CERN. Am 6. August 1991 veröffentlichte Tim Berners-Lee [einen Beitrag](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) in der öffentlichen Newsgroup _alt.hypertext_. Dies wird heute als offizieller Start des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen genutzte HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als das Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die Anfangsversion von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}}, gefolgt von dem Pfad zur Ressource. Die vollständige URL wurde nicht einbezogen, da das Protokoll, der Server und der Port nicht notwendig waren, sobald die Verbindung zum Server hergestellt war.

```http
GET /my-page.html
```

Auch die Antwort war äußerst einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A text-only web page
</html>
```

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Bei einem Problem wurde eine spezifische HTML-Datei generiert, die eine Beschreibung des Problems zur menschlichen Betrachtung enthielt.

## HTTP/1.0 – Aufbau von Erweiterbarkeit

HTTP/0.9 war sehr limitiert, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden mit jeder Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Eine Statuscod-Zeile wurde auch zu Beginn einer Antwort gesendet. Dies erlaubte es dem Browser, den Erfolg oder Misserfolg einer Anfrage selbst zu erkennen und sein Verhalten entsprechend anzupassen. Zum Beispiel, indem er seinen lokalen Cache auf eine spezifische Weise aktualisierte oder benutzte.
- Das Konzept von HTTP-Headern wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden, und das Protokoll wurde extrem flexibel und erweiterbar.
- Dokumente, die nicht nur einfache HTML-Dateien waren, konnten dank des {{HTTPHeader("Content-Type")}} Headers übertragen werden.

Zu diesem Zeitpunkt sahen eine typische Anfrage und Antwort so aus:

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

Es folgte eine zweite Verbindung und eine Anfrage, um das Bild zu holen (mit der entsprechenden Antwort):

```http
GET /my-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif

(image content)
```

Zwischen 1991-1995 wurden diese mit einem "Versuch-und-sehen"-Ansatz eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und sahen, ob sie an Fahrt gewann. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein informelles Dokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies war als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den vielfältigen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrere Male geöffnet werden, um die in dem einzigen Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies erlaubte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen wurde. Dies verringerte die Latenz der Kommunikation.
- Chunked Responses wurden ebenfalls unterstützt.
- Zusätzliche Cache-Steuermechanismen wurden eingeführt.
- Inhaltsverhandlungen, einschließlich Sprache, Kodierung und Typ, wurden eingeführt. Ein Client und ein Server konnten nun vereinbaren, welche Inhalte ausgetauscht werden sollten.
- Dank des {{HTTPHeader("Host")}}-Headers wurde die Möglichkeit, verschiedene Domains von derselben IP-Adresse zu hosten, erlaubt.

Das folgende Beispiel veranschaulicht eine typische Abfolge von HTTP/1.1-Anfragen, die über eine einzelne persistente TCP-Verbindung gesendet werden, und zeigt, wie Clients Verbindungen wiederverwenden können, um Ressourcen effizienter zu laden. Die erste Anfrage ruft eine Webseite ab, und der Server antwortet mit einem HTML-Dokument. Der Client sendet dann weitere Anfragen nacheinander, sobald er CSS- und JavaScript-Ressourcen im HTML-Dokument antrifft:

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

Das Einrichten einer TCP-Verbindung ist ein teurer Teil des Client-Server-Austauschs, und {{Glossary("TCP_slow_start", "TCP Slow Start")}} bedeutet, dass längerlebige Verbindungen schneller sind als neu erstellte. HTTP/1.1 ermöglicht die Wiederverwendung einer TCP-Verbindung für mehrere Anfragen und Antworten, sodass Sie vermeiden, für jede Anfrage eine neue Verbindung erstellen zu müssen. Allerdings mussten Clients immer noch warten, bis jede Ressource heruntergeladen war, bevor sie die nächste anfragen konnten ({{Glossary("Head_of_line_blocking", "Head-of-line Blocking")}}). Um dies zu umgehen, erlauben die meisten Browser bis zu sechs TCP-Verbindungen pro Website (oder {{Glossary("origin", "Origin")}}). Mit sechs parallelen Verbindungen können Browser mehrere Ressourcen gleichzeitig abrufen, was beim HTTP/1.1-Modell erhebliche Leistungsverbesserungen hinzugefügt hat.

HTTP/1.1 wurde erstmals im Januar 1997 als {{rfc(2068)}} veröffentlicht.

## Mehr als zwei Jahrzehnte der Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014, vor der Veröffentlichung von HTTP/2, war es mehr als 15 Jahre lang extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist jetzt in folgende Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), anwendbar auf alle HTTP-Versionen, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Zudem hat die Spezifikation schließlich den Status eines Internet-Standards (STD 97) erreicht, während sie zuvor immer ein vorgeschlagener/Entwurfsstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Dienstleistungsunternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsebene darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dazu verschlüsselten und garantierten sie die Authentizität der zwischen Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und zu TLS.

Im selben Zeitraum wurde deutlich, dass eine verschlüsselte Transportschicht notwendig war. Das Web war nicht mehr ein hauptsächlich akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Einzelpersonen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die über HTTP gebauten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mail-Adressen und den Standort der Nutzer benötigten, wurde TLS auch außerhalb des E-Commerce-Szenarios notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als Nur-Lese-Medium vorgesehen. Er wollte ein Web schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben könnten – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Authoring zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Es entwickelte sich zu spezifischen Anwendungen wie CardDAV zur Verwaltung von Adressbucheinträgen und CalDAV zur Kalenderverwaltung. Aber alle diese \*DAV-Erweiterungen hatten einen Nachteil: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster zur Nutzung von HTTP entwickelt: {{Glossary("REST", "Representational State Transfer")}} (oder REST). Die API basierte nicht auf neuen HTTP-Methoden, sondern auf dem Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API zum Abrufen und Ändern ihrer Daten bereitzustellen, ohne die Browser oder Server aktualisieren zu müssen. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites über standardmäßige HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht-standardisierte RESTful API definierte und die volle Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Mehrere dieser APIs schaffen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentliche Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch ein Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Lockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Web-Sicherheitsmodell, bekannt als die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Beschränkungen dieser Richtlinie unter bestimmten Bedingungen zu lockern. Der Server übertrug die Information, wie viel und wann solche Beschränkungen gelockert werden sollten, an den Client mithilfe eines neuen Satzes von HTTP-Headern. Diese wurden in Spezifikationen wie dem {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es existieren viele weitere.

## HTTP/2 – Ein Protokoll für höhere Leistung

Über die Jahre wurden Webseiten immer komplexer. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Scripte, die Interaktivität hinzufügten, stiegen ebenfalls. Viel mehr Daten wurden über deutlich mehr HTTP-Anfragen übertragen, was mehr Komplexität und Overhead für HTTP/1.1-Verbindungen schuf. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Auf diesen alternativen Weg des Datenaustauschs zwischen Client und Server konzentrierten sich Entwickler, die an Browsern und Servern arbeiteten. SPDY definierte eine Erhöhung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll im Gegensatz zu einem Textprotokoll. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexed Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, was die Einschränkungen des HTTP/1.x-Protokolls entfernt.
- Es komprimiert Header. Da diese oft ähnlich bei einer Reihe von Anfragen sind, wird die Duplizierung und der Overhead der übertragenen Daten entfernt.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46,9 % aller Websites ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Hochfrequentierte Websites zeigten die schnellste Verbreitung, um den Datenübertragungs-Overhead und die damit verbundenen Budgets zu sparen.

Diese schnelle Übernahme war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu verwenden, war nur ein aktueller Server, der mit einem aktuellen Browser kommunizierte, notwendig. Nur eine begrenzte Gruppe musste die Einführung auslösen und da ältere Versionen von Browsern und Servern erneuert wurden, erhöhte sich die Nutzung auf natürliche Weise, ohne signifikante Arbeit für Webentwickler.

## Post-HTTP/2-Evolution

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere können wir neue Erweiterungen des HTTP-Protokolls erwähnen, die 2016 aufgetaucht sind:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} erlaubte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) erlaubte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardware-Einschränkungen an den Server zu übermitteln.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half, sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat die gleichen Semantiken wie frühere Versionen von HTTP, verwendet aber {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für den Transport. Bis Oktober 2022 [nutzten 26 % aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, eine viel niedrigere Latenz für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexed Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass Paketverlust-Erkennung und -Übertragung auf der TCP-Schicht alle Streams blockieren kann. QUIC betreibt mehrere Streams über {{Glossary("UDP", "UDP")}} und implementiert Paketverlust-Erkennung und -Übertragung unabhängig für jeden Stream, sodass, wenn ein Fehler auftritt, nur der Stream mit Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seine Varianten wie Chrome und Edge) und Firefox.

## Siehe auch

- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
