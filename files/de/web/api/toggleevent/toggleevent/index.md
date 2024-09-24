---
title: "ToggleEvent: ToggleEvent() Konstruktor"
short-title: ToggleEvent()
slug: Web/API/ToggleEvent/ToggleEvent
l10n:
  sourceCommit: 88c8823f926e004bbc97bde6ff64c81c1ac993c5
---

{{APIRef("Popover API")}}

Der **`ToggleEvent()`** Konstruktor erstellt ein neues {{domxref("ToggleEvent")}} Objekt.

## Syntax

```js-nolint
new ToggleEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `ToggleEvent` ist dies immer `toggle`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `newState`
      - : Ein String, der den Zustand darstellt, zu dem das Element wechselt. Mögliche Werte sind `"open"` und `"closed"`.
    - `oldState`
      - : Ein String, der den Zustand darstellt, von dem das Element wechselt. Mögliche Werte sind `"open"` und `"closed"`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `ToggleEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis eines relevanten Ereignisses aufgerufen wird.

Zum Beispiel:

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
