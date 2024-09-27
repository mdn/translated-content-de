---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Diese Seite listet viele der allgemein verwendeten Makros auf, die für den Einsatz auf MDN erstellt wurden. Weitere Informationen zur Verwendung dieser Makros finden Sie unter [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Siehe [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) für Informationen über seltener verwendete, nur in speziellen Kontexten verwendete oder veraltete Makros.

## Verlinkung

MDN bietet eine Reihe von Link-Makros an, um die Erstellung von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind. Zum Beispiel muss ein mit einem Makro erstellter Glossar- oder Referenzlink nicht übersetzt werden: In anderen Lokalisierungen wird er automatisch auf die korrekte Version der Datei verlinken.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs)-Makro erstellt einen Link zum Eintrag eines angegebenen Begriffs im MDN-[Glossar](/de/docs/Glossary). Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (zum Beispiel "HTML"): `\{{Glossary("HTML")}}` ergibt [HTML](/de/docs/Glossary/HTML)
2. Optional: Der im Artikel anzuzeigende Text anstelle des Begriffsnamens: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt [Cascading Style Sheets](/de/docs/Glossary/CSS)

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für lokalisierungsunabhängige Verlinkung zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG usw.

Die Makros sind einfach zu verwenden. In der Regel müssen Sie nur den Namen des zu verlinkenden Elements im ersten Argument angeben. Die meisten Makros akzeptieren auch ein zweites Argument, mit dem Sie den angezeigten Text ändern können (Dokumentation finden Sie unter den Links in der linken Spalte unten).

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
        <a href="/de/docs/Web/HTML/Element">HTML Elements Reference</a> (/Web/HTML/Element)
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
        <a href="/de/docs/Web/JavaScript/Reference">JavaScript Reference</a> (/Web/JavaScript/Reference).
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
        <a href="/de/docs/Web/SVG/Attribute">SVG Attribute Reference</a> (/Web/SVG/Attribute).
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
        <a href="/de/docs/Web/SVG/Attribute">SVG Element Reference</a> (/Web/SVG/Element).
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
        <a href="/de/docs/Web/HTTP/Headers">HTTP Headers</a> (/Web/HTTP/Headers).
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
        <a href="/de/docs/Web/HTTP/Methods">HTTP Request Methods</a> (/Web/HTTP/Methods).
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
        <a href="/de/docs/Web/HTTP/Status">HTTP Response Status Codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationselemente für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) bieten Navigationselemente für Artikel, die Teil von Sequenzen sind. Für die einseitigen Vorlagen ist der einzige benötigte Parameter der Wiki-Standort des vorhergehenden oder nächsten Artikels in der Sequenz. Bei [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) sind die beiden erforderlichen Parameter die Wiki-Standorte der entsprechenden Artikel. Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) ermöglicht das Einbetten der Ausgabe eines Code-Beispiels auf einer Seite, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten. Weitere Informationen finden Sie unter [GitHub Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Seitenleisten-Generierung

Es gibt Vorlagen für fast jede große Sammlung von Seiten. Diese verlinken typischerweise zurück zur Hauptseite der Referenz/Leitfaden/Tutorial (dies ist oft erforderlich, da unsere Breadcrumbs dies manchmal nicht können) und platzieren den Artikel in der entsprechenden Kategorie.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) generiert die Seitenleiste für CSS-Referenzseiten.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) generiert die Seitenleiste für HTML-Referenzseiten.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) generiert die Seitenleiste für Web-API-Referenzseiten.

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentation

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) und [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) werden in API-Dokumentationen verwendet, normalerweise wenn die Liste der Eigenschaften eines Objekts oder die Parameter einer Funktion beschrieben werden.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Zeigt an, wenn `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht standardisiert ist und sich nicht auf einem Standardsweg befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) fügt ein Inline-Zeichen ein, das anzeigt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern kann. Für weitere Informationen zur Definition **experimentell** siehe die Dokumentation zu [Experimentell, veraltet und überholt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren, die die Spezifizierung der Technologie unterstützen

#### Veraltet

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) fügt ein Inline-Zeichen ein, das die Verwendung einer API, die offiziell veraltet ist (oder wurde entfernt), entmutigt ({{Deprecated_Inline}}). Für weitere Informationen zur Definition **veraltet** siehe die Dokumentation zu [Experimentell, veraltet und überholt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Seiten- oder Abschnitts-Header-Indikatoren

Diese Vorlagen haben die gleichen semantischen Werte wie ihre Inline-Pendants, die oben beschrieben wurden. Die Vorlagen sollten direkt unter dem Haupttitel (oder der Breadcrumb-Navigation, falls verfügbar) auf der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu kennzeichnen.

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) wird auf Seiten verwendet, die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren. Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs). Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z. B. `navigator.xyz`) verwendet werden, jedoch normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten. Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Angeben, dass eine Funktion in Web-Workern verfügbar ist

Das Makro [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) fügt eine lokale Hinweisbox ein, die angibt, dass eine Funktion in einem [Web-Worker](/de/docs/Web/API/Web_Workers_API)-Kontext verfügbar ist. Sie können das Argument `window_and_worker_except_service` verwenden, um anzuzeigen, dass eine Funktion in Web-Workern funktioniert, außer in Dienst-Workern.

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

  - : Erzeugt eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das im Parameter angegebene Merkmal. Wenn kein Parameter enthalten ist, wird auf die durch `browser-compat` im Frontmatter definierten Funktionen zurückgegriffen. Ein optionaler Tiefenparameter legt fest, wie tief Unterfunktionen in die Tabelle aufgenommen werden sollen. Die Tiefe, wenn weggelassen, wird standardmäßig auf 1 gesetzt, was bedeutet, dass nur die erste Ebene der Unterfunktionendaten aus BCD inbegriffen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Schließt die Spezifikation für das im Parameter angegebene Merkmal ein. Wenn kein Parameter übergeben wird, wird die aufgelistete Spezifikation durch den Wert von `spec_urls` im Frontmatter, falls vorhanden, oder aus der in den Browser-Kompatibilitätsdaten aufgeführten Spezifikation, die durch `browser-compat` im Frontmatter definiert ist, angegeben. Die Spezifikation wird als externer Link gerendert.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
