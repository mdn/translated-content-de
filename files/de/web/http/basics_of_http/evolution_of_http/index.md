---
title: Entwicklung von HTTP
slug: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: 73a13d5f9de56d0fc89896ee7f7e54d5c1bc8e2d
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das dazu gedacht war, Dateien in einer semivertraulichen Laborumgebung auszutauschen, zu einem modernen Internet-Dschungel entwickelt hat, der Bilder und Videos in hoher Auflösung und 3D überträgt.

## Erfindung des World Wide Web

1989 schrieb Tim Berners-Lee, während er am CERN arbeitete, einen Vorschlag, um ein Hypertext-System über das Internet zu bauen. Ursprünglich _Mesh_ genannt, wurde es während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Es basierte auf den bestehenden TCP- und IP-Protokollen und bestand aus 4 Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, das _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austauschen dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zum Anzeigen (und Bearbeiten) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um Zugriff auf das Dokument zu gewähren, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server liefen außerhalb von CERN Anfang 1991. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen _alt.hypertext_ Newsgroup. Dies wird heute als der offizielle Beginn des World Wide Web als öffentliches Projekt betrachtet.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später als HTTP/0.9 bezeichnet und wird manchmal als Ein-Zeilen-Protokoll genannt.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später als 0.9 bezeichnet, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt von dem Pfad zur Ressource. Die vollständige URL war nicht enthalten, da das Protokoll, der Server und der Port nicht mehr benötigt wurden, sobald die Verbindung zum Server hergestellt war.

```http
GET /mypage.html
```

Auch die Antwort war extrem einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu den folgenden Entwicklungen gab es keine HTTP-Header. Das bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Trat ein Problem auf, wurde eine spezifische HTML-Datei generiert, die eine Beschreibung des Problems für den menschlichen Konsum enthielt.

## HTTP/1.0 – Aufbau von Erweiterbarkeit

HTTP/0.9 war sehr eingeschränkt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden in jede Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angefügt).
- Eine Statuscode-Zeile wurde ebenfalls zu Beginn einer Antwort gesendet. Dadurch konnte der Browser selbst erkennen, ob eine Anfrage erfolgreich oder fehlgeschlagen war, und sein Verhalten entsprechend anpassen, z. B. seinen lokalen Cache auf eine bestimmte Weise aktualisieren oder verwenden.
- Das Konzept der HTTP-Header wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten nun auch andere Dokumente als einfache HTML-Dateien übertragen werden.

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

Zwischen 1991-1995 wurden diese mit einem Versuch-und-sehen-Ansatz eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und sahen, ob sie Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies war als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

Unterdessen lief die ordnungsgemäße Standardisierung parallel zu den verschiedenen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Mehrdeutigkeiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Es musste nicht mehr mehrfach geöffnet werden, um die eingebetteten Ressourcen in dem einzigen ursprünglichen Dokument anzuzeigen.
- Pipelining wurde hinzugefügt. Dadurch konnte eine zweite Anfrage gesendet werden, bevor die Antwort auf die erste vollständig übertragen wurde. Dies verringerte die Latenz der Kommunikation.
- Chunked-Responses wurden ebenfalls unterstützt.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Die Inhaltsverhandlung, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten nun vereinbaren, welchen Inhalt sie austauschen.
- Dank des {{HTTPHeader("Host")}} Headers war es möglich, verschiedene Domains von derselben IP-Adresse zu hosten, was Server-Kollokation erlaubte.

Ein typischer Fluss von Anfragen, alle über eine einzige Verbindung, sah so aus:

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

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Auch wenn das HTTP/1.1-Protokoll über zwei Revisionen hinweg verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es mehr als 15 Jahre extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist nun in die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), die für alle HTTP-Versionen gelten, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Außerdem erreichte die Spezifikation schließlich den Status eines Internetstandards (STD 97), während sie zuvor immer ein vorgeschlagener/Entwurf-Standard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Statt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Service-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Hierfür verschlüsselten sie die Nachrichten und gewährleisteten deren Authentizität zwischen Server und Client. SSL wurde schließlich standardisiert und zu TLS.

