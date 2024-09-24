---
title: Typselektoren
slug: Web/CSS/Type_selectors
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Der CSS-**Typselektor** wählt Elemente anhand des Knotennamens aus. Mit anderen Worten, er wählt alle Elemente des angegebenen Typs innerhalb eines Dokuments aus.

```css
/* Alle <a>-Elemente. */
a {
  color: red;
}
```

Typselektoren können namespaced werden, wenn {{CSSXref("@namespace")}} verwendet wird. Dies ist nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namespaces wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt, enthalten.

- `ns|h1` - entspricht `<h1>`-Elementen im Namespace _ns_
- `*|h1` - entspricht allen `<h1>`-Elementen
- `|h1` - entspricht allen `<h1>`-Elementen ohne deklarierte Namespace

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
<span>Hier ist ein Span mit etwas Text.</span>
<p>Hier ist ein p mit etwas Text.</p>
<span>Hier ist ein Span mit mehr Text.</span>
```

### Ergebnis

{{EmbedLiveSample('Examples', '100%', 150)}}

### Namespaces

In diesem Beispiel wird der Selektor nur `<h1>`-Elemente im Beispiel-Namespace auswählen.

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
- [Lernen Sie CSS: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
