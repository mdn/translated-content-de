---
title: CSS-Funktion `path()`
short-title: path()
slug: Web/CSS/Reference/Values/basic-shape/path
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`path()`** nimmt eine Zeichenfolge entgegen, die einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) beschreibt. Sie wird in den Modulen [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) und [CSS Motion Path](/de/docs/Web/CSS/Guides/Motion_path) verwendet, um eine Form zu zeichnen. Die Funktion `path()` liefert einen Wert des Datentyps {{cssxref("basic-shape")}}. Sie kann in den CSS-Eigenschaften {{cssxref("offset-path")}} und {{cssxref("clip-path")}} sowie im SVG-Attribut [`d`](/de/docs/Web/SVG/Reference/Attribute/d) verwendet werden.

Die Verwendung von `path()` unterliegt einigen Einschränkungen. Der Pfad muss als einzelne Zeichenfolge definiert werden. Daher lässt sich mit Variablen (den [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktionen) kein benutzerdefinierter Pfad erstellen. Außerdem werden alle Längen im Pfad implizit in [Pixeln](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`) angegeben; andere Einheiten können nicht verwendet werden. Die Funktion [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) bietet mehr Flexibilität als `path()`.

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
  - : Legt fest, welche Bereiche des Pfads innerhalb der Form liegen. Mögliche Werte sind:
    - `nonzero`: Ein Punkt gilt als innerhalb der Form liegend, wenn ein von ihm ausgehender Strahl mehr Pfadsegmente von links nach rechts als von rechts nach links kreuzt. Die resultierende Anzahl ist dann ungleich null. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt gilt als innerhalb der Form liegend, wenn ein von ihm ausgehender Strahl eine ungerade Anzahl von Pfadsegmenten kreuzt. Der Strahl ist dann öfter in die Form eingetreten, als er sie verlassen hat.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt. Seine Verwendung macht die Eigenschaft ungültig.

- {{cssxref("string")}}
  - : Eine in Anführungszeichen eingeschlossene [Datenzeichenfolge](/de/docs/Web/SVG/Reference/Attribute/d), die einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) definiert. Sie enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad ist ungültig.

### Rückgabewert

Gibt einen Wert des Typs {{cssxref("basic-shape")}} zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine `path()`-Funktion als Wert für `offset-path` verwenden

Im folgenden Beispiel wird eine `path()`-Funktion als Wert für {{cssxref("offset-path")}} angegeben. Sie erstellt einen elliptischen Pfad, entlang dessen sich ein Ball bewegt.

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

{{EmbedLiveSample("using_a_path_function_as_an_offset-path_value", "100%", 350)}}

### Den Wert des SVG-Pfad-Attributs d ändern

Mit `path()` lässt sich der Wert des SVG-[Attributs `d`](/de/docs/Web/SVG/Reference/Attribute/d) ändern. In CSS kann dafür auch `none` festgelegt werden.

Wenn `d` als CSS-Eigenschaft unterstützt wird, wird das „V“-Symbol beim Bewegen des Mauszeigers darüber vertikal gespiegelt.

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

- {{cssxref("border-shape")}}, {{cssxref("shape-outside")}}
- Modul [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes)
- [Überblick über CSS Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [Die SVG-`path`-Syntax: ein illustrierter Leitfaden](https://css-tricks.com/svg-path-syntax-illustrated-guide/) auf CSS-Tricks (2021)
