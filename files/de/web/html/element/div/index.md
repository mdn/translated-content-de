---
title: "<div>: Das Content Division-Element"
slug: Web/HTML/Element/div
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<div>`** [HTML](/de/docs/Web/HTML)-Element ist der generische Container für Flussinhalte. Es hat keinen Einfluss auf den Inhalt oder das Layout, bis es auf eine bestimmte Weise mit [CSS](/de/docs/Glossary/CSS) gestylt wird (z.B. wird direktes Styling darauf angewendet oder ein Layout-Modell wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) auf sein übergeordnetes Element angewendet).

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

Als "reiner" Container repräsentiert das `<div>`-Element nichts von sich aus. Stattdessen wird es verwendet, um Inhalte zu gruppieren, damit sie leicht mit den Attributen [`class`](/de/docs/Web/HTML/Global_attributes#class) oder [`id`](/de/docs/Web/HTML/Global_attributes#id) gestylt werden können, um einen Abschnitt eines Dokuments als in einer anderen Sprache geschrieben zu markieren (mit dem [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut) und so weiter.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align`-Attribut ist veraltet; verwenden Sie es nicht mehr. Stattdessen sollten Sie CSS-Eigenschaften oder Techniken wie [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [CSS Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) verwenden, um `<div>`-Elemente auf der Seite auszurichten und anzuordnen.

## Verwendungshinweise

- Das `<div>`-Element sollte nur verwendet werden, wenn kein anderes semantisches Element (wie {{HTMLElement("article")}} oder {{HTMLElement("nav")}}) geeignet ist.

## Barrierefreiheit

Das `<div>`-Element hat [eine implizite Rolle von `generic`](https://www.w3.org/TR/wai-aria-1.2/#generic) und nicht `none`. Dies kann bestimmte ARIA-Kombinationsdeklarationen beeinflussen, die erwarten, dass ein direkter Nachkomme mit einer bestimmten Rolle ordnungsgemäß funktioniert.

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

Dieses Beispiel erstellt eine beschattete Box, indem ein Stil auf das `<div>` mit CSS angewendet wird. Beachten Sie die Verwendung des [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attributs im `<div>`, um den Stil namens `"shadowbox"` auf das Element anzuwenden.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>.<br />Oder (in [WHATWG](/de/docs/Glossary/WHATWG) HTML): Wenn das übergeordnete Element ein {{HTMLElement("dl")}}-Element ist: ein oder mehrere {{HTMLElement("dt")}}-Elemente, gefolgt von einem oder mehreren {{HTMLElement("dd")}}-Elementen, optional vermischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert.<br />Oder (in [WHATWG](/de/docs/Glossary/WHATWG) HTML):
        {{HTMLElement("dl")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Any</td>
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
- {{HTMLElement("span")}}-Element zur Stilierung von Textinhalten
