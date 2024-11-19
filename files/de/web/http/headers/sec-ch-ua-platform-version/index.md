---
title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Platform-Version`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die Version des Betriebssystems angibt, auf dem der User-Agent läuft.

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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Platform-Version: <version>
```

### Direktiven

- `<version>`
  - : Der Versionsstring enthält in der Regel die Betriebssystemversion als String, bestehend aus durch Punkte getrennten Haupt-, Neben- und Patch-Versionsnummern, z.B. `"11.0.0"`.
    Unter Linux ist der Versionsstring immer leer.

## Beispiele

### Verwendung von Sec-CH-UA-Platform-Version

Ein Server fordert den `Sec-CH-UA-Platform-Version`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine Anfrage des Clients einschließt und den gewünschten Headernamen als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Platform-Version`-Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnten die folgenden Anfrage-Header von einem Browser gesendet werden, der unter Windows 10 läuft.

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Platform-Version: "10.0.0"
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
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
