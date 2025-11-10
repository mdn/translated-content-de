---
title: Sec-CH-UA-Full-Version-List header
short-title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version-List
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA-Full-Version-List`**-{{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Marken- und vollständige Versionsinformationen des User-Agents bereitstellt.

Der **`Sec-CH-UA-Full-Version-List`**-Header liefert die Marken- und vollständige Versionsinformationen für jede mit dem Browser verbundene Marke in einer kommagetrennten Liste.

Der Header kann "gefälschte" Marken in jeder Position und mit jedem Namen enthalten.
Dies ist eine Funktion, die entwickelt wurde, um zu verhindern, dass Server unbekannte User-Agents vollständig ablehnen, was User-Agents dazu zwingt, über ihre Markenidentität zu lügen.

> [!NOTE]
> Dies ist ähnlich wie {{HTTPHeader("Sec-CH-UA")}}, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", …
```

Der Wert ist eine kommagetrennte Liste von Marken in der User-Agent-Markenliste und deren zugehöriger vollständiger Versionsnummer.

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent verbundene Marke, wie "Chromium", "Google Chrome".
    Dies kann eine absichtlich falsche Marke sein wie `" Not A;Brand"` oder `"(Not(A:Brand"` (der tatsächliche Wert soll sich im Laufe der Zeit ändern und unvorhersehbar sein).
- `<full version>`
  - : Eine vollständige Versionsnummer, wie 98.0.4750.0.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mehrere verbundene Marken haben.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA-Full-Version-List`-Header angeben.

Der Header ermöglicht es dem Server, seine Antwort basierend auf sowohl geteilten Marken als auch spezifischen Anpassungen in ihren jeweiligen speziellen Builds anzupassen.

## Beispiele

### Verwendung von Sec-CH-UA-Full-Version-List

Ein Server fordert den `Sec-CH-UA-Full-Version-List`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage vom Client einfügt, wobei der Name des gewünschten Headers als Token verwendet wird:

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

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
