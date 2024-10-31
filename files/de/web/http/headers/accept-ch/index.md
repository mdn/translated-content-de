---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}{{securecontext_header}}

Der HTTP **`Accept-CH`** {{Glossary("response_header", "Antwort-Header")}} kann von einem Server gesetzt werden, um anzugeben, welche [Client-Hint]-Header (/de/docs/Web/HTTP/Client_hints) vom Client in nachfolgenden Anfragen enthalten sein sollen. Um sicherzustellen, dass Client-Hints zuverlässig gesendet werden, sollte der `Accept-CH`-Header für alle sicheren Anfragen beibehalten werden.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
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

### Client-Hint Antwort-Header

Die folgenden Antwort-Header zeigen an, dass der Server `Viewport-Width` und `Width` [device client hints](/de/docs/Web/HTTP/Client_hints#device_client_hints) in nachfolgenden Anfragen akzeptiert. Der {{HTTPHeader("Vary")}} Header zeigt an, welche Werte verwendet wurden, um die [Antwort zu variieren](/de/docs/Web/HTTP/Client_hints#caching_and_client_hints) basierend auf den akzeptierten Client-Hints.

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
