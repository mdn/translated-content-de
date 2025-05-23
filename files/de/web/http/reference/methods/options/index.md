---
title: OPTIONS request method
short-title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die **`OPTIONS`** HTTP-Methode fragt nach den erlaubten Kommunikationsoptionen für eine gegebene URL oder einen Server.
Dies kann verwendet werden, um die erlaubten HTTP-Methoden für eine Anfrage zu testen oder um festzustellen, ob eine Anfrage erfolgreich wäre, wenn eine CORS Preflight-Anfrage gestellt wird.
Ein Client kann mit dieser Methode eine URL angeben oder ein Sternchen (`*`), um auf den gesamten Server zu verweisen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
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
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erlaubt in HTML-Formularen</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

Das Anforderungsziel kann entweder in 'Sternchenform' `*` sein, was den gesamten Server angibt, oder ein Anforderungsziel, wie es bei anderen Methoden üblich ist:

- `*`
  - : Zeigt an, dass der Client `OPTIONS` für den gesamten Server anfordern möchte, im Gegensatz zu einer bestimmten benannten Ressource dieses Servers.
- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird.
    Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxys (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, der ein Fragezeichen `?` vorangestellt ist.
    Wird oft verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Identifizierung erlaubter Anfragemethoden

Um herauszufinden, welche Anfragemethoden ein Server unterstützt, kann man das `curl` Kommandozeilenprogramm verwenden, um eine `OPTIONS`-Anfrage zu stellen:

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

In [CORS](/de/docs/Web/HTTP/Guides/CORS) wird eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} mit der `OPTIONS`-Methode gesendet, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage zu senden. In diesem Beispiel werden wir um Erlaubnis für diese Parameter bitten:

- Der im Preflight-Request gesendete {{HTTPHeader("Access-Control-Request-Method")}}-Header teilt dem Server mit, dass bei der tatsächlichen Anfrage die {{HTTPMethod("POST")}}-Anfragemethode verwendet wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass bei der tatsächlichen Anfrage die Header `X-PINGOTHER` und `Content-Type` vorhanden sein werden.

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

Der Server kann nun antworten, ob er eine Anfrage unter diesen Umständen akzeptiert. In diesem Beispiel sagt die Serverantwort, dass:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Der Ursprung `https://foo.example` darf die URL `bar.example/resources/post-here/` mit den folgenden Methoden anfordern:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} und `OPTIONS` sind erlaubte Methoden für die URL. (Dieser Header ist dem {{HTTPHeader("Allow")}}-Antwortheader ähnlich, wird jedoch nur für [CORS](/de/docs/Web/HTTP/Guides/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind zugelassene Anfrageheader für die URL.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Die oben genannten Berechtigungen dürfen für 86.400 Sekunden (1 Tag) zwischengespeichert werden.

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}}-Header
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
