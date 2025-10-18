---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

Die **`font-variant-numeric`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinalmarker.

{{InteractiveExample("CSS Demo: font-variant-numeric", "taller")}}

```css interactive-example-choice
font-variant-numeric: normal;
```

```css interactive-example-choice
font-variant-numeric: ordinal;
```

```css interactive-example-choice
font-variant-numeric: slashed-zero;
```

```css interactive-example-choice
font-variant-numeric: tabular-nums;
```

```css interactive-example-choice
font-variant-numeric: oldstyle-nums;
```

```css interactive-example-choice
font-variant-numeric: lining-nums;
```

```css interactive-example-choice
font-variant-numeric: proportional-nums;
```

```css interactive-example-choice
font-variant-numeric: diagonal-fractions;
```

<!-- Source Sans Pro doesn't support stacked-fractions -->

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <table>
      <tr>
        <td><span class="tabular">0</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.54</span></td>
      </tr>
      <tr>
        <td><span class="tabular">1.71</span></td>
      </tr>
      <tr>
        <td><span class="tabular">1st</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3/4</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Source Sans Pro";
  src:
    local("SourceSansPro-Regular"),
    url("/shared-assets/fonts/SourceSansPro-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## Syntax

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* Global values */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: revert-layer;
font-variant-numeric: unset;
```

Diese Eigenschaft kann eine von zwei Formen annehmen:

- entweder den Schlüsselwortwert `normal`
- oder einen oder mehrere der unten aufgeführten Werte, leerzeichengetrennt, in beliebiger Reihenfolge.

### Werte

- `normal`
  - : Dieses Schlüsselwort führt zu einer Deaktivierung der Verwendung solcher alternativen Glyphen.

- `ordinal`
  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für Ordinalmarker, wie z.B. 1st, 2nd, 3rd, 4th im Englischen oder a 1a im Italienischen. Es entspricht den OpenType-Werten `ordn`.

- `slashed-zero`
  - : Dieses Schlüsselwort erzwingt die Verwendung einer 0 mit einem Schrägstrich; dies ist nützlich, wenn eine klare Unterscheidung zwischen O und 0 erforderlich ist. Es entspricht den OpenType-Werten `zero`.

- _`<numeric-figure-values>`_
  - : Diese Werte steuern die Ziffern, die für Zahlen verwendet werden. Zwei Werte sind möglich:
    - `lining-nums`, das die Ziffern aktiviert, bei denen alle Zahlen auf der Grundlinie liegen. Es entspricht den OpenType-Werten `lnum`.
    - `oldstyle-nums`, das die Ziffern aktiviert, bei denen einige Zahlen, wie 3, 4, 7, 9, Unterlängen haben. Es entspricht den OpenType-Werten `onum`.

- _`<numeric-spacing-values>`_
  - : Diese Werte steuern die Größen der Ziffern, die für Zahlen verwendet werden. Zwei Werte sind möglich:
    - `proportional-nums`, das die Ziffern aktiviert, bei denen Zahlen nicht alle die gleiche Größe haben. Es entspricht den OpenType-Werten `pnum`.
    - `tabular-nums`, das die Ziffern aktiviert, bei denen alle Zahlen die gleiche Größe haben, sodass sie wie in Tabellen leicht ausgerichtet werden können. Es entspricht den OpenType-Werten `tnum`.

- _`<numeric-fraction-values>`_
  - : Diese Werte steuern die Glyphen, die zur Anzeige von Brüchen verwendet werden. Zwei Werte sind möglich:
    - `diagonal-fractions`, das die Ziffern aktiviert, bei denen der Zähler und der Nenner verkleinert und durch einen Schrägstrich getrennt werden. Es entspricht den OpenType-Werten `frac`.
    - `stacked-fractions`, das die Ziffern aktiviert, bei denen der Zähler und der Nenner verkleinert, gestapelt und durch eine horizontale Linie getrennt werden. Es entspricht den OpenType-Werten `afrc`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen ordinaler Zahlformen

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___font-variant-numeric-example
<p class="ordinal">1st, 2nd, 3rd, 4th, 5th</p>
```

```css live-sample___font-variant-numeric-example
@font-face {
  font-family: "Source Sans Pro";
  src: url("https://mdn.github.io/shared-assets/fonts/SourceSansPro-Regular.otf")
    format("opentype");
  font-weight: normal;
  font-style: normal;
}

.ordinal {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-variant-numeric: ordinal;
}
```

{{EmbedLiveSample("font-variant-numeric-example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)
