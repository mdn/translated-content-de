---
title: Sec-CH-UA-Full-Version
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}

> [!NOTE]
> Dies wird durch die {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ersetzt.

Der HTTP **`Sec-CH-UA-Full-Version`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der den vollständigen Versionsstring des User-Agents bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Full-Version: <version>
```

### Direktiven

- `<version>`
  - : Ein String, der die vollständige Versionsnummer enthält, wie "96.0.4664.93".

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version

Ein Server fordert den `Sec-CH-UA-Full-Version` Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anfrage des Clients einfügt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Full-Version` Header zu späteren Anfragen hinzuzufügen. Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version: "96.0.4664.110"
Sec-CH-UA-Platform: "Windows"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerdatenschutz und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
