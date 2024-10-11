---
title: "SnapEvent: SnapEvent() Konstruktor"
short-title: SnapEvent()
slug: Web/API/SnapEvent/SnapEvent
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("Snap Events")}}{{SeeCompatTable}}

Der **`SnapEvent()`** Konstruktor erstellt eine neue Instanz des [`SnapEvent`](/de/docs/Web/API/SnapEvent) Objekts.

## Syntax

```js-nolint
new SnapEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Für [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse ist dies `scrollsnapchanging`. Für [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignisse ist dies `scrollsnapchange`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `snapTargetBlock` {{optional_inline}}
      - : Gibt eine Referenz auf das Element zurück, zu dem in der Block-Richtung gesprungen wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Inline-Richtung erfolgt, sodass kein Element in der Block-Richtung angesprungen wird.
    - `snapTargetInline` {{optional_inline}}
      - : Gibt eine Referenz auf das Element zurück, zu dem in der Inline-Richtung gesprungen wurde, als das Ereignis ausgelöst wurde, oder `null`, wenn das Scroll-Snapping nur in der Block-Richtung erfolgt, sodass kein Element in der Inline-Richtung angesprungen wird.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `SnapEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens der [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) oder [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignisse aufgerufen wird.

Zum Beispiel:

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  // ...

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
- [CSS scroll snap module](/de/docs/Web/CSS/CSS_scroll_snap)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
