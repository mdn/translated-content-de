---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`text-decoration-line`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Art der Dekoration fest, die auf den Text in einem Element angewendet wird, wie z.B. eine Unter- oder Überstreichung.

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

Wenn mehrere Zeilen-Dekorationseigenschaften gleichzeitig festgelegt werden, kann es bequemer sein, die Kurzformeigenschaft {{cssxref("text-decoration")}} zu verwenden.

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

Die `text-decoration-line` Eigenschaft wird als `none` angegeben, oder als **einer oder mehrere** durch Leerzeichen getrennte Werte aus der folgenden Liste.

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
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Konforme Benutzeragenten lassen den Text möglicherweise nicht blinken. Dieser Wert ist **veraltet** zugunsten von [CSS-Animationen](/de/docs/Web/CSS/animation).

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

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Wenn mehrere Zeilen-Dekorationseigenschaften gleichzeitig festgelegt werden, kann es bequemer sein, die Kurzformeigenschaft {{cssxref("text-decoration")}} zu verwenden, die auch Folgendes umfasst:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
