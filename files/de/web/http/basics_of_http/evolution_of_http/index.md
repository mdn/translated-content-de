---
title: Evolution des HTTP
slug: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: 73a13d5f9de56d0fc89896ee7f7e54d5c1bc8e2d
---

{{HTTPSidebar}}

**HTTP** (HyperText Transfer Protocol) ist das zugrunde liegende Protokoll des World Wide Web. Entwickelt von Tim Berners-Lee und seinem Team zwischen 1989-1991, hat HTTP viele Änderungen durchlaufen, die zur Erhaltung seiner Einfachheit beigetragen haben und gleichzeitig seine Flexibilität geformt haben. Lesen Sie weiter, um zu erfahren, wie sich HTTP von einem Protokoll entwickelt hat, das zum Austausch von Dateien in einer halb vertrauten Laborumgebung entworfen wurde, zu einem modernen Internet-Labyrinth, das Bilder und Videos in hoher Auflösung und 3D trägt.

## Erfindung des World Wide Web

1989 schrieb Tim Berners-Lee, während er bei CERN arbeitete, einen Vorschlag, um ein Hypertext-System über das Internet zu bauen. Ursprünglich als _Mesh_ bezeichnet, wurde es später während seiner Implementierung 1990 in _World Wide Web_ umbenannt. Es wurde über die bestehenden TCP- und IP-Protokolle gebaut und bestand aus vier Bausteinen:

- Ein Textformat zur Darstellung von Hypertext-Dokumenten, das _[HyperText Markup Language](/de/docs/Web/HTML)_ (HTML).
- Ein einfaches Protokoll zum Austausch dieser Dokumente, das _HyperText Transfer Protocol_ (HTTP).
- Ein Client zur Anzeige (und Bearbeitung) dieser Dokumente, der erste Webbrowser namens _WorldWideWeb_.
- Ein Server, um Zugriff auf das Dokument zu gewähren, eine frühe Version von _httpd_.

Diese vier Bausteine waren Ende 1990 fertiggestellt, und die ersten Server liefen außerhalb von CERN Anfang 1991. Am 6. August 1991 [postete](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) Tim Berners-Lee in der öffentlichen Newsgroup _alt.hypertext_. Dies wird nun als der offizielle Beginn des World Wide Web als öffentliches Projekt angesehen.

Das in diesen frühen Phasen verwendete HTTP-Protokoll war sehr einfach. Es wurde später HTTP/0.9 genannt und wird manchmal als das Ein-Zeilen-Protokoll bezeichnet.

## HTTP/0.9 – Das Ein-Zeilen-Protokoll

Die anfängliche Version von HTTP hatte keine Versionsnummer; sie wurde später 0.9 genannt, um sie von späteren Versionen zu unterscheiden. HTTP/0.9 war extrem einfach: Anfragen bestanden aus einer einzigen Zeile und begannen mit der einzigen möglichen Methode {{HTTPMethod("GET")}}, gefolgt vom Pfad zur Ressource. Die vollständige URL war nicht enthalten, da das Protokoll, der Server und der Port nicht notwendig waren, sobald eine Verbindung zum Server hergestellt war.

Die Antwort war ebenfalls extrem einfach: Sie bestand nur aus der Datei selbst.

Im Gegensatz zu späteren Entwicklungen gab es keine HTTP-Header. Dies bedeutete, dass nur HTML-Dateien übertragen werden konnten. Es gab keine Status- oder Fehlercodes. Wenn es ein Problem gab, wurde eine spezifische HTML-Datei generiert, die eine Problembeschreibung zur menschlichen Konsumation enthielt.

## HTTP/1.0 – Aufbau von Erweiterbarkeit

HTTP/0.9 war sehr eingeschränkt, aber Browser und Server machten es schnell vielseitiger:

- Versionsinformationen wurden mit jeder Anfrage gesendet (`HTTP/1.0` wurde an die `GET`-Zeile angehängt).
- Eine Statuscode-Zeile wurde zu Beginn einer Antwort ebenfalls gesendet. Dies ermöglichte es dem Browser selbst, den Erfolg oder Misserfolg einer Anfrage zu erkennen und sein Verhalten entsprechend anzupassen, zum Beispiel durch Aktualisierung oder spezifische Nutzung seines lokalen Caches.
- Das Konzept von HTTP-Headern wurde sowohl für Anfragen als auch für Antworten eingeführt. Metadaten konnten übermittelt werden und das Protokoll wurde extrem flexibel und erweiterbar.
- Dank des {{HTTPHeader("Content-Type")}}-Headers konnten auch andere Dokumente als einfache HTML-Dateien übertragen werden.

