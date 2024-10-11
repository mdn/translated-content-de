---
title: "SnapEvent: snapTargetInline-Eigenschaft"
short-title: snapTargetInline
slug: Web/API/SnapEvent/snapTargetInline
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die **`snapTargetInline`**-Eigenschaft der [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Schnittstelle gibt einen Verweis auf das Element zurück, das bei Auslösen des Ereignisses in der Inline-Richtung gefangen wurde.

Konkret:

- Im Falle des [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisses bezieht sich dies auf ein ausstehendes Snap-Ziel in der Inline-Richtung (d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet).
- Im Falle des [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignisses bezieht sich dies auf ein neu ausgewähltes Snap-Ziel in der Inline-Richtung.

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}}-CSS-Eigenschaft, die im Scroll-Container festgelegt ist. `snapTargetInline` gibt nur dann einen Elemente-Verweis zurück, wenn die Snap-Achse als `inline` (oder ein physischer Achsenwert, der in der aktuellen Schreibrichtung `inline` entspricht) oder `both` angegeben ist.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das gefangene Element darstellt, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung auftritt, sodass kein Element in der Inline-Richtung gefangen wird.

Wenn das gefangene Element ein Pseudo-Element war, wird der zurückgegebene `Node` das besitzende Element dieses Pseudo-Elements sein.

## Beispiele

Siehe die Hauptseite [`SnapEvent`](/de/docs/Web/API/SnapEvent) für kurze Beispiele und unseren [Leitfaden zur Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events) für vollständige Beispiele und Erklärungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [CSS Scroll-Snap-Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
