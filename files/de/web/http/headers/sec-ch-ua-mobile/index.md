---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Mobile`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anforderungs-Header zeigt an, ob der Browser auf einem mobilen Gerät ausgeführt wird.
Ein Desktop-Browser kann diesen Header auch verwenden, um eine Vorliebe für eine "mobile" Benutzererfahrung anzugeben.

`Sec-CH-UA-Mobile` ist ein [niederentropischer Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Es wird standardmäßig gesendet, es sei denn, es wird durch eine Richtlinie zur Berechtigung des User-Agents blockiert, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

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
  - : `?1` zeigt an, dass der User-Agent eine mobile Erfahrung bevorzugt (true).
    `?0` zeigt an, dass der User-Agent keine mobile Erfahrung bevorzugt (false).

## Beispiele

Da `Sec-CH-UA-Mobile` ein [niederentropischer Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet.

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

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
