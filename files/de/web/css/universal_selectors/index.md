---
title: Universalselektoren
slug: Web/CSS/Universal_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der CSS **Universalselektor** (`*`) passt auf Elemente jeglichen Typs.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der Universalselektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Type_selectors) und kann deshalb mit {{CSSXref("@namespace")}} namensspezifisch verwendet werden. Dies ist nützlich beim Umgang mit Dokumenten, die mehrere Namensräume enthalten, wie HTML mit integriertem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|*` - passt auf alle Elemente im Namensraum _ns_
- `*|*` - passt auf alle Elemente
- `|*` - passt auf alle Elemente ohne einen deklarierten Namensraum

## Syntax

```css
* { style properties }
```

Der Stern ist optional bei einfachen Selektoren. Zum Beispiel sind `*.warning` und `.warning` äquivalent.

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

In diesem Beispiel wird der Selektor nur auf Elemente im Beispiels-Namensraum passen.

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
- [CSS lernen: Basis-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
