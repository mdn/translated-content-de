---
title: Allgemein verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

Diese Seite listet viele der universell einsetzbaren Makros auf, die das Build-System von MDN, [rari](https://github.com/mdn/rari), für die Nutzung auf MDN bereitstellt.
Für allgemeine Anleitungen zur Verwendung dieser Makros in MDN-Inhalten, siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Verlinkung

MDN bietet eine Anzahl von Link-Makros zur Vereinfachung der Erstellung von Links zu Glossareinträgen, Referenzseiten und anderen Themen.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Zum Beispiel muss ein mit einem Makro erstellter Glossar- oder Referenzlink nicht übersetzt werden: In anderen Sprachversionen wird automatisch auf die richtige Version der Datei verlinkt.

Diese Makros werden auch ausführlicher auf der Seite [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links) behandelt.

### Verlinkung zu Glossarbegriffen

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)-Makro erstellt einen Link zur Seite des angegebenen Begriffs im [MDN Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen Parameter und einen optionalen Parameter.

- Der Begriff ist ein erforderlicher Parameter. Zum Beispiel, um auf die Glossarseite für "HTML" zu verlinken, lautet das Makro `\{{Glossary("HTML")}}`, und dies wird den Link {{Glossary("HTML", "HTML")}} erzeugen.
- Der Anzeigetext ist ein optionaler Parameter. Zum Beispiel können Sie den Link im vorherigen Beispiel als `\{{Glossary("HTML", "HyperText Markup Language")}}` schreiben, was den Link {{Glossary("HTML", "HyperText Markup Language")}} erzeugt.

### Verlinkung zu Referenzseiten

Es gibt Makros für die lokalisierungsunabhängige Verlinkung zu Seiten in bestimmten Referenzbereichen von MDN, einschließlich HTML, CSS, JavaScript, SVG und HTTP.

Die Makros sind einfach zu verwenden.
Alles, was Sie tun müssen, ist, den Namen des zu verlinkenden Elements im ersten Parameter anzugeben.
Ähnlich wie das Glossar-Makro akzeptieren die meisten Referenz-Makros auch einen zweiten Parameter, um Ihnen die Möglichkeit zu geben, den Anzeigetext zu ändern.

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
        Details nachlesen unter <a href="/de/docs/MDN/Writing_guidelines/Page_structures/Links#using_cssxref_with_the_css_reference">Verwendung von <code>cssxref</code> mit der CSS-Referenz</a>
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
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG Attribut-Referenz</a> (/Web/SVG/Reference/Attribute)
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
        <a href="/de/docs/Web/SVG/Reference/Element">SVG Element-Referenz</a> (/Web/SVG/Reference/Element)
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
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP Headers</a> (/Web/HTTP/Reference/Headers)
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
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP-Anfragemethoden</a> (/Web/HTTP/Reference/Methods)
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
        <a href="/de/docs/Web/HTTP/Reference/Status">HTTP-Antwortstatus-Codes</a> (/Web/HTTP/Reference/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}.
      </td>
    </tr>
  </tbody>
</table>

### Hinzufügen von Navigationselementen für mehrseitige Leitfäden

Die Makros [`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationselemente für Artikel, die Teil einer Sequenz sind.
Bei den einseitigen Vorlagen ist nur der Slug des vorherigen oder nächsten Artikels in der Sequenz als Parameter erforderlich.
Das [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)-Makro erfordert zwei Parameter: Der erste Parameter ist der Slug für den vorherigen Artikel, und der zweite ist der Slug für den nächsten Artikel.

## Generieren von Codebeispielen

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht es Ihnen, die Ausgabe eines Codebeispiels auf einer Seite einzubetten, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Codebeispiels enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub-Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Hinzufügen von allgemeinem Formatierungszweck

### Hinzufügen von Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in der API-Dokumentation verwendet, normalerweise beim Beschreiben der Liste der Eigenschaften eines Objekts oder der Parameter einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : zeigt an, ob das Objekt, wenn `true`, ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : zeigt an…

## Hinzufügen von Status- und Kompatibilitätsindikatoren

### Hinzufügen von Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung hinzu, die angibt, dass die API nicht standardisiert und nicht auf einem Standardweg ist.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Symbol: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung hinzu, die angibt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern kann.
Für weitere Informationen zur Definition **experimentell**, siehe die Dokumentation [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Symbol: {{Experimental_Inline}}

### Hinzufügen von Inline-Indikatoren mit Unterstützung zur Angabe der Technologie

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung für Veraltet ({{Deprecated_Inline}}) ein, um die Nutzung einer offiziell veralteten (oder entfernten) API zu entmutigen.
Für weitere Informationen zur Definition **veraltet**, siehe die Dokumentation [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Symbol: {{Deprecated_Inline}}

### Seiten- oder Abschnittsheader-Indikatoren

Diese Vorlagen haben die gleiche Bedeutung wie ihre oben beschriebenen Inline-Gegenstücke.
Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Breadcrumb-Navigation, falls vorhanden) auf der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) wird auf Seiten verwendet, die [experimentelle Features](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkte (z.B. `navigator.xyz`) verwendet werden, aber normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Hinweis, dass ein Feature in Web-Workern verfügbar ist

Das Makro [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) fügt eine lokalisierte Notizbox hinzu, die angibt, dass ein Merkmal im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
Sie können auch einige Argumente übergeben, um anzugeben, dass ein Merkmal im angegebenen Worker-Kontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Verlinkung zu Browser-Kompatibilität und Spezifikation

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden aber auch von allen Seitentypen unterstützt:

- `\{{Compat}}`
  - : Erstellt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das/die in der `browser-compat` des Frontmatters definierte(n) Merkmal(e).
- `\{{Specifications}}`
  - : Enthält eine [Spezifikationstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) für das/die in der `spec-urls` des Frontmatters definierte(n) Merkmal(e), falls vorhanden, oder aus der Spezifikation, die in den in der `browser-compat` des Frontmatters definierten Browser-Kompatibilitätsdaten aufgeführt ist.

## Siehe auch

- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Sidebar Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Feature-Status Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (selten verwendete oder veraltete Makros)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
