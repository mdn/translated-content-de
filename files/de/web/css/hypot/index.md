---
title: hypot()
slug: Web/CSS/hypot
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`hypot()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine exponentielle Funktion, die die [Quadratwurzel](https://en.wikipedia.org/wiki/Square_root) der Summe der Quadrate ihrer Parameter zurückgibt.

Während {{CSSxRef("pow")}} und {{CSSxRef("sqrt")}} nur auf einheitenlosen Zahlen funktionieren, akzeptiert `hypot()` Werte mit Einheiten, aber sie müssen alle denselben [Typ](/de/docs/Web/CSS/CSS_Types) haben.

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

Die `hypot(x [, ...]#)` Funktion akzeptiert eine oder mehrere durch Kommas getrennte Berechnungen als ihre Parameter.

- `x`, `x2`, ..., `xN`
  - : Eine Berechnung, die sich zu einem {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, oder {{CSSxRef("&lt;percentage&gt;")}} auflöst.

### Rückgabewert

Gibt ein {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}}, oder {{CSSxRef("&lt;percentage&gt;")}} (basierend auf den Eingaben) zurück, das die Quadratwurzel der Summe der Quadrate seiner Parameter ist.

- Wenn eine der Eingaben `unendlich` ist, ist das Ergebnis `+∞`.
- Wenn ein einzelner Parameter angegeben wird, ist das Ergebnis der absolute Wert seiner Eingabe. `hypot(2em)` und `hypot(-2em)` werden beide zu `2em`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größen basierend auf der hypot-Funktion

Dieses Beispiel zeigt, wie Sie die `hypot()` Funktion verwenden können, um Größen zu berechnen.

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

Hier verwenden wir [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties), um die zu verwendenden Größen zu definieren. Zuerst deklarieren wir die erste Größe (`--size-0`), die dann verwendet wird, um die anderen Größen zu berechnen.

- `--size-1` wird mit der Hypotenuse von `--size-0` (100px) berechnet. Dies nimmt den quadratischen Wert und da es keinen anderen Wert gibt, gibt es die Quadratwurzel des Wertes zurück, was zu 100px führt.
- `--size-2` wird mit der Hypotenuse von `--size-0` (100px) zweimal berechnet. Dies führt das Quadrat des Wertes (100px \* 100px = 10000px<sup>2</sup>) aus und addiert es erneut zum Quadrat von `--size-0` (10000px<sup>2</sup> + 10000px<sup>2</sup> = 20000px<sup>2</sup>) und gibt die Quadratwurzel der Summe zurück (√(20000px<sup>2</sup>)), was 141.42px ergibt.
- `--size-3` wird mit der Hypotenuse `--size-0` \* 1.5 (150px) und `--size-0` \* 2 (200px) berechnet. Das Ergebnis ist die Quadratwurzel der Summe ihrer Quadrate: Die Werte werden quadriert (22500px<sup>2</sup> und 40000px<sup>2</sup>) und zusammengezählt (62500px<sup>2</sup>), wobei die Summe quadriert wird (√(62500px<sup>2</sup>)) und 250px ergibt.

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

Die Größen werden dann als `width` und `height` Werte der Selektoren angewendet.

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
