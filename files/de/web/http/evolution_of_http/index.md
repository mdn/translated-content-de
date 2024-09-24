---
title: Die Entwicklung von HTTP
slug: Web/HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die geholfen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu formen. Lesen Sie weiter, um zu erfahren, wie HTTP sich von einem Protokoll zum Austausch von Dateien in einer semivertrauensvollen Laborumgebung zu einem modernen Internetlabyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D überträgt.

## Erfindung des World Wide Web

1989, während er bei CERN arbeitete, schrieb Tim Berners-Lee einen Vorschlag für den Aufbau eines Hypertext-Systems über das Internet. Ursprünglich _Mesh_ genannt, wurde es während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Es wurde über die bestehenden TCP- und IP-Protokolle aufgebaut und bestand aus vier Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, das _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server zum Zugriff auf das Dokument, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server liefen außerhalb von CERN Anfang 1991. Am 6. August 1991 veröffentlichte Tim Berners-Lee [einen Beitrag](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) in der öffentlichen _alt.hypertext_ Newsgroup. Dies gilt heute als der offizielle Start des World Wide Web als öffentliches Projekt.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als das Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version des HTTP hatte keine Versionsnummer; es wurde später 0.9 genannt, um es von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt vom Pfad zur Ressource. Die vollständige URL wurde nicht eingeschlossen, da das Protokoll, der Server und der Port nicht notwendig waren, sobald eine Verbindung zum Server bestand.

```http
GET /mypage.html
```

Auch die Antwort war extrem einfach: sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu den nachfolgenden Entwicklungen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn ein Problem auftrat, wurde eine spezifische HTML-Datei generiert, die eine Beschreibung des Problems zur menschlichen Nutzung enthielt.

## HTTP/1.0 – Erweiterungsfähigkeit aufbauen

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden in jeder Anfrage gesendet (`HTTP/1.0` wurde der `GET`-Zeile hinzugefügt).
- Eine Statuscode-Zeile wurde ebenfalls zu Beginn einer Antwort gesendet. Dies ermöglichte es dem Browser selbst, den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen. Zum Beispiel, den lokalen Cache auf eine bestimmte Art zu aktualisieren oder zu verwenden.
- Das Konzept von HTTP-Headern wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}}-Headers konnten andere Dokumente als reine HTML-Dateien übertragen werden.

Zu dieser Zeit sah eine typische Anfrage und Antwort so aus:

```http
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>
```

Es folgte eine zweite Verbindung und eine Anfrage, um das Bild abzurufen (mit der entsprechenden Antwort):

