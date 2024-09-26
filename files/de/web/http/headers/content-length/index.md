---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **`Content-Length`**-Header gibt die Größe des Nachrichtenkörpers in Bytes an, die an den Empfänger gesendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
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
Content-Length: <length>
```

## Direktiven

- \<length>
  - : Die Länge in Oktetten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
