---
title: If-Range header
short-title: If-Range
slug: Web/HTTP/Reference/Headers/If-Range
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`If-Range`** {{Glossary("request_header", "Request-Header")}} macht eine Bereichsanfrage [konditional](/de/docs/Web/HTTP/Guides/Conditional_requests).
Wenn die Bedingung erfüllt ist, wird eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) gesendet, und der Server antwortet mit einer {{HTTPStatus("206", "206 Partial Content")}}-Antwort, die einen Teil (oder Teile) der Ressource im Body enthält.
Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200", "200 OK")}}-Status zurückgesendet.

Dieser Header kann entweder mit dem {{HTTPHeader("Last-Modified")}}-Validator oder mit {{HTTPHeader("ETag")}} verwendet werden, aber nicht mit beiden gleichzeitig.

Der häufigste Anwendungsfall ist das Fortsetzen eines Downloads mit der Garantie, dass die Ressource auf dem Server seit dem letzten Teil, der vom Client empfangen wurde, nicht verändert wurde.

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
  - : Ein Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenkette aus ASCII-Zeichen, die in Anführungszeichen gesetzt ist (z.B. `"675af34563dc-tr34"`). Ein schwaches Entity-Tag (eines, das mit `W/` beginnt) darf in diesem Header nicht verwendet werden.
- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : Zweistellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : Vierstellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : Zweistellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : Zweistellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : Zweistellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in Ortszeit.

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

- [HTTP-konditionale Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) Leitfaden
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} konditionale Request-Header
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Antwortstatuscodes
