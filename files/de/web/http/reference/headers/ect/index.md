---
title: ECT
slug: Web/HTTP/Reference/Headers/ECT
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`ECT`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert repräsentiert das "Netzwerkprofil", das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt die tatsächlichen Mechanismen zu verwenden, die für die Datenübertragung benutzt werden. Zum Beispiel könnte `2g` verwendet werden, um eine langsame Wi-Fi-Verbindung mit hoher Latenz und geringer Bandbreite zu repräsentieren, während `4g` ein schnelles, auf Glasfaser basierendes Breitbandnetzwerk darstellen könnte.

Der Hinweis ermöglicht es einem Server, basierend auf den allgemeinen Eigenschaften des Netzwerks zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte ein Server kleinere Versionen von Bildern und anderen Ressourcen auf weniger leistungsfähigen Verbindungen senden. Der Wert könnte auch als Ausgangspunkt verwendet werden, um zu bestimmen, welche Informationen gesendet werden, was durch Informationen in den {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} Hinweisen weiter verfeinert wird.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} angibt, kann es auch in {{HTTPHeader("Vary")}} angeben, um anzuzeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
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
  - : Ein Wert, der den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} angibt. Kann einer der folgenden sein: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zunächst zustimmen, den `ECT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header mit `ECT` sendet.

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

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
