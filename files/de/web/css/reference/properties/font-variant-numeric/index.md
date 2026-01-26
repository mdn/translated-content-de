---
title: font-variant-numeric
slug: Web/CSS/Reference/Properties/font-variant-numeric
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`font-variant-numeric`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordnungsmarker.

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
      <tbody>
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
      </tbody>
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
- oder einen oder mehrere der unten aufgeführten Werte, durch Leerzeichen getrennt, in beliebiger Reihenfolge.

### Werte

- `normal`
  - : Dieses Schlüsselwort deaktiviert die Verwendung solcher alternativen Glyphen.

- `ordinal`
  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für Ordnungsmarker, wie 1st, 2nd, 3rd, 4th in Englisch oder a 1a in Italienisch. Es entspricht den OpenType-Werten `ordn`.

- `slashed-zero`
  - : Dieses Schlüsselwort erzwingt die Verwendung einer 0 mit einem Schrägstrich; dies ist nützlich, wenn eine eindeutige Unterscheidung zwischen O und 0 erforderlich ist. Es entspricht den OpenType-Werten `zero`.

- _`<numeric-figure-values>`_
  - : Diese Werte steuern die verwendeten Zahlenfiguren. Zwei Werte sind möglich:
    - `lining-nums`, das die Zahlen aktiviert, bei denen alle Zahlen auf der Grundlinie liegen. Es entspricht den OpenType-Werten `lnum`.
    - `oldstyle-nums`, das die Zahlen aktiviert, bei denen einige Zahlen, wie 3, 4, 7, 9, Nachschwünge haben. Es entspricht den OpenType-Werten `onum`.

- _`<numeric-spacing-values>`_
  - : Diese Werte steuern die Größen der verwendeten Zahlenfiguren. Zwei Werte sind möglich:
    - `proportional-nums`, das die Zahlen aktiviert, bei denen die Zahlen nicht alle gleich groß sind. Es entspricht den OpenType-Werten `pnum`.
    - `tabular-nums`, das die Zahlen aktiviert, bei denen die Zahlen alle gleich groß sind, sodass sie leicht, wie in Tabellen, ausgerichtet werden können. Es entspricht den OpenType-Werten `tnum`.

- _`<numeric-fraction-values>`_
  - : Diese Werte steuern die Glyphen, die zur Darstellung von Brüchen verwendet werden. Zwei Werte sind möglich:
    - `diagonal-fractions`, das die Zahlen aktiviert, bei denen Zähler und Nenner verkleinert und durch einen Schrägstrich getrennt werden. Es entspricht den OpenType-Werten `frac`.
    - `stacked-fractions`, das die Zahlen aktiviert, bei denen Zähler und Nenner verkleinert, gestapelt und durch eine horizontale Linie getrennt werden. Es entspricht den OpenType-Werten `afrc`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Ordnungszahlen

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-position")}}
