---
title: Date header
short-title: Date
slug: Web/HTTP/Reference/Headers/Date
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
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
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (case-sensitiv).
- `<day>`
  - : Zweistellige Tageszahl, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (case-sensitiv).
- `<year>`
  - : Vierstellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : Zweistellige Stundenanzeige, z.B. "09" oder "23".
- `<minute>`
  - : Zweistellige Minutenanzeige, z.B. "04" oder "59".
- `<second>`
  - : Zweistellige Sekundenanzeige, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

### Antwort mit einem Date-Header

Die folgende HTTP-Nachricht zeigt einen erfolgreichen `200`-Status, mit einem `Date`-Header, der die Zeit angibt, zu der die Nachricht erstellt wurde.
Andere Header sind der Kürze halber weggelassen:

```http
HTTP/1.1 200
Content-Type: text/html
Date: Tue, 29 Oct 2024 16:56:32 GMT

<html lang="en-US" …
```

### Versuch, den Feldwert in JavaScript festzulegen

Der `Date`-Header ist ein {{Glossary("Forbidden_request_header", "verbotener Request-Header")}}, daher kann dieser Code das Nachrichtenfeld `Date` nicht festlegen:

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
