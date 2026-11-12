---
title: Typselektoren
slug: Web/CSS/Reference/Selectors/Type_selectors
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Der CSS-**Typselektor** wählt Elemente anhand ihres Knotennamens aus. Mit anderen Worten: Er wählt alle Elemente eines bestimmten Typs innerhalb eines Dokuments aus.

```css
/* All <a> elements. */
a {
  color: red;
}
```

Typselektoren können bei Verwendung von {{CSSXref("@namespace")}} mit einem Namensraum versehen werden. Das ist nützlich bei Dokumenten mit mehreren Namensräumen, etwa HTML mit eingebettetem SVG oder MathML, oder bei XML, das mehrere Vokabulare kombiniert.

- `ns|h1` – wählt `<h1>`-Elemente im Namensraum _ns_ aus
- `*|h1` – wählt alle `<h1>`-Elemente aus
- `|h1` – wählt alle `<h1>`-Elemente ohne deklarierten Namensraum aus

## Syntax

```css
element { style properties }
```

## Beispiele

### HTML

```html
<span>Here's a span with some text.</span>
<p>Here's a p with some text.</p>
<span>Here's a span with more text.</span>
```

### CSS

```css
span {
  background-color: skyblue;
}
```

### Ergebnis

{{EmbedLiveSample('Examples', '100%', 150)}}

### Namensräume

In diesem Beispiel wählt der Selektor nur `<h1>`-Elemente im Beispielnamensraum aus.

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
