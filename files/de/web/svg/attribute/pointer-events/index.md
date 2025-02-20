---
title: pointer-events
slug: Web/SVG/Attribute/pointer-events
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das Attribut **`pointer-events`** ist ein Präsentationsattribut, das definiert, ob oder wann ein Element Ziel eines Mausereignisses sein kann.

> [!NOTE]
> Als Präsentationsattribut hat `pointer-events` auch ein Gegenstück als CSS-Eigenschaft: {{cssxref("pointer-events")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Hinweise zur Verwendung

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

_Für eine detaillierte Erklärung der möglichen Werte werfen Sie einen Blick in die CSS-Dokumentation zu {{cssxref('pointer-events')}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("pointer-events")}}-Eigenschaft
