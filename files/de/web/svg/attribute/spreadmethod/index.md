---
title: spreadMethod
slug: Web/SVG/Attribute/spreadMethod
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`spreadMethod`**-Attribut bestimmt, wie eine Form über die definierten Kanten eines Gradienten hinaus gefüllt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## Kontextnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>pad</code> | <code>reflect</code> | <code>repeat</code></td>
    </tr>
    <tr>
      <th scope="row">Anfangswert</th>
      <td><code>pad</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `pad`
  - : Dieser Wert gibt an, dass die Endfarbe des Gradienten die Form über dessen Kanten hinaus füllt.
- `reflect`
  - : Dieser Wert gibt an, dass der Gradient in umgekehrter Reihenfolge über seine Kanten hinaus wiederholt wird.
- `repeat`
  - : Dieser Wert gibt an, dass der Gradient in der ursprünglichen Reihenfolge über seine Kanten hinaus wiederholt wird.

### Definition der Kanten eines Gradienten

Standardmäßig reicht ein Gradient bis zu den Rändern der gefüllten Form. Um die Effekte dieses Attributs zu sehen, müssen Sie die Größe des Gradienten kleiner als die Form festlegen.

Im Fall eines linearen Gradienten können die Kanten als Rechteck durch die Attribute `x1`, `x2`, `y1` und `y2` definiert werden. Im Fall eines radialen Gradienten können die Kanten als äußere und innere Kreise durch die Attribute `cx`, `cy` und `r` (äußere) und `fx`, `fy` und `fr` (innere) definiert werden.

## Beispiele für spreadMethod mit linearen Verläufen

### SVG

```html
<svg width="220" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="PadGradient" x1="33%" x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
    <linearGradient
      id="ReflectGradient"
      spreadMethod="reflect"
      x1="33%"
      x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
    <linearGradient id="RepeatGradient" spreadMethod="repeat" x1="33%" x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
  </defs>

  <rect fill="url(#PadGradient)" x="10" y="0" width="200" height="40" />
  <rect fill="url(#ReflectGradient)" x="10" y="50" width="200" height="40" />
  <rect fill="url(#RepeatGradient)" x="10" y="100" width="200" height="40" />
</svg>
```

### Ergebnis

{{EmbedLiveSample('Examples_of_spreadMethod_with_linear_gradients')}}

Beachten Sie, dass das mittlere Drittel jedes Gradienten identisch ist. Die äußeren Drittel zeigen den Unterschied zwischen den drei Verteilmethoden.

## Beispiele für spreadMethod mit radialen Verläufen

### SVG

```html
<svg width="340" height="120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="RadialPadGradient"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
    <radialGradient
      id="RadialReflectGradient"
      spreadMethod="reflect"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
    <radialGradient
      id="RadialRepeatGradient"
      spreadMethod="repeat"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
  </defs>

  <rect fill="url(#RadialPadGradient)" x="10" y="10" width="100" height="100" />
  <rect
    fill="url(#RadialReflectGradient)"
    x="120"
    y="10"
    width="100"
    height="100" />
  <rect
    fill="url(#RadialRepeatGradient)"
    x="230"
    y="10"
    width="100"
    height="100" />
</svg>
```

### Ergebnis

{{EmbedLiveSample('Examples_of_spreadMethod_with_radial_gradients')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
