---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

Diese Seite listet viele der allgemein einsetzbaren Makros auf, die das MDN-Buildsystem [rari](https://github.com/mdn/rari) zur Verwendung auf MDN bereitstellt.
Für allgemeine Anleitungen zur Nutzung dieser Makros in MDN-Inhalten, siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Verlinken

MDN bietet eine Reihe von Link-Makros an, um das Erstellen von Links zu Glossareinträgen, Referenzseiten und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Zum Beispiel muss ein Glossar- oder Referenzlink, der mit einem Makro erstellt wurde, nicht übersetzt werden: In anderen Sprachversionen wird er automatisch auf die korrekte Version der Datei verlinkt.

Diese Makros werden auch detaillierter auf der Seite [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links) behandelt.

### Verlinken zu Glossarbegriffen

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) Makro erstellt einen Link zur Seite des angegebenen Begriffs im [MDN Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen Parameter und einen optionalen Parameter.

- Der Begriff ist ein erforderlicher Parameter. Zum Beispiel, um zur Glossarseite für "HTML" zu verlinken, wird das Makro `\{{Glossary("HTML")}}` sein, und dies wird den Link {{Glossary("HTML", "HTML")}} erzeugen.
- Der Anzeigetext ist ein optionaler Parameter. Zum Beispiel können Sie den Link im vorherigen Beispiel als `\{{Glossary("HTML", "HyperText Markup Language")}}` schreiben, was den Link {{Glossary("HTML", "HyperText Markup Language")}} erzeugen wird.

### Verlinken zu Referenzseiten

Es gibt Makros für sprachunabhängiges Verlinken zu Seiten in spezifischen Referenzbereichen von MDN, einschließlich HTML, CSS, JavaScript, SVG und HTTP.

Die Makros sind einfach zu verwenden.
Alles, was Sie tun müssen, ist den Namen des zu verlinkenden Elements als ersten Parameter anzugeben.
Ähnlich wie beim Glossar-Makro akzeptieren die meisten Referenz-Makros auch einen zweiten Parameter, um Ihnen die Möglichkeit zu geben, den Anzeigetext zu ändern.

Details finden Sie in den verlinkten Quelldateien in der ersten Spalte der folgenden Tabelle.

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Links zu Seiten unter</th>
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
        <code>\{{CSSxRef("cursor")}}</code> ergibt {{CSSxRef("cursor")}}.<br />
        <code>\{{CSSxRef(":hover")}}</code> ergibt {{CSSxRef(":hover")}}.<br />
        <code>\{{CSSxRef("@media")}}</code> ergibt {{CSSxRef("@media")}}.<br />
        <code>\{{CSSxRef("pow")}}</code> ergibt {{CSSxRef("pow")}}.<br /><br />
        Details finden Sie unter <a href="/de/docs/MDN/Writing_guidelines/Page_structures/Links#using_cssxref_with_the_css_reference">Verwendung von <code>CSSxRef</code> mit der CSS-Referenz</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM-Referenz</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("document")}}</code> ergibt [`Document`](/de/docs/Web/API/Document).<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt [`Node`](/de/docs/Web/API/Node).<br />
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
        <code>\{{HTMLElement("select")}}</code> ergibt {{HTMLElement("select")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/de/docs/Web/JavaScript/Reference">JavaScript-Referenz</a> (/Web/JavaScript/Reference)
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> ergibt {{JSxRef("Promise")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG-Attribut-Referenz</a> (/Web/SVG/Reference/Attribute)
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> ergibt {{SVGAttr("d")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Element">SVG-Elemente-Referenz</a> (/Web/SVG/Reference/Element)
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> ergibt {{SVGElement("view")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP-Header</a> (/Web/HTTP/Reference/Headers)
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> ergibt {{HTTPHeader("ACCEPT")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP-Anforderungsmethoden</a> (/Web/HTTP/Reference/Methods)
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> ergibt {{HTTPMethod("HEAD")}}.
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
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}.
      </td>
    </tr>
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden hinzufügen

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makros bieten Navigationssteuerungen für Artikel, die Teil einer Sequenz sind.
Für die einseitigen Vorlagen ist der einzige erforderliche Parameter der Slug des vorherigen oder nächsten Artikels in der Sequenz.
Das [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) Makro erfordert zwei Parameter: Der erste Parameter ist der Slug für den vorherigen Artikel, und der zweite ist der Slug für den nächsten Artikel.

## Generieren von Codebeispielen

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht es, die Ausgabe eines Codebeispiels auf einer Seite einzubetten, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Codebeispiels enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub-Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Hinzufügen von allgemeinen Formatierungen

### Hinzufügen von Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, normalerweise beim Beschreiben der Liste von Eigenschaften eines Objekts oder Parametern einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Zeigt an, ob das Objekt, falls `true`, ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Zeigt an…

## Hinzufügen von Status- und Kompatibilitätsindikatoren

### Hinzufügen von Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht-Standard

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht standardisiert ist und sich nicht in einem Standardisierungspfad befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern kann.
Für weitere Informationen zur Definition **experimentell** siehe die [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Hinzufügen von Inline-Indikatoren, die die Angabe der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, um die Verwendung einer offiziell veralteten (oder entfernten) API zu entmutigen ({{Deprecated_Inline}}).
Für weitere Informationen zur Definition **veraltet**, siehe die [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Indikatoren für Seiten- oder Abschnittskopfzeilen

Diese Vorlagen haben die gleichen Bedeutungen wie ihre Inline-Gegenstücke, die oben beschrieben wurden.
Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Breadcrumb-Navigation, falls verfügbar) auf der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) wird auf Seiten verwendet,
  die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) verwendet werden, aber gewöhnlich nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeige, dass eine Funktion in Webworkern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) Makro fügt eine lokalisierte Hinweisbox ein, die anzeigt, dass eine Funktion in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
Sie können auch einige Argumente übergeben, um anzuzeigen, dass eine Funktion in einem bestimmten Worker-Kontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Verlinken zu Browser-Kompatibilität und Spezifikation

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden jedoch auch von allen Seitentypen unterstützt:

- `\{{Compat}}`
  - : Erstellt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das (die) Merkmal(e), die durch `browser-compat` im Frontmatter definiert sind.
- `\{{Specifications}}`
  - : Enthält eine [Spezifikationstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) für das (die) Merkmal(e), die durch `spec-urls` im Frontmatter definiert sind, falls vorhanden, oder von der Spezifikation, die in den in `browser-compat` im Frontmatter definierten Kompatibilitätsdaten aufgeführt ist.

## Siehe auch

- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Makros für den Funktionsstatus](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (selten verwendete oder veraltete Makros)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
