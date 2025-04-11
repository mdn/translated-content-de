---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Diese Seite listet viele der allgemeinen Makros auf, die für die Verwendung auf MDN erstellt wurden.
Für zusätzliche Anleitungen zur Verwendung dieser Makros siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Weitere Informationen zu Makros, die selten verwendet werden, nur in speziellen Kontexten verwendet werden oder veraltet sind, finden Sie unter [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN bietet eine Reihe von Link-Makros, um die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Ein mit einem Makro erstellter Glossar- oder Referenzlink muss beispielsweise nicht übersetzt werden: In anderen Gebietsschemas wird er automatisch auf die richtige Version der Datei verlinkt.

### Glossareinträge

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) Makro erstellt einen Link zu einem bestimmten Begriffseintrag im MDN-[Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (wie "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der Text, der im Artikel anstelle des Begriffnamens angezeigt werden soll: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für gebietsschemaunabhängiges Verlinken zu Seiten in speziellen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG usw.

Die Makros sind einfach zu verwenden.
Im Mindesten müssen Sie im ersten Argument den Namen des zu verlinkenden Elements angeben.
Die meisten Makros akzeptieren auch ein zweites Argument, das es Ihnen ermöglicht, den angezeigten Text zu ändern (Dokumentation finden Sie in den Links in der linken Spalte unten).

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Verlinkt zur Seite unter</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/CSS/Reference">CSS Referenz</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> ergibt {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM Referenz</a> (/Web/API)</td>
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
        <a href="/de/docs/Web/HTML/Reference/Elements">HTML-Elemente-Referenz</a> (/Web/HTML/Element)
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

### Navigationselemente für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationskontrollen für Artikel, die Teil von Sequenzen sind.
Für die einseitigen Vorlagen ist der einzige benötigte Parameter der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz.
Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind die beiden benötigten Parameter die Wiki-Standorte der entsprechenden Artikel.
Der erste Parameter ist für den vorherigen Artikel, der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht Ihnen, die Ausgabe eines Code-Beispiels auf einer Seite einzubetten, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) erlaubt das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub-Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allgemeine Formatierungen

### Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, in der Regel beim Beschreiben der Liste der Eigenschaften eines Objekts oder der Parameter einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Zeigt an, wenn `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{Optional_Inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht standardisiert ist und sich nicht auf einem Standardisierungspfad befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Ikone: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern kann.
Weitere Informationen zur Definition **experimentell**, siehe die [Experimentell, veraltet und überholt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Ikone: {{Experimental_Inline}}

### Inline-Indikatoren, die das Spezifizieren der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen für Veraltung ({{Deprecated_Inline}}) ein, um die Nutzung einer offiziell veralteten (oder entfernten) API zu entmutigen.
Weitere Informationen zur Definition **veraltet**, siehe die [Experimentell, veraltet und überholt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Ikone: {{Deprecated_Inline}}

### Seitentitel- oder Abschnittsüberschrift-Indikatoren

Diese Vorlagen haben dieselbe Semantik wie ihre obigen Inline-Pendants.
Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Breadcrumb-Navigation, falls verfügbar) in der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs), verwendet auf Seiten,
  die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) verwendet werden, jedoch normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Hinweis, dass eine Funktion in Webworkern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) Makro fügt eine lokalisierte Notiz ein, die anzeigt, dass eine Funktion in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
Sie können auch einige Argumente übergeben, um anzuzeigen, dass eine Funktion in einem bestimmten Worker-Kontext funktioniert.

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

  - : Erstellt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für die als Parameter übergebene Funktion. Wenn kein Parameter enthalten ist, wird auf die in der Frontmatter unter `browser-compat` definierten Funktionen zurückgegriffen. Ein optionaler Tiefenparameter bestimmt, wie tief untergeordnete Funktionen zur Tabelle hinzugefügt werden sollen. Die Tiefe wird, falls nicht angegeben, auf 1 gesetzt, d.h. nur die erste Ebene der untergeordneten Funktionsdaten aus BCD wird eingeschlossen.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Schließt die Spezifikation für die im Parameter angegebene Funktion ein. Wenn kein Parameter übergeben wird, wird die in der Frontmatter unter `spec-urls` angegebene Spezifikation verwendet, falls vorhanden, oder aus der in den Browser-Kompatibilitätsdaten unter `browser-compat` definierten Spezifikation. Die Spezifikation wird als externer Link angezeigt.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
