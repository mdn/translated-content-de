---
title: Accept-CH header
short-title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{securecontext_header}}

Der HTTP **`Accept-CH`** {{Glossary("response_header", "Response-Header")}} kann von einem Server gesetzt werden, um anzugeben, welche [Client-Hint]-Header (/de/docs/Web/HTTP/Guides/Client_hints) vom Client in nachfolgenden Anfragen eingeschlossen werden sollen. Um sicherzustellen, dass Client-Hints zuverlässig gesendet werden, sollte der `Accept-CH`-Header für alle sicheren Anfragen gespeichert werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
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

### Client-Hint-Response-Header

Die folgenden Response-Header zeigen an, dass der Server `Sec-CH-Viewport-Width` und `Sec-CH-Width` [Device-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) in nachfolgenden Anfragen akzeptiert. Der {{HTTPHeader("Vary")}}-Header gibt an, welche Werte verwendet wurden, um die Antwort basierend auf den akzeptierten Client-Hints [zu variieren](/de/docs/Web/HTTP/Guides/Client_hints#caching_and_client_hints).

```http
Accept-CH: Sec-CH-Viewport-Width, Sec-CH-Width
Vary: Sec-CH-Viewport-Width, Sec-CH-Width
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Vary")}}
