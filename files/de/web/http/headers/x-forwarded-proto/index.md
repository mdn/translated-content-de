---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`X-Forwarded-Proto`** (XFP) Header ist ein De-facto-Standard
Header zur Identifikation des Protokolls (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit
Ihrem Proxy oder Load Balancer zu verbinden. Die Zugriffsprotokolle Ihres Servers enthalten das zwischen
dem Server und dem Load Balancer verwendete Protokoll, jedoch nicht das zwischen dem Client und dem
Load Balancer verwendete Protokoll. Um das zwischen dem Client und dem Load Balancer verwendete Protokoll zu bestimmen,
kann der `X-Forwarded-Proto` Anforderungsheader verwendet werden.

Eine standardisierte Version dieses Headers ist der HTTP {{HTTPHeader("Forwarded")}} Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

Teil keiner aktuellen Spezifikation. Die standardisierte Version dieses Headers ist
{{HTTPHeader("Forwarded")}}.

## Siehe auch

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
