---
title: Age
slug: Web/HTTP/Headers/Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Age`**-Header enthält die Zeit in Sekunden, die das Objekt im Proxy-Cache war.

Der `Age`-Header ist normalerweise nahe null. Wenn er `Age: 0` ist, wurde er wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wurde er normalerweise als Differenz zwischen dem aktuellen Datum des Proxys und dem im HTTP-Response enthaltenen allgemeinen {{HTTPHeader("Date")}}-Header berechnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Eine nicht-negative Ganzzahl, die die Zeit in Sekunden angibt, die das Objekt im Proxy-Cache war.

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
