---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: 8c0ac633375d1dc6896a2147395e31ef5ffc206f
---

{{HTTPSidebar}}

HTTP-Nachrichten sind der Weg, wie Daten zwischen einem Server und einem Client ausgetauscht werden. Es gibt zwei Arten von Nachrichten: _Anfragen_, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und _Antworten_, die Antwort vom Server.

Webentwickler oder Webmaster erstellen selten diese textuellen HTTP-Nachrichten selbst: Software, ein Webbrowser, Proxy oder Webserver, führen diese Aktion durch. Sie stellen HTTP-Nachrichten über Konfigurationsdateien (für Proxies oder Server), APIs (für Browser) oder andere Schnittstellen bereit.

![Aus einem vom Benutzer, Skript oder Server generierten Ereignis wird eine HTTP/1.x-Nachricht erzeugt, und wenn HTTP/2 verwendet wird, wird sie binär in einen HTTP/2-Stream gerahmt und dann gesendet.](httpmsg2.png)

HTTP-Anfragen und -Antworten haben eine ähnliche Struktur und bestehen aus:

1. Einer _Startzeile_, die die zu implementierenden Anfragen beschreibt oder deren Status, ob erfolgreich oder fehlgeschlagen. Diese besteht immer aus einer einzigen Zeile.
2. Einem optionalen Satz von _HTTP-Headern_, die die Anfrage spezifizieren oder den im Nachrichtentext enthaltenen Inhalt beschreiben.
3. Einer Leerzeile, die angibt, dass alle Metainformationen für die Anfrage gesendet wurden.
4. Einem optionalen _Inhalt_, der Daten enthält, die mit der Anfrage verbunden sind (wie der Inhalt eines HTML-Formulars) oder das Dokument, das mit einer Antwort verbunden ist. Das Vorhandensein des Inhalts und dessen Größe wird durch die Startzeile und die HTTP-Header angegeben.

Die Startzeile und die HTTP-Header der HTTP-Nachricht werden zusammen als _Kopf_ der Anfragen bezeichnet, und der danach folgende Teil, der den Inhalt enthält, wird als _Inhalt_ bezeichnet.

![Anfragen und Antworten haben eine gemeinsame Struktur in HTTP](httpmsgstructure2.png)

## HTTP-Anfragen

### Anfragelinie

> [!NOTE]
> Die Startzeile wird bei Anfragen als "Anfragelinie" bezeichnet.

HTTP-Anfragen sind Nachrichten, die vom Client gesendet werden, um eine Aktion auf dem Server zu initiieren. Ihre _Anfragelinie_ enthält drei Elemente:

1. Eine _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_, ein Verb (wie {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}) oder ein Substantiv (wie {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}), das die auszuführende Aktion beschreibt. Zum Beispiel zeigt `GET` an, dass eine Ressource abgerufen werden soll, oder `POST` bedeutet, dass Daten an den Server gesendet werden (Erstellen oder Ändern einer Ressource oder Generieren eines temporären Dokuments zur Rücksendung).
2. Das _Anfrageziel_, normalerweise ein {{glossary("URL")}}, oder der absolute Pfad des Protokolls, des Ports und der Domain werden normalerweise durch den Anfragekontext charakterisiert. Das Format dieses Anfrageziels variiert zwischen verschiedenen HTTP-Methoden. Es kann sein:

   - Ein absoluter Pfad, letztendlich gefolgt von einem `'?'` und Abfragezeichenfolge. Dies ist die häufigste Form, bekannt als _Ursprungsform_, und wird mit `GET`, `POST`, `HEAD` und `OPTIONS`-Methoden verwendet.
     - `POST / HTTP/1.1`
     - `GET /background.png HTTP/1.0`
     - `HEAD /test.html?query=alibaba HTTP/1.1`
     - `OPTIONS /anypage.html HTTP/1.0`
   - Eine vollständige URL, bekannt als _absolute Form_, wird hauptsächlich mit `GET` beim Verbinden mit einem Proxy verwendet.
     `GET https://developer.mozilla.org/de/docs/Web/HTTP/Messages HTTP/1.1`
   - Die Autoritätskomponente einer URL, bestehend aus dem Domainnamen und optional dem Port (eingeleitet durch ein `':'`), wird als _Autoritätsform_ bezeichnet. Sie wird nur mit `CONNECT` verwendet, wenn ein HTTP-Tunnel eingerichtet wird.
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - Die _Asterisk-Form_, ein einfacher Asterisk (`'*'`), wird mit `OPTIONS` verwendet und repräsentiert den gesamten Server.
     `OPTIONS * HTTP/1.1`

3. Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete Version zur Verwendung der Antwort dient.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) aus einer Anfrage folgen der gleichen grundlegenden Struktur eines HTTP-Headers: eine groß-/klein-schreibungssensitive Zeichenfolge, gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Header abhängt. Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile, die recht lang sein kann.

Es können viele verschiedene Header in Anfragen erscheinen. Sie können in mehrere Gruppen unterteilt werden:

