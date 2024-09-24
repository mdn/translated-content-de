---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Diese Seite listet viele der allgemein verwendeten Makros, die für die Nutzung auf MDN erstellt wurden, auf.
Weitere Anleitungen zur Verwendung dieser Makros finden Sie unter [Using macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Informationen zu Makros, die selten verwendet werden, nur in speziellen Kontexten eingesetzt werden oder veraltet sind, finden Sie unter [Other macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN bietet eine Reihe von Link-Makros, um die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind.
Ein mit einem Makro erstellter Glossar- oder Referenzlink muss zum Beispiel nicht übersetzt werden: In anderen Sprachversionen wird automatisch auf die richtige Version der Datei verlinkt.

### Glossar-Links

Das Makro [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) erstellt einen Link zu einem angegebenen Begriffseintrag im MDN-[Glossar](/de/docs/Glossary).
Dieses Makro akzeptiert einen erforderlichen Parameter und einen optionalen Parameter:

1. Der Name des Begriffs (wie "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML")}}
2. Optional: Der im Artikel anzuzeigende Text anstelle des Begriffsnamens: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für sprachunabhängige Verlinkungen zu Seiten in speziellen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG usw.

Die Makros sind einfach zu verwenden.
Im Minimum müssen Sie lediglich den Namen des zu verlinkenden Elements als erstes Argument angeben.
Die meisten Makros akzeptieren auch ein zweites Argument, das es Ihnen ermöglicht, den angezeigten Text zu ändern (Dokumentation finden Sie in den Links in der linken Spalte unten).

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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/cssxref.ejs">CSSxRef</a>
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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM-Referenz</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> oder <code>\{{DOMxRef("document")}}</code> ergibt {{DOMxRef("Document")}},<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt {{DOMxRef("document.getElementsByName()")}}<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt {{DOMxRef("Node")}}.<br />
        Sie können den angezeigten Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt {{DOMxRef("document.getElementsByName()","getElementsByName()")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a>
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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/jsxref.ejs">JSxRef</a>
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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Attribute">SVG-Attribut-Referenz</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> ergibt {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/yari/blob/main/kumascript/macros/SVGElement.ejs">SVGElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/SVG/Attribute">SVG-Element-Referenz</a> (/Web/SVG/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> ergibt {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/yari/blob/main/kumascript/macros/httpheader.ejs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Headers">HTTP-Header</a> (/Web/HTTP/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> ergibt {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPMethod.ejs">HTTPMethod</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Methods">HTTP-Anfragemethoden</a> (/Web/HTTP/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> ergibt {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPStatus.ejs">HTTPStatus</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Status">HTTP-Antwortstatus-Codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) bieten Navigationselemente für Artikel, die Teil von Sequenzen sind.
Für die einseitigen Vorlagen ist das einzige erforderliche Parameter der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz.
Für [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) sind zwei Parameter erforderlich, nämlich die Wiki-Standorte der entsprechenden Artikel.
Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) ermöglicht es Ihnen, die Ausgabe eines Code-Beispiels auf einer Seite einzubetten, wie in [Live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels enthält, wie in [Live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) ermöglicht es, Live-Beispiele von GitHub-Seiten einzubetten.
  Weitere Informationen erhalten Sie unter [GitHub live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Seitenleisten-Generierung

Es gibt Vorlagen für fast jede große Sammlung von Seiten.
Sie verlinken typischerweise zurück zur Hauptseite der Referenz/Leitfaden/Tutorial (dies ist oft erforderlich, da unsere Breadcrumbs dies manchmal nicht können) und platzieren den Artikel in der entsprechenden Kategorie.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) generiert die Seitenleiste für CSS-Referenzseiten.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) generiert die Seitenleiste für HTML-Referenzseiten.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) generiert die Seitenleiste für Web-API-Referenzseiten.

## Allgemeine Formatierungszwecke

### Inline-Indikatoren für API-Dokumentationen

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) und [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) werden in API-Dokumentationen verwendet, in der Regel beim Beschreiben der Liste der Eigenschaften eines Objekts oder der Parameter einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`.
Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, ob, wenn `true`, das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht standardisiert ist und sich nicht auf dem Standardschiene befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Symbol: {{Non-standard_Inline}}

#### Experimentell

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern kann.
Weitere Informationen zur Definition **experimentell** finden Sie in der [Experimental, deprecated, and obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Symbol: {{Experimental_Inline}}

### Inline-Indikatoren die die Angabe der Technologie unterstützen

#### Veraltet

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) fügt ein Inline-Zeichen für veraltet ({{Deprecated_Inline}}) ein, um von der Nutzung einer API abzuraten, die offiziell veraltet ist (oder entfernt wurde).
Weitere Informationen zur Definition **veraltet** finden Sie in der [Experimental, deprecated, and obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Symbol: {{Deprecated_Inline}}

### Seiten- oder Abschnittsheader-Indikatoren

Diese Vorlagen haben die gleichen Semantiken wie ihre Inline-Gegenstücke, die oben beschrieben wurden.
Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Brotkrümelnavigation, falls vorhanden) auf der Referenzseite platziert werden.
Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu markieren.

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) verwendet auf Seiten,
  die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z. B. `navigator.xyz`) verwendet werden, aber normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaften-Seiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Angabe, dass ein Feature in Web-Workern verfügbar ist

Das Makro [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) fügt ein lokalisiertes Hinweiskästchen ein, das anzeigt, dass ein Feature in einem [Web-worker](/de/docs/Web/API/Web_Workers_API)-Kontext verfügbar ist.
Sie können das Argument `window_and_worker_except_service` verwenden, um anzugeben, dass ein Feature in Web-Workern, mit Ausnahme von Service-Workern, funktioniert.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Browser-Kompatibilität und Spezifikationsmakros

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden jedoch auch von allen Seitentypen unterstützt:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`

  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das als Parameter übergebene Feature. Wenn kein Parameter enthalten ist, wird standardmäßig das Feature verwendet, das durch `browser-compat` im Frontmatter definiert ist. Ein optionaler Tiefenparameter legt fest, wie tief untergeordnete Funktionen in die Tabelle aufgenommen werden sollen. Die Tiefe beträgt, wenn sie weggelassen wird, standardmäßig 1, was bedeutet, dass nur das erste Level der untergeordneten Merkmale aus BCD in die Tabelle aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Enthält die Spezifikation für das im Parameter angegebene Feature. Wenn kein Parameter übergeben wird, wird die aufgelistete Spezifikation durch den Wert für `spec_urls` im Frontmatter, sofern vorhanden, oder aus der Spezifikation im Browser-Kompatibilitätsdaten definiert durch `browser-compat` im Frontmatter, ermittelt. Die Spezifikation wird als externer Link angezeigt.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Makros für den Funktionsstatus](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
