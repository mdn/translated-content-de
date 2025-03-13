---
title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-Host`** (XFH) {{Glossary("request_header", "Request-Header")}} ist ein De-facto-Standard-Header zur Identifizierung des ursprünglichen Hosts, der vom Client im {{HTTPHeader("Host")}} HTTP-Request-Header angefordert wurde.

Hostnamen und Ports von Reverse-{{Glossary("Proxy_server", "Proxies")}} (Load Balancer, CDNs) können sich von dem ursprünglichen Server, der die Anfrage bearbeitet, unterscheiden. In diesem Fall ist der `X-Forwarded-Host`-Header nützlich, um zu bestimmen, welcher `Host` ursprünglich verwendet wurde.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl er weitaus seltener verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Forwarded-Host: <host>
```

## Direktiven

- `<host>`
  - : Der Domain-Name des weitergeleiteten Servers.

## Beispiele

```http
X-Forwarded-Host: id42.example-cdn.com
```

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Headers
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
