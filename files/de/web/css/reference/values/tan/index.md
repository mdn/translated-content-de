---
title: tan()
slug: Web/CSS/Reference/Values/tan
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`tan()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine trigonometrische Funktion, die den Tangens einer Zahl zurückgibt, welcher einen Wert zwischen `−unendlich` und `unendlich` darstellt. Die Funktion enthält eine einzige Berechnung, die auf ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Bogenmaß interpretiert wird.

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

Die `tan(angle)`-Funktion akzeptiert nur einen Wert als Parameter.

- `angle`
  - : Eine Berechnung, die auf ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Bei der Angabe von einheitenlosen Zahlen werden diese als Anzahl von Bogenmaßen interpretiert, die ein {{cssxref("&lt;angle&gt;")}} darstellen.

### Rückgabewert

Der Tangens eines `angle` gibt immer eine Zahl zwischen `−∞` und `+∞` zurück.

- Wenn `angle` `unendlich`, `-unendlich` oder `NaN` ist, ist das Ergebnis `NaN`.
- Wenn `angle` `0⁻` ist, ist das Ergebnis `0⁻`.
- Wenn `angle` einer der Asymptotenwerte ist (wie `90deg`, `270deg`, etc.), ist das Ergebnis _explizit undefiniert_. Autoren _dürfen_ sich _nicht_ darauf verlassen, dass `tan()` für diese Eingaben einen bestimmten Wert zurückgibt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Parallelogramme zeichnen

Die `tan()`-Funktion kann verwendet werden, um ein Parallelogramm mit einem gegebenen Begrenzungsrahmen zu zeichnen.

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
- [CSS-Typen-Arithmetik verwenden](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
