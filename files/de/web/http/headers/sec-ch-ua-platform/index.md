---
title: Sec-CH-UA-Platform
slug: Web/HTTP/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Platform`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)-Anforderungsheader gibt die Plattform oder das Betriebssystem an, auf dem der User-Agent ausgeführt wird.
Zum Beispiel: "Windows" oder "Android".

`Sec-CH-UA-Platform` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht durch eine Berechtigungspolitik des User-Agents blockiert, wird es standardmäßig gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} eingreifen muss).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungsheader](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
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
Sec-CH-UA-Platform: <platform>
```

### Direktiven

- `<platform>`
  - : Einer der folgenden Strings: `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"` oder `"Unknown"`.

## Beispiele

Da `Sec-CH-UA-Platform` ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird es in der Regel bei allen Anfragen gesendet.

Ein Browser, der auf einem macOS-Computer läuft, könnte den folgenden Header zu allen Anfragen hinzufügen.

```http
Sec-CH-UA-Platform: "macOS"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
