---
title: Typselektoren
slug: Web/CSS/Type_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der CSS **Typselektor** wählt Elemente nach ihrem Knotennamen aus. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Typselektoren können bei der Verwendung von {{CSSXref("@namespace")}} mit Namespaces versehen werden. Dies ist nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - wählt `<h1>` Elemente im Namespace _ns_
- `*|h1` - wählt alle `<h1>` Elemente
- `|h1` - wählt alle `<h1>` Elemente ohne einen deklarierte Namespace

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

In diesem Beispiel wird der Selektor nur `<h1>` Elemente im Beispiel-Namespace ansprechen.

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
