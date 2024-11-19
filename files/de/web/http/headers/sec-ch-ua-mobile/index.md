---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Mobile`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der angibt, ob der Browser auf einem mobilen Gerät ausgeführt wird.
Er kann auch von einem Desktop-Browser verwendet werden, um eine Präferenz für eine "mobile" Benutzererfahrung anzugeben.

`Sec-CH-UA-Mobile` ist ein [niedrig entropischer Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Es wird, sofern nicht von einer User-Agent-Berechtigungsrichtlinie blockiert, standardmäßig gesendet, ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Mobile: <boolean>
```

### Direktiven

- `<boolean>`
  - : `?1` zeigt an, dass der User-Agent eine mobile Erfahrung bevorzugt (wahr).
    `?0` zeigt an, dass der User-Agent keine mobile Erfahrung bevorzugt (falsch).

## Beispiele

### Verwendung von Sec-CH-UA-Mobile

Da `Sec-CH-UA-Mobile` ein [niedrig entropischer Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet.
Ein Desktop-Browser würde normalerweise Anfragen mit dem folgenden Header senden:

```http
Sec-CH-UA-Mobile: ?0
```

Ein Browser auf einem mobilen Gerät würde normalerweise Anfragen mit dem folgenden Header senden:

```http
Sec-CH-UA-Mobile: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Privatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
