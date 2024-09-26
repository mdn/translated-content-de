---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Bitness`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anforderungs-Header liefert die "Bitness" der zugrunde liegenden CPU-Architektur des User-Agents.
Dies ist die Größe in Bits eines Integer- oder Speicher-Adressenwerts – typischerweise 64 oder 32 Bits.

Dies könnte von einem Server verwendet werden, um beispielsweise das korrekte Binärformat einer ausführbaren Datei auszuwählen und zum Herunterladen anzubieten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Bitness: <bitness>
```

## Direktiven

- `<bitness>`
  - : Ein String, der die Bitness der zugrunde liegenden Plattformarchitektur angibt, z.B.: `"64"`, `"32"`.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Bitness` Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anfrage des Clients einfügt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Bitness` Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnte auf einem 64-Bit-Windows-Computer der Client den Header wie folgt hinzufügen:

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

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
