---
title: Sec-CH-UA-WoW64 header
short-title: Sec-CH-UA-WoW64
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-WoW64
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-WoW64`** {{Glossary("Request_header", "Request-Header")}} ist ein [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der angibt, ob eine 32-Bit-Anwendung des User Agents auf einem 64-Bit-Windows-System läuft.

[WoW64](https://en.wikipedia.org/wiki/WoW64) wurde häufig verwendet, um zu wissen, welcher [NPAPI](https://en.wikipedia.org/wiki/NPAPI)-Plugin-Installer zum Herunterladen angeboten werden sollte. Dieser Client Hint-Header wird aus Gründen der Rückwärtskompatibilität verwendet, um eine Eins-zu-Eins-Abbildung von der User-Agent-Zeichenkette bestimmter Browser zu UA-Client-Hints bereitzustellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-WoW64: <boolean>
```

### Anweisungen

- `<boolean>`
  - : `?1` gibt an, dass der Binärcode des User Agents im 32-Bit-Modus auf 64-Bit-Windows läuft (wahr), während `?0` bedeutet, dass dies nicht der Fall ist (falsch).

## Beispiele

### Verwendung von Sec-CH-UA-WoW64

Ein Server fordert den `Sec-CH-UA-WoW64`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anfrage des Clients einschließt, unter Verwendung des Namens des gewünschten Headers als Token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-WoW64`-Header zu nachfolgenden Anfragen hinzuzufügen. Das Hinzufügen von `Sec-CH-UA-WoW64: ?1` bedeutet, dass der Binärcode des User Agents im 32-Bit-Modus auf 64-Bit-Windows läuft:

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

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Benutzer-Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
