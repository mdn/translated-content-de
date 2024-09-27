---
title: path()
slug: Web/CSS/basic-shape/path
l10n:
  sourceCommit: 055a1e91d6fc009abf2abe516057f47c861163d0
---

{{CSSRef}}

Die **`path()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) akzeptiert einen [SVG-Pfad](/de/docs/Web/SVG/Element/path)-String und wird in den Modulen [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) und [CSS-Bewegungspfade](/de/docs/Web/CSS/CSS_motion_path) verwendet, um das Zeichnen einer Form zu ermöglichen. Die `path()`-Funktion ist ein {{cssxref("&lt;basic-shape&gt;")}} Datentyp-Wert. Sie kann in den CSS-Eigenschaften [`offset-path`](/de/docs/Web/CSS/offset-path) und [`clip-path`](/de/docs/Web/CSS/clip-path) sowie im SVG-Attribut [`d`](/de/docs/Web/SVG/Attribute/d) verwendet werden.

Es gibt einige Einschränkungen bei der Verwendung der `path()`-Funktion. Der Pfad muss als einzelner String definiert werden, sodass ein individueller Pfad nicht mithilfe von Variablen ([`var()`](/de/docs/Web/CSS/var)-Funktionen) erstellt werden kann. Außerdem sind alle Längen im Pfad implizit in [Pixel](/de/docs/Web/CSS/CSS_Values_and_Units#absolute_length_units) (`px`) Einheiten definiert; andere Einheiten können nicht verwendet werden. Die [`shape()`](/de/docs/Web/CSS/basic-shape/shape)-Funktion bietet mehr Flexibilität als die `path()`-Funktion.

{{EmbedInteractiveExample("pages/css/function-path.html")}}

## Syntax

Wenn in {{cssxref("offset-path")}} oder {{cssxref("d")}} verwendet:

```css
path(<string>)
```

Wenn in {{cssxref("clip-path")}} verwendet:

```css
path( [<fill-rule>,]? <string> )
```

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : Definiert, welche Teile des Pfads innerhalb der Form liegen. Die möglichen Werte sind:

    - `nonzero`: Ein Punkt wird als innerhalb der Form angesehen, wenn ein Strahl, der vom Punkt ausgeht, mehr von links nach rechts als von rechts nach links die Pfadsegmente kreuzt, was zu einer nicht-null-Zählung führt. Dies ist der Standardwert, wenn `<fill-rule>` weggelassen wird.

    - `evenodd`: Ein Punkt wird als innerhalb der Form angesehen, wenn ein Strahl, der vom Punkt ausgeht, eine ungerade Anzahl von Pfadsegmenten kreuzt. Das bedeutet, dass jedes Mal, wenn der Strahl die Form betritt, er nicht die gleiche Anzahl an Austritten verzeichnet, was auf eine ungerade Anzahl von Eintritten ohne entsprechende Austritte hinweist.

    > **Warning:** `<fill-rule>` wird in {{cssxref("offset-path")}} nicht unterstützt und macht die Eigenschaft ungültig, wenn es verwendet wird.

- {{cssxref("string")}}
  - : Ein [Daten-String](/de/docs/Web/SVG/Attribute/d), in Anführungszeichen eingeschlossen, der einen [SVG-Pfad](/de/docs/Web/SVG/Element/path) definiert. Der SVG-Pfad-Datenstring enthält [Pfadbefehle](/de/docs/Web/SVG/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad gilt als ungültig.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}}-Wert zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiele für korrekte Werte für path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Verwendung einer `path()`-Funktion als `offset-path`-Wert

Im folgenden Beispiel wurde eine `path()`-Funktion als {{cssxref("offset-path")}}-Wert bereitgestellt, um einen elliptischen Pfad für eine Kugel zu erstellen, entlang derer sie sich bewegt.

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

### Den Wert des SVG-Pfadattributs d ändern

Die `path()`-Funktion kann verwendet werden, um den Wert des SVG-[`d`-Attributs](/de/docs/Web/SVG/Attribute/d) zu ändern, das in Ihrem CSS auch auf `none` gesetzt werden kann.

Das „V“-Symbol wird sich vertikal drehen, wenn Sie darüber schweben, sofern `d` als CSS-Eigenschaft unterstützt wird.

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

{{EmbedLiveSample('Den Wert des SVG-Pfadattributs d ändern', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [SVG-Pfad-Syntax: Illustrierter Leitfaden](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
