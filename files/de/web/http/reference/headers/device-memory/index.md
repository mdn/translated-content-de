---
title: Device-Memory header
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Device-Memory`-Header wurde als {{HTTPHeader("Sec-CH-Device-Memory")}} standardisiert und der neue Name wird nun bevorzugt.

Der HTTP **`Device-Memory`** {{Glossary("request_header", "Request-Header")}} wird in [Device-Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge des verfügbaren RAM auf dem Client-Gerät in Gigabyte anzugeben.
Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich.
Ein Server muss sich entscheiden, den `Device-Memory`-Header vom Client zu erhalten, indem er zuerst den {{HTTPHeader("Accept-CH")}}-Response-Header sendet.
Server, die sich für den `Device-Memory`-Client-Hinweis entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches mitzuteilen, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge des Geräte-RAM.

    Die Menge des Geräte-RAM kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu reduzieren.
    Werte werden nur in Zweierpotenzen angegeben und sind auf einen implementierungsdefinierten minimalen unteren Wert und einen maximalen oberen Wert beschränkt.
    Diese Grenzen können sich im Laufe der Zeit ändern (siehe [Browser-Kompatibilitätstabelle](#browser-kompatibilität)).

    Zum Beispiel, wenn ein Browser keine Werte unter `2` oder über `32` meldet, dann ist der Wert einer von: `2`, `4`, `8`, `16`, `32`.

## Beispiele

Der Server muss zunächst entscheiden, den `Device-Memory`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header mit `Device-Memory` sendet:

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

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Gerät- und responsive Bild-Client-Hinweise
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
