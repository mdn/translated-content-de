---
title: ":popover-open"
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: e492ae4891e1f0a454fd452ee2e67986f8e1150f
---

{{CSSRef}}

Die **`:popover-open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein [Popover](/de/docs/Web/API/Popover_API)-Element (d. h. eines mit einem [`popover`-Attribut](/de/docs/Web/HTML/Global_attributes/popover)), das sich im sichtbaren Zustand befindet. Sie können dies verwenden, um Stil nur auf Popover-Elemente anzuwenden, wenn sie angezeigt werden.

## Syntax

```css
:popover-open {
  /* ... */
}
```

## Beispiele

Standardmäßig erscheinen Popovers in der Mitte des Ansichtsfensters. Die Standardformatierung wird im UA-Stylesheet folgendermaßen erreicht:

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

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle im Ansichtsfenster erscheinen zu lassen, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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

- [Popover API](/de/docs/Web/API/Popover_API)
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
