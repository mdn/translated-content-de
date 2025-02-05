---
title: ":hover"
slug: Web/CSS/:hover
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:hover`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) passt, wenn der Benutzer mit einem Zeigegerät mit einem Element interagiert, dieses jedoch nicht unbedingt aktiviert. Sie wird im Allgemeinen ausgelöst, wenn der Benutzer mit dem Cursor (Mauszeiger) über ein Element fährt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-hover.html", "tabbed-shorter")}}

Von der Pseudoklasse `:hover` definierte Stile werden von nachfolgenden linkbezogenen Pseudoklassen ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, oder {{ cssxref(":active") }}) mit mindestens gleicher Spezifität überschrieben. Um Links korrekt zu stylen, sollte die `:hover`-Regel nach den `:link`- und `:visited`-Regeln, aber vor der `:active`-Regel stehen, wie es in der _LVHA-Reihenfolge_ definiert ist: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die Pseudoklasse `:hover` ist auf Touchscreens problematisch. Abhängig vom Browser kann es sein, dass die Pseudoklasse `:hover` niemals zutrifft, nur für einen Moment nach Berühren eines Elements trifft oder weiterhin zutrifft, selbst nachdem der Benutzer das Berühren beendet hat, bis ein anderes Element berührt wird. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht existierenden Hover-Fähigkeiten zugänglich sind.

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

- [Chromium Bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://crbug.com/370155)
- [Chromium Bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://crbug.com/306581)
