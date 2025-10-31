---
title: text-underline-position
slug: Web/CSS/Reference/Properties/text-underline-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-underline-position`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Position der Unterstreichung, die mit dem `underline`-Wert der {{cssxref("text-decoration")}} Eigenschaft festgelegt wird.

{{InteractiveExample("CSS Demo: text-underline-position")}}

```css interactive-example-choice
text-underline-position: auto;
```

```css interactive-example-choice
text-underline-position: under;
```

```html interactive-example
<section id="default-example">
  <p>
    <span class="transition-all" id="example-element"
      >C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></span
    >
    is the chemical formula for caffeine.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-decoration-line: underline;
}
```

## Syntax

```css
/* Single keyword */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* Multiple keywords */
text-underline-position: under left;
text-underline-position: right under;

/* Global values */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: revert;
text-underline-position: revert-layer;
text-underline-position: unset;
```

### Werte

- `auto`
  - : Der {{Glossary("user_agent", "User Agent")}} verwendet seinen eigenen Algorithmus, um die Linie auf oder unter der {{Glossary("/Baseline/Typography", "alphabetischen Grundlinie")}} zu platzieren.
- `from-font`
  - : Wenn die Schriftart-Datei Informationen über eine bevorzugte Position enthält, wird dieser Wert verwendet. Wenn die Schriftart-Datei diese Informationen nicht enthält, wird so verfahren, als wäre `auto` gesetzt, wobei der Browser eine geeignete Position wählt.
- `under`
  - : Erzwingt, dass die Linie unterhalb der alphabetischen Grundlinie gesetzt wird, an einer Stelle, die keine Abwärtsextenden kreuzt. Dies ist nützlich, um die Lesbarkeit bei chemischen und mathematischen Formeln zu gewährleisten, die häufig Indizes verwenden.
- `left`
  - : In vertikalen Schreibmodi erzwingt dieses Schlüsselwort, dass die Linie auf der _linken_ Seite des Textes platziert wird. In horizontalen Schreibmodi ist es ein Synonym für `auto`.
- `right`
  - : In vertikalen Schreibmodi erzwingt dieses Schlüsselwort, dass die Linie auf der _rechten_ Seite des Textes platziert wird. In horizontalen Schreibmodi ist es ein Synonym für `auto`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches Beispiel

Wir erstellen zwei Beispielabsätze:

```html
<p class="horizontal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>

<p class="vertical">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur ac
  turpis vel laoreet. Nullam volutpat pharetra lorem, sit amet feugiat tortor
  volutpat quis. Nam eget sodales quam. Aliquam accumsan tellus ac erat posuere.
</p>
```

Unser CSS sieht so aus:

```css
p {
  font-size: 1.5rem;
  text-transform: capitalize;
  text-decoration: underline;
  text-decoration-thickness: 2px;
}

.horizontal {
  text-underline-position: under;
}

.vertical {
  writing-mode: vertical-rl;
  text-underline-position: left;
}
```

In diesem Beispiel setzen wir beide Absätze auf eine dicke Unterstreichung. Im horizontalen Text verwenden wir `text-underline-position: under;`, um die Unterstreichung unter alle Abwärtsextenden zu setzen.

Im Text mit einem vertikalen [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode) können wir dann die Werte `left` oder `right` verwenden, um die Unterstreichung links oder rechts vom Text erscheinen zu lassen, wie erforderlich.

Das Live-Beispiel sieht so aus:

{{EmbedLiveSample('A_basic_example', '100%', 600)}}

### Festlegen der text-underline-position global

Da die `text-underline-position` Eigenschaft vererbt wird und nicht durch die `text-decoration` Kurzschreibweise zurückgesetzt wird, kann es angemessen sein, deren Wert global festzulegen. Zum Beispiel könnte der `under` Wert für ein Dokument mit vielen chemischen und mathematischen Formeln angemessen sein, die häufig Indizes verwenden.

```css
:root {
  text-underline-position: under;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("text-decoration")}} Eigenschaft ist eine Kurzschreibweise zum Festlegen der meisten Eigenschaften der Textdekoration, einschließlich {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, und {{cssxref("text-decoration-style")}}. Sie setzt jedoch nicht `text-underline-position`.
