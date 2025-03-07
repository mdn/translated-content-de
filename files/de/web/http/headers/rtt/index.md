---
title: RTT
slug: Web/HTTP/Headers/RTT
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`RTT`** [Anforderungsheader](/de/docs/Glossary/request_header) ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints), der die ungefähre Round-Trip-Zeit auf der Anwendungsebene in Millisekunden angibt. Der `RTT`-Hinweis beinhaltet die Serververarbeitungszeit, im Gegensatz zur Round-Trip-Zeit der Transportschicht.

Der `RTT`-Wert wird auf die nächsten 25 Millisekunden gerundet, um [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu verhindern, obwohl es viele andere Mechanismen gibt, die ein Angreifer nutzen könnte, um ähnliche Round-Trip-Informationen zu erhalten.

Der Hinweis ermöglicht es einem Server zu entscheiden, welche Informationen basierend auf der Netzwerkreaktionszeit/-latenz gesendet werden. Zum Beispiel könnte er entscheiden, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass für jeden unterschiedlichen Wert des Headers eine andere Ressource gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollte man erwägen, es im {{HTTPHeader("Vary")}}-Header wegzulassen — es ist wahrscheinlich, dass es sich oft ändert, was effektiv macht, dass die Ressource nicht zwischengespeichert werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungsheader](/de-DE/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Anforderungsheader](/de-DE/docs/Glossary/Forbidden_request_header)</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
RTT: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Round-Trip-Zeit in Millisekunden, gerundet auf die nächsten 25 Millisekunden.

## Beispiele

### Verwendung von RTT-Client-Hinweisen

Ein Server muss zuerst zustimmen, den `RTT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet, der `RTT` enthält.

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

- {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("Save-Data")}} Netzwerk-Client-Hinweise
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
