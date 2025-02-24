---
title: Sec-CH-UA-Platform
slug: Web/HTTP/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Platform`**-{{Glossary("request_header", "Request-Header")}} ist ein [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der das Betriebssystem oder die Plattform angibt, auf der der User Agent läuft. Zum Beispiel: "Windows" oder "Android".

`Sec-CH-UA-Platform` ist ein [Low Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Sofern er nicht durch eine Berechtigungspolitik des User Agents blockiert wird, wird er standardmäßig gesendet (ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} teilnehmen muss).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
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

Da `Sec-CH-UA-Platform` ein [Low Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird er typischerweise in allen Anfragen gesendet. Ein Browser, der auf einem macOS-Computer läuft, könnte den folgenden Header zu allen Anfragen hinzufügen.

```http
Sec-CH-UA-Platform: "macOS"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
