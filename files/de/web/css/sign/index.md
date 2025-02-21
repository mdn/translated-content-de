---
title: sign()
slug: Web/CSS/sign
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`sign()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) enthält eine Berechnung und gibt `-1` zurück, wenn der numerische Wert des Arguments negativ ist, `+1`, wenn der numerische Wert des Arguments positiv ist, `0⁺`, wenn der numerische Wert des Arguments 0⁺ ist, und `0⁻`, wenn der numerische Wert des Arguments 0⁻ ist.

> [!NOTE]
> Während {{CSSxRef("abs")}} den absoluten Wert des Arguments zurückgibt, gibt `sign()` das Vorzeichen des Arguments zurück.

## Syntax

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Parameter

Die `sign(x)` Funktion akzeptiert nur einen Wert als ihren Parameter.

- `x`
  - : Eine Berechnung, die sich zu einer Zahl auflöst.

### Rückgabewert

Eine Zahl, die das Vorzeichen von `A` darstellt:

- Wenn `x` positiv ist, wird `1` zurückgegeben.
- Wenn `x` negativ ist, wird `-1` zurückgegeben.
- Wenn `x` positive Null ist, wird `0` zurückgegeben.
- Wenn `x` negative Null ist, wird `-0` zurückgegeben.
- Ansonsten wird `NaN` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Hintergrundbildposition

Zum Beispiel, bei {{cssxref("background-position")}} werden positive Prozentsätze in eine negative Länge aufgelöst und umgekehrt, wenn das Hintergrundbild größer ist als der Hintergrundbereich. Daher könnte `sign(10%)` `1` oder `-1` zurückgeben, abhängig davon, wie der Prozentsatz aufgelöst wird! (Oder sogar `0`, wenn es gegen eine Länge von Null aufgelöst wird.)

```css
div {
  background-position: sign(10%);
}
```

### Positionsrichtung

Ein weiterer Anwendungsfall ist, die {{cssxref("position")}} des Elements zu steuern. Entweder ein positiver oder negativer Wert.

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
