---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{securecontext_header}}

Das **`Device-Memory`** [Device Client Hint](/de/docs/Web/HTTP/Client_hints#device_client_hints) Request-Header-Feld gibt die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät an. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
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
> - Client Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich anmelden, um den `Device-Memory`-Header vom Client zu erhalten, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet.
> - Server, die sich für den `Device-Memory` Client Hint anmelden, spezifizieren diesen typischerweise auch im {{HTTPHeader("Vary")}} Header. Dies informiert Caches darüber, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

## Syntax

```http
Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge an Geräte-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

Die Menge an Geräte-RAM kann als [Fingerprinting](/de/docs/Glossary/fingerprinting)-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Der Server muss sich zuerst anmelden, um den `Device-Memory` Header zu erhalten, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} mit `Device-Memory` sendet.

```http
Accept-CH: Device-Memory
```

Dann kann der Client bei nachfolgenden Anfragen den `Device-Memory` Header zurücksenden:

```http
Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Device Client Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
