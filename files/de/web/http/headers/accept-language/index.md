---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{HTTPSidebar}}

Der **`Accept-Language`** Request-HTTP-Header gibt die natürliche Sprache und das Gebietsschema an, die der Client bevorzugt. Der Server verwendet die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Language")}} Response-Header. Browser setzen die erforderlichen Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache. Benutzer können auch zusätzliche bevorzugte Sprachen über die Browsereinstellungen konfigurieren.

Der `Accept-Language` Header listet im Allgemeinen die gleichen Gebietsschemata auf wie die [`navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft, mit abnehmenden `q`-Werten (Qualitätswerten). Einige Browser (Chrome und Safari) fügen sprachlich-only Fallback-Tags im `Accept-Language` hinzu—zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (zur Reduzierung des {{Glossary("fingerprinting", "Fingerprinting")}}) kann es vorkommen, dass sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie zum Beispiel in Safari (immer) und im Inkognito-Modus von Chrome, wo nur eine Sprache aufgelistet ist.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts nicht anderweitig bestimmen kann (z. B. durch die Verwendung einer spezifischen URL, die auf einer expliziten Benutzerentscheidung basiert). Der Server sollte niemals eine explizite Sprachauswahl des Benutzers überschreiben. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache besuchen als der Sprache der Benutzeroberfläche.

Der Server kann möglicherweise einen {{HTTPStatus("406")}} (Nicht akzeptabel) Fehlercode senden, wenn er den Inhalt nicht in einer passenden Sprache bereitstellen kann. Ein solches Verhalten wird jedoch selten implementiert, um eine bessere Benutzererfahrung zu gewährleisten, und Server ignorieren in solchen Fällen oft den `Accept-Language` Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
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
  - : Ein Sprach-Tag (manchmal als "Locale-Identifier" bezeichnet).
    Dies besteht aus einem 2-3 Buchstaben umfassenden Basis-Sprach-Tag, das eine Sprache angibt, und optional gefolgt von zusätzlichen Untertags, getrennt durch `'-'`.
    Die häufigsten zusätzlichen Informationen sind die Länder- oder Regionsvariante (wie `'en-US'` oder `'fr-CA'`) oder die Art des zu verwendenden Alphabets (wie `'sr-Latn'`).
    Andere Varianten, wie der Orthographie-Typ (`'de-DE-1996'`), werden normalerweise nicht im Kontext dieses Headers verwendet.
- `*`
  - : Jede Sprache; `'*'` wird als Platzhalter verwendet.
- `;q=` (q-Faktor-Gewichtung)
  - : Jeder Wert in einer Präferenzreihenfolge ausgedrückt durch einen relativen {{Glossary("Quality_values", "Qualitätswert")}} namens Gewichtung.

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
