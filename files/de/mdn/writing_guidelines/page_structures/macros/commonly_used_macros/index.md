---
title: Häufig verwendete Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Diese Seite listet viele der allgemeinen Makros auf, die für die Nutzung auf MDN erstellt wurden. Für weitere Informationen zur Anwendung dieser Makros siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).

Weitere Informationen zu Makros, die selten verwendet werden, nur in speziellen Kontexten genutzt werden oder veraltet sind, finden Sie unter [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Verlinkung

MDN bietet eine Reihe von Link-Makros, um das Erstellen von Links zu Referenzseiten, Glossareinträgen und anderen Themen zu erleichtern.

Link-Makros werden gegenüber normalen Markdown-Links empfohlen, da sie kürzer und übersetzungsfreundlich sind. Zum Beispiel muss ein mit einem Makro erstellter Glossar- oder Referenzlink nicht übersetzt werden: In anderen Sprachversionen wird er automatisch auf die korrekte Version der Datei verlinken.

### Glossar-Links

Das [`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) Makro erstellt einen Link zu einem bestimmten Begriffseintrag im MDN-[Glossar](/de/docs/Glossary). Dieses Makro akzeptiert einen obligatorischen und einen optionalen Parameter:

1. Der Name des Begriffs (z.B. "HTML"): `\{{Glossary("HTML")}}` ergibt [HTML](/de/docs/Glossary/HTML)
2. Optional: Der Text, der im Artikel anstelle des Begriffsnamens angezeigt werden soll: `\{{Glossary("CSS", "Cascading Style Sheets")}}` ergibt [Cascading Style Sheets](/de/docs/Glossary/CSS)

### Verlinkung zu Referenzseiten

Es gibt Makros für die spracheunabhängige Verlinkung zu Seiten in spezifischen Referenzbereichen von MDN: JavaScript, CSS, HTML-Elemente, SVG, etc.

Die Makros sind einfach zu verwenden. Sie müssen nur den Namen des zu verlinkenden Elements im ersten Argument angeben. Die meisten Makros akzeptieren auch ein zweites Argument, mit dem Sie den anzuzeigenden Text ändern können (Dokumentation finden Sie in den Links in der linken Tabellenspalte unten).

<table class="standard-table">
  <thead>
    <tr>
      <th>Makro</th>
      <th>Verlinkt auf Seite unter</th>
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
        Sie können den anzuzeigenden Text mit einem zweiten Parameter ändern: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> ergibt [`getElementsByName()`](/de/docs/Web/API/Document/getElementsByName).
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
        <a href="/de/docs/Web/HTTP/Status">HTTP-Antwortstatuscodes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> ergibt {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigationshilfen für mehrseitige Leitfäden

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) bieten Navigationssteuerung für Artikel, die Teil von Sequenzen sind. Für die einseitigen Vorlagen ist der einzige benötigte Parameter der Wiki-Standort des vorherigen oder nächsten Artikels in der Sequenz. Für [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) sind die zwei benötigten Parameter die Wiki-Standorte der entsprechenden Artikel. Der erste Parameter ist für den vorherigen Artikel und der zweite für den nächsten Artikel.

## Codebeispiele

### Live-Beispiele

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) ermöglicht das Einbetten der Ausgabe eines Codebeispiels auf einer Seite, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link zu einer Seite, die die Ausgabe eines Codebeispiels enthält, wie in [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) beschrieben.
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) ermöglicht das Einbetten von Live-Beispielen von GitHub-Seiten. Weitere Informationen finden Sie unter [GitHub Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Generierung von Seitenleisten

Es gibt Vorlagen für fast jede große Sammlung von Seiten. Sie verlinken typischerweise zurück zur Hauptseite der Referenz/Leitfaden/Tutorial (dies ist oft notwendig, da unsere Brotkrümel-Navigation dies manchmal nicht kann) und ordnen den Artikel der entsprechenden Kategorie zu.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) generiert die Seitenleiste für CSS-Referenzseiten.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) generiert die Seitenleiste für HTML-Referenzseiten.
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) generiert die Seitenleiste für Web API-Referenzseiten.

## Allgemeine Formatierung

### Inline-Indikatoren für API-Dokumentation

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) und [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) werden in API-Dokumentationen verwendet, normalerweise wenn die Liste der Eigenschaften eines Objekts oder Parameter einer Funktion beschrieben werden.

Verwendung: `\{{Optional_Inline}}` oder `\{{ReadOnlyInline}}`. Beispiel:

- `isCustomObject` {{ReadOnlyInline}}
  - : Gibt an, ob das Objekt, wenn `true`, ein benutzerdefiniertes ist.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status- und Kompatibilitätsindikatoren

### Inline-Indikatoren ohne zusätzliche Parameter

#### Nicht standardisiert

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) fügt ein Inline-Zeichen ein, das angibt, dass die API nicht standardisiert ist und sich nicht auf einem Standardtrack befindet.

##### Syntax

`\{{Non-standard_Inline}}`

##### Beispiele

- Icon: {{Non-standard_Inline}}

#### Experimentell

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) fügt ein Inline-Zeichen ein, das angibt, dass die API nicht weit verbreitet implementiert ist und sich in Zukunft ändern könnte. Weitere Informationen zur Definition **experimentell** finden Sie in der Dokumentation [Experimentell, veraltet und überholt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Experimental_Inline}}`

##### Beispiele

- Icon: {{Experimental_Inline}}

### Inline-Indikatoren, die die Angabe der Technologie unterstützen

#### Veraltet

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) fügt ein veraltetes Inline-Zeichen ein ({{Deprecated_Inline}}), um die Nutzung einer offiziell veralteten (oder entfernten) API zu entmutigen. Weitere Informationen zur Definition **veraltet** finden Sie in der Dokumentation [Experimentell, veraltet und überholt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntax

`\{{Deprecated_Inline}}`

##### Beispiele

- Icon: {{Deprecated_Inline}}

### Seiten- oder Abschnittskopf-Indikatoren

Diese Vorlagen haben die gleichen semantischen Bedeutungen wie ihre Inline-Gegenstücke, die oben beschrieben sind. Die Vorlagen sollten direkt unter dem Haupttitel der Seite (oder der Brotkrümel-Navigation, falls verfügbar) auf der Referenzseite platziert werden. Sie können auch verwendet werden, um einen Abschnitt auf einer Seite zu kennzeichnen.

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) wird auf Seiten verwendet, die [experimentelle Funktionen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) dokumentieren. Beispiel: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs). Soll auf Hauptseiten wie Schnittstellenseiten, API-Übersichtsseiten und API-Einstiegspunkten (z.B. `navigator.xyz`) verwendet werden, aber normalerweise nicht auf Unterseiten wie Methoden- und Eigenschaftsseiten. Beispiel: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Anzeige, dass eine Funktion in Web-Workern verfügbar ist

