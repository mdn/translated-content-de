---
title: Typselektoren
slug: Web/CSS/Type_selectors
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Der CSS-**Typselektor** erfasst Elemente anhand des Knotennamens. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Typselektoren können bei Verwendung von {{CSSXref("@namespace")}} mit Namespaces versehen werden. Dies ist nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

- `ns|h1` - erfasst `<h1>`-Elemente im Namespace _ns_
- `*|h1` - erfasst alle `<h1>`-Elemente
- `|h1` - erfasst alle `<h1>`-Elemente ohne deklarierten Namespace

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

In diesem Beispiel wird der Selektor nur `<h1>`-Elemente im Beispiel-Namespace erfassen.

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
- [CSS lernen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
