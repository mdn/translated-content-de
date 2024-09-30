---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`text-decoration-line`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Art der Dekoration fest, die auf den Text in einem Element angewendet wird, z.B. eine Unter- oder Überstreichung.

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

Wenn Sie mehrere Textdekorationseigenschaften gleichzeitig festlegen, kann es bequemer sein, die Kurzschreibweiseigenschaft {{cssxref("text-decoration")}} zu verwenden.

## Syntax

```css
/* Single keyword */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

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

Die Eigenschaft `text-decoration-line` wird als `none` oder als **eine oder mehrere** durch Leerzeichen getrennte Werte aus der unten stehenden Liste angegeben.

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
  - : Der Text blinkt (wechselnd zwischen sichtbar und unsichtbar). Konforme Benutzeragenten können den Text möglicherweise nicht blinken lassen. Dieser Wert ist **veraltet** zugunsten von [CSS-Animationen](/de/docs/Web/CSS/animation).

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

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Wenn Sie mehrere Textdekorationseigenschaften gleichzeitig festlegen, kann es bequemer sein, die Kurzschreibweiseigenschaft {{cssxref("text-decoration")}} zu verwenden, die außerdem umfasst:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
