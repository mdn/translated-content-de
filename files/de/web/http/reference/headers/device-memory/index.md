---
title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{securecontext_header}}

Der HTTP **`Device-Memory`** {{Glossary("request_header", "Request-Header")}} wird in [Geräte-Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss sich dafür entscheiden, den `Device-Memory` Header vom Client zu empfangen, indem er zuerst den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet. Server, die sich für den `Device-Memory` Client-Hinweis entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}} Header an, um Caches zu informieren, dass der Server möglicherweise unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage sendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge des Geräte-RAMs. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    Die Menge des Geräte-RAMs kann als {{Glossary("fingerprinting", "Fingerprinting")}} Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu reduzieren.

## Beispiele

Der Server muss zunächst optieren, um den `Device-Memory` Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header mit `Device-Memory` sendet:

```http
Accept-CH: Device-Memory
```

Anschließend kann der Client in nachfolgenden Anfragen den `Device-Memory` Header zurücksenden:

```http
Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzer-Privatsphäre und der Entwickler-Erfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Geräte-Client-Hinweise
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
