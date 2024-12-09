---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-Host`** (XFH) {{Glossary("request_header", "Request-Header")}} ist ein de-facto Standard-Header zur Identifizierung des ursprünglichen Hosts, der vom Client in der {{HTTPHeader("Host")}} HTTP-Request-Header angefordert wurde.

Hostnamen und Ports von Reverse-{{Glossary("Proxy_server", "Proxies")}} (Load Balancer, CDNs) können sich vom Ursprungsserver, der die Anfrage bearbeitet, unterscheiden. In diesem Fall ist der `X-Forwarded-Host` Header nützlich, um zu bestimmen, welcher `Host` ursprünglich verwendet wurde.

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}} Header, obwohl dieser viel seltener verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
