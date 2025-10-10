---
title: sign()
slug: Web/CSS/sign
l10n:
  sourceCommit: da5384d0d11e250ab735379eaa6856468ffd52cd
---

Die **`sign()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) enthält eine Berechnung und gibt `-1` zurück, wenn der numerische Wert des Arguments negativ ist, `+1`, wenn der numerische Wert des Arguments positiv ist, `0⁺`, wenn der numerische Wert des Arguments 0⁺ ist, und `0⁻`, wenn der numerische Wert des Arguments 0⁻ ist.

> [!NOTE]
> Während {{CSSxRef("abs")}} den absoluten Wert des Arguments zurückgibt, gibt `sign()` das Vorzeichen des Arguments zurück.

## Syntax

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Parameter

Die Funktion `sign(x)` akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, die sich zu einer Zahl auflöst.

### Rückgabewert

Eine Zahl, die das Vorzeichen von `A` repräsentiert:

- Wenn `x` positiv ist, wird `1` zurückgegeben.
- Wenn `x` negativ ist, wird `-1` zurückgegeben.
- Wenn `x` positiv null ist, wird `0` zurückgegeben.
- Wenn `x` negativ null ist, wird `-0` zurückgegeben.
- Andernfalls wird `NaN` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Hintergrundbildposition

Zum Beispiel werden bei {{cssxref("background-position")}} positive Prozentsätze in eine negative Länge aufgelöst und umgekehrt, wenn das Hintergrundbild größer ist als der Hintergrundbereich. Daher könnte `sign(10%)` `1` oder `-1` zurückgeben, abhängig davon, wie der Prozentsatz aufgelöst wird! (Oder sogar `0`, wenn es gegen eine Länge von null aufgelöst wird.)

```css
div {
  background-position: sign(10%);
}
```

### Positionsrichtung

Ein weiterer Anwendungsfall ist die Kontrolle der {{cssxref("position")}} des Elements, entweder ein positiver oder ein negativer Wert.

```css
div {
  position: absolute;
  top: calc(100px * sign(var(--value)));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("abs")}}
- [Verwendung von CSS-typisierter Arithmetik](/de/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic)
