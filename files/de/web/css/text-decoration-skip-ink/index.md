---
title: text-decoration-skip-ink
slug: Web/CSS/text-decoration-skip-ink
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`text-decoration-skip-ink`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie Über- und Unterstreichungen gezeichnet werden, wenn sie über die Auf- und Abstriche von Glyphen verlaufen.

{{EmbedInteractiveExample("pages/css/text-decoration-skip-ink.html")}}

`text-decoration-skip-ink` ist kein Bestandteil der {{cssxref("text-decoration")}} Kurznotation.

## Syntax

```css
/* Single keyword */
text-decoration-skip-ink: none;
text-decoration-skip-ink: auto;
text-decoration-skip-ink: all;

/* Global keywords */
text-decoration-skip-ink: inherit;
text-decoration-skip-ink: initial;
text-decoration-skip-ink: revert;
text-decoration-skip-ink: revert-layer;
text-decoration-skip-ink: unset;
```

### Werte

- `none`
  - : Unter- und Überstriche werden über die gesamte Länge des Textinhalts gezeichnet, einschließlich der Teile, die über die Auf- und Abstriche von Glyphen verlaufen.
- `auto`
  - : Der Standardwert — der Browser _kann_ Unter- und Überstriche unterbrechen, damit sie eine Glyphe nicht berühren oder sich ihr eng nähern. Das bedeutet, dass sie dort unterbrochen werden, wo sie sonst über eine Glyphe verlaufen würden.
- `all`

  - : Der Browser _muss_ Unter- und Überstriche unterbrechen, damit sie eine Glyphe nicht berühren oder sich ihr eng nähern. Dies kann bei bestimmten chinesischen, japanischen oder koreanischen (CJK) Schriften hilfreich sein, bei denen das `auto` Verhalten möglicherweise keine Unterbrechungen erzeugt.

    ![Ein Beispiel für "text-decoration-skip-ink".](decoration-skip-ink.png)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p>You should go on a quest for a cup of coffee.</p>
<p class="no-skip-ink">Or maybe you'd prefer some tea?</p>
<p>この文は、 text-decoration-skip-ink: auto の使用例を示しています。</p>
<p class="skip-ink-all">
  この文は、 text-decoration-skip-ink: all の使用例を示しています。
</p>
```

### CSS

```css
p {
  font-size: 1.5em;
  text-decoration: underline blue;
  text-decoration-skip-ink: auto; /* this is the default anyway */
}

.no-skip-ink {
  text-decoration-skip-ink: none;
}

.skip-ink-all {
  text-decoration-skip-ink: all;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('text-decoration')}}
- {{cssxref('text-decoration-skip')}}
