---
title: Evolution des HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

**HTTP** (Hypertext-Übertragungsprotokoll) ist das zugrundeliegende Protokoll des World Wide Web. Zwischen 1989-1991 von Tim Berners-Lee und seinem Team entwickelt, hat HTTP viele Veränderungen durchlaufen, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das zum Austausch von Dateien in einer halbvertrauten Laborumgebung entwickelt wurde, zu einem modernen Internetlabyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D transportiert.

## Erfindung des World Wide Web

Im Jahr 1989 schrieb Tim Berners-Lee während seiner Arbeit am CERN einen Vorschlag, ein Hypertext-System über das Internet zu bauen. Ursprünglich _Mesh_ genannt, wurde es während der Umsetzung 1990 in _World Wide Web_ umbenannt. Aufgebaut auf den bestehenden TCP- und IP-Protokollen, bestand es aus vier Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, das _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein Protokoll zum Austausch dieser Dokumente, das _Hypertext-Übertragungsprotokoll_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um Zugriff auf das Dokument zu gewähren, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server liefen Anfang 1991 außerhalb von CERN. Am 6. August 1991 [veröffentlichte](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee einen Beitrag in der öffentlichen Newsgroup _alt.hypertext_. Dies wird heute als der offizielle Beginn des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und manchmal als Einzeilenprotokoll bezeichnet.

## HTTP/0.9 – Das Einzeilenprotokoll

Die Anfangsversion von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt vom Pfad zur Ressource. Die vollständige URL war nicht enthalten, da Protokoll, Server und Port nicht benötigt wurden, sobald die Verbindung zum Server bestand.

```http
GET /my-page.html
```

Die Antwort war ebenso einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  An text-only web page
</html>
```

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Bei einem Problem wurde eine spezifische HTML-Datei erzeugt, die eine Beschreibung des Problems für den menschlichen Konsum enthielt.

## HTTP/1.0 – Aufbau von Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden in jede Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Auch eine Statuscodezeile wurde zu Beginn einer Antwort gesendet. Dadurch konnte der Browser selbst den Erfolg oder Misserfolg einer Anfrage erkennen und sein Verhalten entsprechend anpassen. Zum Beispiel durch Aktualisierung oder spezifische Nutzung seines lokalen Caches.
- Das Konzept der HTTP-Header wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten Dokumente, die nicht nur einfache HTML-Dateien waren, übertragen werden.

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

Zwischen 1991 und 1995 wurden diese mit einem Versuch-und-Schau-Ansatz eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und beobachteten, ob sie Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies war bekannt als {{RFC(1945)}} und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den vielfältigen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrmals geöffnet werden, um die in das ursprüngliche Dokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dadurch konnte eine zweite Anfrage gesendet werden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Chunked Responses wurden ebenfalls unterstützt.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Content Negotiation, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten sich jetzt darauf einigen, welche Inhalte ausgetauscht werden sollten.
- Dank des {{HTTPHeader("Host")}} Headers wurde die Möglichkeit eingeführt, verschiedene Domains von derselben IP-Adresse aus zu hosten, was die Server-Kollokation ermöglichte.

Ein typischer Ablauf von Anfragen, alle durch eine einzige Verbindung, sah so aus:

```http
GET /en-US/docs/Glossary/CORS-safelisted_request_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_request_header

HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)

GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/CORS-safelisted_request_header

HTTP/1.1 200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

