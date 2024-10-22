---
title: Evolution des HTTP
slug: Web/HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: bd48972c8a9c2acf3b8fa6e41248d0952eb0c406
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989 und 1991, hat HTTP viele Änderungen durchlaufen, die zu seiner Einfachheit beigetragen und gleichzeitig seine Flexibilität geformt haben. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das zum Austausch von Dateien in einer semivertrauenswürdigen Laborumgebung entwickelt wurde, zu einem modernen Internetlabyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D überträgt.

## Erfindung des World Wide Web

1989 schrieb Tim Berners-Lee während seiner Arbeit am CERN einen Vorschlag zur Entwicklung eines Hypertext-Systems über das Internet. Ursprünglich _Mesh_ genannt, wurde es während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Aufbauend auf den bestehenden TCP- und IP-Protokollen bestand es aus vier Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, das _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, der den Zugang zu den Dokumenten ermöglichte, eine frühe Version von _httpd_.

Diese vier Bausteine waren bis Ende 1990 fertiggestellt, und die ersten Server liefen außerhalb des CERN Anfang 1991. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies wird heute als der offizielle Start des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später als HTTP/0.9 bezeichnet und wird manchmal das Einzeilen-Protokoll genannt.

## HTTP/0.9 – Das Einzeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}}, gefolgt vom Pfad zur Ressource. Die vollständige URL wurde nicht eingeschlossen, da das Protokoll, der Server und der Port nicht notwendig waren, sobald die Verbindung zum Server hergestellt war.

```http
GET /my-page.html
```

Die Antwort war ebenfalls extrem einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn es ein Problem gab, wurde eine spezifische HTML-Datei generiert und beinhaltete eine Beschreibung des Problems für den menschlichen Konsum.

## HTTP/1.0 – Erweiterbarkeit aufbauen

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden mit jeder Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Eine Statuscode-Zeile wurde ebenfalls am Anfang einer Antwort gesendet. Dies ermöglichte es dem Browser selbst, den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen, z. B. das Aktualisieren oder Verwenden seines lokalen Caches auf eine bestimmte Weise.
- Das Konzept von HTTP-Headern wurde für Anfragen und Antworten eingeführt. Metadaten konnten übertragen werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}}-Headers konnten auch andere Dokumente als einfache HTML-Dateien übertragen werden.

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

Darauf folgte eine zweite Verbindung und eine Anfrage, um das Bild abzurufen (mit der entsprechenden Antwort):

```http
GET /my-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(image content)
```

Zwischen 1991 und 1995 wurden diese mit einem Versuch-und-sehen-Ansatz eingeführt. Ein Server und ein Browser fügte eine Funktion hinzu und sah, ob sie Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die üblichen Praktiken beschrieb. Dies wurde als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit wurde die ordnungsgemäße Standardisierung vorangetrieben. Dies geschah parallel zu den unterschiedlichen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Es war nicht mehr erforderlich, sie mehrmals zu öffnen, um die im einzelnen Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies ermöglichte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Chunked Responses wurden ebenfalls unterstützt.
- Zusätzliche Cache-Steuerungsmechanismen wurden eingeführt.
- Inhaltsaushandlung, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten sich nun darauf einigen, welchen Inhalt sie austauschen.
- Dank des {{HTTPHeader("Host")}}-Headers konnte die Fähigkeit, verschiedene Domains von derselben IP-Adresse zu hosten, die Serverzusammenlegung ermöglichen.

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

HTTP/1.1 wurde erstmals als {{rfc(2068)}} im Januar 1997 veröffentlicht.

## Mehr als zwei Jahrzehnte Entwicklung

Die Erweiterbarkeit von HTTP ermöglichte es, neue Header und Methoden problemlos zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Überarbeitungen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es mehr als 15 Jahre lang äußerst stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist jetzt in die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), anwendbar auf alle HTTP-Versionen, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Zusätzlich erreichte die Spezifikation endlich den Status eines Internet-Standards (STD 97), während sie zuvor immer ein vorgeschlagener/entwurfsgenerierter Standard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Dienstleistungsunternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dazu verschlüsselten sie und garantierten die Authentizität der zwischen Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und wurde zu TLS.

