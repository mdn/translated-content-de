---
title: RTT
slug: Web/HTTP/Headers/RTT
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`RTT`** {{Glossary("request_header", "Request-Header")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints), der die ungefähre Rundlaufzeit auf der Anwendungsebene in Millisekunden angibt. Der RTT-Hinweis umfasst die Serververarbeitungszeit, im Gegensatz zur Rundlaufzeit der Transportschicht.

Der RTT-Wert wird auf die nächsten 25 Millisekunden gerundet, um {{Glossary("Fingerprinting", "Fingerprinting")}} zu verhindern, obwohl es viele andere Mechanismen gibt, die ein Angreifer verwenden könnte, um ähnliche Informationen über die Rundlaufzeit zu erhalten.

Der Hinweis erlaubt es einem Server, basierend auf der Netzwerkreaktionsfähigkeit/Latenz zu entscheiden, welche Informationen gesendet werden. Zum Beispiel könnte er entscheiden, weniger Ressourcen zu senden.

> [!NOTE]
> Der {{HTTPHeader("Vary")}}-Header wird in Antworten verwendet, um anzuzeigen, dass eine andere Ressource für jeden anderen Wert des Headers gesendet wird (siehe [HTTP-Caching Vary](/de/docs/Web/HTTP/Caching#vary)). Auch wenn `RTT` verwendet wird, um zu konfigurieren, welche Ressourcen gesendet werden, sollten Sie in Erwägung ziehen, es im {{HTTPHeader("Vary")}}-Header wegzulassen – es ändert sich wahrscheinlich oft, was die Ressource effektiv nicht zwischenspeicherbar macht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
RTT: <number>
```

## Direktiven

- `<number>`
  - : Die ungefähre Rundlaufzeit in Millisekunden, gerundet auf die nächsten 25 Millisekunden.

## Beispiele

### Verwendung von RTT-Client-Hinweisen

Ein Server muss zuerst zustimmen, den `RTT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header mit `RTT` sendet.

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
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
