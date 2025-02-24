---
title: Sec-CH-UA-Model
slug: Web/HTTP/Headers/Sec-CH-UA-Model
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Model`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der das Gerätemodell angibt, auf dem der Browser läuft.

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
      <td>Ja (<code>Sec-</code> Präfix)</td>
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

### Verwendung von Sec-CH-UA-Model

Ein Server fordert den `Sec-CH-UA-Model` Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anfrage vom Client einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Model
```

Der Client kann wählen, ob er den Hinweis bereitstellen möchte, und den `Sec-CH-UA-Model` Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnte der Client auf einem Mobiltelefon den Header wie gezeigt hinzufügen:

```http
GET /my/page HTTP/1.1
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

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
