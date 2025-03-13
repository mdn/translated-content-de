---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Mobile`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der angibt, ob der Browser auf einem mobilen Gerät ausgeführt wird.
Er kann auch von einem Desktop-Browser verwendet werden, um eine Präferenz für eine "mobile" Benutzererfahrung anzuzeigen.

`Sec-CH-UA-Mobile` ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints).
Sofern nicht durch eine Berechtigungsrichtlinie des User-Agents blockiert, wird er standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Mobile: <boolean>
```

### Direktiven

- `<boolean>`
  - : `?1` gibt an, dass der User-Agent eine mobile Erfahrung bevorzugt (true).
    `?0` gibt an, dass der User-Agent keine mobile Erfahrung bevorzugt (false).

## Beispiele

### Verwendung von Sec-CH-UA-Mobile

Da `Sec-CH-UA-Mobile` ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet.
Ein Desktop-Browser würde normalerweise Anfragen mit folgendem Header senden:

```http
Sec-CH-UA-Mobile: ?0
```

Ein Browser auf einem mobilen Gerät würde normalerweise Anfragen mit folgendem Header senden:

```http
Sec-CH-UA-Mobile: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
