---
title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`OPTIONS`** HTTP-Methode fordert zulässige Kommunikationsoptionen für eine gegebene URL oder einen Server an. Dies kann verwendet werden, um die erlaubten HTTP-Methoden für eine Anfrage zu testen oder um festzustellen, ob eine Anfrage erfolgreich wäre, wenn eine CORS-Vorab-Anfrage gesendet wird. Ein Client kann mit dieser Methode eine URL angeben oder einen Asterisk (`*`), um sich auf den gesamten Server zu beziehen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
      <td>Kann sein</td>
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
      <th scope="row">In HTML-Formularen erlaubt</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

Das Anfragenziel kann entweder in 'Asterisk-Form' `*` sein, um den gesamten Server anzuzeigen, oder ein Anfragenziel, wie es bei anderen Methoden üblich ist:

- `*`
  - : Gibt an, dass der Client `OPTIONS` für den gesamten Server anfordern möchte, im Gegensatz zu einer bestimmten benannten Ressource dieses Servers.
- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn diese mit den im {{HTTPHeader("Host")}}-Header bereitgestellten Informationen kombiniert wird. Dies ist ein absoluter Pfad (z. B. `/path/to/file.html`) bei Anfragen an einen Ursprungsserver und eine absolute URL bei Anfragen an Proxies (z. B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird. Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Ermitteln der erlaubten Anfrage-Methoden

Um herauszufinden, welche Anfragemethoden ein Server unterstützt, kann das Kommandozeilenprogramm `curl` verwendet werden, um eine `OPTIONS`-Anfrage zu senden:

```bash
curl -X OPTIONS https://example.org -i
```

Dies erstellt die folgende HTTP-Anfrage:

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

### Vorab-Anfragen in CORS

In [CORS](/de/docs/Web/HTTP/Guides/CORS) wird eine {{Glossary("Preflight_request", "Vorab-Anfrage")}} mit der `OPTIONS`-Methode gesendet, damit der Server antworten kann, ob es akzeptabel ist, die Anfrage zu senden. In diesem Beispiel werden wir um Erlaubnis für diese Parameter bitten:

- Der im Vorfeld gesendete {{HTTPHeader("Access-Control-Request-Method")}}-Header teilt dem Server mit, dass die tatsächliche Anfrage, wenn sie gesendet wird, die {{HTTPMethod("POST")}}-Methode verwenden wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass die tatsächliche Anfrage die `X-PINGOTHER` und `Content-Type` Header haben wird.

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
  - : Der Ursprung `https://foo.example` berechtigt ist, die URL `bar.example/resources/post-here/` anzufordern über:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}}, und `OPTIONS` sind die erlaubten Methoden für die URL. (Dieser Header ist dem {{HTTPHeader("Allow")}}-Antwortheader ähnlich, wird jedoch nur für [CORS](/de/docs/Web/HTTP/Guides/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind die erlaubten Anforderungsheader für die URL.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Die oben genannten Berechtigungen können für 86.400 Sekunden (1 Tag) zwischengespeichert werden.

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
- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}} Header
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
