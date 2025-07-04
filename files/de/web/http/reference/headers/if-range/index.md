---
title: If-Range header
short-title: If-Range
slug: Web/HTTP/Reference/Headers/If-Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`If-Range`**-{{Glossary("request_header", "Request-Header")}} macht eine Bereichsanfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests). Wenn die Bedingung erfüllt ist, wird eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) gestellt, und der Server sendet eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort zurück, die einen Teil (oder Teile) der Ressource im Body enthält. Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200", "200 OK")}}-Status zurückgesendet.

Dieser Header kann entweder mit dem {{HTTPHeader("Last-Modified")}}-Validator oder mit {{HTTPHeader("ETag")}} verwendet werden, jedoch nicht mit beiden.

Der häufigste Anwendungsfall ist das Fortsetzen eines Downloads mit der Garantie, dass die Ressource auf dem Server seit dem letzten vom Client empfangenen Teil nicht verändert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Direktiven

- `<etag>`
  - : Ein Entitäts-Tag, das die angeforderte Ressource eindeutig darstellt. Es ist eine Zeichenfolge von ASCII-Zeichen, die in Anführungszeichen gesetzt ist (wie `"675af34563dc-tr34"`). Ein schwaches Entitäts-Tag (eines, das mit `W/` vorangestellt ist) darf in diesem Header nicht verwendet werden.
- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tageszahl, z. B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z. B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z. B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z. B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z. B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten sind immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT

If-Range: "67ab43"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} bedingte Request-Header
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Antwortstatuscodes
