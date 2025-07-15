---
title: Universalselektoren
slug: Web/CSS/Universal_selectors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der CSS **Universalselektor** (`*`) passt zu Elementen jeglichen Typs.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der Universalselektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Type_selectors) und kann daher bei Verwendung von {{CSSXref("@namespace")}} mit einem Namensraum versehen werden. Dies ist nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namensräume enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|*` - passt zu allen Elementen im Namensraum _ns_
- `*|*` - passt zu allen Elementen
- `|*` - passt zu allen Elementen ohne einen deklarierten Namensraum

## Syntax

```css
* { style properties }
```

Der Asterisk ist bei einfachen Selektoren optional. Zum Beispiel sind `*.warning` und `.warning` gleichwertig.

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

In diesem Beispiel wird der Selektor nur zu Elementen im Beispielnamensraum passen.

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

- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
