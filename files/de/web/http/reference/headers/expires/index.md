---
title: Expires header
short-title: Expires
slug: Web/HTTP/Reference/Headers/Expires
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Expires`** {{Glossary("response_header", "Antwort-Header")}} enthält das Datum/Uhrzeit, nach dem die Antwort im Kontext des [HTTP-Cachings](/de/docs/Web/HTTP/Guides/Caching) als abgelaufen betrachtet wird.

Der Wert `0` wird verwendet, um ein Datum in der Vergangenheit darzustellen, was bedeutet, dass die Ressource bereits abgelaufen ist.

> [!NOTE]
> Wenn es einen {{HTTPHeader("Cache-Control")}}-Header mit der Direktive `max-age` oder `s-maxage` in der Antwort gibt, wird der `Expires`-Header ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expires: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching) Leitfaden
- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
