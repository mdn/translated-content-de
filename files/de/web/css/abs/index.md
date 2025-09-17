---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: b09d6e2402f997214bb80c93aba8ea1148e120d5
---

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt den Absolutwert des Arguments zurück, und zwar vom selben Typ wie die Eingabe.

## Syntax

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### Parameter

Die `abs()` Funktion akzeptiert einen Parameter.

- `<calc-sum>`
  - : Ein Ausdruck oder eine Berechnung, die sich zu einer {{cssxref("number")}}, einer {{cssxref("dimension")}}, einem {{cssxref("percentage")}} oder einem {{cssxref("calc-keyword")}} auflöst.

### Rückgabewert

Der Absolutwert von `<calc-sum>`.

- Ist der numerische Wert von `<calc-sum>` positiv oder `0⁺`, gibt die Funktion `<calc-sum>` zurück.
- Andernfalls gibt sie `-1 * <calc-sum>` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()` Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine CSS-Custom-Eigenschaft `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Durch das Einbinden dieser Custom-Eigenschaft in `abs()` wird ein negativer Wert in einen positiven umgewandelt.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Steuerung des Verlaufswinkels

Sie können auch die Verlaufsrichtung mit der `abs()` Funktion steuern. Im folgenden Beispiel würde der Verlauf bei einem Winkel von -45deg rot beginnen und zu blau wechseln. Durch die Verwendung von `abs()`, um den Wert positiv zu machen, beginnt der Verlauf blau und wechselt zu rot.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Rückwärtskompatibler Fallback

In Browsern, die die CSS `abs()` Funktion nicht unterstützen, können Sie die CSS {{CSSxRef("max")}} Funktion verwenden, um das gleiche Ergebnis zu erzielen:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Wir verwenden die {{CSSxRef("max")}} Funktion, um den größten (am positivsten) Wert aus einer Liste von zwei Werten zurückzugeben: `var(--lh)` oder `-1 * var(--lh)`. Unabhängig davon, ob `--lh` positiv oder negativ ist, wird der berechnete Rückgabewert immer positiv sein, das heißt, eine absolute Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sign")}}
