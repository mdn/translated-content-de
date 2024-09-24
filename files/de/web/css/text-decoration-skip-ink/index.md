---
title: text-decoration-skip-ink
slug: Web/CSS/text-decoration-skip-ink
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`text-decoration-skip-ink`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Über- und Unterstriche gezeichnet werden, wenn sie über die Ober- und Unterlängen von Glyphen verlaufen.

{{EmbedInteractiveExample("pages/css/text-decoration-skip-ink.html")}}

`text-decoration-skip-ink` ist kein Teil des {{cssxref("text-decoration")}} Kurzschreibweise.

## Syntax

```css
/* Einzelnes Schlüsselwort */
text-decoration-skip-ink: none;
text-decoration-skip-ink: auto;
text-decoration-skip-ink: all;

/* Globale Schlüsselwörter */
text-decoration-skip-ink: inherit;
text-decoration-skip-ink: initial;
text-decoration-skip-ink: revert;
text-decoration-skip-ink: revert-layer;
text-decoration-skip-ink: unset;
```

### Werte

- `none`
  - : Unter- und Überstriche werden über die gesamte Länge des Textinhalts gezogen, einschließlich der Teile, die über Glyphen-Ober- und Unterlängen verlaufen.
- `auto`
  - : Der Standard — der Browser _kann_ Unter- und Überstriche unterbrechen, sodass sie eine Glyphe nicht berühren oder sich ihr nicht zu sehr nähern. Das bedeutet, dass sie unterbrochen werden, wo sie andernfalls über eine Glyphe verlaufen würden.
- `all`

  - : Der Browser _muss_ Unter- und Überstriche unterbrechen, sodass sie eine Glyphe nicht berühren oder sich ihr nicht zu sehr nähern. Dies kann hilfreich bei bestimmten chinesischen, japanischen oder koreanischen (CJK) Schriften sein, bei denen das `auto` Verhalten möglicherweise keine Unterbrechungen schafft.

    ![Ein Beispiel für "text-decoration-skip-ink".](decoration-skip-ink.png)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p>Sie sollten sich auf die Suche nach einer Tasse Kaffee machen.</p>
<p class="no-skip-ink">Oder ziehen Sie vielleicht eher Tee vor?</p>
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
