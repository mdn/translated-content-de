---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Request-Header liefert Informationen zur Markenidentität und zur signifikanten Version des User-Agents.

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

Der **`Sec-CH-UA`** Header liefert die Marke und die signifikante Version für jede mit dem Browser assoziierte Marke in einer kommagetrennten Liste.

Eine Marke ist ein Handelsname des User-Agents wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere assoziierte Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA`** Header angeben.

Die _signifikante Version_ ist der „Marketing“-Versionsidentifikator, der zur Unterscheidung zwischen Hauptversionen der Marke verwendet wird. Zum Beispiel hat ein Chromium-Build mit der _vollständigen Versionsnummer_ „96.0.4664.45“ eine signifikante Versionsnummer von „96“.

Der Header ermöglicht es dem Server daher, seine Antwort basierend auf sowohl gemeinsamen Marken als auch bestimmten Anpassungen in den jeweiligen Versionen zu gestalten.

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Sofern nicht durch eine Berechtigungspolitik des User-Agents blockiert, wird er standardmäßig gesendet, ohne dass der Server darüber hinaus durch Senden von {{HTTPHeader("Accept-CH")}} optiert.

Der Header kann in jeder Position und mit jedem Namen „gefälschte“ Marken enthalten. Dies ist ein Feature, das entworfen wurde, um zu verhindern, dass Server unbekannte User-Agents sofort ablehnen, was die User-Agents zwingt, über ihre Markenidentität zu lügen.

> **Note:** {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ist dasselbe wie **`Sec-CH-UA`**, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

## Syntax

Eine kommagetrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörige signifikante Versionsnummer. Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent assoziierte Marke, wie „Chromium“, „Google Chrome“ oder eine absichtlich falsche Marke wie „"Not A;Brand"“.
- `<significant version>`
  - : Die „Marketing“-Versionsnummer, die mit unterscheidbaren web-exponierten Funktionen assoziiert ist.

## Beispiele

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Sofern nicht ausdrücklich durch eine User-Agent-Politik blockiert, wird es in allen Anfragen gesendet (ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} optiert).

Strings von Chromium, Chrome, Edge und Opera Desktop-Browsern werden unten gezeigt. Beachten Sie, dass sie alle die Marke „Chromium“ teilen, aber eine zusätzliche Marke haben, die ihre Herkunft angibt. Sie haben auch eine absichtlich falsche Marken-String, die an jeder Position erscheinen und unterschiedlichen Text haben kann.

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

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
