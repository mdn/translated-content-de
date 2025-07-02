---
title: OPTIONS request method
short-title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
l10n:
  sourceCommit: 1dc7706a4ae11461ab0666467e694e53b1cc894f
---

{{HTTPSidebar}}

Die **`OPTIONS`** HTTP-Methode fragt die erlaubten Kommunikationsoptionen für eine gegebene URL oder einen Server an. Dies kann verwendet werden, um die erlaubten HTTP-Methoden für eine Anfrage zu testen oder um festzustellen, ob eine Anfrage bei einer CORS-Preflight-Anfrage erfolgreich wäre. Ein Client kann eine URL mit dieser Methode angeben oder ein Sternchen (`*`), um auf den gesamten Server zu verweisen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat Inhalt</th>
      <td>Darf*</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat Inhalt</th>
      <td>Darf</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheable")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">In HTML-Formularen erlaubt</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

\* Obwohl eine `OPTIONS`-Nachricht mit einem Anfragetext technisch erlaubt ist, hat sie keine definierten Semantiken. Sie dürfen einen Text in eine `OPTIONS`-Nachricht einfügen, solange Sie einen gültigen {{HTTPHeader("Content-Type")}}-Header bereitstellen und Sie wissen, dass der Server dies erwartet, da das Verhalten implementierungsspezifisch ist.

## Syntax

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

Das Anforderungsziel kann entweder in 'Sternchen-Form' `*` sein, was den gesamten Server anzeigt, oder ein Anforderungsziel, wie es bei anderen Methoden üblich ist:

- `*`
  - : Gibt an, dass der Client `OPTIONS` für den gesamten Server anfragen möchte, im Gegensatz zu einer spezifischen benannten Ressource dieses Servers.
- `<request-target>`
  - : Identifiziert die Zielressource der Anfrage, wenn sie mit den Informationen im {{HTTPHeader("Host")}}-Header kombiniert wird. Dies ist ein absoluter Pfad (z.B. `/path/to/file.html`) bei Anfragen an einen Origin-Server und eine absolute URL bei Anfragen an Proxies (z.B. `http://www.example.com/path/to/file.html`).
- `<query>` {{optional_inline}}
  - : Eine optionale Abfragekomponente, die durch ein Fragezeichen `?` eingeleitet wird. Wird häufig verwendet, um identifizierende Informationen in Form von `key=value` Paaren zu übermitteln.

## Beispiele

### Ermittlung erlaubter Anfragemethoden

Um herauszufinden, welche Anfragemethoden ein Server unterstützt, kann man das `curl` Befehlszeilenprogramm verwenden, um eine `OPTIONS`-Anfrage zu senden:

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

In [CORS](/de/docs/Web/HTTP/Guides/CORS) wird eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} mit der `OPTIONS`-Methode gesendet, damit der Server darauf antworten kann, ob es akzeptabel ist, die Anfrage zu senden. In diesem Beispiel werden wir die Genehmigung für diese Parameter anfragen:

- Der {{HTTPHeader("Access-Control-Request-Method")}}-Header, der in der Preflight-Anfrage gesendet wird, zeigt dem Server, dass die tatsächliche Anfrage eine {{HTTPMethod("POST")}}-Anfragemethode haben wird.
- Der {{HTTPHeader("Access-Control-Request-Headers")}}-Header teilt dem Server mit, dass die tatsächliche Anfrage die Header `X-PINGOTHER` und `Content-Type` haben wird.

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

Der Server kann nun antworten, ob er eine Anfrage unter diesen Umständen akzeptieren wird. In diesem Beispiel sagt die Serverantwort, dass:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Der Ursprung `https://foo.example` darf die `bar.example/resources/post-here/` URL über die folgenden Methoden anfragen:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}}, und `OPTIONS` sind für die URL erlaubte Methoden. (Dieser Header ähnelt dem {{HTTPHeader("Allow")}}-Antwort-Header, wird jedoch nur für [CORS](/de/docs/Web/HTTP/Guides/CORS) verwendet.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` und `Content-Type` sind für die URL erlaubte Anfrage-Header.
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
> Sowohl {{HTTPStatus("200", "200 OK")}} als auch {{HTTPStatus("204", "204 No Content")}} sind [erlaubte Statuscodes](https://fetch.spec.whatwg.org/#ref-for-ok-status), aber einige Browser glauben fälschlicherweise, dass `204 No Content` auf die Ressource zutrifft und senden keine nachfolgende Anfrage, um sie abzurufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}}-Header
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
