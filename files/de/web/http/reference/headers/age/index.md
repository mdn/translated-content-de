---
title: Age header
short-title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Age`**-{{Glossary("response_header", "Antwortheader")}} gibt die Zeit in Sekunden an, die ein Objekt in einem Proxy-Cache war.

Der Headerwert ist normalerweise nahe null.
Wenn der Wert `0` beträgt, wurde das Objekt wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wird der Wert normalerweise als Differenz zwischen dem aktuellen Datum des Proxys und dem allgemeinen {{HTTPHeader("Date")}}-Header berechnet, der in der HTTP-Antwort enthalten ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Eine nicht-negative ganze Zahl, die die Zeit in Sekunden darstellt, die das Objekt in einem Proxy-Cache war.

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
