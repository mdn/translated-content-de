---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Reference/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Upgrade-Insecure-Requests`** {{Glossary("request_header", "Request-Header")}} sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort anzeigt und dass der Client die {{CSP("upgrade-insecure-requests")}} [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktive erfolgreich handhaben kann.

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
Upgrade-Insecure-Requests: <boolean>
```

## Direktiven

- `<boolean>`
  - : `1` bedeutet 'true' und ist der einzige gültige Wert für dieses Feld.

## Beispiele

### Verwendung von Upgrade-Insecure-Requests

Eine Anfrage des Clients signalisiert dem Server, dass sie die Upgrademechanismen von {{CSP("upgrade-insecure-requests")}} unterstützt:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

Der Server kann nun zu einer sicheren Version der Seite umleiten. Ein {{HTTPHeader("Vary")}}-Header kann verwendet werden, damit die Seite nicht von Caches für Clients bereitgestellt wird, die den Upgrademechanismus nicht unterstützen.

```http
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("upgrade-insecure-requests")}}-Direktive
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
