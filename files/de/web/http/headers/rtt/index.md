---
title: RTT
slug: Web/HTTP/Headers/RTT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der **`RTT`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Anforderungsheader-Feld liefert die ungefähre Round-Trip-Zeit auf Anwendungsebene, in Millisekunden. Der RTT-Hinweis umfasst im Gegensatz zur Transportebene-RTT auch die Serververarbeitungszeit.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der RTT-Wert wird auf die nächsten 25 Millisekunden gerundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer verwenden könnte, um ähnliche Round-Trip-Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server zu entscheiden, welche Informationen basierend auf der Netzwerkreaktionsfähigkeit/Latenz gesendet werden. Beispielsweise könnte er entscheiden, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}} Header wird in Antworten verwendet, um anzuzeigen, dass für jeden anderen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Betracht ziehen, es im {{HTTPHeader("Vary")}} Header wegzulassen - es wird wahrscheinlich oft ändern, was die Ressource im Wesentlichen nicht zwischenspeicherbar macht.

## Syntax

```http
RTT: <number>
```

## Direktiven

- \<number>
  - : Die ungefähre Round-Trip-Zeit in Millisekunden, gerundet auf die nächsten 25 Millisekunden.

## Beispiele

Ein Server muss zunächst zustimmen, den `RTT` Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwortheader sendet, der `RTT` enthält.

```http
Accept-CH: RTT
```

Dann kann der Client bei nachfolgenden Anfragen einen `RTT`-Header zurücksenden:

```http
RTT: 125
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
