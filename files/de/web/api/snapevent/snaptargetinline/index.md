---
title: "SnapEvent: snapTargetInline-Eigenschaft"
short-title: snapTargetInline
slug: Web/API/SnapEvent/snapTargetInline
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die **`snapTargetInline`**-Eigenschaft des [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Interfaces gibt eine Referenz auf das Element zurück, das in die Inline-Richtung eingefangen wurde, als das Ereignis ausgelöst wurde.

Genauer gesagt:

- Im Fall des [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisses bezieht sich dies auf ein bevorstehendes Snap-Ziel in Inline-Richtung (d.h. es wird ausgewählt, wenn die aktuelle Scrollgeste endet).
- Im Fall des [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignisses bezieht sich dies auf ein neu ausgewähltes Snap-Ziel in Inline-Richtung.

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf dem Scroll-Container festgelegt ist. `snapTargetInline` gibt nur dann eine Elementreferenz zurück, wenn die Snap-Achse als `inline` (oder ein physikalischer Achsenwert, der in der aktuellen Schreibrichtung `inline` entspricht) oder `both` spezifiziert ist.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), das das eingefangene Element darstellt, oder `null`, wenn das Scroll-Snapping nur in der Block-Richtung erfolgt, sodass kein Element in der Inline-Richtung eingefangen wird.

Wenn das eingefangene Element ein Pseudo-Element war, wird der zurückgegebene `Node` das besitzende Element dieses Pseudo-Elements sein.

## Beispiele

Siehe die Hauptseite des [`SnapEvent`](/de/docs/Web/API/SnapEvent) für kurze Beispiele und unseren [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)-Leitfaden für vollständige Beispiele und Erklärungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
