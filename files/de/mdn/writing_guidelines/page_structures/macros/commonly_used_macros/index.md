---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

Diese Seite listet viele der universell einsetzbaren Makros auf, die für die Nutzung auf MDN erstellt wurden. Für zusätzliche Anleitungen zur Verwendung dieser Makros siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Informationen zu Makros, die selten verwendet, nur in speziellen Kontexten genutzt oder veraltet sind, finden Sie unter [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN bietet eine Reihe von Link-Makros, um das Erstellen von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie prägnant und übersetzungsfreundlich sind. Zum Beispiel muss ein mit einem Makro erstellter Glossar- oder Referenzlink nicht übersetzt werden: In anderen Lokalisierungen wird er automatisch auf die korrekte Dateiversion verlinken.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) Makro erstellt einen Link zu einem spezifizierten Eintrag im MDN-[Glossar](/de/docs/Glossary). Dieses Makro akzeptiert einen erforderlichen und einen optionalen Parameter:

1. Der Name des Begriffs (wie "HTML"): `\{{Glossary("HTML")}}` ergibt {{Glossary("HTML", "HTML")}}
2. Optional: Der Text, der im Artikel anstelle des Begriffsnamens angezeigt werden soll: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt {{Glossary("CSS", "Cascading Style Sheets")}}

### Verlinkung zu Seiten in Referenzen

Es gibt Makros für die lokalisierungsunabhängige Verlinkung zu Seiten in bestimmten Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG usw.

Die Makros sind einfach zu verwenden. Im Minimalfall müssen Sie nur den Namen des Objekts, zu dem verlinkt werden soll, als erstes Argument angeben. Die meisten Makros nehmen auch ein zweites Argument an, mit dem Sie den angezeigten Text ändern können (Dokumentation finden Sie in den Links in der ganz linken Spalte unten).

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
        <code>\{{DOMxRef("Document")}}</code> oder <code>\{{DOMxRef("document")}}</code> ergibt [`Document`](/de/docs/Web/API/Document),<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> ergibt [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)<br />
        <code>\{{DOMxRef("Node")}}</code> ergibt [`Node`](/de/docs/Web/API/Node).<br />
        Sie können den angezeigten Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a>
      </td>
      <td>
        <a href="/de/docs/Web/HTML/Element">HTML-Elemente Referenz</a> (/Web/HTML/Element)
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
        <a href="/de/docs/Web/SVG/Attribute">SVG-Attributreferenz</a> (/Web/SVG/Attribute).
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
        <a href="/de/docs/Web/SVG/Attribute">SVG-Element referenz</a> (/Web/SVG/Element).
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
        <a href="/de/docs/Web/HTTP/Status">HTTP-Antwortstatuscodes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationselemente für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) bieten Navigationskontrollen für Artikel, die Teil einer Sequenz sind. Für die Einweg-Vorlagen ist nur der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz erforderlich. Für [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) sind die beiden erforderlichen Parameter die Wiki-Standorte der entsprechenden Artikel. Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Code-Beispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) lässt Sie die Ausgabe eines Code-Beispiels auf einer Seite einbetten, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link zu einer Seite, die die Ausgabe eines Code-Beispiels auf einer Seite enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten. Mehr Informationen finden Sie unter [GitHub-Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Seitengenerierung

Es gibt Vorlagen für fast jede große Sammlung von Seiten. Sie verlinken typischerweise zurück zur Hauptseite der Referenz/Leitfaden/Anleitung (dies ist oft notwendig, weil unsere Brotkrumen dies manchmal nicht können) und ordnen den Artikel in die entsprechende Kategorie ein.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) generiert die Seitenleiste für CSS-Referenzseiten.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) generiert die Seitenleiste für HTML-Referenzseiten.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) generiert die Seitenleiste für Web-API-Referenzseiten.

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentationen

[`Optional_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) und [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) werden in API-Dokumentationen verwendet, üblicherweise wenn die Liste der Eigenschaften eines Objekts oder Parameter einer Funktion beschrieben werden.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Zeigt an, ob `true`, dass das Objekt ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht-standardisiert

[`Non-standard_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) fügt eine Inline-Markierung ein, die angibt, dass die API nicht standardisiert und nicht in einer Standardspur ist.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`Experimental_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) fügt eine Inline-Markierung ein, die angibt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte. Für weitere Informationen zur Definition **experimentell** siehe die [Experimentell, veraltet und obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren mit Unterstützung für die Angabe der Technologie

#### Veraltet

[`Deprecated_Inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) fügt eine Inline-Markierung ({{Deprecated_Inline}}) ein, um von der Nutzung einer offiziell veralteten (oder entfernten) API abzuraten. Für weitere Informationen zur Definition **veraltet**, siehe die [Experimentell, veraltet und obsolete](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Dokumentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Header-Indikatoren für Seiten oder Abschnitte

Diese Vorlagen haben dieselbe Semantik wie ihre Inline-Pendants, die oben beschrieben sind. Die Vorlagen sollten direkt unter dem Hauptseitentitel (oder der Brotkrumnavigation, falls verfügbar) in der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu kennzeichnen.

- [`Non-standard_Header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) wird auf Seiten verwendet, die [experimentelle Features](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren.
  Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs).
  Sollte auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) aber normalerweise nicht auf Unterseiten wie Methoden und Eigenschaftsseiten verwendet werden. Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Kennzeichnung, dass ein Feature in Web-Workern verfügbar ist

Das [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) Makro fügt eine lokalisierte Notiz ein, die anzeigt, dass ein Feature in einem [worker context](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Sie können auch einige Argumente übergeben, um anzugeben, dass ein Feature in einem bestimmten Worker-Kontext funktioniert.

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

  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für das angegebene Feature im Parameter. Wenn kein Parameter enthalten ist, wird standardmäßig auf die in `browser-compat` im Frontmatter definierten Features gesetzt. Ein optionaler Tiefenparameter legt fest, wie tief Unterspezifikationen zur Tabelle hinzugefügt werden sollen. Die Tiefe, wenn weggelassen, beträgt 1, was bedeutet, dass nur die erste Ebene der Unterspezifikationsdaten aus BCD in die Tabelle aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Enthält die Spezifikation für das angegebene Feature im Parameter. Wenn kein Parameter übergeben wird, wird die aufgelistete Spezifikation durch den Wert für `spec_urls` im Frontmatter definiert, falls vorhanden, oder aus der in den Browser-Kompatibilitätsdaten unter `browser-compat` im Frontmatter definierten Spezifikation. Die Spezifikation wird als externer Link gerendert.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitentemplates](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
