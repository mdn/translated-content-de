---
title: SnapEvent
slug: Web/API/SnapEvent
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Das **`SnapEvent`** Interface definiert das Ereignisobjekt für die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignisse. Diese werden ausgelöst, wenn der Browser ermittelt, dass ein neues Scroll-Snap-Ziel ansteht (ausgewählt wird, wenn die aktuelle Scroll-Geste endet) und wenn ein neues Snap-Ziel ausgewählt wird.

Diese Ereignisse können verwendet werden, um Code auszuführen, als Reaktion auf neue Elemente, die geschnappt werden; `SnapEvent` stellt Referenzen zu dem in der Inline- und/oder Blockrichtung geschnappten Element bereit. Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf dem Scroll-Container gesetzt ist:

- Wenn die Snap-Achse als `block` (oder ein physikalischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht) angegeben ist, gibt nur [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) eine Elementreferenz zurück.
- Wenn die Snap-Achse als `inline` (oder ein physikalischer Achsenwert, der im aktuellen Schreibmodus `inline` entspricht) angegeben ist, gibt nur [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) eine Elementreferenz zurück.
- Wenn die Snap-Achse als `both` angegeben ist, geben `snapTargetBlock` und `snapTargetInline` eine Elementreferenz zurück.

{{InheritanceDiagram}}

## Konstruktor

- [`SnapEvent()`](/de/docs/Web/API/SnapEvent/SnapEvent) {{Experimental_Inline}}
  - : Erstellt eine neue `SnapEvent` Objektinstanz.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das Element zurück, das bei Auslösung des Ereignisses in Blockrichtung geschnappt wurde, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt, sodass kein Element in der Blockrichtung geschnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das Element zurück, das bei Auslösung des Ereignisses in der Inline-Richtung geschnappt wurde, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung erfolgt, sodass kein Element in der Inline-Richtung geschnappt wird.

## Beispiele

### `scrollsnapchanging` Beispiel

Im folgenden `scrollsnapchanging` Handler-Funktion Snippet setzen wir das `class`-Attribut des [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Elements auf `pending` unter Verwendung der [`Element.className`](/de/docs/Web/API/Element/className) Eigenschaft, das verwendet werden könnte, um das Element anders zu stylen, wenn es zum ausstehenden Snap-Ziel wird.

Beachten Sie, dass dieser Handler auf einem Blockrichtungs-Scroll-Container (vertikal scrollend, wenn die Seite auf einen horizontalen {{cssxref("writing-mode")}} gesetzt ist) gesetzt werden soll. Daher wird sich nur das `snapTargetBlock` Element zwischen mehreren ausgelösten Ereignissen ändern. [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) wird `null` zurückgeben, da kein Snap in der Inline-Richtung erfolgt.

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // Set current pending snap target class to "pending"
  event.snapTargetBlock.className = "pending";

  // Logs the new pending block-direction snap target element
  console.log(event.snapTargetBlock);

  // Logs null; no inline snapping occurs
  console.log(event.snapTargetInline);
});
```

### `scrollsnapchange` Beispiel

Im folgenden `scrollsnapchange` Handler-Funktion Snippet setzen wir eine `selected` Klasse auf das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Element, das verwendet werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation).

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "selected";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
