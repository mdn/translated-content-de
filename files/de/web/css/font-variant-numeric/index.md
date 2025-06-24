---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`font-variant-numeric`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungszahlen.

{{InteractiveExample("CSS Demo: font-variant-numeric")}}

```css interactive-example-choice
font-variant-numeric: normal;
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
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
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
- oder einen oder mehrere der unten aufgeführten anderen Werte, durch Leerzeichen getrennt, in beliebiger Reihenfolge.

### Werte

- `normal`

  - : Dieses Schlüsselwort deaktiviert die Verwendung solcher alternativer Glyphen.

- `ordinal`

  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für Ordnungszahlen, wie 1st, 2nd, 3rd, 4th im Englischen oder a 1a im Italienischen. Es entspricht den OpenType-Werten `ordn`.

- `slashed-zero`

  - : Dieses Schlüsselwort erzwingt die Verwendung einer 0 mit einem Schrägstrich. Dies ist nützlich, wenn eine klare Unterscheidung zwischen O und 0 erforderlich ist. Es entspricht den OpenType-Werten `zero`.

- _`<numeric-figure-values>`_

  - : Diese Werte steuern die Ziffern, die für Zahlen verwendet werden. Zwei Werte sind möglich:
    - `lining-nums`, die das Set von Ziffern aktivieren, bei denen alle Zahlen auf der Grundlinie liegen. Es entspricht den OpenType-Werten `lnum`.
    - `oldstyle-nums`, die das Set von Ziffern aktivieren, bei denen einige Zahlen, wie 3, 4, 7, 9, Unterlängen haben. Es entspricht den OpenType-Werten `onum`.

- _`<numeric-spacing-values>`_

  - : Diese Werte steuern die Größe der für Zahlen verwendeten Ziffern. Zwei Werte sind möglich:
    - `proportional-nums`, die das Set von Ziffern aktivieren, bei denen die Zahlen nicht alle gleich groß sind. Es entspricht den OpenType-Werten `pnum`.
    - `tabular-nums`, die das Set von Ziffern aktivieren, bei denen alle Zahlen gleich groß sind, sodass sie leicht wie in Tabellen ausgerichtet werden können. Es entspricht den OpenType-Werten `tnum`.

- _`<numeric-fraction-values>`_
  - : Diese Werte steuern die Glyphen, die zur Anzeige von Bruchzahlen verwendet werden. Zwei Werte sind möglich:
    - `diagonal-fractions`, die das Set von Ziffern aktivieren, bei denen Zähler und Nenner verkleinert und durch einen Schrägstrich getrennt sind. Es entspricht den OpenType-Werten `frac`.
    - `stacked-fractions`, die das Set von Ziffern aktivieren, bei denen Zähler und Nenner verkleinert, gestapelt und durch eine horizontale Linie getrennt sind. Es entspricht den OpenType-Werten `afrc`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von Ordnungszahlen

Klicken Sie auf "Abspielen" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___font-variant-numeric-example
<p class="ordinal">1st, 2nd, 3rd, 4th, 5th</p>
```

```css live-sample___font-variant-numeric-example
@font-face {
  font-family: "Source Sans Pro";
  src: url("https://mdn.github.io/shared-assets/fonts/SourceSansPro-Regular.otf")
    format("opentype");
  font-weight: 400;
  font-style: normal;
}

.ordinal {
  font-family: "Source Sans Pro";
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
