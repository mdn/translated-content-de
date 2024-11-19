---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}{{securecontext_header}}

Der HTTP **`Device-Memory`** {{Glossary("request_header", "Request-Header")}} wird in [Geräte-Client-Hinweisen](/de/docs/Web/HTTP/Client_hints#device_client_hints) verwendet, um die ungefähre Menge an verfügbarem RAM auf dem Client-Gerät in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss sich anmelden, um den `Device-Memory` Header vom Client zu empfangen, indem er zunächst den {{HTTPHeader("Accept-CH")}} Response-Header sendet. Server, die sich für den `Device-Memory` Client-Hinweis anmelden, geben diesen in der Regel auch im {{HTTPHeader("Vary")}} Header an, um Caches zu informieren, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
    Die Menge an Geräte-RAM kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu reduzieren.

## Beispiele

Der Server muss zuerst zustimmen, den `Device-Memory` Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Response-Header, der `Device-Memory` enthält, sendet:

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

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
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
