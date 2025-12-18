---
title: Sec-CH-Device-Memory header
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Device-Memory`** {{Glossary("request_header", "Request-Header")}} wird in [Geräte-Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge des verfügbaren RAMs auf dem Client-Gerät in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss sich dafür entscheiden, den `Sec-CH-Device-Memory`-Header vom Client zu erhalten, indem er zuerst den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet. Server, die sich für den `Sec-CH-Device-Memory` Client-Hinweis entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}} Header an, um Caches zu informieren, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
    Die Menge des Geräte-RAMs kann als {{Glossary("fingerprinting", "Fingerprinting")}} Variable verwendet werden, daher sind die Werte des Headers absichtlich grob, um das Potenzial für Missbrauch zu reduzieren.

## Beispiele

Der Server muss zuerst zustimmen, den `Sec-CH-Device-Memory` Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet, der `Sec-CH-Device-Memory` enthält:

```http
Accept-CH: Sec-CH-Device-Memory
```

Dann könnte der Client bei nachfolgenden Anfragen den `Sec-CH-Device-Memory` Header zurücksenden:

```http
Sec-CH-Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzer-Privatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Geräte-Client-Hinweise
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
