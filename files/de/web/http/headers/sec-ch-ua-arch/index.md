---
title: Sec-CH-UA-Arch
slug: Web/HTTP/Headers/Sec-CH-UA-Arch
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Arch`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) im Anforderungs-Header liefert die zugrunde liegende CPU-Architektur des User-Agents, wie ARM oder x86.

Dies könnte von einem Server verwendet werden, um beispielsweise das richtige Binärformat einer ausführbaren Datei auszuwählen und zum Download anzubieten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
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
Sec-CH-UA-Arch: <arch>
```

### Direktiven

- `<arch>`
  - : Ein String, der die zugrunde liegende Plattformarchitektur angibt, wie: `"x86"`, `"ARM"`, `"[arm64-v8a, armeabi-v7a, armeabi]"`.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Arch` Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer Antwort auf eine Anfrage vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und fügt den `Sec-CH-UA-Arch` Header zu nachfolgenden Anfragen hinzu.
Zum Beispiel könnte auf einem Windows X86-basierten Computer der Header wie folgt hinzugefügt werden:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

Beachten Sie oben, dass die [Low-Entropy-Header](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) der Anfrage hinzugefügt werden, obwohl sie in der Serverantwort nicht angegeben sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzer-Privatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
