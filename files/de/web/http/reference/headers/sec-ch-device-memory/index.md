---
title: Sec-CH-Device-Memory header
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{SecureContext_Header}}

Der HTTP-**`Sec-CH-Device-Memory`**-{{Glossary("request_header", "Anforderungsheader")}} wird in [Client-Hinweisen für Geräte](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss sich dafür entscheiden, den `Sec-CH-Device-Memory`-Header vom Client zu erhalten, indem er zunächst den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet. Server, die sich für den `Sec-CH-Device-Memory`-Client-Hinweis entscheiden, spezifizieren ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header, um Caches darüber zu informieren, dass der Server basierend auf dem Headerwert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge an Geräte-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    Die Menge an Geräte-RAM kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header bewusst grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Der Server muss zuerst optieren, um den `Sec-CH-Device-Memory`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet, der `Sec-CH-Device-Memory` enthält:

```http
Accept-CH: Sec-CH-Device-Memory
```

Dann könnte der Client bei nachfolgenden Anfragen den `Sec-CH-Device-Memory`-Header zurücksenden:

```http
Sec-CH-Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Nutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Client-Hinweise für Geräte
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
