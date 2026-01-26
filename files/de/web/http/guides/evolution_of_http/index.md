---
title: Evolution des HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989 und 1991, hat HTTP viele Veränderungen durchgemacht, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das zum Austausch von Dateien in einer halbvertrauten Laborumgebung entwickelt wurde, zu einem modernen Internet-Dschungel entwickelt hat, der Bilder und Videos in hoher Auflösung und 3D trägt.

## Erfindung des World Wide Web

1989 schrieb Tim Berners-Lee, während er bei CERN arbeitete, einen Vorschlag für den Aufbau eines Hypertext-Systems über das Internet. Ursprünglich _Mesh_ genannt, wurde es bei der Implementierung 1990 in _World Wide Web_ umbenannt. Es basierte auf den bestehenden TCP- und IP-Protokollen und bestand aus 4 Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, die _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um Zugriff auf das Dokument zu gewähren, eine frühe Version des _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server liefen Anfang 1991 außerhalb von CERN. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies gilt nun als der offizielle Beginn des World Wide Web als öffentliches Projekt.

Das in den frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später als 0.9 bezeichnet, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt vom Pfad zur Ressource. Die vollständige URL war nicht enthalten, da das Protokoll, der Server und der Port nicht erforderlich waren, sobald die Verbindung zum Server hergestellt war.

```http
GET /my-page.html
```

Die Antwort war ebenfalls extrem einfach: sie bestand nur aus der Datei selbst.

```html
<html>
  A text-only web page
</html>
```

Im Gegensatz zu den nachfolgenden Entwicklungen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Bei einem Problem wurde eine spezielle HTML-Datei generiert, die eine Beschreibung des Problems für den menschlichen Konsum enthielt.

## HTTP/1.0 – Aufbau der Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden bei jeder Anfrage gesendet (`HTTP/1.0` wurde der `GET`-Zeile hinzugefügt).
- Eine Statuszeile wurde auch zu Beginn einer Antwort gesendet. Dies ermöglichte es dem Browser, den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen. Zum Beispiel durch Aktualisierung oder spezielle Nutzung des lokalen Caches.
- Das Konzept von HTTP-Headern wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden, und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten andere Dokumente als einfache HTML-Dateien übertragen werden.

Zu dieser Zeit sah eine typische Anfrage und Antwort so aus:

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

Es folgte eine zweite Verbindung und eine Anfrage zum Abrufen des Bildes (mit der entsprechenden Antwort):

