---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{MDNSidebar}}

Diese Seite listet viele der zumeist allgemein verwendeten Makros auf, die für MDN erstellt wurden. Für weitere Anleitungen zur Nutzung dieser Makros, siehe [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Weitere Informationen zu Makros, die selten verwendet, nur in speziellen Kontexten genutzt oder veraltet sind, finden Sie unter [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN bietet eine Anzahl von Link-Makros zur erleichterten Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind. Beispielsweise müssen ein Glossar oder Referenzlink, die mit einem Makro erstellt wurden, nicht übersetzt werden: In anderen Lokalisierungen wird automatisch auf die korrekte Version der Datei verlinkt.

### Glossar-Verlinkungen

Das [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs)-Makro erstellt einen Link zu einem spezifischen Eintrag im [Glossar](/de/docs/Glossary) von MDN. Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (zum Beispiel "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der anzuzeigende Text im Artikel anstelle des Begriffsnamens: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für lokalisierungsunabhängige Links zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG, etc.

Die Makros sind einfach zu verwenden. Im Minimum müssen Sie den Namen des Elements, zu dem Sie verlinken möchten, als erstes Argument spezifizieren. Die meisten Makros nehmen auch ein zweites Argument an, das Ihnen erlaubt, den Anzeigetext zu ändern (Dokumentation findet sich in den Links in der äußersten linken Spalte unten).

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Links zur Seite unter</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/cssxref.ejs">CSSxRef</a>
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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/de/docs/Web/API">DOM Reference</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> oder <code>\{{DOMxRef("document")}}</code> ergibt [`Document`](/de/docs/Web/API/Document),<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt [`Node`](/de/docs/Web/API/Node).<br />
        Sie können den Anzeigetext mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a>
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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/jsxref.ejs">JSxRef</a>
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
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
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
          href="https://github.com/mdn/yari/blob/main/kumascript/macros/SVGElement.ejs">SVGElement</a>
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
        <code><a href="https://github.com/mdn/yari/blob/main/kumascript/macros/httpheader.ejs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/de/docs/Web/HTTP/Headers">HTTP headers</a> (/Web/HTTP/Headers).
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
        <a href="/de/docs/Web/HTTP/Methods">HTTP request methods</a> (/Web/HTTP/Methods).
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
        <a href="/de/docs/Web/HTTP/Status">HTTP response status codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigation für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) bieten Navigationssteuerelemente für Artikel, die Teil von Sequenzen sind. Für die einseitigen Vorlagen ist nur der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz erforderlich. Für [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) sind die beiden Parameter die Wiki-Standorte der entsprechenden Artikel erforderlich. Der erste Parameter ist für den vorherigen Artikel, und der zweite ist für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) ermöglicht es, die Ausgabe eines Code-Beispiels auf einer Seite einzubetten, wie unter [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link zu einer Seite mit der Ausgabe eines Code-Beispiels, wie unter [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten. Weitere Informationen finden Sie unter [GitHub live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Sidebar-Erstellung

Es gibt Vorlagen für fast jede große Sammlung von Seiten. Diese verlinken normalerweise zurück zur Hauptseite der Referenz/Leitfaden/Tutorial (dies ist oft notwendig, da unsere Breadcrumbs dies manchmal nicht können) und ordnen den Artikel der passenden Kategorie zu.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) erstellt die Sidebar für CSS-Referenzseiten.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) erstellt die Sidebar für HTML-Referenzseiten.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) erstellt die Sidebar für Web-API-Referenzseiten.

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentation

[`Optional_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) und [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) werden in API-Dokumentationen verwendet, meist bei der Beschreibung von Eigenschaftenlisten eines Objekts oder Parametern einer Funktion.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, ob `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht-standardisiert

[`Non-standard_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht standardisiert ist und sich nicht auf dem Weg zur Standardisierung befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht weit verbreitet implementiert und möglicherweise in Zukunft verändert wird. Weitere Informationen zur Definition **experimentell** finden Sie in der Dokumentation [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren mit Angabe der Technologie

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) fügt ein Inline-Zeichen "veraltet" ein ({{Deprecated_Inline}}), um von der Verwendung einer offiziell veralteten API abzuraten (oder einer, die entfernt wurde). Weitere Informationen zur Definition **veraltet** finden Sie in der Dokumentation [Experimentell, veraltet und obsolet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Header-Indikatoren für Seite oder Abschnitt

Diese Vorlagen haben die gleichen Semantiken wie ihre Inline-Pendants, die oben beschrieben wurden. Die Vorlagen sollten direkt unterhalb des Hauptseitentitels (oder der Breadcrumb-Navigation, falls verfügbar) auf der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu kennzeichnen.

- [`Non-standard_Header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) wird auf Seiten verwendet,
  die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) eingesetzt werden, üblicherweise jedoch nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten.
  Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeige, dass eine Funktion in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs)-Makro fügt einen lokalisierten Hinweis ein, dass eine Funktion im [worker context](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Sie können auch Argumente übergeben, um anzuzeigen, dass eine Funktion in einem bestimmten worker context funktioniert.

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

  - : Erstellt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für die im Parameter übergebene Funktion. Wenn kein Parameter enthalten ist, wird auf die Funktionen, die durch `browser-compat` im Frontmatter definiert sind, zurückgegriffen. Ein optionaler Tiefenparameter legt fest, wie tief untergeordnete Funktionen in die Tabelle aufgenommen werden sollen. Die Tiefe, falls nicht angegeben, ist standardmäßig 1, das bedeutet, dass nur das erste Level von Unterfunktionsdaten aus BCD in die Tabelle aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Enthält die Spezifikation für die in der Parameter angegeben Funktion. Wenn kein Parameter übergeben wird, wird die aufgelistete Spezifikation durch den Wert für `spec-urls` im Frontmatter definiert, falls vorhanden, oder aus der in den Browser-Kompatibilitätsdaten definierten Spezifikation `browser-compat` im Frontmatter. Die Spezifikation wird als externer Link dargestellt.

## Siehe auch

- [Sidebarmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste von Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
