---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der die Marken- und signifikante Versionsinformation des User-Agents bereitstellt.

Der `Sec-CH-UA` Header liefert die Marke und die signifikante Version für jede brand mit dem Browser assoziierten Marke in einer kommagetrennten Liste.
Der Header ermöglicht es dem Server daher, seine Antwort basierend sowohl auf freigegebenen Marken als auch auf bestimmten Anpassungen in ihren jeweiligen Versionen anzupassen.

`Sec-CH-UA` ist ein [Low Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht durch eine Benutzeragenten-Berechtigungsrichtlinie blockiert, wird er standardmäßig gesendet, ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss.

Der Header kann „falsche“ Marken in jeder Position und mit jedem Namen enthalten.
Dies ist ein Feature, das verhindern soll, dass Server unbekannte User-Agents sofort ablehnen und Benutzeragenten zwingt, über ihre Markenidentität zu lügen.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Header ist identisch mit `Sec-CH-UA`, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine kommagetrennte Liste von Marken in der User-Agent Marktliste und deren zugehöriger signifikanten Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verbunden ist, wie „Chromium“, „Google Chrome“ oder eine absichtlich falsche Marke wie „Not A;Brand“.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren web-exponierten Features assoziiert ist.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent, wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mehrere zugehörige Marken haben.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden sowohl Marken im `Sec-CH-UA` Header bereitstellen.

Die _signifikante Version_ ist der "Marketing"-Versionsbezeichner, der verwendet wird, um zwischen Hauptversionen der Marke zu unterscheiden.
Beispielsweise hat ein Chromium-Build mit _vollständiger Versionsnummer_ "96.0.4664.45" eine signifikante Versionsnummer von "96".

## Beispiele

### Verschiedene Sec-CH-UA Marken

`Sec-CH-UA` ist ein [Low Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht explizit durch eine Benutzeragentenrichtlinie blockiert, wird er in allen Anfragen gesendet (ohne dass der Server durch Senden von {{HTTPHeader("Accept-CH")}} zustimmen muss).

Zeichenfolgen von Chromium-, Chrome-, Edge- und Opera-Desktop-Browsern werden unten angezeigt.
Beachten Sie, dass sie alle die Marke "Chromium" teilen, jedoch eine zusätzliche Marke haben, die ihre Herkunft anzeigt.
Sie haben auch eine absichtlich falsche Markenzeichenfolge, die in beliebiger Position erscheinen und unterschiedlichen Text haben kann.

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
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
