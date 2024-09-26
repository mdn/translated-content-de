---
title: atan2()
slug: Web/CSS/atan2
l10n:
  sourceCommit: c1363cfad9ca8a5dd63a7f60a0c19e4766eec8c3
---

{{CSSRef}}

Die **`atan2()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine trigonometrische Funktion, die den Arcustangens von zwei Werten zwischen `-infinity` und `infinity` zurückgibt. Die Funktion akzeptiert zwei Argumente und gibt die Zahl der Bogenmaß zurück, die einen {{cssxref("&lt;angle&gt;")}} zwischen `-180deg` und `180deg` darstellt.

## Syntax

```css
/* Zwei <number> Werte */
transform: rotate(atan2(3, 2));

/* Zwei <dimension> Werte */
transform: rotate(atan2(1rem, -0.5rem));

/* Zwei <percentage> Werte */
transform: rotate(atan2(20%, -30%));

/* Andere Werte */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### Parameter

Die Funktion `atan2(y, x)` akzeptiert zwei kommagetrennte Werte als Parameter. Jeder Wert kann ein {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein. Beide Werte müssen vom gleichen Typ sein, obwohl sie, wenn sie eine {{cssxref("&lt;dimension&gt;")}} sind, unterschiedliche Einheiten haben können (Beispiel: `atan2(100px, 5vw)` ist gültig).

- `y`
  - : Die y-Koordinate des Punktes. Eine Berechnung, die auf ein {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} aufgelöst wird.
- `x`
  - : Die x-Koordinate des Punktes. Eine Berechnung, die auf ein {{cssxref("&lt;number&gt;")}}, eine {{cssxref("&lt;dimension&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} aufgelöst wird.

### Rückgabewert

Angenommen, es gibt zwei Werte `x` und `y`, dann berechnet die Funktion `atan2(y, x)` und gibt den {{cssxref("&lt;angle&gt;")}} zwischen der positiven x-Achse und dem Strahl vom Ursprung zum Punkt `(x, y)` zurück.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente drehen

Die `atan2()`-Funktion kann verwendet werden, um Elemente mit {{cssxref("transform-function/rotate", "rotate")}} zu drehen, da sie ein {{cssxref("&lt;angle&gt;")}} zurückgibt.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}