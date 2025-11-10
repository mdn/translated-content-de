---
title: "SnapEvent: SnapEvent() Konstruktor"
short-title: SnapEvent()
slug: Web/API/SnapEvent/SnapEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Der **`SnapEvent()`** Konstruktor erstellt eine neue Instanz des [`SnapEvent`](/de/docs/Web/API/SnapEvent) Objekt.

## Syntax

```js-nolint
new SnapEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Für [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse ist dies `scrollsnapchanging`. Für [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignisse ist dies `scrollsnapchange`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `snapTargetBlock` {{optional_inline}}
      - : Gibt eine Referenz auf das Element zurück, zu dem in der Blockrichtung beim Auftreten des Ereignisses gesnappt wurde, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt und daher kein Element in der Blockrichtung gesnappt wird.
    - `snapTargetInline` {{optional_inline}}
      - : Gibt eine Referenz auf das Element zurück, zu dem in der Inline-Richtung beim Auftreten des Ereignisses gesnappt wurde, oder `null`, wenn das Scroll-Snapping nur in der Blockrichtung erfolgt und daher kein Element in der Inline-Richtung gesnappt wird.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `SnapEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Auftretens von [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) oder [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignissen aufgerufen wird.

Zum Beispiel:

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  // …

  // Log a SnapEvent object instance to the console
  console.log(event);
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
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
