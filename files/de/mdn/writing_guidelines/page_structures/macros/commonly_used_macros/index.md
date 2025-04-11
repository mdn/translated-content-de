---
title: Allgemein verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: b2f5e6cc0fe097a4eaabe53f3c134432c6e5824d
---

Diese Seite listet viele der universell einsetzbaren Makros auf, die für den Einsatz auf MDN erstellt wurden. Für zusätzliche Anleitungen zur Verwendung dieser Makros, siehe [Using macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Siehe [Other macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) für Informationen zu Makros, die selten verwendet werden, nur in besonderen Kontexten genutzt werden oder veraltet sind.

## Verlinkung

MDN bietet eine Reihe von Link-Makros, um die Erstellung von Links zu Referenzseiten, Glossar-Einträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind. Zum Beispiel muss ein Glossar- oder Referenzlink, der mit einem Makro erstellt wurde, nicht übersetzt werden: In anderen Lokalisierungen wird er automatisch auf die richtige Version der Datei verlinken.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)-Makro erstellt einen Link zu einem bestimmten Eintrag im MDN-[Glossar](/de/docs/Glossary). Dieses Makro akzeptiert einen erforderlichen Parameter und einen optionalen Parameter:

1. Der Name des Begriffs (wie "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der Text, der im Artikel anstelle des Begriffnamens angezeigt wird: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für die ortsunabhängige Verlinkung zu Seiten in speziellen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG, etc.

Die Makros sind einfach zu verwenden. In der Regel müssen Sie nur den Namen des zu verlinkenden Elements im ersten Argument angeben. Die meisten Makros akzeptieren auch ein zweites Argument, mit dem Sie den Anzeigetext ändern können (Dokumentation finden Sie in den unten stehenden Links in der äußersten linken Spalte).

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
        <a href="/de/docs/Web/CSS/Reference">CSS Reference</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> führt zu {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM Reference</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> or <code>\{{DOMxRef("document")}}</code> führt zu [`Document`](/de/docs/Web/API/Document),<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> führt zu [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)<br />
        <code>\{{DOMxRef("Node")}}</code> führt zu [`Node`](/de/docs/Web/API/Node).<br />
        Sie können den Anzeigetext mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> führt zu [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements">HTML Elements Reference</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> führt zu {{HTMLElement("select")}}
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
        <code>\{{JSxRef("Promise")}}</code> führt zu {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG Attribute Reference</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> führt zu {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG Element Reference</a> (/Web/SVG/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> führt zu {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Headers">HTTP Headers</a> (/Web/HTTP/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> führt zu {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Methods">HTTP Request Methods</a> (/Web/HTTP/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> führt zu {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Reference/Status">HTTP Response Status Codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> führt zu {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationselemente für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationselemente für Artikel, die Teil von Sequenzen sind. Für die einseitigen Vorlagen ist nur der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz erforderlich. Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind zwei Parameter erforderlich: die Wiki-Standorte der entsprechenden Artikel. Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht es Ihnen, die Ausgabe eines Code-Beispiels auf einer Seite einzubetten, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels auf einer Seite enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten. Weitere Informationen finden Sie unter [GitHub-Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in der API-Dokumentation verwendet, normalerweise bei der Beschreibung der Eigenschaftenliste eines Objekts oder der Parameter einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, ob das Objekt bei `true` ein benutzerdefiniertes Objekt ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht standardisiert wurde und nicht auf einem Standardpfad ist.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte. Weitere Informationen zur Definition von **experimentell** finden Sie in der [Experimental, deprecated, and obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)-Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren, die die Angabe der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung für veraltete APIs ein ({{Deprecated_Inline}}), um die Nutzung einer offiziell veralteten (oder entfernten) API zu entmutigen. Weitere Informationen zur Definition von **veraltet** finden Sie in der [Experimental, deprecated, and obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)-Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Kopfzeilen-Indikatoren für Seiten oder Abschnitte

Diese Vorlagen haben dieselbe Semantik wie ihre oben beschriebenen Inline-Pendants. Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Brotkrumen-Navigation, falls vorhanden) in der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu kennzeichnen.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs), verwendet auf Seiten, die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren. Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs). Sollte auf Hauptseiten wie Schnittstellen-Seiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) verwendet werden, aber normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten. Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Hinweis, dass eine Funktion in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)-Makro fügt eine lokalisierte Notizbox ein, die angibt, dass eine Funktion in einem [worker context](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Sie können auch einige Argumente übergeben, um anzugeben, dass eine Funktion in einem bestimmten Worker-Kontext funktioniert.

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

- `\{{Compat}}`
  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für die im Frontmatter durch `browser-compat` definierten Funktionen.
- `\{{Specifications}}`
  - : Fügt eine [Spezifikationstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) für die im Frontmatter durch `spec-urls` definierten Funktionen ein, sofern vorhanden, oder aus der in den Kompatibilitätsdaten des Browsers durch `browser-compat` definierten Spezifikation.

## Siehe auch

- [Sidebar macros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Page templates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Page components](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Makros für den Feature-Status](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
