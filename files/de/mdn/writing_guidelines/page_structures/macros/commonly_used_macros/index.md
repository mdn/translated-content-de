---
title: Allgemein genutzte Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 7819249f906dcfc59a2c4cb702b80a35b7964842
---

Diese Seite listet viele der allgemein verwendbaren Makros auf, die für die Nutzung auf MDN erstellt wurden.
Für allgemeine Anleitungen zur Nutzung dieser Makros in MDN-Inhalten siehe [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Verlinkung

MDN bietet eine Reihe von Link-Makros an, um die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Zum Beispiel muss ein Glossar- oder Referenzlink, der mit einem Makro erstellt wurde, nicht übersetzt werden: In anderen Sprachvarianten wird automatisch auf die richtige Version der Datei verlinkt.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) Makro erstellt einen Link zu einem bestimmten Begriffseintrag im MDN [Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen Parameter und einen optionalen Parameter:

1. Der Name des Begriffs (zum Beispiel "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der im Artikel angezeigte Text anstelle des Begriffnamens: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für sprachunabhängiges Verlinken zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG usw.

Die Makros sind einfach zu benutzen.
Minimal müssen Sie nur den Namen des Elements, zu dem Sie verlinken möchten, im ersten Argument angeben.
Die meisten Makros akzeptieren auch ein zweites Argument, mit dem Sie den Anzeige-Text ändern können (Dokumentation dazu finden Sie unter den Links in der linken Spalte unten).

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
        <a href="/de/docs/Web/CSS/Reference">CSS Reference</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> ergibt {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM Reference</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> oder <code>\{{DOMxRef("document")}}</code> ergibt [`Document`](/de/docs/Web/API/Document),<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt [`Node`](/de/docs/Web/API/Node).<br />
        Sie können den Anzeige-Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements">HTML-Elemente Referenz</a> (/Web/HTML/Reference/Elements)
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
        <a href="/de/docs/Web/JavaScript/Reference">JavaScript Reference</a> (/Web/JavaScript/Reference).
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
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG Attributreferenz</a> (/Web/SVG/Reference/Attribute).
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
        <a href="/de/docs/Web/SVG/Reference/Element">SVG-Element Referenz</a> (/Web/SVG/Reference/Element).
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
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP Header</a> (/Web/HTTP/Reference/Headers).
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
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP Anfragemethoden</a> (/Web/HTTP/Reference/Methods).
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
        <a href="/de/docs/Web/HTTP/Reference/Status">HTTP Antwortstatuscodes</a> (/Web/HTTP/Reference/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationskontrollen für Artikel, die Teil einer Serie sind.
Für die einseitigen Templates ist der einzige benötigte Parameter der Wiki-Standort des vorherigen oder nächsten Artikels in der Serie.
Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind die beiden benötigten Parameter die Wiki-Standorte der entsprechenden Artikel.
Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht das Einbetten des Outputs eines Code-Beispiels auf einer Seite, wie beschrieben in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die den Output eines Code-Beispiels auf einer Seite enthält, wie beschrieben in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) erlaubt das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, üblicherweise bei der Beschreibung der Liste von Eigenschaften eines Objekts oder der Parameter einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, wenn `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht-standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht standardisiert ist und sich nicht auf einem Standardpfad befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte.
Für weitere Informationen zur Definition **experimentell** siehe die [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren, die die Angabe der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen zu einem als veraltet markierten API ein ({{Deprecated_Inline}}), um die Nutzung einer API zu entmutigen, die offiziell als veraltet (oder entfernt) eingestuft wurde.
Für mehr Informationen zur Definition **veraltet** siehe die [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Seiten- oder Abschnittsheader-Indikatoren

Diese Templates haben die gleiche Semantik wie ihre Inline-Gegenstücke, die oben beschrieben wurden.
Die Templates sollten direkt unter dem Hauptseitentitel (oder der Breadcrumb-Navigation, falls verfügbar) auf der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) wird auf Seiten verwendet,
  die [experimentelle Features](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Sollte auf Hauptseiten wie Interface-Seiten, API-Übersichtsseiten und API-Einstiegspunkten (z. B. `navigator.xyz`) verwendet werden, aber normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeige, dass ein Feature in Web Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) Makro fügt eine lokalisierte Hinweisbox ein, die anzeigt, dass ein Feature in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
Sie können auch einige Argumente übergeben, um anzugeben, dass ein Feature in einem bestimmten Workerkontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Browser-Kompatibilität und Spezifikations-Makros

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden aber auch von allen Seitentypen unterstützt:

- `\{{Compat}}`
  - : Erstellt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das/die von `browser-compat` im Frontmatter definierte(n) Feature(s).
- `\{{Specifications}}`
  - : Enthält eine [Spezifikationstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) für das/die von `spec-urls` im Frontmatter definierte(n) Feature(s), falls vorhanden, oder aus der Spezifikation, die in den Browser-Kompatibilitätsdaten aufgeführt ist, die durch `browser-compat` im Frontmatter definiert sind.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other): selten genutzte oder veraltete Makros
