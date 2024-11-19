---
title: Sec-CH-UA-Platform
slug: Web/HTTP/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Platform`**-{{Glossary("request_header", "request header")}} ist ein [user agent client hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), das die Plattform oder das Betriebssystem angibt, auf dem der User-Agent ausgeführt wird.
Zum Beispiel: "Windows" oder "Android".

`Sec-CH-UA-Platform` ist ein [low entropy hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern es nicht durch eine Berechtigungspolitik des User-Agents blockiert wird, wird es standardmäßig gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} teilnehmen muss).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Einer der folgenden Strings: `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"`, oder `"Unknown"`.

## Beispiele

### Verwendung von Sec-CH-UA-Platform

Da `Sec-CH-UA-Platform` ein [low entropy hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird es normalerweise in allen Anfragen gesendet.
Ein Browser, der auf einem macOS-Computer läuft, könnte den folgenden Header zu allen Anfragen hinzufügen.

```http
Sec-CH-UA-Platform: "macOS"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
