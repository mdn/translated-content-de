---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Mobile`**-{{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der anzeigt, ob der Browser auf einem mobilen Gerät läuft.
Er kann auch von einem Desktop-Browser verwendet werden, um eine Präferenz für eine "mobile" Benutzererfahrung anzugeben.

`Sec-CH-UA-Mobile` ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern er nicht durch eine Berechtigungspolitik des User-Agents blockiert wird, wird er standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} ein Opt-in durchführen muss.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
  - : `?1` zeigt an, dass der User-Agent eine mobile Erfahrung bevorzugt (true).
    `?0` zeigt an, dass der User-Agent keine mobile Erfahrung bevorzugt (false).

## Beispiele

### Verwendung von Sec-CH-UA-Mobile

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
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
