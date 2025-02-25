---
title: ":popover-open"
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{CSSRef}}

Die **`:popover-open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines mit einem [`popover`-Attribut](/de/docs/Web/HTML/Global_attributes/popover)), das sich im Anzeigestatus befindet. Sie können diese verwenden, um Popover-Elemente nur dann zu stylen, wenn sie angezeigt werden.

## Syntax

```css
:popover-open {
  /* ... */
}
```

## Beispiele

Standardmäßig erscheinen Popovers in der Mitte des Viewports. Das Standard-Styling wird im UA-Stylesheet folgendermaßen erreicht:

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

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle im Viewport erscheinen zu lassen, könnten Sie die obigen Stile mit etwas wie diesem überschreiben:

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
