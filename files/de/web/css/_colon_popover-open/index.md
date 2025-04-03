---
title: :popover-open
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`:popover-open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines mit einem [`popover`-Attribut](/de/docs/Web/HTML/Global_attributes/popover)), das im sichtbaren Zustand ist. Sie können diese Klasse verwenden, um Stil auf Popover-Elemente nur dann anzuwenden, wenn sie angezeigt werden.

## Syntax

```css
:popover-open {
  /* ... */
}
```

## Beispiele

Standardmäßig erscheinen Popover in der Mitte des Ansichtsbereichs. Das Standardstyling wird im UA-Stylesheet so erreicht:

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle im Ansichtsbereich erscheinen zu lassen, könnten Sie die obigen Stile mit etwas Ähnlichem wie diesem überschreiben:

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover-API](/de/docs/Web/API/Popover_API)
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
