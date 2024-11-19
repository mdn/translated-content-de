---
title: Date
slug: Web/HTTP/Headers/Date
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP-Header **`Date`** enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde, sowohl im {{Glossary("request_header", "Anforderungs-")}} als auch im {{Glossary("response_header", "Antwort-Header")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß- und Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tageszahl, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß- und Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in Ortszeit.

## Beispiele

### Antwort mit einem Date-Header

Die folgende HTTP-Nachricht ist ein erfolgreicher `200`-Status mit einem `Date`-Header, der die Zeit anzeigt, zu der die Nachricht erstellt wurde. Andere Header werden der Kürze halber weggelassen:

```http
HTTP/1.1 200
Content-Type: text/html
Date: Tue, 29 Oct 2024 16:56:32 GMT

<html lang="en-US" …
```

### Versuch, den Feldwert in JavaScript festzulegen

Der `Date`-Header ist ein {{Glossary("forbidden_header_name", "verbotener Header-Name")}}, daher kann dieser Code das Nachrichtenfeld `Date` nicht festlegen:

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
