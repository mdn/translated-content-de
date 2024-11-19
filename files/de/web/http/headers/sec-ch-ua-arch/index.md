---
title: Sec-CH-UA-Arch
slug: Web/HTTP/Headers/Sec-CH-UA-Arch
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Arch`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die zugrunde liegende CPU-Architektur des User-Agents enthält, wie z.B. ARM oder x86.

Ein Server könnte dies beispielsweise verwenden, um das korrekte binäre Format einer ausführbaren Datei auszuwählen und anzubieten, damit ein Benutzer es herunterladen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Arch: <arch>
```

### Direktiven

- `<arch>`
  - : Ein String, der die zugrunde liegende Plattformarchitektur angibt, wie: `"x86"`, `"ARM"`, `"[arm64-v8a, armeabi-v7a, armeabi]"`.

## Beispiele

### Verwendung von Sec-CH-UA-Arch

Ein Server fordert den `Sec-CH-UA-Arch`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer Antwort auf eine Anfrage des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

Der Client kann wählen, den Hinweis bereitzustellen, und den `Sec-CH-UA-Arch`-Header zu nachfolgenden Anfragen hinzufügen. Zum Beispiel könnte ein Client auf einem Windows-X86-basierten Computer den Header wie gezeigt hinzufügen:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

Beachten Sie oben, dass die [Low-Entropy-Header](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) zur Anfrage hinzugefügt werden, auch wenn sie nicht in der Serverantwort spezifiziert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
