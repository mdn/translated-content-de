---
title: Downlink
slug: Web/HTTP/Headers/Downlink
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`Downlink`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Request-Header-Feld gibt die ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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

Der Wert von `Downlink` wird in Mbps angegeben und auf die nächsten 25 Kilobits pro Sekunde gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu vermeiden. Es gibt viele andere Mechanismen, die ein Angreifer verwenden könnte, um ähnliche Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server, zu entscheiden, welche Informationen basierend auf der Netzwerkbandbreite gesendet werden. Beispielsweise könnte ein Server kleinere Versionen von Bildern und anderen Ressourcen auf Netzwerken mit geringer Bandbreite senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}} Header wird in Antworten verwendet, um anzugeben, dass eine andere Ressource für jeden anderen Wert des Headers gesendet wird (siehe [HTTP Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, verzichten Sie darauf, es im {{HTTPHeader("Vary")}} Header anzugeben – es wird wahrscheinlich häufig ändern, was die Ressource de facto nicht cachebar macht.

## Syntax

```http
Downlink: <number>
```

## Anweisungen

- \<number>
  - : Die Downlink-Rate in Mbps, gerundet auf die nächsten 25 Kilobits.

## Beispiele

Ein Server muss zuerst die Zustimmung erhalten, den `Downlink` Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet, der `Downlink` enthält.

```http
Accept-CH: Downlink
```

Dann könnte der Client bei nachfolgenden Anfragen einen `Downlink` Header zurücksenden:

```http
Downlink: 1.7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints

  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
