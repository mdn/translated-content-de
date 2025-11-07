---
title: "SnapEvent: snapTargetBlock-Eigenschaft"
short-title: snapTargetBlock
slug: Web/API/SnapEvent/snapTargetBlock
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die **`snapTargetBlock`**-Eigenschaft des [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Referenz auf das Element zurückgibt, zu dem im Block-Richtung geschnappt wurde, als das Ereignis ausgelöst wurde.

Konkret bedeutet dies:

- Im Fall des [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisses bezieht sich dies auf ein ausstehendes Block-Richtung Snap-Ziel (d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet).
- Im Fall des [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignisses bezieht sich dies auf ein neu ausgewähltes Block-Richtung Snap-Ziel.

Die vorhandenen Eigenschaftswerte auf `SnapEvent` entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf dem Scroll-Container festgelegt ist. `snapTargetBlock` gibt nur dann eine Elementreferenz zurück, wenn die Snap-Achse als `block` (oder ein physikalischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht) oder `both` spezifiziert ist.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das geschnappte Element repräsentiert, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt, sodass kein Element in der Block-Richtung geschnappt wird.

Wenn das geschnappte Element ein Pseudo-Element war, wird der zurückgegebene `Node` das besitzende Element dieses Pseudo-Elements sein.

## Beispiele

Sehen Sie sich die Hauptseite [`SnapEvent`](/de/docs/Web/API/SnapEvent) für kurze Beispiele an, und unseren [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events) Leitfaden für vollständige Beispiele und Erklärungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [CSS scroll snap module](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
