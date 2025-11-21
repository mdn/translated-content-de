---
title: Age header
short-title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Age`**-{{Glossary("response_header", "Antwortheader")}} gibt die Zeit in Sekunden an, für die ein Objekt in einem Proxy-Cache war.

Der Wert des Headers ist normalerweise nahe null. Wenn der Wert `0` ist, wurde das Objekt wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wird der Wert normalerweise als Differenz zwischen dem aktuellen Datum des Proxys und dem {{HTTPHeader("Date")}}-Allgemeinheader berechnet, der in der HTTP-Antwort enthalten ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Age: <delta-seconds>
```

## Direktiven

- `<delta-seconds>`
  - : Eine nicht-negative Ganzzahl, die die Zeit in Sekunden darstellt, für die das Objekt in einem Proxy-Cache war.

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
