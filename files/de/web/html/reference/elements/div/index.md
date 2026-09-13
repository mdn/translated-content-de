---
title: "`<div>`-HTML-Inhaltsdivisionselement"
short-title: <div>
slug: Web/HTML/Reference/Elements/div
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Das [HTML](/de/docs/Web/HTML)-Element **`<div>`** ist der generische Container für Flow-Inhalte. Es hat keine Auswirkungen auf den Inhalt oder das Layout, bis es mithilfe von {{Glossary("CSS", "CSS")}} auf irgendeine Weise gestaltet wird (z. B. indem Styling direkt darauf angewendet wird oder indem ein Layoutmodell wie [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) auf sein übergeordnetes Element angewendet wird).

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

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> Das Attribut `align` ist veraltet; verwenden Sie es nicht mehr. Verwenden Sie stattdessen CSS-Eigenschaften oder Techniken wie [CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [CSS Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um `<div>`-Elemente auf der Seite auszurichten und zu positionieren.

## Hinweise zur Verwendung

Als „reiner“ Container stellt das Element `<div>` von sich aus nichts dar. Es wird stattdessen verwendet, um Inhalte zu gruppieren, damit sie mithilfe der Attribute [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) oder [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) einfach gestaltet werden können, um einen Abschnitt eines Dokuments als in einer anderen Sprache geschrieben zu kennzeichnen (mithilfe des Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)) und so weiter.

Das Element `<div>` sollte nur verwendet werden, wenn kein anderes semantisches Element (wie {{HTMLElement("article")}} oder {{HTMLElement("nav")}}) geeignet ist.

## Barrierefreiheit

Das Element `<div>` hat [eine implizite Rolle von `generic`](https://w3c.github.io/aria/#generic) und nicht `none`. Dies kann bestimmte ARIA-Kombinationsdeklarationen beeinflussen, die erwarten, dass ein direktes Nachfahr-Element mit einer bestimmten Rolle vorhanden ist, damit sie ordnungsgemäß funktionieren.

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

### Ein gestaltetes Beispiel

Dieses Beispiel erstellt ein schattiertes Feld, indem mithilfe von CSS ein Stil auf das `<div>` angewendet wird. Beachten Sie die Verwendung des Attributs [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) auf dem `<div>`, um den Stil mit dem Namen `"shadowbox"` auf das Element anzuwenden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >, <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >.<br />Oder (in {{Glossary("WHATWG", "WHATWG")}}-HTML): Wenn das Elternelement ein
        {{HTMLElement("dl")}}-Element ist: ein oder mehrere
        {{HTMLElement("dt")}}-Elemente, gefolgt von einem oder mehreren
        {{HTMLElement("dd")}}-Elementen, optional vermischt mit
        {{HTMLElement("script")}}- und
        {{HTMLElement("template")}}-Elementen.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert.<br />Oder (in {{Glossary("WHATWG", "WHATWG")}}-HTML):
        ein {{HTMLElement("dl")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
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
- Element {{HTMLElement("span")}} zum Gestalten von Phrasing-Inhalten
