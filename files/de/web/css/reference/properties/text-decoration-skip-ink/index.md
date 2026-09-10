---
title: "`text-decoration-skip-ink` CSS property"
short-title: text-decoration-skip-ink
slug: Web/CSS/Reference/Properties/text-decoration-skip-ink
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-skip-ink`** legt fest, wie Über- und Unterstreichungen gezeichnet werden, wenn sie über Ober- und Unterlängen von Glyphen verlaufen.

`text-decoration-skip-ink` ist nicht Teil der Kurzschreibweise {{cssxref("text-decoration")}}.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Unter- und Überstreichungen werden über die gesamte Länge des Textinhalts gezeichnet, einschließlich der Teile, die Ober- und Unterlängen von Glyphen kreuzen.
- `auto`
  - : Der Standardwert — der Browser _kann_ Unter- und Überstreichungen unterbrechen, damit sie eine Glyphe nicht berühren oder ihr zu nahe kommen. Das heißt, sie werden dort unterbrochen, wo sie andernfalls eine Glyphe kreuzen würden.
- `all`
  - : Der Browser _muss_ Unter- und Überstreichungen unterbrechen, damit sie eine Glyphe nicht berühren oder ihr zu nahe kommen. Dies kann bei bestimmten chinesischen, japanischen oder koreanischen (CJK-)Schriftarten hilfreich sein, bei denen das Verhalten von `auto` möglicherweise keine Unterbrechungen erzeugt.

    ![Ein Beispiel für „text-decoration-skip-ink“.](decoration-skip-ink.png)

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
