---
title: X-Forwarded-Proto header
short-title: X-Forwarded-Proto
slug: Web/HTTP/Reference/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`X-Forwarded-Proto`** (XFP) {{Glossary("request_header", "Request-Header")}} ist ein de-facto Standard-Header zur Identifizierung des Protokolls (HTTP oder HTTPS), das ein Client zur Verbindung mit einem {{Glossary("Proxy_server", "Proxy")}} oder Load Balancer verwendet hat.

Server-Zugriffsprotokolle enthalten das zwischen dem Server und dem Load Balancer verwendete Protokoll, jedoch nicht das zwischen dem Client und dem Load Balancer verwendete Protokoll. Um das zwischen dem Client und dem Load Balancer verwendete Protokoll zu bestimmen, kann der `X-Forwarded-Proto`-Request-Header verwendet werden.

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
X-Forwarded-Proto: <protocol>
```

## Direktiven

- `<protocol>`
  - : Das weitergeleitete Protokoll (`http` oder `https`).

## Beispiele

### X-Forwarded-Proto Client-Protokoll

Der folgende Header zeigt an, dass die ursprüngliche Anfrage über HTTPS gestellt wurde, bevor sie von einem Proxy oder Load Balancer weitergeleitet wurde:

```http
X-Forwarded-Proto: https
```

### Nicht-standardmäßige Formen

Die folgenden Formen können in Request-Headern vorkommen:

```http
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}-Header
- {{HTTPHeader("Forwarded")}}
