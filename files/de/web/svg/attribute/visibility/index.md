---
title: visibility
slug: Web/SVG/Attribute/visibility
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das Attribut **`visibility`** ermöglicht Ihnen die Kontrolle über die Sichtbarkeit von grafischen Elementen. Mit einem Wert von `hidden` oder `collapse` wird das aktuelle Grafikelement unsichtbar.

> [!NOTE]
> Wenn das `visibility`-Attribut auf einem Textelement auf `hidden` gesetzt ist, wird der Text unsichtbar, nimmt aber weiterhin Platz in den Textlayout-Berechnungen ein.

Abhängig vom Wert des Attributs {{SVGAttr("pointer-events")}} können grafische Elemente, die ihr `visibility`-Attribut auf `hidden` gesetzt haben, weiterhin Ereignisse empfangen.

> [!NOTE]
> Als Präsentationsattribut kann `visibility` als CSS-Eigenschaft verwendet werden. Siehe die CSS-Eigenschaft {{cssxref("visibility")}} für weitere Informationen.

## Elemente

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  - : Dieser Wert gibt an, dass das Element nicht gezeichnet wird. Es ist jedoch weiterhin Teil des Rendering-Baums, d. h., es kann Zeigereignisse je nach Attribut {{SVGAttr("pointer-events")}} empfangen, je nach Attribut {{SVGAttr("tabindex")}} den Fokus erhalten, trägt zur Berechnung der Begrenzungsrahmen und der Clipping-Pfade bei und beeinflusst das Textlayout.
- `collapse`
  - : Dieser Wert ist gleich `hidden`.

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

{{EmbedLiveSample("Example 1", "250", "100")}}

### Beispiel 2

Das folgende Beispiel wechselt die CSS-`visibility` des SVG-Bildpfads um.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("display")}}-Attribut
- CSS {{cssxref("visibility")}}-Eigenschaft
