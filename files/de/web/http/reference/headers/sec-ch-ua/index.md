---
title: Sec-CH-UA header
short-title: Sec-CH-UA
slug: Web/HTTP/Reference/Headers/Sec-CH-UA
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der die Marken- und bedeutende Versionsinformationen des User-Agents bereitstellt.

Der `Sec-CH-UA`-Header liefert die Marke und die bedeutende Version für jede mit dem Browser verknüpfte Marke in einer durch Kommas getrennten Liste. Der Header ermöglicht es dem Server, seine Reaktion sowohl auf gemeinsam genutzte Marken als auch auf spezifische Anpassungen in ihren jeweiligen Versionen zu stützen.

`Sec-CH-UA` ist ein [Hinweis mit geringer Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Sofern er nicht durch eine Benutzeragenten-Berechtigungsrichtlinie blockiert wird, wird er standardmäßig gesendet, ohne dass der Server optiert, indem er {{HTTPHeader("Accept-CH")}} sendet.

Der Header kann "gefälschte" Marken in jeder Position und mit beliebigem Namen enthalten. Dies ist ein Feature, das entwickelt wurde, um zu verhindern, dass Server unbekannte Benutzeragenten komplett ablehnen, was Benutzeragenten dazu zwingt, über ihre Markenidentität zu lügen.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}-Header ist derselbe wie `Sec-CH-UA`, umfasst jedoch die vollständige Versionsnummer anstelle der bedeutenden Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

Der Wert ist eine kommagetrennte Liste von Marken in der Benutzeragenten-Markenliste und deren zugehörigen bedeutenden Versionsnummer.

### Direktiven

- `<brand>`
  - : Eine mit dem Benutzeragenten verbundene Marke, wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, im Web exponierten Merkmalen verbunden ist.

## Beschreibung

Eine Marke ist ein Handelsname für den Benutzeragenten wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari. Ein Benutzeragent kann mehrere verbundene Marken haben. Zum Beispiel basieren Opera, Chrome und Edge alle auf Chromium und geben beide Marken im `Sec-CH-UA`-Header an.

Die _bedeutende Version_ ist der "Marketing"-Versionserkennungsnummer, die verwendet wird, um zwischen großen Veröffentlichungen der Marke zu unterscheiden. Zum Beispiel hat ein Chromium-Build mit der _vollständigen Versionsnummer_ "96.0.4664.45" die bedeutende Versionsnummer "96".

## Beispiele

### Verschiedene Sec-CH-UA-Marken

`Sec-CH-UA` ist ein [Hinweis mit geringer Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints). Sofern er nicht ausdrücklich durch eine Benutzeragenten-Richtlinie blockiert wird, wird er in allen Anforderungen gesendet (ohne dass der Server durch das Senden von {{HTTPHeader("Accept-CH")}} optiert).

Nachfolgend werden Zeichenfolgen von Chromium, Chrome, Edge und Opera Desktop-Browsern angezeigt. Beachten Sie, dass sie alle die "Chromium"-Marke teilen, aber eine zusätzliche Marke haben, die ihren Ursprung angibt. Sie haben auch eine absichtlich falsche Markenzeichenfolge, die in jeder Position erscheinen und unterschiedlichen Text haben kann.

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

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
