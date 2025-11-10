---
title: "SnapEvent: snapTargetInline-Eigenschaft"
short-title: snapTargetInline
slug: Web/API/SnapEvent/snapTargetInline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die **`snapTargetInline`** schreibgeschützte Eigenschaft des
[`SnapEvent`](/de/docs/Web/API/SnapEvent) Interfaces gibt eine Referenz auf das Element zurück, das in der Inline-Richtung eingejappt wurde, als das Ereignis ausgelöst wurde.

Konkret bedeutet dies:

- Im Fall des [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisses bezieht sich dies auf ein ausstehendes Snapziel in Inline-Richtung (d.h. es wird ausgewählt, wenn die aktuelle Scrollgeste endet).
- Im Fall des [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignisses bezieht sich dies auf ein neu ausgewähltes Snapziel in Inline-Richtung.

Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die am Scroll-Container gesetzt ist. `snapTargetInline` gibt nur dann eine Elementreferenz zurück, wenn die Snap-Achse als `inline` (oder ein physikalischer Achsenwert, der im aktuellen Schreibrichtungmodus `inline` entspricht) oder `both` angegeben ist.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das eingerastete Element darstellt, oder `null`, wenn das Scroll-Snapping nur in Blockrichtung erfolgt, sodass kein Element in Inline-Richtung eingejappt wird.

Wenn das eingerastete Element ein Pseudo-Element war, wird der zurückgegebene `Node` das besitzende Element dieses Pseudo-Elements sein.

## Beispiele

Sehen Sie sich die Hauptseite [`SnapEvent`](/de/docs/Web/API/SnapEvent) für kurze Beispiele und unseren [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events) Leitfaden für vollständige Beispiele und Erklärungen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
