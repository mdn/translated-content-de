---
title: ECT
slug: Web/HTTP/Headers/ECT
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`ECT`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert repräsentiert das "Netzwerkprofil", das am besten zur Latenz und Bandbreite der Verbindung passt, und nicht die tatsächlichen Mechanismen, die zum Übertragen der Daten verwendet werden.
Zum Beispiel kann `2g` verwendet werden, um eine langsame WLAN-Verbindung mit hoher Latenz und niedriger Bandbreite darzustellen, während `4g` ein schnelles, faserbasiertes Breitbandnetzwerk darstellen könnte.

Der Hinweis ermöglicht es einem Server, basierend auf den allgemeinen Netzwerkmerkmalen zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte ein Server sich entscheiden, kleinere Versionen von Bildern und anderen Ressourcen auf weniger fähigen Verbindungen zu senden. Der Wert kann auch als Ausgangspunkt verwendet werden, um zu bestimmen, welche Informationen gesendet werden, wobei dies durch Informationen in den Hinweisen {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} weiter verfeinert wird.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} angibt, kann es auch in {{HTTPHeader("Vary")}} spezifizieren, um anzuzeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollten.

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
ECT: <value>
```

## Direktiven

- `<value>`
  - : Ein Wert, der den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} angibt. Kann einer der folgenden sein: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zuerst zustimmen, den `ECT`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, der `ECT` enthält.

```http
Accept-CH: ECT
```

Dann könnte der Client bei nachfolgenden Anfragen einen `ECT`-Header zurücksenden:

```http
ECT: 2g
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
