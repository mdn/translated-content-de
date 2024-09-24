---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Full-Version-List`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Anforderungsheader liefert die Marken- und vollständigen Versionsinformationen des User-Agents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

Der **`Sec-CH-UA-Full-Version-List`** Header liefert die Marken- und vollständigen Versionsinformationen für jede mit dem Browser verbundene Marke in einer kommagetrennten Liste.

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mit mehreren Marken verbunden sein.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA-Full-Version-List`** Header angeben.

Der Header ermöglicht es somit dem Server, seine Antwort sowohl auf gemeinsame Marken als auch auf bestimmte Anpassungen in ihren jeweiligen spezifischen Builds zuzuschneiden.

Der Header kann „falsche“ Marken in beliebiger Position und mit beliebigem Namen enthalten.
Dies ist eine Funktion, die entwickelt wurde, um zu verhindern, dass Server unbekannte User-Agents sofort ablehnen und User-Agents somit gezwungen werden, falsche Angaben über ihre Markenidentität zu machen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, beinhaltet jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

## Syntax

Eine kommagetrennte Liste von Marken in der Markenliste des User-Agents und deren zugehörige vollständige Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verbunden ist, wie "Chromium", "Google Chrome".
    Dies kann eine absichtlich falsche Marke sein, wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert wird voraussichtlich im Laufe der Zeit wechseln und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Full-Version-List` Header an, indem er das {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf eine beliebige Anfrage vom Client einfügt und dabei den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann wählen, ob er den Hint bereitstellen möchte, und fügt den `Sec-CH-UA-Full-Version-List` Header zu nachfolgenden Anfragen hinzu, wie unten gezeigt:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
