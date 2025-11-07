---
title: abs()
slug: Web/CSS/Reference/Values/abs
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt den absoluten Wert des Arguments im gleichen Typ wie die Eingabe zurück.

## Syntax

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### Parameter

Die `abs()` Funktion akzeptiert einen Parameter.

- `<calc-sum>`
  - : Ein Ausdruck oder eine Berechnung, die sich auf eine {{cssxref("number")}}, eine {{cssxref("dimension")}}, einen {{cssxref("percentage")}} oder ein {{cssxref("calc-keyword")}} auflöst.

### Rückgabewert

Der absolute Wert von `<calc-sum>`.

- Wenn der numerische Wert von `<calc-sum>` positiv oder `0⁺` ist, gibt die Funktion `<calc-sum>` zurück.
- Andernfalls gibt sie `-1 * <calc-sum>` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()` Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine CSS-Custom-Property `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Durch das Einrahmen dieser benutzerdefinierten Eigenschaft in `abs()` wird ein negativer Wert in einen positiven umgewandelt.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Steuerung des Verlaufswinkels der Richtung

Sie können auch die Verlaufsrichtung mithilfe der `abs()` Funktion steuern. Im folgenden Beispiel würde der Verlauf bei einem Winkel von -45 Grad mit Rot beginnen und zu Blau übergehen. Durch die Verwendung von `abs()`, um den Wert positiv zu machen, beginnt der Verlauf mit Blau und geht zu Rot über.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Rückwärtskompatibler Fallback

In Browsern, die die CSS `abs()` Funktion nicht unterstützen, können Sie die CSS {{CSSxRef("max")}} Funktion verwenden, um dasselbe Ergebnis zu erzielen:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Wir verwenden die {{CSSxRef("max")}} Funktion, um den größten (positivsten) Wert aus einer Liste von zwei Werten zurückzugeben: `var(--lh)` oder `-1 * var(--lh)`. Unabhängig davon, ob `--lh` positiv oder negativ ist, wird der berechnete Rückgabewert immer positiv sein, das heißt, eine absolute Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sign")}}
