---
title: :link
slug: Web/CSS/Reference/Selectors/:link
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie entspricht jedem unbesuchten {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element, das ein `href`-Attribut hat.

{{InteractiveExample("CSS Demo: :link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:link {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages that you might have visited:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/">YouTube</a>
  </li>
</ul>
<p>Pages unlikely to be in your history:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-2">Random MDN page</a>
  </li>
  <li>
    <a href="https://example.com/missing-2">Random Example page</a>
  </li>
</ul>
```

Stile, die durch die `:link`- und [`:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited)-Pseudoklassen definiert sind, können durch jede nachfolgende Benutzeraktions-Pseudoklasse ({{cssxref(":hover")}} oder {{cssxref(":active")}}), die mindestens gleiche Spezifität hat, überschrieben werden. Um Links angemessen zu stylen, platzieren Sie die `:link`-Regel vor allen anderen Link-bezogenen Regeln, wie sie durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse schließen sich gegenseitig aus.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element auszuwählen, unabhängig davon, ob es besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}}-Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur dann spezielle Schriftfarben haben, bevor Sie sie besuchen. (Danach müssen Sie Ihren Browserverlauf löschen, um sie erneut zu sehen.) Die {{cssxref("background-color")}}-Werte werden jedoch wahrscheinlich bestehen bleiben, da die meisten Browser diese Eigenschaft standardmäßig nicht auf besuchte Links anwenden.

### HTML

```html
<a href="#ordinary-target">This is an ordinary link.</a><br />
<a href="">You've already visited this link.</a><br />
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Link-bezogene Pseudoklassen: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
