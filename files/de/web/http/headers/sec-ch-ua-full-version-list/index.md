---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA-Full-Version-List`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Request-Header liefert die Marken- und vollständige Versionsinformation des User-Agents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

Der **`Sec-CH-UA-Full-Version-List`** Header liefert die Marken- und vollständige Versionsinformation für jede mit dem Browser verbundene Marke, in einer kommagetrennten Liste.

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent könnte mit mehreren Marken verbunden sein.
Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA-Full-Version-List`** Header angeben.

Der Header ermöglicht es dem Server, seine Antwort sowohl basierend auf geteilten Marken als auch auf spezifischen Anpassungen in ihren jeweiligen spezifischen Builds zu gestalten.

Der Header kann "falsche" Marken in jeder Position und mit jedem Namen einschließen.
Dies ist eine Funktion, die entwickelt wurde, um zu verhindern, dass Server unbekannte User-Agents sofort ablehnen, wodurch User-Agents gezwungen werden, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, beinhaltet jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

## Syntax

Eine kommagetrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörigen vollständigen Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Richtlinien

- `<brand>`
  - : Eine mit dem User-Agent verbundene Marke, wie "Chromium", "Google Chrome".
    Dies kann eine absichtlich falsche Marke sein, wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert wird erwartet, dass er sich im Laufe der Zeit ändert und unvorhersehbar ist).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beispiele

Ein Server fordert den `Sec-CH-UA-Full-Version-List` Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

Der Client kann sich entscheiden, den Hint bereitzustellen und den `Sec-CH-UA-Full-Version-List` Header zu nachfolgenden Anfragen hinzuzufügen, wie unten gezeigt:

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
