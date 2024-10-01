---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: 8c0ac633375d1dc6896a2147395e31ef5ffc206f
---

{{HTTPSidebar}}

HTTP-Nachrichten sind das Mittel, mit dem Daten zwischen einem Server und einem Client ausgetauscht werden. Es gibt zwei Arten von Nachrichten: _Anfragen_ (requests), die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und _Antworten_ (responses), die Antwort vom Server.

Webentwickler oder Webmaster erstellen diese textuellen HTTP-Nachrichten selten selbst: Software, ein Webbrowser, Proxy-Server oder Webserver übernimmt diese Aktion. Sie stellen HTTP-Nachrichten über Konfigurationsdateien (für Proxies oder Server), APIs (für Browser) oder andere Schnittstellen bereit.

![Aus einem von Benutzer, Skript oder Server generierten Ereignis wird eine HTTP/1.x-Nachricht erzeugt. Wenn HTTP/2 verwendet wird, wird sie binär in einen HTTP/2-Stream gerahmt und dann gesendet.](httpmsg2.png)

HTTP-Anfragen und -Antworten haben eine ähnliche Struktur und setzen sich aus folgenden Teilen zusammen:

1. Eine _Startzeile_, die die auszuführenden Anfragen beschreibt oder deren Status angibt, ob erfolgreich oder fehlgeschlagen. Dies ist immer eine einzelne Zeile.
2. Eine optionale Menge von _HTTP-Headern_, die die Anfrage spezifizieren oder den im Nachrichtentext enthaltenen Inhalt beschreiben.
3. Eine leere Zeile, die angibt, dass alle Metainformationen für die Anfrage gesendet wurden.
4. Ein optionaler _Nachrichtentext_ (body), der Daten enthält, die mit der Anfrage in Verbindung stehen (wie Inhalte eines HTML-Formulars) oder das Dokument, das zu einer Antwort gehört. Das Vorhandensein des Nachrichtentexts und seine Größe werden in der Startzeile und den HTTP-Headern angegeben.

Die Startzeile und die HTTP-Header der HTTP-Nachricht werden zusammen als _Kopf_ (head) der Anfragen bezeichnet, und der danach folgende Teil, der seinen Inhalt enthält, wird als _Nachrichtentext_ (body) bezeichnet.

![Anfragen und Antworten haben eine gemeinsame Struktur in HTTP](httpmsgstructure2.png)

## HTTP-Anfragen

### Anforderungszeile

> [!NOTE]
> Die Startzeile wird in Anfragen "Anforderungszeile" (request line) genannt.

HTTP-Anfragen sind Nachrichten, die vom Client gesendet werden, um eine Aktion auf dem Server zu starten. Ihre _Anforderungszeile_ (request line) enthält drei Elemente:

1. Eine _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_, ein Verb (wie {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}) oder ein Nomen (wie {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}), das die auszuführende Aktion beschreibt. Zum Beispiel gibt `GET` an, dass eine Ressource abgerufen werden soll, oder `POST` bedeutet, dass Daten an den Server gesendet werden (um eine Ressource zu erstellen oder zu ändern oder ein temporäres Dokument zurückzusenden).
2. Das _Anforderungsziel_ (request target), normalerweise eine {{Glossary("URL", "URL")}} oder der absolute Pfad des Protokolls, Ports und der Domäne, die normalerweise durch den Anfragekontext charakterisiert sind. Das Format dieses Anforderungsziels variiert je nach HTTP-Methode. Es kann sein:

   - Ein absoluter Pfad, letztendlich gefolgt von einem `'?'` und einer Abfragezeichenfolge. Dies ist die häufigste Form, bekannt als _Ursprungsform_ (origin form), und wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet.
     - `POST / HTTP/1.1`
     - `GET /background.png HTTP/1.0`
     - `HEAD /test.html?query=alibaba HTTP/1.1`
     - `OPTIONS /anypage.html HTTP/1.0`
   - Eine vollständige URL, bekannt als _absolute Form_, wird hauptsächlich bei `GET` verwendet, wenn mit einem Proxy verbunden.
     `GET https://developer.mozilla.org/de/docs/Web/HTTP/Messages HTTP/1.1`
   - Die Komponenten der URL, bestehend aus dem Domainnamen und optional dem Port (durch `':'` vorangestellt), werden _Autoritätsform_ (authority form) genannt. Sie wird nur bei `CONNECT` verwendet, wenn ein HTTP-Tunnel eingerichtet wird.
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - Die _Sternform_ (asterisk form), ein einfacher Stern (`'*'`), wird bei `OPTIONS` verwendet und repräsentiert den Server als Ganzes.
     `OPTIONS * HTTP/1.1`

3. Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert, fungiert als Indikator für die erwartete Version, die für die Antwort verwendet werden soll.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) aus einer Anfrage folgen der gleichen Grundstruktur wie ein HTTP-Header: ein nicht-zwischen Groß- und Kleinschreibung unterscheidender String, gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Header abhängt. Der gesamte Header einschließlich des Wertes besteht aus einer einzigen Zeile, die ziemlich lang sein kann.

Viele verschiedene Header können in Anfragen erscheinen. Sie können in mehrere Gruppen unterteilt werden:

