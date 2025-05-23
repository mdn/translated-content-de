---
title: Sec-CH-UA header
short-title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Marken- und wesentlichen Versionsinformationen des User-Agents bereitstellt.

Der `Sec-CH-UA`-Header gibt die Marke und die wesentliche Version für jede Marke, die mit dem Browser verbunden ist, in einer kommagetrennten Liste an. Der Header ermöglicht es dem Server, seine Antwort sowohl basierend auf den gemeinsamen Marken als auch auf bestimmten Anpassungen in deren jeweiligen Versionen zu individualisieren.

`Sec-CH-UA` ist ein [low entropy hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Sofern es nicht durch eine Berechtigungspolitik des User-Agents blockiert wird, wird es standardmäßig gesendet, ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} optiert.

Der Header kann "falsche" Marken in jeder Position und mit jedem Namen enthalten. Das ist eine Funktion, die verhindert, dass Server unbekannte User-Agents sofort ablehnen, sodass User-Agents gezwungen werden, über ihre Markenidentität zu lügen.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}-Header ist derselbe wie `Sec-CH-UA`, enthält jedoch die vollständige Versionsnummer anstelle der wesentlichen Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine kommagetrennte Liste von Marken in der User-Agent-Markenliste und deren zugehörige wesentliche Versionsnummer. Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent assoziiert ist, wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren web-exponierten Features verbunden ist.

## Beschreibung

Eine Marke ist ein kommerzieller Name für den User-Agent, wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere zugeordnete Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden im `Sec-CH-UA`-Header beide Marken angeben.

Die _wesentliche Version_ ist der "Marketing"-Versionsidentifikator, der verwendet wird, um zwischen Hauptveröffentlichungen der Marke zu unterscheiden. Zum Beispiel hat ein Chromium-Build mit vollständiger Versionsnummer "96.0.4664.45" eine wesentliche Versionsnummer von "96".

## Beispiele

### Verschiedene Sec-CH-UA-Marken

`Sec-CH-UA` ist ein [low entropy hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Sofern nicht explizit durch eine User-Agent-Politik blockiert, wird es in allen Anfragen gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} optiert).

Nachfolgend sind Strings von Chromium-, Chrome-, Edge- und Opera-Desktop-Browsern gezeigt. Beachten Sie, dass sie alle die Marke "Chromium" gemeinsam haben, aber eine zusätzliche Marke zur Angabe ihres Ursprungs haben. Sie haben auch einen absichtlich falschen Markenstring, der an beliebiger Stelle auftreten und unterschiedlichen Text haben kann.

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
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
