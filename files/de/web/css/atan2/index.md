---
title: atan2()
slug: Web/CSS/atan2
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`atan2()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Arkustangens von zwei Werten zwischen `-infinity` und `infinity` zurückgibt. Die Funktion akzeptiert zwei Argumente und gibt die Anzahl der Bogenmaß zurück, die einen {{cssxref("&lt;angle&gt;")}} zwischen `-180deg` und `180deg` darstellt.

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

Die Funktion `atan2(y, x)` akzeptiert zwei durch Kommas getrennte Werte als Parameter. Jeder Wert kann ein {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein. Beide Werte müssen vom selben Typ sein, obwohl sie, wenn sie {{cssxref("&lt;dimension&gt;")}} sind, unterschiedliche Einheiten haben können (zum Beispiel: `atan2(100px, 5vw)` ist gültig).

- `y`
  - : Die y-Koordinate des Punktes. Eine Berechnung, die zu einem {{cssxref("&lt;number&gt;")}}, einer {{cssxref("&lt;dimension&gt;")}} oder einem {{cssxref("&lt;percentage&gt;")}} aufgelöst wird.
- `x`
  - : Die x-Koordinate des Punktes. Eine Berechnung, die zu einem {{cssxref("&lt;number&gt;")}}, einer {{cssxref("&lt;dimension&gt;")}} oder einem {{cssxref("&lt;percentage&gt;")}} aufgelöst wird.

### Rückgabewert

Gegeben zwei Werte `x` und `y`, berechnet und gibt die Funktion `atan2(y, x)` den {{cssxref("&lt;angle&gt;")}} zwischen der positiven x-Achse und dem Strahl vom Ursprung zu dem Punkt `(x, y)` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente drehen

Die `atan2()` Funktion kann verwendet werden, um Elemente mit {{cssxref("transform-function/rotate", "rotate")}} zu drehen, da sie einen {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
