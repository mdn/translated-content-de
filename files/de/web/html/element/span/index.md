---
title: "<span>: Das Content Span-Element"
slug: Web/HTML/Element/span
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<span>`**-[HTML](/de/docs/Web/HTML)-Element ist ein generischer Inline-Container für Phrasierungsinhalte, das von sich aus nichts repräsentiert. Es kann verwendet werden, um Elemente für Styling-Zwecke zu gruppieren (unter Verwendung der [`class`](/de/docs/Web/HTML/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribute), oder weil sie gemeinsame Attributwerte wie [`lang`](/de/docs/Web/HTML/Global_attributes/lang) teilen. Es sollte nur verwendet werden, wenn kein anderes semantisches Element geeignet ist. `<span>` ist dem {{HTMLElement("div")}}-Element sehr ähnlich, aber {{HTMLElement("div")}} ist ein {{Glossary("Block-level_content", "Block-Level-Element")}}, während ein `<span>` ein {{Glossary("Inline-level_content", "Inline-Level-Element")}} ist.

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
  color: #f00;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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

- HTML {{HTMLElement("div")}}-Element
