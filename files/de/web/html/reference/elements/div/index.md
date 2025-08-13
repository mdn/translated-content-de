---
title: "<div>: Das Content-Division-Element"
slug: Web/HTML/Reference/Elements/div
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<div>`** [HTML](/de/docs/Web/HTML) Element ist der generische Container für Flussinhalt. Es hat keine Auswirkung auf den Inhalt oder das Layout, bis es in irgendeiner Weise mithilfe von {{Glossary("CSS", "CSS")}} gestaltet wird (z.B. wenn direktes Styling darauf angewendet wird oder ein Layout-Modell wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) auf das Elternelement angewendet wird).

{{InteractiveExample("HTML Demo: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge red;
  background-color: yellow;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

Als "reiner" Container repräsentiert das `<div>` Element nichts Eigenes. Stattdessen wird es verwendet, um Inhalte zu gruppieren, sodass sie leicht unter Verwendung der [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribute gestylt werden können, um einen Abschnitt eines Dokuments als in einer anderen Sprache geschrieben zu markieren (mittels des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attributs), und so weiter.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

> [!NOTE]
> Das `align` Attribut ist veraltet; verwenden Sie es nicht mehr. Stattdessen sollten Sie CSS-Eigenschaften oder -Techniken wie [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [CSS Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) verwenden, um `<div>` Elemente auf der Seite auszurichten und zu positionieren.

## Verwendungshinweise

- Das `<div>` Element sollte nur verwendet werden, wenn kein anderes semantisches Element (wie {{HTMLElement("article")}} oder {{HTMLElement("nav")}}) geeignet ist.

## Barrierefreiheit

Das `<div>` Element hat [eine implizite Rolle von `generic`](https://w3c.github.io/aria/#generic), und nicht keine. Dies kann bestimmte ARIA-Kombinationserklärungen beeinflussen, die erwarten, dass ein direkter Nachfahre mit einer bestimmten Rolle korrekt funktioniert.

## Beispiele

### Ein grundlegendes Beispiel

```html
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("A_basic_example", 650, 60)}}

### Ein gestyltes Beispiel

Dieses Beispiel erstellt eine beschattete Box, indem ein Stil mithilfe von CSS auf das `<div>` angewendet wird. Beachten Sie die Verwendung des [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attributs auf dem `<div>`, um den Stil namens `"shadowbox"` auf das Element anzuwenden.

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
  border: 1px solid #333333;
  box-shadow: 8px 8px 5px #444444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, white, #dddddd 40%, #cccccc);
}
```

#### Ergebnis

{{EmbedLiveSample("A_styled_example", 650, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>.<br />Oder (in {{Glossary("WHATWG", "WHATWG")}} HTML): Wenn das Elternelement ein {{HTMLElement("dl")}} Element ist: eines oder mehrere {{HTMLElement("dt")}} Elemente gefolgt von einem oder mehreren {{HTMLElement("dd")}} Elementen, optional vermischt mit {{HTMLElement("script")}} und {{HTMLElement("template")}} Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert.<br />Oder (in {{Glossary("WHATWG", "WHATWG")}} HTML): {{HTMLElement("dl")}} Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a></code>
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
- {{HTMLElement("span")}} Element für das Styling von Formatinhalten
