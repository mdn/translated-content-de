---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{securecontext_header}}

Das **`Device-Memory`** [Device Client Hint](/de/docs/Web/HTTP/Client_hints#device_client_hints) Anforderungsheaderfeld zeigt die ungefähre Menge des verfügbaren RAM auf dem Clientgerät an. Der Header ist Teil der {{DOMxRef("Device Memory API", "Device Memory API", "", "nocode")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
>
> - Client-Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich entscheiden, den `Device-Memory` Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet.
> - Server, die sich für den `Device-Memory` Client-Hint entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}} Header an. Dies informiert Caches darüber, dass der Server unterschiedliche Antworten basierend auf dem Wert des Headers in einer Anfrage senden kann.

## Syntax

```http
Device-Memory: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Menge des Geräte-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

Die Menge des Geräte-RAM kann als {{glossary("Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Der Server muss zunächst dafür optieren, den `Device-Memory` Header zu erhalten, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, die `Device-Memory` enthalten.

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

- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{DOMxRef("Device Memory API", "Device Memory API", "", "nocode")}}
- {{DOMxRef("Navigator.deviceMemory")}}
- {{DOMxRef("WorkerNavigator.deviceMemory")}}
- Device Client Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
