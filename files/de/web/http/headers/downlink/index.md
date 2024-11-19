---
title: Downlink
slug: Web/HTTP/Headers/Downlink
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-**`Downlink`**-{{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Client_hints) verwendet, um die ungefähre Bandbreite in Mbps der Verbindung des Clients mit dem Server bereitzustellen.

Der Hinweis ermöglicht es einem Server auszuwählen, welche Informationen basierend auf der Netzwerkbandbreite gesendet werden.
Zum Beispiel könnte ein Server entscheiden, kleinere Versionen von Bildern und anderen Ressourcen auf Netzwerken mit niedriger Bandbreite zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)).
> Selbst wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie erwägen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es ändert sich wahrscheinlich häufig, was die Ressource effektiv nicht cachebar macht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Downlink: <number>
```

## Direktiven

- `<number>`
  - : Die Downlink-Rate in Mbps, aufgerundet auf die nächsten 25 Kilobit.
    Die Downlink-Rate kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header bewusst grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Ein Server muss sich zunächst dafür entscheiden, den `Downlink`-Header zu empfangen, indem der {{HTTPHeader("Accept-CH")}}-Antwort-Header, der `Downlink` enthält, gesendet wird.

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

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
