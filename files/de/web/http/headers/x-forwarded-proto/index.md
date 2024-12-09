---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`X-Forwarded-Proto`** (XFP) {{Glossary("request_header", "Request-Header")}} ist ein de-facto Standard-Header zur Identifizierung des Protokolls (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit einem {{Glossary("Proxy_server", "Proxy")}} oder Load Balancer zu verbinden.

Serverzugriffsprotokolle enthalten das zwischen dem Server und dem Load Balancer verwendete Protokoll, jedoch nicht das zwischen dem Client und dem Load Balancer verwendete Protokoll. Um das zwischen dem Client und dem Load Balancer verwendete Protokoll zu bestimmen, kann der `X-Forwarded-Proto`-Request-Header verwendet werden.

Eine standardisierte Version dieses Headers ist der HTTP-Header {{HTTPHeader("Forwarded")}}, obwohl er viel seltener verwendet wird.

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
X-Forwarded-Proto: <protocol>
```

## Direktiven

- `<protocol>`
  - : Das weitergeleitete Protokoll (`http` oder `https`).

## Beispiele

### X-Forwarded-Proto-Client-Protokoll

Der folgende Header gibt an, dass die ursprüngliche Anfrage über HTTPS gestellt wurde, bevor sie von einem Proxy oder Load Balancer weitergeleitet wurde:

```http
X-Forwarded-Proto: https
```

### Nicht standardisierte Formen

Die folgenden Formen können in Anfrageheadern gesehen werden:

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
