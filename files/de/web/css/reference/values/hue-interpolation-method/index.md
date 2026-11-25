---
title: "`<hue-interpolation-method>` CSS-Typ"
short-title: <hue-interpolation-method>
slug: Web/CSS/Reference/Values/hue-interpolation-method
l10n:
  sourceCommit: 42994d9657fd9771d5c45579521d947ba5babc05
---

Der [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) **`<hue-interpolation-method>`** beschreibt den Algorithmus zur Interpolation zwischen {{cssxref("hue")}}-Werten.

## Zugehörige Eigenschaften und Funktionen

Dieser Datentyp wird als Wert der folgenden CSS-Eigenschaft akzeptiert:

- {{cssxref("color-interpolation")}}

Dieser Datentyp wird auch als Parameter der folgenden CSS-Funktionen akzeptiert:

- {{cssxref("color-mix()")}}
- {{cssxref("conic-gradient()")}}
- {{cssxref("linear-gradient()")}}
- {{cssxref("font-palette/palette-mix","palette-mix()")}}
- {{cssxref("radial-gradient()")}}
- {{cssxref("repeating-conic-gradient()")}}
- {{cssxref("repeating-linear-gradient()")}}
- {{cssxref("repeating-radial-gradient()")}}

## Syntax

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### Werte

Dieser Datentyp wird durch den Namen eines Algorithmus zur Farbtoninterpolation angegeben, gefolgt vom wörtlichen Token `hue`. Mögliche Werte sind:

- `shorter hue`
  - : Gibt an, dass der kürzere Kreisbogen verwendet werden soll. Dies ist die Standardeinstellung.

- `longer hue`
  - : Gibt an, dass der längere Kreisbogen verwendet werden soll.

- `increasing hue`
  - : Gibt an, dass ein Kreisbogen im Uhrzeigersinn verwendet werden soll.

- `decreasing hue`
  - : Gibt an, dass ein Kreisbogen gegen den Uhrzeigersinn verwendet werden soll.

## Beschreibung

Der Datentyp `<hue-interpolation-method>` legt den Algorithmus zur Interpolation zwischen {{cssxref("hue")}}-Werten fest. Die Interpolationsmethode bestimmt anhand eines Farbkreises, wie ein Mittelpunkt zwischen zwei Farbtonwerten ermittelt wird.
Er wird als Bestandteil des Datentyps {{CSSXref("&lt;color-interpolation-method&gt;")}} verwendet.

