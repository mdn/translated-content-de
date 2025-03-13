---
title: Expires
slug: Web/HTTP/Reference/Headers/Expires
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Expires`** {{Glossary("response_header", "Antwort-Header")}} enthält das Datum/die Uhrzeit, nach der die Antwort im Kontext des [HTTP-Cachings](/de/docs/Web/HTTP/Guides/Caching) als abgelaufen gilt.

Der Wert `0` wird verwendet, um ein Datum in der Vergangenheit darzustellen, was anzeigt, dass die Ressource bereits abgelaufen ist.

> [!NOTE]
> Wenn es einen {{HTTPHeader("Cache-Control")}}-Header mit der `max-age` oder `s-maxage` Direktive in der Antwort gibt, wird der `Expires` Header ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
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
  - : Zweistellige Tagesnummer, z.B. "04" oder "23".
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
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in Ortszeit.

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
