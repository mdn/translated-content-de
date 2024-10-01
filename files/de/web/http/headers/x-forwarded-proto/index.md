---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`X-Forwarded-Proto`** (XFP)-Header ist ein de-facto Standard-Header zur Identifizierung des Protokolls (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Load Balancer zu verbinden. Ihre Server-Zugriffsprotokolle enthalten das Protokoll, das zwischen dem Server und dem Load Balancer verwendet wurde, aber nicht das Protokoll, das zwischen dem Client und dem Load Balancer verwendet wurde. Um das zwischen dem Client und dem Load Balancer verwendete Protokoll zu bestimmen, kann der `X-Forwarded-Proto`-Anforderungs-Header verwendet werden.

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}} Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Forwarded-Proto: <protocol>
```

## Direktiven

- \<protocol>
  - : Das weitergeleitete Protokoll (http oder https).

## Beispiele

```http
X-Forwarded-Proto: https
```

Andere nicht standardisierte Formen:

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

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
