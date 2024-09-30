---
title: ":hover"
slug: Web/CSS/:hover
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft zu, wenn der Benutzer mit einem Zeigegerät mit einem Element interagiert, es aber nicht notwendigerweise aktiviert. Sie wird im Allgemeinen ausgelöst, wenn der Benutzer mit dem Cursor (Mauszeiger) über ein Element fährt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-hover.html", "tabbed-shorter")}}

Stile, die durch die `:hover`-Pseudoklasse definiert sind, werden von jeder nachfolgenden, mit Links zusammenhängenden Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, oder {{ cssxref(":active") }}) mit zumindest gleicher Spezifität überschrieben. Um Links angemessen zu gestalten, setzt man die `:hover`-Regel nach den `:link`- und `:visited`-Regeln, aber vor der `:active`-Regel, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover`-Pseudoklasse ist auf Touchscreens problematisch. Je nach Browser kann es sein, dass die `:hover`-Pseudoklasse nie zutrifft, nur für einen Moment nach dem Berühren eines Elements zutrifft oder auch dann noch zutrifft, nachdem der Benutzer aufgehört hat, das Element zu berühren, und bis der Benutzer ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit begrenzten oder nicht vorhandenen Hover-Fähigkeiten zugänglich sind.

## Syntax

```css
:hover {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<a href="#">Try hovering over this link.</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chromium bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://crbug.com/370155)
- [Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://crbug.com/306581)
