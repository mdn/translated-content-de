---
title: Sec-CH-UA-Full-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}

> [!NOTE]
> Dies wird durch den {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ersetzt.

Der **`Sec-CH-UA-Full-Version`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anforderungsheader liefert die vollständige Versionszeichenfolge des User-Agents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Full-Version: <version>
```

### Direktiven

- `<version>`
  - : Eine Zeichenkette, die die vollständige Versionsnummer enthält, zum Beispiel "96.0.4664.93".

## Beispiele

Ein Server fordert den `Sec-CH-UA-Full-Version` Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anforderung des Clients einschließt und dabei den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Full-Version` Header zu nachfolgenden Anfragen hinzuzufügen. Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /GET /my/page HTTP/1.1
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

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
