---
title: path()
slug: Web/CSS/basic-shape/path
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`path()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) akzeptiert einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) als Zeichenkette und wird in den [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) und [CSS Motion Path](/de/docs/Web/CSS/CSS_motion_path) Modulen verwendet, um eine Form zu zeichnen. Die `path()` Funktion ist ein {{cssxref("&lt;basic-shape&gt;")}} Datentyp-Wert. Sie kann in den CSS-Eigenschaften [`offset-path`](/de/docs/Web/CSS/offset-path) und [`clip-path`](/de/docs/Web/CSS/clip-path) sowie im SVG-Attribut [`d`](/de/docs/Web/SVG/Reference/Attribute/d) verwendet werden.

Es gibt einige Einschränkungen bei der Verwendung der `path()` Funktion. Der Pfad muss als einzelne Zeichenkette definiert werden, daher kann kein benutzerdefinierter Pfad mit Variablen ([`var()`](/de/docs/Web/CSS/var) Funktionen) erstellt werden. Außerdem sind alle Längen im Pfad implizit in [Pixel](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`px`) Einheiten definiert; andere Einheiten können nicht verwendet werden. Die [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion bietet mehr Flexibilität als die `path()` Funktion.

{{InteractiveExample("CSS Demo: path()")}}

```css interactive-example-choice
clip-path: path(
  "M  20  240 \
 L  20  80 L 160  80 \
 L 160  20 L 280 100 \
 L 160 180 L 160 120 \
 L  60 120 L  60 240 Z"
);
```

```css interactive-example-choice
clip-path: path(
  "M 20 240 \
 C 20 0 300 0 300 240 Z"
);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## Syntax

Wann verwendet in {{cssxref("offset-path")}} oder {{cssxref("d")}}:

```css
path(<string>)
```

Wann verwendet in {{cssxref("clip-path")}}:

```css
path( [<fill-rule>,]? <string> )
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}

  - : Definiert, welche Teile des Pfades innerhalb der Form liegen. Die möglichen Werte umfassen:

    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt ausgehender Strahl mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer nicht-null Zählung führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt ausgehender Strahl eine ungerade Anzahl von Pfadsegmenten kreuzt. Dies bedeutet, dass für jede Einfahrt in die Form keine gleiche Anzahl von Ausfahrten vorhanden ist, was eine ungerade Zählung von Einfahrten ohne entsprechende Ausfahrten anzeigt.

    > [!WARNING] > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und die Verwendung führt zu einer Ungültigkeit der Eigenschaft.

- {{cssxref("string")}}
  - : Eine [Datenzeichenkette](/de/docs/Web/SVG/Reference/Attribute/d), in Anführungszeichen, die einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) definiert. Die SVG-Pfaddatenzeichenkette enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad wird als ungültig betrachtet.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}} Wert zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele für korrekte Werte für path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Verwendung einer `path()` Funktion als `offset-path` Wert

Eine `path()` Funktion wurde im folgenden Beispiel als {{cssxref("offset-path")}} Wert bereitgestellt, um einen elliptischen Pfad für die Bewegung eines Balls zu erstellen.

```html
<div id="path">
  <div id="ball"></div>
</div>
<button>animate</button>
```

```css
#path {
  margin: 40px;
  width: 400px;
  height: 200px;

  /* draw the gray ramp */
  background: radial-gradient(at 50% 0%, transparent 70%, grey 70%, grey 100%);
}

#ball {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;

  /* mark the elliptical path */
  offset-path: path("M 15 15 A 6 5.5 10 0 0 385 15");
}
```

```js
const btn = document.querySelector("button");
const ball = document.getElementById("ball");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  setTimeout(() => btn.removeAttribute("disabled"), 6000);

  ball.animate(
    // animate the offset path
    { offsetDistance: [0, "100%"] },
    {
      duration: 1500,
      iterations: 4,
      easing: "cubic-bezier(.667,0.01,.333,.99)",
      direction: "alternate",
    },
  );
});
```

{{EmbedLiveSample("Verwendung als Wert von offset-path", "100%", 350)}}

### Modifizieren des Wertes des SVG-Pfads `d` Attributs

Die `path()` kann verwendet werden, um den Wert des SVG [`d` Attributs](/de/docs/Web/SVG/Reference/Attribute/d) zu ändern, das in Ihrem CSS auch auf `none` gesetzt werden kann.

Das "V"-Symbol wird sich vertikal umdrehen, wenn Sie mit der Maus darüber fahren, wenn `d` als CSS-Eigenschaft unterstützt wird.

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover*/
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### Ergebnis

{{EmbedLiveSample('Wert des SVG-Pfads d Attributs ändern', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Übersicht der CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [SVG Path Syntax Illustrated Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
