---
title: Sec-CH-UA-WoW64
slug: Web/HTTP/Headers/Sec-CH-UA-WoW64
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{HTTPSidebar}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-WoW64`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der anzeigt, ob eine 32-Bit-Anwendung des User-Agents auf einem 64-Bit-Windows-Rechner läuft.

[WoW64](https://en.wikipedia.org/wiki/WoW64) wurde häufig verwendet, um festzustellen, welcher [NPAPI](https://en.wikipedia.org/wiki/NPAPI)-Plugin-Installer zum Download angeboten werden sollte.
Dieser Client-Hint-Header wird aus Gründen der Abwärtskompatibilität verwendet, um eine Eins-zu-eins-Zuordnung von der User-Agent-Zeichenkette bestimmter Browser zu UA-Client-Hints bereitzustellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
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
Sec-CH-UA-WoW64: <boolean>
```

### Direktiven

- `<boolean>`
  - : `?1` zeigt an, dass das Binary des User-Agents im 32-Bit-Modus auf 64-Bit-Windows läuft (wahr), während `?0` bedeutet, dass es nicht der Fall ist (falsch).

## Beispiele

### Verwendung von Sec-CH-UA-WoW64

Ein Server fordert den `Sec-CH-UA-WoW64` Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anfrage des Clients einschließt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

Der Client kann wählen, ob er den Hint bereitstellt und den `Sec-CH-UA-WoW64` Header zu nachfolgenden Anfragen hinzufügt.
Das Hinzufügen von `Sec-CH-UA-WoW64: ?1` bedeutet, dass das Binary des User-Agents im 32-Bit-Modus auf 64-Bit-Windows läuft:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-WoW64: ?1
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Form-Factors: "Desktop"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
