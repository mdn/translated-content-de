---
title: Evolution von HTTP
slug: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: 73a13d5f9de56d0fc89896ee7f7e54d5c1bc8e2d
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Veränderungen durchlaufen, die dazu beigetragen haben, seine Einfachheit zu bewahren und gleichzeitig seine Flexibilität zu formen. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll, das zum Austausch von Dateien in einer semivertrauenswürdigen Laborumgebung entwickelt wurde, zu einem modernen Internetlabyrinth entwickelt hat, das Bilder und Videos in hoher Auflösung und 3D überträgt.

## Erfindung des World Wide Web

1989, während seiner Arbeit bei CERN, schrieb Tim Berners-Lee einen Vorschlag, um ein Hypertext-System über das Internet aufzubauen. Ursprünglich _Mesh_ genannt, wurde es während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Aufgebaut auf den bestehenden TCP- und IP-Protokollen, bestand es aus 4 Bausteinen:

- Ein textuelles Format zur Darstellung von Hypertext-Dokumenten, die _[Hypertext Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um den Zugang zu diesem Dokument zu gewähren, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 abgeschlossen, und die ersten Server liefen Anfang 1991 außerhalb von CERN. Am 6. August 1991 [veröffentlichte](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies wird nun als offizieller Beginn des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als das Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}}, gefolgt von dem Pfad zur Ressource. Die vollständige URL wurde nicht mit einbezogen, da das Protokoll, der Server und der Port nicht mehr notwendig waren, sobald die Verbindung zum Server hergestellt war.

```http
GET /mypage.html
```

Auch die Antwort war extrem einfach: Sie bestand nur aus der Datei selbst.

```html
<html>
  A very simple HTML page
</html>
```

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn ein Problem auftrat, wurde eine spezifische HTML-Datei erzeugt und enthielt eine Beschreibung des Problems für den Nutzer.

## HTTP/1.0 – Erweiterbarkeit aufbauen

HTTP/0.9 war sehr eingeschränkt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden mit jeder Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Eine Statuskode-Zeile wurde auch am Anfang einer Antwort gesendet. Dies erlaubte dem Browser selbst, den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen, z. B. das Aktualisieren oder spezielles Verwenden seines lokalen Caches.
- Das Konzept der HTTP-Header wurde für sowohl Anfragen als auch Antworten eingeführt. Metadaten konnten übertragen werden, und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}} Headers konnten auch andere Dokumente als einfache HTML-Dateien übertragen werden.

Zu diesem Zeitpunkt sah eine typische Anfrage und Antwort etwa so aus:

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

Zwischen 1991-1995 wurden sie mit einem Versuch-und-Sehen-Ansatz eingeführt. Ein Server und ein Browser fügten eine Funktion hinzu und beobachteten, ob sie Anklang fand. Interoperabilitätsprobleme waren häufig. Um diese Probleme zu lösen, wurde im November 1996 ein Informationsdokument veröffentlicht, das die gängigen Praktiken beschrieb. Dies wurde als {{RFC(1945)}} bekannt und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung im Gange. Dies geschah parallel zu den diversen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Sie musste nicht mehr mehrfach geöffnet werden, um die im ursprünglichen Dokument eingebetteten Ressourcen darzustellen.
- Pipelining wurde hinzugefügt. Dadurch konnte eine zweite Anfrage gesendet werden, bevor die Antwort auf die erste vollständig übertragen war. Dies verringerte die Latenz der Kommunikation.
- Unterstützte auch chunked responses.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Inhaltsverhandlung, einschließlich Sprache, Codierung und Typ wurde eingeführt. Ein Client und ein Server konnten nun vereinbaren, welche Inhalte ausgetauscht werden.
- Dank des {{HTTPHeader("Host")}} Headers wurde die Möglichkeit, verschiedene Domains von derselben IP-Adresse zu hosten, ermöglicht, was die Serverko-Lokation erlaubte.

Ein typischer Ablauf von Anfragen, alle über eine einzige Verbindung, sah so aus:

