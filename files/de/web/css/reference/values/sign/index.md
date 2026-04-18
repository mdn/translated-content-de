---
title: "`sign()` CSS-Funktion"
short-title: sign()
slug: Web/CSS/Reference/Values/sign
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`sign()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) enthält eine Berechnung und gibt `-1` zurück, wenn der numerische Wert des Arguments negativ ist, `+1`, wenn der numerische Wert des Arguments positiv ist, `0⁺`, wenn der numerische Wert des Arguments 0⁺ ist, und `0⁻`, wenn der numerische Wert des Arguments 0⁻ ist.

> [!NOTE]
> Während {{CSSxRef("abs")}} den absoluten Wert des Arguments zurückgibt, gibt `sign()` das Vorzeichen des Arguments zurück.

## Syntax

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Parameter

Die `sign(x)` Funktion akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, die sich zu einer Zahl auflöst.

### Rückgabewert

Eine Zahl, die das Vorzeichen von `A` repräsentiert:

- Wenn `x` positiv ist, wird `1` zurückgegeben.
- Wenn `x` negativ ist, wird `-1` zurückgegeben.
- Wenn `x` positive Null ist, wird `0` zurückgegeben.
- Wenn `x` negative Null ist, wird `-0` zurückgegeben.
- Andernfalls wird `NaN` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Hintergrundbildposition

Zum Beispiel lösen sich in {{cssxref("background-position")}} positive Prozentsätze in eine negative Länge auf und umgekehrt, wenn das Hintergrundbild größer als der Hintergrundbereich ist. So könnte `sign(10%)` `1` oder `-1` zurückgeben, je nachdem, wie der Prozentsatz aufgelöst wird! (Oder sogar `0`, wenn es gegen eine Null-Länge aufgelöst wird.)

```css
div {
  background-position: sign(10%);
}
```

### Richtungsbestimmung

Ein weiterer Anwendungsfall ist die Steuerung der {{cssxref("position")}} des Elements. Entweder ein positiver oder ein negativer Wert.

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
- [Verwendung von typisierter CSS-Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
