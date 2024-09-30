---
title: ECT
slug: Web/HTTP/Headers/ECT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der **`ECT`** [Client-Hinweis](/de/docs/Web/HTTP/Client_hints) Anforderungsheader gibt den [effektiven Verbindungstyp](/de/docs/Glossary/effective_connection_type) an: `slow-2g`, `2g`, `3g`, `4g`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungsheader](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Wert repräsentiert das "Netzwerkprofil", das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt der tatsächlichen Mechanismen, die für die Datenübertragung verwendet werden. Zum Beispiel könnte `2g` verwendet werden, um eine langsame Wi-Fi-Verbindung mit hoher Latenz und niedriger Bandbreite darzustellen, während `4g` verwendet werden könnte, um ein schnelles Glasfaser-Breitbandnetz darzustellen.

Der Hinweis ermöglicht es einem Server, auszuwählen, welche Informationen basierend auf den allgemeinen Eigenschaften des Netzwerks gesendet werden. Zum Beispiel könnte ein Server kleinere Versionen von Bildern und anderen Ressourcen bei weniger leistungsfähigen Verbindungen senden. Der Wert könnte auch als Ausgangspunkt verwendet werden, um zu bestimmen, welche Informationen gesendet werden, und wird dann weiter verfeinert durch Informationen in den {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} Hinweisen.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} angibt, kann auch {{HTTPHeader("Vary")}} spezifizieren, um darauf hinzuweisen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollen.

## Syntax

```http
ECT: <value>
```

## Direktiven

- \<value>
  - : Ein Wert, der den [effektiven Verbindungstyp](/de/docs/Glossary/effective_connection_type) angibt. Dies ist einer von: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zunächst optieren, den `ECT`-Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet, der `ECT` enthält.

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

- [Verbesserung des Benutzerdatenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerkclient-Hinweise

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
