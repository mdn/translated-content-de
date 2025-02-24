---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`X-Forwarded-Proto`** (XFP) ist ein De-facto-Standard-Header zur Identifizierung des Protokolls (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit einem {{Glossary("Proxy_server", "Proxy")}} oder einem Lastenausgleich zu verbinden.

Server-Zugriffsprotokolle enthalten das Protokoll, das zwischen dem Server und dem Lastenausgleich verwendet wurde, nicht jedoch das Protokoll, das zwischen dem Client und dem Lastenausgleich verwendet wurde.
Um das verwendete Protokoll zwischen dem Client und dem Lastenausgleich zu bestimmen, kann der `X-Forwarded-Proto` Request-Header verwendet werden.

Eine standardisierte Version dieses Headers ist der HTTP-Header {{HTTPHeader("Forwarded")}}, obwohl er viel seltener verwendet wird.

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

Der folgende Header zeigt an, dass die ursprüngliche Anfrage über HTTPS erfolgte, bevor sie von einem Proxy oder Lastenausgleich weitergeleitet wurde:

```http
X-Forwarded-Proto: https
```

### Nicht-standardisierte Formen

Die folgenden Formen können in Request-Headern zu sehen sein:

```http
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Spezifikationen

Teil keiner aktuellen Spezifikation. Die standardisierte Version dieses Headers ist {{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}} Header
- {{HTTPHeader("Forwarded")}}
