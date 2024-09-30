---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`OPTIONS`** HTTP-Methode fragt nach den zulässigen Kommunikationsoptionen für eine gegebene URL oder einen Server. Diese Methode kann verwendet werden, um die erlaubten HTTP-Methoden für eine Anfrage zu testen oder um festzustellen, ob eine Anfrage erfolgreich wäre, wenn eine CORS-Voranfrage gestellt wird. Ein Client kann mit dieser Methode entweder eine URL angeben oder ein Sternchen (`*`), um den gesamten Server zu referenzieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Darf</td>
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
      <th scope="row">[Cacheable](/de/docs/Glossary/Cacheable)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">In HTML-Formularen erlaubt</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

Das Anfrageziel kann entweder in der 'Sternchenform' `*` sein, was den gesamten Server anzeigt, oder ein Anfrageziel, wie bei anderen Methoden üblich:

- `*`
  - : Zeigt an, dass der Client `OPTIONS` für den gesamten Server anfordern möchte, im Gegensatz zu einer spezifisch benannten Ressource dieses Servers.
- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}} Header kombiniert wird. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird. Häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu tragen.

## Beispiele

### Ermittlung erlaubter Anfrage-Methoden

Um herauszufinden, welche Anfrage-Methoden ein Server unterstützt, kann das `curl` Kommandozeilenprogramm verwendet werden, um eine `OPTIONS` Anfrage zu stellen:

```bash
curl -X OPTIONS https://example.org -i
```

Dies erzeugt folgende HTTP-Anfrage:

```http
OPTIONS / HTTP/2
Host: example.org
User-Agent: curl/8.7.1
Accept: */*
```

Die Antwort enthält einen {{HTTPHeader("Allow")}} Header, der die erlaubten Methoden angibt:

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### Vorab-Anfragen in CORS

In [CORS](/de/docs/Web/HTTP/CORS) wird eine [Vorab-Anfrage](/de/docs/Glossary/Preflight_request) mit der `OPTIONS` Methode gesendet, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage zu senden. In diesem Beispiel werden wir um Erlaubnis für folgende Parameter bitten:

- Der {{HTTPHeader("Access-Control-Request-Method")}} Header, der in der Vorab-Anfrage gesendet wird, teilt dem Server mit, dass die tatsächliche Anfrage mit der {{HTTPMethod("POST")}} Methode gesendet wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}} Header teilt dem Server mit, dass die tatsächliche Anfrage die `X-PINGOTHER` und `Content-Type` Header haben wird.

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

Der Server kann nun antworten, ob er eine Anfrage unter diesen Bedingungen akzeptiert. In diesem Beispiel besagt die Serverantwort:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Der Ursprung `https://foo.example` darf die `bar.example/resources/post-here/` URL über die folgenden Methoden anfragen:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} und `OPTIONS` sind zulässige Methoden für die URL. (Dieser Header ähnelt dem {{HTTPHeader("Allow")}} Antwortheader, wird aber nur für [CORS](/de/docs/Web/HTTP/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind zulässige Anfrage-Header für die URL.
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
> Sowohl {{HTTPStatus("200", "200 OK")}} als auch {{HTTPStatus("204", "204 No Content")}} sind [zulässige Statuscodes](https://fetch.spec.whatwg.org/#ref-for-ok-status), aber einige Browser glauben fälschlicherweise, dass `204 No Content` für die Ressource gilt und senden keine nachfolgende Anfrage, um sie abzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Allow")}} Header
- [CORS](/de/docs/Web/HTTP/CORS)
