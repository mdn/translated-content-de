---
title: sin()
slug: Web/CSS/sin
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`sin()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Sinus einer Zahl zurückgibt, welcher ein Wert zwischen `-1` und `1` ist. Die Funktion enthält eine einzelne Berechnung, die entweder auf eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Bogenmaß interpretiert wird. Das heißt, `sin(45deg)`, `sin(0.125turn)`, und `sin(3.14159 / 4)` stellen alle denselben Wert dar, ungefähr `0.707`.

{{InteractiveExample("CSS Demo: sin()")}}

```css interactive-example-choice
transform: translateX(calc(cos(0deg) * 140px))
  translateY(calc(sin(0deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(90deg) * 140px))
  translateY(calc(sin(90deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(135deg) * 140px))
  translateY(calc(sin(135deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(180deg) * 140px))
  translateY(calc(sin(180deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(-45deg) * 140px))
  translateY(calc(sin(-45deg) * -140px));
```

```html interactive-example
<div class="circle">
  <span class="dot" id="example-element"></span>
</div>
```

```css interactive-example
:root {
  --radius: 140px;
  --dot-size: 10px;
}
.circle {
  display: grid;
  place-content: center;
  margin: 0 auto;
  width: calc(var(--radius) * 2);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666;
  background-image:
    radial-gradient(black var(--dot-size), transparent var(--dot-size)),
    linear-gradient(135deg, blue, deepskyblue, lightgreen, lavender, honeydew);
}
.dot {
  display: block;
  width: var(--dot-size);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666;
  background-color: #f66;
  transform: translateX(calc(cos(0deg) * var(--radius)))
    translateY(calc(sin(0deg) * var(--radius) * -1));
}
```

## Syntax

```css
/* Single <angle> values */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* Single <number> values */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* Other values */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### Parameter

Die Funktion `sin(angle)` akzeptiert nur einen Wert als ihren Parameter.

- `angle`
  - : Eine Berechnung, die auf eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Wenn Zahlen ohne Einheiten angegeben werden, werden sie als Anzahl von Bogenmaß interpretiert, die ein {{cssxref("&lt;angle&gt;")}} darstellen.

### Rückgabewert

Der Sinus eines `angle` wird immer eine Zahl zwischen `−1` und `1` zurückgeben.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.
- Wenn `angle` `0⁻` ist, ist das Ergebnis `0⁻`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ändern der Boxgrößen

In diesem Beispiel wird `sin(30deg)` den Wert `0.5` zurückgeben, wodurch die Box eine Breite und Höhe von `50px` hat.

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Steuerung der Animationsdauer

Ein weiterer Anwendungsfall ist die Steuerung der {{cssxref("animation-duration")}}, indem die Dauer basierend auf dem Sinuswert reduziert wird. In diesem Fall wird die Animationsdauer `1s` betragen.

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
