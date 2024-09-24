---
title: ECT
slug: Web/HTTP/Headers/ECT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`ECT`**-Headerfeld des [Client Hinweises](/de/docs/Web/HTTP/Client_hints) zeigt den {{Glossary("effective connection type")}} an: `slow-2g`, `2g`, `3g`, `4g`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Wert repräsentiert das "Network Profile", das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt der tatsächlich verwendeten Mechanismen zur Datenübertragung. Zum Beispiel könnte `2g` verwendet werden, um eine langsame Wi-Fi-Verbindung mit hoher Latenz und niedriger Bandbreite darzustellen, während `4g` eine schnelle, glasfaserbasierte Breitbandverbindung darstellen könnte.

Der Hinweis erlaubt es einem Server, basierend auf den allgemeinen Eigenschaften des Netzwerks auszuwählen, welche Informationen gesendet werden. Zum Beispiel könnte ein Server wählen, kleinere Versionen von Bildern und anderen Ressourcen bei weniger leistungsfähigen Verbindungen zu senden. Der Wert könnte auch als Ausgangspunkt dienen, um zu bestimmen, welche Informationen gesendet werden, die dann mit Informationen in den Hinweisen {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} weiter verfeinert werden.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} spezifiert, kann es auch in {{HTTPHeader("Vary")}} angeben, um zu zeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollen.

## Syntax

```http
ECT: <value>
```

## Direktiven

- \<value>
  - : Ein Wert, der den {{Glossary("effective connection type")}} angibt. Dies ist einer der folgenden: `slow-2g`, `2g`, `3g` oder `4g`.

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

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
