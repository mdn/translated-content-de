---
title: If-Range
slug: Web/HTTP/Headers/If-Range
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`If-Range`** {{Glossary("request_header", "Request-Header")}} macht eine Bereichsanforderung [konditional](/de/docs/Web/HTTP/Conditional_requests).
Wenn die Bedingung erfüllt ist, wird eine [Bereichsanforderung](/de/docs/Web/HTTP/Range_requests) ausgeführt, und der Server sendet eine {{HTTPStatus("206", "206 Partial Content")}}-Antwort mit einem Teil (oder Teilen) der Ressource im Body zurück.
Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200", "200 OK")}}-Status zurückgesendet.

Dieser Header kann entweder mit dem {{HTTPHeader("Last-Modified")}}-Validator oder mit {{HTTPHeader("ETag")}} verwendet werden, aber nicht mit beiden.

Der häufigste Anwendungsfall ist das Fortsetzen eines Downloads mit der Garantie, dass die Ressource auf dem Server seit dem Empfang des letzten Teils durch den Client nicht verändert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Entitätstag, das die angeforderte Ressource eindeutig repräsentiert. Es ist ein String aus ASCII-Zeichen, der in Anführungszeichen gesetzt wird (z. B. `"675af34563dc-tr34"`). Ein schwaches Entitätstag (eines, das mit `W/` vorangestellt ist) darf in diesem Header nicht verwendet werden.
- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : 2-stelliger Tageszahl, z. B., "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z. B., "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenanzahl, z. B., "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenanzahl, z. B., "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenanzahl, z. B., "04" oder "59".
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

- [HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests) Leitfaden
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} bedingte Anforderungsheader
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} Antwortstatuscodes
