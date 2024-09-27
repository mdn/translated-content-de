---
title: RTT
slug: Web/HTTP/Headers/RTT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`RTT`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Request-Header-Feld liefert die ungefähre Round-Trip-Zeit in der Anwendungsschicht, gemessen in Millisekunden. Der RTT-Hinweis schließt im Gegensatz zu `RTT` auf der Transportschicht die Serververarbeitungszeit ein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der RTT-Wert wird auf die nächste 25-Millisekunden-Stufe gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer nutzen könnte, um ähnliche Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server auszuwählen, welche Informationen basierend auf der Netzwerk-Reaktionsfähigkeit/-Latenz gesendet werden. Zum Beispiel könnte er entscheiden, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzugeben, dass eine andere Ressource für jeden unterschiedlichen Wert des Headers gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie es im {{HTTPHeader("Vary")}}-Header weglassen — es wird wahrscheinlich häufig ändern, was die Ressource effektiv uncachebar macht.

## Syntax

```http
RTT: <number>
```

## Direktiven

- \<number>
  - : Die ungefähre Round-Trip-Zeit in Millisekunden, gerundet auf die nächste 25-Millisekunden-Stufe.

## Beispiele

Ein Server muss zuerst dafür optieren, den `RTT`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header mit `RTT` sendet.

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

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
