---
title: Downlink
slug: Web/HTTP/Headers/Downlink
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`Downlink`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Request-Header-Feld gibt die ungefähre Bandbreite der Verbindung des Clients zum Server in Mbit/s an.

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

Der `Downlink`-Wert wird in Mbit/s angegeben und auf die nächsten 25 Kilobit pro Sekunde gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern. Es gibt viele andere Mechanismen, die ein Angreifer verwenden könnte, um ähnliche Informationen zu erhalten.

Der Hint erlaubt es einem Server, basierend auf der Netzwerkbandbreite auszuwählen, welche Informationen gesendet werden. Beispielsweise könnte ein Server auf Netzwerken mit geringer Bandbreite kleinere Versionen von Bildern und anderen Ressourcen senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass eine andere Ressource für jeden unterschiedlichen Wert des Headers gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Selbst wenn `Downlink` genutzt wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Betracht ziehen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es wird sich wahrscheinlich oft ändern, was die Ressource effektiv unveränderlich macht.

## Syntax

```http
Downlink: <number>
```

## Direktiven

- \<number>
  - : Die Downlink-Rate in Mbit/s, auf die nächsten 25 Kilobit gerundet.

## Beispiele

Ein Server muss zuerst zustimmen, den `Downlink`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header mit `Downlink` sendet.

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

- [Verbesserung von Benutzer-Datenschutz und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints

  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
