---
title: Sec-CH-UA-WoW64
slug: Web/HTTP/Headers/Sec-CH-UA-WoW64
l10n:
  sourceCommit: 934a85db5abc5896fad02e9280b7a5742b5b76e3
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-WoW64`** {{Glossary("Request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der angibt, ob eine 32-Bit-Anwendung des Benutzer-Agents auf einer 64-Bit-Windows-Maschine läuft.

[WoW64](https://en.wikipedia.org/wiki/WoW64) wurde häufig verwendet, um festzustellen, welcher [NPAPI](https://en.wikipedia.org/wiki/NPAPI)-Plugin-Installer zum Herunterladen angeboten werden sollte.
Dieser Client-Hinweis-Header wird aus Gründen der Rückwärtskompatibilität genutzt, um eine Eins-zu-eins-Zuordnung von der User-Agent-Zeichenkette bestimmter Browser zu UA-Client-Hinweisen bereitzustellen.

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
  - : `?1` zeigt an, dass das Binary des Benutzer-Agents im 32-Bit-Modus auf 64-Bit-Windows läuft (wahr), während `?0` bedeutet, dass dem nicht so ist (falsch).

## Beispiele

### Verwendung von Sec-CH-UA-WoW64

Ein Server fordert den `Sec-CH-UA-WoW64`-Header an, indem er die {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine Anfrage vom Client einfügt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

Der Client kann sich entscheiden, diesen Hinweis bereitzustellen und den `Sec-CH-UA-WoW64`-Header zu nachfolgenden Anfragen hinzuzufügen.
Das Hinzufügen von `Sec-CH-UA-WoW64: ?1` bedeutet, dass das Binary des Benutzer-Agents im 32-Bit-Modus auf 64-Bit-Windows läuft:

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

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
