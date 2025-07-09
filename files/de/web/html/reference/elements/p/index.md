---
title: "<p>: Das Absatz-Element"
slug: Web/HTML/Reference/Elements/p
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<p>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen Absatz. Absätze werden in visuellen Medien gewöhnlich als Textblöcke dargestellt, die durch Leerzeilen und/oder Einrückung der ersten Zeile von angrenzenden Blöcken getrennt sind. HTML-Absätze können jedoch jede strukturelle Gruppierung von verwandtem Inhalt sein, wie z. B. Bilder oder Formularfelder.

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
  border: 1px solid #999;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das `align`-Attribut in `<p>`-Tags ist veraltet und sollte nicht verwendet werden.

## Barrierefreiheit

Das Aufteilen von Inhalten in Absätze trägt dazu bei, eine Seite zugänglicher zu machen. Screenreader und andere unterstützende Technologien bieten Abkürzungen, um den Nutzern zu ermöglichen, zum nächsten oder vorherigen Absatz zu springen, sodass sie Inhalte überfliegen können, ähnlich wie visuelle Nutzer durch Leerraum navigieren.

Die Verwendung leerer `<p>`-Elemente, um Platz zwischen Absätzen zu schaffen, ist problematisch für Personen, die mit Screenreader-Technologie navigieren. Screenreader können das Vorhandensein des Absatzes ankündigen, aber keinen enthaltenen Inhalt – da keiner vorhanden ist. Dies kann die Person, die den Screenreader verwendet, verwirren und frustrieren.

Wenn zusätzlicher Raum gewünscht ist, verwenden Sie {{Glossary("CSS", "CSS")}}-Eigenschaften wie {{cssxref("margin")}}, um den Effekt zu erzielen:

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

## Formatierung von Absätzen

Standardmäßig trennen Browser Absätze mit einer einzigen Leerzeile. Alternative Trennmethoden, wie das Einrücken der ersten Zeile, können mit {{Glossary("CSS", "CSS")}} erreicht werden:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung von Inhalten</a
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
        {{HTMLElement("ul")}} oder einem weiteren <code>&lt;p&gt;</code>
        -Element, oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist und das
        übergeordnete Element kein {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} oder {{HTMLElement("video")}}-Element,
        oder ein autonomes benutzerdefiniertes Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
