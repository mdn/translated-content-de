---
title: Typselektoren
slug: Web/CSS/Type_selectors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der CSS **Typselektor** wählt Elemente basierend auf dem Knotennamen aus. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Typselektoren können mit einem Namensraum versehen werden, wenn {{CSSXref("@namespace")}} verwendet wird. Dies ist nützlich bei der Verarbeitung von Dokumenten, die mehrere Namensräume enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - wählt `<h1>`-Elemente im Namensraum _ns_
- `*|h1` - wählt alle `<h1>`-Elemente
- `|h1` - wählt alle `<h1>`-Elemente ohne einen deklarierten Namensraum

## Syntax

```css
element { style properties }
```

## Beispiele

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Here's a span with some text.</span>
<p>Here's a p with some text.</p>
<span>Here's a span with more text.</span>
```

### Ergebnis

{{EmbedLiveSample('Examples', '100%', 150)}}

### Namensräume

In diesem Beispiel wird der Selektor nur `<h1>`-Elemente im Beispielnamensraum auswählen.

```css
@namespace example url(http://www.example.com/);
example|h1 {
  color: blue;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [CSS lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
