---
title: acos()
slug: Web/CSS/Reference/Values/acos
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`acos()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine trigonometrische Funktion, die den Arkuskosinus einer Zahl zwischen `-1` und `1` zurückgibt. Die Funktion enthält eine einzelne Berechnung, die einen {{cssxref("angle")}} zwischen `0deg` und `180deg` zurückgibt.

## Syntax

```css
/* Single <number> values */
transform: rotate(acos(-0.2));
transform: rotate(acos(2 * 0.125));

/* Other values */
transform: rotate(acos(pi / 5));
transform: rotate(acos(e / 3));
```

### Parameter

Die Funktion `acos(number)` akzeptiert nur einen Wert als ihren Parameter.

- `number`
  - : Eine Berechnung, die sich zu einer {{cssxref("&lt;number&gt;")}} zwischen `-1` und `1` auflöst.

### Rückgabewert

Der Arkuskosinus einer `number` gibt immer einen {{cssxref("angle")}} zwischen `0deg` und `180deg` zurück.

- Wenn `number` kleiner als `-1` oder größer als `1` ist, ist das Ergebnis `NaN`.
- Wenn `number` genau `1` ist, ist das Ergebnis `0`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente drehen

Die `acos()` Funktion kann verwendet werden, um Elemente mit {{cssxref("transform-function/rotate", "rotate")}} zu drehen, da sie einen {{cssxref("angle")}} zurückgibt.

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(acos(1));
}
div.box-2 {
  transform: rotate(acos(0.5));
}
div.box-3 {
  transform: rotate(acos(0));
}
div.box-4 {
  transform: rotate(acos(-0.5));
}
div.box-5 {
  transform: rotate(acos(-1));
}
```

#### Ergebnis

{{EmbedLiveSample('Rotate elements', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
