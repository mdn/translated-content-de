---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`If-Modified-Since`** HTTP-Anforderungsheader macht die
Anforderung bedingt: Der Server sendet die angeforderte Ressource mit einem
{{HTTPStatus("200")}} Status nur zurück, wenn sie nach dem angegebenen Datum zuletzt geändert wurde. Wenn die Ressource seitdem nicht geändert wurde, ist die Antwort ein {{HTTPStatus("304")}} ohne Inhalt; der {{HTTPHeader("Last-Modified")}} Antwortheader einer vorherigen Anforderung enthält das Datum der letzten Änderung. Im Gegensatz zu
{{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur
mit einem {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.

Wenn es in Kombination mit {{HTTPHeader("If-None-Match")}} verwendet wird, wird es ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Der häufigste Anwendungsfall ist die Aktualisierung einer zwischengespeicherten Entität ohne zugehöriges
{{HTTPHeader("ETag")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (groß-/kleinschreibungssensitiv).
- \<day>
  - : Zweistellige Tageszahl, z.B. "04" oder "23".
- \<month>
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec" (groß-/kleinschreibungssensitiv).
- \<year>
  - : Vierstellige Jahreszahl, z.B. "1990" oder "2016".
- \<hour>
  - : Zweistellige Stundenzahl, z. B. "09" oder "23".
- \<minute>
  - : Zweistellige Minutenzahl, z.B. "04" oder "59".
- \<second>
  - : Zweistellige Sekundenzahl, z.B. "04" oder "59".
- `GMT`
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT und niemals in lokaler Zeit angegeben.

## Beispiele

```http
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Kompatibilität in Browsern

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
