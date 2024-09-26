---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-UA`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) Request-Header bietet Informationen zur Markenkennzeichnung und zur bedeutenden Versionskennung des User-Agents.

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

Der **`Sec-CH-UA`** Header liefert die Marke und die bedeutende Version für jede Marke, die mit dem Browser in einer durch Kommas getrennten Liste verknüpft ist.

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere verknüpfte Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im **`Sec-CH-UA`** Header angeben.

Die _bedeutende Version_ ist die "marketing" Versionskennung, die verwendet wird, um zwischen Hauptveröffentlichungen der Marke zu unterscheiden. Zum Beispiel hat ein Chromium-Build mit der _vollständigen Versionsnummer_ "96.0.4664.45" eine bedeutende Versionsnummer von "96".

Der Header ermöglicht es dem Server daher, seine Antwort basierend auf sowohl gemeinsamen Marken als auch auf bestimmten Anpassungen in ihren jeweiligen Versionen anzupassen.

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Sofern diese nicht durch eine User-Agent-Berechtigungsrichtlinie blockiert ist, wird sie standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

Der Header kann "gefälschte" Marken in jeder Position und mit jedem Namen enthalten. Dies ist eine Funktion, die dazu dient, zu verhindern, dass Server unbekannte User-Agents komplett ablehnen, was User-Agents dazu zwingt, über ihre Markenidentität zu lügen.

> **Note:** {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ist dasselbe wie **`Sec-CH-UA`**, beinhaltet jedoch die vollständige Versionsnummer anstelle der bedeutenden Versionsnummer für jede Marke.

## Syntax

Eine durch Kommas getrennte Liste von Marken in der Markenliste des User-Agents und ihre zugehörigen bedeutenden Versionsnummern. Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verknüpft ist, wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "marketing" Versionsnummer, die mit unterscheidbaren web-exponierten Funktionen verbunden ist.

## Beispiele

`Sec-CH-UA` ist ein [Low-Entropy-Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Sofern sie nicht explizit durch eine User-Agent-Richtlinie blockiert wird, wird sie in allen Anfragen gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss).

Strings von Chromium-, Chrome-, Edge- und Opera-Desktop-Browsern sind unten dargestellt. Beachten Sie, dass alle die Marke "Chromium" teilen, aber eine zusätzliche Marke haben, die ihren Ursprung angibt. Sie haben auch einen absichtlich falschen Markenstring, der in jeder Position erscheinen kann und unterschiedlichen Text haben kann.

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

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Benutzerdatenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
