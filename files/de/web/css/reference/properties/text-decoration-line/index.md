---
title: "`text-decoration-line` CSS property"
short-title: text-decoration-line
slug: Web/CSS/Reference/Properties/text-decoration-line
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-line`** legt die Art der Dekoration fest, die auf Text in einem Element verwendet wird, beispielsweise eine Unterstreichung oder Überstreichung.

Wenn mehrere Zeilendekorationseigenschaften gleichzeitig festgelegt werden, kann es praktischer sein, stattdessen die Kurzschreibweise {{cssxref("text-decoration")}} zu verwenden.

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

Diese Eigenschaft wird entweder als `none` oder als durch Leerzeichen getrennte Liste von Schlüsselwortwerten aus der folgenden Liste angegeben:

- `none`
  - : Erzeugt keine Textdekoration.
- `underline`
  - : Jede Textzeile hat eine dekorative Linie darunter.
- `overline`
  - : Jede Textzeile hat eine dekorative Linie darüber.
- `line-through`
  - : Jede Textzeile hat eine dekorative Linie durch ihre Mitte.
- `blink`
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Konforme User Agents müssen den Text möglicherweise nicht blinken lassen. Dieser Wert ist zugunsten von [CSS-Animationen](/de/docs/Web/CSS/Reference/Properties/animation) **veraltet**.
- `spelling-error`
  - : Jede Textzeile verwendet die Methode des User Agents zum Hervorheben von Rechtschreibfehlern, die in den meisten Browsern aus einer gepunkteten roten Linie besteht.
- `grammar-error`
  - : Jede Textzeile verwendet die Methode des User Agents zum Hervorheben von Grammatikfehlern, die in den meisten Browsern aus einer gepunkteten grünen Linie besteht.

> [!NOTE]
> Bei Verwendung der Werte `spelling-error` und `grammar-error` ignoriert der Browser die anderen Eigenschaften in der Kurzschreibweise {{cssxref("text-decoration")}} (wie {{cssxref("text-underline-position")}}, `color` oder `stroke`).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

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

### Beispiel für Fehler

In diesem Beispiel enthält der erste Absatz einen Rechtschreibfehler und verwendet die Browser-Stilgestaltung für Rechtschreibfehler beim falsch geschriebenen Wort. Der zweite Absatz verwendet die Browser-Stilgestaltung für Grammatikfehler. In Browsern, die diese `text-decoration-line`-Werte nicht unterstützen, gibt es keine Änderung der Stilgestaltung.

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

- Wenn mehrere Zeilendekorationseigenschaften gleichzeitig festgelegt werden, kann es praktischer sein, stattdessen die Kurzschreibweise {{cssxref("text-decoration")}} zu verwenden, die außerdem Folgendes umfasst:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
