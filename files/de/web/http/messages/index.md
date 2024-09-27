---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: 8c0ac633375d1dc6896a2147395e31ef5ffc206f
---

{{HTTPSidebar}}

HTTP-Nachrichten sind die Art und Weise, wie Daten zwischen einem Server und einem Client ausgetauscht werden. Es gibt zwei Arten von Nachrichten: _Anfragen_, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und _Antworten_, die Antwort des Servers.

Webentwickler oder Webmaster erstellen diese textuellen HTTP-Nachrichten selten selbst: Software, ein Webbrowser, Proxy oder Webserver übernimmt dies. Sie liefern HTTP-Nachrichten über Konfigurationsdateien (für Proxys oder Server), APIs (für Browser) oder andere Schnittstellen.

![Aus einem von Benutzern, Skripten oder Servern generierten Ereignis wird eine HTTP/1.x-Nachricht erzeugt, und wenn HTTP/2 verwendet wird, wird sie binär in einen HTTP/2-Stream gerahmt und dann gesendet.](httpmsg2.png)

HTTP-Anfragen und -Antworten haben eine ähnliche Struktur und bestehen aus:

1. Einer _Startzeile_, die die Anfragen beschreibt, die implementiert werden sollen, oder ihren Status, ob erfolgreich oder fehlgeschlagen. Dies ist immer eine einzelne Zeile.
2. Einem optionalen Satz von _HTTP-Headern_, die die Anfrage spezifizieren oder den im Nachrichtentext enthaltenen Text beschreiben.
3. Einer Leerzeile, die anzeigt, dass alle Metainformationen für die Anfrage gesendet wurden.
4. Einem optionalen _Body_, der Daten enthält, die mit der Anfrage in Verbindung stehen (z. B. Inhalt eines HTML-Formulars) oder das mit einer Antwort verknüpfte Dokument. Das Vorhandensein des Bodys und seine Größe werden durch die Startzeile und die HTTP-Header angegeben.

Die Startzeile und die HTTP-Header der HTTP-Nachricht werden zusammen als der _Kopf_ der Anfragen bezeichnet, und der Teil danach, der ihren Inhalt enthält, wird als der _Body_ bezeichnet.

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](httpmsgstructure2.png)

## HTTP-Anfragen

### Anfragelinie

> [!NOTE]
> Die Startzeile wird bei Anfragen "Anfragelinie" genannt.

HTTP-Anfragen sind Nachrichten, die vom Client gesendet werden, um eine Aktion auf dem Server zu initiieren. Ihre _Anfragelinie_ enthält drei Elemente:

1. Eine _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_, ein Verb (wie {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}) oder ein Substantiv (wie {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}), das die zu ausführende Aktion beschreibt. Zum Beispiel gibt `GET` an, dass eine Ressource abgerufen werden soll, oder `POST` bedeutet, dass Daten an den Server gesendet werden (eine Ressource erstellen oder ändern oder ein temporäres Dokument zur Rücksendung generieren).
2. Das _Anfrageziel_, normalerweise eine [URL](/de/docs/Glossary/URL), oder der absolute Pfad des Protokolls, des Ports und der Domäne, werden normalerweise durch den Anfragkontext charakterisiert. Das Format dieses Anfrageziels variiert je nach den verschiedenen HTTP-Methoden. Es kann sein:

   - Ein absoluter Pfad, letztendlich gefolgt von einem `'?'` und einem Abfrage-String. Dies ist die häufigste Form, bekannt als die _Ursprungsform_, und wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet.
     - `POST / HTTP/1.1`
     - `GET /background.png HTTP/1.0`
     - `HEAD /test.html?query=alibaba HTTP/1.1`
     - `OPTIONS /anypage.html HTTP/1.0`
   - Eine vollständige URL, bekannt als die _absolute Form_, wird hauptsächlich mit `GET` verwendet, wenn sie mit einem Proxy verbunden ist.
     `GET https://developer.mozilla.org/de/docs/Web/HTTP/Messages HTTP/1.1`
   - Die Autoritätskomponente einer URL, bestehend aus dem Domainnamen und optional dem Port (vorangestellt von einem `':'`), wird als die _Autoritätsform_ bezeichnet. Sie wird nur mit `CONNECT` verwendet, wenn ein HTTP-Tunnel eingerichtet wird.
     `CONNECT developer.mozilla.org:80 HTTP/1.1`
   - Die _Asteriskform_, ein einfaches Sternchen (`'*'`), wird mit `OPTIONS` verwendet und repräsentiert den Server als Ganzes.
     `OPTIONS * HTTP/1.1`

3. Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die zu erwartende Version für die Antwort dient.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) von einer Anfrage folgen der gleichen Grundstruktur eines HTTP-Headers: ein nicht case-sensitive String gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Header abhängt. Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile, die ziemlich lang sein kann.

Viele verschiedene Header können in Anfragen auftreten. Sie können in mehrere Gruppen unterteilt werden:

- [Allgemeine Header](/de/docs/Glossary/General_header), wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- [Anfrage-Header](/de/docs/Glossary/Request_header), wie {{HTTPHeader("User-Agent")}} oder {{HTTPHeader("Accept")}}, modifizieren die Anfrage, indem sie sie weiter spezifizieren (wie {{HTTPHeader("Accept-Language")}}), indem sie Kontext liefern (wie {{HTTPHeader("Referer")}}), oder indem sie sie bedingt einschränken (wie {{HTTPHeader("If-None-Match")}}).
- [Repräsentationsheader](/de/docs/Glossary/Representation_header) wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewandte Codierung beschreiben (nur vorhanden, wenn die Nachricht einen Body hat).

![Beispiel für Header in einer HTTP-Anfrage](http_request_headers3.png)

