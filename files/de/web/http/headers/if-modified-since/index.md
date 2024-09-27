---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`If-Modified-Since`** HTTP-Anforderungsheader macht die Anfrage bedingt: Der Server sendet die angeforderte Ressource mit einem {{HTTPStatus("200")}}-Status nur dann zurück, wenn sie nach dem angegebenen Datum zuletzt geändert wurde. Wenn die Ressource seitdem nicht geändert wurde, ist die Antwort ein {{HTTPStatus("304")}} ohne jeglichen Inhalt; der {{HTTPHeader("Last-Modified")}}-Antwortheader einer vorherigen Anfrage enthält das Datum der letzten Änderung. Im Gegensatz zum {{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur mit {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.

Wird er in Kombination mit {{HTTPHeader("If-None-Match")}} verwendet, wird er ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Der häufigste Anwendungsfall ist das Aktualisieren eines zwischengespeicherten Objekts, das keinen zugeordneten {{HTTPHeader("ETag")}} hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Nicht erlaubter Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- \<day-name>
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (Groß-/Kleinschreibung beachten).
- \<day>
  - : 2-stellige Tagesnummer, z. B. "04" oder "23".
- \<month>
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (Groß-/Kleinschreibung beachten).
- \<year>
  - : 4-stellige Jahreszahl, z. B. "1990" oder "2016".
- \<hour>
  - : 2-stellige Stundenzahl, z. B. "09" oder "23".
- \<minute>
  - : 2-stellige Minutenzahl, z. B. "04" oder "59".
- \<second>
  - : 2-stellige Sekundenzahl, z. B. "04" oder "59".
- `GMT`
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in lokaler Zeit.

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
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
