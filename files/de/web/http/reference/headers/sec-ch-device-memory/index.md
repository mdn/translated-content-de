---
title: Sec-CH-Device-Memory header
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Device-Memory`** {{Glossary("request_header", "Request-Header")}} wird in [Device Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät in Gigabyte anzugeben.
Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client Hints sind nur auf sicheren Ursprüngen zugänglich.
Ein Server muss sich entscheiden, den `Sec-CH-Device-Memory`-Header vom Client zu erhalten, indem er zuerst den {{HTTPHeader("Accept-CH")}}-Response-Header sendet.
Server, die sich für den `Sec-CH-Device-Memory`-Client-Hint entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches darüber zu informieren, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
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
  - : Die ungefähre Menge an Device-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    Die Menge an Device-RAM kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden. Daher sind die Werte für den Header absichtlich grob, um das potenzielle Risiko eines Missbrauchs zu verringern.

## Beispiele

Der Server muss zuerst optieren, um den `Sec-CH-Device-Memory`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header sendet, der `Sec-CH-Device-Memory` enthält:

```http
Accept-CH: Sec-CH-Device-Memory
```

Dann kann der Client bei nachfolgenden Anfragen den `Sec-CH-Device-Memory`-Header zurücksenden:

```http
Sec-CH-Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Device und responsive Image Client Hints
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
