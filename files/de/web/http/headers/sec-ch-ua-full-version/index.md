---
title: Sec-CH-UA-Full-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}

> [!NOTE]
> Dies wird durch den {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ersetzt.

Der HTTP **`Sec-CH-UA-Full-Version`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die vollständige Versionszeichenfolge des User-Agents bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
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
Sec-CH-UA-Full-Version: <version>
```

### Direktiven

- `<version>`
  - : Ein String, der die vollständige Versionsnummer enthält, wie "96.0.4664.93".

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version

Ein Server fordert den `Sec-CH-UA-Full-Version`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

Der Client kann sich entscheiden, den Hint bereitzustellen, und den `Sec-CH-UA-Full-Version`-Header zu nachfolgenden Anfragen hinzufügen.
Der Client könnte den Header zum Beispiel wie folgt hinzufügen:

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

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
