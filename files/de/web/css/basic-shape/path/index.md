---
title: path()
slug: Web/CSS/basic-shape/path
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`path()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) akzeptiert einen [SVG-Pfad](/de/docs/Web/SVG/Element/path) als Zeichenkette und wird in den Modulen [CSS shapes](/de/docs/Web/CSS/CSS_shapes) und [CSS motion path](/de/docs/Web/CSS/CSS_motion_path) verwendet, um eine Form zu zeichnen. Die `path()`-Funktion ist ein {{cssxref("&lt;basic-shape&gt;")}} Datentypwert. Sie kann in den CSS-Eigenschaften [`offset-path`](/de/docs/Web/CSS/offset-path) und [`clip-path`](/de/docs/Web/CSS/clip-path) sowie im SVG-Attribut [`d`](/de/docs/Web/SVG/Attribute/d) verwendet werden.

Es gibt einige Einschränkungen bei der Verwendung der `path()`-Funktion. Der Pfad muss als einzelner String definiert werden, sodass ein benutzerdefinierter Pfad nicht mit Variablen ([`var()`](/de/docs/Web/CSS/var) Funktionen) erstellt werden kann. Außerdem werden alle Längen im Pfad implizit in [Pixeleinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`px`) definiert; andere Einheiten können nicht verwendet werden. Die [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion bietet mehr Flexibilität als die `path()`-Funktion.

{{EmbedInteractiveExample("pages/css/function-path.html")}}

## Syntax

Verwendet in {{cssxref("offset-path")}} oder {{cssxref("d")}}:

```css
path(<string>)
```

Verwendet in {{cssxref("clip-path")}}:

```css
path( [<fill-rule>,]? <string> )
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : Definiert, welche Teile des Pfades innerhalb der Form liegen. Die möglichen Werte sind:

    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, mehr von links nach rechts als von rechts nach links Pfadsegmente kreuzt, was zu einer ungeraden Zählung führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein Strahl, der vom Punkt ausgeht, eine ungerade Anzahl von Pfadsegmenten kreuzt. Dies bedeutet, dass der Strahl für jedes Betreten der Form nicht die gleiche Anzahl an Austritten hat, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > **Warning:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und die Verwendung macht die Eigenschaft ungültig.

- {{cssxref("string")}}
  - : Ein [Datenstring](/de/docs/Web/SVG/Attribute/d), der in Anführungszeichen steht und einen [SVG-Pfad](/de/docs/Web/SVG/Element/path) definiert. Der SVG-Pfad-Datenstring enthält [Pfadbefehle](/de/docs/Web/SVG/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad wird als ungültig angesehen.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}} Wert zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele korrekter Werte für path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Verwendung einer `path()`-Funktion als `offset-path`-Wert

Eine `path()`-Funktion wird im folgenden Beispiel als {{cssxref("offset-path")}}-Wert bereitgestellt, um einen elliptischen Pfad zu schaffen, entlang dem sich ein Ball bewegt.

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

### Ändern des Wertes des SVG-Pfadattributs d

Der `path()` kann verwendet werden, um den Wert des SVG-Attributs [`d`](/de/docs/Web/SVG/Attribute/d) zu ändern, das in Ihrem CSS auch auf `none` gesetzt werden kann.

Das „V“-Symbol wird sich vertikal umdrehen, wenn Sie darüber fahren, sofern `d` als CSS-Eigenschaft unterstützt wird.

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

{{EmbedLiveSample('Ändern des Wertes des SVG-Pfadattributs d', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [SVG Path Syntax Illustrated Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
