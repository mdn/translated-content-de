---
title: RTT
slug: Web/HTTP/Reference/Headers/RTT
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`RTT`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint für das Netzwerk](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die ungefähre Round-Trip-Zeit auf der Anwendungsschicht in Millisekunden bereitstellt. Der RTT-Hint umfasst die Serververarbeitungszeit, im Gegensatz zur RTT der Transportschicht.

Der RTT-Wert wird auf die nächsten 25 Millisekunden gerundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu verhindern, obwohl ein Angreifer viele andere Möglichkeiten haben könnte, um ähnliche Round-Trip-Informationen zu erhalten.

Dieser Hinweispunkt erlaubt es einem Server, auszuwählen, welche Informationen basierend auf der Netzwerkreaktionsfähigkeit/Latenz gesendet werden. Beispielsweise könnte er beschließen, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzugeben, dass für jeden verschiedenen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Guides/Caching#vary)). Selbst wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie erwägen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es ändert sich wahrscheinlich häufig, was effektiv die Ressource nicht cachefähig macht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
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

### Verwendung von RTT-Client-Hints

Ein Server muss zunächst zustimmen, den `RTT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet, der `RTT` enthält.

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

- {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("Save-Data")}} Netzwerk-Client-Hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
