---
title: Expires
slug: Web/HTTP/Headers/Expires
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Expires`** HTTP-Header enthält das Datum/die Uhrzeit, nach der die Antwort als abgelaufen gilt.

Ungültige Ablaufdaten mit dem Wert 0 stellen ein Datum in der Vergangenheit dar und bedeuten, dass die Ressource bereits abgelaufen ist.

> [!NOTE]
> Wenn ein {{HTTPHeader("Cache-Control")}}-Header mit der Direktive `max-age` oder `s-maxage` in der Antwort vorhanden ist, wird der `Expires`-Header ignoriert.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expires: <http-date>
```

## Direktiven

- \<http-date>
  - : Ein HTTP-Datum-Zeitstempel.

## Beispiele

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
