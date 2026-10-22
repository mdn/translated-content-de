---
title: OPTIONS request method
short-title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
l10n:
  sourceCommit: ac65ac98266cab02b9c9c8ced28c282e41a0b648
---

Die HTTP-Methode **`OPTIONS`** fragt ab, welche Kommunikationsmöglichkeiten für eine bestimmte URL oder einen Server zulässig sind.
Damit können die für eine Anfrage erlaubten HTTP-Methoden geprüft oder festgestellt werden, ob eine Anfrage nach einer CORS-Preflight-Anfrage erfolgreich wäre.
Ein Client kann mit dieser Methode eine URL oder ein Sternchen (`*`) angeben, um sich auf den gesamten Server zu beziehen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Möglich*</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Möglich</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cachebar")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">In HTML-Formularen erlaubt</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

\* Obwohl eine `OPTIONS`-Nachricht mit einem Anfrage-Body technisch zulässig ist, ist dafür keine Semantik definiert.
Sie können einer `OPTIONS`-Nachricht einen Body hinzufügen, sofern Sie einen gültigen {{HTTPHeader("Content-Type")}}-Header angeben und wissen, dass der Server einen Body erwartet. Das Verhalten hängt von der Implementierung ab.

## Syntax

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

Das Anfrageziel kann entweder ein Sternchen (`*`) sein, das den gesamten Server bezeichnet, oder ein Anfrageziel, wie es auch bei anderen Methoden üblich ist:

- `*`
  - : Gibt an, dass der Client `OPTIONS` für den gesamten Server abfragen möchte, statt für eine bestimmte Ressource auf diesem Server.
- `<request-target>`
  - : Identifiziert zusammen mit den Angaben im {{HTTPHeader("Host")}}-Header die Zielressource der Anfrage.
    Bei Anfragen an einen Ursprungsserver ist dies ein absoluter Pfad (z. B. `/path/to/file.html`), bei Anfragen an Proxys eine absolute URL (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Sie wird häufig verwendet, um identifizierende Informationen in Form von `key=value`-Paaren zu übermitteln.

## Beispiele

### Zulässige Anfragemethoden ermitteln

Um herauszufinden, welche Anfragemethoden ein Server unterstützt, können Sie mit dem Kommandozeilenprogramm `curl` eine `OPTIONS`-Anfrage senden:

```bash
curl -X OPTIONS https://httpbin.org/ -i
```

Dadurch wird die folgende HTTP-Anfrage erzeugt:

```http
OPTIONS / HTTP/2
Host: httpbin.org
User-Agent: curl/8.7.1
Accept: */*
```

Eine Beispielantwort enthält einen {{HTTPHeader("Allow")}}-Header, der die zulässigen Methoden auflistet (die genauen Antwort-Header können abweichen):

```http
HTTP/2 200
content-type: text/html; charset=utf-8
content-length: 0
allow: HEAD, OPTIONS, GET
```

### Preflight-Anfragen bei CORS

Bei [CORS](/de/docs/Web/HTTP/Guides/CORS) wird eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} mit der Methode `OPTIONS` gesendet, damit der Server mitteilen kann, ob die eigentliche Anfrage zulässig ist. In diesem Beispiel fragen wir die Erlaubnis für folgende Parameter an:

- Der in der Preflight-Anfrage gesendete {{HTTPHeader("Access-Control-Request-Method")}}-Header teilt dem Server mit, dass die eigentliche Anfrage die Anfragemethode {{HTTPMethod("POST")}} verwenden wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass die eigentliche Anfrage die Header `X-PINGOTHER` und `Content-Type` enthalten wird.

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Der Server kann nun antworten, ob er eine Anfrage unter diesen Bedingungen akzeptiert. In diesem Beispiel besagt die Serverantwort Folgendes:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Der Ursprung `https://foo.example` darf die URL `bar.example/resources/post-here/` unter den folgenden Bedingungen anfragen:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} und `OPTIONS` sind zulässige Methoden für die URL. (Dieser Header ähnelt dem Antwort-Header {{HTTPHeader("Allow")}}, wird aber nur für [CORS](/de/docs/Web/HTTP/Guides/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind zulässige Anfrage-Header für die URL.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Die oben genannten Berechtigungen dürfen 86.400 Sekunden (1 Tag) lang zwischengespeichert werden.

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

> [!NOTE]
> Sowohl {{HTTPStatus("200", "200 OK")}} als auch {{HTTPStatus("204", "204 No Content")}} sind [zulässige Statuscodes](https://fetch.spec.whatwg.org/#ref-for-ok-status). Einige Browser gehen jedoch fälschlicherweise davon aus, dass `204 No Content` für die Ressource gilt, und senden keine anschließende Anfrage, um sie abzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}}-Header
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
