---
title: Universalselektoren
slug: Web/CSS/Reference/Selectors/Universal_selectors
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der CSS-**Universalselektor** (`*`) entspricht Elementen jeden Typs.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der Universalselektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und kann daher mit {{CSSXref("@namespace")}} namespaced werden. Dies ist nützlich, wenn man mit Dokumenten arbeitet, die mehrere Namespaces enthalten, wie HTML mit eingebettetem SVG oder MathML, oder XML, das mehrere Vokabulare mischt.

- `ns|*` - entspricht allen Elementen im Namespace _ns_
- `*|*` - entspricht allen Elementen
- `|*` - entspricht allen Elementen ohne deklarierte Namespaces

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

In diesem Beispiel entspricht der Selektor nur Elementen im Beispielfalls-Namespace.

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
- [CSS lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
