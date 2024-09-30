---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Mobile`** [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Request-Header zeigt an, ob der Browser auf einem mobilen Gerät läuft.
Er kann auch von einem Desktop-Browser verwendet werden, um eine Präferenz für eine "mobile" Benutzererfahrung anzuzeigen.

`Sec-CH-UA-Mobile` ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern er nicht durch eine Berechtigungspolitik des User-Agents blockiert wird, wird er standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} optiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : `?1` zeigt an, dass der User-Agent eine mobile Erfahrung bevorzugt (wahr).
    `?0` zeigt an, dass der User-Agent keine mobile Erfahrung bevorzugt (falsch).

## Beispiele

Da `Sec-CH-UA-Mobile` ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet.

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

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
