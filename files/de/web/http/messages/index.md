---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

HTTP-Nachrichten sind der Weg, wie Daten zwischen einem Server und einem Client ausgetauscht werden. Es gibt zwei Arten von Nachrichten: _Anfragen_, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und _Antworten_, die Antwort des Servers.

Webentwickler oder Webmaster erstellen diese textuellen HTTP-Nachrichten selten selbst: Software, ein Webbrowser, Proxy oder Webserver übernimmt diese Aufgabe. Sie stellen HTTP-Nachrichten über Konfigurationsdateien (für Proxies oder Server), APIs (für Browser) oder andere Schnittstellen zur Verfügung.

![Von einem Benutzer-, Skript- oder servergenerierten Ereignis wird eine HTTP/1.x-Nachricht erzeugt, und wenn HTTP/2 verwendet wird, wird sie binär in einen HTTP/2-Stream gerahmt und dann gesendet.](httpmsg2.png)

HTTP-Anfragen und -Antworten haben eine ähnliche Struktur und bestehen aus:

1. Einer _Startzeile_, die die auszuführenden Anfragen beschreibt oder den Status, ob erfolgreich oder fehlerhaft, angibt. Dies ist immer eine einzelne Zeile.
2. Einem optionalen Satz von _HTTP-Headern_, die die Anfrage spezifizieren oder den im Nachrichtenkörper enthaltenen Inhalt beschreiben.
3. Einer Leerzeile, die anzeigt, dass alle Metainformationen für die Anfrage gesendet wurden.
4. Einem optionalen _Körper_, der mit der Anfrage verbundene Daten (wie der Inhalt eines HTML-Formulars) oder das mit einer Antwort verbundene Dokument enthält. Die Anwesenheit des Körpers und seine Größe werden durch die Startzeile und die HTTP-Header spezifiziert.

Die Startzeile und die HTTP-Header der HTTP-Nachricht werden zusammen als der _Head_ der Anfragen bezeichnet, und der danach folgende Teil, der den Inhalt enthält, wird als _Body_ bezeichnet.

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](httpmsgstructure2.png)

## HTTP-Anfragen

### Anfragelinie

> [!NOTE]
> Die Startzeile wird in Anfragen als "Anfragelinie" bezeichnet.

HTTP-Anfragen sind Nachrichten, die vom Client gesendet werden, um eine Aktion auf dem Server zu initiieren. Ihre _Anfragelinie_ enthält drei Elemente:

1. Eine _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_, ein Verb (wie {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}) oder ein Substantiv (wie {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}), das die auszuführende Aktion beschreibt. Zum Beispiel gibt `GET` an, dass eine Ressource abgerufen werden soll, oder `POST` bedeutet, dass Daten an den Server gesendet werden (zur Erstellung oder Änderung einer Ressource oder zur Generierung eines temporären Dokuments, das zurückgesendet wird).
2. Das _Ziel der Anfrage_, in der Regel eine {{Glossary("URL", "URL")}}, oder der absolute Pfad des Protokolls, Ports und der Domain wird normalerweise durch den Anfragekontext charakterisiert. Das Format dieses Anfrageziels variiert zwischen verschiedenen HTTP-Methoden. Es kann sein:

   - Ein absoluter Pfad, letztlich gefolgt von einem `'?'` und einer Abfragezeichenfolge. Dies ist die häufigste Form, bekannt als die _Ursprungsform_, und wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet.
     - `POST / HTTP/1.1`
     - `GET /background.png HTTP/1.0`
     - `HEAD /test.html?query=alibaba HTTP/1.1`
     - `OPTIONS /any-page.html HTTP/1.0`
   - Eine vollständige URL, bekannt als die _absolute Form_, wird hauptsächlich mit `GET` verwendet, wenn eine Verbindung zu einem Proxy besteht.
     `GET https://developer.mozilla.org/de/docs/Web/HTTP/Messages HTTP/1.1`
   - Die Autoritätskomponente einer URL, bestehend aus dem Domainnamen und optional dem Port (eingeleitet durch ein `':'`), wird als _Autoritätsform_ bezeichnet. Sie wird nur mit `CONNECT` verwendet, wenn ein HTTP-Tunnel eingerichtet wird.
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - Die _Sternchenform_, ein einfaches Sternchen (`'*'`), wird mit `OPTIONS` verwendet und repräsentiert den Server als Ganzes.
     `OPTIONS * HTTP/1.1`

3. Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete zu verwendende Version für die Antwort dient.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) einer Anfrage folgen dem gleichen Grundaufbau eines HTTP-Headers: ein nicht case-sensitiver String gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Header abhängt. Der gesamte Header, einschließlich des Werts, besteht aus einer einzigen Zeile, die ziemlich lang sein kann.

Viele verschiedene Header können in Anfragen erscheinen. Diese können in mehrere Gruppen unterteilt werden:

