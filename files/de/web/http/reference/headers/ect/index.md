---
title: ECT header
short-title: ECT
slug: Web/HTTP/Reference/Headers/ECT
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{SeeCompatTable}}

Der HTTP **`ECT`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effective connection type")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert repräsentiert das „Netzwerkprofil“, das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt der tatsächlichen Mechanismen, die für die Datenübertragung genutzt werden. Zum Beispiel kann `2g` verwendet werden, um eine langsame Wi-Fi-Verbindung mit hoher Latenz und niedriger Bandbreite darzustellen, während `4g` ein schnelles, faserbasiertes Breitbandnetzwerk repräsentieren könnte.

Der Hinweis erlaubt es einem Server, zu entscheiden, welche Informationen basierend auf den allgemeinen Eigenschaften des Netzwerks gesendet werden. Beispielsweise könnte ein Server entscheiden, kleinere Versionen von Bildern und anderen Ressourcen über weniger leistungsfähige Verbindungen zu senden. Der Wert könnte auch als Ausgangspunkt verwendet werden, um zu bestimmen, welche Informationen gesendet werden, und wird dann durch Informationen in {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} Hinweisen weiter verfeinert.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} spezifiziert, kann es auch in {{HTTPHeader("Vary")}} angeben, um zu kennzeichnen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client hint</a>
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
  - : Ein Wert, der den {{Glossary("effective_connection_type", "effective connection type")}} angibt. Kann einer der folgenden sein: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zuerst den Empfang des `ECT` Headers durch das Senden des {{HTTPHeader("Accept-CH")}} Response-Headers, der `ECT` enthält, aktivieren.

```http
Accept-CH: ECT
```

Dann könnte der Client bei nachfolgenden Anfragen einen `ECT` Header zurücksenden:

```http
ECT: 2g
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk Client Hints
  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
