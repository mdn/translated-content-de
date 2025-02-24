---
title: "<p>: Das Absatzelement"
slug: Web/HTML/Element/p
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<p>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert einen Absatz. In visuellen Medien werden Absätze normalerweise als Textblöcke dargestellt, die durch Leerzeilen und/oder Einrückungen der ersten Zeile von benachbarten Blöcken getrennt sind. HTML-Absätze können jedoch jede strukturelle Gruppierung verwandter Inhalte sein, wie Bilder oder Formularfelder.

Absätze sind {{Glossary("Block-level_content", "Block-Elemente")}} und schließen sich bemerkenswerterweise automatisch, wenn ein anderes Block-Element vor dem schließenden `</p>`-Tag geparst wird. Siehe "Tag-Auslassung" unten.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align`-Attribut bei `<p>`-Tags ist veraltet und sollte nicht verwendet werden.

## Barrierefreiheit

Das Aufteilen von Inhalten in Absätze trägt dazu bei, eine Seite zugänglicher zu machen. Bildschirmlesegeräte und andere unterstützende Technologien bieten Abkürzungen, mit denen Benutzer direkt zum nächsten oder vorherigen Absatz springen können, sodass sie Inhalte überfliegen können, ähnlich wie visuelle Benutzer durch Leerraum navigieren können.

Die Verwendung leerer `<p>`-Elemente, um Abstand zwischen Absätzen zu schaffen, ist problematisch für Personen, die mit Bildschirmlesetechnologie navigieren. Bildschirmleser können das Vorhandensein des Absatzes ankündigen, aber nicht die darin enthaltenen Inhalte, da keine vorhanden sind. Dies kann die Person, die den Bildschirmleser benutzt, verwirren und frustrieren.

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

## Stilierung von Absätzen

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
          >Fluss-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das öffnende Tag ist erforderlich. Das schließende Tag kann weggelassen werden, wenn das
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
        {{HTMLElement("ul")}} oder einem anderen <code>&lt;p&gt;</code>-Element oder wenn es keine weiteren Inhalte im Elternelement gibt und das Elternelement kein {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} oder {{HTMLElement("video")}}-Element,
        oder ein autonomes benutzerdefiniertes Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles"
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