- {{Glossary("General_header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die Nachricht als Ganzes.
- {{Glossary("Request_header", "Anforderungsheader")}}, wie {{HTTPHeader("User-Agent")}} oder {{HTTPHeader("Accept")}}, verfeinern die Anfrage, indem sie sie weiter spezifizieren (wie {{HTTPHeader("Accept-Language")}}), indem sie Kontext geben (wie {{HTTPHeader("Referer")}}) oder sie bedingt einschränken (wie {{HTTPHeader("If-None-Match")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewendete Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Text hat).

![Beispiel von Headern in einer HTTP-Anfrage](http_request_headers3.png)

### Nachrichtentext

Der letzte Teil einer Anfrage ist der Nachrichtentext.
Nicht alle Anfragen haben einen: Anfragen mit einer {{HTTPMethod("GET")}} _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_ sollten nur zum Anfordern von Daten verwendet werden und keinen Nachrichtentext enthalten.

Nachrichtentexte können grob in zwei Kategorien unterteilt werden:

- Einfache Ressourcenkörper, bestehend aus einer einzigen Datei, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- [Mehrteilige Ressourcenkörper](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Nachrichtentext, der jeweils ein anderes Informationsstück enthält. Dies ist typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) verbunden.

## HTTP-Antworten

### Statuszeile

> [!NOTE]
> Die Startzeile wird in Antworten "Statuszeile" (status line) genannt.

Die Startzeile einer HTTP-Antwort, die sogenannte _Statuszeile_, enthält die folgenden Informationen:

1. Die _Protokollversion_, normalerweise `HTTP/1.1`, kann aber auch `HTTP/1.0` sein.
2. Einen [_Statuscode_](/de/docs/Web/HTTP/Status), der Erfolg oder Misserfolg der Anfrage anzeigt. Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, oder {{HTTPStatus("302")}}.
3. Ein _Status-Text_. Eine kurze, rein informative, textliche Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

Eine typische Statuszeile sieht folgendermaßen aus: `HTTP/1.1 404 Not Found`.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) für Antworten folgen der gleichen Struktur wie jeder andere Header: ein nicht-zwischen Groß- und Kleinschreibung unterscheidender String, gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Header abhängt. Der gesamte Header einschließlich seines Wertes wird als eine einzelne Zeile dargestellt.

Viele verschiedene Header können in Antworten erscheinen. Diese können in mehrere Gruppen unterteilt werden:

- {{Glossary("General_header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die ganze Nachricht.
- {{Glossary("Response_header", "Antwortheader")}}, wie {{HTTPHeader("Vary")}} und {{HTTPHeader("Accept-Ranges")}}, geben zusätzliche Informationen über den Server, die nicht in die Statuszeile passen.
- {{Glossary("Representation_header", "Repräsentationsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewendete Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Text hat).

![Beispiel von Headern in einer HTTP-Antwort](http_response_headers3.png)

### Nachrichtentext

Der letzte Teil einer Antwort ist der Nachrichtentext. Nicht alle Antworten haben einen: Antworten mit einem Statuscode, der die Anfrage ausreichend beantwortet, ohne dass Inhalte hinzugefügt werden müssen (wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}), haben meistens keinen.

Nachrichtentexte können grob in drei Kategorien unterteilt werden:

- Einfache Ressourcenkörper, bestehend aus einer einzelnen Datei bekannter Länge, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- Einfache Ressourcenkörper, bestehend aus einer einzelnen Datei unbekannter Länge, kodiert in Blöcken mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrteilige Ressourcenkörper](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Nachrichtentext, der jeweils einen anderen Abschnitt der Information enthält. Diese sind relativ selten.

## HTTP/2-Frames

HTTP/1.x Nachrichten haben einige Leistungsnachteile:

- Header, im Gegensatz zu Nachrichtentexten, sind unkomprimiert.
- Header sind oft sehr ähnlich von einer Nachricht zur nächsten, werden jedoch über die Verbindungen hinweg wiederholt.
- Obwohl HTTP/1.1 über [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) verfügt, ist es in den meisten Browsern nicht standardmäßig aktiviert und erlaubt kein Multiplexing (d. h. das gleichzeitige Senden von Anfragen). Mehrere Verbindungen müssen zum selben Server geöffnet werden, um Anfragen gleichzeitig zu senden, und warmgehaltene TCP-Verbindungen sind effizienter als kalte.

HTTP/2 führt einen zusätzlichen Schritt ein: Es unterteilt HTTP/1.x-Nachrichten in Frames, die in einen Stream eingebettet werden. Daten- und Header-Frames werden getrennt, was die Header-Kompression ermöglicht. Mehrere Streams können zusammengeführt werden, ein Prozess, der als _Multiplexing_ bekannt ist, was eine effizientere Nutzung der zugrunde liegenden TCP-Verbindungen ermöglicht.

![HTTP/2 modifiziert die HTTP-Nachricht, um sie in Frames zu unterteilen (Teil eines einzelnen Streams), was mehr Optimierung ermöglicht.](binary_framing2.png)

HTTP-Frames sind jetzt für Webentwickler transparent. Dies ist ein zusätzlicher Schritt in HTTP/2, zwischen HTTP/1.1-Nachrichten und dem zugrunde liegenden Transportprotokoll. Es sind keine Änderungen an den von Webentwicklern genutzten APIs erforderlich, um HTTP-Frames zu verwenden; wenn sowohl im Browser als auch auf dem Server verfügbar, wird HTTP/2 eingeschaltet und verwendet.

## Fazit

HTTP-Nachrichten sind der Schlüssel zur Nutzung von HTTP; ihre Struktur ist einfach und sie sind hochgradig erweiterbar. Der HTTP/2-Framemechanismus fügt eine neue Zwischenebene zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll hinzu, ohne sie grundlegend zu verändern: Er baut auf bewährten Mechanismen auf.
