---
title: Sec-CH-UA header
short-title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-UA`**-{{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Markeninformationen und signifikanten Versionsinformationen des User-Agents bereitstellt.

Der `Sec-CH-UA`-Header liefert die Marke und signifikante Version für jede Marke, die mit dem Browser in einer kommagetrennten Liste verbunden ist. Der Header ermöglicht es dem Server daher, seine Antwort auf Grundlage sowohl gemeinsam genutzter Marken als auch spezifischer Anpassungen in ihren jeweiligen Versionen zu gestalten.

`Sec-CH-UA` ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Es sei denn, es wird durch eine User-Agent-Berechtigungsrichtlinie blockiert, wird es standardmäßig gesendet, ohne dass der Server sich dazu durch das Senden von {{HTTPHeader("Accept-CH")}} entscheiden muss.

Der Header kann „gefälschte“ Marken in beliebiger Position und mit beliebigem Namen enthalten. Dies ist ein Feature, das dazu ausgelegt ist, zu verhindern, dass Server unbekannte User-Agents rundweg ablehnen, was die User-Agents dazu zwingt, über ihre Markenidentität zu lügen.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}-Header ist derselbe wie `Sec-CH-UA`, enthält jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

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

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

Der Wert ist eine kommagetrennte Liste von Marken in der User-Agent-Markenliste und ihrer zugehörigen signifikanten Versionsnummer.

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem User-Agent verbunden ist, wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, web-exponierten Features verbunden ist.

## Beschreibung

Eine Marke ist ein kommerzieller Name für den User-Agent wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein User-Agent kann mehrere verbundene Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA`-Header bereitstellen.

Die _signifikante Version_ ist die „Marketing“-Versionskennung, die verwendet wird, um zwischen Hauptversionen der Marke zu unterscheiden. Zum Beispiel hat ein Chromium-Build mit _vollständiger Versionsnummer_ "96.0.4664.45" eine signifikante Versionsnummer von "96".

## Beispiele

### Verschiedene Sec-CH-UA-Marken

`Sec-CH-UA` ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Es sei denn, es wird durch eine User-Agent-Richtlinie explizit blockiert, wird es in allen Anfragen gesendet (ohne dass der Server dafür eine Entscheidung treffen muss, indem er {{HTTPHeader("Accept-CH")}} sendet).

Strings von Chromium-, Chrome-, Edge- und Opera-Desktops-Browsern sind unten dargestellt. Beachten Sie, dass sie alle die "Chromium"-Marke teilen, aber eine zusätzliche Marke haben, die ihren Ursprung angibt. Sie enthalten auch eine absichtlich falsche Marken-Kennung, die in jeder Position erscheinen und unterschiedlichen Text haben kann.

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
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Nutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
