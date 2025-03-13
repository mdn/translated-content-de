---
title: Downlink
slug: Web/HTTP/Reference/Headers/Downlink
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`Downlink`** {{Glossary("request_header", "Anforderungsheader")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um die ungefähre Bandbreite in Mbps der Verbindung des Clients zum Server bereitzustellen.

Der Hinweis ermöglicht es einem Server, basierend auf der Netzwerkbandbreite auszuwählen, welche Informationen gesendet werden.
Ein Server könnte beispielsweise auf Netzwerken mit geringer Bandbreite kleinere Versionen von Bildern und anderen Ressourcen senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Guides/Caching#vary)).
> Selbst wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, ziehen Sie in Betracht, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es wird wahrscheinlich häufig ändern, was die Ressource effektiv uncachebar macht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Die Downlink-Geschwindigkeit in Mbps, auf die nächsten 25 Kilobits gerundet.
    Die Downlink-Geschwindigkeit kann als Variable zum {{Glossary("fingerprinting", "Fingerprinting")}} verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Ein Server muss zuerst zustimmen, den `Downlink`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header sendet, der `Downlink` enthält.

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

- [Verbesserung der Benutzer-Privatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