Im gleichen Zeitraum wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr ein weitgehend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Zufallsnutzer und Kriminelle um so viele private Daten wie möglich wetteiferten. Da die auf HTTP basierenden Anwendungen leistungsfähiger wurden und Zugang zu privaten Informationen wie Adressbüchern, E-Mails und Benutzerstandorten benötigten, wurde TLS auch außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte ursprünglich HTTP nicht als nur-lese Medium konzipiert. Er wollte ein Web erschaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben könnten - eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Autorieren zu erlauben, und ein Standard namens WebDAV wurde geschaffen. Er wuchs dazu, spezifische Anwendungen wie CardDAV zur Handhabung von Adressbucheinträgen und CalDAV für den Umgang mit Kalendern einzuschließen. Aber all diese \*DAV-Erweiterungen hatten einen Nachteil: sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Verwendung von HTTP entworfen: {{Glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern stützte sich auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies erlaubte jeder Webanwendung, einer API das Abrufen und Ändern ihrer Daten zu ermöglichen, ohne die Browser oder Server aktualisieren zu müssen. Alle notwendigen Informationen wurden in den Dateien eingebettet, die die Websites über den Standard HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und die vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 wurden mehr APIs für Webseiten verfügbar gemacht. Mehrere dieser APIs erstellen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Hochstufen einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Lockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell nach der Schaffung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Beschränkungen dieser Richtlinie unter bestimmten Bedingungen zu lockern. Der Server übermittelte wie viel und wann solche Beschränkungen an den Client gelockert werden sollten, mittels eines neuen Satzes von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und von der [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Neben diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es gibt noch viele mehr.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar eigenständige Anwendungen. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Skripte, die Interaktivität hinzufügten, nahmen ebenfalls zu. Viel mehr Daten wurden über erheblich mehr HTTP-Anfragen übertragen, was zu mehr Komplexität und Overhead für HTTP/1.1-Verbindungen führte. Um dies zu berücksichtigen, implementierte Google Anfang der 2010er Jahre ein experimentelles Protokoll namens SPDY. Dieser alternative Weg, um Daten zwischen Client und Server auszutauschen, erregte das Interesse von Entwicklern, die an Browsern und Servern arbeiteten. SPDY definierte eine Steigerung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung, was als Grundlage für das HTTP/2-Protokoll diente.

Das HTTP/2-Protokoll unterscheidet sich in ein paar Aspekten von HTTP/1.1:

- Es ist ein binäres Protokoll statt eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multipelxtes Protokoll. Parallele Anfragen können über dieselbe Verbindung gemacht werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese oft ähnelnd bei einer Reihe von Anfragen sind, beseitigt dies die Duplizierung und den Overhead der übertragenen Daten.
- Es erlaubt einem Server, Daten über einen Mechanismus namens Server-Push im Client-Cache zu speichern.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 einen Höchststand von 46,9% aller Websites (siehe [diese Statistik](https://w3techs.com/technologies/details/ce-http2)). Websites mit hohem Datenverkehr zeigten die schnellste Annahme, um bei der Datenübertragung Overhead und anschließende Budgets zu sparen.

Diese schnelle Annahme war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktueller Server erforderlich, der mit einem aktuellen Browser kommunizierte. Nur ein begrenzter Satz von Gruppen war nötig, um die Annahme auszulösen, und als veraltete Browser- und Serverversionen erneuert wurden, erhöhte sich die Nutzung auf natürliche Weise, ohne signifikante Arbeit für Webentwickler.

## Evolution nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere können wir neue Erweiterungen des HTTP-Protokolls nennen, die 2016 erschienen:

- Support für {{HTTPHeader("Alt-Svc")}} erlaubte die Trennung der Identifizierung und der Standortbestimmung einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Client_hints) erlaubte es dem Browser oder Client, dem Server proaktiv Informationen über seine Anforderungen und Hardware-Einschränkungen mitzuteilen.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}}-Header half, sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat die gleichen Semantiken wie die früheren Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für den Transport-Schicht-Teil. Bis Oktober 2022 [verwendeten 26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, eine viel geringere Latenz für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein vielfach verwendetes Protokoll, aber HTTP/2 läuft über eine einzige TCP-Verbindung, sodass Paketverlusterkennung und -wiederausstrahlung auf der TCP-Schicht alle Streams blockieren können. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} aus und implementiert Paketverlusterkennung und -wiederausstrahlung unabhängig für jeden Stream, sodass bei einem Fehler nur der Stream mit den Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.
