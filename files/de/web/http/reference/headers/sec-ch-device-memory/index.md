---
title: Sec-CH-Device-Memory header
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Device-Memory`** {{Glossary("request_header", "Anforderungsheader")}} wird in [Geräte-Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge des verfügbaren RAM auf dem Client-Gerät in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss sich entscheiden, den `Sec-CH-Device-Memory`-Header vom Client zu erhalten, indem er zuerst den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet. Server, die sich für den `Sec-CH-Device-Memory`-Client-Hinweis entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches zu informieren, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
  - : Die ungefähre Menge des Gerätespeichers (RAM).

    Die Menge des Gerätespeichers kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header bewusst grob, um das Potenzial für Missbrauch zu verringern. Werte werden nur in Zweierpotenzen angegeben und sind auf einen durch die Implementierung definierten minimalen unteren Wert und einen maximalen oberen Wert begrenzt. Diese Grenzen können sich im Laufe der Zeit ändern (siehe [Browser-Kompatibilitätstabelle](#browser-kompatibilität)).

    Beispielsweise, wenn ein Browser keine Werte unter `2` oder über `32` angibt, dann ist der Wert einer von: `2`, `4`, `8`, `16`, `32`.

## Beispiele

Der Server muss zunächst zustimmen, den `Sec-CH-Device-Memory`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet, der `Sec-CH-Device-Memory` enthält:

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

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Geräte- und responsive Bild-Client-Hinweise
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
