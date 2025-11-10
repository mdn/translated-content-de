---
title: atan()
slug: Web/CSS/Reference/Values/atan
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`atan()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine trigonometrische Funktion, die den Arkustangens einer Zahl zwischen `-∞` und `+∞` zurückgibt. Die Funktion enthält eine einzelne Berechnung, die die Anzahl der Bogenmaßgrade als ein {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` zurückgibt.

## Syntax

```css
/* Single <number> values */
transform: rotate(atan(1));
transform: rotate(atan(4 * 50));

/* Other values */
transform: rotate(atan(pi / 2));
transform: rotate(atan(e * 3));
```

### Parameter

Die `atan(number)` Funktion akzeptiert nur einen Wert als ihren Parameter.

- `number`
  - : Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} zwischen `-∞` und `+∞` auflöst.

### Rückgabewert

Der Arkustangens einer `number` wird immer ein {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` zurückgeben.

- Wenn `number` `0⁻` ist, ist das Ergebnis `0⁻`.
- Wenn `number` `+∞` ist, ist das Ergebnis `90deg`.
- Wenn `number` `-∞` ist, ist das Ergebnis `-90deg`.

Das bedeutet:

- `atan(-infinity)` entspricht `-90deg`.
- `atan(-1)` entspricht `-45deg`
- `atan(0)` entspricht `0deg`
- `atan(1)` entspricht `45deg`
- `atan(infinity)` entspricht `90deg`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente rotieren

Die `atan()` Funktion kann verwendet werden, um Elemente zu {{cssxref("transform-function/rotate", "rotieren")}}, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
