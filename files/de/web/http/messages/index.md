---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

HTTP-Nachrichten sind die Art und Weise, wie Daten zwischen einem Server und einem Client ausgetauscht werden. Es gibt zwei Arten von Nachrichten: _Anfragen_, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und _Antworten_, die Antwort vom Server.

Webentwickler oder Webmaster erstellen diese textuellen HTTP-Nachrichten selten selbst: Eine Software, ein Webbrowser, Proxy oder Webserver führt diese Aktion aus. Sie stellen HTTP-Nachrichten über Konfigurationsdateien (für Proxys oder Server), APIs (für Browser) oder andere Schnittstellen bereit.

![Von einem benutzer-, skript- oder servergenerierten Ereignis wird eine HTTP/1.x-Nachricht erstellt, und wenn HTTP/2 verwendet wird, wird sie binär in einen HTTP/2-Stream gerahmt und dann gesendet.](httpmsg2.png)

HTTP-Anfragen und -Antworten haben eine ähnliche Struktur und bestehen aus:

1. Einer _Startzeile_, die die umzusetzenden Anfragen beschreibt oder den Status, ob sie erfolgreich oder fehlgeschlagen sind. Dies ist immer eine einzelne Zeile.
2. Einem optionalen Satz von _HTTP-Headern_, die die Anforderung angeben oder den in der Nachricht enthaltenen Text beschreiben.
3. Einer Leerzeile, die anzeigt, dass alle Metainformationen für die Anforderung gesendet wurden.
4. Einem optionalen _Körper_, der Daten enthält, die mit der Anforderung verbunden sind (wie Inhalt eines HTML-Formulars) oder das Dokument, das mit einer Antwort verbunden ist. Das Vorhandensein des Körpers und seine Größe werden von der Startzeile und den HTTP-Headern festgelegt.

Die Startzeile und die HTTP-Header der HTTP-Nachricht werden zusammen als der _Kopf_ der Anfragen bezeichnet, und der Teil danach, der den Inhalt enthält, ist als _Körper_ bekannt.

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](httpmsgstructure2.png)

## HTTP-Anfragen

### Anfragezeile

> [!NOTE]
> Die Startzeile wird in Anfragen als "Anfragezeile" bezeichnet.

HTTP-Anfragen sind Nachrichten, die vom Client gesendet werden, um eine Aktion auf dem Server zu initiieren. Ihre _Anfragezeile_ enthält drei Elemente:

1. Eine _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_, ein Verb (wie {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}) oder ein Nomen (wie {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}), die die auszuführende Aktion beschreibt. Zum Beispiel gibt `GET` an, dass eine Ressource abgerufen werden soll, oder `POST` bedeutet, dass Daten an den Server gesendet werden (eine Ressource erstellen oder ändern oder ein temporäres Dokument generieren, das zurückgesendet wird).
2. Das _Anforderungsziel_, normalerweise eine {{Glossary("URL", "URL")}} oder der absolute Pfad des Protokolls, des Ports und der Domäne, die normalerweise durch den Kontext der Anforderung charakterisiert werden. Das Format dieses Anforderungsziels variiert zwischen verschiedenen HTTP-Methoden. Es kann sein:

   - Ein absoluter Pfad, der letztendlich von einem `'?'` und einer Abfragezeichenfolge gefolgt wird. Dies ist die häufigste Form, bekannt als _Herkunftsform_, und wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet.
     - `POST / HTTP/1.1`
     - `GET /background.png HTTP/1.0`
     - `HEAD /test.html?query=alibaba HTTP/1.1`
     - `OPTIONS /anypage.html HTTP/1.0`
   - Eine vollständige URL, bekannt als _absolute Form_, wird hauptsächlich mit `GET` verwendet, wenn eine Verbindung zu einem Proxy hergestellt wird.
     `GET https://developer.mozilla.org/de/docs/Web/HTTP/Messages HTTP/1.1`
   - Die Autoritätskomponente einer URL, bestehend aus dem Domainnamen und optional dem Port (mit einem `':'` vorangestellt), wird als _Autoritätsform_ bezeichnet. Sie wird nur mit `CONNECT` verwendet, wenn ein HTTP-Tunnel eingerichtet wird.
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - Die _Asterisk-Form_, ein einfacher Asterisk (`'*'`), wird mit `OPTIONS` verwendet und stellt den Server als Ganzes dar.
     `OPTIONS * HTTP/1.1`

3. Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete Version dient, die für die Antwort zu verwenden ist.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) einer Anfrage folgen der gleichen Grundstruktur wie ein HTTP-Header: ein nicht auf Groß- und Kleinschreibung achtender String gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Header abhängt. Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile, die ziemlich lang sein kann.

Viele verschiedene Header können in Anfragen erscheinen. Sie können in mehrere Gruppen unterteilt werden:

