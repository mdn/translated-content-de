---
title: Device-Memory header
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Device-Memory`-Header wurde als {{HTTPHeader("Sec-CH-Device-Memory")}} standardisiert, und der neue Name wird jetzt bevorzugt.

Der HTTP **`Device-Memory`** {{Glossary("request_header", "Request Header")}} wird in [Device Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge an verfügbarem RAM auf dem Clientgerät in Gigabyte anzugeben.
Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client Hints sind nur auf sicheren Ursprüngen zugänglich.
Ein Server muss sich für den Empfang des `Device-Memory`-Headers vom Client entscheiden, indem er zuerst den {{HTTPHeader("Accept-CH")}} Response-Header sendet.
Server, die sich für den `Device-Memory` Client Hint entscheiden, geben diesen normalerweise auch im {{HTTPHeader("Vary")}} Header an, um Caches darüber zu informieren, dass der Server unterschiedliche Antworten basierend auf dem Headerwert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request Header")}}</th>
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
  - : Die ungefähre Menge an Gerätespeicher (RAM).

    Die Menge an Gerätespeicher kann als Variable für {{Glossary("fingerprinting", "Fingerprinting")}} verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu verringern.
    Werte werden nur in Zweierpotenzen gemeldet und sind auf einen von der Implementierung definierten minimalen unteren Wert und einen maximalen oberen Wert begrenzt.
    Diese Grenzen können sich im Laufe der Zeit ändern (siehe [Browser-Kompatibilitätstabelle](#browser-kompatibilität)).

    Beispielsweise, wenn ein Browser Werte unter `2` oder über `32` nicht meldet, dann ist der Wert einer von: `2`, `4`, `8`, `16`, `32`.

## Beispiele

Der Server muss zunächst zustimmen, den `Device-Memory`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Response-Header mit `Device-Memory` sendet:

```http
Accept-CH: Device-Memory
```

Dann könnte der Client in nachfolgenden Anfragen den `Device-Memory`-Header zurücksenden:

```http
Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Geräte- und responsive Bild-Client-Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
