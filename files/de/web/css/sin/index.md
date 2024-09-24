---
title: sin()
slug: Web/CSS/sin
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`sin()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine trigonometrische Funktion, die den Sinus einer Zahl zurückgibt, welche einen Wert zwischen `-1` und `1` darstellt. Die Funktion enthält eine einzelne Berechnung, die sich entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} auflösen muss, indem das Ergebnis des Arguments als Bogenmaß interpretiert wird. Das bedeutet, `sin(45deg)`, `sin(0.125turn)` und `sin(3.14159 / 4)` repräsentieren alle denselben Wert, ungefähr `0.707`.

## Syntax

```css
/* Einzelne <angle> Werte */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* Einzelne <number> Werte */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* Andere Werte */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### Parameter

Die `sin(angle)` Funktion akzeptiert nur einen Wert als ihren Parameter.

- `angle`
  - : Eine Berechnung, die sich zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} auflöst. Bei der Angabe von Zahlen ohne Einheit werden sie als Bogenmaß interpretiert, was einem {{cssxref("&lt;angle&gt;")}} entspricht.

### Rückgabewert

Der Sinus eines `angle` wird immer eine Zahl zwischen `−1` und `1` zurückgeben.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ergibt das Resultat `NaN`.
- Wenn `angle` `0⁻` ist, ergibt das Resultat `0⁻`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Änderung der Kastengrößen

In diesem Beispiel gibt `sin(30deg)` `0.5` zurück, wodurch die Box eine Breite und eine Höhe von `50px` hat.

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Steuerung der Animationsdauer

Ein weiterer Anwendungsfall ist die Steuerung der {{cssxref("animation-duration")}}, wobei die Dauer basierend auf dem Sinuswert reduziert wird. In diesem Fall wird die Animationsdauer `1s` betragen.

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