- {{Glossary("General_header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- {{Glossary("Request_header", "Anforderungsheader")}}, wie {{HTTPHeader("User-Agent")}} oder {{HTTPHeader("Accept")}}, ändern die Anforderung, indem sie sie weiter spezifizieren (wie {{HTTPHeader("Accept-Language")}}), durch Kontextangabe (wie {{HTTPHeader("Referer")}}) oder durch bedingte Einschränkung (wie {{HTTPHeader("If-None-Match")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}}, wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewandte Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Körper hat).

![Beispiel für Header in einer HTTP-Anfrage](http_request_headers3.png)

### Körper

Der letzte Teil einer Anfrage ist der Körper.
Nicht alle Anfragen haben einen: Anfragen mit einer {{HTTPMethod("GET")}} _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_ sollten nur zum Anfordern von Daten verwendet werden und keinen Körper enthalten.

Körper können grob in zwei Kategorien unterteilt werden:

- Einzelfile-Körper, bestehend aus einer einzigen Datei, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- [Mehrfachressourcen-Körper](/de/docs/Web/HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Körper, der jeweils ein anderes Stück Information enthält. Dies wird typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) assoziiert.

## HTTP-Antworten

### Statuszeile

> [!NOTE]
> Die Startzeile wird in Antworten als "Statuszeile" bezeichnet.

Die Startzeile einer HTTP-Antwort, die _Statuszeile_ genannt wird, enthält die folgende Information:

1. Die _Protokollversion_, normalerweise `HTTP/1.1`, aber kann auch `HTTP/1.0` sein.
2. Einen [_Statuscode_](/de/docs/Web/HTTP/Status), der den Erfolg oder Misserfolg der Anfrage anzeigt. Gebräuchliche Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, oder {{HTTPStatus("302")}}.
3. Einen _Status-Text_. Eine kurze, rein informative, textuelle Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

Eine typische Statuszeile sieht folgendermaßen aus: `HTTP/1.1 404 Not Found`.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) für Antworten folgen der gleichen Struktur wie alle anderen Header: ein nicht auf Groß- und Kleinschreibung achtender String gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Typ des Headers abhängt. Der gesamte Header, einschließlich seines Wertes, stellt sich als eine einzige Zeile dar.

Viele verschiedene Header können in Antworten erscheinen. Diese können in mehrere Gruppen unterteilt werden:

- {{Glossary("General_header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- {{Glossary("Response_header", "Antwort-Header")}}, wie {{HTTPHeader("Vary")}} und {{HTTPHeader("Accept-Ranges")}}, geben zusätzliche Informationen über den Server an, die nicht in die Statuszeile passen.
- {{Glossary("Representation_header", "Repräsentationsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewandte Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Körper hat).

![Beispiel für Header in einer HTTP-Antwort](http_response_headers3.png)

### Körper

Der letzte Teil einer Antwort ist der Körper. Nicht alle Antworten haben einen: Antworten mit einem Statuscode, der die Anfrage ausreichend beantwortet, ohne dass Inhalte enthalten sein müssen (wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}), haben normalerweise keinen Körper.

Körper können grob in drei Kategorien unterteilt werden:

- Einzelfile-Körper, bestehend aus einer einzigen Datei mit bekannter Länge, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- Einzelfile-Körper, bestehend aus einer einzigen Datei unbekannter Länge, kodiert in Chunks mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Körper](/de/docs/Web/HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Körper, der jeweils einen anderen Abschnitt von Informationen enthält. Diese sind relativ selten.

## HTTP/2-Frames

HTTP/1.x-Nachrichten haben einige Leistungsnachteile:

- Header, im Gegensatz zu Körpern, sind unkomprimiert.
- Header sind oft sehr ähnlich von einer Nachricht zur nächsten, werden jedoch immer noch über Verbindungen hinweg wiederholt.
- Obwohl HTTP/1.1 [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) hat, ist es in den meisten Browsern nicht standardmäßig aktiviert und erlaubt kein Multiplexing (d.h. das gleichzeitige Senden von Anfragen). Mehrere Verbindungen müssen auf demselben Server geöffnet werden, um Anfragen gleichzeitig zu senden; und warme TCP-Verbindungen sind effizienter als kalte.

HTTP/2 führt einen zusätzlichen Schritt ein: Es teilt HTTP/1.x-Nachrichten in Frames, die in einem Stream eingebettet sind. Daten- und Header-Frames sind getrennt, was eine Header-Komprimierung ermöglicht. Mehrere Streams können miteinander kombiniert werden, ein Prozess, der _Multiplexing_ genannt wird und eine effizientere Nutzung der zugrunde liegenden TCP-Verbindungen ermöglicht.

![HTTP/2 ändert die HTTP-Nachricht, um sie in Frames (Teil eines einzelnen Streams) zu unterteilen und damit mehr Optimierung zu ermöglichen.](binary_framing2.png)

HTTP-Frames sind nun für Webentwickler transparent. Dies ist ein zusätzlicher Schritt in HTTP/2, zwischen HTTP/1.1-Nachrichten und dem zugrunde liegenden Transportprotokoll. Es sind keine Änderungen an den APIs erforderlich, die von Webentwicklern verwendet werden, um HTTP-Frames zu nutzen; wenn sowohl im Browser als auch auf dem Server verfügbar, wird HTTP/2 aktiviert und verwendet.

## Fazit

HTTP-Nachrichten sind der Schlüssel zur Nutzung von HTTP; ihre Struktur ist einfach und sie sind hochgradig erweiterbar. Der HTTP/2-Framing-Mechanismus fügt eine neue Zwischenschicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll hinzu, ohne es grundlegend zu ändern: auf bewährten Mechanismen aufbauend.
