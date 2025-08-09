---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`text-decoration-thickness`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichdicke der Dekorationslinie fest, die auf Text in einem Element angewendet wird, wie z.B. ein Durchstreichen, Unterstreichen oder Überstreichen.

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
  text-decoration-color: red;
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
  - : Der Browser wählt eine geeignete Breite für die Textdekorationslinie aus.
- `from-font`
  - : Falls die Schriftartdatei Informationen über eine bevorzugte Dicke enthält, wird dieser Wert verwendet. Falls die Schriftartdatei diese Informationen nicht enthält, wird so verfahren, als wäre `auto` gesetzt, wobei der Browser eine geeignete Dicke auswählt.
- `<length>`
  - : Gibt die Dicke der Textdekorationslinie als {{cssxref('length')}} an und überschreibt den Vorschlag der Schriftartdatei oder die Standardeinstellung des Browsers.
- `<percentage>`
  - : Gibt die Dicke der Textdekorationslinie als {{cssxref('percentage')}} von **1em** in der aktuellen Schriftart an. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen der Schriftart. Der Browser muss ein Minimum von 1 Gerätepixel verwenden. Für eine bestimmte Anwendung dieser Eigenschaft ist die Dicke über das gesamte angewandte Feld konstant, selbst wenn es Kind-Elemente mit einer anderen Schriftgröße gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Variierende Dicke

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
> Die Eigenschaft wurde früher `text-decoration-width` genannt, aber 2019 in `text-decoration-thickness` umbenannt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
