---
title: Downlink
slug: Web/HTTP/Headers/Downlink
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der **`Downlink`** [Client-Hint](/de/docs/Web/HTTP/Client_hints)-Anforderungsheader-Feld gibt die ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Wert von `Downlink` wird in Mbps angegeben und auf den nächsten 25 Kilobit pro Sekunde gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer verwenden könnte, um ähnliche Informationen zu erhalten.

Dieser Hint ermöglicht es einem Server, basierend auf der Netzwerkbandbreite zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte ein Server wählen, auf Netzwerken mit geringer Bandbreite kleinere Versionen von Bildern und anderen Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass eine andere Ressource für jeden unterschiedlichen Wert des Headers gesendet wird (siehe [HTTP Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, wird empfohlen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es ändert sich wahrscheinlich oft, was die Ressource effektiv nicht zwischenspeicherbar macht.

## Syntax

```http
Downlink: <number>
```

## Direktiven

- \<number>
  - : Die Downlink-Rate in Mbps, gerundet auf die nächsten 25 Kilobit.

## Beispiele

Ein Server muss zuerst zustimmen, den `Downlink`-Header zu empfangen, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} sendet, der `Downlink` enthält.

```http
Accept-CH: Downlink
```

Dann könnte der Client bei nachfolgenden Anfragen einen `Downlink`-Header zurücksenden:

```http
Downlink: 1.7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints

  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
