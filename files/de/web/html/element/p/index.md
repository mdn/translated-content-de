---
title: "<p>: Das Paragraph-Element"
slug: Web/HTML/Element/p
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<p>`**-Element [HTML](/de/docs/Web/HTML) stellt einen Absatz dar. Absätze werden in visuellen Medien normalerweise als Textblöcke dargestellt, die durch Leerzeilen und/oder Einzüge der ersten Zeile von angrenzenden Blöcken getrennt sind. HTML-Absätze können jedoch auch jede strukturelle Gruppierung von verwandtem Inhalt, wie Bilder oder Formularelemente, umfassen.

Absätze sind [Block-Elemente](/de/docs/Glossary/Block-level_content) und schließen sich automatisch, wenn ein anderes Block-Element vor dem schließenden `</p>`-Tag geparst wird. Siehe "Tag-Auslassung" unten.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align`-Attribut bei `<p>`-Tags ist veraltet und sollte nicht verwendet werden.

## Barrierefreiheit

Das Aufteilen von Inhalten in Absätze trägt zur Zugänglichkeit einer Seite bei. Screenreader und andere unterstützende Technologien bieten Abkürzungen, damit ihre Benutzer zum nächsten oder vorherigen Absatz springen können, was ihnen ermöglicht, den Inhalt zu überfliegen, ähnlich wie Leerraum es visuellen Nutzern ermöglicht, zwischen Inhalten zu springen.

Leere `<p>`-Elemente zu verwenden, um Platz zwischen Absätzen zu schaffen, kann für Personen, die mit Screenreader-Technologie navigieren, problematisch sein. Screenreader könnten das Vorhandensein des Absatzes ankündigen, aber keinen Inhalt innerhalb desselben - da keiner vorhanden ist. Dies kann die Person, die den Screenreader verwendet, verwirren und frustrieren.

Wenn zusätzlicher Platz gewünscht wird, verwenden Sie [CSS](/de/docs/Glossary/CSS)-Eigenschaften wie {{cssxref("margin")}}, um den Effekt zu erzielen:

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

## Absätze stylen

Standardmäßig trennen Browser Absätze mit einer einzelnen Leerzeile. Alternativen zur Trennung, wie Einzüge der ersten Zeile, können mit [CSS](/de/docs/Glossary/CSS) erreicht werden:

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrase-Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag ist erforderlich. Das End-Tag kann ausgelassen werden, wenn das
        <code>&lt;p&gt;</code>-Element direkt von einem
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
        {{HTMLElement("ul")}} oder einem anderen <code>&lt;p&gt;</code>-Element gefolgt ist,
        oder wenn es im Elternelement keinen weiteren Inhalt gibt und das
        Elternelement kein {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} oder {{HTMLElement("video")}}-Element
        oder ein autonomes benutzerdefiniertes Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles">paragraph</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Any</td>
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
