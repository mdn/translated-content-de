---
title: sin()
slug: Web/CSS/sin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`sin()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Sinus einer Zahl zurückgibt, welche ein Wert zwischen `-1` und `1` ist. Die Funktion enthält eine einzelne Berechnung, die entweder zu einem {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Radiant interpretiert wird. Das bedeutet, `sin(45deg)`, `sin(0.125turn)` und `sin(3.14159 / 4)` repräsentieren alle denselben Wert, ungefähr `0.707`.

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

Die `sin(angle)` Funktion akzeptiert nur einen Wert als ihren Parameter.

- `angle`
  - : Eine Berechnung, die zu einem {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Wenn zahlen ohne Einheit angegeben werden, werden sie als Zahl von Radiant interpretiert, die ein {{cssxref("&lt;angle&gt;")}} darstellen.

### Rückgabewert

Der Sinus eines `angle` ergibt immer eine Zahl zwischen `−1` und `1`.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.
- Wenn `angle` `0⁻` ist, ist das Ergebnis `0⁻`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Änderung der Box-Größen

In diesem Beispiel wird `sin(30deg)` den Wert `0.5` zurückgeben, was die Box eine Breite von `50px` und eine Höhe von `50px` haben lässt.

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Steuerung der Animationsdauer

Ein weiterer Anwendungsfall ist die Steuerung der {{cssxref("animation-duration")}}, bei der die Dauer basierend auf dem Sinuswert reduziert wird. In diesem Fall wird die Animationsdauer `1s` betragen.

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
