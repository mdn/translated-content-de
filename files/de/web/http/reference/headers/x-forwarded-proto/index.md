---
title: X-Forwarded-Proto
slug: Web/HTTP/Reference/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Header **`X-Forwarded-Proto`** (XFP) ist ein de-facto Standard-Header zur Identifizierung des Protokolls (HTTP oder HTTPS), das ein Client verwendet hat, um eine Verbindung zu einem {{Glossary("Proxy_server", "Proxy")}} oder Load Balancer herzustellen.

Server-Zugriffsprotokolle enthalten das zwischen dem Server und dem Load Balancer verwendete Protokoll, jedoch nicht das zwischen dem Client und dem Load Balancer verwendete Protokoll.
Um das Protokoll zwischen Client und Load Balancer zu bestimmen, kann der `X-Forwarded-Proto`-Request-Header verwendet werden.

Eine standardisierte Version dieses Headers ist der HTTP-Header {{HTTPHeader("Forwarded")}}, obwohl dieser viel seltener verwendet wird.

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

Der folgende Header zeigt an, dass die ursprüngliche Anfrage über HTTPS erfolgte, bevor sie von einem Proxy oder Load Balancer weitergeleitet wurde:

```http
X-Forwarded-Proto: https
```

### Nicht-Standard-Formen

Die folgenden Formen können in Request-Headern auftreten:

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

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}} Headers
- {{HTTPHeader("Forwarded")}}
