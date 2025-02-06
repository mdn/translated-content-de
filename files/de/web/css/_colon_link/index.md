---
title: :link
slug: Web/CSS/:link
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie stimmt mit jedem nicht besuchten {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element überein, das ein `href`-Attribut hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-link.html", "tabbed-shorter")}}

Stile, die durch die Pseudoklassen `:link` und [`:visited`](/de/docs/Web/CSS/:visited) definiert werden, können durch nachfolgende Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit zumindest gleicher Spezifität überschrieben werden. Um Links korrekt zu gestalten, setzen Sie die `:link`-Regel vor alle anderen mit Links verbundenen Regeln, entsprechend der _LVHA-Reihenfolge_: `:link` — `:visited` — `:hover` — `:active`. Die Pseudoklassen `:visited` und `:link` schließen sich gegenseitig aus.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element unabhängig davon auszuwählen, ob es besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}}-Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur spezielle Schriftfarben haben, bevor Sie sie besuchen. (Danach müssen Sie Ihren Browser-Verlauf löschen, um sie erneut zu sehen.) Die {{cssxref("background-color")}}-Werte bleiben jedoch wahrscheinlich erhalten, da die meisten Browser diese Eigenschaft standardmäßig nicht auf besuchte Links anwenden.

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

- Pseudoklassen für Links: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
