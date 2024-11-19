---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Bitness`** {{Glossary("request_header", "Request Header")}} ist ein [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die "Bitness" der zugrundeliegenden CPU-Architektur des User-Agents angibt. Dies ist die Größe in Bits eines Integers oder einer Speicheradresse – typischerweise 64 oder 32 Bits.

Ein Server könnte dies beispielsweise verwenden, um das korrekte Binärformat einer auszuführenden Datei auszuwählen und anzubieten, die ein Benutzer herunterladen soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Bitness: <bitness>
```

## Direktiven

- `<bitness>`
  - : Ein String, der die Bitness der zugrundeliegenden Plattform-Architektur angibt, zum Beispiel: `"64"`, `"32"`.

## Beispiele

### Verwendung von Sec-CH-UA-Bitness

Ein Server fordert den `Sec-CH-UA-Bitness`-Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anfrage des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

Der Client kann sich entscheiden, den Hint bereitzustellen und den `Sec-CH-UA-Bitness`-Header in nachfolgende Anfragen hinzuzufügen. Auf einem Windows-basierten 64-Bit-Computer könnte der Client den Header beispielsweise wie folgt hinzufügen:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Bitness: "64"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
