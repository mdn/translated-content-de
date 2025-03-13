---
title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der Informationen über die Marken und wesentlichen Versionsinformationen des User-Agents bereitstellt.

Der `Sec-CH-UA`-Header liefert die Marke und die wesentliche Version für jede Marke, die mit dem Browser assoziiert ist, in einer durch Kommas getrennten Liste.
Der Header ermöglicht es dem Server somit, seine Antwort basierend auf gemeinsam genutzten Marken und auf bestimmten Anpassungen in deren jeweiligen Versionen zu individualisieren.

`Sec-CH-UA` ist ein [Hinweis mit niedriger Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints).
Sofern nicht durch eine User-Agent-Berechtigungsrichtlinie blockiert, wird er standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} ein Opt-in durchführen muss.

Der Header kann "gefälschte" Marken in jeder Position und mit jedem Namen enthalten.
Dies ist ein Feature, das entworfen wurde, um zu verhindern, dass Server unbekannte User-Agents sofort ablehnen und User-Agents dazu zwingen, ihre Markenidentität falsch anzugeben.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Header ist dasselbe wie `Sec-CH-UA`, enthält jedoch die vollständige Versionsnummer anstelle der wesentlichen Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von Marken in der User-Agent-Markenliste und deren zugehöriger wesentlicher Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

### Direktiven

- `<brand>`
  - : Eine mit dem User-Agent assoziierte Marke wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, web-exponierten Funktionen assoziiert ist.

## Beschreibung

Eine Marke ist ein Handelsname für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein User-Agent kann mehrere assoziierte Marken haben.
Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA`-Header angeben.

Die _wesentliche Version_ ist der "Marketing"-Versionsbezeichner, der verwendet wird, um zwischen großen Veröffentlichungen der Marke zu unterscheiden.
Zum Beispiel hat ein Chromium-Build mit _vollständiger Versionsnummer_ "96.0.4664.45" eine wesentliche Versionsnummer von "96".

## Beispiele

### Verschiedene Sec-CH-UA Marken

`Sec-CH-UA` ist ein [Hinweis mit niedriger Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints).
Sofern nicht explizit durch eine User-Agent-Richtlinie blockiert, wird er in allen Anfragen gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} ein Opt-in durchführen muss).

Strings von Chromium, Chrome, Edge und Opera-Desktop-Browsern werden unten angezeigt.
Beachten Sie, dass sie alle die "Chromium"-Marke teilen, aber eine zusätzliche Marke haben, die ihren Ursprung angibt.
Sie haben auch einen absichtlich falschen Markenstring, der an jeder Position erscheinen und unterschiedlichen Text haben kann.

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

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
