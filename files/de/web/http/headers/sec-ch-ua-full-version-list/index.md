---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Full-Version-List`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anforderungsheader liefert die Branding- und vollständige Versionsinformationen des User-Agents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungsheader](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

Der **`Sec-CH-UA-Full-Version-List`** Header liefert die Marken- und vollständigen Versionsinformationen für jede Marke, die mit dem Browser verknüpft ist, in einer durch Komma getrennten Liste.

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere verknüpfte Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA-Full-Version-List`** Header bereitstellen.

Der Header ermöglicht es dem Server somit, seine Antwort basierend sowohl auf gemeinsamen Marken als auch auf besonderen Anpassungen in ihren spezifischen jeweiligen Builds anzupassen.

Der Header kann "falsche" Marken in beliebiger Position und mit beliebigem Namen enthalten. Dies ist ein Merkmal, das darauf abzielt, zu verhindern, dass Server unbekannte User-Agents sofort ablehnen, indem sie User-Agents dazu zwingen, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ähnelt {{HTTPHeader("Sec-CH-UA")}}, enthält jedoch für jede Marke die vollständige Versionsnummer anstelle der signifikanten Versionsnummer.

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und ihrer zugehörigen vollständigen Versionsnummer. Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verknüpft ist, wie "Chromium", "Google Chrome". Dies kann eine absichtlich falsche Marke sein, wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert sollte sich im Laufe der Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Full-Version-List` Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Full-Version-List` Header zu nachfolgenden Anfragen hinzuzufügen, wie unten gezeigt:

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
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
