---
title: Type Selectors
slug: Web/CSS/Type_selectors
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Der CSS-**Typ-Selektor** wählt Elemente basierend auf dem Knotennamen aus. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Typ-Selektoren können mit Namensräumen versehen werden, wenn {{CSSXref("@namespace")}} verwendet wird. Das ist nützlich, wenn Dokumente bearbeitet werden, die mehrere Namensräume enthalten, wie HTML mit eingebetteten SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - passt auf `<h1>`-Elemente im Namensraum _ns_
- `*|h1` - passt auf alle `<h1>`-Elemente
- `|h1` - passt auf alle `<h1>`-Elemente ohne einen deklarierten Namensraum

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

In diesem Beispiel wird der Selektor nur auf `<h1>`-Elemente im Beispiel-Namensraum passen.

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

- [CSS Selectors](/de/docs/Web/CSS/CSS_selectors)
- [CSS lernen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
