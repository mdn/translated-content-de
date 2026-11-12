---
title: spreadMethod
slug: Web/SVG/Reference/Attribute/spreadMethod
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`spreadMethod`** bestimmt, wie eine Form über die festgelegten Grenzen eines Farbverlaufs hinaus gefüllt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## Beispiele

### spreadMethod bei linearen Farbverläufen

#### SVG

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

#### Ergebnis

{{EmbedLiveSample('spreadMethod with linear gradients')}}

Beachten Sie, dass das mittlere Drittel jedes Farbverlaufs gleich ist. Die äußeren Drittel zeigen den Unterschied zwischen den drei Methoden.

### spreadMethod bei radialen Farbverläufen

#### SVG

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

#### Ergebnis

{{EmbedLiveSample('spreadMethod with radial gradients')}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>pad</code> | <code>reflect</code> | <code>repeat</code></td>
    </tr>
    <tr>
      <th scope="row">Initialwert</th>
      <td><code>pad</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `pad`
  - : Dieser Wert gibt an, dass die letzte Farbe des Farbverlaufs die Form über die Grenzen des Farbverlaufs hinaus füllt.
- `reflect`
  - : Dieser Wert gibt an, dass sich der Farbverlauf über seine Grenzen hinaus in umgekehrter Reihenfolge wiederholt.
- `repeat`
  - : Dieser Wert gibt an, dass sich der Farbverlauf über seine Grenzen hinaus in der ursprünglichen Reihenfolge wiederholt.

### Grenzen eines Farbverlaufs festlegen

Standardmäßig reicht ein Farbverlauf bis an die Grenzen der gefüllten Form. Um die Auswirkungen dieses Attributs zu sehen, müssen Sie den Farbverlauf kleiner als die Form festlegen.

Bei einem linearen Farbverlauf können die Grenzen durch die Attribute `x1`, `x2`, `y1` und `y2` als Rechteck festgelegt werden. Bei einem radialen Farbverlauf können die Grenzen durch die Attribute `cx`, `cy` und `r` für den äußeren Kreis sowie `fx`, `fy` und `fr` für den inneren Kreis festgelegt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
