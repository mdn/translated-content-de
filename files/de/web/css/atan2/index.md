---
title: atan2()
slug: Web/CSS/atan2
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

Die **`atan2()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ist eine trigonometrische Funktion, die den inversen Tangens von zwei Werten zwischen `-unendlich` und `unendlich` zurückgibt. Die Funktion akzeptiert zwei Argumente und gibt die Anzahl von Bogenmaß zurück, die ein {{cssxref("&lt;angle&gt;")}} zwischen `-180deg` und `180deg` darstellt.

## Syntax

```css
/* Two <number> values */
transform: rotate(atan2(3, 2));

/* Two <dimension> values */
transform: rotate(atan2(1rem, -0.5rem));

/* Two <percentage> values */
transform: rotate(atan2(20%, -30%));

/* Other values */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### Parameter

Die Funktion `atan2(y, x)` akzeptiert zwei durch Komma getrennte Werte als Parameter. Jeder Wert kann eine {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} sein. Beide Werte müssen vom gleichen Typ sein, obwohl sie, falls es sich um {{cssxref("&lt;dimension&gt;")}} handelt, unterschiedliche Einheiten haben können (Beispiel: `atan2(100px, 5vw)` ist gültig).

- `y`
  - : Die y-Koordinate des Punktes. Eine Berechnung, die auf eine {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} hinausläuft.
- `x`
  - : Die x-Koordinate des Punktes. Eine Berechnung, die auf eine {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} hinausläuft.

### Rückgabewert

Bei gegebenen zwei Werten `x` und `y` berechnet die Funktion `atan2(y, x)` und gibt das {{cssxref("&lt;angle&gt;")}} zwischen der positiven x-Achse und dem Strahl vom Ursprung zum Punkt `(x, y)` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente drehen

Die `atan2()` Funktion kann verwendet werden, um Elemente zu {{cssxref("transform-function/rotate", "drehen")}}, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
  transform: rotate(atan2(3, 2));
}
div.box-2 {
  transform: rotate(atan2(3%, -2%));
}
div.box-3 {
  transform: rotate(atan2(-1, 0.5));
}
div.box-4 {
  transform: rotate(atan2(1, 0.5));
}
div.box-5 {
  transform: rotate(atan2(1rem, -0.5rem));
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
- {{CSSxRef("atan")}}
- [Verwendung von CSS-typisierter Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic)
