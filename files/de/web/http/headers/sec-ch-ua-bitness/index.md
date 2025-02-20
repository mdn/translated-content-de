---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Bitness`**-{{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die "Bitness" der zugrunde liegenden CPU-Architektur des User-Agents bereitstellt. Dies ist die Größe eines Integers oder einer Speicheradresse in Bits, typischerweise 64 oder 32 Bits.

Ein Server könnte dies beispielsweise verwenden, um das richtige Binärformat einer ausführbaren Datei auszuwählen und zum Herunterladen anzubieten.

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
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Bitness: <bitness>
```

## Direktiven

- `<bitness>`
  - : Ein String, der die Bitness der zugrunde liegenden Plattformarchitektur angibt, wie: `"64"`, `"32"`.

## Beispiele

### Verwendung von Sec-CH-UA-Bitness

Ein Server fordert den `Sec-CH-UA-Bitness`-Header an, indem er {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf eine Anforderung vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

Der Client kann sich dafür entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Bitness`-Header zu nachfolgenden Anforderungen hinzufügen. Zum Beispiel könnte der Client auf einem Windows-basierten 64-Bit-Computer den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
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

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
