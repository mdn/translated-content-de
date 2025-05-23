---
title: RTT header
short-title: RTT
slug: Web/HTTP/Reference/Headers/RTT
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-**`RTT`**-{{Glossary("request_header", "Request-Header")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die ungefähre Round-Trip-Zeit auf der Anwendungsebene in Millisekunden angibt. Im Gegensatz zur RTT auf der Transportschicht beinhaltet der RTT-Hinweis die Server-Verarbeitungszeit.

Der RTT-Wert wird auf die nächsten 25 Millisekunden gerundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu verhindern, obwohl ein Angreifer viele andere Mechanismen verwenden könnte, um ähnliche Round-Trip-Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server zu wählen, welche Informationen basierend auf der Netzwerk-Reaktionsfähigkeit/-Latenz gesendet werden. Zum Beispiel könnte er entscheiden, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Guides/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollte erwogen werden, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es ändert sich wahrscheinlich oft, was die Ressource effektiv uncacheable macht.

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
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
RTT: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Round-Trip-Zeit in Millisekunden, gerundet auf die nächsten 25 Millisekunden.

## Beispiele

### Verwendung von RTT-Client-Hinweisen

Ein Server muss zunächst zustimmen, den `RTT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header sendet, der `RTT` enthält.

```http
Accept-CH: RTT
```

Dann könnte der Client bei nachfolgenden Anfragen einen `RTT`-Header zurücksenden:

```http
RTT: 125
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("Save-Data")}} Netzwerk-Client-Hinweise
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
