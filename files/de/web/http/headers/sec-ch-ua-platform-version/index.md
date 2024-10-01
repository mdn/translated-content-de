---
title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Platform-Version`** [User-Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anfrage-Header gibt die Version des Betriebssystems an, auf dem der User-Agent läuft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Die Versionszeichenkette enthält in der Regel die Betriebssystemversion als Zeichenkette, bestehend aus durch Punkte getrennten Haupt-, Neben- und Patch-Versionsnummern.
    Zum Beispiel `"11.0.0"`

    Die Versionszeichenkette unter Linux ist immer leer.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Platform-Version` Header an, indem er das {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anfrage des Clients einfügt und dabei den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

Der Client kann sich entscheiden, den Hint bereitzustellen, und den `Sec-CH-UA-Platform-Version` Header zu folgenden Anfragen hinzufügen. Zum Beispiel könnten die folgenden Anfrage-Header von einem Browser gesendet werden, der auf Windows 10 läuft.

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

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
