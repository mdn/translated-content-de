---
title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Branding- und signifikante Versionsinformationen des User-Agents bereitstellt.

Der `Sec-CH-UA`-Header stellt die Marke und die signifikante Version für jede mit dem Browser assoziierte Marke in einer durch Kommas getrennten Liste zur Verfügung.
Der Header ermöglicht es dem Server daher, seine Antwort basierend auf sowohl gemeinsamen Marken als auch auf bestimmten Anpassungen in ihren jeweiligen Versionen zu individualisieren.

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints).
Sofern nicht durch eine Berechtigungsrichtlinie des User-Agents blockiert, wird er standardmäßig gesendet, ohne dass der Server dies durch Senden von {{HTTPHeader("Accept-CH")}} anfordern muss.

Der Header kann "falsche" Marken in beliebiger Position und mit beliebigem Namen enthalten.
Dies ist eine Funktion, die dazu dient, zu verhindern, dass Server unbekannte User-Agents rundweg ablehnen, was User-Agents dazu zwingt, über ihre Markenidentität zu lügen.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Header ist derselbe wie `Sec-CH-UA`, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

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
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörige signifikante Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent assoziierte Marke, wie "Chromium", "Google Chrome", oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, web-exponierten Funktionen verbunden ist.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent, wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mehrere assoziierte Marken haben.
Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und geben im `Sec-CH-UA`-Header beide Marken an.

Die _signifikante Version_ ist die "Marketing"-Versionskennung, die verwendet wird, um zwischen Hauptversionen der Marke zu unterscheiden.
Zum Beispiel hat ein Chromium-Build mit der _vollen Versionsnummer_ "96.0.4664.45" eine signifikante Versionsnummer von "96".

## Beispiele

### Verschiedene Sec-CH-UA Marken

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints).
Sofern nicht explizit durch eine User-Agent-Richtlinie blockiert, wird er in allen Anfragen gesendet (ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss).

Nachfolgend sind Strings von Chromium-, Chrome-, Edge- und Opera-Desktop-Browsern dargestellt.
Beachten Sie, dass sie alle die "Chromium"-Marke teilen, aber eine zusätzliche Marke haben, die ihren Ursprung anzeigt.
Sie haben auch eine absichtlich falsche Markenzeichenkette, die in jeder Position erscheinen und unterschiedliche Texte haben kann.

```http
Sec-CH-UA: "(Not(A:Brand";v="8", "Chromium";v="98"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
```

```http
Sec-CH-UA: "Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung von Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
