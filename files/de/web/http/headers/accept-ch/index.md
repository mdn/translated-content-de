---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{securecontext_header}}

Der **`Accept-CH`** Header kann von einem Server gesetzt werden, um anzugeben, welche [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)-Header ein Client in zukünftige Anfragen einfügen sollte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-sicher gelisteter Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Client-Hinweise sind nur auf sicheren Ursprüngen (über TLS) zugänglich. Der `Accept-CH` Header sollte für alle sicheren Anfragen beibehalten werden, um sicherzustellen, dass Client-Hinweise zuverlässig gesendet werden.

## Syntax

```http
Accept-CH: <comma separated list of client hint headers>
```

## Beispiele

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

> [!NOTE]
> Denken Sie daran, die [Antwort zu variieren](/de/docs/Web/HTTP/Client_hints#caching_and_client_hints) basierend auf den akzeptierten Client-Hinweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Vary")}}
