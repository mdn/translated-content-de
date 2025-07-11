---
title: OPTIONS request method
short-title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die **`OPTIONS`** HTTP-Methode fordert zulässige Kommunikationsoptionen für eine bestimmte URL oder einen Server an. Diese kann verwendet werden, um die erlaubten HTTP-Methoden für eine Anfrage zu testen oder um festzustellen, ob eine Anfrage erfolgreich wäre, wenn eine CORS-Preflight-Anfrage gestellt wird. Ein Client kann mit dieser Methode eine URL angeben oder ein Sternchen (`*`), um den gesamten Server zu adressieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Kann*</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Kann</td>
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
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">In HTML-Formularen erlaubt</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

\* Obwohl eine `OPTIONS` Nachricht mit einem Anfrage-Body technisch erlaubt ist, hat sie keine definierten Semantiken. Sie können einen Body in einer `OPTIONS` Nachricht einschließen, solange Sie einen gültigen {{HTTPHeader("Content-Type")}}-Header bereitstellen und wenn Sie wissen, dass der Server ihn erwartet, da das Verhalten implementierungsspezifisch ist.

## Syntax

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

Das Anforderungsziel kann entweder in 'Asterisk-Form' `*` sein, was den gesamten Server anzeigt, oder ein Anforderungsziel, wie es bei anderen Methoden üblich ist:

- `*`
  - : Zeigt an, dass der Client `OPTIONS` für den gesamten Server anfordern möchte, im Gegensatz zu einer bestimmten benannten Ressource dieses Servers.
- `<request-target>`
  - : Identifiziert das Ziel der Anforderung in Kombination mit den Informationen, die im {{HTTPHeader("Host")}} Header bereitgestellt werden. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) in Anforderungen an einen Ursprungserver und eine absolute URL in Anforderungen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Ein optionaler Abfragebestandteil, der durch ein Fragezeichen `?` eingeleitet wird. Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu tragen.

## Beispiele

### Identifizierung erlaubter Anfragemethoden

Um herauszufinden, welche Anfragemethoden ein Server unterstützt, kann man das Kommandozeilenprogramm `curl` verwenden, um eine `OPTIONS`-Anfrage zu stellen:

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

Die Antwort enthält einen {{HTTPHeader("Allow")}}-Header, der die erlaubten Methoden enthält:

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### Preflight-Anfragen in CORS

In [CORS](/de/docs/Web/HTTP/Guides/CORS) wird mit der Methode `OPTIONS` eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} gesendet, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage zu senden. In diesem Beispiel werden wir um Erlaubnis für diese Parameter bitten:

- Der {{HTTPHeader("Access-Control-Request-Method")}} Header, der in der Preflight-Anfrage gesendet wird, teilt dem Server mit, dass die tatsächliche Anfrage, wenn sie gesendet wird, eine {{HTTPMethod("POST")}}-Anfragemethode haben wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}} Header teilt dem Server mit, dass die tatsächliche Anfrage die Header `X-PINGOTHER` und `Content-Type` haben wird.

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
  - : Der Ursprung `https://foo.example` darf die URL `bar.example/resources/post-here/` über Folgendes anfragen:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} und `OPTIONS` sind erlaubte Methoden für die URL. (Dieser Header ist dem {{HTTPHeader("Allow")}} Antwortheader ähnlich, wird aber nur für [CORS](/de/docs/Web/HTTP/Guides/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind erlaubte Anfrage-Header für die URL.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Die obigen Berechtigungen können für 86.400 Sekunden (1 Tag) zwischengespeichert werden.

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
> Sowohl {{HTTPStatus("200", "200 OK")}} als auch {{HTTPStatus("204", "204 No Content")}} sind [erlaubte Statuscodes](https://fetch.spec.whatwg.org/#ref-for-ok-status), aber einige Browser glauben fälschlicherweise, dass `204 No Content` auf die Ressource zutrifft und senden keine nachfolgende Anfrage, um sie abzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}} Header
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
