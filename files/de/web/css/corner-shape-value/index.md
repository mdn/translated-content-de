---
title: <corner-shape-value>
slug: Web/CSS/corner-shape-value
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

{{SeeCompatTable}}

Der **`<corner-shape-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) beschreibt die Form einer Ecken eines Containers. Er wird von der {{cssxref("corner-shape")}} Kurzschreibweise und seinen [Bestandteileigenschaften](/de/docs/Web/CSS/corner-shape#constituent_properties) verwendet, um die Form festzulegen, die auf die betroffenen Containerecken angewendet werden soll.

## Syntax

Der `<corner-shape-value>` Datentyp kann eine {{cssxref("superellipse()")}} Funktion annehmen, die eine benutzerdefinierte Form definiert, oder einen von sechs Schlüsselwortwerten, die gängige `superellipse()` Werte beschreiben.

### Werte

- {{cssxref("superellipse()")}}
  - : Definiert eine benutzerdefinierte Superellipse-Eckform. Ein negativer Parameter erzeugt eine nach innen gehende, oder konkave, Kurve, während ein positiver Parameter eine nach außen gehende, oder konvexe, Kurve erzeugt.
- Schlüsselwörter
  - : Die verfügbaren Schlüsselwortwerte sind wie folgt:
    - `bevel`
      - : Definiert eine gerade, diagonale Ecke, die weder konvex noch konkav ist. Das `bevel` Schlüsselwort entspricht `superellipse(0)`.
    - `notch`
      - : Definiert eine 90-Grad-konkave Quadratecke. Das `notch` Schlüsselwort entspricht `superellipse(-infinity)`.
    - `round`
      - : Definiert eine konvexe gewöhnliche Ellipse, die die Standard abgerundete Ecke ist, die durch {{cssxref("border-radius")}} erstellt wird, ohne dass eine `corner-shape` angewendet wird. Das `round` Schlüsselwort entspricht `superellipse(1)`. Dies ist der Standardwert für alle `corner-shape` Eigenschaften.
    - `scoop`
      - : Definiert eine konkave gewöhnliche Ellipse. Das `scoop` Schlüsselwort entspricht `superellipse(-1)`.
    - `square`
      - : Definiert eine 90-Grad-konvexe Quadratecke, die die Standard-Eckform ist, wenn kein `border-radius` (oder `border-radius: 0`) angewendet wird. Das `square` Schlüsselwort entspricht `superellipse(infinity)`.
    - `squircle`
      - : Definiert einen "Squircle", eine konvexe Kurve zwischen `round` und `square`. Das `squircle` Schlüsselwort entspricht `superellipse(2)`.

> [!NOTE]
> Sie können zwischen verschiedenen `superellipse()` Werten und zwischen verschiedenen Eckformen-Schlüsselwörtern nahtlos animieren, da die Animation zwischen ihren `superellipse()` Äquivalenten interpoliert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### `<corner-shape-value>` Wertvergleich

In diesem Beispiel bieten wir ein Dropdown-Menü, mit dem Sie verschiedene `<corner-shape-value>` Werte auswählen können, und einen Schieberegler, der den {{cssxref("border-radius")}} des Containers aktualisiert. Dies ermöglicht die Visualisierung der Wirkung der verschiedenen Schlüsselwörter und `superellipse()` Parameterwerte.

Die `corner-shape` Eigenschaft definiert die Form der Ecken des Kastens, während der Bereich, auf den die Form angewendet wird, durch die `border-radius` Eigenschaft festgelegt wird. Der Code ist der Kürze halber versteckt, aber Sie können eine [ausführliche Erklärung der `corner-shape` Werte](/de/docs/Web/CSS/corner-shape#comparing_corner-shape_values) zusammen mit anderen verwandten Beispielen auf der {{cssxref("corner-shape")}} Referenzseite finden.

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
  font-family: "Helvetica", "Arial", sans-serif;
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
> Siehe auch das [`superellipse()` Funktionswertvergleich](/de/docs/Web/CSS/superellipse#superellipse_value_comparison) Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}}
- {{cssxref("border-radius")}}
- {{cssxref("superellipse()")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
