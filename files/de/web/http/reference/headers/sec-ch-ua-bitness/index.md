---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Bitness`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [Benutzeragent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der die "Bitness" der zugrunde liegenden CPU-Architektur des Benutzeragents angibt. Dies ist die Größe in Bits eines Integers oder einer Speicheradresse – typischerweise 64 oder 32 Bits.

Ein Server könnte dies verwenden, um beispielsweise das richtige binäre Format einer ausführbaren Datei zur Verfügung zu stellen, damit ein Benutzer sie herunterladen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Ein String, der die Bitness der zugrunde liegenden Plattform-Architektur angibt, wie: `"64"`, `"32"`.

## Beispiele

### Verwendung von Sec-CH-UA-Bitness

Ein Server fordert den `Sec-CH-UA-Bitness`-Header an, indem er {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf eine beliebige Anforderung des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Bitness`-Header zu nachfolgenden Anfragen hinzufügen. Beispielsweise könnte der Client auf einem Windows-basierten 64-Bit-Computer den Header wie folgt hinzufügen:

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

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
