---
title: :link
slug: Web/CSS/:link
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie trifft auf jedes unbesuchte {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element mit einem `href` Attribut zu.

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

Stile, die durch die `:link` und [`:visited`](/de/docs/Web/CSS/:visited) Pseudoklassen definiert sind, können durch nachfolgende Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens gleiche Spezifität haben. Um Links angemessen zu stylen, platzieren Sie die `:link` Regel vor allen anderen linkbezogenen Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element auszuwählen, unabhängig davon, ob es bereits besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}} Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur spezielle Schriftfarben haben, bevor Sie sie besuchen. (Danach müssen Sie Ihren Browserverlauf löschen, um sie erneut zu sehen.) Die {{cssxref("background-color")}} Werte bleiben wahrscheinlich bestehen, da die meisten Browser diese Eigenschaft nicht standardmäßig auf besuchte Links anwenden.

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

- Mit Links verwandte Pseudoklassen: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
