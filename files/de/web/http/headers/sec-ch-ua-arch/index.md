---
title: Sec-CH-UA-Arch
slug: Web/HTTP/Headers/Sec-CH-UA-Arch
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Arch`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die zugrunde liegende CPU-Architektur des User-Agents enthält, wie zum Beispiel ARM oder x86.

Dies könnte von einem Server verwendet werden, um das richtige Binärformat einer ausführbaren Datei auszuwählen und anzubieten, die ein Benutzer herunterladen soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

Ein Server fordert den `Sec-CH-UA-Arch` Header an, indem er das {{HTTPHeader("Accept-CH")}} in eine Antwort auf eine Anfrage vom Client einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und fügt den `Sec-CH-UA-Arch` Header zu nachfolgenden Anfragen hinzu.
Zum Beispiel könnte auf einem Windows X86-basierten Computer der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

Beachten Sie oben, dass die [low entropy headers](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) zur Anfrage hinzugefügt werden, obwohl sie nicht in der Serverantwort spezifiziert wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
