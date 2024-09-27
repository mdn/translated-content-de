---
title: atan()
slug: Web/CSS/atan
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`atan()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine trigonometrische Funktion, die den Arkustangens einer Zahl zwischen `-∞` und `+∞` zurückgibt. Die Funktion enthält eine einzelne Berechnung, die die Anzahl der Bogenmaßzahlen zurückgibt, die ein {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` darstellen.

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

Die Funktion `atan(number)` akzeptiert nur einen Wert als Parameter.

- `number`
  - : Eine Berechnung, die sich zu einer {{cssxref("&lt;number&gt;")}} zwischen `-∞` und `+∞` auflöst.

### Rückgabewert

Der Arkustangens einer `number` gibt immer ein {{cssxref("&lt;angle&gt;")}} zwischen `-90deg` und `90deg` zurück.

- Wenn `number` `0⁻` ist, ist das Ergebnis `0⁻`.
- Wenn `number` `+∞` ist, ist das Ergebnis `90deg`.
- Wenn `number` `-∞` ist, ist das Ergebnis `-90deg`.

Das bedeutet:

- `atan(-infinity)` repräsentiert `-90deg`.
- `atan(-1)` repräsentiert `-45deg`.
- `atan(0)` repräsentiert `0deg`.
- `atan(1)` repräsentiert `45deg`.
- `atan(infinity)` repräsentiert `90deg`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente drehen

Die `atan()` Funktion kann verwendet werden, um Elemente mit {{cssxref("transform-function/rotate", "rotate")}} zu drehen, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
