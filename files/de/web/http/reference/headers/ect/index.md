---
title: ECT header
short-title: ECT
slug: Web/HTTP/Reference/Headers/ECT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-**`ECT`**-{{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert repräsentiert das "Netzwerkprofil", das am besten zur Latenz und Bandbreite der Verbindung passt, und nicht die tatsächlichen Mechanismen, die für die Datenübertragung verwendet werden. Zum Beispiel könnte `2g` verwendet werden, um eine langsame Wi-Fi-Verbindung mit hoher Latenz und geringer Bandbreite darzustellen, während `4g` ein schnelles, glasfaserbasiertes Breitbandnetz repräsentieren könnte.

Der Hinweis ermöglicht es einem Server, basierend auf den allgemeinen Eigenschaften des Netzwerks zu entscheiden, welche Informationen gesendet werden. Ein Server könnte beispielsweise kleinere Versionen von Bildern und anderen Ressourcen über weniger leistungsfähige Verbindungen senden. Der Wert könnte auch als Ausgangspunkt für die Bestimmung der zu sendenden Informationen verwendet werden, die mit Informationen in {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} weiter verfeinert werden.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} angibt, kann es auch in {{HTTPHeader("Vary")}} spezifizieren, um anzuzeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
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
  - : Ein Wert, der den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} angibt. Kann einer der folgenden Werte sein: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zuerst zustimmen, den `ECT`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header mit `ECT` sendet.

```http
Accept-CH: ECT
```

Dann kann der Client bei nachfolgenden Anfragen einen `ECT`-Header zurücksenden:

```http
ECT: 2g
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise
  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
