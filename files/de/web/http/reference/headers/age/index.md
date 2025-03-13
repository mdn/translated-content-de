---
title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Age`** {{Glossary("response_header", "Antwortheader")}} gibt die Zeit in Sekunden an, die ein Objekt im Proxy-Cache war.

Der Header-Wert ist normalerweise nahe bei null.
Wenn der Wert `0` ist, wurde das Objekt wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wird der Wert normalerweise als Differenz zwischen dem aktuellen Datum des Proxys und dem im HTTP-Antwort enthaltenen allgemeinen {{HTTPHeader("Date")}}-Header berechnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Age: <delta-seconds>
```

## Direktiven

- `<delta-seconds>`
  - : Eine nicht-negative Ganzzahl, die die Zeit in Sekunden darstellt, die das Objekt im Proxy-Cache war.

## Beispiele

```http
Age: 24
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
