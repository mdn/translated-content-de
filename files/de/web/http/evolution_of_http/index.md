---
title: Evolution von HTTP
slug: Web/HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die geholfen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das ursprünglich zum Austausch von Dateien in einer semivertrauten Laborumgebung konzipiert wurde, zu einem modernen Internetnetzwerk entwickelt hat, das hochauflösende Bilder und Videos in 3D überträgt.

## Erfindung des World Wide Web

Im Jahr 1989 schrieb Tim Berners-Lee, während er bei CERN arbeitete, einen Vorschlag zur Entwicklung eines Hypertext-Systems über das Internet. Ursprünglich _Mesh_ genannt, wurde es während der Implementierung 1990 in _World Wide Web_ umbenannt. Es wurde über die bestehenden TCP- und IP-Protokolle aufgebaut und bestand aus vier Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, die _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austauschen dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um Zugriff auf das Dokument zu bieten, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt und die ersten Server liefen Anfang 1991 außerhalb von CERN. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies wird jetzt als offizieller Start des World Wide Web als öffentliches Projekt betrachtet.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als das Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; es wurde später 0.9 genannt, um es von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}}, gefolgt vom Pfad zur Ressource. Die vollständige URL war nicht enthalten, da das Protokoll, der Server und der Port nicht mehr nötig waren, sobald die Verbindung zum Server hergestellt war.

```http
GET /my-page.html
```

Auch die Antwort war extrem einfach: sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlermeldungen. Wenn ein Problem auftrat, wurde eine spezielle HTML-Datei generiert und enthielt eine Beschreibung des Problems zur menschlichen Nutzung.

## HTTP/1.0 – Aufbau von Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden innerhalb jeder Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Eine Statuszeile wurde auch zu Beginn einer Antwort gesendet. Dadurch konnte der Browser selbst den Erfolg oder das Scheitern einer Anfrage erkennen und sein Verhalten entsprechend anpassen. Zum Beispiel, indem er seinen lokalen Cache auf eine bestimmte Weise aktualisierte oder nutzte.
- Das Konzept der HTTP-Header wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden, und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des Headers {{HTTPHeader("Content-Type")}} konnten auch andere Dokumente als reine HTML-Dateien übertragen werden.

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

Zwischen 1991-1995 wurden diese mit einem Versuch-und-Schau-Ansatz eingeführt. Ein Server und ein Browser fügte ein Feature hinzu und sah, ob es Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die üblichen Praktiken beschrieb. Es war als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den verschiedenen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrmals geöffnet werden, um die in ein einziges Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies ermöglichte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Chunked-Antworten wurden ebenfalls unterstützt.
- Zusätzliche Cache-Control-Mechanismen wurden eingeführt.
- Content-Negotiation, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten nun vereinbaren, welchen Inhalt sie austauschen möchten.
- Dank des Headers {{HTTPHeader("Host")}} konnte ein Server verschiedene Domains von derselben IP-Adresse aus hosten, was die Zusammenlegung von Servern ermöglichte.

Ein typischer Fluss von Anfragen, alle über eine einzelne Verbindung, sah so aus:

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

HTTP/1.1 wurde erstmals als {{rfc(2068)}} im Januar 1997 veröffentlicht.

## Mehr als zwei Jahrzehnte Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es mehr als 15 Jahre lang extrem stabil. HTTP/1.1 wurde 2022 mit {{RFC("9110")}} erneut aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist jetzt in die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), anwendbar auf alle HTTP-Versionen, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation endlich den Status eines Internetstandards (STD 97), während sie zuvor immer ein vorgeschlagener/Entwurfstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, entwickelte das Computer-Service-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Einrichtung von E-Commerce-Websites. Um dies zu tun, verschlüsselten sie die Nachrichten zwischen Server und Client und garantierten deren Authentizität. SSL wurde schließlich standardisiert und wurde zu TLS.

In derselben Zeit wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht länger ein überwiegend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Einzelpersonen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die auf HTTP basierenden Anwendungen immer leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandorte erforderten, wurde TLS außerhalb des E-Commerce-Usecase notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee stellte sich HTTP ursprünglich nicht als reines Lesemedium vor. Er wollte ein Web schaffen, in dem Menschen Dokumente remote hinzufügen und verschieben konnten — eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Autorisieren zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Es wuchs zu spezifischen Anwendungen wie CardDAV zur Handhabung von Adressbucheinträgen und CalDAV zur Verwaltung von Kalendern. Aber all diese \*DAV-Erweiterungen hatten einen Fehler: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster zur Verwendung von HTTP entworfen: {{Glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf neuen HTTP-Methoden, sondern beruhte auf dem Zugriff auf spezifische URIs mit einfachen HTTP/1.1-Methoden. Dies erlaubte es jeder Webanwendung, einer API den Abruf und die Modifikation ihrer Daten zu ermöglichen, ohne die Browser oder Server aktualisieren zu müssen. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites über standard HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und totale Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten zugänglich geworden. Mehrere dieser APIs erstellen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), wo der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als die [Same-origin policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Sicherheitsmodell des Webs nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre stellte es sich als nützlich heraus, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte, wie viel und wann solch Einschränkungen aufgehoben werden sollten, an den Client über eine neue Satz von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und die [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Neben diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Erwähnenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}})-Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}} aber es existieren viele mehr.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe von Skripten, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über deutlich mehr HTTP-Anfragen übertragen, was mehr Komplexität und Overhead für HTTP/1.1-Verbindungen verursachte. Um dem Rechnung zu tragen, implementierte Google Anfang der 2010er Jahre ein experimentelles Protokoll namens SPDY. Diese alternative Art, Daten zwischen Client und Server auszutauschen, weckte das Interesse von Entwicklern, die an Browsern und Servern arbeiteten. SPDY definierte eine Erhöhung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstelle eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses erlaubt es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein Multiplexing-Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls beseitigt werden.
- Es komprimiert Header. Da diese oft ähnlich unter einem Satz von Anfragen sind, wird das Duplizieren und der Overhead der übertragenen Daten entfernt.

Offiziell standardisiert im Mai 2015, erreichte der Einsatz von HTTP/2 im Januar 2022 mit 46.9% aller Websites seinen Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Webseiten mit hohem Traffic zeigten die schnellste Adoption, um auf Datenübertragungsoverhead und folglich auf Budgets zu sparen.

Diese schnelle Adoption war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu verwenden, war nur ein aktueller Server erforderlich, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Gruppe von Gruppen war nötig, um die Adoption zu initiieren, und als veraltete Browser- und Serverversionen erneuert wurden, stieg die Nutzung natürlich, ohne signifikante Arbeit für Webentwickler.

## Post-HTTP/2-Entwicklung

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere können wir neue Erweiterungen des HTTP-Protokolls zitieren, die 2016 auftauchten:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Client_hints) erlaubte es dem Browser oder Client, dem Server proaktiv Informationen über seine Anforderungen und Hardwarebeschränkungen mitzuteilen.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}}-Header half zu garantieren, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat dieselben Semantiken wie frühere Versionen von HTTP, verwendet aber {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für den Transportprotokollteil. Bis Oktober 2022 [nutzten 26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, eine viel niedrigere Latenz für HTTP-Verbindungen zu bieten. Wie HTTP/2 ist es ein Multiplexing-Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass die Verlustdetektion und -wiedergabe, die auf der TCP-Ebene behandelt wird, alle Streams blockieren kann. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} aus und implementiert Verlustdetektion und -wiedergabe unabhängig für jeden Stream, sodass, wenn ein Fehler auftritt, nur der Stream mit den Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.

## Siehe auch

- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Resources_and_specifications)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