### Body

Der letzte Teil einer Anfrage ist der Body.
Nicht alle Anfragen haben einen: Anfragen mit einer {{HTTPMethod("GET")}} _[HTTP-Methode](/de/docs/Web/HTTP/Methods)_ sollten nur verwendet werden, um Daten anzufordern, und sollten keinen Body enthalten.

Bodys können grob in zwei Kategorien unterteilt werden:

- Einzelressourcen-Bodys, bestehend aus einer einzelnen Datei, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- [Mehrressourcen-Bodys](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Body, der jeweils ein anderes Stück Information enthält. Dies ist typischerweise mit [HTML-Forms](/de/docs/Learn/Forms) verbunden.

## HTTP-Antworten

### Statuszeile

> [!NOTE]
> Die Startzeile wird bei Antworten "Statuszeile" genannt.

Die Startzeile einer HTTP-Antwort, die als _Statuszeile_ bezeichnet wird, enthält die folgenden Informationen:

1. Die _Protokollversion_, normalerweise `HTTP/1.1`, kann aber auch `HTTP/1.0` sein.
2. Ein [_Statuscode_](/de/docs/Web/HTTP/Status), der den Erfolg oder das Scheitern der Anfrage anzeigt. Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
3. Ein _Statustext_. Eine kurze, rein informative, textliche Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

Eine typische Statuszeile sieht so aus: `HTTP/1.1 404 Not Found`.

### Header

[HTTP-Header](/de/docs/Web/HTTP/Headers) für Antworten folgen der gleichen Struktur wie jeder andere Header: ein nicht case-sensitive String gefolgt von einem Doppelpunkt (`':'`) und einem Wert, dessen Struktur vom Typ des Headers abhängt. Der gesamte Header, einschließlich des Wertes, wird als eine einzige Zeile dargestellt.

Viele verschiedene Header können in Antworten auftreten. Diese können in mehrere Gruppen unterteilt werden:

- [Allgemeine Header](/de/docs/Glossary/General_header), wie {{HTTPHeader("Via")}}, gelten für die gesamte Nachricht.
- [Antwort-Header](/de/docs/Glossary/Response_header), wie {{HTTPHeader("Vary")}} und {{HTTPHeader("Accept-Ranges")}}, geben zusätzliche Informationen über den Server an, die nicht in die Statuszeile passen.
- [Repräsentationsheader](/de/docs/Glossary/Representation_header) wie {{HTTPHeader("Content-Type")}}, die das ursprüngliche Format der Nachrichtendaten und jede angewandte Codierung beschreiben (nur vorhanden, wenn die Nachricht einen Body hat).

![Beispiel für Header in einer HTTP-Antwort](http_response_headers3.png)

### Body

Der letzte Teil einer Antwort ist der Body. Nicht alle Antworten haben einen: Antworten mit einem Statuscode, der die Anfrage ausreichend beantwortet, ohne dass ein Inhalt enthalten sein muss (wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}), haben in der Regel keinen.

Bodys können grob in drei Kategorien unterteilt werden:

- Einzelressourcen-Bodys, bestehend aus einer einzelnen Datei bekannter Länge, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}.
- Einzelressourcen-Bodys, bestehend aus einer einzelnen Datei unbekannter Länge, die durch Chunks kodiert sind, wobei {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt ist.
- [Mehrressourcen-Bodys](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), bestehend aus einem mehrteiligen Body, der jeweils einen anderen Abschnitt von Informationen enthält. Diese sind relativ selten.

## HTTP/2-Frames

HTTP/1.x-Nachrichten haben einige Nachteile in Bezug auf die Leistung:

- Header, im Gegensatz zu Bodys, sind unkomprimiert.
- Header sind oft sehr ähnlich von einer Nachricht zur anderen, werden jedoch trotzdem über Verbindungen wiederholt.
- Obwohl HTTP/1.1 [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) hat, ist es in den meisten Browsern standardmäßig nicht aktiviert und erlaubt keine Multiplexierung (d.h. das gleichzeitige Senden von Anfragen). Mehrere Verbindungen müssen auf demselben Server geöffnet sein, um Anfragen gleichzeitig zu senden; und warme TCP-Verbindungen sind effizienter als kalte.

HTTP/2 führt einen zusätzlichen Schritt ein: es teilt HTTP/1.x-Nachrichten in Frames auf, die in einen Stream eingebettet sind. Daten- und Header-Frames sind getrennt, was eine Header-Komprimierung ermöglicht. Mehrere Streams können zusammen kombiniert werden, ein Prozess namens _Multiplexing_, der eine effizientere Nutzung der zugrunde liegenden TCP-Verbindungen ermöglicht.

![HTTP/2 verändert die HTTP-Nachricht, um sie in Frames (Teil eines einzelnen Streams) aufzuteilen, was mehr Optimierung ermöglicht.](binary_framing2.png)

HTTP-Frames sind jetzt einsehbar für Webentwickler. Dies ist ein zusätzlicher Schritt in HTTP/2, zwischen HTTP/1.1-Nachrichten und dem zugrunde liegenden Transportprotokoll. Es sind keine Änderungen an den von Webentwicklern verwendeten APIs erforderlich, um HTTP-Frames zu nutzen; wenn sowohl im Browser als auch auf dem Server verfügbar, wird HTTP/2 eingeschaltet und verwendet.

## Fazit

HTTP-Nachrichten sind der Schlüssel zur Nutzung von HTTP; ihre Struktur ist einfach und sie sind hochgradig erweiterbar. Der HTTP/2-Framemechanismus fügt eine neue Zwischenschicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll hinzu, ohne es grundlegend zu ändern: Auf bewährten Mechanismen aufbauend.
