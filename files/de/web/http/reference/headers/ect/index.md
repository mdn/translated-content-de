---
title: ECT header
short-title: ECT
slug: Web/HTTP/Reference/Headers/ECT
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`ECT`** {{Glossary("request_header", "Anforderungsheader")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert stellt das "Netzwerkprofil" dar, das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt der tatsächlich verwendeten Mechanismen für die Datenübertragung. Zum Beispiel könnte `2g` verwendet werden, um eine langsame WLAN-Verbindung mit hoher Latenz und niedriger Bandbreite darzustellen, während `4g` ein schnelles, glasfaserbasiertes Breitbandnetzwerk repräsentiert.

Der Hinweis erlaubt es einem Server auszuwählen, welche Informationen basierend auf den allgemeinen Merkmalen des Netzwerks gesendet werden. Beispielsweise könnte ein Server auf weniger leistungsfähigen Verbindungen kleinere Versionen von Bildern und anderen Ressourcen senden. Der Wert könnte auch als Ausgangspunkt verwendet werden, um zu bestimmen, welche Informationen gesendet werden, die dann weiter verfeinert werden mithilfe von Informationen in {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} Hinweisen.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} angibt, kann es auch in {{HTTPHeader("Vary")}} angeben, um anzuzeigen, dass Antworten für unterschiedliche ECT-Werte zwischengespeichert werden sollen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

Ein Server muss zuerst zustimmen, den `ECT`-Header zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Antwortheader mit `ECT` sendet.

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

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
