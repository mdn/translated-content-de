---
title: Sec-CH-UA-Arch header
short-title: Sec-CH-UA-Arch
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Arch
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Arch`** {{Glossary("request_header", "Request-Header")}} ist ein [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die zugrunde liegende CPU-Architektur des User-Agents enthält, wie beispielsweise ARM oder x86.

Dies könnte von einem Server verwendet werden, um zum Beispiel das richtige Binärformat einer ausführbaren Datei zum Herunterladen anzubieten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
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
Sec-CH-UA-Arch: <arch>
```

### Direktiven

- `<arch>`
  - : Ein String, der die zugrunde liegende Plattformarchitektur angibt, wie zum Beispiel: `"x86"`, `"ARM"`, `"[arm64-v8a, armeabi-v7a, armeabi]"`.

## Beispiele

### Verwendung von Sec-CH-UA-Arch

Ein Server fordert den `Sec-CH-UA-Arch` Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer Antwort auf eine Anfrage des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Arch` Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnte auf einem Windows X86-basierten Computer der Client den Header hinzufügen, wie gezeigt:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

Beachten Sie oben, dass die [Low Entropy Headers](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) der Anfrage hinzugefügt werden, obwohl sie nicht in der Serverantwort angegeben sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
