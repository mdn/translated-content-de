---
title: Expires
slug: Web/HTTP/Headers/Expires
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Expires`** HTTP-Header enthält das Datum/Zeit, nach dem die Antwort als abgelaufen betrachtet wird.

Ungültige Ablaufdaten mit dem Wert 0 repräsentieren ein Datum in der Vergangenheit und bedeuten, dass die Ressource bereits abgelaufen ist.

> [!NOTE]
> Wenn es im Response-Header einen {{HTTPHeader("Cache-Control")}}-Header mit der `max-age`- oder `s-maxage`-Direktive gibt, wird der `Expires`-Header ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-sicher gelisteter Response-Header](/de/docs/Glossary/CORS-safelisted_response_header)
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
