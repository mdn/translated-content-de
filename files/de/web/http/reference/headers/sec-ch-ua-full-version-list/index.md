---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Full-Version-List`** {{Glossary("request_header", "Request Header")}} ist ein [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der die Marken- und vollständige Versionsinformationen des User-Agents bereitstellt.

Der **`Sec-CH-UA-Full-Version-List`**-Header liefert die Marken- und vollständigen Versionsinformationen für jede mit dem Browser verknüpfte Marke in einer durch Kommas getrennten Liste.

Der Header kann "gefälschte" Marken in jeder Position und mit beliebigem Namen enthalten.
Dies ist eine Funktion, die verhindern soll, dass Server unbekannte User Agents sofort ablehnen, und zwingt User Agents, über ihre Markenidentität zu täuschen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, beinhaltet jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User Agent-Markenliste und deren zugehörige vollständige Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Direktiven

- `<brand>`
  - : Eine mit dem User Agent verknüpfte Marke, wie "Chromium", "Google Chrome".
    Dies kann eine absichtlich falsche Marke wie `" Not A;Brand"` oder `"(Not(A:Brand"` sein (der tatsächliche Wert sollte sich über die Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beschreibung

Eine Marke ist ein Handelsname für den User Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User Agent kann mehrere verknüpfte Marken haben.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA-Full-Version-List`-Header angeben.

Der Header erlaubt es dem Server, seine Antwort basierend auf sowohl gemeinsamen Marken als auch spezifischen Anpassungen in deren spezifischen Builds anzupassen.

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version-List

Ein Server fordert den `Sec-CH-UA-Full-Version-List`-Header an, indem er die {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anfrage vom Client aufnimmt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hint bereitzustellen und den `Sec-CH-UA-Full-Version-List`-Header zu nachfolgenden Anfragen hinzuzufügen, wie unten gezeigt:

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

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
