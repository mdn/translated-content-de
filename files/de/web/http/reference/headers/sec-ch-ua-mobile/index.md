---
title: Sec-CH-UA-Mobile header
short-title: Sec-CH-UA-Mobile
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Mobile`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der angibt, ob der Browser auf einem mobilen Gerät läuft. Er kann auch von einem Desktop-Browser verwendet werden, um eine Präferenz für eine "mobile" Benutzererfahrung anzuzeigen.

`Sec-CH-UA-Mobile` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Sofern er nicht durch eine User-Agent-Berechtigungsrichtlinie blockiert wird, wird er standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : `?1` zeigt an, dass der User-Agent eine mobile Erfahrung bevorzugt (wahr).
    `?0` zeigt an, dass der User-Agent keine mobile Erfahrung bevorzugt (falsch).

## Beispiele

### Verwendung von Sec-CH-UA-Mobile

Da `Sec-CH-UA-Mobile` ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet. Ein Desktop-Browser würde normalerweise Anfragen mit folgendem Header senden:

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

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzer-Privatsphäre und der Entwickler-Erfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
