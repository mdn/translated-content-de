---
title: Accept-Language header
short-title: Accept-Language
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Accept-Language`** {{Glossary("request_header", "Anforderungsheader")}} gibt die natürliche Sprache und das Gebietsschema an, das der Client bevorzugt. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um eines der Vorschläge auszuwählen und teilt dem Client die Wahl über den {{HTTPHeader("Content-Language")}} Antwort-Header mit. Browser setzen die erforderlichen Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache. Benutzer können auch zusätzliche bevorzugte Sprachen über die Browsereinstellungen konfigurieren.

Der `Accept-Language`-Header listet im Allgemeinen dieselben Gebietsschemas auf wie die [`navigator.languages`](/de/docs/Web/API/Navigator/languages)-Eigenschaft, mit abnehmenden `q`-Werten ({{Glossary("Quality_values", "Qualitätswerte")}}). Einige Browser, wie Chrome und Safari, fügen Sprache-allein-Fallback-Tags in `Accept-Language` hinzu. Zum Beispiel: `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (zur Reduzierung des {{Glossary("fingerprinting", "Fingerabdrucks")}}) können sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten. Zum Beispiel wird in Safari (immer) und dem Inkognito-Modus von Chrome nur eine Sprache aufgelistet.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts nicht anderweitig bestimmen kann (zum Beispiel durch die Nutzung einer spezifischen URL, die auf einer expliziten Benutzerentscheidung basiert). Der Server sollte niemals eine explizite Benutzer-Sprachauswahl überschreiben. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache als der Benutzeroberflächen-Sprache besuchen.

Der Server kann einen {{HTTPStatus("406", "406 Not Acceptable")}}-Fehlercode zurückgeben, wenn er Inhalt nicht in einer passenden Sprache bereitstellen kann, aber dies wird selten implementiert. Server ignorieren in solchen Fällen oft den `Accept-Language`-Header und senden stattdessen eine erfolgreiche Antwort mit der am besten geeigneten Ressource für eine bessere Benutzererfahrung.

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
  - : Ein Sprach-Tag (das manchmal als "Gebietsschema-Bezeichner" bezeichnet wird). Dies besteht aus einem 2-3 Buchstaben umfassenden Basis-Sprach-Tag, das eine Sprache angibt, gefolgt von optionalen zusätzlichen Subtags, die durch `-` getrennt sind. Die häufigste zusätzliche Information ist die Landes- oder Regionenvariante (wie `en-US` oder `fr-CA`) oder die Art des zu verwendenden Alphabets (wie `sr-Latn`). Andere Varianten, wie der Typ der Orthografie (`de-DE-1996`), werden in diesem Header-Kontext üblicherweise nicht verwendet.
- `*` (Platzhalter)
  - : Jede Sprache, die durch keine andere Sprache im `Accept-Language`-Feld übereinstimmt.
- `;q=` (q-Wert Gewichtung)
  - : Jeder Wert, der in einer Präferenzreihenfolge ausgedrückt wird, unter Verwendung eines relativen {{Glossary("Quality_values", "Qualitätswertes")}}, genannt _Gewicht_. Der Qualitätswert standardmäßig ist `1`.

## Beispiele

### Verwendung von Accept-Language-Headern

Die folgende Anfrage hat eine Präferenz für Deutsch mit dem Basis-Sprach-Tag `de`:

```http
Accept-Language: de
```

### Verwendung von Qualitätswerten in Accept-Language

Die folgende Anfrage zeigt eine stärkere Präferenz für Dänisch an, aber akzeptiert Britisches Englisch und andere Arten von Englisch mit einer niedrigeren Priorität:

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
