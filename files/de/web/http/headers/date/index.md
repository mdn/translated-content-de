---
title: Date
slug: Web/HTTP/Headers/Date
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Date`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (groß-/kleinschreibungssensitiv).
- `<day>`
  - : 2-stellige Tageszahl, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (groß-/kleinschreibungssensitiv).
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

### Antwort mit einem Date-Header

Die folgende HTTP-Nachricht hat einen erfolgreichen `200`-Status, mit einem `Date`-Header, der die Zeit angibt, zu der die Nachricht erstellt wurde.
Andere Header werden zur Kürze ausgelassen:

```http
HTTP/1.1 200
Content-Type: text/html
Date: Tue, 29 Oct 2024 16:56:32 GMT

<html lang="en-US" …
```

### Versuch, den Feldwert in JavaScript festzulegen

Der `Date`-Header ist ein {{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}, daher kann dieser Code das Nachrichtenfeld `Date` nicht festlegen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Age")}}
