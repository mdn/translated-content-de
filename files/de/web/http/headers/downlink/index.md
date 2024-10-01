---
title: Downlink
slug: Web/HTTP/Headers/Downlink
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der **`Downlink`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Request-Header-Feld gibt die ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der `Downlink`-Wert wird in Mbps angegeben und auf die nächsten 25 Kilobits pro Sekunde gerundet, um {{Glossary("Fingerprinting", "Fingerabdrücke")}} zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer nutzen könnte, um ähnliche Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server, basierend auf der Netzwerkbandbreite zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte ein Server kleinere Versionen von Bildern und anderen Ressourcen auf Netzwerken mit niedriger Bandbreite senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzugeben, dass eine andere Ressource für jeden anderen Wert des Headers gesendet wird (siehe [HTTP Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Betracht ziehen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — geändert sich wahrscheinlich oft, was die Ressource effektiv uncacheable macht.

## Syntax

```http
Downlink: <number>
```

## Direktiven

- \<number>
  - : Die Downlink-Geschwindigkeit in Mbps, gerundet auf die nächsten 25 Kilobits.

## Beispiele

Ein Server muss sich zunächst entscheiden, den `Downlink`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Response-Header mit `Downlink` sendet.

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

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints

  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
