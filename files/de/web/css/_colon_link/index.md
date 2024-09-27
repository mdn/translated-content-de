---
title: ":link"
slug: Web/CSS/:link
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie stimmt mit jedem unbesuchten {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit einem `href`-Attribut überein.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-link.html", "tabbed-shorter")}}

Stile, die durch die `:link`- und [`:visited`](/de/docs/Web/CSS/:visited)-Pseudoklassen definiert sind, können durch nachfolgende Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) überschrieben werden, die mindestens die gleiche Spezifität aufweisen. Um Links richtig zu stylen, sollten Sie die `:link`-Regel vor allen anderen linkbezogenen Regeln platzieren, gemäß der _LVHA-Reihenfolge_: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse schließen sich gegenseitig aus.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element unabhängig davon auszuwählen, ob es besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}}-Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur vor dem Besuch spezielle Schriftfarben haben. (Danach müssen Sie Ihren Browser-Verlauf löschen, um sie erneut zu sehen.) Jedoch werden die {{cssxref("background-color")}}-Werte wahrscheinlich bestehen bleiben, da die meisten Browser diese Eigenschaft standardmäßig nicht auf besuchte Links anwenden.

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

- Linkbezogene Pseudoklassen: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
