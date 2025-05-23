---
title: Downlink header
short-title: Downlink
slug: Web/HTTP/Reference/Headers/Downlink
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`Downlink`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um die ungefähre Bandbreite in Mbit/s der Verbindung des Clients zum Server bereitzustellen.

Der Hinweis ermöglicht es einem Server zu entscheiden, welche Informationen basierend auf der Netzwerkbandbreite gesendet werden.
Beispielsweise könnte ein Server kleinere Versionen von Bildern und anderen Ressourcen auf Netzwerken mit geringer Bandbreite senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass eine andere Ressource für jeden unterschiedlichen Wert des Headers gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Guides/Caching#vary)).
> Selbst wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Erwägung ziehen, ihn im {{HTTPHeader("Vary")}}-Header wegzulassen – er ändert sich wahrscheinlich oft, was die Ressource effektiv von der Zwischenspeicherung ausschließt.

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

## Direktiven

- `<number>`
  - : Die Downlink-Rate in Mbit/s, gerundet auf die nächsten 25 Kilobit.
    Die Downlink-Rate kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob, um das Potenzial für Missbrauch zu reduzieren.

## Beispiele

Ein Server muss zuerst zustimmen, den `Downlink`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header sendet, der `Downlink` enthält.

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

- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
