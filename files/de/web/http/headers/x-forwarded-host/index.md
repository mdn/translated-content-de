---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-Host`** (XFH) {{Glossary("request_header", "Request-Header")}} ist ein De-facto-Standard-Header zur Identifizierung des ursprünglichen Hosts, der vom Client im {{HTTPHeader("Host")}} HTTP-Request-Header angefordert wurde.

Hostnamen und Ports von Reverse-{{Glossary("Proxy_server", "Proxies")}} (Load-Balancer, CDNs) können sich vom Ursprungsserver, der die Anfrage bearbeitet, unterscheiden. In diesem Fall ist der `X-Forwarded-Host`-Header nützlich, um zu bestimmen, welcher `Host` ursprünglich verwendet wurde.

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}}-Header, der jedoch viel seltener verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Request-Header")}}</th>
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
  - : Der Domainname des weitergeleiteten Servers.

## Beispiele

```http
X-Forwarded-Host: id42.example-cdn.com
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
