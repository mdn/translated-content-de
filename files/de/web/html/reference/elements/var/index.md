---
title: "<var>: Das Variable-Element"
slug: Web/HTML/Reference/Elements/var
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<var>`** [HTML](/de/docs/Web/HTML) Element repräsentiert den Namen einer Variablen in einem mathematischen Ausdruck oder in einem Programmierkontext. Es wird typischerweise in einer kursiven Version der aktuellen Schriftart präsentiert, obwohl dieses Verhalten vom Browser abhängig ist.

{{InteractiveExample("HTML Demo: &lt;var&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where
  <var>l</var> represents the length, <var>w</var> the width and
  <var>h</var> the height of the box.
</p>
```

```css interactive-example
var {
  font-weight: bold;
}
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

### Verwandte Elemente

Andere Elemente, die in Kontexten verwendet werden, in denen `<var>` üblicherweise benutzt wird, sind:

- {{HTMLElement("code")}}: Das HTML Code-Element
- {{HTMLElement("kbd")}}: Das HTML Tastatureingabe-Element
- {{HTMLElement("samp")}}: Das HTML Beispielausgabe-Element

Falls Sie auf Code stoßen, der `<var>` fälschlicherweise aus Stilgründen anstelle von semantischen Zwecken verwendet, sollten Sie entweder ein {{HTMLElement("span")}} mit entsprechender CSS oder ein geeignetes semantisches Element unter den folgenden verwenden:

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### Standardstil

Die meisten Browser wenden {{cssxref("font-style")}} `"italic"` an, wenn `<var>` gerendert wird. Dies kann in CSS wie folgt überschrieben werden:

```css
var {
  font-style: normal;
}
```

## Beispiele

### Einfaches Beispiel

Hier ist ein einfaches Beispiel, das `<var>` verwendet, um Variablennamen in einer mathematischen Gleichung zu kennzeichnen.

```html
<p>An algebraic equation: <var>x</var> = <var>y</var> + 2</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650,80)}}

### Überschreiben des Standardstils

Mit CSS können Sie den Standardstil für das `<var>`-Element überschreiben. In diesem Beispiel werden Variablennamen fett dargestellt, wobei Courier verwendet wird, wenn verfügbar. Ansonsten wird die standardmäßige Monospace-Schriftart genutzt.

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html
<p>
  The variables <var>minSpeed</var> and <var>maxSpeed</var> control the minimum
  and maximum speed of the apparatus in revolutions per minute (RPM).
</p>
```

Dieses HTML nutzt `<var>`, um die Namen von zwei Variablen einzuschließen.

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_style", 650, 140)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
