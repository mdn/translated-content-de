---
title: path()
slug: Web/CSS/basic-shape/path
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`path()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) akzeptiert einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) als String und wird in den [CSS Formen](/de/docs/Web/CSS/CSS_shapes) und [CSS Bewegungs-Pfad](/de/docs/Web/CSS/CSS_motion_path) Modulen verwendet, um eine Form zu zeichnen. Die `path()` Funktion ist ein {{cssxref("&lt;basic-shape&gt;")}} Datentyp. Sie kann in den CSS Eigenschaften [`offset-path`](/de/docs/Web/CSS/offset-path) und [`clip-path`](/de/docs/Web/CSS/clip-path) sowie im SVG Attribut [`d`](/de/docs/Web/SVG/Reference/Attribute/d) verwendet werden.

Es gibt einige Einschränkungen bei der Verwendung der `path()` Funktion. Der Pfad muss als einzelner String definiert werden, daher kann ein benutzerdefinierter Pfad nicht mit Variablen ([`var()`](/de/docs/Web/CSS/var) Funktionen) erstellt werden. Außerdem sind alle Längen im Pfad implizit in [Pixel](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`px`) Einheiten definiert; andere Einheiten können nicht verwendet werden. Die [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion bietet mehr Flexibilität als die `path()` Funktion.

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
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")

/* When used in clip-path only */
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : Definiert, welche Teile des Pfades innerhalb der Form liegen. Mögliche Werte sind:
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt gezeichnet wird, mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer nicht-null-Zählung führt. Dies ist der Standardwert, wenn `<fill-rule>` ausgelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt gezeichnet wird, eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass der Strahl jedes Mal, wenn er die Form betritt, nicht die gleiche Anzahl von Malen verlässt, was eine ungerade Anzahl von Eingängen ohne entsprechende Ausgänge anzeigt.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und seine Verwendung macht die Eigenschaft ungültig.

- {{cssxref("string")}}
  - : Ein [Datenstring](/de/docs/Web/SVG/Reference/Attribute/d), der in Anführungszeichen enthalten ist und einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) definiert. Der SVG-Pfad-Datenstring enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad wird als ungültig angesehen.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}} Wert zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer `path()` Funktion als `offset-path` Wert

Im folgenden Beispiel wurde eine `path()` Funktion als {{cssxref("offset-path")}} Wert bereitgestellt, um einen elliptischen Pfad zu erstellen, entlang welchem sich ein Ball bewegt.

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

{{EmbedLiveSample("Use as the value of offset-path", "100%", 350)}}

### Ändern des Werts des SVG-Pfadattributs d

Das `path()` kann verwendet werden, um den Wert des SVG [`d` Attributs](/de/docs/Web/SVG/Reference/Attribute/d) zu ändern, welcher in Ihrem CSS auch auf `none` gesetzt werden kann.

Das "V"-Symbol wird sich vertikal umdrehen, wenn Sie darüber fahren, sofern `d` als CSS-Eigenschaft unterstützt wird.

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover */
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

{{EmbedLiveSample('Modify the value of the SVG path d attribute', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Übersicht der CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [SVG Path Syntax Illustrated Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
