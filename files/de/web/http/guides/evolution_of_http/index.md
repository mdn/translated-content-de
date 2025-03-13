---
title: Entwicklung von HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchgemacht, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu gestalten. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das zum Austausch von Dateien in einer semivertrauenswürdigen Laborumgebung entwickelt wurde, zu einem modernen Internetlabyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D transportiert.

## Erfindung des World Wide Web

1989, während seiner Arbeit am CERN, schrieb Tim Berners-Lee einen Vorschlag für ein Hypertext-System über das Internet. Ursprünglich _Mesh_ genannt, wurde es später während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Es basierte auf den bestehenden TCP- und IP-Protokollen und bestand aus 4 Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, die _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server zum Zugriff auf das Dokument, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 vervollständigt, und die ersten Server liefen außerhalb von CERN Anfang 1991. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies wird heute als offizieller Start des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die ursprüngliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}} gefolgt vom Pfad zur Ressource. Die vollständige URL wurde nicht einbezogen, da das Protokoll, der Server und der Port nicht erforderlich waren, sobald die Verbindung zum Server hergestellt war.

```http
GET /my-page.html
```

Die Antwort war ebenfalls extrem einfach: sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu den nachfolgenden Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn ein Problem auftrat, wurde eine spezifische HTML-Datei generiert, die eine Beschreibung des Problems für den Menschen enthielt.

## HTTP/1.0 – Aufbau der Erweiterbarkeit

HTTP/0.9 war sehr begrenzt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden in jede Anfrage aufgenommen (`HTTP/1.0` wurde der `GET`-Zeile hinzugefügt).
- Eine Statuscodelinie wurde auch am Anfang einer Antwort gesendet. Dadurch konnte der Browser selbst den Erfolg oder Misserfolg einer Anfrage erkennen und sein Verhalten entsprechend anpassen. Zum Beispiel die Aktualisierung oder spezifische Nutzung des lokalen Caches.
- Das Konzept der HTTP-Header wurde für Anfragen und Antworten eingeführt. Metadaten konnten übertragen werden, und das Protokoll wurde extrem flexibel und erweiterbar.
- Dokumente, die keine einfachen HTML-Dateien sind, konnten dank des {{HTTPHeader("Content-Type")}} Headers übertragen werden.

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

Zwischen 1991-1995 wurden diese auf eine Versuch-und-Irrtum-Basis eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und schauten, ob sie Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dieses war als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordentliche Standardisierung im Gange. Dies geschah parallel zu den vielfältigen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrfach geöffnet werden, um die in das einzelne ursprüngliche Dokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies ermöglichte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Gestückelte Antworten wurden ebenfalls unterstützt.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Inhaltsverhandlung, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten sich nun darauf einigen, welchen Inhalt sie austauschen möchten.
- Dank des {{HTTPHeader("Host")}} Headers ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse aus zu hosten, die Collocation von Servern.

Ein typischer Ablauf von Anfragen, alle über eine einzige Verbindung, sah folgendermaßen aus:

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

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Auch wenn das HTTP/1.1-Protokoll über zwei Revisionen, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, verfeinert wurde, war es mehr als 15 Jahre lang extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist jetzt in die folgenden Dokumente unterteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), das für alle HTTP-Versionen gilt, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Zusätzlich erreichte die Spezifikation endlich den Status eines Internetstandards (STD 97), während sie zuvor immer ein vorgeschlagener/Entwurfsstandard war.

### Nutzung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Dienstleistungsunternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie öffentlich veröffentlicht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dazu verschlüsselten und garantierten sie die Authentizität der zwischen dem Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und zu TLS.

In derselben Zeitperiode wurde deutlich, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr ein größtenteils akademisches Netzwerk, sondern wurde zu einem Dschungel, in dem Werbetreibende, zufällige Personen und Kriminelle um möglichst viele private Daten konkurrierten. Da die über HTTP erstellten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und Benutzerspeicherorte benötigten, wurde TLS außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Nutzung von HTTP für komplexe Anwendungen

