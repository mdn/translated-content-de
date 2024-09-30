---
title: ":link"
slug: Web/CSS/:link
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das noch nicht besucht wurde. Sie stimmt mit jedem unbesuchten {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element überein, das ein `href`-Attribut besitzt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-link.html", "tabbed-shorter")}}

Stile, die durch die `:link`- und [`:visited`](/de/docs/Web/CSS/:visited)-Pseudoklassen definiert sind, können von nachfolgenden Benutzeraktions-Pseudoklassen ({{cssxref(":hover")}} oder {{cssxref(":active")}}) mit mindestens gleicher Spezifität überschrieben werden. Um Links angemessen zu stylen, sollte die Regel `:link` vor allen anderen linkbezogenen Regeln in der _LVHA-Reihenfolge_ stehen: `:link` — `:visited` — `:hover` — `:active`. Die `:visited`-Pseudoklasse und die `:link`-Pseudoklasse schließen sich gegenseitig aus.

> [!NOTE]
> Verwenden Sie {{cssxref(":any-link")}}, um ein Element auszuwählen, unabhängig davon, ob es besucht wurde oder nicht.

## Syntax

```css
:link {
  /* ... */
}
```

## Beispiele

Standardmäßig wenden die meisten Browser einen speziellen {{cssxref("color")}}-Wert auf besuchte Links an. Daher werden die Links in diesem Beispiel wahrscheinlich nur vor dem Besuch besondere Schriftfarben haben. (Danach müssen Sie Ihren Browser-Verlauf löschen, um sie erneut zu sehen.) Die {{cssxref("background-color")}}-Werte bleiben wahrscheinlich unverändert, da die meisten Browser diese Eigenschaft standardmäßig nicht auf besuchte Links anwenden.

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
