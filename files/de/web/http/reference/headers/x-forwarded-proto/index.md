---
title: X-Forwarded-Proto header
short-title: X-Forwarded-Proto
slug: Web/HTTP/Reference/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-Proto`** (XFP) {{Glossary("request_header", "Request-Header")}} ist ein de-facto-Standard-Header zur Identifizierung des Protokolls (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit einem {{Glossary("Proxy_server", "Proxy")}} oder Load Balancer zu verbinden.

Server-Zugriffsprotokolle enthalten das Protokoll, das zwischen dem Server und dem Load Balancer verwendet wurde, jedoch nicht das Protokoll, das zwischen dem Client und dem Load Balancer verwendet wurde.
Um das Protokoll zu bestimmen, das zwischen dem Client und dem Load Balancer verwendet wurde, kann der `X-Forwarded-Proto`-Request-Header verwendet werden.

Eine standardisierte Version dieses Headers ist der HTTP-{{HTTPHeader("Forwarded")}}-Header, obwohl er viel seltener verwendet wird.

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

### X-Forwarded-Proto-Client-Protokoll

Der folgende Header zeigt an, dass die ursprüngliche Anfrage über HTTPS gestellt wurde, bevor sie von einem Proxy oder Load Balancer weitergeleitet wurde:

```http
X-Forwarded-Proto: https
```

### Nicht standardisierte Formen

Die folgenden Formen können in Request-Headern zu sehen sein:

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
