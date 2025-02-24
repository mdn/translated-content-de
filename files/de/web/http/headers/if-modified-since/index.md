---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`If-Modified-Since`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Conditional_requests).
Der Server sendet die angeforderte Ressource mit einem {{HTTPStatus("200")}}-Status nur zurück, wenn sie nach dem Datum, das im `If-Modified-Since`-Header angegeben ist, modifiziert wurde.
Wenn die Ressource seitdem nicht geändert wurde, ist die Antwort ein {{HTTPStatus("304")}} ohne Inhalt, und der {{HTTPHeader("Last-Modified")}}-Antwort-Header der vorherigen Anfrage enthält das Datum der letzten Änderung.

Im Gegensatz zu {{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur mit einem {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.
In Kombination mit {{HTTPHeader("If-None-Match")}} wird es ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Der häufigste Anwendungsfall ist die Aktualisierung einer zwischengespeicherten Entität, die kein zugehöriges {{HTTPHeader("ETag")}} hat.

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
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, niemals in lokaler Zeit.

## Beispiele

```http
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Unmodified-Since")}} konditionale Request-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatus-Codes
