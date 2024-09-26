---
title: pointer-events
slug: Web/SVG/Attribute/pointer-events
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`pointer-events`** Attribut ist ein Präsentationsattribut, das erlaubt zu definieren, ob oder wann ein Element das Ziel eines Mausereignisses sein kann.

> [!NOTE]
> Als Präsentationsattribut kann {{cssxref('pointer-events')}} auch als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('defs')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('foreignObject')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('switch')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}
- {{SVGElement('use')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  The circle will always intercept the mouse event.
  To change the color of the rect underneath you have
  to click outside the circle
  -->
  <rect x="0" y="0" height="10" width="10" fill="black" />
  <circle cx="5" cy="5" r="4" fill="white" pointer-events="visiblePainted" />

  <!--
  The circle below will never catch a mouse event.
  The rect underneath will change color whether you
  are clicking on the circle or the rect itself
  -->
  <rect x="10" y="0" height="10" width="10" fill="black" />
  <circle cx="15" cy="5" r="4" fill="white" pointer-events="none" />
</svg>
```

```js
window.addEventListener("mouseup", (e) => {
  // Let's pick a random color between #000000 and #FFFFFF
  const color = Math.round(Math.random() * 0xffffff);

  // Let's format the color to fit CSS requirements
  const fill = `#${color.toString(16).padStart(6, "0")}`;

  // Let's apply our color in the
  // element we actually clicked on
  e.target.style.fill = fill;
});
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>bounding-box</code> | <code>visiblePainted</code> |
        <code>visibleFill</code> | <code>visibleStroke</code> |
        <code>visible</code> | <code>painted</code> | <code>fill</code> |
        <code>stroke</code> | <code>all</code> | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>visiblePainted</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

_Für eine detaillierte Erklärung zu jedem möglichen Wert sehen Sie sich die CSS-Dokumentation zu {{cssxref('pointer-events')}} an._

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}