Das Makro [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) fügt einen lokalisierten Hinweis ein, der anzeigt, dass eine Funktion im Kontext eines [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Sie können das Argument `window_and_worker_except_service` verwenden, um anzuzeigen, dass eine Funktion in Web Workern funktioniert, außer in Service Workern.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Beispiele

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Browser-Kompatibilität und Spezifikationsmakros

Die folgenden Makros sind auf allen Referenzseiten enthalten, werden aber von allen Seitentypen unterstützt:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`

  - : Generiert eine [Kompatibilitätstabelle](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für die übergebene Funktion als Parameter. Wenn kein Parameter enthalten ist, wird standardmäßig die durch `browser-compat` im Frontmatter definierte Funktion genutzt. Ein optionaler parameter für die Tiefe gibt an, wie tief untergeordnete Funktionen zur Tabelle hinzugefügt werden sollen. Die Tiefe, falls nicht angegeben, beträgt standardmäßig 1, was bedeutet, dass nur die erste Ebene der Unterfunktionen-Daten von BCD in die Tabelle aufgenommen wird.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Bezieht die Spezifikation für die im Parameter angegebene Funktion ein. Wenn kein Parameter übergeben wird, wird die im `spec_urls` des Frontmatters angegebene Spezifikation verwendet, falls vorhanden, oder aus den in den Browser-Kompatibilitätsdaten angegebenen Spezifikationen, die durch `browser-compat` im Frontmatter definiert sind. Die Spezifikation wird als externer Link gerendert.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Seitenvorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Seitenelemente](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Makros zum Feature-Status](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
