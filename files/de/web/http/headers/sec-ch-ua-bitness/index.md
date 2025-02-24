---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Bitness`**-{{Glossary("request_header", "Anforderungs-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die "Bitness" der zugrunde liegenden CPU-Architektur des User-Agents angibt. Dies ist die Größe in Bits eines Integers oder einer Speicheradresse — typischerweise 64 oder 32 Bit.

Dies könnte von einem Server verwendet werden, um z. B. das korrekte Binärformat einer ausführbaren Datei auszuwählen und zum Herunterladen anzubieten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Ein String, der die Bitness der zugrunde liegenden Plattformarchitektur angibt, wie z. B.: `"64"`, `"32"`.

## Beispiele

### Verwendung von Sec-CH-UA-Bitness

Ein Server fordert den `Sec-CH-UA-Bitness`-Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage vom Client einfügt. Der gewünschte Headername wird als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

Der Client kann entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Bitness`-Header zu nachfolgenden Anfragen hinzuzufügen. Zum Beispiel könnte der Client auf einem Windows-basierten 64-Bit-Computer den Header wie folgt hinzufügen:

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzerfreundlichkeit und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
