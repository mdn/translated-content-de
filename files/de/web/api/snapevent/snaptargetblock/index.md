---
title: "SnapEvent: snapTargetBlock-Eigenschaft"
short-title: snapTargetBlock
slug: Web/API/SnapEvent/snapTargetBlock
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die schreibgeschützte **`snapTargetBlock`**-Eigenschaft des [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Interfaces gibt eine Referenz auf das im Blockrichtung gesnappte Element zurück, wenn das Ereignis ausgelöst wurde.

Konkret bedeutet das:

- Im Fall des [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisses bezieht sich dies auf ein ausstehendes Ziel im Blockrichtung, das gesnappt wird (d.h. es wird ausgewählt, wenn das aktuelle Scroll-Geste endet).
- Im Fall des [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignisses bezieht sich dies auf ein neu ausgewähltes Ziel im Blockrichtung, das gesnapt wurde.

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der im Scroll-Container festgelegten {{cssxref("scroll-snap-type")}}-CSS-Eigenschaft. `snapTargetBlock` gibt nur dann eine Elementreferenz zurück, wenn die Snap-Achse als `block` (oder ein physikalischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht) oder `both` angegeben ist.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das gesnappte Element repräsentiert, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt und daher kein Element in der Blockrichtung gesnapt wird.

Wenn das gesnappte Element ein Pseudo-Element war, wird der zurückgegebene `Node` das besitzende Element dieses Pseudo-Elements sein.

## Beispiele

Siehe die Hauptseite [`SnapEvent`](/de/docs/Web/API/SnapEvent) für kurze Beispiele und unseren [Leitfaden zur Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events) für vollständige Beispiele und Erklärungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
