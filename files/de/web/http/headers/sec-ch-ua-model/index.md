---
title: Sec-CH-UA-Model
slug: Web/HTTP/Headers/Sec-CH-UA-Model
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Model`**-{{Glossary("request_header", "Request Header")}} ist ein [User-Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der das Gerätemodell angibt, auf dem der Browser ausgeführt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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

Ein Server fordert den `Sec-CH-UA-Model`-Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine Anfrage vom Client einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Model
```

Der Client kann sich entscheiden, den Hint bereitzustellen, und den `Sec-CH-UA-Model`-Header in nachfolgende Anfragen aufnehmen. Zum Beispiel könnte der Client auf einem Mobiltelefon den Header wie gezeigt hinzufügen:

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
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
