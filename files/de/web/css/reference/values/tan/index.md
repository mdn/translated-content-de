---
title: tan()
slug: Web/CSS/Reference/Values/tan
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`tan()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine trigonometrische Funktion, die den Tangens einer Zahl zurückgibt, welcher einen Wert zwischen `−unendlich` und `unendlich` hat. Die Funktion enthält eine einzelne Berechnung, die entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("angle")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Radiant interpretiert wird.

## Syntax

```css
/* Single <angle> values */
width: calc(100px * tan(45deg));
width: calc(100px * tan(0.125turn));
width: calc(100px * tan(0.785398163rad));

/* Single <number> values */
width: calc(100px * tan(0.5773502));
width: calc(100px * tan(1.732 - 1));

/* Other values */
width: calc(100px * tan(pi / 3));
width: calc(100px * tan(e));
```

### Parameter

Die `tan(angle)` Funktion akzeptiert nur einen Wert als Parameter.

- `angle`
  - : Eine Berechnung, die sich zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("angle")}} auflöst. Wenn zahlen ohne Einheit angegeben werden, werden sie als Anzahl von Radiant interpretiert, die einen {{cssxref("angle")}} darstellen.

### Rückgabewert

Der Tangens eines `angle` wird immer eine Zahl zwischen `−∞` und `+∞` zurückgeben.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.
- Wenn `angle` `0⁻` ist, ist das Ergebnis `0⁻`.
- Wenn `angle` einer der Asymptotenwerte ist (wie `90deg`, `270deg`, etc.), ist das Ergebnis _explizit undefiniert_. Autoren _dürfen nicht_ darauf vertrauen, dass `tan()` für diese Eingaben einen bestimmten Wert zurückgibt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Parallelogramme zeichnen

Die `tan()` Funktion kann verwendet werden, um ein Parallelogramm mit einem gegebenen Begrenzungsrahmen zu zeichnen.

#### HTML

```html
<div class="parallelogram"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.parallelogram {
  --w: 400;
  --h: 200;
  --angle: 30deg;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));
}
.parallelogram::before {
  content: "";
  position: absolute;
  width: calc(100% - 100% * var(--h) / var(--w) * tan(var(--angle)));
  height: 100%;
  transform-origin: 0 100%;
  transform: skewX(calc(0deg - var(--angle)));
  background-color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Drawing parallelograms', '100%', '250px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
- [Verwendung von CSS-typisierter Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
