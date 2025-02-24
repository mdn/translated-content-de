---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Accept-Language`** {{Glossary("request_header", "Anforderungsheader")}} gibt die natürliche Sprache und das Gebietsschema an, die der Client bevorzugt. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um eines der vorgeschlagenen Formate auszuwählen und teilt dem Client die Wahl mit dem Antwort-Header {{HTTPHeader("Content-Language")}} mit. Browser legen die erforderlichen Werte für diesen Header entsprechend der aktiven Benutzeroberflächensprache fest. Benutzer können über die Browsereinstellungen auch zusätzliche bevorzugte Sprachen konfigurieren.

Der `Accept-Language`-Header listet im Allgemeinen dieselben Gebietsschemata wie die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft auf, mit abnehmenden `q`-Werten ({{Glossary("Quality_values", "Qualitätswerte")}}). Einige Browser wie Chrome und Safari fügen im `Accept-Language`-Header fallback-Tags nur für die Sprache hinzu. Zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Reduzierung des {{Glossary("fingerprinting", "Fingerabdrucks")}}) können sowohl `Accept-Language` als auch `navigator.languages` möglicherweise nicht die vollständige Liste der Benutzerpräferenzen enthalten. Zum Beispiel wird in Safari (immer) und im Inkognitomodus von Chrome nur eine Sprache aufgeführt.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts nicht anderweitig bestimmen kann (zum Beispiel über eine spezifische URL, die von einer expliziten Benutzerentscheidung abhängt). Der Server sollte niemals eine explizite Benutzerwahl der Sprache übergehen. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel während einer Reise). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache als der Benutzeroberflächensprache besuchen.

Der Server kann einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehlercode zurücksenden, wenn er den Inhalt nicht in einer passenden Sprache bereitstellen kann, aber dies wird selten implementiert. Server ignorieren oft den `Accept-Language`-Header in solchen Fällen und senden stattdessen eine erfolgreiche Antwort mit der am besten geeigneten Ressource für eine bessere Benutzererfahrung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelist Anforderungsheader")}}
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
  - : Ein Sprach-Tag (manchmal als "Locale-Identifier" bezeichnet). Dieser besteht aus einem 2-3 Buchstaben umfassenden Basissprach-Tag, der eine Sprache angibt, gefolgt von optionalen zusätzlichen Untertags, die durch `-` getrennt sind. Die häufigsten zusätzlichen Informationen sind die Landes- oder Regionalvariante (wie `en-US` oder `fr-CA`) oder der zu verwendende Alphabetstyp (wie `sr-Latn`). Andere Varianten, wie der Typ der Orthographie (`de-DE-1996`), werden normalerweise im Kontext dieses Headers nicht verwendet.
- `*` (Wildcard)
  - : Jede Sprache, die durch keine andere Sprache im `Accept-Language`-Feld übereinstimmt.
- `;q=` (q-Faktor-Gewichtung)
  - : Jeder Wert, der in einer Präferenzordnung durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}} namens _Gewicht_ ausgedrückt wird. Der Qualitätswert ist standardmäßig `1`.

## Beispiele

### Verwendung von Accept-Language-Headern

Die folgende Anfrage hat eine Präferenz für Deutsch mit dem Basissprach-Tag `de`:

```http
Accept-Language: de
```

### Verwendung von Qualitätswerten in Accept-Language

Die folgende Anfrage zeigt eine stärkere Präferenz für Dänisch, akzeptiert jedoch Britisches Englisch und andere Arten von Englisch mit einer niedrigeren Priorität:

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Language")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
