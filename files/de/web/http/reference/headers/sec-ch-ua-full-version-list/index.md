---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Full-Version-List`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Marken- und vollständige Versionsinformation des User-Agents bereitstellt.

Der **`Sec-CH-UA-Full-Version-List`**-Header liefert die Marken- und vollständige Versionsinformation für jede mit dem Browser assoziierte Marke, in einer durch Kommas getrennten Liste.

Der Header kann "gefälschte" Marken an jeder Position und mit jedem Namen enthalten.
Dies ist ein Feature, das entwickelt wurde, um zu verhindern, dass Server unbekannte User-Agents gänzlich ablehnen und User-Agents dazu zwingen, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörige vollständige Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent assoziierte Marke, wie "Chromium", "Google Chrome".
    Dies kann eine absichtlich falsche Marke sein wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert wird voraussichtlich im Laufe der Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie z.B. 98.0.4750.0.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mehrere zugehörige Marken haben.
Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA-Full-Version-List`-Header angeben.

Der Header ermöglicht es dem Server, seine Antwort basierend auf sowohl gemeinsamen Marken als auch auf spezifischen Anpassungen in ihren spezifischen jeweiligen Builds zu individualisieren.

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version-List

Ein Server fordert den `Sec-CH-UA-Full-Version-List`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anfrage vom Client einfügt und dabei den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Full-Version-List`-Header zu nachfolgenden Anfragen hinzuzufügen, wie unten gezeigt:

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
