---
title: Device-Memory header
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Device-Memory`-Header wurde in {{HTTPHeader("Sec-CH-Device-Memory")}} umbenannt, und der neue Name wird nun bevorzugt.

Der HTTP-**`Device-Memory`**-{{Glossary("request_header", "Anforderungsheader")}} wird in [Device-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge des verfügbaren RAM auf dem Client-Gerät in Gigabyte anzuzeigen. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hints sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss zustimmen, den `Device-Memory`-Header vom Client zu erhalten, indem er zuerst den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet. Server, die dem `Device-Memory`-Client-Hint zustimmen, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches darüber zu informieren, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
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
Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge an Geräte-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`. Die Menge des Geräte-RAMs kann als {{Glossary("fingerprinting", "Fingerabdruck")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob gehalten, um das Potenzial für seinen Missbrauch zu reduzieren.

## Beispiele

Der Server muss zuerst zustimmen, den `Device-Memory`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet, der `Device-Memory` enthält:

```http
Accept-CH: Device-Memory
```

Dann kann der Client in nachfolgenden Anfragen den `Device-Memory`-Header zurücksenden:

```http
Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre von Benutzern und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Device-Client-Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
