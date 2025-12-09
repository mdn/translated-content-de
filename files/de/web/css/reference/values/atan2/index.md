---
title: atan2()
slug: Web/CSS/Reference/Values/atan2
l10n:
  sourceCommit: 1a4df4e8a562f50c4109e683e3c3637799425621
---

Die **`atan2()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine trigonometrische Funktion, die den inversen Tangens von zwei Werten zwischen `-unendlich` und `unendlich` zurückgibt. Die Funktion akzeptiert zwei Argumente und gibt einen {{cssxref("angle")}} zwischen `-180deg` und `180deg` zurück, ohne eine spezifische Einheit wie Radiant vorzuschlagen.

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

Die Funktion `atan2(y, x)` akzeptiert zwei durch Komma getrennte Werte als Parameter. Jeder Wert kann ein {{cssxref("&lt;number&gt;")}}, ein {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} sein. Beide Werte müssen vom gleichen Typ sein, obwohl sie, wenn sie {{cssxref("&lt;dimension&gt;")}} sind, unterschiedliche Einheiten haben können (Beispiel: `atan2(100px, 5vw)` ist gültig).

- `y`
  - : Die y-Koordinate des Punktes. Eine Berechnung, die sich in ein {{cssxref("&lt;number&gt;")}}, ein {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} auflöst.
- `x`
  - : Die x-Koordinate des Punktes. Eine Berechnung, die sich in ein {{cssxref("&lt;number&gt;")}}, ein {{cssxref("&lt;dimension&gt;")}}, oder ein {{cssxref("&lt;percentage&gt;")}} auflöst.

### Rückgabewert

Für zwei gegebene Werte `x` und `y` berechnet die Funktion `atan2(y, x)` und gibt den {{cssxref("angle")}} zwischen der positiven x-Achse und dem Strahl vom Ursprung zum Punkt `(x, y)` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente drehen

Die `atan2()`-Funktion kann verwendet werden, um Elemente zu {{cssxref("transform-function/rotate", "rotieren")}}, da sie einen {{cssxref("angle")}} zurückgibt.

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
