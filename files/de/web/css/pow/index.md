---
title: pow()
slug: Web/CSS/pow
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`pow()`**-Funktion in [CSS](/de/docs/Web/CSS) ist eine Exponentialfunktion, die den Wert einer Basis berechnet, der auf die Potenz einer Zahl erhöht wird.

Die {{CSSxRef("exp")}}-Funktion ist ein Spezialfall von `pow()`, bei dem der Wert der Basis die mathematische Konstante [e](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>) ist.

## Syntax

```css
/* A <number> value */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### Parameter

Die `pow(base, number)`-Funktion akzeptiert zwei durch Kommas getrennte Werte als Parameter.

- `base`
  - : Eine Berechnung, die sich zu einem {{CSSxRef("&lt;number&gt;")}} auflöst und die Basis repräsentiert.
- `number`
  - : Eine Berechnung, die sich zu einem {{CSSxRef("&lt;number&gt;")}} auflöst und den Exponenten darstellt.

### Rückgabewert

Gibt eine {{CSSxRef("&lt;number&gt;")}} zurück, die base<sup>number</sup> darstellt, also `base` potenziert mit `number`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Skalierung von Überschriften nach einem festen Verhältnis

Die `pow()`-Funktion kann nützlich sein für Strategien wie den CSS Modular Scale, der alle Schriftgrößen auf einer Seite durch ein festes Verhältnis miteinander verknüpft.

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * pow(1.5, 4));
}
h2 {
  font-size: calc(1rem * pow(1.5, 3));
}
h3 {
  font-size: calc(1rem * pow(1.5, 2));
}
h4 {
  font-size: calc(1rem * pow(1.5, 1));
}
h5 {
  font-size: calc(1rem * pow(1.5, 0));
}
h6 {
  font-size: calc(1rem * pow(1.5, -1));
}
```

#### Ergebnis

{{EmbedLiveSample('Scale headings by fixed ratio', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
- {{CSSxRef("log")}}
