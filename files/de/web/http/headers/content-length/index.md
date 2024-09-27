---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Length`**-Header gibt die Größe des Nachrichtentextes in Bytes an, der an den Empfänger gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header),
        [Content header](/de/docs/Glossary/Content_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Forbidden header name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
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
