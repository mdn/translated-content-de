---
title: sin()
slug: Web/CSS/sin
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`sin()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine trigonometrische Funktion, die den Sinus einer Zahl zurückgibt, welcher ein Wert zwischen `-1` und `1` ist. Die Funktion enthält eine einzelne Berechnung, die entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Bogenmaß interpretiert wird. Das bedeutet, `sin(45deg)`, `sin(0.125turn)` und `sin(3.14159 / 4)` repräsentieren alle denselben Wert, ungefähr `0.707`.

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

Die Funktion `sin(angle)` akzeptiert nur einen Wert als Parameter.

- `angle`
  - : Eine Berechnung, die sich auf eine {{cssxref("&lt;number&gt;")}} oder einen {{cssxref("&lt;angle&gt;")}} auflöst. Wenn maßlose Zahlen angegeben werden, werden sie als Anzahl von Bogenmaß interpretiert, was einem {{cssxref("&lt;angle&gt;")}} entspricht.

### Rückgabewert

Der Sinus eines `angle` wird immer eine Zahl zwischen `−1` und `1` zurückgeben.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.
- Wenn `angle` `0⁻` ist, ist das Ergebnis `0⁻`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ändern der Box-Größen

In diesem Beispiel wird `sin(30deg)` `0.5` zurückgeben, wodurch die Box eine Breite von `50px` und eine Höhe von `50px` erhält.

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Steuerung der Animationsdauer

Ein weiterer Anwendungsfall ist die Steuerung der {{cssxref("animation-duration")}}, die Dauer wird basierend auf dem Sinuswert reduziert. In diesem Fall beträgt die Animationsdauer `1s`.

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
