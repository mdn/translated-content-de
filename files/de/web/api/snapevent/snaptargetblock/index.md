---
title: "SnapEvent: snapTargetBlock-Eigenschaft"
short-title: snapTargetBlock
slug: Web/API/SnapEvent/snapTargetBlock
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`snapTargetBlock`** des [`SnapEvent`](/de/docs/Web/API/SnapEvent)-Interfaces gibt eine Referenz auf das Element zurück, das beim Auslösen des Ereignisses in der Blockrichtung einschnappt.

Konkret:

- Im Fall des [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisses bezieht sich dies auf ein in der Blockrichtung bevorstehendes Einschnappziel (d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet).
- Im Fall des [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignisses bezieht sich dies auf ein neu ausgewähltes Einschnappziel in der Blockrichtung.

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf dem Scroll-Container gesetzt ist. `snapTargetBlock` gibt nur eine Elementreferenz zurück, wenn die Snap-Achse als `block` (oder ein physischer Achsenwert, der in der aktuellen Schreibweise `block` entspricht) oder `both` angegeben ist.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das eingeschnappte Element darstellt, oder `null`, wenn das Scroll-Einschnappen nur in der Inline-Richtung erfolgt und somit kein Element in der Blockrichtung einschnappt.

Wenn das eingeschnappte Element ein Pseudo-Element war, wird der zurückgegebene `Node` das besitzende Element dieses Pseudo-Elements sein.

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
