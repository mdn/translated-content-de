---
title: visibility
slug: Web/SVG/Reference/Attribute/visibility
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Mit dem Attribut **`visibility`** können Sie die Sichtbarkeit grafischer Elemente steuern. Mit dem Wert `hidden` oder `collapse` ist das betreffende grafische Element unsichtbar.

> [!NOTE]
> Wenn das Attribut `visibility` bei einem Textelement auf `hidden` gesetzt ist, ist der Text unsichtbar, belegt aber bei der Berechnung des Textlayouts weiterhin Platz.

Abhängig vom Wert des Attributs {{SVGAttr("pointer-events")}} können grafische Elemente, deren Attribut `visibility` auf `hidden` gesetzt ist, weiterhin Events empfangen.

> [!NOTE]
> Als Präsentationsattribut hat `visibility` auch eine entsprechende CSS-Eigenschaft: {{cssxref("visibility")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
- {{SVGElement("tspan")}}
- `<video>`

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
    fill="none" />
  <g stroke="seagreen" stroke-width="5" fill="skyblue">
    <rect x="20" y="20" width="80" height="80" visibility="visible" />
    <rect x="120" y="20" width="80" height="80" visibility="hidden" />
  </g>
</svg>
```

{{EmbedLiveSample("Example 1", "250", "100")}}

### Beispiel 2

Das folgende Beispiel schaltet die CSS-Eigenschaft `visibility` des SVG-Bildpfads um.

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

{{EmbedLiveSample("Example 2", "100%", "80")}}

## Verwendungshinweise

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
  - : Dieser Wert gibt an, dass das Element nicht gezeichnet wird. Es bleibt jedoch Teil des Rendering-Baums. Das heißt, es kann abhängig vom Attribut {{SVGAttr("pointer-events")}} Pointer-Events empfangen und abhängig vom Attribut {{SVGAttr("tabindex")}} den Fokus erhalten. Außerdem fließt es in die Berechnung der Begrenzungsbox und von Clipping-Pfaden ein und beeinflusst das Textlayout.
- `collapse`
  - : Dieser Wert entspricht `hidden`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Attribut {{SVGAttr("display")}}
- CSS-Eigenschaft {{cssxref("visibility")}}
