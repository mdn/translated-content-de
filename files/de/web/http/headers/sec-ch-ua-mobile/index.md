---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Mobile`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)-Request-Header gibt an, ob der Browser auf einem mobilen Gerät ist.
Er kann auch von einem Desktop-Browser verwendet werden, um eine Präferenz für eine "mobile" Benutzererfahrung anzuzeigen.

`Sec-CH-UA-Mobile` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Es wird standardmäßig gesendet, es sei denn, es wird durch eine Benutzeragenten-Berechtigungsrichtlinie blockiert, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
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

Da `Sec-CH-UA-Mobile` ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird es typischerweise in allen Anfragen gesendet.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Nutzerdatenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