In dieser Zeit sah eine typische Anfrage und Antwort so aus:

Es folgte eine zweite Verbindung und eine Anfrage, um das Bild abzurufen (mit der entsprechenden Antwort):

Zwischen 1991-1995 wurden diese mit einem Versuchsansatz eingeführt. Ein Server und ein Browser fügten ein Feature hinzu und schauten, ob es Anklang fand. Interoperabilitätsprobleme waren häufig. In einem Versuch, diese Probleme zu lösen, wurde im November 1996 ein informativer Dokument veröffentlicht, das die allgemeinen Praktiken beschrieb. Dies war bekannt als {{RFC(1945)}} und definierte HTTP/1.0.

## HTTP/1.1 – Das standardisierte Protokoll

In der Zwischenzeit war eine ordnungsgemäße Standardisierung in Arbeit. Dies geschah parallel zu den vielfältigen Implementierungen von HTTP/1.0. Die erste standardisierte Version von HTTP, HTTP/1.1, wurde Anfang 1997 veröffentlicht, nur wenige Monate nach HTTP/1.0.

HTTP/1.1 klärte Unklarheiten und führte zahlreiche Verbesserungen ein:

- Eine Verbindung konnte wiederverwendet werden, was Zeit sparte. Es war nicht mehr nötig, sie mehrfach zu öffnen, um die in das einzelne Originaldokument eingebetteten Ressourcen anzuzeigen.
- Pipelining wurde hinzugefügt. Dies erlaubte es, eine zweite Anfrage zu senden, bevor die Antwort auf die erste vollständig übertragen wurde. Dies verringerte die Latenz der Kommunikation.
- Gestückelte Antworten wurden ebenfalls unterstützt.
- Zusätzliche Cache-Kontrollmechanismen wurden eingeführt.
- Die Content-Verhandlung, einschließlich Sprache, Kodierung und Typ, wurde eingeführt. Ein Client und ein Server konnten sich nun darauf einigen, welchen Inhalt sie austauschen wollten.
- Dank des {{HTTPHeader("Host")}}-Headers ermöglichte die Fähigkeit, verschiedene Domains von derselben IP-Adresse aus zu hosten, die Kolla-Kation von Servern.

Ein typischer Ablauf von Anfragen, alle über eine einzige Verbindung, sah so aus:

HTTP/1.1 wurde erstmals als {{rfc(2068)}} im Januar 1997 veröffentlicht.

## Mehr als zwei Jahrzehnte der Entwicklung

Die Erweiterbarkeit von HTTP machte es einfach, neue Header und Methoden zu erstellen. Obwohl das HTTP/1.1-Protokoll über zwei Revisionen verfeinert wurde, {{RFC("2616")}} veröffentlicht im Juni 1999 und {{RFC("7230")}}-{{RFC("7235")}} veröffentlicht im Juni 2014 vor der Veröffentlichung von HTTP/2, war es über mehr als 15 Jahre extrem stabil. HTTP/1.1 wurde 2022 erneut mit {{RFC("9110")}} aktualisiert. Nicht nur HTTP/1.1 wurde aktualisiert, sondern das gesamte HTTP wurde überarbeitet und ist nun in die folgenden Dokumente aufgeteilt: Semantik ({{RFC("9110")}}), Caching ({{RFC("9111")}}), die für alle HTTP-Versionen gelten, und HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}) und HTTP/3 ({{RFC("9114")}}). Darüber hinaus erreichte die Spezifikation schließlich den Status eines Internet-Standards (STD 97), während sie zuvor immer ein vorgeschlagener / Entwurfsstandard war.

### Verwendung von HTTP für sichere Übertragungen

Die größte Änderung an HTTP wurde Ende 1994 vorgenommen. Statt HTTP über einen einfachen TCP/IP-Stack zu senden, erstellte die Computer-Dienstleistungsfirma Netscape Communications eine zusätzliche verschlüsselte Übertragungsschicht darüber: SSL. SSL 1.0 wurde nie der Öffentlichkeit zugänglich gemacht, aber SSL 2.0 und sein Nachfolger SSL 3.0 ermöglichten die Erstellung von E-Commerce-Websites. Um dies zu tun, verschlüsselten sie und garantierten die Authentizität der zwischen Server und Client ausgetauschten Nachrichten. SSL wurde schließlich standardisiert und wurde zu TLS.

