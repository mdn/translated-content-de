---
title: Date
slug: Web/HTTP/Reference/Headers/Date
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Date`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} enthält das Datum und die Uhrzeit, zu der die Nachricht erzeugt wurde.

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
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tageszahl, z. B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z. B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z. B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z. B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z. B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT und niemals in lokaler Zeit angegeben.

## Beispiele

### Response mit einem Date-Header

Die folgende HTTP-Nachricht ist ein erfolgreicher `200` Status, mit einem `Date`-Header, der die Zeit angibt, zu der die Nachricht erzeugt wurde.
Andere Header sind der Kürze halber weggelassen:

```http
HTTP/1.1 200
Content-Type: text/html
Date: Tue, 29 Oct 2024 16:56:32 GMT

<html lang="en-US" …
```

### Versuch, den Feldwert in JavaScript zu setzen

Der `Date`-Header ist ein {{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}, daher kann dieser Code das `Date`-Feld der Nachricht nicht setzen:

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
