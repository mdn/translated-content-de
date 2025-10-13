---
title: text-decoration-skip-ink
slug: Web/CSS/text-decoration-skip-ink
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Die **`text-decoration-skip-ink`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Überstriche und Unterstriche gezeichnet werden, wenn sie über die Oberlängen und Unterlängen von Glyphen verlaufen.

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
    1.9em "Georgia",
    serif;
  text-decoration: underline;
}
```

`text-decoration-skip-ink` ist kein Teil der {{cssxref("text-decoration")}} Kurzschreibweise.

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
  - : Unterstriche und Überstriche werden über die gesamte Länge des Textinhalts gezeichnet, einschließlich der Teile, die über die Unterlängen und Oberlängen von Glyphen verlaufen.
- `auto`
  - : Der Standard — der Browser _kann_ Unterstriche und Überstriche unterbrechen, sodass sie keine Glyphe berühren oder sich ihr nähern. Das bedeutet, sie werden unterbrochen, wo sie ansonsten eine Glyphe kreuzen würden.
- `all`
  - : Der Browser _muss_ Unterstriche und Überstriche unterbrechen, sodass sie keine Glyphe berühren oder sich ihr nähern. Dies kann bei bestimmten chinesischen, japanischen oder koreanischen (CJK) Schriftarten hilfreich sein, bei denen das `auto`-Verhalten möglicherweise keine Unterbrechungen erzeugt.

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
