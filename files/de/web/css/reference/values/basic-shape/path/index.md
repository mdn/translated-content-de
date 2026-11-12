---
title: CSS-Funktion `path()`
short-title: path()
slug: Web/CSS/Reference/Values/basic-shape/path
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`path()`** akzeptiert eine Zeichenfolge für einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path). Sie wird in den Modulen [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) und [CSS Motion Path](/de/docs/Web/CSS/Guides/Motion_path) verwendet, um eine Form zu zeichnen. Die Funktion `path()` liefert einen Wert des Datentyps {{cssxref("basic-shape")}}. Sie kann in den CSS-Eigenschaften {{cssxref("offset-path")}} und {{cssxref("clip-path")}} sowie im SVG-Attribut [`d`](/de/docs/Web/SVG/Reference/Attribute/d) verwendet werden.

Die Verwendung der Funktion `path()` unterliegt einigen Einschränkungen. Der Pfad muss als einzelne Zeichenfolge definiert werden. Daher lässt sich ein benutzerdefinierter Pfad nicht mithilfe von Variablen ([`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktionen) erstellen. Außerdem werden alle Längen im Pfad implizit in [Pixeln](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`) angegeben; andere Einheiten können nicht verwendet werden. Die Funktion [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) bietet mehr Flexibilität als `path()`.

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
    - `nonzero`: Ein Punkt gilt als innerhalb der Form liegend, wenn ein von ihm ausgehender Strahl mehr Pfadsegmente von links nach rechts als von rechts nach links schneidet. Daraus ergibt sich ein Wert ungleich null. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt gilt als innerhalb der Form liegend, wenn ein von ihm ausgehender Strahl eine ungerade Anzahl von Pfadsegmenten schneidet. Das bedeutet, dass der Strahl häufiger in die Form eingetreten ist, als er sie verlassen hat.

    > [!WARNING]
    > `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt. Seine Verwendung macht den Eigenschaftswert ungültig.

- {{cssxref("string")}}
  - : Eine in Anführungszeichen eingeschlossene [Datenzeichenfolge](/de/docs/Web/SVG/Reference/Attribute/d), die einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) definiert. Die SVG-Pfaddatenzeichenfolge enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad ist ungültig.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}}-Wert zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine `path()`-Funktion als `offset-path`-Wert verwenden

Im folgenden Beispiel wird eine `path()`-Funktion als Wert für {{cssxref("offset-path")}} verwendet, um einen elliptischen Pfad zu erstellen, entlang dessen sich ein Ball bewegt.

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

Mit `path()` lässt sich der Wert des SVG-[Attributs `d`](/de/docs/Web/SVG/Reference/Attribute/d) ändern. In CSS kann dieser Wert auch auf `none` gesetzt werden.

Wenn `d` als CSS-Eigenschaft unterstützt wird, wird das „V“-Symbol vertikal gespiegelt, sobald Sie den Mauszeiger darüber bewegen.

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

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
