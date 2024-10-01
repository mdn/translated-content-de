---
title: <hue-interpolation-method>
slug: Web/CSS/hue-interpolation-method
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<hue-interpolation-method>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert den Algorithmus, der zur Interpolation zwischen {{CSSXref("&lt;hue&gt;")}}-Werten verwendet wird. Die Interpolationsmethode gibt an, wie ein Mittelpunkt zwischen zwei Farbtonwerten basierend auf einem Farbkreis gefunden wird. Es wird als Komponente des {{CSSXref("&lt;color-interpolation-method&gt;")}}-Datentyps verwendet.

Bei der Interpolation von `<hue>`-Werten standardisiert der Farbtoninterpolationsalgorithmus auf [`shorter`](#shorter).

## Syntax

Ein `<hue-interpolation-method>`-Wert besteht aus dem Namen eines Farbtoninterpolationsalgorithmus, gefolgt von einem literalen Token `hue`:

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### Werte

Jedes Paar von Farbtonwinkeln entspricht zwei Radien auf dem {{Glossary("color_wheel", "Farbkreis")}}, die den Umfang in zwei mögliche Bögen für die Interpolation schneiden. Beide Bögen beginnen am ersten Radius und enden am zweiten Radius, aber einer verläuft im Uhrzeigersinn und der andere gegen den Uhrzeigersinn.

> [!NOTE]
> Die folgenden Beschreibungen und Illustrationen basieren auf Farbkreisen, in denen Farbtonwinkel im Uhrzeigersinn zunehmen. Beachten Sie, dass es Farbkreise gibt, bei denen eine Zunahme der Winkel eine gegen den Uhrzeigersinn gerichtete Operation ist.

Für ein Paar von Farbtonwinkeln `θ1` und `θ2`, die auf den Bereich `[0deg, 360deg)` normalisiert sind, gibt es vier Algorithmen, um zu bestimmen, welcher Bogen verwendet wird, wenn von `θ1` zu `θ2` interpoliert wird:

- `shorter`

  - : Verwende den kürzeren Bogen. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzigen Punkt. Wenn beide Bögen die gleiche Länge haben:

    - Wenn `θ1 < θ2`, verwende den im Uhrzeigersinn verlaufenden Bogen;
    - Wenn `θ1 > θ2`, verwende den gegen den Uhrzeigersinn verlaufenden Bogen.

    | `θ1 = 45deg`, `θ2 = 135deg`                                       | `θ1 = 135deg`, `θ2 = 45deg`                                       |
    | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
    | ![shorter mit θ1 = 45deg und θ2 = 135deg](shorter_increasing.png) | ![shorter mit θ1 = 135deg und θ2 = 45deg](shorter_decreasing.png) |

- `longer`

  - : Verwende den längeren Bogen. Wenn die beiden Radien zusammenfallen:

    - Wenn `θ1 ≤ θ2`, wird der Bogen zum vollen Umfang mit im Uhrzeigersinn verlaufender Orientierung.
    - Wenn `θ1 > θ2`, wird der Bogen zum vollen Umfang mit gegen den Uhrzeigersinn verlaufender Orientierung.

    Wenn beide Bögen die gleiche Länge haben:

    - Wenn `θ1 < θ2`, verwende den im Uhrzeigersinn verlaufenden Bogen;
    - Wenn `θ1 > θ2`, verwende den gegen den Uhrzeigersinn verlaufenden Bogen.

    | `θ1 = 45deg`, `θ2 = 135deg`                                     | `θ1 = 135deg`, `θ2 = 45deg`                                     |
    | --------------------------------------------------------------- | --------------------------------------------------------------- |
    | ![longer mit θ1 = 45deg und θ2 = 135deg](longer_decreasing.png) | ![longer mit θ1 = 135deg und θ2 = 45deg](longer_increasing.png) |

- `increasing`

  - : Verwende den im Uhrzeigersinn verlaufenden Bogen. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzigen Punkt.

    | `θ1 = 45deg`, `θ2 = 135deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                         |
    | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
    | ![increasing mit θ1 = 45deg und θ2 = 135deg](shorter_increasing.png) | ![increasing mit θ1 = 135deg und θ2 = 45deg](longer_increasing.png) |

- `decreasing`

  - : Verwende den gegen den Uhrzeigersinn verlaufenden Bogen. Wenn die beiden Radien zusammenfallen, degeneriert der Bogen zu einem einzigen Punkt.

    | `θ1 = 45deg`, `θ2 = 135deg`                                         | `θ1 = 135deg`, `θ2 = 45deg`                                          |
    | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![decreasing mit θ1 = 45deg und θ2 = 135deg](longer_decreasing.png) | ![decreasing mit θ1 = 135deg und θ2 = 45deg](shorter_decreasing.png) |

Da es nur zwei Bögen zur Auswahl gibt, sind diese Algorithmen paarweise gleichwertig unter bestimmten Umständen. Insbesondere:

- Wenn `0deg < θ2 - θ1 < 180deg` oder `θ2 - θ1 < -180deg`, sind `shorter` und `increasing` gleichwertig, während `longer` und `decreasing` gleichwertig sind.
- Wenn `-180deg < θ2 - θ1 < 0deg` oder `θ2 - θ1 > 180deg`, sind `shorter` und `decreasing` gleichwertig, während `longer` und `increasing` gleichwertig sind.

Ein bemerkenswertes Merkmal von `increasing` und `decreasing` ist, dass, wenn der Farbtonwinkeldifferenz während der Übergänge oder Animationen `180deg` überschreitet, der Bogen nicht umschlägt wie bei `shorter` und `longer`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von Farbtoninterpolationsalgorithmen

Das folgende Beispiel zeigt die Auswirkungen der Verwendung verschiedener Farbtoninterpolationsalgorithmen in einem {{CSSXref("gradient/linear-gradient", "linear-gradient()")}}.

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
