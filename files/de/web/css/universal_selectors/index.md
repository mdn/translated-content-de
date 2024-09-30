---
title: Universelle Selektoren
slug: Web/CSS/Universal_selectors
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Der CSS-**universelle Selektor** (`*`) wählt Elemente jeglichen Typs aus.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der universelle Selektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Type_selectors) und kann daher mit einem Namensraum versehen werden, wenn {{CSSXref("@namespace")}} verwendet wird. Dies ist nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namensräume enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|*` - wählt alle Elemente im Namensraum _ns_ aus
- `*|*` - wählt alle Elemente aus
- `|*` - wählt alle Elemente ohne einen deklarierten Namensraum aus

## Syntax

```css
* { style properties }
```

Das Sternchen ist bei einfachen Selektoren optional. Zum Beispiel sind `*.warning` und `.warning` gleichwertig.

## Beispiele

### CSS

```css
* [lang^="en"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

/* automatically clear the next sibling after a floating element */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

### Namensräume

In diesem Beispiel wird der Selektor nur Elemente im Beispiel-Namensraum auswählen.

```css
@namespace example url(http://www.example.com/);
example|* {
  color: blue;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS lernen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)