```http
GET /de/docs/Glossary/CORS-safelisted_request_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/de/docs/Glossary/CORS-safelisted_request_header

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
Referer: https://developer.mozilla.org/de/docs/Glossary/CORS-safelisted_request_header

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

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Überarbeitungen, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, verfeinert wurde, war es über mehr als 15 Jahre extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern auch das gesamte HTTP wurde überarbeitet und ist nun auf die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), das auf alle HTTP-Versionen anwendbar ist, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) sowie HTTP/3 ({{RFC("9114")}}). Darüber hinaus hat die Spezifikation endlich den Status eines Internet-Standards (STD 97) erreicht, während sie zuvor immer ein vorgeschlagener/Entwurfsstandard war.

### Nutzung von HTTP für sichere Übertragungen

Die größte Veränderung an HTTP erfolgte Ende 1994. Anstatt HTTP über einen einfachen TCP/IP-Stack zu senden, schuf das Computer-Service-Unternehmen Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Dazu verschlüsselten und garantierten sie die Authentizität der zwischen dem Server und dem Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und zu TLS.

In der gleichen Zeit wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war kein überwiegend akademisches Netzwerk mehr, sondern wurde zu einem Dschungel, in dem Werbetreibende, zufällige Einzelpersonen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die auf HTTP basierenden Anwendungen immer leistungsfähiger wurden und Zugang zu privaten Informationen wie Adressbüchern, E-Mails und Benutzerstandorten benötigten, wurde TLS außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Nutzung von HTTP für komplexe Anwendungen

Tim Berners-Lee sah HTTP ursprünglich nicht als ein rein lesbares Medium vor. Er wollte ein Web erschaffen, in dem Menschen Dokumente aus der Ferne hinzufügen und verschieben können – eine Art verteiltes Dateisystem. Etwa 1996 wurde HTTP erweitert, um das Autorisieren zu erlauben, und ein Standard namens WebDAV wurde entwickelt. Es wuchs, um spezifische Anwendungen wie CardDAV zur Handhabung von Adressbucheinträgen und CalDAV für den Umgang mit Kalendern einzuschließen. Aber all diese \*DAV-Erweiterungen hatten einen Fehler: sie waren nur nutzbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Nutzung von HTTP entwickelt: {{glossary("REST", "representational state transfer")}} (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern stützte sich auf den Zugriff auf bestimmte URIs mit grundlegenden HTTP/1.1-Methoden. Dies erlaubte jeder Webanwendung, eine API bereitzustellen, um ihre Daten abzurufen und zu ändern, ohne die Browser oder Server aktualisieren zu müssen. Alle notwendigen Informationen wurden in den Dateien eingebettet, die die Websites über standardmäßiges HTTP/1.1 bereitstellten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und die vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 sind mehr APIs für Webseiten verfügbar geworden. Mehrere dieser APIs schaffen Erweiterungen des HTTP-Protokolls für spezifische Zwecke:

- [Vom Server gesendete Ereignisse](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Lockerung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Web-Sicherheitsmodell, bekannt als die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Web-Sicherheitsmodell nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Beschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client mit Hilfe eines neuen Satzes von HTTP-Headern, in welchem Umfang und wann solche Beschränkungen aufgehoben werden sollten. Diese wurden in Spezifikationen wie [Cross-Origin Resource Sharing](/de/docs/Glossary/CORS) (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele weitere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zur Kontrolle der Privatsphäre, {{HTTPHeader("X-Frame-Options")}}, und {{HTTPHeader('Upgrade-Insecure-Requests')}}, aber es gibt viele mehr.

## HTTP/2 – Ein Protokoll für größere Leistung

Im Laufe der Jahre wurden Webseiten immer komplexer. Einige von ihnen waren sogar Anwendungen für sich. Mehr visuelle Medien wurden angezeigt und das Volumen und die Größe der Skripte, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über erheblich mehr HTTP-Anfragen übertragen und dies führte zu mehr Komplexität und Overhead für HTTP/1.1-Verbindungen. Um dem Rechnung zu tragen, implementierte Google Anfang der 2010er Jahre ein experimentelles Protokoll namens SPDY. Diese alternative Methode des Datenaustauschs zwischen Client und Server weckte das Interesse der Entwickler, die an Browsern und Servern arbeiteten. SPDY definierte eine gesteigerte Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung, was als Grundlage für das HTTP/2-Protokoll diente.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstelle eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses ermöglicht es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexed Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, womit die Einschränkungen des HTTP/1.x-Protokolls aufgehoben werden.
- Es komprimiert Header. Da diese oft ähnlich in einem Satz von Anfragen sind, beseitigt dies die Duplizierung und den Overhead der übertragenen Daten.
- Es erlaubt einem Server, Daten durch einen Mechanismus namens Server-Push in einem Client-Cache zu speichern.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 ihren Höhepunkt mit 46,9 % aller Websites (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Websites mit hohem Verkehr zeigten die schnellste Adaption, um den Datenübertragungs-Overhead und die anschließenden Budgets zu sparen.

Diese schnelle Adaption war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktueller Server notwendig, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Anzahl von Gruppen war erforderlich, um die Adaption auszulösen, und während veraltete Browser- und Server-Versionen erneuert wurden, nahm die Nutzung natürlich zu, ohne signifikante Arbeit für Webentwickler.

## Evolution nach HTTP/2

Die Erweiterbarkeit von HTTP wird weiterhin genutzt, um neue Funktionen hinzuzufügen. Insbesondere lassen sich neue Erweiterungen des HTTP-Protokolls nennen, die 2016 erschienen sind:

- Unterstützung für {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifizierung und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren {{Glossary("CDN")}} Caching-Mechanismus.
- Die Einführung von [Client-Hinweisen](/de/docs/Web/HTTP/Client_hints) erlaubte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardware-Beschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}} Header half zu garantieren, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3, hat dieselbe Semantik wie frühere Versionen von HTTP, verwendet jedoch {{Glossary("QUIC")}} anstelle von {{Glossary("TCP")}} für den Transportebenen-Anteil. Bis Oktober 2022 [verwendeten 26 % aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, viel niedrigere Latenzen für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexed Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, so dass Paketverlust-Erkennung und -erneute Übertragung, die auf der TCP-Ebene gehandhabt werden, alle Streams blockieren können. QUIC führt mehrere Streams über {{Glossary("UDP")}} aus und implementiert die Paketverlust-Erkennung und -erneute Übertragung unabhängig für jeden Stream, so dass, wenn ein Fehler auftritt, nur der Stream mit Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, [wird HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seiner Varianten wie Chrome und Edge) und Firefox.
