---
title: Sec-CH-Device-Memory header
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SecureContext_Header}}{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-{{Glossary("request_header", "Anfrage-Header")}} **`Sec-CH-Device-Memory`** wird in [Geräte-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints) verwendet, um die ungefähre Menge des verfügbaren Arbeitsspeichers auf dem Clientgerät in Gigabyte anzugeben.
Der Header ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).

Client-Hints sind nur auf sicheren Ursprüngen verfügbar.
Damit ein Server den Header `Sec-CH-Device-Memory` vom Client erhält, muss er sich zunächst durch Senden des Response-Headers {{HTTPHeader("Accept-CH")}} dafür anmelden.
Server, die den Client-Hint `Sec-CH-Device-Memory` anfordern, geben ihn üblicherweise auch im Header {{HTTPHeader("Vary")}} an. So teilen sie Caches mit, dass die Antwort je nach Header-Wert der Anfrage unterschiedlich ausfallen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Die ungefähre Menge des Arbeitsspeichers des Geräts.

    Die Größe des Arbeitsspeichers kann als Variable für {{Glossary("fingerprinting", "Fingerprinting")}} verwendet werden. Deshalb sind die Header-Werte bewusst grob abgestuft, um das Missbrauchspotenzial zu verringern.
    Werte werden nur als Zweierpotenzen angegeben und auf einen von der Implementierung festgelegten Mindest- und Höchstwert begrenzt.
    Diese Grenzen können sich im Laufe der Zeit ändern (siehe [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität)).

    Wenn ein Browser beispielsweise keine Werte unter `2` oder über `32` meldet, ist der Wert einer der folgenden: `2`, `4`, `8`, `16`, `32`.

## Beispiele

Damit der Server den Header `Sec-CH-Device-Memory` erhält, muss er zunächst den Response-Header {{HTTPHeader("Accept-CH")}} mit dem Wert `Sec-CH-Device-Memory` senden:

```http
Accept-CH: Sec-CH-Device-Memory
```

Bei nachfolgenden Anfragen kann der Client dann den Header `Sec-CH-Device-Memory` senden:

```http
Sec-CH-Device-Memory: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes für Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [Device Memory API](/de/docs/Web/API/Device_Memory_API)
- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory)
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory)
- Geräte- und Client-Hints für responsive Bilder
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
