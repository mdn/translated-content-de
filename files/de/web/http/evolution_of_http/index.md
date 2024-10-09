---
title: Entwicklung von HTTP
slug: Web/HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989 und 1991, hat HTTP viele Veränderungen durchlaufen, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll zur Dateiaustausch in einer semi-vertrauenswürdigen Laborumgebung zu einem modernen Internet-Labyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D transportiert.

## Erfindung des World Wide Web

1989, während er bei CERN arbeitete, schrieb Tim Berners-Lee einen Vorschlag für den Aufbau eines Hypertext-Systems über das Internet. Anfangs _Mesh_ genannt, wurde es während der Implementierung 1990 in _World Wide Web_ umbenannt. Entwickelt über den bestehenden TCP- und IP-Protokollen, bestand es aus vier Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, die _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um den Zugriff auf das Dokument zu gewähren, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server außerhalb von CERN liefen Anfang 1991. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies gilt jetzt als offizieller Beginn des World Wide Web als öffentliches Projekt.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als das Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die erste Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von den späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}}, gefolgt vom Pfad zur Ressource. Die vollständige URL war nicht enthalten, da das Protokoll, der Server und der Port nicht notwendig waren, sobald eine Verbindung zum Server bestand.

```http
GET /my-page.html
```

Die Antwort war ebenfalls extrem einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu den nachfolgenden Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn es ein Problem gab, wurde eine spezielle HTML-Datei generiert, die eine Beschreibung des Problems für den menschlichen Konsum enthielt.

## HTTP/1.0 – Ausbau der Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden mit jeder Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Eine Statuscode-Zeile wurde ebenfalls zu Beginn einer Antwort gesendet. Dies ermöglichte es dem Browser, selbst den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen. Zum Beispiel, indem er seinen lokalen Cache auf besondere Weise aktualisiert oder verwendet.
- Das Konzept der HTTP-Header wurde sowohl bei Anfragen als auch bei Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten auch andere Dokumente als einfache HTML-Dateien übertragen werden.

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

Zwischen 1991 und 1995 wurden diese mit einem Versuch-und-Seh-Ansatz eingeführt. Ein Server und ein Browser würden ein Feature hinzufügen und sehen, ob es Verbreitung fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieben hat. Dies war bekannt als {{RFC(1945)}} und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den verschiedenen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrfach geöffnet werden, um die in das ursprüngliche Dokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dadurch konnte eine zweite Anfrage gesendet werden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Gestückelte Antworten wurden ebenfalls unterstützt.
- Zusätzliche Cache-Steuerungsmechanismen wurden eingeführt.
- Inhaltsverhandlung, einschließlich Sprache, Codierung und Typ, wurde eingeführt. Ein Client und ein Server konnten sich jetzt darauf einigen, welchen Inhalt sie austauschen.
- Dank des {{HTTPHeader("Host")}} Headers ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, die Server-Kollokation.

Ein typischer Ablauf von Anfragen, alle über eine einzige Verbindung, sah so aus:

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

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Überarbeitungen, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014, vor der Veröffentlichung von HTTP/2 verfeinert wurde, war es mehr als 15 Jahre lang extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur wurde HTTP/1.1 aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist nun in die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), die für alle HTTP-Versionen gelten, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Zusätzlich hat die Spezifikation schließlich den Status eines Internetstandards (STD 97) erreicht, während sie zuvor immer ein vorgeschlagener/Entwurf-Standard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung am HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Services-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und dessen Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Um dies zu tun, verschlüsselten sie und garantierten die Authentizität der zwischen Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und zu TLS.

Gleichzeitig wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr ein überwiegend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, zufällige Personen und Kriminelle um möglichst viele private Daten konkurrierten. Da die über HTTP erstellten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerstandorte erforderten, wurde TLS auch außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als reines Lesemedium vorgesehen. Er wollte ein Web schaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben konnten – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um Autorisierung zu ermöglichen, und ein Standard namens WebDAV wurde erstellt. Es wuchs, um spezielle Anwendungen wie CardDAV zur Verwaltung von Adressbucheinträgen und CalDAV für den Umgang mit Kalendern zu umfassen. Aber all diese \*DAV-Erweiterungen hatten einen Fehler: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Modell für die Verwendung von HTTP entwickelt: {{Glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern stützte sich auf den Zugang zu spezifischen URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API zum Abrufen und Ändern ihrer Daten bereitzustellen, ohne die Browser oder die Server aktualisieren zu müssen. Alle notwendigen Informationen wurden in die Dateien eingebettet, die die Websites über standardmäßiges HTTP/1.1 lieferten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardmäßige RESTful API definierte und die vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Viele dieser APIs schaffen Erweiterungen des HTTP-Protokolls für spezielle Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Lockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Web-Sicherheitsmodell, bekannt als die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wie viel und wann solche Einschränkungen aufgehoben werden sollen, indem er eine neue Reihe von HTTP-Headern verwendete. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele weitere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Steuerung der Privatsphäre, {{HTTPHeader("X-Frame-Options")}} und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es gibt noch viele mehr.

## HTTP/2 – Ein Protokoll für mehr Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar eigenständige Anwendungen. Es wurden mehr visuelle Medien angezeigt, und das Volumen und die Größe von Skripten, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über erheblich mehr HTTP-Anfragen übertragen, und dies schuf mehr Komplexität und Overhead für HTTP/1.1-Verbindungen. Um dem Rechnung zu tragen, implementierte Google in den frühen 2010er Jahren ein experimentelles Protokoll namens SPDY. Diese alternative Methode zum Datenaustausch zwischen Client und Server erregte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Steigerung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung, was als Grundlage für das HTTP/2-Protokoll diente.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstatt eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexes Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Beschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese oft ähnlich sind unter einem Satz von Anfragen, entfernt dies die Duplizierung und den Overhead der übertragenen Daten.
- Es ermöglicht einem Server das Auffüllen von Daten in einem Client-Cache durch ein als Server-Push bezeichnetes Mechanismus.

Offiziell im Mai 2015 standardisiert, erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46,9 % aller Websites ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Hochfrequentierte Websites zeigten die schnellste Einführung, um Datentransfer-Overhead und die anschließenden Budgets zu sparen.

Diese schnelle Einführung war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktueller Server erforderlich, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Gruppe von Gruppen war erforderlich, um den Anstoß zur Einführung zu geben, und als Legacy-Browser- und Server-Versionen erneuert wurden, nahm die Nutzung natürlich zu, ohne dass für Webentwickler erhebliche Arbeiten erforderlich waren.

## Evolution nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere können wir neue Erweiterungen des HTTP-Protokolls nennen, die 2016 erschienen:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung von Identifikation und Ort einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}} Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Client_hints) ermöglichte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardwareeinschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsrelevanten Präfixen im {{HTTPHeader("Cookie")}}-Header half, die Garantie zu gewährleisten, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat die gleichen Semantiken wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für die Transportschicht. Bis Oktober 2022 [verwendeten 26 % aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, viel geringere Latenzzeiten für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexes Protokoll, jedoch läuft HTTP/2 über eine einzelne TCP-Verbindung, sodass Paketanerkennung und -wiederholung auf TCP-Schicht alle Streams blockieren können. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} und implementiert die Paketanerkennung und -wiederholung unabhängig für jeden Stream, sodass bei einem Fehler nur der Stream mit den Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, wird [HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), darunter Chromium (und seine Varianten wie Chrome und Edge) und Firefox.