```http
GET /my-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

Zwischen 1991 und 1995 wurden diese Ansätze mit einer Versuch-und-Irrtum-Methode eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und schauten, ob sie Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies war bekannt als {{RFC(1945)}} und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war die richtige Standardisierung im Gange. Dies geschah parallel zu den verschiedenen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrfach geöffnet werden, um die in das einzelne Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies ermöglichte das Senden einer zweiten Anfrage, bevor die Antwort auf die erste vollständig übertragen wurde. Dies verringerte die Latenz der Kommunikation.
- Chunked Responses wurden ebenfalls unterstützt.
- Zusätzliche Cachekontrollmechanismen wurden eingeführt.
- Inhaltsverhandlung, einschließlich Sprache, Codierung und Typ, wurde eingeführt. Client und Server konnten nun vereinbaren, welchen Inhalt sie austauschen.
- Dank des {{HTTPHeader("Host")}} Headers ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, die Server-Kollokation.

Das folgende Beispiel zeigt eine typische Sequenz von HTTP/1.1-Anfragen, die über eine einzelne persistente TCP-Verbindung gesendet werden, und demonstriert, wie Clients Verbindungen wiederverwenden können, um Ressourcen effizienter zu laden. Die erste Anfrage ruft eine Webseite ab, und der Server antwortet mit einem HTML-Dokument. Der Client sendet dann zusätzliche Anfragen nacheinander, sobald er CSS- und JavaScript-Ressourcen im HTML findet:

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

Das Einrichten einer TCP-Verbindung ist ein teurer Teil des Client-Server-Austauschs, und {{Glossary("TCP_slow_start", "TCP Slow Start")}} bedeutet, dass länger bestehende Verbindungen schneller sind als neu erstellte. HTTP/1.1 erlaubt es, eine TCP-Verbindung für mehrere Anfragen und Antworten wiederzuverwenden, sodass Sie es vermeiden, für jede Anfrage eine neue Verbindung erstellen zu müssen. Allerdings mussten die Clients immer noch warten, bis jede Ressource heruntergeladen war, bevor sie die nächste anforderten ({{Glossary("Head_of_line_blocking", "Head-of-line-Blocking")}}). Um dieses Problem zu umgehen, erlauben die meisten Browser bis zu sechs TCP-Verbindungen pro Website (oder {{Glossary("origin", "Origin")}}). Mit sechs parallelen Verbindungen können Browser mehrere Ressourcen gleichzeitig mit dem HTTP/1.1-Modell abrufen, was signifikante Leistungsverbesserungen brachte.

HTTP/1.1 wurde erstmals im Januar 1997 als {{rfc(2068)}} veröffentlicht.

## Mehr als zwei Jahrzehnte Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen hinweg verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es über mehr als 15 Jahre äußerst stabil. HTTP/1.1 wurde 2022 nochmals mit {{RFC("9110")}} aktualisiert. Nicht nur wurde HTTP/1.1 aktualisiert, sondern alle HTTP-Versionen wurden überarbeitet und sind jetzt in die folgenden Dokumente unterteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}) welches für alle HTTP-Versionen gilt, sowie HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation endlich den Status eines Internet-Standards (STD 97), während sie vorher immer ein vorgeschlagener/Entwurf-Standard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Veränderung von HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Service-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit freigegeben, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dazu wurden die Authentizität und Verschlüsselung der zwischen Server und Client ausgetauschten Nachrichten gewährleistet. SSL wurde schließlich standardisiert und wurde zu TLS.

Im gleichen Zeitraum wurde klar, dass eine verschlüsselte Transportschicht notwendig war. Das Web war nicht mehr nur ein weitgehend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Einzelpersonen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die über HTTP gebauten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandorte erforderten, wurde TLS außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als rein lesbares Medium gedacht. Er wollte ein Web schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben können - eine Art verteiltes Datei-System. Um 1996 wurde HTTP erweitert, um Authoring zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Es entwickelte sich, um spezifische Anwendungen wie CardDAV zur Behandlung von Adressbucheinträgen und CalDAV zur Behandlung von Kalendern einzubeziehen. Aber alle diese \*DAV-Erweiterungen hatten einen Fehler: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Nutzung von HTTP entworfen: {{Glossary("REST", "Representational State Transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern stützte sich auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API bereitzustellen, die ihre Daten abrufen und ändern konnte, ohne die Browser oder die Server aktualisieren zu müssen. Alle notwendigen Informationen wurden in den Dateien eingebettet, die Websites über standardmäßiges HTTP/1.1 bereitstellen. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und die vollständige Kontrolle über sie hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 stehen Webseiten mehr APIs zur Verfügung. Einige dieser APIs schaffen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-Sent Events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig von dem Sicherheitsmodell des Webs, bekannt als die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Tatsächlich wurde das aktuelle Sicherheitsmodell des Webs nach der Entwicklung von HTTP erarbeitet! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wie viel und wann solche Beschränkungen aufgehoben werden sollten, über eine neue Reihe von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zum Schutz der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}} aber es gibt noch viele mehr.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Zeit wurden Webseiten komplizierter. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Skripte, die Interaktivität hinzufügten, nahmen ebenfalls zu. Viel mehr Daten wurden über deutlich mehr HTTP-Anfragen übertragen und dies verursachte mehr Komplexität und Overhead für HTTP/1.1-Verbindungen. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Diese alternative Art des Datenaustauschs zwischen Client und Server erweckte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Steigerung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll statt eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexiertes Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese oft ähnlich sind unter einer Reihe von Anfragen, entfernt dies die Duplizierung und den Overhead der übertragenen Daten.

Offiziell im Mai 2015 standardisiert, erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46.9% aller Webseiten ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Websites mit hohem Datenverkehr zeigten die rascheste Übernahme, um die Übertragungsüberlastung und die darauf folgenden Budgets einzusparen.

Diese rasche Übernahme war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktueller Server erforderlich, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Anzahl von Gruppen war nötig, um die Übernahme auszulösen, und da ältere Browser- und Server-Versionen erneuert wurden, stieg die Nutzung auf natürliche Weise an, ohne signifikante Arbeit für Webentwickler.

## Post-HTTP/2-Entwicklung

Die Erweiterbarkeit des HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere können wir neue Erweiterungen des HTTP-Protokolls erwähnen, die 2016 eingeführt wurden:

- Die Unterstützung für {{HTTPHeader("Alt-Svc")}} erlaubte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints) ermöglichte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardware-Einschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half, sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat die gleichen Semantiken wie frühere Versionen von HTTP, verwendet aber {{Glossary("QUIC", "QUIC")}} statt {{Glossary("TCP", "TCP")}} für den Transportprotokoll-Teil. Bis Oktober 2022 nutzten [26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist für deutlich niedrigere Latenzzeiten bei HTTP-Verbindungen konzipiert. Wie HTTP/2 ist es ein multiplexiertes Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass Paketverlust-Erkennung und -Übertragung, die auf der TCP-Ebene gehandhabt werden, alle Streams blockieren kann. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} aus und implementiert die Paketverlust-Erkennung und -Übertragung unabhängig für jeden Stream, sodass bei einem Fehler nur der Stream mit den Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.

## Siehe auch

- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
- Glossar Begriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
