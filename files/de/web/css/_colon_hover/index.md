---
title: ":hover"
slug: Web/CSS/:hover
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:hover`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) greift, wenn der Benutzer mit einem Zeigegerät mit einem Element interagiert, es jedoch nicht notwendigerweise aktiviert. Sie wird im Allgemeinen ausgelöst, wenn der Benutzer mit dem Cursor (Mauszeiger) über ein Element fährt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-hover.html", "tabbed-shorter")}}

Stile, die durch die `:hover` Pseudoklasse definiert sind, werden von jeder nachfolgenden, verknüpfungsbezogenen Pseudoklasse ({{ cssxref(":link") }}, {{ cssxref(":visited") }} oder {{ cssxref(":active") }}) mit mindestens gleicher Spezifität überschrieben. Um Links angemessen zu gestalten, platzieren Sie die `:hover` Regel nach den `:link` und `:visited` Regeln, aber vor der `:active`, wie es die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Die `:hover` Pseudoklasse ist auf Touchscreens problematisch. Abhängig vom Browser kann es sein, dass die `:hover` Pseudoklasse niemals greift, nur kurz nach Berühren eines Elements, oder weiterhin greift, auch nachdem der Benutzer das Berühren beendet hat und bis er ein anderes Element berührt. Webentwickler sollten sicherstellen, dass Inhalte auf Geräten mit eingeschränkten oder nicht vorhandenen Hover-Fähigkeiten zugänglich sind.

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
<a href="#">Versuchen Sie, über diesen Link zu schweben.</a>
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

- [Chromium Bug #370155: `:hover` nicht bei Klick auf mobilen Ansichten festsetzen](https://crbug.com/370155)
- [Chromium Bug #306581: Sofortiges Anzeigen von Hover- und Aktivzuständen bei Berührung, wenn die Seite nicht scrollbar ist.](https://crbug.com/306581)
