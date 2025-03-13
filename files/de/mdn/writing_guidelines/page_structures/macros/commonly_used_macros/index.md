---
title: Allgemein verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Diese Seite listet viele der universell einsetzbaren Makros auf, die für die Nutzung auf MDN erstellt wurden. Für zusätzliche Anleitungen zur Verwendung dieser Makros siehe [Verwenden von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Informationen zu Makros, die selten verwendet werden, nur in speziellen Kontexten eingesetzt werden oder veraltet sind, finden Sie unter [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN bietet eine Reihe von Link-Makros, um die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind. Beispielsweise muss ein Glossar- oder Referenzlink, der mithilfe eines Makros erstellt wurde, nicht übersetzt werden: In anderen Sprachen wird er automatisch auf die korrekte Version der Datei verlinken.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)-Makro erstellt einen Link zum Eintrag eines angegebenen Begriffs im MDN-[Glossar](/de/docs/Glossary). Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (zum Beispiel "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der anzuzeigende Text im Artikel anstelle des Begriffsnamens: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für ortsunabhängige Verlinkung zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG, etc.

Die Makros sind einfach zu verwenden. Minimal müssen Sie lediglich den Namen des Elements angeben, auf das verlinkt werden soll, als erstes Argument. Die meisten Makros akzeptieren auch ein zweites Argument, das Ihnen ermöglicht, den angezeigten Text zu ändern (Dokumentation dazu finden Sie in den Links in der linken Spalte unten).

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
        Sie können den angezeigten Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Element">HTML Elements reference</a> (/Web/HTML/Element)
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
        <a href="/de/docs/Web/JavaScript/Reference">JavaScript reference</a> (/Web/JavaScript/Reference).
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
        <a href="/de/docs/Web/SVG/Attribute">SVG attribute reference</a> (/Web/SVG/Attribute).
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
        <a href="/de/docs/Web/SVG/Attribute">SVG Element reference</a> (/Web/SVG/Element).
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
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP headers</a> (/Web/HTTP/Headers).
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
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP request methods</a> (/Web/HTTP/Methods).
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
        <a href="/de/docs/Web/HTTP/Reference/Status">HTTP response status codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationssteuerungen für Artikel, die Teil von Sequenzen sind. Für die einseitigen Vorlagen ist nur der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz erforderlich. Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind die beiden Parameter die Wiki-Standorte der entsprechenden Artikel. Der erste Parameter ist für den vorherigen Artikel, und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht das Einbetten der Ausgabe eines Codebeispiels auf einer Seite, wie unter [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Codebeispiels enthält, wie unter [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten. Weitere Informationen finden Sie unter [GitHub Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, normalerweise wenn die Liste der Eigenschaften eines Objekts oder Parameter einer Funktion beschrieben werden.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, ob `true` das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht standardisiert ist und sich nicht auf dem Weg zur Standardisierung befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Symbol: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern kann. Weitere Informationen zur Definition **experimentell** finden Sie in der Dokumentation [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Symbol: {{Experimental_Inline}}

### Inline-Indikatoren, die die Technologie spezifizieren unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt ein Inline-Zeichen für veraltet ein ({{Deprecated_Inline}}), um den Gebrauch einer offiziell veralteten (oder entfernten) API zu vermeiden. Weitere Informationen zur Definition **veraltet** finden Sie in der Dokumentation [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Symbol: {{Deprecated_Inline}}

### Kopfzeilen-Indikatoren für Seite oder Abschnitt

Diese Vorlagen haben dieselbe Semantik wie ihre oben beschriebenen Inline-Gegenstücke. Die Vorlagen sollten direkt unter dem Haupttitel der Seite (oder der Brotkrümelnavigation, falls verfügbar) in der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs), verwendet auf Seiten, die [experimentelle Features](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren. Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs). Soll auf Hauptseiten wie Interface-Seiten, API-Übersichtsseiten und API-Einstiegspunkten verwendet werden (z. B. `navigator.xyz`), normalerweise aber nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten. Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeigen, dass ein Feature in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)-Makro fügt eine lokalisierte Notizbox ein, die anzeigt, dass ein Feature in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Sie können auch einige Argumente übergeben, um anzuzeigen, dass ein Feature in einem bestimmten Worker-Kontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Makros für Browser-Kompatibilität und Spezifikation

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden aber auch von allen Seitentypen unterstützt:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`

  - : Erzeugt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das übergebene Feature als Parameter. Wenn kein Parameter enthalten ist, wird auf die in der Frontmatter definierten Features zurückgegriffen, die durch `browser-compat` angegeben werden. Ein optionaler Tiefenparameter legt fest, wie tief untergeordnete Features zur Tabelle hinzugefügt werden sollen. Die Tiefe, wenn weggelassen, ist standardmäßig 1, was bedeutet, dass nur die erste Ebene der Unterfeature-Daten aus BCD in die Tabelle aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Beinhaltet die Spezifikation für das im Parameter angegebene Feature. Wenn kein Parameter übergeben wird, wird die Spezifikation auf Grundlage des Wertes für `spec-urls` in der Frontmatter aufgelistet, wenn vorhanden, oder aus der in den Browser-Kompatibilitätsdaten definierten Spezifikation, die durch `browser-compat` in der Frontmatter festgelegt wird. Die Spezifikation wird als externer Link angezeigt.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
