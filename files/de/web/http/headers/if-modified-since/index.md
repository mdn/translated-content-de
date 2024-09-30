---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`If-Modified-Since`** Anforderungs-HTTP-Header macht die Anfrage bedingt: Der Server sendet die angeforderte Ressource mit einem {{HTTPStatus("200")}} Status nur dann zurück, wenn sie nach dem angegebenen Datum zuletzt geändert wurde. Wenn die Ressource seitdem nicht verändert wurde, ist die Antwort ein {{HTTPStatus("304")}} ohne jeglichen Inhalt; der {{HTTPHeader("Last-Modified")}} Antwort-Header einer vorherigen Anfrage enthält das Datum der letzten Änderung. Im Gegensatz zu {{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur mit einem {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.

Wenn es in Kombination mit {{HTTPHeader("If-None-Match")}} verwendet wird, wird es ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Der häufigste Anwendungsfall ist das Aktualisieren einer zwischengespeicherten Entität, die kein zugehöriges {{HTTPHeader("ETag")}} hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (auf Groß-/Kleinschreibung achten).
- \<day>
  - : 2-stelliger Tag, z.B. "04" oder "23".
- \<month>
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec" (auf Groß-/Kleinschreibung achten).
- \<year>
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- \<hour>
  - : 2-stelliger Stundenwert, z.B. "09" oder "23".
- \<minute>
  - : 2-stelliger Minutenwert, z.B. "04" oder "59".
- \<second>
  - : 2-stelliger Sekundenwert, z.B. "04" oder "59".
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
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
