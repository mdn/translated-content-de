---
title: Age
slug: Web/HTTP/Headers/Age
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Age`**-{{Glossary("response_header", "Antwortheader")}} gibt die Zeit in Sekunden an, für die ein Objekt in einem Proxy-Cache gespeichert war.

Der Wert des Headers liegt normalerweise nahe bei null.
Wenn der Wert `0` ist, wurde das Objekt wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wird der Wert normalerweise als Differenz zwischen dem aktuellen Datum des Proxys und dem im HTTP-Response enthaltenen allgemeinen {{HTTPHeader("Date")}}-Header berechnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
  - : Eine nicht-negative ganze Zahl, die die Zeit in Sekunden darstellt, für die das Objekt in einem Proxy-Cache gespeichert war.

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
