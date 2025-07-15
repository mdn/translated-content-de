---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-decoration-thickness`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichstärke der Dekorationslinie fest, die auf Text in einem Element angewendet wird, wie z.B. ein Durchstrich, Unterstrich oder Überstrich.

{{InteractiveExample("CSS Demo: text-decoration-thickness")}}

```css interactive-example-choice
text-decoration-line: underline;
text-decoration-thickness: 3px;
```

```css interactive-example-choice
text-decoration-line: line-through;
text-decoration-thickness: 0.4rem;
```

```css interactive-example-choice
text-decoration-line: underline overline;
text-decoration-thickness: from-font;
font-size: 2rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Confusion kissed me on the cheek, and left a taste so bittersweet
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-color: #ff0000;
}
```

## Syntax

```css
/* Single keyword */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* length */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* percentage */
text-decoration-thickness: 10%;

/* Global values */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: revert;
text-decoration-thickness: revert-layer;
text-decoration-thickness: unset;
```

### Werte

- `auto`
  - : Der Browser wählt eine passende Breite für die Textdekoration-Linie.
- `from-font`
  - : Wenn die Schriftdatei Informationen über eine bevorzugte Stärke enthält, wird dieser Wert verwendet. Wenn die Schriftdatei diese Informationen nicht enthält, wird verfahren, als ob `auto` gesetzt wäre, wobei der Browser eine geeignete Stärke wählt.
- `<length>`
  - : Gibt die Stärke der Textdekoration-Linie als {{cssxref('length')}} an und überschreibt die Vorschläge der Schriftdatei oder den Standardwert des Browsers.
- `<percentage>`
  - : Gibt die Stärke der Textdekoration-Linie als {{cssxref('percentage')}} von **1em** in der aktuellen Schriftart an. Ein Prozentsatz wird als relativer Wert vererbt und passt sich daher bei Änderungen der Schriftgröße an. Der Browser muss mindestens 1 Gerätepixel verwenden. Bei einer Anwendung dieser Eigenschaft ist die Stärke über das gesamte Element konstant, auch wenn es Kindelemente mit einer anderen Schriftgröße gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Variierende Stärke

#### HTML

```html
<p class="thin">Here's some text with a 1px red underline.</p>
<p class="thick">This one has a 5px red underline.</p>
<p class="shorthand">This uses the equivalent shorthand.</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

#### Ergebnisse

{{EmbedLiveSample('Varying_thickness')}}

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Die Eigenschaft wurde früher `text-decoration-width` genannt, aber 2019 in `text-decoration-thickness` geändert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
