---
title: Universelle Selektoren
slug: Web/CSS/Reference/Selectors/Universal_selectors
l10n:
  sourceCommit: ca0d81a57fd36cf5da9621c44171d0f333f3f3e1
---

Der CSS **universelle Selektor** (`*`) wählt Elemente jeden Typs aus.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der universelle Selektor ist ein spezieller [Typ-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und kann daher mit {{CSSXref("@namespace")}} namespaced werden. Dies ist nützlich, wenn Sie mit Dokumenten arbeiten, die mehrere Namensräume wie HTML mit eingebettetem SVG oder MathML oder XML enthalten, das mehrere Vokabulare mischt.

- `ns|*` - wählt alle Elemente im Namensraum _ns_ aus
- `*|*` - wählt alle Elemente aus
- `|*` - wählt alle Elemente ohne erklärten Namensraum aus

> [!NOTE]
> Der universelle Selektor (`*`) wählt **nur Elemente** aus.
> Er wählt **nicht** direkt Pseudo-Elemente aus.
>
> Um beispielsweise alle {{cssxref("::before")}} Pseudo-Elemente auf einer Seite zu wählen, müssten Sie einen Selektor wie `*::before` verwenden. Dies funktioniert, weil das `*` alle Elemente auswählt und das `::before` Pseudo-Element auf allen Elementen verfügbar ist.

## Syntax

```css
* { style properties }
```

Das Sternchen ist bei einfachen Selektoren optional. Beispielsweise sind `*.warning` und `.warning` gleichwertig.

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

In diesem Beispiel wählt der Selektor nur Elemente im Beispiel-Namensraum aus.

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

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Lernen Sie CSS: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
