---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
l10n:
  sourceCommit: 313910c063db95744d4c052283fb805ecc49c1b3
---

{{HTTPSidebar}}

Der **`X-Forwarded-Host`** (XFH) Header ist ein De-facto-Standard-Header, der zur Identifizierung des ursprünglichen Hosts dient, den der Client in der {{HTTPHeader("Host")}} HTTP-Anforderungs-Header angefordert hat.

Hostnamen und Ports von Reverse-Proxies (Load Balancer, CDNs) können sich vom Ursprungsserver, der die Anfrage bearbeitet, unterscheiden. In diesem Fall ist der `X-Forwarded-Host` Header nützlich, um festzustellen, welcher Host ursprünglich verwendet wurde.

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
X-Forwarded-Host: <host>
```

## Direktiven

- \<host>
  - : Der Domainname des weitergeleiteten Servers.

## Beispiele

```http
X-Forwarded-Host: id42.example-cdn.com
```

## Spezifikationen

Ist nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
