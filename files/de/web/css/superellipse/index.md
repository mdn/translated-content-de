---
title: superellipse()
slug: Web/CSS/superellipse
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`superellipse()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert die Krümmung einer Ellipse und wird verwendet, um [Eckenformen](/de/docs/Web/CSS/corner-shape) entweder direkt oder über {{cssxref("&lt;corner-shape-value>")}} Schlüsselwörter anzugeben.

## Syntax

```css
superellipse(infinity)
superellipse(4)
superellipse(1.7)
superellipse(0)
superellipse(-2.8)
superellipse(-3)
superellipse(-infinity)
```

### Parameter

- {{cssxref("&lt;number>")}}
  - : Eine Zahl im Bereich von `-unendlich` bis `unendlich`, inklusive.

### Rückgabewert

Eine Superellipse-Form.

## Beschreibung

Die `superellipse()` Funktion gibt eine Superellipse-Form zurück, die verwendet wird, um {{cssxref("corner-shape")}} Werte anzugeben. Eine Superellipse ist eine geschlossene, symmetrische Kurve zwischen einem Rechteck und einer Ellipse. Sie ähnelt einer Ellipse, die die geometrischen Merkmale ihrer beiden Achsen beibehält.

Die Superellipse-Form wird mit einer modifizierten Version einer Ellipse berechnet. Die folgende Gleichung definiert eine an den Ursprung zentrierte Ellipse:

<math display="block">
  <mfrac>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>a</mi>
      <mn>2</mn>
    </msup>
  </mfrac>
  <mo>+</mo>
  <mfrac>
    <msup>
      <mi>y</mi>
      <mn>2</mn>
    </msup>
    <msup>
      <mi>b</mi>
      <mn>2</mn>
    </msup>
  </mfrac>
    <mo>=</mo>
    <mn>1</mn>
  </math>

Die Variablen `a` und `b` beziehen sich auf die Radien der Ellipse, während die `x` und `y` Koordinaten Punkte auf der Umfassung der Ellipse sind.

Ein Kreis ist eine Ellipse, bei der die Radien `a` und `b` in der vorherigen Gleichung die gleiche Länge haben. Mit `a` und `b` gleich `r` kann die Gleichung für einen Kreis wie folgt geschrieben werden:

<math display="block">
  <mrow>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>y</mi>
      <mn>2</mn>
    </msup>
    <mo>=</mo>
    <msup>
      <mi>r</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>

In dieser Gleichung sind `x` und `y` die Koordinaten von Punkten auf der Kreisumfassung, und `r` ist der Radius des Kreises, mit dem Zentrum des Kreises bei `(0, 0)`. Die Ellipse wird erzeugt, indem die Kreisform entlang der `x`- und/oder `y`-Achse skaliert wird.

Eine Superellipse-Form entsteht, indem der Exponent `2` in jedem Fall durch 2<sup>K</sup> ersetzt wird, wobei `K` das an die `superellipse()` Funktion übergebene Argument ist, das die Krümmung der Ellipse modifiziert:

<math display="block">
  <mrow>
    <msup>
      <mi>x</mi>
      <msup>
        <mn>2</mn>
        <mi>K</mi>
      </msup>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>y</mi>
      <msup>
        <mn>2</mn>
        <mi>K</mi>
      </msup>
    </msup>
    <mo>=</mo>
    <mn>1</mn>
  </mrow>
</math>

Das folgende Diagramm veranschaulicht verschiedene `superellipse()` Werte für die obere rechte Ecke eines Containers: `unendlich`, `1`, `0`, `-1` und `-unendlich`:

![Liniendiagramm, das die mit verschiedenen K-Werten erzeugten Ellipsen veranschaulicht, wie im Folgenden beschrieben](superellipse-param.svg)

- Ein `K`-Wert von `0` erzeugt eine gerade Linie. Dieser Wert kann verwendet werden, um abgeschrägte Ecken zu erzeugen und entspricht dem {{cssxref("&lt;corner-shape-value>")}} `bevel` Schlüsselwort.
- Ein `K`-Wert von `1` erzeugt eine gewöhnliche Ellipse, entsprechend dem `round` Schlüsselwort.
- Ein `K`-Wert von `>1` macht die Ellipsenform quadratischer; `2` entspricht dem `squircle` Schlüsselwort.
- Ein `K`-Wert von `unendlich` erzeugt ein perfektes Quadrat (entspricht dem `square` Schlüsselwort), obwohl `K`-Werte von `10` oder mehr praktisch nicht von einem Quadrat zu unterscheiden sind.
- Negative `K`-Werte führen zu einer konkaven Kurve, was zu Eckenformen führt, die nach innen gekrümmt oder "ausgehöhlt" sind. Ein `K`-Wert von `-1` entspricht dem `scoop` Schlüsselwort und `-unendlich` entspricht dem `notch` Schlüsselwort.

Eine negative oder positive Superellipse würde symmetrisch zu einer Superellipse mit ihrem inversen Wert erscheinen.

> [!NOTE]
> Für jeden übergebenen `K`-Parameterwert wird der Rückgabewert der `superellipse()` Funktion immer gleich für diesen `K`-Wert sein. Wenn dieser Wert auf zwei Elemente angewendet wird, kann das Erscheinungsbild der Eckenform abweichen, wenn die Boxgröße oder {{cssxref("border-radius")}} Werte unterschiedlich sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### `superellipse()` Wertvergleich

In diesem Beispiel ermöglichen zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler das Durchlaufen vieler verschiedener `corner-shape` `superellipse()` Werte und {{cssxref("border-radius")}} Werte, sodass Sie die Auswirkungen auf einen Container vergleichen können. Der Code ist der Kürze halber ausgeblendet, aber die vollständige Erklärung des [Superellipse-Wertvergleichs](/de/docs/Web/CSS/corner-shape#superellipse_value_comparison) wird auf der {{cssxref("corner-shape")}} Referenzseite bereitgestellt.

```html hidden live-sample___value-comparison
<form>
  <div>
    <label for="superellipse-slider">Choose a superellipse() value:</label>
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input type="range" id="radius-slider" min="0" value="45" max="90" />
  </div>
</form>
<section></section>
```

```css hidden live-sample___value-comparison
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 100%;
  margin-top: 20px;
}

form div {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___value-comparison
const rectangle = document.querySelector("section");
const superEllipseRange = document.getElementById("superellipse-slider");
const borderRadiusRange = document.getElementById("radius-slider");

function setCorners() {
  const seValue = `superellipse(${superEllipseRange.value})`;
  rectangle.style.cornerShape = seValue;
  const brValue = `${borderRadiusRange.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue};</code><br><code>border-radius: ${brValue};</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

{{EmbedLiveSample("value-comparison", "100%", "300")}}

> [!NOTE]
> Siehe auch das Beispiel [Vergleich der `<corner-shape-value>` Werte](/de/docs/Web/CSS/corner-shape-value#corner-shape-value_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}}
- {{cssxref("&lt;corner-shape-value>")}}
- [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
