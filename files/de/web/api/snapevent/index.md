---
title: SnapEvent
slug: Web/API/SnapEvent
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Das **`SnapEvent`** Interface definiert das Ereignisobjekt für die [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignisse. Diese werden jeweils auf einem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Ziel für das Scroll-Snapping ansteht (ausgewählt wird, wenn die aktuelle Scroll-Geste endet), und wenn ein neues Snap-Ziel ausgewählt wird.

Diese Ereignisse können verwendet werden, um Code auszuführen, als Reaktion auf neue Elemente, die geschnappt werden; `SnapEvent` bietet Referenzen auf das Element, das in der Inline- und/oder Blockrichtung geschnappt wird. Die auf `SnapEvent` verfügbaren Eigenschaftswerte entsprechen direkt dem Wert der {{cssxref("scroll-snap-type")}} CSS-Eigenschaft, die auf den Scroll-Container festgelegt ist:

- Wenn die Snap-Achse als `block` spezifiziert ist (oder ein physischer Achsenwert, der im aktuellen Schreibmodus `block` entspricht), liefert nur [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) eine Elementreferenz.
- Wenn die Snap-Achse als `inline` spezifiziert ist (oder ein physischer Achsenwert, der im aktuellen Schreibmodus `inline` entspricht), liefert nur [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) eine Elementreferenz.
- Wenn die Snap-Achse als `both` spezifiziert ist, liefern `snapTargetBlock` und `snapTargetInline` beide eine Elementreferenz.

{{InheritanceDiagram}}

## Konstruktor

- [`SnapEvent()`](/de/docs/Web/API/SnapEvent/SnapEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `SnapEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das Element zurück, das in der Blockrichtung geschnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt und daher kein Element in der Blockrichtung geschnappt wird.
- [`snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das Element zurück, das in der Inline-Richtung geschnappt wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung erfolgt und daher kein Element in der Inline-Richtung geschnappt wird.

## Beispiele

### `scrollsnapchanging` Beispiel

Im folgenden `scrollsnapchanging`-Handler-Funktionsbeispiel setzen wir das `class`-Attribut des [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Elements mit der Eigenschaft [`Element.className`](/de/docs/Web/API/Element/className) auf `pending`, was genutzt werden könnte, um das Element anders zu stylen, wenn es ein ausstehendes Snap-Ziel wird.

Beachten Sie, dass dieser Handler für einen Scroll-Container in Blockrichtung (vertikal scrollend, wenn die Seite auf einen horizontalen {{cssxref("writing-mode")}} eingestellt ist) gedacht ist. Daher wird sich nur das `snapTargetBlock`-Element zwischen mehreren auslösenden Ereignissen ändern. [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) wird `null` zurückgeben, da in der Inline-Richtung kein Snapping erfolgt.

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

Im folgenden `scrollsnapchange`-Handler-Funktionsbeispiel setzen wir eine `selected`-Klasse auf das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Element, was genutzt werden könnte, um ein neu ausgewähltes Snap-Ziel so zu stylen, dass es aussieht, als wäre es ausgewählt (zum Beispiel mit einer Animation).

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
- [CSS scroll snap module](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
