---
title: ECT
slug: Web/HTTP/Headers/ECT
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-**`ECT`**-{{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert repräsentiert das "Netzwerkprofil", das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt die tatsächlichen Mechanismen, die zum Übertragen der Daten verwendet werden. Zum Beispiel könnte `2g` verwendet werden, um eine langsame WLAN-Verbindung mit hoher Latenz und niedriger Bandbreite zu repräsentieren, während `4g` ein schnelles, faserbasiertes Breitbandnetzwerk repräsentieren könnte.

Dieser Hinweis ermöglicht es einem Server auszuwählen, welche Informationen basierend auf den allgemeinen Eigenschaften des Netzwerks gesendet werden. Beispielsweise könnte ein Server sich entscheiden, kleinere Versionen von Bildern und anderen Ressourcen über weniger fähige Verbindungen zu senden. Der Wert könnte auch als Ausgangspunkt dafür verwendet werden, zu bestimmen, welche Informationen gesendet werden, was weiter verfeinert wird mit Informationen in den Hinweisen {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}}.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} angibt, kann es auch in {{HTTPHeader("Vary")}} angeben, um anzuzeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollten.

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
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Ein Wert, der den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzeigt. Kann einer der folgenden sein: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zunächst zustimmen, den `ECT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader mit `ECT` sendet.

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

- [Verbesserung des Benutzerdatenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
