---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 8e4584c695829f1c404b03fd3ac90cbebdf745d7
---

{{CSSRef}}

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt den absoluten Wert des Arguments zurück, und zwar vom selben Typ wie die Eingabe.

## Syntax

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### Parameter

Die Funktion `abs(x)` akzeptiert nur einen Werte als Parameter.

- `x`
  - : Eine Berechnung, die zu einer Zahl aufgelöst wird.

### Rückgabewert

Der absolute Wert von `x`.

- Wenn der numerische Wert von `x` positiv oder `0⁺` ist, wird `x` zurückgegeben.
- Andernfalls wird `-1 * x` zurückgegeben.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()`-Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine CSS-Custom-Property `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Das Umschließen dieser benutzerdefinierten Eigenschaft mit `abs()` wandelt einen negativen Wert in einen positiven um.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Kontrolle über den Gradientenwinkel der Richtung

Sie können auch die Gradientenrichtung mithilfe der `abs()`-Funktion steuern. Im folgenden Beispiel würde der Gradientenverlauf bei einem Winkel von -45 Grad rot beginnen und in blau übergehen. Durch die Verwendung von `abs()` wird der Wert positiv, der Gradient beginnt also bei blau und geht in rot über.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Rückwärtskompatible Alternative

In älteren Browsern, die die Unterstützung für die CSS-`abs()`-Funktion nicht bieten, können Sie die CSS-{{CSSxRef("max")}}-Funktion verwenden, um dasselbe Ergebnis zu erzielen, wie unten gezeigt:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Wir verwenden die {{CSSxRef("max")}}-Funktion, um den größten (positivsten) Wert aus einer Liste von zwei Werten zurückzugeben: `var(--lh)` oder `-1 * var(--lh)`. Unabhängig davon, ob `--lh` positiv oder negativ ist, wird der berechnete Rückgabewert immer positiv sein, das heißt, eine absolute Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sign")}}