```http
GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

Zwischen 1991-1995 wurden diese mit einem Versuch-und-Schaue-Ansatz eingeführt. Ein Server und ein Browser fügten ein Feature hinzu und sahen, ob es Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies war bekannt als {{RFC(1945)}} und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den vielfältigen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehrfach geöffnet werden, um die in das einzelne Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies ermöglichte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen war. Dies senkte die Latenz der Kommunikation.
- Unterstützte auch chunked responses.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Inhaltsverhandlungen, einschließlich Sprache, Kodierung und Typ, wurden eingeführt. Ein Client und ein Server konnten nun vereinbaren, welchen Inhalt sie austauschen möchten.
- Dank des {{HTTPHeader("Host")}}-Headers konnte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, die Server-Kollokation ermöglichen.

Ein typischer Fluss von Anfragen, alle durch eine einzige Verbindung, sah so aus:

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

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll in zwei Überarbeitungen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es mehr als 15 Jahre extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur wurde HTTP/1.1 aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist jetzt in folgende Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), das für alle HTTP-Versionen gilt, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation endlich den Status eines Internetstandards (STD 97), während sie zuvor immer ein vorgeschlagener/Entwurfstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, entwickelte das Computer-Service-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Um dies zu tun, verschlüsselten sie und gewährleisteten die Authentizität der zwischen dem Server und dem Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und wurde zu TLS.

In derselben Zeit wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr ein hauptsächlich akademisches Netzwerk, sondern wurde zu einem Dschungel, wo Werbetreibende, zufällige Personen und Kriminelle um möglichst viele private Daten konkurrierten. Da die über HTTP gebauten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandort benötigten, wurde TLS außerhalb des E-Commerce-Anwendungsfalls erforderlich.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als schreibgeschütztes Medium konzipiert. Er wollte ein Web schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben können – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um Authoring zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Es wuchs, um spezifische Anwendungen wie CardDAV für die Handhabung von Adressbucheinträgen und CalDAV für die Verarbeitung von Kalendern zu umfassen. Aber all diese \*DAV-Erweiterungen hatten einen Fehler: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster zur Verwendung von HTTP entworfen: {{Glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern verließ sich auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies erlaubte jeder Webanwendung, einer API zu ermöglichen, ihre Daten abzurufen und zu ändern, ohne den Browser oder die Server aktualisieren zu müssen. Alle notwendigen Informationen wurden in die Dateien eingebettet, die die Websites über standardmäßiges HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und die totale Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Einige dieser APIs erstellen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Auflockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als die [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Sicherheitsmodell des Webs nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wie viel und wann solche Beschränkungen aufgehoben werden sollten, mithilfe eines neuen Satzes von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Steuerung der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es gibt noch viele mehr.

## HTTP/2 – Ein Protokoll für größere Leistung

Im Laufe der Jahre wurden Webseiten immer komplexer. Einige von ihnen waren sogar eigenständige Anwendungen. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Skripte, die Interaktivität hinzufügten, nahmen ebenfalls zu. Viel mehr Daten wurden über deutlich mehr HTTP-Anfragen übertragen, was mehr Komplexität und Overhead für HTTP/1.1-Verbindungen verursachte. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Diese alternative Art des Datenaustauschs zwischen Client und Server erregte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Erhöhung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstatt eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hürden ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexiertes Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese oft unter einem Satz von Anfragen ähnlich sind, entfernt dies die Duplizierung und den Overhead der übertragenen Daten.
- Es erlaubt einem Server, Daten über einen Mechanismus namens Server Push in einen Client-Cache einzubringen.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46,9% aller Websites ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Hochfrequentierte Websites zeigten die schnellste Einführung, um Datenübertragungs-Overhead und die damit verbundenen Budgets zu sparen.

Diese schnelle Einführung war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu verwenden, war nur ein aktueller Server notwendig, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Gruppe von Gruppen war notwendig, um die Einführung auszulösen, und als veraltete Browser- und Serverversionen erneuert wurden, nahm die Nutzung natürlich zu, ohne nennenswerte Arbeit für Webentwickler.

## Evolution nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Besonders erwähnenswert sind neue Erweiterungen des HTTP-Protokolls, die 2016 erschienen:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} erlaubte die Trennung der Identifizierung und des Ortes einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}} Caching-Mechanismus.
- Die Einführung von [Client Hints](/de/docs/Web/HTTP/Client_hints) erlaubte es dem Browser oder Client, dem Server proaktiv Informationen über seine Anforderungen und Hardwareeinschränkungen mitzuteilen.
- Die Einführung von sicherheitsrelevanten Präfixen im {{HTTPHeader("Cookie")}} Header half sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat dieselbe Semantik wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für den Transportschichtteil. Bis Oktober 2022 [nutzten 26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, eine viel geringere Latenz für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexiertes Protokoll, jedoch läuft HTTP/2 über eine einzige TCP-Verbindung, sodass Paketverlusterkennung und -wiederherstellung auf der TCP-Ebene alle Streams blockieren kann. QUIC läuft mehrere Streams über {{Glossary("UDP", "UDP")}} und implementiert Paketverlusterkennung und -wiederherstellung unabhängig für jeden Stream, sodass, wenn ein Fehler auftritt, nur der Stream mit den Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.