(image content of 3077 bytes)
```

HTTP/1.1 wurde erstmals im Januar 1997 als {{rfc(2068)}} veröffentlicht.

## Mehr als zwei Jahrzehnte Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Auch wenn das HTTP/1.1 Protokoll über zwei Revisionen hinweg verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es über mehr als 15 Jahre äußerst stabil. HTTP/1.1 wurde 2022 erneut aktualisiert mit {{RFC("9110")}}. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist jetzt in folgende Dokumente unterteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}) für alle HTTP-Versionen und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Zusätzlich erreichte die Spezifikation endlich den Status eines Internet-Standards (STD 97), während sie zuvor immer ein vorgeschlagener/Entwurfsstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Veränderung an HTTP erfolgte Ende 1994. Statt HTTP über eine einfache TCP/IP-Stapel zu senden, schuf die Computerservices-Firma Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dazu verschlüsselten sie und garantierten die Authentizität der zwischen Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und zu TLS.

Im selben Zeitraum wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr größtenteils ein akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, einzelne Personen und Kriminelle um so viele private Daten wie möglich wetteiferten. Da die über HTTP aufgebauten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandort erforderten, wurde TLS außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als reines Lese-Medium vorgesehen. Er wollte ein Web schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und bewegen können – eine Art verteiltes Dateisystem. Etwa 1996 wurde HTTP zu den Zwecken des Erstellens erweitert, und ein Standard namens WebDAV wurde geschaffen. Es wuchs, um spezifische Anwendungen wie CardDAV für die Verwaltung von Adressbucheinträgen und CalDAV für den Umgang mit Kalendern einzubeziehen. Aber all diese \*DAV-Erweiterungen hatten einen Mangel: Sie waren nur dann nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Nutzung von HTTP entworfen: {{Glossary("REST", "Representational State Transfer")}} (oder REST). Die API basierte nicht auf neuen HTTP-Methoden, sondern verließ sich auf den Zugriff auf spezifische URIs mit den grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API zum Abrufen und Ändern ihrer Daten zuzulassen, ohne die Browser oder die Server aktualisieren zu müssen. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites durch standardmäßiges HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful-API definierte und die vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful-APIs wurden in den 2010er Jahren sehr gebräuchlich.

Seit 2005 sind weitere APIs für Webseiten verfügbar geworden. Mehrere dieser APIs schaffen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch ein Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Sicherheitsmodell des Webs erst nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wann und in welchem Umfang solche Einschränkungen aufgehoben werden sollten, unter Verwendung einer neuen Reihe von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Auffallende Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es existieren viele mehr.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar eigenständige Anwendungen. Es wurden mehr visuelle Medien angezeigt und das Volumen und die Größe von Skripten, die Interaktivität hinzufügen, nahmen ebenfalls zu. Deutlich mehr Daten wurden über wesentlich mehr HTTP-Anfragen übertragen, was mehr Komplexität und Overhead für HTTP/1.1-Verbindungen schuf. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Dieser alternative Weg zum Austausch von Daten zwischen Client und Server erregte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Steigerung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung, was als Grundlage für das HTTP/2 Protokoll diente.

Das HTTP/2 Protokoll unterscheidet sich in mehreren Aspekten von HTTP/1.1:

- Es ist ein binäres Protokoll anstelle eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexiertes Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese häufig unter einer Gruppe von Anfragen ähnlich sind, wird so die Duplizierung und der Overhead der übertragenen Daten entfernt.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 ihren Höhepunkt im Januar 2022 mit 46,9% aller Websites (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Webseiten mit hohem Traffic zeigten die schnellste Einführung, um Datenübertragungs-Overhead und anschließende Budgets zu sparen.

Diese schnelle Einführung war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktueller Server notwendig, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Anzahl von Gruppen war erforderlich, um die Einführung auszulösen, und da veraltete Browser- und Serverversionen erneuert wurden, nahm die Nutzung auf natürliche Weise zu, ohne bedeutende Arbeit für Webentwickler.

## Entwicklung nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere sind neue Erweiterungen des HTTP-Protokolls, die 2016 erschienen sind, erwähnenswert:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} erlaubte die Trennung der Identifikation und der Standortbestimmung einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}} Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints) ermöglichte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardwarebeschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste große Version von HTTP, HTTP/3, hat dieselbe Semantik wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für den Transportebene-Teil. Bis Oktober 2022 [nutzten 26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC wurde entwickelt, um deutlich geringere Latenzzeiten für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexiertes Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass die Paketeverlust-Erkennung und -Übertragung, die auf der TCP-Ebene abgewickelt werden, alle Streams blockieren können. QUIC läuft über mehrere Streams über {{Glossary("UDP", "UDP")}} und implementiert Paketeverlust-Erkennung und -Übertragung unabhängig für jeden Stream, sodass bei einem Fehler nur der Stream mit Daten in diesem Paket blockiert wird.

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
