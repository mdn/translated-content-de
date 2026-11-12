---
title: Universalselektoren
slug: Web/CSS/Reference/Selectors/Universal_selectors
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Der CSS-**Universalselektor** (`*`) erfasst Elemente jedes Typs.

```css
/* Selects all elements */
* {
  color: green;
}
```

Der Universalselektor ist ein spezieller [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und kann daher bei Verwendung von {{CSSXref("@namespace")}} mit einem Namespace versehen werden. Das ist nützlich bei Dokumenten mit mehreren Namespaces, etwa HTML mit eingebettetem SVG oder MathML oder XML, das mehrere Vokabulare kombiniert.

- `ns|*` – erfasst alle Elemente im Namespace _ns_
- `*|*` – erfasst alle Elemente
- `|*` – erfasst alle Elemente ohne deklarierten Namespace

> [!NOTE]
> Der Universalselektor (`*`) erfasst **nur Elemente**.
> Er erfasst für sich genommen **keine** Pseudoelemente direkt.
>
> Um beispielsweise alle {{cssxref("::before")}}-Pseudoelemente auf einer Seite zu erfassen, müssen Sie einen Selektor wie `*::before` verwenden. Das funktioniert, weil `*` alle Elemente erfasst und das Pseudoelement `::before` für alle Elemente verfügbar ist.

## Syntax

```css
* { style properties }
```

Bei einfachen Selektoren ist das Sternchen optional. Beispielsweise sind `*.warning` und `.warning` gleichwertig.

## Beispiele

### HTML

```html
<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>
```

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

### Ergebnis

{{EmbedLiveSample('Examples')}}

### Namespaces

In diesem Beispiel erfasst der Selektor nur Elemente im Beispiel-Namespace.

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

- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [CSS lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
