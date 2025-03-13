---
title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{securecontext_header}}

Der HTTP **`Accept-CH`** {{Glossary("response_header", "Antwortheader")}} kann von einem Server gesetzt werden, um anzugeben, welche [Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints)-Header der Client in nachfolgenden Anfragen einschließen soll. Um sicherzustellen, dass Client-Hints zuverlässig gesendet werden, sollte der `Accept-CH`-Header für alle sicheren Anfragen beibehalten werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherte Antwortheader")}}
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

Die folgenden Antwortheader zeigen an, dass der Server `Viewport-Width` und `Width` [Geräte-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) in nachfolgenden Anfragen akzeptiert. Der {{HTTPHeader("Vary")}}-Header gibt an, welche Werte verwendet wurden, um [die Antwort zu variieren](/de/docs/Web/HTTP/Guides/Client_hints#caching_and_client_hints) basierend auf den akzeptierten Client-Hints.

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
