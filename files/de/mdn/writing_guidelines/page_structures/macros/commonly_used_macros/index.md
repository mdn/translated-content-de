---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

Diese Seite listet viele der allgemein verwendeten Makros auf, die für den Einsatz auf MDN erstellt wurden. Für allgemeine Anleitungen zur Verwendung von Makros in MDN-Inhalten, siehe [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Verlinkung

MDN bietet eine Reihe von Link-Makros, die die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind. Zum Beispiel muss ein Glossar- oder Referenzlink, der mit einem Makro erstellt wurde, nicht übersetzt werden: In anderen Sprachversionen wird er automatisch auf die richtige Version der Datei verlinken.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) Makro erstellt einen Link zu einem bestimmten Begriff im MDN [Glossar](/de/docs/Glossary). Dieses Makro akzeptiert ein erforderliches und ein optionales Argument:

1. Der Name des Begriffs (z. B. "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}.
2. Optional: Der Text, der im Artikel anstelle des Begriffnamens angezeigt werden soll: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}.

### Verlinkung auf Seiten in Referenzen

Es gibt Makros für die sprachunabhängige Verlinkung auf Seiten in speziellen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG, usw.

Die Makros sind einfach zu benutzen. Minimal müssen Sie nur den Namen des Elements, auf das Sie verlinken möchten, im ersten Argument angeben. Die meisten Makros akzeptieren auch ein zweites Argument, mit dem Sie den Anzeigetext ändern können (Dokumentationen finden Sie unter den Links in der äußersten linken Spalte unten).

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Links zu Seite unter</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/CSS/Reference">CSS-Referenz</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> ergibt {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM-Referenz</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> oder <code>\{{DOMxRef("document")}}</code> ergibt [`Document`](/de/docs/Web/API/Document),<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt [`Node`](/de/docs/Web/API/Node).<br />
        Sie können den Anzeigetext mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements">HTML-Elemente-Referenz</a> (/Web/HTML/Reference/Elements)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> ergibt {{HTMLElement("select")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference">JavaScript-Referenz</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> ergibt {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG-Attribut-Referenz</a> (/Web/SVG/Reference/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> ergibt {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Element">SVG-Element-Referenz</a> (/Web/SVG/Reference/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> ergibt {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP-Header</a> (/Web/HTTP/Reference/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> ergibt {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP-Anfragemethoden</a> (/Web/HTTP/Reference/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> ergibt {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Status">HTTP-Antwortstatuscodes</a> (/Web/HTTP/Reference/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationselemente für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationselemente für Artikel, die Teil von Sequenzen sind. Für die Templates, die nur eine Richtung unterstützen, ist der einzige erforderliche Parameter der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz. Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind die beiden erforderlichen Parameter die Wiki-Standorte der entsprechenden Artikel. Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht das Einbetten der Ausgabe eines Code-Beispiels auf einer Seite, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) erlaubt das Einbetten von Live-Beispielen von GitHub-Seiten. Weitere Informationen finden Sie unter [GitHub Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allzweckformatierung

### Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, in der Regel wenn die Liste von Eigenschaften eines Objekts oder die Parameter einer Funktion beschrieben werden.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Zeigt an, wenn `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Zeigt an…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht standardisiert ist und sich nicht auf einem Standardtrack befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Symbol: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte. Für weitere Informationen zur Definition **experimentell**, siehe die [Experimentell, veraltet, und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Symbol: {{Experimental_Inline}}

### Inline-Indikatoren, die das Angeben der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ({{Deprecated_Inline}}) ein, um die Verwendung einer API zu entmutigen, die offiziell als veraltet gilt (oder entfernt wurde). Für weitere Informationen zur Definition **veraltet**, siehe die [Experimentell, veraltet, und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Symbol: {{Deprecated_Inline}}

### Seiten- oder Abschnitts-Headerindikatoren

Diese Templates haben dieselbe Semantik wie ihre Inline-Gegenstücke, die oben beschrieben wurden. Die Templates sollten direkt unter dem Hauptseitentitel (oder der Brotkrümelnavigation, falls vorhanden) auf der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) wird auf Seiten verwendet, die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren. Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs). Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z. B. `navigator.xyz`) verwendet werden, normalerweise jedoch nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten. Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Angabe, dass ein Feature in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) Makro fügt ein lokalisiertes Hinweisfeld ein, das angibt, dass ein Feature in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Sie können auch einige Argumente übergeben, um anzugeben, dass ein Feature in einem bestimmten Worker-Kontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Makros für Browser-Kompatibilität und Spezifikationen

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden aber auch von allen Seitentypen unterstützt:

- `\{{Compat}}`
  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für die Funktion(en), die durch `browser-compat` im Frontmatter definiert sind.
- `\{{Specifications}}`
  - : Schließt eine [Spezifikationstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) für die Funktion(en) ein, die durch `spec-urls` im Frontmatter definiert sind, falls vorhanden, oder aus der Spezifikation, die in den Browser-Kompatibilitätsdaten definiert ist durch `browser-compat` im Frontmatter.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other): selten verwendete oder veraltete Makros
