---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{SeeCompatTable}}{{HTTPSidebar}}

Der **`Early-Data`** Header wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anfrage in [TLS early data](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) übertragen wurde, und zeigt auch an, dass der Vermittler den {{HTTPStatus("425", "425 Too Early")}} Statuscode versteht.

Der `Early-Data` Header wird **nicht** vom Absender der Anfrage gesetzt (d. h. einem Browser).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Early-Data: 1
```

## Beispiele

```http
GET /resource HTTP/1.0
Host: example.com
Early-Data: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}