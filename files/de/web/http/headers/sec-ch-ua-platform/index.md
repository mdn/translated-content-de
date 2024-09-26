---
title: Sec-CH-UA-Platform
slug: Web/HTTP/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Platform`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anforderungs-Header gibt die Plattform oder das Betriebssystem an, auf dem der User-Agent läuft. Zum Beispiel: "Windows" oder "Android".

`Sec-CH-UA-Platform` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Es wird standardmäßig gesendet (ohne dass der Server dies durch das Senden von {{HTTPHeader("Accept-CH")}} verlangt), es sei denn, es wird durch eine Berechtigungsrichtlinie des User-Agents blockiert.

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
Sec-CH-UA-Platform: <platform>
```

### Direktiven

- `<platform>`
  - : Einer der folgenden Zeichenketten: `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"` oder `"Unknown"`.

## Beispiele

Da `Sec-CH-UA-Platform` ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) ist, wird es typischerweise in allen Anfragen gesendet.

Ein Browser, der auf einem macOS-Computer läuft, könnte den folgenden Header zu allen Anfragen hinzufügen.

```http
Sec-CH-UA-Platform: "macOS"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
