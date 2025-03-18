---
title: visibility
slug: Web/SVG/Reference/Attribute/visibility
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`visibility`**-Attribut ermöglicht es Ihnen, die Sichtbarkeit von grafischen Elementen zu steuern. Mit einem Wert von `hidden` oder `collapse` ist das aktuelle Grafikelement unsichtbar.

> [!NOTE]
> Wenn das `visibility`-Attribut auf einem Textelement auf `hidden` gesetzt ist, dann ist der Text unsichtbar, nimmt aber dennoch Platz in den Textlayout-Berechnungen ein.

Abhängig vom Wert des Attributs {{SVGAttr("pointer-events")}} können Grafikelemente, deren `visibility`-Attribut auf `hidden` gesetzt ist, dennoch Ereignisse empfangen.

> [!NOTE]
> Als Präsentationsattribut hat `visibility` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("visibility")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- `<audio>`
- `<canvas>`
- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- `<iframe>`
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- `<video>`

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>collapse</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `visible`
  - : Dieser Wert gibt an, dass das Element gezeichnet wird.
- `hidden`
  - : Dieser Wert gibt an, dass das Element nicht gezeichnet wird. Es ist jedoch weiterhin Teil des Rendering-Baums, d.h. es kann Pointer-Ereignisse empfangen, abhängig vom {{SVGAttr("pointer-events")}}-Attribut, kann den Fokus erhalten, abhängig vom {{SVGAttr("tabindex")}}-Attribut, trägt zu Berechnungen des Begrenzungsrahmens und Zuschnitts bei und beeinflusst das Textlayout.
- `collapse`
  - : Dieser Wert entspricht `hidden`.

## Beispiele

### Beispiel 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <rect
    x="10"
    y="10"
    width="200"
    height="100"
    stroke="black"
    stroke-width="5"
    fill="transparent" />
  <g stroke="seagreen" stroke-width="5" fill="skyblue">
    <rect x="20" y="20" width="80" height="80" visibility="visible" />
    <rect x="120" y="20" width="80" height="80" visibility="hidden" />
  </g>
</svg>
```

{{EmbedLiveSample("Beispiel 1", "250", "100")}}

### Beispiel 2

Das folgende Beispiel wechselt die CSS `visibility` des SVG-Bildpfads.

#### HTML

```html
<button id="nav-toggle-button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    class="button-icon">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
      class="invisible" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
  <span> click me </span>
</button>
```

#### CSS

```css
svg {
  display: inline !important;
}
span {
  vertical-align: 50%;
}
button {
  line-height: 1em;
}
.invisible {
  visibility: hidden;
}
```

#### JavaScript

```js
const button = document.querySelector("button");
button.addEventListener("click", (evt) => {
  button
    .querySelector("svg > path:nth-of-type(1)")
    .classList.toggle("invisible");
  button
    .querySelector("svg > path:nth-of-type(2)")
    .classList.toggle("invisible");
});
```

#### Ergebnis

{{EmbedLiveSample("Beispiel 2", "100%", "80")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("display")}}-Attribut
- CSS {{cssxref("visibility")}}-Eigenschaft
