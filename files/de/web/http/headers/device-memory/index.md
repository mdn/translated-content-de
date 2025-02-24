---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{securecontext_header}}

Der HTTP **`Device-Memory`** {{Glossary("request_header", "Request-Header")}} wird in [Geräte-Client-Hinweisen](/de/docs/Web/HTTP/Client_hints#device_client_hints) verwendet, um die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät in Gigabyte anzugeben.
Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich.
Ein Server muss zuerst den {{HTTPHeader("Accept-CH")}} Antwort-Header senden, um den `Device-Memory` Header vom Client zu erhalten.
Server, die sich für den `Device-Memory` Client-Hinweis entscheiden, spezifizieren diesen typischerweise auch im {{HTTPHeader("Vary")}} Header, um Caches zu informieren, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
  - : Die ungefähre Menge des Gerätezusatzes an RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    Die Menge an Gerätezusatz-RAM kann als [Fingerabdruck]-Variable (/de/docs/Glossary/fingerprinting) verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für dessen Missbrauch zu verringern.

## Beispiele

Der Server muss zuerst zustimmen, den `Device-Memory` Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header mit `Device-Memory` sendet:

```http
Accept-CH: Device-Memory
```

Dann könnte der Client bei nachfolgenden Anfragen den `Device-Memory` Header zurücksenden:

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
- Geräte-Client-Hinweise
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
