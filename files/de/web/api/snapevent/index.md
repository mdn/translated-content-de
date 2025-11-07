---
title: SnapEvent
slug: Web/API/SnapEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Die **`SnapEvent`**-Schnittstelle definiert das Ereignisobjekt für die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignisse. Diese werden jeweils auf einem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht (ausgewählt wird, wenn die aktuelle Scroll-Geste endet), und wenn ein neues Snap-Ziel ausgewählt wird.

Diese Ereignisse können verwendet werden, um Code auszuführen als Reaktion auf neue Elemente, die gesnappt werden; `SnapEvent` stellt Verweise auf das Element bereit, das in Inline- und/oder Block-Richtung gesnappt wurde. Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der CSS-Eigenschaft {{cssxref("scroll-snap-type")}}, die auf den Scroll-Container gesetzt ist:

- Wenn die Snap-Achse als `block` angegeben ist (oder ein physikalischer Achsenwert, der in der aktuellen Schreibweise `block` entspricht), gibt nur [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) einen Elementverweis zurück.
- Wenn die Snap-Achse als `inline` angegeben ist (oder ein physikalischer Achsenwert, der in der aktuellen Schreibweise `inline` entspricht), gibt nur [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) einen Elementverweis zurück.
- Wenn die Snap-Achse als `both` angegeben ist, geben `snapTargetBlock` und `snapTargetInline` einen Elementverweis zurück.

{{InheritanceDiagram}}

## Konstruktor

- [`SnapEvent()`](/de/docs/Web/API/SnapEvent/SnapEvent) {{Experimental_Inline}}
  - : Erstellt eine neue `SnapEvent`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das Element zurück, das in der Blockrichtung gesnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt und daher kein Element in der Blockrichtung gesnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf das Element zurück, das in der Inline-Richtung gesnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung erfolgt und daher kein Element in der Inline-Richtung gesnappt wird.

## Beispiele

### Beispiel für `scrollsnapchanging`

Im folgenden `scrollsnapchanging`-Handler-Funktionsschnipsel setzen wir das `class`-Attribut des [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Elements auf `pending` mithilfe der [`Element.className`](/de/docs/Web/API/Element/className)-Eigenschaft. Dies könnte verwendet werden, um das Element anders zu stylen, wenn es ein ausstehendes Snap-Ziel wird.

Beachten Sie, dass dieser Handler für einen Scroll-Container in der Blockrichtung (vertikales Scrollen, wenn die Seite auf eine horizontale Schreibweise gesetzt ist) gedacht ist. Daher wird sich nur das `snapTargetBlock`-Element zwischen mehreren auslösenden Ereignissen ändern. [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) wird `null` zurückgeben, da kein Snapping in der Inline-Richtung erfolgt.

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

### Beispiel für `scrollsnapchange`

Im folgenden `scrollsnapchange`-Handler-Funktionsschnipsel setzen wir eine `selected`-Klasse auf das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Element. Dies könnte verwendet werden, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel mit einer Animation).

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
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
