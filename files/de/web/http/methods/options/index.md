---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`OPTIONS`** HTTP-Methode erfragt erlaubte Kommunikationsoptionen für eine gegebene URL oder einen Server.
Diese kann verwendet werden, um die erlaubten HTTP-Methoden für eine Anfrage zu testen oder um festzustellen, ob eine Anfrage erfolgreich wäre, wenn eine CORS vorgelagerte Anfrage gemacht wird.
Ein Client kann mit dieser Methode eine URL angeben oder ein Sternchen (`*`), um auf den gesamten Server zu verweisen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request mit Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort mit Body</th>
      <td>Kann sein</td>
    </tr>
    <tr>
      <th scope="row">[Sicher](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">[Cachefähig](/de/docs/Glossary/Cacheable)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erlaubt in HTML-Formularen</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Der Anfragetarget kann entweder in 'Asterisk-Form' `*` sein, was auf den gesamten Server deutet, oder ein üblicher Anfragetarget wie bei anderen Methoden:

- `*`
  - : Deutet darauf hin, dass der Client `OPTIONS` für den gesamten Server anfragen möchte, im Gegensatz zu einer bestimmten Ressource dieses Servers.
- `<request-target>`
  - : Identifiziert das Ziel der Anfrage, kombiniert mit den Informationen im {{HTTPHeader("Host")}}-Header.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente vorangestellt mit einem Fragezeichen `?`.
    Oft verwendet, um identifizierende Informationen in der Form von `key=value` Paaren mitzuführen.

## Beispiele

### Ermittlung erlaubter Anfragemethoden

Um herauszufinden, welche Anfragemethoden ein Server unterstützt, kann man das Kommandozeilenprogramm `curl` verwenden, um eine `OPTIONS`-Anfrage zu senden:

```bash
curl -X OPTIONS https://example.org -i
```

Dies erzeugt die folgende HTTP-Anfrage:

```http
OPTIONS / HTTP/2
Host: example.org
User-Agent: curl/8.7.1
Accept: */*
```

Die Antwort enthält einen {{HTTPHeader("Allow")}}-Header, der die erlaubten Methoden auflistet:

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### Vorgelagerte Anfragen bei CORS

In [CORS](/de/docs/Web/HTTP/CORS) wird eine [vorgelagerte Anfrage](/de/docs/Glossary/Preflight_request) mit der `OPTIONS`-Methode gesendet, damit der Server darauf antworten kann, ob es akzeptabel ist, die Anfrage zu senden. In diesem Beispiel werden wir um Erlaubnis für diese Parameter bitten:

- Der {{HTTPHeader("Access-Control-Request-Method")}}-Header, der in der vorgelagerten Anfrage gesendet wird, teilt dem Server mit, dass bei der tatsächlichen Anfrage eine {{HTTPMethod("POST")}}-Anfragemethode verwendet wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass bei der tatsächlichen Anfrage die Header `X-PINGOTHER` und `Content-Type` enthalten sein werden.

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

Der Server kann nun antworten, ob er eine Anfrage unter diesen Umständen akzeptiert. In diesem Beispiel sagt die Serverantwort:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Der Ursprung `https://foo.example` darf die URL `bar.example/resources/post-here/` über die folgenden Wege anfragen:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} und `OPTIONS` sind erlaubte Methoden für die URL. (Dieser Header ist dem {{HTTPHeader("Allow")}}-Header ähnlich, wird jedoch nur für [CORS](/de/docs/Web/HTTP/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind erlaubte Anforderungs-Header für die URL.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Die obigen Berechtigungen dürfen für 86.400 Sekunden (1 Tag) zwischengespeichert werden.

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
> Sowohl {{HTTPStatus("200", "200 OK")}} als auch {{HTTPStatus("204", "204 No Content")}} sind [erlaubte Statuscodes](https://fetch.spec.whatwg.org/#ref-for-ok-status), aber einige Browser glauben fälschlicherweise, dass `204 No Content` für die Ressource gilt und senden keine nachfolgende Anfrage, um sie abzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Allow")}}-Header
- [CORS](/de/docs/Web/HTTP/CORS)
