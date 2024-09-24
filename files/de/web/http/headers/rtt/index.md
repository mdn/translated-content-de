---
title: RTT
slug: Web/HTTP/Headers/RTT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`RTT`** [Client-Hinweis](/de/docs/Web/HTTP/Client_hints) Anforderungsheader-Feld liefert die ungefähre Round-Trip-Zeit auf der Anwendungsebene, in Millisekunden. Der RTT-Hinweis umfasst im Gegensatz zu RTT auf der Transportschicht auch die Server-Verarbeitungszeit.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der RTT-Wert wird auf die nächsten 25 Millisekunden gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer nutzen könnte, um ähnliche Round-Trip-Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server, auszuwählen, welche Informationen basierend auf der Netzwerkreaktionsfähigkeit/-latenz gesendet werden. Zum Beispiel könnte er sich entscheiden, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}} Header wird in Antworten verwendet, um anzuzeigen, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, ziehen Sie in Betracht, es im {{HTTPHeader("Vary")}} Header wegzulassen — es wird sich wahrscheinlich oft ändern, was die Ressource effektiv nicht cache-fähig macht.

## Syntax

```http
RTT: <number>
```

## Direktiven

- \<number>
  - : Die ungefähre Round-Trip-Zeit in Millisekunden, gerundet auf die nächsten 25 Millisekunden.

## Beispiele

Ein Server muss zunächst zustimmen, den `RTT` Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Antwortheader sendet, der `RTT` enthält.

```http
Accept-CH: RTT
```

Dann kann der Client bei nachfolgenden Anfragen einen `RTT` Header zurücksenden:

```http
RTT: 125
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
