---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Upgrade-Insecure-Requests`** {{Glossary("request_header", "Request-Header")}} sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort anzeigt, und dass der Client in der Lage ist, die Richtlinie {{CSP("upgrade-insecure-requests")}} [CSP](/de/docs/Web/HTTP/CSP) erfolgreich zu handhaben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : `1` zeigt 'true' an und ist der einzige gültige Wert für dieses Feld.

## Beispiele

### Verwendung von Upgrade-Insecure-Requests

Eine Anfrage des Clients signalisiert dem Server, dass er die Upgrade-Mechanismen von {{CSP("upgrade-insecure-requests")}} unterstützt:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

Der Server kann nun auf eine sichere Version der Seite umleiten. Ein {{HTTPHeader("Vary")}}-Header kann verwendet werden, damit die Seite nicht von Caches an Clients ausgeliefert wird, die den Upgrade-Mechanismus nicht unterstützen.

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
- CSP {{CSP("upgrade-insecure-requests")}}-Richtlinie
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
