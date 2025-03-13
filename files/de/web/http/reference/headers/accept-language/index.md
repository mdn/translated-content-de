---
title: Accept-Language
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Accept-Language`** {{Glossary("request_header", "Anforderungsheader")}} gibt die natürliche Sprache und das Gebietsschema an, das der Client bevorzugt. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client mit dem {{HTTPHeader("Content-Language")}} Antwortheader über die Auswahl. Browser setzen die erforderlichen Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache. Benutzer können über die Browsereinstellungen auch zusätzliche bevorzugte Sprachen konfigurieren.

Der `Accept-Language` Header listet im Allgemeinen dieselben Gebietsschemata auf wie die [`navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft, mit abnehmenden `q` Werten ({{Glossary("Quality_values", "Qualitätswerte")}}). Einige Browser, wie Chrome und Safari, fügen in `Accept-Language` fallback Tags nur für die Sprache hinzu. Zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Verringerung der {{Glossary("fingerprinting", "Fingerprinting")}}) können sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten. Zum Beispiel wird in Safari (immer) und im Inkognito-Modus von Chrome nur eine Sprache aufgelistet.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts nicht anders bestimmen kann (zum Beispiel eine spezifische URL verwenden, die von einer expliziten Benutzerentscheidung abhängt). Der Server sollte niemals eine explizite Benutzerwahl der Sprache übergehen. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache als der der Benutzeroberfläche besuchen.

Der Server kann einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehlercode zurückgeben, wenn es nicht möglich ist, Inhalte in einer passenden Sprache bereitzustellen, aber dies wird selten implementiert. Server ignorieren häufig den `Accept-Language` Header in solchen Fällen und senden stattdessen eine erfolgreiche Antwort mit der am besten geeigneten Ressource, um eine bessere Benutzererfahrung zu bieten.

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
        {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteter Anforderungsheader")}}
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
  - : Ein Sprach-Tag (auch als "Locale-Identifikator" bezeichnet).
    Dies besteht aus einem 2-3 Buchstaben umfassenden Basis-Sprach-Tag, der eine Sprache angibt, gefolgt von optionalen Subtags, die durch `-` getrennt sind.
    Die am häufigsten verwendeten zusätzlichen Informationen sind das Länder- oder Regionsvariante (wie `en-US` oder `fr-CA`) oder die Art des zu verwendenden Alphabets (wie `sr-Latn`).
    Andere Varianten, wie die Art der Orthographie (`de-DE-1996`), werden normalerweise nicht im Kontext dieses Headers verwendet.
- `*` (Wildcard)
  - : Jede Sprache, die nicht durch andere im `Accept-Language`-Feld vorhandene Sprachen abgedeckt ist.
- `;q=` (q-Faktor Gewichtung)
  - : Jeder Wert wird in einer Präferenzreihenfolge ausgedrückt, die anhand eines relativen {{Glossary("Quality_values", "Qualitätswerts")}} gewichtet wird, der als _Gewicht_ bezeichnet wird.
    Der Qualitätswert beträgt standardmäßig `1`.

## Beispiele

### Verwendung von Accept-Language-Headern

Der folgende Antrag hat eine Präferenz für Deutsch unter Verwendung des `de` Grundsprache:

```http
Accept-Language: de
```

### Verwendung von Qualitätswerten in Accept-Language

Der folgende Antrag zeigt eine stärkere Präferenz für Dänisch, akzeptiert jedoch britisches Englisch und andere Arten von Englisch mit einer geringeren Priorität:

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
