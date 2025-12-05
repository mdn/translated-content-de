---
title: path()
slug: Web/CSS/Reference/Values/basic-shape/path
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`path()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) nimmt einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) -String entgegen und wird in den Modulen [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) und [CSS Motion Path](/de/docs/Web/CSS/Guides/Motion_path) verwendet, um eine Form zu zeichnen. Die `path()`-Funktion ist ein {{cssxref("&lt;basic-shape&gt;")}} Datentypwert. Sie kann in den CSS-Eigenschaften {{cssxref("offset-path")}} und {{cssxref("clip-path")}} sowie im SVG-Attribut [`d`](/de/docs/Web/SVG/Reference/Attribute/d) verwendet werden.

Es gibt einige Einschränkungen bei der Verwendung der `path()`-Funktion. Der Pfad muss als einzelner String definiert werden, sodass ein benutzerdefinierter Pfad nicht mit Variablen ([`var()`](/de/docs/Web/CSS/Reference/Values/var) Funktionen) erstellt werden kann. Außerdem werden alle Längen im Pfad implizit in [Pixel](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`) Einheiten definiert; andere Einheiten können nicht verwendet werden. Die [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) Funktion bietet mehr Flexibilität als die `path()`-Funktion.

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
    - `nonzero`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt aus gezeichneter Strahl mehr von links nach rechts als von rechts nach links verlaufende Pfadsegmente kreuzt, was zu einer ungleich null zählenden Anzahl führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form betrachtet, wenn ein vom Punkt aus gezeichneter Strahl eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass jedes Mal, wenn der Strahl die Form betritt, er sie nicht in der gleichen Anzahl verlässt, was eine ungerade Anzahl von Eintritten ohne entsprechende Austritte anzeigt.

    > [!WARNING]
    > `<fill-rule>` wird nicht in {{cssxref("offset-path")}} unterstützt und die Verwendung macht die Eigenschaft ungültig.

- {{cssxref("string")}}
  - : Ein [Datenstring](/de/docs/Web/SVG/Reference/Attribute/d), der in Anführungszeichen steht und einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) definiert. Der SVG-Pfad-Datenstring enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixel-Einheiten verwenden. Ein leerer Pfad wird als ungültig betrachtet.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}} Wert zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer `path()`-Funktion als `offset-path`-Wert

Eine `path()`-Funktion wurde im folgenden Beispiel als {{cssxref("offset-path")}}-Wert bereitgestellt, um einen elliptischen Pfad zu erstellen, entlang dessen sich ein Ball bewegt.

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

### Ändern des Wertes des SVG-Pfad-d-Attributs

Die `path()`-Funktion kann verwendet werden, um den Wert des SVG-[`d` Attributs](/de/docs/Web/SVG/Reference/Attribute/d) zu ändern, welches in Ihrem CSS auch auf `none` gesetzt werden kann.

Das "V"-Symbol dreht sich vertikal, wenn Sie darüber fahren, falls `d` als CSS-Eigenschaft unterstützt wird.

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

{{EmbedLiveSample('Ändern des Wertes des SVG-Pfad-d-Attributs', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Übersicht der CSS Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [Der SVG `path` Syntax: ein illustrierter Leitfaden](https://css-tricks.com/svg-path-syntax-illustrated-guide/) via CSS-tricks (2021)
