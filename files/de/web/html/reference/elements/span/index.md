---
title: "<span>: Das Content-Span-Element"
slug: Web/HTML/Reference/Elements/span
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<span>`**-[HTML](/de/docs/Web/HTML)-Element ist ein generischer Inline-Container für Textinhalte, der an sich nichts repräsentiert. Es kann verwendet werden, um Elemente für Stilzwecke zu gruppieren (unter Verwendung der Attribute [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)), oder weil sie gemeinsame Attributwerte haben, wie z.B. [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang). Es sollte nur dann verwendet werden, wenn kein anderes semantisches Element geeignet ist. `<span>` ist dem {{HTMLElement("div")}}-Element sehr ähnlich, aber {{HTMLElement("div")}} ist ein {{Glossary("Block-level_content", "Block-Level-Element")}}, während `<span>` ein {{Glossary("Inline-level_content", "Inline-Level-Element")}} ist.

{{InteractiveExample("HTML Demo: &lt;span&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Add the <span class="ingredient">basil</span>,
  <span class="ingredient">pine nuts</span> and
  <span class="ingredient">garlic</span> to a blender and blend into a paste.
</p>

<p>
  Gradually add the <span class="ingredient">olive oil</span> while running the
  blender slowly.
</p>
```

```css interactive-example
span.ingredient {
  color: red;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiel

### Beispiel 1

#### HTML

```html
<p><span>Some text</span></p>
```

#### Ergebnis

{{EmbedLiveSample('Example_1')}}

### Beispiel 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### Ergebnis

{{EmbedLiveSample('Example_2')}}

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Anfangs- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("div")}}-Element
