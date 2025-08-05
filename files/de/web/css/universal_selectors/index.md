---
title: Universalselektoren
slug: Web/CSS/Universal_selectors
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Der CSS **Universal Selektor** (`*`) stimmt mit Elementen jeglichen Typs überein.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der Universal Selektor ist ein spezieller [Typsselektor](/de/docs/Web/CSS/Type_selectors) und kann daher namespaced werden, wenn {{CSSXref("@namespace")}} verwendet wird. Dies ist nützlich, wenn mit Dokumenten gearbeitet wird, die mehrere Namensräume enthalten, wie HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare mischt.

- `ns|*` - passt zu allen Elementen im Namensraum _ns_
- `*|*` - passt zu allen Elementen
- `|*` - passt zu allen Elementen ohne einen deklarierten Namensraum

## Syntax

```css
* { style properties }
```

Der Stern ist bei einfachen Selektoren optional. Zum Beispiel sind `*.warning` und `.warning` gleichwertig.

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

In diesem Beispiel stimmt der Selektor nur mit Elementen im Beispiel-Namensraum überein.

```css
@namespace example url("http://www.example.com/");
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
