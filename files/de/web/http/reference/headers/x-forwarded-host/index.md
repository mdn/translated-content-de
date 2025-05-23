---
title: X-Forwarded-Host header
short-title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`X-Forwarded-Host`** (XFH) {{Glossary("request_header", "Request-Header")}} ist ein de-facto Standard-Header, der zur Identifizierung des ursprünglichen Hosts verwendet wird, der vom Client im {{HTTPHeader("Host")}} HTTP-Request-Header angefordert wurde.

Hostnamen und Ports von Reverse-{{Glossary("Proxy_server", "Proxys")}} (Load Balancers, CDNs) können sich vom Ursprungsserver, der die Anfrage bearbeitet, unterscheiden. In diesem Fall ist der `X-Forwarded-Host`-Header nützlich, um festzustellen, welcher `Host` ursprünglich verwendet wurde.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl er viel seltener verwendet wird.

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

Kein Teil einer aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
