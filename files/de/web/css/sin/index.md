---
title: sin()
slug: Web/CSS/sin
l10n:
  sourceCommit: c51c4c3911715acdfd2e3912b6e6df95d40d4e0c
---

Die **`sin()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Sinus eines Wertes zurückgibt, der zwischen `-1` und `1` liegt. Die Funktion enthält eine einzelne Berechnung, die entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Radiant interpretiert wird. Das bedeutet, `sin(45deg)`, `sin(0.125turn)` und `sin(3.14159 / 4)` stellen alle denselben Wert dar, ungefähr `0.707`.

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
  --dotsize: 10px;
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
    radial-gradient(black var(--dotsize), transparent var(--dotsize)),
    linear-gradient(135deg, #0000ff, #00c9ff, #92fe9d, #e6e6fa, #f0fff0);
}
.dot {
  display: block;
  width: var(--dotsize);
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

Die `sin(angle)` Funktion akzeptiert nur einen Wert als Parameter.

- `angle`
  - : Eine Berechnung, die zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Bei der Angabe von einheitenlosen Zahlen werden diese als Anzahl von Radianten interpretiert, was einem {{cssxref("&lt;angle&gt;")}} entspricht.

### Rückgabewert

Der Sinus eines `angle` wird immer eine Zahl zwischen `−1` und `1` zurückgeben.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.
- Wenn `angle` `0⁻` ist, ist das Ergebnis `0⁻`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Änderung der Box-Größen

In diesem Beispiel gibt `sin(30deg)` `0.5` zurück, wodurch die Box eine Breite von `50px` und eine Höhe von `50px` hat.

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