Ein `<hue-interpolation-method>`-Wert besteht aus dem Namen eines Algorithmus zur Farbtoninterpolation – `longer`, `shorter`, `increase` oder `decrease` – gefolgt vom wörtlichen Token `hue`. Bei der Interpolation von `<hue>`-Werten wird standardmäßig der Algorithmus [`shorter`](#shorter) verwendet.

### Farbtonalgorithmen

Jedes Paar von Farbtonwinkeln entspricht zwei Radien auf dem {{Glossary("color_wheel", "Farbkreis")}}. Diese teilen den Umfang in zwei mögliche Kreisbögen für die Interpolation. Beide Kreisbögen beginnen am ersten Radius und enden am zweiten; einer verläuft jedoch im Uhrzeigersinn und der andere gegen den Uhrzeigersinn.

Für ein Paar von Farbtonwinkeln `θ1` und `θ2`, die auf den Bereich `[0deg, 360deg)` normiert sind, gibt es vier Algorithmen, die bestimmen, welcher Kreisbogen bei der Interpolation von `θ1` nach `θ2` verwendet wird.

> [!NOTE]
> Die folgenden Beschreibungen und Abbildungen beziehen sich auf Farbkreise, in denen die Farbtonwinkel im Uhrzeigersinn zunehmen. Es gibt auch Farbkreise, in denen zunehmende Winkel gegen den Uhrzeigersinn verlaufen.

#### Kürzerer Kreisbogen

Wenn `shorter hue` angegeben ist oder die Standardeinstellung verwendet wird, wird der kürzere Kreisbogen verwendet. Fallen die beiden Radien zusammen, reduziert sich der Kreisbogen auf einen einzelnen Punkt. Sind beide Kreisbögen gleich lang, gilt:

- Wenn `θ1 < θ2`, wird der Kreisbogen im Uhrzeigersinn verwendet.

- Wenn `θ1 > θ2`, wird der Kreisbogen gegen den Uhrzeigersinn verwendet.

| `θ1 = 45deg`, `θ2 = 135deg`                                       | `θ1 = 135deg`, `θ2 = 45deg`                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![shorter bei θ1 = 45deg und θ2 = 135deg](shorter_increasing.png) | ![shorter bei θ1 = 135deg und θ2 = 45deg](shorter_decreasing.png) |

#### Längerer Kreisbogen

Wenn `longer hue` angegeben ist, wird der längere Kreisbogen verwendet. Fallen die beiden Radien zusammen, gilt:

- Wenn `θ1 > θ2`, entspricht der Kreisbogen dem gesamten Umfang und verläuft gegen den Uhrzeigersinn.

Sind beide Kreisbögen gleich lang, gilt:

- Wenn `θ1 < θ2`, wird der Kreisbogen im Uhrzeigersinn verwendet.
- Wenn `θ1 > θ2`, wird der Kreisbogen gegen den Uhrzeigersinn verwendet.

| `θ1 = 45deg`, `θ2 = 135deg`                                     | `θ1 = 135deg`, `θ2 = 45deg`                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| ![longer bei θ1 = 45deg und θ2 = 135deg](longer_decreasing.png) | ![longer bei θ1 = 135deg und θ2 = 45deg](longer_increasing.png) |

#### Zunehmender Farbton

Wenn `increasing hue` angegeben ist, wird der Kreisbogen im Uhrzeigersinn verwendet. Fallen die beiden Radien zusammen, reduziert sich der Kreisbogen auf einen einzelnen Punkt.

| `θ1 = 45deg`, `θ2 = 135deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![increasing bei θ1 = 45deg und θ2 = 135deg](shorter_increasing.png) | ![increasing bei θ1 = 135deg und θ2 = 45deg](longer_increasing.png) |

#### Abnehmender Farbton

Wenn `decreasing hue` angegeben ist, wird der Kreisbogen gegen den Uhrzeigersinn verwendet. Fallen die beiden Radien zusammen, reduziert sich der Kreisbogen auf einen einzelnen Punkt.

| `θ1 = 45deg`, `θ2 = 135deg`                                         | `θ1 = 135deg`, `θ2 = 45deg`                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![decreasing bei θ1 = 45deg und θ2 = 135deg](longer_decreasing.png) | ![decreasing bei θ1 = 135deg und θ2 = 45deg](shorter_decreasing.png) |

### Paarweise gleichwertige Algorithmen

Da nur zwei Kreisbögen zur Auswahl stehen, sind diese Algorithmen unter bestimmten Umständen paarweise gleichwertig. Im Einzelnen gilt:

- Wenn `0deg < θ2 - θ1 < 180deg` oder `θ2 - θ1 < -180deg`, sind `shorter` und `increasing` gleichwertig, ebenso `longer` und `decreasing`.
- Wenn `-180deg < θ2 - θ1 < 0deg` oder `θ2 - θ1 > 180deg`, sind `shorter` und `decreasing` gleichwertig, ebenso `longer` und `increasing`.

Eine Besonderheit von `increasing` und `decreasing` ist, dass der Kreisbogen bei einer Transition oder Animation nicht wie bei `shorter` und `longer` auf die andere Seite wechselt, wenn die Differenz der Farbtonwinkel `180deg` überschreitet.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Algorithmen zur Farbtoninterpolation vergleichen

Das folgende Beispiel zeigt, wie sich verschiedene Algorithmen zur Farbtoninterpolation in einem {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} auswirken.

#### HTML

```html
<div class="hsl">
  <p>HSL</p>
</div>
<div class="hsl-increasing">
  <p>HSL increasing</p>
</div>
<div class="hsl-decreasing">
  <p>HSL decreasing</p>
</div>
<div class="hsl-shorter">
  <p>HSL shorter</p>
</div>
<div class="hsl-longer">
  <p>HSL longer</p>
</div>
<div class="hsl-named">
  <p>HSL named</p>
</div>
<div class="hsl-named-longer">
  <p>HSL named (longer)</p>
</div>
```

#### CSS

```css hidden
div {
  border: 1px solid black;
  height: 50px;
  margin: 10px;
  width: 90%;
}
p {
  color: white;
  margin: 6px;
}

/* Fallback styles */
.hsl,
.hsl-shorter,
.hsl-named {
  background: linear-gradient(
    to right,
    hsl(39 100% 50%),
    hsl(46 100% 50%),
    hsl(53 100% 50%),
    hsl(60 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right,
    hsl(190 100% 50%),
    hsl(225 100% 50%),
    hsl(260 100% 50%),
    hsl(295 100% 50%),
    hsl(330 100% 50%),
    hsl(365 100% 50%),
    hsl(400 100% 50%),
    hsl(435 100% 50%),
    hsl(470 100% 50%),
    hsl(505 100% 50%),
    hsl(540 100% 50%)
  );
}
.hsl-decreasing,
.hsl-longer,
.hsl-named-longer {
  background: linear-gradient(
    to right,
    hsl(399 100% 50%),
    hsl(368 100% 50%),
    hsl(337 100% 50%),
    hsl(307 100% 50%),
    hsl(276 100% 50%),
    hsl(245 100% 50%),
    hsl(214 100% 50%),
    hsl(183 100% 50%),
    hsl(152 100% 50%),
    hsl(122 100% 50%),
    hsl(91 100% 50%),
    hsl(60 100% 50%)
  );
}
```

```css
.hsl {
  background: linear-gradient(
    to right in hsl,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right in hsl increasing hue,
    hsl(190deg 100% 50%),
    hsl(180deg 100% 50%)
  );
}
.hsl-decreasing {
  background: linear-gradient(
    to right in hsl decreasing hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-shorter {
  background: linear-gradient(
    to right in hsl shorter hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-longer {
  background: linear-gradient(
    to right in hsl longer hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-named {
  background: linear-gradient(to right in hsl, orange, yellow);
}
.hsl-named-longer {
  background: linear-gradient(to right in hsl longer hue, orange, yellow);
}
```

#### Ergebnis

{{EmbedLiveSample("comparing_hue_interpolation_algorithms", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- Datentyp {{cssxref("hue")}}
