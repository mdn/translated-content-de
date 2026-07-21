---
title: "`text-decoration-line` CSS property"
short-title: text-decoration-line
slug: Web/CSS/Reference/Properties/text-decoration-line
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`text-decoration-line`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Art der Dekoration fest, die auf Text in einem Element angewendet wird, wie zum Beispiel ein Unterstrich oder eine Überlinie.

{{InteractiveExample("CSS Demo: text-decoration-line")}}

```css interactive-example-choice
text-decoration-line: none;
```

```css interactive-example-choice
text-decoration-line: underline;
```

```css interactive-example-choice
text-decoration-line: overline;
```

```css interactive-example-choice
text-decoration-line: line-through;
```

```css interactive-example-choice
text-decoration-line: grammar-error;
```

```css interactive-example-choice
text-decoration-line: spelling-error;
```

```css interactive-example-choice
text-decoration-line: underline overline;
```

```css interactive-example-choice
text-decoration-line: underline line-through;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

Beim gleichzeitigen Setzen mehrerer Linien-Dekorationseigenschaften kann es praktischer sein, die verkürzte Eigenschaft {{cssxref("text-decoration")}} zu verwenden.

## Syntax

```css
/* Single keyword */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;
text-decoration-line: spelling-error;
text-decoration-line: grammar-error;

/* Multiple keywords */
text-decoration-line: underline overline; /* Two decoration lines */
text-decoration-line: overline underline line-through; /* Multiple decoration lines */

/* Global values */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

### Werte

Diese Eigenschaft wird entweder als `none` oder als durch Leerzeichen getrennte Liste von Schlüsselwortwerten aus der untenstehenden Liste angegeben:

- `none`
  - : Es wird keine Textdekoration erzeugt.
- `underline`
  - : Jede Textzeile hat eine dekorative Linie unterhalb.
- `overline`
  - : Jede Textzeile hat eine dekorative Linie oberhalb.
- `line-through`
  - : Jede Textzeile hat eine dekorative Linie, die durch ihre Mitte verläuft.
- `blink`
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Übereinstimmende Nutzeragenten lassen den Text möglicherweise nicht blinken. Dieser Wert ist **veraltet** zugunsten von [CSS-Animationen](/de/docs/Web/CSS/Reference/Properties/animation).
- `spelling-error`
  - : Jede Textzeile verwendet die Methode des Nutzeragenten, um Rechtschreibfehler hervorzuheben, was in den meisten Browsern eine gepunktete rote Linie ist.
- `grammar-error`
  - : Jede Textzeile verwendet die Methode des Nutzeragenten, um Grammatikfehler hervorzuheben, was in den meisten Browsern eine gepunktete grüne Linie ist.

> [!NOTE]
> Bei der Verwendung der Werte `spelling-error` und `grammar-error` ignoriert der Browser die anderen Eigenschaften in der {{cssxref("text-decoration")}}-Verkürzung (wie {{cssxref("text-underline-position")}}, `color` oder `stroke`).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```html
<p class="wavy">Here's some text with wavy red underline!</p>
<p class="both">This text has lines both above and below it.</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample('basic_example',,90)}}

### Fehlerbeispiel

In diesem Beispiel enthält der erste Absatz einen Rechtschreibfehler und nutzt das Styling des Browsers für Rechtschreibfehler beim falsch geschriebenen Wort. Der zweite Absatz verwendet das Styling des Browsers für Grammatikfehler. Es gibt keine Stylingänderung in Browsern, die diese `text-decoration-line`-Werte nicht unterstützen.

<!-- cSpell:ignore speling -->

```html
<p>This text contains a <span class="spelling">speling</span> mistake.</p>
<p class="grammar">This text contain grammatical errors.</p>
```

```css
.spelling {
  text-decoration-line: spelling-error;
}

.grammar {
  text-decoration-line: grammar-error;
}
```

{{EmbedLiveSample('errors_example',,90)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Beim gleichzeitigen Setzen mehrerer Linien-Dekorationseigenschaften kann es praktischer sein, die verkürzte Eigenschaft {{cssxref("text-decoration")}} zu verwenden, die auch folgende umfasst:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