Zur gleichen Zeit wurde klar, dass eine verschlüsselte Transportschicht erforderlich war. Das Web war nicht mehr ein überwiegend akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, Zufallsindividuen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die über HTTP entwickelten Anwendungen leistungsfähiger wurden und Zugang zu privaten Informationen wie Adressbüchern, E-Mails und Benutzerstandorten benötigten, wurde TLS außerhalb der E-Commerce-Anwendung erforderlich.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee hatte HTTP ursprünglich nicht als nur-lesen Medium konzipiert. Er wollte ein Web schaffen, in dem Menschen Dokumente remote hinzufügen und verschieben können – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Verfassen zu ermöglichen, und ein Standard namens WebDAV wurde erstellt. Es wuchs, um spezifische Anwendungen wie CardDAV zum Umgang mit Adressbucheinträgen und CalDAV zum Umgang mit Kalendern einzuschließen. Aber all diese \*DAV-Erweiterungen hatten einen Fehler: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Nutzung von HTTP entworfen: {{Glossary("REST", "Representational State Transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern stützte sich stattdessen auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API ihre Daten abfragen und modifizieren zu lassen, ohne die Browser oder die Server aktualisieren zu müssen. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites über das Standard-HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und die vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Mehrere dieser APIs schaffen Erweiterungen des HTTP-Protokolls zu spezifischen Zwecken:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch Aufrüstung einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Web-Sicherheitsmodell, bekannt als die [Same-origin Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell erst nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wann und in welchem Umfang solche Einschränkungen aufgehoben werden sollten, mithilfe eines neuen Satzes von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}})-Header zur Steuerung der Privatsphäre, {{HTTPHeader("X-Frame-Options")}} und {{HTTPHeader('Upgrade-Insecure-Requests')}}-Header, aber es gibt viele weitere.

## HTTP/2 – Ein Protokoll für mehr Leistung

Im Laufe der Jahre wurden Webseiten immer komplexer. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt, und das Volumen und die Größe der Skripte, die Interaktivität hinzufügten, nahmen ebenfalls zu. Es wurde viel mehr Daten über erheblich mehr HTTP-Anfragen übertragen, was zu mehr Komplexität und Overhead für HTTP/1.1-Verbindungen führte. Um dem Rechnung zu tragen, implementierte Google Anfang der 2010er Jahre ein experimentelles Protokoll SPDY. Dieser alternative Weg des Datenaustauschs zwischen Client und Server fand Interesse bei Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Steigerung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung, was als Grundlage für das HTTP/2-Protokoll diente.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll und kein Textprotokoll. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein Multiplex-Protokoll. Parallel können Anfragen über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls entfallen.
- Es komprimiert Header. Da diese oft unter einem Satz von Anfragen ähnlich sind, wird die Duplikation und der Overhead der übertragenen Daten verringert.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46,9 % aller Websites ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Hochfrequentierte Websites zeigten die schnellste Akzeptanz, um beim Datenübertragungs-Overhead und den Folgeaufwendungen zu sparen.

Diese schnelle Akzeptanz war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu verwenden, war nur ein aktueller Server notwendig, der mit einem neueren Browser kommunizierte. Nur eine begrenzte Anzahl von Gruppen war erforderlich, um die Annahme auszulösen, und als veraltete Browser- und Serverversionen erneuert wurden, stieg die Nutzung auf natürliche Weise an, ohne dass erhebliche Arbeit für Webentwickler notwendig war.

## Evolution nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Besonders bemerkenswert sind neue Erweiterungen des HTTP-Protokolls, die 2016 auftraten:

- Die Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifizierung und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [Client Hints](/de/docs/Web/HTTP/Client_hints) ermöglichte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardwarebeschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}}-Header half, sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat dieselbe Semantik wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für die Transportschicht. Bis Oktober 2022 [nutzten 26 % aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC wurde entwickelt, um viel geringere Latenzzeiten für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein Multiplex-Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass Verlust von Paket-Detektion und -Wiederholung, die in der TCP-Schicht gehandhabt werden, alle Streams blockieren kann. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} aus und implementiert Paketverlustdetektion und -wiederholung unabhängig für jeden Stream, sodass, wenn ein Fehler auftritt, nur der Stream mit Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.
