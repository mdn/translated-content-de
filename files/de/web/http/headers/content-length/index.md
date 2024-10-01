---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Length`**-Header gibt die Größe des Nachrichtenkörpers in Bytes an, der an den Empfänger gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}},
        {{Glossary("Content_header", "Content-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Response-Header")}}
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Length: <length>
```

## Direktiven

- \<length>
  - : Die Länge in Oktetten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
