---
title: Accept-CH header
short-title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{securecontext_header}}

Der HTTP-**`Accept-CH`**-{{Glossary("response_header", "Antwortheader")}} kann von einem Server gesetzt werden, um anzugeben, welche [Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints)-Header vom Client in nachfolgenden Anfragen einbezogen werden sollen.
Um sicherzustellen, dass Client-Hints zuverlässig gesendet werden, sollte der `Accept-CH`-Header für alle sicheren Anfragen beibehalten werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Antwortheader")}}
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

### Client-Hint-Antwortheader

Die folgenden Antwortheader zeigen an, dass der Server `Viewport-Width` und `Width` [Device-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) in nachfolgenden Anfragen akzeptiert.
Der {{HTTPHeader("Vary")}}-Header gibt an, welche Werte verwendet wurden, um die [Antwort basierend auf den akzeptierten Client-Hints zu variieren](/de/docs/Web/HTTP/Guides/Client_hints#caching_and_client_hints).

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
