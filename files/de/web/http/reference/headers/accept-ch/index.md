---
title: Accept-CH header
short-title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{securecontext_header}}

Der HTTP **`Accept-CH`** {{Glossary("response_header", "Antwort-Header")}} kann von einem Server gesetzt werden, um anzugeben, welche [Client Hint]-Header (/de/docs/Web/HTTP/Guides/Client_hints) vom Client in nachfolgenden Anfragen einbezogen werden sollen. Um sicherzustellen, dass Client-Hints zuverlässig gesendet werden, sollte der `Accept-CH`-Header bei allen sicheren Anfragen beibehalten werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsliste Antwort-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-CH: <client-hints-headers>

// Client hint headers in a comma-separated list
Accept-CH: <ch-header-one>, <ch-header-two>
```

## Beispiele

### Client Hint Antwort-Header

Die folgenden Antwort-Header zeigen an, dass der Server `Viewport-Width` und `Width` [Geräte-Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) in nachfolgenden Anfragen akzeptiert. Der {{HTTPHeader("Vary")}}-Header zeigt an, welche Werte verwendet wurden, um die [Antwort basierend auf den akzeptierten Client Hints zu variieren](/de/docs/Web/HTTP/Guides/Client_hints#caching_and_client_hints).

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Vary")}}
