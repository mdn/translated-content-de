---
title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Platform-Version`** [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anfrage-Header stellt die Version des Betriebssystems bereit, auf dem der User-Agent läuft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
Sec-CH-UA-Platform-Version: <version>
```

### Direktiven

- `<version>`

  - : Der Versionsstring enthält typischerweise die Betriebssystemversion in einem String, bestehend aus durch Punkte getrennten Haupt-, Neben- und Patch-Versionsnummern.
    Zum Beispiel `"11.0.0"`

    Der Versionsstring unter Linux ist immer leer.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Platform-Version` Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf eine beliebige Anfrage vom Client einschließt und dabei den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Platform-Version` Header zu nachfolgenden Anfragen hinzuzufügen.
Zum Beispiel könnten die folgenden Anfrage-Header von einem Browser gesendet werden, der auf Windows 10 läuft.

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Platform-Version: "10.0.0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
