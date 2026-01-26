---
title: Device-Memory header
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Device-Memory`-Header wurde als {{HTTPHeader("Sec-CH-Device-Memory")}} standardisiert, und der neue Name wird nun bevorzugt.

Der HTTP **`Device-Memory`** {{Glossary("request_header", "Anforderungs-Header")}} wird in [Client-Hinweisen für Geräte](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähr verfügbare Menge an RAM auf dem Client-Gerät in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss zustimmen, den `Device-Memory`-Header vom Client zu erhalten, indem er zuerst den {{HTTPHeader("Accept-CH")}}-Antwort-Header sendet. Server, die dem `Device-Memory`-Client-Hinweis zustimmen, geben diesen auch typischerweise im {{HTTPHeader("Vary")}}-Header an, um Caches darüber zu informieren, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Die ungefähre Menge an Geräte-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    Die Menge an Geräte-RAM kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header bewusst grob angelegt, um das Missbrauchspotential zu reduzieren.

## Beispiele

Der Server muss zuerst zustimmen, den `Device-Memory`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header mit `Device-Memory` sendet:

```http
Accept-CH: Device-Memory
```

Bei nachfolgenden Anfragen könnte der Client den `Device-Memory`-Header zurücksenden:

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
- Geräte- und responsive Bild-Client-Hinweise
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
