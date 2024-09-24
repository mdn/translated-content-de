---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{HTTPSidebar}}

Der **`Accept-Language`** HTTP-Anforderungsheader gibt die natürliche Sprache und das Gebietsschema an, die der Client bevorzugt. Der Server verwendet [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen, und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Language")}} Antwortheader. Browser setzen die erforderlichen Werte für diesen Header basierend auf ihrer aktiven Benutzeroberflächensprache. Benutzer können auch zusätzliche bevorzugte Sprachen über die Browsereinstellungen konfigurieren.

Der `Accept-Language` Header listet in der Regel die gleichen Gebietsschemata wie die {{domxref("navigator.languages")}} Eigenschaft, mit abnehmenden `q` Werten (Qualitätswerten) auf. Einige Browser (Chrome und Safari) fügen in `Accept-Language` sprachspezifische Fallback-Tags hinzu – zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Reduzierung von {{Glossary("fingerprinting")}}) können sowohl `Accept-Language` als auch `navigator.languages` nicht die vollständige Liste der Benutzervorlieben enthalten, wie in Safari (immer) und dem Inkognito-Modus von Chrome, wo nur eine Sprache aufgelistet wird.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts nicht anderweitig bestimmen kann (zum Beispiel die Verwendung einer spezifischen URL, die von einer expliziten Benutzerentscheidung abhängt). Der Server sollte niemals eine explizite Sprachauswahl des Benutzers überschreiben. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel beim Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache besuchen als der Sprache der Benutzeroberfläche.

Der Server kann möglicherweise einen {{HTTPStatus("406")}} (Not Acceptable) Fehlercode zurücksenden, wenn kein Inhalt in einer passenden Sprache bereitgestellt werden kann. Solches Verhalten wird jedoch selten implementiert, um eine bessere Benutzererfahrung zu gewährleisten, und Server ignorieren oft den `Accept-Language` Header in solchen Fällen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
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

// Mehrere Typen, gewichtet mit der Qualitätswert-Syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Anweisungen

- `<language>`
  - : Ein Sprach-Tag (manchmal auch als "Gebietsschema-Identifikator" bezeichnet).
    Dies besteht aus einem 2- bis 3-Buchstaben-Basis-Sprachtag, der eine Sprache angibt, optional gefolgt von zusätzlichen Untertags, die durch `'-'` getrennt sind.
    Die häufigsten zusätzlichen Informationen sind die Länder- oder Regionsvariante (wie `'en-US'` oder `'fr-CA'`) oder die Art des zu verwendenden Alphabets (wie `'sr-Latn'`).
    Andere Varianten, wie die Art der Orthographie (`'de-DE-1996'`), werden im Kontext dieses Headers normalerweise nicht verwendet.
- `*`
  - : Jede Sprache; `'*'` wird als Platzhalter verwendet.
- `;q=` (q-Faktor Gewichtung)
  - : Jeder Wert in einer Reihenfolge der Präferenz, ausgedrückt durch einen relativen {{glossary("Quality values", "Qualitätswert")}}, genannt _Gewicht_.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Language")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
