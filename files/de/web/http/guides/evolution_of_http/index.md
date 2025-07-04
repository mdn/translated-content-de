---
title: Entwicklung von HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die halfen, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu formen. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll zur Dateiübertragung in einer semivertrauenswürdigen Laboreinrichtung zu einem modernen Internet-Labyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D transportiert.

## Erfindung des World Wide Web

1989 schrieb Tim Berners-Lee während seiner Arbeit am CERN einen Vorschlag für den Aufbau eines Hypertext-Systems über das Internet. Ursprünglich _Mesh_ genannt, wurde es während der Implementierung 1990 in _World Wide Web_ umbenannt. Aufgebaut auf den bestehenden TCP- und IP-Protokollen, bestand es aus vier Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, die _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um Zugriff auf das Dokument zu gewähren, eine frühe Version von _httpd_.

Diese vier Bausteine wurden bis Ende 1990 fertiggestellt, und die ersten Server waren Anfang 1991 außerhalb des CERN in Betrieb. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen _alt.hypertext_ Newsgroup. Dies wird heute als der offizielle Start des World Wide Web als öffentliches Projekt angesehen.

Das HTTP-Protokoll, das in diesen frühen Phasen verwendet wurde, war sehr einfach. Es wurde später HTTP/0.9 genannt und manchmal als Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt vom Pfad zur Ressource. Die vollständige URL wurde nicht einbezogen, da das Protokoll, der Server und der Port einmal mit dem Server verbunden nicht notwendig waren.

```http
GET /my-page.html
```

Auch die Antwort war extrem einfach; sie bestand nur aus der Datei selbst.

```html
<html>
  An text-only web page
</html>
```

Im Gegensatz zu den späteren Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Bei einem Problem wurde eine spezifische HTML-Datei generiert, die eine Beschreibung des Problems für Menschen zur Verfügung stellte.

## HTTP/1.0 – Erweiterbarkeit schaffen

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden bei jeder Anfrage gesendet (`HTTP/1.0` wurde der `GET`-Zeile hinzugefügt).
- Eine Statuscode-Zeile wurde auch am Anfang einer Antwort gesendet. Dies erlaubte es dem Browser selbst, den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen, z.B. den Cache auf bestimmte Weise zu aktualisieren oder zu verwenden.
- Das Konzept der HTTP-Header wurde sowohl für Anfragen als auch Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten Dokumente außer einfachen HTML-Dateien übertragen werden.

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

Dies wurde von einer zweiten Verbindung und einer Anfrage zum Abrufen des Bildes gefolgt (mit der entsprechenden Antwort):

