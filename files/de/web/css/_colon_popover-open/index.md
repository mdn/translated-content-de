---
title: ":popover-open"
slug: Web/CSS/:popover-open
l10n:
  sourceCommit: e492ae4891e1f0a454fd452ee2e67986f8e1150f
---

{{CSSRef}}

Die **`:popover-open`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein {{domxref("Popover API", "popover", "", "nocode")}}-Element (d. h. eines mit einem [`popover`-Attribut](/de/docs/Web/HTML/Global_attributes/popover)), das sich im angezeigten Zustand befindet. Sie können dies verwenden, um Popover-Elemente nur dann zu stylen, wenn sie angezeigt werden.

## Syntax

```css
:popover-open {
  /* ... */
}
```

## Beispiele

Standardmäßig erscheinen Popovers in der Mitte des Ansichtsfensters. Das Standardstyling wird so im UA-Stylesheet erreicht:

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

Um die Standardstile zu überschreiben und das Popover an einer anderen Stelle im Ansichtsfenster erscheinen zu lassen, müssen Sie die oben genannten Stile mit etwas wie diesem überschreiben:

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
- HTML-Globalattribut [`popover`](/de/docs/Web/HTML/Global_attributes/popover)