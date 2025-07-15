---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt den absoluten Wert des Arguments zurück, und zwar in demselben Typ wie die Eingabe.

## Syntax

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### Parameter

Die `abs(x)` Funktion akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, die zu einer Zahl aufgelöst wird.

### Rückgabewert

Der absolute Wert von `x`.

- Wenn der numerische Wert von `x` positiv oder `0⁺` ist, wird `x` zurückgegeben.
- Andernfalls wird `-1 * x` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()` Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine CSS-Custom-Property `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Das Einhüllen dieser Custom-Property in `abs()` wandelt einen negativen Wert in einen positiven um.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Steuerung des Verlaufswinkels der Richtung

Sie können auch die Verlaufsrichtung mit der `abs()` Funktion steuern. Im folgenden Beispiel würde bei einem Winkel von -45 Grad der Verlauf rot beginnen und zu blau übergehen. Durch die Verwendung von `abs()` wird der Wert positiv gemacht, sodass der Verlauf blau beginnt und nach rot übergeht.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Abwärtskompatible Fallback

In älteren Browsern, die die CSS `abs()` Funktion nicht unterstützen, können Sie die CSS {{CSSxRef("max")}} Funktion verwenden, um dasselbe Ergebnis zu erzielen, wie unten gezeigt:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Wir verwenden die {{CSSxRef("max")}} Funktion, um den größten (am positivsten) Wert aus einer Liste von zwei Werten zurückzugeben: `var(--lh)` oder `-1 * var(--lh)`. Unabhängig davon, ob `--lh` positiv oder negativ ist, wird der berechnete Rückgabewert immer positiv sein, d.h. eine absolute Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sign")}}