- {{Glossary("General_header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- {{Glossary("Request_header", "Anfrage-Header")}}, wie {{HTTPHeader("User-Agent")}} oder {{HTTPHeader("Accept")}}, modifizieren die Anfrage durch eine genauere Spezifikation (wie {{HTTPHeader("Accept-Language")}}), durch die Angabe von Kontext (wie {{HTTPHeader("Referer")}}) oder durch bedingte Einschränkung (wie {{HTTPHeader("If-None-Match")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewendete Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Körper hat).

![Beispiel für Header in einer HTTP-Anfrage](http_request_headers3.png)

### Körper

Der letzte Teil einer Anfrage ist der Körper. Nicht alle Anfragen haben einen: Anfragen mit einer {{HTTPMethod("GET")}} _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_ sollten nur zum Anfordern von Daten verwendet werden und keinen Körper enthalten.

Körper können grob in zwei Kategorien unterteilt werden:

- Einzelressourcen-Körper, bestehend aus einer einzigen Datei, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- [Mehrfachressourcen-Körper](/de/docs/Web/HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Körper, der jeweils ein anderes Informationsstück enthält. Dies ist typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) verbunden.

## HTTP-Antworten

### Statuszeile

> [!NOTE]
> Die Startzeile wird in Antworten als "Statuszeile" bezeichnet.

Die Startzeile einer HTTP-Antwort, die _Statuszeile_ genannt wird, enthält folgende Informationen:

1. Die _Protokollversion_, normalerweise `HTTP/1.1`, aber es kann auch `HTTP/1.0` sein.
2. Ein [_Statuscode_](/de/docs/Web/HTTP/Status), der den Erfolg oder Misserfolg der Anfrage angibt. Gängige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
3. Ein _Status-Text_. Eine kurze, rein informative, textuelle Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

Eine typische Statuszeile sieht so aus: `HTTP/1.1 404 Not Found`.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) für Antworten folgen der gleichen Struktur wie jeder andere Header: ein nicht case-sensitiver String gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Typ des Headers abhängt. Der gesamte Header, einschließlich seines Werts, präsentiert sich als eine einzelne Zeile.

Viele verschiedene Header können in Antworten erscheinen. Diese können in mehrere Gruppen unterteilt werden:

- {{Glossary("General_header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- {{Glossary("Response_header", "Antwort-Header")}}, wie {{HTTPHeader("Vary")}} und {{HTTPHeader("Accept-Ranges")}}, geben zusätzliche Informationen über den Server, die nicht in die Statuszeile passen.
- {{Glossary("Representation_header", "Repräsentationsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewendete Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Körper hat).

![Beispiel für Header in einer HTTP-Antwort](http_response_headers3.png)

### Körper

Der letzte Teil einer Antwort ist der Körper. Nicht alle Antworten haben einen: Antworten mit einem Statuscode, der die Anfrage ausreichend beantwortet, ohne dass Inhalt inkludiert werden muss (wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}), haben in der Regel keinen.

Körper können grob in drei Kategorien unterteilt werden:

- Einzelressourcen-Körper, bestehend aus einer einzelnen Datei bekannter Länge, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- Einzelressourcen-Körper, bestehend aus einer einzelnen Datei unbekannter Länge, kodiert in Chunks mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Körper](/de/docs/Web/HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Körper, der jeweils unterschiedliche Abschnitte von Informationen enthält. Diese sind relativ selten.

## HTTP/2 Rahmen

HTTP/1.x-Nachrichten haben einige Nachteile in Bezug auf die Leistung:

- Header, im Gegensatz zu Körpern, sind unkomprimiert.
- Header sind oft sehr ähnlich von einer Nachricht zur nächsten, werden aber dennoch über Verbindungen hinweg wiederholt.
- Obwohl HTTP/1.1 [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) hat, wird es in den meisten Browsern nicht standardmäßig aktiviert und erlaubt keine Multiplexierung (d. h., gleichzeitiges Senden von Anfragen). Es müssen mehrere Verbindungen zum gleichen Server geöffnet werden, um Anfragen gleichzeitig zu senden; und warme TCP-Verbindungen sind effizienter als kalte.

HTTP/2 führt einen zusätzlichen Schritt ein: Es teilt HTTP/1.x-Nachrichten in Rahmen, die in einen Stream eingebettet sind. Daten- und Header-Rahmen sind getrennt, was eine Header-Kompression ermöglicht. Mehrere Streams können zusammen kombiniert werden, ein Prozess, der _Multiplexing_ genannt wird, der eine effizientere Nutzung der zugrundeliegenden TCP-Verbindungen ermöglicht.

![HTTP/2 modifiziert die HTTP-Nachricht, indem sie in Rahmen unterteilt wird (Teil eines einzigen Streams), was mehr Optimierung ermöglicht.](binary_framing2.png)

HTTP-Rahmen sind nun für Webentwickler transparent. Dies ist ein zusätzlicher Schritt in HTTP/2, zwischen HTTP/1.1-Nachrichten und dem darunterliegenden Transportprotokoll. Es sind keine Änderungen in den von Webentwicklern verwendeten APIs erforderlich, um HTTP-Rahmen zu nutzen; wenn sowohl im Browser als auch im Server verfügbar, wird HTTP/2 aktiviert und verwendet.

## Schlussfolgerung

HTTP-Nachrichten sind der Schlüssel zur Nutzung von HTTP; ihre Struktur ist einfach und sie sind hochgradig erweiterbar. Der HTTP/2-Rahmenmechanismus fügt eine neue Zwischenebene zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll hinzu, ohne es grundlegend zu ändern: er baut auf bewährten Mechanismen auf.
