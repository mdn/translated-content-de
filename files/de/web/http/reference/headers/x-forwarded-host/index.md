---
title: X-Forwarded-Host header
short-title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`X-Forwarded-Host`** (XFH) {{Glossary("request_header", "Anforderungsheader")}} ist ein de-facto-Standardheader zur Identifizierung des ursprünglichen Host, der vom Client im HTTP-{{HTTPHeader("Host")}}-Anforderungsheader angefordert wurde.

Die Hostnamen und Ports von Reverse-{{Glossary("Proxy_server", "Proxys")}} (Load Balancer, CDNs) können sich vom Ursprungsserver, der die Anforderung bearbeitet, unterscheiden; in diesem Fall ist der `X-Forwarded-Host`-Header nützlich, um festzustellen, welcher `Host` ursprünglich verwendet wurde.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl er viel seltener verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
