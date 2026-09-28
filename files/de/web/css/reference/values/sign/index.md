---
title: CSS-Funktion `sign()`
short-title: sign()
slug: Web/CSS/Reference/Values/sign
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Die [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`sign()`** enthält eine Berechnung und gibt `-1` zurück, wenn der numerische Wert des Arguments negativ ist, `+1`, wenn er positiv ist, `0⁺`, wenn er 0⁺ ist, und `0⁻`, wenn er 0⁻ ist.

> [!NOTE]
> Während {{CSSxRef("abs")}} den Absolutwert des Arguments zurückgibt, gibt `sign()` dessen Vorzeichen zurück.

## Syntax

```css
/* property: sign( expression ) */
top: sign(20vh - 100px);
```

### Parameter

Die Funktion `sign(x)` akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, deren Ergebnis eine Zahl ist.

### Rückgabewert

Eine Zahl, die das Vorzeichen von `A` darstellt:

- Wenn `x` positiv ist, wird `1` zurückgegeben.
- Wenn `x` negativ ist, wird `-1` zurückgegeben.
- Wenn `x` positiv null ist, wird `0` zurückgegeben.
- Wenn `x` negativ null ist, wird `-0` zurückgegeben.
- Andernfalls wird `NaN` zurückgegeben.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Position des Hintergrundbilds

In {{cssxref("background-position")}} ergeben beispielsweise positive Prozentwerte eine negative Länge und umgekehrt, wenn das Hintergrundbild größer als der Hintergrundbereich ist. Daher kann `sign(10%)` entweder `1` oder `-1` zurückgeben – je nachdem, wie der Prozentwert aufgelöst wird! (Oder sogar `0`, wenn er anhand einer Länge von null aufgelöst wird.)

```css
div {
  background-position: calc(sign(10%) * 1px);
}
```

### Positionsrichtung

Ein weiterer Anwendungsfall ist die Steuerung der {{cssxref("position")}} des Elements – mit einem positiven oder einem negativen Wert.

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
- [Typisierte Arithmetik in CSS verwenden](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
