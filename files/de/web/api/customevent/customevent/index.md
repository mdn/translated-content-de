---
title: "CustomEvent: CustomEvent() Konstruktor"
short-title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
l10n:
  sourceCommit: 14aec55e57117d0dc4a916112e23d310908e9937
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`CustomEvent()`** Konstruktor erstellt ein neues [`CustomEvent`](/de/docs/Web/API/CustomEvent) Objekt.

## Syntax

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses angibt. Ereignisnamen sind groß- und kleinschreibungssensitiv.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Ein ereignisabhängiger Wert, der mit dem Ereignis verknüpft ist. Dieser Wert ist dann im Handler über die [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) Eigenschaft verfügbar.
        Standardmäßig ist er `null`.

### Rückgabewert

Ein neues [`CustomEvent`](/de/docs/Web/API/CustomEvent) Objekt.

## Beispiel

```js
// create custom events
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

const element = document.createElement("div"); // create a <div> element

// add an appropriate event listener
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console
```

Zusätzliche Beispiele finden Sie unter [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
