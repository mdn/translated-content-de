---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Diese Seite listet viele der allgemein verwendbaren Makros auf, die für die Verwendung auf MDN erstellt wurden.
Für zusätzliche Anleitungen zur Verwendung dieser Makros, siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Siehe [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) für Informationen über Makros, die selten verwendet werden, nur in speziellen Kontexten oder nicht mehr unterstützt werden.

## Verlinkung

MDN bietet eine Reihe von Link-Makros, die das Erstellen von Links zu Referenzseiten, Glossareinträgen und anderen Themen erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Zum Beispiel muss ein Glossar- oder Referenzlink, der mit einem Makro erstellt wurde, nicht übersetzt werden: In anderen Lokalisierungen wird automatisch auf die richtige Version der Datei verlinkt.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)-Makro erstellt einen Link zu einem angegebenen Glossarbegriff im MDN-[Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen Pflichtparameter und einen optionalen Parameter:

1. Den Namen des Begriffs (wie "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der Text, der im Artikel anstelle des Begriffsnamens angezeigt wird: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für sprachunabhängiges Verlinken zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG, usw.

Die Makros sind einfach zu verwenden.
Im einfachsten Fall müssen Sie nur den Namen des Elements, zu dem verlinkt werden soll, im ersten Argument angeben.
Die meisten Makros akzeptieren auch ein zweites Argument, das es Ihnen ermöglicht, den angezeigten Text zu ändern (Dokumentation finden Sie in den Links in der ganz linken Spalte unten).

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Verlinkt zu Seite unter</th>
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
        Sie können den angezeigten Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Element">HTML-Elemente-Referenz</a> (/Web/HTML/Element)
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
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG-Attribut-Referenz</a> (/Web/SVG/Attribute).
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
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG-Elemente-Referenz</a> (/Web/SVG/Element).
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
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP-Header</a> (/Web/HTTP/Headers).
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
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP-Anfragemethoden</a> (/Web/HTTP/Methods).
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
        <a href="/de/docs/Web/HTTP/Reference/Status">HTTP-Antwortstatuscodes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationselemente für Artikel, die Teil von Sequenzen sind.
Für die einseitigen Vorlagen ist nur der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz als Parameter erforderlich.
Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind die zwei Parameter erforderlich, die die Wiki-Standorte der entsprechenden Artikel angeben.
Der erste Parameter ist für den vorherigen Artikel, und der zweite ist für den nächsten Artikel.

## Codebeispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht es Ihnen, die Ausgabe eines Codebeispiels auf einer Seite einzubetten, wie unter [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Codebeispiels auf einer Seite enthält, wie unter [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub-Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allgemeine Formatierungen

### Inline-Indikatoren für API-Dokumentationen

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, normalerweise bei der Beschreibung der Liste von Eigenschaften eines Objekts oder Parametern einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, ob das Objekt, wenn `true`, benutzerdefiniert ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die angibt, dass die API nicht standardisiert ist und sich nicht auf dem Standardisierungspfad befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die angibt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte.
Für weitere Informationen zur Definition von **experimentell** siehe die [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren, die das Angeben der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die darauf hinweist, dass die API offiziell veraltet ist oder entfernt wurde, um die Verwendung zu entmutigen.
Für weitere Informationen zur Definition von **veraltet** siehe die [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Kopfzeilenindikatoren für Seite oder Abschnitt

Diese Vorlagen haben die gleichen Semantiken wie ihre Inline-Gegenstücke, die oben beschrieben wurden.
Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Breadcrumb-Navigation, falls vorhanden) in der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) wird auf Seiten verwendet, die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) verwendet werden, normalerweise aber nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeige, dass eine Funktion in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)-Makro fügt eine lokalisierte Hinweisbox ein, die angibt, dass eine Funktion in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
Sie können auch einige Argumente übergeben, um anzugeben, dass eine Funktion in einem bestimmten Worker-Kontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Browser-Kompatibilität und Spezifikationsmakros

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden aber auch von allen Seitentypen unterstützt:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`

  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das Feature, das als Parameter übergeben wird. Wenn kein Parameter enthalten ist, wird standardmäßig auf die Funktionen verwiesen, die durch `browser-compat` in der Frontmatter definiert sind. Ein optionaler Tiefenparameter legt fest, wie tief die Unterfunktionen in die Tabelle aufgenommen werden sollen. Die Tiefe, falls nicht angegeben, ist standardmäßig auf 1 gesetzt, was bedeutet, dass nur die erste Ebene der Unterfunktionsdaten aus BCD in die Tabelle aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Beinhaltet die Spezifikation für das im Parameter angegebene Feature. Wenn kein Parameter übergeben wird, wird die aufgelistete Spezifikation durch den Wert für `spec-urls` in der Frontmatter definiert, falls vorhanden, oder aus der in den Browser-Kompatibilitätsdaten durch `browser-compat` in der Frontmatter definierten Spezifikation. Die Spezifikation wird als externer Link dargestellt.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Makros für den Funktionsstatus](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