Tim Berners-Lee stellte sich HTTP ursprünglich nicht als reines Lese-Medium vor. Er wollte ein Web schaffen, in dem Menschen Dokumente hinzufügen und verschieben können – eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um das Autoren zu ermöglichen, und ein Standard namens WebDAV wurde geschaffen. Er wuchs zu spezifischen Anwendungen wie CardDAV für die Verwaltung von Adressbucheinträgen und CalDAV für den Umgang mit Kalendern heran. Aber all diese \*DAV-Erweiterungen hatten einen Mangel: Sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Nutzung von HTTP entwickelt: {{Glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf neuen HTTP-Methoden, sondern verband sich stattdessen durch den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies ermöglichte es jeder Webanwendung, eine API bereitzustellen, um ihre Daten abzurufen und zu ändern, ohne die Browser oder Server aktualisieren zu müssen. Alle notwendigen Informationen waren in den Dateien eingebettet, die die Websites über standardmäßiges HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte REST-API definierte und die volle Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. REST-APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar. Mehrere dieser APIs erstellen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als die [same-origin policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Sicherheitsmodell des Webs nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte, wie viel und wann solche Einschränkungen aufgehoben werden sollten, an den Client durch eine neue Reihe von HTTP-Headern. Diese wurden in Spezifikationen wie {{Glossary("CORS", "Cross-Origin Resource Sharing")}} (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Notable Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}} aber es gibt viele mehr.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar eigenständige Anwendungen. Mehr visuelle Medien wurden angezeigt, und das Volumen und die Größe der Skripte, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über deutlich mehr HTTP-Anfragen übertragen und dies schuf mehr Komplexität und Overhead für HTTP/1.1-Verbindungen. Um dies zu berücksichtigen, implementierte Google ein experimentelles Protokoll namens SPDY Anfang der 2010er Jahre. Dieses alternative Verfahren des Datenaustauschs zwischen Client und Server erregte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiten. SPDY definierte eine Steigerung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung und diente als Grundlage für das HTTP/2-Protokoll.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres anstatt eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexed Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls beseitigt werden.
- Es komprimiert Header. Da diese oft unter einem Satz von Anfragen ähnlich sind, beseitigt dies die Duplizierung und den Overhead der übertragenen Daten.

Offiziell standardisiert im Mai 2015 erreichte die Nutzung von HTTP/2 im Januar 2022 mit 46,9% aller Websites ihren Höhepunkt (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Hochverkehrs-Webseiten zeigten die schnellste Annahme in einem Bestreben, den Datenübertragungsoverhead und die nachfolgenden Budgets zu sparen.

Diese schnelle Annahme war wahrscheinlich darauf zurückzuführen, dass HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktueller Server notwendig, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Gruppe von Gruppen war erforderlich, um die Annahme auszulösen, und da veraltete Browser- und Serverversionen erneuert wurden, wurde die Nutzung natürlicherweise ohne bedeutende Arbeit für Webentwickler erhöht.

## Post-HTTP/2 Evolution

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Bemerkenswerte neue Erweiterungen des HTTP-Protokolls, die 2016 auftraten, sind:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN", "CDN")}}-Caching-Mechanismus.
- Die Einführung von [client hints](/de/docs/Web/HTTP/Guides/Client_hints) erlaubte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardwarebeschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half dabei, zu garantieren, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat dieselbe Semantik wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC", "QUIC")}} anstelle von {{Glossary("TCP", "TCP")}} für die Transportschicht. Im Oktober 2022 [nutzten 26% aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist so konzipiert, dass es eine viel geringere Latenz für HTTP-Verbindungen bietet. Wie HTTP/2 ist es ein multiplexed Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass die Paketverlusterkennung und Übertragung auf der TCP-Ebene alle Streams blockieren kann. QUIC führt mehrere Streams über {{Glossary("UDP", "UDP")}} und implementiert die Paketverlusterkennung und die Übertragung unabhängig für jeden Stream, sodass bei einem Fehler nur der Stream mit den Daten in diesem Paket blockiert wird.

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
