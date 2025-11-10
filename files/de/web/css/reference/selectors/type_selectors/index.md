---
title: Typ-Selektoren
slug: Web/CSS/Reference/Selectors/Type_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der CSS **Typ-Selektor** wählt Elemente anhand des Knotennamens aus. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Typ-Selektoren können mit Namespaces versehen werden, wenn {{CSSXref("@namespace")}} verwendet wird. Dies ist nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces wie HTML mit eingebettetem SVG oder MathML enthalten, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - wählt `<h1>`-Elemente im Namespace _ns_
- `*|h1` - wählt alle `<h1>`-Elemente
- `|h1` - wählt alle `<h1>`-Elemente ohne einen deklarierten Namespace

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

### Namespaces

In diesem Beispiel wird der Selektor nur `<h1>`-Elemente im Beispiel-Namespace auswählen.

```css
@namespace example url("http://www.example.com/");
example|h1 {
  color: blue;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [CSS lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
