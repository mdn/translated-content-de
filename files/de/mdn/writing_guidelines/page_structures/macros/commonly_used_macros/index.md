---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Diese Seite listet viele der allgemeinen Makros auf, die für den Einsatz auf MDN erstellt wurden.
Für zusätzliche Anleitungsinformationen zur Verwendung dieser Makros siehe [Using macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Informationen zu Makros, die selten verwendet werden, nur in speziellen Kontexten eingesetzt werden oder veraltet sind, finden Sie unter [Other macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkungen

MDN bietet eine Reihe von Link-Makros an, um das Erstellen von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu vereinfachen.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Ein mit einem Makro erstellter Glossar- oder Referenzlink muss beispielsweise nicht übersetzt werden: In anderen Lokalisierungen wird er automatisch auf die korrekte Version der Datei verlinkt.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)-Makro erstellt einen Link zu einem angegebenen Begriffseintrag im MDN-[Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (wie "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}.
2. Optional: Der im Artikel anzuzeigende Text anstelle des Begriffsnamens: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}.

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für die lokalisierungsunabhängige Verlinkung zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG usw.

Die Makros sind einfach zu verwenden.
Minimal müssen Sie nur den Namen des Elements, zu dem Sie verlinken möchten, im ersten Argument angeben.
Die meisten Makros nehmen auch ein zweites Argument, um den Anzeigetext zu ändern (Dokumentation kann unter den Links in der ganz linken Spalte unten gefunden werden).

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
        Sie können den Anzeigetext mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
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
        <a href="/de/docs/Web/SVG/Reference/Attribute">SVG-Element-Referenz</a> (/Web/SVG/Element).
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

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) bieten Navigationselemente für Artikel, die Teil von Sequenzen sind.
Für die einseitigen Vorlagen ist der einzige benötigte Parameter der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz.
Für [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) sind die beiden benötigten Parameter die Wiki-Standorte der entsprechenden Artikel.
Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) ermöglicht es, die Ausgabe eines Code-Beispiels auf einer Seite einzubetten, wie in [Live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels enthält, wie in [Live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) erlaubt das Einbetten von Live-Beispielen von GitHub-Seiten.
  Weitere Informationen finden Sie unter [GitHub live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Allgemeine Formatierungen

### Inline-Indikatoren für API-Dokumentationen

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) und [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) werden in API-Dokumentationen verwendet, in der Regel, wenn die Liste der Eigenschaften eines Objekts oder die Parameter einer Funktion beschrieben werden.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Zeigt an, wenn `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht standardisiert ist und sich nicht auf einem Standardpfad befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Symbol: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung ein, die anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte.
Weitere Informationen zur Definition **experimentell** finden Sie in der Dokumentation [Experimental, deprecated, and obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Symbol: {{Experimental_Inline}}

### Inline-Indikatoren, die das Angeben der Technologie unterstützen

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) fügt eine Inline-Markierung für veraltet ({{Deprecated_Inline}}) ein, um die Nutzung einer offiziell als veraltet (oder entfernten) API zu entmutigen.
Weitere Informationen zur Definition **veraltet** finden Sie in der Dokumentation [Experimental, deprecated, and obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Symbol: {{Deprecated_Inline}}

### Seiten- oder Abschnittsheader-Indikatoren

Diese Vorlagen haben die gleiche Semantik wie ihre Inline-Gegenstücke, die oben beschrieben sind.
Die Vorlagen sollen direkt unter dem Haupttitel der Seite (oder der Brotkrumennavigation, falls verfügbar) in der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu kennzeichnen.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) wird auf Seiten verwendet, die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Sollte auf Hauptseiten wie Interface-Seiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) verwendet werden, jedoch normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeige, dass ein Feature in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)-Makro fügt eine lokalisierte Notizbox ein, die anzeigt, dass eine Funktion in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
Sie können auch einige Argumente angeben, um anzuzeigen, dass eine Funktion in einem bestimmten Worker-Kontext funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Makros für Browser-Kompatibilität und Spezifikation

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden jedoch auch von allen Seitentypen unterstützt:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`

  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für die Funktion, die als Parameter übergeben wird. Wenn kein Parameter enthalten ist, wird standardmäßig auf die in der Frontmatter durch `browser-compat` definierten Funktionen zurückgegriffen. Ein optionaler Tiefenparameter legt fest, wie tief Unterfunktionalitäten in die Tabelle aufgenommen werden sollen. Die Tiefe, sofern sie nicht angegeben ist, beträgt standardmäßig 1, was bedeutet, dass nur die erste Ebene der Unterfunktionalitätsdaten aus BCD aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Beinhaltet die Spezifikation für das im Parameter angegebene Feature. Wenn kein Parameter übergeben wird, wird die in der Frontmatter unter `spec-urls` definierte Spezifikation aufgelistet, sofern vorhanden, oder aus der in den Browser-Kompatibilitätsdaten definierten Spezifikation durch `browser-compat` in der Frontmatter. Die Spezifikation wird als externer Link angezeigt.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
