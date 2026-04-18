---
title: "`abs()` CSS-Funktion"
short-title: abs()
slug: Web/CSS/Reference/Values/abs
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`abs()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt den absoluten Wert des Arguments zurück, und zwar im gleichen Typ wie die Eingabe.

## Syntax

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### Parameter

Die `abs()`-Funktion akzeptiert einen Parameter.

- `<calc-sum>`
  - : Ein Ausdruck oder Berechnung, die sich zu einer {{cssxref("number")}}, einer {{cssxref("dimension")}}, einem {{cssxref("percentage")}} oder einem {{cssxref("calc-keyword")}} auflöst.

### Rückgabewert

Der absolute Wert von `<calc-sum>`.

- Wenn der numerische Wert von `<calc-sum>` positiv oder `0⁺` ist, gibt die Funktion `<calc-sum>` zurück.
- Andernfalls gibt sie `-1 * <calc-sum>` zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Positive Variablen

Die `abs()`-Funktion kann verwendet werden, um sicherzustellen, dass ein Wert immer positiv ist. Im folgenden Beispiel wird eine CSS-Benutzerdefinierte Eigenschaft `--font-size` als Wert von {{CSSxRef("font-size")}} verwendet. Das Einhüllen dieser benutzerdefinierten Eigenschaft in `abs()` wird einen negativen Wert in einen positiven konvertieren.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### Steuerung des Gradientenwinkels der Richtung

Sie können auch die Gradientenrichtung mit der `abs()`-Funktion steuern. Im folgenden Beispiel würde bei einem Winkel von -45deg der Gradient rot beginnen und zu blau übergehen. Durch die Verwendung von `abs()`, um den Wert positiv zu machen, wird der Gradient blau beginnen und zu rot übergehen.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### Abwärtskompatibler Fallback

In Browsern, die die CSS-`abs()`-Funktion nicht unterstützen, können Sie die CSS-{{CSSxRef("max")}}-Funktion verwenden, um dasselbe Ergebnis zu erzielen:

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

Wir verwenden die {{CSSxRef("max")}}-Funktion, um den größten (am positivsten) Wert aus einer Liste von zwei Werten zurückzugeben: `var(--lh)` oder `-1 * var(--lh)`. Unabhängig davon, ob `--lh` positiv oder negativ ist, wird der berechnete Rückgabewert immer positiv sein, also eine absolute Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sign")}}
