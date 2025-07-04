---
title: Sec-CH-UA-Platform-Version header
short-title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Platform-Version`** {{Glossary("request_header", "Request Header")}} ist ein [Client Hint des User Agents](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Version des Betriebssystems angibt, auf dem der User Agent ausgeführt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Platform-Version: <version>
```

### Direktiven

- `<version>`
  - : Die Versionszeichenfolge enthält in der Regel die Betriebssystemversion in einer Zeichenkette, bestehend aus punktgetrennten Major-, Minor- und Patch-Versionsnummern, zum Beispiel `"11.0.0"`. Die Versionszeichenfolge unter Linux ist immer leer.

## Beispiele

### Verwendung von Sec-CH-UA-Platform-Version

Ein Server fordert den `Sec-CH-UA-Platform-Version` Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage des Clients einfügt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

Der Client kann sich entscheiden, den Hint bereitzustellen, und den `Sec-CH-UA-Platform-Version` Header zu nachfolgenden Anfragen hinzufügen. Zum Beispiel könnten die folgenden Request Header von einem Browser gesendet werden, der unter Windows 10 läuft.

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

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
