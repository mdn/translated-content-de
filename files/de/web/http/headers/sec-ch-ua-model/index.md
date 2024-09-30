---
title: Sec-CH-UA-Model
slug: Web/HTTP/Headers/Sec-CH-UA-Model
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Model`** [User-Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anfrage-Header gibt das Gerätemodell an, auf dem der Browser läuft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Model: <device-version>
```

### Direktiven

- `<device-version>`
  - : Ein String, der die Geräteversion enthält. Zum Beispiel "Pixel 3".

## Beispiele

Ein Server fordert den `Sec-CH-UA-Model` Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anfrage des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Model
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Model` Header zu nachfolgenden Anfragen hinzufügen. Zum Beispiel könnte der Client auf einem Mobiltelefon den Header wie folgt hinzufügen:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Bitness: "64"
Sec-CH-UA-Model: "Pixel 3 XL"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
