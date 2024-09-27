---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{HTTPSidebar}}

Der **`Accept-Language`** Request-HTTP-Header gibt die natürliche Sprache und das Gebietsschema an, das der Client bevorzugt. Der Server verwendet die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Language")}} Response-Header. Browser setzen erforderliche Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache. Benutzer können auch zusätzliche bevorzugte Sprachen über die Browsereinstellungen konfigurieren.

Der `Accept-Language` Header listet in der Regel dieselben Gebietsschemata auf wie die [`navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft, mit abnehmenden `q`-Werten (Qualitätswerte). Einige Browser (Chrome und Safari) fügen nur sprachbasierte Fallback-Tags in `Accept-Language` hinzu – zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Reduzierung des [Fingerprinting](/de/docs/Glossary/fingerprinting)) können sowohl `Accept-Language` als auch `navigator.languages` möglicherweise nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie in Safari (immer) und Chromes Inkognito-Modus, wo nur eine Sprache aufgelistet ist.

Dieser Header dient als Hinweis, wenn der Server auf andere Weise die Zielinhaltssprache nicht bestimmen kann (zum Beispiel die Verwendung einer spezifischen URL, die auf einer expliziten Benutzerentscheidung basiert). Der Server sollte niemals eine explizite Benutzersprachauswahl überschreiben. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle des Benutzers (zum Beispiel beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache als der Benutzeroberflächensprache besuchen.

Der Server kann möglicherweise einen {{HTTPStatus("406")}} (Nicht akzeptabel) Fehlercode zurücksenden, wenn er Inhalte nicht in einer entsprechenden Sprache liefern kann. Ein solches Verhalten wird jedoch selten implementiert, um eine bessere Benutzererfahrung zu gewährleisten, und Server ignorieren oft den `Accept-Language` Header in solchen Fällen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-sichere Anfrage-Header](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass Werte nur
        <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, Leerzeichen oder
        <code>*,-.;=</code> sein können.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the quality value syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Direktiven

- `<language>`
  - : Ein Sprach-Tag (das manchmal als "Gebietsschema-Identifikator" bezeichnet wird).
    Dies besteht aus einem 2-3 Buchstaben umfassenden Basis-Sprach-Tag, das eine Sprache angibt, optional gefolgt von zusätzlichen Subtags, die durch `'-'` getrennt sind.
    Die häufigste zusätzliche Information ist die Länder- oder Regionsvariante (wie `'en-US'` oder `'fr-CA'`) oder die Art des Alphabets, das verwendet werden soll (wie `'sr-Latn'`).
    Andere Varianten, wie die Art der Orthographie (`'de-DE-1996'`), werden normalerweise nicht im Kontext dieses Headers verwendet.
- `*`
  - : Jede Sprache; `'*'` wird als Platzhalter verwendet.
- `;q=` (q-Faktor Gewichtung)
  - : Jeder Wert, der nach einer Präferenzreihenfolge geordnet ist, ausgedrückt durch einen relativen [Qualitätswert](/de/docs/Glossary/Quality_values), genannt _Gewicht_.

## Beispiele

```http
Accept-Language: de
```

```http
Accept-Language: de-CH
```

```http
Accept-Language: en-US,en;q=0.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsverhandlung: {{HTTPHeader("Content-Language")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
