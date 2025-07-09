---
title: "<var>: Das Variable-Element"
slug: Web/HTML/Reference/Elements/var
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<var>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Namen einer Variablen in einem mathematischen Ausdruck oder einem Programmierszenario. Es wird typischerweise in einer kursiven Version der aktuellen Schriftart dargestellt, obwohl dieses Verhalten vom Browser abhängig ist.

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

## Anwendungshinweise

### Verwandte Elemente

Andere Elemente, die in Kontexten verwendet werden, in denen `<var>` häufig verwendet wird, umfassen:

- {{HTMLElement("code")}}: Das HTML Code-Element
- {{HTMLElement("kbd")}}: Das HTML Tastatureingabe-Element
- {{HTMLElement("samp")}}: Das HTML Beispielausgabe-Element

Wenn Sie auf Code stoßen, der `<var>` fälschlicherweise für stilistische Zwecke anstelle semantischer Zwecke verwendet, sollten Sie entweder ein {{HTMLElement("span")}} mit geeigneter CSS oder ein geeignetes semantisches Element aus den folgenden verwenden:

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### Standardstil

Die meisten Browser wenden {{cssxref("font-style")}} `"italic"` an, wenn `<var>` gerendert wird. Dies kann in CSS überschrieben werden, wie folgt:

```css
var {
  font-style: normal;
}
```

## Beispiele

### Grundlegendes Beispiel

Hier ist ein grundlegendes Beispiel, bei dem `<var>` verwendet wird, um Variablennamen in einer mathematischen Gleichung zu bezeichnen.

```html
<p>An algebraic equation: <var>x</var> = <var>y</var> + 2</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650,80)}}

### Überschreiben des Standardstils

Mit CSS können Sie den Standardstil des `<var>`-Elements überschreiben. In diesem Beispiel werden Variablennamen fett dargestellt, unter Verwendung von Courier, falls verfügbar, andernfalls wird auf die standardmäßige Monospace-Schrift zurückgegriffen.

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

Dieser HTML-Code verwendet `<var>`, um die Namen zweier Variablen einzuschließen.

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_style", 650, 140)}}

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
