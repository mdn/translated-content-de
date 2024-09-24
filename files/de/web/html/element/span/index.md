---
title: "<span>: Das Inhaltsspan-Element"
slug: Web/HTML/Element/span
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<span>`** [HTML](/de/docs/Web/HTML)-Element ist ein generischer Inline-Container für Phraseninhalt, der an sich nichts repräsentiert. Es kann verwendet werden, um Elemente für Stilzwecke (durch die Attribute [`class`](/de/docs/Web/HTML/Global_attributes#class) oder [`id`](/de/docs/Web/HTML/Global_attributes#id)) zu gruppieren oder weil sie gemeinsame Attributwerte, wie z.B. [`lang`](/de/docs/Web/HTML/Global_attributes#lang), teilen. Es sollte nur verwendet werden, wenn kein anderes semantisches Element geeignet ist. `<span>` ist dem {{HTMLElement("div")}} Element sehr ähnlich, jedoch ist {{HTMLElement("div")}} ein [Block-Level-Element](/de/docs/Glossary/Block-level_content), während `<span>` ein [Inline-Level-Element](/de/docs/Glossary/Inline-level_content) ist.

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiel

### Beispiel 1

#### HTML

```html
<p><span>Einige Texte</span></p>
```

#### Ergebnis

{{EmbedLiveSample('Example_1')}}

### Beispiel 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">Sehen Sie mein Portfolio</a>
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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
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
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        {{domxref("HTMLSpanElement")}}
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("div")}} Element
