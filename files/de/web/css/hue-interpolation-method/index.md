---
title: <hue-interpolation-method>
slug: Web/CSS/hue-interpolation-method
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<hue-interpolation-method>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert den Algorithmus, der für die Interpolation zwischen {{CSSXref("&lt;hue&gt;")}}-Werten verwendet wird. Die Interpolationsmethode legt fest, wie ein Mittelpunkt zwischen zwei Farbtonwerten basierend auf einem Farbkreis gefunden wird. Sie wird als Bestandteil des Datentyps {{CSSXref("&lt;color-interpolation-method&gt;")}} verwendet.

Bei der Interpolation von `<hue>`-Werten verwendet der Farbton-Interpolationsalgorithmus standardmäßig [`shorter`](#shorter).

## Syntax

Ein `<hue-interpolation-method>`-Wert besteht aus dem Namen eines Farbton-Interpolationsalgorithmus, gefolgt von einem literalen Token `hue`:

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### Werte

Jedes Paar von Farbtonwinkeln entspricht zwei Radien auf dem {{Glossary("color_wheel", "Farbkreis")}}, die den Umfang in zwei mögliche Bögen für die Interpolation aufteilen. Beide Bögen beginnen am ersten Radius und enden am zweiten Radius, wobei einer im Uhrzeigersinn und der andere gegen den Uhrzeigersinn verläuft.

> [!NOTE]
> Die folgenden Beschreibungen und Abbildungen basieren auf Farbkreisen, bei denen Farbtonwinkel im Uhrzeigersinn zunehmen. Beachten Sie, dass es Farbkreise gibt, bei denen eine Zunahme der Winkel gegen den Uhrzeigersinn erfolgt.

Für ein Paar von Farbtonwinkeln `θ1` und `θ2`, die auf den Bereich `[0deg, 360deg)` normalisiert sind, gibt es vier Algorithmen, um zu bestimmen, welcher Bogen bei der Interpolation von `θ1` nach `θ2` verwendet wird:

- `shorter`

  - : Verwendet den kürzeren Bogen. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzigen Punkt. Wenn beide Bögen gleich lang sind:

    - Wenn `θ1 < θ2`, wird der Bogen im Uhrzeigersinn verwendet;
    - Wenn `θ1 > θ2`, wird der Bogen gegen den Uhrzeigersinn verwendet.

    | `θ1 = 45deg`, `θ2 = 135deg`                                        | `θ1 = 135deg`, `θ2 = 45deg`                                        |
    | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
    | ![shorter mit θ1 = 45deg und θ2 = 135deg](shorter_increasing.png) | ![shorter mit θ1 = 135deg und θ2 = 45deg](shorter_decreasing.png) |

- `longer`

  - : Verwendet den längeren Bogen. Wenn die beiden Radien zusammenfallen:

    - Wenn `θ1 ≤ θ2`, wird der Bogen zum gesamten Umfang mit Uhrzeigersinn-Orientierung.
    - Wenn `θ1 > θ2`, wird der Bogen zum gesamten Umfang mit gegen den Uhrzeigersinn-Orientierung.

    Wenn beide Bögen gleich lang sind:

    - Wenn `θ1 < θ2`, wird der Bogen im Uhrzeigersinn verwendet;
    - Wenn `θ1 > θ2`, wird der Bogen gegen den Uhrzeigersinn verwendet.

    | `θ1 = 45deg`, `θ2 = 135deg`                                      | `θ1 = 135deg`, `θ2 = 45deg`                                      |
    | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![longer mit θ1 = 45deg und θ2 = 135deg](longer_decreasing.png) | ![longer mit θ1 = 135deg und θ2 = 45deg](longer_increasing.png) |

- `increasing`

  - : Verwendet den Bogen im Uhrzeigersinn. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzigen Punkt.

    | `θ1 = 45deg`, `θ2 = 135deg`                                           | `θ1 = 135deg`, `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![increasing mit θ1 = 45deg und θ2 = 135deg](shorter_increasing.png) | ![increasing mit θ1 = 135deg und θ2 = 45deg](longer_increasing.png) |

- `decreasing`

  - : Verwendet den Bogen gegen den Uhrzeigersinn. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzigen Punkt.

    | `θ1 = 45deg`, `θ2 = 135deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decreasing mit θ1 = 45deg und θ2 = 135deg](longer_decreasing.png) | ![decreasing mit θ1 = 135deg und θ2 = 45deg](shorter_decreasing.png) |

Da es nur zwei Bögen zur Auswahl gibt, sind diese Algorithmen unter bestimmten Umständen paarweise gleichwertig. Insbesondere:

- Wenn `0deg < θ2 - θ1 < 180deg` oder `θ2 - θ1 < -180deg`, sind `shorter` und `increasing` gleichwertig, während `longer` und `decreasing` gleichwertig sind.
- Wenn `-180deg < θ2 - θ1 < 0deg` oder `θ2 - θ1 > 180deg`, sind `shorter` und `decreasing` gleichwertig, während `longer` und `increasing` gleichwertig sind.

Ein bemerkenswertes Merkmal von `increasing` und `decreasing` ist, dass, wenn der Farbtonwinkeldifferenz während einer Transition oder Animation durch `180deg` geht, der Bogen nicht wie bei `shorter` und `longer` auf die andere Seite wechselt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von Farbton-Interpolationsalgorithmen

Das folgende Beispiel zeigt die Wirkung der Verwendung verschiedener Farbton-Interpolationsalgorithmen in einem {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

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

{{EmbedLiveSample("comparing_hue_interpolation_methods", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{CSSXref("&lt;hue&gt;")}} Datentyp