Im selben Zeitraum wurde klar, dass eine verschlüsselte Transportschicht benötigt wurde. Das Web war nicht mehr ein überwiegend akademisches Netzwerk und wurde stattdessen zu einem Dschungel, in dem Werbetreibende, zufällige Personen und Kriminelle um so viele private Daten wie möglich konkurrierten. Da die über HTTP gebauten Anwendungen leistungsfähiger wurden und Zugriff auf private Informationen wie Adressbücher, E-Mails und den Standort des Benutzers erforderten, wurde TLS außerhalb des E-Commerce-Anwendungsfalls notwendig.

### Verwendung von HTTP für komplexe Anwendungen

Tim Berners-Lee stellte sich HTTP ursprünglich nicht als reines Lesemedium vor. Er wollte ein Web schaffen, in dem Menschen aus der Ferne Dokumente hinzufügen und verschieben konnten - eine Art verteiltes Dateisystem. Um 1996 wurde HTTP erweitert, um Autorisierung zu ermöglichen, und ein Standard namens WebDAV wurde erstellt. Es wuchs, um spezifische Anwendungen wie CardDAV für die Bearbeitung von Adressbucheinträgen und CalDAV für den Umgang mit Kalendern zu umfassen. Aber all diese \*DAV-Erweiterungen hatten einen Fehler: Sie waren nur verwendbar, wenn sie von den Servern implementiert wurden.

Im Jahr 2000 wurde ein neues Muster für die Verwendung von HTTP entwickelt: [representational state transfer](/de/docs/Glossary/REST) (oder REST). Die API basierte nicht auf den neuen HTTP-Methoden, sondern setzte auf den Zugriff auf spezifische URIs mit grundlegenden HTTP/1.1-Methoden. Dies erlaubte jeder Webanwendung, eine API bereitzustellen, um ihre Daten abzurufen und zu ändern, ohne dass die Browser oder Server aktualisiert werden mussten. Alle notwendigen Informationen wurden in die Dateien eingebettet, die die Websites über standardmäßiges HTTP/1.1 lieferten. Der Nachteil des REST-Modells war, dass jede Website ihre eigene nicht standardisierte RESTful API definierte und die vollständige Kontrolle darüber hatte. Dies unterschied sich von den \*DAV-Erweiterungen, bei denen Clients und Server interoperabel waren. RESTful APIs wurden in den 2010er Jahren sehr verbreitet.

Seit 2005 stehen immer mehr APIs für Webseiten zur Verfügung. Mehrere dieser APIs schaffen Erweiterungen für das HTTP-Protokoll für spezifische Zwecke:

- [Server-sent events](/de/docs/Web/API/Server-sent_events), bei denen der Server gelegentlich Nachrichten an den Browser senden kann.
- [WebSocket](/de/docs/Web/API/WebSockets_API), ein neues Protokoll, das durch das Upgrade einer bestehenden HTTP-Verbindung eingerichtet werden kann.

### Entspannung des Sicherheitsmodells des Webs

HTTP ist unabhängig vom Sicherheitsmodell des Webs, bekannt als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Tatsächlich wurde das aktuelle Sicherheitsmodell des Webs nach der Erstellung von HTTP entwickelt! Im Laufe der Jahre erwies es sich als nützlich, einige Einschränkungen dieser Richtlinie unter bestimmten Bedingungen aufzuheben. Der Server übermittelte dem Client, wie viel und wann solche Einschränkungen aufgehoben werden sollten, unter Verwendung einer neuen Reihe von HTTP-Headern. Diese wurden in Spezifikationen wie [Cross-Origin Resource Sharing](/de/docs/Glossary/CORS) (CORS) und der [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP) definiert.

