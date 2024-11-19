---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-UA`** {{Glossary("request_header", "Request-Header")}} ist ein [Benutzeragent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der Informationen über das Branding und die signifikante Version des Benutzeragents bereitstellt.

Der `Sec-CH-UA` Header liefert das Marken- und signifikante Versions-Informationen für jede mit dem Browser assoziierte Marke in einer durch Kommas getrennten Liste.
Der Header ermöglicht es dem Server daher, seine Antwort basierend auf sowohl geteilten Marken als auch auf besonderen Anpassungen in den jeweiligen Versionen zu individualisieren.

`Sec-CH-UA` ist ein [Low Entropy Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht durch eine Erlaubnisrichtlinie des Benutzeragents blockiert, wird er standardmäßig gesendet, ohne dass der Server sich durch das Senden von {{HTTPHeader("Accept-CH")}} anmelden muss.

Der Header kann an jeder Position und mit jedem Namen "falsche" Marken enthalten.
Dies ist ein Feature, das dazu entworfen wurde, Server daran zu hindern, unbekannte Benutzeragenten sofort abzulehnen und Benutzeragenten dazu zu zwingen, über ihre Markenidentität zu lügen.

> [!NOTE]
> Der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Header ist derselbe wie `Sec-CH-UA`, beinhaltet jedoch die vollständige Versionsnummer anstelle der signifikanten Versionsnummer für jede Marke.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von Marken in der Benutzeragenten-Markeliste und deren zugehörige signifikante Versionsnummer.
Die Syntax für einen einzelnen Eintrag hat folgendes Format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", …
```

### Direktiven

- `<brand>`
  - : Eine Marke, die mit dem Benutzeragenten verbunden ist, wie "Chromium", "Google Chrome" oder eine absichtlich falsche Marke wie `"Not A;Brand"`.
- `<significant version>`
  - : Die "Marketing"-Versionsnummer, die mit unterscheidbaren, im Web exponierten Funktionen verbunden ist.

## Beschreibung

Eine Marke ist ein kommerzieller Name für den Benutzeragenten wie: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox und Safari.
Ein Benutzeragent kann mehrere assoziierte Marken haben.
Beispielsweise basieren Opera, Chrome und Edge alle auf Chromium und werden beide Marken im `Sec-CH-UA` Header bereitstellen.

Die _signifikante Version_ ist die "Marketing"-Versionskennung, die verwendet wird, um zwischen Hauptversionen der Marke zu unterscheiden.
Zum Beispiel hat ein Chromium-Build mit _voller Versionsnummer_ "96.0.4664.45" eine signifikante Versionsnummer von "96".

## Beispiele

### Verschiedene Sec-CH-UA Marken

`Sec-CH-UA` ist ein [Low Entropy Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints).
Sofern nicht explizit durch eine Benutzeragenten-Richtlinie blockiert, wird er in allen Anfragen gesendet (ohne dass der Server sich durch das Senden von {{HTTPHeader("Accept-CH")}} anmelden muss).

Strings von Chromium, Chrome, Edge und Opera Desktop-Browsern sind unten gezeigt.
Beachten Sie, dass sie alle die "Chromium" Marke teilen, aber eine zusätzliche Marke besitzen, die ihren Ursprung angibt.
Sie haben auch eine absichtlich unkorrekte Markenzeichenkette, die an jeder Position erscheinen und unterschiedlichen Text haben kann.

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

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und Entwickler-Erfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
