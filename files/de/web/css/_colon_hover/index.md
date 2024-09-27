---
title: ":hover"
slug: Web/CSS/:hover
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) greift, wenn der Benutzer mit einem Zeigegerät mit einem Element interagiert, es jedoch nicht unbedingt aktiviert. Sie wird allgemein ausgelöst, wenn der Benutzer mit dem Cursor (Mauszeiger) über ein Element fährt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-hover.html", "tabbed-shorter")}}

Stile, die durch die `:hover` Pseudoklasse definiert sind, werden durch jede nachfolgende, verknüpfungsbezogene Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }} oder {{ cssxref(":active") }}) mit mindestens gleicher Spezifität überschrieben. Um Links angemessen zu stylen, setzen Sie die `:hover`-Regel nach den `:link`- und `:visited`-Regeln, jedoch vor die `:active`-Regel gemäß der _LVHA-Reihenfolge_: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover`-Pseudoklasse ist auf Touchscreens problematisch. Abhängig vom Browser könnte die `:hover`-Pseudoklasse niemals greifen, nur für einen Moment nach Berühren eines Elements greifen oder weiterhin greifen, auch nachdem der Benutzer das Berühren aufgehört hat, bis ein anderes Element berührt wird. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Schwebefähigkeiten zugänglich sind.

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

- [Chromium Bug #370155: `:hover` nicht klebrig machen bei einem Tipp auf Webseiten, die ein mobiles Viewport setzen](https://crbug.com/370155)
- [Chromium Bug #306581: Hover- und Aktivzustände sofort auf Touch anzeigen, wenn die Seite nicht scrollbar ist.](https://crbug.com/306581)
