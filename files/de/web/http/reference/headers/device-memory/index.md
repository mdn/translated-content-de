---
title: Device-Memory header
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{securecontext_header}}

Der HTTP-**`Device-Memory`**-{{Glossary("request_header", "Request-Header")}} wird in [Geräte-Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge des auf dem Client-Gerät verfügbaren RAM in Gigabyte anzugeben. Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich. Ein Server muss zustimmen, den `Device-Memory`-Header vom Client zu empfangen, indem er zuerst den {{HTTPHeader("Accept-CH")}}-Response-Header sendet. Server, die dem `Device-Memory`-Client-Hinweis zustimmen, spezifizieren diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header, um Caches zu informieren, dass der Server unterschiedliche Antworten basierend auf dem Headerwert in einer Anfrage senden kann.

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
  - : Die ungefähre Menge des Geräte-RAM. Mögliche Werte sind: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    Die Menge des Geräte-RAM kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Der Server muss zuerst zustimmen, den `Device-Memory`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header mit `Device-Memory` sendet:

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

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Geräte-Client-Hinweise
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
