---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Full-Version-List`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die Marken- und vollständige Versionsinformationen des User-Agents bereitstellt.

Der **`Sec-CH-UA-Full-Version-List`**-Header liefert die Marke und vollständige Versionsinformationen für jede Marke, die mit dem Browser verknüpft ist, in einer durch Kommas getrennten Liste.

Der Header kann "falsche" Marken in jeder Position und mit jedem Namen enthalten. Dies ist eine Funktion, die entwickelt wurde, um zu verhindern, dass Server unbekannte User-Agents sofort ablehnen und User-Agents dazu zwingen, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ähnelt {{HTTPHeader("Sec-CH-UA")}}, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

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
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und ihre zugehörige vollständige Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verknüpft ist, wie "Chromium", "Google Chrome".
    Dies kann eine bewusst inkorrekte Marke sein wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert soll sich im Laufe der Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beschreibung

Eine Marke ist ein Handelsname des User-Agents wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mehrere verknüpfte Marken haben.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA-Full-Version-List`-Header bereitstellen.

Der Header ermöglicht es dem Server, seine Antwort basierend auf gemeinsam genutzten Marken und speziellen Anpassungen in ihren jeweiligen spezifischen Builds zu gestalten.

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version-List

Ein Server fordert den `Sec-CH-UA-Full-Version-List`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anforderung vom Client einfügt, wobei der Name des gewünschten Headers als Token verwendet wird:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Full-Version-List`-Header zu nachfolgenden Anfragen hinzufügen, wie unten gezeigt:

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

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
