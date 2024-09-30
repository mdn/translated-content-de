---
title: "<var>: Das Variable-Element"
slug: Web/HTML/Element/var
l10n:
  sourceCommit: 4de810dd8ec0d4a2a62f63991a6897fb5f5ac3e3
---

{{HTMLSidebar}}

Das **`<var>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert den Namen einer Variablen in einem mathematischen Ausdruck oder in einem Programmierkontext. Es wird typischerweise in einer kursiven Version der aktuellen Schriftart dargestellt, obwohl dieses Verhalten vom Browser abhängt.

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

### Verwandte Elemente

Andere Elemente, die in Kontexten verwendet werden, in denen `<var>` häufig verwendet wird, umfassen:

- {{HTMLElement("code")}}: Das HTML-Code-Element
- {{HTMLElement("kbd")}}: Das HTML-Tastatureingabe-Element
- {{HTMLElement("samp")}}: Das HTML-Ausgabe-Beispiel-Element

Wenn Sie auf Code treffen, der fälschlicherweise `<var>` für Stilzwecke anstelle von semantischen Zwecken verwendet, sollten Sie entweder ein {{HTMLElement("span")}} mit entsprechendem CSS verwenden oder ein geeignetes semantisches Element aus den folgenden:

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

Hier ist ein einfaches Beispiel, in dem `<var>` verwendet wird, um Variablennamen in einer mathematischen Gleichung darzustellen.

```html
<p>A simple equation: <var>x</var> = <var>y</var> + 2</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650,80)}}

### Überschreiben des Standardstils

Mit CSS können Sie den Standardstil für das `<var>`-Element überschreiben. In diesem Beispiel werden Variablennamen fett dargestellt, unter Verwendung von Courier, falls verfügbar, andernfalls wird auf die Standardschriftart mit fester Breite zurückgegriffen.

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

Dieses HTML verwendet `<var>`, um die Namen von zwei Variablen einzuschließen.

#### Ergebnis

{{EmbedLiveSample("Overriding_the_default_style", 650, 140)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrucksinhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrucksinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tags weglassen</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Ausdrucksinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
