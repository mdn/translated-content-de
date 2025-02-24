---
title: Sec-CH-UA-WoW64
slug: Web/HTTP/Headers/Sec-CH-UA-WoW64
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-WoW64`** {{Glossary("Request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der angibt, ob eine 32-Bit-Benutzeranwendung auf einer 64-Bit-Windows-Maschine läuft.

[WoW64](https://en.wikipedia.org/wiki/WoW64) wurde häufig verwendet, um zu bestimmen, welcher [NPAPI](https://en.wikipedia.org/wiki/NPAPI)-Plugin-Installer zum Download angeboten werden sollte.
Dieser Client-Hinweis-Header wird aus Gründen der Abwärtskompatibilität verwendet, um eine eins-zu-eins Zuordnung von der User-Agent-Zeichenfolge bestimmter Browser zu UA-Client-Hinweisen bereitzustellen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-WoW64: <boolean>
```

### Direktiven

- `<boolean>`
  - : `?1` zeigt an, dass das Binary des User Agents im 32-Bit-Modus auf 64-Bit-Windows läuft (wahr), während `?0` bedeutet, dass dem nicht so ist (falsch).

## Beispiele

### Verwendung von Sec-CH-UA-WoW64

Ein Server fordert den `Sec-CH-UA-WoW64` Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

Der Client kann wählen, ob er den Hinweis bereitstellen möchte, und den `Sec-CH-UA-WoW64` Header zu nachfolgenden Anfragen hinzufügen.
Das Hinzufügen von `Sec-CH-UA-WoW64: ?1` bedeutet, dass das Binary des User Agents im 32-Bit-Modus auf 64-Bit-Windows läuft:

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung des Datenschutzes von Benutzern und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
