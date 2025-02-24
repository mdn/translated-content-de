---
title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Platform-Version`**-{{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die Version des Betriebssystems angibt, auf dem der User-Agent ausgeführt wird.

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
Sec-CH-UA-Platform-Version: <version>
```

### Direktiven

- `<version>`
  - : Der Versionsstring enthält in der Regel die Betriebssystemversion in einem String, bestehend aus Punkt-getrennten Haupt-, Neben- und Patch-Versionsnummern, zum Beispiel `"11.0.0"`.
    Der Versionsstring unter Linux ist immer leer.

## Beispiele

### Verwendung von Sec-CH-UA-Platform-Version

Ein Server fordert den `Sec-CH-UA-Platform-Version`-Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine Anfrage vom Client einschließt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Platform-Version`-Header zu folgenden Anfragen hinzufügen.
Zum Beispiel könnten die folgenden Request-Header von einem Browser gesendet werden, der auf Windows 10 läuft.

```http
GET /my/page HTTP/1.1
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
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