- {{glossary("Allgemeiner Header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- {{glossary("Anfrageheader", "Anfrageheader")}}, wie {{HTTPHeader("User-Agent")}} oder {{HTTPHeader("Accept")}}, modifizieren die Anfrage, indem sie sie weiter spezifizieren (wie {{HTTPHeader("Accept-Language")}}), Kontext geben (wie {{HTTPHeader("Referer")}}) oder sie bedingt einschränken (wie {{HTTPHeader("If-None-Match")}}).
- {{glossary("Darstellungsheader", "Darstellungsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jegliche angewandte Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Inhalt hat).

![Beispiel von Headern in einer HTTP-Anfrage](http_request_headers3.png)

### Inhalt

Der letzte Teil einer Anfrage ist der Inhalt.
Nicht alle Anfragen haben einen: Anfragen mit einer {{HTTPMethod("GET")}} _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_ sollten nur verwendet werden, um Daten anzufordern und sollten keinen Inhalt enthalten.

Inhalte können grob in zwei Kategorien unterteilt werden:

- Einzelfilminhalte, bestehend aus einer einzigen Datei, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- [Mehrfachfilminhalte](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Inhalt, der jeweils einen anderen Informationsausschnitt enthält. Dies ist typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) verbunden.

## HTTP-Antworten

### Statuszeile

> [!NOTE]
> Die Startzeile wird bei Antworten als "Statuszeile" bezeichnet.

Die Startzeile einer HTTP-Antwort, die _Statuszeile_ genannt wird, enthält die folgenden Informationen:

1. Die _Protokollversion_, üblicherweise `HTTP/1.1`, kann aber auch `HTTP/1.0` sein.
2. Ein [_Statuscode_](/de/docs/Web/HTTP/Status), der den Erfolg oder das Scheitern der Anfrage anzeigt. Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
3. Ein _Statustext_. Eine kurze, rein informative, textuelle Beschreibung des Statuscodes, um einem Menschen das Verständnis der HTTP-Nachricht zu erleichtern.

Eine typische Statuszeile sieht folgendermaßen aus: `HTTP/1.1 404 Not Found`.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) für Antworten folgen der gleichen Struktur wie jeder andere Header: eine groß-/klein-schreibungssensitive Zeichenfolge, gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Typ des Headers abhängt. Der gesamte Header, einschließlich seines Wertes, erscheint als eine einzelne Zeile.

Es können viele verschiedene Header in Antworten erscheinen. Diese können in mehrere Gruppen unterteilt werden:

- {{glossary("Allgemeiner Header", "Allgemeine Header")}}, wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- {{glossary("Antwortheader", "Antwortheader")}}, wie {{HTTPHeader("Vary")}} und {{HTTPHeader("Accept-Ranges")}}, geben zusätzliche Informationen über den Server, die nicht in die Statuszeile passen.
- {{glossary("Darstellungsheader", "Darstellungsheader")}} wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jegliche angewandte Kodierung beschreiben (nur vorhanden, wenn die Nachricht einen Inhalt hat).

![Beispiel von Headern in einer HTTP-Antwort](http_response_headers3.png)

### Inhalt

Der letzte Teil einer Antwort ist der Inhalt. Nicht alle Antworten haben einen: Antworten mit einem Statuscode, der die Anfrage ausreichend beantwortet, ohne dass Inhalt enthalten sein muss (wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}), haben normalerweise keinen.

Inhalte können grob in drei Kategorien unterteilt werden:

- Einzelfilminhalte, bestehend aus einer einzigen Datei bekannter Länge, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- Einzelfilminhalte, bestehend aus einer einzigen Datei unbekannter Länge, kodiert in Teilen mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachfilminhalte](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Inhalt, der jeweils einen anderen Informationsabschnitt enthält. Diese sind relativ selten.

## HTTP/2-Rahmen

HTTP/1.x-Nachrichten haben einige Nachteile in Bezug auf die Leistung:

- Header sind im Gegensatz zu Inhalten unkomprimiert.
- Header sind häufig von einer Nachricht zur nächsten sehr ähnlich, werden jedoch trotzdem über Verbindungen hinweg wiederholt.
- Obwohl HTTP/1.1 [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) hat, ist es in den meisten Browsern standardmäßig nicht aktiviert und erlaubt kein Multiplexing (d.h. gleichzeitiges Senden von Anfragen). Mehrere Verbindungen müssen auf demselben Server geöffnet werden, um Anfragen gleichzeitig zu senden; und warme TCP-Verbindungen sind effizienter als kalte.

HTTP/2 führt einen zusätzlichen Schritt ein: es teilt HTTP/1.x Nachrichten in Rahmen auf, die in einem Stream eingebettet sind. Daten- und Header-Rahmen sind getrennt, was eine Header-Kompression ermöglicht. Mehrere Streams können zusammen kombiniert werden, ein Prozess namens _Multiplexing_, was eine effizientere Nutzung der zugrunde liegenden TCP-Verbindungen ermöglicht.

![HTTP/2 modifiziert die HTTP-Nachricht, um sie in Rahmen zu teilen (Teil eines einzelnen Streams), was mehr Optimierung ermöglicht.](binary_framing2.png)

HTTP-Rahmen sind jetzt für Webentwickler transparent. Dies ist ein zusätzlicher Schritt in HTTP/2, zwischen HTTP/1.1-Nachrichten und dem zugrunde liegenden Transportprotokoll. Keine Änderungen sind in den von Webentwicklern verwendeten APIs erforderlich, um HTTP-Rahmen zu nutzen; wenn verfügbar, sowohl im Browser als auch auf dem Server, wird HTTP/2 aktiviert und genutzt.

## Fazit

HTTP-Nachrichten sind der Schlüssel zur Nutzung von HTTP; ihre Struktur ist einfach und sie sind sehr erweiterbar. Der HTTP/2-Rahmenmechanismus fügt eine neue Zwischenebene zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll hinzu, ohne es grundlegend zu ändern: basierend auf bewährten Mechanismen.
