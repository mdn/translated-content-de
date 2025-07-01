---
title: Sec-CH-UA-Full-Version-List header
short-title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Full-Version-List`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Marken- und vollständige Versionsinformationen des User-Agents bereitstellt.

Der **`Sec-CH-UA-Full-Version-List`** Header liefert die Marken- und vollständigen Versionsinformationen für jede Marke, die mit dem Browser assoziiert ist, in einer kommaseparierten Liste.

Der Header kann "gefälschte" Marken in jeder Position und mit jedem Namen enthalten. Dies ist eine Funktion, die verhindern soll, dass Server unbekannte User-Agents sofort ablehnen, und zwingt User-Agents, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

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
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", …
```

Der Wert ist eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörige vollständige Versionsnummer.

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent verbundene Marke, wie "Chromium", "Google Chrome".
    Dies kann eine absichtlich falsche Marke sein wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert wird voraussichtlich im Laufe der Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie z.B. 98.0.4750.0.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere verbundene Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA-Full-Version-List` Header bereitstellen.

Der Header ermöglicht es dem Server, seine Antwort sowohl basierend auf gemeinsamen Marken als auch auf bestimmten Anpassungen in ihren jeweiligen spezifischen Builds zu individualisieren.

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version-List

Ein Server fordert den `Sec-CH-UA-Full-Version-List` Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Full-Version-List` Header in nachfolgende Anfragen aufzunehmen, wie unten gezeigt:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version-List: " Not A;Brand";v="99.0.0.0", "Chromium";v="98.0.4750.0", "Google Chrome";v="98.0.4750.0"
Sec-CH-UA-Platform: "Linux"
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
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
