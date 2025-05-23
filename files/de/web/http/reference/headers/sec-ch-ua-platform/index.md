---
title: Sec-CH-UA-Platform header
short-title: Sec-CH-UA-Platform
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Platform`** {{Glossary("request_header", "Request-Header")}} ist ein [Benutzeragent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Plattform oder das Betriebssystem angibt, auf dem der Benutzeragent ausgeführt wird. Zum Beispiel: "Windows" oder "Android".

`Sec-CH-UA-Platform` ist ein [Low Entropy Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints).
Sofern nicht durch eine Benutzeragenten-Berechtigungsrichtlinie blockiert, wird er standardmäßig gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmt).

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
Sec-CH-UA-Platform: <platform>
```

### Direktiven

- `<platform>`
  - : Einer der folgenden Strings: `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"` oder `"Unknown"`.

## Beispiele

### Verwendung von Sec-CH-UA-Platform

Da `Sec-CH-UA-Platform` ein [Low Entropy Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet. Ein Browser, der auf einem macOS-Computer ausgeführt wird, könnte den folgenden Header zu allen Anfragen hinzufügen.

```http
Sec-CH-UA-Platform: "macOS"
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
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
