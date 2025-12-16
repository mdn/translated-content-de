---
title: <hue-interpolation-method>
slug: Web/CSS/Reference/Values/hue-interpolation-method
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<hue-interpolation-method>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert den Algorithmus, der für die Interpolation zwischen {{cssxref("hue")}}-Werten verwendet wird. Die Interpolationsmethode gibt an, wie man einen Mittelpunkt zwischen zwei Farbtonwerten basierend auf einem Farbkreis findet. Sie wird als Bestandteil des {{CSSXref("&lt;color-interpolation-method&gt;")}}-Datentyps verwendet.

Bei der Interpolation von `<hue>`-Werten standardisiert der Farbton-Interpolationsalgorithmus auf [`shorter`](#shorter).

## Syntax

Ein `<hue-interpolation-method>`-Wert besteht aus dem Namen eines Farbton-Interpolationsalgorithmus gefolgt von einem literalen Token `hue`:

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### Werte

Jedes Paar von Farbtonwinkeln entspricht zwei Radien auf dem {{Glossary("color_wheel", "Farbkreis")}}, die den Umfang in zwei mögliche Bögen für die Interpolation unterteilen. Beide Bögen beginnen am ersten Radius und enden am zweiten Radius, aber einer verläuft im Uhrzeigersinn und der andere gegen den Uhrzeigersinn.

> [!NOTE]
> Die folgenden Beschreibungen und Illustrationen basieren auf Farbkreisen, bei denen die Farbtonwinkel im Uhrzeigersinn zunehmen. Beachten Sie, dass es Farbkreise gibt, bei denen eine Zunahme der Winkel eine gegen den Uhrzeigersinn gerichtete Operation ist.

Für ein Paar von Farbtonwinkeln `θ1` und `θ2`, normalisiert auf den Bereich `[0deg, 360deg)`, gibt es vier Algorithmen, um zu bestimmen, welcher Bogen verwendet wird, wenn von `θ1` nach `θ2` interpoliert wird:

- `shorter`
  - : Verwenden Sie den kürzeren Bogen. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzelnen Punkt. Wenn beide Bögen die gleiche Länge haben:
    - Wenn `θ1 < θ2`, verwenden Sie den Bogen im Uhrzeigersinn;
    - Wenn `θ1 > θ2`, verwenden Sie den Bogen gegen den Uhrzeigersinn.

    | `θ1 = 45deg`, `θ2 = 135deg`                                        | `θ1 = 135deg`, `θ2 = 45deg`                                        |
    | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
    | ![shorter with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![shorter with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

- `longer`
  - : Verwenden Sie den längeren Bogen. Wenn die beiden Radien zusammenfallen:
    - Wenn `θ1 ≤ θ2`, wird der Bogen der vollständige Umfang mit im Uhrzeigersinn orientierter Orientierung.
    - Wenn `θ1 > θ2`, wird der Bogen der vollständige Umfang mit gegen den Uhrzeigersinn orientierter Orientierung.

    Wenn beide Bögen die gleiche Länge haben:
    - Wenn `θ1 < θ2`, verwenden Sie den Bogen im Uhrzeigersinn;
    - Wenn `θ1 > θ2`, verwenden Sie den Bogen gegen den Uhrzeigersinn.

    | `θ1 = 45deg`, `θ2 = 135deg`                                      | `θ1 = 135deg`, `θ2 = 45deg`                                      |
    | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![longer with θ1 = 45deg and θ2 = 135deg](longer_decreasing.png) | ![longer with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `increasing`
  - : Verwenden Sie den Bogen im Uhrzeigersinn. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzelnen Punkt.

    | `θ1 = 45deg`, `θ2 = 135deg`                                           | `θ1 = 135deg`, `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![increasing with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![increasing with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `decreasing`
  - : Verwenden Sie den Bogen gegen den Uhrzeigersinn. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzelnen Punkt.

    | `θ1 = 45deg`, `θ2 = 135deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decreasing with θ1 = 45deg and θ2 = 135deg](longer_decreasing.png) | ![decreasing with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

Da es nur zwei Bögen zur Auswahl gibt, sind diese Algorithmen paarweise unter bestimmten Umständen gleichwertig. Konkret:

- Wenn `0deg < θ2 - θ1 < 180deg` oder `θ2 - θ1 < -180deg`, sind `shorter` und `increasing` gleichwertig, während `longer` und `decreasing` gleichwertig sind.
- Wenn `-180deg < θ2 - θ1 < 0deg` oder `θ2 - θ1 > 180deg`, sind `shorter` und `decreasing` gleichwertig, während `longer` und `increasing` gleichwertig sind.

Ein bemerkenswertes Merkmal von `increasing` und `decreasing` ist, dass wenn der Unterschied der Farbtonwinkel während einer Transition oder Animation `180deg` passiert, der Bogen nicht wie bei `shorter` und `longer` auf die andere Seite umspringt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von Farbton-Interpolationsalgorithmen

Das folgende Beispiel zeigt die Auswirkung der Verwendung verschiedener Farbton-Interpolationsalgorithmen in einem {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

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
- {{cssxref("hue")}} Datentyp
