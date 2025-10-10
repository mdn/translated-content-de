---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt den Absolutwert des Arguments zurück, als der gleiche Typ wie der Eingabewert.

## Syntax

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### Parameter

Die `abs()`-Funktion akzeptiert einen Parameter.

- `<calc-sum>`
  - : Ein Ausdruck oder eine Berechnung, die zu einer {{cssxref("number")}}, einer {{cssxref("dimension")}}, einem {{cssxref("percentage")}} oder einem {{cssxref("calc-keyword")}} aufgelöst wird.

### Rückgabewert

Der Absolutwert von `<calc-sum>`.

- Wenn der numerische Wert von `<calc-sum>` positiv oder `0⁺` ist, gibt die Funktion `<calc-sum>` zurück.
- Andernfalls gibt sie `-1 * <calc-sum>` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()`-Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine benutzerdefinierte CSS-Eigenschaft `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Das Einwickeln dieser benutzerdefinierten Eigenschaft in `abs()` wandelt einen negativen Wert in einen positiven um.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Steuerung des Verlaufswinkels der Richtung

Sie können mit der `abs()`-Funktion auch die Verlaufsrichtung steuern. Im folgenden Beispiel würde der Verlauf bei einem Winkel von -45deg rot beginnen und zu blau übergehen. Durch die Verwendung von `abs()`, um den Wert positiv zu machen, wird der Verlauf blau beginnen und zu rot übergehen.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Rückwärtskompatible Fallback-Lösung

In Browsern, die die CSS-`abs()`-Funktion nicht unterstützen, können Sie die CSS-{{CSSxRef("max")}}-Funktion verwenden, um dasselbe Ergebnis zu erzielen:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Wir verwenden die {{CSSxRef("max")}}-Funktion, um den größten (am positivsten) Wert aus einer Liste von zwei Werten zurückzugeben: `var(--lh)` oder `-1 * var(--lh)`. Unabhängig davon, ob `--lh` positiv oder negativ ist, wird der berechnete Rückgabewert immer positiv sein, das heißt, eine absolute Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sign")}}
