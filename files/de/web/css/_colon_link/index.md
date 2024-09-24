---
title: ":link"
slug: Web/CSS/:link
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie entspricht jedem unbesuchten {{HTMLElement("a")}} oder {{HTMLElement("area")}} Element, das ein `href` Attribut hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-link.html", "tabbed-shorter")}}

Von den Pseudoklassen `:link` und [`:visited`](/de/docs/Web/CSS/:visited) definierte Stile können durch alle nachfolgenden Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit mindestens gleicher Spezifität überschrieben werden. Um Links angemessen zu stylen, setzen Sie die `:link` Regel vor alle anderen linkbezogenen Regeln, wie es durch die _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`. Die `:visited` Pseudoklasse und die `:link` Pseudoklasse schließen sich gegenseitig aus.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element unabhängig davon auszuwählen, ob es besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}} Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur spezielle Schriftfarben haben, bevor Sie sie besuchen. (Danach müssen Sie Ihren Browserverlauf löschen, um sie erneut zu sehen.) Die {{cssxref("background-color")}} Werte bleiben jedoch wahrscheinlich erhalten, da die meisten Browser diese Eigenschaft bei besuchten Links standardmäßig nicht setzen.

### HTML

```html
<a href="#ordinary-target">Dies ist ein gewöhnlicher Link.</a><br />
<a href="">Diesen Link haben Sie bereits besucht.</a><br />
<a>Platzhalterlink (wird nicht gestylt)</a>
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
