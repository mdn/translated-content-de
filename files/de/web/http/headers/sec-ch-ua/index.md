---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Request Header liefert die Markennamen und bedeutende Versionsinformationen des User Agents.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

Der **`Sec-CH-UA`** Header liefert die Marke und die bedeutende Version für jede Marke, die mit dem Browser in einer durch Kommata getrennten Liste verbunden ist.

Eine Marke ist ein Handelsname für den User Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User Agent kann mehrere zugehörige Marken haben.
Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA`** Header angeben.

Die _bedeutende Version_ ist der "Marketing"-Versionsidentifikator, der verwendet wird, um zwischen Hauptversionen der Marke zu unterscheiden.
Zum Beispiel hat ein Chromium-Build mit der _vollständigen Versionsnummer_ "96.0.4664.45" eine bedeutende Versionsnummer von "96".

Der Header ermöglicht es dem Server daher, seine Antwort basierend auf den geteilten Marken und auf bestimmten Anpassungen in ihren jeweiligen Versionen zu optimieren.

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Es wird standardmäßig gesendet, es sei denn, es wird durch eine Berechtigungsrichtlinie des User Agents blockiert, auch ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} optiert.

Der Header kann "falsche" Marken in jeder Position und mit jedem Namen enthalten.
Dies ist eine Funktion, die entwickelt wurde, um zu verhindern, dass Server unbekannte User Agents sofort ablehnen, wodurch User Agents gezwungen sind, über ihre Markenidentität zu lügen.

> **Note:** {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ist dasselbe wie **`Sec-CH-UA`**, enthält jedoch die vollständige Versionsnummer anstelle der bedeutenden Versionsnummer für jede Marke.

## Syntax

Eine durch Kommata getrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörige bedeutende Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### Direktiven

- `<brand>`
  - : Eine mit dem User Agent assoziierte Marke, wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, web-exponierten Features assoziiert ist.

## Beispiele

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht durch eine Richtlinie des User Agents ausdrücklich blockiert, wird es bei allen Anfragen gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} optiert).

Unten sind Strings von Desktop-Browsern wie Chromium, Chrome, Edge und Opera dargestellt.
Beachten Sie, dass sie alle die Marke "Chromium" teilen, jedoch eine zusätzliche Marke zur Angabe ihres Ursprungs haben.
Sie haben auch einen absichtlich falschen Markenstring, der in jeder Position erscheinen kann und unterschiedlichen Text haben kann.

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
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
