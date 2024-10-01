---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA`** [User-Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Request-Header stellt die Marken- und signifikanten Versionsinformationen des User-Agents bereit.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

Der **`Sec-CH-UA`** Header gibt die Marke und die signifikante Version für jede mit dem Browser verbundene Marke in einer durch Kommas getrennten Liste an.

Eine Marke ist ein Handelsname für den User-Agent, wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mit mehreren Marken verbunden sein.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA`** Header angeben.

Die _signifikante Version_ ist die "Marketing"-Versionskennung, die verwendet wird, um zwischen den Hauptversionen der Marke zu unterscheiden.
Ein Chromium-Build mit der _vollständigen Versionsnummer_ "96.0.4664.45" hat beispielsweise eine signifikante Versionsnummer von "96".

Der Header ermöglicht es dem Server daher, seine Antwort basierend auf gemeinsamen Marken und auf bestimmten Anpassungen in ihren jeweiligen Versionen zu individualisieren.

`Sec-CH-UA` ist ein [Low-Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Falls er nicht durch eine User-Agent-Berechtigungsrichtlinie blockiert wird, wird er standardmäßig ohne das Opt-in des Servers durch Senden von {{HTTPHeader("Accept-CH")}} gesendet.

Der Header kann "gefälschte" Marken in beliebiger Position und mit beliebigem Namen enthalten.
Dies ist eine Funktion, die verhindert, dass Server unbekannte User-Agents direkt ablehnen, wodurch User-Agents gezwungen werden, über ihre Markenidentität zu lügen.

> **Note:** {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ist dasselbe wie **`Sec-CH-UA`**, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und die dazugehörige signifikante Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verbunden ist, wie "Chromium", "Google Chrome" oder eine absichtlich inkorrekte Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, im Web sichtbaren Funktionen verbunden ist.

## Beispiele

`Sec-CH-UA` ist ein [Low-Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht explizit durch eine User-Agent-Richtlinie blockiert, wird er in allen Anfragen gesendet (ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} ein Opt-in vornimmt).

Strings von Chromium-, Chrome-, Edge- und Opera-Desktop-Browsern werden unten gezeigt.
Beachten Sie, dass sie alle die "Chromium"-Marke teilen, jedoch eine zusätzliche Marke haben, die ihren Ursprung anzeigt.
Sie haben auch eine absichtlich falsche Marken-String, die an beliebiger Position erscheinen und unterschiedlichen Text haben kann.

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
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
