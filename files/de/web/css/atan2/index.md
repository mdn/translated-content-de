---
title: atan2()
slug: Web/CSS/atan2
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`atan2()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Arkustangens von zwei Werten zwischen `-infinity` und `infinity` zurückgibt. Die Funktion akzeptiert zwei Argumente und gibt die Anzahl der Bogenmaß zurück, die von einem {{cssxref("&lt;angle&gt;")}} zwischen `-180deg` und `180deg` dargestellt werden.

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

Die Funktion `atan2(y, x)` akzeptiert zwei kommagetrennte Werte als Parameter. Jeder Wert kann entweder ein {{cssxref("&lt;number&gt;")}}, ein {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} sein. Beide Werte müssen vom selben Typ sein, obwohl sie bei {{cssxref("&lt;dimension&gt;")}} unterschiedliche Einheiten haben können (zum Beispiel: `atan2(100px, 5vw)` ist gültig).

- `y`
  - : Die y-Koordinate des Punktes. Eine Berechnung, die zu einem {{cssxref("&lt;number&gt;")}}, einem {{cssxref("&lt;dimension&gt;")}}, oder einem {{cssxref("&lt;percentage&gt;")}} führt.
- `x`
  - : Die x-Koordinate des Punktes. Eine Berechnung, die zu einem {{cssxref("&lt;number&gt;")}}, einem {{cssxref("&lt;dimension&gt;")}}, oder einem {{cssxref("&lt;percentage&gt;")}} führt.

### Rückgabewert

Angenommen, Sie haben zwei Werte `x` und `y`, dann berechnet und gibt die Funktion `atan2(y, x)` den {{cssxref("&lt;angle&gt;")}} zwischen der positiven x-Achse und dem Strahl vom Ursprung bis zum Punkt `(x, y)` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente rotieren

Die `atan2()` Funktion kann verwendet werden, um Elemente zu {{cssxref("transform-function/rotate", "rotieren")}}, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
