---
title: If-Range
slug: Web/HTTP/Headers/If-Range
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`If-Range`**-{{Glossary("request_header", "Anforderungsheader")}} macht eine Bereichsanfrage [konditional](/de/docs/Web/HTTP/Conditional_requests).
Wenn die Bedingung erfüllt ist, wird eine [Bereichsanfrage](/de/docs/Web/HTTP/Range_requests) gesendet, und der Server sendet eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort mit Teil(en) der Ressource im Body zurück.
Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200", "200 OK")}}-Status zurückgesendet.

Dieser Header kann entweder mit dem {{HTTPHeader("Last-Modified")}}-Validator oder mit {{HTTPHeader("ETag")}} verwendet werden, aber nicht mit beiden.

Der häufigste Anwendungsfall ist die Fortsetzung eines Downloads mit der Gewissheit, dass die Ressource auf dem Server nicht verändert wurde, seit der letzte Teil vom Client empfangen wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Ein Entitätstag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenkette aus ASCII-Zeichen, die in doppelte Anführungszeichen gesetzt wird (wie `"675af34563dc-tr34"`). Ein schwaches Entitätstag (eines, das mit `W/` vorangestellt ist) darf in diesem Header nicht verwendet werden.
- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (case-sensitive).
- `<day>`
  - : 2-stellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (case-sensitive).
- `<year>`
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, niemals in Ortszeit.

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

- [HTTP-Konditionale Anfragen](/de/docs/Web/HTTP/Conditional_requests) Leitfaden
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} Konditionale Anforderungsheader
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Antwortstatuscodes
