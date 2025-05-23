---
title: ECT header
short-title: ECT
slug: Web/HTTP/Reference/Headers/ECT
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP **`ECT`** {{Glossary("request_header", "Request-Header")}} wird in [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) verwendet, um den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} anzugeben: `slow-2g`, `2g`, `3g` oder `4g`.

Der Wert repräsentiert das "Netzwerkprofil", das die Latenz und Bandbreite der Verbindung am besten beschreibt, anstatt der tatsächlichen Mechanismen, die zum Übertragen der Daten verwendet werden.
Zum Beispiel könnte `2g` eine langsame WLAN-Verbindung mit hoher Latenz und niedriger Bandbreite darstellen, während `4g` ein schnelles glasfaserbasiertes Breitbandnetzwerk repräsentieren könnte.

Der Hinweis ermöglicht es einem Server, basierend auf den breiten Charakteristiken des Netzwerks zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte ein Server sich entscheiden, kleinere Versionen von Bildern und anderen Ressourcen bei weniger leistungsfähigen Verbindungen zu senden. Der Wert könnte auch als Ausgangspunkt verwendet werden, um zu bestimmen, welche Informationen gesendet werden, was durch Informationen in {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} Hinweisen weiter verfeinert wird.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} spezifiziert, kann es auch in {{HTTPHeader("Vary")}} angeben, um anzuzeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollten.

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
  - : Ein Wert, der den {{Glossary("effective_connection_type", "effektiven Verbindungstyp")}} angibt. Kann einer der folgenden sein: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zuerst optieren, um den `ECT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header mit `ECT` sendet.

```http
Accept-CH: ECT
```

Dann könnte der Client in nachfolgenden Anfragen einen `ECT`-Header zurücksenden:

```http
ECT: 2g
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
