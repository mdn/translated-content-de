---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{securecontext_header}}

Der **`Device-Memory`** [device client hint](/de/docs/Web/HTTP/Client_hints#device_client_hints) Anforderungsheader gibt die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät an. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungsheader](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
>
> - Client-Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich entscheiden, den `Device-Memory` Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwortheader sendet.
> - Server, die sich für den `Device-Memory` Client-Hint entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}} Header an. Dies informiert Caches darüber, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

## Syntax

```http
Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge an Gerätespeicher. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

Die Menge an Gerätespeicher kann als [Fingerabdruck](/de/docs/Glossary/fingerprinting) verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Missbrauchspotential zu reduzieren.

## Beispiele

Der Server muss zunächst zustimmen, den `Device-Memory` Header zu empfangen, indem er die Antwortheader {{HTTPHeader("Accept-CH")}} mit dem Inhalt `Device-Memory` sendet.

```http
Accept-CH: Device-Memory
```

Dann könnte der Client bei nachfolgenden Anfragen den `Device-Memory` Header zurücksenden:

```http
Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Device Client Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