```http
GET /my-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

Zwischen 1991-1995 wurden diese mit einem "Versuch-und-Fehler"-Ansatz eingeführt. Ein Server und ein Browser fügten ein Feature hinzu und beobachteten, ob es Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein informelles Dokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies wurde als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu der vielfältigen Umsetzung von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrfach geöffnet werden, um die in dem einzelnen ursprünglichen Dokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies ermöglichte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übermittelt wurde. Dies senkte die Latenz der Kommunikation.
- Chunked-Antworten wurden ebenfalls unterstützt.
- Zusätzliche Cache-Control-Mechanismen wurden eingeführt.
- Content-Negotiation, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten nun vereinbaren, welche Inhalte ausgetauscht werden.
- Dank des {{HTTPHeader("Host")}} Headers, ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, das Server-Collocating.

Das folgende Beispiel illustriert eine typische Sequenz von HTTP/1.1-Anfragen, die über eine einzelne persistente TCP-Verbindung gesendet werden, um zu zeigen, wie Clients Verbindungen wiederverwenden können, um Ressourcen effizienter zu laden.
Die erste Anfrage ruft eine Webseite ab, und der Server reagiert mit einem HTML-Dokument.
Der Client sendet dann weitere Anfragen sequentiell, während er auf CSS- und JavaScript-Ressourcen im HTML stößt:

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

Das Einrichten einer TCP-Verbindung ist ein kostspieliger Teil des Client-Server-Austauschs, und der {{Glossary("TCP_slow_start", "TCP Slow Start")}} bedeutet, dass länger laufende Verbindungen schneller sind als neu erstellte.
HTTP/1.1 ermöglicht es, eine TCP-Verbindung für mehrere Anfragen und Antworten wiederzuverwenden, um die Erstellung einer neuen Verbindung für jede Anfrage zu vermeiden.
Allerdings mussten die Clients noch warten, bis jede Ressource heruntergeladen war, bevor sie die nächste anforderten ({{Glossary("Head_of_line_blocking", "Head-of-Line-Blocking")}}).
Um dies zu umgehen, erlauben die meisten Browser bis zu sechs TCP-Verbindungen pro Website (oder {{Glossary("origin", "Origin")}}).
Mit sechs parallelen Verbindungen können Browser mehrere Ressourcen gleichzeitig mithilfe des HTTP/1.1-Modells abrufen, wodurch signifikante Leistungsverbesserungen hinzugefügt wurden.

HTTP/1.1 wurde erstmals als {{rfc(2068)}} im Januar 1997 veröffentlicht.

## Mehr als zwei Jahrzehnte Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es mehr als 15 Jahre extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist nun in die folgenden Dokumente unterteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), die für alle HTTP-Versionen gelten, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}), und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation schließlich den Status eines Internet-Standards (STD 97), während sie zuvor immer ein vorgeschlagener/Entwurfsstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Veränderung an HTTP wurde Ende 1994 vorgenommen. Statt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Service-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Transportschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dafür verschlüsselten und garantierten sie die Authentizität der zwischen Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und wurde zu TLS.

Im gleichen Zeitraum wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht länger ein größtenteils akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Einzelpersonen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die auf HTTP basierenden Anwendungen immer leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandort benötigten, wurde TLS außerhalb des E-Commerce-Falls notwendig.

### Nutzung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP nicht ursprünglich als reines Lesemedium konzipiert. Er wollte ein Netz schaffen, in dem Menschen Dokumente remote hinzufügen und verschieben konnten - eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um Authoring zu ermöglichen, und ein Standard namens WebDAV wurde erstellt. Es entwickelte sich, um spezifische Anwendungen wie CardDAV für den Umgang mit Adressbucheinträgen und CalDAV für den Umgang mit Kalendern zu umfassen. Aber all diese \*DAV-Erweiterungen hatten einen Mangel: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Nutzung von HTTP entworfen: {{Glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf neuen HTTP-Methoden, sondern stattdessen auf dem Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies erlaubte jeder Webanwendung, einer API den Zugriff und die Änderung ihrer Daten zu ermöglichen, ohne dass die Browser oder die Server aktualisiert werden mussten. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Webseiten über den Standard HTTP/1.1 bedienten. Der Nachteil des REST-Modells war, dass jede Webseite ihre eigene, nicht standardisierte RESTful API definierte und die volle Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 stehen mehr APIs für Webseiten zur Verfügung. Einige dieser APIs erstellen Erweiterungen des HTTP-Protokolls zu spezifischen Zwecken:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das beim Upgraden einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Auflockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen zu lockern. Der Server übermittelte, wie viel und wann solche Einschränkungen an den Client über einen neuen Satz von HTTP-Headern gelockert werden sollten. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Neben diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es gibt viele mehr.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Skripte, die Interaktivität hinzufügten, nahmen ebenfalls zu. Viel mehr Daten wurden über erheblich mehr HTTP-Anfragen übertragen, was mehr Komplexität und Overhead für HTTP/1.1-Verbindungen schuf. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Diese alternative Methode zum Datenaustausch zwischen Client und Server erregte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Erhöhung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Basis für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstelle eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexed Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls beseitigt werden.
- Es komprimiert Header. Da diese oft ähnlich zwischen einer Reihe von Anfragen sind, entfernt dies die Duplizierung und den Overhead der übertragenen Daten.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46,9 % aller Webseiten ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Websites mit hohem Datenverkehr zeigten die schnellste Verbreitung, um Overhead bei der Datenübertragung und damit einhergehende Budgets zu sparen.

Diese schnelle Verbreitung war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu verwenden, war nur ein aktueller Server notwendig, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Anzahl von Gruppen war nötig, um die Verbreitung auszulösen, und da veraltete Browser- und Server-Versionen erneuert wurden, nahm die Nutzung natürlich zu, ohne dass signifikante Arbeit für Webentwickler erforderlich war.

## Evolution nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Besonders bemerkenswert sind neue Erweiterungen des HTTP-Protokolls, die 2016 erschienen:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) erlaubte es dem Browser oder Client proaktiv Informationen über seine Anforderungen und Hardwareeinschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3 hat die gleichen Semantiken wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} statt {{Glossary("TCP", "TCP")}} für den Transportprotokollteil. Bis Oktober 2022 nutzten [26 % aller Webseiten HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, eine viel geringere Latenz für HTTP-Verbindungen zu bieten. Wie HTTP/2 ist es ein multiplexed Protokoll, aber HTTP/2 läuft über eine einzige TCP-Verbindung, sodass die auf der TCP-Schicht behandelte Paketverlust-Erkennung und -Übertragung alle Streams blockieren kann. QUIC läuft mehrere Streams über {{Glossary("UDP", "UDP")}} und implementiert die Paketverlust-Erkennung und -Übertragung unabhängig für jeden Stream, sodass im Fehlerfall nur der Stream mit den Daten in jenem Paket blockiert ist.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.

## Siehe auch

- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
