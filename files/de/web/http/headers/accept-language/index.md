---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
l10n:
  sourceCommit: 81966038a1fa98727eab416e8e3b91eeabe20a3a
---

{{HTTPSidebar}}

Der **`Accept-Language`** Anforderungs-HTTP-Header gibt an, welche natürliche Sprache und welches Gebietsschema der Client bevorzugt. Der Server verwendet die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um eines der Vorschläge auszuwählen und informiert den Client mit dem {{HTTPHeader("Content-Language")}} Antwort-Header über die Entscheidung. Browser setzen erforderliche Werte für diesen Header entsprechend ihrer aktiven Benutzeroberflächensprache. Benutzer können über die Browsereinstellungen auch zusätzliche bevorzugte Sprachen konfigurieren.

Der `Accept-Language`-Header listet im Allgemeinen dieselben Gebietsschemata auf wie die Eigenschaft {{domxref("navigator.languages")}}, mit abnehmenden `q`-Werten (Qualitätswerte). Einige Browser (Chrome und Safari) fügen in `Accept-Language` sprachbasierte Fallback-Tags hinzu – zum Beispiel `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`, wenn `navigator.languages` `["en-US", "zh-CN"]` ist. Aus Datenschutzgründen (Reduzierung von {{Glossary("fingerprinting")}}) können `Accept-Language` und `navigator.languages` nicht die vollständige Liste der Benutzerpräferenzen enthalten, wie in Safari (immer) und im Inkognitomodus von Chrome, wo nur eine Sprache aufgelistet ist.

Dieser Header dient als Hinweis, wenn der Server die Zielsprache des Inhalts anderweitig nicht bestimmen kann (zum Beispiel bei der Verwendung einer spezifischen URL, die von einer expliziten Benutzerentscheidung abhängt). Der Server sollte niemals eine explizite Benutzer-Sprachauswahl überschreiben. Der Inhalt von `Accept-Language` liegt oft außerhalb der Kontrolle eines Benutzers (zum Beispiel bei Reisen). Ein Benutzer möchte möglicherweise auch eine Seite in einer anderen Sprache als in der Benutzeroberfläche sehen.

Der Server kann möglicherweise einen {{HTTPStatus("406")}} (Nicht akzeptabel) Fehlercode zurücksenden, wenn er Inhalte nicht in einer passenden Sprache bereitstellen kann. Ein solches Verhalten wird jedoch selten implementiert, um ein besseres Benutzererlebnis zu gewährleisten, und Server ignorieren den `Accept-Language`-Header in solchen Fällen häufig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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

## Direktiven

- `<language>`
  - : Ein Sprach-Tag (auch als "Gebietsschema-Identifikator" bezeichnet).
    Dies besteht aus einem 2-3 Buchstaben umfassenden Basis-Sprach-Tag, das eine Sprache angibt, optional gefolgt von zusätzlichen Untertags, die durch `'-'` getrennt sind. Die häufigsten Zusatzinformationen sind die länderspezifische oder regionale Variante (wie `'en-US'` oder `'fr-CA'`) oder die zu verwendende Schriftart (wie `'sr-Latn'`).
    Andere Varianten, wie der Typ der Orthographie (`'de-DE-1996'`), werden im Kontext dieses Headers normalerweise nicht verwendet.
- `*`
  - : Beliebige Sprache; `'*'` wird als Platzhalter verwendet.
- `;q=` (q-Faktor-Gewichtung)
  - : Jeder Wert, der in einer Präferenzreihenfolge angegeben wird, ausgedrückt durch einen relativen {{glossary("Quality values", "Qualitätswert")}} genanntes _Gewicht_.

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

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Language")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
