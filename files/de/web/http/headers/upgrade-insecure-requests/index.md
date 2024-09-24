---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header **`Upgrade-Insecure-Requests`** sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die {{CSP("upgrade-insecure-requests")}} [CSP](/de/docs/Web/HTTP/CSP)-Direktive erfolgreich handhaben kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Upgrade-Insecure-Requests: 1
```

## Beispiele

Eine Anfrage des Clients signalisiert dem Server, dass er die Upgrade-Mechanismen von {{CSP("upgrade-insecure-requests")}} unterstützt:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

Der Server kann nun auf eine sichere Version der Website umleiten. Ein {{HTTPHeader("Vary")}}-Header kann verwendet werden, damit die Website nicht durch Caches an Clients ausgeliefert wird, die den Upgrade-Mechanismus nicht unterstützen.

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
