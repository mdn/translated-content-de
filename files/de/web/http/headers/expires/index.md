---
title: Expires
slug: Web/HTTP/Headers/Expires
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Expires`** HTTP-Header enthält das Datum/Uhrzeit, nach dem die Antwort als abgelaufen angesehen wird.

Ungültige Ablaufdaten mit dem Wert 0 stellen ein Datum in der Vergangenheit dar und bedeuten, dass die Ressource bereits abgelaufen ist.

> [!NOTE]
> Wenn es einen {{HTTPHeader("Cache-Control")}} Header mit der `max-age` oder `s-maxage` Direktive in der Antwort gibt, wird der `Expires` Header ignoriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Forbidden header name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header)
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
  - : Ein HTTP-date Zeitstempel.

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
