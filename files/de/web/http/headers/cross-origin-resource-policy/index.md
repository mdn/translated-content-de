---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Cross-Origin-Resource-Policy`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, dass der Browser keine no-cors-Cross-Origin- oder Cross-Site-Anfragen an die angegebene Ressource zulassen soll.

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
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Beispiele

### Cross-Origin no-cors-Anfragen nicht zulassen

Der `Cross-Origin-Resource-Policy`-Header unten wird dazu führen, dass kompatible Benutzeragenten Cross-Origin no-cors-Anfragen nicht zulassen:

```http
Cross-Origin-Resource-Policy: same-origin
```

Für weitere Beispiele siehe https://resourcepolicy.fyi/.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärung](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Erwägen Sie, die Cross-Origin Resource Policy einzusetzen](https://resourcepolicy.fyi/)
- {{HTTPHeader("Access-Control-Allow-Origin")}}
