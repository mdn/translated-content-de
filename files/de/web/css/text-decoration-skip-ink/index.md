---
title: text-decoration-skip-ink
slug: Web/CSS/text-decoration-skip-ink
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`text-decoration-skip-ink`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, wie Überstriche und Unterstreichungen gezeichnet werden, wenn sie über Glyphen-Ascender und -Descender verlaufen.

{{InteractiveExample("CSS Demo: text-decoration-skip-ink")}}

```css interactive-example-choice
text-decoration-skip-ink: auto;
```

```css interactive-example-choice
text-decoration-skip-ink: none;
```

```html interactive-example
<section id="default-example">
  <p>
    <span class="transition-all" id="example-element">parapsychologists</span>
  </p>
</section>
```

```css interactive-example
p {
  font:
    1.9em Georgia,
    serif;
  text-decoration: underline;
}
```

`text-decoration-skip-ink` ist nicht Teil der {{cssxref("text-decoration")}} Kurzschreibweise.

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
  - : Unterstreichungen und Überstriche werden über die gesamte Länge des Textinhalts gezeichnet, einschließlich der Teile, die über Glyphen-Descender und -Ascender verlaufen.
- `auto`
  - : Der Standard - der Browser _kann_ Unterstreichungen und Überstriche unterbrechen, sodass sie keine Glyphe berühren oder sich ihr stark nähern. Das heißt, sie werden unterbrochen, dort wo sie andernfalls über eine Glyphe verlaufen würden.
- `all`

  - : Der Browser _muss_ Unterstreichungen und Überstriche unterbrechen, sodass sie keine Glyphe berühren oder sich ihr stark nähern. Dies kann bei bestimmten chinesischen, japanischen oder koreanischen (CJK) Schriftarten hilfreich sein, bei denen das `auto` Verhalten möglicherweise keine Unterbrechungen erzeugt.

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
