---
title: Date
slug: Web/HTTP/Headers/Date
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der allgemeine HTTP-Header **`Date`** enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.

> **Warning:** `Date` ist in der [Liste der verbotenen Header-Namen](https://fetch.spec.whatwg.org/#forbidden-header-name)
> in der Fetch-Spezifikation aufgeführt, weshalb dieser Code den `Date`-Header nicht senden wird:
>
> ```js
> fetch("https://httpbin.org/get", {
>   headers: {
>     Date: new Date().toUTCString(),
>   },
> });
> ```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- \<day-name>
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (beachten Sie die Großschreibung).
- \<day>
  - : 2-stellige Tagesnummer, z.B. "04" oder "23".
- \<month>
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
    "Nov", "Dec" (Groß- und Kleinschreibung beachten).
- \<year>
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- \<hour>
  - : 2-stellige Stundenzahl, z.B. "09" oder "23".
- \<minute>
  - : 2-stellige Minutenzahl, z.B. "04" oder "59".
- \<second>
  - : 2-stellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, niemals in Ortszeit.

## Beispiele

```http
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Age")}}