Zusätzlich zu diesen großen Erweiterungen wurden viele andere Header hinzugefügt, manchmal nur experimentell. Bemerkenswerte Header sind der Do Not Track ({{HTTPHeader("DNT")}}) Header zum Schutz der Privatsphäre, {{HTTPHeader("X-Frame-Options")}} und {{HTTPHeader('Upgrade-Insecure-Requests')}, aber viele weitere existieren.

## HTTP/2 – Ein Protokoll für höhere Leistung

Im Laufe der Jahre wurden Webseiten komplexer. Einige von ihnen waren sogar Anwendungen für sich. Es wurden mehr visuelle Medien angezeigt und das Volumen und die Größe von Skripten, die Interaktivität hinzufügen, nahmen ebenfalls zu. Viel mehr Daten wurden über erheblich mehr HTTP-Anfragen übertragen, und dies schuf mehr Komplexität und Overhead für HTTP/1.1-Verbindungen. Um diesem Problem zu begegnen, implementierte Google Anfang der 2010er Jahre ein experimentelles Protokoll namens SPDY. Diese alternative Methode des Datenaustauschs zwischen Client und Server erregte das Interesse von Entwicklern, die sowohl an Browsern als auch an Servern arbeiteten. SPDY definierte eine Erhöhung der Reaktionsfähigkeit und löste das Problem der doppelten Datenübertragung, was als Grundlage für das HTTP/2-Protokoll diente.

Das HTTP/2-Protokoll unterscheidet sich in einigen Punkten von HTTP/1.1:

- Es ist ein binäres Protokoll anstelle eines Textprotokolls. Es kann nicht manuell gelesen und erstellt werden. Trotz dieses Hindernisses erlaubt es die Implementierung verbesserter Optimierungstechniken.
- Es ist ein multiplexed Protokoll. Parallele Anfragen können über dieselbe Verbindung gestellt werden, wodurch die Einschränkungen des HTTP/1.x-Protokolls entfernt werden.
- Es komprimiert Header. Da diese oft unter einer Reihe von Anfragen ähnlich sind, entfernt dies die Duplizierung und den Overhead der übertragenen Daten.
- Es erlaubt einem Server, Daten über einen Mechanismus namens Server Push in einen Client-Cache zu laden.

Offiziell standardisiert im Mai 2015, erreichte die Nutzung von HTTP/2 im Januar 2022 ihren Höchststand bei 46,9 % aller Websites (siehe [diese Statistiken](https://w3techs.com/technologies/details/ce-http2)). Websites mit hohem Datenverkehr zeigten die schnellste Übernahme, um die Datenübertragungsgebühren und die damit verbundenen Budgets zu sparen.

Diese schnelle Übernahme war wahrscheinlich, weil HTTP/2 keine Änderungen an Websites und Anwendungen erforderte. Um es zu nutzen, war nur ein aktualisierter Server erforderlich, der mit einem aktuellen Browser kommunizierte. Nur eine begrenzte Anzahl von Gruppen war nötig, um die Übernahme auszulösen, und als veraltete Browser- und Server-Versionen erneuert wurden, stieg die Nutzung auf natürliche Weise, ohne signifikante Arbeit für Webentwickler.

## Post-HTTP/2 Entwicklung

Die Erweiterbarkeit von HTTP wird weiterhin verwendet, um neue Funktionen hinzuzufügen. Hervorzuheben sind neue Erweiterungen des HTTP-Protokolls, die 2016 erschienen sind:

- Unterstützung von {{HTTPHeader("Alt-Svc")}} ermöglichte die Trennung der Identifikation und des Standorts einer bestimmten Ressource. Dies bedeutete einen intelligenteren [CDN](/de/docs/Glossary/CDN) Caching-Mechanismus.
- Die Einführung von [client hints](/de/docs/Web/HTTP/Client_hints) ermöglichte es dem Browser oder Client, proaktiv Informationen über seine Anforderungen und Hardware-Beschränkungen an den Server zu kommunizieren.
- Die Einführung von sicherheitsbezogenen Präfixen im {{HTTPHeader("Cookie")}}-Header half, sicherzustellen, dass sichere Cookies nicht verändert werden konnten.

## HTTP/3 - HTTP über QUIC

Die nächste Hauptversion von HTTP, HTTP/3 hat die gleichen Semantiken wie frühere HTTP-Versionen, verwendet jedoch [QUIC](/de/docs/Glossary/QUIC) anstelle von [TCP](/de/docs/Glossary/TCP) für die Transportschicht. Bis Oktober 2022, [nutzen 26 % aller Websites HTTP/3](https://w3techs.com/technologies/details/ce-http3).

QUIC ist darauf ausgelegt, viel geringere Latenzen für HTTP-Verbindungen bereitzustellen. Wie HTTP/2 ist es ein multiplexed Protokoll, aber HTTP/2 läuft über eine einzelne TCP-Verbindung, sodass Paketverlusterkennung und -wiederübertragung auf der TCP-Schicht alle Streams blockieren können. QUIC führt mehrere Streams über [UDP](/de/docs/Glossary/UDP) und implementiert die Paketverlusterkennung und -wiederübertragung unabhängig für jeden Stream, sodass, wenn ein Fehler auftritt, nur der Stream mit den Daten in diesem Paket blockiert wird.

Definiert in {{RFC("9114")}}, wird [HTTP/3 von den meisten großen Browsern unterstützt](https://caniuse.com/http3), einschließlich Chromium (und seinen Varianten wie Chrome und Edge) und Firefox.
