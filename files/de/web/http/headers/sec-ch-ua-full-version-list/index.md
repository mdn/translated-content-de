---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA-Full-Version-List`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die Marken- und vollständigen Versionsinformationen des User-Agents bereitstellt.

Der **`Sec-CH-UA-Full-Version-List`** Header liefert die Marken- und vollständigen Versionsinformationen für jede mit dem Browser assoziierte Marke in einer kommaseparierten Liste.

Der Header kann "falsche" Marken in beliebiger Position und mit beliebigem Namen enthalten. Dies ist ein Feature, das dazu entwickelt wurde, zu verhindern, dass Server unbekannte User-Agents direkt ablehnen, indem es User-Agents zwingt, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, beinhaltet jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
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

Eine kommaseparierte Liste von Marken in der User-Agent-Markenliste und deren zugehörige vollständige Versionsnummer. Die Syntax für einen einzelnen Eintrag hat das folgende Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent assoziierte Marke, wie "Chromium", "Google Chrome". Dies kann eine absichtlich falsche Marke wie `" Not A;Brand"` oder `"(Not(A:Brand"` sein (der tatsächliche Wert soll sich im Laufe der Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere assoziierte Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden daher beide Marken im `Sec-CH-UA-Full-Version-List` Header angeben.

Der Header ermöglicht es dem Server, seine Antwort basierend auf gemeinsam genutzten Marken und spezifischen Anpassungen in deren jeweiligen spezifischen Builds zu individualisieren.

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version-List

Ein Server fordert den `Sec-CH-UA-Full-Version-List` Header an, indem er das {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf jede Anforderung vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hint bereitzustellen und den `Sec-CH-UA-Full-Version-List` Header zu nachfolgenden Anforderungen hinzuzufügen, wie unten gezeigt:

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
