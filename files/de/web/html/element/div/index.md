---
title: "<div>: Das Content Division-Element"
slug: Web/HTML/Element/div
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{HTMLSidebar}}

Das **`<div>`** [HTML](/de/docs/Web/HTML) Element ist der generische Container für Flow-Inhalt. Es hat keine Auswirkungen auf den Inhalt oder das Layout, bis es auf irgendeine Weise mit {{Glossary("CSS", "CSS")}} gestaltet wird (z. B. wenn direktes Styling darauf angewendet wird oder ein Layout-Modell wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) auf sein Elternelement angewendet wird).

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

Als "reiner" Container repräsentiert das `<div>` Element an sich nichts. Stattdessen wird es verwendet, um Inhalt zu gruppieren, sodass er einfach mit den Attributen [`class`](/de/docs/Web/HTML/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Global_attributes/id) gestylt werden kann, um einen Abschnitt eines Dokuments als in einer anderen Sprache verfasst zu markieren (mit dem Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang)) und so weiter.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align` Attribut ist veraltet; verwenden Sie es nicht mehr. Stattdessen sollten Sie CSS-Eigenschaften oder Techniken wie [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [CSS Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) verwenden, um `<div>` Elemente auf der Seite auszurichten und zu positionieren.

## Verwendungshinweise

- Das `<div>` Element sollte nur verwendet werden, wenn kein anderes semantisches Element (wie z. B. {{HTMLElement("article")}} oder {{HTMLElement("nav")}}) geeignet ist.

## Barrierefreiheit

Das `<div>` Element hat [eine implizite Rolle von `generic`](https://www.w3.org/TR/wai-aria-1.2/#generic), und nicht keine. Dies kann bestimmte ARIA-Kombinationsdeklarationen beeinflussen, die erwarten, dass ein unmittelbares Nachfahr-Element mit einer bestimmten Rolle ordnungsgemäß funktioniert.

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

Dieses Beispiel erzeugt eine schattierte Box, indem es ein Stil auf die `<div>` mittels CSS anwendet. Beachten Sie die Verwendung des Attributs [`class`](/de/docs/Web/HTML/Global_attributes/class) auf der `<div>`, um den Stil namens `"shadowbox"` auf das Element anzuwenden.

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
          >Flow-Inhalt</a
        >, <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.<br />Oder (in {{Glossary("WHATWG", "WHATWG")}} HTML): Wenn das übergeordnete Element ein {{HTMLElement("dl")}} Element ist: eines oder mehrere {{HTMLElement("dt")}} Elemente, gefolgt von einem oder mehreren {{HTMLElement("dd")}} Elementen, optional durchmischt mit {{HTMLElement("script")}} und {{HTMLElement("template")}} Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow-Inhalt</a> akzeptiert.<br />Oder (in {{Glossary("WHATWG", "WHATWG")}} HTML): {{HTMLElement("dl")}}-Element.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- {{HTMLElement("span")}} Element für das Styling von Phraseninhalten
