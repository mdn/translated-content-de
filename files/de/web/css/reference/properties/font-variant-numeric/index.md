---
title: font-variant-numeric
slug: Web/CSS/Reference/Properties/font-variant-numeric
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-variant-numeric`**-[CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen für Zahlen, Brüche und Ordnungszeichen.

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

Diese Eigenschaft kann eine der beiden Formen annehmen:

- entweder den Schlüsselwortwert `normal`
- oder eines oder mehrere der unten aufgelisteten Werte, die durch Leerzeichen getrennt in beliebiger Reihenfolge stehen.

### Werte

- `normal`
  - : Dieses Schlüsselwort führt zur Deaktivierung der Verwendung solcher alternativen Glyphen.

- `ordinal`
  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für die Ordnungszeichen, wie „1st“, „2nd“, „3rd“, „4th“ im Englischen oder „1a“ im Italienischen. Es entspricht den OpenType-Werten `ordn`.

- `slashed-zero`
  - : Dieses Schlüsselwort erzwingt die Verwendung einer 0 mit einem Schrägstrich; dies ist nützlich, wenn eine klare Unterscheidung zwischen O und 0 erforderlich ist. Es entspricht den OpenType-Werten `zero`.

- _`<numeric-figure-values>`_
  - : Diese Werte steuern die Figuren, die für Zahlen verwendet werden. Zwei Werte sind möglich:
    - `lining-nums` aktiviert das Set von Zahlen, bei denen alle Zahlen auf der Grundlinie liegen. Es entspricht den OpenType-Werten `lnum`.
    - `oldstyle-nums` aktiviert das Set von Zahlen, bei denen einige Zahlen, wie 3, 4, 7, 9 Unterlängen haben. Es entspricht den OpenType-Werten `onum`.

- _`<numeric-spacing-values>`_
  - : Diese Werte steuern die Größe der für Zahlen verwendeten Figuren. Zwei Werte sind möglich:
    - `proportional-nums` aktiviert das Set von Zahlen, bei denen Zahlen nicht alle gleich groß sind. Es entspricht den OpenType-Werten `pnum`.
    - `tabular-nums` aktiviert das Set von Zahlen, bei denen alle Zahlen gleich groß sind, wodurch sie leicht wie in Tabellen ausgerichtet werden können. Es entspricht den OpenType-Werten `tnum`.

- _`<numeric-fraction-values>`_
  - : Diese Werte steuern die Glyphen, die zur Darstellung von Brüchen verwendet werden. Zwei Werte sind möglich:
    - `diagonal-fractions` aktiviert das Set von Figuren, bei denen der Zähler und Nenner verkleinert und durch einen Schrägstrich getrennt werden. Es entspricht den OpenType-Werten `frac`.
    - `stacked-fractions` aktiviert das Set von Figuren, bei denen der Zähler und Nenner verkleinert, gestapelt und durch eine horizontale Linie getrennt werden. Es entspricht den OpenType-Werten `afrc`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von ordinalen numerischen Formen

Klicken Sie auf „Play“ in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

- [`font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-position`](/de/docs/Web/CSS/Reference/Properties/font-variant-position)
