---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt den Absolutwert des Arguments zurück, und zwar vom selben Typ wie die Eingabe.

## Syntax

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### Parameter

Die Funktion `abs(x)` akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, die zu einer Zahl aufgelöst wird.

### Rückgabewert

Der Absolutwert von `x`.

- Wenn der numerische Wert von `x` positiv oder `0⁺` ist, geben Sie `x` zurück.
- Ansonsten wird `-1 * x` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()` Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine benutzerdefinierte CSS-Eigenschaft `--font-size` als Wert für {{CSSxRef("font-size")}} verwendet. Durch das Einbetten dieser benutzerdefinierten Eigenschaft in `abs()` wird ein negativer Wert in einen positiven umgewandelt.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Steuerung des Verlaufswinkels der Richtung

Sie können auch die Verlaufsrichtung mit der `abs()` Funktion steuern. Im folgenden Beispiel würde der Verlauf mit einem Winkel von -45 Grad rot beginnen und zu blau übergehen. Durch die Verwendung von `abs()`, um den Wert positiv zu machen, beginnt der Verlauf blau und wechselt zu rot.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Rückwärtskompatibler Fallback

In älteren Browsern, die die Unterstützung für die CSS `abs()` Funktion nicht bieten, können Sie die CSS {{CSSxRef("max")}} Funktion verwenden, um das gleiche Ergebnis zu erzielen, wie unten gezeigt:

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
