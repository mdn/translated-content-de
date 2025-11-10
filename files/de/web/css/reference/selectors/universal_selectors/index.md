---
title: Universelle Selektoren
slug: Web/CSS/Reference/Selectors/Universal_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der CSS-**universal selector** (`*`) wählt Elemente jeglichen Typs aus.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der universelle Selektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und kann daher mit {{CSSXref("@namespace")}} namespaced werden. Dies ist nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|*` - wählt alle Elemente im Namespace _ns_ aus
- `*|*` - wählt alle Elemente aus
- `|*` - wählt alle Elemente ohne deklarierten Namespace aus

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

### Namespaces

In diesem Beispiel wird der Selektor nur Elemente im Beispiel-Namespace auswählen.

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

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul
- [Lernen Sie CSS: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
