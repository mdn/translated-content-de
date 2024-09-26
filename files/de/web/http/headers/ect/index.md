---
title: ECT
slug: Web/HTTP/Headers/ECT
l10n:
  sourceCommit: 39a279d15a7680f13476f87c2a496add830ef586
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das **`ECT`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Request-Header-Feld zeigt den {{Glossary("effective connection type")}} an: `slow-2g`, `2g`, `3g`, `4g`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Wert repräsentiert das "Netzwerkprofil", das am besten zur Latenz und Bandbreite der Verbindung passt, anstatt der tatsächlichen Mechanismen, die für die Datenübertragung verwendet werden. Beispielsweise könnte `2g` verwendet werden, um eine langsame WLAN-Verbindung mit hoher Latenz und niedriger Bandbreite darzustellen, während `4g` eine schnelle Glasfaser-basierte Breitbandverbindung repräsentieren könnte.

Der Hinweis ermöglicht es einem Server, basierend auf den allgemeinen Charakteristika des Netzwerks zu entscheiden, welche Informationen gesendet werden. Beispielsweise könnte ein Server auf weniger leistungsfähigen Verbindungen kleinere Versionen von Bildern und anderen Ressourcen senden. Der Wert könnte auch als Ausgangspunkt für die Bestimmung der zu sendenden Informationen verwendet werden, die mit Informationen in den Hinweisen {{HTTPHeader("RTT")}} und {{HTTPHeader("Downlink")}} weiter verfeinert werden.

> [!NOTE]
> Ein Server, der `ECT` in {{HTTPHeader("Accept-CH")}} spezifiziert, kann auch `ECT` in {{HTTPHeader("Vary")}} angeben, um anzuzeigen, dass Antworten für verschiedene ECT-Werte zwischengespeichert werden sollen.

## Syntax

```http
ECT: <value>
```

## Anweisungen

- \<value>
  - : Ein Wert, der den {{Glossary("effective connection type")}} angibt. Einer der folgenden: `slow-2g`, `2g`, `3g` oder `4g`.

## Beispiele

Ein Server muss zuerst zustimmen, den `ECT` Header zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Response-Header, der `ECT` enthält, sendet.

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

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Netzwerk-Client-Hints

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
