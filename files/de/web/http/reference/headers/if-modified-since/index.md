---
title: If-Modified-Since
slug: Web/HTTP/Reference/Headers/If-Modified-Since
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`If-Modified-Since`** {{Glossary("request_header", "Request-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Guides/Conditional_requests).
Der Server sendet die angeforderte Ressource mit einem {{HTTPStatus("200")}}-Status nur zurück, wenn sie nach dem im `If-Modified-Since`-Header angegebenen Datum geändert wurde.
Falls die Ressource seitdem nicht geändert wurde, ist die Antwort ein {{HTTPStatus("304")}} ohne Inhalt, und der {{HTTPHeader("Last-Modified")}}-Antwortheader der vorherigen Anfrage enthält das Datum der letzten Änderung.

Im Gegensatz zu {{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur mit einem {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.
Wenn es in Kombination mit {{HTTPHeader("If-None-Match")}} verwendet wird, wird es ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Der häufigste Anwendungsfall ist das Aktualisieren einer zwischengespeicherten Entität, die kein zugehöriges {{HTTPHeader("ETag")}} hat.

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
  - : Zweistellige Tageszahl, z.B. "04" oder "23".
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
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in Lokalzeit.

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
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
