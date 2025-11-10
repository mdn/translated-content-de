---
title: Accept-Language header
short-title: Accept-Language
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Accept-Language`** {{Glossary("request_header", "Anforderungsheader")}} gibt die natürliche Sprache und das Gebietsschema an, die der Client bevorzugt. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der Vorschläge auszuwählen und teilt dem Client die Auswahl mit dem {{HTTPHeader("Content-Language")}} Antwortheader mit. Browser legen die erforderlichen Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache fest. Benutzer können auch zusätzliche bevorzugte Sprachen über die Browsereinstellungen konfigurieren.

Der `Accept-Language`-Header listet im Allgemeinen die gleichen Gebietsschemas wie die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft auf, mit abnehmenden `q`-Werten ({{Glossary("Quality_values", "Qualitätswerte")}}). Einige Browser, wie Chrome und Safari, fügen im `Accept-Language`-Header Nur-Sprache-Fallback-Tags hinzu. Zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (zur Reduzierung von {{Glossary("fingerprinting", "Fingerprinting")}}) können sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten. Zum Beispiel wird in Safari (immer) und im Chrome-Inkognito-Modus nur eine Sprache aufgelistet.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts nicht anders bestimmen kann (z. B. wenn eine spezifische URL verwendet wird, die von einer expliziten Benutzerentscheidung abhängt). Der Server sollte niemals eine explizite Sprachauswahl des Benutzers außer Kraft setzen. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle des Benutzers (z. B. beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache besuchen als der Sprache der Benutzeroberfläche.

Der Server kann einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehlercode zurücksenden, wenn er den Inhalt in keiner passenden Sprache bereitstellen kann, aber dies wird selten implementiert. Server ignorieren oft den `Accept-Language`-Header in solchen Fällen und senden stattdessen eine erfolgreiche Antwort mit der am besten geeigneten Ressource für ein besseres Benutzererlebnis.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte können nur `0-9`, `A-Z`, `a-z`, Leerzeichen oder die Zeichen `*,-.;=` sein.

## Syntax

```http
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the quality value syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Direktiven

- `<language>`
  - : Ein Sprach-Tag (manchmal als "Gebietsschema-Bezeichner" bezeichnet). Dies besteht aus einem 2-3 Buchstaben umfassenden Basis-Sprach-Tag, das eine Sprache angibt, gefolgt von optionalen zusätzlichen Untertags, die durch `-` getrennt sind. Die häufigsten zusätzlichen Informationen sind die Länder- oder Regionsvarianten (wie `en-US` oder `fr-CA`) oder die Art des verwendeten Alphabets (wie `sr-Latn`). Andere Varianten, wie der Typ der Orthographie (`de-DE-1996`), werden im Kontext dieses Headers normalerweise nicht verwendet.
- `*` (Wildcard)
  - : Jede Sprache, die von keiner anderen im `Accept-Language`-Feld vorhandenen Sprache abgedeckt wird.
- `;q=` (q-Faktor-Gewichtung)
  - : Jeder Wert, der in einer Reihenfolge der Präferenz mittels eines relativen {{Glossary("Quality_values", "Qualitätswertes")}} ausgedrückt wird, wird als _Gewichtung_ bezeichnet. Der Qualitätswert hat standardmäßig `1`.

## Beispiele

### Verwendung von Accept-Language-Headern

Die folgende Anfrage hat eine Präferenz für Deutsch, indem die Basissprache `de` verwendet wird:

```http
Accept-Language: de
```

### Verwendung von Qualitätswerten in Accept-Language

Die folgende Anfrage zeigt eine stärkere Präferenz für Dänisch an, akzeptiert aber Britisches Englisch und andere Arten von Englisch mit niedrigerer Priorität:

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Language")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
