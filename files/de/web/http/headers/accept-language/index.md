---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Accept-Language`** {{Glossary("request_header", "Request-Header")}} gibt die natürliche Sprache und das Gebietsschema an, das der Client bevorzugt. Der Server verwendet die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über die Auswahl mit dem {{HTTPHeader("Content-Language")}} Antwort-Header. Browser setzen erforderliche Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache. Benutzer können auch zusätzliche bevorzugte Sprachen über die Browsereinstellungen konfigurieren.

Der Header `Accept-Language` listet im Allgemeinen dieselben Gebietsschemas auf wie die Eigenschaft [`navigator.languages`](/de/docs/Web/API/Navigator/languages), mit abnehmenden `q`-Werten ({{Glossary("Quality_values", "Qualitätswerte")}}). Einige Browser, wie Chrome und Safari, fügen im `Accept-Language` Header Fallback-Tags nur für Sprachen hinzu. Zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (zur Reduzierung des {{Glossary("fingerprinting", "Fingerprints")}}) kann es sein, dass `Accept-Language` und `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten. Zum Beispiel wird in Safari (immer) und im Inkognito-Modus von Chrome nur eine Sprache aufgelistet.

Dieser Header dient als Hinweis, wenn der Server die Zielinhaltsprache nicht anderweitig bestimmen kann (zum Beispiel durch die Nutzung einer bestimmten URL, die von einer ausdrücklichen Benutzerentscheidung abhängt). Der Server sollte niemals eine explizite Benutzerwahl der Sprache überschreiben. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache als der Benutzerschnittstellensprache besuchen.

Der Server kann einen {{HTTPStatus("406", "406 Not Acceptable")}} Fehlercode zurücksenden, wenn er Inhalte nicht in einer passenden Sprache bereitstellen kann, aber dies wird selten implementiert. Server ignorieren oft den `Accept-Language` Header in solchen Fällen und senden stattdessen eine erfolgreiche Antwort mit der passendsten Ressource für eine bessere Benutzererfahrung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesafelisteter Request-Header")}}
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
  - : Ein Sprach-Tag (welches manchmal als "Gebietsschema-Identifier" bezeichnet wird). Dies besteht aus einem 2-3 Buchstaben umfassenden Basissprach-Tag, der eine Sprache angibt, optional gefolgt von zusätzlichen Subtags, getrennt durch `-`. Die häufigsten zusätzlichen Informationen sind die Länder- oder Regionsvariante (wie `en-US` oder `fr-CA`) oder der zu verwendende Alphabet-Typ (wie `sr-Latn`). Andere Varianten, wie der Typ der Orthografie (`de-DE-1996`), werden im Kontext dieses Headers normalerweise nicht verwendet.
- `*` (Wildcard)
  - : Jede Sprache, die nicht mit einer anderen im `Accept-Language`-Feld vorhandenen Sprache übereinstimmt.
- `;q=` (q-Faktor Gewichtung)
  - : Jeder Wert, der in einer Reihenfolge der Präferenz zum Ausdruck kommt, durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}} namens _Gewicht_. Der Qualitätswert ist standardmäßig `1`.

## Beispiele

### Verwenden von Accept-Language-Headers

Folgende Anfrage bevorzugt Deutsch mit der Basissprache `de`:

```http
Accept-Language: de
```

### Verwenden von Qualitätswerten in Accept-Language

Die folgende Anfrage zeigt eine stärkere Präferenz für Dänisch an, akzeptiert aber Britisches Englisch und andere Arten von Englisch mit geringerer Priorität:

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Language")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
