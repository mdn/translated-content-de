---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
l10n:
  sourceCommit: 313910c063db95744d4c052283fb805ecc49c1b3
---

{{HTTPSidebar}}

Der **`X-Forwarded-Host`** (XFH) Header ist ein faktischer Standardheader zur Identifizierung des ursprünglichen Hosts, der vom Client im {{HTTPHeader("Host")}} HTTP-Request-Header angefordert wurde.

Hostnamen und Ports von Reverse-Proxys (Load-Balancer, CDNs) können sich vom Ursprungsserver unterscheiden, der die Anfrage bearbeitet. In diesem Fall ist der `X-Forwarded-Host` Header nützlich, um festzustellen, welcher Host ursprünglich verwendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungs-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
