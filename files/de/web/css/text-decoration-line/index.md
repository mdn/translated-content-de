---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`text-decoration-line`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Art der Verzierung fest, die auf Text in einem Element angewendet wird, wie z.B. Unterstreichung oder Überstrich.

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

Wenn mehrere Linienverzierungs-Eigenschaften gleichzeitig festgelegt werden sollen, kann es praktischer sein, die Abkürzungs-Eigenschaft {{cssxref("text-decoration")}} zu verwenden.

## Syntax

```css
/* Ein einzelnes Schlüsselwort */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* Mehrere Schlüsselwörter */
text-decoration-line: underline overline; /* Zwei Zierlinien */
text-decoration-line: overline underline line-through; /* Mehrere Zierlinien */

/* Globale Werte */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

Die `text-decoration-line` Eigenschaft wird als `none` oder **ein oder mehrere** durch Leerzeichen getrennte Werte aus der folgenden Liste angegeben.

### Werte

- `none`
  - : Erzeugt keine Textverzierung.
- `underline`
  - : Jede Textzeile hat eine dekorative Linie darunter.
- `overline`
  - : Jede Textzeile hat eine dekorative Linie darüber.
- `line-through`
  - : Jede Textzeile hat eine dekorative Linie quer durch die Mitte.
- `blink`
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Konforme Benutzeragenten können den Text möglicherweise nicht blinken lassen. Dieser Wert ist **veraltet** zugunsten von [CSS-Animationen](/de/docs/Web/CSS/animation).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```html
<p class="wavy">Hier ist ein Text mit welliger roter Unterstreichung!</p>
<p class="both">Dieser Text hat Linien sowohl darüber als auch darunter.</p>
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

- Wenn mehrere Linienverzierungs-Eigenschaften gleichzeitig festgelegt werden sollen, kann es praktischer sein, die Abkürzungs-Eigenschaft {{cssxref("text-decoration")}} zu verwenden, die auch Folgendes umfasst:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
