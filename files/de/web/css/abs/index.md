---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt den absoluten Wert des Arguments zurück, und zwar vom selben Typ wie die Eingabe.

## Syntax

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### Parameter

Die Funktion `abs(x)` akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, die sich zu einer Zahl auflöst.

### Rückgabewert

Der absolute Wert von `x`.

- Wenn der numerische Wert von `x` positiv oder `0⁺` ist, wird `x` zurückgegeben.
- Andernfalls wird `-1 * x` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()`-Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine CSS-Benutzerdefinierte Eigenschaft `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Durch das Einbetten dieser benutzerdefinierten Eigenschaft in `abs()` wird ein negativer Wert in einen positiven konvertiert.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Kontrollieren der Verlaufsrichtung des Winkels

Sie können auch die Richtung des Verlaufs mit der `abs()`-Funktion steuern. Im folgenden Beispiel würde bei einem Winkel von -45deg der Verlauf rot beginnen und zu blau übergehen. Durch die Verwendung von `abs()`, um den Wert positiv zu machen, wird der Verlauf blau beginnen und zu rot übergehen.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Abwärtskompatible Fallback-Option

In älteren Browsern, die die Unterstützung für die CSS-`abs()`-Funktion nicht haben, können Sie die CSS-{{CSSxRef("max")}}-Funktion verwenden, um dasselbe Ergebnis zu erzielen, wie unten gezeigt:

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
