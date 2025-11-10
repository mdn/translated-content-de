---
title: Sec-CH-UA-Bitness header
short-title: Sec-CH-UA-Bitness
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Bitness`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die "Bitness" der zugrundeliegenden CPU-Architektur des User-Agents bereitstellt.
Dies ist die Größe in Bits einer Ganzzahl oder einer Speicheradresse – typischerweise 64 oder 32 Bit.

Dies könnte von einem Server verwendet werden, um beispielsweise das richtige binäre Format einer ausführbaren Datei für einen Benutzer zum Herunterladen auszuwählen und anzubieten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Ein Zeichenfolgenwert, der die Bitness der zugrunde liegenden Plattformarchitektur angibt, wie: `"64"`, `"32"`.

## Beispiele

### Verwendung von Sec-CH-UA-Bitness

Ein Server fordert den `Sec-CH-UA-Bitness`-Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anforderung vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

Der Client kann entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Bitness`-Header zu nachfolgenden Anfragen hinzuzufügen.
Zum Beispiel könnte ein Client auf einem Windows-basierten 64-Bit-Computer den Header wie folgt hinzufügen:

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
