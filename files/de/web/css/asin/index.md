---
title: asin()
slug: Web/CSS/asin
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`asin()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Arkussinus einer Zahl zwischen `-1` und `1` zurückgibt. Die Funktion enthält eine einzige Berechnung, die die Anzahl der Radianten zurückgibt, die ein {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` darstellt.

## Syntax

```css
/* Single <number> values */
transform: rotate(asin(-0.2));
transform: rotate(asin(2 * 0.125));

/* Other values */
transform: rotate(asin(pi / 5));
transform: rotate(asin(e / 3));
```

### Parameter

Die `asin(number)` Funktion akzeptiert nur einen Wert als ihren Parameter.

- `number`
  - : Eine Berechnung, die sich auf eine {{cssxref("&lt;number&gt;")}} zwischen `-1` und `1` auflöst.

### Rückgabewert

Der Arkussinus einer `number` wird immer ein {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` zurückgeben.

- Wenn `number` kleiner als `-1` oder größer als `1` ist, ist das Ergebnis `NaN`.
- Wenn `number` `0⁻` ist, ist das Ergebnis `0⁻`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente rotieren

Die `asin()` Funktion kann verwendet werden, um Elemente zu {{cssxref("transform-function/rotate", "rotieren")}}, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
  transform: rotate(asin(1));
}
div.box-2 {
  transform: rotate(asin(0.5));
}
div.box-3 {
  transform: rotate(asin(0));
}
div.box-4 {
  transform: rotate(asin(-0.5));
}
div.box-5 {
  transform: rotate(asin(-1));
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
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
