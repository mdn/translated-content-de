---
title: Upgrade-Insecure-Requests header
short-title: Upgrade-Insecure-Requests
slug: Web/HTTP/Reference/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Upgrade-Insecure-Requests`** {{Glossary("request_header", "Anforderungs-Header")}} sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort angibt und dass der Client die {{CSP("upgrade-insecure-requests")}} [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktive erfolgreich verarbeiten kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : `1` steht für 'wahr' und ist der einzige gültige Wert für dieses Feld.

## Beispiele

### Verwendung von Upgrade-Insecure-Requests

Die Anfrage eines Clients signalisiert dem Server, dass er die Upgrade-Mechanismen von {{CSP("upgrade-insecure-requests")}} unterstützt:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

Der Server kann nun auf eine sichere Version der Seite umleiten. Ein {{HTTPHeader("Vary")}} Header kann verwendet werden, damit die Seite nicht von Caches an Clients ausgeliefert wird, die den Upgrade-Mechanismus nicht unterstützen.

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
- CSP {{CSP("upgrade-insecure-requests")}} Direktive
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
