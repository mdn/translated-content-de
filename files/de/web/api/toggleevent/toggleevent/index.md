---
title: "ToggleEvent: ToggleEvent() Konstruktor"
short-title: ToggleEvent()
slug: Web/API/ToggleEvent/ToggleEvent
l10n:
  sourceCommit: 81407b5d512b0429332fda450aa39340493f390d
---

{{APIRef("Popover API")}}

Der **`ToggleEvent()`** Konstruktor erstellt ein neues [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Objekt.

## Syntax

```js-nolint
new ToggleEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events darstellt. Im Falle von `ToggleEvent` ist dies immer `beforetoggle` oder `toggle`.
- `init` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `newState` {{optional_inline}}
      - : Ein String, der den Zustand darstellt, zu dem das Element wechselt. Kann jeden Wert annehmen, aber von Browsern ausgelöste Ereignisse setzen dies auf `"open"` oder `"closed"`. Standardmäßig `""`.
    - `oldState` {{optional_inline}}
      - : Ein String, der den Zustand darstellt, von dem das Element wechselt. Kann jeden Wert annehmen, aber von Browsern ausgelöste Ereignisse setzen dies auf `"open"` oder `"closed"`. Standardmäßig `""`.
    - `source` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element), das das HTML-Popover-Steuerelement darstellt, das das Umschalten initiiert hat. Standardmäßig `null`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `ToggleEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis eines relevanten Ereignisses ausgelöst wird.

Zum Beispiel:

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
    if (event.source) {
      console.log("Initiated by:", event.source);
    }
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
