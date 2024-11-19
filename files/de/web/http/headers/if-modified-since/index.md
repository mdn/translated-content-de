---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`If-Modified-Since`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Conditional_requests).
Der Server sendet die angeforderte Ressource mit einem {{HTTPStatus("200")}}-Status nur zurück, wenn sie nach dem Datum im `If-Modified-Since`-Header modifiziert wurde.
Falls die Ressource seitdem nicht modifiziert wurde, lautet die Antwort {{HTTPStatus("304")}} ohne jeglichen Body, und der {{HTTPHeader("Last-Modified")}}-Antwort-Header der vorherigen Anfrage enthält das Datum der letzten Modifikation.

Im Gegensatz zu {{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur mit einem {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.
Wird es zusammen mit {{HTTPHeader("If-None-Match")}} verwendet, wird es ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Die häufigste Anwendungsfall ist das Aktualisieren einer zwischengespeicherten Entität, die kein zugehöriges {{HTTPHeader("ETag")}} hat.

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
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

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
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, nie in Ortszeit.

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
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Unmodified-Since")}} konditionelle Anfrage-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
