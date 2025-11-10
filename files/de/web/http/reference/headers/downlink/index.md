---
title: Downlink header
short-title: Downlink
slug: Web/HTTP/Reference/Headers/Downlink
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP **`Downlink`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um die ungefähre Bandbreite in Mbps der Verbindung des Clients zum Server bereitzustellen.

Der Hinweis erlaubt einem Server zu entscheiden, welche Informationen basierend auf der Netzwerkbandbreite gesendet werden. Zum Beispiel könnte ein Server wählen, kleinere Versionen von Bildern und anderen Ressourcen bei Netzwerken mit niedriger Bandbreite zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzugeben, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Guides/Caching#vary)).
> Auch wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Betracht ziehen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es wird wahrscheinlich oft geändert, was die Ressource effektiv uncachebar macht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Downlink: <number>
```

## Anweisungen

- `<number>`
  - : Die Downlink-Rate in Mbps, gerundet auf die nächsten 25 Kilobit.
    Die Downlink-Rate kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu verringern.

## Beispiele

Ein Server muss zuerst zustimmen, den `Downlink`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet, der `Downlink` enthält.

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
