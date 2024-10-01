---
title: Age
slug: Web/HTTP/Headers/Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Age`**-Header enthält die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.

Der `Age`-Header ist normalerweise nahe bei null. Wenn er `Age: 0` ist, wurde er wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wurde er normalerweise als Differenz zwischen dem aktuellen Datum des Proxys und dem im HTTP-Response enthaltenen allgemeinen Header {{HTTPHeader("Date")}} berechnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Age: <delta-seconds>
```

## Direktiven

- \<delta-seconds>
  - : Eine nicht-negative ganze Zahl, die die Zeit in Sekunden angibt, die das Objekt in einem Proxy-Cache verbracht hat.

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
