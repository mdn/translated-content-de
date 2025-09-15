---
title: <corner-shape-value>
slug: Web/CSS/corner-shape-value
l10n:
  sourceCommit: 2a64c5583a2c61c729ffe1ee1e7709a5898f57b0
---

{{SeeCompatTable}}

Der **`<corner-shape-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) beschreibt die Form einer Container-Ecke. Er wird von der {{cssxref("corner-shape")}}-Kurzschrift-Eigenschaft und deren [Bestandteil-Eigenschaften](/de/docs/Web/CSS/corner-shape#constituent_properties) verwendet, um die Form festzulegen, die auf die betroffenen Container-Ecken angewendet werden soll.

## Syntax

Der `<corner-shape-value>` Datentyp kann eine {{cssxref("superellipse()")}}-Funktion annehmen, die eine benutzerdefinierte Form definiert, oder einen von sechs Schlüsselwortwerten, die häufige `superellipse()`-Werte beschreiben.

### Werte

- {{cssxref("superellipse()")}}
  - : Definiert eine benutzerdefinierte Superellipse-Eckform. Ein negativer Parameter erzeugt eine nach innen gerichtete, oder konkave, Kurve, während ein positiver Parameter eine nach außen gerichtete, oder konvexe, Kurve erzeugt.
- Schlüsselwörter
  - : Die verfügbaren Schlüsselwortwerte sind wie folgt:
    - `bevel`
      - : Definiert eine gerade, diagonale Ecke, die weder konvex noch konkav ist. Das `bevel`-Schlüsselwort entspricht `superellipse(0)`.
    - `notch`
      - : Definiert eine 90-Grad konkave, quadratische Ecke. Das `notch`-Schlüsselwort entspricht `superellipse(-infinity)`.
    - `round`
      - : Definiert eine konvexe, gewöhnliche Ellipse, die die standardmäßige abgerundete Ecke darstellt, die durch {{cssxref("border-radius")}} ohne angewendete `corner-shape` erzeugt wird. Das `round`-Schlüsselwort entspricht `superellipse(1)`. Dies ist der Standardwert (Initialwert) für alle `corner-shape`-Eigenschaften.
    - `scoop`
      - : Definiert eine konkave, gewöhnliche Ellipse. Das `scoop`-Schlüsselwort entspricht `superellipse(-1)`.
    - `square`
      - : Definiert eine 90-Grad konvexe, quadratische Ecke, die die Standard-Eckform ist, wenn kein `border-radius` (oder `border-radius: 0`) angewendet wird. Das `square`-Schlüsselwort entspricht `superellipse(infinity)`.
    - `squircle`
      - : Definiert ein "Squircle", das eine konvexe Kurve zwischen `round` und `square` ist. Das `squircle`-Schlüsselwort entspricht `superellipse(2)`.

> [!NOTE]
> Sie können sanft zwischen verschiedenen `superellipse()`-Werten und zwischen verschiedenen Eckform-Schlüsselwörtern animieren, da die Animation zwischen deren `superellipse()`-Äquivalenten interpoliert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von `<corner-shape-value>`-Werten

In diesem Beispiel bieten wir ein Dropdown-Menü, mit dem Sie verschiedene `<corner-shape-value>`-Werte auswählen können, sowie einen Schieberegler, der den {{cssxref("border-radius")}} des Containers aktualisiert. Dies ermöglicht die Visualisierung der Auswirkung der verschiedenen Schlüsselwörter und `superellipse()`-Parameterwerte.

Die `corner-shape`-Eigenschaft definiert die Form der Ecken des Kastens, während der Bereich, auf den die Form angewendet wird, durch die `border-radius`-Eigenschaft festgelegt wird. Der Code ist der Kürze halber ausgeblendet, jedoch können Sie eine [vollständige Erklärung der `corner-shape`-Werte](/de/docs/Web/CSS/corner-shape#comparing_corner-shape_values) sowie andere verwandte Beispiele auf der {{cssxref("corner-shape")}}-Referenzseite finden.

```html hidden live-sample___value-comparison
<form>
  <div>
    <label for="corner-shape-choice">Choose a corner-shape value:</label>
    <select id="corner-shape-choice">
      <optgroup label="Keywords">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Functions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
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
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
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
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

{{EmbedLiveSample("value-comparison", "100%", "300")}}

> [!NOTE]
> Siehe auch das Beispiel zum [Vergleich von `superellipse()`-Funktionswerten](/de/docs/Web/CSS/superellipse#superellipse_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}}
- {{cssxref("border-radius")}}
- {{cssxref("superellipse()")}}
- [CSS-Module für Ränder und Box-Dekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations)
