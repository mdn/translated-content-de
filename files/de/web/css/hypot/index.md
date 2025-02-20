---
title: hypot()
slug: Web/CSS/hypot
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`hypot()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine exponentielle Funktion, die die [Quadratwurzel](https://de.wikipedia.org/wiki/Quadratwurzel) der Summe der Quadrate ihrer Parameter zurückgibt.

Während {{CSSxRef("pow")}} und {{CSSxRef("sqrt")}} nur mit einheitslosen Zahlen arbeiten, akzeptiert `hypot()` Werte mit Einheiten. Diese müssen jedoch alle denselben [Typ](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) haben.

## Syntax

```css
/* A <number> value */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### Parameter

Die Funktion `hypot(x [, ...]#)` akzeptiert einen oder mehrere durch Kommas getrennte Berechnungen als Parameter.

- `x`, `x2`, ..., `xN`
  - : Eine Berechnung, die sich zu einem {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}} auflöst.

### Rückgabewert

Gibt ein {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}} oder {{CSSxRef("&lt;percentage&gt;")}} (basierend auf den Eingaben) zurück, welches die Quadratwurzel der Summe der Quadrate seiner Parameter ist.

- Wenn einer der Eingaben `infinite` ist, lautet das Ergebnis `+∞`.
- Wird nur ein einzelner Parameter übergeben, ist das Ergebnis der Absolutwert seiner Eingabe. `hypot(2em)` und `hypot(-2em)` ergeben beide `2em`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größen basierend auf der hypot-Funktion

Dieses Beispiel zeigt, wie Sie die `hypot()`-Funktion verwenden können, um Größen zu berechnen.

#### HTML

```html
<div class="boxes">
  <div class="box">100px</div>
  <div class="box one">100px</div>
  <div class="box two">141.42px</div>
  <div class="box three">250px</div>
</div>
```

#### CSS

Hier verwenden wir [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), um die zu verwendenden Größen zu definieren. Zunächst deklarieren wir die erste Größe (`--size-0`), die dann verwendet wird, um die anderen Größen zu berechnen.

- `--size-1` wird mit der Hypotenuse von `--size-0` (100px) berechnet. Dies nimmt den quadratischen Wert und, da es keinen anderen Wert gibt, gibt die Quadratwurzel des Wertes zurück, was zu 100px führt.
- `--size-2` wird mit der Hypotenuse von `--size-0` (100px), zweimal, berechnet. Dies nimmt das Quadrat des Wertes (100px \* 100px = 10000px<sup>2</sup>) und addiert es zum Quadrat von `--size-0` erneut (10000px<sup>2</sup> + 10000px<sup>2</sup> = 20000px<sup>2</sup>) und gibt die Quadratwurzel der Summe zurück (√(20000px<sup>2</sup>)), was zu 141,42px führt.
- `--size-3` wird mit der Hypotenuse `--size-0` \* 1.5 (150px) und `--size-0` \* 2 (200px) berechnet. Das Ergebnis ist die Quadratwurzel der Summe ihrer Quadrate: Die Werte werden quadriert (22500px<sup>2</sup> und 40000px<sup>2</sup>) und zusammenaddiert (62500px<sup>2</sup>), wobei die Summe quadriert wird (√(62500px<sup>2</sup>)) und 250px ergibt.

```css
:root {
  --size-0: 100px;
  --size-1: hypot(var(--size-0)); /*  100px */
  --size-2: hypot(var(--size-0), var(--size-0)); /*  141.42px */
  --size-3: hypot(
    calc(var(--size-0) * 1.5),
    calc(var(--size-0) * 2)
  ); /*  250px */
}
```

```css hidden
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: var(--size-0);
  height: var(--size-0);
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Die Größen werden dann als `width`- und `height`-Werte der Selektoren angewendet.

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### Ergebnis

{{EmbedLiveSample('Sizes based on hypot function', '100%', '270px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}
