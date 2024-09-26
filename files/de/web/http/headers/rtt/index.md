---
title: RTT
slug: Web/HTTP/Headers/RTT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`RTT`** [Client-Hinweis](/de/docs/Web/HTTP/Client_hints) Request-Header-Feld liefert die ungefähre Rundlaufzeit auf Anwendungsebene in Millisekunden. Im Gegensatz zur Transportlayer-RTT beinhaltet der RTT-Hinweis auch die Serververarbeitungszeit.

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

Der RTT-Wert wird auf die nächsten 25 Millisekunden gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer nutzen könnte, um ähnliche Informationen über die Rundlaufzeit zu erhalten.

Der Hinweis ermöglicht einem Server, basierend auf der Netzwerkreaktionsfähigkeit/-latenz zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte er wählen, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass eine andere Ressource für jeden unterschiedlichen Wert des Headers gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, erwägen Sie, ihn im {{HTTPHeader("Vary")}}-Header auszulassen — es ist wahrscheinlich, dass er sich häufig ändert, was die Ressource effektiv nicht cachefähig macht.

## Syntax

```http
RTT: <number>
```

## Direktiven

- \<number>
  - : Die ungefähre Rundlaufzeit in Millisekunden, gerundet auf die nächsten 25 Millisekunden.

## Beispiele

Ein Server muss zuerst zustimmen, den `RTT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header mit `RTT` sendet.

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

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
