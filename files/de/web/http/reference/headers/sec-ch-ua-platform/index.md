---
title: Sec-CH-UA-Platform
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Platform`**-{{Glossary("request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der die Plattform oder das Betriebssystem angibt, auf dem der User-Agent läuft. Zum Beispiel: "Windows" oder "Android".

`Sec-CH-UA-Platform` ist ein [niedrig-Entropie-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Sofern er nicht durch eine Berechtigungsrichtlinie des User-Agents blockiert wird, wird er standardmäßig gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
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
Sec-CH-UA-Platform: <platform>
```

### Direktiven

- `<platform>`
  - : Einer der folgenden Strings: `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"` oder `"Unknown"`.

## Beispiele

### Verwendung von Sec-CH-UA-Platform

Da `Sec-CH-UA-Platform` ein [niedrig-Entropie-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anforderungen gesendet. Ein Browser, der auf einem macOS-Computer läuft, könnte den folgenden Header zu allen Anforderungen hinzufügen.

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
