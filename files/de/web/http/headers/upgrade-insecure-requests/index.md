---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Upgrade-Insecure-Requests`** {{Glossary("request_header", "Anforderungs-Header")}} sendet ein Signal an den Server, das auf die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort hinweist und dass der Client die {{CSP("upgrade-insecure-requests")}} [CSP](/de/docs/Web/HTTP/CSP)-Richtlinie erfolgreich handhaben kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

### Nutzung von Upgrade-Insecure-Requests

Eine Anfrage des Clients signalisiert dem Server, dass sie die Upgrade-Mechanismen von {{CSP("upgrade-insecure-requests")}} unterstützt:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

Der Server kann nun auf eine sichere Version der Site umleiten. Ein {{HTTPHeader("Vary")}} Header kann verwendet werden, damit die Site nicht von Caches an Clients geliefert wird, die den Upgrade-Mechanismus nicht unterstützen.

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
- CSP-Richtlinie {{CSP("upgrade-insecure-requests")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
