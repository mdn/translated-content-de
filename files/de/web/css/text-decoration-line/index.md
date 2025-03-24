---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
l10n:
  sourceCommit: 9fc1511293944aacab750f84dfe1a6753bd8a73f
---

{{CSSRef}}

Die **`text-decoration-line`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Art der Dekoration fest, die für Text in einem Element verwendet wird, wie z.B. ein Unterstrich oder Überstrich.

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

Wenn mehrere Line-Dekorations-Eigenschaften gleichzeitig gesetzt werden, kann es praktischer sein, die Abkürzungseigenschaft {{cssxref("text-decoration")}} zu verwenden.

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

Die `text-decoration-line` Eigenschaft wird als `none` oder **einem oder mehreren** Leerzeichen-getrennten Werten aus der unten stehenden Liste spezifiziert.

### Werte

- `none`
  - : Erzeugt keine Textdekoration.
- `underline`
  - : Jede Textzeile hat eine dekorative Linie darunter.
- `overline`
  - : Jede Textzeile hat eine dekorative Linie darüber.
- `line-through`
  - : Jede Textzeile hat eine dekorative Linie, die durch die Mitte verläuft.
- `blink`
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Konforme Benutzeragenten dürfen den Text nicht blinken lassen. Dieser Wert ist zugunsten von [CSS-Animationen](/de/docs/Web/CSS/animation) **veraltet**.
- `spelling-error`
  - : Jede Textzeile verwendet die Methode der Benutzeragenten, um Rechtschreibfehler hervorzuheben, was in den meisten Browsern ein gepunkteter roter Strich ist.
- `grammar-error`
  - : Jede Textzeile verwendet die Methode der Benutzeragenten, um Grammatikfehler hervorzuheben, was in den meisten Browsern ein gepunkteter grüner Strich ist.

> [!NOTE]
> Bei der Verwendung von `spelling-error` und `grammar-error` Werten ignoriert der Browser die anderen Eigenschaften in der {{cssxref("text-decoration")}} Abkürzung (wie {{cssxref("text-underline-position")}}, `color` oder `stroke`).

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

In diesem Beispiel enthält der erste Abschnitt einen Rechtschreibfehler und verwendet die Browser-Stylings für Rechtschreibfehler auf dem fehlerhaften Wort. Der zweite Abschnitt verwendet die Browser-Stylings für Grammatikfehler. Es gibt keine Stiländerungen in Browsern, die diese `text-decoration-line` Werte nicht unterstützen.

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

- Wenn mehrere Line-Dekorations-Eigenschaften gleichzeitig gesetzt werden, kann es praktischer sein, die Abkürzungseigenschaft {{cssxref("text-decoration")}} zu verwenden, die auch Folgendes umfasst:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
