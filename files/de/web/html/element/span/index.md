---
title: "<span>: Das Inhalts-Span-Element"
slug: Web/HTML/Element/span
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<span>`** [HTML](/de/docs/Web/HTML)-Element ist ein generischer Inline-Container für Textinhalte, der an sich nichts darstellt. Es kann verwendet werden, um Elemente für Stilzwecke zu gruppieren (mithilfe der Attribute [`class`](/de/docs/Web/HTML/Global_attributes#class) oder [`id`](/de/docs/Web/HTML/Global_attributes#id)), oder weil sie gemeinsame Attributwerte wie [`lang`](/de/docs/Web/HTML/Global_attributes#lang) teilen. Es sollte nur verwendet werden, wenn kein anderes semantisches Element geeignet ist. `<span>` ist dem {{HTMLElement("div")}}-Element sehr ähnlich, aber {{HTMLElement("div")}} ist ein [Block-Level-Element](/de/docs/Glossary/Block-level_content), während ein `<span>` ein [Inline-Level-Element](/de/docs/Glossary/Inline-level_content) ist.

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassen</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        > oder
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- HTML {{HTMLElement("div")}}-Element
