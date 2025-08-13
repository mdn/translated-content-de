---
title: "<p>: Das Paragraf-Element"
slug: Web/HTML/Reference/Elements/p
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<p>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Absatz. Absätze werden in visuellen Medien normalerweise als Textblöcke dargestellt, die durch Leerzeilen und/oder Einrückungen der ersten Zeile von angrenzenden Blöcken getrennt sind. HTML-Absätze können jedoch jede strukturelle Gruppierung verwandter Inhalte darstellen, wie Bilder oder Formularfelder.

Absätze sind {{Glossary("Block-level_content", "Block-Level-Elemente")}} und werden insbesondere automatisch geschlossen, wenn ein anderes Block-Level-Element vor dem schließenden `</p>`-Tag geparst wird. Siehe "Tag-Auslassung" unten.

{{InteractiveExample("HTML Demo: &lt;p&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Geckos are a group of usually small, usually nocturnal lizards. They are found
  on every continent except Antarctica.
</p>

<p>
  Some species live in houses where they hunt insects attracted by artificial
  light.
</p>
```

```css interactive-example
p {
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #999999;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das `align`-Attribut bei `<p>`-Tags ist veraltet und sollte nicht verwendet werden.

## Barrierefreiheit

Das Aufteilen von Inhalten in Absätze hilft, eine Seite zugänglicher zu machen. Bildschirmlesegeräte und andere unterstützende Technologien bieten Abkürzungen, damit Benutzer zum nächsten oder vorherigen Absatz springen können, was ihnen ermöglicht, Inhalte zu überfliegen, ähnlich wie Leerraum es visuellen Benutzern ermöglicht, den Inhalt zu überspringen.

Die Verwendung leerer `<p>`-Elemente, um Platz zwischen Absätzen zu schaffen, ist problematisch für Menschen, die mit Bildschirmlesetechnologie navigieren. Bildschirmlesegeräte können die Anwesenheit des Absatzes ankündigen, aber nicht den enthaltenen Inhalt – da kein Inhalt vorhanden ist. Dies kann die Person, die den Bildschirmleser benutzt, verwirren und frustrieren.

Wenn zusätzlicher Raum gewünscht wird, verwenden Sie {{Glossary("CSS", "CSS")}}-Eigenschaften wie {{cssxref("margin")}}, um den Effekt zu erzielen:

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

### Resultat

{{EmbedLiveSample('Examples')}}

## Formatierung von Absätzen

Standardmäßig trennen Browser Absätze mit einer einzelnen Leerzeile. Alternative Trennmethoden, wie die Einrückung der ersten Zeile, können mit {{Glossary("CSS", "CSS")}} erreicht werden:

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

### Resultat

{{EmbedLiveSample('Styling_paragraphs')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Auszeichnungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann weggelassen werden, wenn das
        <code>&lt;p&gt;</code>-Element sofort gefolgt wird von einem
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
        {{HTMLElement("ul")}} oder einem anderen <code>&lt;p&gt;</code>
        Element folgt, oder wenn es keinen weiteren Inhalt im Elternelement gibt und das
        Elternelement kein {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} oder {{HTMLElement("video")}} Element ist
        oder ein autonomes benutzerdefiniertes Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles"
          >Absatz</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Irgendeine</td>
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
