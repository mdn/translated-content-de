---
title: Universelle Selektoren
slug: Web/CSS/Universal_selectors
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Der CSS **universelle Selektor** (`*`) passt zu Elementen jeglichen Typs.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der universelle Selektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Type_selectors) und kann daher mit {{CSSXref("@namespace")}} namespaced werden. Dies ist nützlich, wenn man mit Dokumenten umgeht, die mehrere Namespaces enthalten, wie HTML mit inline SVG oder MathML oder XML, das mehrere Vokabulare mischt.

- `ns|*` - entspricht allen Elementen im Namespace _ns_
- `*|*` - entspricht allen Elementen
- `|*` - entspricht allen Elementen ohne einen deklarierten Namespace

## Syntax

```css
* { style properties }
```

Das Sternchen ist bei einfachen Selektoren optional. Zum Beispiel sind `*.warning` und `.warning` äquivalent.

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

### Namespaces

In diesem Beispiel wird der Selektor nur Elemente im Beispiel-Namespace ansprechen.

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
