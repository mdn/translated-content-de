---
title: "`text-decoration-style` CSS property"
short-title: text-decoration-style
slug: Web/CSS/Reference/Properties/text-decoration-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-decoration-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Stil der Linien fest, die durch {{ cssxref("text-decoration-line") }} bestimmt werden. Der Stil gilt für alle Linien, die mit `text-decoration-line` gesetzt werden.

{{InteractiveExample("CSS Demo: text-decoration-style")}}

```css interactive-example-choice
text-decoration-style: solid;
```

```css interactive-example-choice
text-decoration-style: double;
```

```css interactive-example-choice
text-decoration-style: dotted;
```

```css interactive-example-choice
text-decoration-style: dashed;
```

```css interactive-example-choice
text-decoration-style: wavy;
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

#example-element {
  text-decoration-line: underline;
}
```

Wenn die angegebene Dekoration eine spezifische semantische Bedeutung hat, wie eine durchgestrichene Linie, die bedeutet, dass ein Text gelöscht wurde, werden Autoren ermutigt, diese Bedeutung mit einem HTML-Tag zu kennzeichnen, wie {{ HTMLElement("del") }} oder {{ HTMLElement("s") }}. Da Browser in einigen Fällen das Styling deaktivieren können, wird die semantische Bedeutung in einer solchen Situation nicht verloren gehen.

Bei der gleichzeitigen Festlegung mehrerer Liniendekorationseigenschaften kann es praktischer sein, die Abkürzungseigenschaft {{cssxref("text-decoration")}} zu verwenden.

## Syntax

```css
/* Keyword values */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Global values */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: revert-layer;
text-decoration-style: unset;
```

### Werte

- solid
  - : Zeichnet eine einzelne Linie.
- double
  - : Zeichnet eine doppelte Linie.
- dotted
  - : Zeichnet eine gepunktete Linie.
- dashed
  - : Zeichnet eine gestrichelte Linie.
- wavy
  - : Zeichnet eine gewellte Linie.
- \-moz-none
  - : Zeichnet keine Linie. Verwenden Sie stattdessen {{cssxref("text-decoration-line", "text-decoration-line: none")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer gewellten Unterstreichung

Das Folgende erstellt eine rote gewellte Unterstreichung:

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### HTML

```html
<p class="wavy">This text has a wavy red line beneath it.</p>
```

#### Ergebnisse

{{EmbedLiveSample('Setting_a_wavy_underline')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Bei der gleichzeitigen Festlegung mehrerer Liniendekorationseigenschaften kann es praktischer sein, die Abkürzungseigenschaft {{cssxref("text-decoration")}} zu verwenden.
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
