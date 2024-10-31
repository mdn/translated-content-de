---
title: Age
slug: Web/HTTP/Headers/Age
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Age`** {{Glossary("response_header", "Antwort-Header")}} gibt die Zeit in Sekunden an, die ein Objekt in einem Proxy-Cache verbracht hat.

Der Header-Wert ist normalerweise nahe bei null.
Ist der Wert `0`, wurde das Objekt wahrscheinlich vom Ursprungsserver abgerufen; andernfalls wird der Wert normalerweise als Differenz zwischen dem aktuellen Datum des Proxy und dem {{HTTPHeader("Date")}} allgemeinen Header, der in der HTTP-Antwort enthalten ist, berechnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
