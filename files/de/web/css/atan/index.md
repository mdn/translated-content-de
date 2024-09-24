---
title: atan()
slug: Web/CSS/atan
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`atan()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine trigonometrische Funktion, die den inversen Tangens einer Zahl zwischen `-∞` und `+∞` zurückgibt. Die Funktion enthält eine einzelne Berechnung, die die Anzahl der Bogenmaß-Radianten darstellt, die einem {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` entsprechen.

## Syntax

```css
/* Einzelne <number>-Werte */
transform: rotate(atan(1));
transform: rotate(atan(4 * 50));

/* Andere Werte */
transform: rotate(atan(pi / 2));
transform: rotate(atan(e * 3));
```

### Parameter

Die `atan(number)` Funktion akzeptiert nur einen Wert als Parameter.

- `number`
  - : Eine Berechnung, die sich zu einer {{cssxref("&lt;number&gt;")}} zwischen `-∞` und `+∞` auflöst.

### Rückgabewert

Der inverse Tangens einer `number` wird immer einen {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` zurückgeben.

- Wenn `number` `0⁻` ist, ist das Ergebnis `0⁻`.
- Wenn `number` `+∞` ist, ist das Ergebnis `90deg`.
- Wenn `number` `-∞` ist, ist das Ergebnis `-90deg`.

Das bedeutet:

- `atan(-infinity)` entspricht `-90deg`.
- `atan(-1)` entspricht `-45deg`
- `atan(0)` entspricht `0deg`
- `atan(1)` entspricht `45deg`
- `atan(infinity)` entspricht `90deg`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente rotieren lassen

Die `atan()` Funktion kann verwendet werden, um Elemente mit {{cssxref("transform-function/rotate", "rotate")}} zu drehen, da sie einen {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
  transform: rotate(atan(-99999));
}
div.box-2 {
  transform: rotate(atan(-1));
}
div.box-3 {
  transform: rotate(atan(0));
}
div.box-4 {
  transform: rotate(atan(1));
}
div.box-5 {
  transform: rotate(atan(99999));
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
- {{CSSxRef("acos")}}
- {{CSSxRef("atan2")}}
