---
title: Age header
short-title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Age`**-{{Glossary("response_header", "Antwort-Header")}} gibt die Zeit in Sekunden an, wie lange ein Objekt in einem Proxy-Cache gespeichert war.

Der Wert des Headers liegt normalerweise nahe bei null.
Wenn der Wert `0` ist, wurde das Objekt wahrscheinlich direkt vom Ursprungsserver abgerufen; andernfalls wird der Wert üblicherweise als Differenz zwischen dem aktuellen Datum des Proxys und dem {{HTTPHeader("Date")}} allgemeinen Header, der in der HTTP-Antwort enthalten ist, berechnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
