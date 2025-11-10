---
title: atan2()
slug: Web/CSS/Reference/Values/atan2
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`atan2()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine trigonometrische Funktion, die den inversen Tangens von zwei Werten zwischen `-unendlich` und `unendlich` zurückgibt. Die Funktion akzeptiert zwei Argumente und gibt die Anzahl der Bogenmaß zurück, die ein {{cssxref("&lt;angle&gt;")}} zwischen `-180deg` und `180deg` darstellt.

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

Die `atan2(y, x)` Funktion akzeptiert zwei durch Kommas getrennte Werte als ihre Parameter. Jeder Wert kann ein {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} sein. Beide Werte müssen vom gleichen Typ sein, obwohl sie bei {{cssxref("&lt;dimension&gt;")}} unterschiedliche Einheiten haben können (zum Beispiel: `atan2(100px, 5vw)` ist gültig).

- `y`
  - : Die y-Koordinate des Punktes. Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}}, einer {{cssxref("&lt;dimension&gt;")}}, oder einem {{cssxref("&lt;percentage&gt;")}} auflöst.
- `x`
  - : Die x-Koordinate des Punktes. Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}}, einer {{cssxref("&lt;dimension&gt;")}}, oder einem {{cssxref("&lt;percentage&gt;")}} auflöst.

### Rückgabewert

Für zwei Werte `x` und `y` berechnet und gibt die Funktion `atan2(y, x)` das {{cssxref("&lt;angle&gt;")}} zwischen der positiven x-Achse und dem Strahl vom Ursprung zu dem Punkt `(x, y)` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente rotieren

Die `atan2()` Funktion kann verwendet werden, um Elemente mit {{cssxref("transform-function/rotate", "rotate")}} zu drehen, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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
- [Verwendung von CSS typisierte Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
