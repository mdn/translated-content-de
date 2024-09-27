---
title: "<div>: Das Content Division Element"
slug: Web/HTML/Element/div
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<div>`** [HTML](/de/docs/Web/HTML)-Element ist der generische Container für Flussinhalte. Es hat keinen Einfluss auf den Inhalt oder das Layout, bis es in irgendeiner Form mit [CSS](/de/docs/Glossary/CSS) gestaltet wird (z.B. wird es direkt gestaltet oder es wird ein Layoutmodell wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) auf das Elternelement angewendet).

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

Als "reiner" Container repräsentiert das `<div>`-Element von sich aus nichts. Es wird verwendet, um Inhalte zu gruppieren, damit sie leicht mit den Attributen [`class`](/de/docs/Web/HTML/Global_attributes#class) oder [`id`](/de/docs/Web/HTML/Global_attributes#id) gestaltet werden können, um einen Abschnitt eines Dokuments als in einer anderen Sprache geschrieben zu markieren (mit dem [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut) und so weiter.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align`-Attribut ist veraltet; verwenden Sie es nicht mehr. Stattdessen sollten Sie CSS-Eigenschaften oder Techniken wie [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [CSS Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) verwenden, um `<div>`-Elemente auf der Seite auszurichten und zu positionieren.

## Verwendungshinweise

- Das `<div>`-Element sollte nur verwendet werden, wenn kein anderes semantisches Element (wie {{HTMLElement("article")}} oder {{HTMLElement("nav")}}) geeignet ist.

## Barrierefreiheit

Das `<div>`-Element hat [eine implizite Rolle von `generic`](https://www.w3.org/TR/wai-aria-1.2/#generic) und nicht `none`. Dies kann bestimmte ARIA-Kombinationserklärungen beeinflussen, die erwarten, dass ein direkter Nachfahrelement mit einer bestimmten Rolle ordnungsgemäß funktioniert.

## Beispiele

### Ein einfaches Beispiel

```html
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("A_simple_example", 650, 60)}}

### Ein gestyltes Beispiel

Dieses Beispiel erstellt eine schattierte Box, indem ein Stil mit CSS auf das `<div>` angewendet wird. Beachten Sie die Verwendung des [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attributs auf dem `<div>`, um den Stil namens `"shadowbox"` auf das Element anzuwenden.

#### HTML

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a lovely shadowed box.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Ergebnis

{{EmbedLiveSample("A_styled_example", 650, 120)}}

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
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.<br />Oder (in [WHATWG](/de/docs/Glossary/WHATWG) HTML): Wenn das Elternelement ein
        {{HTMLElement("dl")}}-Element ist: eines oder mehrere
        {{HTMLElement("dt")}}-Elemente gefolgt von einem oder mehreren
        {{HTMLElement("dd")}}-Elementen, optional vermischt mit
        {{HTMLElement("script")}}- und
        {{HTMLElement("template")}}-Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.<br />Oder (in [WHATWG](/de/docs/Glossary/WHATWG) HTML):
        {{HTMLElement("dl")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Semantische Abschnittselemente: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- {{HTMLElement("span")}}-Element zur Gestaltung von Phraseninhalt
