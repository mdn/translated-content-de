---
title: "<p>: Das Paragraph-Element"
slug: Web/HTML/Element/p
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<p>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Paragraphen. Paragraphen werden in visuellen Medien normalerweise als Textblöcke dargestellt, die von benachbarten Blöcken durch Leerräume und/oder Einrückung der ersten Zeile getrennt sind. HTML-Paragraphen können jedoch jede strukturelle Gruppierung von verwandten Inhalten, wie etwa Bilder oder Formularfelder, sein.

Paragraphen sind {{Glossary("Block-level_content", "Block-Level-Elemente")}} und schließen sich automatisch, wenn ein weiteres Block-Level-Element vor dem schließenden `</p>`-Tag geparst wird. Siehe "Tag-Auslassung" unten.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align`-Attribut bei `<p>`-Tags ist veraltet und sollte nicht verwendet werden.

## Barrierefreiheit

Die Aufteilung von Inhalten in Paragraphen trägt dazu bei, eine Seite zugänglicher zu machen. Screenreader und andere unterstützende Technologien bieten Abkürzungen, um ihren Nutzern zu ermöglichen, zum nächsten oder vorherigen Paragraphen zu springen, sodass sie Inhalte ähnlich überfliegen können, wie Leerraum es visuellen Nutzern ermöglicht, sich zu orientieren.

Die Verwendung von leeren `<p>`-Elementen, um Platz zwischen Paragraphen hinzuzufügen, ist problematisch für Menschen, die mit screenlesender Technologie navigieren. Screenreader könnten die Anwesenheit des Paragraphen ankündigen, jedoch keinen innerhalb enthaltenen Inhalt — weil keiner vorhanden ist. Dies kann die Person, die den Screenreader verwendet, verwirren und frustrieren.

Wenn zusätzlicher Leerraum gewünscht ist, verwenden Sie {{Glossary("CSS", "CSS")}}-Eigenschaften wie {{cssxref("margin")}}, um den Effekt zu erzielen:

```css
p {
  margin-bottom: 2em; /* increase white space after a paragraph */
}
```

## Beispiele

### HTML

```html
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>
<p>
  This is the second paragraph. This is the second paragraph. This is the second
  paragraph. This is the second paragraph.
</p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Formatierung von Paragraphen

Standardmäßig trennen Browser Paragraphen mit einer einzigen Leerzeile. Alternative Trennmethoden, wie die Einrückung der ersten Zeile, können mit {{Glossary("CSS", "CSS")}} erreicht werden:

### HTML

```html
<p>
  Separating paragraphs with blank lines is easiest for readers to scan, but
  they can also be separated by indenting their first lines. This is often used
  to take up less space, such as to save paper in print.
</p>

<p>
  Writing that is intended to be edited, such as school papers and rough drafts,
  uses both blank lines and indentation for separation. In finished works,
  combining both is considered redundant and amateurish.
</p>

<p>
  In very old writing, paragraphs were separated with a special character: ¶,
  the <i>pilcrow</i>. Nowadays, this is considered claustrophobic and hard to
  read.
</p>

<p>
  How hard to read? See for yourself:
  <button data-toggle-text="Oh no! Switch back!">
    Use pilcrow for paragraphs
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### Ergebnis

{{EmbedLiveSample('Styling_paragraphs')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließende Inhalte</a
        >, palpable Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzfragmente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;p&gt;</code>-Element unmittelbar gefolgt wird von einem
        {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("details")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("figcaption")}}, {{HTMLElement("figure")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}},
        {{HTMLElement("main")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("search")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} oder einem anderen <code>&lt;p&gt;</code>-Element,
        oder wenn kein weiterer Inhalt im Eltern-Element vorhanden ist und das
        Eltern-Element kein {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} oder {{HTMLElement("video")}}-Element,
        oder ein autonomes benutzerdefiniertes Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließende Inhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
