---
title: Downlink
slug: Web/HTTP/Headers/Downlink
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`Downlink`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Client_hints) verwendet, um die ungefähre Bandbreite in Mbps der Verbindung des Clients zum Server anzugeben.

Dieser Hinweis ermöglicht es dem Server, auszuwählen, welche Informationen basierend auf der Netzwerkbandbreite gesendet werden. Zum Beispiel könnte ein Server bei Netzen mit niedriger Bandbreite kleinere Versionen von Bildern und anderen Ressourcen senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}} Header wird in Antworten verwendet, um anzugeben, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)).
> Auch wenn `Downlink` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Betracht ziehen, es im {{HTTPHeader("Vary")}} Header wegzulassen — es ändert sich wahrscheinlich häufig, was die Ressource effektiv nicht zwischenspeicherbar macht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
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
  - : Die Downlink-Geschwindigkeit in Mbps, gerundet auf die nächsten 25 Kilobit.
    Die Downlink-Geschwindigkeit kann als {{Glossary("fingerprinting", "Fingerprinting")}}-Variable verwendet werden, daher sind die Werte für den Header absichtlich grob gehalten, um das Potenzial für Missbrauch zu reduzieren.

## Beispiele

Ein Server muss zuerst zustimmen, den `Downlink` Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header mit `Downlink` sendet.

```http
Accept-CH: Downlink
```

Bei nachfolgenden Anfragen könnte der Client dann einen `Downlink` Header zurücksenden:

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
